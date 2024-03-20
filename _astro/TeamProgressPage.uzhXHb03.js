import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as d}from"./index.SSXOyoI7.js";import{a as D}from"./http.B-35sOsF.js";import{p as E}from"./page.C3ddTGlS.js";import{u as F}from"./use-toast.CK2mpur1.js";import{u as K}from"./index.zDCl-MiS.js";import{a as V}from"./team.B3mFytyj.js";import{g as U,s as Y}from"./browser.DS5mYzWA.js";import{u as _}from"./use-auth.BNYEoi-W.js";import{E as J}from"./external-link.Dh_88AEV.js";import{D as O}from"./index.es.B1RiJbf6.js";import{S as z}from"./Spinner.B1Yt5gOc.js";/* empty css                       */import{u as A}from"./use-outside-click.BWzraQDw.js";import{u as B}from"./use-keydown.DCIacX8c.js";import{a as S,u as G}from"./resource-progress.ClJBolsy.js";import{r as W}from"./dom.DTPLKm7E.js";import{X as q}from"./x.DeiB2ka7.js";import{R as X}from"./readonly-editor.D02W-MxT.js";import"./jwt.M546E6_Y.js";import"./index.CEvxOxeV.js";import"./toast.BGQI3kl5.js";import"./index.Bhz7cRIx.js";import"./createLucideIcon.BSeNqbob.js";import"./roadmap.SDi3zlny.js";import"./use-editor.Bp9uaBQ_.js";import"./index.v_sgd_GK.js";import"./bundle-mjs.CpAuaXBl.js";import"./more-horizontal.DZI0tdsB.js";import"./trash-2.Bp9k6RH3.js";function Q(y){const{member:t,onShowResourceProgress:o,isMyProgress:m=!1}=y,f=t?.progress?.sort((i,l)=>l.done-i.done),[h,u]=d.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex h-full min-h-[270px] flex-col overflow-hidden rounded-md border",children:[e.jsxs("div",{className:"relative flex items-center gap-3 border-b p-3",children:[e.jsx("img",{src:t.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t.avatar}`:"/images/default-avatar.png",alt:t.name||"",className:"h-8 min-h-[32px] w-8 min-w-[32px] rounded-full"}),e.jsxs("div",{className:"inline-grid w-full",children:[!m&&e.jsx("h3",{className:"truncate font-medium",children:t.name}),m&&e.jsxs("div",{className:"inline-grid grid-cols-[auto,32px] items-center gap-1.5",children:[e.jsx("h3",{className:"truncate font-medium",children:t.name}),e.jsx("span",{className:"rounded-md bg-red-500 px-1 py-0.5 text-xs text-white",children:"You"})]}),e.jsx("p",{className:"truncate text-sm text-gray-500",children:t.email})]})]}),e.jsxs("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(h?f:f.slice(0,4)).map(i=>e.jsxs("button",{onClick:()=>o(i.resourceId,i.isCustomResource),className:"group relative overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",children:[e.jsxs("span",{className:"relative z-10 flex items-center justify-between text-sm",children:[e.jsx("span",{className:"inline-grid",children:e.jsx("span",{className:"truncate",children:i.resourceTitle})}),e.jsxs("span",{className:"ml-1.5 shrink-0 text-xs text-gray-400",children:[i.done," / ",i.total]})]}),e.jsx("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${i.done/i.total*100}%`}})]},i.resourceId)),f.length>4&&!h&&e.jsxs("button",{onClick:()=>u(!0),className:"text-sm text-gray-400 underline",children:["+ ",f.length-4," more"]}),h&&e.jsx("button",{onClick:()=>u(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),f.length===0&&e.jsx("div",{className:"text-sm text-gray-500",children:"No progress"})]})]},t._id)})}function Z(y){const{onShowResourceProgress:t}=y,{members:o,resourceTitle:m,resourceId:f,isCustomResource:h}=y.roadmap,{t:u}=U(),i=_(),[l,p]=d.useState(!1),w=h?`/r?id=${f}`:`/${f}?t=${u}`;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex h-full min-h-[270px] flex-col rounded-md border",children:[e.jsx("div",{className:"flex items-center gap-3 border-b p-3",children:e.jsxs("div",{className:"flex min-w-0 flex-grow items-center justify-between",children:[e.jsx("h3",{className:"truncate font-medium",children:m}),e.jsx("a",{href:w,className:"group mb-0.5 flex shrink-0 items-center justify-between text-base font-medium leading-none text-black",target:"_blank",children:e.jsx(J,{className:"h-4 w-4 opacity-20 transition-opacity group-hover:opacity-100"})})]})}),e.jsxs("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(l?o:o.slice(0,4)).map(c=>{const N=i?.email===c?.member?.email;return c.progress?e.jsxs("button",{className:`group relative w-full overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none ${N?"border-green-500 hover:border-green-600":""}`,onClick:()=>{t(c.member,c.progress?.resourceId)},children:[e.jsxs("span",{className:"relative z-10 flex items-center justify-between gap-1 text-sm",children:[e.jsxs("span",{className:"inline-grid grid-cols-[20px_auto] gap-3",children:[e.jsx("img",{src:c.member.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${c.member.avatar}`:"/images/default-avatar.png",alt:c.member.name||"",className:"h-5 w-5 shrink-0 rounded-full"}),e.jsx("span",{className:"inline-grid grid-cols-[auto,32px] items-center",children:e.jsx("span",{className:"mr-[5px] truncate",children:c?.member?.name})})]}),e.jsxs("span",{className:"shrink-0 text-xs text-gray-400",children:[c?.progress?.done," / ",c?.progress?.total]})]}),e.jsx("span",{className:`absolute inset-0 ${N?"bg-green-100 group-hover:bg-green-200":"bg-gray-100 group-hover:bg-gray-200"}`,style:{width:`${c?.progress?.done/c?.progress?.total*100}%`}})]},c?.member._id):null}),o.length>4&&!l&&e.jsxs("button",{onClick:()=>p(!0),className:"text-sm text-gray-400 underline",children:["+ ",o.length-4," more"]}),l&&e.jsx("button",{onClick:()=>p(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),o.length===0&&e.jsx("div",{className:"text-sm text-gray-500",children:"No progress"})]})]})})}function H(y){const{progress:t,member:o,resourceId:m,isLoading:f,onShowMyProgress:h,isCurrentUser:u}=y,i=t?.removed||[],l=t?.done.filter(b=>!i.includes(b)).length||0,p=t?.learning.filter(b=>!i.includes(b)).length||0,w=t?.skipped.filter(b=>!i.includes(b)).length||0,N=o.progress.find(b=>b.resourceId===m)?.total||0,P=Math.round(l/N*100);return e.jsxs(e.Fragment,{children:[u&&e.jsxs("div",{className:"sticky top-1 z-50 mx-1 mb-0 mt-1 rounded-xl bg-gray-900 p-4 text-gray-300",children:[e.jsx("h2",{className:"mb-1.5 text-base",children:"Follow the Instructions below to update your progress"}),e.jsxs("ul",{className:"flex flex-col gap-1",children:[e.jsxs("li",{className:"leading-loose",children:[e.jsx("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Right Mouse Click"})," ","on a topic to mark as"," ",e.jsx("span",{className:"font-medium text-white",children:"Done"}),"."]}),e.jsxs("li",{className:"leading-loose",children:[e.jsx("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Shift"})," ","+"," ",e.jsx("kbd",{className:"rounded-md bg-yellow-200 px-2 py-1.5 text-xs text-gray-900",children:"Click"})," ","on a topic to mark as"," ",e.jsx("span",{className:"font-medium text-white",children:"In progress"}),"."]})]})]}),e.jsxs("div",{className:"p-4",children:[!u&&e.jsxs("div",{className:"mb-5 mt-0 text-left md:mt-4 md:text-center",children:[e.jsxs("h2",{className:"mb-1 text-lg font-bold md:text-2xl",children:[o.name,"'s Progress"]}),e.jsxs("p",{className:"hidden text-xs text-gray-500 sm:text-sm md:block md:text-base",children:["You are looking at ",o.name,"'s progress."," ",e.jsx("button",{className:"text-blue-600 underline",onClick:h,children:"View your progress"}),"."]}),e.jsx("p",{className:"block text-gray-500 md:hidden",children:e.jsx("button",{className:"text-blue-600 underline",onClick:h,children:"View your progress."})})]}),e.jsxs("p",{className:`-mx-4 mb-3 flex items-center justify-start border-b border-t px-4 py-2 text-sm sm:hidden ${f?"striped-loader":""}`,children:[e.jsxs("span",{className:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e.jsx("span",{children:P}),"% Done"]}),e.jsxs("span",{children:[e.jsx("span",{children:l})," of ",e.jsx("span",{children:N})," done"]})]}),e.jsxs("p",{className:`-mx-4 mb-3 hidden items-center justify-center border-b border-t py-2 text-sm sm:flex ${f?"striped-loader":""}`,children:[e.jsxs("span",{className:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e.jsx("span",{children:P}),"% Done"]}),e.jsxs("span",{children:[e.jsx("span",{children:l})," completed"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-learning":"",children:p})," in progress"]}),w>0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-skipped":"",children:w})," skipped"]})]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-total":"",children:N})," Total"]})]})]})]})}function ee(y){const{resourceId:t,member:o,resourceType:m,onShowMyProgress:f,teamId:h,onClose:u}=y,l=_()?.email===o.email,p=d.useRef(null),w=d.useRef(null),[c,N]=d.useState(!1),[P,b]=d.useState(),[R,a]=d.useState(!0),v=F();let j="https://roadmap.sh";m==="roadmap"?j+=`/${t}.json`:j+=`/best-practices/${t}.json`;async function k(s,r,n,g){const{error:x,response:C}=await D(`https://api.roadmap.sh/v1-get-member-resource-progress/${s}/${r}?resourceType=${n}&resourceId=${g}`);if(x||!C){v.error(x?.message||"Failed to get member progress");return}return b(C),C}async function I(s){const n=await(await fetch(s,{})).json(),g=await O(n,{fontURL:"/fonts/balsamiq.woff2"});W(p.current,g)}B("Escape",()=>{c||u()}),A(w,()=>{c||u()}),d.useEffect(()=>{!p.current||!j||!t||!m||!h||(a(!0),Promise.all([I(j),k(h,o._id,m,t)]).then(([s,r={}])=>{const{removed:n=[],done:g=[],learning:x=[],skipped:C=[]}=r;g.forEach(T=>S(T,"done")),x.forEach(T=>S(T,"learning")),C.forEach(T=>S(T,"skipped")),n.forEach(T=>S(T,"removed"))}).catch(s=>{console.error(s),v.error(s?.message||"Something went wrong. Please try again!")}).finally(()=>{a(!1)}))},[o]);function $(s,r){!t||!m||!l||(E.set("Updating progress"),G({resourceId:t,resourceType:m,topicId:s},r).then(()=>{S(s,r),k(h,o._id,m,t).then(n=>{b(n)})}).catch(n=>{alert("Something went wrong, please try again."),console.error(n)}).finally(()=>{E.set("")}))}async function M(s){const r=s.target?.closest("g");if(!r)return;const n=r.dataset?r.dataset.groupId:"";if(!n)return;const g=n.replace(/^\d+-/,"");if(r.classList.contains("removed")){s.preventDefault();return}s.preventDefault();const x=r?.classList.contains("done");$(g,x?"pending":"done")}async function L(s){const r=s.target?.closest("g");if(!r)return;const n=r.dataset?r.dataset.groupId:"";if(!n)return;const g=n.replace(/^\d+-/,"");if(r.classList.contains("removed"))return;s.preventDefault();const x=r.classList.contains("learning"),C=r.classList.contains("skipped");if(s.shiftKey){s.preventDefault(),$(g,x?"pending":"learning");return}if(s.altKey){s.preventDefault(),$(g,C?"pending":"skipped");return}}return d.useEffect(()=>{if(!(!o||!p.current))return p.current?.addEventListener("contextmenu",M),p.current?.addEventListener("click",L),()=>{p.current?.removeEventListener("contextmenu",M),p.current?.removeEventListener("click",L)}},[o]),e.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e.jsx("div",{id:"customized-roadmap",className:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e.jsxs("div",{ref:w,className:"popup-body relative rounded-lg bg-white pt-[1px] shadow",children:[e.jsx(H,{resourceId:t,member:o,progress:P,isCurrentUser:l,onShowMyProgress:f,isLoading:R}),e.jsx("div",{id:"resource-svg-wrap",ref:p,className:"px-4 pb-2"}),R&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(z,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})}),e.jsxs("button",{type:"button",className:`absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:text-gray-900 lg:hidden ${l?"hover:bg-gray-800":"hover:bg-gray-100"}`,onClick:u,children:[e.jsx(q,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})})})}function se(y){const{resourceId:t,member:o,resourceType:m,onShowMyProgress:f,teamId:h,onClose:u}=y,l=_()?.email===o.email,p=d.useRef(null),[w,c]=d.useState(null),[N,P]=d.useState(),[b,R]=d.useState(!0),a=F();B("Escape",()=>u()),A(p,()=>u());async function v(s,r,n,g){const{error:x,response:C}=await D(`https://api.roadmap.sh/v1-get-member-resource-progress/${s}/${r}?resourceType=${n}&resourceId=${g}`);if(x||!C){a.error(x?.message||"Failed to get member progress");return}return P(C),C}async function j(){const{response:s,error:r}=await D(`https://api.roadmap.sh/v1-get-roadmap/${t}`);if(r||!s){a.error(r?.message||"Failed to load roadmap");return}return c(s),s}d.useEffect(()=>{!t||!m||!h||(R(!0),Promise.all([j(),v(h,o._id,m,t)]).then(()=>{}).catch(s=>{console.error(s),a.error(s?.message||"Something went wrong. Please try again!")}).finally(()=>{R(!1)}))},[o]);function k(s,r){!t||!m||!l||(E.set("Updating progress"),G({resourceId:t,resourceType:m,topicId:s},r).then(()=>{S(s,r),v(h,o._id,m,t).then(n=>{P(n)})}).catch(n=>{alert("Something went wrong, please try again."),console.error(n)}).finally(()=>{E.set("")}))}const I=d.useCallback((s,r)=>{if(!l)return;const n=s?.currentTarget;if(!n)return;const g=n?.classList.contains("done");k(r.id,g?"pending":"done")},[]),$=d.useCallback((s,r)=>{if(!l)return;const n=s?.currentTarget;if(!n)return;const g=n?.classList.contains("learning");k(r.id,g?"pending":"learning")},[]),M=d.useCallback((s,r)=>{if(!l)return;const n=s?.currentTarget;if(!n)return;const g=n?.classList.contains("skipped");k(r.id,g?"pending":"skipped")},[]),L=d.useCallback((s,r)=>{if(!r||!l)return;r.startsWith("http")?window.open(r,"_blank"):window.location.href=r},[]);return e.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e.jsx("div",{id:"original-roadmap",className:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e.jsxs("div",{className:"relative rounded-lg bg-white pt-[1px] shadow",ref:p,children:[e.jsx(H,{resourceId:t,member:o,progress:N,isCurrentUser:l,onShowMyProgress:f,isLoading:b}),!b&&w&&e.jsx("div",{className:"px-4 pb-2",children:e.jsx(X,{variant:"modal",roadmap:w,className:"min-h-[400px]",onRendered:()=>{const{removed:s=[],done:r=[],learning:n=[],skipped:g=[]}=N||{};r.forEach(x=>S(x,"done")),n.forEach(x=>S(x,"learning")),g.forEach(x=>S(x,"skipped")),s.forEach(x=>S(x,"removed"))},onTopicRightClick:I,onTopicShiftClick:$,onTopicAltClick:M,onButtonNodeClick:L,onLinkClick:L,fontFamily:"Balsamiq Sans",fontURL:"/fonts/balsamiq.woff2"})}),b&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(z,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})}),e.jsxs("button",{type:"button",className:`absolute right-2.5 top-3 z-50 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:text-gray-900 lg:hidden ${l?"hover:bg-gray-800":"hover:bg-gray-100"}`,onClick:u,children:[e.jsx(q,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})})})}const re=[{label:"Members",value:"member"},{label:"Roadmaps",value:"roadmap"}];function Ee(){const{t:y,gb:t}=U(),[o,m]=d.useState(!0),f=F(),h=K(V),u=_(),[i,l]=d.useState(),[p,w]=d.useState([]),[c,N]=d.useState(t||"member");async function P(){const{response:a,error:v}=await D(`https://api.roadmap.sh/v1-get-team-progress/${y}`);if(v||!a){f.error(v?.message||"Failed to get team progress");return}w(a.sort((j,k)=>j.email===u?.email?-1:k.email===u?.email?1:0))}d.useEffect(()=>{y&&P().then(()=>{E.set(""),m(!1)})},[y]),d.useEffect(()=>{c&&Y({gb:c})},[c]);const b=[];for(const a of h?.roadmaps||[]){let v=!1;const j=[];for(const k of p){const I=k.progress.find($=>$.resourceId===a);I&&(I.isCustomResource&&!v&&(v=!0),j.push({member:k,progress:I}))}j.length&&b.push({resourceId:a,resourceTitle:j?.[0].progress?.resourceTitle||"",resourceType:"roadmap",members:j,isCustomResource:v})}if(!y){window.location.href="/";return}if(o)return null;const R=i&&!i.isCustomResource?ee:se;return e.jsxs("div",{children:[i&&e.jsx(R,{member:i.member,teamId:y,resourceId:i.resourceId,resourceType:"roadmap",isCustomResource:i.isCustomResource,onClose:()=>{l(void 0)},onShowMyProgress:()=>{l({resourceId:i.resourceId,member:p.find(a=>a.email===u?.email),isCustomResource:i.isCustomResource})}}),e.jsx("div",{className:"flex items-center gap-2",children:re.map(a=>e.jsx("button",{className:`rounded-md border p-1 px-2 text-sm ${c===a.value?" border-gray-400 bg-gray-200 ":""}`,onClick:()=>N(a.value),children:a.label},a.value))}),e.jsxs("div",{className:"mt-6",children:[c==="roadmap"&&e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:b.map(a=>e.jsx(Z,{roadmap:a,onShowResourceProgress:(v,j)=>{l({resourceId:j,member:v,isCustomResource:a.isCustomResource})}},a.resourceId))}),c==="member"&&e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:p.map(a=>e.jsx(Q,{member:a,isMyProgress:a?.email===u?.email,onShowResourceProgress:(v,j)=>{l({resourceId:v,member:a,isCustomResource:j})}},a._id))})]})]})}export{Ee as TeamProgressPage};
