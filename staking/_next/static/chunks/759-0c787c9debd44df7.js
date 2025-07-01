"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{1998:function(t,e,i){var a=i(75104),r=i(77703),n=i(49077),o=n.iv`
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

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`,s=i(40081),l=i(53417),c=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let u=class extends n.oi{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=a.RouterController.state.data?.switchToChain,this.navigateTo=a.RouterController.state.data?.navigateTo,this.navigateWithReplace=a.RouterController.state.data?.navigateWithReplace,this.caipNetwork=a.RouterController.state.data?.network,this.activeChain=a.RY.state.activeChain}firstUpdated(){this.unsubscribe.push(a.RY.subscribeKey("activeChain",(t=>this.activeChain=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.switchToChain?s.bq.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const e="eip155"===this.switchToChain?"Ethereum":this.switchToChain;return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual
            name=${"eip155"===this.switchToChain?"eth":this.switchToChain}
          ></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${e}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${e}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${t} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button size="md" @click=${this.switchActiveChain.bind(this)}>Switch</wui-button>
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(this.caipNetwork?await a.RY.switchActiveNetwork(this.caipNetwork):a.RY.setActiveNamespace(this.switchToChain),a.IN.close(),a.IN.open({view:"Connect"}))}};u.styles=o,c([(0,l.Cb)()],u.prototype,"activeChain",void 0),u=c([(0,r.customElement)("w3m-switch-active-chain-view")],u)},81603:function(t,e,i){var a=i(75104),r=i(77703),n=i(49077),o=i(53417),s=n.iv`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,l=i(80236),c=i(40081),u=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let d=class extends n.oi{constructor(){super(),this.metadata=a.OptionsController.state.metadata,this.allAccounts=a.AccountController.state.allAccounts||[],this.balances={},this.labels=a.AccountController.state.addressLabels,this.currentAddress=a.AccountController.state.address||"",this.caipNetwork=a.RY.state.activeCaipNetwork,a.AccountController.subscribeKey("allAccounts",(t=>{this.allAccounts=t}))}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach((t=>{a.Lr.getBalance(t.address,this.caipNetwork?.caipNetworkId).then((e=>{let i=this.balances[t.address]||0;e.balances.length>0&&(i=e.balances.reduce(((t,e)=>t+(e?.value||0)),0)),this.balances[t.address]=i,this.requestUpdate()}))}))}getAddressIcon(t){return"smartAccount"===t?"lightbulb":"mail"}render(){return n.dy`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,l.o)(this.metadata?.icons[0])}
          text=${(0,l.o)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(((t,e)=>this.getAddressTemplate(t,e)))}
      </wui-flex>
    `}getAddressTemplate(t,e){const i=this.labels?.get(t.address),o=a.RY.state.activeChain,s=a.MO.getConnectedConnectorId(o)===c.bq.CONNECTOR_ID.AUTH;return n.dy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${t.address}></wui-avatar>
          ${s?n.dy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(t.type)}"
                ?border=${!0}
              ></wui-icon-box>`:n.dy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${i||r.UiHelperUtil.getTruncateString({string:t.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[t.address]?`$${this.balances[t.address]?.toFixed(2)}`:n.dy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${t.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":n.dy`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${e}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(t.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(t){const e=a.RY.state.activeCaipNetwork,i=e?.chainNamespace,r=`${i}:${e?.id}:${t}`;a.AccountController.setCaipAddress(r,i),a.IN.close()}};d.styles=s,u([(0,o.SB)()],d.prototype,"allAccounts",void 0),u([(0,o.SB)()],d.prototype,"balances",void 0),d=u([(0,r.customElement)("w3m-switch-address-view")],d)},38980:function(t,e,i){var a=i(77703),r=i(49077),n=r.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`,o=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let s=class extends r.oi{render(){return r.dy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=n,s=o([(0,a.customElement)("w3m-transactions-view")],s)},98243:function(t,e,i){var a=i(75104),r=i(77703),n=i(49077),o=i(53417),s=i(80236),l=n.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,c=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let u=class extends n.oi{constructor(){super(...arguments),this.swapUnsupportedChain=a.RouterController.state.data?.swapUnsupportedChain,this.disconecting=!1}render(){return n.dy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?n.dy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:n.dy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const t=a.RY.getAllRequestedCaipNetworks(),e=a.RY.getAllApprovedCaipNetworkIds(),i=a.j1.sortRequestedNetworks(e,t);return(this.swapUnsupportedChain?i.filter((t=>a.bq.SWAP_SUPPORTED_NETWORKS.includes(t.caipNetworkId))):i).map((t=>n.dy`
        <wui-list-network
          imageSrc=${(0,s.o)(a.fz.getNetworkImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(t)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await a.ConnectionController.disconnect(),a.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),a.IN.close()}catch{a.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),a.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(t){const e=a.AccountController.state.caipAddress,i=a.RY.getAllApprovedCaipNetworkIds(),r=(a.RY.getNetworkProp("supportsAllNetworks",t.chainNamespace),a.RouterController.state.data);e?i?.includes(t.caipNetworkId)?await a.RY.switchActiveNetwork(t):a.RouterController.push("SwitchNetwork",{...r,network:t}):e||(a.RY.setActiveCaipNetwork(t),a.RouterController.push("Connect"))}};u.styles=l,c([(0,o.SB)()],u.prototype,"disconecting",void 0),u=c([(0,r.customElement)("w3m-unsupported-chain-view")],u)},46477:function(t,e,i){var a=i(77703),r=i(57190),n=i(75104),o=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let s=class extends r.m{constructor(){super(),this.email=n.RouterController.state.data?.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n.RouterController.replace("UpdateEmailSecondaryOtp",n.RouterController.state.data))}catch(t){throw n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:n.j1.parseError(t)}}),t}},this.onStartOver=()=>{n.RouterController.replace("UpdateEmailWallet",n.RouterController.state.data)}}};s=o([(0,a.customElement)("w3m-update-email-primary-otp-view")],s)},66934:function(t,e,i){var a=i(77703),r=i(57190),n=i(75104),o=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let s=class extends r.m{constructor(){super(),this.email=n.RouterController.state.data?.newEmail,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n.RouterController.reset("Account"))}catch(t){throw n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:n.j1.parseError(t)}}),t}},this.onStartOver=()=>{n.RouterController.replace("UpdateEmailWallet",n.RouterController.state.data)}}};s=o([(0,a.customElement)("w3m-update-email-secondary-otp-view")],s)},98659:function(t,e,i){var a=i(75104),r=i(77703),n=i(49077),o=i(53417),s=i(45924),l=n.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,c=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let u=class extends n.oi{constructor(){super(...arguments),this.formRef=(0,s.V)(),this.initialEmail=a.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(t=>{"Enter"===t.key&&this.onSubmitEmail(t)}))}render(){const t=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return n.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,s.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${a.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!t}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(t){this.email=t.detail}async onSubmitEmail(t){try{if(this.loading)return;this.loading=!0,t.preventDefault();const e=a.ConnectorController.getAuthConnector();if(!e)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await e.provider.updateEmail({email:this.email});a.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?a.RouterController.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):a.RouterController.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){a.SnackController.showError(t),this.loading=!1}}};u.styles=l,c([(0,o.SB)()],u.prototype,"email",void 0),c([(0,o.SB)()],u.prototype,"loading",void 0),u=c([(0,r.customElement)("w3m-update-email-wallet-view")],u)},2673:function(t,e,i){var a=i(77703),r=i(75104),n=i(49077),o=function(t,e,i,a){var r,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let s=class extends n.oi{render(){return n.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${r.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${r.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};s=o([(0,a.customElement)("w3m-upgrade-wallet-view")],s)}}]);