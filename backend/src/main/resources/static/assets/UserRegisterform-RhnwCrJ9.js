import{r as c,a as C,c as q,b as r,w as v,d as E,e as f,o as z,f as B,g,h as F}from"./index-N52L2unJ.js";const M={class:"container"},N=E("h3",{class:"page-title"},"회원 등록",-1),$={__name:"UserRegisterform",setup(A){const u=c(""),w=c([]),V=c([]),d=c([]);let m=!1,i=!1,p=!1;const l=C({name:"",username:"",email:"",password:"",address:"",phone:"",website:"",company:""}),t={required:a=>!!a||"필수 항목입니다.",username:a=>h(a),email:{format:a=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||"이메일 형식을 확인해주세요.",duplicate:a=>U("",a)},password:a=>b(a,u.value),passwordCheck:a=>b(l.password,a)},k=()=>(!l.username||!l.email||!l.password||!u.value||m&&i&&p&&x(),!1);function h(a){const e={username:a};g.get("/api/checkusername",{params:e}).then(o=>(m=o.data.true,m?w.value=[]:w.value="사용할 수 없는 아이디입니다.",m)).catch(o=>{console.log(o),window.alert("예상치 못한 오류가 발생했습니다.")})}function U(a,e){const o={username:a,email:e};g.get("/api/checkemail",{params:o}).then(n=>(i=n.data.true,i?V.value=[]:V.value=["사용할 수 없는 이메일입니다."],i)).catch(n=>{console.log(n),window.alert("예상치 못한 오류가 발생했습니다.")})}function b(a,e){return a===e?(d.value=[],p=!0):(d.value=["비밀번호가 일치하지 않습니다."],p=!1),p}function x(){g.post("/api/user",l).then(a=>{a.data.code===0?F.push({path:"/"}):window.alert("오류가 발생했습니다. 다시 시도해주세요.")}).catch(a=>{console.log(a),window.alert("예상치 못한 오류가 발생했습니다.")})}return(a,e)=>{const o=f("v-text-field"),n=f("v-btn"),_=f("v-form"),y=f("v-sheet");return z(),q("div",M,[N,r(y,{width:"400",class:"mx-auto"},{default:v(()=>[r(_,null,{default:v(()=>[r(o,{label:"name",modelValue:l.name,"onUpdate:modelValue":e[0]||(e[0]=s=>l.name=s)},null,8,["modelValue"]),r(o,{label:"username",modelValue:l.username,"onUpdate:modelValue":e[1]||(e[1]=s=>l.username=s),rules:[t.required,t.username],"error-messages":w.value},null,8,["modelValue","rules","error-messages"]),r(o,{label:"email",modelValue:l.email,"onUpdate:modelValue":e[2]||(e[2]=s=>l.email=s),rules:[t.required,t.email.format,t.email.duplicate],"error-messages":V.value},null,8,["modelValue","rules","error-messages"]),r(o,{label:"password",type:"password",modelValue:l.password,"onUpdate:modelValue":e[3]||(e[3]=s=>l.password=s),rules:[t.required,t.password],"error-messages":d.value},null,8,["modelValue","rules","error-messages"]),r(o,{label:"password-check",type:"password",modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=s=>u.value=s),rules:[t.required,t.passwordCheck],"error-messages":d.value},null,8,["modelValue","rules","error-messages"]),r(o,{label:"address",modelValue:l.address,"onUpdate:modelValue":e[5]||(e[5]=s=>l.address=s)},null,8,["modelValue"]),r(o,{label:"phone",modelValue:l.phone,"onUpdate:modelValue":e[6]||(e[6]=s=>l.phone=s)},null,8,["modelValue"]),r(o,{label:"website",modelValue:l.website,"onUpdate:modelValue":e[7]||(e[7]=s=>l.website=s)},null,8,["modelValue"]),r(o,{label:"company",modelValue:l.company,"onUpdate:modelValue":e[8]||(e[8]=s=>l.company=s)},null,8,["modelValue"]),r(n,{onClick:e[9]||(e[9]=s=>k()),block:"",class:"mt-2",color:"#5865f2",size:"large"},{default:v(()=>[B("등록")]),_:1})]),_:1})]),_:1})])}}};export{$ as default};
