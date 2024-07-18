let button = document.body.querySelector('#button')


let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    color += digits[index];
  }
  return color;
}

button.addEventListener('click',()=>{
    document.body.style.backgroundColor = randomColor()
})