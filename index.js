var Menuu = document.getElementById("controls");
var bg = document.getElementById("background");
var divDesc = document.getElementById("divdesc");
var desctext = document.getElementById("desc");
var title = document.getElementById("divtitle");
var titletext = document.getElementById("title");
var bgtext = document.getElementById("bgimg");
var disp = document.getElementById("background")
var colors = document.getElementById("coldiv");
var divtitle = document.getElementById("divtitle");
var divdesc = document.getElementById("divdesc");

function changeColor(){
    xd = colors.value;
    divtitle.style.color = xd;
    divdesc.style.color = xd;
    divtitle.style.bordercolor = xd;
}

function expandMenu(){
    Menuu.style.bottom = 10 +"%";
}
function changeDescription(ev){
	if(ev.keyCode == 13){
        var xd = desctext.value;
		divDesc.innerHTML = xd ;
    }
}
function changeTitle(ev){
    if(ev.keyCode == 13){
        var xd = titletext.value;
        title.innerHTML = xd
    }
}

function changeBG(ev){
    if(ev.keyCode == 13){
        var xd = bgtext.value;
        if(bgtext.value == "horse"){
            disp.style.backgroundImage = "url(img/bg1.jpg)";
        } else if(bgtext.value == "night"){
            disp.style.backgroundImage = "url(img/bg2.jpg)";
        } else if(bgtext.value == "mountain"){
            disp.style.backgroundImage = "url(img/bg3.jpg)";
        } else if(xd.indexOf("epic") >-1){
            disp.style.backgroundImage = "url(img/bg4.jpg)";
        } else{
            disp.style.backgroundImage = 'url('+xd+')';
        }
    }
}

colors.addEventListener("change", function(){
    changeColor();
});

document.getElementById("menubut").addEventListener("click", function(){
	expandMenu()
});
desctext.addEventListener("keyup", function(ev){
	changeDescription(ev);
});

titletext.addEventListener("keyup", function(ev){
	changeTitle(ev);
});
bgtext.addEventListener("keyup", function(ev){
    changeBG(ev);
});
