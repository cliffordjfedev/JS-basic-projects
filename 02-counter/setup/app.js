let value = document.getElementById('value');

const calculate = (info) => {


    let intValue = parseInt(value.innerText);

    if (info === 'increase') {
        intValue++;

    } else if (info === 'decrease') {
        intValue--;
    } else if (info === 'reset') {
        intValue = 0;
    }

    value.innerText = intValue;
}

const changeTextColor = () => {

    let spanValue = parseInt(value.innerText)

    if (spanValue > 0) {
        value.style.color = 'green'
    } else if (spanValue === 0) {
        value.style.color = 'rgb(34, 34, 34)';
    } else if (spanValue < 0) {
        value.style.color = 'red';
    }
}

document.querySelector('.increase').addEventListener('click', () => {

    calculate('increase');
    changeTextColor();
})

document.querySelector('.decrease').addEventListener('click', () => {

    calculate('decrease');
    changeTextColor();

})

document.querySelector('.reset').addEventListener('click', () => {

    calculate('reset');
    changeTextColor();

})