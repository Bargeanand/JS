//1. Implicit Coercion 

let result="rohit:"+45;
console.log(result);

let result1="anand"*2;
console.log(result1);   //NAN

let result2="5"*2;                  //Number("5")*2=10;
console.log(result1); 

// toPrimitive

let result3=[1,2]+5;
console.log("result:",result3);


//2.Explicit

//a string to number
let str1="1234";
let number1=parseInt(str1);
console.log(number1);

let str2="123ABC";
let number2=parseInt(str2);
console.log(number2);

let str3="ABC123";
let number3=parseInt(str3);
console.log(number3);

let str4=123.45
let number4=parseInt(str4);
console.log(number4);

let str5="12345"
let number5=Number(str5);
console.log(number5);

let str6="12345abc"
let number6=Number(str6);           // it can try to conert entire string into number that's why it return NaN
console.log(number6);


let str7="123.45"
let number7=Number(str7);
console.log(number7);

let str8=123.45
let number8=parseFloat(str8)
console.log(number8)

//b number to string

let number9=123
let str9=String(number9);
console.log(typeof(str9));

let number10=123
let str10=number10.toString();
console.log(typeof(str10));






