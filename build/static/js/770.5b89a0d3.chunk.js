"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[770],{7227:(e,l,a)=>{a.d(l,{A:()=>n});var s=a(8365),i=a(5043),t=a(4299),d=a(5475),o=a(579);const n=e=>{let{latest:l}=e;const[a,n]=(0,i.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Name",field:"name",width:50,selected:!1},{label:"Contact No.",field:"mobile",width:100,selected:!1},{label:"Email",field:"email",width:50,selected:!1},{label:"Country",field:"country",width:50,selected:!1},{label:"Status",field:"status",width:50,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,i.useEffect)((()=>{c()}),[]);const c=async()=>{let{data:e}=await(0,t.GQ)();if(console.warn(e),e&&(null===e||void 0===e||!e.error)){var s,i,c,m;const t=[];let b;b=l&&l?null===e||void 0===e||null===(s=e.results)||void 0===s?void 0:s.list.slice(0,10):null===e||void 0===e||null===(i=e.results)||void 0===i?void 0:i.list,null===(c=b)||void 0===c||null===(m=c.sort(((e,l)=>new Date(null===l||void 0===l?void 0:l.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===m||m.map(((e,l)=>{const a={};a.sno=l+1,a.name=(null===e||void 0===e?void 0:e.fullName)||"NA",a.mobile=+(null===e||void 0===e?void 0:e.mobileNumber)||"NA",a.email=(null===e||void 0===e?void 0:e.email)||"NA",a.country=(null===e||void 0===e?void 0:e.countryName)||"NA",a.status=(0,o.jsxs)("div",{className:"check_toggle text-center",children:[(0,o.jsx)("input",{type:"checkbox",defaultChecked:null===e||void 0===e?void 0:e.status,name:"check1",id:null===e||void 0===e?void 0:e._id,className:"d-none",onClick:()=>{v(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.status)}}),(0,o.jsx)("label",{for:null===e||void 0===e?void 0:e._id})]},null===e||void 0===e?void 0:e._id),a.actions=(0,o.jsxs)("div",{className:"d-flex",children:[(0,o.jsx)(d.N_,{to:"/Guest-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{title:"View Guest Details",isEdit:!1,type:"User"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,o.jsx)("i",{className:"fa fa-eye"})}),(0,o.jsx)("button",{type:"button",onClick:()=>r(null===e||void 0===e?void 0:e._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,o.jsx)("i",{className:"fa fa-trash"})})]}),t.push(a)})),n({...a,rows:t})}},r=async e=>{try{let{data:l}=await(0,t.JM)(e);l&&!l.error&&c()}catch(l){console.log(l)}},v=async e=>{try{let{data:l}=await(0,t.sN)(e);l&&!l.error&&c()}catch(l){console.log(l)}};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"col-xl-12 pt-4",children:(0,o.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,o.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,o.jsx)("div",{className:"card_title_container",children:(0,o.jsx)("h4",{className:"card-title",children:"Guests List"})}),(0,o.jsx)("div",{className:"search_icon",children:(0,o.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,o.jsx)("div",{className:"d-flex filter_modal",children:(0,o.jsx)("button",{type:"button",className:"btn filter_manage px-3 py-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:(0,o.jsx)("i",{className:"fa-solid fa-filter"})})}),(0,o.jsx)("div",{className:"table-responsive mdb_table",children:(0,o.jsx)(s.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,data:a,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,o.jsx)("div",{className:"table-responsive mdb_table2"})]})})})})}},1770:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var s=a(5043),i=a(6068),t=a(7227),d=a(8365),o=a(4299),n=a(5475),c=(a(6178),a(579));const r=()=>{const[e,l]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Name",field:"name",width:50,selected:!1},{label:"Contact No.",field:"mobile",width:100,selected:!1},{label:"Email",field:"email",width:50,selected:!1},{label:"Subscription Plan",field:"plan",width:50,selected:!1},{label:"Rating",field:"rating",width:50,selected:!1},{label:"Reviews",field:"reviews",width:50,selected:!1},{label:"Status",field:"status",width:50,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{a()}),[]);const a=async()=>{let{data:a}=await(0,o.$D)();if(console.log(a),a&&(null===a||void 0===a||!a.error)){var s,d;const o=[];let r=null===a||void 0===a||null===(s=a.results)||void 0===s?void 0:s.list;null===r||void 0===r||null===(d=r.sort(((e,l)=>new Date(null===l||void 0===l?void 0:l.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===d||d.map(((e,l)=>{const a={};a.sno=l+1,a.name=null===e||void 0===e?void 0:e.fullName,a.mobile=+(null===e||void 0===e?void 0:e.mobileNumber)||"NA",a.email=(null===e||void 0===e?void 0:e.email)||"NA",a.plan=(null===e||void 0===e?void 0:e.plan)||"None",a.rating=(null===e||void 0===e?void 0:e.rating)||"NA",a.reviews=(null===e||void 0===e?void 0:e.reviews)||"NA",a.status=(0,c.jsxs)("div",{className:"check_toggle text-center",children:[(0,c.jsx)("input",{type:"checkbox",defaultChecked:null===e||void 0===e?void 0:e.status,name:"check1",id:null===e||void 0===e?void 0:e._id,className:"d-none",onClick:()=>{t(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.status)}}),(0,c.jsx)("label",{for:null===e||void 0===e?void 0:e._id})]},null===e||void 0===e?void 0:e._id),a.actions=(0,c.jsxs)("div",{class:"d-flex",children:[(0,c.jsx)(n.N_,{to:"/Guest-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{title:"View Local Details",isEdit:!1,updateCommision:!0,type:"Guide"},class:"btn btn-primary shadow btn-xs sharp me-2",children:(0,c.jsx)("i",{class:"fa fa-eye"})}),(0,c.jsx)("button",{type:"button",onClick:()=>i(null===e||void 0===e?void 0:e._id),class:"btn btn-danger shadow btn-xs sharp",children:(0,c.jsx)("i",{class:"fa fa-trash"})})]}),o.push(a)})),l({...e,rows:o})}},i=async e=>{try{let{data:l}=await(0,o.yz)(e);l&&!l.error&&a()}catch(l){console.log(l)}},t=async e=>{try{let{data:l}=await(0,o.Bg)(e);l&&!l.error&&a()}catch(l){console.log(l)}};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"col-xl-12 pt-4",children:(0,c.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,c.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,c.jsx)("div",{className:"card_title_container",children:(0,c.jsx)("h4",{className:"card-title",children:"Local List"})}),(0,c.jsx)("div",{className:"search_icon",children:(0,c.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,c.jsx)("div",{className:"d-flex filter_modal",children:(0,c.jsx)("button",{type:"button",className:"btn filter_manage px-3 py-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:(0,c.jsx)("i",{className:"fa-solid fa-filter"})})}),(0,c.jsx)("div",{className:"table-responsive mdb_table",children:(0,c.jsx)(d.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,data:e,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,c.jsx)("div",{className:"table-responsive mdb_table2"})]})})})})},v=()=>(0,c.jsx)(i.A,{activeSlide:"Guest",children:(0,c.jsx)("div",{className:"content-body",children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-12 wid-100",children:(0,c.jsxs)("div",{className:"card dz-card",id:"bootstrap-table1",children:[(0,c.jsx)("div",{className:"card-header flex-wrap border-0",children:(0,c.jsx)("div",{children:(0,c.jsx)("h4",{className:"card-title",children:"Guest / Local Management"})})}),(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsxs)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[(0,c.jsx)("li",{className:"nav-item",role:"presentation",children:(0,c.jsx)("button",{className:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Guest"})}),(0,c.jsx)("li",{className:"nav-item",role:"presentation",children:(0,c.jsx)("button",{className:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"Local"})})]}),(0,c.jsxs)("div",{className:"tab-content",id:"pills-tabContent",children:[(0,c.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",tabIndex:0,children:(0,c.jsx)(t.A,{})}),(0,c.jsx)("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabIndex:0,children:(0,c.jsx)(r,{})})]}),(0,c.jsx)("div",{})]})]})})})})})})}}]);
//# sourceMappingURL=770.5b89a0d3.chunk.js.map