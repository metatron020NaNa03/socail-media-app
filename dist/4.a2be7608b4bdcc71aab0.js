(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{222:function(e,t,a){"use strict";a.r(t);var o=a(6),l=a(1),n=a.n(l),s=a(3),r=a(0),c=a.n(r),m=a(12);t.default=Object(s.g)(e=>{const t=Object(r.useContext)(m.a),[a,l]=Object(r.useState)(""),[s,u]=Object(r.useState)("");return c.a.createElement(o.a,{title:"Create Post"},c.a.createElement("form",{onSubmit:async o=>{o.preventDefault();const r={token:localStorage.getItem("token"),title:a,body:s};try{const a=await n.a.post("/create-post",r);t({type:"flashMessages",value:"Hey!! it's an Amazing Post!!"}),e.history.push("/post/"+a.data),u(""),l("")}catch(o){console.log(o.response.data)}}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"post-title",className:"text-muted mb-1"},c.a.createElement("small",null,"Title")),c.a.createElement("input",{autoFocus:!0,name:"title",id:"post-title",className:"form-control form-control-lg form-control-title",type:"text",placeholder:"",autoComplete:"off",onChange:e=>l(e.target.value),value:a})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"post-body",className:"text-muted mb-1 d-block"},c.a.createElement("small",null,"Body Content")),c.a.createElement("textarea",{name:"body",id:"post-body",className:"body-content tall-textarea form-control",type:"text",onChange:e=>u(e.target.value),value:s})),c.a.createElement("button",{className:"btn btn-primary"},"Save New Post")))})}}]);