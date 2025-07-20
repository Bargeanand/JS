// const search=document.querySelector("#search");
// const list=document.querySelector("#list")
// const array=["java","js","python","css","jquery"];

// array.forEach(function(word)
// {
//     const li=document.createElement("li");
//     li.innerText=word;
//     list.append(li);
// }) 


// search.addEventListener("input",(event)=>
// {
//     const filterword=array.filter(function(word){
// return  word.includes(event.target.value);
//     })
//     list.innerHTML  ="";
// filterword.forEach((word)=>
// {
//     const li=document.createElement("li");
//     li.innerText=word;
//     list.append(li);
// })  
// })

// document.addEventListener("keydown",(event)=>
// {
//     console.log(event);
//     // // if(event.altKey && event.code==='KeyS')
//     // // {
//     // //     search.focus();
//     // // }
//     // if(event.key=="s")
//     // {
//     //     event.preventDefault();
//     // }
// })
const array=[1,2,3,4,5,6]
function evennSum(array){
const evenArray=array.filter((v)=>{
if(v%2==0)
{
     return v;
}
})
const evenNumberSum=evenArray.reduce(function(accumulator,currValue){
         return accumulator+currValue;
},0)
console.log(evenNumberSum)}
evennSum(array);
// let count=0;
// const increment =document.querySelector("#increment");
// const div=document.querySelector("#div");
// const reset=document.querySelector("#reset ");
// increment.addEventListener("click",()=>
// {
//      count=count+1;
//      div.innerText=count;
// })
// reset.addEventListener("click",()=>
// {
//     count=0;
//     div.innerText=count;
// })
// function fizzBuzz(n)
// {
// if(n%3==0 && n%5==0)
// {
//        console.log(n,":FizzBuzz");
// }
//  else if(n%3==0)
// {
//    console.log(n,":Fizz");
// }
// else if(n%5==0)
// {
//       console.log(n,":Buzz");
// }
// }

// let n=parseInt(prompt("enter max limit"));

// for(i=1;i<n;i++)
// {
//     fizzBuzz(i);
// }

const user={
   firstName: "ayasha", 
   lastName:"khan",
   age: 22
}
user.firstName=user.firstName.trim();
user.lastName=user.lastName.trim();
function getFullUsername(user)
{
    if(user.firstName==null || user.firstName=="")
    {
        return "Name not available"
    }
    else if(user.lastName==null||user.lastName==""){
       return "Name not available"
    }
   else{ 
   let fullName=user.firstName+" "+user.lastName;
    return fullName;
   }
}
console.log(getFullUsername(user))
 
// const btn=document.querySelector("#btn");
// let text=document.querySelector("#input")
// let greeting="";
// text.addEventListener("input",(e)=>{
//    greeting=e.target.value;
// }
    
// )
// btn.addEventListener("click",()=>
// {
//     if(greeting=="" ||greeting==null)
//     {
//         console.log("input is empty");
//     }
//     else {
//     console.log(`hello ${greeting}`);}

// } )
