"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[234],{8234:(s,e,i)=>{i.r(e),i.d(e,{default:()=>t});var a=i(5043),d=i(6068),l=i(8365),c=(i(6178),i(5475)),n=i(4299),r=i(579);const t=()=>{const[s,e]=(0,a.useState)(0),[i,t]=(0,a.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Guest Id",field:"id",width:50,selected:!1},{label:"Name",field:"name",width:50,selected:!1},{label:"Email",field:"email",width:50,selected:!1},{label:"Mobile No.",field:"mobile",width:100,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,a.useEffect)((()=>{o()}),[]);const o=async()=>{let{data:s}=await(0,n.Wm)();if(console.warn(s),s&&(null===s||void 0===s||!s.error)){var a,d,l;const n=[];e(null===s||void 0===s||null===(a=s.results)||void 0===a?void 0:a.totalUsers);let o=null===s||void 0===s||null===(d=s.results)||void 0===d?void 0:d.userList;console.log(o),null===o||void 0===o||null===(l=o.sort(((s,e)=>new Date(null===e||void 0===e?void 0:e.updatedAt)-new Date(null===s||void 0===s?void 0:s.updatedAt))))||void 0===l||l.map(((s,e)=>{const i={};i.sno=e+1,i.name=(null===s||void 0===s?void 0:s.userName)||"NA",i.mobile=(null===s||void 0===s?void 0:s.mobileNumber)||"NA",i.email=(null===s||void 0===s?void 0:s.email)||"NA",i.actions=(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(c.N_,{className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,r.jsx)("i",{className:"fa fa-eye"})}),(0,r.jsx)("button",{type:"button",className:"btn btn-danger shadow btn-xs sharp",children:(0,r.jsx)("i",{className:"fa fa-trash"})})]}),n.push(i)})),t({...i,rows:n})}};return(0,r.jsx)(d.A,{activeSlide:"Dashboard",children:(0,r.jsx)("div",{className:"content-body",children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-12 wid-100",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,r.jsx)("div",{className:"card chart-grd same-card",children:(0,r.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,r.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{children:"Number of Guests"}),(0,r.jsx)("h3",{children:"1000 +"})]}),(0,r.jsx)("div",{className:"icon-box icon_bg",children:(0,r.jsx)("i",{className:"fas fa-users"})})]}),(0,r.jsx)("div",{id:"NewCustomers"})]})})}),(0,r.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,r.jsx)("div",{className:"card chart-grd same-card",children:(0,r.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,r.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{children:"Total Locals"}),(0,r.jsx)("h3",{children:"200 +"})]}),(0,r.jsx)("div",{className:"icon-box icon_bg",children:(0,r.jsx)("i",{className:"fa-solid fa-person-military-pointing"})})]}),(0,r.jsx)("div",{id:"NewCustomers"})]})})}),(0,r.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,r.jsx)("div",{className:"card chart-grd same-card",children:(0,r.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,r.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{children:"Total revenue"}),(0,r.jsx)("h3",{children:"20000 SAR"})]}),(0,r.jsx)("div",{className:"icon-box icon_bg",children:(0,r.jsx)("i",{className:"fas fa-dollar-sign"})})]}),(0,r.jsx)("div",{id:"NewExperience"})]})})}),(0,r.jsx)("div",{className:"col-xl-6 col-sm-6",children:(0,r.jsx)("div",{className:"card chart-grd same-card",children:(0,r.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,r.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{children:"Total Pending Booking Requests"}),(0,r.jsx)("h3",{children:"150 +"})]}),(0,r.jsx)("div",{className:"icon-box icon_bg",children:(0,r.jsx)("i",{className:"fa-solid fa-hourglass-half"})})]}),(0,r.jsx)("div",{id:"NewExperience"})]})})}),(0,r.jsx)("div",{className:"col-xl-6 col-sm-6",children:(0,r.jsx)("div",{className:"card chart-grd same-card",children:(0,r.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,r.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{children:"Total Pending Trip Offers"}),(0,r.jsx)("h3",{children:"5"})]}),(0,r.jsx)("div",{className:"icon-box icon_bg",children:(0,r.jsx)("i",{className:"fa-solid fa-plane"})})]}),(0,r.jsx)("div",{id:"NewExperience"})]})})})]})}),(0,r.jsx)("div",{className:"col-xl-12 ",children:(0,r.jsx)("div",{className:"card dz-card position-relative",id:"bootstrap-table1",children:(0,r.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,r.jsxs)("div",{className:"d-flex card_title_container",children:[(0,r.jsx)("h4",{className:"card-title",children:"Guests"}),(0,r.jsx)("p",{className:"ps-2",children:"(".concat(s,")")})]}),(0,r.jsx)("div",{className:"search_icon",children:(0,r.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,r.jsx)("div",{className:"mdb_table",children:(0,r.jsx)("div",{className:"table-responsive ",children:(0,r.jsx)(l.g6D,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:i,noBottomColumns:!0,sortable:!1,paginationLabel:"\xab\xbb"})})})]})})})]})})})})}}}]);
//# sourceMappingURL=234.1446def1.chunk.js.map