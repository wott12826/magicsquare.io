"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4071],{68607:function(e,t,n){var o=n(77703),r=n(49077),l=n(53417),i=r.iv`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,s=n(75104),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};const a={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let u=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.open=s.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(s.AlertController.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=s.AlertController.state,n=a[t];return r.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${n?.backgroundColor}
        iconColor=${n?.iconColor}
        icon=${n?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};u.styles=i,c([(0,l.SB)()],u.prototype,"open",void 0),u=c([(0,o.customElement)("w3m-alertbar")],u)},9292:function(e,t,n){var o=n(77703),r=n(49077),l=n(53417),i=n(80236),s=n(75104),c=r.iv`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,a=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let u=class extends r.oi{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return r.dy`
      <button ontouchstart>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,i.o)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?r.dy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():r.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,i.o)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return r.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=s.fz.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await s.fz.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};u.styles=c,a([(0,l.SB)()],u.prototype,"visible",void 0),a([(0,l.SB)()],u.prototype,"imageSrc",void 0),a([(0,l.SB)()],u.prototype,"imageLoading",void 0),a([(0,l.Cb)()],u.prototype,"wallet",void 0),u=a([(0,o.customElement)("w3m-all-wallets-list-item")],u)},49541:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=l.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,a=n(17135),u=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};const d="local-paginator";let p=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!o.ApiController.state.wallets.length,this.wallets=o.ApiController.state.wallets,this.recommended=o.ApiController.state.recommended,this.featured=o.ApiController.state.featured,this.unsubscribe.push(o.ApiController.subscribeKey("wallets",(e=>this.wallets=e)),o.ApiController.subscribeKey("recommended",(e=>this.recommended=e)),o.ApiController.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return l.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await o.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>l.dy`
        <wui-card-select-loader type="wallet" id=${(0,s.o)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return a.J.markWalletsAsInstalled(e).map((e=>l.dy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:r}=o.ApiController.state,l=window.innerWidth<352?3:4,i=e.length+t.length;let s=Math.ceil(i/l)*l-i+l;return s-=e.length?n.length%l:0,0===r&&n.length>0?null:0===r||[...n,...e,...t].length<r?this.shimmerTemplate(s,d):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${d}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:n}=o.ApiController.state;n.length<t&&o.ApiController.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const t=o.ConnectorController.getConnector(e.id,e.rdns);t?o.RouterController.push("ConnectingExternal",{connector:t}):o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};p.styles=c,u([(0,i.SB)()],p.prototype,"initial",void 0),u([(0,i.SB)()],p.prototype,"wallets",void 0),u([(0,i.SB)()],p.prototype,"recommended",void 0),u([(0,i.SB)()],p.prototype,"featured",void 0),p=u([(0,r.customElement)("w3m-all-wallets-list")],p)},30501:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=l.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,c=n(17135),a=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let u=class extends l.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await o.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=o.ApiController.state,t=c.J.markWalletsAsInstalled(e);return e.length?l.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map((e=>l.dy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:l.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=o.ConnectorController.getConnector(e.id,e.rdns);t?o.RouterController.push("ConnectingExternal",{connector:t}):o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};u.styles=s,a([(0,i.SB)()],u.prototype,"loading",void 0),a([(0,i.Cb)()],u.prototype,"query",void 0),a([(0,i.Cb)()],u.prototype,"badge",void 0),u=a([(0,r.customElement)("w3m-all-wallets-search")],u)},41410:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.count=o.ApiController.state.count,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)),o.ApiController.subscribeKey("count",(e=>this.count=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=o.OptionsController.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!o.j1.isMobile())return null;const n=o.ApiController.state.featured.length,r=this.count+n,i=r<10?r:10*Math.floor(r/10),c=i<r?`${i}+`:`${i}`;return l.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,s.o)(this.tabIdx)}
      ></wui-list-wallet>
    `}onAllWallets(){o.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),o.RouterController.push("AllWallets")}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),c([(0,i.SB)()],a.prototype,"count",void 0),a=c([(0,r.customElement)("w3m-all-wallets-widget")],a)},37233:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"ANNOUNCED"===e.type));return e?.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>e.info?.rdns&&o.ApiController.state.excludedRDNS&&o.ApiController.state.excludedRDNS.includes(e?.info?.rdns)?null:l.dy`
            <wui-list-wallet
              imageSrc=${(0,s.o)(o.fz.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${(0,s.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?o.j1.isMobile()?o.RouterController.push("AllWallets"):o.RouterController.push("ConnectingWalletConnect"):o.RouterController.push("ConnectingExternal",{connector:e})}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),a=c([(0,r.customElement)("w3m-connect-announced-widget")],a)},77515:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{customWallets:e}=o.OptionsController.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return l.dy`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>l.dy`
          <wui-list-wallet
            imageSrc=${(0,s.o)(o.fz.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,s.o)(this.tabIdx)}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=o.MO.getRecentWallets(),n=this.connectors.map((e=>e.info?.rdns)).filter(Boolean),r=t.map((e=>e.rdns)).filter(Boolean),l=n.concat(r);if(l.includes("io.metamask.mobile")&&o.j1.isMobile()){const e=l.indexOf("io.metamask.mobile");l[e]="io.metamask"}return e.filter((e=>!l.includes(String(e?.rdns))))}onConnectWallet(e){o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),a=c([(0,r.customElement)("w3m-connect-custom-widget")],a)},72401:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"EXTERNAL"===e.type)).filter((e=>"coinbaseWalletSDK"!==e.id));return e?.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>l.dy`
            <wui-list-wallet
              imageSrc=${(0,s.o)(o.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,s.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){o.RouterController.push("ConnectingExternal",{connector:e})}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),a=c([(0,r.customElement)("w3m-connect-external-widget")],a)},99434:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(80236),s=n(17135),c=n(53417),a=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let u=class extends l.oi{constructor(){super(...arguments),this.unsubscribe=[],this.tabIdx=void 0}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{featured:e}=o.ApiController.state;if(!e.length)return this.style.cssText="display: none",null;const t=s.J.filterOutDuplicateWallets(e);return l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((e=>l.dy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${(0,i.o)(o.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,i.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnectWallet(e){const t=o.ConnectorController.getConnector(e.id,e.rdns);t?o.RouterController.push("ConnectingExternal",{connector:t}):o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};a([(0,c.Cb)()],u.prototype,"tabIdx",void 0),u=a([(0,r.customElement)("w3m-connect-featured-widget")],u)},50508:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"INJECTED"===e.type));return!e?.length||1===e.length&&"Browser Wallet"===e[0]?.name&&!o.j1.isMobile()?(this.style.cssText="display: none",null):l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>{if(!o.j1.isMobile()&&"Browser Wallet"===e.name)return null;const t=e.info?.rdns;return t||o.ConnectionController.checkInstalled(void 0)?t&&o.ApiController.state.excludedRDNS&&o.ApiController.state.excludedRDNS.includes(t)?null:l.dy`
            <wui-list-wallet
              imageSrc=${(0,s.o)(o.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,s.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `:(this.style.cssText="display: none",null)}))}
      </wui-flex>
    `}onConnector(e){o.RY.setActiveConnector(e),o.RouterController.push("ConnectingExternal",{connector:e})}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),a=c([(0,r.customElement)("w3m-connect-injected-widget")],a)},40739:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name));return e?.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>l.dy`
            <wui-list-wallet
              imageSrc=${(0,s.o)(o.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,s.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){o.RY.setActiveConnector(e),o.RouterController.push("ConnectingMultiChain")}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),a=c([(0,r.customElement)("w3m-connect-multi-chain-widget")],a)},92340:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}render(){const e=o.MO.getRecentWallets().filter((e=>!this.connectors.some((t=>t.id===e.id||t.name===e.name))));return e.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>l.dy`
            <wui-list-wallet
              imageSrc=${(0,s.o)(o.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,s.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),a=c([(0,r.customElement)("w3m-connect-recent-widget")],a)},41059:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=n(17135),a=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let u=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.connectors.find((e=>"walletConnect"===e.id)))return null;const{recommended:e}=o.ApiController.state,{customWallets:t,featuredWalletIds:n}=o.OptionsController.state,{connectors:r}=o.ConnectorController.state,i=o.MO.getRecentWallets(),a=r.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type)).filter((e=>"Browser Wallet"!==e.name));if(n||t||!e.length)return this.style.cssText="display: none",null;const u=a.length+i.length,d=Math.max(0,2-u),p=c.J.filterOutDuplicateWallets(e).slice(0,d);return p.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${p.map((e=>l.dy`
            <wui-list-wallet
              imageSrc=${(0,s.o)(o.fz.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,s.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){const t=o.ConnectorController.getConnector(e.id,e.rdns);t?o.RouterController.push("ConnectingExternal",{connector:t}):o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};a([(0,i.Cb)()],u.prototype,"tabIdx",void 0),a([(0,i.SB)()],u.prototype,"connectors",void 0),u=a([(0,r.customElement)("w3m-connect-recommended-widget")],u)},34495:function(e,t,n){var o=n(75104),r=n(77703),l=n(49077),i=n(53417),s=n(80236),c=function(e,t,n,o){var r,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(l<3?r(i):l>3?r(t,n,i):r(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let a=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=o.ConnectorController.state.connectors,this.connectorImages=o.WM.state.connectorImages,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)),o.WM.subscribeKey("connectorImages",(e=>this.connectorImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(o.j1.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find((e=>"walletConnect"===e.id));if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[e?.imageId??""];return l.dy`
      <wui-list-wallet
        imageSrc=${(0,s.o)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,s.o)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){o.RY.setActiveConnector(e),o.RouterController.push("ConnectingWalletConnect")}};c([(0,i.Cb)()],a.prototype,"tabIdx",void 0),c([(0,i.SB)()],a.prototype,"connectors",void 0),c([(0,i.SB)()],a.prototype,"connectorImages",void 0),a=c([(0,r.customElement)("w3m-connect-walletconnect-widget")],a)}}]);
//# sourceMappingURL=4071-e780fa866a054d38.js.map