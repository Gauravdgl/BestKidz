$(function () {

    $(".scrolldown").click(function (){
        $('html, body').animate({
            scrollTop: $(".home-section2, .about-section2").offset().top
        }, 200);
    });


$(window).scroll(function(){
    var scroll = $(window).scrollTop();  
    if (scroll >= 150) {
        $("header").addClass("fixed");
    }else{
        $("header").removeClass("fixed");
    }
})


$('document').ready(function(){
    $('button.navbar-toggle').click(function(){
      var navbar_obj = $($(this).data("target"));
      navbar_obj.toggleClass("open");
    });
  });



$("#abt_btn").hover(function(){
    $('.home-about-inner').addClass('showCircle');
    }, function(){
        $('.home-about-inner').removeClass('showCircle');
  });



  $('.home-slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    nav:false,
    margin:0,
    stagepadding:50,
    dots:true,
    autoplay:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            autoplay:true,
            nav:false,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});




$('.learning-slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    nav:true,
    margin:30,
    stagepadding:50,
    dots:false,
    autoplay:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            autoplay:true,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});


$('.key-learning-slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay:false,
    nav:true,
    margin:30,
    center: true,
    dots:false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            autoplay:true,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});



$('.video_slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay:false,
    nav:true,
    margin:50,
    stagepadding:50,
    dots:false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            autoplay:true,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});





$(document).ready(function() {     
    var $videoSrc;  
    $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );      
    });
   
    $('#experience_model').on('shown.bs.modal', function (e) {
      
   
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
    })
      
    $('#experience_model').on('hide.bs.modal', function (e) {
      $("#video").attr('src',$videoSrc); 
    }) 
  
});






$('.home-testimonials .owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    nav:true,
    margin:30,
    stagepadding:50,
    dots:true,
    autoplay:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            autoplay:true,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});



$('.encriment-slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay:false,
    nav:true,
    margin:30,
    stagepadding:50,
    dots:false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});





$('.home-blog-slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    nav:false,
    margin:30,
    stagepadding:50,
    dots:true,
    dotsData: true,
    autoplay:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            autoplay:true,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});



$('.team_popup_slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    nav:true,
    margin:30,
    stagepadding:50,
    dots:false,
    dotsData: false,
    autoplay:false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagepadding:50,
            autoplay:true,
            loop:true,
        },
        600: {
            items: 1,
            stagepadding:100,
            loop:true,
        },
        990: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});



    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
          enabled:true
        },
    
      zoom: {
        enabled: true, 
    
        duration: 300, 
        easing: 'ease-in-out',
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });
    
  

    
$(function(){
    $('#infopopup').modal("show");
    
    // var overlay = $('<div id="overlay"></div>');
    // overlay.css('display','block');
    
    // overlay.appendTo(document.body);
    // $('.popup-onload').show();
    // $('.close').on('click',function(){
    //     $('.popup-onload').hide();
    //     overlay.appendTo(document.body).remove();
    //     return false;
    // });
    
    
     
    
    // $('.x').click(function(){
    // $('.popup').hide();
    //     overlay.appendTo(document.body).remove();
    //     return false;
    // });
    
});



// .navbar-collapse.open.in


      
    $(".navbar-collapse.open.in").each(function() {
      $(this)
        .siblings(".panel-heading")
        .find(".navbar-header")
        .addClass("active_part");
    });
  
    $(".collapse")
      .on("show.bs.collapse", function() {
        $(this)
          .parent()
          .find(".navbar-header")
          .addClass("active_part");
      })
      .on("hide.bs.collapse", function() {
        $(this)
          .parent()
          .find(".navbar-header")
          .removeClass("active_part");
      });
  


    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 0) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 





$(document).ready(function() {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
   
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: false,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="false"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="false"></i>'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: false,
            nav: false,
            autoplay:false,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="false"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="false"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 4,
            margin:10,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
     
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});




$(document).ready(function() {
      
    $(".collapse.in").each(function() {
      $(this)
        .siblings(".panel-heading")
        .find(".panel-title")
        .addClass("active_part");
    });
  
    $(".collapse")
      .on("show.bs.collapse", function() {
        $(this)
          .parent()
          .find(".panel-title")
          .addClass("active_part");
      })
      .on("hide.bs.collapse", function() {
        $(this)
          .parent()
          .find(".panel-title")
          .removeClass("active_part");
      });
  });




});