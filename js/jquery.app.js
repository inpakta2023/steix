/* Theme Name: Steix - Responsive Landing Page Template
   Author: Themesbrand
   Version: 1.0.0
   File Description: Main JS file of the template
*/

$(function(){"use strict";$(window).scroll(function(){$(window).scrollTop()>=40?$(".sticky").addClass("darkheader"):$(".sticky").removeClass("darkheader")}),$(".video-play-icon").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".navigation-menu a").on("click",function(a){var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top-0},1500,"easeInOutExpo"),a.preventDefault()}),$("#navigation").scrollspy({offset:50})});