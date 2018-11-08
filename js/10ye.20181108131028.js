(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-19 .slide0').hasAttr('src')) { a='src'; } $('.js-19 .slide0').attr(a, (dpi>1) ? 'images/1-1-1484-2.jpg' : 'images/1-1-742-2.jpg');
var a='data-src'; if($('.js-19 .slide1').hasAttr('src')) { a='src'; } $('.js-19 .slide1').attr(a, (dpi>1) ? 'images/1-2-1484-2.jpg' : 'images/1-2-742-2.jpg');
var a='data-src'; if($('.js-19 .slide2').hasAttr('src')) { a='src'; } $('.js-19 .slide2').attr(a, (dpi>1) ? 'images/1-3-1484-1.jpg' : 'images/1-3-742-1.jpg');
var a='data-src'; if($('.js-19 .slide3').hasAttr('src')) { a='src'; } $('.js-19 .slide3').attr(a, (dpi>1) ? 'images/1-4-1484-1.jpg' : 'images/1-4-742-1.jpg');
var a='data-src'; if($('.js-19 .slide4').hasAttr('src')) { a='src'; } $('.js-19 .slide4').attr(a, (dpi>1) ? 'images/1-5-1484-1.jpg' : 'images/1-5-742-1.jpg');
var a='data-src'; if($('.js-19 .slide5').hasAttr('src')) { a='src'; } $('.js-19 .slide5').attr(a, (dpi>1) ? 'images/1-6-1484-1.jpg' : 'images/1-6-742-1.jpg');
var a='data-src'; if($('.js-19 .slide6').hasAttr('src')) { a='src'; } $('.js-19 .slide6').attr(a, (dpi>1) ? 'images/1-7-1484-1.jpg' : 'images/1-7-742-1.jpg');
var a='data-src'; if($('.js-19 .slide7').hasAttr('src')) { a='src'; } $('.js-19 .slide7').attr(a, (dpi>1) ? 'images/1-8-1484-1.jpg' : 'images/1-8-742-1.jpg');
var a='data-src'; if($('.js-19 .slide8').hasAttr('src')) { a='src'; } $('.js-19 .slide8').attr(a, (dpi>1) ? 'images/1-9-1484-1.jpg' : 'images/1-9-742-1.jpg');}else{var a='data-src'; if($('.js-19 .slide0').hasAttr('src')) { a='src'; } $('.js-19 .slide0').attr(a, (dpi>1) ? 'images/1-1-432-2.jpg' : 'images/1-1-216-2.jpg');
var a='data-src'; if($('.js-19 .slide1').hasAttr('src')) { a='src'; } $('.js-19 .slide1').attr(a, (dpi>1) ? 'images/1-2-432-2.jpg' : 'images/1-2-216-2.jpg');
var a='data-src'; if($('.js-19 .slide2').hasAttr('src')) { a='src'; } $('.js-19 .slide2').attr(a, (dpi>1) ? 'images/1-3-432-1.jpg' : 'images/1-3-216-1.jpg');
var a='data-src'; if($('.js-19 .slide3').hasAttr('src')) { a='src'; } $('.js-19 .slide3').attr(a, (dpi>1) ? 'images/1-4-432-1.jpg' : 'images/1-4-216-1.jpg');
var a='data-src'; if($('.js-19 .slide4').hasAttr('src')) { a='src'; } $('.js-19 .slide4').attr(a, (dpi>1) ? 'images/1-5-432-1.jpg' : 'images/1-5-216-1.jpg');
var a='data-src'; if($('.js-19 .slide5').hasAttr('src')) { a='src'; } $('.js-19 .slide5').attr(a, (dpi>1) ? 'images/1-6-432-1.jpg' : 'images/1-6-216-1.jpg');
var a='data-src'; if($('.js-19 .slide6').hasAttr('src')) { a='src'; } $('.js-19 .slide6').attr(a, (dpi>1) ? 'images/1-7-432-1.jpg' : 'images/1-7-216-1.jpg');
var a='data-src'; if($('.js-19 .slide7').hasAttr('src')) { a='src'; } $('.js-19 .slide7').attr(a, (dpi>1) ? 'images/1-8-432-1.jpg' : 'images/1-8-216-1.jpg');
var a='data-src'; if($('.js-19 .slide8').hasAttr('src')) { a='src'; } $('.js-19 .slide8').attr(a, (dpi>1) ? 'images/1-9-432-1.jpg' : 'images/1-9-216-1.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-19 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: true,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});
});