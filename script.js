document.addEventListener("DOMContentLoaded",()=>{
  console.log("JavaScript loaded successfully!");
  
  const slide = document.getElementById("slide");
  
if(slide)
{
let images = [
  "media/blues.png",
  "media/boxer.png",
  "media/iit.png",
  "media/redbird.png",
  "media/smoke.png",
  "media/smug.png",
  "media/suit.png",
  "media/writer.png",
  "media/yellowbird.png"
];

  let index=0;
  
  function showSlide() {
	  document.getElementById("slide").src = images[index];
  }
  
  window.nextSlide = function() {
	  index = (index+1) % images.length;
	  showSlide();
  }
  
  window.prevSlide = function(){
	  index = (index - 1 +images.length)%images.length;
	  showSlide();
  }
});