window.onload = () => {
  /*** Toggle Logic ***/
  const toggleIndicator = document.getElementById("toggleIndicator");
  const workButton = document.getElementById("workButton");
  const infoButton = document.getElementById("infoButton");

  if (!toggleIndicator || !workButton || !infoButton) {
    console.error("Toggle elements not found!");
    return;
  }

  // Set initial width & position for toggle indicator
  toggleIndicator.style.width = `${workButton.offsetWidth}px`;
  toggleIndicator.style.transform = "translateX(0%)";
  toggleIndicator.style.transition = "transform 0.3s ease-in-out, width 0.3s ease-in-out";

  // Attach event listeners to buttons
  workButton.addEventListener("click", () => showSection("projectsSection", "workButton"));
  infoButton.addEventListener("click", () => showSection("aboutSection", "infoButton"));

  // Show default section
  showSection("projectsSection", "workButton");

  // Start typing effect for "Business Analyst"
  setTimeout(typeChangingText, 1500);
};

// Show/Hide Sections Logic + Toggle Movement
function showSection(sectionId, activeButton) {
  const sections = ["projectsSection", "aboutSection"];
  const toggleIndicator = document.getElementById("toggleIndicator");
  const workButton = document.getElementById("workButton");
  const infoButton = document.getElementById("infoButton");

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = id === sectionId ? "block" : "none";
    }
  });

  if (activeButton === "workButton") {
    toggleIndicator.style.width = `${workButton.offsetWidth}px`;
    toggleIndicator.style.transform = "translateX(0%)";
    workButton.style.color = "#eb8434";
    infoButton.style.color = "#8c8c8c";
  } else if (activeButton === "infoButton") {
    toggleIndicator.style.width = `${infoButton.offsetWidth}px`;
    toggleIndicator.style.transform = `translateX(${workButton.offsetWidth}px)`;
    infoButton.style.color = "#eb8434";
    workButton.style.color = "#8c8c8c";
  }
}

/*** Dynamic Typing Effect ***/
var typed = new Typed(".typedText", {
  strings: ["a Growth-Oriented Leader,", "a Business Analyst,", "a UI/UX Enthusiast,"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
  loop: true,
  showCursor: false
});