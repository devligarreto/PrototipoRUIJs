document.addEventListener("keydown", keyHandler, false);

function keyHandler(e) {
  //console.log(calculateMilliseconds(new Date()) + "\t" + "KeyP\t" + e.key + "\t" + "None");
  localStorage.setItem(
    calculateMilliseconds(new Date()),
    calculateMilliseconds(new Date()) + "\t" + "KeyP\t" + e.key + "\t" + "None"
  );
}
