function showTEG() {
    let elem = document.getElementById('elem');
    alert(elem.tagName);
}

function addTEG() {
    let elems = document.querySelectorAll('.www');
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = elems[i].innerHTML + '(' + elems[i].tagName[0]+ elems[i].tagName.substr(1).toLowerCase()+ ')';
    }

}