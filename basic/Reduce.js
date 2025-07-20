const array=[3,2,3,4,5];
const total=array.reduce((accuumalator,currValue)=>accuumalator+currValue,0)   //here 0 is intial value of accumalator
console.log(total);

const object=
[
    {
    cource:"java",
    price:7000
    }
    ,
    {
        cource:"js",
        price:5000
    },
    {
        cource:"html",
         price:2000   
    }
]
const totalPrice=object.reduce((accumalator,item)=>
    {accumalator+item.price;
        
    }
,0)
    
console.log(totalPrice)




