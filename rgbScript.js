// https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8691588#questions/12660704
//this guy used rgb randomly generated and passed it on to his setGrandientRandom function. 
//Note: input color doesn't change on the webpage, if you use the random button?? Since, input with type: color uses hex values only thus, the assumption. 

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

setGradient();

//returns numbers upto 255 randomly
function getRndInteger() {
  	return Math.floor(Math.random() * 255);
};

function randomColorNo() {
	var randomColor = "rgb(" + getRndInteger() + ", " + getRndInteger() + ", " + getRndInteger() + ")";
	return randomColor;
}

// Function that assigns the color1 and color 2 values with the random ones formed earlier
// and then it sets the color of the background using the random RGB values. assigns the textContent of the body to the css variable(h3 tag)
function setGradientRandom() {
	randomColor1 =  randomColorNo();
	randomColor2 =  randomColorNo();
	body.style.background = "linear-gradient(to right, " + randomColor1 + "," + randomColor2 + ")";
  	css.textContent = body.style.background + ";";
} 

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setGradientRandom);
