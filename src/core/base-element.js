/* ------------------------------------------------------------------
   Base class for the content elements.

   Subclasses implement `hostClass(data)` and `template(data)` and are
   done — data assignment, render timing and upgrading are handled here.
   ------------------------------------------------------------------ */

export class PortfolioElement extends HTMLElement {
  /** Subclasses declare their registered tag name. */
  static tag = "";

  #data = null;

  /** Create the element and attach its content object in one step. */
  static create(data) {
    const node = document.createElement(this.tag);
    node.data = data;
    return node;
  }

  set data(value) {
    this.#data = value || {};
    if (this.isConnected) this.render();
  }

  get data() {
    return this.#data || {};
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.className = this.hostClass(this.data);
    this.innerHTML = this.template(this.data);
  }

  /** Classes for the host element itself (it *is* the component's root). */
  hostClass() {
    return "";
  }

  template() {
    return "";
  }
}
