const celsiusArray=[10,20,30]

const fahrenheitArray=celsiusArray.map(function(value){
    return (value*9)/5+32;
})
console.log(fahrenheitArray);