"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{11739:function(e,r,t){t.d(r,{At:function(){return h},aG:function(){return y},gN:function(){return v}});var n=t(42846),o=t(15031),a=t(26450),i=t(67294);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}var s=["spacing"],l=["isCurrentPage","as","className","href"],f=["isCurrentPage","separator","isLastChild","spacing","children","className"],d=["children","spacing","separator","className"],p=(0,n.Gp)((function(e,r){var t=e.spacing,o=c(e,s),a=u({mx:t},(0,n.yK)().separator);return i.createElement(n.m$.span,u({ref:r,role:"presentation"},o,{__css:a}))}));o.Ts&&(p.displayName="BreadcrumbSeparator");var h=(0,n.Gp)((function(e,r){var t=e.isCurrentPage,a=e.as,s=e.className,f=e.href,d=c(e,l),p=(0,n.yK)(),h=u({ref:r,as:a,className:(0,o.cx)("chakra-breadcrumb__link",s)},d);return t?i.createElement(n.m$.span,u({"aria-current":"page",__css:p.link},h)):i.createElement(n.m$.a,u({__css:p.link,href:f},h))}));o.Ts&&(h.displayName="BreadcrumbLink");var v=(0,n.Gp)((function(e,r){var t=e.isCurrentPage,s=e.separator,l=e.isLastChild,d=e.spacing,v=e.children,y=e.className,b=c(e,f),m=(0,a.WR)(v).map((function(e){return e.type===h?i.cloneElement(e,{isCurrentPage:t}):e.type===p?i.cloneElement(e,{spacing:d,children:e.props.children||s}):e})),w=u({display:"inline-flex",alignItems:"center"},(0,n.yK)().item),g=(0,o.cx)("chakra-breadcrumb__list-item",y);return i.createElement(n.m$.li,u({ref:r,className:g},b,{__css:w}),m,!l&&i.createElement(p,{spacing:d},s))}));o.Ts&&(v.displayName="BreadcrumbItem");var y=(0,n.Gp)((function(e,r){var t=(0,n.jC)("Breadcrumb",e),s=(0,n.Lr)(e),l=s.children,f=s.spacing,p=void 0===f?"0.5rem":f,h=s.separator,v=void 0===h?"/":h,y=s.className,b=c(s,d),m=(0,a.WR)(l),w=m.length,g=m.map((function(e,r){return i.cloneElement(e,{separator:v,spacing:p,isLastChild:w===r+1})})),E=(0,o.cx)("chakra-breadcrumb",y);return i.createElement(n.m$.nav,u({ref:r,"aria-label":"breadcrumb",className:E,__css:t.container},b),i.createElement(n.Fo,{value:t},i.createElement(n.m$.ol,{className:"chakra-breadcrumb__list"},g)))}));o.Ts&&(y.displayName="Breadcrumb")},91202:function(e,r,t){t.d(r,{Z:function(){return N}});var n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)};var o=t(67294),a=t(71642),i=(0,t(87122)._)(),u=t(99495),c=function(){},s=o.forwardRef((function(e,r){var t=o.useRef(null),a=o.useState({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:c}),s=a[0],l=a[1],f=e.forwardProps,d=e.children,p=e.className,h=e.removeScrollBar,v=e.enabled,y=e.shards,b=e.sideCar,m=e.noIsolation,w=e.inert,g=e.allowPinchZoom,E=e.as,O=void 0===E?"div":E,k=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=b,C=(0,u.q)([t,r]),T=n({},k,s);return o.createElement(o.Fragment,null,v&&o.createElement(x,{sideCar:i,removeScrollBar:h,shards:y,noIsolation:m,inert:w,setCallbacks:l,allowPinchZoom:!!g,lockRef:t}),f?o.cloneElement(o.Children.only(d),n({},T,{ref:C})):o.createElement(O,n({},T,{className:p,ref:C}),d))}));s.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},s.classNames={fullWidth:a.zi,zeroRight:a.pF};var l=t(66781),f=t(37087),d=t(6525),p=function(e,r){var t=r;do{if("undefined"!==typeof ShadowRoot&&t instanceof ShadowRoot&&(t=t.host),h(e,t)){var n=v(e,t);if(n[1]>n[2])return!0}t=t.parentNode}while(t&&t!==document.body);return!1},h=function(e,r){return"v"===e?function(e){var r=window.getComputedStyle(e);return"hidden"!==r.overflowY&&!(r.overflowY===r.overflowX&&"visible"===r.overflowY)}(r):function(e){var r=window.getComputedStyle(e);return"range"===e.type||"hidden"!==r.overflowX&&!(r.overflowY===r.overflowX&&"visible"===r.overflowX)}(r)},v=function(e,r){return"v"===e?[(t=r).scrollTop,t.scrollHeight,t.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(r);var t},y=!1;if("undefined"!==typeof window)try{var b=Object.defineProperty({},"passive",{get:function(){return y=!0,!0}});window.addEventListener("test",b,b),window.removeEventListener("test",b,b)}catch(S){y=!1}var m=!!y&&{passive:!1},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},g=function(e){return[e.deltaX,e.deltaY]},E=function(e){return e&&"current"in e?e.current:e},O=function(e){return"\n  .block-interactivity-"+e+" {pointer-events: none;}\n  .allow-interactivity-"+e+" {pointer-events: all;}\n"},k=0,x=[];var C=(0,l.L)(i,(function(e){var r=o.useRef([]),t=o.useRef([0,0]),n=o.useRef(),a=o.useState(k++)[0],i=o.useState((function(){return(0,d.Ws)()}))[0],u=o.useRef(e);o.useEffect((function(){u.current=e}),[e]),o.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-"+a);var r=[e.lockRef.current].concat((e.shards||[]).map(E)).filter(Boolean);return r.forEach((function(e){return e.classList.add("allow-interactivity-"+a)})),function(){document.body.classList.remove("block-interactivity-"+a),r.forEach((function(e){return e.classList.remove("allow-interactivity-"+a)}))}}}),[e.inert,e.lockRef.current,e.shards]);var c=o.useCallback((function(e,r){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var o,a=w(e),i=t.current,c="deltaX"in e?e.deltaX:i[0]-a[0],s="deltaY"in e?e.deltaY:i[1]-a[1],l=e.target,f=Math.abs(c)>Math.abs(s)?"h":"v",d=p(f,l);if(!d)return!0;if(d?o=f:(o="v"===f?"h":"v",d=p(f,l)),!d)return!1;if(!n.current&&"changedTouches"in e&&(c||s)&&(n.current=o),!o)return!0;var y=n.current||o;return function(e,r,t,n,o){var a=n,i=t.target,u=r.contains(i),c=!1,s=a>0,l=0,f=0;do{var d=v(e,i),p=d[0],y=d[1]-d[2]-p;(p||y)&&h(e,i)&&(l+=y,f+=p),i=i.parentNode}while(!u&&i!==document.body||u&&(r.contains(i)||r===i));return(s&&(o&&0===l||!o&&a>l)||!s&&(o&&0===f||!o&&-a>f))&&(c=!0),c}(y,r,e,"h"===y?c:s,!0)}),[]),s=o.useCallback((function(e){var t=e;if(x.length&&x[x.length-1]===i){var n="deltaY"in t?g(t):w(t),o=r.current.filter((function(e){return e.name===t.type&&e.target===t.target&&(r=e.delta,o=n,r[0]===o[0]&&r[1]===o[1]);var r,o}))[0];if(o&&o.should)t.preventDefault();else if(!o){var a=(u.current.shards||[]).map(E).filter(Boolean).filter((function(e){return e.contains(t.target)}));(a.length>0?c(t,a[0]):!u.current.noIsolation)&&t.preventDefault()}}}),[]),l=o.useCallback((function(e,t,n,o){var a={name:e,delta:t,target:n,should:o};r.current.push(a),setTimeout((function(){r.current=r.current.filter((function(e){return e!==a}))}),1)}),[]),y=o.useCallback((function(e){t.current=w(e),n.current=void 0}),[]),b=o.useCallback((function(r){l(r.type,g(r),r.target,c(r,e.lockRef.current))}),[]),C=o.useCallback((function(r){l(r.type,w(r),r.target,c(r,e.lockRef.current))}),[]);o.useEffect((function(){return x.push(i),e.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:C}),document.addEventListener("wheel",s,m),document.addEventListener("touchmove",s,m),document.addEventListener("touchstart",y,m),function(){x=x.filter((function(e){return e!==i})),document.removeEventListener("wheel",s,m),document.removeEventListener("touchmove",s,m),document.removeEventListener("touchstart",y,m)}}),[]);var T=e.removeScrollBar,N=e.inert;return o.createElement(o.Fragment,null,N?o.createElement(i,{styles:O(a)}):null,T?o.createElement(f.jp,{gapMode:"margin"}):null)})),T=o.forwardRef((function(e,r){return o.createElement(s,n({},e,{ref:r,sideCar:C}))}));T.classNames=s.classNames;var N=T},26461:function(e,r,t){function n(e,r={},t){let n=document.createElementNS("http://www.w3.org/2000/svg",e);for(let o in r)!r.hasOwnProperty(o)||n.setAttribute(o,r[o]);return t&&t.appendChild(n),n}t.d(r,{S:function(){return u}});const o=2.7,a={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]};class i{constructor(e,r){this.svgRoot=e,this.fontFamily=r,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(e,r){let t=e.typeID;t in this?this[t](e,r):console.log(`'${t}' control type not implemented`)}parseColor(e,r){return void 0===e?`rgb(${r})`:`rgb(${(t=e)>>16&255},${t>>8&255},${255&t})`;var t}parseFontProperties(e){var r,t,n;return{style:null!=(r=e.properties)&&r.italic?"italic":"normal",weight:null!=(t=e.properties)&&t.bold?"bold":"normal",size:null!=(n=e.properties)&&n.size?e.properties.size+"px":"13px",family:this.fontFamily}}measureText(e,r){return this.canvasRenderingContext2D.font=r,this.canvasRenderingContext2D.measureText(e)}drawRectangle(e,r){var t,a,i,u,c,s;n("rect",{x:parseInt(e.x)+o/2,y:parseInt(e.y)+o/2,width:parseInt(null!=(t=e.w)?t:e.measuredW)-o,height:parseInt(null!=(a=e.h)?a:e.measuredH)-o,rx:2,fill:this.parseColor(null==(i=e.properties)?void 0:i.color,"255,255,255"),"fill-opacity":null!=(c=null==(u=e.properties)?void 0:u.backgroundAlpha)?c:1,stroke:this.parseColor(null==(s=e.properties)?void 0:s.borderColor,"0,0,0"),"stroke-width":o},r)}addText(e,r,t,o){var i,u;let c=null!=(i=e.properties.text)?i:"",s=parseInt(e.x),l=parseInt(e.y),f=this.parseFontProperties(e),d=this.measureText(c,`${f.style} ${f.weight} ${f.size} ${f.family}`),p=n("text",{x:"center"===o?s+(null!=(u=e.w)?u:e.measuredW)/2-d.width/2:s,y:l+e.measuredH/2+d.actualBoundingBoxAscent/2,fill:t,"font-style":f.style,"font-weight":f.weight,"font-size":f.size},r);if(c.includes("{color:"))c.split(/{color:|{color}/).forEach((e=>{if(e.includes("}")){let[r,t]=e.split("}");if(!r.startsWith("#")){let e=parseInt(r.slice(-1));r=isNaN(e)?a[r][0]:a[r][e]}n("tspan",{fill:r},p).textContent=t}else{n("tspan",{},p).textContent=e}}));else{n("tspan",{},p).textContent=c}}TextArea(e,r){this.drawRectangle(e,r)}Canvas(e,r){this.drawRectangle(e,r)}Label(e,r){var t;this.addText(e,r,this.parseColor(null==(t=e.properties)?void 0:t.color,"0,0,0"),"left")}TextInput(e,r){var t;this.drawRectangle(e,r),this.addText(e,r,this.parseColor(null==(t=e.properties)?void 0:t.textColor,"0,0,0"),"center")}Arrow(e,r){var t,o,a;let i,u=parseInt(e.x),c=parseInt(e.y),{p0:s,p1:l,p2:f}=e.properties;"dotted"===(null==(t=e.properties)?void 0:t.stroke)?i="0.8 12":"dashed"===(null==(o=e.properties)?void 0:o.stroke)&&(i="28 46");let d=(f.x-s.x)*l.x,p=(f.y-s.y)*l.x;n("path",{d:`M${u+s.x} ${c+s.y}Q${u+s.x+d+p*l.y*3.6} ${c+s.y+p+-d*l.y*3.6} ${u+f.x} ${c+f.y}`,fill:"none",stroke:this.parseColor(null==(a=e.properties)?void 0:a.color,"0,0,0"),"stroke-width":4,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":i},r)}Icon(e,r){var t;let o=parseInt(e.x),a=parseInt(e.y),i=10;n("circle",{cx:o+i,cy:a+i,r:i,fill:this.parseColor(null==(t=e.properties)?void 0:t.color,"0,0,0")},r),"check-circle"===e.properties.icon.ID&&n("path",{d:`M${o+4.5} ${a+i}L${o+8.5} ${a+i+4} ${o+15} ${a+i-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},r)}HRule(e,r){var t,a,i,u;let c,s=parseInt(e.x),l=parseInt(e.y);"dotted"===(null==(t=e.properties)?void 0:t.stroke)?c="0.8, 8":"dashed"===(null==(a=e.properties)?void 0:a.stroke)&&(c="18, 30"),n("path",{d:`M${s} ${l}L${s+parseInt(null!=(i=e.w)?i:e.measuredW)} ${l}`,fill:"none",stroke:this.parseColor(null==(u=e.properties)?void 0:u.color,"0,0,0"),"stroke-width":o,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":c},r)}__group__(e,r){var t;const o=null==(t=null==e?void 0:e.properties)?void 0:t.controlName,a=(o||"").replace(/^\d+-/,""),i="done"===localStorage.getItem(a);let u=n("g",{...o?{class:"clickable-group "+(i?"done":""),"data-group-id":o}:{}},r);e.children.controls.control.sort(((e,r)=>e.zOrder-r.zOrder)).forEach((r=>{r.x=parseInt(r.x,10)+parseInt(e.x,10),r.y=parseInt(r.y,10)+parseInt(e.y,10),this.render(r,u)}))}}async function u(e,r={}){if((r={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...r}).fontURL){let e=new FontFace(r.fontFamily,`url(${r.fontURL})`);await e.load(),document.fonts.add&&document.fonts.add(e)}let t=e.mockup,o=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${t.measuredW-t.mockupW-r.padding} ${t.measuredH-t.mockupH-r.padding} ${parseInt(t.mockupW)+2*r.padding} ${parseInt(t.mockupH)+2*r.padding}`,style:"font-family: balsamiq"}),a=new i(o,r.fontFamily);return t.controls.control.sort(((e,r)=>e.zOrder-r.zOrder)).forEach((e=>{a.render(e,o)})),o}},42609:function(e,r,t){var n=t(67294);function o(e,r){void 0===r&&(r=!0);var t=function(){var e=n.useRef(!1);return n.useEffect((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),o=n.useState(e),a=o[0],i=o[1],u=n.useRef(a),c=n.useCallback((function(e){!t.current&&r||(u.current="function"===typeof e?e(u.current):e,i(u.current))}),[]);return[u,c]}r.ZP=o},62730:function(e,r,t){t.d(r,{ib:function(){return fe}});var n,o,a=t(67294),i=t(38137),u=t.n(i),c=t(42609);!function(e){e.DELETE="DELETE",e.GET="GET",e.HEAD="HEAD",e.OPTIONS="OPTIONS",e.PATCH="PATCH",e.POST="POST",e.PUT="PUT",e.CONNECT="CONNECT",e.TRACE="TRACE"}(n||(n={})),function(e){e.CACHE_FIRST="cache-first",e.CACHE_AND_NETWORK="cache-and-network",e.NETWORK_ONLY="network-only",e.CACHE_ONLY="cache-only",e.NO_CACHE="no-cache",e.EXACT_CACHE_AND_NETWORK="exact-cache-and-network"}(o||(o={}));var s=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(r){a(r)}}function u(e){try{c(n.throw(e))}catch(r){a(r)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}c((n=n.apply(e,r||[])).next())}))},l=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(u){a=[6,u],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},f=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),o=0;for(r=0;r<t;r++)for(var a=arguments[r],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n};function d(e,r,t,n,o,a,i,u){if(void 0===t&&(t=""),void 0===n&&(n=""),void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i=""),void 0===u&&(u=""),!e){var c=void 0;if(void 0===r)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,n,o,a,i,u],l=0;(c=new Error(r.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw c}}var p,h=function(e){return"string"===typeof e},v=function(e){return"[object Object]"===Object.prototype.toString.call(e)},y=function(e){return v(e)||Array.isArray(e)},b=function(e){return"function"===typeof e},m=function(e){return void 0===e||null===e};!function(e){e.Browser="browser",e.Server="server",e.Native="native"}(p||(p={}));var w=p.Browser,g=p.Server,E=p.Native,O=!("undefined"===typeof window||!window.document||!window.document.createElement),k="undefined"!==typeof navigator&&"ReactNative"===navigator.product?E:O?w:g,x=k===g,C=function(e,r,t){return s(void 0,void 0,void 0,(function(){var n,o;return l(this,(function(a){switch(a.label){case 0:if("undefined"===typeof e)throw Error("Response cannot be undefined... \ud83d\ude35");if("undefined"===typeof t)throw Error("responseType cannot be undefined... \ud83d\ude35");if(null==(n=Array.isArray(t)?t:[t])[0])throw Error("could not parse data from response \ud83d\ude35");return[4,T(e,n)];case 1:return o=a.sent(),[2,!m(r)&&m(o)?r:o]}}))}))},T=function(e,r,t){return void 0===t&&(t=0),s(void 0,void 0,void 0,(function(){var n;return l(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,e.clone()[r[t]]()];case 1:return[2,o.sent()];case 2:if(n=o.sent(),r.length-1===t)throw n;return[2,T(e.clone(),r,++t)];case 3:return[2]}}))}))},N=["headers","ok","redirected","trailer","status","statusText","type","url","body","bodyUsed","data"],S=["clone","arrayBuffer","blob","formData","json","text"],P=f(N,S),R=function(e,r){return Object.defineProperties({},P.reduce((function(t,n){return N.includes(n)?t[n]={get:function(){var t=e instanceof Response?e:e&&e.current;if(t)return"data"===n?r.current:("clone"in t?t.clone():{})[n]},enumerable:!0}:S.includes(n)&&(t[n]={value:function(){var r=e instanceof Response?e:e&&e.current;if(r)return("clone"in r?r.clone():{})[n]()},enumerable:!0}),t}),{}))},A=(R(),function(e){return s(void 0,void 0,void 0,(function(){var r,t,n,o;return l(this,(function(a){switch(a.label){case 0:return[4,e.text()];case 1:return r=a.sent(),t=e.status,n=e.statusText,o=function(e){var r={};return e.forEach((function(e,t){r[t]=e})),r}(e.headers),[2,{body:r,status:t,statusText:n,headers:o}]}}))}))});var I=function(e,r){return(0,a.useCallback)(e,function(e){var r=(0,a.useRef)();return JSON.stringify(e)!==JSON.stringify(r.current)&&(r.current=e),r.current}(r))},j=function(e){return new Promise((function(r){return setTimeout(r,e)}))},L=function(e){return Number.isInteger(e)&&e>0},_=function(e,r){var t=new Error(r);return t.name=e+"",t},$=function(e,r){return e?r?r.endsWith("/")&&e.startsWith("/")?e.substr(1):r.endsWith("/")||e.startsWith("/")||e.startsWith("?")||e.startsWith("&")||r.includes("?")?e:"/"+e:e.startsWith("?")||e.startsWith("&")||e.startsWith("/")?e:"/"+e:""},D=(0,a.createContext)({url:"",options:{},graphql:!1}),W=function(){return W=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},W.apply(this,arguments)},H={host:"",path:void 0,customOptions:{cacheLife:0,cachePolicy:o.CACHE_FIRST,interceptors:{},onAbort:function(){},onError:function(){},onNewData:function(e,r){return r},onTimeout:function(){},perPage:0,persist:!1,responseType:["json","text","blob","arrayBuffer"],retries:0,retryDelay:1e3,retryOn:[],suspense:!1,timeout:0,data:void 0,loading:!1},requestInit:{headers:{Accept:"application/json, text/plain, */*"}},dependencies:void 0},B=Object.entries(H).reduce((function(e,r){var t,n=r[0],o=r[1];return v(o)?W(W({},e),o):W(W({},e),((t={})[n]=o,t))}),{}),q=function(){return q=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},q.apply(this,arguments)};function F(e,r,t){d(!(v(e)&&v(r)),"You cannot have a 2nd parameter of useFetch as object when your first argument is an object.");var n=(0,a.useContext)(D),o=(0,a.useMemo)((function(){var r=e;return h(r)&&r.includes("://")?r:n.url?n.url:B.host}),[n.url,e]),i=(0,a.useMemo)((function(){var r=e;if(h(r)&&!r.includes("://"))return r}),[e]),u=(0,a.useMemo)((function(){return b(e)?e:b(r)?r:void 0}),[]),c=(0,a.useMemo)((function(){var t={headers:{}};v(e)?t=e:v(r)&&(t=r);var o=n.options,a=q(q(q(q({},B),o),t),{headers:q(q(q({},B.headers),o.headers),t.headers),interceptors:q(q(q({},B.interceptors),o.interceptors),t.interceptors)});return u?u(a):a}),[e,u,n.options]),s=(0,a.useMemo)((function(){return function(e){return e?["body","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"].reduce((function(r,t){return t in e&&(r[t]=e[t]),r}),{}):{}}(c)}),[c]),l=(0,a.useMemo)((function(){return Array.isArray(r)?r:Array.isArray(t)?t:B.dependencies}),[r,t]),f=c.cacheLife,p=c.retries,y=c.retryDelay,m=c.retryOn;d(Number.isInteger(f)&&f>=0,"`cacheLife` must be a number >= 0"),d(Number.isInteger(p)&&p>=0,"`retries` must be a number >= 0"),d(b(y)||Number.isInteger(y)&&y>=0,"`retryDelay` must be a positive number or a function returning a positive number."),d(b(m)||Array.isArray(m)&&m.every(L),"`retryOn` must be an array of positive numbers or a function returning a boolean.");var w=c.loading||Array.isArray(l),g=(0,a.useMemo)((function(){var e={};return"request"in c.interceptors&&(e.request=c.interceptors.request),"response"in c.interceptors&&(e.response=c.interceptors.response),e}),[c]);return{host:o,path:i,customOptions:(0,a.useMemo)((function(){var e=Object.keys(H.customOptions).reduce((function(e,r){return e[r]=c[r],e}),{});return q(q({},e),{interceptors:g,loading:w})}),[g,w]),requestInit:s,dependencies:l}}var M=function(){return M=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},M.apply(this,arguments)},Y=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(r){a(r)}}function u(e){try{c(n.throw(e))}catch(r){a(r)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}c((n=n.apply(e,r||[])).next())}))},G=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(u){a=[6,u],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},z=n.GET;function U(e,r,t,o,a,i,u,c,s,l){return Y(this,void 0,void 0,(function(){var o,f,p,v,b,m,w,g,E=this;return G(this,(function(O){switch(O.label){case 0:return d(!(y(c)&&y(s)),"If first argument of "+r.toLowerCase()+"() is an object, you cannot have a 2nd argument. \ud83d\ude1c"),d(!(r===z&&y(c)),"You can only have query params as 1st argument of request.get()"),d(!(r===z&&void 0!==s),"You can only have query params as 1st argument of request.get()"),o=!x&&c instanceof URLSearchParams?"?"+c:h(c)?c:"",f=""+i+$(u,i)+$(o),p=c instanceof FormData?c:y(c)?JSON.stringify(c):!x&&(s instanceof FormData||s instanceof URLSearchParams)?s:y(s)||h(s)?JSON.stringify(s):y(e.body)||h(s)?JSON.stringify(e.body):null,v=function(){var t=(e.headers||{})["Content-Type"],o=!!t||[n.POST,n.PUT,n.PATCH].includes(r)&&!(p instanceof FormData),a=M({},e.headers);if(o)a["Content-Type"]=t||"application/json";else if(0===Object.keys(a).length)return null;return a}(),[4,Y(E,void 0,void 0,(function(){var n;return G(this,(function(a){switch(a.label){case 0:return n=M(M({},e),{method:r,signal:t.signal}),null!==v?n.headers=v:delete n.headers,null!==p&&(n.body=p),l?[4,l({options:n,url:i,path:u,route:o})]:[3,2];case 1:return[2,a.sent()];case 2:return[2,n]}}))}))];case 1:return b=O.sent(),m=Object.entries({url:f,method:r,body:b.body||""}).map((function(e){return e[0]+":"+e[1]})).join("||"),w={url:f,options:b},g={},[4,a.has(m)];case 2:return g.isCached=O.sent(),g.id=m,[4,a.get(m)];case 3:return[2,(w.response=(g.cached=O.sent(),g),w)]}}))}))}var X=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(r){a(r)}}function u(e){try{c(n.throw(e))}catch(r){a(r)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}c((n=n.apply(e,r||[])).next())}))},J=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(u){a=[6,u],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},Z="useHTTPcache",K=function(){try{return JSON.parse(localStorage.getItem(Z)||"{}")}catch(e){return localStorage.removeItem(Z),{}}},Q=function(e){var r=e.cacheLife,t=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return X(void 0,void 0,void 0,(function(){var r;return J(this,(function(t){return r=K(),e.forEach((function(e){return delete r[e]})),localStorage.setItem(Z,JSON.stringify(r)),[2]}))}))},n=function(e){var r=K()[e]||{},n=r.expiration,o=r.response,a=n>0&&n<Date.now();return a&&t(e),a||!o};return Object.defineProperties(K(),{get:{value:function(e){return X(void 0,void 0,void 0,(function(){var r,t,o,a,i,u;return J(this,(function(c){return n(e)?[2]:(r=K(),t=r[e].response,o=t.body,a=t.headers,i=t.status,u=t.statusText,[2,new Response(o,{status:i,statusText:u,headers:new Headers(a||{})})])}))}))},writable:!1},set:{value:function(e,t){return X(void 0,void 0,void 0,(function(){var n,o,a,i;return J(this,(function(u){switch(u.label){case 0:return n=K(),o=n,a=e,i={},[4,A(t)];case 1:return o[a]=(i.response=u.sent(),i.expiration=Date.now()+r,i),localStorage.setItem(Z,JSON.stringify(n)),[2]}}))}))},writable:!1},has:{value:function(e){return X(void 0,void 0,void 0,(function(){return J(this,(function(r){return[2,!n(e)]}))}))},writable:!1},delete:{value:t,writable:!1},clear:{value:function(){return X(void 0,void 0,void 0,(function(){return J(this,(function(e){return localStorage.setItem(Z,JSON.stringify({})),[2]}))}))},writable:!1}})},V=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(r){a(r)}}function u(e){try{c(n.throw(e))}catch(r){a(r)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}c((n=n.apply(e,r||[])).next())}))},ee=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(u){a=[6,u],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},re={},te=function(e){var r=e.cacheLife,t=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return V(void 0,void 0,void 0,(function(){var r,t,n;return ee(this,(function(o){for(r=0,t=e;r<t.length;r++)n=t[r],delete re[n],delete re[n+":ts"];return[2]}))}))},n=function(e){var r=re[e+":ts"],n=r>0&&r<Date.now();return n&&t(e),n||!re[e]};return Object.defineProperties(re,{get:{value:function(e){return V(void 0,void 0,void 0,(function(){return ee(this,(function(r){return n(e)?[2]:[2,re[e]]}))}))},writable:!1,configurable:!0},set:{value:function(e,t){return V(void 0,void 0,void 0,(function(){return ee(this,(function(n){return re[e]=t,re[e+":ts"]=r>0?Date.now()+r:0,[2]}))}))},writable:!1,configurable:!0},has:{value:function(e){return V(void 0,void 0,void 0,(function(){return ee(this,(function(r){return[2,!n(e)]}))}))},writable:!1,configurable:!0},delete:{value:t,writable:!1,configurable:!0},clear:{value:function(){return V(void 0,void 0,void 0,(function(){return ee(this,(function(e){return re={},[2]}))}))},writable:!1,configurable:!0}})},ne=o.NETWORK_ONLY,oe=o.NO_CACHE,ae=function(e){var r=e.persist,t=e.cacheLife,n=e.cachePolicy,o=u()(),a=o.isNative;return d(!(o.isServer&&r),"There is no persistent storage on the Server currently! \ud83d\ude45\u200d\u2642\ufe0f"),d(!(a&&r),"React Native support for persistent cache is not yet implemented. \ud83d\ude45\u200d\u2642\ufe0f"),d(!(r&&[oe,ne].includes(n)),"You cannot use option 'persist' with cachePolicy: "+n+" \ud83d\ude45\u200d\u2642\ufe0f"),r?Q({cacheLife:t||864e5}):te({cacheLife:t})},ie=function(){return ie=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},ie.apply(this,arguments)},ue=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(r){a(r)}}function u(e){try{c(n.throw(e))}catch(r){a(r)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}c((n=n.apply(e,r||[])).next())}))},ce=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(u){a=[6,u],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},se=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},le=o.CACHE_FIRST;function fe(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var o=F.apply(void 0,r),i=o.host,s=o.path,l=o.customOptions,f=o.requestInit,p=o.dependencies,h=l.cacheLife,v=l.cachePolicy,y=l.interceptors,m=l.onAbort,w=l.onError,g=l.onNewData,E=l.onTimeout,O=l.perPage,k=l.persist,x=l.responseType,T=l.retries,N=l.retryDelay,S=l.retryOn,P=l.suspense,A=l.timeout,L=se(l,["cacheLife","cachePolicy","interceptors","onAbort","onError","onNewData","onTimeout","perPage","persist","responseType","retries","retryDelay","retryOn","suspense","timeout"]),$=ae({persist:k,cacheLife:h,cachePolicy:v}),D=u()().isServer,W=(0,a.useRef)(),H=(0,a.useRef)({}),B=(0,a.useRef)(L.data),q=(0,a.useRef)(!1),M=(0,a.useRef)(0),Y=(0,a.useRef)(),G=(0,a.useRef)(!0),z=(0,a.useRef)("pending"),X=(0,a.useRef)(),J=(0,a.useRef)(!1),Z=(0,c.ZP)(L.loading),K=Z[0],Q=Z[1],V=(0,a.useReducer)((function(){return{}}),[])[1],ee=I((function(r){var t=function(t,o){return ue(e,void 0,void 0,(function(){var e,a,u,c,l,p,h,k,N,R,I,j,F,z,X,J;return ce(this,(function(Z){switch(Z.label){case 0:return D?[2]:(W.current=new AbortController,W.current.signal.onabort=m,e=W.current,[4,U(f,r,e,0,$,i,s,t,o,y.request)]);case 1:if(a=Z.sent(),u=a.url,c=a.options,l=a.response,Y.current=void 0,O>0&&!G.current&&!Y.current)return[2,B.current];P||Q(!0),p=A&&setTimeout((function(){q.current=!0,e.abort(),E&&E()}),A),Z.label=2;case 2:return Z.trys.push([2,17,23,24]),l.isCached&&v===le?(k=l.cached,[3,5]):[3,3];case 3:return[4,fetch(u,c)];case 4:k=Z.sent().clone(),Z.label=5;case 5:return H.current=k.clone(),[4,C(k,L.data,x)];case 6:return h=Z.sent(),H.current.data=g(B.current,h),N=H,y.response?[4,y.response({response:H.current,request:f})]:[3,8];case 7:return R=Z.sent(),[3,9];case 8:R=H.current,Z.label=9;case 9:return N.current=R,d("data"in H.current,"You must have `data` field on the Response returned from your `interceptors.response`"),B.current=H.current.data,z={attempt:M.current,response:k},(I=!b(S)&&Array.isArray(S)&&S.length<1&&!1===(null===k||void 0===k?void 0:k.ok)||Array.isArray(S)&&S.includes(k.status))?[3,12]:(j=b(S))?[4,S(z)]:[3,11];case 10:j=Z.sent(),Z.label=11;case 11:I=j,Z.label=12;case 12:return I&&T>0&&T>M.current?[4,n(z,t,o)]:[3,14];case 13:return[2,Z.sent()];case 14:return v!==le||l.isCached?[3,16]:[4,$.set(l.id,k.clone())];case 15:Z.sent(),Z.label=16;case 16:return Array.isArray(B.current)&&B.current.length%O&&(G.current=!1),[3,24];case 17:return F=Z.sent(),M.current>=T&&q.current&&(Y.current=_("AbortError","Timeout Error")),z={attempt:M.current,error:F},(X=!b(S)&&Array.isArray(S)&&S.length<1)?[3,20]:(J=b(S))?[4,S(z)]:[3,19];case 18:J=Z.sent(),Z.label=19;case 19:X=J,Z.label=20;case 20:return X&&T>0&&T>M.current?[4,n(z,t,o)]:[3,22];case 21:return[2,Z.sent()];case 22:return"AbortError"!==F.name&&(Y.current=F),[3,24];case 23:return q.current=!1,p&&clearTimeout(p),W.current=void 0,[7];case 24:return!k||k.ok||Y.current||(Y.current=_(k.status,k.statusText)),P||Q(!1),M.current===T&&(M.current=0),Y.current&&w({error:Y.current}),[2,B.current]}}))}))},n=function(r,n,o){return ue(e,void 0,void 0,(function(){var e;return ce(this,(function(a){switch(a.label){case 0:return e=b(N)?N(r):N,Number.isInteger(e)&&e>=0||console.error("retryDelay must be a number >= 0! If you're using it as a function, it must also return a number >= 0."),M.current++,e?[4,j(e)]:[3,2];case 1:a.sent(),a.label=2;case 2:return[4,t(n,o)];case 3:return[2,a.sent()]}}))}))};return P?function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return ue(e,void 0,void 0,(function(){return ce(this,(function(e){switch(e.label){case 0:return X.current=t.apply(void 0,r).then((function(e){return z.current="success",e}),(function(){z.current="error"})),V(),[4,X.current];case 1:return[2,e.sent()]}}))}))}:t}),[D,m,f,i,s,y,v,O,A,k,h,E,L.data,g,V,P]),re=(0,a.useCallback)(ee(n.POST),[ee]),te=(0,a.useCallback)(ee(n.DELETE),[ee]),ne=(0,a.useMemo)((function(){return Object.defineProperties({get:ee(n.GET),post:re,patch:ee(n.PATCH),put:ee(n.PUT),options:ee(n.OPTIONS),head:ee(n.HEAD),connect:ee(n.CONNECT),trace:ee(n.TRACE),del:te,delete:te,abort:function(){return W.current&&W.current.abort()},query:function(e,r){return re({query:e,variables:r})},mutate:function(e,r){return re({mutation:e,variables:r})},cache:$},{loading:{get:function(){return K.current}},error:{get:function(){return Y.current}},data:{get:function(){return B.current}}})}),[ee]),oe=(0,a.useMemo)((function(){return R(H,B)}),[]);if((0,a.useEffect)((function(){if(J.current=!0,Array.isArray(p)){var e=(f.method||n.GET).toLowerCase();(0,ne[e])()}return function(){return J.current=!1}}),p),(0,a.useEffect)((function(){return ne.abort}),[]),P&&X.current){if(D)throw new Error("Suspense on server side is not yet supported! \ud83d\ude45\u200d\u2642\ufe0f");switch(z.current){case"pending":throw X.current;case"error":throw Y.current}}return Object.assign([ne,oe,K.current,Y.current],ie(ie({request:ne,response:oe},ne),{loading:K.current,data:B.current,error:Y.current}))}},38137:function(e,r){var t,n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(t=r.Device||(r.Device={}));var o=t.Browser,a=t.Server,i=t.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),c="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:u?o:a,s={isBrowser:c===o,isServer:c===a,isNative:c===i,device:c,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:c===o&&!!window.addEventListener,canUseViewport:c===o&&!!window.screen},l=function(){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.reduce((function(e,r){return n(n({},e),r)}),{})}((e=s,Object.keys(e).map((function(r){return e[r]})),s));var e},f=l();r.weAreServer=function(){s.isServer=!0,f=l()},r.useSSR=function(){return f},r.default=r.useSSR}}]);