document.addEventListener("DOMContentLoaded",()=>{
  console.log("JavaScript loaded successfully!");
  
  const heading = document.querySelectorAll("h1");
  
  heading.forEach(h=> {
	  h.addEventListener("click",()=> {
		  h.style.color= h.style.color === "blue"? "black" : "blue";
	  });
  });
});
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
  
  function nextSlide() {
	  index = (index+1) % images.length;
	  showSlide();
  }
  
  function prevSlide(){
	  index = (index - 1 +images.length)%images.length;
	  showSlide();
  }
});