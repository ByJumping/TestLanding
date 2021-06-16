let buttons = document.querySelectorAll('.button');
let registration = document.querySelector('.registration');
let close = document.querySelector('.registration__close');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        regOpen();
    });
})

close.addEventListener('click', (e) => {
    e.preventDefault();
    regClose();
})

window.addEventListener('click', (e) => {
    if (e.target === registration.querySelector('.registration__body')) {
        regClose()
    }
})

let regOpen = function () {
    registration.style.display = 'block';
}

let regClose = function () {
    registration.style.display = 'none';
}