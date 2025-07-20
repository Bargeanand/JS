let a=parseInt(prompt("enter first number"));
let b=parseInt(prompt("enter second number"));
let c=parseInt(prompt("enter third number"));

if(a>b && b>c)
{
    console.log("a is greater");
    console.log("c is smaller");
}
else if(a>b && c>b && c<a)
{
     console.log("a is greater");
    console.log("b is smaller");
}
else if(b>a && a>c)
{
     console.log("b is greater");
    console.log("c is smaller");
}
else if(b>a && c>a && b>c)
{
     console.log("b is greater");
    console.log("a is smaller");
}
else if(c>a && a>b)
{
     console.log("c is greater");
    console.log("b is smaller");
}
else if(c>a && b>a && c>b)
{
     console.log("c is greater");
    console.log("a is smaller");
}
