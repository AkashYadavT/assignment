import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { webSeriesOverview } from "./we-series-overview.js";

import { webSeriesForm } from "./series-form.js";

window.customElements.define("web-series-form", webSeriesForm);
window.customElements.define("web-series-overview", webSeriesOverview);

export class WebSeries extends LitElement {
  static get properties() {
    return {
      card: { type: Array },
    };
  }

  constructor() {
    super();
    this.card = "";
  }
  static get styles() {
    return css``;
  }

  createCard(e) {
    this.card = [...this.card, e.detail];
  }

  render() {
    return html`
      <web-series-form @addingcards=${this.createCard}></web-series-form>
      <web-series-overview .card=${this.card}></web-series-overview>
    `;
  }
}

customElements.define("web-series", WebSeries);
