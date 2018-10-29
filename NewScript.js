function func() {
    let parent      = document.getElementById('ul'),
        child       = document.getElementById('elem'),
        newer       = document.createElement('li');
    newer.innerHTML = 'Вставленный пункт';
    parent.insertBefore(newer, child);
}