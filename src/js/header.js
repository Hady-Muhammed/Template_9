let menuBtn = document.getElementById('menu');
let megaMenu = document.getElementById('megaMenu');
let logo = document.getElementById('logo');
let header = document.getElementById('header');

menuBtn.onclick = () => {
    if(menuBtn.innerHTML === '≡') {
        menuBtn.innerHTML = 'X';
    } else {
        menuBtn.innerHTML = '≡';
    }
    if(megaMenu.style.display === 'flex') {
        megaMenu.style.display = 'none'
    } else {
        megaMenu.style.display = 'flex';
    }
}
window.onscroll = () => {
    if(scrollY >= 100) {
        header.style.backgroundColor ='rgb(255,255,255,0.95)';
        header.style.color = 'black';
        logo.src = 'http://192.168.1.12:5500/src/images/logo.svg'
    } else {
        header.style.backgroundColor = '#1d4ed8';
        header.style.color = 'white';
        logo.src = 'http://192.168.1.12:5500/src/images/logo-white.svg'
    }
}