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

// Slideshow

// autoplay

const slideShow = () => {
  let playing = true;
  let slideshowInterval;

  function slideShowActive() {
    if ((playing = true)) {
      slideshowInterval = setInterval(showNextSlide, 3500);
    }
  }
  slideShowActive();
};

slideShow();

// pins

let currentNumber = 1;
document.querySelector("#slide" + currentNumber).classList.add("show");
document.querySelector("#pin" + currentNumber).classList.add("selected");

function selectPin(newNumber) {
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector("#pin" + newNumber).classList.add("selected");
  currentNumber = newNumber;
}

function showSlide(newNumber) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide" + newNumber).classList.add("show");
  currentNumber = newNumber;
  selectPin(newNumber);
}

for (let numerPin = 1; numerPin < 5; numerPin++) {
  document
    .querySelector("#pin" + numerPin)
    .addEventListener("click", function() {
      showSlide(currentNumber);
    });
}

// next, previous slide

function showNextSlide() {
  let newNumber = currentNumber + 1;
  if (newNumber > 5) {
    newNumber = 1;
  }
  showSlide(newNumber);
  currentNumber = newNumber;
}

document.querySelector("#next").addEventListener("click", showNextSlide);

function showPreviousSlide() {
  let newNumber = currentNumber - 1;
  if (newNumber < 1) {
    newNumber = 5;
  }
  showSlide(newNumber);
  currentNumber = newNumber;
}

document.querySelector("#prev").addEventListener("click", showPreviousSlide);
