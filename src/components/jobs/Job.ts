import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('im-job')
export class Job extends LitElement {
  static override styles = css`
    details[open] {
      margin-bottom: 0.4rem;
    }

    details > * {
      margin-left: 0.4rem;
    }

    summary {
      cursor: pointer;
      position: relative;
      padding-bottom: 0.4rem;
    }

    details[open] summary {
      padding: 0;
      margin-bottom: 0.2rem;
    }

    summary {
      position: relative;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      border-top: 1px solid black;
      user-select: none;
    }

    summary:before {
      content: '\u{2193}';
      position: absolute;
      top: 0;
      right: 100%;
      font-size: 0.4rem;
      width: 0.55rem;
      text-align: center;
    }

    details[open] > summary:before {
      content: '\u{2191}';
    }

    h3 {
      font-size: 0.58rem;
      margin: 0;
    }

    summary span {
      position: absolute;
      color: #aaa;
      font-size: 0.3rem;
      top: 0;
      right: 0;
    }

    @media (max-width: 500px) {
      summary span {
        font-size: 0.2rem;
      }
    }

    hgroup p {
      font-size: 0.3rem;
      margin: 0;
    }

    p {
      margin: 0 0 0.2rem;
    }
  `;

  @property({type: Boolean, reflect: true})
  public open = false;

  @property({type: String, attribute: 'company-name'})
  companyName = '';

  @property({type: String, attribute: 'company-description'})
  companyDescription = '';

  @property({
    attribute: 'work-period-from'
  })
  workPeriodFrom?: String;

  @property({
    attribute: 'work-period-to'
  })
  workPeriodTo?: String;

  private onClick(e: Event): void {
    e.preventDefault();

    this.open = !this.open;

    this.dispatchEvent(
      new CustomEvent('im-job-toggle', {
        bubbles: true,
        composed: true,
        cancelable: true,
      })
    );
  }

  override render() {
    return html`
      <details ?open=${this.open}>
        <summary @click=${this.onClick}>
          <hgroup>
            <h3>${this.companyName}</h3>
            <p>${this.companyDescription}</p>
          </hgroup>
          ${this.workPeriodFrom && this.workPeriodTo
            ? html`<span>
                ${this.workPeriodFrom} —
                ${this.workPeriodTo}
              </span>`
            : ''}
        </summary>
        <slot></slot>
      </details>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'im-job': Job;
  }
}
