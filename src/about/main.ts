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
  rewriteLinks();
});
