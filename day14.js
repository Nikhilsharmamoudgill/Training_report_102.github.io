// let arr=[12, 23, "raghu" , 65 , 66];
// console.log(arr);
// console.log(arr[3]);

//for loop:
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }


//array methods: mutable

let arr1 = [1, 2, 3];
arr1.push(4);
// arr is now [1, 2, 3, 4]


let arr2 = [1, 2, 3];
let lastElement = arr2.pop();
// console.log(arr2);
// arr is now [1, 2], lastElement is 3


let arr3 = [1, 2, 3];
let firstElement = arr3.shift();
// console.log(arr3);
// arr is now [2, 3], firstElement is 1


let arr4 = [1, 2, 3];
arr4.unshift(0);
// console.log(arr4);
// arr is now [0, 1, 2, 3]


let arr5 = [1, 2, 3];
arr5.forEach(element => {
    console.log(element);
});
// Output: 1, 2, 3


let arr6 = [1, 2, 3];
let doubled = arr6.map(element => element * 2);
// console.log(arr6);
// doubled is now [2, 4, 6]


let arr7 = [1, 2, 3, 4, 5];
let evenNumbers = arr7.filter(element => element % 2 === 0);
// evenNumbers is now [2, 4]


let arr8 = [1, 2, 3, 4];
let sum = arr8.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum is now 10  , it give only single value .


let arr9 = [10, 20, 30, 40];
let found = arr9.find(element => element > 25);
// found is now 30


let arr10 = [1, 2, 3, 4, 5];
let index = arr10.indexOf(3);
// index is now 2


let arr11 = [1,2,3,[4,6,8]]
console.log(arr11[3][2]);

// map for traverse an array 
let arr=[110,20,30,40];
let res=arr.map((element)=>{
    return element;
});

console.log(res);

