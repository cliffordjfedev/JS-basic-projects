// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // // classList - shows/gets all classes
    // console.log(links.classList);
    // // contains - checks classList for specific class
    // console.log(links.classList.contains('hide-links'));

    // let check = links.classList.contains('hide-links')
    // if (check) {
    //     // add - add class
    //     links.classList.add('new-class')
    // } else {
    //     // remove - remove class
    //     links.classList.remove('new-class')
    // }
    // toggle - toggles class
    links.classList.toggle('hide-links');



})

