document.addEventListener('click', clickHandler);
document.addEventListener('auxclick', clickHandler);
document.addEventListener('contextmenu', clickHandler);
document.addEventListener('mousemove', clickHandler);

function clickHandler(e) {
    console.log(e);
}