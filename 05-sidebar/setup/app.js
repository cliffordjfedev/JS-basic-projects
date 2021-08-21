const sidebarToggle = document.querySelector('.sidebar-toggle');
const btnClose = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    toggleSide('hamburger');
})

btnClose.addEventListener('click', () => {
    toggleSide('close');
})

const toggleSide = (btn) => {
    if (btn === 'hamburger') {
        sidebar.classList.toggle('show-sidebar');
    } else if (btn === 'close') {
        sidebar.classList.remove('show-sidebar');
    }
}