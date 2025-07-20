let base=parseInt(prompt("entre base"));
let power=parseInt(prompt("enter power"));
let number=1;
if(power>0){
for(let i=1;i<=power;i++)
{
    number=number*base;
  
}
console.log(number);
}
else{
    console.log(1);
}
