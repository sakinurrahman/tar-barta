(function ($) {
"use strict";




// $(window).on('scroll', function () {
// 	var scroll = $(window).scrollTop();
// 	if (scroll < 245) {
// 		$(".header-sticky").removeClass("sticky");
// 	} else {
// 		$(".header-sticky").addClass("sticky");
// 	}
// });


// // WOW active
// new WOW().init();


// Navigation JS
$(".mobile-menu-icon .fa-bars ").click(function(){
   $(".mobile-menu").addClass("show-nav");
   $(".overlay").removeClass("d-none");
})

$(".mobile-menu .fa-times ").click(function(){
	$(".mobile-menu").removeClass("show-nav");
	$(".overlay").addClass("d-none");
 })

 $(".overlay").click(function(){
	$(".mobile-menu").removeClass("show-nav");
	$(".overlay").addClass("d-none");
 })


 //Owl 
 $('.owl-carousel').owlCarousel({
    margin:10,
	autoplay: false,
    responsiveClass:true,
	loop: true,
	margin:20,
	nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	dots:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})


$(".set > a").on("click", function(e) {
	e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });


})(jQuery);