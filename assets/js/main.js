jQuery(document).ready(function($) {
$('.billboard-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    focusOnSelect: false,
    cssEase: 'linear'
  });
$(".brands-slider").slick({
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1601,
      settings: {
        slidesToShow: 8,
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 7,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
    ]
});
$(".other-brands-slider").slick({
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    ]
});

$(".grades-slider").slick({
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    }
  },
  ]
});
function carGallery() {
$(".car-gallery-slider").slick({
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    }
  },
  ]
});
}
carGallery();
//Gallery Tab
$('.car-gallery-tab a').on('click', function(e) {
  e.preventDefault();
  $('.car-gallery-slider').slick('unslick');
  carGallery();
  var currentTab = $(this).attr('href');
  $('.gallery-slider-content').hide();
  $(currentTab).fadeIn();
});

// car specification accordion
function mobile_accordion() {
        var winWidth = $(window).width();
        if (winWidth < 992) {
            $('.compare-stats__details--content-wrapper h3').click(function(e) {
                if ($(this).hasClass('is-active')) {
                    $('.compare-stats__details--content-wrapper h3').removeClass('is-active');
                    $('.compare-stats__details--list-wrapper').slideUp(300);
                    e.stopImmediatePropagation();
                } else {
                    $('.compare-stats__details--content-wrapper h3').removeClass('is-active');
                    $('.compare-stats__details--list-wrapper').slideUp(300);
                    $(this).addClass('is-active').next('.compare-stats__details--list-wrapper').slideDown(300);
                    e.stopImmediatePropagation();
                }
            });
            //footer navigation
            $('.footer-quicklink h4').click(function(e) {
                if ($(this).hasClass('is-active')) {
                    $('.footer-quicklink h4').removeClass('is-active');
                    $('.footer-quicklink ul').slideUp(300);
                    e.stopImmediatePropagation();
                } else {
                    $('.footer-quicklink h4').removeClass('is-active');
                    $('.footer-quicklink ul').slideUp(300);
                    $(this).addClass('is-active').next('ul').slideDown(300);
                    e.stopImmediatePropagation();
                }
            });
        } else {
            $('.compare-stats__details--content-wrapper h3, .footer-quicklink h4').unbind('click');
        }
    }
    mobile_accordion();
    $(window).resize(mobile_accordion);
//Navbar Fixed
var nav_offset_top = $("header").height() + 120;

function navbarFixed() {
    if ($(".header-wrapper").length) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop(),
                slowscroll = scroll / 2;
            $('.billboard').css({
                transform: "translateY(" + slowscroll + "px)"
            });    
            if (scroll >= nav_offset_top) {
                $(".header-wrapper").addClass("header_fixed");
                
            } else {
                $(".header-wrapper").removeClass("header_fixed");
             //   $('.billboard').css({
              //  transform: "translateY(0)"
          //  });
            }
        });
    }
}

navbarFixed();
$(document).on('click','.ham-menu', function(){
  $('.header').toggleClass('active');
  $('.ham-menu').toggleClass('active');
  $('.main-menu').slideToggle();
});


tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from 
portrait mode to landscape). We set a timer with a small delay to run 
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/
var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if 
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your 
device from portrait mode to landscape).
*/
function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if(tabs.is(':visible')) {
    tabs.find('a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href'),
          datatab = $(this).attr('data-tab');
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(tabs).attr('data-tab', datatab);
      $(this).parent('li').addClass('active');
      $('.item-content').hide();
      $(target).fadeIn('100');
     // $(target).addClass('active');

    });
  } else {
    $('.item-title').on('click', function(e) {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = $('.item-title');
    //  container.find('.tabs a').removeClass('active');
    if($(this).hasClass('active')) {
        e.preventDefault();
    }else{
        items.removeClass('active'); 
        $(this).addClass('active');
        $('.item-content').slideUp();
        $(this).next('.item-content').slideDown();
    }
      
    });
  } 
}
// hamburger menu
$(document).on('click', '.ham-input', function() {
  $('body').toggleClass('menu-open');
  $('.mt-header__menu--list').toggleClass('active');
});

//submenu mobile menu
$('.main-menu .menu-item-has-children > a').each(function() {
  $(this).after("<span class='sub_toggle'><i class='mt-icon icon-arrow_right'></i></span>");
});
$(document).on('click', 'span.sub_toggle', function() {
  $(this).next('ul.sub-menu').slideToggle();
  $('.sub_toggle').toggleClass('active');
});

// nice-select
$(document).ready(function() {
  $('select').niceSelect();
});
// brand filter
$(document).on("click", ".filter__dropdown", function () {
  $(".filter__dropdown").toggleClass("active");
});
// in-ex-slide-buttons
$(document).on('click', '.interior', function() {
  $('.slide-buttons').toggleClass('active');
});
$(document).on('click', '.exterior', function() {
  $('.slide-buttons').removeClass('active');
});

});

$(window).resize(function() {
    var winWidthNew = $(window).width();
    if (winWidthNew > 768) {
        $('.compare-stats__details--content-wrapper h3, .footer-quicklink h4').removeClass('is-active');
        $('.compare-stats__details--list-wrapper, .footer-quicklink ul').removeAttr('style');
    }
});
// compare popup
$(document).on("click", ".add-compare", function () {
  $("#compare-car-form").toggleClass("open");
}); 
$(document).on("click", ".close, .overlay-bg", function () {
  $("#compare-car-form").removeClass("open");
});