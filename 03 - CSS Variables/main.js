// rewriting to foreach (as per video) keeps code cleaner

inputs = document.querySelectorAll(".controls input");

function changeValue() {
    const suffix = this.dataset['sizing'] || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('input', changeValue));
