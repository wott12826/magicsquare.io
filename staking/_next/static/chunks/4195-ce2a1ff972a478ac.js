"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4195],{47358:function(e,t,o){var n=o(77703),i=o(75104),s=o(49077),r=s.iv`
  .continue-button-container {
    width: 100%;
  }
`,a=o(40081),l=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let c=class extends s.oi{render(){return s.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{i.j1.openHref(a.UE.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return s.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return s.dy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){i.RouterController.replace("Account")}};c.styles=r,c=l([(0,n.customElement)("w3m-register-account-name-success-view")],c)},1119:function(e,t,o){var n=o(77703),i=o(49077),s=o(53417),r=i.iv`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`,a=o(45924),l=o(75104),c=o(9920),u=o(40081),d=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let p=class extends i.oi{constructor(){super(),this.formRef=(0,a.V)(),this.usubscribe=[],this.name="",this.error="",this.loading=l.a.state.loading,this.suggestions=l.a.state.suggestions,this.registered=!1,this.profileName=l.AccountController.state.profileName,this.onDebouncedNameInputChange=l.j1.debounce((e=>{l.a.validateName(e)?(this.error="",this.name=e,l.a.getSuggestions(e),l.a.isNameRegistered(e).then((e=>{this.registered=e}))):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"})),this.usubscribe.push(l.a.subscribe((e=>{this.suggestions=e.suggestions,this.loading=e.loading})),l.AccountController.subscribeKey("profileName",(e=>{this.profileName=e,e&&(this.error="You already own a name")})))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach((e=>e())),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,a.i)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?i.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?i.dy`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?i.dy`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:i.dy`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter((e=>e.name!==this.name)):[];return i.dy`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map((e=>this.availableNameTemplate(e.name)))}
    </wui-flex>`}availableNameTemplate(e){return i.dy` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&l.a.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;const e=`${this.name}${u.bq.WC_NAME_SUFFIX}`;l.Xs.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:l.AccountController.state.preferredAccountType===c.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await l.a.registerName(e),l.Xs.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:l.AccountController.state.preferredAccountType===c.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(e){l.SnackController.showError(e.message),l.Xs.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:l.AccountController.state.preferredAccountType===c.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${u.bq.WC_NAME_SUFFIX}`,error:e?.message||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};p.styles=r,d([(0,s.Cb)()],p.prototype,"errorMessage",void 0),d([(0,s.SB)()],p.prototype,"name",void 0),d([(0,s.SB)()],p.prototype,"error",void 0),d([(0,s.SB)()],p.prototype,"loading",void 0),d([(0,s.SB)()],p.prototype,"suggestions",void 0),d([(0,s.SB)()],p.prototype,"registered",void 0),d([(0,s.SB)()],p.prototype,"profileName",void 0),p=d([(0,n.customElement)("w3m-register-account-name-view")],p)},74633:function(e,t,o){var n=o(75104),i=o(77703),s=o(49077),r=o(53417),a=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let l=class extends s.oi{constructor(){super(...arguments),this.dappName=n.OptionsController.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return s.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await n.wf.requestSignMessage().finally((()=>this.isSigning=!1))}async onCancel(){this.isCancelling=!0,await n.wf.cancelSignMessage().finally((()=>this.isCancelling=!1))}};a([(0,r.SB)()],l.prototype,"isCancelling",void 0),a([(0,r.SB)()],l.prototype,"isSigning",void 0),l=a([(0,i.customElement)("w3m-siwx-sign-message-view")],l)},35808:function(e,t,o){var n=o(77703),i=o(49077),s=i.iv`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
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
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,r=o(75104),a=o(53417),l=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let c=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=r.nY.state.approvalTransaction,this.swapTransaction=r.nY.state.swapTransaction,this.sourceToken=r.nY.state.sourceToken,this.sourceTokenAmount=r.nY.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=r.nY.state.sourceTokenPriceInUSD,this.toToken=r.nY.state.toToken,this.toTokenAmount=r.nY.state.toTokenAmount??"",this.toTokenPriceInUSD=r.nY.state.toTokenPriceInUSD,this.caipNetwork=r.RY.state.activeCaipNetwork,this.balanceSymbol=r.AccountController.state.balanceSymbol,this.gasPriceInUSD=r.nY.state.gasPriceInUSD,this.inputError=r.nY.state.inputError,this.loadingQuote=r.nY.state.loadingQuote,this.loadingApprovalTransaction=r.nY.state.loadingApprovalTransaction,this.loadingBuildTransaction=r.nY.state.loadingBuildTransaction,this.loadingTransaction=r.nY.state.loadingTransaction,this.unsubscribe.push(r.AccountController.subscribeKey("balanceSymbol",(e=>{this.balanceSymbol!==e&&r.RouterController.goBack()})),r.RY.subscribeKey("activeCaipNetwork",(e=>{this.caipNetwork!==e&&(this.caipNetwork=e)})),r.nY.subscribe((e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&r.RouterController.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction})))}firstUpdated(){r.nY.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach((e=>e?.())),clearInterval(this.interval)}render(){return i.dy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval((()=>{r.nY.getApprovalLoadingState()||r.nY.getTransaction()}),1e4)}templateSwap(){const e=`${n.UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,t=`${n.UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,o=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,s=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),r=n.UiHelperUtil.formatNumberToLocalString(o),a=n.UiHelperUtil.formatNumberToLocalString(s),l=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return i.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${l}
            ?disabled=${l}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?i.dy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){r.RouterController.goBack()}onSendTransaction(){this.approvalTransaction?r.nY.sendTransactionForApproval(this.approvalTransaction):r.nY.sendTransactionForSwap(this.swapTransaction)}};c.styles=s,l([(0,a.SB)()],c.prototype,"interval",void 0),l([(0,a.SB)()],c.prototype,"detailsOpen",void 0),l([(0,a.SB)()],c.prototype,"approvalTransaction",void 0),l([(0,a.SB)()],c.prototype,"swapTransaction",void 0),l([(0,a.SB)()],c.prototype,"sourceToken",void 0),l([(0,a.SB)()],c.prototype,"sourceTokenAmount",void 0),l([(0,a.SB)()],c.prototype,"sourceTokenPriceInUSD",void 0),l([(0,a.SB)()],c.prototype,"toToken",void 0),l([(0,a.SB)()],c.prototype,"toTokenAmount",void 0),l([(0,a.SB)()],c.prototype,"toTokenPriceInUSD",void 0),l([(0,a.SB)()],c.prototype,"caipNetwork",void 0),l([(0,a.SB)()],c.prototype,"balanceSymbol",void 0),l([(0,a.SB)()],c.prototype,"gasPriceInUSD",void 0),l([(0,a.SB)()],c.prototype,"inputError",void 0),l([(0,a.SB)()],c.prototype,"loadingQuote",void 0),l([(0,a.SB)()],c.prototype,"loadingApprovalTransaction",void 0),l([(0,a.SB)()],c.prototype,"loadingBuildTransaction",void 0),l([(0,a.SB)()],c.prototype,"loadingTransaction",void 0),c=l([(0,n.customElement)("w3m-swap-preview-view")],c)},11215:function(e,t,o){var n=o(77703),i=o(49077),s=i.iv`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,r=o(75104),a=o(53417),l=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let c=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.targetToken=r.RouterController.state.data?.target,this.sourceToken=r.nY.state.sourceToken,this.sourceTokenAmount=r.nY.state.sourceTokenAmount,this.toToken=r.nY.state.toToken,this.myTokensWithBalance=r.nY.state.myTokensWithBalance,this.popularTokens=r.nY.state.popularTokens,this.searchValue="",this.unsubscribe.push(r.nY.subscribe((e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance})))}updated(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=this.renderRoot?.querySelector(".tokens");t?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const e=this.renderRoot?.querySelector(".suggested-tokens-container"),t=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return i.dy`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){"sourceToken"===this.targetToken?r.nY.setSourceToken(e):(r.nY.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&r.nY.swapTokens()),r.RouterController.goBack()}templateSearchInput(){return i.dy`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(e,this.searchValue),n=this.filterTokensWithText(t,this.searchValue);return i.dy`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${o?.length>0?i.dy`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map((e=>{const t=e.symbol===this.sourceToken?.symbol||e.symbol===this.toToken?.symbol;return i.dy`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${e.symbol}"
                      name=${e.name}
                      ?disabled=${t}
                      symbol=${e.symbol}
                      price=${e?.price}
                      amount=${e?.quantity?.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{t||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `}))}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${n?.length>0?n.map((e=>i.dy`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${e.symbol}"
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `)):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=r.nY.state.suggestedTokens?r.nY.state.suggestedTokens.slice(0,8):null;return e?i.dy`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map((e=>i.dy`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `))}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){const e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter((e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase())))}};c.styles=s,l([(0,a.SB)()],c.prototype,"interval",void 0),l([(0,a.SB)()],c.prototype,"targetToken",void 0),l([(0,a.SB)()],c.prototype,"sourceToken",void 0),l([(0,a.SB)()],c.prototype,"sourceTokenAmount",void 0),l([(0,a.SB)()],c.prototype,"toToken",void 0),l([(0,a.SB)()],c.prototype,"myTokensWithBalance",void 0),l([(0,a.SB)()],c.prototype,"popularTokens",void 0),l([(0,a.SB)()],c.prototype,"searchValue",void 0),c=l([(0,n.customElement)("w3m-swap-select-token-view")],c)},27617:function(e,t,o){var n=o(77703),i=o(49077),s=o(53417),r=i.iv`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
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
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,a=o(75104),l=o(40081),c=o(9920),u=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let d=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=a.RY.state.activeCaipNetwork?.caipNetworkId,this.initialized=a.nY.state.initialized,this.loadingQuote=a.nY.state.loadingQuote,this.loadingPrices=a.nY.state.loadingPrices,this.loadingTransaction=a.nY.state.loadingTransaction,this.sourceToken=a.nY.state.sourceToken,this.sourceTokenAmount=a.nY.state.sourceTokenAmount,this.sourceTokenPriceInUSD=a.nY.state.sourceTokenPriceInUSD,this.toToken=a.nY.state.toToken,this.toTokenAmount=a.nY.state.toTokenAmount,this.toTokenPriceInUSD=a.nY.state.toTokenPriceInUSD,this.inputError=a.nY.state.inputError,this.gasPriceInUSD=a.nY.state.gasPriceInUSD,this.fetchError=a.nY.state.fetchError,this.onDebouncedGetSwapCalldata=a.j1.debounce((async()=>{await a.nY.swapTokens()}),200),a.RY.subscribeKey("activeCaipNetwork",(e=>{this.caipNetworkId!==e?.caipNetworkId&&(this.caipNetworkId=e?.caipNetworkId,a.nY.resetState(),a.nY.initializeState())})),this.unsubscribe.push(a.IN.subscribeKey("open",(e=>{e||a.nY.resetState()})),a.RouterController.subscribeKey("view",(e=>{e.includes("Swap")||a.nY.resetValues()})),a.nY.subscribe((e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError})))}firstUpdated(){a.nY.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e?.())),clearInterval(this.interval)}render(){return i.dy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{a.nY.getNetworkTokenPrice(),a.nY.getMyTokensWithBalance(),a.nY.swapTokens()}),1e4)}templateSwap(){return i.dy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return i.dy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return i.dy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){const o=a.nY.state.myTokensWithBalance?.find((e=>e?.address===t?.address)),n="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,s="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,r=l.C6.parseLocalStringToNumber(n)*s;return i.dy`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${o?.quantity?.numeric}
      .price=${o?.price}
      .marketValue=${r}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){const o="sourceToken"===e?this.sourceToken:this.toToken,n=o?.address===a.RY.getActiveNetworkTokenAddress();let i="0";if(!t)return i="0",void this.handleChangeAmount(e,i);if(!this.gasPriceInUSD)return i=t,void this.handleChangeAmount(e,i);const s=l.C6.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),r=n?l.C6.bigNumber(t).minus(s):l.C6.bigNumber(t);this.handleChangeAmount(e,r.isGreaterThan(0)?r.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?i.dy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,t){a.nY.clearError(),"sourceToken"===e?a.nY.setSourceTokenAmount(t):a.nY.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,n=o||e||t||this.inputError;return i.dy` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${o}
        .disabled=${n}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){a.nY.switchTokens()}onSwapPreview(){this.fetchError?a.nY.swapTokens():(a.Xs.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:a.AccountController.state.preferredAccountType===c.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),a.RouterController.push("SwapPreview"))}};d.styles=r,u([(0,s.SB)()],d.prototype,"interval",void 0),u([(0,s.SB)()],d.prototype,"detailsOpen",void 0),u([(0,s.SB)()],d.prototype,"caipNetworkId",void 0),u([(0,s.SB)()],d.prototype,"initialized",void 0),u([(0,s.SB)()],d.prototype,"loadingQuote",void 0),u([(0,s.SB)()],d.prototype,"loadingPrices",void 0),u([(0,s.SB)()],d.prototype,"loadingTransaction",void 0),u([(0,s.SB)()],d.prototype,"sourceToken",void 0),u([(0,s.SB)()],d.prototype,"sourceTokenAmount",void 0),u([(0,s.SB)()],d.prototype,"sourceTokenPriceInUSD",void 0),u([(0,s.SB)()],d.prototype,"toToken",void 0),u([(0,s.SB)()],d.prototype,"toTokenAmount",void 0),u([(0,s.SB)()],d.prototype,"toTokenPriceInUSD",void 0),u([(0,s.SB)()],d.prototype,"inputError",void 0),u([(0,s.SB)()],d.prototype,"gasPriceInUSD",void 0),u([(0,s.SB)()],d.prototype,"fetchError",void 0),d=u([(0,n.customElement)("w3m-swap-view")],d)}}]);