// The canvas is entirely new to me and I had no idea how to approach this. The drawing code is mostly from https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse, the generators are my own
// this solution doesn't work as well as Wes's but I learned how to make JS generators so I don't mind

function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function draw(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = nextWidth.next().value;;
    ctx.lineCap = 'round';
    ctx.strokeStyle = nextColor.next().value;

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
}

function* getColor(currentColor) {
    const rainbow = [
        "#9400D3",
        "#4B0082",
        "#0000FF",
        "#00FF00",
        "#FFFF00",
        "#FF7F00",
        "#FF0000",
    ];
    while (true) {
        yield rainbow[currentColor];
        currentColor++;
        if (currentColor === rainbow.length) {
            currentColor = 0;
        }
    }
}

function* getWidth(currentWidth) {
    while (currentWidth > 5) {
        yield currentWidth;
        currentWidth--;
    }
}

function resetWidth() {
    nextWidth = getWidth(30);
}

const c = document.querySelector("#draw");
const ctx = c.getContext("2d");
let pos = { x: 0, y: 0 };
const nextColor = getColor(0);
let nextWidth = getWidth(30);

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);
document.addEventListener('mouseup', resetWidth);