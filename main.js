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

let h1Button = document.getElementById("h1But");
let h2Button = document.getElementById("h2But");
let paraButton = document.getElementById("paraBut");

let reduceSizeButton = document.getElementById("reducePx");
let increaseSizeButton = document.getElementById("addPx");

let fontSizeDisplay = document.getElementById("pxSize");
let fontSize = 0;

let resetButton = document.getElementById("reset");
// ///////////////////////////////////////////////////////////////////////
// Getting the current font pixel size.
window.addEventListener("resize", getPixelSize);
document.addEventListener("DOMContentLoaded", getPixelSize);

function getPixelSize(){
  for (let i = 0; i < textSampleItem.length; i++){
    if (textSampleItem[i].classList.contains("hide") == false){
      let elementShownStyles = window.getComputedStyle(textSampleItem[i]);
      let pixelSize = elementShownStyles.getPropertyValue("font-size");
      console.log(pixelSize);
      let parsedPixels = parseFloat(pixelSize);
      console.log(parsedPixels);
      fontSize = parsedPixels;
      console.log(fontSize);
      displayPixels();
    }
  }
}
function displayPixels(){
  fontSizeDisplay.textContent = fontSize + "px";
}
// ----------------------------------------------------------------
window.addEventListener("resize", adjustWidth);
document.addEventListener("DOMContentLoaded", adjustWidth);
// The adjustWidth function is required to provide the width in pixels. This enables the colour contianers to be scrolled horizontally, and ensures the container does not become wider than the page.
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
// Swap the type of element: h1, h2, or p. ------------------------------
h1Button.addEventListener("click", swapElement);
h2Button.addEventListener("click", swapElement);
paraButton.addEventListener("click", swapElement);

function swapElement(e){

  let element = e.target.value;
  if (element == "h1"){
    textSampleItem[0].classList.remove("hide");
    textSampleItem[1].classList.add("hide");
    textSampleItem[2].classList.add("hide");
    h1On();
    getPixelSize();
  } else if (element == "h2"){
    textSampleItem[0].classList.add("hide");
    textSampleItem[1].classList.remove("hide");
    textSampleItem[2].classList.add("hide");
    h2On();
    getPixelSize();
  } else if (element == "para"){
    textSampleItem[0].classList.add("hide");
    textSampleItem[1].classList.add("hide");
    textSampleItem[2].classList.remove("hide");
    paraOn();
    getPixelSize();
  }
}
// Functions to toggle the elements button colours when selected. ---
function h1On(){
  h1Button.classList.add("buttonOn");
  h1Button.classList.remove("buttonOff");
  h2Button.classList.add("buttonOff");
  h2Button.classList.remove("buttonOn");
  paraButton.classList.add("buttonOff");
  paraButton.classList.remove("buttonOn");
}
function h2On(){
  h1Button.classList.add("buttonOff");
  h1Button.classList.remove("buttonOn");
  h2Button.classList.add("buttonOn");
  h2Button.classList.remove("buttonOff");
  paraButton.classList.add("buttonOff");
  paraButton.classList.remove("buttonOn");
}
function paraOn(){
  h1Button.classList.add("buttonOff");
  h1Button.classList.remove("buttonOn");
  h2Button.classList.add("buttonOff");
  h2Button.classList.remove("buttonOn");
  paraButton.classList.add("buttonOn");
  paraButton.classList.remove("buttonOff");
}
// Changing the font size. --------------------------------------------
reduceSizeButton.addEventListener("click", reduceFontSize);
increaseSizeButton.addEventListener("click", increaseFontSize);

function reduceFontSize(){
  fontSize = fontSize - 1;

  for (let i = 0; i < textSampleItem.length; i++){
    if (textSampleItem[i].classList.contains("hide") == false){
      textSampleItem[i].style.fontSize = fontSize + "px";
      getPixelSize();
    }
  }
}
function increaseFontSize(){
  fontSize = fontSize + 1;

  for (let i = 0; i < textSampleItem.length; i++){
    if (textSampleItem[i].classList.contains("hide") == false){
      textSampleItem[i].style.fontSize = fontSize + "px";
      getPixelSize();
    }
  }
}

// Reset function. ----------------------------------------------------
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
  textSampleItem[0].classList.remove("hide");
  textSampleItem[1].classList.add("hide");
  textSampleItem[2].classList.add("hide");

  textSampleItem[0].style.fontSize = "48px";
  textSampleItem[1].style.fontSize = "32px";
  textSampleItem[2].style.fontSize = "24px";

  h1On();

  textColourMessage.textContent = `The text colour selected is: black`;
  getPixelSize();

}
