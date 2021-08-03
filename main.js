"use strict";

// Array of colours. --------------------------------------------------------
let colourArray = [ "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke" , "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "sandybrown", "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "lightsalmon", "salmon", "darksalmon", "lightcoral", "indianred", "crimson", "firebrick", "darkred", "red", "tomato", "coral", "darkorange", "orange", "yellow", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "gold", "darkolivegreen", "olive", "olivedrab", "yellowgreen", "limegreen", "lime", "lawngreen", "chartreuse", "greenyellow", "springgreen", "mediumspringgreen", "lightgreen", "palegreen", "darkseagreen", "mediumaquamarine", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "lightseagreen", "cadetblue", "darkcyan", "teal", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "steelblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "pink", "lightpink", "hotpink", "deeppink", "palevioletred", "mediumvioletred", "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "darkslateblue", "slateblue", "mediumslateblue", "gainsboro", "lightgray", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black" ];
/* Fonts Array ---------------------- */
let fontsArray = [
{ group: "sans-serif", family: "arial" },
{ group: "sans-serif", family: "futura" },
{ group: "sans-serif", family: "geneva" },
{ group: "sans-serif", family: "gill sands" },
{ group: "sans-serif", family: "helvetica" },
{ group: "sans-serif", family: "impact" },
{ group: "sans-serif", family: "lucida grande" },
{ group: "sans-serif", family: "optima" },
{ group: "sans-serif", family: "tahoma" },
{ group: "sans-serif", family: "trebuchet MS" },
{ group: "sans-serif", family: "verdana" },
{ group: "serif", family: "american typewriter" },
{ group: "serif", family: "baskerville" },
{ group: "serif", family: "big caslon" },
{ group: "serif", family: "didot" },
{ group: "serif", family: "georgia" },
{ group: "serif", family: "hoefler text" },
{ group: "serif", family: "lucida bright" },
{ group: "serif", family: "palatino" },
{ group: "serif", family: "times new roman" },
{ group: "monospaced", family: "andale mono" },
{ group: "monospaced", family: "courier" },
{ group: "monospaced", family: "courier new" },
{ group: "monospaced", family: "lucida sans typewriter" },
{ group: "monospaced", family: "monaco" },
{ group: "fantasy", family: "copperplate" },
{ group: "fantasy", family: "luminari" },
{ group: "fantasy", family: "papyrus" },
{ group: "script / cursive", family: "bradley hand" },
{ group: "script / cursive", family: "comic sans ms" },
{ group: "script / cursive", family: "brush script mt" }
];

// Gobal varibles. -------------------------------------
let mainContainer = document.getElementById("main");

let bgHorizontalScrollDiv = document.getElementById("bgHorScroll");
let textHorizontalScrollDiv = document.getElementById("textHorScroll");

let bgColourMessage = document.getElementById("bgCol");
let textColourMessage = document.getElementById("textCol");

let textSampleItem = document.querySelectorAll(".elementTypeCont *");
let textContDiv = document.getElementById("textCont");

let fontScollDiv = document.getElementById("fontCont");

let resetButton = document.getElementById("reset");

window.addEventListener("resize", adjustWidth);
document.addEventListener("DOMContentLoaded", adjustWidth);

// The adjustWidth function required to provide the width in pixels. This enables the colour contianers content to be scrolled horizontally, and ensures the container does not become wider than the page.
function adjustWidth(){
  let styles = window.getComputedStyle(mainContainer);
  let width = styles.getPropertyValue("width");
  // console.log(width);
  let parsedWidth = parseFloat(width);
  // console.log(parsedWidth);
  let adjustedWidth = parsedWidth - (parsedWidth * 0.03)
  bgHorizontalScrollDiv.style.width = adjustedWidth + "px";
  textHorizontalScrollDiv.style.width = adjustedWidth + "px";
}

// Iterates through the "colourArray".
// Creates the horizontal scroll divs for the colours.
// Adds a click event listener to each div.
// Adds each div to the scroll container.
function createBGColourScroll(array, scrollBox){
  for (let i = array.length-1; i >= 0; i--){
    let div = document.createElement('div');
    div.classList.add("horizontalColItem");
    div.style.backgroundColor = array[i];

    div.addEventListener("click", addBGColour);

    scrollBox.appendChild(div);
  }
}
function createTextColourScroll(array, scrollBox){
  for (let i = array.length-1; i >= 0; i--){
    let div = document.createElement('div');
    div.classList.add("horizontalColItem");
    div.style.backgroundColor = array[i];

    div.addEventListener("click", addTextColour);

    scrollBox.appendChild(div);
  }
}
createBGColourScroll(colourArray, bgHorizontalScrollDiv);
createTextColourScroll(colourArray, textHorizontalScrollDiv);

// Add colours to the sample text and updates the related messages. ------
function addBGColour(e){
  let colour = e.target.style.backgroundColor;
  console.log(colour);
  textContDiv.style.backgroundColor = colour;
  bgColourMessage.textContent = `The background colour selected is: ${colour}`;
}
function addTextColour(e){
  let colour = e.target.style.backgroundColor;
  for (let i = 0; i < textSampleItem.length; i++){
    textSampleItem[i].style.color = colour;
  }
  textColourMessage.textContent = `The text colour selected is: ${colour}`;
}
// Creates the font family scroll divs. ---------------------------------
function createFontDivs(array, scrollBox){
  for (let i = 0; i < array.length; i++){
    let div = document.createElement('div');
    div.classList.add("fontScrollItemDiv");

    div.addEventListener("click", getFont);

    let paragraph = document.createElement('p');
    paragraph.classList.add("fontItemText");
    let paragraphText = document.createTextNode(`${array[i].group}: ${array[i].family}`);
    paragraph.style.fontFamily = `${array[i].family}`;

    paragraph.appendChild(paragraphText);
    div.appendChild(paragraph);
    scrollBox.appendChild(div);
  }
}
createFontDivs(fontsArray, fontScollDiv);
// The function that adds the font to the text sample and updates the respective text.
function getFont(e){
  let font = e.target.style.fontFamily;
  let text = e.target.textContent;
  for (let i = 0; i < textSampleItem.length; i++){
    textSampleItem[i].style.fontFamily = font;
    textSampleItem[i].textContent = text;
  }

}
// Reset function. --------------------------------------------------------
reset.addEventListener("click", resetApp);

function resetApp(){
  bgHorizontalScrollDiv.scrollLeft = 0;
  textHorizontalScrollDiv.scrollLeft = 0;
  fontScollDiv.scrollTop = 0;

  textContDiv.style.backgroundColor = "white";
  bgColourMessage.textContent = `The background colour selected is: white`;

  for (let i = 0; i < textSampleItem.length; i++){
    textSampleItem[i].style.color = "black";
    textSampleItem[i].style.fontFamily = "helvetica";
    textSampleItem[i].textContent = "Font Group: Font Family";
  }
  textColourMessage.textContent = `The text colour selected is: black`;


}
