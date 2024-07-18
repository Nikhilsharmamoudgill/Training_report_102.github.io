//synchronous
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("five");
// console.log("four");

//asynchronous
// 1) set time out- by it we make our code asyncronous.

// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(()=>{
//     console.log("five");
// },3000);
// console.log("four");


// 2) setinterval

// setInterval(()=>{
//     console.log("hello mern student");
// },2000);

// let count =0;
// setInterval(() => {
//     console.log("number:", count);
//     count++;
// }, 2000);

setInterval(() => {
   let date= new Date().toLocaleTimeString();
   console.log(date);
}, 1000);

//clearinterval
setTimeout(()=>{
    clearInterval(d);
},10000)