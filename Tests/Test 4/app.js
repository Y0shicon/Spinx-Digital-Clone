mediaScroller = document.querySelector("#mediaScroller");

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    mediaScroller.scrollBy({
      top: 0,
      left: 150,
      behavior: "smooth",
    });
    console.log("Scrolled Right");
  } else if (event.key === "ArrowLeft") {
    mediaScroller.scrollBy({
      top: 0,
      left: -150,
      behavior: "smooth",
    });
    console.log("Scrolled Left");
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    (rect.top >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.bottom >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))

    // rect.top >= 0 &&
    // rect.left >= 0 &&
    // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

mediaScrollerElem = document.getElementById("mediaScroller");

// maxScrollWidth = mediaScroller.scrollWidth;
maxScrollWidth = 8426
console.log("Media Scroller Max Width : " + mediaScroller.scrollWidth);
// console.log("Media Scroller Max Width : " + mediaScroller.clientWidth);
var m = maxScrollWidth / (window.innerHeight + 400);
console.log("m = " + m);

var topYValue = 0;

document.addEventListener("scroll", function () {
//   console.log("Page Y Offset : " + window.pageYOffset)

  if (isInViewport(mediaScroller)) {
    if (topYValue == 0) {
      topYValue = window.pageYOffset;
    }

    console.log("IN VIEWPORT & TopYValue :" + topYValue);
    // console.log("Page Y Offset : " + window.pageYOffset)
    console.log("x = " + (window.pageYOffset - topYValue));
    console.log("y = " + (window.pageYOffset - topYValue)*m);

    mediaScroller.scrollTo({
      top: 0,
      left: (window.pageYOffset - topYValue) * m ,
      behavior: "smooth",
    });
  } else {
    console.log("NOT IN VIEWPORT");
  }
});
