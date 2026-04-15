document.addEventListener("DOMCOntentLoaded",()=>{
  console.log("JavaScript loaded successfully!");
  
  const heading = document.querySelectorAll("h1");
  
  headings.forEach(h=> {
	  h.addEventListener("click,()=> {
		  h.style.color= h.style.color === "blue"? "black" : "blue";
	  });
  });
});

