"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[583],{9583:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});var s=l(5043),d=l(6068),i=l(8365),t=l(4299),c=(l(6178),l(5475)),o=l(579);const n=()=>{const[e,a]=(0,s.useState)({from:"",to:"",status:""}),[l,n]=(0,s.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Package Name ",field:"name",width:50,selected:!1},{label:"Local Name ",field:"localName",width:50,selected:!1},{label:"Price",field:"price",width:50,selected:!1},{label:"Status",field:"status",width:50,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,s.useEffect)((()=>{const e=new AbortController;let a=e.signal;return r(a),()=>{e.abort()}}),[e]);const r=async a=>{let{data:s}=await(0,t.Wn)(e,{signal:a});if(console.warn(s),s&&(null===s||void 0===s||!s.error)){var d,i;const e=[];let a=null===s||void 0===s||null===(d=s.results)||void 0===d?void 0:d.list;null===a||void 0===a||null===(i=a.sort(((e,a)=>new Date(null===a||void 0===a?void 0:a.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===i||i.map(((a,l)=>{var s;const d={};d.sno=l+1,d.name=(null===a||void 0===a?void 0:a.packageName)||"NA",d.localName=(null===a||void 0===a||null===(s=a.local)||void 0===s?void 0:s.fullName)||"NA",d.price=(null===a||void 0===a?void 0:a.price)||"NA",d.status=(0,o.jsxs)("div",{className:"check_toggle text-center",children:[(0,o.jsx)("input",{type:"checkbox",defaultChecked:null===a||void 0===a?void 0:a.status,name:"check1",id:null===a||void 0===a?void 0:a._id,className:"d-none",onClick:()=>{m(null===a||void 0===a?void 0:a._id,null===a||void 0===a?void 0:a.status)}}),(0,o.jsx)("label",{for:null===a||void 0===a?void 0:a._id})]},null===a||void 0===a?void 0:a._id),d.actions=(0,o.jsx)("div",{className:"d-flex ",children:(0,o.jsx)(c.N_,{to:"/Package-Management/Details/".concat(null===a||void 0===a?void 0:a._id),className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,o.jsx)("i",{className:"fa fa-eye"})})}),e.push(d)})),n({...l,rows:e})}},m=async e=>{try{let{data:a}=await(0,t.ZA)(e);a&&!a.error&&r()}catch(a){console.log(a)}};return(0,o.jsx)(d.A,{activeSlide:"Package",children:(0,o.jsx)("div",{className:"content-body",children:(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-xl-12 pt-4",children:[(0,o.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,o.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,o.jsx)("div",{className:"card_title_container",children:(0,o.jsx)("h4",{className:"card-title",children:"Package Management"})}),(0,o.jsx)("div",{className:"search_icon",children:(0,o.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,o.jsx)("div",{className:"d-flex filter_modal",children:(0,o.jsx)("button",{type:"button",className:"btn filter_manage px-3 py-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:(0,o.jsx)("i",{className:"fa-solid fa-filter"})})}),(0,o.jsx)("div",{className:"table-responsive mdb_table",children:(0,o.jsx)(i.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,data:l,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,o.jsx)("div",{className:"table-responsive mdb_table2"})]})}),(0,o.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,o.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,o.jsxs)("div",{className:"modal-content",children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h1",{className:"modal-title fs-3 fw-semibold",id:"exampleModalLabel",children:"Filter"}),(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,o.jsx)("div",{className:"modal-body",children:(0,o.jsxs)("form",{children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"recipient-name",className:"col-form-label",children:"From:"}),(0,o.jsx)("div",{className:"searchh_box",children:(0,o.jsx)("div",{children:(0,o.jsx)("input",{className:"form-control ps-3",type:"date",value:null===e||void 0===e?void 0:e.to,onChange:l=>a({...e,to:l.target.value})})})})]})}),(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"recipient-name",className:"col-form-label",children:"To:"}),(0,o.jsx)("div",{className:"searchh_box",children:(0,o.jsx)("div",{children:(0,o.jsx)("input",{className:"form-control ps-3",type:"date",value:null===e||void 0===e?void 0:e.from,onChange:l=>a({...e,from:l.target.value})})})})]})}),(0,o.jsxs)("div",{class:"col-md-12",children:[(0,o.jsx)("label",{for:"message-text",class:"col-form-label",children:"Status"}),(0,o.jsxs)("div",{class:"d-flex gx-5",children:[(0,o.jsxs)("div",{class:"form-check",children:[(0,o.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onClick:()=>a({...e,status:!0})}),(0,o.jsx)("label",{class:"form-check-label",for:"flexRadioDefault1",children:"Active"})]}),(0,o.jsxs)("div",{class:"form-check ms-4",children:[(0,o.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Inactive",onClick:()=>a({...e,status:!1})}),(0,o.jsx)("label",{class:"form-check-label",for:"Inactive",children:"Inactive"})]})]})]})]}),(0,o.jsxs)("div",{className:"modal-footer p-0 pt-2",children:[(0,o.jsx)("button",{type:"reset",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:()=>a({from:"",to:"",status:"",canceledBy:""}),children:"Close"}),(0,o.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Save"})]})]})})]})})})]})})})})})}}}]);
//# sourceMappingURL=583.325cc3d3.chunk.js.map