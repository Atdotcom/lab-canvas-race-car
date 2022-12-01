/*window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
 img.src = "/images/road.png";


  function startGame() {
    ctx.clearRect(0, 0, 1500, 1700);
    ctx.drawImage(img, 0, 0, 500, 700);
    console.log("Just do anything. Literally whatever.")
  }
  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
};
