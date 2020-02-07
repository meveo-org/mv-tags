import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./mv-tags.js";

export class MvTagsDemo extends LitElement {
  static get properties() {
    return {
      tags: { type: Array, attribute: false, reflect: true },
      detail: { type: Object, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .tags {
        margin-top: 10px;
      }
    `;
  }

  constructor() {
    super();
    this.tags = ["abc", "123"];
    this.detail = {};
  }

  render() {
    return html`
      <mv-container>
        <h3>.tags="$ {["abc", "123"]}"</h3>
        <mv-tags
          .tags="${this.tags}"
          @add-tag="${this.updateTags}"
          @remove-tag="${this.removeTags}"
          placeholder="Enter tags..."
        ></mv-tags>
        <div class="tags">
          <b>Tags : </b>
          <ul>
            ${this.tags.map(
              value =>
                html`
                  <li>${JSON.stringify(value)}</li>
                `
            )}
          </ul>
        </div>
        <div class="tags">
          <b>Data : </b>${JSON.stringify(this.detail, null, 2)}
        </div>
      </mv-container>
    `;
  }

  removeTags = event => {
    const { detail } = event;
    const { value } = detail;
    const shouldRemove = confirm(`Remove tag: ${value}?`);
    if (shouldRemove) {
      this.updateTags(event);
    }
  };

  updateTags = event => {
    const { detail } = event;
    const { tags } = detail;
    this.tags = [...tags];
    this.detail = detail;
  };
}

customElements.define("mv-tags-demo", MvTagsDemo);
