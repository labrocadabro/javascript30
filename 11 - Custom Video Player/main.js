const vid = document.querySelector(".player__video");
const playButton = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('.skip');
const sliders = document.querySelectorAll('.player__slider');
const volControl = document.querySelector('[name="volume"]');
const pbrControl = document.querySelector('[name="playbackRate"]');

// added this so you can click on the video to play/pause
vid.addEventListener('click', toggleVideo);
playButton.addEventListener('click', toggleVideo);
skipButtons.forEach(button => button.addEventListener('click', skip));
// didn't know about this one, can update the progress bar without setInterval
vid.addEventListener('timeupdate', progressBar);
// changed the play button trigger so it will always change no matter how the video is started or stopped
vid.addEventListener('playing', buttonUpdate);
vid.addEventListener('pause', buttonUpdate);
volControl.addEventListener('change', changeVolume);
pbrControl.addEventListener('change', changePBR);
document.querySelector('.progress').addEventListener('click', jumpProgress);

changeVolume();
changePBR();

// separating the play button from starting and stopping the video
function toggleVideo() {
    if (vid.paused) {
        vid.play();
    } else {
        vid.pause();
    }
}

function skip() {
    vid.currentTime += Number(this.dataset.skip);
}

// removed setInterval, no longer needed
function progressBar() {
    const percent = (vid.currentTime / vid.duration * 100).toFixed(2) + "%";
    document.querySelector(".progress__filled").style.width = percent;
}

function buttonUpdate() {
    playButton.textContent = vid.paused ? "►" : "| |";
}

// Wes used one function to update both volume and playback rate. 
// This is done by using the name of the class to identify the property you're updating.
// I left mine as is, as I like the title updating
function changeVolume() {
    vid.volume = volControl.value;
    const percent = (volControl.value / volControl.max * 100).toFixed(0);
    volControl.title = `Volume: ${percent}%`;
}

function changePBR() {
    vid.playbackRate = pbrControl.value;
    pbrControl.title = `Playback rate: ${pbrControl.value}x`;
}

// learned about offsetX and offsetWidth, which allowed me to simplify this function
// wes also implemented a click and drag update but I chose not to implement it as I didn't like it
// the basic idea however, is to set a flag for the state of the mouse button (up/down) with the mouseup/mousedown events
// if the mousedown flag is true, then on mousemove over the progress bar, trigger the jumpProgress function
function jumpProgress(e) {
    document.querySelector('.progress__filled').style.width = e.offsetX + 'px';
    vid.currentTime = vid.duration * e.offsetX / this.offsetWidth;
}