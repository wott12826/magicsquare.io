"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16715],{337894:function(i,e,o){o.d(e,{Z:function(){return u}});var t=o(949077),r=o(653417),n=(o(910161),o(342278)),a=o(953959),l=t.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,s=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends t.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const i=this.iconSize||this.size,e="lg"===this.size,o="xl"===this.size,r=e?"12%":"16%",n=e?"xxs":o?"s":"3xl",a="gray"===this.background,l="opaque"===this.background,s="accent-100"===this.backgroundColor&&l||"success-100"===this.backgroundColor&&l||"error-100"===this.backgroundColor&&l||"inverse-100"===this.backgroundColor&&l;let u=`var(--wui-color-${this.backgroundColor})`;return s?u=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(u=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${u};\n       --local-bg-mix: ${s||a?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,t.dy` <wui-icon color=${this.iconColor} size=${i} name=${this.icon}></wui-icon> `}};u.styles=[n.ET,n.ZM,l],s([(0,r.Cb)()],u.prototype,"size",void 0),s([(0,r.Cb)()],u.prototype,"backgroundColor",void 0),s([(0,r.Cb)()],u.prototype,"iconColor",void 0),s([(0,r.Cb)()],u.prototype,"iconSize",void 0),s([(0,r.Cb)()],u.prototype,"background",void 0),s([(0,r.Cb)({type:Boolean})],u.prototype,"border",void 0),s([(0,r.Cb)()],u.prototype,"borderColor",void 0),s([(0,r.Cb)()],u.prototype,"icon",void 0),u=s([(0,a.M)("wui-icon-box")],u)},273420:function(i,e,o){o.d(e,{T:function(){return u}});var t=o(949077),r=o(653417),n=o(953959),a=t.iv`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,l=(o(280610),o(910161),o(342278)),s=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends t.oi{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return t.dy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};u.styles=[l.ET,l.ZM,a],s([(0,r.Cb)()],u.prototype,"text",void 0),s([(0,r.Cb)()],u.prototype,"icon",void 0),u=s([(0,n.M)("wui-icon-button")],u)},42312:function(i,e,o){o.d(e,{r:function(){return u}});var t=o(949077),r=o(653417),n=(o(910161),o(342278)),a=o(953959),l=t.iv`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,s=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends t.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const i="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",e="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${i});\n    --local-padding: var(${e});\n`,t.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};u.styles=[n.ET,n.ZM,n.Bp,l],s([(0,r.Cb)()],u.prototype,"size",void 0),s([(0,r.Cb)({type:Boolean})],u.prototype,"disabled",void 0),s([(0,r.Cb)()],u.prototype,"icon",void 0),s([(0,r.Cb)()],u.prototype,"iconColor",void 0),u=s([(0,a.M)("wui-icon-link")],u)},827206:function(i,e,o){o.d(e,{N:function(){return d}});var t=o(949077),r=o(653417),n=o(342278),a=o(953959),l=t.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,s=o(545924),u=o(108028),c=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let d=class extends t.oi{constructor(){super(...arguments),this.inputElementRef=(0,s.V)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),t.dy`<input
      ${(0,s.i)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(i){const e=i.data;if(e&&this.inputElementRef?.value)if(","===e){const i=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=i,this.value=`${this.value}${i}`}else u.e.test(e)||(this.inputElementRef.value.value=this.value.replace(new RegExp(e.replace(u.C,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};d.styles=[n.ET,n.ZM,l],c([(0,r.Cb)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.Cb)({type:String})],d.prototype,"value",void 0),c([(0,r.Cb)({type:String})],d.prototype,"placeholder",void 0),d=c([(0,a.M)("wui-input-amount")],d)},634004:function(i,e,o){o.d(e,{A:function(){return u}});var t=o(949077),r=o(653417),n=(o(910161),o(342278)),a=o(953959),l=t.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,s=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends t.oi{constructor(){super(...arguments),this.icon="copy"}render(){return t.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};u.styles=[n.ET,n.ZM,l],s([(0,r.Cb)()],u.prototype,"icon",void 0),u=s([(0,a.M)("wui-input-element")],u)},11879:function(i,e,o){o.d(e,{Q:function(){return u}});var t=o(949077),r=o(653417),n=o(342278),a=o(953959),l=t.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`,s=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends t.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return t.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};u.styles=[n.ET,n.ZM,l],s([(0,r.Cb)({type:Boolean})],u.prototype,"disabled",void 0),s([(0,r.Cb)({type:String})],u.prototype,"value",void 0),u=s([(0,a.M)("wui-input-numeric")],u)},496471:function(i,e,o){o.d(e,{T:function(){return p}});var t=o(949077),r=o(653417),n=o(680236),a=o(545924),l=o(766008),s=(o(910161),o(342278)),u=o(953959),c=t.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,d=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let p=class extends t.oi{constructor(){super(...arguments),this.inputElementRef=(0,a.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const i=`wui-padding-right-${this.inputRightPadding}`,e=`wui-size-${this.size}`,o={[e]:!0,[i]:Boolean(this.inputRightPadding)};return t.dy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,a.i)(this.inputElementRef)}
        class=${(0,l.$)(o)}
        type=${this.type}
        enterkeyhint=${(0,n.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,n.o)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?t.dy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[s.ET,s.ZM,c],d([(0,r.Cb)()],p.prototype,"size",void 0),d([(0,r.Cb)()],p.prototype,"icon",void 0),d([(0,r.Cb)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,r.Cb)()],p.prototype,"placeholder",void 0),d([(0,r.Cb)()],p.prototype,"type",void 0),d([(0,r.Cb)()],p.prototype,"keyHint",void 0),d([(0,r.Cb)()],p.prototype,"value",void 0),d([(0,r.Cb)()],p.prototype,"inputRightPadding",void 0),d([(0,r.Cb)()],p.prototype,"tabIdx",void 0),p=d([(0,u.M)("wui-input-text")],p)},460598:function(i,e,o){o.d(e,{g:function(){return c}});var t=o(949077),r=o(653417),n=(o(910161),o(246282),o(342278)),a=o(953959),l=t.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,s=o(680236),u=function(i,e,o,t){var r,n=arguments.length,a=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let c=class extends t.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return t.dy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.o)(this.tabIdx)} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};c.styles=[n.ET,n.ZM,l],u([(0,r.Cb)()],c.prototype,"tabIdx",void 0),u([(0,r.Cb)({type:Boolean})],c.prototype,"disabled",void 0),u([(0,r.Cb)()],c.prototype,"color",void 0),c=u([(0,a.M)("wui-link")],c)}}]);
//# sourceMappingURL=16715-a5b9935ca5fd81ce.js.map