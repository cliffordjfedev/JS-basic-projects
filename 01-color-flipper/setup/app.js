const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.getElementById('btn').addEventListener('click', () => {

    let randomNumber = Math.round(Math.random(colors.length) * ((colors.length - 1) - 0) + 0);
    changeColor(colors[randomNumber]);

})

const changeColor = (color) => {
    let main = document.querySelector('main');
    let span = document.querySelector('.color');

    main.style.backgroundColor = color;
    span.innerText = color;

}



