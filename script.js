const heroBtn = document.getElementById("hireMeBtn");

heroBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("no.");        
});

const form = document.getElementById("contactForm");
const submitBtn = form.querySelector(".submit-btn");
const inputs = form.querySelectorAll("input[required], textarea[required]");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const allFilled = Array.from(inputs).every(i => i.value.trim() !== '');
    submitBtn.disabled = !allFilled;
    submitBtn.classList.toggle("active", allFilled);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent. Please wait for a response.");
  form.reset();
  submitBtn.disabled = true;
  submitBtn.classList.remove("active");
});

(function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function highlightActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightActiveLink);
})();