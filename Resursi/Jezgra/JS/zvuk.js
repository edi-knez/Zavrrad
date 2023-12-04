var slider = document.querySelector(".slideContainer #myRange");
var output = document.querySelector(".slideContainer #value");

output.innerHTML = localStorage["jacinaZvuka"]

slider.oninput = function() {
  output.innerHTML = this.value; 
  localStorage.setItem("jacinaZvuka", this.value);
}

let x = Number.parseInt(localStorage["jacinaZvuka"]);
let color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
slider.style.background = color;

slider.value = x;

slider.addEventListener("mousemove", function() {
x = localStorage["jacinaZvuka"];
color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
slider.style.background = color;
});



