"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2934],{101952:function(t,e,i){i.d(e,{$:function(){return c}});var o=i(949077),r=i(653417),a=(i(863704),i(246282),i(342278)),s=i(953959),n=(i(337894),o.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`),l=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let c=class extends o.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return o.dy`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.dy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?o.dy`<wui-image src=${this.imageSrc}></wui-image>`:o.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};c.styles=[a.ET,a.ZM,n],l([(0,r.Cb)()],c.prototype,"imageSrc",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"isUnsupportedChain",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"disabled",void 0),c=l([(0,s.M)("wui-network-button")],c)},73789:function(t,e,i){i.d(e,{j:function(){return p}});var o=i(949077),r=i(653417),a=i(622533),s=i(813331),n=i(511665),l=(i(910161),i(863704),i(342278)),c=i(953959),u=o.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,d=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let p=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:a.T,md:s.W,lg:n.M},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,o.dy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};p.styles=[l.ET,u],d([(0,r.Cb)()],p.prototype,"size",void 0),d([(0,r.Cb)()],p.prototype,"name",void 0),d([(0,r.Cb)({type:Object})],p.prototype,"networkImagesBySize",void 0),d([(0,r.Cb)()],p.prototype,"imageSrc",void 0),d([(0,r.Cb)({type:Boolean})],p.prototype,"selected",void 0),d([(0,r.Cb)({type:Boolean})],p.prototype,"round",void 0),p=d([(0,c.M)("wui-network-image")],p)},417194:function(t,e,i){i.d(e,{A:function(){return c}});var o=i(949077),r=(i(650569),i(246282),i(46308),i(337894),i(342278)),a=i(953959),s=o.iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,n=i(653417),l=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let c=class extends o.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.dy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};c.styles=[r.ET,r.ZM,s],l([(0,n.Cb)()],c.prototype,"label",void 0),l([(0,n.Cb)()],c.prototype,"description",void 0),l([(0,n.Cb)()],c.prototype,"icon",void 0),c=l([(0,a.M)("wui-notice-card")],c)},473807:function(t,e,i){i.d(e,{t:function(){return u}});var o=i(949077),r=i(653417),a=(i(650569),i(342278)),s=i(511923),n=i(953959),l=(i(11879),o.iv`
  :host {
    position: relative;
    display: block;
  }
