const container = document.getElementById('stars-container');
let stars = [];

for (let i = 0; i < 120; i++) {
    stars.push({
        x: Math.random() * document.body.scrollWidth,
        y: Math.random() * document.body.scrollHeight,
        z: Math.random() * 20,
    });
}

function draw() {
    stars.forEach(star => {
        const dot = document.createElement('div');
        dot.classList = ['star'];
        dot.style.top = star.y + "px";
        dot.style.left = star.x + "px";
        container.appendChild(dot);
    });
}

draw();

window.addEventListener('scroll', () => {
    const dots = document.querySelectorAll('.star');
    const scrollY = window.scrollY;

    dots.forEach((item, index) => {
        const rate = 1 / stars[index].z;
        item.style.top = (stars[index].y - scrollY * rate) + "px";
    })
});