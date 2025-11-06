// --- Cinematic Fade-In-On-Scroll ---

document.addEventListener("DOMContentLoaded", () => {
  
  // This is the "watcher"
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // When the element is on screen...
      if (entry.isIntersecting) {
        // Add the 'is-visible' class to it
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Find all the sections we marked with "fade-in-section" in our HTML
  const sectionsToAnimate = document.querySelectorAll(".fade-in-section");
  
  // Tell the "watcher" to watch each one
  sectionsToAnimate.forEach((section) => {
    observer.observe(section);
  });

});