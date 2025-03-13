// scrollRevealInit.js

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: false,
  viewFactor: 0.2, // Start animation even if only 20% of the element is in view
  once: true // Ensures animation doesn't replay unnecessarily
});
  
  // Animate the entire wireframe container first.
  sr.reveal('.featured-text-card', { delay: 300 });
  
  // Animate subtext later (ensure the subtext wrapper has class "featured-subtext").
  sr.reveal('.featured-subtext', { delay: 4500 });
  
  // Animate the floating images (from the bottom).
  sr.reveal('.featured-image', { delay: 4000, origin: 'bottom', distance: '50px', duration: 1500, reset: false });
  
  // Animate the scroll down button.
  sr.reveal('.featured-text-btn', { delay: 7500 });
  
  // Animate project boxes as you scroll.
  sr.reveal('.project-box', { interval: 200, reset: false });
  
  