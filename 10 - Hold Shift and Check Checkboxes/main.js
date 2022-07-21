function shiftSelect(e) {
    if (!lastCB) { lastCB = this }
    // better logic for triggering the multi-check
    else if (e.shiftKey && lastCB.checked === true) {
        // wes's solution loops through the list and turns an 'inBetween' flag on when you hit lastCB or this and then turn it back off when you hit the other one
        // then anything iterated while the flag is true gets checked
        // it's cleaner than my solution but I'm happy with what I did
        let start = cbs.indexOf(lastCB);
        let end = cbs.indexOf(this);
        if (start > end) {
            [start, end] = [end, start]
        }
        let selectCBs = cbs.slice(start, end + 1);
        selectCBs.forEach(cb => cb.checked = true);
        lastCB = null;
    }

}


const cbs = Array.from(document.querySelectorAll('input[type="checkbox"]'));
let lastCB;

cbs.forEach(cb => cb.addEventListener('click', shiftSelect));