function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

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
