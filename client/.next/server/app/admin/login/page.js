(()=>{var e={};e.id=920,e.ids=[920],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},78144:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c});var r=t(50482),i=t(69108),a=t(62563),n=t.n(a),l=t(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let c=["",{children:["admin",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,64149)),"E:\\library\\ReactProjects\\App-v1\\client\\src\\app\\admin\\login\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,35615)),"E:\\library\\ReactProjects\\App-v1\\client\\src\\app\\admin\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,51965)),"E:\\library\\ReactProjects\\App-v1\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["E:\\library\\ReactProjects\\App-v1\\client\\src\\app\\admin\\login\\page.jsx"],m="/admin/login/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/admin/login/page",pathname:"/admin/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},47619:(e,s,t)=>{Promise.resolve().then(t.bind(t,34656))},63661:(e,s,t)=>{Promise.resolve().then(t.bind(t,49181))},34656:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>P});var r=t(95344),i=t(8428);t(8471);var a=t(3729),n=t(2717),l=t(43876),o=t(71564),c=t(23435),d=t(50658),m=t(32993),p=t(78518),u=t(48315),x=t(7415),h=t(65492),j=t(71999),g=t(83185),v=t(13056),f=t(56506);let b=(0,n.Z)(e=>({menuSliderContainer:{width:250,background:"#F5F5F5",color:"#09090A",height:"100%",padding:"0 10px"},avatar:{margin:"0.5rem auto",padding:"1rem",width:e.spacing(13),height:e.spacing(13)},listItem:{color:"#09090A"}})),y=[{listIcon:r.jsx("i",{className:"bi bi-bar-chart fs-5"}),listText:"المنتجات",link:"/admin/products",name:"products"},{listIcon:r.jsx("i",{className:"bi bi-view-list fs-5"}),listText:"الطلبات",link:"/admin/orders",name:"orders"},{listIcon:r.jsx("i",{className:"bi bi-person-gear fs-5"}),listText:"طلبات الدعم",link:"/admin/order-support",name:"order-support"}];function N(){let e=(0,i.useRouter)(),s=(0,i.usePathname)(),t=b(),[n,N]=(0,a.useState)(!1),P=()=>{N(!n),console.log(s.split("/")[2])};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(x.ZP,{}),(0,r.jsxs)(h.Z,{children:[r.jsx(j.Z,{onClick:P,children:r.jsx(v.Z,{})}),r.jsx(g.ZP,{open:n,anchor:"right",onClose:P,children:(0,r.jsxs)(l.Z,{className:t.menuSliderContainer,component:"div",children:[r.jsx(l.Z,{children:r.jsx(o.Z,{className:t.avatar,src:"https://i.ibb.co/rx5DFbs/avatar.png",alt:"Juaneme8"})}),r.jsx(l.Z,{children:(0,r.jsxs)("div",{className:"search px-2 position-relative",children:[r.jsx("input",{type:"text",placeholder:"بحث ... ",className:"form-control pe-5"}),r.jsx("i",{className:"bi bi-search position-absolute",style:{right:"35px",top:"50%",transform:"translateY(-44%)"}})]})}),r.jsx(c.Z,{}),(0,r.jsxs)(l.Z,{sx:{flexDirection:"column",justifyContent:"space-between",display:"flex",minHeight:"80%"},children:[r.jsx(d.Z,{children:y.map((e,i)=>r.jsx(f.default,{href:e.link,className:`text-decoration-none ${s.split("/")[2]==e.name&&"admin-active"}`,children:(0,r.jsxs)(m.Z,{className:t.listItem,button:!0,children:[r.jsx(p.Z,{className:t.listItem,children:e.listIcon}),r.jsx(u.Z,{children:r.jsx("span",{className:"fs-6 fw-bold",children:e.listText})})]})},i))}),r.jsx(d.Z,{children:(0,r.jsxs)(m.Z,{className:t.listItem,button:!0,onClick:()=>{window.localStorage.removeItem("authAdminPanel"),e.push("/admin/login")},children:[r.jsx(p.Z,{className:t.listItem,children:r.jsx("i",{className:"bi bi-box-arrow-in-left fs-5"})}),r.jsx(u.Z,{children:r.jsx("span",{className:"fs-6 fw-bold",children:"تسجيل الخروج"})})]})})]})]})})]})]})}function P({children:e}){let s=(0,i.useRouter)();(0,a.useEffect)(()=>{window.localStorage.getItem("authAdminPanel")||s.push("/admin/login")});let t=(0,i.usePathname)();return r.jsx("div",{className:"admin-page",style:{minHeight:"100vh"},children:(0,r.jsxs)("div",{className:"row",style:{minHeight:"100vh"},children:["login"!==t.split("/")[2]&&r.jsx("div",{className:"div",children:r.jsx(N,{})}),r.jsx("div",{className:"div",children:e})]})})}},49181:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(95344),i=t(56506),a=t(3729),n=t(53608),l=t(51929),o=t(8428);let c=function(){let[e,s]=(0,a.useState)(!1),t=(0,o.useRouter)(),[c,d]=(0,a.useState)({email:"",password:""}),[m,p]=(0,a.useState)(!1),u=async e=>{e.preventDefault(),p(!1);try{await n.Z.post("http://localhost:5000/login",c),p(!0),t.push("/admin/products"),window.localStorage.setItem("authAdminPanel",!0)}catch(e){console.log(e),p(!0)}},x=e=>{d({...c,[e.target.name]:e.target.value})};return(0,a.useEffect)(()=>{p(!0)},[]),m?r.jsx("div",{className:"login h-100",children:r.jsx("div",{className:"container h-100",children:r.jsx("div",{className:"box-content d-flex justify-content-center align-items-center w-100",style:{minHeight:"100vh"},children:(0,r.jsxs)("div",{className:"row w-100",style:{minHeight:"70vh"},children:[r.jsx("div",{className:"col-lg-6 col-sm-0 d-none d-md-block",style:{backgroundImage:'url("/admin/login.png")',backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),(0,r.jsxs)("div",{className:"col-lg-6 col-sm-12 d-flex flex-column justify-content-around px-5",children:[(0,r.jsxs)("div",{className:"title",children:[r.jsx("h1",{children:"تسجيل الدخول \uD83D\uDC4B"}),r.jsx("h6",{children:"تسجيل الدخول الي مؤسسة السيد علاء"})]}),r.jsx("div",{className:"form",children:r.jsx("form",{onSubmit:u,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"البريد الالكتروني"}),r.jsx("input",{type:"email",name:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com",onChange:x})]}),(0,r.jsxs)("div",{className:"mb-3 ",children:[r.jsx("div",{className:"lable",children:r.jsx("label",{htmlFor:"password",className:"form-label",children:"كلمه السر"})}),(0,r.jsxs)("div",{className:"inp position-relative",children:[r.jsx("input",{type:e?"text":"password",placeholder:"كلمة السر",name:"password",className:"form-control",onChange:x}),r.jsx("div",{className:"position-absolute",style:{left:"10px",top:"50%",transform:"translateY(-50%)"},children:e?r.jsx("i",{className:"bi bi-eye",style:{cursor:"pointer"},onClick:()=>s(!e)}):r.jsx("i",{className:"bi bi-eye-slash",style:{cursor:"pointer"},onClick:()=>s(!e)})})]})]}),r.jsx("div",{className:"mb-3",children:r.jsx("button",{className:"btn btn-primary w-100",children:"دخول"})})]})})}),r.jsx("div",{className:"footer",children:(0,r.jsxs)("div",{className:"text-center p-4",children:["\xa9",new Date().getFullYear()," ",r.jsx(i.default,{className:"text-reset text-decoration-none",href:"/",children:"مؤسسة السيد علاء"})]})})]})]})})})}):r.jsx(l.Z,{})}},51929:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var r=t(95344);t(3729);let i=function(){return r.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:r.jsx("div",{children:r.jsx("span",{className:"loader"})})})}},35615:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});let r=(0,t(86843).createProxy)(String.raw`E:\library\ReactProjects\App-v1\client\src\app\admin\layout.js`),{__esModule:i,$$typeof:a}=r,n=r.default},64149:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});let r=(0,t(86843).createProxy)(String.raw`E:\library\ReactProjects\App-v1\client\src\app\admin\login\page.jsx`),{__esModule:i,$$typeof:a}=r,n=r.default},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var r=t(70337);let i=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},8471:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,194,337,444,408],()=>t(78144));module.exports=r})();