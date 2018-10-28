function doTask() {
    let elem = document.getElementById('elem');
    elem.classList.add('www');
    Point_3();
}

function doTask2() {
    let elem = document.getElementById('elem');
    elem.classList.remove('www');
    Point_3();
}

function Point_3() {
    let elem = document.getElementById('elem');
    if (elem.classList.contains('www')) {
        elem.innerHTML = 'у elem есть класс www!';
    }
    else {
        elem.innerHTML = 'у elem отсутвует класс www!';
    }
}

function Point_4() {
    let elem = document.getElementById('elem');
    elem.classList.toggle('www');
    Point_3();
}

function Point_5() {
    let elem = document.getElementById('elem');
    elem.innerHTML = 'Количество классов объекта elem - ' + elem.classList.length;
}

function Point_6() {
    let
        elem        = document.getElementById('elem'),
        classlist   = elem.classList;

    if (classlist.length == 0) {
        alert('Классов у объекта - нет');
    }
    else {
        for (let i = 0; i < classlist.length; i++) {
            alert(classlist[i]);
        }
    }
}