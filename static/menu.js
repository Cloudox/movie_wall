var disk = "Adata"
adata_btn_click()

function make_div(reply_data) {
    // console.log(reply_data)
    grid_div = document.getElementById("grid");
    grid_div.innerHTML = "";
    menus =  reply_data.split(";");

    for (var i = 0; i < menus.length; i++) {
        menu = menus[i];
        var pattern = /\.{1}[a-z]{1,}$/;
        menu_name = menu.slice(0, pattern.exec(menu).index)
        alink = document.createElement("a");
        alink.style.cssText +="text-decoration: none;";
        alink.href = "./index.html?disk="+disk+"&menu="+menu_name;
        grid_div.appendChild(alink);
        div = document.createElement("div");
        div.className = "box";
        alink.appendChild(div);
        img = document.createElement("img");
        img.className = "box_img";
        img.src = '/static/menu/'+disk+'/'+menu;
        div.appendChild(img);
        label = document.createElement("label");
        label.className = "box_title";
        label.innerHTML = menu_name;
        div.appendChild(label);
    }
};


function adata_btn_click() {
    disk = "Adata";
    $.ajax({  
        url : "/get_disk_dirs?disk=Adata",
        type : 'GET',
        success : function(reply_data, status, xhr) { 
            make_div(reply_data);
        },  
        Error : function(xhr, error, exception) {  
            // handle the error.    
            alert(exception.toString());  
        }  
    });
};

function toshiba_btn_click() {
    disk = "Toshiba";
    $.ajax({  
        url : "/get_disk_dirs?disk="+disk,
        type : 'GET',
        success : function(reply_data, status, xhr) { 
            make_div(reply_data);
        },  
        Error : function(xhr, error, exception) {  
            // handle the error.    
            alert(exception.toString());  
        }  
    });
};