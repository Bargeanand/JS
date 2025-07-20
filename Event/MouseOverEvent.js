const img=document.querySelector("#img1");
img.addEventListener("mouseover",()=>
{
    img.style.width="700px";
})

img.addEventListener("mouseout",()=>
{
    img.style.width="300px";
})