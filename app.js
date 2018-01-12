document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');

document.addEventListener('keyup', (event) => {
  console.log(event);
  switch (event.keyCode) {
    case 66:
    document.querySelector("#blue").style.background = "steelblue";
    break;
    case 71:
    document.querySelector("#green").style.background = "lime";

    break;
    case 82:
    document.querySelector("#red").style.background = "crimson";

    break;
    case 89:
    document.querySelector("#yellow").style.background = "yellow";

    default:
  }
  document.querySelector('#textDiv').innerText = 'Code: ' + event.keyCode + ' Key pressed: ' + event.key;
})
  /* Create an event listener for key press events */


});
