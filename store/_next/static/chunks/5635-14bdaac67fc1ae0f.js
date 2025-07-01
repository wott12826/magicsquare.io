"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5635],{723124:function(e,t,o){var i=o(577703),n=o(949077),r=n.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,l=o(675104),s=o(653417),a=o(680236),c=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let d=class extends n.oi{constructor(){super(...arguments),this.checked=!1}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state,o=l.OptionsController.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(o),r=i&&!this.checked,s=r?-1:void 0;return n.dy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.o)(r?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,a.o)(s)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=Boolean(e.detail)}};d.styles=r,c([(0,s.SB)()],d.prototype,"checked",void 0),d=c([(0,i.customElement)("w3m-connect-socials-view")],d)},625841:function(e,t,o){var i=o(577703),n=o(949077),r=n.iv`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,l=o(675104),s=o(720658),a=o(653417),c=o(766008),d=o(680236),u=o(217135),h=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let p=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.connectors=l.ConnectorController.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=l.OptionsController.state.features,this.enableWallets=l.OptionsController.state.enableWallets,this.walletGuide="get-started",this.checked=!1,this.unsubscribe.push(l.ConnectorController.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),l.OptionsController.subscribeKey("features",(e=>this.features=e)),l.OptionsController.subscribeKey("enableWallets",(e=>this.enableWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleConnectListScroll()})),this.resizeObserver.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state,o=l.OptionsController.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(o)&&"get-started"===this.walletGuide&&!this.checked,r={connect:!0,disabled:i},s=l.OptionsController.state.enableWalletGuide,a=this.features?.socials,d=this.enableWallets,u=a&&a.length||this.authConnector,h=i?-1:void 0;return n.dy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,c.$)(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${u&&d&&s&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(h)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(i)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}renderConnectMethod(e){const t=u.J.getConnectOrderMethod(this.features,this.connectors);return n.dy`${t.map(((t,o)=>{switch(t){case"email":return n.dy`${this.emailTemplate(e)} ${this.separatorTemplate(o,"email")}`;case"social":return n.dy`${this.socialListTemplate(e)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return n.dy`${this.walletListTemplate(e)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}}))}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.features?.socials&&this.features?.socials.length>0;case"email":return this.features?.email;default:return null}}checkIsThereNextMethod(e){const t=u.J.getConnectOrderMethod(this.features,this.connectors)[e+1];if(!t)return;return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const o=this.checkIsThereNextMethod(e),i="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&o&&!i?n.dy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e=this.features?.email;return i?null:e&&!("social"===o)&&o?n.dy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e=this.features?.socials&&this.features?.socials.length>0;return i?null:e&&!("email"===o)&&o?n.dy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){const t=this.features?.email;return"explore"===this.walletGuide||t?n.dy`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,d.o)(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){const t=this.features?.socials&&this.features?.socials.length>0;return"explore"===this.walletGuide||t?n.dy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,d.o)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){const t=this.enableWallets,o=!1===this.features?.emailShowWallets,i=this.features?.collapseWallets,r=o||i;if(!t)return null;if(l.j1.isTelegram()&&l.j1.isIos()&&l.ConnectionController.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide)return null;const s=this.features?.email,a=this.features?.socials&&this.features.socials.length>0;return(s||a)&&r?n.dy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,d.o)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:n.dy`<w3m-wallet-login-list tabIdx=${(0,d.o)(e)}></w3m-wallet-login-list>`}guideTemplate(e=!1){if(!l.OptionsController.state.enableWalletGuide)return null;const t=this.features?.socials,o=t&&t.length,i={guide:!0,disabled:e},r=e?-1:void 0;return this.authConnector||o?n.dy`
      ${"explore"===this.walletGuide?n.dy`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`:null}
      <wui-flex flexDirection="column" .padding=${["s","0","xl","0"]} class=${(0,c.$)(i)}>
        <w3m-wallet-guide
          tabIdx=${(0,d.o)(r)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:n.dy`<w3m-legal-checkbox
      @checkboxChange=${this.onCheckboxChange.bind(this)}
      data-testid="w3m-legal-checkbox"
    ></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");if(!e)return;e.scrollHeight>470?(e.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--connect-scroll--top-opacity",i.MathUtil.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",i.MathUtil.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){l.RouterController.push("ConnectWallets")}onCheckboxChange(e){this.checked=Boolean(e.detail)}};p.styles=r,h([(0,s.S)()],p.prototype,"connectors",void 0),h([(0,s.S)()],p.prototype,"authConnector",void 0),h([(0,s.S)()],p.prototype,"features",void 0),h([(0,s.S)()],p.prototype,"enableWallets",void 0),h([(0,a.Cb)()],p.prototype,"walletGuide",void 0),h([(0,s.S)()],p.prototype,"checked",void 0),p=h([(0,i.customElement)("w3m-connect-view")],p)},299735:function(e,t,o){var i=o(577703),n=o(949077),r=n.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,l=o(653417),s=o(675104),a=o(680236),c=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let d=class extends n.oi{constructor(){super(...arguments),this.checked=!1}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.OptionsController.state,o=s.OptionsController.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(o),r=i&&!this.checked,l=r?-1:void 0;return n.dy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.o)(r?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,a.o)(l)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=Boolean(e.detail)}};d.styles=r,c([(0,l.SB)()],d.prototype,"checked",void 0),d=c([(0,i.customElement)("w3m-connect-wallets-view")],d)},600389:function(e,t,o){var i=o(675104),n=o(340081),r=o(577703),l=o(627551),s=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let a=class extends l.N{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(i.RY.subscribeKey("activeCaipAddress",(e=>{e&&i.IN.close()})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===n.bq.CONNECTOR_ID.COINBASE_SDK&&this.error||(await i.ConnectionController.connectExternal(this.connector,this.connector.chain),i.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){i.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};a=s([(0,r.customElement)("w3m-connecting-external-view")],a)},806333:function(e,t,o){var i=o(675104),n=o(577703),r=o(949077),l=o(653417),s=r.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`,a=o(680236),c=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let d=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=i.AccountController.state.socialProvider,this.uri=i.AccountController.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=i.ConnectorController.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(i.AccountController.subscribeKey("farcasterUrl",(e=>{e&&(this.uri=e,this.connectFarcaster())})),i.AccountController.subscribeKey("socialProvider",(e=>{e&&(this.socialProvider=e)}))),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),r.dy`${this.platformTemplate()}`}platformTemplate(){return i.j1.isMobile()?r.dy`${this.mobileTemplate()}`:r.dy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?r.dy`${this.loadingTemplate()}`:r.dy`${this.qrTemplate()}`}qrTemplate(){return r.dy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return r.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return r.dy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=i.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&(i.MO.setConnectedSocialProvider(this.socialProvider),i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,await i.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,i.IN.close()}catch(e){this.socialProvider&&i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),i.RouterController.goBack(),i.SnackController.showError(e)}}mobileLinkTemplate(){return r.dy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&i.j1.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return r.dy` <wui-qr-code
      size=${e}
      theme=${i.ThemeController.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,a.o)(i.ThemeController.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return r.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(i.j1.copyToClopboard(this.uri),i.SnackController.showSuccess("Link copied"))}catch{i.SnackController.showError("Failed to copy")}}};d.styles=s,c([(0,l.SB)()],d.prototype,"socialProvider",void 0),c([(0,l.SB)()],d.prototype,"uri",void 0),c([(0,l.SB)()],d.prototype,"ready",void 0),c([(0,l.SB)()],d.prototype,"loading",void 0),d=c([(0,n.customElement)("w3m-connecting-farcaster-view")],d)},635982:function(e,t,o){var i=o(675104),n=o(577703),r=o(949077),l=o(653417),s=o(680236),a=r.iv`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,c=o(340081),d=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let u=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.activeConnector=i.RY.state.activeConnector,this.unsubscribe.push(i.RY.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,s.o)(i.fz.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e=>e.name?r.dy`
            <wui-list-wallet
              imageSrc=${(0,s.o)(i.fz.getChainImage(e.chain))}
              name=${c.bq.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
            ></wui-list-wallet>
          `:null))}onConnector(e){const t=this.activeConnector?.connectors?.find((t=>t.chain===e.chain));t?"walletConnect"===t.id?i.j1.isMobile()?i.RouterController.push("AllWallets"):i.RouterController.push("ConnectingWalletConnect"):i.RouterController.push("ConnectingExternal",{connector:t}):i.SnackController.showError("Failed to find connector")}};u.styles=a,d([(0,l.SB)()],u.prototype,"activeConnector",void 0),u=d([(0,n.customElement)("w3m-connecting-multi-chain-view")],u)},973385:function(e,t,o){var i=o(675104),n=o(577703),r=o(949077),l=o(653417),s=o(680236),a=r.iv`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,c=o(883179),d=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let u=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=i.AccountController.state.socialProvider,this.socialWindow=i.AccountController.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=i.ConnectorController.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===c.b.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),i.AccountController.setSocialWindow(void 0,i.RY.state.activeChain)),this.connecting=!0,this.updateMessage();const t=e.data.resultUri;this.socialProvider&&i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await this.authConnector.provider.connectSocial(t),this.socialProvider&&(i.MO.setConnectedSocialProvider(this.socialProvider),await i.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain),i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else i.RouterController.goBack(),i.SnackController.showError("Untrusted Origin"),this.socialProvider&&i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(i.AccountController.subscribe((e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&i.IN.state.open&&i.IN.close()}))),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return r.dy`
      <wui-flex
        data-error=${(0,s.o)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,s.o)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=i.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval((()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==i.RouterController.state.view||(this.socialProvider&&i.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),i.RouterController.goBack()),clearInterval(e))}),1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};u.styles=a,d([(0,l.SB)()],u.prototype,"socialProvider",void 0),d([(0,l.SB)()],u.prototype,"socialWindow",void 0),d([(0,l.SB)()],u.prototype,"error",void 0),d([(0,l.SB)()],u.prototype,"connecting",void 0),d([(0,l.SB)()],u.prototype,"message",void 0),u=d([(0,n.customElement)("w3m-connecting-social-view")],u)},570787:function(e,t,o){var i=o(675104),n=o(577703),r=o(949077),l=o(653417),s=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let a=class extends r.oi{constructor(){super(...arguments),this.isMobile=i.j1.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:t}=i.ApiController.state,{customWallets:o}=i.OptionsController.state,n=i.MO.getRecentWallets(),l=e.length||t.length||o?.length||n.length;return r.dy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${l?r.dy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return r.dy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};s([(0,l.SB)()],a.prototype,"isMobile",void 0),a=s([(0,n.customElement)("w3m-connecting-wc-basic-view")],a)},464110:function(e,t,o){var i=o(675104),n=o(577703),r=o(949077),l=o(653417),s=function(e,t,o,i){var n,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(r<3?n(l):r>3?n(t,o,l):n(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l};let a=class extends r.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=i.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(i.OptionsController.state.siwx),this.determinePlatforms(),this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),i.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return r.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `}async initializeConnection(e=!1){if("browser"!==this.platform)try{const{wcPairingExpiry:t,status:o}=i.ConnectionController.state;(e||i.j1.isPairingExpired(t)||"connecting"===o)&&(await i.ConnectionController.connectWalletConnect(),this.finalizeConnection(),this.isSiwxEnabled||i.IN.close())}catch(e){i.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),i.ConnectionController.setWcError(!0),i.j1.isAllowedRetry(this.lastRetry)?(i.SnackController.showError(e.message??"Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0)):i.SnackController.showError(e.message??"Connection error")}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=i.ConnectionController.state;e&&i.MO.setWalletConnectDeepLink(e),t&&i.MO.setAppKitRecent(t),i.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:o,injected:n,rdns:r}=this.wallet,l=n?.map((({injected_id:e})=>e)).filter(Boolean),s=[...r?[r]:l??[]],a=!i.OptionsController.state.isUniversalProvider&&s.length,c=e,d=o,u=i.ConnectionController.checkInstalled(s),h=a&&u,p=t&&!i.j1.isMobile();h&&this.platforms.push("browser"),c&&this.platforms.push(i.j1.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!h&&a&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return r.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return r.dy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return r.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return r.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return r.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return r.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?r.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};s([(0,l.SB)()],a.prototype,"platform",void 0),s([(0,l.SB)()],a.prototype,"platforms",void 0),s([(0,l.SB)()],a.prototype,"isSiwxEnabled",void 0),a=s([(0,n.customElement)("w3m-connecting-wc-view")],a)}}]);
//# sourceMappingURL=5635-14bdaac67fc1ae0f.js.map