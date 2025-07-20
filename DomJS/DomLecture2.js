// const fruitArray=["apple","mango","banana"];

// const liEle=fruitArray.map((value)=>
// {
//     const list=document.createElement('li');
//     list.innerHTML=value;
//     return list;
    
// })
// document.querySelector("#ulList").append(...liEle);

// const table=document.createElement('table');
// table.border="1"
// function createRow()
// {
//      const row=document.createElement('tr');
//      return row;
// }
// function createCol()
// {
//     const colNo=document.createElement("td");
//     colNo.innerText=prompt("enter data");
//     return colNo;
// }
// const row1=createRow();
// const col1=createCol();
// const col2=createCol();
// row1.append(col1);
// row1.append(col2);
// table.append(row1);

// const col3=createCol();
// const col4=createCol();
// const row2=createRow();
// row2.append(col3)
// row2.append(col4);
// table.append(row2);

// document.querySelector("#tableContainer").append(table)

const table=document.createElement('table');
function genrateTable()
{
    for(let i=0;i<3;i++)
    {
        let row=document.createElement('tr');
        for(let j=0;j<2;j++)
        {
            let col=document.createElement('td')
            col.innerText="columns";
            row.append(col);
        }
    
        table.append(row);
    }
    document.querySelector("#tableContainer").append(table);
}
const button=document.querySelector("#button");
button.addEventListener("click",function(){
    genrateTable();
})







