const navDiv = document.querySelector('.nav');
const  infoDiv= document.querySelector('.info');

// Get the width of the sibling div
const navWidth = navDiv.offsetWidth + 'px';

// Set the CSS variable value
infoDiv.style.setProperty('--navDiv-width', navDiv);