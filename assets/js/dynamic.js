document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const hoverImg = item.querySelector('.hover-img');
        hoverImg.style.display = 'block';
        hoverImg.style.opacity = 0;
        hoverImg.style.transition = 'opacity 1s';
        requestAnimationFrame(() => {
            hoverImg.style.opacity = 1;
        });
    });

    item.addEventListener('mouseleave', () => {
        const hoverImg = item.querySelector('.hover-img');
        hoverImg.style.opacity = 0;
        hoverImg.addEventListener('transitionend', () => {
            hoverImg.style.display = 'none';
        }, { once: true });
    });
});
