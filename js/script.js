function open1(){
	document.getElementById("img1").style.display = "block";
	document.getElementById("img2").style.display = "none";
	document.getElementById("menu").style.display = "none";
	document.getElementById("img3").style.display = "none";
	document.getElementById("shadow").style.display = "block";

}
function open2(){
	document.getElementById("img1").style.display = "none";
	document.getElementById("img2").style.display = "block";
	document.getElementById("img3").style.display = "none";
	document.getElementById("shadow").style.display = "block";
	document.getElementById("menu").style.display = "none";
}
function open3(){
	document.getElementById("img1").style.display = "none";
	document.getElementById("img2").style.display = "none";
	document.getElementById("img3").style.display = "block";
	document.getElementById("shadow").style.display = "block";
	document.getElementById("menu").style.display = "none";
}
function exit(){
	document.getElementById("img1").style.display = "none";
	document.getElementById("img2").style.display = "none";
	document.getElementById("img3").style.display = "none";
	document.getElementById("shadow").style.display = "none";
	document.getElementById("menu").style.display = "block";
}