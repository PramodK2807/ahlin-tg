"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[571],{7571:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(5043),l=a(6068),n=a(8365),i=a(4299),d=a(5475),o=a(6178),c=a.n(o),r=a(579);const h=()=>{const[e,t]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Title",field:"title",width:50,selected:!1},{label:"Status",field:"status",width:100,selected:!1},{label:"Last updated",field:"date",width:100,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{a()}),[]);const a=async()=>{let{data:a}=await(0,i.mM)();if(console.warn(a),a&&(null===a||void 0===a||!a.error)){var s,l;const n=[];let i=null===a||void 0===a||null===(s=a.results)||void 0===s?void 0:s.contents;null===i||void 0===i||null===(l=i.sort(((e,t)=>new Date(null===t||void 0===t?void 0:t.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===l||l.map(((e,t)=>{const a={};a.sno=t+1,a.title=(null===e||void 0===e?void 0:e.title)||"NA",a.status=(null===e||void 0===e?void 0:e.status)||"NA",a.date=c()(null===e||void 0===e?void 0:e.updatedAt).format("Do MMMM YYYY"),a.actions=(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(d.N_,{to:"/Content-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{isEdit:!0,data:e,title:"Edit Content"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,r.jsx)("i",{className:"fa fa-edit"})}),(0,r.jsx)(d.N_,{to:"/Content-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{isEdit:!1,data:e,title:"View Content"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,r.jsx)("i",{className:"fa fa-eye"})}),(0,r.jsx)("button",{type:"button",onClick:()=>o(null===e||void 0===e?void 0:e._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,r.jsx)("i",{className:"fa fa-trash"})})]}),n.push(a)})),t({...e,rows:n})}},o=async e=>{try{let{data:t}=await(0,i.zi)(e);t&&!t.error&&a()}catch(t){console.log(t)}};return(0,r.jsx)(l.A,{activeSlide:"Content",children:(0,r.jsx)("div",{className:"content-body",children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-12",children:(0,r.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,r.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,r.jsxs)("div",{className:"d-flex card_title_container",children:[(0,r.jsx)("h4",{className:"card-title",children:"Content Management"}),(0,r.jsx)("p",{className:"ps-2 d-none",children:"(14,555)"})]}),(0,r.jsx)("div",{className:"d-flex justify-content-end",children:(0,r.jsx)(d.N_,{className:"btn btn-primary rounded",to:"/Content-Management/Create-New",state:{isNew:!0,title:"Create New Content"},children:"Create New Content"})}),(0,r.jsx)("div",{className:"search_icon search_icon2",children:(0,r.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,r.jsx)("div",{className:"table-responsive mdb_table mdb_table_new",children:(0,r.jsx)(n.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,data:e,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,r.jsx)("div",{className:"table-responsive mdb_table2"})]})})})})})})})}}}]);
//# sourceMappingURL=571.5d680d32.chunk.js.map