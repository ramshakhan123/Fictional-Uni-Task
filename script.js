let busSlide = document.querySelector("#bus-image")
let appleSlide = document.querySelector("#apple-image")
let breadSlide = document.querySelector("#bread-image")


function currentSlide1() {
   busSlide.style.display = 'block';
   appleSlide.style.display = 'none';
   breadSlide.style.display = 'none';


}

function currentSlide2() {
   appleSlide.style.display = 'block';
   breadSlide.style.display = 'none';
   busSlide.style.display = 'none';


}

function currentSlide3() {
   breadSlide.style.display = 'block';

   appleSlide.style.display = 'none';
   busSlide.style.display = 'none';


}

function show() {
   document.querySelector("#hamburger").style.display = "block";
   document.querySelector("#hamburger li").style.display = "block";

}