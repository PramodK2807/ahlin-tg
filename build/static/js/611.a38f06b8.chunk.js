"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[611],{611:(e,a,l)=>{l.r(a),l.d(a,{default:()=>m});var s=l(5043),d=l(6068),i=l(7694),t=l(4299),o=l(5475),c=l(6178),n=l.n(c),r=l(579);const m=()=>{const[e,a]=(0,s.useState)(0),[l,c]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Booking Id",field:"id",width:50,selected:!1},{label:"Guest Name",field:"name",width:50,selected:!1},{label:"Local Name",field:"localName",width:50,selected:!1},{label:"Booking Date",field:"date",width:50,selected:!1},{label:"Booking Amount",field:"amount",width:100,selected:!1},{label:"Booking Status",field:"status",width:100,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{m()}),[]);const m=async()=>{let{data:e}=await(0,t.hn)();if(console.warn(e),e&&(null===e||void 0===e||!e.error)){var s,d;const i=[];let t=null===e||void 0===e||null===(s=e.results)||void 0===s?void 0:s.list;a((null===t||void 0===t?void 0:t.length)||0),null===t||void 0===t||null===(d=t.sort(((e,a)=>new Date(null===a||void 0===a?void 0:a.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===d||d.map(((e,a)=>{var l,s,d;const t={};t.sno=a+1,t.id=(null===e||void 0===e?void 0:e.bookingId)||"NA",t.name=(null===e||void 0===e||null===(l=e.user)||void 0===l?void 0:l.fullName)||"NA",t.localName=(null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.fullName)||"NA",t.amount=(null===e||void 0===e||null===(d=e.package)||void 0===d?void 0:d.price)||"NA",t.status="completed"===(null===e||void 0===e?void 0:e.status)?(0,r.jsx)("span",{className:"badge light badge-success",children:"Completed"}):"upComing"===(null===e||void 0===e?void 0:e.status)?(0,r.jsx)("span",{className:"badge light badge-info",children:"Upcoming"}):null===e||void 0===e?void 0:e.status,t.date=n()(null===e||void 0===e?void 0:e.createdAt).format("MMM Do YYYY")||"NA",t.actions=(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(o.N_,{to:"/Booking-Management/Details",state:null===e||void 0===e?void 0:e._id,className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,r.jsx)("i",{className:"fa fa-eye"})}),(0,r.jsx)("button",{type:"button",onClick:()=>h(null===e||void 0===e?void 0:e._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,r.jsx)("i",{className:"fa fa-trash"})})]}),i.push(t)})),c({...l,rows:i})}},h=async e=>{try{let{data:a}=await(0,t.PJ)(e);a&&!a.error&&m()}catch(a){console.log(a)}};return(0,r.jsx)(d.A,{activeSlide:"Booking",children:(0,r.jsxs)("div",{className:"content-body",children:[(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-12",children:(0,r.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,r.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,r.jsxs)("div",{className:"d-flex card_title_container",children:[(0,r.jsx)("h4",{className:"card-title",children:"Booking Management"}),(0,r.jsx)("p",{className:"ps-2",children:"(".concat(e,")")})]}),(0,r.jsx)("div",{className:"search_icon",children:(0,r.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,r.jsx)("div",{className:"d-flex filter_modal",children:(0,r.jsx)("button",{type:"button",className:"btn filter_manage px-3 py-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:(0,r.jsx)("i",{className:"fa-solid fa-filter"})})}),(0,r.jsx)("div",{className:"mdb_table",children:(0,r.jsx)("div",{className:"table-responsive",children:(0,r.jsx)(i.g6D,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,maxWidth:"100%",data:l,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})})})]})})})})}),(0,r.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h1",{className:"modal-title fs-3 fw-semibold",id:"exampleModalLabel",children:"Filter"}),(0,r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,r.jsx)("div",{className:"modal-body",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"recipient-name",className:"col-form-label",children:"From:"}),(0,r.jsx)("div",{className:"searchh_box",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{className:"form-control ps-3",type:"date"}),(0,r.jsx)("button",{className:!0,children:(0,r.jsx)("i",{className:"fa-regular fa-calendar"})})]})})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"recipient-name",className:"col-form-label",children:"To:"}),(0,r.jsx)("div",{className:"searchh_box",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{className:"form-control ps-3",type:"date"}),(0,r.jsx)("button",{className:!0,children:(0,r.jsx)("i",{className:"fa-regular fa-calendar"})})]})})]})}),(0,r.jsxs)("div",{className:"col-md-8",children:[(0,r.jsx)("label",{htmlFor:"message-text",className:"col-form-label",children:"Status"}),(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Complete"})]}),(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",defaultChecked:!0}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault2",children:"Upcoming"})]})]})]})]})}),(0,r.jsxs)("div",{className:"modal-footer",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),(0,r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save"})]})]})})})]})})}}}]);
//# sourceMappingURL=611.a38f06b8.chunk.js.map