let number=parseInt(prompt("entre number"));
let reminder=1;
let temp=number;
let armstrong=0;
while(temp!==0)
{
    reminder=temp%10;
    armstrong=armstrong+(reminder*reminder*reminder);
    temp=Math.floor(temp/10);
}
if(armstrong===number)
    console.log("armstrong");
else
    console.log("not armstrong");