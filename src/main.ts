import "./style.css";

// Dynamic Words Animation
const words = [
  "PRODUCER",
  "NOVELIST",
  "PLAYWRIGHT",
  "DIRECTOR",
  "PHOTOGRAPHER",
  "PUBLIC SPEAKER",
];
let currentIndex = 0;
const dynamicWordsElement = document.getElementById(
  "dynamic-words"
) as HTMLElement | null;

function updateWord() {
  if (dynamicWordsElement) {
    dynamicWordsElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateWord();
  setInterval(updateWord, 2000);
});
