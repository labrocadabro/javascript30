function shiftSelect(e) {
    if (!e.shiftKey) reuturn;
    if (!lastCB) {
        lastCB = this;
    } else {
        let start = cbs.indexOf(lastCB);
        let end = cbs.indexOf(this);
        if (start > end) {
            [start, end] = [end, start]
        }
        let selectCBs = cbs.slice(start, end + 1);
        selectCBs.forEach(cb => cb.checked = true);
        lastCB = null;
    };


}

const cbs = Array.from(document.querySelectorAll('input[type="checkbox"]'));
let lastCB = null;

cbs.forEach(cb => cb.addEventListener('click', shiftSelect));