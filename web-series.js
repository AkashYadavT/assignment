import { html, css, LitElement } from "@lion/core";
import { LionTabs } from "@lion/tabs";

import { webSeriesOverview } from "./we-series-overview.js";
import { webSeriesForm } from "./series-form.js";

window.customElements.define("web-series-form", webSeriesForm);
window.customElements.define("web-series-overview", webSeriesOverview);

window.customElements.define("my-tab", LionTabs);

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
    return html` <div class="container">
      <my-tab .selectedIndex=${1}>
        <button slot="tab">form</button>
        <p slot="panel">
          <web-series-form @addingcards=${this.createCard}></web-series-form>
        </p>

        <button slot="tab">Overview</button>
        <p slot="panel">
          <web-series-overview .card=${this.card}></web-series-overview>
        </p>
      </my-tab>
    </div>`;
  }
}

customElements.define("web-series", WebSeries);
