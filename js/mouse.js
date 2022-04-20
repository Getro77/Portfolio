var pointer = document.querySelector('.pointer');

document.addEventListener('mousemove', (e) => {
    pointer.style.left = e.pageX + 'px';
    pointer.style.top = e.pageY + 'px';
})
