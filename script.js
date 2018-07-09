//pokaz slajdow

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
document.querySelector("#play").addEventListener("click", playButtonClicked);

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
      showSlide(1);
    });
}

//najpierw zrobliysmy te fukcje kazda po kolei, potem petla for
/*function showSlide1() {
  showSlide(1);
  /*document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide1").classList.add("show"); 
}

document.querySelector("#pin1").addEventListener("click", showSlide1);

function showSlide2() {
  showSlide(2);
  /*document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide2").classList.add("show");
}

document.querySelector("#pin2").addEventListener("click", showSlide2);

function showSlide3() {
  showSlide(3);
  /*document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide3").classList.add("show");
}

document.querySelector("#pin3").addEventListener("click", showSlide3);

function showSlide4() {
  showSlide(4);
  /*document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide4").classList.add("show");
}

document.querySelector("#pin4").addEventListener("click", showSlide4);

function showSlide5() {
  showSlide(5);
  /*document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide5").classList.add("show");
}

document.querySelector("#pin5").addEventListener("click", showSlide5); */

//strzalki

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
