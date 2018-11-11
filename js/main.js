"use strict";

// VARIABLES
// =========
var title = document.getElementById("lydzje");
var line = document.getElementById("line");


// INITIALIZATION
// ==============

// Title anim
setTimeout(
    function(){
	title.style.opacity = 1;
    },
    500
)

// Line anim
setTimeout(
    function(){
	line.style.width = "100%";
	line.style.opacity = 1;
    },
    1500
);
// End line anim


// FUNCTIONS
// =========
