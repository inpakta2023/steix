
// Counter Number

var a=0;$(window).scroll(function(){var t=$("#counter").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>t&&($(".counter-value").each(function(){var t=$(this),n=t.attr("data-count");$({countNum:t.text()}).animate({countNum:n},{duration:2e3,easing:"swing",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})}),a=1)});