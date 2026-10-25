/* ------------------------------------------------------------------
   Inline SVG icons for social links. Add a new network by dropping a
   path here and adding its key to `resolveIcon`.
   ------------------------------------------------------------------ */

const icons = {
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3.2 9h3.56v12H3.2zM9 9h3.41v1.64h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45V21h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94V21H9z"/></svg>`,

  github: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-1.86c-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.7-1.48-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.4.1-2.92 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.52.22 2.64.11 2.92.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.07 5.47.4.35.75 1.03.75 2.08v3.08c0 .3.2.64.76.53a11.1 11.1 0 0 0 7.56-10.53C23.1 5.33 18.27.5 12 .5z"/></svg>`,

  mail: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5h17v11h-17z"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="m3.5 7 8.5 6 8.5-6"/></svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.52 3.45A11.82 11.82 0 0 0 12.05 0C5.46 0 .1 5.33.1 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.65c1.75.94 3.71 1.44 5.71 1.45h.01c6.58 0 11.95-5.34 11.95-11.9 0-3.17-1.24-6.16-3.48-8.41zm-8.47 18.28h-.01c-1.78 0-3.53-.48-5.05-1.38l-.36-.21-3.76.98 1-3.66-.24-.37a9.86 9.86 0 0 1-1.51-5.2c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.86 9.89zm5.43-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z"/></svg>`,

  // Fallback: a plain link glyph.
  link: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13.5a4 4 0 0 0 5.66 0l2.83-2.83a4 4 0 1 0-5.66-5.66L11.6 6.2"/><path d="M14 10.5a4 4 0 0 0-5.66 0L5.5 13.34a4 4 0 1 0 5.66 5.66l1.06-1.06"/></g></svg>`,
};

/** Pick an icon from the social label; unknown networks get `link`. */
export function socialIcon(label = "") {
  const key = label.toLowerCase().replace(/[^a-z]/g, "");
  if (key.includes("linkedin")) return icons.linkedin;
  if (key.includes("github")) return icons.github;
  if (key.includes("whatsapp")) return icons.whatsapp;
  if (key.includes("mail") || key.includes("email")) return icons.mail;
  return icons.link;
}
