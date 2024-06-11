"use strict";(self.webpackChunkahlin=self.webpackChunkahlin||[]).push([[577],{4577:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var l=s(5043),i=s(6068),r=s(8464),d=s(4858),c=s(3216),n=s(5475),m=s(4299),o=s(64),t=s.n(o),u=s(579);const h=()=>{var e,a;const[s,o]=(0,l.useState)(),[h,v]=(0,l.useState)([]),N=(0,c.Zp)(),j=r.A.getItem("userAccessData");console.log(j);const{register:x,handleSubmit:f,setValue:b,formState:{errors:p,isValid:g}}=(0,d.mN)({mode:"onChange"});(0,l.useEffect)((()=>{var e,a,s,l;b("fullName",(null===j||void 0===j||null===(e=j.userData)||void 0===e?void 0:e.fullName)||""),b("email",(null===j||void 0===j||null===(a=j.userData)||void 0===a?void 0:a.email)||""),b("mobileNumber",(null===j||void 0===j||null===(s=j.userData)||void 0===s?void 0:s.mobileNumber)||""),o(null===j||void 0===j||null===(l=j.userData)||void 0===l?void 0:l.image)}),[]);return(0,u.jsx)(i.A,{children:(0,u.jsx)("div",{className:"content-body",children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-lg-12",children:(0,u.jsx)("div",{className:"card card-profile",children:(0,u.jsxs)("div",{className:"admin-user",children:[(0,u.jsx)("div",{className:"img-wrraper",children:(0,u.jsxs)("label",{htmlFor:"image",children:[(0,u.jsx)("div",{className:!0,children:(0,u.jsx)("img",{src:s||"images/1.jpg",className:"rounded-circle",alt:"profile"})}),(0,u.jsx)("i",{className:"fa-solid fa-pencil profile_edit"}),(0,u.jsx)("input",{type:"file",onChange:e=>{let a=e.target.files[0];v(a),o(URL.createObjectURL(a))},className:"d-none",name:"image",id:"image"})]})}),(0,u.jsxs)("div",{className:"user-details",children:[(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)(n.N_,{children:(0,u.jsx)("h4",{children:null===j||void 0===j||null===(e=j.userData)||void 0===e?void 0:e.fullName})}),(0,u.jsx)("h6",{children:null===j||void 0===j||null===(a=j.userData)||void 0===a?void 0:a.email})]}),(0,u.jsxs)("ul",{className:"user-social-links",children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"javascript:void(0);",children:(0,u.jsx)("i",{className:"fa-brands fa-facebook-f"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"javascript:void(0);",children:(0,u.jsx)("i",{className:"fa-brands fa-skype"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"javascript:void(0);",children:(0,u.jsx)("i",{className:"fa-brands fa-linkedin-in"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"javascript:void(0);",children:(0,u.jsx)("i",{className:"fa-brands fa-instagram"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"javascript:void(0);",children:(0,u.jsx)("i",{className:"fa fa-rss"})})})]})]})]})})}),(0,u.jsx)("div",{className:"col-xl-12",children:(0,u.jsxs)("div",{className:"card profile-card card-bx m-b30",children:[(0,u.jsx)("div",{className:"card-header",children:(0,u.jsx)("h6",{className:"title",children:"Edit Profile"})}),(0,u.jsxs)("form",{className:"profile-form",onSubmit:f((async e=>{try{const a=new FormData;a.append("fullName",e.fullName),a.append("email",e.email),a.append("mobileNumber",e.mobileNumber),a.append("image",h);let{data:s}=await(0,m._t)(a);!s||null!==s&&void 0!==s&&s.error||(t().fire({toast:!0,icon:"success",position:"top-end",title:"Profile updated successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),document.getElementById("reset").click(),v([]),o(""),N("/Dashboard"))}catch(a){console.log(a)}})),children:[(0,u.jsx)("div",{className:"card-body",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col-md-4 m-b30",children:[(0,u.jsx)("label",{className:"form-label",children:"Full Name "}),(0,u.jsx)("input",{type:"text",className:"form-control ".concat(p.fullName?"is-invalid":""),...x("fullName",{required:"This field is required",minLength:{value:2,message:"Name must be at least 2 characters"}})}),(null===p||void 0===p?void 0:p.fullName)&&(0,u.jsx)("p",{className:"errorText mt-1",children:p.fullName.message})]}),(0,u.jsxs)("div",{className:"col-md-4 m-b30",children:[(0,u.jsx)("label",{className:"form-label",children:"Email Address"}),(0,u.jsx)("input",{type:"email",className:"form-control ".concat(p.email?"is-invalid":""),...x("email",{required:"Email is required",pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address"}})}),(null===p||void 0===p?void 0:p.email)&&(0,u.jsx)("p",{className:"errorText mt-1",children:p.email.message})]}),(0,u.jsxs)("div",{className:"col-md-4 m-b30",children:[(0,u.jsx)("label",{className:"form-label",children:"Mobile Number"}),(0,u.jsx)("input",{type:"number",className:"form-control ".concat(p.mobileNumber?"is-invalid":""),...x("mobileNumber",{required:"Number is required",maxLength:{value:9,message:"9 characters only"},minLength:{value:9,message:"9 characters only"}})}),(null===p||void 0===p?void 0:p.mobileNumber)&&(0,u.jsx)("p",{className:"errorText mt-1",children:p.mobileNumber.message})]})]})}),(0,u.jsxs)("div",{className:"card-footer",children:[(0,u.jsx)("button",{className:"btn btn-primary",children:"UPDATE"}),(0,u.jsx)("button",{className:"d-none",id:"reset",type:"reset",children:"resert"})]})]})]})})]})})})})}}}]);
//# sourceMappingURL=577.f5524406.chunk.js.map