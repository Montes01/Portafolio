import { PortfolioElement } from "../core/base-element.js";
import { esc } from "../core/helpers.js";

/** <portfolio-stat> — a number plus its caption. */
export class StatItem extends PortfolioElement {
  static tag = "portfolio-stat";

  connectedCallback() {
    this.setAttribute("role", "listitem");
    super.connectedCallback();
  }

  template(stat) {
    return `<strong>${esc(stat.value)}</strong><small>${esc(stat.label)}</small>`;
  }
}
