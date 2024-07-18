// function fxn(){
//     console.log("hello java script"); // function defination 
// }

// fxn(); // function call

// return statement

// function fxn1() {
//    return "hello java script"; // function defination 
// }

//  fxn1(); // no result

// so we have to console it
// console.log(fxn1);


// function fxn2 (name){
//     console.log("hello", name);
// }
// fxn2(ritik);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,8);

// all above are reguler function , they can call any where in code or before defination also.



// anonymous function, they dont havefuction name.
//expressional function but it can't call before defination bcz it defined by let variable

// let func=function(){
//     console.log("expresional fuc");

// }
// func();

// function avrg(a,b,c,name){
//     console.log(name ,"=" ,(a+b+c)/3);
    
// }

// avrg(8,12 ,4, "average");



// function avrg1(a=10,b=4,c=10,name= "avrage"){
//     console.log(name ,"=" ,(a+b+c)/3);
    
// }

// avrg1( );
// avrg1(5,7,3,"average");

// function avrg2(name,a,b,c =20){
//     console.log(name ,"=" ,(a+b+c)/3);
    
// }

// avrg2("average",8, 5);


// Arrow function

let func=(a,b)=>{
//   console.log("hello");
    return a+b;
}

console.log(func(2,5));