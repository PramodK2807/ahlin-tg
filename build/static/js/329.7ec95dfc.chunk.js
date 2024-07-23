"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[329],{329:(e,l,s)=>{s.r(l),s.d(l,{default:()=>N});var a=s(5043),i=s(6068),d=s(8365),o=s(6178),n=s.n(o),t=s(579);const r=e=>{let{bookings:l}=e;const[s,i]=(0,a.useState)({columns:[{label:"S.No.",field:"sno",width:50,selected:!1},{label:"Booking Id",field:"id",width:50,selected:!1},{label:"Local Name",field:"name",width:50,selected:!1},{label:"Guest Name",field:"gname",width:50,selected:!1},{label:"Mobile No.",field:"mobile",width:100,selected:!1},{label:"Booking Amount",field:"amount",width:50,selected:!1},{label:"Booking Date",field:"date",width:50,selected:!1}],rows:[]});(0,a.useEffect)((()=>{o()}),[l]);const o=()=>{const e=[];null===l||void 0===l||l.map(((l,s)=>{var a,i,d;const o={};o.sno=s+1,o.name=(null===l||void 0===l?void 0:l.packageName)||"NA",o.id=(null===l||void 0===l?void 0:l.bookingId)||"NA",o.name=(null===l||void 0===l||null===(a=l.local)||void 0===a?void 0:a.fullName)||"NA",o.mobile=(null===l||void 0===l||null===(i=l.local)||void 0===i?void 0:i.mobileNumber)||"NA",o.amount=(null===l||void 0===l||null===(d=l.package)||void 0===d?void 0:d.price)||"NA",o.date=n()(null===l||void 0===l?void 0:l.createdAt).format("L")||"NA",e.push(o)})),i({...s,rows:e})};return(0,t.jsx)("div",{className:"col-xl-12 pt-4",children:(0,t.jsx)("div",{className:"card dz-card",id:"bootstrap-table1",children:(0,t.jsxs)("div",{className:"col-12 card-body position-relative card-body-2",children:[(0,t.jsx)("div",{className:"card_title_container",children:(0,t.jsx)("h4",{className:"card-title",children:"Trip Booking History"})}),(0,t.jsx)("div",{className:"search_icon",children:(0,t.jsx)("i",{class:"fa-solid fa-magnifying-glass"})}),(0,t.jsx)("div",{className:"table-responsive mdb_table mdb_table_new",children:(0,t.jsx)(d.g6D,{bordered:!0,displayEntries:!0,entries:10,className:"text-nowrap",hover:!0,data:s,noBottomColumns:!0,sortable:!0,paginationLabel:"\xab\xbb"})}),(0,t.jsx)("div",{className:"table-responsive mdb_table2"})]})})})};var c=s(4858),m=s(3216),u=s(4299),v=s(64),b=s.n(v);const h=e=>{let{title:l}=e;const[s,i]=(0,a.useState)(!1);return(0,t.jsxs)("div",{children:[(0,t.jsx)("i",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),class:"fa-solid fa-circle-info me-3"}),s&&(0,t.jsx)("span",{className:"position-absolute info_box",children:l})]})},N=()=>{var e,l,s;const[d,o]=(0,a.useState)(),[v,N]=(0,a.useState)([]),[p,x]=(0,a.useState)(""),[g,j]=(0,a.useState)(),[f,y]=(0,a.useState)(0),[A,w]=(0,a.useState)([]),{id:k}=(0,m.g)(),{state:C}=(0,m.zy)(),M=(0,m.Zp)(),{register:_,handleSubmit:S,setValue:B,formState:{errors:D}}=(0,c.mN)({mode:"onChange"});(0,a.useEffect)((()=>{"Guide"===(null===C||void 0===C?void 0:C.type)&&I(),"User"===(null===C||void 0===C?void 0:C.type)&&q()}),[]);const I=async()=>{try{let{data:a}=await(0,u.Pu)(k);if(a&&(null===a||void 0===a||!a.error)){var e,l,s;o(null===a||void 0===a||null===(e=a.results)||void 0===e?void 0:e.guide);let i=null===a||void 0===a||null===(l=a.results)||void 0===l?void 0:l.guide;console.log(i),N(null===a||void 0===a||null===(s=a.results)||void 0===s?void 0:s.bookings),B("name",(null===i||void 0===i?void 0:i.fullName)||"NA"),B("number",(null===i||void 0===i?void 0:i.mobileNumber)||"NA"),B("email",(null===i||void 0===i?void 0:i.email)||"NA"),B("dob",n()(null===i||void 0===i?void 0:i.dob).format("YYYY-MM-DD")||"NA"),B("image",(null===i||void 0===i?void 0:i.profile_image)||"NA"),B("country",(null===i||void 0===i?void 0:i.countryName)||"NA"),y(null===i||void 0===i?void 0:i.commission),j(null===i||void 0===i?void 0:i.profileImage[0])}}catch(a){console.log(a)}},q=async()=>{try{let{data:a}=await(0,u.ID)(k);if(a&&(null===a||void 0===a||!a.error)){var e,l,s;console.log(a),o(null===a||void 0===a||null===(e=a.results)||void 0===e?void 0:e.user);let i=null===a||void 0===a||null===(l=a.results)||void 0===l?void 0:l.user;N(null===a||void 0===a||null===(s=a.results)||void 0===s?void 0:s.bookings),B("name","".concat(null===i||void 0===i?void 0:i.fullName)||"NA"),B("email",(null===i||void 0===i?void 0:i.email)||"NA"),B("number",(null===i||void 0===i?void 0:i.mobileNumber)||"NA"),B("dob",n()(null===i||void 0===i?void 0:i.dob).format("YYYY-MM-DD")||"NA"),B("image",(null===i||void 0===i?void 0:i.profile_image)||"NA"),j(null===i||void 0===i?void 0:i.profileImage[0]),B("country",(null===i||void 0===i?void 0:i.countryName)||"NA")}}catch(a){console.log(a)}};return(0,t.jsx)(i.A,{activeSlide:"Guest",children:(0,t.jsx)("div",{className:"content-body",children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xl-12",children:(0,t.jsxs)("div",{className:"card profile-card card-bx m-b30",children:[(0,t.jsx)("div",{className:"card-header",children:(0,t.jsx)("h6",{className:"title",children:null===C||void 0===C?void 0:C.title})}),(0,t.jsxs)("form",{className:"profile-form",children:[(0,t.jsx)("div",{className:"card-body",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,t.jsxs)("label",{className:"form-label",children:["Name",(0,t.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,t.jsx)("input",{disabled:!0,type:"text",name:"name",className:"form-control ".concat(D.name?"is-invalid":""),..._("name",{required:"* Name is required",minLength:{value:2,message:"Minimum 2 characters"},pattern:{value:/^(?!\s)[^\d]*(?:\s[^\d]+)*$/,message:"Spaces at the start & numbers are not allowed"}})}),D.name&&(0,t.jsx)("div",{className:"invalid-feedback",children:D.name.message})]}),(0,t.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,t.jsxs)("label",{className:"form-label",children:["Contact Number",(0,t.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,t.jsx)("input",{disabled:!0,type:"number",className:"form-control ".concat(D.number?"is-invalid":""),..._("number",{required:"* Number is required",minLength:{value:9,message:"Minimum 9 digits"}})}),D.number&&(0,t.jsx)("div",{className:"invalid-feedback",children:D.number.message})]}),(0,t.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,t.jsxs)("label",{className:"form-label",children:["Email Id",(0,t.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,t.jsx)("input",{disabled:!0,type:"email",className:"form-control ".concat(D.email?"is-invalid":""),..._("email",{required:"* Email is required",pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address"}})}),D.email&&(0,t.jsx)("div",{className:"invalid-feedback",children:D.email.message})]}),(0,t.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,t.jsxs)("label",{className:"form-label",children:["Date of birth",(0,t.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,t.jsx)("input",{disabled:!0,type:"date",className:"form-control ".concat(D.dob?"is-invalid":""),..._("dob",{required:"* Dob is required"})}),D.dob&&(0,t.jsx)("div",{className:"invalid-feedback",children:D.dob.message})]}),(0,t.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,t.jsxs)("label",{className:"form-label",children:["Country",(0,t.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,t.jsx)("input",{disabled:!0,type:"text",className:"form-control ".concat(D.country?"is-invalid":""),..._("country",{required:"* Country is required"})}),D.country&&(0,t.jsx)("div",{className:"invalid-feedback",children:D.country.message})]}),"Guide"===(null===C||void 0===C?void 0:C.type)&&(0,t.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,t.jsxs)("label",{className:"form-label d-flex position-relative",children:["Ahlain Fee",(0,t.jsx)("sup",{className:"mandatesign",children:"*"})," ",(0,t.jsx)(h,{title:"Ahlain Fee percentage: Indicates the percentage of the trip cost that goes to Ahlain."})]}),(0,t.jsx)("input",{type:"number",value:f,className:"form-control",onChange:e=>y(e.target.value)})]}),(0,t.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,t.jsxs)("label",{className:"form-label",children:["Joined on",(0,t.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,t.jsx)("input",{type:"text",value:n()(null===d||void 0===d?void 0:d.createdAt).format("L"),className:"form-control"})]}),"Guide"!==(null===C||void 0===C?void 0:C.type)&&(0,t.jsx)("div",{className:"col-md-5 m-b30",children:(0,t.jsxs)("label",{className:"form-label",htmlFor:"img",children:["Passport Image",(0,t.jsx)("sup",{className:"mandatesign",children:"*"}),(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)("img",{src:g||"/images/0_91v0rV9LQBJdPX7s.jpg",className:"passport_photo_manage",alt:"i"}),(0,t.jsx)("input",{type:"file",onChange:e=>{w(e.target.files[0])},className:"d-none",name:"img",id:"img"})]})]})}),"Guide"===(null===C||void 0===C?void 0:C.type)&&(null===d||void 0===d||null===(e=d.tripMemories)||void 0===e?void 0:e.length)>0&&(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("label",{className:"form-label",children:["Gallery",(0,t.jsx)("sup",{className:"mandatesign"})]}),(null===d||void 0===d?void 0:d.tripMemories)&&(null===d||void 0===d||null===(l=d.tripMemories)||void 0===l?void 0:l.length)>0&&(null===d||void 0===d||null===(s=d.tripMemories)||void 0===s?void 0:s.map(((e,l)=>(0,t.jsxs)("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2 p-1 position-relative",children:[(0,t.jsx)("img",{src:e,alt:"",className:"w-100 rounded border border-light object-fit p-1 bg-light",height:220,onClick:()=>x(e),"data-bs-toggle":"modal","data-bs-target":"#exampleModal"}),(0,t.jsx)("i",{class:"fa-solid fa-trash-can delete_image",onClick:()=>(async e=>{try{let{data:l}=await(0,u.Dz)(k,{url:e});!l||null!==l&&void 0!==l&&l.error||b().fire({toast:!0,icon:"success",position:"top-end",title:"Image deleted successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),q()}catch(l){console.log(l)}})(e)})]},l))))]})]})}),"Guide"===(null===C||void 0===C?void 0:C.type)&&(0,t.jsx)("div",{className:"card-footer justify-content-start",children:(0,t.jsxs)("button",{className:"btn btn-primary d-flex align-items-center",onClick:async e=>{e.preventDefault();try{if(f>100||!f||f<1)return b().fire({toast:!0,icon:"warning",position:"top-end",title:"Please enter a valid Ahlain Fee percentage",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;let e={guideId:k,commission:f},{data:l}=await(0,u._s)(e);!l||null!==l&&void 0!==l&&l.error||b().fire({toast:!0,icon:"success",position:"top-end",title:"Ahlain Fee updated successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),M(-1)}catch(l){console.log(l)}},type:"button",children:[(0,t.jsx)("span",{className:"me-3",children:"Update Ahlain Fee"})," ",(0,t.jsx)(h,{title:"Only Ahlain Fee will be updated"})]})}),(null===C||void 0===C?void 0:C.isEdit)&&(0,t.jsx)("div",{className:"card-footer justify-content-start ",children:(0,t.jsx)("button",{className:"btn btn-primary",children:"Save"})})]})]})}),(0,t.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,t.jsx)("div",{class:"modal-dialog modal-dialog-center",children:(0,t.jsx)("div",{class:"modal-content",children:(0,t.jsxs)("div",{class:"modal-body position-relative",children:[(0,t.jsx)("div",{className:"position-absolute top-0 end-0 gallery-close",children:(0,t.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})}),(0,t.jsx)("img",{src:p,className:"w-100 object-fit-fill",height:600,alt:""})]})})})}),(0,t.jsx)("div",{children:(0,t.jsx)(r,{bookings:v})})]})})})})}}}]);
//# sourceMappingURL=329.7ec95dfc.chunk.js.map