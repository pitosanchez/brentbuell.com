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

function rewriteLinks() {
  const links: HTMLAnchorElement[] = Array.from(
    document.querySelectorAll(".nav-link")
  );
  links.forEach((element) => {
    const currentPath = element.pathname.split("/").slice(1);
    element.pathname = import.meta.env.BASE_URL + currentPath.join("/");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateWord();
  setInterval(updateWord, 2000);
  rewriteLinks();
});
