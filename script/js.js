/******************************
.search > index.html > main
*******************************/

function openSearch(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("search-country");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("choices");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	 
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*******************************
owl-carousel
*******************************/

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:3,
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

});

/*********************
nav-bar-button
**********************/
function myFunction(x) {
    x.classList.toggle("change");
}

/*********************
preloader
*********************/
document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('preloader');
        var loader = document.getElementsByClassName('ring');
		var bod = document.getSelection('::-webkit-scrollbar');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
			
		}
	} , 200)
}


/*************************
scroll-up
*************************/
var initVelocity = 1;
var scrollVertical = 0;
function up(){
	if(scrollVertical <= 0)
		return;
	initVelocity = scrollVertical/10;
	scrollVertical = scrollVertical - (0.5 * initVelocity);
	window.scroll(0, scrollVertical);
	setTimeout(up, 6);
}

window.onscroll = function Scroll(){
	scrollVertical = window.scrollY;
	up.innerHTML = scrollVertical;
    i = window.scrollY;
	
addClassCircle();
}

/****************************
circle-add-class-activeCircle
*****************************/
function addClassCircle(){
	var circle = document.getElementById('circle');
	var pageY = window.pageYOffset;
	
	if(pageY > 500){
		circle.classList.add('activeCircle');
	}else{
		circle.classList.remove('activeCircle');
	}
}


/**********************************
my-account
***********************************/
/*var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

/***********************************
new-account
************************************/

/*var modal2 = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}*/








