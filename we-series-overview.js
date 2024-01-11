import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

import "./web-series-card.js";

export class webSeriesOverview extends LitElement {
  static get properties() {
    return {
      card: { type: Array },
    };
  }

  constructor() {
    super();
    this.card = [];
  }
  static get styles() {
    return css`
      :host {
        padding: 2rem;
        flex: 50%;
        flex-direction: row;
        display: grid;
        grid-row-gap: 12px;
        grid-column-gap: 200px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
      }
    `;
  }

  render() {
    return html`
      ${this.card.map(
        (item) =>
          html`<web-series-card
            id="card"
            title=${item.title}
            director=${item.director}
            stars=${item.stars}
            streamingPlatform=${item.streamingPlatform}
          ></web-series-card>`
      )}
    `;
  }
}
