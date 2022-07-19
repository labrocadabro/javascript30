// The canvas is entirely new to me and I had no idea how to approach this. The drawing code is mostly from https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse, the generators are my own
// this solution doesn't work as well as Wes's but I learned how to make JS generators so I don't mind

function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}
function draw(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    // wasn't in the code I copied
    ctx.lineJoin = 'round';

    // Wes used a different method where the thickness decreases and increases in a loop but I like my geneerator
    ctx.lineWidth = nextWidth.next().value;
    ctx.lineCap = 'round';
    // learned about hsl which made the generator unnecessary
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath(); // begin
    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
    hue++;
}

function* getWidth(currentWidth) {
    while (currentWidth > 5) {
        yield currentWidth;
        currentWidth--;
    }
}

function resetWidth() {
    nextWidth = getWidth(100);
}

const c = document.querySelector("#draw");
const ctx = c.getContext("2d");
// resizing to fit whole screen
c.height = window.innerHeight;
c.width = window.innerWidth;

let pos = { x: 0, y: 0 };
// learned about hsl which made the generator unnecessary
let hue = 0;
let nextWidth = getWidth(100);



document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);
document.addEventListener('mouseup', resetWidth);