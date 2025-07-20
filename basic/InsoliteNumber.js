let number=parseInt(prompt("enter number"));
let reminder=1;
let sumOfDegit=0;
let isOdd=true;
while(number!=0)
{
    reminder=number%10;
    if(reminder%2==0)
    {
        isOdd=false;
         console.log("not inSolite");
        break;
    }
    else{
        sumOfDegit=sumOfDegit+reminder;
    }
    number=Math.floor(number/10);
}
if(isOdd===true){
let isPrime=true;
for(let i=2;i<sumOfDegit;i++)
{
    if(sumOfDegit%i==0)
    {
        isPrime=false;
        break;
    }
}
if(isPrime===true)
{
    console.log("inSolite");
}
}