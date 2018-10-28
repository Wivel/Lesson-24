

function doTask() {
    let elem = document.getElementById('elem');
    elem.classList.add('www');
}
function doTask2() {
    let elem = document.getElementById('elem');
    elem.classList.remove('www');
}
function Point_3() {
    let elem = document.getElementById('elem');
    if (elem.classList.contains('www')){
        alert(' есть класс WWW');
    }
    else {
        alert('нет класса WWW');
    }
}
function Point_4() {
    let elem = document.getElementById('elem');
    elem.classList.toggle('www');
}