const funnySound = document.getElementById("funnySound");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function move(btn) {
  const x = Math.random() * 70;
  const y = Math.random() * 70;
  btn.style.left = x + "%";
  btn.style.top = y + "%";

  funnySound.currentTime = 0;
  funnySound.play();
}

// Desktop hover
noBtn.addEventListener("mouseenter", () => move(noBtn));
yesBtn.addEventListener("mouseenter", () => move(yesBtn));

// Mobile tap
noBtn.addEventListener("touchstart", () => move(noBtn));
