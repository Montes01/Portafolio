/* ------------------------------------------------------------------
   Entry point. Wires the data to the page.
   ------------------------------------------------------------------ */

import { portfolio } from "./data.js";
import "./components/index.js"; // registers the custom elements
import { bindData } from "./core/bindings.js";
import { initReveal } from "./core/reveal.js";
import { initTheme } from "./core/theme.js";

const { profile = {} } = portfolio;

if (profile.name) {
  document.title = profile.role
    ? `${profile.name} — ${profile.role}`
    : profile.name;
}

bindData(portfolio);
initTheme();
initReveal();

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
