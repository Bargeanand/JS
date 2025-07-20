const btn=document.querySelector("#btn");
const div=document.querySelector("#div1");
btn.addEventListener("click",()=>{
    div.innerHTML="It works on any event target, not just HTML or SVG elements."
     div.style.backgroundColor="red";
})