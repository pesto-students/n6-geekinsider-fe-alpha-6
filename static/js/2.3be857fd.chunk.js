(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[2],{287:function(e,t,n){"use strict";var a=n(3),r=n(2),c=n(126),o=n(172),i=n(1),l=n(0),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(15),d=function(e,t){return l.createElement(s.a,Object(i.a)(Object(i.a)({},e),{},{ref:t,icon:u}))};d.displayName="PlusOutlined";var f=l.forwardRef(d),b=n(9),v=n.n(b),m=n(6),p=n(10),h=n(21),O=n(121),j=n(146),y=n(113),g=n(46),E=n(23),k=n(112);function w(e){var t=Object(l.useRef)(),n=Object(l.useRef)(!1);return Object(l.useEffect)((function(){return n.current=!1,function(){n.current=!0,E.a.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n.current||(E.a.cancel(t.current),t.current=Object(E.a)((function(){e.apply(void 0,r)})))}}var x=n(118);function C(e,t){var n,r=e.prefixCls,c=e.id,o=e.active,i=e.tab,u=i.key,s=i.tab,d=i.disabled,f=i.closeIcon,b=e.closable,m=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,O=e.onClick,j=e.onRemove,y=e.onFocus,g=e.style,E="".concat(r,"-tab");l.useEffect((function(){return j}),[]);var k=h&&!1!==b&&!d;function w(e){d||O(e)}var C=l.createElement("div",{key:u,ref:t,className:v()(E,(n={},Object(a.a)(n,"".concat(E,"-with-remove"),k),Object(a.a)(n,"".concat(E,"-active"),o),Object(a.a)(n,"".concat(E,"-disabled"),d),n)),style:g,onClick:w},l.createElement("div",{role:"tab","aria-selected":o,id:c&&"".concat(c,"-tab-").concat(u),className:"".concat(E,"-btn"),"aria-controls":c&&"".concat(c,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),w(e)},onKeyDown:function(e){[x.a.SPACE,x.a.ENTER].includes(e.which)&&(e.preventDefault(),w(e))},onFocus:y},s),k&&l.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(E,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},f||h.removeIcon||"\xd7"));return m?m(C):C}var N=l.forwardRef(C),I={width:0,height:0,left:0,top:0};var T={width:0,height:0,left:0,top:0,right:0};var P=n(137),S=n(193);function R(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,c=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var M=l.forwardRef(R);function L(e,t){var n=e.prefixCls,r=e.id,c=e.tabs,o=e.locale,i=e.mobile,u=e.moreIcon,s=void 0===u?"More":u,d=e.moreTransitionName,f=e.style,b=e.className,p=e.editable,h=e.tabBarGutter,O=e.rtl,j=e.removeAriaLabel,y=e.onTabClick,g=e.popupClassName,E=Object(l.useState)(!1),k=Object(m.a)(E,2),w=k[0],C=k[1],N=Object(l.useState)(null),I=Object(m.a)(N,2),T=I[0],R=I[1],L="".concat(r,"-more-popup"),A="".concat(n,"-dropdown"),B=null!==T?"".concat(L,"-").concat(T):null,D=null===o||void 0===o?void 0:o.dropdownAriaLabel;var K=l.createElement(P.g,{onClick:function(e){var t=e.key,n=e.domEvent;y(t,n),C(!1)},prefixCls:"".concat(A,"-menu"),id:L,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[T],"aria-label":void 0!==D?D:"expanded dropdown"},c.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return l.createElement(P.d,{key:e.key,id:"".concat(L,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.tab),t&&l.createElement("button",{type:"button","aria-label":j||"remove",tabIndex:0,className:"".concat(A,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),p.onEdit("remove",{key:a,event:n})}},e.closeIcon||p.removeIcon||"\xd7"))})));function W(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===T}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void R(o.key)}}Object(l.useEffect)((function(){var e=document.getElementById(B);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[T]),Object(l.useEffect)((function(){w||R(null)}),[w]);var q=Object(a.a)({},O?"marginRight":"marginLeft",h);c.length||(q.visibility="hidden",q.order=1);var V=v()(Object(a.a)({},"".concat(A,"-rtl"),O)),z=i?null:l.createElement(S.a,{prefixCls:A,overlay:K,trigger:["hover"],visible:w,transitionName:d,onVisibleChange:C,overlayClassName:v()(V,g),mouseEnterDelay:.1,mouseLeaveDelay:.1},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":L,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case x.a.UP:W(-1),e.preventDefault();break;case x.a.DOWN:W(1),e.preventDefault();break;case x.a.ESC:C(!1);break;case x.a.SPACE:case x.a.ENTER:null!==T&&y(T,e)}else[x.a.DOWN,x.a.SPACE,x.a.ENTER].includes(t)&&(C(!0),e.preventDefault())}},s));return l.createElement("div",{className:v()("".concat(n,"-nav-operations"),b),style:f,ref:t},z,l.createElement(M,{prefixCls:n,locale:o,editable:p}))}var A=l.memo(l.forwardRef(L),(function(e,t){return t.tabMoving})),B=Object(l.createContext)(null),D=Math.pow(.995,20);function K(e,t){var n=l.useRef(e),a=l.useState({}),r=Object(m.a)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var W=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var c={};return r&&"object"===Object(p.a)(r)&&!l.isValidElement(r)?c=r:c.right=r,"right"===n&&(t=c.right),"left"===n&&(t=c.left),t?l.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function q(e,t){var n,c=l.useContext(B),o=c.prefixCls,u=c.tabs,s=e.className,d=e.style,f=e.id,b=e.animated,p=e.activeKey,h=e.rtl,O=e.extra,j=e.editable,y=e.locale,x=e.tabPosition,C=e.tabBarGutter,P=e.children,S=e.onTabClick,R=e.onTabScroll,L=Object(l.useRef)(),q=Object(l.useRef)(),V=Object(l.useRef)(),z=Object(l.useRef)(),G=function(){var e=Object(l.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,l.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),H=Object(m.a)(G,2),Y=H[0],_=H[1],F="top"===x||"bottom"===x,X=K(0,(function(e,t){F&&R&&R({direction:e>t?"left":"right"})})),J=Object(m.a)(X,2),U=J[0],Q=J[1],Z=K(0,(function(e,t){!F&&R&&R({direction:e>t?"top":"bottom"})})),$=Object(m.a)(Z,2),ee=$[0],te=$[1],ne=Object(l.useState)(0),ae=Object(m.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(l.useState)(0),ie=Object(m.a)(oe,2),le=ie[0],ue=ie[1],se=Object(l.useState)(null),de=Object(m.a)(se,2),fe=de[0],be=de[1],ve=Object(l.useState)(null),me=Object(m.a)(ve,2),pe=me[0],he=me[1],Oe=Object(l.useState)(0),je=Object(m.a)(Oe,2),ye=je[0],ge=je[1],Ee=Object(l.useState)(0),ke=Object(m.a)(Ee,2),we=ke[0],xe=ke[1],Ce=function(e){var t=Object(l.useRef)([]),n=Object(l.useState)({}),a=Object(m.a)(n,2)[1],r=Object(l.useRef)("function"===typeof e?e():e),c=w((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Ne=Object(m.a)(Ce,2),Ie=Ne[0],Te=Ne[1],Pe=function(e,t,n){return Object(l.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||I,c=r.left+r.width,o=0;o<e.length;o+=1){var l,u=e[o].key,s=t.get(u);s||(s=t.get(null===(l=e[o-1])||void 0===l?void 0:l.key)||I);var d=a.get(u)||Object(i.a)({},s);d.right=c-d.left-d.width,a.set(u,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Ie,re),Se="".concat(o,"-nav-operations-hidden"),Re=0,Me=0;function Le(e){return e<Re?Re:e>Me?Me:e}F?h?(Re=0,Me=Math.max(0,re-fe)):(Re=Math.min(0,fe-re),Me=0):(Re=Math.min(0,pe-le),Me=0);var Ae=Object(l.useRef)(),Be=Object(l.useState)(),De=Object(m.a)(Be,2),Ke=De[0],We=De[1];function qe(){We(Date.now())}function Ve(){window.clearTimeout(Ae.current)}function ze(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=Pe.get(e)||{width:0,height:0,left:0,right:0,top:0};if(F){var n=U;h?t.right<U?n=t.right:t.right+t.width>U+fe&&(n=t.right+t.width-fe):t.left<-U?n=-t.left:t.left+t.width>-U+fe&&(n=-(t.left+t.width-fe)),te(0),Q(Le(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+pe&&(a=-(t.top+t.height-pe)),Q(0),te(Le(a))}}!function(e,t){var n=Object(l.useState)(),a=Object(m.a)(n,2),r=a[0],c=a[1],o=Object(l.useState)(0),i=Object(m.a)(o,2),u=i[0],s=i[1],d=Object(l.useState)(0),f=Object(m.a)(d,2),b=f[0],v=f[1],p=Object(l.useState)(),h=Object(m.a)(p,2),O=h[0],j=h[1],y=Object(l.useRef)(),g=Object(l.useRef)(),E=Object(l.useRef)(null);E.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(y.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var d=Date.now();s(d),v(d-u),j({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),j(null),O)){var e=O.x/b,n=O.y/b,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;y.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(y.current):t(20*(i*=D),20*(l*=D))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,c=Math.abs(n),o=Math.abs(a);c===o?r="x"===g.current?n:a:c>o?(r=n,g.current="x"):(r=a,g.current="y"),t(-r,-r)&&e.preventDefault()}},l.useEffect((function(){function t(e){E.current.onTouchMove(e)}function n(e){E.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){E.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){E.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(L,(function(e,t){function n(e,t){e((function(e){return Le(e+t)}))}if(F){if(fe>=re)return!1;n(Q,e)}else{if(pe>=le)return!1;n(te,t)}return Ve(),qe(),!0})),Object(l.useEffect)((function(){return Ve(),Ke&&(Ae.current=window.setTimeout((function(){We(0)}),100)),Ve}),[Ke]);var Ge=function(e,t,n,a,r){var c,o,i,u=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(c="width",o=d?"right":"left",i=Math.abs(t.left)):(c="height",o="top",i=-t.top);var f=t[c],b=n[c],v=a[c],m=f;return b+v>f&&b<f&&(m=f-v),Object(l.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||T;if(r[o]+r[c]>i+m){n=a-1;break}}for(var l=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||T)[o]<i){l=s+1;break}return[l,n]}),[e,i,m,s,u.map((function(e){return e.key})).join("_"),d])}(Pe,{width:fe,height:pe,left:U,top:ee},{width:re,height:le},{width:ye,height:we},Object(i.a)(Object(i.a)({},e),{},{tabs:u})),He=Object(m.a)(Ge,2),Ye=He[0],_e=He[1],Fe={};"top"===x||"bottom"===x?Fe[h?"marginRight":"marginLeft"]=C:Fe.marginTop=C;var Xe=u.map((function(e,t){var n=e.key;return l.createElement(N,{id:f,prefixCls:o,key:n,tab:e,style:0===t?void 0:Fe,closable:e.closable,editable:j,active:n===p,renderWrapper:P,removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,ref:Y(n),onClick:function(e){S(n,e)},onRemove:function(){_(n)},onFocus:function(){ze(n),qe(),L.current&&(h||(L.current.scrollLeft=0),L.current.scrollTop=0)}})})),Je=w((function(){var e,t,n,a,r,c,o=(null===(e=L.current)||void 0===e?void 0:e.offsetWidth)||0,i=(null===(t=L.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=z.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(a=z.current)||void 0===a?void 0:a.offsetHeight)||0;be(o),he(i),ge(l),xe(s);var d=((null===(r=q.current)||void 0===r?void 0:r.offsetWidth)||0)-l,f=((null===(c=q.current)||void 0===c?void 0:c.offsetHeight)||0)-s;ce(d),ue(f),Te((function(){var e=new Map;return u.forEach((function(t){var n=t.key,a=Y(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Ue=u.slice(0,Ye),Qe=u.slice(_e+1),Ze=[].concat(Object(g.a)(Ue),Object(g.a)(Qe)),$e=Object(l.useState)(),et=Object(m.a)($e,2),tt=et[0],nt=et[1],at=Pe.get(p),rt=Object(l.useRef)();function ct(){E.a.cancel(rt.current)}Object(l.useEffect)((function(){var e={};return at&&(F?(h?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),ct(),rt.current=Object(E.a)((function(){nt(e)})),ct}),[at,F,h]),Object(l.useEffect)((function(){ze()}),[p,at,Pe,F]),Object(l.useEffect)((function(){Je()}),[h,C,p,u.map((function(e){return e.key})).join("_")]);var ot,it,lt,ut,st=!!Ze.length,dt="".concat(o,"-nav-wrap");return F?h?(it=U>0,ot=U+fe<re):(ot=U<0,it=-U+fe<re):(lt=ee<0,ut=-ee+pe<le),l.createElement("div",{ref:t,role:"tablist",className:v()("".concat(o,"-nav"),s),style:d,onKeyDown:function(){qe()}},l.createElement(W,{position:"left",extra:O,prefixCls:o}),l.createElement(k.a,{onResize:Je},l.createElement("div",{className:v()(dt,(n={},Object(a.a)(n,"".concat(dt,"-ping-left"),ot),Object(a.a)(n,"".concat(dt,"-ping-right"),it),Object(a.a)(n,"".concat(dt,"-ping-top"),lt),Object(a.a)(n,"".concat(dt,"-ping-bottom"),ut),n)),ref:L},l.createElement(k.a,{onResize:Je},l.createElement("div",{ref:q,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Ke?"none":void 0}},Xe,l.createElement(M,{ref:z,prefixCls:o,locale:y,editable:j,style:Object(i.a)(Object(i.a)({},0===Xe.length?void 0:Fe),{},{visibility:st?"hidden":null})}),l.createElement("div",{className:v()("".concat(o,"-ink-bar"),Object(a.a)({},"".concat(o,"-ink-bar-animated"),b.inkBar)),style:tt}))))),l.createElement(A,Object(r.a)({},e,{removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,ref:V,prefixCls:o,tabs:Ze,className:!st&&Se,tabMoving:!!Ke})),l.createElement(W,{position:"right",extra:O,prefixCls:o}))}var V=l.forwardRef(q);function z(e){var t=e.id,n=e.activeKey,r=e.animated,c=e.tabPosition,o=e.rtl,i=e.destroyInactiveTabPane,u=l.useContext(B),s=u.prefixCls,d=u.tabs,f=r.tabPane,b=d.findIndex((function(e){return e.key===n}));return l.createElement("div",{className:v()("".concat(s,"-content-holder"))},l.createElement("div",{className:v()("".concat(s,"-content"),"".concat(s,"-content-").concat(c),Object(a.a)({},"".concat(s,"-content-animated"),f)),style:b&&f?Object(a.a)({},o?"marginRight":"marginLeft","-".concat(b,"00%")):null},d.map((function(e){return l.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:f,active:e.key===n,destroyInactiveTabPane:i})}))))}function G(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,o=e.active,u=e.animated,s=e.destroyInactiveTabPane,d=e.tabKey,f=e.children,b=l.useState(n),p=Object(m.a)(b,2),h=p[0],O=p[1];l.useEffect((function(){o?O(!0):s&&O(!1)}),[o,s]);var j={};return o||(u?(j.visibility="hidden",j.height=0,j.overflowY="hidden"):j.display="none"),l.createElement("div",{id:c&&"".concat(c,"-panel-").concat(d),role:"tabpanel",tabIndex:o?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(d),"aria-hidden":!o,style:Object(i.a)(Object(i.a)({},j),r),className:v()("".concat(t,"-tabpane"),o&&"".concat(t,"-tabpane-active"),a)},(o||h||n)&&f)}var H=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","popupClassName"],Y=0;function _(e,t){var n,c,o=e.id,u=e.prefixCls,s=void 0===u?"rc-tabs":u,d=e.className,f=e.children,b=e.direction,g=e.activeKey,E=e.defaultActiveKey,k=e.editable,w=e.animated,x=void 0===w?{inkBar:!0,tabPane:!1}:w,C=e.tabPosition,N=void 0===C?"top":C,I=e.tabBarGutter,T=e.tabBarStyle,P=e.tabBarExtraContent,S=e.locale,R=e.moreIcon,M=e.moreTransitionName,L=e.destroyInactiveTabPane,A=e.renderTabBar,D=e.onChange,K=e.onTabClick,W=e.onTabScroll,q=e.popupClassName,G=Object(h.a)(e,H),_=function(e){return Object(O.a)(e).map((function(e){if(l.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return Object(i.a)(Object(i.a)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(f),F="rtl"===b;c=!1===x?{inkBar:!1,tabPane:!1}:!0===x?{inkBar:!0,tabPane:!0}:Object(i.a)({inkBar:!0,tabPane:!1},"object"===Object(p.a)(x)?x:{});var X=Object(l.useState)(!1),J=Object(m.a)(X,2),U=J[0],Q=J[1];Object(l.useEffect)((function(){Q(Object(j.a)())}),[]);var Z=Object(y.a)((function(){var e;return null===(e=_[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:E}),$=Object(m.a)(Z,2),ee=$[0],te=$[1],ne=Object(l.useState)((function(){return _.findIndex((function(e){return e.key===ee}))})),ae=Object(m.a)(ne,2),re=ae[0],ce=ae[1];Object(l.useEffect)((function(){var e,t=_.findIndex((function(e){return e.key===ee}));-1===t&&(t=Math.max(0,Math.min(re,_.length-1)),te(null===(e=_[t])||void 0===e?void 0:e.key));ce(t)}),[_.map((function(e){return e.key})).join("_"),ee,re]);var oe=Object(y.a)(null,{value:o}),ie=Object(m.a)(oe,2),le=ie[0],ue=ie[1],se=N;U&&!["left","right"].includes(N)&&(se="top"),Object(l.useEffect)((function(){o||(ue("rc-tabs-".concat(Y)),Y+=1)}),[]);var de,fe={id:le,activeKey:ee,animated:c,tabPosition:se,rtl:F,mobile:U},be=Object(i.a)(Object(i.a)({},fe),{},{editable:k,locale:S,moreIcon:R,moreTransitionName:M,tabBarGutter:I,onTabClick:function(e,t){null===K||void 0===K||K(e,t);var n=e!==ee;te(e),n&&(null===D||void 0===D||D(e))},onTabScroll:W,extra:P,style:T,panes:f,popupClassName:q});return de=A?A(be,V):l.createElement(V,be),l.createElement(B.Provider,{value:{tabs:_,prefixCls:s}},l.createElement("div",Object(r.a)({ref:t,id:o,className:v()(s,"".concat(s,"-").concat(se),(n={},Object(a.a)(n,"".concat(s,"-mobile"),U),Object(a.a)(n,"".concat(s,"-editable"),k),Object(a.a)(n,"".concat(s,"-rtl"),F),n),d)},G),de,l.createElement(z,Object(r.a)({destroyInactiveTabPane:L},fe,{animated:c}))))}var F=l.forwardRef(_);F.TabPane=G;var X=F,J=n(66),U=n(51),Q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function Z(e){var t,n=e.type,i=e.className,u=e.size,s=e.onEdit,d=e.hideAdd,b=e.centered,m=e.addIcon,p=Q(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),h=p.prefixCls,O=p.moreIcon,j=void 0===O?l.createElement(o.a,null):O,y=l.useContext(J.b),g=y.getPrefixCls,E=y.direction,k=g("tabs",h);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===s||void 0===s||s("add"===e?a:n,e)},removeIcon:l.createElement(c.a,null),addIcon:m||l.createElement(f,null),showAdd:!0!==d});var w=g();return l.createElement(U.b.Consumer,null,(function(e){var c,o=void 0!==u?u:e;return l.createElement(X,Object(r.a)({direction:E,moreTransitionName:"".concat(w,"-slide-up")},p,{className:v()((c={},Object(a.a)(c,"".concat(k,"-").concat(o),o),Object(a.a)(c,"".concat(k,"-card"),["card","editable-card"].includes(n)),Object(a.a)(c,"".concat(k,"-editable-card"),"editable-card"===n),Object(a.a)(c,"".concat(k,"-centered"),b),c),i),editable:t,moreIcon:j,prefixCls:k}))}))}Z.TabPane=G;t.a=Z}}]);
//# sourceMappingURL=2.3be857fd.chunk.js.map