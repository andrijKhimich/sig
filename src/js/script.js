const header = $(".header");
const logoImg = $(".logo img");
let windowWidth = window.innerWidth;
// function setInnerHeader() {
//   logoImg.attr("src", logoBlackUrl);
//   header.addClass("header_inner");
// }

// function setHomeHeader() {
//   logoImg.attr("src", logoMainUrl);
// header.removeClass("header_inner");
// }

// function showOnScroll(scrollValue) {
//   $('.js-scroll').each(function () {
//     let elem = $(this);
//     let sectionPos = elem.offset().top;
//     let windowPos = $(window).scrollTop() + $(window).height() / 1.2;
//     if (sectionPos < windowPos) {
//       elem.removeClass('js-fadeIn js-slideLeft js-slideRight js-slideTop');
//     }
//   });

//   $('.js-active').each(function () {
//     let item = $(this);
//     let sectionPos = item.offset().top;
//     let windowPos = $(window).scrollTop() + $(window).height() / 2.8;
//     if (sectionPos < windowPos) {
//       item.addClass('active');
//     } else {
//       item.removeClass('active');
//     }
//   });
// }

const showContent = () => {
  document.querySelector(".main-wrapper").classList.remove("js-fade-in");
};

const detectSubMenu = () => {
  const submenu = document.querySelectorAll(".sub-menu");
  submenu.forEach(function (item) {
    item.parentElement.classList.add("menu-item_icon");
  });
};

detectSubMenu();

const toggleFormBtn = document.querySelector(".js-toggle-form");
const headerForm = document.querySelector(".js-header-form");
const headerFormInput = document.querySelector(".js-header-form input");
const menu = document.querySelector(".js-menu");

const toggleHeaderForm = () => {
  if (windowWidth > 991) {
    headerForm.classList.toggle("active");
    toggleFormBtn.classList.toggle("active");
    menu.classList.toggle("hidden");
    headerFormInput.value = "";
  }
};

const burger = document.querySelector(".js-burger");
const submenu = document.querySelector(".js-sub-menu");

const openMenu = () => {
  if (windowWidth < 991) {
    burger.classList.add("active");
    menu.classList.add("active");
  }
};

const closeMenu = () => {
  if (windowWidth < 991) {
    burger.classList.remove("active");
    menu.classList.remove("active");

    const subMenu = document.querySelectorAll(".sub-menu");
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].style.maxHeight = null;
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  showContent();
  toggleFormBtn.addEventListener("click", toggleHeaderForm);

  let subItem = document.getElementsByClassName("menu-item_icon");

  for (let i = 0; i < subItem.length; i++) {
    subItem[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let subMenu = this.querySelector(".sub-menu");
      if (subMenu.style.maxHeight) {
        subMenu.style.maxHeight = null;
      } else {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    });
  }

  burger.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  initKnowledgeSlider();

  window.addEventListener("resize", function () {
    if (windowWidth < 991) {
      initKnowledgeSlider();
    }
  });
});

function initKnowledgeSlider() {
  const knowledgeSlider = document.querySelector(
    "#knowledgeSlider.slick-slider"
  );
  if ($(window).width() < 991 && !knowledgeSlider) {
    $("#knowledgeSlider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: true,
      mobileFirst: true,
      responsive: [{
          breakpoint: 991,
          settings: "unslick",
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

$(document).ready(function () {
  // if ($('.inner-page').length > 0) {
  //   setInnerHeader();
  // } else {
  //   setHomeHeader();
  // }
  // hamburger.click(function () {
  //   if ($(this).hasClass('open')) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
  // });
});

// slow scroll to id (jQuery)

//   scrollBtn.click(function (e) {
//     e.preventDefault();
//     let link = $($(this).attr('href'))
//     $('html, body').animate({
//       scrollTop: link.offset().top
//     }, 1000);
//   });

// slow scroll to id (vanilla JS)

// const menuLinks = document.querySelectorAll('.nav-menu__link[data-goto]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach(function (menuLink) {
//   menuLink.addEventListener('click', onMenuLinkClick)
//   })
//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.js-header').offsetHeight;
//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//       });
//       e.preventDefault()
//     }
//   }
// }

//   showOnScroll($(window).scrollTop());

//   $(window).scroll(function () {
//     const scrollValue = $(this).scrollTop();
//     showOnScroll(scrollValue);
//     scrollValue >= 1 ? closeMenu() : null;

//     if (scrollValue > 1) {
//       header.addClass('sticky');
//     } else {
//       header.removeClass('sticky');
//       // logoImg.attr("src", logoColorUrl);
//     }
//   });

// $('.home-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000
// });
// $('.testimonials-slider__wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000,
//   arrows: true,
//   prevArrow: $('.testimonials-slider_prev'),
//   nextArrow: $('.testimonials-slider_next')
// });
// });
svg4everybody();

function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});