"use strict";

// VARIABLES
// =========
var title = document.getElementById("lydzje");
var line = document.getElementById("line");
var buttons = document.getElementById("buttons");


// INITIALIZATION
// ==============

// Title anim
setTimeout(
    function(){
	title.style.opacity = 1;
    },
    500
)
// End title anim

// Line anim
setTimeout(
    function(){
	line.style.width = "100%";
	line.style.opacity = 1;
    },
    1500
);
// End line anim

// Buttons anim
setTimeout(
    function(){
	buttons.style.opacity = 1;
    },
    2700
);
// End buttons anim


// FUNCTIONS
// =========
