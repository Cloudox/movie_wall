
function make_div(reply_data) {
    console.log(reply_data)
    grid_div = document.getElementById("grid");
    movies =  reply_data.split(",");

    for (var i = 0; i < movies.length; i++) {
        movie = movies[i];
        console.log(movie)
        alink = document.createElement("a");
        alink.style.cssText +="text-decoration: none;";
        alink.href = "./detail.html?movie=" + movie;
        grid_div.appendChild(alink);
        div = document.createElement("div");
        div.className = "box";
        alink.appendChild(div);
        img = document.createElement("img");
        img.className = "box_img";
        img.src = '/static/movies/'+movie+'/'+movie+'.webp';
        div.appendChild(img);
        label = document.createElement("label");
        label.className = "box_title";
        label.innerHTML = movie;
        div.appendChild(label);
    }
};


// file_title = 'Live'
// loadXML(file_title);
$.ajax({  
    url : "/find_dirs",
    type : 'GET',  
    //data : JSON.stringify(request),  
    //dataType : 'json',  
    //contentType : 'application/json;charset=UTF-8',  
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