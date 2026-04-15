document.addEventListener("DOMCOntentLoaded",()=>{
  console.log("JavaScript loaded successfully!");
  
  const heading = document.querySelectorAll("h1");
  
  headings.forEach(h=> {
	  h.addEventListener("click,()=> {
		  h.style.color= h.style.color === "blue"? "black" : "blue";
	  });
  });
});

let images = [
  "media/blues.png",
  "media/boxer.png",
  "media/it.png",
  "media/redbird.png",
  "media/smoke.png",
  "media/smug.png",
  "media/suit.png",
  "media/writer.png",
  "media/yellowbird.png"
];
