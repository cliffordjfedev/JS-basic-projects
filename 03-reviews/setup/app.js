import { reviews } from "./data.js";

const btnNext = document.querySelector('.next-btn');
const btnPrev = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

let job = document.getElementById('job');
let info = document.getElementById('info');
let author = document.getElementById('author');
let myImg = document.querySelector('#person-img');

let i = 0;

btnNext.addEventListener('click', () => {
  i++;
  nextContent(i);
  
})

btnPrev.addEventListener('click', () => {
  i--;
  prevContent(i);
})

randomBtn.addEventListener('click', () => {
  
  let index = Math.round(Math.random(reviews.length) * ((reviews.length - 1) -0 ) + 0);

  setContent(index);

  i = index;

})

const nextContent = (index) => {

  if (index < reviews.length) {
    setContent(index);
   }
  else {
    i = 0
    setContent(i);
  }

}

const prevContent = (index) => {

  if (index < reviews.length && index >= 0) {
    setContent(index);
   }
  else if (index < 0){
    
    i = reviews.length -1;
    setContent(i);
  }

}

const setContent = (index) => {
  job.innerText = reviews[index].job;
  info.innerText = reviews[index].text;
  author.innerText = reviews[index].name;
  myImg.setAttribute('src', reviews[index].img);
}

