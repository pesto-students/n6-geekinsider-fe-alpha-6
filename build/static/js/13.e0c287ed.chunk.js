(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[13],{279:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=function(){return{height:0,opacity:0}},a=function(e){return{height:e.scrollHeight,opacity:1}},o=function(e,t){return!0===(null===t||void 0===t?void 0:t.deadline)||"height"===t.propertyName},c={motionName:"ant-motion-collapse",onAppearStart:r,onEnterStart:r,onAppearActive:a,onEnterActive:a,onLeaveStart:function(e){return{height:e.offsetHeight}},onLeaveActive:r,onAppearEnd:o,onEnterEnd:o,onLeaveEnd:o,motionDeadline:500},i=function(e,t,n){return void 0!==n?n:"".concat(e,"-").concat(t)};t.a=c},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(101);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r={adjustX:1,adjustY:1},a=[0,0],o={left:{points:["cr","cl"],overflow:r,offset:[-4,0],targetOffset:a},right:{points:["cl","cr"],overflow:r,offset:[4,0],targetOffset:a},top:{points:["bc","tc"],overflow:r,offset:[0,-4],targetOffset:a},bottom:{points:["tc","bc"],overflow:r,offset:[0,4],targetOffset:a},topLeft:{points:["bl","tl"],overflow:r,offset:[0,-4],targetOffset:a},leftTop:{points:["tr","tl"],overflow:r,offset:[-4,0],targetOffset:a},topRight:{points:["br","tr"],overflow:r,offset:[0,-4],targetOffset:a},rightTop:{points:["tl","tr"],overflow:r,offset:[4,0],targetOffset:a},bottomRight:{points:["tr","br"],overflow:r,offset:[0,4],targetOffset:a},rightBottom:{points:["bl","br"],overflow:r,offset:[4,0],targetOffset:a},bottomLeft:{points:["tl","bl"],overflow:r,offset:[0,4],targetOffset:a},leftBottom:{points:["br","bl"],overflow:r,offset:[-4,0],targetOffset:a}}},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(0);var r=n(13),a=function(e){var t=e.children,n=e.title;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:Object(r.jsx)("b",{children:n})}),null===t||void 0===t?void 0:t.split("\n").map((function(e){return Object(r.jsxs)("span",{children:[e,Object(r.jsx)("br",{})]},e)}))]})}},287:function(e,t,n){"use strict";var r=n(6),a=n(12),o=n(5),c=n(0),i=n(298),s=n(289),l=n(11),u=n.n(l),f=n(284),p={adjustX:1,adjustY:1},d={adjustX:0,adjustY:0},b=[0,0];function v(e){return"boolean"===typeof e?e?p:d:Object(o.a)(Object(o.a)({},d),e)}var j=n(33),m=n(163),O=n(42),h=(Object(O.a)("success","processing","error","default","warning"),Object(O.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")),y=n(279),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=new RegExp("^(".concat(h.join("|"),")(-inverse)?$"));function C(e,t){var n=e.type;if((!0===n.__ANT_BUTTON||!0===n.__ANT_SWITCH||!0===n.__ANT_CHECKBOX||"button"===e.type)&&e.props.disabled){var r=function(e,t){var n={},r=Object(o.a)({},e);return t.forEach((function(t){e&&t in e&&(n[t]=e[t],delete r[t])})),{picked:n,omitted:r}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),a=r.picked,i=r.omitted,s=Object(o.a)(Object(o.a)({display:"inline-block"},a),{cursor:"not-allowed",width:e.props.block?"100%":null}),l=Object(o.a)(Object(o.a)({},i),{pointerEvents:"none"}),f=Object(j.a)(e,{style:l,className:null});return c.createElement("span",{style:s,className:u()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},f)}return e}var w=c.forwardRef((function(e,t){var n,l=c.useContext(m.b),p=l.getPopupContainer,d=l.getPrefixCls,O=l.direction,h=Object(s.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),w=Object(a.a)(h,2),N=w[0],E=w[1],k=function(){var t=e.title,n=e.overlay;return!t&&!n&&0!==t},S=function(){var t=e.builtinPlacements,n=e.arrowPointAtCenter,r=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,n=void 0===t?4:t,r=e.horizontalArrowShift,a=void 0===r?16:r,c=e.verticalArrowShift,i=void 0===c?8:c,s=e.autoAdjustOverflow,l={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(a+n),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(i+n)]},topRight:{points:["br","tc"],offset:[a+n,-4]},rightTop:{points:["tl","cr"],offset:[4,-(i+n)]},bottomRight:{points:["tr","bc"],offset:[a+n,4]},rightBottom:{points:["bl","cr"],offset:[4,i+n]},bottomLeft:{points:["tl","bc"],offset:[-(a+n),4]},leftBottom:{points:["br","cl"],offset:[-4,i+n]}};return Object.keys(l).forEach((function(t){l[t]=e.arrowPointAtCenter?Object(o.a)(Object(o.a)({},l[t]),{overflow:v(s),targetOffset:b}):Object(o.a)(Object(o.a)({},f.a[t]),{overflow:v(s)}),l[t].ignoreShake=!0})),l}({arrowPointAtCenter:n,autoAdjustOverflow:r})},P=e.getPopupContainer,T=g(e,["getPopupContainer"]),A=e.prefixCls,R=e.openClassName,D=e.getTooltipContainer,I=e.overlayClassName,L=e.color,_=e.overlayInnerStyle,V=e.children,z=d("tooltip",A),B=d(),J=N;!("visible"in e)&&k()&&(J=!1);var K,F=C(Object(j.b)(V)?V:c.createElement("span",null,V),z),H=F.props,M=u()(H.className,Object(r.a)({},R||"".concat(z,"-open"),!0)),U=u()(I,(n={},Object(r.a)(n,"".concat(z,"-rtl"),"rtl"===O),Object(r.a)(n,"".concat(z,"-").concat(L),L&&x.test(L)),n)),W=_;return L&&!x.test(L)&&(W=Object(o.a)(Object(o.a)({},_),{background:L}),K={background:L}),c.createElement(i.a,Object(o.a)({},T,{prefixCls:z,overlayClassName:U,getTooltipContainer:P||D||p,ref:t,builtinPlacements:S(),overlay:function(){var t=e.title,n=e.overlay;return 0===t?t:n||t||""}(),visible:J,onVisibleChange:function(t){var n;E(!k()&&t),k()||null===(n=e.onVisibleChange)||void 0===n||n.call(e,t)},onPopupAlign:function(e,t){var n=S(),r=Object.keys(n).filter((function(e){return n[e].points[0]===t.points[0]&&n[e].points[1]===t.points[1]}))[0];if(r){var a=e.getBoundingClientRect(),o={top:"50%",left:"50%"};r.indexOf("top")>=0||r.indexOf("Bottom")>=0?o.top="".concat(a.height-t.offset[1],"px"):(r.indexOf("Top")>=0||r.indexOf("bottom")>=0)&&(o.top="".concat(-t.offset[1],"px")),r.indexOf("left")>=0||r.indexOf("Right")>=0?o.left="".concat(a.width-t.offset[0],"px"):(r.indexOf("right")>=0||r.indexOf("Left")>=0)&&(o.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(o.left," ").concat(o.top)}},overlayInnerStyle:W,arrowContent:c.createElement("span",{className:"".concat(z,"-arrow-content"),style:K}),motion:{motionName:Object(y.b)(B,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),J?Object(j.a)(F,{className:M}):F)}));w.displayName="Tooltip",w.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};t.a=w},298:function(e,t,n){"use strict";var r=n(5),a=n(17),o=n(4),c=n(39),i=n(0),s=n(299),l=n(284),u=function(e){var t=e.overlay,n=e.prefixCls,r=e.id,a=e.overlayInnerStyle;return i.createElement("div",{className:"".concat(n,"-inner"),id:r,role:"tooltip",style:a},"function"===typeof t?t():t)},f=function(e,t){var n=e.overlayClassName,f=e.trigger,p=void 0===f?["hover"]:f,d=e.mouseEnterDelay,b=void 0===d?0:d,v=e.mouseLeaveDelay,j=void 0===v?.1:v,m=e.overlayStyle,O=e.prefixCls,h=void 0===O?"rc-tooltip":O,y=e.children,g=e.onVisibleChange,x=e.afterVisibleChange,C=e.transitionName,w=e.animation,N=e.motion,E=e.placement,k=void 0===E?"right":E,S=e.align,P=void 0===S?{}:S,T=e.destroyTooltipOnHide,A=void 0!==T&&T,R=e.defaultVisible,D=e.getTooltipContainer,I=e.overlayInnerStyle,L=Object(c.a)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),_=Object(i.useRef)(null);Object(i.useImperativeHandle)(t,(function(){return _.current}));var V=Object(o.a)({},L);"visible"in e&&(V.popupVisible=e.visible);var z=!1,B=!1;if("boolean"===typeof A)z=A;else if(A&&"object"===Object(a.a)(A)){var J=A.keepParent;z=!0===J,B=!1===J}return i.createElement(s.a,Object(r.a)({popupClassName:n,prefixCls:h,popup:function(){var t=e.arrowContent,n=void 0===t?null:t,r=e.overlay,a=e.id;return[i.createElement("div",{className:"".concat(h,"-arrow"),key:"arrow"},n),i.createElement(u,{key:"content",prefixCls:h,id:a,overlay:r,overlayInnerStyle:I})]},action:p,builtinPlacements:l.a,popupPlacement:k,ref:_,popupAlign:P,getPopupContainer:D,onPopupVisibleChange:g,afterPopupVisibleChange:x,popupTransitionName:C,popupAnimation:w,popupMotion:N,defaultPopupVisible:R,destroyPopupOnHide:z,autoDestroy:B,mouseLeaveDelay:j,popupStyle:m,mouseEnterDelay:b},V),y)},p=Object(i.forwardRef)(f);t.a=p},331:function(e,t,n){"use strict";function r(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}n.d(t,"a",(function(){return r}))},336:function(e,t,n){},338:function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(17),c=n(12),i=n(0),s=n(11),l=n.n(s),u=n(294),f=n(57),p=n(163),d=n(56),b=n(282);var v=function(){var e=Object(i.useState)({}),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=b.a.subscribe((function(e){r(e)}));return function(){return b.a.unsubscribe(e)}}),[]),n},j=i.createContext("default"),m=function(e){var t=e.children,n=e.size;return i.createElement(j.Consumer,null,(function(e){return i.createElement(j.Provider,{value:n||e},t)}))},O=j,h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=function(e,t){var n,s,j=i.useContext(O),m=i.useState(1),y=Object(c.a)(m,2),g=y[0],x=y[1],C=i.useState(!1),w=Object(c.a)(C,2),N=w[0],E=w[1],k=i.useState(!0),S=Object(c.a)(k,2),P=S[0],T=S[1],A=i.useRef(),R=i.useRef(),D=Object(f.a)(t,A),I=i.useContext(p.b).getPrefixCls,L=function(){if(R.current&&A.current){var t=R.current.offsetWidth,n=A.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&x(n-2*a<t?(n-2*a)/t:1)}}};i.useEffect((function(){E(!0)}),[]),i.useEffect((function(){T(!0),x(1)}),[e.src]),i.useEffect((function(){L()}),[e.gap]);var _=e.prefixCls,V=e.shape,z=e.size,B=e.src,J=e.srcSet,K=e.icon,F=e.className,H=e.alt,M=e.draggable,U=e.children,W=h(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),X="default"===z?j:z,G=v(),q=i.useMemo((function(){if("object"!==Object(o.a)(X))return{};var e=b.b.find((function(e){return G[e]})),t=X[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:K?t/2:18}:{}}),[G,X]);Object(d.a)(!("string"===typeof K&&K.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(K,"` at https://ant.design/components/icon"));var Y,$=I("avatar",_),Q=l()((n={},Object(a.a)(n,"".concat($,"-lg"),"large"===X),Object(a.a)(n,"".concat($,"-sm"),"small"===X),n)),Z=i.isValidElement(B),ee=l()($,Q,(s={},Object(a.a)(s,"".concat($,"-").concat(V),!!V),Object(a.a)(s,"".concat($,"-image"),Z||B&&P),Object(a.a)(s,"".concat($,"-icon"),!!K),s),F),te="number"===typeof X?{width:X,height:X,lineHeight:"".concat(X,"px"),fontSize:K?X/2:18}:{};if("string"===typeof B&&P)Y=i.createElement("img",{src:B,draggable:M,srcSet:J,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&T(!1)},alt:H});else if(Z)Y=B;else if(K)Y=K;else if(N||1!==g){var ne="scale(".concat(g,") translateX(-50%)"),re={msTransform:ne,WebkitTransform:ne,transform:ne},ae="number"===typeof X?{lineHeight:"".concat(X,"px")}:{};Y=i.createElement(u.a,{onResize:L},i.createElement("span",{className:"".concat($,"-string"),ref:function(e){R.current=e},style:Object(r.a)(Object(r.a)({},ae),re)},U))}else Y=i.createElement("span",{className:"".concat($,"-string"),style:{opacity:0},ref:function(e){R.current=e}},U);return delete W.onError,delete W.gap,i.createElement("span",Object(r.a)({},W,{style:Object(r.a)(Object(r.a)(Object(r.a)({},te),q),W.style),className:ee,ref:D}),Y)},g=i.forwardRef(y);g.displayName="Avatar",g.defaultProps={shape:"circle",size:"default"};var x=g,C=n(288),w=n(33),N=n(287),E=function(e){return e?"function"===typeof e?e():e:null},k=n(279),S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},P=i.forwardRef((function(e,t){var n=e.prefixCls,a=e.title,o=e.content,c=S(e,["prefixCls","title","content"]),s=i.useContext(p.b).getPrefixCls,l=s("popover",n),u=s();return i.createElement(N.a,Object(r.a)({},c,{prefixCls:l,ref:t,overlay:function(e){return i.createElement(i.Fragment,null,a&&i.createElement("div",{className:"".concat(e,"-title")},E(a)),i.createElement("div",{className:"".concat(e,"-inner-content")},E(o)))}(l),transitionName:Object(k.b)(u,"zoom-big",c.transitionName)}))}));P.displayName="Popover",P.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var T=P,A=function(e){var t=i.useContext(p.b),n=t.getPrefixCls,r=t.direction,o=e.prefixCls,c=e.className,s=void 0===c?"":c,u=e.maxCount,f=e.maxStyle,d=e.size,b=n("avatar-group",o),v=l()(b,Object(a.a)({},"".concat(b,"-rtl"),"rtl"===r),s),j=e.children,O=e.maxPopoverPlacement,h=void 0===O?"top":O,y=Object(C.a)(j).map((function(e,t){return Object(w.a)(e,{key:"avatar-key-".concat(t)})})),g=y.length;if(u&&u<g){var N=y.slice(0,u),E=y.slice(u,g);return N.push(i.createElement(T,{key:"avatar-popover-key",content:E,trigger:"hover",placement:h,overlayClassName:"".concat(b,"-popover")},i.createElement(x,{style:f},"+".concat(g-u)))),i.createElement(m,{size:d},i.createElement("div",{className:v,style:e.style},N))}return i.createElement(m,{size:d},i.createElement("div",{className:v,style:e.style},y))},R=x;R.Group=A;t.a=R},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(0);var r=n(485),a=n(245),o=n(286),c=n(83),i=n(94),s=n(311),l=n(283),u=n(10),f=(n(336),n(285)),p=n(13),d=Object(i.b)((function(e){return{}}),(function(e){return Object(c.b)({applyForJob:s.a},e)}))((function(e){Object(u.g)();var t=e.jobTitle,n=e.skills,c=e.jobLocation,i=e.ctc,s=e.exp,d=(e.numberOfApplications,e.jobDescription),b=e.companyName,v=e.applyForJob,j=e.jobslug,m="string"===typeof n?n.split(","):n;return Object(p.jsx)("div",{className:"job-posting-detail-widget",children:Object(p.jsxs)(r.a,{children:[Object(p.jsxs)("section",{className:"each-widget",children:[Object(p.jsxs)("div",{className:"right-section",children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("span",{children:b})]}),Object(p.jsx)("div",{className:"action-buttons",children:Object(p.jsx)(a.a,{type:"primary",onClick:function(){j&&v(j)},children:"Apply"})})]}),Object(p.jsx)("section",{className:"tags-section",children:m.map((function(e){return Object(p.jsx)("span",{className:"tags",children:e},e)}))}),Object(p.jsxs)("section",{className:"footer-section",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(o.d,{style:l.c}),c]}),Object(p.jsxs)("div",{title:"".concat(i," lacs per annum"),children:[Object(p.jsx)(o.e,{style:l.c}),i," LPA"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(o.b,{style:l.c}),s," year"]})]}),Object(p.jsx)(f.a,{title:"About the job",children:d})]})})}))},445:function(e,t,n){},446:function(e,t,n){},473:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return te})),n.d(t,"SearchResults",(function(){return r}));var r={};n.r(r),n.d(r,"default",(function(){return Z}));var a=n(0),o=n.n(a),c=n(6),i=n(5),s=n(39),l=n(4),u=n(23),f=n(28),p=n(29),d=n(30),b=n(11),v=n.n(b),j=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(u.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.disabled,a=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:Object(l.a)(Object(l.a)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return Object(f.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,a=t.style,l=t.name,u=t.id,f=t.type,p=t.disabled,d=t.readOnly,b=t.tabIndex,j=t.onClick,m=t.onFocus,O=t.onBlur,h=t.onKeyDown,y=t.onKeyPress,g=t.onKeyUp,x=t.autoFocus,C=t.value,w=t.required,N=Object(s.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(N).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=N[t]),e}),{}),k=this.state.checked,S=v()(n,r,(e={},Object(c.a)(e,"".concat(n,"-checked"),k),Object(c.a)(e,"".concat(n,"-disabled"),p),e));return o.a.createElement("span",{className:S,style:a},o.a.createElement("input",Object(i.a)({name:l,id:u,type:f,required:w,readOnly:d,disabled:p,tabIndex:b,className:"".concat(n,"-input"),checked:!!k,onClick:j,onFocus:m,onBlur:O,onKeyUp:g,onKeyDown:h,onKeyPress:y,onChange:this.handleChange,autoFocus:x,ref:this.saveInput,value:C},E)),o.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(l.a)(Object(l.a)({},t),{},{checked:e.checked}):null}}]),n}(a.Component);j.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var m=j,O=n(57),h=n(163),y=a.createContext(null),g=y.Provider,x=y,C=n(56),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},N=function(e,t){var n,r=a.useContext(x),o=a.useContext(h.b),s=o.getPrefixCls,l=o.direction,u=a.useRef(),f=Object(O.a)(t,u);a.useEffect((function(){Object(C.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var p=e.prefixCls,d=e.className,b=e.children,j=e.style,y=w(e,["prefixCls","className","children","style"]),g=s("radio",p),N=Object(i.a)({},y);r&&(N.name=r.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===r||void 0===r?void 0:r.onChange)||void 0===a||a.call(r,t)},N.checked=e.value===r.value,N.disabled=e.disabled||r.disabled);var E=v()("".concat(g,"-wrapper"),(n={},Object(c.a)(n,"".concat(g,"-wrapper-checked"),N.checked),Object(c.a)(n,"".concat(g,"-wrapper-disabled"),N.disabled),Object(c.a)(n,"".concat(g,"-wrapper-rtl"),"rtl"===l),n),d);return a.createElement("label",{className:E,style:j,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},a.createElement(m,Object(i.a)({},N,{prefixCls:g,ref:f})),void 0!==b?a.createElement("span",null,b):null)},E=a.forwardRef(N);E.displayName="Radio",E.defaultProps={type:"radio"};var k=E,S=n(12),P=n(289),T=n(96),A=n(331),R=a.forwardRef((function(e,t){var n=a.useContext(h.b),r=n.getPrefixCls,o=n.direction,s=a.useContext(T.b),l=Object(P.a)(e.defaultValue,{value:e.value}),u=Object(S.a)(l,2),f=u[0],p=u[1];return a.createElement(g,{value:{onChange:function(t){var n=f,r=t.target.value;"value"in e||p(r);var a=e.onChange;a&&r!==n&&a(t)},value:f,disabled:e.disabled,name:e.name}},function(){var n,l=e.prefixCls,u=e.className,p=void 0===u?"":u,d=e.options,b=e.optionType,j=e.buttonStyle,m=void 0===j?"outline":j,O=e.disabled,h=e.children,y=e.size,g=e.style,x=e.id,C=e.onMouseEnter,w=e.onMouseLeave,N=r("radio",l),E="".concat(N,"-group"),S=h;if(d&&d.length>0){var P="button"===b?"".concat(N,"-button"):N;S=d.map((function(e){return"string"===typeof e?a.createElement(k,{key:e,prefixCls:P,disabled:O,value:e,checked:f===e},e):a.createElement(k,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||O,value:e.value,checked:f===e.value,style:e.style},e.label)}))}var T=y||s,R=v()(E,"".concat(E,"-").concat(m),(n={},Object(c.a)(n,"".concat(E,"-").concat(T),T),Object(c.a)(n,"".concat(E,"-rtl"),"rtl"===o),n),p);return a.createElement("div",Object(i.a)({},Object(A.a)(e),{className:R,style:g,onMouseEnter:C,onMouseLeave:w,id:x,ref:t}),S)}())})),D=a.memo(R),I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},L=function(e,t){var n=a.useContext(x),r=a.useContext(h.b).getPrefixCls,o=e.prefixCls,c=I(e,["prefixCls"]),s=r("radio-button",o);return n&&(c.checked=e.value===n.value,c.disabled=e.disabled||n.disabled),a.createElement(k,Object(i.a)({prefixCls:s},c,{type:"radio",ref:t}))},_=a.forwardRef(L),V=k;V.Button=_,V.Group=D;var z=V,B=n(94),J=n(83),K=n(7),F=n(281),H=n(485),M=n(338),U=n(441),W=n(442),X=n(55),G=n(286),q=n(342),Y=n(283),$=(n(445),n(13)),Q=function(e){var t=e.itm,n=e.setSelectedData,r=e.selectedData,a=t.jobTitle,o=t.skills,c=t.jobLocation,i=t.ctc,s=t.exp,l=(t.numberOfApplications,t.jobDescription,t.companyName);t.jobslug;return Object($.jsxs)(H.a,{hoverable:!0,onClick:function(){return n(t)},className:(null===t||void 0===t?void 0:t.jobslug)===(null===r||void 0===r?void 0:r.jobslug)?"active-card":"",children:[Object($.jsxs)("section",{className:"each-widget",children:[Object($.jsx)(M.a,{size:55,children:l[0]}),Object($.jsxs)("div",{className:"right-section",children:[Object($.jsx)("span",{children:l}),Object($.jsx)("h3",{title:a,children:a})]})]}),Object($.jsx)("section",{className:"tags-section",children:o.map((function(e){return Object($.jsx)("span",{className:"tags",children:e},e)}))}),Object($.jsxs)("section",{className:"footer-section",children:[Object($.jsxs)("div",{children:[Object($.jsx)(G.d,{style:Y.c}),c]}),Object($.jsxs)("div",{title:"".concat(i," lacs per annum"),children:[Object($.jsx)(G.e,{style:Y.c}),i," LPA"]}),Object($.jsxs)("div",{children:[Object($.jsx)(G.b,{style:Y.c}),s," year"]})]})]})},Z=Object(B.b)((function(e){return{}}),(function(e){return Object(J.b)({},e)}))((function(e){var t=e.data,n=Object(a.useState)({}),r=Object(F.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){c(t[0])}),[t]),Object($.jsx)("div",{className:"search__results",children:t.length?Object($.jsxs)(U.a,{children:[Object($.jsx)(W.a,{span:8,xs:{span:12},sm:{span:10},md:{span:8},lg:{span:6},children:Object($.jsx)("div",{className:"search-result-widget-container",children:t.map((function(e,t){return Object($.jsx)(Q,{itm:e,index:t,selectedData:o,setSelectedData:c},null===e||void 0===e?void 0:e.jobslug)}))})}),Object($.jsx)(W.a,{span:16,xs:{span:12},sm:{span:14},md:{span:16},lg:{span:18},children:o&&Object.keys(o).length>0?Object($.jsx)(q.a,Object(K.a)({},Object(K.a)({},o))):Object($.jsx)(X.a,{})})]}):Object($.jsxs)("div",{className:"search__results__empty",children:[Object($.jsx)("br",{}),Object($.jsx)(X.a,{})]})})})),ee=n(278),te=(n(446),Object(B.b)((function(e){return{skillSearch:e.skillSearch,trendingJobs:e.trendingJobs,recommendedJobs:e.recommendedJobs,companySearch:e.companySearch,searchType:e.searchType}}),(function(e){return Object(J.b)({setSearchType:ee.v,fetchRecommendedJobs:ee.k,fetchTrendingJobs:ee.o},e)}))((function(e){var t=e.skillSearch,n=e.searchType,r=e.trendingJobs,o=e.recommendedJobs,c=e.companySearch,i=e.setSearchType,s=e.fetchRecommendedJobs,l=e.fetchTrendingJobs;return Object(a.useEffect)((function(){"recommended"===n?0===o.length&&s():"trending"===n&&0===r.length&&l()}),[n]),Object($.jsxs)("div",{className:"search",children:[("recommended"===n||"trending"===n)&&Object($.jsxs)(z.Group,{defaultValue:n,buttonStyle:"solid",className:"toggle",onChange:function(e){var t=e.target.value;i(t)},children:[Object($.jsx)(z.Button,{value:"recommended",children:"Recommended jobs"}),Object($.jsx)(z.Button,{value:"trending",children:"Top trending jobs"})]}),"skillSearch"===n&&Object($.jsx)("div",{className:"search__heading",children:Object($.jsx)("h2",{children:"Results based on Skills"})}),"companySearch"===n&&Object($.jsx)("div",{className:"search__heading",children:Object($.jsx)("h2",{children:"Results based on Company Name"})}),Object($.jsx)(Z,{data:function(e){switch(e){case"companySearch":return c;case"skillSearch":return t;case"recommended":return o;case"trending":return r;default:return o}}(n)}),Object($.jsx)("br",{})]})})))}}]);
//# sourceMappingURL=13.e0c287ed.chunk.js.map