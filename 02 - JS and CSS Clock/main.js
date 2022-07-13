function clock() {
    const now = new Date();
    const hours = now.getHours(); // 24 hour format but works fine
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const hourRotate = (90 + hours * 30 + mins * 0.5);
    const minRotate = (90 + mins * 6);
    const secRotate = (90 + secs * 6);

    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotate}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minRotate}deg)`;
    document.querySelector('.sec-hand').style.transform = `rotate(${secRotate}deg)`;

    setTimeout(clock, 1000);
}

clock();