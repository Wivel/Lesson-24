function Task_1() {
    let elem    = document.getElementById('elem'),
        first   = elem.firstElementChild;
    first.style.color = 'red';
}

function Task_2() {
    let elem    = document.getElementById('elem'),
        last    = elem.lastElementChild;
    last.style.color = 'blue';
}

function Task_3() {
    let elem    = document.getElementById('elem'),
        child   = elem.children;
    for (let i = 0; i < child.length; i++) {
        child[i].innerHTML = child[i].innerHTML + ' !!!';
    }
}