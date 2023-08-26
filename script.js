const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

let isDown = false;

function handleMove(e) {
    if(!isDown) return;
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // console.log(height);
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousedown', (e) => {
    isDown = true;
});
speed.addEventListener('mouseleave', (e) => {
    isDown = false;
});
speed.addEventListener('mouseup', (e) => {
    isDown = false;
});

speed.addEventListener('mousemove', handleMove);