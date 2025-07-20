let number=parseInt(prompt("enter no of number"));
let count=1;
let result;
for(let i=1;i<=number;i++)
{
    result="";
    for(let j=0;j<i;j++)
    {
        result=result+count+" ";
        count++;
    }
    console.log(result);
}