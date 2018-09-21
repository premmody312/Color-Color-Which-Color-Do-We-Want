var numOfColors=6;
var colorArray=[];
var pickedColor;
//picked.textContent=pickedColor;
var roundedSquare=document.querySelectorAll(".roundedSquare");
var picked=document.getElementById("picked");
var messageDisplay=document.getElementById("messageDisplay");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var modeButton=document.querySelectorAll(".mode");
// var easyBtn=document.querySelector("#easyBtn")
// var hardBtn=document.querySelector("#hardBtn")
init();
function init(){
	setButtonListeners();
	changeSquareColors();
	reset();
}

function setButtonListeners(){
	for(var i=0;i<modeButton.length;i++)
	{
		modeButton[i].addEventListener("click",function()
		{
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		
		this.classList.add("selected");
		(this.textContent==="Easy")?(numOfColors=3):(numOfColors=6);
		reset();
		})
	}
}
function changeSquareColors(){
	for(var i=0;i<roundedSquare.length;i++)
	{
	// roundedSquare[i].style.background=colorArray[i];
	roundedSquare[i].addEventListener("click",function()
	{
		var clickedColor=this.style.background;
		if (clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!!"	;
			changeColors(clickedColor)	;
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again!!";
			
		}
		else
		{
			this.style.background="#000033";
			messageDisplay.textContent="Try Again";
		}
	});
	}
}
//Reset Button
function reset(){
	colorArray=generateRandom(numOfColors);
	pickedColor=pickColor();
	resetButton.textContent="New Colors";
	picked.textContent=pickedColor;
	for(var i=0;i<roundedSquare.length;i++)
	{
		if(colorArray[i])
		{
			roundedSquare[i].style.display="block";
			roundedSquare[i].style.background=colorArray[i];
		}
		else
		{
			roundedSquare[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
	messageDisplay.textContent="";
}



// //Easy Button
// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfColors=3;
// 	colorArray=generateRandom(numOfColors);
// 	pickedColor=pickColor();
// 	picked.textContent=pickedColor;
// 	for(var i=0;i<roundedSquare.length;i++)
// 	{
// 		if (colorArray[i]) {
// 			roundedSquare[i].style.background=colorArray[i];
// 		}
// 		else{
// 			roundedSquare[i].style.display="none";
// 		}
// 	}

// })
// //Hard Button
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfColors=6;
// 	colorArray=generateRandom(numOfColors);
// 	pickedColor=pickColor();
// 	picked.textContent=pickedColor;
// 	for(var i=0;i<roundedSquare.length;i++)
// 	{
// 		roundedSquare[i].style.background=colorArray[i];
// 		roundedSquare[i].style.display="block";
// 	}
// })

//Reset Button
resetButton.addEventListener("click",function(){
// 	colorArray=generateRandom(numOfColors);
// 	pickedColor=pickColor();
// 	this.textContent="New Colors"
// 	picked.textContent=pickedColor;
// 	for(var i=0;i<roundedSquare.length;i++)
// {
// 	roundedSquare[i].style.background=colorArray[i];
// }
// 	h1.style.background="steelblue";
// 	messageDisplay.textContent="";
	reset();
})




function changeColors(color){
	for(var i=0;i<roundedSquare.length;i++)
	{
		roundedSquare[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colorArray.length);
	return colorArray[random];
}
 
function generateRandom(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}