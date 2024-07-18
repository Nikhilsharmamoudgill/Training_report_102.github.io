// solution of promise chaining is async - await.



//example - weather data

// function wApi(data){
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data:", data);
            
//                 resolve("success");
           
            
//         }, 2000);
//     });
// }

// async function getData(){
//    await wApi("47 degree");
//    await wApi("24 degree");
//    await wApi("20 degree");
// }
// getData();


function getData(data){
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
            console.log("user data:", data);
           
            
        }, 2000);
    });
}

async function finalData(){
    await getData('username');
    await getData('email');
    await getData('contact number');
}
finalData();