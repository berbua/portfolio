// Sticky menu
const stickyMenu = () => {
  window.onscroll = function() {
    stickyScroll();
  };
  const navBar = document.getElementById("top-nav");
  const sticky = navBar.offsetTop;
  function stickyScroll() {
    if (window.pageYOffset > sticky) {
      navBar.classList.add("scrolling");
    } else {
      navBar.classList.remove("scrolling");
    }
  }
};

stickyMenu();

// Mobile menu
const mobileMenu = () => {
  const burger = document.getElementById("js-mobile-menu");
  const menu = document.querySelector(".main-nav-list");
  const links = menu.querySelectorAll("a");
  burger.addEventListener("click", function() {
    menu.classList.toggle("open");
    links.forEach(link =>
      link.addEventListener("click", function() {
        menu.classList.remove("open");
      })
    );
  });
};

mobileMenu();

// Photos navigation

const pins = document.querySelectorAll(".pin");
let currentNumber = 1;
document.querySelector("#slide" + currentNumber).classList.add("show");
document.querySelector("#pin" + currentNumber).classList.add("selected");

const selectPin = newNumber => {
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector("#pin" + newNumber).classList.add("selected");
  currentNumber = newNumber;
};

const showSlide = newNumber => {
  document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide" + newNumber).classList.add("show");
  selectPin(newNumber);
  currentNumber = newNumber;
};

pins.forEach(pin => {
  pin.addEventListener("click", function() {
    showSlide(this.id.slice(3));
  });
});

// next, previous slide arrows

const showNextSlide = () => {
  let newNumber = currentNumber + 1;
  if (newNumber > 5) {
    newNumber = 1;
  }
  showSlide(newNumber);
  currentNumber = newNumber;
};

document.querySelector("#next").addEventListener("click", showNextSlide);

const showPreviousSlide = () => {
  let newNumber = currentNumber - 1;
  if (newNumber < 1) {
    newNumber = 5;
  }
  showSlide(newNumber);
  currentNumber = newNumber;
};

document.querySelector("#prev").addEventListener("click", showPreviousSlide);

// Photos slideshow

// autoplay
const slideShow = () => {
  let playing = true;
  let slideshowInterval;

  function slideShowActive() {
    if ((playing = true)) {
      slideshowInterval = setInterval(showNextSlide, 4000);
    }
  }
  slideShowActive();
};

slideShow();
