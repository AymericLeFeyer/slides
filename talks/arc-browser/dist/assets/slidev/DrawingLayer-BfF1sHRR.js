import{d as u,t as c,a7 as d,D as m,E as p,o as _,b as f,i as v}from"../modules/vue-BNf3g1cc.js";import{u as b}from"./context-BI_zAwdD.js";import{b as g}from"./DrawingPreview-jYIY0T5s.js";import{_ as w}from"../index-BGQJpctk.js";import"../modules/shiki-CP2sasyN.js";const E=u({__name:"DrawingLayer",setup(l,{expose:r}){r();const{drauu:e,drawingEnabled:n,loadCanvas:o}=g(),a=b().$scale,t=c();d(()=>{e.mount(t.value,t.value.parentElement),m(a,i=>e.options.coordinateScale=1/i,{immediate:!0}),o()}),p(()=>{e.unmount()});const s={drauu:e,drawingEnabled:n,loadCanvas:o,scale:a,svg:t};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function h(l,r,e,n,o,a){return _(),f("svg",{ref:"svg",class:v(["w-full h-full absolute top-0",{"pointer-events-none":!n.drawingEnabled,"touch-none":n.drawingEnabled}])},null,2)}const B=w(E,[["render",h],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};
