'use strict';

// const letters = "abcdefghijklmnopqrstuvwxyz"

// let interval = null;

// document.querySelector("span").onmouseover = event => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");

//     if(iteration >= event.target.dataset.value.length){
//       clearInterval(interval);
//     }

//     iteration += 1 / 3;
//   }, 30);
// }

const appDiv = document.querySelector('.app');
const mask = document.querySelector('.mouse__mask')
let pElements;

function makeElementToGrid() {
  for (let i = 0; i < 399; i++) {
    const newP = document.createElement('p');
    newP.textContent = 0;
    appDiv.appendChild(newP);
  }
  pElements = document.querySelectorAll('p');
}
makeElementToGrid();

function getRandomNumber() {
  return Math.floor(Math.random() * 2)
}

function randomNumbersLoop() {
  pElements.forEach((element) => {
    element.textContent = getRandomNumber()
    if(element.nextSibling?.textContent == 1 
      || element.previousSibling?.textContent == 1 
      || element.nextSibling?.nextSibling?.textContent == 1
      || element.previousSibling?.previousSibling?.textContent == 1) {
      element.textContent = ""
    }
  });
}

document.addEventListener('mousemove', (e) => {
  mask.style.top = e.pageY - 2500 + "px"
  mask.style.left = e.pageX - 2500  + "px"
  mask.style.animation = 'initial'
  
});

document.addEventListener('mouseout', () => {
  mask.style.top = "calc(50% - 2500px)"
  mask.style.left = "calc(50% - 2500px)"
  mask.style.animation = 'maskSpin 10s infinite linear forwards'
  mask.style.animationDelay = '5s'
})

setInterval(() => {
  randomNumbersLoop()
}, 369);