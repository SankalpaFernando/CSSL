(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{5660:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/committee",function(){return s(3247)}])},765:function(e,n,s){"use strict";s.d(n,{Z:function(){return r}});var i=s(5893);function r(){return(0,i.jsxs)("footer",{children:[(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h1",{children:"Computer Society of Sri Lanka"}),(0,i.jsx)("h1",{children:"Gen Z Chapter"}),(0,i.jsx)("h1",{children:"University of Jaffna"})]}),(0,i.jsxs)("div",{className:"link",children:[(0,i.jsx)("h1",{children:"Links"}),(0,i.jsxs)("div",{className:"links",children:[(0,i.jsx)("a",{href:"#",children:"Blog"}),(0,i.jsx)("a",{href:"https://www.linkedin.com/company/csslgenzuoj/",children:"LinkedIn"}),(0,i.jsx)("a",{href:"https://web.facebook.com/CSSLGENZUOJ",children:"Facebook"})]})]}),(0,i.jsxs)("div",{className:"contacts",children:[(0,i.jsx)("h1",{children:"Get In Touch"}),(0,i.jsxs)("p",{children:["President,",(0,i.jsx)("br",{}),"CSSL Gen Z Chapter,",(0,i.jsx)("br",{}),"Department of Computer Science,",(0,i.jsx)("br",{}),"Faculty of Science,",(0,i.jsx)("br",{}),"University of Jaffna,",(0,i.jsx)("br",{}),"Jaffna,",(0,i.jsx)("br",{}),"Sri Lanka.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"+94 72 2505239",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"csslgnz@univ.jfn.ac.lk"]})]})]}),(0,i.jsx)("div",{className:"copyright",children:"Copyright \xa9 2023 CSSL GenZ University of Jaffna"})]})}},869:function(e,n,s){"use strict";s.d(n,{Z:function(){return c}});var i=s(5893),r=s(1664),t=s.n(r);function c(){return(0,i.jsxs)("div",{className:"navbar",children:[(0,i.jsxs)("div",{className:"logo",children:[(0,i.jsx)("div",{className:"logo-img",style:{background:"url(/CSSL-White-Logo.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),(0,i.jsx)("div",{children:(0,i.jsx)("label",{for:"checkbox",id:"checkbox_toggle",className:"hamburger",children:"☰"})})]}),(0,i.jsxs)("div",{id:"nav-items",className:"nav-items",children:[(0,i.jsx)("div",{className:"nav-item",children:(0,i.jsx)(t(),{href:"/",children:"Home"})}),(0,i.jsx)("div",{className:"nav-item",children:(0,i.jsx)(t(),{href:"/events",children:"Events"})}),(0,i.jsx)("div",{className:"nav-item",children:(0,i.jsx)(t(),{href:"/committee",children:"Committee"})}),(0,i.jsx)("div",{className:"nav-item",children:(0,i.jsx)(t(),{href:"/",children:"Blog"})})]})]})}},3247:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return j},get:function(){return x}});var i=s(2729),r=s(5893),t=s(765),c=s(7294),a=s(869),l=s(9008),d=s.n(l),o=s(7996),h=s(7283);function m(){let e=(0,i._)(["\n        query MyQuery {\n            committees {\n              names\n              title {\n                html\n              }\n            }\n          }\n        "]);return m=function(){return e},e}async function x(){let{data:e}=await o.Z.query({query:(0,h.Ps)(m())});return{members:[...e.committees]}}function j(){let[e,n]=(0,c.useState)();return(0,c.useEffect)(()=>{x().then(e=>{n([...e.members])})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:"CSSL GenZ UoJ - Office Bearers"}),(0,r.jsx)("meta",{name:"description",content:"CSSL GenZ University of Jaffna"}),(0,r.jsx)("meta",{name:"keywords",content:"CSSL GenZ, University of Jaffna, courses, faculty,cssl,uoj"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("div",{className:"overlay"}),(0,r.jsx)(a.Z,{}),(0,r.jsx)("div",{className:"main-gallery",children:(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h1",{children:"Office Bearers"})})}),(0,r.jsx)("div",{className:"gallery-office",children:(0,r.jsx)("div",{className:"office",children:(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:null==e?void 0:e.map(e=>e.names.length>1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{className:"title",rowSpan:e.names.length+1,children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.title.html}})})}),e.names.map(e=>(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:e})}))]}):(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"title",children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.title.html}})}),(0,r.jsx)("td",{children:e.names[0]})]}))})})})}),(0,r.jsx)(t.Z,{})]})}},9008:function(e,n,s){e.exports=s(2636)}},function(e){e.O(0,[807,774,888,179],function(){return e(e.s=5660)}),_N_E=e.O()}]);