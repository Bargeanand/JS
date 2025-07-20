// const div=document.createElement('div');
// div.setAttribute("className","abc");
// div.innerHTML="hi i am anand barge"
// document.body.appendChild(div);

function addDiv(text,key,value,htmlTag) 
{   
    const div=document.createElement('div');
    div.setAttribute(key,value);
      div.innerHTML=text;
    htmlTag.appendChild(div);
}
    const div1=addDiv("hi i anand","class","anand",document.body);
    const div2=addDiv("hi i rohan","class","anand",document.body);
    const div3=addDiv("hi i sanket","class","anand",document.body);
    const div4=addDiv("hi i aman","class","anand",document.body);
    
function addLanguage(language,htmltag)
{
    const list=document.createElement('li');
    list.innerHTML=language;
    htmltag.appendChild(list);
}

const list1=addLanguage("java",document.querySelector('ul'));
const list2=addLanguage("python",document.querySelector('ul'));
const list10=addLanguage("c#",document.querySelector('ul'));
const list3=addLanguage("pascal",document.querySelector('ul'));
const list4=addLanguage("typescrpit",document.querySelector('ul'));
const list5=addLanguage("rubby",document.querySelector('ul'));
const list6=addLanguage("c++",document.querySelector('ul'));
const list7=addLanguage("c",document.querySelector('ul'));
const list12=addLanguage("accemebly",document.querySelector('ul'));