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




// Menu side toggle
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


    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
          enabled:true
        },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
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

$(document).ready(function() {
      
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
  });




});