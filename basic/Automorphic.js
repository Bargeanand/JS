let number=parseInt(prompt("enter number"))
let square=number*number;
let numberReminder=0;
let squareReminder=0;
while(number!==0)
{
    numberReminder=number%10;
    squareReminder=square%10;
    if(numberReminder!==squareReminder){
        console.log("number is not automorphic number");
        break;
    }
    number=Math.floor(number/10);
    square=Math.floor(square/10);
}
console.log(number);
if(number==0)
console.log("number is automorphic number");
