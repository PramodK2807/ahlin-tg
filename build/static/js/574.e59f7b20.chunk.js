"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[574],{2574:(e,s,a)=>{a.r(s),a.d(s,{default:()=>b});var d=a(5043),i=a(6068),l=a(4299),t=(a(7227),a(2019),a(579));var c=a(108),n=a(1653),r=a(2185),o=a(6026),h=a(6150),u=a(1327),v=a(168);const x=[{date:"2024-07-01",users:400},{date:"2024-07-02",users:300},{date:"2024-07-03",users:350},{date:"2024-07-04",users:450},{date:"2024-07-05",users:200},{date:"2024-07-06",users:500},{date:"2024-07-07",users:600},{date:"2024-07-08",users:700},{date:"2024-07-09",users:800},{date:"2024-07-10",users:250},{date:"2024-07-11",users:450},{date:"2024-07-12",users:550},{date:"2024-07-13",users:650},{date:"2024-07-14",users:750},{date:"2024-07-15",users:850},{date:"2024-07-16",users:150},{date:"2024-07-17",users:250},{date:"2024-07-18",users:350},{date:"2024-07-19",users:450},{date:"2024-07-20",users:550},{date:"2024-07-21",users:650},{date:"2024-07-22",users:750},{date:"2024-07-23",users:850},{date:"2024-07-24",users:950},{date:"2024-07-25",users:1050},{date:"2024-07-26",users:1150}],m=[{date:"2024-01",users:4e3},{date:"2024-02",users:3e3}],j=[{date:"2023",users:24e3},{date:"2024",users:22e3}],N=()=>{const[e,s]=(0,d.useState)(x),[a,i]=(0,d.useState)("day");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"pt-4",children:(0,t.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,t.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,t.jsx)("p",{children:"Guest & Locals"}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:["Filter by:",(0,t.jsxs)("select",{value:a,onChange:e=>{const a=e.target.value;switch(i(a),a){case"month":s(m);break;case"year":s(j);break;default:s(x)}},children:[(0,t.jsx)("option",{value:"day",children:"Day"}),(0,t.jsx)("option",{value:"month",children:"Month"}),(0,t.jsx)("option",{value:"year",children:"Year"})]})]})}),(0,t.jsx)(c.u,{width:"100%",height:400,children:(0,t.jsxs)(n.b,{data:e,margin:{top:5,right:30,left:20,bottom:5},children:[(0,t.jsx)(r.W,{dataKey:"date"}),(0,t.jsx)(o.h,{}),(0,t.jsx)(h.m,{}),(0,t.jsx)(u.s,{}),(0,t.jsx)(v.N,{type:"monotone",dataKey:"users",stroke:"#8884d8"})]})})]})})})})},b=()=>{const[e,s]=(0,d.useState)(0);(0,d.useEffect)((()=>{a()}),[]);const a=async()=>{let{data:e}=await(0,l.Bb)();console.log(e),!e||null!==e&&void 0!==e&&e.error||s(null===e||void 0===e?void 0:e.results)};return(0,t.jsx)(i.A,{activeSlide:"Dashboard",children:(0,t.jsx)("div",{className:"content-body",children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12 wid-100",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Number of Guests"}),(0,t.jsxs)("h3",{children:[null===e||void 0===e?void 0:e.totalGuest," "]})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fas fa-users"})})]}),(0,t.jsx)("div",{id:"NewCustomers"})]})})}),(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total Locals"}),(0,t.jsxs)("h3",{children:[null===e||void 0===e?void 0:e.totalLocal," "]})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fa-solid fa-person-military-pointing"})})]}),(0,t.jsx)("div",{id:"NewCustomers"})]})})}),(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total revenue"}),(0,t.jsx)("h3",{children:null===e||void 0===e?void 0:e.totalRevenue})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fas fa-dollar-sign"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})}),(0,t.jsx)("div",{className:"col-xl-6 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total Pending Booking Requests"}),(0,t.jsx)("h3",{children:null===e||void 0===e?void 0:e.totalPendingBookings})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fa-solid fa-hourglass-half"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})}),(0,t.jsx)("div",{className:"col-xl-6 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total Pending Trip Offers"}),(0,t.jsx)("h3",{children:null===e||void 0===e?void 0:e.totalPendingTrips})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fa-solid fa-plane"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})})]})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)(N,{})})})]})})})})}},7227:(e,s,a)=>{a.d(s,{A:()=>n});var d=a(7694),i=a(5043),l=a(4299),t=a(5475),c=a(579);const n=e=>{let{latest:s}=e;const[a,n]=(0,i.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Name",field:"name",width:50,selected:!1},{label:"Contact No.",field:"mobile",width:100,selected:!1},{label:"Email",field:"email",width:50,selected:!1},{label:"Country",field:"country",width:50,selected:!1},{label:"Status",field:"status",width:50,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,i.useEffect)((()=>{r()}),[]);const r=async()=>{let{data:e}=await(0,l.GQ)();if(console.warn(e),e&&(null===e||void 0===e||!e.error)){var d,i,r,u;const l=[];let v;v=s&&s?null===e||void 0===e||null===(d=e.results)||void 0===d?void 0:d.list.slice(0,10):null===e||void 0===e||null===(i=e.results)||void 0===i?void 0:i.list,null===(r=v)||void 0===r||null===(u=r.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===u||u.map(((e,s)=>{const a={};a.sno=s+1,a.name=(null===e||void 0===e?void 0:e.fullName)||"NA",a.mobile=(null===e||void 0===e?void 0:e.mobileNumber)||"NA",a.email=(null===e||void 0===e?void 0:e.email)||"NA",a.country=(null===e||void 0===e?void 0:e.countryName)||"NA",a.status=(0,c.jsxs)("div",{className:"check_toggle text-center",children:[(0,c.jsx)("input",{type:"checkbox",defaultChecked:null===e||void 0===e?void 0:e.status,name:"check1",id:null===e||void 0===e?void 0:e._id,className:"d-none",onClick:()=>{h(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.status)}}),(0,c.jsx)("label",{for:null===e||void 0===e?void 0:e._id})]},null===e||void 0===e?void 0:e._id),a.actions=(0,c.jsxs)("div",{className:"d-flex",children:[(0,c.jsx)(t.N_,{to:"/Guest-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{title:"View Guest Details",isEdit:!1,type:"User"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,c.jsx)("i",{className:"fa fa-eye"})}),(0,c.jsx)("button",{type:"button",onClick:()=>o(null===e||void 0===e?void 0:e._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,c.jsx)("i",{className:"fa fa-trash"})})]}),l.push(a)})),n({...a,rows:l})}},o=async e=>{try{let{data:s}=await(0,l.JM)(e);s&&!s.error&&r()}catch(s){console.log(s)}},h=async e=>{try{let{data:s}=await(0,l.sN)(e);s&&!s.error&&r()}catch(s){console.log(s)}};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"col-xl-12 pt-4",children:(0,c.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,c.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,c.jsx)("div",{className:"card_title_container",children:(0,c.jsx)("h4",{className:"card-title",children:"Guests List"})}),(0,c.jsx)("div",{className:"search_icon",children:(0,c.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,c.jsx)("div",{className:"table-responsive mdb_table",children:(0,c.jsx)(d.g6D,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:a,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})})]})})})})}}}]);
//# sourceMappingURL=574.e59f7b20.chunk.js.map