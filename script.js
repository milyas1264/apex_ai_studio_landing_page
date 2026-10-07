// 1. Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function toggleMobileMenu() {
  const isHidden = mobileMenu.classList.contains("hidden");
  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    menuIconOpen.classList.add("hidden");
    menuIconClose.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
    menuIconOpen.classList.remove("hidden");
    menuIconClose.classList.add("hidden");
  }
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("hidden")) {
      toggleMobileMenu();
    }
  });
});

// 2. Interactive AI Demo Simulator
const demoInput = document.getElementById("demo-input");
const demoBtn = document.getElementById("demo-btn");
const demoOutput = document.getElementById("demo-output");
const demoText = document.getElementById("demo-text");

const sampleResponses = [
  "OPTIMIZING PIPELINE: Autonomous agent rerouted high-priority workloads to US-East nodes. Estimated latency reduced by 34%.",
  "SECURITY ANALYSIS: Scanned 1.2M API endpoints. Zero critical vulnerabilities detected. Encryption key rotation verified.",
  "PREDICTIVE MODEL: Forecast predicts a 28% peak load increase at 14:00 UTC. Auto-scaling clusters initialized.",
];

demoBtn.addEventListener("click", () => {
  const query = demoInput.value.trim();
  if (!query) return;

  demoOutput.classList.remove("hidden");
  demoText.innerText = "";

  const response =
    sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
  let index = 0;

  const interval = setInterval(() => {
    demoText.innerText += response[index];
    index++;
    if (index >= response.length) {
      clearInterval(interval);
    }
  }, 20);
});

// 3. Form Submission Toast Feedback
const contactForm = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  toastMessage.innerText =
    "Thank you! Our AI engineers will reach out shortly.";

  // Show toast
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  contactForm.reset();

  // Hide toast after 4s
  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-24", "opacity-0");
  }, 4000);
});

// 4. Hero Section Canvas Animation
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const nodes = [];
const nodeCount = 35;

for (let i = 0; i < nodeCount; i++) {
  nodes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    radius: Math.random() * 2 + 1,
  });
}

function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw connection lines
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${1 - dist / 120})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }

  // Draw particles
  nodes.forEach((node) => {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#06B6D4";
    ctx.fill();
  });

  requestAnimationFrame(animateCanvas);
}

window.onload = function () {
  animateCanvas();
};
