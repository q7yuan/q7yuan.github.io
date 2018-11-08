(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-27 .slide0').hasAttr('src')) { a='src'; } $('.js-27 .slide0').attr(a, (dpi>1) ? 'images/3-1-1484.jpg' : 'images/3-1-742.jpg');
var a='data-src'; if($('.js-27 .slide1').hasAttr('src')) { a='src'; } $('.js-27 .slide1').attr(a, (dpi>1) ? 'images/3-2-1484.jpg' : 'images/3-2-742.jpg');
var a='data-src'; if($('.js-27 .slide2').hasAttr('src')) { a='src'; } $('.js-27 .slide2').attr(a, (dpi>1) ? 'images/3-3-1484.jpg' : 'images/3-3-742.jpg');
var a='data-src'; if($('.js-27 .slide3').hasAttr('src')) { a='src'; } $('.js-27 .slide3').attr(a, (dpi>1) ? 'images/3-4-1484.jpg' : 'images/3-4-742.jpg');
var a='data-src'; if($('.js-27 .slide4').hasAttr('src')) { a='src'; } $('.js-27 .slide4').attr(a, (dpi>1) ? 'images/3-5-1484.jpg' : 'images/3-5-742.jpg');
var a='data-src'; if($('.js-27 .slide5').hasAttr('src')) { a='src'; } $('.js-27 .slide5').attr(a, (dpi>1) ? 'images/3-6-1484.jpg' : 'images/3-6-742.jpg');
var a='data-src'; if($('.js-27 .slide6').hasAttr('src')) { a='src'; } $('.js-27 .slide6').attr(a, (dpi>1) ? 'images/3-7-1484.jpg' : 'images/3-7-742.jpg');
var a='data-src'; if($('.js-27 .slide7').hasAttr('src')) { a='src'; } $('.js-27 .slide7').attr(a, (dpi>1) ? 'images/3-8-1484.jpg' : 'images/3-8-742.jpg');
var a='data-src'; if($('.js-27 .slide8').hasAttr('src')) { a='src'; } $('.js-27 .slide8').attr(a, (dpi>1) ? 'images/3-9-1484.jpg' : 'images/3-9-742.jpg');
var a='data-src'; if($('.js-27 .slide9').hasAttr('src')) { a='src'; } $('.js-27 .slide9').attr(a, (dpi>1) ? 'images/3-10-1484.jpg' : 'images/3-10-742.jpg');
var a='data-src'; if($('.js-27 .slide10').hasAttr('src')) { a='src'; } $('.js-27 .slide10').attr(a, (dpi>1) ? 'images/3-11-1484.jpg' : 'images/3-11-742.jpg');
var a='data-src'; if($('.js-27 .slide11').hasAttr('src')) { a='src'; } $('.js-27 .slide11').attr(a, (dpi>1) ? 'images/3-12-1484.jpg' : 'images/3-12-742.jpg');
var a='data-src'; if($('.js-27 .slide12').hasAttr('src')) { a='src'; } $('.js-27 .slide12').attr(a, (dpi>1) ? 'images/3-13-1484.jpg' : 'images/3-13-742.jpg');
var a='data-src'; if($('.js-27 .slide13').hasAttr('src')) { a='src'; } $('.js-27 .slide13').attr(a, (dpi>1) ? 'images/3-14-1484.jpg' : 'images/3-14-742.jpg');
var a='data-src'; if($('.js-27 .slide14').hasAttr('src')) { a='src'; } $('.js-27 .slide14').attr(a, (dpi>1) ? 'images/3-15-1484.jpg' : 'images/3-15-742.jpg');
var a='data-src'; if($('.js-27 .slide15').hasAttr('src')) { a='src'; } $('.js-27 .slide15').attr(a, (dpi>1) ? 'images/3-16-1484.jpg' : 'images/3-16-742.jpg');}else{var a='data-src'; if($('.js-27 .slide0').hasAttr('src')) { a='src'; } $('.js-27 .slide0').attr(a, (dpi>1) ? 'images/3-1-432.jpg' : 'images/3-1-216.jpg');
var a='data-src'; if($('.js-27 .slide1').hasAttr('src')) { a='src'; } $('.js-27 .slide1').attr(a, (dpi>1) ? 'images/3-2-432.jpg' : 'images/3-2-216.jpg');
var a='data-src'; if($('.js-27 .slide2').hasAttr('src')) { a='src'; } $('.js-27 .slide2').attr(a, (dpi>1) ? 'images/3-3-432.jpg' : 'images/3-3-216.jpg');
var a='data-src'; if($('.js-27 .slide3').hasAttr('src')) { a='src'; } $('.js-27 .slide3').attr(a, (dpi>1) ? 'images/3-4-432.jpg' : 'images/3-4-216.jpg');
var a='data-src'; if($('.js-27 .slide4').hasAttr('src')) { a='src'; } $('.js-27 .slide4').attr(a, (dpi>1) ? 'images/3-5-432.jpg' : 'images/3-5-216.jpg');
var a='data-src'; if($('.js-27 .slide5').hasAttr('src')) { a='src'; } $('.js-27 .slide5').attr(a, (dpi>1) ? 'images/3-6-432.jpg' : 'images/3-6-216.jpg');
var a='data-src'; if($('.js-27 .slide6').hasAttr('src')) { a='src'; } $('.js-27 .slide6').attr(a, (dpi>1) ? 'images/3-7-432.jpg' : 'images/3-7-216.jpg');
var a='data-src'; if($('.js-27 .slide7').hasAttr('src')) { a='src'; } $('.js-27 .slide7').attr(a, (dpi>1) ? 'images/3-8-432.jpg' : 'images/3-8-216.jpg');
var a='data-src'; if($('.js-27 .slide8').hasAttr('src')) { a='src'; } $('.js-27 .slide8').attr(a, (dpi>1) ? 'images/3-9-432.jpg' : 'images/3-9-216.jpg');
var a='data-src'; if($('.js-27 .slide9').hasAttr('src')) { a='src'; } $('.js-27 .slide9').attr(a, (dpi>1) ? 'images/3-10-432.jpg' : 'images/3-10-216.jpg');
var a='data-src'; if($('.js-27 .slide10').hasAttr('src')) { a='src'; } $('.js-27 .slide10').attr(a, (dpi>1) ? 'images/3-11-432.jpg' : 'images/3-11-216.jpg');
var a='data-src'; if($('.js-27 .slide11').hasAttr('src')) { a='src'; } $('.js-27 .slide11').attr(a, (dpi>1) ? 'images/3-12-432.jpg' : 'images/3-12-216.jpg');
var a='data-src'; if($('.js-27 .slide12').hasAttr('src')) { a='src'; } $('.js-27 .slide12').attr(a, (dpi>1) ? 'images/3-13-432.jpg' : 'images/3-13-216.jpg');
var a='data-src'; if($('.js-27 .slide13').hasAttr('src')) { a='src'; } $('.js-27 .slide13').attr(a, (dpi>1) ? 'images/3-14-432.jpg' : 'images/3-14-216.jpg');
var a='data-src'; if($('.js-27 .slide14').hasAttr('src')) { a='src'; } $('.js-27 .slide14').attr(a, (dpi>1) ? 'images/3-15-432.jpg' : 'images/3-15-216.jpg');
var a='data-src'; if($('.js-27 .slide15').hasAttr('src')) { a='src'; } $('.js-27 .slide15').attr(a, (dpi>1) ? 'images/3-16-432.jpg' : 'images/3-16-216.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-27 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: true,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});
});