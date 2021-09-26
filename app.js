const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
console.log( placeholders );
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach(item => {
    item.addEventListener('dragover', dragover);
    item.addEventListener('dragenter', dragenter);
    item.addEventListener('dragleave', dragleave);
    item.addEventListener('drop', dragdrop);
});

function dragstart(e) {
    e.target.classList.add('hold');

    setTimeout(() =>  e.target.classList.add('hide'), 0)

}

function dragend(e) {
    // e.target.classList.remove('hold', 'hide');
    e.target.className = 'item';
}

function dragover(e) {
    e.preventDefault();
}
function dragenter(e) {
    e.target.classList.add('hovered');

}
function dragleave(e) {
    e.target.classList.remove('hovered');

}
function dragdrop(e) {
    e.target.classList.remove('hovered');
    e.target.append(item)
}