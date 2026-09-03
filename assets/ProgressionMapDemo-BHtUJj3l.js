import{j as e}from"./jsx-runtime-CDGnIe6L.js";import{r as d}from"./index-Dx280R46.js";import{T as p,d as h,P as x,R as f}from"./ProgressionMap-CZfyEmK-.js";import"./index-CNrt2Q1Q.js";const m=["origin/first-world","motion/speed","motion/gravity","motion/force","input/arrows"],k=()=>{const[t,a]=d.useState(new Set(m)),[r,l]=d.useState(),o=p.find(s=>s.id===r),c=r?h(t,r):void 0,g=()=>{r&&a(s=>{const n=new Set(s);return n.delete(r)||n.add(r),n})};return e.jsxs("div",{className:i.page,children:[e.jsxs("header",{className:i.header,children:[e.jsx("strong",{children:"World Lab progression"}),e.jsxs("span",{children:[t.size," of ",p.length," done"]}),e.jsx("span",{className:i.hint,children:"click a tile · arrows move · wheel zooms · drag pans"}),e.jsx("button",{type:"button",onClick:()=>a(new Set(m)),children:"reset"})]}),e.jsx("div",{className:i.map,children:e.jsx(x,{completed:t,selected:r,onSelect:l})}),e.jsx("aside",{className:i.side,children:o?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:o.title}),e.jsxs("p",{className:i.meta,children:[f.find(s=>s.id===o.region)?.name," · ",c]}),e.jsx("p",{children:o.teaches}),e.jsx("p",{className:i.task,children:o.task}),e.jsx("h3",{children:"Unlocks"}),e.jsx("ul",{children:o.unlocks.map(s=>e.jsxs("li",{children:[s.kind,":"," ","id"in s?s.id:"name"in s?s.name:s.type,s.proposed?" (proposed)":""]},JSON.stringify(s)))}),e.jsxs("h3",{children:["Check (",o.check.kind,")"]}),e.jsx("p",{children:o.check.says}),e.jsxs("p",{className:i.meta,children:["False pass: ",o.check.falsePass]}),e.jsx("button",{type:"button",onClick:g,children:t.has(o.id)?"mark not done":"mark done"})]}):e.jsx("p",{className:i.meta,children:"Pick a tile."})})]})},i={page:"progression-demo-page",header:"progression-demo-header",map:"progression-demo-map",side:"progression-demo-side",meta:"progression-demo-meta",hint:"progression-demo-hint",task:"progression-demo-task"},N=`
.progression-demo-page {
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: auto 1fr;
  height: 100vh;
  font: 14px/1.5 system-ui, sans-serif;
}
.progression-demo-header {
  grid-column: 1 / -1;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 8px 14px;
  border-bottom: 1px solid #d8d8e0;
}
.progression-demo-hint { margin-left: auto; opacity: 0.6; }
.progression-demo-map { position: relative; min-height: 0; }
.progression-demo-side {
  padding: 14px 16px;
  border-left: 1px solid #d8d8e0;
  overflow-y: auto;
}
.progression-demo-side h2 { margin: 0 0 2px; font-size: 18px; }
.progression-demo-side h3 { margin: 16px 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.7; }
.progression-demo-side ul { margin: 0; padding-left: 18px; }
.progression-demo-meta { opacity: 0.65; }
.progression-demo-task { font-style: italic; }
`;export{N as PROGRESSION_DEMO_CSS,k as ProgressionMapDemo};
