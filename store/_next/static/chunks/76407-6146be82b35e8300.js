"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76407],{638220:function(e,t,i){var n=i(577703),o=i(949077),a=o.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,r=i(675104),s=i(653417),l=i(680236),c=i(21580),d=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.ConnectorController.state.connectors,this.unsubscribe.push(r.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{custom:e,recent:t,announced:i,injected:n,multiChain:a,recommended:s,featured:d,external:u}=c.C.getConnectorsByType(this.connectors),w=r.OptionsController.state.enableWalletConnect;return o.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${w?o.dy`<w3m-connect-walletconnect-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-walletconnect-widget>`:null}
        ${t.length?o.dy`<w3m-connect-recent-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-recent-widget>`:null}
        ${a.length?o.dy`<w3m-connect-multi-chain-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-multi-chain-widget>`:null}
        ${i.length?o.dy`<w3m-connect-announced-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-announced-widget>`:null}
        ${n.length?o.dy`<w3m-connect-injected-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-injected-widget>`:null}
        ${d.length?o.dy`<w3m-connect-featured-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-featured-widget>`:null}
        ${e?.length?o.dy`<w3m-connect-custom-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-custom-widget>`:null}
        ${u.length?o.dy`<w3m-connect-external-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-external-widget>`:null}
        ${s.length?o.dy`<w3m-connect-recommended-widget
              tabIdx=${(0,l.o)(this.tabIdx)}
            ></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}};u.styles=a,d([(0,s.Cb)()],u.prototype,"tabIdx",void 0),d([(0,s.SB)()],u.prototype,"connectors",void 0),u=d([(0,n.customElement)("w3m-connector-list")],u)},156153:function(e,t,i){var n=i(675104),o=i(577703),a=i(949077),r=i(653417),s=i(545924),l=a.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,c=i(340081),d=i(680236),u=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let w=class extends a.oi{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=(0,s.V)(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){return a.dy`
      <form ${(0,s.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,d.o)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?a.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?a.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?a.dy`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if([c.bq.CHAIN.EVM,c.bq.CHAIN.SOLANA].find((e=>e===n.RY.state.activeChain)))try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=n.ConnectorController.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});n.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),n.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i&&n.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(e){const t=n.j1.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":n.SnackController.showError(e)}finally{this.loading=!1}else n.RouterController.push("SwitchActiveChain",{switchToChain:c.bq.CHAIN.EVM})}onFocusEvent(){n.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};w.styles=l,u([(0,r.Cb)()],w.prototype,"tabIdx",void 0),u([(0,r.SB)()],w.prototype,"email",void 0),u([(0,r.SB)()],w.prototype,"loading",void 0),u([(0,r.SB)()],w.prototype,"error",void 0),w=u([(0,o.customElement)("w3m-email-login-widget")],w)},598642:function(e,t,i){var n=i(675104),o=i(577703),a=i(949077),r=i(653417),s=a.iv`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,l=i(680236),c=i(883179),d=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const u=["SmartSessionList"];function w(){const e=n.RouterController.state.data?.connector?.name,t=n.RouterController.state.data?.wallet?.name,i=n.RouterController.state.data?.network?.name,o=t??e,a=n.ConnectorController.getConnectors();return{Connect:`Connect ${1===a.length&&"w3m-email"===a[0]?.id?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:i??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:n.AccountController.state.socialProvider?n.AccountController.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let h=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.heading=w()[n.RouterController.state.view],this.network=n.RY.state.activeCaipNetwork,this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=n.RouterController.state.view,this.viewDirection="",this.headerText=w()[n.RouterController.state.view],this.unsubscribe.push(n.RouterController.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.headerText=w()[e]}),c.b.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),n.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)),n.RY.subscribeKey("activeCaipNetwork",(e=>this.network=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){n.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),n.RouterController.push("WhatIsAWallet")}async onClose(){"UnsupportedChain"===n.RouterController.state.view||await n.wf.isSIWXCloseDisabled()?n.IN.shake():n.IN.close()}rightHeaderTemplate(){const e=n.OptionsController?.state?.features?.smartSessions;return"Account"===n.RouterController.state.view&&e?a.dy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>n.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return a.dy`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=u.includes(this.view);return a.dy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?a.dy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=n.RouterController.state,t="Connect"===e,i=n.OptionsController.state.enableEmbedded,o="ApproveTransaction"===e||"ConnectingSiwe"===e||t&&i;return"Account"===e?a.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,l.o)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,l.o)(n.fz.getNetworkImage(this.network))}
      ></wui-select>`:this.showBack&&!o?a.dy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:a.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(n.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),n.RouterController.push("Networks"))}isAllowedNetworkSwitch(){const e=n.RY.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find((({id:e})=>e===this.network?.id));return t||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=n.RouterController.state;let t=c.b.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=c.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=n.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){n.RouterController.goBack()}};h.styles=s,d([(0,r.SB)()],h.prototype,"heading",void 0),d([(0,r.SB)()],h.prototype,"network",void 0),d([(0,r.SB)()],h.prototype,"buffering",void 0),d([(0,r.SB)()],h.prototype,"showBack",void 0),d([(0,r.SB)()],h.prototype,"prevHistoryLength",void 0),d([(0,r.SB)()],h.prototype,"view",void 0),d([(0,r.SB)()],h.prototype,"viewDirection",void 0),d([(0,r.SB)()],h.prototype,"headerText",void 0),h=d([(0,o.customElement)("w3m-header")],h)}}]);
//# sourceMappingURL=76407-6146be82b35e8300.js.map