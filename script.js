const logdiv = document.getElementsByClassName("log")[0];
const statediv = document.getElementsByClassName("state")[0];
const startBtn = document.getElementsByClassName("switchonkey")[0];
const stopBtn = document.getElementsByClassName("switchoffkey")[0];


startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logdiv.textContent = " ";
  statediv.textContent = " ";
  stopBtn.disabled = true;
  startBtn.disabled = false;
});

function handleDown(e) {
  logdiv.textContent = `Key ${e.key} pressed down`;
  statediv.textContent = "Key is down";
}
function handleUp(e) {
  logdiv.textContent = `Key ${e.key} pressed up`;
  statediv.textContent = "Key is up";
}
