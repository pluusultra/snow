const snow = document.querySelector('.snow');
const snowFlakes = document.querySelectorAll('.snow__flake');

function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRndFloat (min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(1)
}

snowFlakes.forEach((el) => {
    el.style.fontSize = getRndFloat(0.7, 1.5) + 'em';
    el.style.animationDuration = getRndInteger(20,30) + 's';
    el.style.animationDelay = getRndInteger(-1, snowFlakes.length / 2) + 's'
})