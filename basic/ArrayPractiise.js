const array=[1,2,3,4,5,6]

function arrayReverse(array)
{
    for(let i=0;i<(array.length/2);i++)
    {
        let temp=array[i];
        array[i]=array[array.length-1];
        array[array.length-1]=temp;
    }
   arrayDisplay(array);
}
function arrayDisplay(array)
{
    let result="";
    for(let i=0;i<array.length;i++)
    {
        result=result+array[i]+" ";
    }
    console.log("[ "+result+" ]");
}
arrayReverse(array);