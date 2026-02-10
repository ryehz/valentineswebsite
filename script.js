// Buttons
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const nextBtn = document.getElementById("nextBtn");
const yayScreen = document.getElementById("yay");
const questionScreen = document.getElementById("question");
const yaySound = document.getElementById("yaySound");

// --- No button dodge ---
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// --- Yes button ---
yesBtn.addEventListener("click", () => {
  questionScreen.classList.add("hidden");
  yayScreen.classList.remove("hidden");
  playConfetti();
  yaySound.play();
});

// --- Next button ---
nextBtn.addEventListener("click", () => {
  window.location.href = "https://gifft.me/o/hm/twxim5zf3yxiavqorfbzbpcj";
});

// --- Confetti ---
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiParticles = [];

function createConfetti() {
  const colors = ["#FF4D6D","#FFC107","#00A86B","#00BCD4","#FF69B4"];
  for(let i=0; i<100; i++) {
    confettiParticles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height - canvas.height,
      r: Math.random()*6+4,
      d: Math.random()*20+10,
      color: colors[Math.floor(Math.random()*colors.length)],
      tilt: Math.random()*10-10,
      tiltAngleIncrement: Math.random()*0.07+0.05,
      tiltAngle: 0
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettiParticles.forEach(p => {
    ctx.beginPath();
    ctx.lineWidth = p.r/2;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r/4, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/4);
    ctx.stroke();
    p.tiltAngle += p.tiltAngleIncrement;
    p.y += (Math.cos(p.d)+3+p.r/2)/2;
    p.x += Math.sin(p.tiltAngle);
    p.tilt = Math.sin(p.tiltAngle) * 15;
    if(p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random()*canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

function playConfetti() {
  createConfetti();
  drawConfetti();
}

// Resize canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


