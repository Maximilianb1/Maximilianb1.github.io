document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  siteNav?.classList.remove("is-open");
}
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  siteNav.classList.toggle("is-open", open);
});
siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
siteNav?.addEventListener("focusout", (event) => {
  if (event.relatedTarget && !event.relatedTarget.closest(".site-header"))
    closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
const desktop = matchMedia("(min-width: 761px)");
desktop.addEventListener("change", closeMenu);
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("is-pending");
          reveal.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  if (!reduceMotion)
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-pending");
      reveal.observe(element);
    });
  const milestones = document.querySelectorAll("[data-year]");
  const progress = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll("[data-year-link]").forEach((link) => {
            const active = link.dataset.yearLink === entry.target.dataset.year;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "step");
            else link.removeAttribute("aria-current");
          });
        }
      });
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
  );
  milestones.forEach((element) => progress.observe(element));
}
