(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[21],{278:function(e,t,c){},279:function(e,t,c){},308:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return p})),c.d(t,"RecruiterDetails",(function(){return s}));var s={};c.r(s),c.d(s,"default",(function(){return h}));var i=c(1),n=c(0),r=c(40),j=c(48),l=c(6),a=c(300),o=c(101),b=c(5),d=c(119),u=c(110),f=c(106),O=(c(278),c(7)),h=Object(j.b)((function(e){return{recentJobs:e.recentJobs}}),(function(e){return Object(r.b)({fetchPostedJobs:f.k,fetchJobDetail:f.j},e)}))((function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],i=c[1],r=e.about,j=e.empSize,f=e.skills,h=e.location,x=e.name,p=e.site,g=e.preferredIndustry,m=e.recentJobs,v=e.fetchPostedJobs,N=Object(b.g)();Object(n.useEffect)((function(){0===m.length&&v()}),[]),Object(n.useEffect)((function(){f&&i("string"===typeof f?f.split(","):f)}),[f]);return Object(O.jsx)("div",{className:"recruiter__profile__right",children:Object(O.jsxs)(a.a,{children:[Object(O.jsxs)("section",{className:"each-widget",children:[Object(O.jsxs)("div",{className:"right-section",children:[Object(O.jsx)("h2",{children:x}),Object(O.jsx)("span",{children:g})]}),Object(O.jsx)("div",{className:"action-buttons",children:Object(O.jsx)(o.a,{type:"primary",onClick:function(){N.push("/recruiter/postjob")},children:"Post a job"})})]}),Object(O.jsx)("section",{className:"tags-section",children:s.map((function(e){return Object(O.jsx)("span",{className:"tags",children:e},e)}))}),Object(O.jsxs)("section",{className:"footer-section",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(d.d,{style:u.d}),h]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{style:u.d}),j]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.c,{style:u.d}),Object(O.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:"Website"})]})]}),Object(O.jsx)(a.a,{children:r})]})})})),x=c(58),p=(c(279),Object(j.b)((function(e){return{profileDetails:e.profileDetails,loading:e.loading}}),(function(e){return Object(r.b)({fetchRecProfile:f.l},e)}))((function(e){var t=e.profileDetails,c=e.fetchRecProfile,s=e.loading;return Object(n.useEffect)((function(){c()}),[]),Object(O.jsx)("div",{className:"recruiter-profile",children:Object.keys(t).length?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"recruiter-profile__right",children:Object(O.jsx)(h,Object(i.a)({},Object(i.a)({},t)))})}):!s&&Object(O.jsx)("div",{className:"loader--global",children:Object(O.jsx)(x.a,{text:"Loading profile..."})})})})))}}]);
//# sourceMappingURL=21.5191e9e8.chunk.js.map