document.addEventListener('click', clickHandler);
document.addEventListener('auxclick', clickHandler);
document.addEventListener('contextmenu', clickHandler);
document.addEventListener('mousemove', clickHandler);

function clickHandler(e) {
    var action = "";
    if (e.type === "mousemove") {
        action = "Moved"
    } else if (e.type === "click") {
        action = "Pressed Left"
    } else if (e.type === "contextmenu") {
        action = "Pressed Right"
    } else if (e.type === "auxclick") {
        action = "Pressed Middle"
    }

    //console.log(calculateMilliseconds(new Date()) + "\t" + action + "\t" + e.screenX + "\t" + e.screenY + "\t");
    localStorage.setItem(
        calculateMilliseconds(new Date()), 
        calculateMilliseconds(new Date()) + "\t" + action + "\t" + e.screenX + "\t" + e.screenY + "\t"
    );
}