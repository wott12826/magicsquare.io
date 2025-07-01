"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3645],{15044:function(t,e,i){i.d(e,{o:function(){return l}});var o=i(49077),r=i(53959),n=i(42278),a=(i(46282),i(59331),o.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`),s=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.oi{render(){return o.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};l.styles=[n.ET,a],l=s([(0,r.M)("wui-transaction-list-item-loader")],l)},26670:function(t,e,i){i.d(e,{J:function(){return d}});var o=i(49077),r=i(53417),n=i(53959),a=i(26015),s=i(42278),l=(i(46282),i(59331),i(80236)),c=o.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,p=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let d=class extends o.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return o.dy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,l.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,l.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${a.y[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?o.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?o.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};d.styles=[s.ET,c],p([(0,r.Cb)()],d.prototype,"type",void 0),p([(0,r.Cb)({type:Array})],d.prototype,"descriptions",void 0),p([(0,r.Cb)()],d.prototype,"date",void 0),p([(0,r.Cb)({type:Boolean})],d.prototype,"onlyDirectionIcon",void 0),p([(0,r.Cb)()],d.prototype,"status",void 0),p([(0,r.Cb)()],d.prototype,"direction",void 0),p([(0,r.Cb)({type:Array})],d.prototype,"images",void 0),p([(0,r.Cb)({type:Array})],d.prototype,"price",void 0),p([(0,r.Cb)({type:Array})],d.prototype,"amount",void 0),p([(0,r.Cb)({type:Array})],d.prototype,"symbol",void 0),d=p([(0,n.M)("wui-transaction-list-item")],d)},59331:function(t,e,i){i.d(e,{d:function(){return l}});var o=i(49077),r=i(53417),n=i(53959),a=(i(63704),i(37894),o.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`),s=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,i="NFT"===t?.type,r=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",n=(e?.url?"NFT"===e.type:i)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${r};\n    --local-right-border-radius: ${n};\n    `,o.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,i=t?.type;return 2===this.images.length&&(t?.url||e?.url)?o.dy`<div class="swap-images-container">
        ${t?.url?o.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?o.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?o.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===i?o.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:o.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?o.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};l.styles=[a],s([(0,r.Cb)()],l.prototype,"type",void 0),s([(0,r.Cb)()],l.prototype,"status",void 0),s([(0,r.Cb)()],l.prototype,"direction",void 0),s([(0,r.Cb)({type:Boolean})],l.prototype,"onlyDirectionIcon",void 0),s([(0,r.Cb)({type:Array})],l.prototype,"images",void 0),s([(0,r.Cb)({type:Object})],l.prototype,"secondImage",void 0),l=s([(0,n.M)("wui-transaction-visual")],l)},51052:function(t,e,i){i.d(e,{D:function(){return c}});var o=i(49077),r=i(53417),n=(i(63704),i(10161),i(42278)),a=i(53959),s=o.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,o.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};c.styles=[n.ET,s],l([(0,r.Cb)()],c.prototype,"imageSrc",void 0),l([(0,r.Cb)()],c.prototype,"alt",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"borderRadiusFull",void 0),c=l([(0,a.M)("wui-visual-thumbnail")],c)},75844:function(t,e,i){i.d(e,{B:function(){return c}});var o=i(49077),r=i(53417),n=(i(63704),i(46282),i(25828),i(37894),i(42278)),a=i(53959),s=o.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  :host > button {
    min-width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--wui-wallet-button-bg);
    column-gap: var(--wui-spacing-2xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    height: var(--wui-spacing-3xl);
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    box-shadow:
      0px 8px 22px -6px var(--wui-color-gray-glass-010),
      0px 14px 64px -4px var(--wui-color-gray-glass-010);
  }

  :host > button > wui-text {
    text-transform: capitalize;
  }

  :host > button > wui-image {
    height: 24px;
    width: 24px;
    border-radius: var(--wui-border-radius-s);
  }

  :host([data-error='true']) > button {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  /* -- Disabled state --------------------------------------------------- */
  :host > button:disabled {
    cursor: default;
  }

  :host > button:disabled > wui-icon {
    filter: grayscale(1);
  }
`,l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.imageSrc="",this.name="",this.walletConnect=!1,this.loading=!1,this.error=!1,this.disabled=!1,this.shake=!1}render(){return this.dataset.error=`${this.error}`,o.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.leftViewTemplate()} ${this.rightViewTemplate()}
      </button>
    `}leftViewTemplate(){return this.error?o.dy`<wui-icon-box
        icon="warningCircle"
        iconColor="error-100"
        backgroundColor="error-100"
        size="sm"
        iconSize="xs"
      ></wui-icon-box>`:this.loading?o.dy`<wui-loading-spinner size="md" color="fg-100"></wui-loading-spinner>`:this.icon?o.dy`<wui-icon size="xl" color="inherit" name=${this.icon}></wui-icon>`:this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.dy`<wui-icon size="xl" color="fg-100" name="walletPlaceholder"></wui-icon>`}rightViewTemplate(){return o.dy`
      <wui-text variant="paragraph-500" color="fg-100">${this.name||"Unknown"} </wui-text>
    `}};c.styles=[n.ET,n.ZM,s],l([(0,r.Cb)()],c.prototype,"imageSrc",void 0),l([(0,r.Cb)()],c.prototype,"name",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"walletConnect",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"icon",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"loading",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"error",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"shake",void 0),c=l([(0,a.M)("wui-wallet-button")],c)},6534:function(t,e,i){i.d(e,{_:function(){return c}});var o=i(49077),r=i(53417),n=(i(10161),i(63704),i(42278)),a=i(53959),s=(i(37894),o.iv`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`),l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),o.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?o.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:o.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};c.styles=[n.ZM,n.ET,s],l([(0,r.Cb)()],c.prototype,"size",void 0),l([(0,r.Cb)()],c.prototype,"name",void 0),l([(0,r.Cb)()],c.prototype,"imageSrc",void 0),l([(0,r.Cb)()],c.prototype,"walletIcon",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"installed",void 0),l([(0,r.Cb)()],c.prototype,"badgeSize",void 0),c=l([(0,a.M)("wui-wallet-image")],c)},50569:function(t,e,i){i.d(e,{Y:function(){return p}});var o=i(49077),r=i(53417),n=i(42278),a=i(11923),s=i(53959),l=o.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends o.oi{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.H.getSpacingStyles(this.margin,3)};\n    `,o.dy`<slot></slot>`}};p.styles=[n.ET,l],c([(0,r.Cb)()],p.prototype,"flexDirection",void 0),c([(0,r.Cb)()],p.prototype,"flexWrap",void 0),c([(0,r.Cb)()],p.prototype,"flexBasis",void 0),c([(0,r.Cb)()],p.prototype,"flexGrow",void 0),c([(0,r.Cb)()],p.prototype,"flexShrink",void 0),c([(0,r.Cb)()],p.prototype,"alignItems",void 0),c([(0,r.Cb)()],p.prototype,"justifyContent",void 0),c([(0,r.Cb)()],p.prototype,"columnGap",void 0),c([(0,r.Cb)()],p.prototype,"rowGap",void 0),c([(0,r.Cb)()],p.prototype,"gap",void 0),c([(0,r.Cb)()],p.prototype,"padding",void 0),c([(0,r.Cb)()],p.prototype,"margin",void 0),p=c([(0,s.M)("wui-flex")],p)},52818:function(t,e,i){i.d(e,{M:function(){return p}});var o=i(49077),r=i(53417),n=i(42278),a=i(11923),s=i(53959),l=o.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends o.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.H.getSpacingStyles(this.margin,3)};\n    `,o.dy`<slot></slot>`}};p.styles=[n.ET,l],c([(0,r.Cb)()],p.prototype,"gridTemplateRows",void 0),c([(0,r.Cb)()],p.prototype,"gridTemplateColumns",void 0),c([(0,r.Cb)()],p.prototype,"justifyItems",void 0),c([(0,r.Cb)()],p.prototype,"alignItems",void 0),c([(0,r.Cb)()],p.prototype,"justifyContent",void 0),c([(0,r.Cb)()],p.prototype,"alignContent",void 0),c([(0,r.Cb)()],p.prototype,"columnGap",void 0),c([(0,r.Cb)()],p.prototype,"rowGap",void 0),c([(0,r.Cb)()],p.prototype,"gap",void 0),c([(0,r.Cb)()],p.prototype,"padding",void 0),c([(0,r.Cb)()],p.prototype,"margin",void 0),p=c([(0,s.M)("wui-grid")],p)},16651:function(t,e,i){i.d(e,{n:function(){return c}});var o=i(49077),r=i(53417),n=(i(46282),i(42278)),a=i(53959),s=o.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`,l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.text=""}render(){return o.dy`${this.template()}`}template(){return this.text?o.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[n.ET,s],l([(0,r.Cb)()],c.prototype,"text",void 0),c=l([(0,a.M)("wui-separator")],c)}}]);