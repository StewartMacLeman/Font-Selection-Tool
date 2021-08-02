"use strict";

// Array of colours. --------------------------------------------------------
let colourArray = [ "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke" , "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "sandybrown", "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "lightsalmon", "salmon", "darksalmon", "lightcoral", "indianred", "crimson", "firebrick", "darkred", "red", "tomato", "coral", "darkorange", "orange", "yellow", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "gold", "darkolivegreen", "olive", "olivedrab", "yellowgreen", "limegreen", "lime", "lawngreen", "chartreuse", "greenyellow", "springgreen", "mediumspringgreen", "lightgreen", "palegreen", "darkseagreen", "mediumaquamarine", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "lightseagreen", "cadetblue", "darkcyan", "teal", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "steelblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "pink", "lightpink", "hotpink", "deeppink", "palevioletred", "mediumvioletred", "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "darkslateblue", "slateblue", "mediumslateblue", "gainsboro", "lightgray", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black" ];

// Gobal varibles. -------------------------------------
let mainContainer = document.getElementById("main");
let bgHorizontalScrollDiv = document.getElementById("bgHorScroll");
let textHorizontalScrollDiv = document.getElementById("textHorScroll");

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
function createColourScroll(array, scrollBox){
  for (let i = array.length-1; i >= 0; i--){
    let div = document.createElement('div');
    div.classList.add("horizontalColItem");
    div.style.backgroundColor = array[i];

    div.addEventListener("click", addColour);

    scrollBox.appendChild(div);
  }
}
createColourScroll(colourArray, bgHorizontalScrollDiv);
createColourScroll(colourArray, textHorizontalScrollDiv);

// Add colours to the sample text.
function addColour(){
  console.log("Hello!!");
}
