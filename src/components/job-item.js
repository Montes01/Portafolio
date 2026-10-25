import { PortfolioElement } from "../core/base-element.js";
import { esc, tagList } from "../core/helpers.js";

/** <portfolio-job> — one entry in the experience timeline. */
export class JobItem extends PortfolioElement {
  static tag = "portfolio-job";

  connectedCallback() {
    this.setAttribute("role", "listitem");
    super.connectedCallback();
  }

  template(job) {
    return `
      <div class="period">${esc(job.period)}</div>
      <div>
        <h3>${esc(job.role)}</h3>
        <div class="company">${esc(job.company)}</div>
        ${job.description ? `<p>${esc(job.description)}</p>` : ""}
        ${tagList(job.tags)}
      </div>
    `;
  }
}
