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
  } else {
    //Opening
    video.setAttribute("autoplay", "");
    video.style.visibility = "visible";
    mediaElement.currentTime = 0;
    // video.removeAttribute("currentTime")
  }
});

// video.addEventListener("click", function(){
//   console.log("Cliked the video")
//   video.removeAttribute("autoplay")
//   video.style.visibility = "hidden"
// })
