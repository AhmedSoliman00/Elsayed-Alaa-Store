(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{79911:function(e,a,s){Promise.resolve().then(s.t.bind(s,81749,23)),Promise.resolve().then(s.bind(s,18341))},18341:function(e,a,s){"use strict";s.r(a);var l=s(57437),n=s(7908),c=s(20703),t=s(2265),o=s(30298);a.default=function(){let[e,a]=(0,t.useState)({name:"",phone:"",placeType:"",country:"",email:"",message:"",interested:""}),s=s=>{a({...e,[s.target.name]:s.target.value})},r=async s=>{s.preventDefault(),console.log(e);try{await n.Z.post("".concat("http://localhost:5000","/forms/contact"),e),o.Am.success("تم ارسال البيانات بنجاح"),a({name:"",phone:"",placeType:"",country:"",email:"",message:"",interested:""})}catch(e){console.log(e)}};return(0,l.jsxs)("div",{className:"help",children:[(0,l.jsx)("div",{className:"main-heading mt-5",children:(0,l.jsx)("h1",{className:"text-primary",children:"هل تريد المساعدة"})}),(0,l.jsx)("div",{className:"icons text-center",children:(0,l.jsx)(c.default,{src:"/icon/line.png",alt:"line",width:225,height:22,className:"mt-3"})}),(0,l.jsx)("div",{className:"form mt-5",children:(0,l.jsx)("form",{onSubmit:r,children:(0,l.jsxs)("div",{className:"row row-gap-4 w-75 mx-auto",children:[(0,l.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,l.jsx)("input",{type:"text",placeholder:"الاسم*",className:"form-control",required:!0,name:"name",onChange:s,value:e.name})}),(0,l.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,l.jsx)("input",{type:"text",onChange:s,placeholder:"رقم الهاتف*",className:"form-control",value:e.phone,required:!0,name:"phone"})}),(0,l.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,l.jsx)("input",{type:"text",onChange:s,placeholder:"نوع المكينة*",value:e.placeType,className:"form-control",required:!0,name:"placeType"})}),(0,l.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,l.jsx)("input",{onChange:s,type:"text",placeholder:"البلد*",value:e.country,className:"form-control",required:!0,name:"country"})}),(0,l.jsx)("div",{className:"col-12",children:(0,l.jsx)("input",{onChange:s,type:"email",placeholder:"البريد الالكتروني*",value:e.email,className:"form-control",required:!0,name:"email"})}),(0,l.jsx)("div",{className:"col-12",children:(0,l.jsx)("textarea",{placeholder:"اكتب استفسارك*",className:"form-control",value:e.message,onChange:s,rows:"7",required:!0,name:"message"})}),(0,l.jsx)("div",{className:"col-12",children:(0,l.jsx)("button",{className:"btn btn-primary fs-5 w-100",children:"ارسال"})})]})})})]})}}},function(e){e.O(0,[807,703,298,971,69,744],function(){return e(e.s=79911)}),_N_E=e.O()}]);