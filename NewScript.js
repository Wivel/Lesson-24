function beforeBegin() {
    let elem = document.getElementById('elem');
    elem.insertAdjacentHTML('beforeBegin','<span>!!!</span>');
}

function afterEnd() {
    let elem = document.getElementById('elem');
    elem.insertAdjacentHTML('afterEnd','<span>!!!</span>');
}

function afterBegin() {
    let elem = document.getElementById('elem');
    elem.insertAdjacentHTML('afterBegin','<span>!!!</span>');
}

function beforeEnd() {
    let elem = document.getElementById('elem');
    elem.insertAdjacentHTML('beforeEnd','<span>!!!</span>');
}