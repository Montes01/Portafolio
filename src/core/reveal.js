/* ------------------------------------------------------------------
   Fade sections in as they enter the viewport. The hero is excluded on
   purpose so the first paint never waits on an observer.
   ------------------------------------------------------------------ */

export function initReveal(selector = ".section") {
  const targets = document.querySelectorAll(selector);
  targets.forEach((node) => node.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((node) => node.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach((node) => observer.observe(node));
}
