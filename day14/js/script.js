//- part1
// 1-Array الطول بنفس جديده
// 2-find()
// 3- Array الشرط حققت اللي بالعناصر جديده
// 4-undefined
// 5-Array


//part2
// 1-false
// 2-true
// 3-true
// 4-true
// 5-false



//part3
// 1-map 
// 2-filter 
// 3-find 
// 4-map 



//part4
const fruits = ["Apple","Banana","Orange"];
for(let fruit of fruits){
    console.log(fruit);
};
for(let index in fruits){
    console.log(index);
};
fruits.forEach((fruit,index) => {
    console.log(`${index} -> ${fruit}`);
    
});



// part5
 const sum = (a,b) => {
    return a+b;
 };


// const {name , age } = user;
// console.log(`Hello ${name}`);


const arr1 = [1,2,3];
const arr2 = [4,5,6];

const result = [...arr1, ...arr2];
console.log(result);




//part6

const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55},

];
const names = students.map((student) =>{
    return student.name;
});
console.log(names);
const Exll = students.filter((student) => {
    return student.degree >=60;
});
console.log(Exll);

const student = students.find((student)=>{
    return student.degree>=90;
});
console.log(student);

students.forEach((student)=>{
    console.log(student.name);
    
});





// Bonus 

const numbers = [5,10,15,20];

const add = numbers.reduce((total, num )=>{
    return total + num ;
},0);
console.log(add);


