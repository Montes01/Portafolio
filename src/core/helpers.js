/* ------------------------------------------------------------------
   Small DOM/data helpers shared by every component.
   ------------------------------------------------------------------ */

/** Escape text so it can be interpolated into an HTML template. */
export const esc = (value) =>
  String(value == null ? "" : value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

/** True for real URLs — "#" and empty strings are placeholders. */
export const isLink = (url) =>
  typeof url === "string" && url.trim() !== "" && url.trim() !== "#";

/** External link markup. */
export const anchor = (url, label, className = "") =>
  `<a${className ? ` class="${className}"` : ""} href="${esc(url)}" ` +
  `target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;

/** `<ul>` of tags, or an empty string when there are none. */
export const tagList = (tags, className = "tags") =>
  (tags || []).length
    ? `<ul class="${className}">${tags
        .map((tag) => `<li>${esc(tag)}</li>`)
        .join("")}</ul>`
    : "";
