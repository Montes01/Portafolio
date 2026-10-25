/* ------------------------------------------------------------------
   Light/dark toggle. The initial theme is applied by the inline script
   in index.html so there is no flash before first paint.
   ------------------------------------------------------------------ */

export function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  if (!toggle) return;

  const current = () =>
    root.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  toggle.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* private mode, ignore */
    }
  });
}
