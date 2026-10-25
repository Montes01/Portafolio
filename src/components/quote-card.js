import { PortfolioElement } from "../core/base-element.js";
import { esc } from "../core/helpers.js";

/** <portfolio-quote> — one testimonial. */
export class QuoteCard extends PortfolioElement {
  static tag = "portfolio-quote";

  template(quote) {
    return `
      <figure class="quote">
        <blockquote>${esc(quote.quote)}</blockquote>
        <figcaption>
          <strong>${esc(quote.author)}</strong>${esc(quote.title)}
        </figcaption>
      </figure>
    `;
  }
}
