function playDrum(e) {
   document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.add("playing");
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   // added this after watching the video
   // learned you can manipulate the start poisition of an AV file
   audio.currentTime = 0;
   audio.play();
}

function stopDrum(e) {
   document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.remove("playing");
}

document.addEventListener('keydown', playDrum);
document.addEventListener('keyup', stopDrum);