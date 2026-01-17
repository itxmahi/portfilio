// =======================
// TYPING ANIMATION
// =======================

var typed = new Typed(".typing-text", {
  strings: ["Front-End Developer", "Web Designer", "React Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  showCursor: false
});


// =======================
// SMOOTH SCROLL NAVIGATION
// =======================
document.querySelectorAll("nav ul li a, .hero-btn a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = e.target.getAttribute("href");
    if (target && target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =======================
// HERO BUTTONS → SCROLL TO CONTACT
// =======================
document.querySelectorAll(".hero-btn a").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
});

// =======================
// SKILL BUTTON CLICK EFFECT
// =======================
const skillButtons = document.querySelectorAll(".skill-btn");
skillButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active-skill");
    setTimeout(() => btn.classList.remove("active-skill"), 400);
  });
});

// =======================
// PROJECT LIVE BUTTON CLICK EFFECT
// =======================
const liveButtons = document.querySelectorAll(".neon-live-btn");
liveButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("live-click");
    setTimeout(() => btn.classList.remove("live-click"), 500);
  });
});

// =======================
// CONTACT BUTTON EFFECT
// =======================
const contactBtn = document.querySelector(".neon-contact-btn");
contactBtn.addEventListener("mouseenter", () => {
  contactBtn.classList.add("hover-neon");
});
contactBtn.addEventListener("mouseleave", () => {
  contactBtn.classList.remove("hover-neon");
});

// =======================
// DOWNLOAD CV BUTTON
// =======================
// =======================
// DOWNLOAD CV BUTTON
// =======================
const cvBtn = document.querySelector(".cvbtn");

cvBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const link = document.createElement("a");
  link.href = "Umair_Bin_Saif_CV.pdf";  // your CV file
  link.download = "Umair_Bin_Saif_CV.pdf";  // force download
  link.click();
});



// =======================
// OPTIONAL: PROJECT CARD POPUP EFFECT (like Netflix hover)
// =======================
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".project-info").style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  });
  card.addEventListener("mouseleave", () => {
    card.querySelector(".project-info").style.transform = "translateY(100%)";
    card.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
  });
});



    