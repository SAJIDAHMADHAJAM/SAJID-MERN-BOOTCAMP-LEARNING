// document.addEventListener('click',function(){
//     console.log('I have clicked on the document');
// });


// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event)
// {
//     console.log(event);
// });


// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function(sajid){
//     console.log(sajid);
// });

        //prevent Default      
// let links = document.querySelectorAll('a');
// let thirdlink = links[2];
// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aaya achha lagga');
// });



// let myDiv = document.createElement('div');

// for(let i =1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is a para' +i;

//     newElement.addEventListener('click',function(event){
//         console.log('i have clicked on paragraph');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

        //optimizing above code here
// let myDiv = document.createElement('div');
// function paraStatus(event){
//     console.log('i have clicked on para');
// }

// for(let i =1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is a para' +i;

//     newElement.addEventListener('click',paraStatus);
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


        //Further optimization

let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
    console.log('span pr click kiya hai humne'+ event.target.textContent);
    }
});
