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

const loveHeader = document.getElementById("loveHeader");

letterBtn.addEventListener("click", () => {
  //funnySound.play();

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



const finalBtn = document.getElementById("finalSurpriseBtn");
const finalSurprise = document.getElementById("finalSurprise");

finalBtn.addEventListener("click", () => {
	 envelope.style.display = "none";
  finalSurprise.style.display = "flex";
  startBackgroundEmojis(); // START EMOJIS
});

const bgEmojis = document.getElementById("bgEmojis");

function startBackgroundEmojis() {

  const emojis = ["❤️","💖","💕","💗","💘","💝","💋","😍","🥰","😘"];

  setInterval(() => {

    const emoji = document.createElement("span");

    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";

    emoji.style.fontSize = (20 + Math.random() * 30) + "px";

    emoji.style.animationDuration = (6 + Math.random() * 6) + "s";

    bgEmojis.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 12000);

  }, 400);
}


const noBtn = document.getElementById("noBtn");
const funnySound = document.getElementById("funnySound");

let noClickCount = 0;

const funnyMessages = [
  "Are you sure? 😏",
  "Think again Ammu 😂",
  "Wrong answer baby 💔",
  "System error ❌ Try again!",
  "Only YES is allowed 😜",
  "Nice try 🤭",
  "Okay okay press YES now 😌"
];

noBtn.addEventListener("click", () => {

  funnySound.play();

  // Show random funny message
  const message = funnyMessages[noClickCount % funnyMessages.length];
  alert(message);

  // Shrink button each click
  noBtn.style.transform = `scale(${1 - (noClickCount * 0.1)})`;

  noClickCount++;

  // After 5 clicks change button to YES
  if (noClickCount >= 5) {
    noBtn.innerText = "YES 😍";
    noBtn.style.background = "#ff2f6d";
  }

});




letterBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  finalBtn.style.display = "block"; // show button after open
});


envelope.addEventListener("transitionend", () => {
  finalBtn.style.display = "block";
});