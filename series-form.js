import { html, css, LitElement } from "@lion/core";

export class webSeriesForm extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      stars: { type: String },
      director: { type: String },
      streamingPlatform: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        padding: 2rem;
        flex: 50%;
        border: 0.2rem solid #d6eaf8;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      form {
        padding: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .section-form {
        border-style: double;
        background-color: burlywood;
      }
      .section-form select,
      input {
        font-size: 2rem;
        padding: 0.7rem;
        border: 2px solid blue;
        margin: 0.6rem;
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
    `;
  }
  addCard(e) {
    e.preventDefault();
    const title = this.shadowRoot.getElementById("title").value;
    const director = this.shadowRoot.getElementById("director").value;
    const stars = this.shadowRoot.getElementById("stars").value;
    const streamingPlatform =
      this.shadowRoot.getElementById("streamingPlatform").value;
    const cardcontainer = { title, director, stars, streamingPlatform };

    this.dispatchEvent(
      new CustomEvent("addingcards", { detail: cardcontainer })
    );

    this.shadowRoot.getElementById("title").value = null;
    this.shadowRoot.getElementById("director").value = null;
    this.shadowRoot.getElementById("stars").value = null;
    this.shadowRoot.getElementById("streamingPlatform").value = null;
  }

  render() {
    return html`
      <section class="section-form">
        <form id="add-form">
          <label for="title">Title:</label><input id="title" type="text" />
          <label for="director">Director:</label
          ><input id="director" type="text" /> <label for="stars">Stars:</label
          ><input id="stars" type="text" />
          <label for="streamingPlatform">Platform:</label>
          <select id="streamingPlatform">
            <option>None</option>
            <option value="amazon-prime">Amazon Prime</option>
            <option value="netflix">Netflix</option>
            <option value="hulu">Hulu</option>
            <option value="disney">Disney</option>
            <option value="voot">Voot</option>
          </select>
          <button
            type="submit"
            id="name"
            value="ADD"
            class="btn"
            @click=${(e) => this.addCard(e)}
          >
            ADD
          </button>
        </form>
      </section>
    `;
  }
}
