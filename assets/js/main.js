
$('.billboard-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });
$(".brands-slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
});
//Navbar Fixed
var nav_offset_top = $("header").height() + 120;

function navbarFixed() {
    if ($(".header-wrapper").length) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $(".header-wrapper").addClass("header_fixed");
            } else {
                $(".header-wrapper").removeClass("header_fixed");
            }
        });
    }
}

navbarFixed();
$(document).on('click','.ham-menu', function(){
  $('.header-wrapper').toggleClass('active');
  $('.ham-menu').toggleClass('active');
  $('.main-menu').toggleClass('active');
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
    $('.item').on('click', function() {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.item');
    //  container.find('.tabs a').removeClass('active');
     // items.removeClass('active');
     // $(this).addClass('active');
     $('.item-content').slideUp();
     $(this).find('.item-content').slideDown();
    //  container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
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