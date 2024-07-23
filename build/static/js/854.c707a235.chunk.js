"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[854],{8854:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var l=a(5043),i=a(6068),d=a(4299),c=(a(7227),a(2019)),t=a(579);const o=()=>{const[e,s]=(0,l.useState)({series:[{name:"Guests",data:[31,40,28]},{name:"Locals",data:[11,32,45]}],options:{chart:{height:400,type:"area",toolbar:{show:!0}},colors:["#734f96","#b478ef"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"category",categories:["Jan","Feb","Mar"],tickPlacement:"between"},tooltip:{x:{show:!0}},grid:{show:!0}}}),a=e.series[0].data.length<9?"100%":80*e.series[0].data.length;return(0,t.jsx)("div",{className:"apex_chart_box overflow-scroll",children:(0,t.jsx)("div",{id:"chart",style:{width:a},children:(0,t.jsx)(c.A,{options:e.options,series:e.series,type:"area",height:350})})})},n=()=>{const[e,s]=(0,l.useState)({series:[{name:"Revenue",data:[100,102,90,60,80]},{name:"Trips",data:[80,85,70,50,75]}],options:{chart:{height:350,type:"bar",toolbar:{show:!0,tools:{download:!0}},events:{mounted:function(e,s){e.windowResizeHandler()}}},plotOptions:{bar:{horizontal:!1,columnWidth:"30px",endingShape:"rounded"}},colors:["#734f96","#b478ef"],dataLabels:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May"],position:"bottom",tickPlacement:"between"},fill:{opacity:1},tooltip:{y:{formatter:function(e){return e}}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{position:"top",horizontalAlign:"right"}}}),a=e.series[0].data.length<9?"100%":100*e.series[0].data.length;return(0,t.jsx)("div",{className:"overflow-scroll apex_chart_box",children:(0,t.jsx)("div",{className:"",id:"chart",style:{width:a},children:(0,t.jsx)(c.A,{options:e.options,series:e.series,type:"bar",height:350})})})},r=()=>{const[e,s]=(0,l.useState)(0);(0,l.useEffect)((()=>{a()}),[]);const a=async()=>{let{data:e}=await(0,d.Bb)();console.log(e),!e||null!==e&&void 0!==e&&e.error||s(null===e||void 0===e?void 0:e.results)};return(0,t.jsx)(i.A,{activeSlide:"Dashboard",children:(0,t.jsx)("div",{className:"content-body",children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12 wid-100",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Number of Guests"}),(0,t.jsxs)("h3",{children:[null===e||void 0===e?void 0:e.totalGuest," "]})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fas fa-users"})})]}),(0,t.jsx)("div",{id:"NewCustomers"})]})})}),(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Number of Locals"}),(0,t.jsxs)("h3",{children:[null===e||void 0===e?void 0:e.totalLocal," "]})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fa-solid fa-person-military-pointing"})})]}),(0,t.jsx)("div",{id:"NewCustomers"})]})})}),(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total revenue"}),(0,t.jsx)("h3",{children:null===e||void 0===e?void 0:e.totalRevenue})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fas fa-dollar-sign"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})}),(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total Pending Booking Requests"}),(0,t.jsx)("h3",{children:null===e||void 0===e?void 0:e.totalPendingBookings})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fa-solid fa-hourglass-half"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})}),(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total Pending Trip Offers"}),(0,t.jsx)("h3",{children:null===e||void 0===e?void 0:e.totalPendingTrips})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{className:"fa-solid fa-plane"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})}),(0,t.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Total Completed Bookings"}),(0,t.jsx)("h3",{children:null===e||void 0===e?void 0:e.totalCompletedBookings})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{class:"fa-solid fa-square-check"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})}),(0,t.jsx)("div",{className:"col-xl-6 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Cancelled Booking by Guests"}),(0,t.jsx)("h3",{children:(null===e||void 0===e?void 0:e.totalBookingCancelByGuest)||0})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{class:"fa-solid fa-plane-slash"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})}),(0,t.jsx)("div",{className:"col-xl-6 col-sm-6",children:(0,t.jsx)("div",{className:"card chart-grd same-card",children:(0,t.jsxs)("div",{className:"card-body depostit-card p-0",children:[(0,t.jsxs)("div",{className:"depostit-card-media d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Cancelled Booking by Local"}),(0,t.jsx)("h3",{children:(null===e||void 0===e?void 0:e.totalBookingCancelByLocal)||0})]}),(0,t.jsx)("div",{className:"icon-box icon_bg",children:(0,t.jsx)("i",{class:"fa-solid fa-trash-can"})})]}),(0,t.jsx)("div",{id:"NewExperience"})]})})})]})}),(0,t.jsx)("div",{id:"revenue",className:"col-xl-6 d-flex align-items-stretch",children:(0,t.jsxs)("div",{className:"card w-100 o-hidden card-hover",children:[(0,t.jsx)("div",{className:"card-header border-0 pb-1",children:(0,t.jsx)("div",{className:"card-header-title",children:(0,t.jsx)("h4",{children:"Total Guests & Locals"})})}),(0,t.jsx)("div",{className:"card-body p-0",children:(0,t.jsx)(o,{})})]})}),(0,t.jsx)("div",{id:"revenue",className:"col-xl-6 d-flex align-items-stretch",children:(0,t.jsxs)("div",{className:"card w-100 o-hidden card-hover",children:[(0,t.jsx)("div",{className:"card-header border-0 pb-1",children:(0,t.jsx)("div",{className:"card-header-title",children:(0,t.jsx)("h4",{children:"Total Revenue & Trips"})})}),(0,t.jsx)("div",{className:"card-body p-0",children:(0,t.jsx)(n,{})})]})})]})})})})}},7227:(e,s,a)=>{a.d(s,{A:()=>o});var l=a(8365),i=a(5043),d=a(4299),c=a(5475),t=a(579);const o=e=>{let{latest:s}=e;const[a,o]=(0,i.useState)({from:"",to:"",status:"",countryName:""}),[n,r]=(0,i.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Name",field:"name",width:50,selected:!1},{label:"Contact No.",field:"mobile",width:100,selected:!1},{label:"Email",field:"email",width:50,selected:!1},{label:"Country",field:"country",width:50,selected:!1},{label:"Status",field:"status",width:50,selected:!1},{label:"Actions",field:"actions",width:100,selected:!1}],rows:[]});(0,i.useEffect)((()=>{const e=new AbortController;let s=e.signal;return h(s),()=>{e.abort()}}),[a]);const h=async e=>{let{data:l}=await(0,d.GQ)(a,{signal:e});if(console.warn(l),l&&(null===l||void 0===l||!l.error)){var i,o,h,v;const e=[];let a;a=s&&s?null===l||void 0===l||null===(i=l.results)||void 0===i?void 0:i.list.slice(0,10):null===l||void 0===l||null===(o=l.results)||void 0===o?void 0:o.list,null===(h=a)||void 0===h||null===(v=h.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.updatedAt)-new Date(null===e||void 0===e?void 0:e.updatedAt))))||void 0===v||v.map(((s,a)=>{const l={};l.sno=a+1,l.name=(null===s||void 0===s?void 0:s.fullName)||"NA",l.mobile=+(null===s||void 0===s?void 0:s.mobileNumber)||"NA",l.email=(null===s||void 0===s?void 0:s.email)||"NA",l.country=(null===s||void 0===s?void 0:s.countryName)||"NA",l.status=(0,t.jsxs)("div",{className:"check_toggle text-center",children:[(0,t.jsx)("input",{type:"checkbox",defaultChecked:null===s||void 0===s?void 0:s.status,name:"check1",id:null===s||void 0===s?void 0:s._id,className:"d-none",onClick:()=>{x(null===s||void 0===s?void 0:s._id,null===s||void 0===s?void 0:s.status)}}),(0,t.jsx)("label",{for:null===s||void 0===s?void 0:s._id})]},null===s||void 0===s?void 0:s._id),l.actions=(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)(c.N_,{to:"/Guest-Management/Details/".concat(null===s||void 0===s?void 0:s._id),state:{title:"View Guest Details",isEdit:!1,type:"User"},className:"btn btn-primary shadow btn-xs sharp me-2",children:(0,t.jsx)("i",{className:"fa fa-eye"})}),(0,t.jsx)("button",{type:"button",onClick:()=>m(null===s||void 0===s?void 0:s._id),className:"btn btn-danger shadow btn-xs sharp",children:(0,t.jsx)("i",{className:"fa fa-trash"})})]}),e.push(l)})),r({...n,rows:e})}},m=async e=>{try{let{data:s}=await(0,d.JM)(e);s&&!s.error&&h()}catch(s){console.log(s)}},x=async e=>{try{let{data:s}=await(0,d.sN)(e);s&&!s.error&&h()}catch(s){console.log(s)}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"col-xl-12 pt-4",children:[(0,t.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,t.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,t.jsx)("div",{className:"card_title_container",children:(0,t.jsx)("h4",{className:"card-title",children:"Guests List"})}),(0,t.jsx)("div",{className:"search_icon",children:(0,t.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,t.jsx)("div",{className:"d-flex filter_modal",children:(0,t.jsx)("button",{type:"button",className:"btn filter_manage px-3 py-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:(0,t.jsx)("i",{className:"fa-solid fa-filter"})})}),(0,t.jsx)("div",{className:"table-responsive mdb_table",children:(0,t.jsx)(l.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,data:n,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,t.jsx)("div",{className:"table-responsive mdb_table2"})]})}),(0,t.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,t.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,t.jsxs)("div",{className:"modal-content",children:[(0,t.jsxs)("div",{className:"modal-header",children:[(0,t.jsx)("h1",{className:"modal-title fs-3 fw-semibold",id:"exampleModalLabel",children:"Filter"}),(0,t.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,t.jsx)("div",{className:"modal-body",children:(0,t.jsxs)("form",{children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"recipient-name",className:"col-form-label",children:"From:"}),(0,t.jsx)("div",{className:"searchh_box",children:(0,t.jsx)("div",{children:(0,t.jsx)("input",{className:"form-control ps-3",type:"date",value:null===a||void 0===a?void 0:a.to,onChange:e=>o({...a,to:e.target.value})})})})]})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"recipient-name",className:"col-form-label",children:"To:"}),(0,t.jsx)("div",{className:"searchh_box",children:(0,t.jsx)("div",{children:(0,t.jsx)("input",{className:"form-control ps-3",type:"date",value:null===a||void 0===a?void 0:a.from,onChange:e=>o({...a,from:e.target.value})})})})]})}),(0,t.jsxs)("div",{class:"col-md-12",children:[(0,t.jsx)("label",{for:"message-text",class:"col-form-label",children:"Status"}),(0,t.jsxs)("div",{class:"d-flex gx-5",children:[(0,t.jsxs)("div",{class:"form-check",children:[(0,t.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onClick:()=>o({...a,status:!0})}),(0,t.jsx)("label",{class:"form-check-label",for:"flexRadioDefault1",children:"Active"})]}),(0,t.jsxs)("div",{class:"form-check ms-4",children:[(0,t.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Inactive",onClick:()=>o({...a,status:!1})}),(0,t.jsx)("label",{class:"form-check-label",for:"Inactive",children:"Inactive"})]})]})]})]}),(0,t.jsxs)("div",{className:"modal-footer p-0 pt-2",children:[(0,t.jsx)("button",{type:"reset",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:()=>o({from:"",to:"",status:"",canceledBy:""}),children:"Close"}),(0,t.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Save"})]})]})})]})})})]})})}}}]);
//# sourceMappingURL=854.c707a235.chunk.js.map