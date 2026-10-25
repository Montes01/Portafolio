import { PortfolioElement } from "../core/base-element.js";
import { esc } from "../core/helpers.js";

/** <portfolio-skill-group> — a heading plus its chips. */
export class SkillGroup extends PortfolioElement {
  static tag = "portfolio-skill-group";

  hostClass() {
    return "skill-group";
  }

  template(group) {
    const chips = (group.items || [])
      .map((item) => `<li class="chip">${esc(item)}</li>`)
      .join("");

    return `<h3>${esc(group.group)}</h3><ul>${chips}</ul>`;
  }
}
