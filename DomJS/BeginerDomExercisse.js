//1. Create a <div> with text and append it to the body using JavaScript.

div=document.createElement("div");
div.setAttribute("class","jsDiv1")
div.innerText=`The first popular web browser with a graphical user interface, Mosaic, was released in 1993. The lead developers of Mosaic then founded the 
The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, which released a mor
 which released a more polished browser, Netscape Navigator, in 1994. This quickly became the most-used`

 document.querySelector('body').append(div);

 //2.Remove a specific element from the DOM using its ID

document.querySelector('#p1').remove();

// 3. Create a <ul> with 5 <li> items using a loop and add it to the page.

let ul=document.createElement('ul')
for(let i=0;i<5;i++)
{
    let list=document.createElement('li');
    list.innerHTML=prompt("enter list content");
    ul.appendChild(list);
}
document.querySelector('body').append(ul);
// 4. Replace an existing <div> element with a new one containing different text.

    const div1=document.createElement('div')
    div1.setAttribute("class","jsDiv1")
    div1.innerHTML=`Microsoft first released JScript in 1996, alongside initial support for CSS and extensions to HTML. 
    Each of these implementations was noticeably different from their counterparts in Netscape Navigator.[18][19] 
    These differences made it difficult for developers to make their websites work well in both browsers, 
    of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years`

    const oldChild=document.querySelector('body > .jsDiv1')
    document.body.replaceChild(div1,oldChild);

//  5. Change the 'src' and 'alt' attributes of an <img> element.

document.querySelector('#img1').setAttribute('src',"../images/2.png");
document.querySelector('#img1').setAttribute('alt',"img2");

// 6. Change the text content of an element using textContent:

document.querySelector('body > .jsDiv1').textContent=`The first popular web browser with a graphical user interface, Mosaic, was released in 1993. The lead developers of Mosaic then founded the 
The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, which released a mor
 which released a more polished browser, Netscape Navigator, in 1994. This quickly became the most-used`

//7.Remove one class from an element and add another class
document.querySelector("body > .htmlFirstDiv").setAttribute("class","htmlfirstDivNevDiv");

// 8. Insert a newly created <p> element before an existing <h2> element
const p1=document.createElement('p');
p1.innerText="Insert a newly created <p> element before an existing <h2> element"
const h2=document.querySelector('#secondh2');
h2.parentNode.insertBefore(p1,h2);
// 9. Set innerHTML of a div to create multiple <p> elements at once

const div3=document.createElement('div');
div3.setAttribute("class","div3")
for(let i=0;i<2;i++)
{
    const p2=document.createElement('p');
    p2.innerHTML="set innerHTML of a div to create multiple <p> elements at once"
    div3.append(p2);
    document.querySelector('body').append(div3);
}

//10. Create a <div> and set its width, height, and background color via style

const div4=document.createElement("div");
div4.style.width="100px";
div4.style.color="red";
div4.style.border="10px";
div4.innerText="jdshfsjdh"
div4.style.backgroundColor="black"
document.querySelector('body').append(div4);

// 11. Clone an existing element and append the clone to the body    
const ulTag=document.querySelector('body > ul');
const cloneUl=ulTag.cloneNode(true);
document.body.append(cloneUl);


//12. Create a new input field and assign it a placeholder attribute


const inputfield=document.createElement('input','text')
inputfield.setAttribute("placeholder","enter text")
document.querySelector('body').append(inputfield);

// 13. Create a <table> with 3 rows and 2 columns using JavaScript

const table=document.createElement('table')
for(let i=0;i<3;i++)
{
    let row=document.createElement('tr');
    for(let j=0;j<2;j++)
    {
        let col=document.createElement('td');
        col.innerText=(`col${j} roi${i}`)
        row.append(col);
    }
    table.append(row);
}
table.border="1";
document.querySelector('body').append(table);


// 14. Set a custom data-* attribute on an element and retrieve it

document.querySelector('#secondHtmlDiv').setAttribute("data-user-id","abc124")

const userId=document.querySelector("#secondHtmlDiv").getAttribute("data-user-id")

console.log("userId",userId);

//15. Append a new option to an existing <select> element.

const newOption=document.createElement('option')
newOption.innerText="newOption"
document.querySelector("#select").append(newOption)


// // 16. Clear all children from a <div> using a loop or innerHTML.

//1.
const removedDiv=document.querySelector('.div3');
removedDiv.innerHTML="";

//2.
while(removedDiv.firstChild)
{
    removedDiv.removeChild(removedDiv.firstChild);
}

// 17. Wrap an existing element inside a new <section> tag.

const section1=document.createElement('section');
section1.setAttribute("id","firstSection");
document.querySelector('body').append(section1);
document.querySelector('#firstSection').append(document.querySelector('#firsth2'));

 //18. Create a paragraph and insert it as the first child of a <div>

const p3=document.createElement('p');
p3.innerText=`In November 1996, Netscape submitted JavaScript to Ecma International, as the starting point for a standard specification that all
 browser vendors could conform to. This led to the official release of the first ECMAScript language specification in June 1997.`

document.querySelector('body > .div3').prepend(p3); 

//19. Create a <style> tag dynamically and append CSS rules to it

const styleTag=document.createElement('style');
styleTag.style.backgroundColor="red";
styleTag.style.border="10px";
styleTag.style.width="50px";
styleTag.style.height="30px";
document.querySelector('body').append(styleTag);


//20. Check if a specific class exists on an element and log the result

const h2tage=document.querySelector('#secondh2');
const isPresent=h2tage.classList.contains("h2");
console.log(isPresent);


