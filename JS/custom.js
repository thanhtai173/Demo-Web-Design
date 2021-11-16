// Shrinking the navbar when scrolling and fixed chủ đề in blogs
window.onscroll = function(){Scroll0()};

var header = document.getElementById("myBlogsTab");
var rect_space50id= document.getElementById("space50id").getBoundingClientRect();
var height_myBlogsTab = header.clientHeight;
var top_space50id = rect_space50id.top;

var nooverlap;


var heightbanner = document.getElementById("banner").clientHeight;
var heightspace50 = document.getElementById("space50").clientHeight; 
var heightspace25 = document.getElementById("space25").clientHeight; 
var heighth1timkiem = document.getElementById("h1-timkiem").clientHeight; 
var heightformsearch = document.getElementById("form-search").clientHeight;
var heightwithoutpadding = heightbanner + heightspace50 + heighth1timkiem + heightformsearch + heightspace25;
var heighttotal;

function Scroll0(){
	// Resize navbar
	if($(window).width()>992){  
		if((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) { 
			document.getElementById("OnTopNav").style.display = "none";
			document.getElementById("HeightNav").style.cssText = 'height: 80px';
			document.getElementById("LogoGF").style.cssText = 'display:none';
			document.getElementById("SmallLogo").style.cssText = 'opacity:1;margin:0;padding:0';				
			document.getElementById("NavPad").style.cssText= 'margin-top:0px';	
			heighttotal = heightwithoutpadding + 150;
		}else{
			document.getElementById("OnTopNav").style.display = "block";
			document.getElementById("HeightNav").style.cssText = 'height: 100px';
			document.getElementById("LogoGF").style.cssText = 'display:block';	
			document.getElementById("SmallLogo").style.cssText = 'opacity:0';		
			document.getElementById("NavPad").style.cssText = 'padding-top:25px';				
		}
	}
	
	nooverlap = (height_myBlogsTab < (top_space50id - $(window).scrollTop() - 40));
	
	if($(window).width()>992){ 
		heighttotal = heightwithoutpadding + 150;
		if ((document.body.scrollTop > heighttotal || document.documentElement.scrollTop > heighttotal ) && (nooverlap == true)) 
		{
			header.classList.add("sticky"); // fixed
		}else{
			header.classList.remove("sticky") 
		}
	}
	
	if($(window).width() < 992 && $(window).width()>762){
		heighttotal = heightwithoutpadding + 50;
		if ((document.body.scrollTop > heighttotal || document.documentElement.scrollTop > heighttotal ) && (nooverlap == true)) 
		{
			header.classList.add("sticky"); // fixed
		}else{
			header.classList.remove("sticky"); // remove fixed
		}
	}
	
	if((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) { // size will be changed later
			document.getElementById("divbuttontop").style.display="block";
	} else {
			document.getElementById("divbuttontop").style.display="none";		
	}
}

// Move to top function for tab in blog
var height3elements = heightbanner + heightspace50; // pc
var height3elementsip = heightbanner - 80; // ip - ipad
var height3elementsp = heightbanner + 45 ; // p - phone
function topFunction() {
	if($(window).width()>992){ 	
		document.body.scrollTop = height3elements; // For Safari
		document.documentElement.scrollTop = height3elements; // For Chrome, Firefox, IE and Opera
	} else if($(window).width()<992 && $(window).width()>762){
		document.body.scrollTop = height3elementsip; // For Safari
		document.documentElement.scrollTop = height3elementsip; // For Chrome, Firefox, IE and Opera		
	} else {
		document.body.scrollTop = height3elementsp; // For Safari
		document.documentElement.scrollTop = height3elementsp; // For Chrome, Firefox, IE and Opera
	}
}

function topPage(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	header.classList.remove("sticky"); // remove fixed	
}

// Trigger active tabs in blogs when clicking to link on other pages
jQuery(document).ready(function ($) {
	let selectedTab = window.location.hash;
    $('.nav-link-1[href="' + selectedTab + '"]' ).trigger('click');
    $('.nav-link-2[href="' + selectedTab + '"]' ).trigger('click');	
})



