import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./mv-tags.js";

export class MvTagsDemo extends LitElement {
  static get properties() {
    return {
      values: { type: Array, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `;
  }

  constructor() {
    super();
    this.values = ["", "", ""];
  }

  render() {
    return html`
      <mv-container>
        <h3>Default</h3>
        <mv-tags @tags-changed="${this.tagsChanged(0)}"></mv-tags>
        <h3>values="abc, 123"</h3>
        <mv-tags
          values="abc, 123"
          @tags-changed="${this.tagsChanged(1)}"
        ></mv-tags>
        <h3>.tags="$ {["abc", "123"]}"</h3>
        <mv-tags
          .tags="${["abc", "123"]}"
          @tags-changed="${this.tagsChanged(2)}"
        ></mv-tags>
        <div>
          Tags:
          <ul>
            ${this.values.map(
              value =>
                html`
                  <li>${value}</li>
                `
            )}
          </ul>
        </div>
      </mv-container>
    `;
  }

  tagsChanged = index => event => {
    const {
      detail: { tags }
    } = event;
    this.values = [
      ...this.values.slice(0, index),
      JSON.stringify(tags, null, 2),
      ...this.values.slice(index + 1)
    ];
  };
}

customElements.define("mv-tags-demo", MvTagsDemo);
