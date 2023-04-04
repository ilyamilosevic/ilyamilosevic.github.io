import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('im-job-list')
export class JobList extends LitElement {
  static override styles = css`
    ul {
      padding: 0;
      margin: 0;
      margin-left: 0.4rem;
      list-style: none;
    }
  `;

  override render() {
    return html`
      <ul>
        <slot></slot>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'im-job-list': JobList;
  }
}
