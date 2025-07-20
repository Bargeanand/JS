// function AlternatePrime(startRange,endRange)
// {
//     let count=1;
//     for(let i=startRange;i<=endRange;i++)
//     {
//         if(i!==1){
//         let isPrime=true;
//         for(let j=2;j<i;j++)
//         {
//             if(i%j==0){
//                 isPrime=false;
//                 break;
//             }
//         }
//         if(isPrime==true)
//         {
//             if(count%2!=0){
//                 console.log(i);
//             }
//             count++;
//         }
//     }
// }
// }
// AlternatePrime(1,20);

// function emirpNumber(number)
// {
//     number=reverse(number);
//     let isPrime=true;
//     for(let i=2;i<number;i++)
//     {
//         if(number%i==0)
//         {
//              isPrime=false;
//              console.log(number+" not emirpNumber");
//              break;
//         }
//     }
//     if(isPrime==true)
//     {
//        console.log(number+" is emirpNumber");
//     }
// }
// function reverse(number)
// {
//     let rev=0;
//     let reminder=0;
//     let temp=number;
//     while(temp!==0)
//     {
//         reminder=temp%10;
//         rev=reminder+(rev*10);
//         temp=Math.floor(temp/10);
//     }
//   return number=rev;
// }
// emirpNumber(23);

// function OnetoTen(number)
// {
//     if(number==11)
//     {
//         return;
//     }
//     console.log(number);
//     OnetoTen(number+1);
// }
// OnetoTen(1);
// console.log("TenToOne function");
// function TenToOne(number)
// {
//     if(number==0)
//     {
//         return;
//     }
//     console.log(number);
//     TenToOne(number-1);
// }
// TenToOne(10);
function zigZag1(number,row,column,count,result)
{
    if(row>number)
    {
        return;
    }
    if(column<row)
    {
       result=result+count+" ";
       if(row-1===column){
       console.log(result);}
       zigZag1(number,row,column+1,count+1,result);
    }
    else
    {
       zigZag1(number,row+1,0,count,"");
    }
}
let number=parseInt(prompt("enter number"));
zigZag1(number,1,0,1,"");

function zigzag2(number,row,column,count,result)
{
   if(row>number){
     return;
   }
   if(column<number)
   {
     result=result+count+" ";
     if(column+1===number)
     {
        console.log(result);
     }
     zigzag2(number,row,column+1,count+1,result)
   }
   else{
    zigzag2(number,row+1,0,count,"")
   }
}
let number1=parseInt(prompt("enter number"));
zigzag2(number1,1,0,1,"");


function zigzag3(number,row,column,count,result)
{
   if(row>number){
     return;
   }
   if(column<number)
   {
    if(row%2==0){
       result=result+((count-column)+Math.abs(number-column-1))+" ";
    }
    else{
         result=result+count+" "; 
    }
     if(column+1===number)
     {
        console.log(result);
     }
     zigzag3(number,row,column+1,count+1,result)
   }
   else{
    zigzag3(number,row+1,0,count,"")
   }
}
console.log("zigzag3");
zigzag3(number,1,0,1,"");
