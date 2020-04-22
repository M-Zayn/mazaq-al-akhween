
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  new WOW().init();
  
  
$(function() {


  $(".nav-bar .icons .search-icon .lnr-magnifier").on("click", function() {
    $(this).toggleClass("lnr-magnifier");
    $(this).toggleClass("lnr-cross");
    $(".nav-bar .zx-container .search").toggleClass("show");
    // $(".search-overlay").fadeIn();
  });
  // $(".search-overlay").on("click", function() {
  //   $(".nav-bar .search-popup").removeClass("show");
  //   $(this).fadeOut();
  // });
  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });


    // e.stopPropagation();

    




    
    $('.header .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:1,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });

    $('.most-sales .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:15,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:5
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });
    
    $('.sp-offers .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:15,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:5
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });
    
    
    
    // if ($(window).width() < 992) {
    //   $(".category .cat").wrapAll("<div class='owl-carousel'></div>");
    //   $('.category .owl-carousel').owlCarousel({
    //     rtl: document.dir == 'rtl' ? true : false,
    //     autoplay:true,
    //     loop:true,
    //     margin:10,
    //     dots:true,
    //     nav:false,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     },
    //   });
    // } else {

    // }
    

    
  

  // menu - search

    $(".nav-list ul li:nth-of-type(1)").on("click", function () {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .main-list").addClass("show");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .fixed-menu .menu-header .close").on("click", function () {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .main-list").removeClass("show");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });
    $(".fixed-menu .main-list .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    $(".fixed-menu .sub-list .slide-two").on("click", function(e) {
      e.stopPropagation();
    });
    $(".fixed-menu .sub-list .slide-two").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
    });


     if ($(window).width() < 992) {
       $(".footer .list-header").on("click", function() {
         $(this).toggleClass("active");
         $(this).siblings("ul").slideToggle();
       });
     
      } else {
        
      }

    

  
});
