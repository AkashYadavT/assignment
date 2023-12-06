import { html, css, LitElement } from "lit";

class WebSeries extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      director: { type: String },
      star: { type: Number },
    };
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <form id="add-from">
        <label for="title">Title:</label><input id="title" type="text" />
        <label for="directors">Directors:</label
        ><input id="directors" type="text" /> <label for="stars">Stars:</label
        ><input id="stars" type="text" />
        <label for="platform">Platform:</label>
        <select id="platform">
          <option>None</option>
          <option value="amazon-prime">Amazon Prime</option>
          <option value="netflix">Netflix</option>
          <option value="hulu">Hulu</option>
          <option value="disney">Disney</option>
          <option value="voot">Voot</option>
        </select>
        <button id="button" class="btn">Add</button>
      </form>
    `;
  }
  static get style() {
    return css`
      form {
        padding: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .btn {
        width: 30%;
        height: 4.8rem;
        font-size: 2.6rem;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        text-align: center;
        border: none;
        color: #fff;
        background-color: blue;
        cursor: pointer;
        margin: 2.4rem 0 0 1.2rem;
      }
      select,
      input {
        font-size: 2rem;
        padding: 0.7rem;
        border: 2px solid blue;
        margin: 0.6rem;
      }
    `;
  }
}
customElements.define("series-form", WebSeriesForm);
