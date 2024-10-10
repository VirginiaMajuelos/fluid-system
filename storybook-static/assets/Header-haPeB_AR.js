import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";import"./index-Cp9I2zMD.js";import{P as H}from"./index-C1dzxQ9A.js";import{c as q,d as Q}from"./index-bnTqyAtF.js";const ee=i.createContext(),te=()=>i.useContext(ee);/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));function p(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function L(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function M(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var O;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O||(O={}));function ne(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function ae(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?M(e):e;return{pathname:n?n.startsWith("/")?n:re(n,t):t,search:se(a),hash:le(r)}}function re(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function I(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ie(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function W(e,t){let n=ie(e);return t?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function T(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=M(e):(r=w({},e),p(!r.pathname||!r.pathname.includes("?"),I("?","pathname","search",r)),p(!r.pathname||!r.pathname.includes("#"),I("#","pathname","hash",r)),p(!r.search||!r.search.includes("#"),I("#","search","hash",r)));let s=e===""||r.pathname==="",l=s?"/":r.pathname,u;if(l==null)u=n;else{let h=t.length-1;if(!a&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;r.pathname=m.join("/")}u=h>=0?t[h]:"/"}let c=ae(r,u),o=l&&l!=="/"&&l.endsWith("/"),f=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(o||f)&&(c.pathname+="/"),c}const Z=e=>e.join("/").replace(/\/\/+/g,"/"),se=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,le=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,_=["post","put","patch","delete"];new Set(_);const oe=["get",..._];new Set(oe);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}const F=i.createContext(null),v=i.createContext(null),G=i.createContext(null),x=i.createContext({outlet:null,matches:[],isDataRoute:!1});function ue(e,t){let{relative:n}=t===void 0?{}:t;S()||p(!1);let{basename:a,navigator:r}=i.useContext(v),{hash:s,pathname:l,search:u}=z(e,{relative:n}),c=l;return a!=="/"&&(c=l==="/"?a:Z([a,l])),r.createHref({pathname:c,search:u,hash:s})}function S(){return i.useContext(G)!=null}function b(){return S()||p(!1),i.useContext(G).location}function J(e){i.useContext(v).static||i.useLayoutEffect(e)}function ce(){let{isDataRoute:e}=i.useContext(x);return e?me():fe()}function fe(){S()||p(!1);let e=i.useContext(F),{basename:t,future:n,navigator:a}=i.useContext(v),{matches:r}=i.useContext(x),{pathname:s}=b(),l=JSON.stringify(W(r,n.v7_relativeSplatPath)),u=i.useRef(!1);return J(()=>{u.current=!0}),i.useCallback(function(o,f){if(f===void 0&&(f={}),!u.current)return;if(typeof o=="number"){a.go(o);return}let h=T(o,JSON.parse(l),s,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Z([t,h.pathname])),(f.replace?a.replace:a.push)(h,f.state,f)},[t,a,l,s,e])}function z(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=i.useContext(v),{matches:r}=i.useContext(x),{pathname:s}=b(),l=JSON.stringify(W(r,a.v7_relativeSplatPath));return i.useMemo(()=>T(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}var k=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(k||{}),V=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(V||{});function he(e){let t=i.useContext(F);return t||p(!1),t}function de(e){let t=i.useContext(x);return t||p(!1),t}function pe(e){let t=de(),n=t.matches[t.matches.length-1];return n.route.id||p(!1),n.route.id}function me(){let{router:e}=he(k.UseNavigateStable),t=pe(V.UseNavigateStable),n=i.useRef(!1);return J(()=>{n.current=!0}),i.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,y({fromRouteId:t},s)))},[e,t])}new Promise(()=>{});/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function ge(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function ve(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ce(e,t){return e.button===0&&(!t||t==="_self")&&!ve(e)}const xe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],be="6";try{window.__reactRouterVersion=be}catch{}const Ie=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",we=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,E=i.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:s,replace:l,state:u,target:c,to:o,preventScrollReset:f,unstable_viewTransition:h}=t,m=ge(t,xe),{basename:X}=i.useContext(v),j,N=!1;if(typeof o=="string"&&we.test(o)&&(j=o,Ie))try{let g=new URL(window.location.href),C=o.startsWith("//")?new URL(g.protocol+o):new URL(o),U=ne(C.pathname,X);C.origin===g.origin&&U!=null?o=U+C.search+C.hash:N=!0}catch{}let Y=ue(o,{relative:r}),K=ye(o,{replace:l,state:u,target:c,preventScrollReset:f,relative:r,unstable_viewTransition:h});function $(g){a&&a(g),g.defaultPrevented||K(g)}return i.createElement("a",P({},m,{href:j||Y,onClick:N||s?a:$,ref:n,target:c}))});var A;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(A||(A={}));var B;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(B||(B={}));function ye(e,t){let{target:n,replace:a,state:r,preventScrollReset:s,relative:l,unstable_viewTransition:u}=t===void 0?{}:t,c=ce(),o=b(),f=z(e,{relative:l});return i.useCallback(h=>{if(Ce(h,n)){h.preventDefault();let m=a!==void 0?a:L(o)===L(f);c(e,{replace:m,state:r,preventScrollReset:s,relative:l,unstable_viewTransition:u})}},[o,c,f,a,r,n,e,s,l,u])}const Pe="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iI2ZmYTI5NCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEwIi8+CiAgCiAgPCEtLSBUZXh0byAiRlMiIGVzdGlsaXphZG8gY29uIFF1aWNrc2FuZCAtLT4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IidRdWlja3NhbmQnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjgwIiBmb250LXdlaWdodD0iNTAwIiBmaWxsPSIjZjRmNGY0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCI+CiAgICBGUwogIDwvdGV4dD4KPC9zdmc+Cg==",D=({title:e=""})=>{const{isSidebarOpen:t,toggleSidebar:n}=te(),r=b().pathname==="/";return d.jsx("header",{children:d.jsxs("div",{className:"fs-header",children:[d.jsxs("div",{className:"fs-flex",children:[d.jsx(E,{to:"/",children:d.jsx("img",{className:"fs-logo",src:Pe,alt:"Fluid System Logo"})}),d.jsx(E,{to:"/components",className:"fs-body fs-link",children:"Components"}),e&&d.jsx("h1",{children:e})]}),!r&&d.jsx("button",{className:"fs-menu",onClick:n,children:t?d.jsx(q,{}):d.jsx(Q,{})})]})})};D.PropTypes={title:H.string};D.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{defaultValue:{value:'""',computed:!1},required:!1}}};export{D as H};