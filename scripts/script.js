// JavaScript Document

// var body = document.querySelector('body');
// button.onclick = function(){
// body.classList.toggle('dark-layout');
// }

const lightButton = document.querySelector(".contrast-trigger");

lightButton.addEventListener("click", toggleLight);

function toggleLight() {
    document.documentElement.classList.toggle("light-mode");
}
