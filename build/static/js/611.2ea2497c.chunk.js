"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[611],{611:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var s=a(5043),d=a(6068),i=a(8365),o=a(4299),c=a(5475),t=a(6178),n=a.n(t),r=a(579);const m=()=>{const[e,l]=(0,s.useState)(0),[a,t]=(0,s.useState)({from:"",to:"",status:"",canceledBy:""}),[m,h]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Booking Id",field:"id",width:50,selected:!1},{label:"Guest Name",field:"name",width:50,selected:!1},{label:"Local Name",field:"localName",width:50,selected:!1},{label:"Booking Date",field:"date",width:50,selected:!1},{label:"Booking Amount",field:"amount",width:100,selected:!1},{label:"Booking Status",field:"status",width:100,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{const e=new AbortController;let l=e.signal;return u(l),()=>{e.abort()}}),[a]);const u=async e=>{let{data:s}=await(0,o.hn)(a,{signal:e});if(console.warn(s),s&&(null===s||void 0===s||!s.error)){var d,i;const e=[];let a=null===s||void 0===s||null===(d=s.results)||void 0===d?void 0:d.bookingList;l((null===a||void 0===a?void 0:a.length)||0),null===a||void 0===a||null===(i=a.sort(((e,l)=>new Date(null===l||void 0===l?void 0:l.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===i||i.map(((l,a)=>{var s,d,i;const o={};o.sno=a+1,o.id=(null===l||void 0===l?void 0:l.bookingId)||"NA",o.name=(null===l||void 0===l||null===(s=l.user)||void 0===s?void 0:s.fullName)||"NA",o.localName=(null===l||void 0===l||null===(d=l.local)||void 0===d?void 0:d.fullName)||"NA",o.amount=(null===l||void 0===l||null===(i=l.package)||void 0===i?void 0:i.price)||"NA",o.status=null!==l&&void 0!==l&&l.status&&"completed"===(null===l||void 0===l?void 0:l.status)?(0,r.jsx)("span",{className:"badge light badge-success",children:"Completed"}):"upComing"===(null===l||void 0===l?void 0:l.status)?(0,r.jsx)("span",{className:"badge light badge-info",children:"Upcoming"}):"Pending"===(null===l||void 0===l?void 0:l.status)?(0,r.jsx)("span",{className:"badge light badge-warning",children:"Pending"}):"Canceled"===(null===l||void 0===l?void 0:l.status)?(0,r.jsx)("span",{className:"badge light badge-danger",children:"Cancelled"}):null===l||void 0===l?void 0:l.status,o.date=n()(null===l||void 0===l?void 0:l.createdAt).format("MMM Do YYYY")||"NA",o.actions=(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(c.N_,{to:"/Booking-Management/Details",state:null===l||void 0===l?void 0:l._id,className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,r.jsx)("i",{className:"fa fa-eye"})}),(0,r.jsx)("button",{type:"button",onClick:()=>x(null===l||void 0===l?void 0:l._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,r.jsx)("i",{className:"fa fa-trash"})})]}),e.push(o)})),h({...m,rows:e})}},x=async e=>{try{let{data:l}=await(0,o.PJ)(e);l&&!l.error&&u()}catch(l){console.log(l)}};return(0,r.jsx)(d.A,{activeSlide:"Booking",children:(0,r.jsxs)("div",{className:"content-body",children:[(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-12",children:(0,r.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,r.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,r.jsxs)("div",{className:"d-flex card_title_container",children:[(0,r.jsx)("h4",{className:"card-title",children:"Booking Management"}),(0,r.jsx)("p",{className:"ps-2",children:"(".concat(e,")")})]}),(0,r.jsx)("div",{className:"search_icon",children:(0,r.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,r.jsx)("div",{className:"d-flex filter_modal",children:(0,r.jsx)("button",{type:"button",className:"btn filter_manage px-3 py-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:(0,r.jsx)("i",{className:"fa-solid fa-filter"})})}),(0,r.jsx)("div",{className:"table-responsive mdb_table",children:(0,r.jsx)(i.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,maxWidth:"100%",data:m,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,r.jsx)("div",{className:"table-responsive mdb_table2"})]})})})})}),(0,r.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h1",{className:"modal-title fs-3 fw-semibold",id:"exampleModalLabel",children:"Filter"}),(0,r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,r.jsx)("div",{className:"modal-body",children:(0,r.jsxs)("form",{children:[(0,r.jsxs)("div",{class:"row",children:[(0,r.jsx)("div",{class:"col-md-6",children:(0,r.jsxs)("div",{class:"mb-3",children:[(0,r.jsx)("label",{for:"recipient-name",class:"col-form-label",children:"From:"}),(0,r.jsx)("div",{class:"searchh_box",children:(0,r.jsx)("form",{children:(0,r.jsx)("input",{class:"form-control ps-3",type:"date",value:null===a||void 0===a?void 0:a.from,onChange:e=>t({...a,from:e.target.value})})})})]})}),(0,r.jsx)("div",{class:"col-md-6",children:(0,r.jsxs)("div",{class:"mb-3",children:[(0,r.jsx)("label",{for:"recipient-name",class:"col-form-label",children:"To:"}),(0,r.jsx)("div",{class:"searchh_box",children:(0,r.jsx)("form",{children:(0,r.jsx)("input",{class:"form-control ps-3",type:"date",value:null===a||void 0===a?void 0:a.to,onChange:e=>t({...a,to:e.target.value})})})})]})}),(0,r.jsxs)("div",{class:"col-md-12",children:[(0,r.jsx)("label",{for:"message-text",class:"col-form-label",children:"Status"}),(0,r.jsxs)("div",{class:"d-flex gx-5",children:[(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onClick:()=>t({...a,status:"completed"})}),(0,r.jsx)("label",{class:"form-check-label",for:"flexRadioDefault1",children:"Complete"})]}),(0,r.jsxs)("div",{class:"form-check ms-4",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"upcoming",onClick:()=>t({...a,status:"upComing"})}),(0,r.jsx)("label",{class:"form-check-label",for:"upcoming",children:"Upcoming"})]})]})]}),(0,r.jsxs)("div",{class:"col-md-12",children:[(0,r.jsx)("label",{for:"message-text",class:"col-form-label",children:"Cancelled By:"}),(0,r.jsxs)("div",{class:"d-flex ",children:[(0,r.jsxs)("div",{class:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"cancel",id:"local",onClick:()=>t({...a,canceledBy:"local"})}),(0,r.jsx)("label",{class:"form-check-label",for:"local",children:"Local"})]}),(0,r.jsxs)("div",{class:"form-check ms-4",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"cancel",id:"guest",onClick:()=>t({...a,canceledBy:"guest"})}),(0,r.jsx)("label",{class:"form-check-label",for:"guest",children:"Guest"})]})]})]})]}),(0,r.jsxs)("div",{className:"modal-footer pe-0",children:[(0,r.jsx)("button",{type:"reset",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:()=>t({from:"",to:"",status:"",canceledBy:""}),children:"Close"}),(0,r.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Save"})]})]})})]})})})]})})}}}]);
//# sourceMappingURL=611.2ea2497c.chunk.js.map