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
  rewriteLinks();
});
