let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');


menuBtn.addEventListener('click', () => {
    if(menu.style.display === 'none'){
    menu.style.display = 'flex';}
    else{menu.style.display = 'none';}
})