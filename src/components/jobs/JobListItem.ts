import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('im-job-list-item')
export class JobListItem extends LitElement {
  static override styles = css`
    li {
      position: relative;
      margin-bottom: 0.2rem;
    }

    li:before {
      content: '*';
      position: absolute;
      top: 0.0625rem;
      right: 100%;
      font-size: 0.4rem;
      width: 0.55rem;
      text-align: center;
    }
  `;

  override render() {
    return html`
      <li>
        <slot></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'im-job-list-item': JobListItem;
  }
}
