const array=[1,153,3,4,5,25,7,8,9];
array.filter(function(value)
{
    if(value%2==0)
    {
        console.log(value);
    }
})

const evenArray=array.filter((value)=>value%2===0)
console.log(evenArray)

const oddArray=array.filter((value)=>value%2!==0)
console.log(oddArray)
let max=array[0];
let isPrime;
const primeNUmber=array.filter((value)=>
{
    isPrime=true;
    if(value==1)
    {
        isPrime=false;
    }
    for(let i=2;i<value;i++)
    {
        if(value%i==0)
        {
            isPrime=false;
        }
    }
    if(isPrime==true)
    {
        return value;
    }
}
)
console.log("primeNUmber"+primeNUmber);
const armstrongNUmber=array.filter((value)=>
{
    let temp=value;
    let armstrong=0;
    let count=0;
    while(temp!==0)
    {
        count++;
        temp=Math.floor(temp/10);
    }
    temp=value;
    while(temp!==0)
    {
        let reminder=temp%10;
         armstrong=armstrong+Math.pow(reminder,count);
         temp=Math.floor(temp/10);
    }
    if(armstrong===value)
    {
        return value;
    }
}
)
console.log("armstrongNumber:"+armstrongNUmber);

const automorphicArray=array.filter(function(value)
{
    let temp=value;
    let square=temp*temp;
    while(temp!=0)
    {
        let tempReminder=temp%10;
        let squareReminder=square%10;
        if(tempReminder!==squareReminder)
        {
            break;
        }
        temp=Math.floor(temp/10);
        square=Math.floor(square/10);
    }
    if(temp===0)
    {
        return value;
    }
})

console.log("automorphicArray",automorphicArray);





