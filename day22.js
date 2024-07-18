let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.onclick=()=>{
  window.alert("button clicked");
  body.style.color="white";
  body.style.backgroundColor="black";
  btn.style.backgroundColor="blue";
  btn.style.color= "white";
}

// event listeners

let btn=document.querySelector("button");

btn.addEventListener("click", ()=>{
//   window.alert("button clicked");
document.querySelector("..text").innerHTML="button clicked"  
})


// let btn=document.querySelector("button");
// let mode="light";

// btn.addEventListener("click", ()=>{
//      if(mode=="light"){
//        body.style.col
//      }
// })