`),c=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let u=class extends o.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every((t=>""!==t)),this.handleKeyDown=(t,e)=>{const i=t.target,o=this.getInputElement(i);if(!o)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();const r=o.selectionStart;switch(t.key){case"ArrowLeft":r&&o.setSelectionRange(r+1,r+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===o.value?this.focusInputField("prev",e):this.updateInput(o,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){const t=e+1;if(!this.shouldInputBeEnabled(t))return;const i=this.numerics[t<this.length?t:e],o=i?this.getInputElement(i):void 0;o&&(o.disabled=!1,o.focus())}if("prev"===t){const t=e-1,i=this.numerics[t>-1?t:e],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return o.dy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((t,e)=>o.dy`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(t,e,i){const o=this.numerics[e],r=t||(o?this.getInputElement(o):void 0);r&&(r.value=i,this.values=this.values.map(((t,o)=>o===e?i:t)))}selectInput(t){const e=t.target;if(e){const t=this.getInputElement(e);t?.select()}}handleInput(t,e){const i=t.target,o=this.getInputElement(i);if(o){const i=o.value;if("insertFromPaste"===t.inputType)this.handlePaste(o,i,e);else{s.H.isNumber(i)&&t.data?(this.updateInput(o,e,t.data),this.focusInputField("next",e)):this.updateInput(o,e,"")}}this.dispatchInputChangeEvent()}handlePaste(t,e,i){const o=e[0];if(o&&s.H.isNumber(o)){this.updateInput(t,i,o);const r=e.substring(1);if(i+1<this.length&&r.length){const t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,r,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};u.styles=[a.ET,l],c([(0,r.Cb)({type:Number})],u.prototype,"length",void 0),c([(0,r.Cb)({type:String})],u.prototype,"otp",void 0),c([(0,r.SB)()],u.prototype,"values",void 0),u=c([(0,n.M)("wui-otp")],u)},41790:function(t,e,i){i.d(e,{R:function(){return c}});var o=i(949077),r=i(653417),a=(i(246282),i(863704),i(910161),i(878411),i(650569),i(342278)),s=i(953959),n=o.iv`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`,l=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let c=class extends o.oi{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return o.dy`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?o.dy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?o.dy`<wui-image src=${this.imageSrc}></wui-image>`:o.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};c.styles=[a.ET,a.ZM,n],l([(0,r.Cb)()],c.prototype,"text",void 0),l([(0,r.Cb)()],c.prototype,"address",void 0),l([(0,r.Cb)()],c.prototype,"imageSrc",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"isAddress",void 0),c=l([(0,s.M)("wui-preview-item")],c)},66469:function(t,e,i){i.d(e,{l:function(){return p}});var o=i(949077),r=i(653417),a=(i(910161),i(246282),i(863704),i(650569),i(878411),i(337894),i(342278)),s=i(953959),n=o.iv`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,l=i(511923),c=i(675104),u=i(340081),d=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let p=class extends o.oi{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const t=c.RY.state.activeChain,e=c.MO.getConnectedConnectorId(t)===u.bq.CONNECTOR_ID.AUTH;return o.dy`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${e?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${l.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(t){t.target instanceof HTMLElement&&"copy-address"===t.target.id?this.onCopyClick?.(t):this.onProfileClick?.(t)}getIconTemplate(t){return o.dy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${t||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};p.styles=[a.ET,a.ZM,n],d([(0,r.Cb)()],p.prototype,"avatarSrc",void 0),d([(0,r.Cb)()],p.prototype,"profileName",void 0),d([(0,r.Cb)()],p.prototype,"address",void 0),d([(0,r.Cb)()],p.prototype,"icon",void 0),d([(0,r.Cb)()],p.prototype,"onProfileClick",void 0),d([(0,r.Cb)()],p.prototype,"onCopyClick",void 0),p=d([(0,s.M)("wui-profile-button-v2")],p)},778990:function(t,e,i){i.d(e,{D:function(){return u}});var o=i(949077),r=i(653417),a=(i(910161),i(246282),i(863704),i(650569),i(878411),i(337894),i(342278)),s=i(953959),n=o.iv`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,l=i(511923),c=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let u=class extends o.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return o.dy`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${l.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?o.dy`<wui-image src=${this.networkSrc}></wui-image>`:o.dy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};u.styles=[a.ET,a.ZM,n],c([(0,r.Cb)()],u.prototype,"networkSrc",void 0),c([(0,r.Cb)()],u.prototype,"avatarSrc",void 0),c([(0,r.Cb)()],u.prototype,"profileName",void 0),c([(0,r.Cb)()],u.prototype,"address",void 0),c([(0,r.Cb)()],u.prototype,"icon",void 0),u=c([(0,s.M)("wui-profile-button")],u)},282722:function(t,e,i){i.d(e,{_:function(){return c}});var o=i(949077),r=i(653417),a=i(953959),s=o.iv`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`,n=(i(246282),i(910161),i(342278)),l=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let c=class extends o.oi{constructor(){super(...arguments),this.text=""}render(){return o.dy`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};c.styles=[n.ET,n.ZM,s],l([(0,r.Cb)()],c.prototype,"text",void 0),c=l([(0,a.M)("wui-promo")],c)},174047:function(t,e,i){i.d(e,{f:function(){return u}});var o=i(949077),r=i(653417),a=(i(910161),i(863704),i(577305)),s=i(342278),n=i(953959),l=o.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,c=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let u=class extends o.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,o.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return o.YP`
      <svg height=${t} width=${t}>
        ${a.$.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?o.dy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:o.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};u.styles=[s.ET,l],c([(0,r.Cb)()],u.prototype,"uri",void 0),c([(0,r.Cb)({type:Number})],u.prototype,"size",void 0),c([(0,r.Cb)()],u.prototype,"theme",void 0),c([(0,r.Cb)()],u.prototype,"imageSrc",void 0),c([(0,r.Cb)()],u.prototype,"alt",void 0),c([(0,r.Cb)()],u.prototype,"color",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"arenaClear",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"farcaster",void 0),u=c([(0,n.M)("wui-qr-code")],u)}}]);
//# sourceMappingURL=2934-1f52a065f57edabc.js.map