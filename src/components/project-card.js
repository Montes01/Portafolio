import { PortfolioElement } from "../core/base-element.js";
import { anchor, esc, isLink, tagList } from "../core/helpers.js";

/** <portfolio-project> — one card in "Selected work". */
export class ProjectCard extends PortfolioElement {
  static tag = "portfolio-project";

  hostClass(project) {
    const classes = ["card"];
    if (project.featured) classes.push("featured");
    if (isLink(project.image)) classes.push("has-media");
    return classes.join(" ");
  }

  template(project) {
    const links = [];
    if (isLink(project.link)) links.push(anchor(project.link, "Live site"));
    if (isLink(project.repo)) links.push(anchor(project.repo, "Source"));

    const title = isLink(project.link)
      ? anchor(project.link, project.title, "card-link")
      : `<a class="card-link" href="#work">${esc(project.title)}</a>`;

    return `
      ${isLink(project.image) ? `<span class="card-media" aria-hidden="true"><img src="${esc(project.image)}" alt="" loading="lazy" decoding="async" /></span>` : ""}
      <div class="card-top">
        <h3>${title}<span class="arrow" aria-hidden="true">↗</span></h3>
        <span class="year">${esc(project.year)}</span>
      </div>
      ${project.summary ? `<p>${esc(project.summary)}</p>` : ""}
      ${tagList(project.tags)}
      ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
    `;
  }
}
