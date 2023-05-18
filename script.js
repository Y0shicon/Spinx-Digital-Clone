const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", show);

function show() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

document
  .querySelectorAll(".navBut")
  .forEach((n) => n.addEventListener("click", buttonClicked));

function buttonClicked() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//Navigation Bar scrolling detection and class changer
document.addEventListener("scroll", checkYOffset);

var navbar = document.querySelector("#navigationBar");
// console.log(navbar)

function checkYOffset() {
  if (window.pageYOffset > 30) {
    navbar.classList.add("pinned");
  } else {
    navbar.classList.remove("pinned");
  }
}

//______End of navigation bar scroll changes________

// Media Queries for the invisible text
vidText = document.getElementById("title");
function changedy(x) {
  if (x.matches) {
    vidText.setAttribute("dy", "100px");
  } else {
    vidText.setAttribute("dy", "200px");
  }
}
function changedy2(x) {
  if (x.matches) {
    vidText.setAttribute("dy", "50px");
  } else {
    vidText.setAttribute("dy", "200px");
  }
}

let x = window.matchMedia("(max-width:770px)");
let x2 = window.matchMedia("(max-width:456px)");
changedy(x);
changedy2(x2);
x.addListener(changedy);
x2.addListener(changedy2);

// ____End of Media Queries Section_____

// Parallax Images

// document.querySelectorAll(".parallaxImg").forEach(element => element.addEventListener("scroll", function f(element){
//     console.log(element)
// }))
// let allParallax = document.getElementsByClassName("parallaxImg")
// console.log(allParallax)
// let allParallaxImg = document.querySelectorAll(".parallaxImg")

// for (element of allParallaxImg){
//     document.addEventListener("scroll", function (){
//         let topValue = element.style.top;
//         console.log(`Y Offset : ${window.pageYOffset}
//             \nTop : ${topValue}`)
//         let style = getComputedStyle(element)
//         console.log(style.top)
//         element.style.top = '${style.top-1}%'
//     })
// }

// function parallaxImg(element){
//     let topValue = element.style.top
//     console.log(`Y Offset : ${window.pageYOffset}
//         \nTop : ${topValue}`)
// }

// Parallax Section
let skyscraperParallax = document.getElementById("skyscraper");
let yogaParallax = document.getElementById("yoga");
let goldsheetParallax = document.getElementById("goldsheet");

document.addEventListener("scroll", function () {
  skyscraperParallax.style.transform = `translateY(-${
    window.pageYOffset * 0.34
  }px)`;
  yogaParallax.style.transform = `translateY(-${window.pageYOffset * 0.5}px)`;
  goldsheetParallax.style.transform = `translateY(-${
    window.pageYOffset * 0.25
  }px)`;
});

// Function to check if the sliders are in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    (rect.top >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.bottom >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Client Slider
clientForwardSlider = document.getElementById("clientForwardSlider");
clientBackwardSlider = document.getElementById("clientBackwardSlider");
brandForwardSlider = document.getElementById("brandForwardSlider");
brandBackwardSlider = document.getElementById("brandBackwardSlider");

// We need to transform --> translate the slider by 17%
var transitionMax = 17;

// We use a linear function to find values to translate the slider by
// y = mx + c
// y = __%
// x = topYValue - pageYOffset
// c = 0

//Finding m
var m = transitionMax / (window.innerHeight + 225); //225 is the height of the slider
// console.log("m = " + m);

var clientForwardTopYValue = 0;
var clientBackwardTopYValue = 0;
var brandForwardTopYValue = 0;
var brandBackwardTopYValue = 0;

