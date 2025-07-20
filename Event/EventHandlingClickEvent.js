const btn=document.querySelector("#button");
let Content="click";

btn.addEventListener('click',()=>
{
    if(Content=="click")
    {
       btn.innerHTML="hitMe"; 
       Content="hitMe";
     btn.textContent=`${event.details}`;
    }
    else{
        btn.innerHTML="click"; 
        Content="click";
    }

})