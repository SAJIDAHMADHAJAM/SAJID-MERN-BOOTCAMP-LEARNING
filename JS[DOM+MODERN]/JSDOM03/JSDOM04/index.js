
//SYNCHRONOUS CODE

// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

    // ASYNC CODE
// setTimeout(function(){
//     console.log('third');
// },2000);
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

    //CREATION OF PROMISES
// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log(' i am inside promise01');
//     },500);
//     // resolve(2223);

// //     reject(new Error('Bhaisaab Error aagya'));
//  });

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log(' i am inside promise02');
//     },300);
//     // resolve(2223);

//     // reject(new Error('Bhaisaab Error aagya'));
// });

// console.log('pehla');


// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log(' i am inside promise');
//     },5000);
   
//     resolve(2223);
//     //reject(new Error('Bhaisaab Error aagya'));
// });
// meraPromise.then((value) => {console.log(value)});



        //CATCH ERROR
// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log(' i am inside promise');
//     },5000);
   
//     resolve(2223);
//     //reject(new Error('Bhaisaab Error aagya'));
// });
// meraPromise.then((value) => {console.log(value)});
// meraPromise.catch((console.error("received error")));


// let waadaa1 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(()=> {
//             console.log('setimeout2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// })

// output.then((value) => console.log(value));

    //  ASYNC
// async function abcd(){
//     return 7;
// }

// async function utility() {


//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hai");
//         },5000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hyderabad is Cool");
//         },6000);
//     });

//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM, hM];
//  }



let obj = {
    heading:"head"
};
async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //let output = await content.json();
    console.log(content);
}
utility();