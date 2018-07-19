//smooth scrolling
/*$(document).ready(function() {
  $('a[href^="#"]').on("click", function(event) {
    var target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });
});*/

//mobile menu

let burger = document.getElementById("burger-main-nav");
let menu = document.querySelector(".main-nav-list");
burger.addEventListener("click", function() {
  menu.classList.toggle("open");
});

// sticky menu
window.onscroll = function() {
  myFunction();
};
let navBar = document.getElementById("main-nav");
let sticky = navBar.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add("scrolling");
  } else {
    navBar.classList.remove("scrolling");
  }
}

//slideshow

let playing = false;
let slideshowInterval;

function startSlideshow() {
  document.querySelector("#play").classList.add("on");
  playing = true;
  slideshowInterval = setInterval(showNextSlide, 3000);
}

function stopSlideshow() {
  document.querySelector("#play").classList.remove("on");
  playing = false;
  clearInterval(slideshowInterval);
}

function playButtonClicked() {
  if (playing === true) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}
//document.querySelector("#play").addEventListener("click", playButtonClicked);

// poczatek

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

//next, previous slide

function showNextSlide() {
  /*document.querySelector(".show").classList.remove("show");*/

  let newNumber = currentNumber + 1;
  if (newNumber > 5) {
    newNumber = 1;
  }
  //document.querySelector("#slide" + newNumber).classList.add("show");
  showSlide(newNumber);
  currentNumber = newNumber;
}

document.querySelector("#next").addEventListener("click", showNextSlide);

function showPreviousSlide() {
  //document.querySelector(".show").classList.remove("show");

  let newNumber = currentNumber - 1;
  if (newNumber < 1) {
    newNumber = 5;
  }
  //document.querySelector("#slide" + newNumber).classList.add("show");
  showSlide(newNumber);
  currentNumber = newNumber;
}

document.querySelector("#prev").addEventListener("click", showPreviousSlide);

//alternatywne sprawdzenie czy pokaz slajdow sie odtwarza
/*function toggleAutoPlay() {
  if (document.querySelector("#play.on")) {
    document.querySelector("#play").classList.remove("on");
  } else {
    document.querySelector("#play").classList.add("on");
  }
}

document.querySelector("#play").addEventListener("click", toggleAutoPlay; */
