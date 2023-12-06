import { html, css, LitElement } from "lit";

class WebSeriesOverview extends LitElement {
  static get properties() {
    return {
      cards: { type: Array },
    };
  }
  constructor() {
    super();
    this.cards = [
      {
        title: "money heist",
        directors: "Alex pina",
        stars: "7.3",
        platform: "Netflix",
      },
      {
        title: "harry potter",
        directors: "JK Rowling",
        stars: "8.0",
        platform: "Amazon Prime",
      },
      {
        title: "The witchers",
        directors: "Mark Jobst",
        stars: "8.2",
        platform: "Netflix",
      },
      {
        title: "Lockey And KEy",
        directors: "M.Romanek",
        stars: "7.4",
        platform: "Netflix",
      },
      {
        title: "Stranger things",
        directors: "T D Brothers",
        stars: "8.7",
        platform: "Netflix",
      },
      {
        title: "GOT",
        directors: "D. Benioff",
        stars: "9.2",
        platform: "Disney",
      },
    ];
  }

  static get styles() {
    return css`
      .section-cards {
        border-style: double;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
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
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        font-size: 62.5%;
      }
      body {
        font-family: sans-serif;
        line-height: 1;
        font-weight: 400;
      }
      .Heading {
        display: block;
        text-align: center;
        background-color: blue;
        font: size 6.4rem;
        font-weight: 700;
        color: #fff;
        padding: 2.4rem;
        margin: 1.2rem;
      }
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    `;
  }
  render() {
    return html` <div class="section-cards">
      ${this.cards.map(
        (i) => html`
          <div class="card">
            <ion-icon class="delete-icon" id="del-icon" name="close"></ion-icon>
            <p class="card-title">${i.title}</p>
            <ul class="card-details">
              <li class="card-dir">${i.directors}</li>
              <li class="card-rating">${i.stars}</li>
              <li class="platform">${i.platform}</li>
            </ul>
          </div>
        `
      )}
    </div>`;
  }
}
customElements.define("series-form-overview", WebSeriesOverview);
