import { LitElement, html, css } from "lit-element";

export class MvTags extends LitElement {
  static get properties() {
    return {
      values: { type: String, attribute: true },
      value: { type: String, attribute: false, reflect: true },
      tags: { type: Array, attribute: false, reflect: true },
      placeholder: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      a:hover {
        cursor: pointer;
      }

      .mv-tags {
        border: 1px solid #1e87f0;
        box-sizing: border-box;
        margin: 1em 0em;
        padding: 0 0.5em;
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        border-radius: 5px;
      }

      .mv-tags > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
      }

      .mv-tags ul li {
        margin: 0.5em 0.2em;
        padding: 0.5em;
        color: #fff;
        background-color: #1e87f0;
        border-radius: 5px;
      }

      .mv-tags ul li a {
        margin: 0.5em 0.2em;
        text-decoration: none;
        color: inherit;
      }

      .mv-tags input {
        padding: 0.9em 0.5em;
        box-sizing: border-box;
        flex-grow: 1;
        border: none;
        outline: none;
        font-size: inherit;
        font-family: inherit;
        color: inherit;
      }
    `;
  }

  constructor() {
    super();
    this.value = "";
    this.tags = [];
    this.placeholder = "";
  }

  render() {
    const hasTags = this.tags && this.tags.length > 0;
    return html`
      <div class="mv-tags">
        <ul>
          ${hasTags
            ? this.tags.map(
                (tag, index) => html`
                  <li>${tag}<a @click="${this.removeTag(index)}">×</a></li>
                `
              )
            : html``}
        </ul>
        <input
          @keyup="${this.inputChange}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
        />
      </div>
    `;
  }

  firstUpdated() {
    const values = this.values || "";
    const hasValues = !!values.trim();
    if (hasValues) {
      this.tags = values.split(",").map(value => value.trim());
    }
  }

  inputChange = event => {
    const {
      target: { value }
    } = event;
    const hasValue = !!value.trim();
    const isComma = event.key === ",";
    const isEnter = event.key === "Enter" || isComma;
    if (isEnter && hasValue) {
      this.tags = [...this.tags, isComma ? value.replace(",", "") : value];
      this.value = "";
      this.dispatchEvent(
        new CustomEvent("tags-changed", { detail: { tags: this.tags } })
      );
    } else {
      this.value = value;
    }
  };

  removeTag = index => () => {
    this.tags = [...this.tags.slice(0, index), ...this.tags.slice(index + 1)];
    this.dispatchEvent(
      new CustomEvent("tags-changed", { detail: { tags: this.tags } })
    );
  };
}

customElements.define("mv-tags", MvTags);
