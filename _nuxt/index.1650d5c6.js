import{r as m,z as T,A as L,B as b,C as O,u as E,D as C,E as M,F as H,_ as N,k as _,l as f,m as v,c as z,G as k,H as D,I as w,J as A,K as F,L as R,M as V,t as P,N as S,v as I,O as j,P as U,Q as q,R as K,S as X,q as B}from"./entry.8a6bad63.js";import{_ as G}from"./nuxt-icon.vue.aa2b0c6b.js";const J=()=>null;function Q(...u){const d=typeof u[u.length-1]=="string"?u.pop():void 0;typeof u[0]!="string"&&u.unshift(d);let[s,r,e={}]=u;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??J,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const t=E(),h=()=>t.isHydrating?t.payload.data[s]:t.static.data[s],y=()=>h()!==void 0;t._asyncData[s]||(t._asyncData[s]={data:m(h()??e.default()),pending:m(!y()),error:T(t.payload._errors,s),status:m("idle")});const n={...t._asyncData[s]};n.refresh=n.execute=(c={})=>{if(t._asyncDataPromises[s]){if(c.dedupe===!1)return t._asyncDataPromises[s];t._asyncDataPromises[s].cancelled=!0}if((c._initial||t.isHydrating&&c._initial!==!1)&&y())return h();n.pending.value=!0,n.status.value="pending";const i=new Promise((o,g)=>{try{o(r(t))}catch(x){g(x)}}).then(o=>{if(i.cancelled)return t._asyncDataPromises[s];let g=o;e.transform&&(g=e.transform(o)),e.pick&&(g=W(g,e.pick)),n.data.value=g,n.error.value=null,n.status.value="success"}).catch(o=>{if(i.cancelled)return t._asyncDataPromises[s];n.error.value=o,n.data.value=C(e.default()),n.status.value="error"}).finally(()=>{i.cancelled||(n.pending.value=!1,t.payload.data[s]=n.data.value,n.error.value&&(t.payload._errors[s]=M(n.error.value)),delete t._asyncDataPromises[s])});return t._asyncDataPromises[s]=i,t._asyncDataPromises[s]};const a=()=>n.refresh({_initial:!0}),l=e.server!==!1&&t.payload.serverRendered;{const c=H();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const o=c._nuxtOnBeforeMountCbs;c&&(L(()=>{o.forEach(g=>{g()}),o.splice(0,o.length)}),b(()=>o.splice(0,o.length)))}l&&t.isHydrating&&y()?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):c&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?c._nuxtOnBeforeMountCbs.push(a):e.immediate&&a(),e.watch&&O(e.watch,()=>n.refresh());const i=t.hook("app:data:refresh",o=>{if(!o||o.includes(s))return n.refresh()});c&&b(i)}const p=Promise.resolve(t._asyncDataPromises[s]).then(()=>n);return Object.assign(p,n),p}function W(u,d){const s={};for(const r of d)s[r]=u[r];return s}const Y={},Z={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ee=v("path",{d:"M8.9059 1.13178C8.9154 1.10294 8.92794 1.09136 8.93812 1.08452C8.95159 1.07546 8.9731 1.06763 9 1.06763C9.02689 1.06763 9.04841 1.07546 9.06188 1.08452C9.07206 1.09136 9.0846 1.10294 9.0941 1.13178L10.8086 6.33558C10.9574 6.78724 11.3812 7.08682 11.8525 7.08682H17.4006C17.4359 7.08682 17.4531 7.09655 17.4627 7.10389C17.4752 7.11343 17.4876 7.12945 17.4947 7.15098C17.5018 7.17252 17.5009 7.19123 17.4972 7.20373C17.4946 7.21254 17.4881 7.22832 17.461 7.24775L12.9725 10.4639C12.587 10.7401 12.4222 11.2335 12.5715 11.6864L14.2859 16.8902C14.2954 16.919 14.2917 16.9339 14.2886 16.9426C14.284 16.9552 14.2729 16.9723 14.2523 16.987C14.2317 17.0017 14.2099 17.0082 14.1922 17.0088C14.1783 17.0092 14.1587 17.0065 14.1314 16.987L9.64288 13.7709C9.25908 13.4959 8.74092 13.4959 8.35712 13.7709L3.86859 16.987C3.84135 17.0065 3.82174 17.0092 3.8078 17.0088C3.79014 17.0082 3.76828 17.0017 3.74772 16.987C3.72714 16.9723 3.71601 16.9552 3.71144 16.9426C3.70827 16.9339 3.70459 16.919 3.71405 16.8902L5.42852 11.6864C5.57775 11.2335 5.41295 10.7401 5.02751 10.4639L0.538985 7.24775C0.511869 7.22832 0.505441 7.21254 0.502831 7.20373C0.499129 7.19123 0.498223 7.17251 0.505318 7.15098C0.512411 7.12945 0.524794 7.11342 0.537297 7.10389C0.546916 7.09655 0.56409 7.08682 0.599422 7.08682H6.14755C6.61885 7.08682 7.04263 6.78724 7.19143 6.33559L8.9059 1.13178Z",stroke:"#3300FF"},null,-1),se=[ee];function te(u,d){return _(),f("svg",Z,se)}const ae=N(Y,[["render",te]]);function ne(u,d={}){const s=[u];for(const[r,e]of Object.entries(d))e===!0?s.push(`${u}--${r}`):e&&s.push(`${u}--${r}--${e}`);return s.join(" ")}const re={class:"app-progress"},oe={class:"app-progress__bar-line"},le=v("span",{class:"app-progress__value"},"0",-1),ce={key:0},ue={__name:"AppProgress",props:{stages:{type:Array}},setup(u){const d=u;function s(a){let l=0;const p=[...a];for(;p.length>0;){const c=p.pop();Array.isArray(c.games)&&c.games.forEach(i=>{l+=i.bestResult})}return l}const r=z(()=>s(d.stages)),e=(a=(l=>(l=d.stages)==null?void 0:l.length)())=>`grid-template-columns: repeat(${a}, 1fr);`,t=a=>{const l=r.value>=a.thresholdPoints;return a.games.some(p=>p.isPlayed)&&l},h=(a,l)=>{var c;const p=l>0?d.stages[l-1]:null;return y(r.value,p?p==null?void 0:p.thresholdPoints:0,a.thresholdPoints)||l===0&&r.value===0||l===((c=d.stages)==null?void 0:c.length)-1&&r.value>=d.stages[l].thresholdPoints},y=(a,l,p)=>a>l&&a<=p,n=a=>{const l=d.stages[a],p=a>0?d.stages[a-1]:null,c=p?p.thresholdPoints:0,i=l.thresholdPoints;if(r.value>=i)return 100;if(r.value>=c){const o=i-c;return(r.value-c)/o*100}else return 0};return(a,l)=>{const p=ae,c=G;return _(),f("div",re,[v("div",{class:"app-progress__icons",style:w(e())},[(_(!0),f(k,null,D(u.stages,(i,o)=>{var g;return _(),f("span",{class:"app-progress__icon",key:o},[o!==((g=u.stages)==null?void 0:g.length)-1?(_(),A(p,{key:0,class:F(("bem"in a?a.bem:C(ne))("app-progress__icons-star",{fill:t(i)}))},null,8,["class"])):(_(),A(c,{key:1,class:"app-progress__icons-cup",name:"cup",filled:"",width:"46",height:"24"}))])}),128))],4),v("div",{class:"app-progress__bar",style:w(e())},[(_(!0),f(k,null,D(u.stages,(i,o)=>{var g;return _(),f("div",{class:"app-progress__bar-wrapper",key:o},[R(v("span",oe,null,512),[[V,o<((g=u.stages)==null?void 0:g.length)-1]]),v("div",{class:"app-progress__bar-fill",style:w({width:`${n(o)}%`})},null,4)])}),128))],4),v("div",{class:"app-progress__values",style:w(e())},[le,(_(!0),f(k,null,D(u.stages,(i,o)=>(_(),f("span",{class:"app-progress__value",key:o,style:w({transform:h(i,o)?"translateX(30%)":""})},[h(i,o)?(_(),f("span",ce,P(C(r))+" / ",1)):S("",!0),I(P(i.thresholdPoints),1)],4))),128))],4)])}}},ie=ue,$=j("progress",()=>{const u=m([]);return{stages:u,getStages:async()=>{try{const r=await $fetch("list");u.value=r.stages}catch(r){console.error(r)}},updateProgress:async({id:r,game:e,progress:t})=>{if(!t)return;const h=u.value.find(a=>a.id===r);if(!h)return;const y=h.games.find(a=>a.name===e);if(!y)return;y.bestResult=+t,h.games.reduce((a,l)=>a+l.bestResult,0)>=h.thresholdPoints&&h.games.forEach(a=>{a.isPlayed=!0})}}}),pe=["id"],de=["onClick"],_e={__name:"AppChangeProgress",props:{stages:{type:Array,required:!0}},setup(u){const{updateProgress:d}=$(),s=m(!1),r=m(null),e=m(null),t=m(null),h=(n,a)=>r.value===a&&e.value===n?"Сохранить":"Изменить прогресс",y=(n,a,l)=>{s.value?r.value===l&&e.value===n&&(d({id:n,game:a,progress:t.value}),s.value=!1,r.value=null,e.value=null,t.value=null):(r.value=l,e.value=n,s.value=!0)};return(n,a)=>(_(),f("div",null,[(_(!0),f(k,null,D(u.stages,(l,p)=>(_(),f("div",{key:p},[I(P(l.name)+" ",1),v("ul",null,[(_(!0),f(k,null,D(l.games,(c,i)=>(_(),f("li",{key:i},[v("p",null,"Название игры: "+P(c.name),1),v("p",null,"Прогресс: "+P(c.bestResult),1),C(s)&&C(e)===l.id&&C(r)===i?R((_(),f("input",{key:0,type:"tel",id:p,"onUpdate:modelValue":a[0]||(a[0]=o=>q(t)?t.value=o:null)},null,8,pe)),[[U,C(t)]]):S("",!0),v("button",{onClick:o=>y(l.id,c.name,i)},P(h(l.id,i)),9,de)]))),128))])]))),128))]))}},fe=_e;const he={class:"page-home"},ge={class:"container"},ve=v("p",null,"Изменение прогресса",-1),Ce={__name:"index",async setup(u){let d,s;const{getStages:r}=$(),{stages:e}=K($());return m(null),[d,s]=X(()=>Q(()=>r(),"$PslAyef5YX")),await d,s(),(t,h)=>{const y=ie,n=fe;return _(),f("div",he,[v("div",ge,[B(y,{stages:C(e)},null,8,["stages"]),ve,B(n,{stages:C(e)},null,8,["stages"])])])}}};export{Ce as default};