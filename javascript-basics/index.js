// console.log("i am sajid ahmad");


// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };
// draw();


//factory function 

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
//         };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(5,8);
// let rectangle2 = createRectangle(7,9);


// function Rectangle(){
//     this.length =1;
//     this.breadth =2;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }

// let rectangleobj = new Rectangle();

// let a = {value : 10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);


//primitives are copied by their value & Refrence are copied by address/refrence.

// let a =10;
// function inc(a){
//     a++;
// }

// inc(a);
// console.log(a);

// let a ={value:10};
// function inc(a){
//          a++;
// }
// inc(a);
// console.log(a.value);

//foe-in loop

// let rectangle ={
//     length=2;
//     breadth=4;
// };

// for(let key in rectangle){
//     console,log(key, rectangle[key]);
// }

//object Cloning
// 1.iteration

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = [];
// for (let key in src){
//     dest[key] = src[key];

// }
// console.log(dest);

// 2.assign

// let src = {
//         a:10,
//         b:20,
//         c:30
//     };
    
//     let src2 = { value: 25};
    
//     let dest = Object.assign({}, src, src2);
    
//     console.log(dest);
    
//     src.a++;
    
//     console.log(dest);




// 3.spread
// let src = {
//         a: 10,
//         b:20,
//         c:30
//     };
    
//     let dest = {...src};
//     console.log(dest);

// src.a++;

// console.log(dest);
// console.log("hello");

//  a= Math.random();//prints random no. b/w 0 and 1
//  console.log(a);



// let name = 'sajid';
// let lname = 'ahmad';
// console.log(typeof(name));


// let a = 'i \n am sajid from \n kashmir';
// console.log(a);

//TEMPLATE LITERAL (back ticks mai daal doo ``)
// let a = `i am 
// sajid 
// from
//  kashmir`;
// console.log(a);


//date
// let date = new Date();
// console.log(date);



//   ARRAYS

//creation of arrays
// let numbers = [1,4,5,7];
// console.log(numbers);

//insertion
//insertion at the END
// let numbers = [1,4,5,7];
// numbers.push(9);
// console.log(numbers);


//02: insertion in begining
// let numbers = [1,4,5,7];
// numbers.unshift(4);
// console.log(numbers);


//03: at the middle
// method used is splice(index,deletion-if-u-want,elements to insert)

// let numbers = [1,4,5,7];
// numbers.splice(2,0,'a','b');
// console.log(numbers);

//SEARCHING

// let numbers = [1,4,5,7];
// console.log(numbers.indexOf(7));


// let courses = [
//     {no:1, naam:'sajid'},
//     {no:2,naam:'shahid'}
// ];
// console.log(courses);



//call back function

// let courses = [
//     {no:1, naam:'sajid'},
//     {no:2,naam:'shahid'}
// ];
// console.log(courses);
// let course = courses.find(function(course){
// return course.naam == 'sajid';


// });
// console.log(course);

//ARROW FUNCTION

//spread operator

// let a = [1,2,3];
// let b = [4,5,6];

// let combined = [...a, ...b];
// console.log(combined);

//loop
//01: for-of loop
// let arr = [10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }
//for-each loop
// let arr = [10,20,30,40,50];
// arr.forEach(function(number){
//     console.log(number);
// })


//lets understand how to convert it to arrow function

// let arr = [10,20,30,40,50];
// arr.forEach(number => console.log(number));

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



//mapping
// let num = [7,8,9,10];
// let items = num.map(function(value){
//     return 'student_no' +value;
// });
// console.log(items);




//FUNCTIONS
// run();

// function run(){
//     console.log('running');
// }

// run();
//calling funtion

  //HOISTING:--> is the process of moving functions to the top of file in Javascript code.
  //hoisting is automatic by JS engine(eg v8)


  //function assignment
//    let s = function walk(){
//     console.log('walking');
//    };
//    s();

// REST OPERATOR (...)
function sum(...args){
    console.log(args);
};
sum(1,2,3,4,5,6);


function sum(num,...args){
    console.log(args);
};
sum(1,2,3,4,5,6);


  




