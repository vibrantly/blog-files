/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


function handleToggleNav() {
  var menuIconTablet = document.getElementById('navIconTablet');
  var menuIconMobile = document.getElementById('navIconMobile');
  var headerNavTablet = document.getElementById('header-nav-tablet');
  var headerNavMobile = document.getElementById('header-nav--mobile');
  var headerContainer = document.querySelector('.header__container--tablet');
  var headerContainerMobile = document.querySelector('.header__container--mobile');
  var select = document.getElementById('languageSelectMobile');
  var body = document.querySelector('body');
  var header = document.querySelector('.header');

  if (headerNavMobile !== null) {
    menuIconMobile.addEventListener('click', function (event) {
      header.classList.toggle('header-nav-active');
      headerNavMobile.classList.toggle('header-nav-active');
      headerContainerMobile.classList.toggle('header-nav-active');
      menuIconMobile.classList.toggle('menu-close');
      select.classList.toggle('open');
      headerNavMobile.className === 'header-nav header-nav-active' ? body.style.overflow = 'hidden' : body.style.overflow = 'scroll';
    });
  }

  if (headerNavTablet !== null) {
    menuIconTablet.addEventListener('click', function (event) {
      header.classList.toggle('header-nav-active');
      headerNavTablet.classList.toggle('header-nav-active');
      headerContainer.classList.toggle('header-nav-active');
      menuIconTablet.classList.toggle('menu-close');
      headerNavTablet.className === 'header-nav header-nav-active' ? body.style.overflow = 'hidden' : body.style.overflow = 'scroll';
    });
  }
}

function handleIncreaseInput() {
  var inputItem = document.querySelector('.input--search');
  var input = document.querySelector('.categories-section__input');
  var buttons = document.querySelectorAll('.btn--blog');
  var categorySelect = document.querySelector('.category-select');

  if (!inputItem) {
    return false;
  }

  if (window.innerWidth > 576) {
    categorySelect.style.display = 'none';
    buttons.forEach(function (btn) {
      return btn.style.display = 'flex';
    });
    inputItem.addEventListener('click', function (event) {
      inputItem.classList.add('search-active');
      buttons.forEach(function (btn) {
        return btn.style.display = 'none';
      });
    });
    input.addEventListener('blur', function (event) {
      if (!input.value.length) {
        inputItem.classList.remove('search-active');
        buttons.forEach(function (btn) {
          return btn.style.display = 'flex';
        });
      }
    });
  }

  window.addEventListener('resize', function () {
    var width = window.innerWidth;

    if (width <= 576) {
      buttons.forEach(function (btn) {
        return btn.style.display = 'none';
      });
      categorySelect.style.display = 'flex';
      inputItem.addEventListener('click', function (event) {
        categorySelect.style.display = 'none';
        inputItem.classList.add('search-active');
      });
      input.addEventListener('blur', function (event) {
        if (!input.value.length) {
          inputItem.classList.remove('search-active');
          categorySelect.style.display = 'flex';
        }
      });
    }
  }, false);
}

function handleCategorySelect() {
  if (!document.querySelector('.category-select')) {
    return false;
  }

  var selectSingle = document.querySelector('.category-select');
  var selectSingle_title = selectSingle.querySelector('.category-select__title');
  var selectSingle_labels = selectSingle.querySelectorAll('.category-select__label');
  selectSingle_title.addEventListener('click', function () {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  for (var i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', function (evt) {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }
}

function handleLanguageSelect() {
  var select = document.querySelectorAll('.language-select');
  var options = document.querySelectorAll('.options-container');

  if (select !== null) {
    select.forEach(function (el) {
      return el.addEventListener('click', function (event) {
        options.forEach(function (el) {
          return el.classList.toggle('open');
        });
      });
    });
    options.forEach(function (el) {
      return el.addEventListener('mouseleave', function (event) {
        if (el.classList.contains('open')) {
          el.classList.remove('open');
        }
      });
    });
  }
}

function scrollToTop() {
  var buttonToTop = document.querySelector('.move-to-top');
  buttonToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function showSliderCustomers() {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30
  });
}

function showSliderFeature() {
  var swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 'auto',
    spaceBetween: 32
  });
}

window.addEventListener('DOMContentLoaded', function () {
  handleLanguageSelect();
  handleToggleNav(); // handleCategorySelect();
  // handleIncreaseInput();

  scrollToTop(); // showSliderCustomers();
  // showSliderFeature();
});
/******/ })()
;