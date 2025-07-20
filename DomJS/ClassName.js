const lists=document.getElementsByClassName('list');
// lists.style.color='orange'

const myLists=Array.from(lists);
myLists.forEach(function(l)
{
    l.style.color='red';
})