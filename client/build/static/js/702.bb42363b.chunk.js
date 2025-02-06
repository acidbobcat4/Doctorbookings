"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[702],{6794:function(e,n,r){r.d(n,{Z:function(){return c}});r(2791);var s=r(6355),t=r(3495),i=r(1087),l=r(184),c=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("footer",{children:[(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsxs)("div",{className:"footer-links",children:[(0,l.jsx)("h3",{children:"Links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{to:"/",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{to:"/doctors",children:"Doctors"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{to:"/appointments",children:"Appointments"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{to:"/notifications",children:"Notifications"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.fO,{to:"/#contact",children:"Contact Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{to:"/profile",children:"Profile"})})]})]}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("h3",{children:"Social links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"facebook",children:(0,l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(s.tBk,{})})}),(0,l.jsx)("li",{className:"youtube",children:(0,l.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(s.V2E,{})})}),(0,l.jsx)("li",{className:"instagram",children:(0,l.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(s.Zf_,{})})})]})]})]}),(0,l.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,l.jsx)("a",{href:"https://www.linkedin.com/in/kushagraamehta/",target:"_blank",rel:"noreferrer",children:"Kushagra"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,r){r.d(n,{Z:function(){return j}});var s=r(9439),t=r(2791),i=r(7689),l=r(1087),c=r(3495),a=r(9434),o=r(5318),d=r(3853),h=r(1213),x=r(456),u=r(184),j=function(){var e=(0,t.useState)(!1),n=(0,s.Z)(e,2),r=n[0],j=n[1],p=(0,a.I0)(),m=(0,i.s0)(),f=(0,t.useState)(localStorage.getItem("token")||""),g=(0,s.Z)(f,2),k=g[0],b=(g[1],(0,t.useState)(localStorage.getItem("token")?(0,x.Z)(localStorage.getItem("token")):"")),v=(0,s.Z)(b,2),N=v[0];v[1];return(0,u.jsxs)("header",{children:[(0,u.jsxs)("nav",{className:r?"nav-active":"",children:[(0,u.jsx)("h2",{className:"nav-logo",children:(0,u.jsx)(l.OL,{to:"/",children:"HealthBooker"})}),(0,u.jsxs)("ul",{className:"nav-links",children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),k&&N.isAdmin&&(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/dashboard/users",children:"Dashboard"})}),k&&!N.isAdmin&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.fO,{to:"/#contact",children:"Contact Us"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/profile",children:"Profile"})})]}),k?(0,u.jsx)("li",{children:(0,u.jsx)("span",{className:"btn",onClick:function(){p((0,o.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{className:"btn",to:"/login",children:"Login"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,u.jsxs)("div",{className:"menu-icons",children:[!r&&(0,u.jsx)(d.cur,{className:"menu-open",onClick:function(){j(!0)}}),r&&(0,u.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},3702:function(e,n,r){r.r(n);var s=r(4165),t=r(5861),i=r(4942),l=r(1413),c=r(9439),a=r(2791),o=(r(1062),r(3263)),d=r(3402),h=r(7689),x=r(3841),u=r(6794),j=r(184);o.Z.defaults.baseURL="http://localhost:5000/api";n.default=function(){var e=(0,h.s0)(),n=(0,a.useState)({specialization:"",experience:"",fees:""}),r=(0,c.Z)(n,2),p=r[0],m=r[1],f=function(e){var n=e.target,r=n.name,s=n.value;return m((0,l.Z)((0,l.Z)({},p),{},(0,i.Z)({},r,s)))},g=function(){var n=(0,t.Z)((0,s.Z)().mark((function n(r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,d.ZP.promise(o.Z.post("/doctor/applyfordoctor",{formDetails:p},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor application sent successfully",error:"Unable to send Doctor application",loading:"Sending doctor application..."});case 4:e("/"),n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Z,{}),(0,j.jsx)("section",{className:"register-section flex-center apply-doctor",id:"contact",children:(0,j.jsxs)("div",{className:"register-container flex-center contact",children:[(0,j.jsx)("h2",{className:"form-heading",children:"Apply for Doctor"}),(0,j.jsxs)("form",{className:"register-form ",children:[(0,j.jsx)("input",{type:"text",name:"specialization",className:"form-input",placeholder:"Enter your specialization",value:p.specialization,onChange:f}),(0,j.jsx)("input",{type:"number",name:"experience",className:"form-input",placeholder:"Enter your experience (in years)",value:p.experience,onChange:f}),(0,j.jsx)("input",{type:"number",name:"fees",className:"form-input",placeholder:"Enter your fees  (in dollars)",value:p.fees,onChange:f}),(0,j.jsx)("button",{type:"submit",className:"btn form-btn",onClick:g,children:"apply"})]})]})}),(0,j.jsx)(u.Z,{})]})}},1062:function(){}}]);
//# sourceMappingURL=702.bb42363b.chunk.js.map