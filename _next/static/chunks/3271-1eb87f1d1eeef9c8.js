"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3271],{38822:function(e,r,n){n.d(r,{O:function(){return b}});var t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,i=Math.ceil,o=Math.floor,s="[BigNumber Error] ",u=s+"Number primitive has more than 15 significant digits: ",f=1e14,l=14,c=9007199254740991,a=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],h=1e7,g=1e9;function p(e){var r=0|e;return e>0||e===r?r:r-1}function w(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=l-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function m(e,r){var n,t,i=e.c,o=r.c,s=e.s,u=r.s,f=e.e,l=r.e;if(!s||!u)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-u:s;if(s!=u)return s;if(n=s<0,t=f==l,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>l^n?1:-1;for(u=(f=i.length)<(l=o.length)?f:l,s=0;s<u;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return f==l?0:f>l^n?1:-1}function d(e,r,n,t){if(e<r||e>n||e!==o(e))throw Error(s+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var r=e.c.length-1;return p(e.e/l)==r&&e.c[r]%2!=0}function N(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function O(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}var b=function e(r){var n,b,y,E,A,S,_,R,D,P,B=z.prototype={constructor:z,toString:null,valueOf:null},L=new z(1),U=20,x=4,C=-7,I=21,T=-1e7,M=1e7,k=!1,G=1,F=0,j={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},q="0123456789abcdefghijklmnopqrstuvwxyz",$=!0;function z(e,r){var n,i,s,f,a,h,g,p,w=this;if(!(w instanceof z))return new z(e,r);if(null==r){if(e&&!0===e._isBigNumber)return w.s=e.s,void(!e.c||e.e>M?w.c=w.e=null:e.e<T?w.c=[w.e=0]:(w.e=e.e,w.c=e.c.slice()));if((h="number"==typeof e)&&0*e==0){if(w.s=1/e<0?(e=-e,-1):1,e===~~e){for(f=0,a=e;a>=10;a/=10,f++);return void(f>M?w.c=w.e=null:(w.e=f,w.c=[e]))}p=String(e)}else{if(!t.test(p=String(e)))return y(w,p,h);w.s=45==p.charCodeAt(0)?(p=p.slice(1),-1):1}(f=p.indexOf("."))>-1&&(p=p.replace(".","")),(a=p.search(/e/i))>0?(f<0&&(f=a),f+=+p.slice(a+1),p=p.substring(0,a)):f<0&&(f=p.length)}else{if(d(r,2,q.length,"Base"),10==r&&$)return X(w=new z(e),U+w.e+1,x);if(p=String(e),h="number"==typeof e){if(0*e!=0)return y(w,p,h,r);if(w.s=1/e<0?(p=p.slice(1),-1):1,z.DEBUG&&p.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else w.s=45===p.charCodeAt(0)?(p=p.slice(1),-1):1;for(n=q.slice(0,r),f=a=0,g=p.length;a<g;a++)if(n.indexOf(i=p.charAt(a))<0){if("."==i){if(a>f){f=g;continue}}else if(!s&&(p==p.toUpperCase()&&(p=p.toLowerCase())||p==p.toLowerCase()&&(p=p.toUpperCase()))){s=!0,a=-1,f=0;continue}return y(w,String(e),h,r)}h=!1,(f=(p=b(p,r,10,w.s)).indexOf("."))>-1?p=p.replace(".",""):f=p.length}for(a=0;48===p.charCodeAt(a);a++);for(g=p.length;48===p.charCodeAt(--g););if(p=p.slice(a,++g)){if(g-=a,h&&z.DEBUG&&g>15&&(e>c||e!==o(e)))throw Error(u+w.s*e);if((f=f-a-1)>M)w.c=w.e=null;else if(f<T)w.c=[w.e=0];else{if(w.e=f,w.c=[],a=(f+1)%l,f<0&&(a+=l),a<g){for(a&&w.c.push(+p.slice(0,a)),g-=l;a<g;)w.c.push(+p.slice(a,a+=l));a=l-(p=p.slice(a)).length}else a-=g;for(;a--;p+="0");w.c.push(+p)}}else w.c=[w.e=0]}function H(e,r,n,t){var i,o,s,u,f;if(null==n?n=x:d(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)f=w(e.c),f=1==t||2==t&&(s<=C||s>=I)?N(f,s):O(f,s,"0");else if(o=(e=X(new z(e),r,n)).e,u=(f=w(e.c)).length,1==t||2==t&&(r<=o||o<=C)){for(;u<r;f+="0",u++);f=N(f,o)}else if(r-=s,f=O(f,o,"0"),o+1>u){if(--r>0)for(f+=".";r--;f+="0");}else if((r+=o-u)>0)for(o+1==u&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function V(e,r){for(var n,t,i=1,o=new z(e[0]);i<e.length;i++)(!(t=new z(e[i])).s||(n=m(o,t))===r||0===n&&o.s===r)&&(o=t);return o}function W(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*l-1)>M?e.c=e.e=null:n<T?e.c=[e.e=0]:(e.e=n,e.c=r),e}function X(e,r,n,t){var s,u,c,h,g,p,w,m=e.c,d=a;if(m){e:{for(s=1,h=m[0];h>=10;h/=10,s++);if((u=r-s)<0)u+=l,c=r,g=m[p=0],w=o(g/d[s-c-1]%10);else if((p=i((u+1)/l))>=m.length){if(!t)break e;for(;m.length<=p;m.push(0));g=w=0,s=1,c=(u%=l)-l+1}else{for(g=h=m[p],s=1;h>=10;h/=10,s++);w=(c=(u%=l)-l+s)<0?0:o(g/d[s-c-1]%10)}if(t=t||r<0||null!=m[p+1]||(c<0?g:g%d[s-c-1]),t=n<4?(w||t)&&(0==n||n==(e.s<0?3:2)):w>5||5==w&&(4==n||t||6==n&&(u>0?c>0?g/d[s-c]:0:m[p-1])%10&1||n==(e.s<0?8:7)),r<1||!m[0])return m.length=0,t?(r-=e.e+1,m[0]=d[(l-r%l)%l],e.e=-r||0):m[0]=e.e=0,e;if(0==u?(m.length=p,h=1,p--):(m.length=p+1,h=d[l-u],m[p]=c>0?o(g/d[s-c]%d[c])*h:0),t)for(;;){if(0==p){for(u=1,c=m[0];c>=10;c/=10,u++);for(c=m[0]+=h,h=1;c>=10;c/=10,h++);u!=h&&(e.e++,m[0]==f&&(m[0]=1));break}if(m[p]+=h,m[p]!=f)break;m[p--]=0,h=1}for(u=m.length;0===m[--u];m.pop());}e.e>M?e.c=e.e=null:e.e<T&&(e.c=[e.e=0])}return e}function Y(e){var r,n=e.e;return null===n?e.toString():(r=w(e.c),r=n<=C||n>=I?N(r,n):O(r,n,"0"),e.s<0?"-"+r:r)}return z.clone=e,z.ROUND_UP=0,z.ROUND_DOWN=1,z.ROUND_CEIL=2,z.ROUND_FLOOR=3,z.ROUND_HALF_UP=4,z.ROUND_HALF_DOWN=5,z.ROUND_HALF_EVEN=6,z.ROUND_HALF_CEIL=7,z.ROUND_HALF_FLOOR=8,z.EUCLID=9,z.config=z.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(s+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(d(n=e[r],0,g,r),U=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(d(n=e[r],0,8,r),x=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(d(n[0],-g,0,r),d(n[1],0,g,r),C=n[0],I=n[1]):(d(n,-g,g,r),C=-(I=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)d(n[0],-g,-1,r),d(n[1],1,g,r),T=n[0],M=n[1];else{if(d(n,-g,g,r),!n)throw Error(s+r+" cannot be zero: "+n);T=-(M=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(s+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw k=!n,Error(s+"crypto unavailable");k=n}else k=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(d(n=e[r],0,9,r),G=n),e.hasOwnProperty(r="POW_PRECISION")&&(d(n=e[r],0,g,r),F=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(s+r+" not an object: "+n);j=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(s+r+" invalid: "+n);$="0123456789"==n.slice(0,10),q=n}}return{DECIMAL_PLACES:U,ROUNDING_MODE:x,EXPONENTIAL_AT:[C,I],RANGE:[T,M],CRYPTO:k,MODULO_MODE:G,POW_PRECISION:F,FORMAT:j,ALPHABET:q}},z.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!z.DEBUG)return!0;var r,n,t=e.c,i=e.e,u=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===u||-1===u)&&i>=-g&&i<=g&&i===o(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if((r=(i+1)%l)<1&&(r+=l),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||n>=f||n!==o(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===u||1===u||-1===u))return!0;throw Error(s+"Invalid BigNumber: "+e)},z.maximum=z.max=function(){return V(arguments,-1)},z.minimum=z.min=function(){return V(arguments,1)},z.random=(E=9007199254740992,A=Math.random()*E&2097151?function(){return o(Math.random()*E)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,n,t,u,f,c=0,h=[],p=new z(L);if(null==e?e=U:d(e,0,g),u=i(e/l),k)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(u*=2));c<u;)(f=131072*r[c]+(r[c+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),r[c]=n[0],r[c+1]=n[1]):(h.push(f%1e14),c+=2);c=u/2}else{if(!crypto.randomBytes)throw k=!1,Error(s+"crypto unavailable");for(r=crypto.randomBytes(u*=7);c<u;)(f=281474976710656*(31&r[c])+1099511627776*r[c+1]+4294967296*r[c+2]+16777216*r[c+3]+(r[c+4]<<16)+(r[c+5]<<8)+r[c+6])>=9e15?crypto.randomBytes(7).copy(r,c):(h.push(f%1e14),c+=7);c=u/7}if(!k)for(;c<u;)(f=A())<9e15&&(h[c++]=f%1e14);for(u=h[--c],e%=l,u&&e&&(f=a[l-e],h[c]=o(u/f)*f);0===h[c];h.pop(),c--);if(c<0)h=[t=0];else{for(t=-1;0===h[0];h.splice(0,1),t-=l);for(c=1,f=h[0];f>=10;f/=10,c++);c<l&&(t-=l-c)}return p.e=t,p.c=h,p}),z.sum=function(){for(var e=1,r=arguments,n=new z(r[0]);e<r.length;)n=n.plus(r[e++]);return n},b=function(){var e="0123456789";function r(e,r,n,t){for(var i,o,s=[0],u=0,f=e.length;u<f;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(u++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(t,i,o,s,u){var f,l,c,a,h,g,p,m,d=t.indexOf("."),v=U,N=x;for(d>=0&&(a=F,F=0,t=t.replace(".",""),g=(m=new z(i)).pow(t.length-d),F=a,m.c=r(O(w(g.c),g.e,"0"),10,o,e),m.e=m.c.length),c=a=(p=r(t,i,o,u?(f=q,e):(f=e,q))).length;0==p[--a];p.pop());if(!p[0])return f.charAt(0);if(d<0?--c:(g.c=p,g.e=c,g.s=s,p=(g=n(g,m,v,N,o)).c,h=g.r,c=g.e),d=p[l=c+v+1],a=o/2,h=h||l<0||null!=p[l+1],h=N<4?(null!=d||h)&&(0==N||N==(g.s<0?3:2)):d>a||d==a&&(4==N||h||6==N&&1&p[l-1]||N==(g.s<0?8:7)),l<1||!p[0])t=h?O(f.charAt(1),-v,f.charAt(0)):f.charAt(0);else{if(p.length=l,h)for(--o;++p[--l]>o;)p[l]=0,l||(++c,p=[1].concat(p));for(a=p.length;!p[--a];);for(d=0,t="";d<=a;t+=f.charAt(p[d++]));t=O(t,c,f.charAt(0))}return t}}(),n=function(){function e(e,r,n){var t,i,o,s,u=0,f=e.length,l=r%h,c=r/h|0;for(e=e.slice();f--;)u=((i=l*(o=e[f]%h)+(t=c*o+(s=e[f]/h|0)*l)%h*h+u)/n|0)+(t/h|0)+c*s,e[f]=i%n;return u&&(e=[u].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,s,u,c){var a,h,g,w,m,d,v,N,O,b,y,E,A,S,_,R,D,P=t.s==i.s?1:-1,B=t.c,L=i.c;if(!(B&&B[0]&&L&&L[0]))return new z(t.s&&i.s&&(B?!L||B[0]!=L[0]:L)?B&&0==B[0]||!L?0*P:P/0:NaN);for(O=(N=new z(P)).c=[],P=s+(h=t.e-i.e)+1,c||(c=f,h=p(t.e/l)-p(i.e/l),P=P/l|0),g=0;L[g]==(B[g]||0);g++);if(L[g]>(B[g]||0)&&h--,P<0)O.push(1),w=!0;else{for(S=B.length,R=L.length,g=0,P+=2,(m=o(c/(L[0]+1)))>1&&(L=e(L,m,c),B=e(B,m,c),R=L.length,S=B.length),A=R,y=(b=B.slice(0,R)).length;y<R;b[y++]=0);D=L.slice(),D=[0].concat(D),_=L[0],L[1]>=c/2&&_++;do{if(m=0,(a=r(L,b,R,y))<0){if(E=b[0],R!=y&&(E=E*c+(b[1]||0)),(m=o(E/_))>1)for(m>=c&&(m=c-1),v=(d=e(L,m,c)).length,y=b.length;1==r(d,b,v,y);)m--,n(d,R<v?D:L,v,c),v=d.length,a=1;else 0==m&&(a=m=1),v=(d=L.slice()).length;if(v<y&&(d=[0].concat(d)),n(b,d,y,c),y=b.length,-1==a)for(;r(L,b,R,y)<1;)m++,n(b,R<y?D:L,y,c),y=b.length}else 0===a&&(m++,b=[0]);O[g++]=m,b[0]?b[y++]=B[A]||0:(b=[B[A]],y=1)}while((A++<S||null!=b[0])&&P--);w=null!=b[0],O[0]||O.splice(0,1)}if(c==f){for(g=1,P=O[0];P>=10;P/=10,g++);X(N,s+(N.e=g+h*l-1)+1,u,w)}else N.e=h,N.r=+w;return N}}(),S=/^(-?)0([xbo])(?=\w[\w.]*$)/i,_=/^([^.]+)\.$/,R=/^\.([^.]+)$/,D=/^-?(Infinity|NaN)$/,P=/^\s*\+(?=[\w.])|^\s+|\s+$/g,y=function(e,r,n,t){var i,o=n?r:r.replace(P,"");if(D.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!n&&(o=o.replace(S,(function(e,r,n){return i="x"==(n=n.toLowerCase())?16:"b"==n?2:8,t&&t!=i?e:r})),t&&(i=t,o=o.replace(_,"$1").replace(R,"0.$1")),r!=o))return new z(o,i);if(z.DEBUG)throw Error(s+"Not a"+(t?" base "+t:"")+" number: "+r);e.s=null}e.c=e.e=null},B.absoluteValue=B.abs=function(){var e=new z(this);return e.s<0&&(e.s=1),e},B.comparedTo=function(e,r){return m(this,new z(e,r))},B.decimalPlaces=B.dp=function(e,r){var n,t,i,o=this;if(null!=e)return d(e,0,g),null==r?r=x:d(r,0,8),X(new z(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-p(this.e/l))*l,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},B.dividedBy=B.div=function(e,r){return n(this,new z(e,r),U,x)},B.dividedToIntegerBy=B.idiv=function(e,r){return n(this,new z(e,r),0,1)},B.exponentiatedBy=B.pow=function(e,r){var n,t,u,f,c,a,h,g,p=this;if((e=new z(e)).c&&!e.isInteger())throw Error(s+"Exponent not an integer: "+Y(e));if(null!=r&&(r=new z(r)),c=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return g=new z(Math.pow(+Y(p),c?e.s*(2-v(e)):+Y(e))),r?g.mod(r):g;if(a=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new z(NaN);(t=!a&&p.isInteger()&&r.isInteger())&&(p=p.mod(r))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||c&&p.c[1]>=24e7:p.c[0]<8e13||c&&p.c[0]<=9999975e7)))return f=p.s<0&&v(e)?-0:0,p.e>-1&&(f=1/f),new z(a?1/f:f);F&&(f=i(F/l+2))}for(c?(n=new z(.5),a&&(e.s=1),h=v(e)):h=(u=Math.abs(+Y(e)))%2,g=new z(L);;){if(h){if(!(g=g.times(p)).c)break;f?g.c.length>f&&(g.c.length=f):t&&(g=g.mod(r))}if(u){if(0===(u=o(u/2)))break;h=u%2}else if(X(e=e.times(n),e.e+1,1),e.e>14)h=v(e);else{if(0===(u=+Y(e)))break;h=u%2}p=p.times(p),f?p.c&&p.c.length>f&&(p.c.length=f):t&&(p=p.mod(r))}return t?g:(a&&(g=L.div(g)),r?g.mod(r):f?X(g,F,x,undefined):g)},B.integerValue=function(e){var r=new z(this);return null==e?e=x:d(e,0,8),X(r,r.e+1,e)},B.isEqualTo=B.eq=function(e,r){return 0===m(this,new z(e,r))},B.isFinite=function(){return!!this.c},B.isGreaterThan=B.gt=function(e,r){return m(this,new z(e,r))>0},B.isGreaterThanOrEqualTo=B.gte=function(e,r){return 1===(r=m(this,new z(e,r)))||0===r},B.isInteger=function(){return!!this.c&&p(this.e/l)>this.c.length-2},B.isLessThan=B.lt=function(e,r){return m(this,new z(e,r))<0},B.isLessThanOrEqualTo=B.lte=function(e,r){return-1===(r=m(this,new z(e,r)))||0===r},B.isNaN=function(){return!this.s},B.isNegative=function(){return this.s<0},B.isPositive=function(){return this.s>0},B.isZero=function(){return!!this.c&&0==this.c[0]},B.minus=function(e,r){var n,t,i,o,s=this,u=s.s;if(r=(e=new z(e,r)).s,!u||!r)return new z(NaN);if(u!=r)return e.s=-r,s.plus(e);var c=s.e/l,a=e.e/l,h=s.c,g=e.c;if(!c||!a){if(!h||!g)return h?(e.s=-r,e):new z(g?s:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new z(h[0]?s:3==x?-0:0)}if(c=p(c),a=p(a),h=h.slice(),u=c-a){for((o=u<0)?(u=-u,i=h):(a=c,i=g),i.reverse(),r=u;r--;i.push(0));i.reverse()}else for(t=(o=(u=h.length)<(r=g.length))?u:r,u=r=0;r<t;r++)if(h[r]!=g[r]){o=h[r]<g[r];break}if(o&&(i=h,h=g,g=i,e.s=-e.s),(r=(t=g.length)-(n=h.length))>0)for(;r--;h[n++]=0);for(r=f-1;t>u;){if(h[--t]<g[t]){for(n=t;n&&!h[--n];h[n]=r);--h[n],h[t]+=f}h[t]-=g[t]}for(;0==h[0];h.splice(0,1),--a);return h[0]?W(e,h,a):(e.s=3==x?-1:1,e.c=[e.e=0],e)},B.modulo=B.mod=function(e,r){var t,i,o=this;return e=new z(e,r),!o.c||!e.s||e.c&&!e.c[0]?new z(NaN):!e.c||o.c&&!o.c[0]?new z(o):(9==G?(i=e.s,e.s=1,t=n(o,e,0,3),e.s=i,t.s*=i):t=n(o,e,0,G),(e=o.minus(t.times(e))).c[0]||1!=G||(e.s=o.s),e)},B.multipliedBy=B.times=function(e,r){var n,t,i,o,s,u,c,a,g,w,m,d,v,N,O,b=this,y=b.c,E=(e=new z(e,r)).c;if(!(y&&E&&y[0]&&E[0]))return!b.s||!e.s||y&&!y[0]&&!E||E&&!E[0]&&!y?e.c=e.e=e.s=null:(e.s*=b.s,y&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=p(b.e/l)+p(e.e/l),e.s*=b.s,(c=y.length)<(w=E.length)&&(v=y,y=E,E=v,i=c,c=w,w=i),i=c+w,v=[];i--;v.push(0));for(N=f,O=h,i=w;--i>=0;){for(n=0,m=E[i]%O,d=E[i]/O|0,o=i+(s=c);o>i;)n=((a=m*(a=y[--s]%O)+(u=d*a+(g=y[s]/O|0)*m)%O*O+v[o]+n)/N|0)+(u/O|0)+d*g,v[o--]=a%N;v[o]=n}return n?++t:v.splice(0,1),W(e,v,t)},B.negated=function(){var e=new z(this);return e.s=-e.s||null,e},B.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new z(e,r)).s,!i||!r)return new z(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/l,s=e.e/l,u=t.c,c=e.c;if(!o||!s){if(!u||!c)return new z(i/0);if(!u[0]||!c[0])return c[0]?e:new z(u[0]?t:0*i)}if(o=p(o),s=p(s),u=u.slice(),i=o-s){for(i>0?(s=o,n=c):(i=-i,n=u),n.reverse();i--;n.push(0));n.reverse()}for((i=u.length)-(r=c.length)<0&&(n=c,c=u,u=n,r=i),i=0;r;)i=(u[--r]=u[r]+c[r]+i)/f|0,u[r]=f===u[r]?0:u[r]%f;return i&&(u=[i].concat(u),++s),W(e,u,s)},B.precision=B.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return d(e,1,g),null==r?r=x:d(r,0,8),X(new z(o),e,r);if(!(n=o.c))return null;if(t=(i=n.length-1)*l+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},B.shiftedBy=function(e){return d(e,-9007199254740991,c),this.times("1e"+e)},B.squareRoot=B.sqrt=function(){var e,r,t,i,o,s=this,u=s.c,f=s.s,l=s.e,c=U+4,a=new z("0.5");if(1!==f||!u||!u[0])return new z(!f||f<0&&(!u||u[0])?NaN:u?s:1/0);if(0==(f=Math.sqrt(+Y(s)))||f==1/0?(((r=w(u)).length+l)%2==0&&(r+="0"),f=Math.sqrt(+r),l=p((l+1)/2)-(l<0||l%2),t=new z(r=f==1/0?"5e"+l:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+l)):t=new z(f+""),t.c[0])for((f=(l=t.e)+c)<3&&(f=0);;)if(o=t,t=a.times(o.plus(n(s,o,c,1))),w(o.c).slice(0,f)===(r=w(t.c)).slice(0,f)){if(t.e<l&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(X(t,t.e+U+2,1),e=!t.times(t).eq(s));break}if(!i&&(X(o,o.e+U+2,0),o.times(o).eq(s))){t=o;break}c+=4,f+=4,i=1}return X(t,t.e+U+1,x,e)},B.toExponential=function(e,r){return null!=e&&(d(e,0,g),e++),H(this,e,r,1)},B.toFixed=function(e,r){return null!=e&&(d(e,0,g),e=e+this.e+1),H(this,e,r)},B.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=j;else if("object"!=typeof n)throw Error(s+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,u=t.split("."),f=+n.groupSize,l=+n.secondaryGroupSize,c=n.groupSeparator||"",a=u[0],h=u[1],g=i.s<0,p=g?a.slice(1):a,w=p.length;if(l&&(o=f,f=l,l=o,w-=o),f>0&&w>0){for(o=w%f||f,a=p.substr(0,o);o<w;o+=f)a+=c+p.substr(o,f);l>0&&(a+=c+p.slice(o)),g&&(a="-"+a)}t=h?a+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+t+(n.suffix||"")},B.toFraction=function(e){var r,t,i,o,u,f,c,h,g,p,m,d,v=this,N=v.c;if(null!=e&&(!(c=new z(e)).isInteger()&&(c.c||1!==c.s)||c.lt(L)))throw Error(s+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+Y(c));if(!N)return new z(v);for(r=new z(L),g=t=new z(L),i=h=new z(L),d=w(N),u=r.e=d.length-v.e-1,r.c[0]=a[(f=u%l)<0?l+f:f],e=!e||c.comparedTo(r)>0?u>0?r:g:c,f=M,M=1/0,c=new z(d),h.c[0]=0;p=n(c,r,0,1),1!=(o=t.plus(p.times(i))).comparedTo(e);)t=i,i=o,g=h.plus(p.times(o=g)),h=o,r=c.minus(p.times(o=r)),c=o;return o=n(e.minus(t),i,0,1),h=h.plus(o.times(g)),t=t.plus(o.times(i)),h.s=g.s=v.s,m=n(g,i,u*=2,x).minus(v).abs().comparedTo(n(h,t,u,x).minus(v).abs())<1?[g,i]:[h,t],M=f,m},B.toNumber=function(){return+Y(this)},B.toPrecision=function(e,r){return null!=e&&d(e,1,g),H(this,e,r,2)},B.toString=function(e){var r,n=this,t=n.s,i=n.e;return null===i?t?(r="Infinity",t<0&&(r="-"+r)):r="NaN":(null==e?r=i<=C||i>=I?N(w(n.c),i):O(w(n.c),i,"0"):10===e&&$?r=O(w((n=X(new z(n),U+i+1,x)).c),n.e,"0"):(d(e,2,q.length,"Base"),r=b(O(w(n.c),i,"0"),10,e,t,!0)),t<0&&n.c[0]&&(r="-"+r)),r},B.valueOf=B.toJSON=function(){return Y(this)},B._isBigNumber=!0,B[Symbol.toStringTag]="BigNumber",B[Symbol.for("nodejs.util.inspect.custom")]=B.valueOf,null!=r&&z.set(r),z}()}}]);
//# sourceMappingURL=3271-1eb87f1d1eeef9c8.js.map