let j=2;
let isPrime=true;
for(let i=10;i<=50;i++)
{
    while(j<i)
    {
        if(i%j==0)
        {
            isPrime=false;
        }
        j++;
    }
    j=2;
    if(isPrime==true)
    {
        console.log(i);
    }
    else{
        isPrime=true;
    }
}