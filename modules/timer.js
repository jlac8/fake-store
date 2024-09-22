export function setupTimer(timerElement, onFinish) {
  const duration = Math.floor(Math.random() * (180 - 60 + 1) + 60);
  let timeLeft = duration;

  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Time left: ${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      onFinish();
      timerElement.textContent = "Time out";
    }

    timeLeft--;
  }, 1000);
}
