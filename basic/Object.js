// const student={
//     userName:"anand",
//     age:21,
//     class:"T.E"
// }
// console.log(student)   ;
// console.log(student.age);    //accsessing element

// console.log(student['age'])     //accsessing element


// student.mobileNo=9322742406;      //adding
// console.log(student) ;

// delete student.mobileNo          //deleteing
// console.log(student) ;

// student['age']=20;
// console.log(student) ;          //modifying

// console.log('age' in student);      //checking key exist in object or not

// console.log('mobileNo' in student)

// const students=[]
// function createStudent(userName,emailId,mobileNO)
// {
//     return{
//     userName:userName,
//     emailId:emailId,
//     mobileNO:mobileNO}
// }
// students.push(createStudent("anand","barge@66",123445));
// students.push(createStudent("rohan","rohan@66",123445));
// console.log(students[0]['userName']);


// const student2=
// {
//     userName:"anand",
//     mobileNo:12344,
//     emailId:"bargeanand464@gmail.com",
//     address:{
//         dist:"satara",
//         state:"MH"
//     },
//     sum:function addition(a,b){
//         return a+b;
//     }
// }
// console.log(student2.sum(1,2))
// console.log(student2.address.dist)

// const studentJason=JSON.stringify(student2);      //objetc => jason
// console.log(studentJason)

// const studentObject='{"name":"anand"}';
// console.log(JSON.parse(studentObject))          //jason =>object


const students=[];

function addStudent(userName,password,rollNo)
{
    return{userName:userName,
            password:password,
        rollNo:rollNo,
    }
}
students.push(addStudent("anand",1234,1));
students.push(addStudent("rohan",1235,2));
students.push(addStudent("sanket",1236,3));
students.push(addStudent("mayur",1237,4));
students.push(addStudent("abhi",1238,5));
console.log(students)
students.mobileNo=235566;
console.log(students)

