// function sayHi(myfxn){
//     console.log("hello");
//     myfxn();
// }

//yaa 
// sayHi(function (){

// })

// sayHi(fxn);

// function fxn(){
//     console.log("mern student");
// }

// function student(name,fxn){
//     console.log(`hello ${name}`);
//     fxn();

// }

// student("sanchit", fxn2) ;
// function fxn2(){
//     console.log("how are you");
// }

// function sum (a,b,fxn){
//     fxn(a,b);
//     console.log(fxn(a,b));
// }
// sum(3,5,function fxn1(a,b){
//     return a+b;
//  } );


// function student (data, fxn){
//     setTimeout(()=>{
//         console.log(data);
//         fxn();
//     },2000);
// }

// student ("chirag",()=>{
//     student(20102,()=>{
//         student(78,()=>{
//            console.log("data fetched");
//         })
//     })
// })
// this nesting of callback is called callback hell

// solution of callback hell is promises 

function student (data, fxn){
    setTimeout(()=>{
        console.log(data);
        fxn();
    },2000);
}
student ("NIKHIL",()=>{
    student("email: ____@gmail.com",()=>{
        student("phone NO: 98362676",()=>{
           
        })
    })
});
 

