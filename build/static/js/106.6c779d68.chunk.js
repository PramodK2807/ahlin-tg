"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[106],{1106:(e,l,i)=>{i.r(l),i.d(l,{default:()=>r});var a=i(5043),s=i(6068),t=i(3216),d=i(4299),o=i(64),n=i.n(o),c=i(579);const r=()=>{const[e,l]=(0,a.useState)(""),[i,o]=(0,a.useState)(""),[r,v]=(0,a.useState)([]),[m,u]=(0,a.useState)([]),[p,h]=(0,a.useState)(),[x,j]=(0,a.useState)(),[N,y]=(0,a.useState)([]),{state:f}=(0,t.zy)(),{id:b}=(0,t.g)(),g=(0,t.Zp)();(0,a.useEffect)((()=>{"activity"===(null===f||void 0===f?void 0:f.type)&&A(),"subActivity"===(null===f||void 0===f?void 0:f.type)&&(w(),S())}),[]);const w=async()=>{try{let{data:l}=await(0,d.fC)();var e;if(l&&(null===l||void 0===l||!l.error))y(null===l||void 0===l||null===(e=l.results)||void 0===e?void 0:e.listActivity)}catch(l){console.log(l)}},A=async()=>{try{let{data:a}=await(0,d.kM)(b);if(a&&(null===a||void 0===a||!a.error)){var e,i;console.log(a);let s=null===a||void 0===a||null===(e=a.results)||void 0===e?void 0:e.details;l(null===s||void 0===s?void 0:s.activityName),v((null===s||void 0===s?void 0:s.uploadImage)||[]),o(null===s||void 0===s||null===(i=s.createdAt)||void 0===i?void 0:i.split("T")[0])}}catch(a){console.log(a)}},S=async()=>{try{let{data:s}=await(0,d.oy)(b);if(s&&(null===s||void 0===s||!s.error)){var e,i,a;console.log(s);let t=null===s||void 0===s||null===(e=s.results)||void 0===e?void 0:e.subactivity;j(t),l(null===t||void 0===t?void 0:t.subactivityName),v((null===t||void 0===t?void 0:t.uploadImage)||[]),h((null===t||void 0===t||null===(i=t.activity)||void 0===i?void 0:i._id)||[]),o(null===t||void 0===t||null===(a=t.createdAt)||void 0===a?void 0:a.split("T")[0])}}catch(s){console.log(s)}};return(0,c.jsx)(s.A,{activeSlide:"Activities",children:(0,c.jsx)("div",{className:"content-body",children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-xl-12",children:(0,c.jsxs)("div",{className:"card profile-card card-bx m-b30",children:[(0,c.jsx)("div",{className:"card-header",children:(0,c.jsx)("h6",{className:"title",children:null===f||void 0===f?void 0:f.title})}),(0,c.jsxs)("form",{className:"profile-form",onSubmit:async l=>{if(l.preventDefault(),""===(null===e||void 0===e?void 0:e.trim()))return n().fire({toast:!0,icon:"error",position:"top-end",title:"Name is required",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;if(!i)return n().fire({toast:!0,icon:"error",position:"top-end",title:"Date is required",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;try{const l=new FormData;"activity"===(null===f||void 0===f?void 0:f.type)&&l.append("activityName",e.trim()),"subActivity"===(null===f||void 0===f?void 0:f.type)&&(l.append("subactivityName",e.trim()),l.append("activity",p)),m&&m.forEach((e=>{l.append("uploadImage",e)}));let{data:i}=await(0,d.NE)(null===f||void 0===f?void 0:f.api,b,l);!i||null!==i&&void 0!==i&&i.error||g(-1)}catch(a){console.log(a)}},children:[(0,c.jsx)("div",{className:"card-body",children:(0,c.jsxs)("div",{className:"row",children:["subActivity"===(null===f||void 0===f?void 0:f.type)&&(0,c.jsxs)("div",{className:"col-md-6 m-b30",children:[(0,c.jsxs)("label",{className:"form-label",children:["Activity ",(0,c.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,c.jsx)("select",{className:"form-select py-3","aria-label":"Default select example",onChange:e=>h(e.target.value),disabled:!(null!==f&&void 0!==f&&f.isEdit),children:N&&(null===N||void 0===N?void 0:N.map((e=>{var l;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("option",{selected:(null===x||void 0===x||null===(l=x.activity)||void 0===l?void 0:l._id)===(null===e||void 0===e?void 0:e._id),value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.activityName},null===e||void 0===e?void 0:e._id)})})))})]}),(0,c.jsxs)("div",{className:"col-md-6 m-b30",children:[(0,c.jsxs)("label",{className:"form-label",children:["Name",(0,c.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,c.jsx)("input",{type:"text",className:"form-control",value:e,onChange:e=>l(e.target.value)})]}),(0,c.jsxs)("div",{className:"col-md-6 m-b30",children:[(0,c.jsxs)("label",{className:"form-label",children:["Added On",(0,c.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,c.jsx)("input",{type:"date",className:"form-control",value:i,onChange:e=>o(e.target.value)})]}),!(null!==f&&void 0!==f&&f.isEdit)&&(0,c.jsxs)("div",{className:"col-md-3 m-b30",children:[(0,c.jsxs)("label",{className:"form-label",children:["Activities",(0,c.jsx)("sup",{className:"mandatesign",children:"*"})]}),(0,c.jsx)("div",{className:"row",children:r&&(null===r||void 0===r?void 0:r.map(((e,l)=>(0,c.jsx)("img",{src:e,alt:"act",style:{width:"80px",height:"80px"},className:"border rounded object-fit-contain"}))))})]}),(null===f||void 0===f?void 0:f.isEdit)&&(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"col-12 m-b30",children:[(0,c.jsx)("p",{className:"form-label",children:"Upload Image"}),(0,c.jsx)("label",{htmlFor:"images",className:"text-center m-auto w-100",children:(0,c.jsx)("input",{type:"file",multiple:!0,className:"form-control w-100",name:"images",id:"images",accept:".jpeg, .png, .jpg",onChange:e=>{const l=Array.from(e.target.files);u((e=>[...e,...l]));const i=l.map((e=>URL.createObjectURL(e)));v((e=>[...e,...i]))}})})]})})]})}),(null===f||void 0===f?void 0:f.isEdit)&&(0,c.jsx)("div",{className:"card-footer",children:(0,c.jsx)("button",{className:"btn btn-primary",children:"Save"})})]})]})})})})})})}}}]);
//# sourceMappingURL=106.6c779d68.chunk.js.map