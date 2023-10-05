document.addEventListener("DOMContentLoaded", function () {
const sections = document.querySelectorAll("section");
let currentIndex = 0;

function animateSection(index) {
if (index >= sections.length) {
return; // Stop when there are no more sections
}

const currentSection = sections[index];
const entranceAnimation = "animate__" + currentSection.getAttribute("data-entrance");
const exitAnimation = "animate__" + currentSection.getAttribute("data-exit");
const stayDuration = parseInt(currentSection.getAttribute("data-stay")) * 1000;

// Add entrance animation
currentSection.style.display = "block";
currentSection.classList.add("animate__animated", entranceAnimation);

setTimeout(() => {
// Add exit animation after stay duration
currentSection.classList.remove(entranceAnimation);
currentSection.classList.add(exitAnimation);

setTimeout(() => {
// Hide the section after exit animation
currentSection.style.display = "none";
currentSection.classList.remove(exitAnimation);

// Move to the next section
animateSection(index + 1);
}, 1000); // Adjust this timeout as needed to match your exit animation duration
}, stayDuration);
}

// Start the animation sequence
animateSection(currentIndex);
});
