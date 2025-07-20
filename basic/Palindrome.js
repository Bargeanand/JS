let number=parseInt(prompt("enter number"));
let reverse=0;
let reminder=1;
let temp=number;
while(temp!=0)
{
    reminder=temp%10;
    reverse=reminder+(reverse*10);
    temp=Math.floor(temp/10);
}
if(reverse==number)
    console.log("plainrome number");
else
    console.log("not plaindrome");


