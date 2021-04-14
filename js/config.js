import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          home
        </span>
        Inicio
      </a>
      <a href="index2.html">
        <span
          class="material-icons">
        language
        </span>
        IoT
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);