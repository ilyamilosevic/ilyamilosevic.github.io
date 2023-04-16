!function(t){
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new WeakMap;class n{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(s,t,e)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var h;const a=window,u=a.trustedTypes,d=u?u.emptyScript:"",c=a.reactiveElementPolyfillSupport,v={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},p=(t,i)=>i!==t&&(i==i||t==t),f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=f){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(l(t))}else void 0!==t&&i.push(l(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((s=>{const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=f){var e;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:v).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:v;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var g;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:m}),(null!==(h=a.reactiveElementVersions)&&void 0!==h?h:a.reactiveElementVersions=[]).push("1.6.1");const b=window,y=b.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,k="?"+S,j=`<${k}>`,x=document,C=()=>x.createComment(""),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,E="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,z=/>/g,M=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,N=/"/g,R=/^(?:script|style|textarea|title)$/i,P=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),I=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),B=new WeakMap,D=x.createTreeWalker(x,129,null,!1),H=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=O;for(let i=0;i<s;i++){const s=t[i];let l,h,a=-1,u=0;for(;u<s.length&&(r.lastIndex=u,h=r.exec(s),null!==h);)u=r.lastIndex,r===O?"!--"===h[1]?r=U:void 0!==h[1]?r=z:void 0!==h[2]?(R.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=M):void 0!==h[3]&&(r=M):r===M?">"===h[0]?(r=null!=o?o:O,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?M:'"'===h[3]?N:T):r===N||r===T?r=M:r===U||r===z?r=O:(r=M,o=void 0);const d=r===M&&t[i+1].startsWith("/>")?" ":"";n+=r===O?s+j:a>=0?(e.push(l),s.slice(0,a)+$+s.slice(a)+S+d):s+S+(-2===a?(e.push(void 0),i):d)}const l=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(l):l,e]};class J{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=H(t,i);if(this.el=J.createElement(h,s),D.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=D.nextNode())&&l.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith($)||i.startsWith(S)){const s=a[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+$).split(S),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?F:"?"===i[1]?G:"@"===i[1]?Q:q})}else l.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(R.test(e.tagName)){const t=e.textContent.split(S),i=t.length-1;if(i>0){e.textContent=y?y.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],C()),D.nextNode(),l.push({type:2,index:++o});e.append(t[i],C())}}}else if(8===e.nodeType)if(e.data===k)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(S,t+1));)l.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,i){const s=x.createElement("template");return s.innerHTML=t,s}}function K(t,i,s=t,e){var o,n,r,l;if(i===I)return i;let h=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const a=A(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,e)),void 0!==e?(null!==(r=(l=s)._$Co)&&void 0!==r?r:l._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=K(t,h._$AS(t,i.values),h,e)),i}class W{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:x).importNode(s,!0);D.currentNode=o;let n=D.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new Z(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new X(n,this,t)),this.u.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(n=D.nextNode(),r++)}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Z{constructor(t,i,s,e){var o;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=K(this,t,i),A(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==I&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>_(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==L&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=J.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else{const t=new W(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=B.get(t.strings);return void 0===i&&B.set(t.strings,i=new J(t)),i}k(t){_(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new Z(this.S(C()),this.S(C()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class q{constructor(t,i,s,e,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=K(this,t,i,0),n=!A(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const e=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=K(this,e[s+r],i,r),l===I&&(l=this._$AH[r]),n||(n=!A(l)||l!==this._$AH[r]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!e&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const V=y?y.emptyScript:"";class G extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class Q extends q{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=K(this,t,i,0))&&void 0!==s?s:L)===I)return;const e=this._$AH,o=t===L&&e!==L||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==L&&(e===L||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const Y=b.litHtmlPolyfillSupport;null==Y||Y(J,Z),(null!==(g=b.litHtmlVersions)&&void 0!==g?g:b.litHtmlVersions=[]).push("2.7.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var tt,it;class st extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Z(i.insertBefore(C(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}}st.finalized=!0,st._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:st});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ot=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,nt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function rt(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):nt(t,i)
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;var ht=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};t.JobListItem=class extends st{render(){return P`
      <li>
        <slot></slot>
      </li>
    `}},t.JobListItem.styles=r`
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
  `,t.JobListItem=ht([ot("im-job-list-item")],t.JobListItem);var at=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};t.JobList=class extends st{render(){return P`
      <ul>
        <slot></slot>
      </ul>
    `}},t.JobList.styles=r`
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  `,t.JobList=at([ot("im-job-list")],t.JobList);var ut=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};t.Job=class extends st{constructor(){super(...arguments),this.open=!1,this.companyName="",this.companyDescription=""}onClick(t){t.preventDefault(),this.open=!this.open,this.dispatchEvent(new CustomEvent("im-job-toggle",{bubbles:!0,composed:!0,cancelable:!0}))}render(){return P`
      <details ?open=${this.open}>
        <summary @click=${this.onClick}>
          <hgroup>
            <h3>${this.companyName}</h3>
            <p>${this.companyDescription}</p>
          </hgroup>
          ${this.workPeriodFrom&&this.workPeriodTo?P`<span> ${this.workPeriodFrom} — ${this.workPeriodTo} </span>`:""}
        </summary>
        <slot></slot>
      </details>
    `}},t.Job.styles=r`
    details[open] {
      margin-bottom: 0.4rem;
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
      font-size: var(--step--1);
      width: var(--step-1);
      text-align: center;
    }

    details[open] > summary:before {
      content: '\u{2191}';
    }

    h3 {
      font-size: var(--step-3);
      margin: 0;
    }

    summary span {
      position: absolute;
      color: #aaa;
      font-size: var(--step--1);
      top: 0;
      right: 0;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary:focus {
      outline: none;
    }

    summary:-internal-direct-focus {
      outline-color: -webkit-focus-ring-color;
      outline-style: auto;
      outline-width: 5px;
    }

    hgroup p {
      margin: 0;
    }

    p {
      margin: 0 0 0.2rem;
    }
  `,ut([rt({type:Boolean,reflect:!0})],t.Job.prototype,"open",void 0),ut([rt({type:String,attribute:"company-name"})],t.Job.prototype,"companyName",void 0),ut([rt({type:String,attribute:"company-description"})],t.Job.prototype,"companyDescription",void 0),ut([rt({attribute:"work-period-from"})],t.Job.prototype,"workPeriodFrom",void 0),ut([rt({attribute:"work-period-to"})],t.Job.prototype,"workPeriodTo",void 0),t.Job=ut([ot("im-job")],t.Job);var dt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};const ct=t=>t.open;t.Jobs=class extends st{constructor(){super(...arguments),this.defaultNodes=null,this.state="all-closed",this.title="",this.experience=""}get items(){return[...this.slottedChildren||[]].filter((t=>void 0!==t.tagName))}get slottedChildren(){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("slot");return i?i.assignedElements({flatten:!0}):[]}onToggle(){if(this.items.every(ct))return void(this.state="all-opened");this.items.some(ct)?this.state="some-opened":this.state="all-closed"}onClick(){if("all-opened"===this.state)return this.items.forEach((t=>t.open=!1)),void(this.state="all-closed");this.items.forEach((t=>t.open=!0)),this.state="all-opened"}render(){return P`
      <div role="button" class="toggle" @click=${this.onClick}>
        <div class="toggle-inner">
          ${"all-closed"===this.state?"↓":""}
          ${"all-opened"===this.state?"↑":""}
          ${"some-opened"===this.state?"⇡":""}
        </div>
        <h2>${this.title}</h2>
      </div>
      <slot @im-job-toggle=${this.onToggle}></slot>
    `}},t.Jobs.styles=r`
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
  `,dt([rt()],t.Jobs.prototype,"defaultNodes",void 0),dt([rt()],t.Jobs.prototype,"state",void 0),dt([rt()],t.Jobs.prototype,"title",void 0),dt([rt()],t.Jobs.prototype,"experience",void 0),t.Jobs=dt([ot("im-jobs")],t.Jobs),Object.defineProperty(t,"i",{value:!0})}({});
