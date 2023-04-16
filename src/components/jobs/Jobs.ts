import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Job} from './Job';

const checker = (item: Job) => item.open;

@customElement('im-jobs')
export class Jobs extends LitElement {
  static override styles = css`
    .toggle {
      position: relative;
      cursor: pointer;
      user-select: none;
    }

    .toggle-inner {
      position: absolute;
      top: 0px;
      right: 100%;
      font-size: var(--step-1);
      width: var(--step-1);
      text-align: center;
    }

    h2 {
      font-size: var(--step-4);
      line-height: 1;
      margin: 0;
      padding-bottom: var(--space-xs);
      border-top: 1px solid black;
    }
  `;

  @property()
  defaultNodes = null;

  @property()
  state = 'all-closed';

  @property()
  override title = '';

  @property()
  experience = '';

  private get items() {
    return [...(this.slottedChildren || [])].filter(
      (node: Element) => typeof node.tagName !== 'undefined'
    ) as Job[];
  }

  get slottedChildren() {
    const slot = this.shadowRoot?.querySelector('slot');

    return slot ? slot.assignedElements({flatten: true}) : [];
  }

  private onToggle() {
    const allOpened = this.items.every(checker);
    if (allOpened) {
      this.state = 'all-opened';
      return;
    }

    const someOpened = this.items.some(checker);
    if (someOpened) {
      this.state = 'some-opened';
      return;
    }

    this.state = 'all-closed';
  }

  private onClick() {
    if (this.state === 'all-opened') {
      this.items.forEach((item: Job) => (item.open = false));
      this.state = 'all-closed';
      return;
    }

    this.items.forEach((item: Job) => (item.open = true));
    this.state = 'all-opened';
  }

  override render() {
    return html`
      <div role="button" class="toggle" @click=${this.onClick}>
        <div class="toggle-inner">
          ${this.state === 'all-closed' ? '↓' : ''}
          ${this.state === 'all-opened' ? '↑' : ''}
          ${this.state === 'some-opened' ? '⇡' : ''}
        </div>
        <h2>${this.title}</h2>
      </div>
      <slot @im-job-toggle=${this.onToggle}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'im-jobs': Jobs;
  }
}
