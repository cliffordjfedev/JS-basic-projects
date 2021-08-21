
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomHexColor = () => {
  
    let color = '';

    for (let i = 0; i < hex.length; i++) {
        
        if (i < 6) {
          color += hex[ Math.round(Math.random(hex.length) * ((hex.length - 1) - 0) + 0)];

        }
        
    }

    changeColor(`#${color}`);

}


const changeColor = (color) => {
    let main = document.querySelector('main');
    let span = document.querySelector('.color');

    main.style.backgroundColor = color;
    span.innerText = color;

}

document.getElementById('btnChange').addEventListener('click', randomHexColor)



