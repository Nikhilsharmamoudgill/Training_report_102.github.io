// let person={
//     name:"diya",
//     age:21,
//     adress:{
//         street:"88",
//         city:"mohali",
//         state:"chaandigarh",
//         fxn1: function(){
//             console.log(this); // this is print address object on terminal, bcz its lasical scope is adreess object.
//         }
//     },
//     contant_no:908493478,
//     hobbies:["dancing","singing","coding"],
//     // myfxn: ()=>{
//     //     console.log("hello", this);
//     //     // console.log("hello", this.name, "your hobiees are:", this.hobbies);
//     // }
//     myfxn:function() {
//         let arrfxn = () =>{
//         console.log( this.adress);
//          }
//          arrfxn(); // console.log("hello", this.name, "your hobiees are:", this.hobbies);
//     }
// }
// // person.myfxn();
// person.adress.fxn1();
let person={
    name:"Nikhil Sharma",
    age:19,
    adress:{
        street:"88",
        city:"mohali",
        state:"chaandigarh",
        fxn1: function(){
            console.log(this); // this is print address object on terminal, bcz its lasical scope is adreess object.
        }
    },
    
    house:["block1","second floor","room no:70"],
    myfxn1: function(){
        console.log( this.house);
        
    },
    contant_no:908493478,
    myfxn:function() {
        let arrfxn = () =>{
        console.log( this.name);
         }
         arrfxn(); 
    }
}
person.myfxn();
person.myfxn1();
person.adress.fxn1();

