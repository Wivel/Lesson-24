function addElem() {
    let
        input       = document.getElementById('textD'),
        newer       = input.cloneNode(false);
    document.body.insertAdjacentHTML("beforeend", '<br>');
    document.body.insertAdjacentHTML("beforeend", '<br>');
    input.parentElement.appendChild(newer);

}