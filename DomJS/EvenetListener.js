const form=document.querySelector('#form');
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submit");

    // const firstname=document.getElementById('firstName').value;
    // const lastname=document.getElementById('lastName').value;
    // console.log(firstname,lastname);
    // console.log(document.forms['form'][0].value,document.forms['form'][1].value)


    const form1=new FormData(form)
    // console.log(form1.get('firstName'));
    // console.log(form1.get('lastName'));
    const user={};
    form1.forEach(function(value,key){
        user[key]=value;
    })
    console.log(user);
})

