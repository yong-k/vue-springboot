import{u as f}from"./user-LOz2LHTS.js";import{u as c,r as U,a as y,i as _,c as x,b as o,w as m,d as g,e as r,o as k,f as z,g as B,h as C}from"./index-N52L2unJ.js";const N={class:"container"},h=g("h3",{class:"page-title"},"회원 정보 수정",-1),$={__name:"UserUpdateform",setup(q){const u=c().params.id,d=f(),{getUser:i}=d,n=U({}),e=y({name:"",username:"",email:"",password:"",address:"",phone:"",website:"",company:""}),p={required:s=>!!s||"필수 항목입니다.",email:s=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)||"이메일 형식을 확인해주세요."},V=()=>{B.put("/api/user/"+u,e).then(s=>{s.data.code===0?(d.users.set(u,s.data.user),C.push({path:"/user/detail/"+u})):window.alert("오류가 발생했습니다. 다시 시도해주세요.")}).catch(s=>{console.log(s),window.alert("예상치 못한 오류가 발생했습니다.")})};return _(async()=>{d.users.get(u)||await i(u),n.value=d.users.get(u),e.name=n.value.name,e.username=n.value.username,e.email=n.value.email,e.address=n.value.address,e.phone=n.value.phone,e.website=n.value.website,e.company=n.value.company}),(s,a)=>{const t=r("v-text-field"),w=r("v-btn"),v=r("v-form"),b=r("v-sheet");return k(),x("div",N,[h,o(b,{width:"400",class:"mx-auto"},{default:m(()=>[o(v,null,{default:m(()=>[o(t,{label:"name",modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.name=l)},null,8,["modelValue"]),o(t,{label:"username",modelValue:e.username,"onUpdate:modelValue":a[1]||(a[1]=l=>e.username=l),readonly:""},null,8,["modelValue"]),o(t,{label:"email",modelValue:e.email,"onUpdate:modelValue":a[2]||(a[2]=l=>e.email=l),rules:[p.required,p.email]},null,8,["modelValue","rules"]),o(t,{label:"password",type:"password",modelValue:e.password,"onUpdate:modelValue":a[3]||(a[3]=l=>e.password=l)},null,8,["modelValue"]),o(t,{label:"password-check",type:"password"}),o(t,{label:"address",modelValue:e.address,"onUpdate:modelValue":a[4]||(a[4]=l=>e.address=l)},null,8,["modelValue"]),o(t,{label:"phone",modelValue:e.phone,"onUpdate:modelValue":a[5]||(a[5]=l=>e.phone=l)},null,8,["modelValue"]),o(t,{label:"website",modelValue:e.website,"onUpdate:modelValue":a[6]||(a[6]=l=>e.website=l)},null,8,["modelValue"]),o(t,{label:"company",modelValue:e.company,"onUpdate:modelValue":a[7]||(a[7]=l=>e.company=l)},null,8,["modelValue"]),o(w,{onClick:a[8]||(a[8]=l=>V()),block:"",class:"mt-2",color:"#5865f2",size:"large"},{default:m(()=>[z("수정")]),_:1})]),_:1})]),_:1})])}}};export{$ as default};
