import{u as b,r as f,a as c,g as p,c as U,b as s,w as r,d as _,e as d,o as y,f as x,h as g}from"./index-mn_G5VyT.js";const k={class:"container"},$=_("h3",{class:"page-title"},"회원 정보 수정",-1),B={__name:"UserUpdateform",setup(h){const u=b(),n=f({}),e=c({name:"",username:"",email:"",password:"",address:"",phone:"",website:"",company:""}),m={required:o=>!!o||"필수 항목입니다.",email:o=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||"이메일 형식을 확인해주세요."},i=()=>{p.put(`/api/user/${u.params.id}`,e).then(o=>{o.data.code===0?g.push({path:`/user/detail/${u.params.id}`}):window.alert("오류가 발생했습니다. 다시 시도해주세요.")}).catch(o=>{console.log(o),window.alert("예상치 못한 오류가 발생했습니다.")})};return p.get(`/api/user/${u.params.id}`).then(o=>{n.value=o.data.user,e.name=n.value.name,e.username=n.value.username,e.email=n.value.email,e.address=n.value.address,e.phone=n.value.phone,e.website=n.value.website,e.company=n.value.company}).catch(o=>{console.log(o),window.alert("예상치 못한 오류가 발생했습니다.")}),(o,a)=>{const t=d("v-text-field"),V=d("v-btn"),w=d("v-form"),v=d("v-sheet");return y(),U("div",k,[$,s(v,{width:"400",class:"mx-auto"},{default:r(()=>[s(w,null,{default:r(()=>[s(t,{label:"name",modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.name=l)},null,8,["modelValue"]),s(t,{label:"username",modelValue:e.username,"onUpdate:modelValue":a[1]||(a[1]=l=>e.username=l),readonly:""},null,8,["modelValue"]),s(t,{label:"email",modelValue:e.email,"onUpdate:modelValue":a[2]||(a[2]=l=>e.email=l),rules:[m.required,m.email]},null,8,["modelValue","rules"]),s(t,{label:"password",type:"password",modelValue:e.password,"onUpdate:modelValue":a[3]||(a[3]=l=>e.password=l)},null,8,["modelValue"]),s(t,{label:"password-check",type:"password"}),s(t,{label:"address",modelValue:e.address,"onUpdate:modelValue":a[4]||(a[4]=l=>e.address=l)},null,8,["modelValue"]),s(t,{label:"phone",modelValue:e.phone,"onUpdate:modelValue":a[5]||(a[5]=l=>e.phone=l)},null,8,["modelValue"]),s(t,{label:"website",modelValue:e.website,"onUpdate:modelValue":a[6]||(a[6]=l=>e.website=l)},null,8,["modelValue"]),s(t,{label:"company",modelValue:e.company,"onUpdate:modelValue":a[7]||(a[7]=l=>e.company=l)},null,8,["modelValue"]),s(V,{onClick:a[8]||(a[8]=l=>i()),block:"",class:"mt-2",color:"#5865f2",size:"large"},{default:r(()=>[x("수정")]),_:1})]),_:1})]),_:1})])}}};export{B as default};
