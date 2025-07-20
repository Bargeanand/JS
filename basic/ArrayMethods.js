//pop

const array=[1,2,3,4];
let r=array.pop();
console.log(r);

//push
let y=array.push(5,6,7,8,9,10);
console.log(y);  //y is length of an array

//shift

let z=array.shift();
console.log(z,array);


//unshift

let a=array.unshift(10,12,21);
console.log(a,array);

//splice

let x=array.splice(1,3,101,102,103);
console.log(x,array);                //return array of removed eleemnt

//forEach

array.forEach(function(value,index)
{
    console.log(index+":"+value);
})

//toString

let array1=[11,22,44,3];
console.log(array1.toString());

//join

console.log(array1.join("_"));


//concat

let newArray=array.concat(array1);
console.log(newArray);

//delete 

// delete array1[0];
// console.log(array1.length)

console.log(array1.sort())






