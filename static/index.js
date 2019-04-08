var disk = ""
var menu = ""
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == "disk")
        disk = pair[1];
    if(pair[0] == "menu")
    menu = pair[1];
}

loadXML(disk, menu);

function make_div(reply_data) {
    // console.log(reply_data)
    grid_div = document.getElementById("grid");
    movies =  reply_data.split(";");

    for (var i = 0; i < movies.length; i++) {
        movie = movies[i];
        // console.log(movie)
        if (movie.charAt(0) == '[') {
            alink = document.createElement("a");
            alink.style.cssText +="text-decoration: none;";
            alink.href = "./detail.html?disk="+disk+"&menu="+menu+"&movie=" + movie;
            grid_div.appendChild(alink);
            div = document.createElement("div");
            div.className = "box";
            alink.appendChild(div);
            img = document.createElement("img");
            img.className = "box_img";
            img.src = '/static/movies/'+disk+'/'+menu+'/'+movie+'/'+movie+'.png';
            div.appendChild(img);
            label = document.createElement("label");
            label.className = "box_title";
            label.innerHTML = movie;
            div.appendChild(label);
        } else {// 无信息和图片
            div = document.createElement("div");
            div.className = "box";
            grid_div.appendChild(div);
            img = document.createElement("img");
            img.className = "box_img";
            img_num = Math.floor(Math.random()*10); // 0~9的随机整数
            img.src = '/static/img/for_no_info/'+img_num.toString()+'.jpg';
            div.appendChild(img);
            label = document.createElement("label");
            label.className = "box_title";
            label.innerHTML = movie;
            div.appendChild(label);
        }
        
    }
};




function loadXML(disk, menu) {
    $.ajax({  
        url : "/find_dirs?disk="+disk+"&menu="+menu,
        type : 'GET',  
        //data : JSON.stringify(request),  
        //dataType : 'json',  
        contentType : 'application/json;charset=UTF-8',  
        success : function(reply_data, status, xhr) {  
            // alert(reply_data);
            // img_name = reply_data.split(",")[0];
            // document.getElementById('img1').src = '/static/movies/'+img_name+'/'+img_name+'.png';
            // document.getElementById('label1').innerHTML = img_name;
    
            // img_name = reply_data.split(",")[1];
            // document.getElementById('img2').src = '/static/movies/'+img_name+'/'+img_name+'.png';
            // document.getElementById('label2').innerHTML = img_name;
            make_div(reply_data);
        },  
        Error : function(xhr, error, exception) {  
            // handle the error.    
            alert(exception.toString());  
        }  
    });
}
