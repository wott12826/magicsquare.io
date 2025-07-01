"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5939],{74066:function(t,e,i){i.d(e,{G:function(){return c}});var o=i(49077),r=i(53417),a=(i(10161),i(46282),i(50569),i(42278)),n=i(53959),l=o.iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(t){super.updated(t),(t.has("textTitle")||t.has("overflowedContent"))&&setTimeout((()=>{this.checkHeight()}),1)}checkHeight(){this.updateComplete.then((()=>{const t=this.shadowRoot?.querySelector(".heightContent"),e=this.shadowRoot?.querySelector(".textContent");if(t&&e){this.scrollElement=t;const i=e?.scrollHeight;i&&i>100&&(this.enableAccordion=!0,this.scrollHeightElement=i,this.requestUpdate())}}))}render(){return o.dy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const t=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),t&&t.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?o.dy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};c.styles=[a.ET,a.ZM,l],s([(0,r.Cb)()],c.prototype,"textTitle",void 0),s([(0,r.Cb)()],c.prototype,"overflowedContent",void 0),c=s([(0,n.M)("wui-list-accordion")],c)},30249:function(t,e,i){i.d(e,{r:function(){return g}});var o=i(49077),r=i(53417),a=(i(46282),i(63704),i(50569),i(42278)),n=i(53959),l=o.iv`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,s=i(11923),c=i(69270),u=i(75104),d=i(40081),p=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let g=class extends o.oi{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=u.AccountController.state.addressLabels,this.caipNetwork=u.RY.state.activeCaipNetwork,this.socialProvider=u.MO.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),u.Lr.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then((t=>{let e=this.balance;t.balances.length>0&&(e=t.balances.reduce(((t,e)=>t+(e?.value||0)),0)),this.balance=e,this.fetchingBalance=!1,this.requestUpdate()})).catch((()=>{this.fetchingBalance=!1,this.requestUpdate()}))}render(){const t=this.getLabel(),e=u.RY.state.activeChain,i=u.MO.getConnectedConnectorId(e);return this.shouldShowIcon=i===d.bq.CONNECTOR_ID.AUTH,o.dy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?o.dy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===c.y_.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:o.dy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${s.H.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?o.dy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:o.dy` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let t=this.labels?.get(this.accountAddress);const e=u.RY.state.activeChain,i=u.MO.getConnectedConnectorId(e);return t||i!==d.bq.CONNECTOR_ID.AUTH?t||(t="EOA"):t=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,t}};g.styles=[a.ET,a.ZM,l],p([(0,r.Cb)()],g.prototype,"accountAddress",void 0),p([(0,r.Cb)()],g.prototype,"accountType",void 0),p([(0,r.Cb)({type:Boolean})],g.prototype,"selected",void 0),p([(0,r.Cb)({type:Function})],g.prototype,"onSelect",void 0),g=p([(0,n.M)("wui-list-account")],g)},54456:function(t,e,i){i.d(e,{C:function(){return u}});var o=i(49077),r=i(53417),a=(i(46282),i(42278)),n=i(53959),l=o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,s=i(80236),c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.oi{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return o.dy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.o)(this.tabIdx)} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};u.styles=[a.ET,a.ZM,l],c([(0,r.Cb)()],u.prototype,"text",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.Cb)()],u.prototype,"tabIdx",void 0),u=c([(0,n.M)("wui-list-button")],u)},89036:function(t,e,i){i.d(e,{A:function(){return c}});var o=i(49077),r=i(53417),a=(i(10161),i(63704),i(46282),i(50569),i(42278)),n=i(53959),l=o.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return o.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?o.dy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:o.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};c.styles=[a.ET,a.ZM,l],s([(0,r.Cb)()],c.prototype,"imageSrc",void 0),s([(0,r.Cb)()],c.prototype,"textTitle",void 0),s([(0,r.Cb)()],c.prototype,"textValue",void 0),c=s([(0,n.M)("wui-list-content")],c)},8101:function(t,e,i){i.d(e,{h:function(){return c}});var o=i(49077),r=i(53417),a=(i(46282),i(63704),i(50569),i(42278)),n=i(53959),l=o.iv`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.oi{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return o.dy`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?o.dy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:o.dy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};c.styles=[a.ET,a.ZM,l],s([(0,r.Cb)()],c.prototype,"icon",void 0),s([(0,r.Cb)()],c.prototype,"text",void 0),s([(0,r.Cb)()],c.prototype,"description",void 0),s([(0,r.Cb)()],c.prototype,"tag",void 0),s([(0,r.Cb)()],c.prototype,"iconBackgroundColor",void 0),s([(0,r.Cb)()],c.prototype,"iconColor",void 0),s([(0,r.Cb)({type:Boolean})],c.prototype,"disabled",void 0),c=s([(0,n.M)("wui-list-description")],c)},13840:function(t,e,i){i.d(e,{q:function(){return u}});var o=i(49077),r=i(53417),a=i(80236),n=(i(10161),i(63704),i(25828),i(46282),i(50569),i(42278)),l=i(53959),s=(i(37894),o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`),c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return o.dy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,a.o)(this.iconVariant)}
        tabindex=${(0,a.o)(this.tabIdx)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return o.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return o.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:e;return o.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?o.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:o.dy``}chevronTemplate(){return this.chevron?o.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};u.styles=[n.ET,n.ZM,s],c([(0,r.Cb)()],u.prototype,"icon",void 0),c([(0,r.Cb)()],u.prototype,"iconSize",void 0),c([(0,r.Cb)()],u.prototype,"tabIdx",void 0),c([(0,r.Cb)()],u.prototype,"variant",void 0),c([(0,r.Cb)()],u.prototype,"iconVariant",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.Cb)()],u.prototype,"imageSrc",void 0),c([(0,r.Cb)()],u.prototype,"alt",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"chevron",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"loading",void 0),u=c([(0,l.M)("wui-list-item")],u)},96671:function(t,e,i){i.d(e,{b:function(){return c}});var o=i(49077),r=i(53417),a=(i(46282),i(42278)),n=i(53959),l=(i(18558),o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`),s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.oi{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return o.dy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?o.dy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?o.dy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:o.dy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};c.styles=[a.ET,a.ZM,l],s([(0,r.Cb)()],c.prototype,"imageSrc",void 0),s([(0,r.Cb)()],c.prototype,"name",void 0),s([(0,r.Cb)({type:Boolean})],c.prototype,"disabled",void 0),s([(0,r.Cb)({type:Boolean})],c.prototype,"selected",void 0),s([(0,r.Cb)({type:Boolean})],c.prototype,"transparent",void 0),c=s([(0,n.M)("wui-list-network")],c)},96699:function(t,e,i){i.d(e,{O:function(){return u}});var o=i(49077),r=i(53417),a=(i(46282),i(42278)),n=i(53959),l=(i(48193),o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`),s=i(80236),c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.oi{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return o.dy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.o)(this.tabIdx)} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?o.dy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[a.ET,a.ZM,l],c([(0,r.Cb)()],u.prototype,"logo",void 0),c([(0,r.Cb)()],u.prototype,"name",void 0),c([(0,r.Cb)()],u.prototype,"align",void 0),c([(0,r.Cb)()],u.prototype,"tabIdx",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"disabled",void 0),u=c([(0,n.M)("wui-list-social")],u)},59567:function(t,e,i){i.d(e,{j:function(){return u}});var o=i(49077),r=i(53417),a=(i(46282),i(63704),i(50569),i(42278)),n=i(53959),l=o.iv`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,s=i(11923),c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.oi{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.dy`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${s.H.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.dy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.dy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};u.styles=[a.ET,a.ZM,l],c([(0,r.Cb)()],u.prototype,"tokenName",void 0),c([(0,r.Cb)()],u.prototype,"tokenImageUrl",void 0),c([(0,r.Cb)({type:Number})],u.prototype,"tokenValue",void 0),c([(0,r.Cb)()],u.prototype,"tokenAmount",void 0),c([(0,r.Cb)()],u.prototype,"tokenCurrency",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"clickable",void 0),u=c([(0,n.M)("wui-list-token")],u)},76888:function(t,e,i){i.d(e,{W:function(){return c}});var o=i(49077),r=i(53417),a=(i(10161),i(63704),i(46282),i(85268),i(50569),i(42278)),n=i(53959),l=o.iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return o.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?o.dy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:o.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};c.styles=[a.ET,a.ZM,l],s([(0,r.Cb)()],c.prototype,"amount",void 0),s([(0,r.Cb)()],c.prototype,"networkCurreny",void 0),s([(0,r.Cb)()],c.prototype,"networkImageUrl",void 0),s([(0,r.Cb)()],c.prototype,"receiverAddress",void 0),s([(0,r.Cb)()],c.prototype,"addressExplorerUrl",void 0),c=s([(0,n.M)("wui-list-wallet-transaction")],c)},18275:function(t,e,i){i.d(e,{_:function(){return u}});var o=i(49077),r=i(53417),a=(i(10161),i(37894),i(46282),i(42278)),n=i(53959),l=(i(1033),i(29937),i(6534),o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`),s=i(80236),c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return o.dy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.o)(this.tabIdx)} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?o.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?o.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?o.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:o.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?o.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?o.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};u.styles=[a.ET,a.ZM,l],c([(0,r.Cb)({type:Array})],u.prototype,"walletImages",void 0),c([(0,r.Cb)()],u.prototype,"imageSrc",void 0),c([(0,r.Cb)()],u.prototype,"name",void 0),c([(0,r.Cb)()],u.prototype,"tagLabel",void 0),c([(0,r.Cb)()],u.prototype,"tagVariant",void 0),c([(0,r.Cb)()],u.prototype,"icon",void 0),c([(0,r.Cb)()],u.prototype,"walletIcon",void 0),c([(0,r.Cb)()],u.prototype,"tabIdx",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"installed",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"showAllWallets",void 0),u=c([(0,n.M)("wui-list-wallet")],u)},95613:function(t,e,i){i.d(e,{r:function(){return u}});var o=i(49077),r=i(53417),a=i(42278),n=i(53959),l=(i(48193),o.iv`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`),s=i(80236),c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.dy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.o)(this.tabIdx)} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};u.styles=[a.ET,a.ZM,l],c([(0,r.Cb)()],u.prototype,"logo",void 0),c([(0,r.Cb)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.Cb)()],u.prototype,"tabIdx",void 0),u=c([(0,n.M)("wui-logo-select")],u)},48193:function(t,e,i){i.d(e,{e:function(){return c}});var o=i(49077),r=i(53417),a=(i(10161),i(42278)),n=i(53959),l=o.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.oi{constructor(){super(...arguments),this.logo="google"}render(){return o.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[a.ET,l],s([(0,r.Cb)()],c.prototype,"logo",void 0),c=s([(0,n.M)("wui-logo")],c)}}]);
//# sourceMappingURL=5939-9cbd25411fd7863b.js.map