"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7402],{25355:function(e,t,r){var o=r(75104),i=r(77703),n=r(49077),s=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let a=class extends n.oi{constructor(){super(...arguments),this.wallet=o.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return n.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?n.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?n.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?n.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?n.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&o.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&o.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&o.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&o.j1.openHref(this.wallet.homepage,"_blank")}};a=s([(0,i.customElement)("w3m-downloads-view")],a)},46545:function(e,t,r){var o=r(77703),i=r(49077),n=i.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,s=r(75104),a=r(53417),c=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let l=class extends i.oi{constructor(){super(),this.email=s.RouterController.state.data?.email,this.authConnector=s.ConnectorController.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),s.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),s.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){s.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),s.SnackController.showSuccess("Code email resent")}}catch(e){s.SnackController.showError(e)}finally{this.loading=!1}}};l.styles=n,c([(0,a.SB)()],l.prototype,"loading",void 0),l=c([(0,o.customElement)("w3m-email-verify-device-view")],l)},20224:function(e,t,r){var o=r(77703),i=r(57190),n=r(75104),s=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let a=class extends i.m{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:e}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!n.RY.state.activeChain)throw new Error("Active chain is not set on ChainControll");await n.ConnectionController.connectExternal(this.authConnector,n.RY.state.activeChain),n.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),n.OptionsController.state.siwx||n.IN.close()}}catch(e){throw n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:n.j1.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};a=s([(0,o.customElement)("w3m-email-verify-otp-view")],a)},25400:function(e,t,r){var o=r(75104),i=r(77703),n=r(49077),s=r(80236),a=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends n.oi{render(){return n.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{o.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=o.ApiController.state,{customWallets:r}=o.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map((e=>n.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,s.o)(o.fz.getWalletImage(e))}
          @click=${()=>{o.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};c=a([(0,i.customElement)("w3m-get-wallet-view")],c)},64301:function(e,t,r){var o=r(75104),i=r(77703),n=r(40081),s=r(49077),a=r(53417),c=r(80236),l=s.iv`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,u=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let p=class extends s.oi{constructor(){super(),this.network=o.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return s.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,c.o)(o.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:s.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=o.RY.state.activeChain,t=o.MO.getConnectedConnectorId(e);return o.ConnectorController.getAuthConnector()&&t===n.bq.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=o.RY.state.activeChain,t=o.MO.getConnectedConnectorId(e);return o.ConnectorController.getAuthConnector()&&t===n.bq.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&await o.RY.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};p.styles=l,u([(0,a.SB)()],p.prototype,"showRetry",void 0),u([(0,a.SB)()],p.prototype,"error",void 0),p=u([(0,i.customElement)("w3m-network-switch-view")],p)},65812:function(e,t,r){var o=r(40081),i=r(75104),n=r(77703),s=r(49077),a=r(53417),c=r(80236),l=s.iv`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,u=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let p=class extends s.oi{constructor(){super(),this.unsubscribe=[],this.network=i.RY.state.activeCaipNetwork,this.requestedCaipNetworks=i.RY.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=i.j1.debounce((e=>{this.search=e}),100),this.unsubscribe.push(i.RY.subscribeKey("activeCaipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s.dy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return s.dy`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){i.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),i.RouterController.push("WhatIsANetwork")}networksTemplate(){const e=i.RY.getAllRequestedCaipNetworks(),t=i.RY.getAllApprovedCaipNetworkIds(),r=i.j1.sortRequestedNetworks(t,e);return this.search?this.filteredNetworks=r?.filter((e=>e?.name?.toLowerCase().includes(this.search.toLowerCase()))):this.filteredNetworks=r,this.filteredNetworks?.map((e=>s.dy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,c.o)(i.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `))}getNetworkDisabled(e){const t=e.chainNamespace,r=i.AccountController.getCaipAddress(t),n=i.RY.getAllApprovedCaipNetworkIds(),s=!1!==i.RY.getNetworkProp("supportsAllNetworks",t),a=i.MO.getConnectedConnectorId(t),c=i.ConnectorController.getAuthConnector(),l=a===o.bq.CONNECTOR_ID.AUTH&&c;return!(!r||s||l)&&!n?.includes(e.caipNetworkId)}onSwitchNetwork(e){const t=i.RouterController.state.data;if(e.id===this.network?.id)return;const r=e.chainNamespace!==i.RY.state.activeChain,o=i.RY.getAccountProp("caipAddress",e.chainNamespace),n=i.AccountController.state.caipAddress,s=Boolean(i.ConnectorController.getAuthConnector());r&&n&&!o&&!s?i.RouterController.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):i.RouterController.push("SwitchNetwork",{...t,network:e})}};p.styles=l,u([(0,a.SB)()],p.prototype,"network",void 0),u([(0,a.SB)()],p.prototype,"requestedCaipNetworks",void 0),u([(0,a.SB)()],p.prototype,"filteredNetworks",void 0),u([(0,a.SB)()],p.prototype,"search",void 0),p=u([(0,n.customElement)("w3m-networks-view")],p)},20128:function(e,t,r){var o=r(40081),i=r(75104),n=r(77703),s=r(49077),a=r(53417),c=s.iv`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,l=r(80236),u=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let p=class extends s.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=i.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=i.sl.state.coinbaseTransactions,this.tokenImages=i.WM.state.tokenImages,this.unsubscribe.push(i.ph.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),i.WM.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),i.sl.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),i.sl.clearCursor(),this.fetchTransactions()}render(){return s.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map((e=>{const t=o.Em.formatDate(e?.metadata?.minedAt),r=e.transfers[0],i=r?.fungible_info;if(!i)return null;const n=i?.icon?.url||this.tokenImages?.[i.symbol||""];return s.dy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${(0,l.o)(i.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${(0,l.o)(n)}
          symbol=${(0,l.o)(i.symbol)}
        ></w3m-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const r=n.TransactionUtil.getTransactionGroupTitle(t,e),o=this.coinbaseTransactions[t]?.[e];return o?s.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(o)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=i.AccountController.state.address,t=i.OptionsController.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await i.sl.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;0!==(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=i.AccountController.state.address;await i.sl.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(s.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}};p.styles=c,u([(0,a.SB)()],p.prototype,"selectedOnRampProvider",void 0),u([(0,a.SB)()],p.prototype,"loading",void 0),u([(0,a.SB)()],p.prototype,"coinbaseTransactions",void 0),u([(0,a.SB)()],p.prototype,"tokenImages",void 0),p=u([(0,n.customElement)("w3m-onramp-activity-view")],p)},57860:function(e,t,r){var o=r(75104),i=r(77703),n=r(49077),s=r(53417),a=n.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,c=r(80236),l=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=o.ph.state.paymentCurrency,this.currencies=o.ph.state.paymentCurrencies,this.currencyImages=o.WM.state.currencyImages,this.checked=!1,this.unsubscribe.push(o.ph.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),o.WM.subscribeKey("currencyImages",(e=>this.currencyImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state,r=o.OptionsController.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(r)&&!this.checked;return n.dy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,c.o)(i?"disabled":void 0)}
      >
        ${this.currenciesTemplate(i)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map((t=>n.dy`
        <wui-list-item
          imageSrc=${(0,c.o)(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,c.o)(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `))}selectCurrency(e){e&&(o.ph.setPaymentCurrency(e),o.IN.close())}onCheckboxChange(e){this.checked=Boolean(e.detail)}};u.styles=a,l([(0,s.SB)()],u.prototype,"selectedCurrency",void 0),l([(0,s.SB)()],u.prototype,"currencies",void 0),l([(0,s.SB)()],u.prototype,"currencyImages",void 0),l([(0,s.SB)()],u.prototype,"checked",void 0),u=l([(0,i.customElement)("w3m-onramp-fiat-select-view")],u)},20613:function(e,t,r){var o=r(75104),i=r(77703),n=r(49077),s=r(53417),a=r(9920),c=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let l=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.providers=o.ph.state.providers,this.unsubscribe.push(o.ph.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,r)=>({...t,url:e[r]||""})))}))}render(){return n.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter((e=>e.supportedChains.includes(o.RY.state.activeChain??"eip155"))).map((e=>n.dy`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `))}onClickProvider(e){o.ph.setSelectedProvider(e),o.RouterController.push("BuyInProgress"),o.j1.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),o.Xs.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:o.AccountController.state.preferredAccountType===a.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=o.AccountController.state.address,t=o.RY.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!t?.name)throw new Error("No network found");const r=o.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??o.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=o.ph.state.purchaseCurrency,n=i?[i.symbol]:o.ph.state.purchaseCurrencies.map((e=>e.symbol));return await o.Lr.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:o.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:o.ph.state.purchaseAmount})}};c([(0,s.SB)()],l.prototype,"providers",void 0),l=c([(0,i.customElement)("w3m-onramp-providers-view")],l)},96230:function(e,t,r){var o=r(75104),i=r(77703),n=r(49077),s=r(53417),a=n.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,c=r(80236),l=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=o.ph.state.purchaseCurrencies,this.tokens=o.ph.state.purchaseCurrencies,this.tokenImages=o.WM.state.tokenImages,this.checked=!1,this.unsubscribe.push(o.ph.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),o.WM.subscribeKey("tokenImages",(e=>this.tokenImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state,r=o.OptionsController.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(r)&&!this.checked;return n.dy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,c.o)(i?"disabled":void 0)}
      >
        ${this.currenciesTemplate(i)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map((t=>n.dy`
        <wui-list-item
          imageSrc=${(0,c.o)(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,c.o)(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `))}selectToken(e){e&&(o.ph.setPurchaseCurrency(e),o.IN.close())}onCheckboxChange(e){this.checked=Boolean(e.detail)}};u.styles=a,l([(0,s.SB)()],u.prototype,"selectedCurrency",void 0),l([(0,s.SB)()],u.prototype,"tokens",void 0),l([(0,s.SB)()],u.prototype,"tokenImages",void 0),l([(0,s.SB)()],u.prototype,"checked",void 0),u=l([(0,i.customElement)("w3m-onramp-token-select-view")],u)},19866:function(e,t,r){var o=r(75104),i=r(77703),n=r(49077),s=r(53417),a=r(80236),c=n.iv`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`,l=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends n.oi{constructor(){super(),this.usubscribe=[],this.address=o.AccountController.state.address,this.profileImage=o.AccountController.state.profileImage,this.profileName=o.AccountController.state.profileName,this.accounts=o.AccountController.state.allAccounts,this.loading=!1,this.usubscribe.push(o.AccountController.subscribeKey("address",(e=>{e?this.address=e:o.IN.close()}))),this.usubscribe.push(o.AccountController.subscribeKey("profileImage",(e=>{this.profileImage=e}))),this.usubscribe.push(o.AccountController.subscribeKey("profileName",(e=>{this.profileName=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return n.dy`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,a.o)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?i.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):i.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>o.RouterController.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return n.dy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e=>this.accountTemplate(e)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){this.loading=!0;if(o.ConnectorController.getAuthConnector()){const t=e.type;await o.ConnectionController.setPreferredAccountType(t)}o.AccountController.setShouldUpdateToAddress(e.address,o.RY.state.activeChain),this.loading=!1}accountTemplate(e){return n.dy`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":n.dy`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(o.j1.copyToClopboard(this.profileName),o.SnackController.showSuccess("Name copied")):this.address&&(o.j1.copyToClopboard(this.address),o.SnackController.showSuccess("Address copied"))}catch{o.SnackController.showError("Failed to copy")}}};u.styles=c,l([(0,s.SB)()],u.prototype,"address",void 0),l([(0,s.SB)()],u.prototype,"profileImage",void 0),l([(0,s.SB)()],u.prototype,"profileName",void 0),l([(0,s.SB)()],u.prototype,"accounts",void 0),l([(0,s.SB)()],u.prototype,"loading",void 0),u=l([(0,i.customElement)("w3m-profile-view")],u)}}]);