"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[529],{9529:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var s=a(5043),i=a(6068),t=a(8365),d=a(4299),o=a(5475),n=a(579);const c=()=>{const[e,l]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"First Name",field:"firstName",width:50,selected:!1},{label:"Last Name",field:"lastName",width:50,selected:!1},{label:"Contact No.",field:"mobile",width:100,selected:!1},{label:"Email",field:"email",width:50,selected:!1},{label:"Country",field:"country",width:50,selected:!1},{label:"Status",field:"status",width:50,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{a()}),[]);const a=async()=>{let{data:a}=await(0,d.GQ)();if(console.warn(a),a&&(null===a||void 0===a||!a.error)){var s,t;const d=[];let r=null===a||void 0===a||null===(s=a.results)||void 0===s?void 0:s.list;null===r||void 0===r||null===(t=r.sort(((e,l)=>new Date(null===l||void 0===l?void 0:l.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===t||t.map(((e,l)=>{const a={};a.sno=l+1,a.firstName=(null===e||void 0===e?void 0:e.firstName)||"NA",a.lastName=(null===e||void 0===e?void 0:e.lastName)||"NA",a.mobile=(null===e||void 0===e?void 0:e.mobileNumber)||"NA",a.email=(null===e||void 0===e?void 0:e.email)||"NA",a.country=(null===e||void 0===e?void 0:e.countryName)||"NA",a.status=(0,n.jsxs)("div",{className:"check_toggle text-center",children:[(0,n.jsx)("input",{type:"checkbox",defaultChecked:null===e||void 0===e?void 0:e.status,name:"check1",id:null===e||void 0===e?void 0:e._id,className:"d-none",onClick:()=>{c(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.status)}}),(0,n.jsx)("label",{for:null===e||void 0===e?void 0:e._id})]},null===e||void 0===e?void 0:e._id),a.actions=(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)(o.N_,{to:"/Guest-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{title:"Edit Guest Details",isEdit:!0,type:"User",api:"editUser"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,n.jsx)("i",{className:"fa fa-edit"})}),(0,n.jsx)(o.N_,{to:"/Guest-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{title:"View Guest Details",isEdit:!1,type:"User"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,n.jsx)("i",{className:"fa fa-eye"})}),(0,n.jsx)("button",{type:"button",onClick:()=>i(null===e||void 0===e?void 0:e._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,n.jsx)("i",{className:"fa fa-trash"})})]}),d.push(a)})),l({...e,rows:d})}},i=async e=>{try{let{data:l}=await(0,d.JM)(e);l&&!l.error&&a()}catch(l){console.log(l)}},c=async e=>{try{let{data:l}=await(0,d.sN)(e);l&&!l.error&&a()}catch(l){console.log(l)}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"col-xl-12 pt-4",children:(0,n.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,n.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,n.jsx)("div",{className:"card_title_container",children:(0,n.jsx)("h4",{className:"card-title",children:"Guests List"})}),(0,n.jsx)("div",{className:"search_icon",children:(0,n.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,n.jsx)("div",{className:"table-responsive mdb_table",children:(0,n.jsx)(t.g6D,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:e,noBottomColumns:!0,sortable:!1,paginationLabel:"\xab\xbb"})})]})})})})};a(6178);const r=()=>{const[e,l]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Name",field:"name",width:50,selected:!1},{label:"Contact No.",field:"mobile",width:100,selected:!1},{label:"Email",field:"email",width:50,selected:!1},{label:"Rating",field:"rating",width:50,selected:!1},{label:"Reviews",field:"reviews",width:50,selected:!1},{label:"Status",field:"status",width:50,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{a()}),[]);const a=async()=>{let{data:a}=await(0,d.$D)();if(console.log(a),a&&(null===a||void 0===a||!a.error)){var s,t;const d=[];let r=null===a||void 0===a||null===(s=a.results)||void 0===s?void 0:s.list;null===r||void 0===r||null===(t=r.sort(((e,l)=>new Date(null===l||void 0===l?void 0:l.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===t||t.map(((e,l)=>{const a={};a.sno=l+1,a.name=null===e||void 0===e?void 0:e.fullName,a.mobile=(null===e||void 0===e?void 0:e.mobileNumber)||"NA",a.email=(null===e||void 0===e?void 0:e.email)||"NA",a.rating=(null===e||void 0===e?void 0:e.rating)||"NA",a.reviews=(null===e||void 0===e?void 0:e.reviews)||"NA",a.status=(0,n.jsxs)("div",{className:"check_toggle text-center",children:[(0,n.jsx)("input",{type:"checkbox",defaultChecked:null===e||void 0===e?void 0:e.status,name:"check1",id:null===e||void 0===e?void 0:e._id,className:"d-none",onClick:()=>{c(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.status)}}),(0,n.jsx)("label",{for:null===e||void 0===e?void 0:e._id})]},null===e||void 0===e?void 0:e._id),a.actions=(0,n.jsxs)("div",{class:"d-flex",children:[(0,n.jsx)(o.N_,{to:"/Guest-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{title:"Edit Local Details",isEdit:!0,type:"Guide",api:"editGuide"},class:"btn btn-primary shadow btn-xs sharp me-2",children:(0,n.jsx)("i",{class:"fa fa-edit"})}),(0,n.jsx)(o.N_,{to:"/Guest-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{title:"View Local Details",isEdit:!1,type:"Guide"},class:"btn btn-primary shadow btn-xs sharp me-2",children:(0,n.jsx)("i",{class:"fa fa-eye"})}),(0,n.jsx)("button",{type:"button",onClick:()=>i(null===e||void 0===e?void 0:e._id),class:"btn btn-danger shadow btn-xs sharp",children:(0,n.jsx)("i",{class:"fa fa-trash"})})]}),d.push(a)})),l({...e,rows:d})}},i=async e=>{try{let{data:l}=await(0,d.yz)(e);l&&!l.error&&a()}catch(l){console.log(l)}},c=async e=>{try{let{data:l}=await(0,d.Bg)(e);l&&!l.error&&a()}catch(l){console.log(l)}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"col-xl-12 pt-4",children:(0,n.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,n.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,n.jsx)("div",{className:"card_title_container",children:(0,n.jsx)("h4",{className:"card-title",children:"Local List"})}),(0,n.jsx)("div",{className:"search_icon",children:(0,n.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,n.jsx)("div",{className:"table-responsive mdb_table",children:(0,n.jsx)(t.g6D,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:e,noBottomColumns:!0,sortable:!1,paginationLabel:"\xab\xbb"})})]})})})})},v=()=>(0,n.jsx)(i.A,{activeSlide:"Guest",children:(0,n.jsx)("div",{className:"content-body",children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-12 wid-100",children:(0,n.jsxs)("div",{className:"card dz-card",id:"bootstrap-table1",children:[(0,n.jsx)("div",{className:"card-header flex-wrap border-0",children:(0,n.jsx)("div",{children:(0,n.jsx)("h4",{className:"card-title",children:"Guest / Local Management"})})}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[(0,n.jsx)("li",{className:"nav-item",role:"presentation",children:(0,n.jsx)("button",{className:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Guest"})}),(0,n.jsx)("li",{className:"nav-item",role:"presentation",children:(0,n.jsx)("button",{className:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"Local"})})]}),(0,n.jsxs)("div",{className:"tab-content",id:"pills-tabContent",children:[(0,n.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",tabIndex:0,children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabIndex:0,children:(0,n.jsx)(r,{})})]}),(0,n.jsx)("div",{})]})]})})})})})})}}]);
//# sourceMappingURL=529.4377104a.chunk.js.map