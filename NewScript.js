function add_elem() {
let ul      = document.getElementById('ul'),
    number  = document.getElementById('number_input'),
    str     = '';
    for (let i = 1; i <= number.value; i++) {
        let li = document.createElement('li');
        str = i;
        li.innerHTML = str;
        ul.appendChild(li);
    }

}