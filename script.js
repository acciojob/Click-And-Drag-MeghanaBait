// Your code here.
document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let startX;
    let scrollLeft;

    const items = document.querySelector('.items');

    items.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - items.offsetLeft;
        scrollLeft = items.scrollLeft;
    });

    items.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    items.addEventListener('mouseup', () => {
        isDragging = false;
    });

    items.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.pageX - items.offsetLeft;
        const walk = (x - startX);
        items.scrollLeft = scrollLeft - walk;
    });
});
