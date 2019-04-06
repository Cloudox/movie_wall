
var file_title = ""
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
  var pair = vars[i].split("=");
  if(pair[0] == "movie")
    movie = pair[1];
}

// file_title = 'Live';
loadXML(movie);
function loadXML(movie) {
  $.ajax({  
      url: '/static/movies/'+movie+'/'+movie+'.nfo',
      type: 'GET',
      dataType: 'xml',
      success: function(data, textStatus, jqXHR) {
          document.getElementById("movie_img").src = '/static/movies/'+movie+'/'+movie+'.webp';

          var title = $(data).find('title').text();
          // alert(title)
          document.getElementById("content_title_id").innerHTML=title;
          // var actor = 'Actor: ' + $(data).find('actor').find('name').text();
          // $('content_actor_id').text(actor);
          var actor = "Actor: "
          $(data).find('actor').each(function(i) {
              actor_i = $(this).children('name').text();
              // alert(i)
              actor = actor + " " + actor_i;
          });
          document.getElementById("content_actor_id").innerHTML=actor;

          var release = '出品时间: ' + $(data).find('release').text();
          document.getElementById("content_release_id").innerHTML=release;
          
          var runtime = '时长: ' + $(data).find('runtime').text() + ' 分钟';
          document.getElementById("content_runtime_id").innerHTML=runtime;

          var outline = '大纲: ' + $(data).find('outline').text();
          document.getElementById("content_outline_id").innerHTML=outline;

          var plot = '情节: ' + $(data).find('plot').text();
          document.getElementById("content_plot_id").innerHTML=plot;
          
          document.getElementById("content_cover_id").href='/static/movies/'+movie +'/'+movie+'.jpg';

          var website = $(data).find('website').text();
          document.getElementById("content_website_id").innerHTML=website;
          document.getElementById("content_website_id").href=website;
      },error: function(jqXHR, textStatus, errorThrown) {//读取失败时
          alert("error")
      }

  });
}




// UrlParam = function() { // url参数
//     var data, index;    
//     (function init() {    
//       data = [];    //值，如[["1","2"],["zhangsan"],["lisi"]]
//       index = {};   //键:索引，如{a:0,b:1,c:2}
//       var u = window.location.search.substr(1);    
//       if (u != '') {    
//         var params = decodeURIComponent(u).split('&');
//         for (var i = 0, len = params.length; i < len; i++) {
//           if (params[i] != '') {
//             var p = params[i].split("=");
//             if (p.length == 1 || (p.length == 2 && p[1] == '')) {// p | p= | =
//               data.push(['']);    
//               index[p[0]] = data.length - 1;    
//             } else if (typeof(p[0]) == 'undefined' || p[0] == '') { // =c 舍弃
//               continue;
//             } else if (typeof(index[p[0]]) == 'undefined') { // c=aaa    
//               data.push([p[1]]);    
//               index[p[0]] = data.length - 1;    
//             } else {// c=aaa    
//               data[index[p[0]]].push(p[1]);    
//             }    
//           }    
//         }    
//       }    
//     })();    
//     return {    
//       // 获得参数,类似request.getParameter()    
//       param : function(o) { // o: 参数名或者参数次序
//         try {    
//           return (typeof(o) == 'number' ? data[o][0] : data[index[o]][0]);    
//         } catch (e) {    
//         }    
//       },    
//       //获得参数组, 类似request.getParameterValues()    
//       paramValues : function(o) { //  o: 参数名或者参数次序
//         try {    
//           return (typeof(o) == 'number' ? data[o] : data[index[o]]);    
//         } catch (e) {}    
//       },    
//       //是否含有paramName参数
//       hasParam : function(paramName) {
//         return typeof(paramName) == 'string' ? typeof(index[paramName]) != 'undefined' : false;
//       },    
//       // 获得参数Map ,类似request.getParameterMap()    
//       paramMap : function() {
//         var map = {};    
//         try {    
//           for (var p in index) {  map[p] = data[index[p]];  }    
//         } catch (e) {}    
//         return map;    
//       }    
//     }    
// }();