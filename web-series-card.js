import { html, css, LitElement } from "@lion/core";

export class WebSeriesCard extends LitElement {
  static get styles() {
    return css`
      .section-cards {
        border-style: double;
        width: 220px;
        height: 180px;
        background-color: burlywood;
        padding: 2.4rem;
        margin: 1.2rem;
      }
      .card {
        display: grid;
        row-gap: 0.7rem;
        width: 200px;
        height: 150px;
        padding: 1.2rem 1.2rem 1.8rem 1.2rem;
        background-color: #f7e7e7;
        border-style: double;
      }
      .card-title {
        margin-top: auto;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        background-color: grey;
      }
      .card-details {
        font-size: 1rem;
      }
      .delete-icon {
        height: 1.8rem;
        width: 1.8rem;
        color: red;
        cursor: pointer;
        position: relative;
        left: 150px;
      }
    `;
  }
  static get properties() {
    return {
      title: { type: String },
      stars: { type: String },
      director: { type: String },
      streamingPlatform: { type: String },
    };
  }
  constructor() {
    super();
    this.title = "";
    this.stars = "";
    this.director = "";
    this.streamingPlatform = "";
  }

  render() {
    return html` <div class="section-cards">
      <div class="card">
        <ion-icon class="delete-icon" id="del-icon" name="close"></ion-icon>
        <p class="card-title">${this.title}</p>
        <ul class="details">
          <li class="director">${this.director}</li>
          <li class="stars">${this.stars}</li>
          <li class="streamingPlatform">${this.streamingPlatform}</li>
        </ul>
      </div>
    </div>`;
  }
}
customElements.define("web-series-card", WebSeriesCard);
