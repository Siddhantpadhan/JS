let price = 238; //number type
let name = "iter" ; // string type 
isAdult = true ; // boolean type
let x ; // undifined type 
let y = null ; // null type(object)


//objects :
const student = {
    FullName : "Siddhant",// to access only name - student['FullName']
    age : 20,
    cgpa: 8.3,

};
console.log(student);
console.log(student.age);
student['age']= student['age']-1;
console.log(student.age);