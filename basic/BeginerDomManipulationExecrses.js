// //first question

// const div=document.createElement('div');
// div.innerHTML="hi i am anand barge";
// document.body.appendChild(div);


// //second qquestion

// document.getElementById('abc1').remove();

// // third question using function and loop

function addList1(language)
{
    const list=document.createElement('li')
    list.innerHTML=language;
    document.querySelector('#firstUl').append(list);
}
for(let i=0;i<5;i++)
{
    const list1=addList1(prompt("enter language you want to add in list"));
}

// //sixth question

// document.querySelector('#firstParagraph').textContent=`During these formative years of the Web, web pages could only be static,`

// //seventh question
// document.querySelector('.origanlClass').setAttribute("class","newClass")

// //fifth question

// const img=document.querySelector('#firstImage');
// img.setAttribute("src","../images/2.png")
// img.setAttribute("alt","img2")


