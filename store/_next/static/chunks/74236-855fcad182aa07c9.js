"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74236],{958174:function(e,t,i){var r=i(675104),n=i(577703),o=i(949077),s=i(680236),a=o.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,l=i(669270),c=i(653417),u=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let d=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=r.AccountController.state.preferredAccountType,this.unsubscribe.push(r.AccountController.subscribeKey("preferredAccountType",(e=>{this.preferredAccountType=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.dy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=r.RY.getAllRequestedCaipNetworks(),t=r.RY.getAllApprovedCaipNetworkIds(),i=r.RY.state.activeCaipNetwork,n=r.RY.checkIfSmartAccountEnabled();let a=r.j1.sortRequestedNetworks(t,e);if(n&&this.preferredAccountType===l.y_.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;a=[i]}return a.map((e=>o.dy`
        <wui-list-network
          imageSrc=${(0,s.o)(r.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};d.styles=a,u([(0,c.SB)()],d.prototype,"preferredAccountType",void 0),d=u([(0,n.customElement)("w3m-wallet-compatible-networks-view")],d)},895392:function(e,t,i){var r=i(675104),n=i(577703),o=i(949077),s=o.iv`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,a=i(653417),l=i(669270),c=i(680236),u=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let d=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.address=r.AccountController.state.address,this.profileName=r.AccountController.state.profileName,this.network=r.RY.state.activeCaipNetwork,this.preferredAccountType=r.AccountController.state.preferredAccountType,this.unsubscribe.push(r.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):r.SnackController.showError("Account not found")})),r.RY.subscribeKey("activeCaipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=r.fz.getNetworkImage(this.network);return o.dy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${n.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${r.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,c.o)(r.ThemeController.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=r.RY.getAllRequestedCaipNetworks(),t=r.RY.checkIfSmartAccountEnabled(),i=r.RY.state.activeCaipNetwork;if(this.preferredAccountType===l.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return i?o.dy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[r.fz.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const n=e?.filter((e=>e?.assets?.imageId))?.slice(0,5),s=n.map(r.fz.getNetworkImage).filter(Boolean);return o.dy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){r.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(r.j1.copyToClopboard(this.address),r.SnackController.showSuccess("Address copied"))}catch{r.SnackController.showError("Failed to copy")}}};d.styles=s,u([(0,a.SB)()],d.prototype,"address",void 0),u([(0,a.SB)()],d.prototype,"profileName",void 0),u([(0,a.SB)()],d.prototype,"network",void 0),u([(0,a.SB)()],d.prototype,"preferredAccountType",void 0),d=u([(0,n.customElement)("w3m-wallet-receive-view")],d)},335196:function(e,t,i){var r=i(577703),n=i(949077),o=n.iv`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,s=i(653417),a=i(675104),l=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let c=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.token=a.Si.state.token,this.sendTokenAmount=a.Si.state.sendTokenAmount,this.receiverAddress=a.Si.state.receiverAddress,this.receiverProfileName=a.Si.state.receiverProfileName,this.receiverProfileImageUrl=a.Si.state.receiverProfileImageUrl,this.gasPriceInUSD=a.Si.state.gasPriceInUSD,this.caipNetwork=a.RY.state.activeCaipNetwork,this.unsubscribe.push(a.Si.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl})),a.RY.subscribeKey("activeCaipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return n.dy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?r.UiHelperUtil.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?r.UiHelperUtil.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):r.UiHelperUtil.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return n.dy`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}onSendClick(){a.Si.sendToken()}onCancelClick(){a.RouterController.goBack()}};c.styles=o,l([(0,s.SB)()],c.prototype,"token",void 0),l([(0,s.SB)()],c.prototype,"sendTokenAmount",void 0),l([(0,s.SB)()],c.prototype,"receiverAddress",void 0),l([(0,s.SB)()],c.prototype,"receiverProfileName",void 0),l([(0,s.SB)()],c.prototype,"receiverProfileImageUrl",void 0),l([(0,s.SB)()],c.prototype,"gasPriceInUSD",void 0),l([(0,s.SB)()],c.prototype,"caipNetwork",void 0),c=l([(0,r.customElement)("w3m-wallet-send-preview-view")],c)},427113:function(e,t,i){var r=i(577703),n=i(949077),o=n.iv`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,s=i(675104),a=i(653417),l=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let c=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=s.AccountController.state.tokenBalance,this.search="",this.onDebouncedSearch=s.j1.debounce((e=>{this.search=e})),this.unsubscribe.push(s.AccountController.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return n.dy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return n.dy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalance?.filter((e=>e.chainId===s.RY.state.activeCaipNetwork?.caipNetworkId)),this.search?this.filteredTokens=this.tokenBalance?.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase()))):this.filteredTokens=this.tokens,n.dy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map((e=>n.dy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`)):n.dy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
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
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){s.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){s.Si.setToken(e),s.Si.setTokenAmount(void 0),s.RouterController.goBack()}};c.styles=o,l([(0,a.SB)()],c.prototype,"tokenBalance",void 0),l([(0,a.SB)()],c.prototype,"tokens",void 0),l([(0,a.SB)()],c.prototype,"filteredTokens",void 0),l([(0,a.SB)()],c.prototype,"search",void 0),c=l([(0,r.customElement)("w3m-wallet-send-select-token-view")],c)},38606:function(e,t,i){var r=i(577703),n=i(949077),o=n.iv`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,s=i(675104),a=i(653417),l=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let c=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.token=s.Si.state.token,this.sendTokenAmount=s.Si.state.sendTokenAmount,this.receiverAddress=s.Si.state.receiverAddress,this.receiverProfileName=s.Si.state.receiverProfileName,this.loading=s.Si.state.loading,this.gasPriceInUSD=s.Si.state.gasPriceInUSD,this.gasPrice=s.Si.state.gasPrice,this.message="Preview Send",this.fetchNetworkPrice(),this.fetchBalances(),this.unsubscribe.push(s.Si.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.getMessage(),n.dy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchBalances(){await s.AccountController.fetchTokenBalance()}async fetchNetworkPrice(){await s.nY.getNetworkTokenPrice();const e=await s.nY.getInitialGasPrice();await s.Si.fetchNetworkBalance(),e?.gasPrice&&e?.gasPriceInUSD&&(s.Si.setGasPrice(e.gasPrice),s.Si.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){s.RouterController.push("WalletSendPreview")}getMessage(){if(this.message="Preview Send",this.receiverAddress&&!s.j1.isAddress(this.receiverAddress,s.RY.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),s.Si.hasInsufficientGasFunds()&&(this.message="Insufficient Gas Funds"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price){this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")}this.token||(this.message="Select Token")}};c.styles=o,l([(0,a.SB)()],c.prototype,"token",void 0),l([(0,a.SB)()],c.prototype,"sendTokenAmount",void 0),l([(0,a.SB)()],c.prototype,"receiverAddress",void 0),l([(0,a.SB)()],c.prototype,"receiverProfileName",void 0),l([(0,a.SB)()],c.prototype,"loading",void 0),l([(0,a.SB)()],c.prototype,"gasPriceInUSD",void 0),l([(0,a.SB)()],c.prototype,"gasPrice",void 0),l([(0,a.SB)()],c.prototype,"message",void 0),c=l([(0,r.customElement)("w3m-wallet-send-view")],c)},400028:function(e,t,i){var r=i(577703),n=i(675104),o=i(949077),s=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let a=class extends o.oi{render(){return o.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${n.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};a=s([(0,r.customElement)("w3m-what-is-a-buy-view")],a)},501990:function(e,t,i){var r=i(675104),n=i(577703),o=i(949077),s=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const a=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let l=class extends o.oi{render(){return o.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${a}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{r.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};l=s([(0,n.customElement)("w3m-what-is-a-network-view")],l)},833037:function(e,t,i){var r=i(675104),n=i(577703),o=i(949077),s=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const a=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let l=class extends o.oi{render(){return o.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${a}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){r.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),r.RouterController.push("GetWallet")}};l=s([(0,n.customElement)("w3m-what-is-a-wallet-view")],l)}}]);
//# sourceMappingURL=74236-855fcad182aa07c9.js.map