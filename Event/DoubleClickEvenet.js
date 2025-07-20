const btn=document.querySelector("#btn")
const div=document.querySelector("#div1")
btn.addEventListener("dblclick",()=>
{
    btn.innerHTML="hitme"
})

btn.addEventListener("dblclick",()=>
{
    div.innerHTML="he buttons being pressed (if any) when the mouse event was fired."
})

btn.addEventListener("dblclick",()=>
{
    document.querySelector("body").style.backgroundColor="orange";
}
)