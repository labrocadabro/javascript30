// wes used a different method that creates an array from keypresses, joins it into a string, and compares it to a 'secret code' string.
// I'm sticking with my method as it allows me to check for keys that would not be represented in strings

function konami(e) {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    if (e.key !== konamiCode[keyPos]) keyPos = 0;
    else keyPos++;
    if (keyPos === 11) {
        alert('KONAMI');
        keyPos = 0;
    }
}

document.addEventListener('keydown', konami);
let keyPos = 0;