// --- Cinematic Fade-In-On-Scroll Logic ---

document.addEventListener("DOMContentLoaded", () => {
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the element enters the viewport, apply the "is-visible" class.
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.1 // Triggers when 10% of the element is visible
  });

  // Select all sections we want to animate (must have class="fade-in-section")
  const sectionsToAnimate = document.querySelectorAll(".fade-in-section");
  
  sectionsToAnimate.forEach((section) => {
    observer.observe(section);
  });

});