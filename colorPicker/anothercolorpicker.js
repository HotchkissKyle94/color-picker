var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDislay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function () {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.background = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function () {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];	
		square[i].style.display = "block";
	}
	
});

reset.addEventListener("click", function () {
	//genrateallnewcolors
	//picknewcolorfromarray
	//chngecolorsfromsquare
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
		messageDisplay.textContent = "New Colors";
	}
	h1.style.background = "steelblue";
});

for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];
	square[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			reset.textContent = "Play Again?";
			h1.style.background = clickedColor;
			changeColor(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
};

function changeColor (color) {
	//Loop throught all squares
	//Change each color to match given color
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors [random];
}

function generateRandomColors (num) {
	//make an array
	var arr = [];
	//add num random colors to an arr
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());

	}
	//return that array at end
	return arr;

}

function randomColor () {
	 //pick a red from 0 to 255
	 var r = Math.floor(Math.random() * 256);
	 //pick a green fro 0 to 255
	 var g = Math.floor(Math.random() * 256);
	 //pick a blue from 0 to 255
	 var b = Math.floor(Math.random() * 256);
	 return "rgb(" + r + ", " + g + ", " + b + ")";
}