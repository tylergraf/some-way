import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `some-way`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SomeWay extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>
    <h2>Hello [[prop1]]!</h2>
`;
  }

  static get is() { return 'some-way'; }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'some-way'
      }
    };
  }
}

window.customElements.define(SomeWay.is, SomeWay);
