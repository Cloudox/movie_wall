
var disk = ""
var menu = ""
var movie = ""
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == "disk")
        disk = pair[1];
    if(pair[0] == "menu")
        menu = pair[1];
    if(pair[0] == "movie")
        movie = pair[1];
}

// file_title = 'Live';
loadXML(disk, menu, movie);
function loadXML(disk, menu, movie) {
    $.ajax({  
        url: '/static/movies/'+disk+'/'+menu+'/'+movie+'/'+movie+'.nfo',
        type: 'GET',
        dataType: 'xml',
        success: function(data, textStatus, jqXHR) {
            document.getElementById("movie_img").src = '/static/movies/'+disk+'/'+menu+'/'+movie+'/'+movie+'.png';

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

            var location = '视频位置: '+disk+' -> '+menu+' -> '+$(data).find('num').text();
            document.getElementById("content_location_id").innerHTML=location;
            
            document.getElementById("content_cover_id").href='/static/movies/'+disk+'/'+menu+'/'+movie+'/'+movie+'.jpg';

            var website = $(data).find('website').text();
            document.getElementById("content_website_id").innerHTML=website;
            document.getElementById("content_website_id").href=website;
        },error: function(jqXHR, textStatus, errorThrown) {//读取失败时
            alert("error")
        }

    });
}