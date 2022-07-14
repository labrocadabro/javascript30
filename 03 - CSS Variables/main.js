const root = document.querySelector(":root");
const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const color = document.querySelector('#base');

spacing.addEventListener('input', () =>
    root.style.setProperty('--spacing', `${spacing.value}px`));
blur.addEventListener('input', () =>
    root.style.setProperty('--blur', `${blur.value}px`));
color.addEventListener('input', () =>
    root.style.setProperty('--color', `${color.value}`));