"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14006],{473942:function(e,t,i){var s=i(620689);"undefined"!=typeof window&&(window.Buffer||(window.Buffer=s.lW),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}))},78178:function(e,t,i){var s=i(577703),n=i(675104),o=i(949077),a=i(653417),r=i(680236),c=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};class l extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.caipAddress=n.RY.state.activeCaipAddress,this.balanceVal=n.AccountController.state.balance,this.balanceSymbol=n.AccountController.state.balanceSymbol,this.profileName=n.AccountController.state.profileName,this.profileImage=n.AccountController.state.profileImage,this.network=n.RY.state.activeCaipNetwork,this.networkImage=n.fz.getNetworkImage(this.network),this.isSupported=!!n.OptionsController.state.allowUnsupportedChain||(!n.RY.state.activeChain||n.RY.checkIfSupportedNetwork(n.RY.state.activeChain)),this.unsubscribe.push(n.WM.subscribeNetworkImages((()=>{this.networkImage=n.fz.getNetworkImage(this.network)})),n.RY.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),n.AccountController.subscribeKey("balance",(e=>this.balanceVal=e)),n.AccountController.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),n.AccountController.subscribeKey("profileName",(e=>this.profileName=e)),n.AccountController.subscribeKey("profileImage",(e=>this.profileImage=e)),n.RY.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=n.fz.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.RY.checkIfSupportedNetwork(e?.chainNamespace)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!n.RY.state.activeChain)return null;const e="show"===this.balance;return o.dy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!n.OptionsController.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,r.o)(n.j1.getPlainAddress(this.caipAddress))}
        profileName=${(0,r.o)(this.profileName)}
        networkSrc=${(0,r.o)(this.networkImage)}
        avatarSrc=${(0,r.o)(this.profileImage)}
        balance=${e?n.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||n.OptionsController.state.allowUnsupportedChain?n.IN.open():n.IN.open({view:"UnsupportedChain"})}}c([(0,a.Cb)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,a.Cb)()],l.prototype,"balance",void 0),c([(0,a.Cb)()],l.prototype,"charsStart",void 0),c([(0,a.Cb)()],l.prototype,"charsEnd",void 0),c([(0,a.SB)()],l.prototype,"caipAddress",void 0),c([(0,a.SB)()],l.prototype,"balanceVal",void 0),c([(0,a.SB)()],l.prototype,"balanceSymbol",void 0),c([(0,a.SB)()],l.prototype,"profileName",void 0),c([(0,a.SB)()],l.prototype,"profileImage",void 0),c([(0,a.SB)()],l.prototype,"network",void 0),c([(0,a.SB)()],l.prototype,"networkImage",void 0),c([(0,a.SB)()],l.prototype,"isSupported",void 0);let w=class extends l{};w=c([(0,s.customElement)("w3m-account-button")],w);let d=class extends l{};d=c([(0,s.customElement)("appkit-account-button")],d);var p=o.iv`
  :host {
    display: block;
    width: max-content;
  }
`,u=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};class h extends o.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.caipAddress=n.RY.state.activeCaipAddress,this.isLoading=n.IN.state.loading}firstUpdated(){this.unsubscribe.push(n.RY.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),n.IN.subscribeKey("loading",(e=>this.isLoading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress&&!this.isLoading?o.dy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,r.o)(this.balance)}
            .charsStart=${(0,r.o)(this.charsStart)}
            .charsEnd=${(0,r.o)(this.charsEnd)}
          >
          </appkit-account-button>
        `:o.dy`
          <appkit-connect-button
            size=${(0,r.o)(this.size)}
            label=${(0,r.o)(this.label)}
            loadingLabel=${(0,r.o)(this.loadingLabel)}
          ></appkit-connect-button>
        `}}h.styles=p,u([(0,a.Cb)({type:Boolean})],h.prototype,"disabled",void 0),u([(0,a.Cb)()],h.prototype,"balance",void 0),u([(0,a.Cb)()],h.prototype,"size",void 0),u([(0,a.Cb)()],h.prototype,"label",void 0),u([(0,a.Cb)()],h.prototype,"loadingLabel",void 0),u([(0,a.Cb)()],h.prototype,"charsStart",void 0),u([(0,a.Cb)()],h.prototype,"charsEnd",void 0),u([(0,a.SB)()],h.prototype,"caipAddress",void 0),u([(0,a.SB)()],h.prototype,"isLoading",void 0);let m=class extends h{};m=u([(0,s.customElement)("w3m-button")],m);let v=class extends h{};v=u([(0,s.customElement)("appkit-button")],v);var y=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};class b extends o.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=n.IN.state.open,this.loading=n.IN.state.loading,this.unsubscribe.push(n.IN.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return o.dy`
      <wui-connect-button
        size=${(0,r.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?n.IN.close():this.loading||n.IN.open()}}y([(0,a.Cb)()],b.prototype,"size",void 0),y([(0,a.Cb)()],b.prototype,"label",void 0),y([(0,a.Cb)()],b.prototype,"loadingLabel",void 0),y([(0,a.SB)()],b.prototype,"open",void 0),y([(0,a.SB)()],b.prototype,"loading",void 0);let g=class extends b{};g=y([(0,s.customElement)("w3m-connect-button")],g);let f=class extends b{};f=y([(0,s.customElement)("appkit-connect-button")],f);var k=o.iv`
  :host {
    display: block;
    width: max-content;
  }
`,C=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};class S extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=n.RY.state.activeCaipNetwork,this.networkImage=n.fz.getNetworkImage(this.network),this.caipAddress=n.RY.state.activeCaipAddress,this.loading=n.IN.state.loading,this.isSupported=!!n.OptionsController.state.allowUnsupportedChain||(!n.RY.state.activeChain||n.RY.checkIfSupportedNetwork(n.RY.state.activeChain)),this.unsubscribe.push(n.WM.subscribeNetworkImages((()=>{this.networkImage=n.fz.getNetworkImage(this.network)})),n.RY.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),n.RY.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=n.fz.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.RY.checkIfSupportedNetwork(e.chainNamespace)})),n.IN.subscribeKey("loading",(e=>this.loading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||n.RY.checkIfSupportedNetwork(this.network.chainNamespace);return o.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!n.OptionsController.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,r.o)(this.networkImage)}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||n.OptionsController.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(n.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),n.IN.open({view:"Networks"}))}}S.styles=k,C([(0,a.Cb)({type:Boolean})],S.prototype,"disabled",void 0),C([(0,a.Cb)({type:String})],S.prototype,"label",void 0),C([(0,a.SB)()],S.prototype,"network",void 0),C([(0,a.SB)()],S.prototype,"networkImage",void 0),C([(0,a.SB)()],S.prototype,"caipAddress",void 0),C([(0,a.SB)()],S.prototype,"loading",void 0),C([(0,a.SB)()],S.prototype,"isSupported",void 0);let A=class extends S{};A=C([(0,s.customElement)("w3m-network-button")],A);let N=class extends S{};N=C([(0,s.customElement)("appkit-network-button")],N);var I=o.iv`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,R=i(883179),x=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let O=class extends o.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=n.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(n.RouterController.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=t,this.style.animation="unset"}),R.b.ANIMATION_DURATIONS.ModalHeight)})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return o.dy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return o.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.dy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.dy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.dy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return o.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return o.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return o.dy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return o.dy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return o.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o.dy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.dy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.dy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.dy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.dy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.dy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`}}onViewChange(e){n.fw.hide();let t=R.b.VIEW_DIRECTION.Next;const{history:i}=n.RouterController.state;i.length<this.prevHistoryLength&&(t=R.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=t,setTimeout((()=>{this.view=e}),R.b.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};O.styles=I,x([(0,a.SB)()],O.prototype,"view",void 0),x([(0,a.SB)()],O.prototype,"viewDirection",void 0),O=x([(0,s.customElement)("w3m-router")],O);var $=o.iv`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,B=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const E={USD:"$",EUR:"€",GBP:"£"},P=[100,250,500,1e3];let W=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=n.RY.state.activeCaipAddress,this.loading=n.IN.state.loading,this.paymentCurrency=n.ph.state.paymentCurrency,this.paymentAmount=n.ph.state.paymentAmount,this.purchaseAmount=n.ph.state.purchaseAmount,this.quoteLoading=n.ph.state.quotesLoading,this.unsubscribe.push(n.RY.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),n.IN.subscribeKey("loading",(e=>{this.loading=e})),n.ph.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.dy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${P.map((e=>o.dy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${E[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?o.dy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:o.dy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||n.IN.open({view:"OnRampProviders"})}openModal(){n.IN.open({view:"Connect"})}async onPaymentAmountChange(e){n.ph.setPaymentAmount(Number(e.detail)),await n.ph.getQuote()}async selectPresetAmount(e){n.ph.setPaymentAmount(e),await n.ph.getQuote()}};W.styles=$,B([(0,a.Cb)({type:Boolean})],W.prototype,"disabled",void 0),B([(0,a.SB)()],W.prototype,"caipAddress",void 0),B([(0,a.SB)()],W.prototype,"loading",void 0),B([(0,a.SB)()],W.prototype,"paymentCurrency",void 0),B([(0,a.SB)()],W.prototype,"paymentAmount",void 0),B([(0,a.SB)()],W.prototype,"purchaseAmount",void 0),B([(0,a.SB)()],W.prototype,"quoteLoading",void 0),W=B([(0,s.customElement)("w3m-onramp-widget")],W);i(85067),i(547833),i(145100),i(320376),i(625841),i(600389),i(635982),i(464110),i(570787),i(680323),i(725355),i(325400),i(801119),i(247358),i(564301),i(565812),i(520128),i(457860),i(520613),i(996230),i(827617),i(801998),i(235808),i(11215),i(538980),i(501990),i(833037),i(400028),i(920224),i(246545),i(232714),i(602673),i(198659),i(546477),i(366934),i(898243),i(895392),i(958174),i(38606),i(427113),i(335196),i(299735),i(723124),i(973385),i(619866),i(681603),i(806333),i(974633),i(649541),i(709292),i(330501),i(948626),i(952140),i(19919),i(120509),i(544739),i(110939),i(79542),i(84949),i(240018),i(714897),i(598642),i(946247),i(411163),i(261511),i(244184),i(482737),i(481288),i(423589),i(492306),i(393347),i(68607),i(156153),i(63962),i(276559),i(567106),i(33275),i(280200),i(285757),i(144828),i(977810),i(766729),i(774462),i(802486),i(383723),i(665244),i(857052),i(637233),i(777515),i(399434),i(450508),i(340739),i(572401),i(592340),i(441059),i(634495),i(638220),i(41410),i(938009),i(419439),i(518098)},211707:function(e,t,i){i.d(t,{JG:function(){return s.J}});i(21580),i(883179);var s=i(217135)}}]);
//# sourceMappingURL=14006-e85b14f13d571838.js.map