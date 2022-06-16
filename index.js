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

function showSlider() {
  var slider = document.querySelector('.slider'),
      sliderList = slider.querySelector('.slider-list'),
      sliderTrack = slider.querySelector('.slider-track'),
      slides = slider.querySelectorAll('.slide'),
      arrows = slider.querySelector('.slider-arrows'),
      prev = arrows.children[0],
      next = arrows.children[1],
      slideWidth = slides[0].offsetWidth,
      slideIndex = 0,
      posInit = 0,
      posX1 = 0,
      posX2 = 0,
      posY1 = 0,
      posY2 = 0,
      posFinal = 0,
      isSwipe = false,
      isScroll = false,
      allowSwipe = true,
      transition = true,
      nextTrf = 0,
      prevTrf = 0,
      lastTrf = --Array.from(slides).length * slideWidth,
      posThreshold = slides[0].offsetWidth * 0.35,
      trfRegExp = /([-0-9.]+(?=px))/,
      swipeStartTime,
      swipeEndTime,
      getEvent = function getEvent() {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
  },
      slide = function slide() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }

    sliderTrack.style.transform = "translate3d(-".concat(slideIndex * slideWidth, "px, 0px, 0px)");
    console.log(slideIndex);
    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --Array.from(slides).length);
  },
      swipeStart = function swipeStart() {
    var evt = getEvent();

    if (allowSwipe) {
      swipeStartTime = Date.now();
      transition = true;
      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;
      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;
      sliderTrack.style.transition = '';
      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);
      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  },
      swipeAction = function swipeAction() {
    var evt = getEvent(),
        style = sliderTrack.style.transform,
        transform = +style.match(trfRegExp)[0];
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      var posY = Math.abs(posY2);

      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (slideIndex === --Array.from(slides).length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = "translate3d(".concat(transform - posX2, "px, 0px, 0px)");
    }
  },
      swipeEnd = function swipeEnd() {
    posFinal = posInit - posX1;
    isScroll = false;
    isSwipe = false;
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);
    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      swipeEndTime = Date.now();

      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }
    } else {
      allowSwipe = true;
    }
  },
      setTransform = function setTransform(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = "translate3d(".concat(comapreTransform, "px, 0px, 0px)");
      }
    }

    allowSwipe = false;
  },
      reachEdge = function reachEdge() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  sliderList.classList.add('grab');
  sliderTrack.addEventListener('transitionend', function () {
    return allowSwipe = true;
  });
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);
  arrows.addEventListener('click', function () {
    var target = event.target;

    if (target.classList.contains('next')) {
      slideIndex++;
    } else if (target.classList.contains('prev')) {
      slideIndex--;
    } else {
      return;
    }

    slide();
  });
}

window.addEventListener('DOMContentLoaded', function () {
  handleLanguageSelect();
  handleToggleNav();
  handleCategorySelect();
  handleIncreaseInput();
  showSlider();
  scrollToTop();
});
/******/ })()
;