const panels = document.querySelectorAll('.panel');
for (let panel of panels) {
    panel.addEventListener('click', expand);
}

function expand() {
    for (let panel of panels) {
        if (panel !== this) {
            panel.style.flex = "1";
            panel.classList.remove('open');
            panel.querySelector('p:first-of-type').style.top = "";
            panel.querySelector('p:last-of-type').style.bottom = "";
        }
    }
    this.style.flex = "4";
    this.classList.add('open');
    this.querySelector('p:first-of-type').style.top = "20px";
    this.querySelector('p:last-of-type').style.bottom = "20px";
}