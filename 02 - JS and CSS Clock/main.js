
function clock() {
    const now = new Date();
    const hours = now.getHours(); // 24 hour format but works fine
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    // this wasn't covered in the video but the hour hand doesn't suddenly move from number to number
    // it moves as the minutes pass, so e.g. at 30 min past the hour, the hour hand is halfway between two numerals
    const hourRotate = (90 + hours * 30 + mins * 0.5);
    const minRotate = (90 + mins * 6);
    const secRotate = (90 + secs * 6);

    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotate}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minRotate}deg)`;

    const secHand = document.querySelector('.sec-hand');

    secHand.style.transform = `rotate(${secRotate}deg)`;
    // this fixes the jumping seconds hand that occurs when the hand passes the 12 o'clock position
    // the problem was discussed in the video but the solution was not provided
    // this is my own solution, which just removes the transition until the problematic transform has completed
    // I didn't apply a transition to the minutes or hour hand, so didn't have to deal with those cases
    if (secRotate === 444) {
        secHand.style.transition = "all 0s";
        setTimeout(() => secHand.style.transition = "", 1001);
    }

}

// learned about this function, it's a bit cleaner than setTimeout
setInterval(clock, 1000);