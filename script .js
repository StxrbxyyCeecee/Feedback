function submitReview() {
  const status = document.getElementById("status");
  const popup = document.getElementById("popup");
  const loadingSound = document.getElementById("loadingSound");

  status.textContent = "Analyzing feedback... ⏳";
  loadingSound.play();

  setTimeout(() => {
    popup.classList.remove("hidden");
    status.textContent = "";
  }, 2000);
}

function accept() {
  document.getElementById("acceptSound").play();
  setTimeout(() => {
    alert("💖 Valentine mode activated!");
  }, 300);
}

function decline() {
  document.getElementById("declineSound").play();
  setTimeout(() => {
    alert("😅 M'en fous… je te veux quand même !");
  }, 300);
}
