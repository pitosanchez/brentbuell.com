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
    const base = import.meta.env.BASE_URL;
    const currentPath = element.pathname.replace(base, "").split("/");
    element.pathname = base + currentPath.join("/");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateWord();
  setInterval(updateWord, 2000);
  rewriteLinks();
});
