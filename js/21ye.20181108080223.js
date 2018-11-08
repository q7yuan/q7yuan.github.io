(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-25 .slide0').hasAttr('src')) { a='src'; } $('.js-25 .slide0').attr(a, (dpi>1) ? 'images/2-1-1484-1.jpg' : 'images/2-1-742-1.jpg');
var a='data-src'; if($('.js-25 .slide1').hasAttr('src')) { a='src'; } $('.js-25 .slide1').attr(a, (dpi>1) ? 'images/2-2-1484-1.jpg' : 'images/2-2-742-1.jpg');
var a='data-src'; if($('.js-25 .slide2').hasAttr('src')) { a='src'; } $('.js-25 .slide2').attr(a, (dpi>1) ? 'images/2-3-1484.jpg' : 'images/2-3-742.jpg');
var a='data-src'; if($('.js-25 .slide3').hasAttr('src')) { a='src'; } $('.js-25 .slide3').attr(a, (dpi>1) ? 'images/2-4-1484.jpg' : 'images/2-4-742.jpg');
var a='data-src'; if($('.js-25 .slide4').hasAttr('src')) { a='src'; } $('.js-25 .slide4').attr(a, (dpi>1) ? 'images/2-5-1484.jpg' : 'images/2-5-742.jpg');
var a='data-src'; if($('.js-25 .slide5').hasAttr('src')) { a='src'; } $('.js-25 .slide5').attr(a, (dpi>1) ? 'images/2-6-1484.jpg' : 'images/2-6-742.jpg');
var a='data-src'; if($('.js-25 .slide6').hasAttr('src')) { a='src'; } $('.js-25 .slide6').attr(a, (dpi>1) ? 'images/2-7-1484.jpg' : 'images/2-7-742.jpg');
var a='data-src'; if($('.js-25 .slide7').hasAttr('src')) { a='src'; } $('.js-25 .slide7').attr(a, (dpi>1) ? 'images/2-8-1484.jpg' : 'images/2-8-742.jpg');
var a='data-src'; if($('.js-25 .slide8').hasAttr('src')) { a='src'; } $('.js-25 .slide8').attr(a, (dpi>1) ? 'images/2-9-1484.jpg' : 'images/2-9-742.jpg');
var a='data-src'; if($('.js-25 .slide9').hasAttr('src')) { a='src'; } $('.js-25 .slide9').attr(a, (dpi>1) ? 'images/2-10-1484.jpg' : 'images/2-10-742.jpg');
var a='data-src'; if($('.js-25 .slide10').hasAttr('src')) { a='src'; } $('.js-25 .slide10').attr(a, (dpi>1) ? 'images/2-11-1484.jpg' : 'images/2-11-742.jpg');}else{var a='data-src'; if($('.js-25 .slide0').hasAttr('src')) { a='src'; } $('.js-25 .slide0').attr(a, (dpi>1) ? 'images/2-1-432-1.jpg' : 'images/2-1-216-1.jpg');
var a='data-src'; if($('.js-25 .slide1').hasAttr('src')) { a='src'; } $('.js-25 .slide1').attr(a, (dpi>1) ? 'images/2-2-432-1.jpg' : 'images/2-2-216-1.jpg');
var a='data-src'; if($('.js-25 .slide2').hasAttr('src')) { a='src'; } $('.js-25 .slide2').attr(a, (dpi>1) ? 'images/2-3-432.jpg' : 'images/2-3-216.jpg');
var a='data-src'; if($('.js-25 .slide3').hasAttr('src')) { a='src'; } $('.js-25 .slide3').attr(a, (dpi>1) ? 'images/2-4-432.jpg' : 'images/2-4-216.jpg');
var a='data-src'; if($('.js-25 .slide4').hasAttr('src')) { a='src'; } $('.js-25 .slide4').attr(a, (dpi>1) ? 'images/2-5-432.jpg' : 'images/2-5-216.jpg');
var a='data-src'; if($('.js-25 .slide5').hasAttr('src')) { a='src'; } $('.js-25 .slide5').attr(a, (dpi>1) ? 'images/2-6-432.jpg' : 'images/2-6-216.jpg');
var a='data-src'; if($('.js-25 .slide6').hasAttr('src')) { a='src'; } $('.js-25 .slide6').attr(a, (dpi>1) ? 'images/2-7-432.jpg' : 'images/2-7-216.jpg');
var a='data-src'; if($('.js-25 .slide7').hasAttr('src')) { a='src'; } $('.js-25 .slide7').attr(a, (dpi>1) ? 'images/2-8-432.jpg' : 'images/2-8-216.jpg');
var a='data-src'; if($('.js-25 .slide8').hasAttr('src')) { a='src'; } $('.js-25 .slide8').attr(a, (dpi>1) ? 'images/2-9-432.jpg' : 'images/2-9-216.jpg');
var a='data-src'; if($('.js-25 .slide9').hasAttr('src')) { a='src'; } $('.js-25 .slide9').attr(a, (dpi>1) ? 'images/2-10-432.jpg' : 'images/2-10-216.jpg');
var a='data-src'; if($('.js-25 .slide10').hasAttr('src')) { a='src'; } $('.js-25 .slide10').attr(a, (dpi>1) ? 'images/2-11-432.jpg' : 'images/2-11-216.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-25 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: true,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});
});