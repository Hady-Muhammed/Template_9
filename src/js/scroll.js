let btn = document.getElementById('btn');

window.onscroll = () => {
    if(scrollY >= 100) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

btn.onclick = () => {
    scroll({
        top: 0,
        behavior: 'smooth',
    })
}