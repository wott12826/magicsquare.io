"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1834],{67106:function(t,e,i){var n=i(77703),o=i(49077),r=o.iv`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,a=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let s=class extends o.oi{render(){return o.dy`<w3m-activity-list page="account"></w3m-activity-list>`}};s.styles=r,s=a([(0,n.customElement)("w3m-account-activity-widget")],s)},38009:function(t,e,i){var n=i(77703),o=i(49077),r=i(75104),a=i(40081),s=i(53417),c=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=r.MO.getConnectedSocialProvider(),this.socialUsername=r.MO.getConnectedSocialUsername(),this.namespace=r.RY.state.activeChain,this.unsubscribe.push(r.RY.subscribeKey("activeChain",(t=>{this.namespace=t})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=r.MO.getConnectedConnectorId(this.namespace),e=r.ConnectorController.getAuthConnector();if(!e||t!==a.bq.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=e.provider.getEmail()??"";return o.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(t,e){e||r.RouterController.push("UpdateEmailWallet",{email:t})}getAuthName(t){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:t.length>30?`${t.slice(0,-3)}...`:t}};c([(0,s.SB)()],l.prototype,"namespace",void 0),l=c([(0,n.customElement)("w3m-account-auth-button")],l)},63962:function(t,e,i){var n=i(75104),o=i(77703),r=i(49077),a=i(53417),s=i(80236),c=i(40081),l=i(69270),u=r.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
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
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,d=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.caipAddress=n.AccountController.state.caipAddress,this.address=n.j1.getPlainAddress(n.AccountController.state.caipAddress),this.allAccounts=n.AccountController.state.allAccounts,this.profileImage=n.AccountController.state.profileImage,this.profileName=n.AccountController.state.profileName,this.disconnecting=!1,this.balance=n.AccountController.state.balance,this.balanceSymbol=n.AccountController.state.balanceSymbol,this.features=n.OptionsController.state.features,this.namespace=n.RY.state.activeChain,this.chainId=n.RY.state.activeCaipNetwork?.id,this.unsubscribe.push(n.AccountController.subscribeKey("caipAddress",(t=>{this.address=n.j1.getPlainAddress(t),this.caipAddress=t})),n.AccountController.subscribeKey("balance",(t=>this.balance=t)),n.AccountController.subscribeKey("balanceSymbol",(t=>this.balanceSymbol=t)),n.AccountController.subscribeKey("profileName",(t=>this.profileName=t)),n.AccountController.subscribeKey("profileImage",(t=>this.profileImage=t)),n.OptionsController.subscribeKey("features",(t=>this.features=t)),n.AccountController.subscribeKey("allAccounts",(t=>{this.allAccounts=t})),n.RY.subscribeKey("activeChain",(t=>this.namespace=t)),n.RY.subscribeKey("activeCaipNetwork",(t=>{if(t){const[e,i]=t?.caipNetworkId?.split(":")||[];e&&i&&(this.namespace=e,this.chainId=i)}})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){if(!this.caipAddress)return null;const t=n.RY.state.activeChain!==c.bq.CHAIN.SOLANA&&this.allAccounts.length>1;return r.dy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${t?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${n.j1.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const t=this.features?.onramp,e="bip122"===n.RY.state.activeChain;return!t||e?null:r.dy`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||n.bq.DEFAULT_FEATURES.walletFeaturesOrder).map((t=>{switch(t){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}activityTemplate(){const t=n.RY.state.activeChain===c.bq.CHAIN.SOLANA;return r.dy` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!t}
      ?disabled=${t}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${t}> Activity </wui-text>
      ${t?r.dy`<wui-tag variant="main">Coming soon</wui-tag>`:""}
    </wui-list-item>`}swapsTemplate(){const t=this.features?.swaps,e=n.RY.state.activeChain===c.bq.CHAIN.EVM;return t&&e?r.dy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const t=this.features?.send,e=n.RY.state.activeChain===c.bq.CHAIN.EVM;return t&&e?r.dy`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const t=n.RY.state.activeChain,e=n.MO.getConnectedConnectorId(t),i=n.ConnectorController.getAuthConnector(),{origin:o}=location;return!i||e!==c.bq.CONNECTOR_ID.AUTH||o.includes(n.bq.SECURE_SITE)?null:r.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){n.RouterController.push("SwitchAddress")}handleClickPay(){n.RouterController.push("OnRampProviders")}handleClickSwap(){n.RouterController.push("Swap")}handleClickSend(){n.RouterController.push("WalletSend")}explorerBtnTemplate(){return n.AccountController.state.addressExplorerUrl?r.dy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return r.dy`
      <wui-avatar
        alt=${(0,s.o)(this.caipAddress)}
        address=${(0,s.o)(n.j1.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,s.o)(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?o.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):o.UiHelperUtil.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.allAccounts.find((t=>t.address===this.address)),e=n.AccountController.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():r.dy`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,s.o)(this.address)}
        icon="${t?.type===l.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&n.RY.state.activeChain===c.bq.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,s.o)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,s.o)(e||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return r.dy`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0,s.o)(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${t=>n.AccountController.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[t]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${o.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(n.j1.copyToClopboard(this.address),n.SnackController.showSuccess("Address copied"))}catch{n.SnackController.showError("Failed to copy")}}onTransactions(){n.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:n.AccountController.state.preferredAccountType===l.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await n.ConnectionController.disconnect(),n.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),n.IN.close()}catch{n.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),n.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const t=n.AccountController.state.addressExplorerUrl;t&&n.j1.openHref(t,"_blank")}onGoToUpgradeView(){n.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),n.RouterController.push("UpgradeEmailWallet")}};p.styles=u,d([(0,a.SB)()],p.prototype,"caipAddress",void 0),d([(0,a.SB)()],p.prototype,"address",void 0),d([(0,a.SB)()],p.prototype,"allAccounts",void 0),d([(0,a.SB)()],p.prototype,"profileImage",void 0),d([(0,a.SB)()],p.prototype,"profileName",void 0),d([(0,a.SB)()],p.prototype,"disconnecting",void 0),d([(0,a.SB)()],p.prototype,"balance",void 0),d([(0,a.SB)()],p.prototype,"balanceSymbol",void 0),d([(0,a.SB)()],p.prototype,"features",void 0),d([(0,a.SB)()],p.prototype,"namespace",void 0),d([(0,a.SB)()],p.prototype,"chainId",void 0),p=d([(0,o.customElement)("w3m-account-default-widget")],p)},33275:function(t,e,i){var n=i(75104),o=i(77703),r=i(49077),a=r.iv`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,s=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends r.oi{render(){return r.dy`${this.nftTemplate()}`}nftTemplate(){return r.dy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){n.RouterController.push("WalletReceive")}};c.styles=a,c=s([(0,o.customElement)("w3m-account-nfts-widget")],c)},80200:function(t,e,i){var n=i(75104),o=i(77703),r=i(49077),a=r.iv`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,s=i(53417),c=i(69270),l=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=n.AccountController.state.tokenBalance,this.unsubscribe.push(n.AccountController.subscribe((t=>{this.tokenBalance=t.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return r.dy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?r.dy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:r.dy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map((t=>r.dy`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`))}onReceiveClick(){n.RouterController.push("WalletReceive")}onBuyClick(){n.Xs.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:n.AccountController.state.preferredAccountType===c.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.RouterController.push("OnRampProviders")}};u.styles=a,l([(0,s.SB)()],u.prototype,"tokenBalance",void 0),u=l([(0,o.customElement)("w3m-account-tokens-widget")],u)},76559:function(t,e,i){var n=i(75104),o=i(77703),r=i(49077),a=i(53417),s=i(80236),c=r.iv`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,l=i(83179),u=i(40081),d=i(69270),p=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.address=n.AccountController.state.address,this.profileImage=n.AccountController.state.profileImage,this.profileName=n.AccountController.state.profileName,this.network=n.RY.state.activeCaipNetwork,this.currentTab=n.AccountController.state.currentTab,this.tokenBalance=n.AccountController.state.tokenBalance,this.features=n.OptionsController.state.features,this.unsubscribe.push(n.AccountController.subscribe((t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.currentTab=t.currentTab,this.tokenBalance=t.tokenBalance):n.IN.close()})),n.RY.subscribeKey("activeCaipNetwork",(t=>this.network=t)),n.OptionsController.subscribeKey("features",(t=>this.features=t))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),clearInterval(this.watchTokenBalance)}firstUpdated(){n.AccountController.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const t=n.fz.getNetworkImage(this.network);return r.dy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      ${this.network&&r.dy`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,s.o)(this.address)}
        networkSrc=${(0,s.o)(t)}
        icon="chevronBottom"
        avatarSrc=${(0,s.o)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,s.o)(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()}

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${n.j1.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/3+"px":"104px"}
        .tabs=${l.b.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const t=this.features?.walletFeaturesOrder||n.bq.DEFAULT_FEATURES.walletFeaturesOrder;return t.every((t=>!this.features?.[t]))?null:r.dy`<wui-flex gap="s">
      ${t.map((t=>{switch(t){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}}))}
    </wui-flex>`}onrampTemplate(){const t=this.features?.onramp;return t?r.dy`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const t=this.features?.swaps,e=n.RY.state.activeChain===u.bq.CHAIN.EVM;return t&&e?r.dy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){const t=this.features?.receive;return t?r.dy`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const t=this.features?.send,e=n.RY.state.activeChain===u.bq.CHAIN.EVM;return t&&e?r.dy`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval((()=>n.AccountController.fetchTokenBalance()),1e4)}listContentTemplate(){return 0===this.currentTab?r.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?r.dy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?r.dy`<w3m-account-activity-widget></w3m-account-activity-widget>`:r.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const t=n.j1.calculateBalance(this.tokenBalance),{dollars:e="0",pennies:i="00"}=n.j1.formatTokenBalance(t);return r.dy`<wui-balance dollars=${e} pennies=${i}></wui-balance>`}return r.dy`<wui-balance dollars="0" pennies="00"></wui-balance>`}onTabChange(t){n.AccountController.setCurrentTab(t)}onProfileButtonClick(){const{allAccounts:t}=n.AccountController.state;t.length>1?n.RouterController.push("Profile"):n.RouterController.push("AccountSettings")}onBuyClick(){n.RouterController.push("OnRampProviders")}onSwapClick(){this.network?.caipNetworkId&&!n.bq.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?n.RouterController.push("UnsupportedChain",{swapUnsupportedChain:!0}):(n.Xs.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:n.AccountController.state.preferredAccountType===d.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.RouterController.push("Swap"))}onReceiveClick(){n.RouterController.push("WalletReceive")}onSendClick(){n.Xs.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:n.AccountController.state.preferredAccountType===d.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.RouterController.push("WalletSend")}};h.styles=c,p([(0,a.SB)()],h.prototype,"watchTokenBalance",void 0),p([(0,a.SB)()],h.prototype,"address",void 0),p([(0,a.SB)()],h.prototype,"profileImage",void 0),p([(0,a.SB)()],h.prototype,"profileName",void 0),p([(0,a.SB)()],h.prototype,"network",void 0),p([(0,a.SB)()],h.prototype,"currentTab",void 0),p([(0,a.SB)()],h.prototype,"tokenBalance",void 0),p([(0,a.SB)()],h.prototype,"features",void 0),h=p([(0,o.customElement)("w3m-account-wallet-features-widget")],h)},85757:function(t,e,i){var n=i(40081),o=i(75104),r=i(77703),a=i(49077),s=i(53417),c=i(69270),l=a.iv`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`,u=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const d="last-transaction";let p=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=o.RY.state.activeCaipAddress,this.transactionsByYear=o.sl.state.transactionsByYear,this.loading=o.sl.state.loading,this.empty=o.sl.state.empty,this.next=o.sl.state.next,o.sl.clearCursor(),this.unsubscribe.push(o.RY.subscribeKey("activeCaipAddress",(t=>{t&&this.caipAddress!==t&&(o.sl.resetTransactions(),o.sl.fetchTransactions(t)),this.caipAddress=t})),o.RY.subscribeKey("activeCaipNetwork",(()=>{this.updateTransactionView()})),o.sl.subscribe((t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next})))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.dy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){const t=o.RY.state.activeCaipNetwork?.caipNetworkId;o.sl.state.lastNetworkInView!==t&&(o.sl.resetTransactions(),this.caipAddress&&o.sl.fetchTransactions(o.j1.getPlainAddress(this.caipAddress))),o.sl.setLastNetworkInView(t)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map((t=>{const e=parseInt(t,10),i=new Array(12).fill(null).map(((t,i)=>{const n=r.TransactionUtil.getTransactionGroupTitle(e,i),o=this.transactionsByYear[e]?.[i];return{groupTitle:n,transactions:o}})).filter((({transactions:t})=>t)).reverse();return i.map((({groupTitle:t,transactions:e},n)=>{const o=n===i.length-1;return e?a.dy`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${o?"true":"false"}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(e,o)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(t,e){const{date:i,descriptions:n,direction:o,isAllNFT:s,images:c,status:l,transfers:u,type:p}=this.getTransactionListItemProps(t),h=u?.length>1;return 2===u?.length&&!s?a.dy`
        <wui-transaction-list-item
          date=${i}
          .direction=${o}
          id=${e&&this.next?d:""}
          status=${l}
          type=${p}
          .images=${c}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `:h?u.map(((t,n)=>{const o=r.TransactionUtil.getTransferDescription(t),s=e&&n===u.length-1;return a.dy` <wui-transaction-list-item
          date=${i}
          direction=${t.direction}
          id=${s&&this.next?d:""}
          status=${l}
          type=${p}
          .onlyDirectionIcon=${!0}
          .images=${[c[n]]}
          .descriptions=${[o]}
        ></wui-transaction-list-item>`})):a.dy`
      <wui-transaction-list-item
        date=${i}
        .direction=${o}
        id=${e&&this.next?d:""}
        status=${l}
        type=${p}
        .images=${c}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `}templateTransactions(t,e){return t.map(((i,n)=>{const o=e&&n===t.length-1;return a.dy`${this.templateRenderTransaction(i,o)}`}))}emptyStateActivity(){return a.dy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return a.dy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?a.dy`${this.emptyStateAccount()}`:a.dy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(a.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((t=>t)):null}onReceiveClick(){o.RouterController.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=o.OptionsController.state;this.paginationObserver=new IntersectionObserver((([e])=>{e?.isIntersecting&&!this.loading&&(o.sl.fetchTransactions(o.j1.getPlainAddress(this.caipAddress)),o.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:o.j1.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:o.AccountController.state.preferredAccountType===c.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${d}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const e=n.Em.formatDate(t?.metadata?.minedAt),i=r.TransactionUtil.getTransactionDescriptions(t),o=t?.transfers,a=t?.transfers?.[0],s=Boolean(a)&&t?.transfers?.every((t=>Boolean(t.nft_info))),c=r.TransactionUtil.getTransactionImages(o);return{date:e,direction:a?.direction,descriptions:i,isAllNFT:s,images:c,status:t.metadata?.status,transfers:o,type:t.metadata?.operationType}}};p.styles=l,u([(0,s.Cb)()],p.prototype,"page",void 0),u([(0,s.SB)()],p.prototype,"caipAddress",void 0),u([(0,s.SB)()],p.prototype,"transactionsByYear",void 0),u([(0,s.SB)()],p.prototype,"loading",void 0),u([(0,s.SB)()],p.prototype,"empty",void 0),u([(0,s.SB)()],p.prototype,"next",void 0),p=u([(0,r.customElement)("w3m-activity-list")],p)}}]);
//# sourceMappingURL=1834-0758102100dd5886.js.map