"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{57052:function(t,e,o){var i=o(75104),r=o(77703),n=o(49077),s=o(53417),a=n.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,l=o(10806),c=o(80236),u=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let p=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=i.ConnectorController.state.connectors,this.authConnector=this.connectors.find((t=>"AUTH"===t.type)),this.features=i.OptionsController.state.features,this.unsubscribe.push(i.ConnectorController.subscribeKey("connectors",(t=>{this.connectors=t,this.authConnector=this.connectors.find((t=>"AUTH"===t.type))})),i.OptionsController.subscribeKey("features",(t=>this.features=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){let t=this.features?.socials||[];const e=Boolean(this.authConnector),o=t?.length,r="ConnectSocials"===i.RouterController.state.view;return e&&o||r?(r&&!o&&(t=i.bq.DEFAULT_FEATURES.socials),n.dy` <wui-flex flexDirection="column" gap="xs">
      ${t.map((t=>n.dy`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            name=${t}
            logo=${t}
            tabIdx=${(0,c.o)(this.tabIdx)}
          ></wui-list-social>`))}
    </wui-flex>`):null}async onSocialClick(t){if(t&&(i.AccountController.setSocialProvider(t,i.RY.state.activeChain),i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:t}})),t===l.XW.Farcaster){i.RouterController.push("ConnectingFarcaster");const t=i.ConnectorController.getAuthConnector();if(t&&!i.AccountController.state.farcasterUrl)try{const{url:e}=await t.provider.getFarcasterUri();i.AccountController.setFarcasterUrl(e,i.RY.state.activeChain)}catch(t){i.RouterController.goBack(),i.SnackController.showError(t)}}else{i.RouterController.push("ConnectingSocial");const e=i.ConnectorController.getAuthConnector();this.popupWindow=i.j1.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(e&&t){const{uri:o}=await e.provider.getSocialRedirectUri({provider:t});if(!this.popupWindow||!o)throw this.popupWindow?.close(),new Error("Something went wrong");i.AccountController.setSocialWindow(this.popupWindow,i.RY.state.activeChain),this.popupWindow.location.href=o}}catch(t){this.popupWindow?.close(),i.SnackController.showError("Something went wrong")}}}};p.styles=a,u([(0,s.Cb)()],p.prototype,"tabIdx",void 0),u([(0,s.SB)()],p.prototype,"connectors",void 0),u([(0,s.SB)()],p.prototype,"authConnector",void 0),u([(0,s.SB)()],p.prototype,"features",void 0),p=u([(0,r.customElement)("w3m-social-login-list")],p)},83723:function(t,e,o){var i=o(75104),r=o(77703),n=o(49077),s=o(53417),a=n.iv`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,l=o(80236),c=o(10806),u=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let p=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=i.ConnectorController.state.connectors,this.features=i.OptionsController.state.features,this.authConnector=this.connectors.find((t=>"AUTH"===t.type)),this.unsubscribe.push(i.ConnectorController.subscribeKey("connectors",(t=>{this.connectors=t,this.authConnector=this.connectors.find((t=>"AUTH"===t.type))})),i.OptionsController.subscribeKey("features",(t=>this.features=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return n.dy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const t="explore"===this.walletGuide;let e=this.features?.socials;return!e&&t?(e=i.bq.DEFAULT_FEATURES.socials,this.renderTopViewContent(e)):e?this.renderTopViewContent(e):null}renderTopViewContent(t){return 2===t.length?n.dy` <wui-flex gap="xs">
        ${t.slice(0,2).map((t=>n.dy`<wui-logo-select
              data-testid=${`social-selector-${t}`}
              @click=${()=>{this.onSocialClick(t)}}
              logo=${t}
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></wui-logo-select>`))}
      </wui-flex>`:n.dy` <wui-list-social
      data-testid=${`social-selector-${t[0]}`}
      @click=${()=>{this.onSocialClick(t[0])}}
      logo=${(0,l.o)(t[0])}
      align="center"
      name=${`Continue with ${t[0]}`}
      tabIdx=${(0,l.o)(this.tabIdx)}
    ></wui-list-social>`}bottomViewTemplate(){let t=this.features?.socials;const e="explore"===this.walletGuide;return(!this.authConnector||!t||!t?.length)&&e&&(t=i.bq.DEFAULT_FEATURES.socials),t?t.length<=2?null:t&&t.length>6?n.dy`<wui-flex gap="xs">
        ${t.slice(1,5).map((t=>n.dy`<wui-logo-select
              data-testid=${`social-selector-${t}`}
              @click=${()=>{this.onSocialClick(t)}}
              logo=${t}
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,l.o)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`:t?n.dy`<wui-flex gap="xs">
      ${t.slice(1,t.length).map((t=>n.dy`<wui-logo-select
            data-testid=${`social-selector-${t}`}
            @click=${()=>{this.onSocialClick(t)}}
            logo=${t}
            tabIdx=${(0,l.o)(this.tabIdx)}
          ></wui-logo-select>`))}
    </wui-flex>`:null:null}onMoreSocialsClick(){i.RouterController.push("ConnectSocials")}async onSocialClick(t){if(t&&(i.AccountController.setSocialProvider(t,i.RY.state.activeChain),i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:t}})),t===c.XW.Farcaster){i.RouterController.push("ConnectingFarcaster");const t=i.ConnectorController.getAuthConnector();if(t&&!i.AccountController.state.farcasterUrl)try{const{url:e}=await t.provider.getFarcasterUri();i.AccountController.setFarcasterUrl(e,i.RY.state.activeChain)}catch(t){i.RouterController.goBack(),i.SnackController.showError(t)}}else{i.RouterController.push("ConnectingSocial");const e=i.ConnectorController.getAuthConnector();this.popupWindow=i.j1.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(e&&t){const{uri:o}=await e.provider.getSocialRedirectUri({provider:t});if(!this.popupWindow||!o)throw this.popupWindow?.close(),new Error("Something went wrong");i.AccountController.setSocialWindow(this.popupWindow,i.RY.state.activeChain),this.popupWindow.location.href=o}}catch(t){this.popupWindow?.close(),i.SnackController.showError("Something went wrong")}}}};p.styles=a,u([(0,s.Cb)()],p.prototype,"walletGuide",void 0),u([(0,s.Cb)()],p.prototype,"tabIdx",void 0),u([(0,s.SB)()],p.prototype,"connectors",void 0),u([(0,s.SB)()],p.prototype,"features",void 0),u([(0,s.SB)()],p.prototype,"authConnector",void 0),p=u([(0,r.customElement)("w3m-social-login-widget")],p)},84949:function(t,e,o){var i=o(49077),r=o(53417),n=i.iv`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`,s=o(77703),a=o(40081),l=o(75104),c=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};const u=l.bq.CONVERT_SLIPPAGE_TOLERANCE;let p=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.networkName=l.RY.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=l.nY.state.sourceToken,this.toToken=l.nY.state.toToken,this.toTokenAmount=l.nY.state.toTokenAmount,this.sourceTokenPriceInUSD=l.nY.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=l.nY.state.toTokenPriceInUSD,this.gasPriceInUSD=l.nY.state.gasPriceInUSD,this.priceImpact=l.nY.state.priceImpact,this.maxSlippage=l.nY.state.maxSlippage,this.networkTokenSymbol=l.nY.state.networkTokenSymbol,this.inputError=l.nY.state.inputError,this.unsubscribe.push(l.nY.subscribe((t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.gasPriceInUSD=t.gasPriceInUSD,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError})))}render(){const t=this.toTokenAmount&&this.maxSlippage?a.C6.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return i.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${s.UiHelperUtil.formatNumberToLocalString(e,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${s.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?i.dy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${s.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?i.dy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${s.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?i.dy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${"Max slippage sets the minimum amount you must receive for the transaction to proceed. "+(t?`Transaction will be reversed if you receive less than ${s.UiHelperUtil.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:"")}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${s.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${u}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};p.styles=[n],c([(0,r.SB)()],p.prototype,"networkName",void 0),c([(0,r.Cb)()],p.prototype,"detailsOpen",void 0),c([(0,r.SB)()],p.prototype,"sourceToken",void 0),c([(0,r.SB)()],p.prototype,"toToken",void 0),c([(0,r.SB)()],p.prototype,"toTokenAmount",void 0),c([(0,r.SB)()],p.prototype,"sourceTokenPriceInUSD",void 0),c([(0,r.SB)()],p.prototype,"toTokenPriceInUSD",void 0),c([(0,r.SB)()],p.prototype,"gasPriceInUSD",void 0),c([(0,r.SB)()],p.prototype,"priceImpact",void 0),c([(0,r.SB)()],p.prototype,"maxSlippage",void 0),c([(0,r.SB)()],p.prototype,"networkTokenSymbol",void 0),c([(0,r.SB)()],p.prototype,"inputError",void 0),p=c([(0,s.customElement)("w3m-swap-details")],p)},14897:function(t,e,o){var i=o(49077),r=o(53417),n=(o(75104),o(77703)),s=i.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`,a=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let l=class extends i.oi{constructor(){super(...arguments),this.target="sourceToken"}render(){return i.dy`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return i.dy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};l.styles=[s],a([(0,r.Cb)()],l.prototype,"target",void 0),l=a([(0,n.customElement)("w3m-swap-input-skeleton")],l)},40018:function(t,e,o){var i=o(49077),r=o(53417),n=o(75104),s=o(40081),a=o(77703),l=i.iv`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`,c=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let u=class extends i.oi{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=this.marketValue||"0",e=s.C6.bigNumber(t).isGreaterThan("0");return i.dy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${e?`$${a.UiHelperUtil.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return s.kg.numericInputKeyDown(t,this.value,(t=>this.onSetAmount?.(this.target,t)))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const e=t.target.value.replace(/[^0-9.]/gu,"");","===e||"."===e?this.onSetAmount(this.target,"0."):e.endsWith(",")?this.onSetAmount(this.target,e.replace(",",".")):this.onSetAmount(this.target,e)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?i.dy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:i.dy` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=s.C6.multiply(this.balance,this.price),e=!!t&&t?.isGreaterThan(5e-5);return i.dy`
      ${e?i.dy`<wui-text variant="small-400" color="fg-200">
            ${a.UiHelperUtil.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(e):null}
    `}tokenActionButtonTemplate(t){return t?i.dy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:i.dy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){n.Xs.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),n.RouterController.push("SwapSelectToken",{target:this.target})}onBuyToken(){n.RouterController.push("OnRampProviders")}};u.styles=[l],c([(0,r.Cb)()],u.prototype,"focused",void 0),c([(0,r.Cb)()],u.prototype,"balance",void 0),c([(0,r.Cb)()],u.prototype,"value",void 0),c([(0,r.Cb)()],u.prototype,"price",void 0),c([(0,r.Cb)()],u.prototype,"marketValue",void 0),c([(0,r.Cb)()],u.prototype,"disabled",void 0),c([(0,r.Cb)()],u.prototype,"target",void 0),c([(0,r.Cb)()],u.prototype,"token",void 0),c([(0,r.Cb)()],u.prototype,"onSetAmount",void 0),c([(0,r.Cb)()],u.prototype,"onSetMaxValue",void 0),u=c([(0,a.customElement)("w3m-swap-input")],u)},2486:function(t,e,o){var i=o(49077),r=o(53417),n=o(77703),s=i.iv`
  :host {
    width: 100%;
    display: block;
  }
`,a=o(75104),l=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let c=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=a.fw.state.open,this.unsubscribe.push(a.RouterController.subscribeKey("view",(()=>{a.fw.hide()})),a.IN.subscribeKey("open",(t=>{t||a.fw.hide()})),a.fw.subscribeKey("open",(t=>{this.open=t})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),a.fw.hide()}render(){return i.dy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return i.dy`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();this.open||a.fw.showTooltip({message:this.text,triggerRect:{width:t.width,height:t.height,left:t.left,top:t.top},variant:"shade"})}onMouseLeave(t){this.contains(t.relatedTarget)||a.fw.hide()}};c.styles=[s],l([(0,r.Cb)()],c.prototype,"text",void 0),l([(0,r.SB)()],c.prototype,"open",void 0),c=l([(0,n.customElement)("w3m-tooltip-trigger")],c)},74462:function(t,e,o){var i=o(49077),r=o(75104),n=o(77703),s=o(53417),a=i.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,l=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let c=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.open=r.fw.state.open,this.message=r.fw.state.message,this.triggerRect=r.fw.state.triggerRect,this.variant=r.fw.state.variant,this.unsubscribe.push(r.fw.subscribe((t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${t}px;\n    --w3m-tooltip-left: ${e}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,i.dy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};c.styles=[a],l([(0,s.SB)()],c.prototype,"open",void 0),l([(0,s.SB)()],c.prototype,"message",void 0),l([(0,s.SB)()],c.prototype,"triggerRect",void 0),l([(0,s.SB)()],c.prototype,"variant",void 0),c=l([(0,n.customElement)("w3m-tooltip")],c)},19439:function(t,e,o){var i=o(77703),r=o(49077),n=r.iv`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`,s=o(75104),a=o(53417),l=o(80236),c=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let u=class extends r.oi{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?r.dy`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:r.dy`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,l.o)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){s.RouterController.push("Create")}};u.styles=n,c([(0,a.Cb)()],u.prototype,"tabIdx",void 0),c([(0,a.Cb)()],u.prototype,"walletGuide",void 0),u=c([(0,i.customElement)("w3m-wallet-guide")],u)},65244:function(t,e,o){var i=o(77703),r=o(49077),n=o(53417),s=o(80236),a=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let l=class extends r.oi{constructor(){super(...arguments),this.tabIdx=void 0}render(){return r.dy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,s.o)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,s.o)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};a([(0,n.Cb)()],l.prototype,"tabIdx",void 0),l=a([(0,i.customElement)("w3m-wallet-login-list")],l)},66729:function(t,e,o){var i=o(77703),r=o(49077),n=r.iv`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`,s=o(53417),a=o(75104),l=(o(40081),o(80236)),c=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let u=class extends r.oi{render(){return r.dy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${(0,l.o)(i.UiHelperUtil.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${i.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?r.dy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,l.o)(a.fz.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(t){t&&a.RouterController.push("Networks",{network:t})}};u.styles=n,c([(0,s.Cb)()],u.prototype,"receiverAddress",void 0),c([(0,s.Cb)({type:Object})],u.prototype,"caipNetwork",void 0),c([(0,s.Cb)({type:Number})],u.prototype,"networkFee",void 0),u=c([(0,i.customElement)("w3m-wallet-send-details")],u)}}]);
//# sourceMappingURL=294-52dd725df66c4415.js.map