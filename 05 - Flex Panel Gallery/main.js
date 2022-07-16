const panels = document.querySelectorAll('.panel');
for (let panel of panels) {
    panel.addEventListener('click', expand);
    // wes used a transitionend event to control when the top & bottom text came in but I prefer my css transition-delay
}

function expand() {
    for (let panel of panels) {
        if (panel !== this) {
            panel.classList.remove('open');
        }
    }
    // changed to toggle so you can click a second time to close the flex
    this.classList.toggle('open');
}