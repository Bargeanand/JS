let a=parseInt(prompt("enter first number"));
let b=parseInt(prompt("enter second number"));
let temp=a;
a=b;
b=temp;
console.log("a:"+a);
console.log("b:"+b);

a=a+b;
b=a-b;
a=a-b;
console.log("a:"+a);
console.log("b:"+b);
