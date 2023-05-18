scrollBox = document.querySelector("#scrollBox")
button = document.querySelector("input")

button.addEventListener("click", scroll)

function scroll () {
    scrollBox.style.transform = "translateX(-50%)"
    console.log("Scrolled")
}