(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[23],{135:function(e,t,r){"use strict";var a=r(2),n=r(1),i=r(6),l=r(21),s=r(0),c=r(9),o=r.n(c),u=r(112),d=r(128),m=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],b=void 0;function f(e,t){var r=e.prefixCls,i=e.invalidate,c=e.item,d=e.renderItem,f=e.responsive,j=e.responsiveDisabled,p=e.registerSize,v=e.itemKey,h=e.className,O=e.style,y=e.children,x=e.display,g=e.order,w=e.component,C=void 0===w?"div":w,E=Object(l.a)(e,m),P=f&&!x;function k(e){p(v,e)}s.useEffect((function(){return function(){k(null)}}),[]);var I,N=d&&c!==b?d(c):y;i||(I={opacity:P?0:1,height:P?0:b,overflowY:P?"hidden":b,order:f?g:b,pointerEvents:P?"none":b,position:P?"absolute":b});var R={};P&&(R["aria-hidden"]=!0);var S=s.createElement(C,Object(a.a)({className:o()(!i&&r,h),style:Object(n.a)(Object(n.a)({},I),O)},R,E,{ref:t}),N);return f&&(S=s.createElement(u.a,{onResize:function(e){k(e.offsetWidth)},disabled:j},S)),S}var j=s.forwardRef(f);j.displayName="Item";var p=j,v=r(23),h=r(26);var O=["component"],y=["className"],x=["className"],g=function(e,t){var r=s.useContext(P);if(!r){var n=e.component,i=void 0===n?"div":n,c=Object(l.a)(e,O);return s.createElement(i,Object(a.a)({},c,{ref:t}))}var u=r.className,d=Object(l.a)(r,y),m=e.className,b=Object(l.a)(e,x);return s.createElement(P.Provider,{value:null},s.createElement(p,Object(a.a)({ref:t,className:o()(u,m)},d,b)))},w=s.forwardRef(g);w.displayName="RawItem";var C=w,E=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],P=s.createContext(null),k="responsive",I="invalidate";function N(e){return"+ ".concat(e.length," ...")}function R(e,t){var r=e.prefixCls,c=void 0===r?"rc-overflow":r,m=e.data,b=void 0===m?[]:m,f=e.renderItem,j=e.renderRawItem,O=e.itemKey,y=e.itemWidth,x=void 0===y?10:y,g=e.ssr,w=e.style,C=e.className,R=e.maxCount,S=e.renderRest,q=e.renderRawRest,A=e.suffix,M=e.component,T=void 0===M?"div":M,z=e.itemComponent,F=e.onVisibleChange,D=Object(l.a)(e,E),K=function(){var e=Object(h.a)({}),t=Object(i.a)(e,2)[1],r=Object(s.useRef)([]),a=0,n=0;return function(e){var i=a;return a+=1,r.current.length<i+1&&(r.current[i]=e),[r.current[i],function(e){r.current[i]="function"===typeof e?e(r.current[i]):e,v.a.cancel(n),n=Object(v.a)((function(){t({},!0)}))}]}}(),L="full"===g,V=K(null),W=Object(i.a)(V,2),G=W[0],_=W[1],J=G||0,X=K(new Map),Y=Object(i.a)(X,2),U=Y[0],$=Y[1],B=K(0),H=Object(i.a)(B,2),Q=H[0],Z=H[1],ee=K(0),te=Object(i.a)(ee,2),re=te[0],ae=te[1],ne=K(0),ie=Object(i.a)(ne,2),le=ie[0],se=ie[1],ce=Object(s.useState)(null),oe=Object(i.a)(ce,2),ue=oe[0],de=oe[1],me=Object(s.useState)(null),be=Object(i.a)(me,2),fe=be[0],je=be[1],pe=s.useMemo((function(){return null===fe&&L?Number.MAX_SAFE_INTEGER:fe||0}),[fe,G]),ve=Object(s.useState)(!1),he=Object(i.a)(ve,2),Oe=he[0],ye=he[1],xe="".concat(c,"-item"),ge=Math.max(Q,re),we=R===k,Ce=b.length&&we,Ee=R===I,Pe=Ce||"number"===typeof R&&b.length>R,ke=Object(s.useMemo)((function(){var e=b;return Ce?e=null===G&&L?b:b.slice(0,Math.min(b.length,J/x)):"number"===typeof R&&(e=b.slice(0,R)),e}),[b,x,G,R,Ce]),Ie=Object(s.useMemo)((function(){return Ce?b.slice(pe+1):b.slice(ke.length)}),[b,ke,Ce,pe]),Ne=Object(s.useCallback)((function(e,t){var r;return"function"===typeof O?O(e):null!==(r=O&&(null===e||void 0===e?void 0:e[O]))&&void 0!==r?r:t}),[O]),Re=Object(s.useCallback)(f||function(e){return e},[f]);function Se(e,t){je(e),t||(ye(e<b.length-1),null===F||void 0===F||F(e))}function qe(e,t){$((function(r){var a=new Map(r);return null===t?a.delete(e):a.set(e,t),a}))}function Ae(e){return U.get(Ne(ke[e],e))}Object(d.a)((function(){if(J&&ge&&ke){var e=le,t=ke.length,r=t-1;if(!t)return Se(0),void de(null);for(var a=0;a<t;a+=1){var n=Ae(a);if(L&&(n=n||0),void 0===n){Se(a-1,!0);break}if(e+=n,0===r&&e<=J||a===r-1&&e+Ae(r)<=J){Se(r),de(null);break}if(e+ge>J){Se(a-1),de(e-n-le+re);break}}A&&Ae(0)+le>J&&de(null)}}),[J,U,re,le,Ne,ke]);var Me=Oe&&!!Ie.length,Te={};null!==ue&&Ce&&(Te={position:"absolute",left:ue,top:0});var ze,Fe={prefixCls:xe,responsive:Ce,component:z,invalidate:Ee},De=j?function(e,t){var r=Ne(e,t);return s.createElement(P.Provider,{key:r,value:Object(n.a)(Object(n.a)({},Fe),{},{order:t,item:e,itemKey:r,registerSize:qe,display:t<=pe})},j(e,t))}:function(e,t){var r=Ne(e,t);return s.createElement(p,Object(a.a)({},Fe,{order:t,key:r,item:e,renderItem:Re,itemKey:r,registerSize:qe,display:t<=pe}))},Ke={order:Me?pe:Number.MAX_SAFE_INTEGER,className:"".concat(xe,"-rest"),registerSize:function(e,t){ae(t),Z(re)},display:Me};if(q)q&&(ze=s.createElement(P.Provider,{value:Object(n.a)(Object(n.a)({},Fe),Ke)},q(Ie)));else{var Le=S||N;ze=s.createElement(p,Object(a.a)({},Fe,Ke),"function"===typeof Le?Le(Ie):Le)}var Ve=s.createElement(T,Object(a.a)({className:o()(!Ee&&c,C),style:w,ref:t},D),ke.map(De),Pe?ze:null,A&&s.createElement(p,Object(a.a)({},Fe,{responsive:we,responsiveDisabled:!Ce,order:pe,className:"".concat(xe,"-suffix"),registerSize:function(e,t){se(t)},display:!0,style:Te}),A));return we&&(Ve=s.createElement(u.a,{onResize:function(e,t){_(t.clientWidth)},disabled:!Ce},Ve)),Ve}var S=s.forwardRef(R);S.displayName="Overflow",S.Item=C,S.RESPONSIVE=k,S.INVALIDATE=I;var q=S;t.a=q},164:function(e,t,r){},295:function(e,t,r){"use strict";r.r(t);var a=r(6),n=(r(0),r(312)),i=r(288),l=r(298),s=r(101),c=r(40),o=r(48),u=r(5),d=r(106),m=(r(164),r(7)),b=n.a.Option;t.default=Object(o.b)((function(e){return{userType:e.userType,skills:e.skills,cities:e.cities}}),(function(e){return Object(c.b)({saveCandidateData:d.u,fetchCanProfile:d.f},e)}))((function(e){var t=e.saveCandidateData,r=e.skills,c=e.cities,o=e.fetchCanProfile,d=i.a.useForm(),f=Object(a.a)(d,1)[0],j=Object(u.g)(),p=function(){j.push("/home"),f.resetFields(),o()};return Object(m.jsxs)("div",{className:"onboarding",children:[Object(m.jsx)("h2",{children:"Create your Candidate profile"}),Object(m.jsxs)(i.a,{form:f,name:"Candidate onboarding",labelCol:{span:8},wrapperCol:{span:12},initialValues:{remember:!0},onFinish:function(e){var r=Object.assign({},e),a=Object.assign([],r.skills);r.skills=a.join(","),t(r,p)},children:[Object(m.jsx)(i.a.Item,{label:"Full name",name:"name",rules:[{required:!0,message:"Please enter your full name!"}],children:Object(m.jsx)(l.a,{placeholder:"Please enter your full name"})}),Object(m.jsx)(i.a.Item,{label:"Job title",name:"jobTitle",rules:[{required:!0,message:"Please enter your current job title!"}],children:Object(m.jsx)(l.a,{placeholder:"Please enter your current job title"})}),Object(m.jsx)(i.a.Item,{label:"Location",name:"location",rules:[{required:!0,message:"Please select your current location!"}],children:Object(m.jsx)(n.a,{showSearch:!0,placeholder:"Please select your current location",optionFilterProp:"children",filterOption:function(e,t){return(null===t||void 0===t?void 0:t.children.toLowerCase().indexOf(e.toLowerCase()))>=0},children:c.map((function(e){return Object(m.jsx)(b,{value:e,children:e},e)}))})}),Object(m.jsx)(i.a.Item,{label:"Whatsapp number",name:"whatsappNumber",rules:[{required:!0,message:"Please add a valid whatsapp number!",validator:function(e,t){return t&&10===t.length?Promise.resolve():Promise.reject(new Error("The two passwords that you entered do not match!"))}}],children:Object(m.jsx)(l.a,{placeholder:"Please add your whatsapp number"})}),Object(m.jsx)(i.a.Item,{label:"Years of experience",name:"exp",rules:[{required:!0,message:"Please select years of experience!",validator:function(e,t){var r=new RegExp(/^[0-9.]+$/gm);return t&&t.match(r)?Promise.resolve():Promise.reject(new Error("Experience in number like 2.5 or 4!"))}}],children:Object(m.jsx)(l.a,{placeholder:"Experience in number like 2.5 or 4!"})}),Object(m.jsx)(i.a.Item,{label:"Skills",name:"skills",rules:[{required:!0,message:"Please select atleast three skills!",validator:function(e,t){return t&&t.length>=3?Promise.resolve():Promise.reject(new Error("Please select atleast three skills!"))}}],children:Object(m.jsx)(n.a,{mode:"multiple",allowClear:!0,placeholder:"Please select atleast three skills",children:r.map((function(e){return Object(m.jsx)(b,{value:e,children:e},e)}))})}),Object(m.jsx)(i.a.Item,{label:"Current ctc",name:"ctc",rules:[{required:!0,message:"Please add current ctc!"}],children:Object(m.jsx)(l.a,{placeholder:"i.e 4.5Lac"})}),Object(m.jsx)(i.a.Item,{label:"About",name:"about",rules:[{required:!0,message:"Please enter a brief introduction about yourself!"}],children:Object(m.jsx)(l.a.TextArea,{placeholder:"A brief introduction about yourself"})}),Object(m.jsx)(i.a.Item,{label:"Github username",name:"githubUrl",rules:[{required:!1,message:"Please enter your github profile link!"}],children:Object(m.jsx)(l.a,{placeholder:"Github profile link"})}),Object(m.jsx)(i.a.Item,{wrapperCol:{offset:8,span:12},children:Object(m.jsx)(s.a,{type:"primary",htmlType:"submit",children:"Submit details"})})]})]})}))}}]);
//# sourceMappingURL=23.b1653b8d.chunk.js.map