/* ------------------------------------------------------------------
   Binds an element's `data-bind` key to the data object.
   Lists are delegated to components; one-off values are set here.
   ------------------------------------------------------------------ */

import { LIST_COMPONENTS } from "../components/index.js";
import { socialIcon } from "./icons.js";
import { isLink } from "./helpers.js";

/** Read a dot-path out of the data object: get(data, "profile.name") */
const get = (data, path) =>
  path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), data);

export function bindData(data) {
  const profile = data.profile || {};

  document.querySelectorAll("[data-bind]").forEach((node) => {
    const key = node.dataset.bind;
    const Component = LIST_COMPONENTS[key];

    // Lists: one component instance per item, no per-type DOM code.
    if (Component) {
      const items = Array.isArray(data[key]) ? data[key] : [];
      items.forEach((item) => node.append(Component.create(item)));
      return;
    }

    if (key === "socials") {
      const socials = (profile.socials || []).filter((s) => isLink(s.url));
      socials.forEach((social) => {
        const a = document.createElement("a");
        const isMail = social.url.startsWith("mailto:");
        a.href = social.url;
        a.title = social.label;
        a.setAttribute("aria-label", social.label);
        if (isMail) a.classList.add("is-mail");
        else {
          a.target = "_blank";
          a.rel = "noopener noreferrer me";
        }
        a.innerHTML = socialIcon(social.label);
        node.append(a);
      });
      if (!socials.length) node.remove();
      return;
    }

    if (key === "mailto") {
      const mail = (profile.email || "").trim();
      const fallback = (profile.socials || []).find((s) => isLink(s.url));

      // Nodes marked with data-show-address display the address itself.
      if (node.dataset.showAddress != null) {
        if (!mail) {
          node.remove();
          return;
        }
        node.textContent = mail;
      }

      if (mail) {
        node.href = "mailto:" + mail;
      } else if (fallback) {
        // No email set yet — send people to the first real social instead.
        node.href = fallback.url;
        node.target = "_blank";
        node.rel = "noopener noreferrer";
      } else {
        node.href = "#";
      }
      return;
    }

    if (key === "about") {
      (data.about || []).forEach((text, index) => {
        const p = document.createElement("p");
        // The first paragraph opens with the big inline lead ("+2").
        if (index === 0 && data.aboutLead) {
          const lead = document.createElement("span");
          lead.className = "about-lead";
          // Digits inside the lead ("+2") are painted with the accent colour.
          String(data.aboutLead)
            .split(/(\d+)/)
            .filter(Boolean)
            .forEach((part) => {
              if (/^\d+$/.test(part)) {
                const num = document.createElement("span");
                num.className = "about-lead-num";
                num.textContent = part;
                lead.append(num);
              } else {
                lead.append(document.createTextNode(part));
              }
            });
          p.append(lead, document.createTextNode(" " + text));
        } else {
          p.textContent = text;
        }
        node.append(p);
      });
      return;
    }

    // Plain text bindings (profile.name, contact.heading, ...)
    const value = get(data, key);
    if (value != null && typeof value !== "object") {
      node.textContent = value;
    }
  });

  hideEmptySections(data);
}

/** Drop the blocks whose data is empty instead of rendering empty chrome. */
function hideEmptySections(data) {
  const statsHost = document.querySelector('[data-bind="stats"]');
  if (statsHost && !(data.stats || []).length) {
    const grid = statsHost.closest(".about-grid");
    if (grid) grid.classList.add("no-stats");
    statsHost.remove();
  }

  if (!(data.testimonials || []).length) {
    document.getElementById("words")?.remove();
  }

  if (!(data.projects || []).length) {
    document.getElementById("work")?.remove();
  }
}
