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