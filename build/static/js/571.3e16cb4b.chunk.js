"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[571],{7571:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var s=t(5043),l=t(6068),i=t(8365),n=t(4299),d=t(5475),o=t(6178),c=t.n(o),r=t(579);const v=()=>{const[e,a]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Title",field:"title",width:50,selected:!1},{label:"Last updated",field:"date",width:100,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{t()}),[]);const t=async()=>{let{data:t}=await(0,n.mM)();if(console.warn(t),t&&(null===t||void 0===t||!t.error)){var s,l;const i=[];let n=null===t||void 0===t||null===(s=t.results)||void 0===s?void 0:s.contents;null===n||void 0===n||null===(l=n.sort(((e,a)=>new Date(null===a||void 0===a?void 0:a.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===l||l.map(((e,a)=>{const t={};t.sno=a+1,t.title=(null===e||void 0===e?void 0:e.titleEn)||"NA",t.status=(null===e||void 0===e?void 0:e.status)||"NA",t.date=c()(null===e||void 0===e?void 0:e.updatedAt).format("Do MMMM YYYY"),t.actions=(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(d.N_,{to:"/Content-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{isEdit:!0,data:e,title:"Edit Content"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,r.jsx)("i",{className:"fa fa-edit"})}),(0,r.jsx)(d.N_,{to:"/Content-Management/Details/".concat(null===e||void 0===e?void 0:e._id),state:{isEdit:!1,data:e,title:"View Content"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,r.jsx)("i",{className:"fa fa-eye"})}),(0,r.jsx)("button",{type:"button",onClick:()=>o(null===e||void 0===e?void 0:e._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,r.jsx)("i",{className:"fa fa-trash"})})]}),i.push(t)})),a({...e,rows:i})}},o=async e=>{try{let{data:a}=await(0,n.zi)(e);a&&!a.error&&t()}catch(a){console.log(a)}};return(0,r.jsx)(l.A,{activeSlide:"Content",children:(0,r.jsx)("div",{className:"content-body",children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-12",children:(0,r.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,r.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,r.jsxs)("div",{className:"d-flex card_title_container",children:[(0,r.jsx)("h4",{className:"card-title",children:"Content Management"}),(0,r.jsx)("p",{className:"ps-2 d-none",children:"(14,555)"})]}),(0,r.jsx)("div",{className:"search_icon",children:(0,r.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,r.jsx)("div",{className:"d-flex filter_modal",children:(0,r.jsx)(d.N_,{className:"btn btn-primary rounded opacity-0",state:{isNew:!0,title:"Create New Content"},children:"Create New Content"})}),(0,r.jsx)("div",{className:"table-responsive mdb_table",children:(0,r.jsx)(i.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,data:e,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,r.jsx)("div",{className:"table-responsive mdb_table2"})]})})})})})})})}}}]);
//# sourceMappingURL=571.3e16cb4b.chunk.js.map