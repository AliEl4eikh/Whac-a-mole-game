document.addEventListener("DOMContentLoaded", () => {
  let hitPosition;
  let score = 0;
  let scoreDisplay = document.querySelector("#score");

  let currentTime = 60;
  const timeLeftDisplay = document.querySelector("#time-left");

  const gridItems = document.querySelectorAll(".grid-item");

  function generateNumber() {
    return Math.floor(Math.random() * gridItems.length);
  }

  function randomSquare() {
    gridItems.forEach((gridItem) => {
      gridItem.classList.remove("mole");
    });
    const randomNumber = generateNumber();
    gridItems[randomNumber].classList.add("mole");
    hitPosition = gridItems[randomNumber].id;
  }

  function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
    setTimeout(() => {
      clearInterval(timerId);
    }, 60000);
  }

  moveMole();

  function countDown() {
    --currentTime;
    timeLeftDisplay.textContent = currentTime;

    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      alert("Game Over! Your Final Score is " + score);
    }
  }

  let countDownTimerId = setInterval(countDown, 1000);

  function handleClickSquare(e) {
    let id = e.target.id;
    if (hitPosition == id) {
      score++;
      scoreDisplay.textContent = score;
      hitPosition = null;
    }
  }

  gridItems.forEach((square) => {
    square.addEventListener("mousedown", handleClickSquare);
  });
});
