function remover() {
    let elem = document.getElementsByTagName('ol');
    for (let i = 0; i < elem.length; i++) {
        let child = elem[i].children;
        for (let z = 0; z < child.length; z++) {
            child[z].addEventListener('click',remember);
        }
    }
}

function remember() {
    this.parentElement.removeChild(this);
}