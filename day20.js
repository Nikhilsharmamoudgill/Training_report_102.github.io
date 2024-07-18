//promises

// let prm =new Promise((resolve,reject)=>{
//         console.log("i am ex of promises");
//         resolve("success");
//         reject("failed");
// });

// console.log(prm);

// amazon example

// let prm = new Promise((resolve, reject)=>{
//     console.log("your order has been confirmed");
//     resolve("your order has been delivered");
//     reject("your order has been cenclled");
// }) 
// console.log(prm);

//covid = 3rd

//if resolve then  prm.then
//if reject then   prm.catch

// prm.then(()=>{});
// prm.catch(()=>{});


// let prm =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am example");
//         resolve("successfully resolved");

//     })
// }

// let promise = prm();

// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// })
// promise.catch((rej)=>{
//     console.log("promise rejected",rej);
// })


// let prm = ()=>
// {
//     return new Promise((resolve, reject)=>{
//         console.log("yor order conferd");

//         if(resolve){
//            resolve("order has been delivered");
//         }
//         else {
//             reject("order cencel");
//         }
//     })
// }



// let arr =[];
// let getData =(arr)=>{
//     return new Promise((resolve,reject)=>{
//         console.log("arr ex with promises");
//         // arr.push(20);
//         if(arr.length>0){
//             resolve("array is not empty");
//         }
//         else{
//             reject("array is empty");
//         }
//     })
// }

// getData(arr).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// });


// promise chaining

// function getData(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(data){
//                resolve(data); 
//             }
//             else{
//                 reject("data not found");
//             }
//         },2000);
//     })
// }

// getData("username").then((res)=>{
//     console.log(res);
//     return getData("email",res)
// }).then((res)=>{
//     console.log(res);
//     return getData("contact number",res);
// }).then((res)=>{
//     console.log(res);
//     console.log("data fetched successfully");
// }).catch((err)=>{
//     console.log(err);
// })












