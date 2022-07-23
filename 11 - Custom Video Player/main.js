const vid = document.querySelector(".player__video");
const playButton = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('.skip');
const volControl = document.querySelector('[name="volume"]');
const pbrControl = document.querySelector('[name="playbackRate"]');

playButton.addEventListener('click', toggleVideo);
skipButtons.forEach(button => button.addEventListener('click', skip));
vid.addEventListener('playing', progressBar);
volControl.addEventListener('change', changeVolume);
pbrControl.addEventListener('change', changePBR);
document.querySelector('.progress').addEventListener('click', jumpProgress);

changeVolume();
changePBR();

function toggleVideo() {
    if (playButton.textContent === "►") {
        vid.play();
        playButton.textContent = "| |";
    } else {
        vid.pause();
        playButton.textContent = "►";
    }
}

function skip() {
    vid.currentTime += Number(this.dataset.skip);
}

function progressBar() {
    setInterval(() => {
        const percent = (vid.currentTime / vid.duration * 100).toFixed(2) + "%";
        document.querySelector(".progress__filled").style.width = percent;
    }, 500);

}

function changeVolume() {
    vid.volume = volControl.value;
    const percent = (volControl.value / volControl.max * 100).toFixed(0);
    volControl.title = `Volume: ${percent}%`;

}

function changePBR() {
    vid.playbackRate = pbrControl.value;
    pbrControl.title = `Playback rate: ${pbrControl.value}x`;
}

function jumpProgress(e) {
    const position = this.getBoundingClientRect();
    const progress = document.querySelector('.progress__filled');
    progress.style.width = e.clientX - position.left + 'px';
    vid.currentTime = vid.duration * (e.clientX - position.left) / (position.right - position.left);
}