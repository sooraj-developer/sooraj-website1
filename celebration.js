const yesBtn = document.getElementById("yesBtn");
const mainBox = document.getElementById("mainBox");
const celebration = document.getElementById("celebration");
const loveMusic = document.getElementById("loveMusic");
const heartsBox = document.querySelector(".hearts");
const kissesBox = document.querySelector(".kisses");

yesBtn.addEventListener("click", () => {
  mainBox.style.display = "none";
  celebration.style.display = "flex";
  loveMusic.play();

typeText("Love you di Ammu ❤️ 💍");

  startHearts();
  startKisses();
  loveBurst();
});

/* Heart rain */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 2) + "s";
    heartsBox.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 200);
}

/* Kiss pops */
function startKisses() {
  setInterval(() => {
    const kiss = document.createElement("span");
    kiss.innerHTML = "💋";
    kiss.style.left = Math.random() * 100 + "vw";
    kiss.style.animationDuration = (2 + Math.random() * 2) + "s";
    kissesBox.appendChild(kiss);
    setTimeout(() => kiss.remove(), 4000);
  }, 700);
}

/* Emoji blast on YES */
function loveBurst() {
  const emojis = ["❤️", "💕", "💖", "💍", "😍"];
  for (let i = 0; i < 40; i++) {
    const e = document.createElement("span");
    e.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.top = Math.random() * 100 + "vh";
    e.style.fontSize = "2rem";
    e.style.position = "absolute";
    e.style.animation = "floatUp 3s linear forwards";
    celebration.appendChild(e);
    setTimeout(() => e.remove(), 3000);
  }
}

const typingText = document.getElementById("typingText");

function typeText(text) {
  let i = 0;
  typingText.innerHTML = "";

  const interval = setInterval(() => {
    typingText.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, 500);
}

const letterBtn = document.getElementById("letterBtn");
const envelope = document.getElementById("envelope");
const coupleImg = document.querySelector(".couple-img");
const funnySound = document.getElementById("funnySound");

const loveHeader = document.getElementById("loveHeader");

letterBtn.addEventListener("click", () => {
  funnySound.play();

  // Move image upward
  loveHeader.classList.add("move-up");

  // SWITCH IMAGE
  loveHeader.classList.add("show-envelope-img");

  envelope.style.display = "flex";

  setTimeout(() => {
    envelope.classList.add("open");
  }, 400);

  letterBtn.style.display = "none";
  typingText.style.display ="none";
});
