let keys = document.querySelectorAll(".key");

document.addEventListener('keydown', playDrum);
document.addEventListener('keyup', stopDrum);

function playDrum(e) {
   document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.add("playing");
   document.querySelector(`audio[data-key="${e.keyCode}"]`).play();
}

function stopDrum(e) {
   document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.remove("playing");
}