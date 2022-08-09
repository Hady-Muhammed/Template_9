let aos = document.querySelectorAll('.aos');

window.onscroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    aos.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            box.classList.add('transition','duration-1000','opacity-100','-translate-y-2')
        } else {
            box.classList.remove('transition','duration-1000','opacity-100','-translate-y-2')
        }
    })
}