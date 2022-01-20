const header = $(".header");
const logoImg = $(".logo img");
let windowWidth = window.innerWidth;

const showContent = () => {
  document.querySelector(".main-wrapper").classList.remove("js-fade-in");
};

const detectSubMenu = () => {
  const subMenu = document.querySelectorAll(".sub-menu");
  subMenu.forEach(function (item) {
    item.parentElement.classList.add("menu-item_icon");
  });
};

const detectSubList = () => {
  const sublist = document.querySelectorAll(".expertise-accordion__sublist");
  sublist.forEach(function (item) {
    item.parentElement.classList.add("expertise-accordion__item_icon");
  });
};

const detectProjectSublist = () => {
  const sublist = document.querySelectorAll(".projects-accordion__sublist");
  sublist.forEach(function (item) {
    item.parentElement.classList.add("projects-accordion__item_icon");
  });
};

const detectProjectSublistInner = () => {
  const sublist = document.querySelectorAll(".projects-accordion__subitem ul");
  sublist.forEach(function (item) {
    item.parentElement.classList.add("projects-accordion__item_icon_inner");
  });
};

detectProjectSublistInner();
detectProjectSublist();
detectSubList();
detectSubMenu();

const toggleFormBtn = document.querySelector(".js-toggle-form");
const headerForm = document.querySelector(".js-header-form");
const headerFormInput = document.querySelector(".js-header-form input");
const menu = document.querySelector(".js-menu");
const burger = document.querySelector(".js-burger");

const toggleHeaderForm = () => {
  headerForm.classList.toggle("active");
  toggleFormBtn.classList.toggle("active");
  menu.classList.toggle("hidden");
  headerFormInput.value = "";
  burger.classList.toggle("hidden");
};

const subMenu = document.querySelector(".sub-menu");

const openMenu = () => {
  burger.classList.add("active");
  menu.classList.add("active");
};

const closeMenu = () => {
  burger.classList.remove("active");
  menu.classList.remove("active");

  subMenu.classList.remove("active");

  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].style.maxHeight = null;
  }
  document.getElementsByClassName("menu-item_icon").classList.remove("active");
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

  let accordionItem = document.querySelectorAll(".js-accordion-item");
  for (let i = 0; i < accordionItem.length; i++) {
    accordionItem[i].addEventListener("click", function (e) {
      this.classList.toggle("active");
      let accordionSublist = this.querySelector(
        ".expertise-accordion__sublist"
      );
      if (accordionSublist.style.maxHeight) {
        accordionSublist.style.maxHeight = null;
      } else {
        accordionSublist.style.maxHeight = accordionSublist.scrollHeight + "px";
      }
    });
  }

  let accordionProjectsItem = document.querySelectorAll(
    ".projects-accordion__item_icon > a, .projects-accordion__item_icon > span"
  );
  for (let i = 0; i < accordionProjectsItem.length; i++) {
    accordionProjectsItem[i].addEventListener("click", function (e) {
      this.classList.toggle("active");
      let accordionProjectsSublist = this.parentElement.querySelector(
        ".projects-accordion__sublist"
      );
      console.log(this);
      if (accordionProjectsSublist.style.maxHeight) {
        accordionProjectsSublist.style.maxHeight = null;
      } else {
        accordionProjectsSublist.style.maxHeight =
          accordionProjectsSublist.scrollHeight + "px";
      }
    });
  }

  let accordionProjectsItemInner = document.querySelectorAll(
    ".projects-accordion__item_icon_inner > a, .projects-accordion__item_icon_inner > span"
  );
  for (let i = 0; i < accordionProjectsItemInner.length; i++) {
    accordionProjectsItemInner[i].addEventListener("click", function (e) {
      this.classList.toggle("active");
      let accordionProjectsSublistInner = this.parentElement.querySelector(
        ".projects-accordion__subitem ul"
      );
      console.log(this);
      if (accordionProjectsSublistInner.style.maxHeight) {
        accordionProjectsSublistInner.style.maxHeight = null;
      } else {
        accordionProjectsSublistInner.style.maxHeight =
          accordionProjectsSublistInner.scrollHeight + "px";
        let parentsubMenu = accordionProjectsSublistInner.parentNode.parentNode;
        parentsubMenu.style.maxHeight = 100 + "%";
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
  initExpertiseMenu();
  initExpertiseMenuBottom();
  removeChild();

  window.addEventListener("resize", function () {
    console.log(window.innerWidth);

    if (window.innerWidth < 991) {
      initKnowledgeSlider();
      removeChild();
    }
    if (window.innerWidth < 767) {
      initExpertiseMenu();
      initExpertiseMenuBottom()
    }
  });
});


function removeChild() {
  $('.knowledge-slider__item').each(function () {
    if ($(window).width() < 991) {
      $(this).contents().unwrap();
    }
  });
}

function initKnowledgeSlider() {
  setTimeout(function () {
    const knowledgeSlider = document.querySelector(
      "#knowledgeSlider.slick-slider"
    );
    if ($(window).width() < 991 && !knowledgeSlider) {
      $("#knowledgeSlider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        mobileFirst: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 993,
            settings: "unslick",
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }, 100);

}

function initExpertiseMenu() {
  const expertiseMenu = document.querySelector("#expertiseMenu.slick-slider");
  if ($(window).width() < 767 && !expertiseMenu) {
    $("#expertiseMenu").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      mobileFirst: true,
      adaptiveHeight: true,
      infinite: true,
      responsive: [{
          breakpoint: 768,
          settings: "unslick",
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
}

function initExpertiseMenuBottom() {
  const expertiseSlider = document.querySelector("#expertiseMenuBottom.slick-slider");
  if ($(window).width() < 767 && !expertiseSlider) {
    $("#expertiseMenuBottom").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      mobileFirst: true,
      adaptiveHeight: true,
      infinite: true,
      responsive: [{
          breakpoint: 768,
          settings: "unslick",
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
}
window.addEventListener("mouseover", function (event) {
  console.log(event.target);
}, false);

$(document).ready(function () {
  function unwrappEl() {
    let img = $(".article img");
    img.unwrap();
  }
  unwrappEl();
});

svg4everybody();

function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});