//array declaration:
// const array=[1,2,4]

// //acseesing array element:
// console.log(array[3][2])
// array[1]=true
// console.log(array)
// array[5]="abcd"
// console.log(array)

// //array methods:
// array.push(4)     //add element in last position
// console.log(array)

// array.pop()         //remove element from last position
// console.log(array)

// array.shift()       //remove element from first position 
// console.log(array)

// array.unshift("barge")          //add element to first position
// console.log(array)


// //slice

// console.log(array.slice(1,4))

//splice
// console.log(array)
// array.splice(1,2)     //contain start index delete count,also we add element
// console.log(array)

// array.splice(0,1,2,3,4,5)
// console.log(array)


// array.push(1,60)

// console.log(array)

//loop:

//1.forEach

// array.forEach(function(value,index)
// {
//     console.log(`value is ${value} at index ${index}`)
// }
// )

// //2.for of

// for(const element of array)
// {
//     console.log(element)
// }

//3.map used for transformation

// const transforArray=array.map(function(value)
// {
//     return value*10
// }
// )

// console.log("transformed array:");
// transforArray.forEach(function(value,index)
// {
//     console.log(`value is ${value} at index ${index}`)
// }
// )
// const transforArray1=array.map((value)=>
//     {value*10;})

//4:filter()

// const filterArray=array.filter(function(v)
// {
//     if(v<4){
//         filterArray=v;
//     }

// })
// console.log(filterArray)


// let total=array.reduce(function(preValue,currValue)
// {
//     return preValue+currValue;
// }
// ,0
// )
// console.log(total);


const studentArray=["anand","vivek","rohan","pruthvi","rahul"]

for(i=0;i<studentArray.length;i++)
{
    if(i==2)
    {
        console.log(studentArray[i]);
    }
}

const array=[1,2,3,4]

const mapArray=array.map(function(value)
{
    return value*2
})
console.log(mapArray)


const array1=[1,2,3,4,5,6,7,8,9,10]
const filterArray=array1.filter(function(v){
    return (v%2)!=0
}

)


console.log(filterArray)
