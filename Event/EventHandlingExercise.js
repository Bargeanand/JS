//  //1. When a button is clicked, change the background color of the page.
//   //  Tip: Use document.body.style.backgroundColor inside the button's click event.

// const btn=document.querySelector("#btn");
// const body=document.querySelector("body");
// btn.addEventListener("click",()=>{
    
//     body.style.backgroundColor="orange";
// }
// )
// // 2. Double-click a box to change its text to something new.
//     //Tip: Use element.addEventListener('dblclick', ...) and change textContent

// const btn1=document.querySelector("#btn2")
// btn1.addEventListener("dblclick",()=>
// {
//     btn1.innerText=`Common targets are Element, or its children, Document, and Window, 
//     but the target may be any object that supports events (such as IDBRequest).`

// })

// //3. When you move the mouse over an image, make it bigger.
// //    Tip: Use mouseover event and increase style.width or use transform: scale.

// const img=document.querySelector("#img1");
// img.addEventListener("mouseover",()=>
// {
//     img.style.width="500px";
// })


// // 4. When the mouse leaves the image, make it go back to normal size.
//     //Tip: Use mouseout event to reset style to original

// img.addEventListener("mouseout",()=>
// {
//     img.style.width="100px";
// })

//     //5. Click a button to add a new sentence to the page.
//     //  Tip: Use document.createElement to make a <p> and append it
//     function addText(){
//     const p=document.createElement("p");
//     p.innerHTML="5. Click a button to add a new sentence to the page."
//     document.querySelector("body").append(p);
//     }

//     const btn2=document.querySelector("#btn3")
//     btn2.addEventListener("click",addText)

// //**********// 6. Click any list item to show its text in the console.   ********
// // Tip: Use a loop to add click event to each list item.
// const myul=document.querySelector("ul");
// for(let i=0;i<myul.children.length;i++)
// {
//     myul.children[i].addEventListener("click",()=>{
//         console.log(myul.children[i].innerHTML);
//     });
// }
// //7. Right-click on a box to show a custom alert message.
//  //   Tip: Use 'contextmenu' event and preventDefault() to stop the default menu

// btn.addEventListener("contextmenu",()=>
// {
//     alert("button clicked");
// })
 
// //  8. Click a button to show or hide a message box.
// //     Tip: Toggle the display using style.display or classList.toggle.

// const h1=document.querySelector("#h1");
// const heading1=h1.cloneNode(true);
// document.querySelector("body").append(heading1);


// const btn5=document.querySelector("#btn5");
// btn5.addEventListener("click",()=>
// {
//     btn.style.display="none";
// })
// //  10. Click a button to make a copy of a box and add it to the page.
// //     Tip: Use cloneNode(true) and appendChild to duplicate.



// // 11. Move your mouse into a card to add a colored border.
// //     Tip: Use mouseenter to change element.style.border
// const btn6=document.querySelector("#btn6");
// const div1=document.querySelector("#div1")
// btn6.addEventListener("mouseenter",()=>
// {
//     div1.style.border="10px solid black";
//     div1.style.width="100px";
//     div1.style.width="100px";
//     div1.style.backgroundColor="yellow";
// })

// //  12. Move your mouse out of the card to remove the border.
// //     Tip: Use mouseleave to reset the border.

// btn6.addEventListener("mouseleave",()=>
// {   
//     div1.style.border="none";
//     div1.style.backgroundColor="white";
// })

// 14. Click a button to add a new item to a list.
  //  Tip: Use createElement('li') and append it to a <ul>.

// const li=document.createElement("li");
// li.innerHTML=6;
// const ul=document.querySelector("#ul");
// ul.addEventListener("click",()=>{
//     ul.append(li);
// })

//  15. Click any colored button to highlight it.
//     Tip: Use querySelectorAll and classList.add on click

const button=document.querySelectorAll("button");
button.forEach((v)=>
{
  v.addEventListener("click",()=>
  {
    button.forEach((v1)=>
    {
      if(v1.classList.contains("heighlight"))
      {
        v1.classList.remove("heighlight");
      }
    }
    )
     v.classList.add("heighlight")     
  })

})
//  //18. Click a button to switch between light mode and dark mode.
//  //   Tip: Use classList.toggle on the body element

//  const btn4=document.querySelector("#btn4")
//  btn4.addEventListener("click",()=>
// {
//      btn4.classList.toggle("light");
//      btn4.classList.toggle("black");
// })
// // 19. Click to change a heading's color to a random one.
//   //  Tip: Use a list of color names (e.g., ['red', 'green', 'blue']) and set text color using one from the list.
// const a=["red","green","blue"];
// const heading=document.querySelector("#h2");
// heading.addEventListener("click",()=>
// {
//     let color=Math.random()*3;
//     console.log(color);
//     heading.style.color=a[Math.round(color)];
// })

// //  20. Click a button to remove the last item from a list.
// //     Tip: Use list.lastElementChild.remove().

// const ulList=document.querySelector("#ul");
// const remove=document.querySelector("#remove");
// remove.addEventListener("click",()=>
// {
//     ulList.lastChild.remove();
// })


const div2=document.querySelector ("#div2");
div2.addEventListener("keydown",(event)=>
{
    console.log(event.key);
})



  

 



