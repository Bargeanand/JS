const array=[1,2,3,4,5]

let max=-Infinity;
array.forEach(function(value)
{
    if(value>max)
    {
        max=value;
    }
})
console.log(max);

let max1=-Infinity;
let max2=-Infinity;

array.forEach(function(value){
    if(max1<value)
    {
        max2=max1;
        max1=value;
    }
    else if(max1>value && max2<value)
    {
        max2=value;
    }
})
console.log("max1:"+max1+" max2:"+max2);
let num;
array.forEach((values)=>
    {
        if(values%2==0)
        {
            num=values;
        }
    }

)
console.log("num "+num);