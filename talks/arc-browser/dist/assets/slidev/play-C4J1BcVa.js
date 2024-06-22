const __vite__fileDeps=["assets/slidev/DrawingControls-Dol2eXgX.js","assets/modules/unplugin-icons-D-bUfnbd.js","assets/modules/vue-BNf3g1cc.js","assets/modules/shiki-CP2sasyN.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview-jYIY0T5s.js","assets/index-BGQJpctk.js","assets/index-CL3ysQu7.css","assets/DrawingPreview-B5H7KL5u.css","assets/slidev/ContextMenu-pDmLiO-S.js","assets/slidev/IconButton-Dx2VqlXZ.js","assets/LightIcon-BhJpiL5Q.js","assets/slidev/context-BI_zAwdD.js","assets/ContextMenu-yv_LNTC2.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as m,aa as V,o as s,c as u,b as f,e as a,f as N,i as S,g as d,af as O,y as D,k as g,a6 as P,M as v,l as _,F as M,v as z,x as C,h as R,t as W}from"../modules/vue-BNf3g1cc.js";import{_ as p,v as h,a as E,w as j,x as B,y as H,z as A,A as T,d as G,B as L,o as y,D as Q,E as U}from"../index-BGQJpctk.js";import{Q as F,G as K,C as X,u as Y,r as q,N as J,S as Z,o as $}from"./ContextMenu-pDmLiO-S.js";import{b as ee,S as oe}from"./DrawingPreview-jYIY0T5s.js";import{o as te}from"../modules/unplugin-icons-D-bUfnbd.js";import"../modules/shiki-CP2sasyN.js";import"./IconButton-Dx2VqlXZ.js";import"../LightIcon-BhJpiL5Q.js";import"./context-BI_zAwdD.js";const ne=m({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(l,{expose:o,emit:t}){o();const e=l,n=t,r=V(e,"modelValue",n);function i(){r.value=!1}const c={props:e,emit:n,value:r,onClick:i};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),re={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"};function ie(l,o,t,e,n,r){return s(),u(O,null,[e.value?(s(),f("div",re,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=i=>e.onClick())}),a("div",{class:S(["m-auto rounded-md bg-main shadow",e.props.class]),"dark:border":"~ main"},[N(l.$slots,"default")],2)])):d("v-if",!0)],1024)}const se=p(ne,[["render",ie],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),le=m({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(l,{expose:o,emit:t}){o();const e=l,n=t,r=V(e,"modelValue",n),i=D(()=>typeof h.info=="string"),c={props:e,emit:n,value:r,hasInfo:i,get configs(){return h},Modal:se};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),ae="/assets/logo-BYkHSa_O.png",de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],ue=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:ae,alt:"Slidev logo"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),P("dev ")])])],-1);function _e(l,o,t,e,n,r){return s(),u(e.Modal,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=i=>e.value=i),class:"px-6 py-4"},{default:g(()=>[a("div",de,[e.hasInfo?(s(),f("div",{key:0,class:"mb-4",innerHTML:e.configs.info},null,8,ce)):d("v-if",!0),ue])]),_:1},8,["modelValue"])}const fe=p(le,[["render",_e],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),me=m({__name:"Controls",setup(l,{expose:o}){o();const{isEmbedded:t}=E(),e=!h.drawings.presenterOnly&&!t.value,n=v();e&&j(()=>import("./DrawingControls-Dol2eXgX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(b=>n.value=b.default);const r=v(),i=v(),c={isEmbedded:t,drawingEnabled:e,DrawingControls:n,WebCamera:r,RecordingDialog:i,get showInfoDialog(){return B},get showRecordingDialog(){return H},get configs(){return h},QuickOverview:F,InfoDialog:fe,Goto:K,ContextMenu:X};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function pe(l,o,t,e,n,r){return s(),f(M,null,[e.drawingEnabled&&e.DrawingControls?(s(),u(e.DrawingControls,{key:0})):d("v-if",!0),_(e.QuickOverview),_(e.Goto),e.WebCamera?(s(),u(e.WebCamera,{key:1})):d("v-if",!0),e.RecordingDialog?(s(),u(e.RecordingDialog,{key:2,modelValue:e.showRecordingDialog,"onUpdate:modelValue":o[0]||(o[0]=i=>e.showRecordingDialog=i)},null,8,["modelValue"])):d("v-if",!0),e.configs.info?(s(),u(e.InfoDialog,{key:3,modelValue:e.showInfoDialog,"onUpdate:modelValue":o[1]||(o[1]=i=>e.showInfoDialog=i)},null,8,["modelValue"])):d("v-if",!0),_(e.ContextMenu)],64)}const ve=p(me,[["render",pe],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),ge=m({__name:"PrintStyle",setup(l,{expose:o}){o();function t(n,{slots:r}){if(r.default)return z("style",r.default())}const e={vStyle:t,get slideHeight(){return A},get slideWidth(){return T}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function he(l,o,t,e,n,r){return s(),u(e.vStyle,null,{default:g(()=>[P(" @page { size: "+C(e.slideWidth)+"px "+C(e.slideHeight)+"px; margin: 0px; } ",1)]),_:1})}const be=p(ge,[["render",he],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintStyle.vue"]]),we=m({__name:"PresenterMouse",setup(l,{expose:o}){o();const t={get sharedState(){return G}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),ye={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"};function Se(l,o,t,e,n,r){const i=te;return e.sharedState.cursor?(s(),f("div",ye,[_(i,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e.sharedState.cursor.x}%`,top:`${e.sharedState.cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}const xe=p(we,[["render",Se],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ke=m({__name:"play",setup(l,{expose:o}){o();const{next:t,prev:e,isPrintMode:n}=E(),{isDrawing:r}=ee(),i=W();function c(w){var k;y.value||w.button===0&&((k=w.target)==null?void 0:k.id)==="slide-container"&&(w.pageX/window.innerWidth>.5?t():e())}Y(i),q();const b=D(()=>L.value||y.value),I=v(),x={next:t,prev:e,isPrintMode:n,isDrawing:r,root:i,onClick:c,persistNav:b,SideEditor:I,get isEditorVertical(){return Q},get showEditor(){return y},get windowSize(){return U},Controls:ve,SlideContainer:oe,NavControls:J,SlidesShow:Z,PrintStyle:be,get onContextMenu(){return $},PresenterMouse:xe};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),Ce=a("div",{id:"twoslash-container"},null,-1);function Ve(l,o,t,e,n,r){return s(),f(M,null,[e.isPrintMode?(s(),u(e.PrintStyle,{key:0})):d("v-if",!0),a("div",{id:"page-root",ref:"root",class:S(["grid",e.isEditorVertical?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(e.SlideContainer,{style:{background:"var(--slidev-slide-container-background, black)"},width:e.isPrintMode?e.windowSize.width.value:void 0,"is-main":"",onPointerdown:e.onClick,onContextmenu:e.onContextMenu},{default:g(()=>[_(e.SlidesShow,{"render-context":"slide"}),_(e.PresenterMouse)]),controls:g(()=>[e.isPrintMode?d("v-if",!0):(s(),f("div",{key:0,class:S(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[e.persistNav?"!opacity-100 right-0":"opacity-0 p-2",e.isDrawing?"pointer-events-none":""]])},[_(e.NavControls,{persist:e.persistNav},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),e.SideEditor&&e.showEditor?(s(),u(e.SideEditor,{key:0,resize:!0})):d("v-if",!0)],2),e.isPrintMode?d("v-if",!0):(s(),u(e.Controls,{key:1})),Ce],64)}const We=p(ke,[["render",Ve],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/play.vue"]]);export{We as default};