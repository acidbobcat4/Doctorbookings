"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{3321:function(e,n,t){t(2791);var i=t(184);n.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,t){t.d(n,{Z:function(){return o}});t(2791);var i=t(6355),s=t(3495),r=t(1087),l=t(184),o=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("footer",{children:[(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsxs)("div",{className:"footer-links",children:[(0,l.jsx)("h3",{children:"Links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,l.jsx)("li",{children:(0,l.jsx)(s.fO,{to:"/#contact",children:"Contact Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("h3",{children:"Social links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"facebook",children:(0,l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.tBk,{})})}),(0,l.jsx)("li",{className:"youtube",children:(0,l.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.V2E,{})})}),(0,l.jsx)("li",{className:"instagram",children:(0,l.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.Zf_,{})})})]})]})]}),(0,l.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,l.jsx)("a",{href:"https://www.linkedin.com/in/kushagraamehta/",target:"_blank",rel:"noreferrer",children:"Kushagra"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(9439),s=t(2791),r=t(7689),l=t(1087),o=t(3495),c=t(9434),d=t(5318),a=t(3853),h=t(1213),u=t(456),x=t(184),j=function(){var e=(0,s.useState)(!1),n=(0,i.Z)(e,2),t=n[0],j=n[1],m=(0,c.I0)(),v=(0,r.s0)(),p=(0,s.useState)(localStorage.getItem("token")||""),f=(0,i.Z)(p,2),g=f[0],k=(f[1],(0,s.useState)(localStorage.getItem("token")?(0,u.Z)(localStorage.getItem("token")):"")),b=(0,i.Z)(k,2),N=b[0];b[1];return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:t?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(l.OL,{to:"/",children:"HealthBooker"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),g&&N.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!N.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"/profile",children:"Profile"})})]}),g?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){m((0,d.ps)({})),localStorage.removeItem("token"),v("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!t&&(0,x.jsx)(a.cur,{className:"menu-open",onClick:function(){j(!0)}}),t&&(0,x.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},564:function(e,n,t){t.r(n);var i=t(4165),s=t(5861),r=t(9439),l=t(2791),o=t(3321),c=t(6794),d=t(3841),a=t(4971),h=t(5318),u=t(3200),x=t(9434),j=t(456),m=t(3263),v=t(3402),p=(t(5108),t(184));n.default=function(){var e,n=(0,l.useState)([]),t=(0,r.Z)(n,2),f=t[0],g=t[1],k=(0,x.I0)(),b=(0,x.v9)((function(e){return e.root})).loading,N=(0,j.Z)(localStorage.getItem("token")).userId,Z=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k((0,h.K4)(!0)),e.next=4,(0,a.Z)("/appointment/getallappointments?search=".concat(N));case 4:t=e.sent,g(t),k((0,h.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){Z()}),[]);var w=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t,s,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.ZP.promise(m.Z.put("/appointment/completed",{appointid:null===n||void 0===n?void 0:n._id,doctorId:null===n||void 0===n||null===(t=n.doctorId)||void 0===t?void 0:t._id,doctorname:"".concat(null===n||void 0===n||null===(s=n.userId)||void 0===s?void 0:s.firstname," ").concat(null===n||void 0===n||null===(r=n.userId)||void 0===r?void 0:r.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:Z(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{}),b?(0,p.jsx)(u.Z,{}):(0,p.jsxs)("section",{className:"container notif-section",children:[(0,p.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),f.length>0?(0,p.jsx)("div",{className:"appointments",children:(0,p.jsxs)("table",{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"S.No"}),(0,p.jsx)("th",{children:"Doctor"}),(0,p.jsx)("th",{children:"Patient"}),(0,p.jsx)("th",{children:"Appointment Date"}),(0,p.jsx)("th",{children:"Appointment Time"}),(0,p.jsx)("th",{children:"Booking Date"}),(0,p.jsx)("th",{children:"Booking Time"}),(0,p.jsx)("th",{children:"Status"}),N===(null===(e=f[0].doctorId)||void 0===e?void 0:e._id)?(0,p.jsx)("th",{children:"Action"}):(0,p.jsx)(p.Fragment,{})]})}),(0,p.jsx)("tbody",{children:null===f||void 0===f?void 0:f.map((function(e,n){var t,i,s,r,l;return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:n+1}),(0,p.jsx)("td",{children:(null===e||void 0===e||null===(t=e.doctorId)||void 0===t?void 0:t.firstname)+" "+(null===e||void 0===e||null===(i=e.doctorId)||void 0===i?void 0:i.lastname)}),(0,p.jsx)("td",{children:(null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.firstname)+" "+(null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.lastname)}),(0,p.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,p.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,p.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,p.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,p.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),N===(null===e||void 0===e||null===(l=e.doctorId)||void 0===l?void 0:l._id)?(0,p.jsx)("td",{children:(0,p.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status),onClick:function(){return w(e)},children:"Complete"})}):(0,p.jsx)(p.Fragment,{})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,p.jsx)(o.Z,{})]}),(0,p.jsx)(c.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=564.c87f4b2e.chunk.js.map