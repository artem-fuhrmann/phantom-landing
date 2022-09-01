//IMAGE CAROUSEL

let images = document.querySelector(".carousel").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

prev.addEventListener("click", () => nextImage("prev"));
next.addEventListener("click", () => nextImage("next"));

function nextImage(direction) {
	if(direction == "next") {
		index++;
		if(index == images.length) {
			index = 0;
		}
	}  else {
		if(index == 0) {
			index = images.length - 1;
		}
		index--;
	}
	//remove class "main" from previous img
	document.querySelector(".main").classList.remove("main")
	//add class "main" to the next (or prev) img
	images[index].classList.add("main");
}


