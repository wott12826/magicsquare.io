"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64168],{21580:function(t,e,o){o.d(e,{C:function(){return r}});var i=o(675104),n=o(217135);const r={getConnectorsByType(t){const{featured:e,recommended:o}=i.ApiController.state,{customWallets:r}=i.OptionsController.state,s=i.MO.getRecentWallets(),a=n.J.filterOutDuplicateWallets(o),l=n.J.filterOutDuplicateWallets(e),c=t.filter((t=>"MULTI_CHAIN"===t.type)),u=t.filter((t=>"ANNOUNCED"===t.type)),d=t.filter((t=>"INJECTED"===t.type));return{custom:r,recent:s,external:t.filter((t=>"EXTERNAL"===t.type)),multiChain:c,announced:u,injected:d,recommended:a,featured:l}},showConnector(t){if("INJECTED"===t.type){if(!i.j1.isMobile()&&"Browser Wallet"===t.name)return!1;const e=t.info?.rdns;if(!e&&!i.ConnectionController.checkInstalled())return!1;if(e&&i.ApiController.state.excludedRDNS&&i.ApiController.state.excludedRDNS.includes(e))return!1}if("ANNOUNCED"===t.type){const e=t.info?.rdns;if(e&&i.ApiController.state.excludedRDNS.includes(e))return!1}return!0}}},883179:function(t,e,o){o.d(e,{b:function(){return i}});const i={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:o(301323).env.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}}},217135:function(t,e,o){o.d(e,{J:function(){return s}});var i=o(675104),n=o(21580),r=o(883179);const s={filterOutDuplicatesByRDNS(t){const e=i.OptionsController.state.enableEIP6963?i.ConnectorController.state.connectors:[],o=i.MO.getRecentWallets(),n=e.map((t=>t.info?.rdns)).filter(Boolean),r=o.map((t=>t.rdns)).filter(Boolean),s=n.concat(r);if(s.includes("io.metamask.mobile")&&i.j1.isMobile()){const t=s.indexOf("io.metamask.mobile");s[t]="io.metamask"}return t.filter((t=>!s.includes(String(t?.rdns))))},filterOutDuplicatesByIds(t){const e=i.ConnectorController.state.connectors.filter((t=>"ANNOUNCED"===t.type||"INJECTED"===t.type)),o=i.MO.getRecentWallets(),n=e.map((t=>t.explorerId)),r=o.map((t=>t.id)),s=n.concat(r);return t.filter((t=>!s.includes(t?.id)))},filterOutDuplicateWallets(t){const e=this.filterOutDuplicatesByRDNS(t);return this.filterOutDuplicatesByIds(e)},markWalletsAsInstalled(t){const{connectors:e}=i.ConnectorController.state,o=e.filter((t=>"ANNOUNCED"===t.type)).reduce(((t,e)=>e.info?.rdns?(t[e.info.rdns]=!0,t):t),{});return t.map((t=>({...t,installed:Boolean(t.rdns)&&Boolean(o[t.rdns??""])}))).sort(((t,e)=>Number(e.installed)-Number(t.installed)))},getConnectOrderMethod(t,e){const o=t?.connectMethodsOrder||i.OptionsController.state.features?.connectMethodsOrder,s=e||i.ConnectorController.state.connectors;if(o)return o;const{injected:a,announced:l}=n.C.getConnectorsByType(s),c=a.filter(n.C.showConnector),u=l.filter(n.C.showConnector);return c.length||u.length?["wallet","email","social"]:r.b.DEFAULT_CONNECT_METHOD_ORDER}}},627551:function(t,e,o){o.d(e,{N:function(){return c}});var i=o(675104),n=o(949077),r=o(653417),s=o(680236),a=n.iv`
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
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
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
`,l=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};class c extends n.oi{constructor(){super(),this.wallet=i.RouterController.state.data?.wallet,this.connector=i.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=i.fz.getWalletImage(this.wallet)??i.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=i.ConnectionController.state.wcUri,this.error=i.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(i.ConnectionController.subscribeKey("wcUri",(t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),i.ConnectionController.subscribeKey("wcError",(t=>this.error=t)),i.ConnectionController.subscribeKey("buffering",(t=>this.buffering=t))),i.j1.isTelegram()&&i.j1.isIos()&&i.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let e=`Continue in ${this.name}`;return this.buffering&&(e="Connecting..."),this.error&&(e="Connection declined"),n.dy`
      <wui-flex
        data-error=${(0,s.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,s.o)(this.imageSrc)}></wui-wallet-image>

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
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?n.dy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?n.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const t=this.shadowRoot?.querySelector("wui-button");t?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(i.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const t=i.ThemeController.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return n.dy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(i.j1.copyToClopboard(this.uri),i.SnackController.showSuccess("Link copied"))}catch{i.SnackController.showError("Failed to copy")}}}c.styles=a,l([(0,r.SB)()],c.prototype,"isRetrying",void 0),l([(0,r.SB)()],c.prototype,"uri",void 0),l([(0,r.SB)()],c.prototype,"error",void 0),l([(0,r.SB)()],c.prototype,"ready",void 0),l([(0,r.SB)()],c.prototype,"showRetry",void 0),l([(0,r.SB)()],c.prototype,"secondaryBtnLabel",void 0),l([(0,r.SB)()],c.prototype,"secondaryLabel",void 0),l([(0,r.SB)()],c.prototype,"buffering",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"isMobile",void 0),l([(0,r.Cb)()],c.prototype,"onRetry",void 0)},257190:function(t,e,o){o.d(e,{m:function(){return u}});var i=o(577703),n=o(949077),r=o(675104),s=o(653417),a=n.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`,l=o(669270),c=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};let u=class extends n.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=l.$D.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=r.RouterController.state.data?.email,this.authConnector=r.ConnectorController.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=Boolean(this.timeoutTimeLeft),e=this.getFooterLabels(t);return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?n.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:n.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?n.dy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=l.$D.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=l.$D.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(t){try{this.loading||(this.otp=t.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(t){this.error=r.j1.parseError(t),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!r.ConnectorController.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),r.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){r.SnackController.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(t?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(t?`in ${this.timeoutTimeLeft}s`:"Code")}}};u.styles=a,c([(0,s.SB)()],u.prototype,"loading",void 0),c([(0,s.SB)()],u.prototype,"timeoutTimeLeft",void 0),c([(0,s.SB)()],u.prototype,"error",void 0),u=c([(0,i.customElement)("w3m-email-otp-widget")],u)},85067:function(t,e,o){var i=o(675104),n=o(577703),r=o(949077),s=o(653417),a=o(680236),l=o(669270),c=o(340081),u=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};let d=class extends r.oi{constructor(){super(),this.usubscribe=[],this.networkImages=i.WM.state.networkImages,this.address=i.AccountController.state.address,this.profileImage=i.AccountController.state.profileImage,this.profileName=i.AccountController.state.profileName,this.network=i.RY.state.activeCaipNetwork,this.preferredAccountType=i.AccountController.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(i.AccountController.subscribe((t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.preferredAccountType=t.preferredAccountType):i.IN.close()})),i.AccountController.subscribeKey("preferredAccountType",(t=>this.preferredAccountType=t)),i.RY.subscribeKey("activeCaipNetwork",(t=>{t?.id&&(this.network=t)})))}disconnectedCallback(){this.usubscribe.forEach((t=>t()))}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const t=this.networkImages[this.network?.assets?.imageId??""];return r.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,a.o)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${n.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
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
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${t?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,a.o)(t)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
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
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const t=this.network?.chainNamespace,e=i.MO.getConnectedConnectorId(t),o=i.ConnectorController.getAuthConnector();return i.RY.checkIfNamesSupported()&&o&&e===c.bq.CONNECTOR_ID.AUTH&&!this.profileName?r.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const t=this.network?.chainNamespace,e=i.MO.getConnectedConnectorId(t),o=i.ConnectorController.getAuthConnector(),{origin:n}=location;return!o||e!==c.bq.CONNECTOR_ID.AUTH||n.includes(i.bq.SECURE_SITE)?null:r.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const t=i.RY.getAllRequestedCaipNetworks(),e=!!t&&t.length>1,o=t?.find((({id:t})=>t===this.network?.id));return e||!o}onCopyAddress(){try{this.address&&(i.j1.copyToClopboard(this.address),i.SnackController.showSuccess("Address copied"))}catch{i.SnackController.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const t=this.network?.chainNamespace,e=i.RY.checkIfSmartAccountEnabled(),o=i.MO.getConnectedConnectorId(t);return i.ConnectorController.getAuthConnector()&&o===c.bq.CONNECTOR_ID.AUTH&&e?(this.switched||(this.text=this.preferredAccountType===l.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),r.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){i.RouterController.push("ChooseAccountName")}async changePreferredAccountType(){const t=i.RY.checkIfSmartAccountEnabled(),e=this.preferredAccountType!==l.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t?l.y_.ACCOUNT_TYPES.SMART_ACCOUNT:l.y_.ACCOUNT_TYPES.EOA;i.ConnectorController.getAuthConnector()&&(this.loading=!0,await i.ConnectionController.setPreferredAccountType(e),this.text=e===l.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,i.Si.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&i.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await i.ConnectionController.disconnect(),i.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),i.IN.close()}catch{i.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),i.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){i.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),i.RouterController.push("UpgradeEmailWallet")}};u([(0,s.SB)()],d.prototype,"address",void 0),u([(0,s.SB)()],d.prototype,"profileImage",void 0),u([(0,s.SB)()],d.prototype,"profileName",void 0),u([(0,s.SB)()],d.prototype,"network",void 0),u([(0,s.SB)()],d.prototype,"preferredAccountType",void 0),u([(0,s.SB)()],d.prototype,"disconnecting",void 0),u([(0,s.SB)()],d.prototype,"loading",void 0),u([(0,s.SB)()],d.prototype,"switched",void 0),u([(0,s.SB)()],d.prototype,"text",void 0),d=u([(0,n.customElement)("w3m-account-settings-view")],d)},547833:function(t,e,o){var i=o(675104),n=o(577703),r=o(949077),s=o(340081),a=o(653417),l=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};let c=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.namespace=i.RY.state.activeChain,this.unsubscribe.push(i.RY.subscribeKey("activeChain",(t=>{this.namespace=t})))}render(){if(!this.namespace)return null;const t=i.MO.getConnectedConnectorId(this.namespace),e=i.ConnectorController.getAuthConnector();return r.dy`
      ${e&&t===s.bq.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return r.dy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return r.dy`<w3m-account-default-widget></w3m-account-default-widget>`}};l([(0,a.SB)()],c.prototype,"namespace",void 0),c=l([(0,n.customElement)("w3m-account-view")],c)}}]);
//# sourceMappingURL=64168-0ac54511b8015734.js.map