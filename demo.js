import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./mv-tags.js";
import "mv-font-awesome";

export class MvTagsDemo extends LitElement {
  static get properties() {
    return {
      tags: { type: Array, attribute: false, reflect: true },
      detail: { type: Object, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true },
      theme: { type: String, attribute: true }
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
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
        z-index: 100;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }
    `;
  }

  constructor() {
    super();
    this.tags = ["abc", "123"];
    this.detail = {};
    this.theme = "light";
    this.open = false;
  }

  render() {
    const iconColor = `color: ${this.open ? "yellow" : ""}`;
    const containerTheme = this.open ? "light" : "dark";
    const textColor = `color: ${this.open ? "" : "#FFFFFF"}`;
    return html`
      <div class="theme">
        <mv-fa icon="lightbulb" style="${iconColor}" @click=${this.toggleLightBulb}></mv-fa>
      </div>
      <mv-container .theme="${containerTheme}" style="${textColor}">
        <h3>.tags="$ {["abc", "123"]}"</h3>
        <mv-tags
          .tags="${this.tags}"
          @add-tag="${this.updateTags}"
          @remove-tag="${this.removeTags}"
          placeholder="Enter tags..."
          .theme="${this.theme}"
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

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "dark";
    } else {
      this.theme = "light";
    }
  };
}

customElements.define("mv-tags-demo", MvTagsDemo);