document.addEventListener("scroll", function () {
  if (isInViewport(clientForwardSlider)) {
    if (clientForwardTopYValue == 0) {
      clientForwardTopYValue = window.pageYOffset;
    }
    // console.log("IN VIEWPORT & TopYValue : " + clientForwardTopYValue);
    // console.log("Page Y Offset : " + window.pageYOffset)
    // console.log("x = " + (window.pageYOffset - clientForwardTopYValue));
    // console.log("y = " + (window.pageYOffset - clientForwardTopYValue)*m);

    clientForwardSlider.style.transform = `translateX(-${
      (window.pageYOffset - clientForwardTopYValue) * m
    }%)`;
  }

  if (isInViewport(clientBackwardSlider)) {
    if (clientBackwardTopYValue == 0) {
      clientBackwardTopYValue = window.pageYOffset;
    }
    clientBackwardSlider.style.transform = `translateX(${
      (window.pageYOffset - clientBackwardTopYValue) * m
    }%)`;
  }

  if (isInViewport(brandForwardSlider)) {
    if (brandForwardTopYValue == 0) {
      brandForwardTopYValue = window.pageYOffset;
    }
    brandForwardSlider.style.transform = `translateX(-${
      (window.pageYOffset - brandForwardTopYValue) * m
    }%)`;
  }
  if (isInViewport(brandBackwardSlider)) {
    if (brandBackwardTopYValue == 0) {
      brandBackwardTopYValue = window.pageYOffset;
    }
    brandBackwardSlider.style.transform = `translateX(${
      (window.pageYOffset - brandBackwardTopYValue) * m
    }%)`;
  }
});

// ********** End of the slider ***********

// Exapnding and closing of Expertise Section
content = document.querySelector(".content");
allContentTitles = document.querySelectorAll(".contentTitle");

allContentTitles.forEach((card) =>
  card.addEventListener("click", function () {
    card.classList.toggle("expanded");
    card.nextElementSibling.classList.toggle("expanded");
    // content.style.height = "fit-content"

    for (eachCard of allContentTitles) {
      if (eachCard != card) {
        eachCard.classList.remove("expanded");
        eachCard.nextElementSibling.classList.remove("expanded");
      }
    }
  })
);

// document.querySelectorAll('.contentBody').forEach(content => content.addEventListener("animationend", function(){
//     content.element.style.display = "flex"
// }))

//************ End of the expanding and closing section ***********

// Video Opening

videoDiv = document.querySelector(".videoContainer");
video = document.querySelector(".video");

mediaElement = document.getElementsByClassName("video")[0];

videoDiv.addEventListener("click", function () {
  video.classList.remove("closing");
  video.classList.toggle("active");
  if (video.hasAttribute("autoplay")) {
    //Closing
    video.classList.add("closing");
    video.removeAttribute("autoplay");
    video.setAttribute("muted", "");
  } else {
    //Opening
    video.setAttribute("autoplay", "");
    video.style.visibility = "visible";
    mediaElement.currentTime = 0;
  }
});

// Process Section

allProcessTiles = document.querySelectorAll(".contentTileTitle");

allProcessTiles.forEach((tile) =>
  tile.addEventListener("click", function () {
    tile.parentElement.classList.add("active");

    for (eachTile of allProcessTiles) {
      if (eachTile != tile) {
        eachTile.parentElement.classList.remove("active");
      }
    }
  })
);

//Showing pictures on hover

allLearnCards = document.querySelectorAll(".learnSectionCards");
allAttributeCards = document.querySelectorAll(".attributeCard")

allLearnCards.forEach((card) =>
  document.addEventListener("mousemove", function (e) {
    if (isInViewport(card)) {
      const rect = card.getBoundingClientRect();
      if (
        e.clientY > rect.top &&
        e.clientY < rect.bottom &&
        e.clientX > rect.left &&
        e.clientX < rect.right
      ) {
        // console.log(e)
        card.firstElementChild.style.top = e.clientY + "px";
        card.firstElementChild.style.left = e.clientX + "px";
      }
    }
  })
);

allAttributeCards.forEach((card) =>
document.addEventListener("mousemove", function (e) {
  if (isInViewport(card)) {
    const rect = card.getBoundingClientRect();
    if (
      e.clientY > rect.top &&
      e.clientY < rect.bottom &&
      e.clientX > rect.left &&
      e.clientX < rect.right
    ) {
      // console.log(e)
      console.log("Mouse move in attribute card");
      card.firstElementChild.style.top = e.clientY + "px";
      card.firstElementChild.style.left = e.clientX + "px";
    }
  }
})
);

//Fade-in And sliding animations

faders = document.querySelectorAll(".fade-in");
sliders = document.querySelectorAll(".slide-in")

faders.forEach(element => {
  document.addEventListener("scroll", function(){
    if (isInViewport(element) && !element.classList.contains("appear")){
      element.classList.add("appear")
    }
  })
});

sliders.forEach(element => {
  document.addEventListener("scroll", function(){
    if (isInViewport(element) && !element.classList.contains("appear")){
      element.classList.add("appear")
    }
  })
});