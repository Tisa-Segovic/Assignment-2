
/* asg2part1.js */


//Function #1
function change(){
	
	//	Change the text from visible-invisible, and invisible-visible.	
	var x = document.getElementById("pp2");
	if (x.style.visibility === "hidden") {
		x.style.visibility = "visible" ;
	} else {
		x.style.visibility = "hidden" ;
	}
	
	// Change background colour
	document.body.style.backgroundColor = "#FFE4B5" ;
	
	// Change the font colour
	document.body.style.color = "#000080" ;
	
	// Change the font style
	document.body.style.fontFamily = "Palatino" ;
	
	// Change the font size
	document.body.style.fontSize = "13.5pt" ;
	
	document.body.style.fontWeight = "900" ;

}

// Function #2.0
function randArray() {
	
	// Create an array
	var prizes = ["Mango Shopper", "Chloe's Rylee Boots", "Max Mara Teddy Shopper", "H&M Midi-Skirt", "Massimo Dutti Shopper"];
	var i, len, text;
	
	// Use a loop to print all array elements
	for (i = 0, len = prizes.length, text = ""; i < len; i++) {
		if (i == (len-1)){
			text += prizes[i] + ". " + " ";
		} else{
			text += prizes[i] + ", " + " ";
		}
	}
	
	// Print the element names. 
    document.getElementById("demo").innerHTML = text.bold();
}
//Function #2.1 - works closely with the function above
function winPrize(){
	
	var prizes = ["Mango Shopper", "Chloe's Rylee Boots", "Max Mara Teddy Shopper", "H&M Midi-Skirt", "Massimo Dutti Shopper"];
	
	// Uses Math-Random to select the item
	var item = prizes[Math.floor(Math.random()*prizes.length)];
    document.getElementById("prize").innerHTML = item.bold().fontcolor("#6495ED").fontsize("17px");
}

//Function #3
function swapT(){
	
	var p1 = document.getElementById("p1");
	var p2 = document.getElementById("p2");

	// Where the SWAP Function is implemented
	var p1Text = p1.textContent;
	p1.textContent = p2.textContent;
	p2.textContent = p1Text;
}

//Function #4
function swapI(){
	
	var i1 = document.getElementById("img1");
	var i2 = document.getElementById("img2");
	var ileft = i1.src;
	var iright = i2.src;
	
	// Where the SWAP Function is implemented
	i1.src = iright;
	i2.src = ileft;
}

// Function #5
function newDoc(){
	window.open("externalFile.html");
}

//Function #6
function converter(valNum) {
	
	valNum = parseFloat(valNum);
	
	// Formula for conversion F >>> C
	document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}


