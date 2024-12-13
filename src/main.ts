import "./style.css";

// Dynamic Words Animation
const words: string[] = [
  "PRODUCER",
  "NOVELIST",
  "PLAYWRIGHT",
  "DIRECTOR",
  "PHOTOGRAPHER",
  "PUBLIC SPEAKER",
];
let currentIndex: number = 0;
const dynamicWordsElement = document.getElementById(
  "dynamic-words"
) as HTMLElement | null;

function updateWord(): void {
  if (dynamicWordsElement) {
    dynamicWordsElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateWord();
  setInterval(updateWord, 2000);
});
