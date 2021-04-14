class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Rodriguez Moreno Litzy Valeria .`;
  }
}
customElements.define(
  "mi-footer", MiFooter);