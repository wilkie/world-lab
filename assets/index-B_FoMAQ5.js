import{g as Mr}from"./users.handlers-XUV6i5gv.js";import{n as ta}from"./ApiClientContext-q4qpfbJf.js";import{o as Re,s as V,c as Ce,n as Ae,u as Dr,a as Wr,r as Lr,_ as an}from"./projects.schemata-DEfCgJlb.js";import"./jsx-runtime-CDGnIe6L.js";import"./index-Dx280R46.js";import{c as Ft,w as Ht,a as nn,p as Ur,h as rn,b as Vt,d as ut,m as wt,i as Ge,e as Mo,g as Do,j as sn,s as ln,f as Gr,k as Fr,l as Hr,n as Vr,o as Yr,q as jr,r as $r,t as Kr,u as Qr,v as Jr,x as qr,y as Xr,z as zr,A as Zr,B as es,C as ts,D as os,E as as,F as ns,G as rs}from"./index-CNrt2Q1Q.js";import{e as dn,i as cn,c as ss,j as is,k as ls,p as hn,G as me,a as pn,I as _o,O as un,E as oa,b as ds,T as L,V as aa}from"./constants-DM_bZIi3.js";const Yt="0",ih=()=>({files:{},folders:{}}),lh=e=>e.split(".").pop()?.toLowerCase()||"",wn=e=>String(Math.max(0,...e.map(Number).filter(Number.isInteger))+1),Je=e=>wn(e.map(t=>t.id)),cs=e=>wn(e.map(t=>t.id)),Wo=(e,t)=>t.reduce((o,a)=>(a.parentId===e&&o.push(a.id,...Wo(a.id,t)),o),[]),hs=(e,t,o)=>{const a=new Set(o?[e,...Wo(e,o)]:[e]);return t.reduce((r,h)=>(a.has(h.folderId)&&r.push(h.id),r),[])},vo=e=>e?!e.type||e.type===ta.STARTER||e.type===ta.LOCKED_STARTER:!1,ps=e=>e.openFiles?e.openFiles.filter(t=>vo(e.files[t])).map(t=>e.files[t]):Object.values(e.files).filter(t=>vo(t)).sort((t,o)=>t.name.localeCompare(o.name)),us=e=>ps(e).map(t=>t.id),ws=e=>{const t=Object.values(e.files).filter(vo);return t.find(o=>o.active)||t.find(o=>e.openFiles?.includes(o.id))},yn=(e,t)=>{if(!t.active)return;const o=e.openFiles;if(!o||o.length===0)return;const a=o.findIndex(r=>r===t.id);if(a>0)return o[a-1];if(a<o.length-1)return o[a+1]},dh=(e,t,o)=>{const a=e.files[t];return!a||a.contents===o?e:{...e,files:{...e.files,[t]:{...a,contents:o}}}},gn=(e,t)=>{const o=ws(e);if(o?.id===t&&o.active)return e;const a=us(e);a.includes(t)||a.push(t);const r={...e,files:{...e.files,[t]:{...e.files[t],active:!0}},openFiles:a};return o&&(r.files[o.id]={...r.files[o.id],active:!1}),r},ch=(e,t)=>{const o=e.files[t],a={...e,files:{...e.files,[t]:{...e.files[t],active:!1}},openFiles:e.openFiles?.filter(h=>h!==t)},r=yn(e,o);return r&&(a.files[r]={...a.files[r],active:!0}),a},hh=({source:e,fileName:t,language:o,folderId:a=Yt,contents:r=""})=>{const h=Je(Object.values(e.files)),p={...e,files:{...e.files}};return p.files[h]={id:h,name:t,language:o,contents:r||`Add your changes to ${t}`,folderId:a},gn(p,h)},ph=({source:e,fileName:t,language:o,url:a,mimeType:r,folderId:h=Yt})=>{const p=Je(Object.values(e.files)),f={...e,files:{...e.files}};return f.files[p]={id:p,name:t,language:o,contents:"",folderId:h,url:a,mimeType:r},gn(f,p)},uh=(e,t)=>{const o=e.files[t],a={...e,files:{...e.files},openFiles:e.openFiles?.filter(h=>h!==t)};delete a.files[t];const r=yn(e,o);return r&&(a.files[r]={...a.files[r],active:!0}),a},wh=(e,t,o)=>({...e,files:{...e.files,[t]:{...e.files[t],name:o}}}),yh=(e,t,o)=>({...e,files:{...e.files,[t]:{...e.files[t],folderId:o}}}),Lo=(e,t,o=Yt)=>{const a=cs(Object.values(e.folders));return{...e,folders:{...e.folders,[a]:{id:a,name:t,parentId:o}}}},gh=(e,t)=>{const o=new Set([t,...Wo(t,Object.values(e.folders))]),a=new Set(hs(t,Object.values(e.files),Object.values(e.folders))),r=Object.fromEntries(Object.entries(e.folders).filter(([w])=>!o.has(w))),h=Object.fromEntries(Object.entries(e.files).filter(([w])=>!a.has(w))),p=e.openFiles?.filter(w=>!a.has(w)),f={...e,folders:r,files:h,openFiles:p};if(!Object.values(h).some(w=>w.active)&&p?.length){const w=p[0];f.files={...h,[w]:{...h[w],active:!0}}}return f},mh=(e,t)=>({...e,folders:{...e.folders,[t]:{...e.folders[t],open:!e.folders[t].open}}}),fh=(e,t,o)=>({...e,folders:{...e.folders,[t]:{...e.folders[t],name:o}}}),Ah=(e,t,o)=>({...e,folders:{...e.folders,[t]:{...e.folders[t],parentId:o}}});function bh(e){return{padding:Math.max(0,e.padding??0),gap:Math.max(0,e.gap??0)}}function Uo(e){return`${e.replace(/\.[^.]+$/,"")}.sheet`}function Go(e){return`${JSON.stringify(e,null,2)}
`}function ys(e){try{const t=JSON.parse(e);if(typeof t!="object"||t===null||t.type!=="sheet")return;const o=t.cell;if(typeof o!="object"||o===null)return;const{width:a,height:r}=o;if(typeof a!="number"||typeof r!="number"||!(a>0)||!(r>0))return;const h=w=>{if(w!==void 0)return typeof w=="number"&&Number.isFinite(w)&&w>=0?w:!1},p=h(t.padding),f=h(t.gap);return p===!1||f===!1?void 0:{type:"sheet",cell:{width:a,height:r},...p?{padding:p}:{},...f?{gap:f}:{}}}catch{return}}function kh(e){const t={};for(const[o,a]of Object.entries(e)){if(!o.endsWith(".sheet"))continue;const r=ys(a);if(r){const h=o.split("/").pop().replace(/\.sheet$/,"");t[`${h}.png`]=r}}return t}function Th(e,t,o){const a=e.files[t];if(!a)return e;const r=Uo(a.name),h=Object.values(e.files).find(k=>k.name===r&&k.folderId===a.folderId),p=o?Go(o):void 0;if(h?.contents===p||!h&&!o)return e;const f={...e.files};if(!o)return delete f[h.id],{...e,files:f};if(h)return f[h.id]={...h,contents:p},{...e,files:f};const w=Je(Object.values(e.files));return f[w]={id:w,name:r,language:"json",contents:p,folderId:a.folderId},{...e,files:f}}const gs="world-sandbox",_h="sandbox/";let Co=null,mn="/vendor/",fn="/backgrounds/",An="/sounds/",bn="/demos/";function vh(e){Co=e}function ms(e){const t=new URLSearchParams(e).get(gs);return t||null}function Ch(){return Co||(typeof window>"u"?null:ms(window.location.search))}function Eh(){return mn}function Rh(e){mn=e.endsWith("/")?e:`${e}/`}function fs(){return fn}function Oh(e){fn=e.endsWith("/")?e:`${e}/`}function Sh(){return An}function Ih(e){An=e.endsWith("/")?e:`${e}/`}function Ph(){return bn}function Bh(e){bn=e.endsWith("/")?e:`${e}/`}const As=["cave","city","continuousGrass","court","desert","desertRoad","farmLand","floatingGrass","frontOfHouse","space","grid","kitchen","livingRoom","meadow","parkView","pineTrees","rainbow","scifi","soccerField","stage","santa","subway","sunAndRainbow","sunshineShowers","tennisCourt","treeIsland","underground","underwater","winter"],bs={player:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAe0lEQVR4nGNgGAVDBVhVX/1PCh4QS6nqGGpZTpYjqG05SY6gleVEO2JkO4CQZhggV56gI4ixHJclhOQpcgAMiMgZgTG6JYTkh74DBjwKBkUipCYedcDgdQA9HIHX8lEH0NoRRFlOK0eQZDm1HUGW5ZQ6hiqWjoJRQA8AAE7OnlitRCcgAAAAAElFTkSuQmCC",ground:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVR4nO3OMQEAIAwDsPkBJUjAAqZwusnokyN/6v7dSSUgEA+8szpJQEBAQEBAQEBAQEAgHhiLebDqGOG0KAAAAABJRU5ErkJggg==",coin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAlklEQVR4nO2VyxHAIAhELSnlpcAUkiJy1wYi2WWBjDMyw019D/y1tmO1eK6jW/kbOE2EBYeKqHBJwlqw3+drhkmwYFREEkDhlkQZXJLw7jc6Tq7+68RLXUCqYgWoLqjVo/O2wLoC5Yew/BqiXUh7iNAuLPEfuOEzAUZiNh8WsCSY/XbDEQkmXfAoCQmuiISBWZE08I6sGOd8a++KNbTaAAAAAElFTkSuQmCC",box:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoElEQVR4nO3Wyw2AIBAEUKqxC1uwHmuwQ6vBiyaEKMx+YDBKws0dHgGBEP52tnWZYs8+NmDf5iYdAlwfthg8RRQB3og8FwJ4Ie4yYYAV8ZQnAmgRpSwxQIqo5agAKALJUAOQ2SH1JkBpc6G1ZkA+oLTOBZCGaWreD6AuAXUTUn9D6kFEPYqplxH1OqY+SKhPMuqjtMXg+eyrgB59PMBn2wFYWVNaEbwxMQAAAABJRU5ErkJggg==",ball:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAgElEQVR4nO3TQQrAIAxEUU/WdS/qpqfqTXRdEGsyMzWFBLL1P1BLyfnb3OfRZrstLINYw1QIGocQrLgLMTqgXfWxUsRb3IugxmWIrYCVu5e+hZAA5iN0A1jfEAIwNwFxAV8gpvEQACViKR4CoECY4myEK85CQHEEQgtbIbJwjmo6Ub08eLrts0sAAAAASUVORK5CYII=",ship:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAmUlEQVR4nGNgGAWjgALg4JXwH4RHpgNglg+YI0a2A9Atp7sjYBZeu/cajOnqAJhlbk0nUDDdHDGgDkCOb1wOoKkjkOMe3QF0SQvoiQ8d09QByEFMyAE0cQQhy2kaCsT4nqahQKzlNAkFXL5HtgCbHNUcga3YJVYd1R1AjIHIail2ACVBSZVooNQHFDmAmtloQBuuo2AUDHoAAGDwq1h0QSDCAAAAAElFTkSuQmCC",asteroid:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAtUlEQVR4nO2W0QmAMAxEO6g4gB/iAO4gOICrKn4Ipai5pNdUoYH82d7LNbUJocWfouuH/SmriLrAWABoIPFmy7pBSQXRir+BuFQvgRSpfpxmGIJe/Sl+ZREApHoNAAShPXvkCFQuMBrv0wAiRAqAWkxzIQZAm8wFAIGQvhUB0htgFb9bA/VATgOiAJD9FggKANuFLADmv0D9IrIhTE8yexYwzwO54xh9Kqo6mLoIagDoYi1qxAF/xDfM59XIqQAAAABJRU5ErkJggg==",energyBall:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWklEQVR4nGNgGAWjYBSMgqEIEi78/48ND6jldHEEIctp6ghkC/Z9wI5p5ghiLKepI3A5AAYGxAHoYOQ5YMCjYFDmBLqWBYO2NKSp5YQcQRfLR8EoGAWjgNoAAClEEW8FRl0pAAAAAElFTkSuQmCC",door:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAW0lEQVR4nGNggIIYG7n/9MQM6GDUAciSG0osaIJHHUCWA3qitCjCow4YdcCoA0YdMCAl4ZcjBmA8IEUxzHJsjhgZDqB6FAx4Ihx1wKgDRh0w6gBq4lEHDEoHAACKekiuf/UPwgAAAABJRU5ErkJggg==",post:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAX0lEQVR4nGNgGAVDFcTYyP1HxnS3eEOJBQqmm0PQLe+J0kLBdLUcmwNoGgqjDhh1wKgDBtQBN3yc/pOCRx1AdQcwDHQaGHXAqANGHTDqgFEHDKgDPAyk/pODRx1AjNkATCNlm8shjd0AAAAASUVORK5CYII=",flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAXUlEQVR4nGNgGAUEQEJKwf9ps5aB8agDBtwBHz59Q8EaOiYomJD8qAOGvgNItRBdftQBQ98BA54IRx0w4A4gywBKwagDRh0w6oBRB4w6YMAc4GEg9R8XHnUANe0BACtN+JNOYZRQAAAAAElFTkSuQmCC",spike:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAZklEQVR4nGNgGAWjYDCCDVsO/C8oafpPb3WjDhh1AFwxTAM+TdRWN+qAUQegKEbWgE0TtdWNOmDUARiK0TUga6K2ulEHjDoAq2JsGkCY2urAlrt5hVDdYGLVgewGO2Ag8agDRh0AACpuFZJpZxjDAAAAAElFTkSuQmCC",hill:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcklEQVR4nO3QsQ2AMAxEUU/ECIiaginYf4VQI0VCPv/g5k5KGf2XRHie53nCtmsfs9MS/QWTjWMINYxAqLiEoONpxOzycZ+vswzwFa5C0DiKUOMYohVQjZcRRFxBoK+Xf4GMS79gAB3PIgyIFfEMoh3wADWCBX1xO3HaAAAAAElFTkSuQmCC",pipe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAARklEQVR4nGOQC9H5D8IJu3JwYqs+L7KxWoYZVgyzl2HUAaMOGHXAqANGHTDqgFEHjDpg1AGjDhh1wKgDRh0w6oBRBwy0AwDeKzV5iw7+EgAAAABJRU5ErkJggg==",crawler:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4nO2WwQmAMAxFO4RHcQhxBg/O4iSO4tFRXEipECgB0/w0UoQG/iWh+Y+mtobQ4k8x9fMVVZr/JwA14w3RvAtA2hTNuwFIcgPgTbblUEkCg82p6b6ekDgMbG4xlWDUEN7mEES67V8BiBAlM0fOhArA+wyYADgMxZtRWpc+Udg8igdaL4Kg6IbxETfJ1YtHUB3AcwRZAA2Eta66lpFHBxV8HVcztzzBuW1Xv4rSj4bV1AyAwGnXuQF41RpAA6geN0ku/JlZ1HDTAAAAAElFTkSuQmCC",wall:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAdElEQVR4nO3VoQ0AIAxEUWZDMADjoJgAhWICtoQg0E0gza+oKO7IE700xJQXOeE8fcynuZ/85G0ASm1PcwE/eQfYAOA1RAHaNZPyPEB7yaS8A3gAXkMTAPwc4wDNJZPyDrABwGuIAvBzjAO0l0zKO4AH0DXc2HxxiAz2qSYAAAAASUVORK5CYII=",pilot:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoklEQVR4nGNgGAVDBVhVX/1PCh4QS6nqGGpZTpYjqG05SY6gleVEO2LAHBCTkPMfhGntAJg9KJZf87D7D8KENMMAufIwDLOPJAegA1LlKXIADIjIGYExuiWE5Ak6gFD8U9sBGOmAmARIzSggywHUTIRkO4BaeNQBg9cB9CyKMYrjAa0LBkVtSA9HEGU5rRxBkuXUdgRZllPqGKpYOgpGAT0AAA45FREOHHAKAAAAAElFTkSuQmCC",robot:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA2klEQVR4nGNgoAC8iPH4D8KUmEGx5QPmiAF3AMNARwEI+IUk/Afh4e8AKzuv/9gwzAG45Klm8ZQ5a8jCFDmEEouxOYRsB+w5coUiTJYDkH1PDQeQ7IhB7wANHTOsmCYOQMcwy9CLYpg4VRIiIQeALPx/YgsYozti5DgAGx45DqB5IiTWEeiYJkXxgNUFDPSuDfUMrP7jwrjqe0IYn5kEHQBrbMAwPsOwYUL68ToAXTOyIRV1PXCMbihMHJd+ZH2jDhjcDsBmCLol+ByATT+6PpKyIS3w4HPAQAEAWAFbLOmVILQAAAAASUVORK5CYII=",pinball:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxUlEQVR4nO3XyxFAMBAGYBU6KUAZjmpQhaMS1OCoAhU4uDBuyU7sI9mNx9iZvRn/N8gmiuKvt1VZ1TvWWYL7YQy2CYQKpTBq4dO8BNsMwQk3Q8Dwddu9Nkdg4SkIcbgUoIK4FRD68LQBKMJd7+5NueEUgHwKVwBJfwcQg+COaDZAgjivbdrOaxUAdxTD8CsECZAisHCIYI3kmK1XAkDDHwGIQXAA4t1QC8F+9xaI6PAUBFxyqufC7OEhSPZjOQbJ+mPyl1Udc2dbDyEuDQEAAAAASUVORK5CYII=",rocket:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAiElEQVR4nGNgGAWjYLCBmISc/wPugAF1BMwBA+YIZAcMiCPQHUB3R2BzALl4wB1AliNgGs/ZGVCEyXYEtRyA7giiHQJT/G1BD1EYl+UVJ/6jYKIdQWsHEHTEoHEApfFPcRQMeCIc8Gw44AXRoCqKyTKIXDCglqM7gO6WMwyWJtmAWT4KRsFAAAB3Qq91P3dPmwAAAABJRU5ErkJggg==",doorOpen:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAS0lEQVR4nGNggIKeKK3/9MQM6GDUAciSUhJqNMED4oANJRZwPOqAUQeMOmDUAaMOGHXAqANGHTDqgFEHjDpg1AGjDhgQByBjbA4AAMPovIDkMf3nAAAAAElFTkSuQmCC",gem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAmUlEQVR4nGNgGAWjYDCDLb+e/acGHroOiHiw4T818NB1AAhINCT8pwRTZDmyIyxOTMOK5RaUYcVUs5wBKRSIdQBVfY/sCFIcQFXLSXEATXzPgCca6OYABhyhQJfgR3YAuiPo5ntkR+BzAE0tZ8ASCnT1PbIjsDmALpZjcwBdfY/uCLr7flA5gOq1HrmOGBDLB4UDRsEoGBYAAFNpKF0LSp3iAAAAAElFTkSuQmCC",conveyor:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjElEQVR4nGMwMLL6P5CYYcAdEBaV9n8gMdwB1zY4oEhY2XmgYEIGkaufAd0QdI2kOIQc/RgOIGQIIQeQqh+rA2CGVNT1gDGxjiBHP4oDQJLIhsAMQDcElwPI0T+4HDDgUTAoEuGAZcNBURANBGZQUtH6P5B41AED3x4YdcCoA0YdMOqAUQeMOmDEOwAASIkROpw/wGkAAAAASUVORK5CYII=",ice:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAZ0lEQVR4nGM49+bX/4HEDKMOGHXAqAOWXXrzfyDxwDugYsO1/wOJRx0w6gCsDthw4wNeTJcQoIflg9sB2BxBtzRAiQNIDTmCuYAc35Pi8MHvAHLwgDuAlJAbdcDgrAtGHTDqgBHlAACbP8glj7y3IAAAAABJRU5ErkJggg==",sludge:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhklEQVR4nGPoKtH5P5CYYdQBg9oBG2a5oeABcUCCnwwYE+sAUh1NVQegW06MI6gaBTB1yI6myAGk4kHjAKpFATUcQVEipAcedcCoAxis9OQIKgKpIUYdqepBagaHA3BpQJYjxVBCepDlGLBpIAYTYzExmGwHUAuPOmDUAaMOGHXAqAMG3AEAsy+XeixVe3EAAAAASUVORK5CYII=",fuelCan:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAgElEQVR4nGNgGAWjgIqgrKLlPzIePg6Iisn4Twwefg5oUJL5Tw089B3wriKBLDx8HHDOzgCMp2gogDGMj47R5anuAHyOwCY+PB2AzTJcjhq+DkC2FF/CHN4OICZbDu8QGFAHDHguGFAHDHhJOKAOGBS1ISl4+DhgwNuEA+YAegAAeDmdbH2VShcAAAAASUVORK5CYII=",fuelCanSmall:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAeklEQVR4nGNgGAWjYBSMglEwCkYBFUFZRct/EKaZBVExGf/xYZo6oEFJ5j8pmCYOeFeRQBSmmQPO2Rn8n6KhAKaxYZgcTR2AyxHIYjR3ALqF6A4aGQ6AWYwtOujqAGyJcWSEwICngQF1wICWA4OiJCSEaeaAAa0NaQUA6HGRILU7C7EAAAAASUVORK5CYII=",ladder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAU0lEQVR4nGNgwAGOzfD7D8M9KXr/camjlf5RBwwuB1ADjzqAZAeA4o2amKIQGPBEOOqAUQeMOmDUAaMOGHAHjMzqeMAdMNoeGHXAqANGHUAvBwAAn796ftRjQB4AAAAASUVORK5CYII=",coinSpin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAAB7UlEQVR4nO2c0W0DMQxDPUln6HidpBNlkA7R/yvykZ/gbMkWRbkwCdxnw2dRTHtIrq1JkiRJkiRJln4fn9foqmRgePcYmN47aKfZUxisxWfAVHp7OLJ93/X4/rieF9t3t7mncswufgZMpfcsS4ZnTxUF2HHmaSzR5UeA7FDAGR6030gnFKAs/9GLXj9ftxcaBOW/PASDp+eL8rPELgD7/GX5zxpngawwsAow8kX5WXp5s/zY5y/LP7L8KBB0AaeHMODx+Eb9PGIWgH3+svwRy48AQRdwNYh3Hq9v1M+jigKwzl+WP2r5IyBZBUQEogLkn78sf+S7f+S3gApg63nz+/Jk3AgfWYDo8q+CqAC2VIBDCoD0RoSiAnALQM1fBbCZVAAVQAVQAVQAFUAFUAEIBaDeBDmYVABuAaj5v/8AuoEqAE4qQFL+2QXYfgAG0y4FaPogjFMAJMDMYKIMyOVvKsA5X4W4M0cAzEJEGKLeFo/HN+rnUUUBWOcvzf/uBaIAK0NZYchY/jue6uVv+jp0bv69Jfa+AyAgUP5LA3DwZP255ZUeiEnOf7TQM1fGEBjeKzxov5H0SCQh/3IAPRTf1QkF8HhSWP7D8rGWcIflb/q3KDX5Vy/fiIHh3WNgeu+gnWZ/agaSJEmSJEmL+gOoxtq93WZETQAAAABJRU5ErkJggg==",pilotFly:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAABQElEQVR4nO3auw3CMBSFYQ9BzQwRJQU1Q1AwABuwCRVLwRisYJQIFzEBP6+vBf+RXFnwHV8iJSCMIYQQQr5ne77ZlIX/A34qWrsMvqJfC88tga/o18ZTS+Ar+lJ4bAl8XV+9AL6Sfzie7LikCzgHvyP/vt/ZcYVe7JK775bz8Pvwowr4Sd0vHQC+nB8s4LJab6blI6H90gHgy/rB+0/tAv59CF/Xj3oA8ZO6XzIAfFk/+gk09OYxeO4A8OX8Zl9BSgeAL+OrF8DnAsDnAsBXvwBa/hS5NAB8Hd/Yy9C8wGji9+FPBezjOi3pAs6ZFXAdLoO8/3Le7MbnN140zz8rYIT/kPCpAL6u/7YhgccOAL+9v7hRG/9aYCES/qdon1/bD34wtYaecgFI+Lm9fv382cV6dVLTqlOPZyeEEELI/+UJM/1G2MY4m/wAAAAASUVORK5CYII=",pilotClimb:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAABZUlEQVR4nO3ZvY3CQBAFYIogvpiYkOBiIiogoAA6uD7oDNoxMtIi2PPPzs7PW/AbaRMs+XszHmEkVisWi8VisaZr93ftJGdzuLydaF/r5fmj/bwgvhS1XgCNrx2GdgEsHgayfzWuXQDtA0D72ocA7X/oBtoAkiHQB/pTN9AGKAlBH+vDA9AH+cfTueuPd4Dk0G/Iv+1/u/7M3SDVGDp3PZ3kefpTAyzxa/qz9CP7LwqQ1xhesgQ1A5D61gsQ7Uf2Xxxg/bN9nDxEqrHrNQsw1Nwn+ZYL6N3/v/ePd4D8PUQf688GGPqKkV7XDIC+r18UYCf8EWI9APp+fnEAq1M7APo+PjwAfS4AfS4AffgCRIR4tei34Ydu4SBOH+4/yzvAKEy/Cd81RBFOH+67hBDh9OG+aYgqnD7cV4UxQek34z8q/4tz7nP63+XDA9BvdAGiCj4AYa4oZzEL0GotZi6LaVRYnzyXO85k0O0vEHCnAAAAAElFTkSuQmCC",playerWalk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAA/klEQVR4nO3WQQrCMBCF4R7CtWvXLj2EF/Ie3szzVCgUJGCSSSZ5Y/0fZNMg32MYapeFEEIIyef2eK2Wg38A34p6l8EX+l54awl8oe+NW0vgC/1ReG0JfK0vL4DPAuCr/NKP97Tel0rga/1sgTTW+94B4I/3vxbYczpft5MipfveAeDP8eUF8IMuQM0rpnTfMwB88V9AirTe9wwAX/wR6HnwY/ryAvgsAD4LgC9bgBklsji+3JcXwGcB8JULMLJEFY4v94eUMOH4ct+1RBOOL/e7yrig+GH8LZf7c/08pef4x/LlBfCDLsCsyAdg7DXLYQGC9prl/M0CRM0vz+UNICZusmaEXGsAAAAASUVORK5CYII=",switch:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAABjUlEQVR4nO2XMU7DQBBF9zgUlNRUFNCQJlUKCs5AEYkmB0DpcgcqREVJQcUhuMuijbTSarMbYtbxH9vvSdPZ/s/2/MhxDgAAAAAAAAAAAAAAAPa8Pt/5fFQu293C56NygTPy9Xjj01F5lJbfWgGUJXh6W/p0VB6TIl9+ZQlqBVCUoLb8qgLkyz/6EvzcXvt0VB4UoAwFOM7qe+XT6XRyvvzKElCAMhSgTr78nUtQK4CiBJYK4PgTXMVKAWrLTwF6JC7++8en/Bs3OKiX382lAGc1/4O4+OGFW1k8PA491N/+ro9PIFcpgaUHrXax4GHBwZJHdGle/kj6y2/lJvGw5WDZo2n5TwlQYcEDBzsOg3pYuGEccJA6pIEXl1f7GST4iMPc8kOmcvks5A/msN68+HzyBSgdM+X89OHPPT/MJPNLF+3yAlpFyCdfme/ulw8+TE0gndIx8XzyyR9dfjy5ryGf/DHlywXIJ58CkE++qgB9SvwrnHzyxflyAfLJlxagVaQ5mHzyDeQDAMAU+QVcGkr+3HB7iQAAAABJRU5ErkJggg==",shipThrust:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAABP0lEQVR4nO3YQQ6CMBSEYc7jKVy58BQew7XxcJ6ApRdw614DSUmp1BbS14HwT9KFCn5DfRFj0xBCCCGEzMzxfPl0C3+fvrwAvtB3uKoEvtaXF8BnAPBVfojXLoGv9YcC7fPVL9UG4At8h51uj9GqVQJf68sL4At9/34TK2BZAl/rj+49YYEa9yJ8rf/z4yNcNTcAv7Lvf8WkCliUwNf6yemznkJ8oZ8zfZZTiK/1s6fPagrxhX5s+rrHn/bar6nXSpXA1/qTfzu+74cB90uEx5XcAHyNPyrg8KkC7nn/2NIb4N4v7OAeu+MtffX1V/VjXyX/PoDUufjb8ZvYyTkF/BKlfb9DzLb01dc/5cfOX+znbH6qQM57LT0nZwDwl/vJzClglTXYa+igsFexAeqor13t6wuIs/frZwMIIWTT+QINh1F9fyKLJQAAAABJRU5ErkJggg==",asteroidSpin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAD9klEQVR4nO1b220cMQx0oUYKyEeQAtKDAReQVmPk4+yDrAeHnCG1dyKwf4bnQXKkXcMvL6dOnTp16tSpU5et1x8///1/qnko66axfap5Zdez6y+r0QBWNSGbS6XemffV/cjksbPmh8RHB09tRAWHHbTffv/b+9/Pp4JL1Sy0v3fmAQtzxWHXOWRiukRnir9fiHYgFLiWxVNqb/Vm6189bB6Wnvd6wtC+0p8Vxl58qvjV4CmJWAaAvQQoZoZ2Tw8Y2j1eKHh4euDBnfng3QMWh9QZREWzDfCaHx2+Fe6v338+H2UTvNrV+j08FBxG/rPDp0J/lEN4/tgGoCQYQ4hiWzHvA8A6hKgHHu0tp6jvkb6z+m/x3xLECPYKP3v+K/DNBswWoCWBCs9ugBXXsvzRJkSWvw0AdfCw9VtOfk8IKz2Y8ansgSsA2IvgWcAbNrpsDHxrwxUcUB6rAfQun3W4K/QjAdB6wJ4DCx9m+KWEAHL6ow1AxSONHv0Mis8ynuUBOojs5UMXTq3fw8caAozT3xsAyM3H6795ANgnoXcBrY22vg8ytSsXoALb2gPlLUB5C7NwYNy+RgEQDZ6MAJadgpHmI6f/lQMgA9+j3xMAnu8RSv1WH6K3L+/8WbUjB6EniOQBoDD/SguI6mecvJYBXPnvXf42ALz47D6g/a/23/qs5gUOgIholvkZ+KwmeL9DWE/fqPasAN4xACp7kDl7oe8R9yQYg2cFf4QAiFy/rFdv5SnE9v+e65UD4C35BsAMAUT/tyZE3/sQE6qvfywe0RsA0lC2/oxXIPUC7K4/+xYA9aA1IPLexzgBd2sA4yssOnzoX0GiHlQGAMt/7/vvIwRACJ95/UXTx4ttXUZ0AC3XcfYCRAbQwosdAKj3GQHAmMEdAoDNweQ/awCj5lvwkYVEBnA0hJEAYC2A1Y+MAUR88Hjfw0dO//ZnkfCregVZzUD09mnqAfMWgIpHQsATAEvxEw8YAYBgM4eQEYDeAECxrfgIt3au2NgZt1D17XMKXjWAMw7WhWQNYMbpr+iBcgHZp79av3f5Vh4ogrDlkXH4SBqgWgI0AKr0V+J7fN8Bn8EBXfweLnoIqbggQcPyn/I10iu814xZE5TYOyyAh0eo+aR/y47gtxwy566n33IQVcy/qv8u8J5pFYNYhTvywIPf42DhwcL24tMGsMMhU3vUA8UMZHvfBV8tuaIJLZeRGerlG+Gr9XvxGdgj/Mz+z/qu1t7jMJuJbP2y5e+BZy68lYsy/UeYVR5cBb+yDyy8KI9M7b0AYGFPwWkgF+NU7UU1/ohDVQCp8JBS89nlENqqnlL0k9fp9Vc99fKfOnXq1KlTpwL1AZvns9iMhzONAAAAAElFTkSuQmCC"},lt=32,O=e=>{const t=bs[e];if(!t)throw new Error(`no stock image named "${e}"`);return t},Be={type:"sheet",cell:{width:lt,height:lt}},ht=e=>`${e}.png`;function xe(e,t,o,a=!0){return{loop:a,frameRate:o,frames:Array.from({length:t},(r,h)=>({sprite:ht(e),position:{x:h*lt,y:0,width:lt,height:lt}}))}}function na(e,t,o){return{frameRate:o,frames:t.map(a=>({sprite:ht(e),scale:a}))}}const Fo=[{id:"player",name:"Player",description:"A small character, facing the camera.",dataUrl:O("player")},{id:"ground",name:"Ground",description:"A grass-topped tile of earth, for floors and platforms.",dataUrl:O("ground")},{id:"coin",name:"Coin",description:"A gold coin, for something to collect.",dataUrl:O("coin")},{id:"box",name:"Box",description:"A wooden crate, for something to push or stack.",dataUrl:O("box")},{id:"ball",name:"Ball",description:"A red ball, for something to bounce.",dataUrl:O("ball")},{id:"ship",name:"Ship",description:"A dart-shaped ship, pointing up — for something you steer.",dataUrl:O("ship")},{id:"asteroid",name:"Asteroid",description:"A chunky grey rock, for something to dodge or break apart.",dataUrl:O("asteroid")},{id:"energyBall",name:"Energy Ball",description:"A glowing blue orb — for something an actor sends across the screen.",dataUrl:O("energyBall")},{id:"door",name:"Door",description:"A panelled wooden door, for a way out of the room.",dataUrl:O("door")},{id:"post",name:"Post",description:"A banded wooden post, for a landmark or a place to reach.",dataUrl:O("post")},{id:"flag",name:"Flag",description:"A chequered flag on a pole, for the end of the level.",dataUrl:O("flag")},{id:"spike",name:"Spike",description:"A row of metal teeth on a plate, for something that damages.",dataUrl:O("spike")},{id:"fuelCan",name:"Fuel Can",description:"A red jerry can, for something that fills a tank — a jetpack’s, or anything else that runs out.",dataUrl:O("fuelCan")},{id:"fuelCanSmall",name:"Small Fuel Can",description:"The same can, smaller. Worth less than the big one, and readable as less from across the room.",dataUrl:O("fuelCanSmall")},{id:"robot",name:"Tracked Robot",description:"A boxy robot on a tank track with one red eye, for something that goes along the floor and takes ladders.",dataUrl:O("robot")},{id:"pinball",name:"Steel Ball",description:"A heavy lit steel ball, for something that rolls along the floor and comes back.",dataUrl:O("pinball")},{id:"rocket",name:"Rocket",description:"A finned rocket pointing RIGHT, which is where a heading of zero points — for something that takes the next turning every time it stops.",dataUrl:O("rocket")},{id:"doorOpen",name:"Open Door",description:"The same frame with the slab swung back and the room’s dark showing through — what a Door looks like once something has unlocked it.",dataUrl:O("doorOpen")},{id:"gem",name:"Gem",description:"A green cut stone with a bright table, for the thing a level is about having all of. Told from a Coin by shape and colour both.",dataUrl:O("gem")},{id:"conveyor",name:"Conveyor Belt",description:"A belt on rollers with chevrons pointing the way it runs, for a floor that carries you along.",dataUrl:O("conveyor")},{id:"ice",name:"Ice",description:"A pale blue floor with a lit top edge, for ground you cannot stop or turn on.",dataUrl:O("ice")},{id:"sludge",name:"Sludge",description:"A thick ochre ooze with a lumpy edge and bubbles in it, for ground that drags. Deliberately unlike grass, which is what ordinary Ground already looks like.",dataUrl:O("sludge")},{id:"pilot",name:"Pilot",description:"The player with a jetpack on: a tank either side, so the pack is visible from the front.",dataUrl:O("pilot")},{id:"ladder",name:"Ladder",description:"A rung of ladder, drawn to stack: a column of these is one ladder, with the rungs evenly spaced across the joints.",dataUrl:O("ladder")},{id:"hill",name:"Hill",description:"A dim green mound, for scenery a long way behind the floor.",dataUrl:O("hill")},{id:"pipe",name:"Pipe",description:"One segment of a green pipe, for stacking into a column.",dataUrl:O("pipe")},{id:"crawler",name:"Crawler",description:"A purple bug on six legs, for something that patrols and damages.",dataUrl:O("crawler")},{id:"wall",name:"Wall",description:"A block of stone that tiles both ways, for rooms and columns.",dataUrl:O("wall")},{id:"playerWalk",name:"Player Walking",description:"Four frames of the player mid-stride, side by side.",dataUrl:O("playerWalk"),sheet:Be},{id:"coinSpin",name:"Coin Spinning",description:"Six frames of a coin turning, side by side.",dataUrl:O("coinSpin"),sheet:Be},{id:"switch",name:"Switch",description:"Six frames of a switch flipping over, side by side.",dataUrl:O("switch"),sheet:Be},{id:"pilotFly",name:"Pilot Flying",description:"Four frames of the pilot with both jets lit, side by side.",dataUrl:O("pilotFly"),sheet:Be},{id:"pilotClimb",name:"Pilot Climbing",description:"Four frames of the pilot reaching up a ladder, side by side.",dataUrl:O("pilotClimb"),sheet:Be},{id:"shipThrust",name:"Ship Thrusting",description:"Four frames of the ship with its engine lit, side by side.",dataUrl:O("shipThrust"),sheet:Be},{id:"asteroidSpin",name:"Asteroid Tumbling",description:"Eight frames of a rock turning end over end, side by side.",dataUrl:O("asteroidSpin"),sheet:Be}],jt=[{id:"coinSpin",name:"Coin Spin",description:"A coin turning on the spot, over and over.",sprites:["coinSpin"],document:{type:"animation",animations:{coinSpin:xe("coinSpin",6,12)}}},{id:"playerWalk",name:"Player Walk",description:"A walking stride, for a character on the move.",sprites:["playerWalk"],document:{type:"animation",animations:{playerWalk:xe("playerWalk",4,8)}}},{id:"switch",name:"Switch",description:"A switch flipping from one side to the other — plays once and holds.",sprites:["switch"],document:{type:"animation",animations:{switchFlip:xe("switch",6,12,!1)}}},{id:"pilotFly",name:"Pilot Flying",description:"A jetpack burning, for while it is switched on.",sprites:["pilotFly"],document:{type:"animation",animations:{pilotFly:xe("pilotFly",4,16)}}},{id:"pilotClimb",name:"Pilot Climbing",description:"Hand over hand up a ladder, for while a climb lasts.",sprites:["pilotClimb"],document:{type:"animation",animations:{pilotClimb:xe("pilotClimb",4,8)}}},{id:"shipThrust",name:"Ship Thrust",description:"A ship with its engine burning, for while the throttle is on.",sprites:["shipThrust"],document:{type:"animation",animations:{shipThrust:xe("shipThrust",4,12)}}},{id:"asteroidSpin",name:"Asteroid Tumble",description:"A rock turning end over end, over and over.",sprites:["asteroidSpin"],document:{type:"animation",animations:{asteroidSpin:xe("asteroidSpin",8,10)}}},{id:"pulse",name:"Pulse",description:"A gentle grow and shrink, made by scaling one image.",sprites:["ball"],document:{type:"animation",animations:{pulse:na("ball",[.7,1,1.3,1],6)}}},{id:"playerBob",name:"Player Bob",description:"A character bobbing on the spot, made by scaling one image.",sprites:["player"],document:{type:"animation",animations:{playerBob:na("player",[1,1.25,1,.8],7)}}}];function kn(e){return Fo.find(t=>t.id===e)}function ks(e){return jt.find(t=>t.id===e)}const Tn=e=>`${e}.png`;function Ts(e){const t=e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}function xh(){const e=fs();return As.map(t=>({id:t,name:Ts(t),url:`${e}${Tn(t)}`}))}function Ho(e,t){const o=Object.values(e.folders).find(h=>h.name===t&&h.parentId==="0");if(o)return{source:e,folderId:o.id};const a=Lo(e,t),r=Object.values(a.folders).find(h=>h.name===t&&h.parentId==="0");return{source:a,folderId:r?.id??"0"}}function _s(e,t,o){return Object.values(e.files).some(a=>a.folderId===t&&a.name===o)}function Bt(e,t,o){if(_s(e,t,o.name))return e;const a=Je(Object.values(e.files));return{...e,files:{...e.files,[a]:{id:a,name:o.name,language:o.language,contents:o.contents??"",folderId:t,...o.url?{url:o.url,mimeType:o.mimeType}:{}}}}}const _n="backgrounds",vs=`${_n}/`,Nh=e=>e!==void 0&&e.startsWith(vs),Cs="sprites",Es="animations";function Vo(e,t){const o=Ho(e,Cs),a=ht(t.id);let r=Bt(o.source,o.folderId,{name:a,language:"png",url:t.dataUrl,mimeType:"image/png"});return t.sheet&&(r=Bt(r,o.folderId,{name:Uo(a),language:"json",contents:Go(t.sheet)})),{source:r,value:a}}function Mh(e,t,o){const a=Ho(e,_n),r=Tn(t.id);return{source:Bt(a.source,a.folderId,{name:r,language:"png",url:o,mimeType:"image/png"}),value:r}}function vn(e,t){let o=e;for(const h of t.sprites){const p=kn(h);p&&(o=Vo(o,p).source)}const a=Ho(o,Es),r={name:t.name,...t.document};return{source:Bt(a.source,a.folderId,{name:`${t.id}.anim`,language:"anim",contents:`${JSON.stringify(r,null,2)}
`}),value:Object.keys(t.document.animations)[0]??t.id}}let Cn=[],En=[];function Dh(e){Cn=e}function Wh(e){En=e}function Rn(){return[...Cn,...En]}function yt(e){return Rn().find(t=>t.name===e)}function Lh(){const e=new Set,t=new Set;for(const o of Rn())e.has(o.name)&&t.add(o.name),e.add(o.name);return[...t]}function On(e){const t=yt(e);if(t)return t.source==="project"&&t.modulePath?{source:"project",modulePath:t.modulePath}:{source:"builtin",exportName:t.ref.exportName}}function Uh(e){return e.ruleName?`${e.ruleName}#${e.exportName}`:e.exportName}function Rs(e){const t=e.indexOf("#");if(t<0)return{source:"builtin",exportName:e};const o=e.slice(0,t),a=e.slice(t+1),r=yt(o);return{source:r?.source??"project",exportName:a,ruleName:o,modulePath:r?.modulePath}}function Os(e){if(e.ruleName){const t=On(e.ruleName);if(t)return t.source==="project"?t.modulePath:void 0}return e.source==="project"?e.modulePath:void 0}function Gh(e){return e.own?!0:!e.ruleName||yt(e.ruleName)!==void 0}const Sn=new Map;function Fh(e,t){t&&Sn.set(e,t)}const In=new Map;function Hh(e,t){t&&In.set(e,t)}function Vh(e){const t=Sn.get(e)??In.get(e);return t&&!yt(t)?t:void 0}function Yh(e){return e.replace(/[^A-Za-z0-9]/g,"")}function jh(e,t){const o=new Map;for(const[w,k]of Object.entries(t))k!=null&&!o.has(k)&&o.set(k,w);let a="";const r=w=>({source:"builtin",exportName:o.get(w)??"",ruleName:a}),h=(w,k)=>({id:w.id,name:w.name??w.id,type:w.type,default:w.default,readonly:w.readonly,scope:w.scope,ownerTraitId:k,ref:r(w)}),p=(w,k,B)=>({id:w.id,name:w.name??w.id,params:w.params??[],scope:k,ownerTraitId:B,ref:r(w)}),f=(w,k,B)=>({id:w.id,name:w.name??w.id,returns:w.returns,params:w.params??[],scope:k,ownerTraitId:B,ref:r(w)});return e.map(w=>{a=w.name;const k=Object.values(w.properties).map(R=>h(R)),B=Object.values(w.actions).map(R=>p(R,"world")),D=Object.values(w.queries).map(R=>f(R,"world")),ae=[];for(const R of Object.values(w.traits)){ae.push({id:R.id,name:R.name,ref:r(R),requires:[],subject:"actor"});for(const ie of Object.values(R.properties))k.push(h(ie,R.id));for(const ie of Object.values(R.actions))B.push(p(ie,"actor",R.id));for(const ie of Object.values(R.queries))D.push(f(ie,"actor",R.id))}const ke=Object.values(w.events).map(R=>({id:R.id,name:R.name??R.id,ref:r(R),scope:"actor"})),Te=r(w),Q=Object.values(w.steps).map(R=>({id:R.id,name:R.id,ownerRef:Te,scope:"world",order:{kind:"free"}}));return{id:w.id,name:w.name,ability:w.ability,source:"builtin",ref:Te,requires:w.requires.map(R=>R.name).filter(R=>R),traits:ae,properties:k,actions:B,queries:D,events:ke,steps:Q,enums:[]}})}const Eo=e=>(e??[]).filter(t=>t.kind!=="param"&&t.text).map(t=>(t.text??"").trim()).filter(Boolean).join(" "),q=e=>e.replaceAll(/[^A-Za-z0-9_]/g,"_"),ge=e=>e.split(/[^A-Za-z0-9]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),Ss=new Set(["number","boolean","string","color","vector","point","numbers","words","vectors","actors","actor"]),Is=new Set(["number","boolean","string","vector"]),Ps=(e,t)=>{switch(t){case"actors":return[];case"numbers":case"words":case"vectors":return[];case"actor":return[];case"boolean":return e.trim().toLowerCase()==="true";case"string":case"color":return e;case"vector":case"point":{const[o,a]=e.split(",").map(r=>Number(r.trim()));return{x:Number.isFinite(o)?o:0,y:Number.isFinite(a)?a:0}}default:{const o=Number(e);return Number.isFinite(o)?o:0}}};function Pn(e,t){let o,a=[],r=[],h=[];const p=new Map;try{const A=JSON.parse(t);for(const _ of A.variables??[])_.id&&p.set(_.id,_.name??_.id);const T=A.blocks?.blocks??[];o=T.find(_=>_?.type==="world_rule"),a=T.filter(_=>_?.type==="world_rule_trait"),o||(o=T.find(_=>_?.type==="world_behavior"),a=o?[o]:[]),r=T.filter(_=>_?.type?.startsWith("world_rule_step")),h=T.filter(_=>_?.type==="world_rule_enum")}catch{return}if(!o)return;const f=(A,T)=>typeof A.fields?.[T]=="string"?A.fields[T]:"",w=o.type==="world_behavior",k=f(o,"NAME")||(w?"Behavior":"Rule"),B=f(o,"ABILITY")||k,D=A=>({source:"project",exportName:A,ruleName:k,modulePath:e}),ae=D(`${ge(k)}Rule`),ke=[],Te=[],Q=[],R=[],ie=[],Ie=[],ze=[],Ve=(A,T,_="actor")=>{const I=f(A,"NAME");if(!I)return;const M=f(A,"TYPE"),C=Ss.has(M)?M:"number";Te.push({id:q(I),name:I,type:C,default:Ps(f(A,"DEFAULT"),C),readonly:f(A,"ACCESS")==="readonly",scope:T?_:"world",ownerTraitId:T,ref:D(`${ge(I)}Property`)})},u=(A,T,_="actor")=>{const I=A.extraState?.parts??[],M=I.flatMap(J=>J.kind==="param"?[{kind:"param",name:J.var&&p.get(J.var)||"choice",type:J.type??"string"}]:J.text?[{kind:"label",text:J.text}]:[]),C=Eo(I);C&&ie.push({id:q(C),name:C,ref:D(`${ge(C)}Event`),scope:T?_:"world",...T?{ownerTraitId:T}:{},...M.length>0?{parts:M}:{}})},S=(A,T,_="actor")=>{const I=A.extraState?.parts??[],M=I.flatMap(le=>le.kind==="param"?[{kind:"param",name:le.var&&p.get(le.var)||"value",type:le.type??"number"}]:le.text?[{kind:"label",text:le.text}]:[]),C=Eo(I);if(!C)return;const J=M.filter(le=>le.kind==="param").map(le=>({name:le.name,type:le.type})),se=f(A,"RETURNS"),et={id:q(C),name:C,params:J,parts:M,description:f(A,"DESCRIPTION")||void 0,scope:T?_:"world",ownerTraitId:T};se&&se!=="none"&&Is.has(se)?R.push({...et,returns:se,ref:D(`${ge(C)}Query`)}):Q.push({...et,ref:D(`${ge(C)}Action`)})},$=A=>{const T=A.lastIndexOf("#");if(T<0)return;const _=A.slice(0,T),I=A.slice(T+1);if(!_||!I)return;const M=yt(_);return{ownerRef:{source:M?.source??"project",exportName:M?.ref.exportName??"",ruleName:_,modulePath:M?.modulePath},stepId:I}},_e={world_rule_step_tick:"free",world_rule_step_before:"before",world_rule_step_after:"after",world_rule_step_in:"phase"},Pe=A=>{const T=f(A,"NAME"),_=_e[A.type??""];if(!T||!_)return;if(_==="phase"){const C=f(A,"PHASE");Ie.push({id:q(T),name:T,ownerRef:ae,scope:"world",order:C?{kind:_,phase:C}:{kind:"free"}});return}const I=_==="free"?void 0:$(f(A,"STEP")),M=I?{kind:_,anchor:I}:{kind:"free"};Ie.push({id:q(T),name:T,ownerRef:ae,scope:"world",order:M})},ea=(A,T,_)=>{const I=f(A,"NAME");if(!I)return;const M=f(A,"PHASE");Ie.push({id:q(I),name:I,ownerRef:ae,scope:_,ownerTraitId:T,order:M?{kind:"phase",phase:M}:{kind:"free"}})};for(let A=o.next?.block;A;A=A.next?.block)if(A.type==="world_use_rule"){const T=f(A,"RULE");T&&ze.push(T)}else{if(w)continue;A.type==="world_rule_property"?Ve(A):A.type==="world_rule_block"?S(A):A.type==="world_rule_event"&&u(A)}for(const A of r)Pe(A);const Ze=[];for(const A of h){const T=f(A,"NAME");if(!T)continue;const _=[];for(let I=A.next?.block;I;I=I.next?.block){if(I.type!=="world_rule_enum_option")continue;const M=f(I,"NAME");M&&!_.some(([,C])=>C===M)&&_.push([M,M])}Ze.push({owner:k,name:T,options:_})}for(const A of a){if(A.type==="world_behavior"){const C=q(f(A,"NAME")||"Behavior"),J=[];for(let se=A.next?.block;se;se=se.next?.block)if(se.type==="world_rule_property")Ve(se,C,"actor");else if(se.type==="world_use_trait"){const et=f(se,"TRAIT");et&&J.push(et)}Ie.push({id:C,name:f(A,"NAME")||"Behavior",ownerRef:ae,scope:"actor",ownerTraitId:C,order:{kind:"phase",phase:"decide"}}),ke.push({id:C,name:f(A,"NAME")||"Behavior",ref:D(`${ge(f(A,"NAME")||"Behavior")}Trait`),requires:J,subject:"actor"});continue}const T=f(A,"NAME");if(!T)continue;const _=q(T),I=f(A,"SUBJECT")==="camera"?"camera":"actor",M=[];for(let C=A.next?.block;C;C=C.next?.block)if(C.type==="world_use_trait"){const J=f(C,"TRAIT");J&&M.push(J)}else C.type==="world_rule_property"?Ve(C,_,I):C.type==="world_rule_block"?S(C,_,I):C.type==="world_trait_step"?ea(C,_,I):C.type==="world_rule_event"&&u(C,_,I);ke.push({id:_,name:T,ref:D(`${ge(T)}Trait`),requires:M,subject:I})}return{id:q(k),name:k,ability:B,source:"project",modulePath:e,ref:ae,requires:ze.filter(A=>A!==k),traits:ke,properties:Te,actions:Q,queries:R,events:ie,steps:Ie,enums:Ze}}const Ke=(e,t,o,a)=>`${e}:${t}:${o??""}:${a}`;function $h(e,t){const o=new Map,a=(h,p,f,w,k)=>{const B=k??q(w.getFieldValue("NAME")??"");B&&o.set(Ke(h,p,f,B),{params:h==="step"?[]:[...t.signature(w)],body:t.body(w)})},r=(h,p,f)=>{for(let w=h;w;w=w.getNextBlock())if(w.type==="world_rule_block"){const k=w.getFieldValue("RETURNS");a(k&&k!=="none"?"query":"action",p,f,w,q(Eo(w.saveExtraState?.()?.parts)))}else w.type==="world_trait_step"&&a("step",p,f,w)};for(const h of e)if(h.type?.startsWith("world_rule_step")){const p=q(h.getFieldValue("NAME")??"");p&&o.set(Ke("step","world",void 0,p),{params:[],body:t.chainBody(h)})}else if(h.type==="world_rule")r(h.getNextBlock(),"world",void 0);else if(h.type==="world_behavior"){const p=q(h.getFieldValue("NAME")??"");p&&o.set(Ke("step","actor",p,p),{params:[],body:t.chainBody(h)})}else h.type==="world_rule_trait"&&r(h.getNextBlock(),h.getFieldValue("SUBJECT")==="camera"?"camera":"actor",q(h.getFieldValue("NAME")??""));return o}const Bs=e=>{const t=e.default;switch(e.type){case"actors":return"[]";case"actor":return"[]";case"boolean":return t?"true":"false";case"string":case"color":return JSON.stringify(String(t??""));case"vector":case"point":{const o=t??{x:0,y:0};return`new Vector(${Number(o.x)}, ${Number(o.y)})`}default:return String(Number(t??0))}};function Kh(e,t=new Map,o=new Set){const a=u=>JSON.stringify(u),r=e.actions.length>0||e.queries.length>0||e.steps.length>0,h=["RuleBuilder"],p=u=>{h.includes(u)||h.push(u)};e.properties.some(u=>u.type==="vector"||u.type==="point")&&p("Vector");const f=new Map,w=(u,S)=>{o.has(u)||f.set(u,S)},k=u=>ge(u.split("/").pop()??u)||"Rule",B=u=>{const S=On(u),$=S?.source==="project"?S.modulePath:S?"":u;if($){const Pe=k($);return w(`default:${$}`,`import ${Pe} from ${a($)};`),Pe}const _e=S?.source==="builtin"?S.exportName:u;return p(_e),_e},D=u=>{const S=Rs(u);if(S.ruleName===e.name)return S.exportName;const $=Os(S);return $?w(`named:${$}:${S.exportName}`,`import {${S.exportName}} from ${a($)};`):S.source==="builtin"&&p(S.exportName),S.exportName},ae=u=>`${ge(u)}Step`,ke=e.requires.map(B),Te=e.traits.map(u=>u.requires.map(D)),Q=[`const rule = new RuleBuilder({id: ${a(e.id)}, name: ${a(e.name)}});`];ke.length>0&&Q.push(`rule.requires([${ke.join(", ")}]);`);const R=new Map;e.traits.forEach((u,S)=>{R.set(u.id,u.ref.exportName),Q.push(`export const ${u.ref.exportName} = rule.addTrait({id: ${a(u.id)}, name: ${a(u.name)}});`),Te[S].length>0&&Q.push(`${u.ref.exportName}.requires([${Te[S].join(", ")}]);`)});for(const u of e.properties){const $=(u.scope!=="world"&&u.ownerTraitId?R.get(u.ownerTraitId):void 0)??"rule",_e=u.readonly?`{name: ${a(u.name)}, readonly: true}`:`{name: ${a(u.name)}}`;Q.push(`export const ${u.ref.exportName} = ${$}.addProperty(${a(u.id)}, ${a(u.type)}, ${Bs(u)}, ${_e});`)}const ie=u=>(u.scope!=="world"&&u.ownerTraitId?R.get(u.ownerTraitId):void 0)??"rule",Ie=u=>u.scope==="world"?"world":u.scope,ze=u=>u.scope==="world"?"":`  const world = ${u.scope}.world;
`,Ve=(u,S)=>[Ie(u),...S?.params??[]].join(", ");for(const u of e.actions){const S=t.get(Ke("action",u.scope,u.ownerTraitId,u.id));Q.push(`export const ${u.ref.exportName} = ${ie(u)}.addAction(${a(u.id)}, (${Ve(u,S)}) => {
${ze(u)}${S?.body??""}}, {name: ${a(u.name)}});`)}for(const u of e.queries){const S=t.get(Ke("query",u.scope,u.ownerTraitId,u.id));Q.push(`export const ${u.ref.exportName} = ${ie(u)}.addQuery(${a(u.id)}, (${Ve(u,S)}) => {
${ze(u)}${S?.body??""}}, {name: ${a(u.name)}, returns: ${a(u.returns??"boolean")}});`)}for(const u of e.events)Q.push(`export const ${u.ref.exportName} = rule.addEvent(${a(u.id)}, {name: ${a(u.name)}});`);for(const u of e.steps){const S=t.get(Ke("step",u.scope,u.ownerTraitId,u.id)),$=u.ownerTraitId?R.get(u.ownerTraitId):void 0,_e=u.scope!=="world"&&$,Pe=S?.body??"",Ze=`(world, delta) => {
${_e?`for (const ${u.scope} of world.${u.scope==="camera"?"cameras":"actors"}.with(${$})) {
${Pe}}
`:Pe}}`,{kind:A,phase:T}=u.order,_=A==="phase"&&T?`rule.addStepIn(${a(u.id)}, ${a(T)}, ${Ze})`:`rule.addStep(${a(u.id)}, ${Ze})`;Q.push(`export const ${ae(u.name)} = ${_};`)}return[`import {${h.join(", ")}} from 'world-lab';`,...r?["import * as WorldLab from 'world-lab';"]:[],...f.values(),"",...Q,"","export default rule.build();",""].join(`
`)}const ee=e=>e.reduceRight((t,o)=>({...o,next:{block:t}})),n=e=>({type:"world_use_trait",fields:{TRAIT:e}}),ue=e=>({type:"world_show_as",fields:{ICON:e}}),E=()=>({block:{type:"world_this_actor"}}),b=e=>({shadow:{type:"math_number",fields:{NUM:e}}}),K=e=>({shadow:{type:"colour_picker",fields:{COLOUR:e}}}),Y=e=>({shadow:{type:"text",fields:{TEXT:e}}}),ce=e=>({block:{type:`world_get_Writing_${e}`,inputs:{ACTOR:E()}}}),U=(e,t)=>({type:`world_set_Writing_${e}`,inputs:{ACTOR:E(),VALUE:t}}),d=e=>({type:"world_set_sprite",fields:{SPRITE:e}}),xs=(e,t)=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:e},...t.length?{next:{block:ee(t)}}:{}}),Bn=e=>({type:"world_play_animation",fields:{ANIMATION:e}}),re=(e,t,o={})=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},...t.length?{next:{block:ee(t)}}:{}},...(o.handlers??[]).map((a,r)=>({...a,x:20,y:180+r*120})),...o.drawing?[{type:"world_define_drawing",x:20,y:180+(o.handlers?.length??0)*120,fields:{WIDTH:o.drawing.width,HEIGHT:o.drawing.height},inputs:{DO:{block:ee(o.drawing.commands)}}}]:[]]}},null,2),F=e=>({type:"world_pen_fill",inputs:{COLOUR:e}}),xn=(e,t)=>({type:"world_pen_outline",inputs:{COLOUR:e,WIDTH:b(t)}}),Nn=()=>({type:"world_pen_no_outline"}),Fe=(e,t,o,a)=>({type:"world_draw_rectangle",inputs:{X:b(e),Y:b(t),WIDTH:b(o),HEIGHT:b(a)}}),He=(e,t)=>({type:"world_draw_text",inputs:{TEXT:ce("TextProperty"),X:b(e),Y:b(t),SIZE:ce("TextSizeProperty"),ANCHOR:ce("TextAnchorProperty")}}),Ns=(e,t,o)=>({type:"world_draw_paragraph",inputs:{TEXT:ce("TextProperty"),WIDTH:b(o),X:b(e),Y:b(t),SIZE:ce("TextSizeProperty"),ANCHOR:ce("TextAnchorProperty")}}),Mn="coinSpin",Dn=re("Coin",[Bn(Mn),n("Collection#CanBeCollectedTrait")]),Wn="ground",Ln=re("Ground",[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d(`${Wn}.png`)]),Ro=64,Oo=8,Ms="#301820",Ds="#e04040",Un={type:"world_rule_property",fields:{TYPE:"actor",ACCESS:"writable",NAME:"subject",DEFAULT:""}},Ws=(e,t)=>[F({shadow:{type:"colour_picker",fields:{COLOUR:Ms}}}),Fe(0,0,Ro,Oo),F({shadow:{type:"colour_picker",fields:{COLOUR:Ds}}}),{type:"world_draw_rectangle",inputs:{X:b(0),Y:b(0),WIDTH:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:b(Ro),B:{block:{type:"logic_ternary",inputs:{IF:{block:{type:"world_any_actors",inputs:{LIST:e()}}},THEN:{block:{type:"math_arithmetic",fields:{OP:"DIVIDE"},inputs:{A:t("HealthProperty"),B:t("MostHealthProperty")}}},ELSE:{block:{type:"math_number",fields:{NUM:0}}}}}}}}},HEIGHT:b(Oo)}}],Gn=e=>{const t=()=>({block:{type:e,inputs:{ACTOR:E()}}});return{width:Ro,height:Oo,commands:Ws(t,a=>({block:{type:`world_get_Health_${a}`,inputs:{ACTOR:t()}}}))}},Fn=re("Health Bar",[Un,ue("health")],{drawing:Gn("world_get_ActorsHealthBar_SubjectProperty")});function Qh(e){const t=dn(e),o={id:"sample-1",type:"sample",position:{x:0,y:0}};return{...t,nodes:[o],edges:[H({node:pn,port:me},{node:o.id,port:"texture"}),H({node:_o,port:me},{node:o.id,port:"uv"}),H({node:o.id,port:"color"},{node:un,port:me})]}}function H(e,t){return{id:`${e.node}.${e.port}->${t.node}.${t.port}`,source:e,target:t}}function Jh(e,t){return e.edges.find(o=>o.target.node===t.node&&o.target.port===t.port)}function qh(e,t){const o=new Set(e.nodes.map(r=>r.id));let a=1;for(;o.has(`${t}-${a}`);)a+=1;return`${t}-${a}`}function Xh(e){const t=new Set(e.parameters.map(a=>a.id));let o=1;for(;t.has(`param${o}`);)o+=1;return`param${o}`}function zh(e,t){return{...e,nodes:[...e.nodes,t]}}function Zh(e,t){return cn(t)?e:{...e,nodes:e.nodes.filter(o=>o.id!==t),edges:e.edges.filter(o=>o.source.node!==t&&o.target.node!==t)}}function ep(e,t,o){return{...e,nodes:e.nodes.map(a=>a.id===t?{...a,...o}:a)}}function tp(e,t,o,a){return Ls(e,t,{[o]:a})}function op(e,t,o){const a=o?.trim();return{...e,nodes:e.nodes.map(r=>{if(r.id!==t)return r;if(!a){const{note:h,...p}=r;return p}return{...r,note:o}})}}function Ls(e,t,o){return{...e,nodes:e.nodes.map(a=>a.id===t?{...a,params:{...a.params,...o}}:a)}}function Us(e,t,o){const a=ss(t);return a!==null?e.parameters.some(r=>r.id===a):cn(t)?o&&is.includes(t):e.nodes.some(r=>r.id===t)}function Gs(e,t,o,a,r={}){if(t.length===0)return e;const h=new Set(e.nodes.map(k=>k.id)),p=new Map,f=t.map(k=>{let B=1;for(;h.has(`${k.type}-${B}`);)B+=1;const D=`${k.type}-${B}`;return h.add(D),p.set(k.id,D),{...k,id:D,position:{x:k.position.x+a.x,y:k.position.y+a.y},params:k.params?{...k.params}:void 0}}),w=o.flatMap(k=>{const B=p.get(k.target.node);if(!B)return[];const D=p.get(k.source.node),ae=D?{node:D,port:k.source.port}:k.source;return!D&&!Us(e,ae.node,r.stockInputsAvailable??!0)?[]:[H(ae,{node:B,port:k.target.port})]});return{...e,nodes:[...e.nodes,...f],edges:[...e.edges,...w]}}function ap(e,t,o,a={}){const r=new Set(t),h=e.nodes.filter(f=>r.has(f.id)),p=e.edges.filter(f=>r.has(f.target.node));return Gs(e,h,p,o,a)}function np(e,t,o){const a=e.edges.filter(r=>r.target.node!==o.node||r.target.port!==o.port);return{...e,edges:[...a,H(t,o)]}}function rp(e,t){return{...e,edges:e.edges.filter(o=>o.id!==t)}}function sp(e,t){return{...e,parameters:[...e.parameters,t]}}function ip(e,t){const o=hn(t);return{...e,parameters:e.parameters.filter(a=>a.id!==t),edges:e.edges.filter(a=>a.source.node!==o)}}function lp(e,t){return e.functions.find(o=>o.id===t)}function dp(e){const t=new Set(e.functions.map(a=>a.id));let o=1;for(;t.has(`fn${o}`);)o+=1;return`fn${o}`}function cp(e,t,o){return{...e,functions:[...e.functions,{id:t,name:o,outputType:"float",parameters:[],nodes:[],edges:[]}]}}function hp(e,t,o){return{...e,functions:e.functions.map(a=>a.id===t?{...a,...o}:a)}}function pp(e,t){const o=ls(t),a=r=>{const h=new Set(r.nodes.filter(p=>p.type===o).map(p=>p.id));return h.size===0?r:{...r,nodes:r.nodes.filter(p=>!h.has(p.id)),edges:r.edges.filter(p=>!h.has(p.source.node)&&!h.has(p.target.node))}};return a({...e,functions:e.functions.filter(r=>r.id!==t).map(a)})}function up(e,t,o){return t===null?{...e,...o(e)}:{...e,functions:e.functions.map(a=>a.id===t?{...a,...o(a)}:a)}}function wp(e,t,o){return{...e,parameters:e.parameters.map(a=>a.id===t?{...a,...o}:a)}}const Hn=Dr([Ae(),Ce(Ae())]),Fs=Re({x:Ae(),y:Ae()}),ra=Re({node:V().min(1),port:V().min(1),swizzle:V().regex(/^[xyzw]{1,4}$/).optional()}),Vn=Re({id:V().min(1),type:V().min(1),position:Fs,params:Lr(V(),Hn).optional(),note:V().optional(),size:Re({width:Ae().positive(),height:Ae().positive()}).optional(),inspected:Wr().optional()}),Yn=Re({id:V().min(1),source:ra,target:ra}),jn=Re({id:V().min(1),name:V().min(1),type:an(["float","int","bool","vec2","vec3","vec4"]),defaultValue:Hn,min:Ae().optional(),max:Ae().optional(),description:V().optional()}),Hs=Re({id:V().min(1),name:V().min(1),description:V().optional(),outputType:an(["float","vec2","vec3","vec4"]),parameters:Ce(jn),nodes:Ce(Vn),edges:Ce(Yn)}),Vs=Re({version:Ae().int().positive(),name:V(),description:V().optional(),parameters:Ce(jn),functions:Ce(Hs),nodes:Ce(Vn),edges:Ce(Yn),testTexture:V().optional()});class qt extends Error{issues;constructor(t,o=[]){super(t),this.name="EffectParseError",this.issues=o}}function yp(e){let t;try{t=JSON.parse(e)}catch(a){throw new qt(`Effect file is not valid JSON: ${a.message}`)}const o=Vs.safeParse(t);if(!o.success){const a=o.error.issues.map(r=>`${r.path.join(".")||"(root)"}: ${r.message}`);throw new qt("Effect file is not a valid document",a)}if(o.data.version>oa)throw new qt(`Effect file version ${o.data.version} is newer than this editor supports (${oa})`);return o.data}function Ys(e){return`${JSON.stringify(e,null,2)}
`}const js={...dn("Ripple"),description:"Waves the picture sideways, like a flag in the wind.",testTexture:"checker",parameters:[{id:"strength",name:"strength",type:"float",defaultValue:.02,min:0,max:.1,description:"How far the ripple pushes each pixel sideways."}],nodes:[{id:"comment-1",type:"comment",position:{x:300,y:-40},size:{width:265,height:210},note:["This effect makes a picture ripple, like a flag in the wind.","The trick: we never change any colors. We change WHERE we look for them. Each row of the picture gets nudged a little bit sideways, and rows near each other get nudged by different amounts.","Follow the wires downward and read the note on each step."].join(`

`)},{id:"split-1",type:"split",position:{x:-160,y:0},note:"Every spot on the picture has two numbers: how far across (X) and how far down (Y). We only want Y."},{id:"multiply-1",type:"multiply",position:{x:-160,y:120},params:{b:14},note:"Multiplying by 14 fits 14 waves down the picture instead of one. Try a smaller number for bigger, lazier waves."},{id:"add-1",type:"add",position:{x:-160,y:240},note:"Adding the clock makes the whole pattern slide as time passes. This is what turns a still wave into a moving one."},{id:"sine-1",type:"sine",position:{x:-160,y:360},note:"Sine takes a number that keeps counting up and turns it into a smooth back-and-forth, between -1 and 1. That wobble is the wave."},{id:"multiply-2",type:"multiply",position:{x:-160,y:470},note:"Shrinks the wave down to a tiny nudge. The strength knob at the top decides how tiny — a big nudge would smear the picture."},{id:"combine2-1",type:"combine2",position:{x:40,y:470},params:{y:0},note:"Turns the nudge into a direction. Y is 0, so the picture only ever moves sideways, never up or down."},{id:"add-2",type:"add",position:{x:40,y:600},note:"Adds the nudge to where we started, so we end up pointing at a spot just beside the original one."},{id:"sample-1",type:"sample",position:{x:40,y:720},note:"Reads the color at that shifted spot. Because every row shifts by a different amount, the picture comes out wavy."}],edges:[H({node:_o,port:me},{node:"split-1",port:"in"}),H({node:"split-1",port:"y"},{node:"multiply-1",port:"a"}),H({node:"multiply-1",port:"out"},{node:"add-1",port:"a"}),H({node:ds,port:me},{node:"add-1",port:"b"}),H({node:"add-1",port:"out"},{node:"sine-1",port:"x"}),H({node:"sine-1",port:"out"},{node:"multiply-2",port:"a"}),H({node:hn("strength"),port:me},{node:"multiply-2",port:"b"}),H({node:"multiply-2",port:"out"},{node:"combine2-1",port:"x"}),H({node:_o,port:me},{node:"add-2",port:"a"}),H({node:"combine2-1",port:"out"},{node:"add-2",port:"b"}),H({node:pn,port:me},{node:"sample-1",port:"texture"}),H({node:"add-2",port:"out"},{node:"sample-1",port:"uv"}),H({node:"sample-1",port:"color"},{node:un,port:me})]},gp="worlds/main.world",$s=(e,t)=>t?{...e,next:{block:t}}:e,y=e=>e.reduceRight((t,o)=>$s(o,t)),c=e=>({type:"world_use_trait",fields:{TRAIT:e}}),Xt=e=>({type:"world_set_Writing_TextProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:e}}}),$n=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:y(t)}}]}},null,2),sa=(e,t,o,a)=>({type:`world_on_${e}`,x:t,y:o,next:{block:{type:"world_log",fields:{TEXT:a}}}}),de=(e,t,o,a)=>({type:e,id:t,properties:{positional:{position:{x:o,y:a}}}}),W=e=>e*L+L/2,ia=(e,t,o)=>o.map(a=>de("actors/ground",`${e}${a}`,W(a),W(t))),la=(e,t,o)=>o.map(a=>de("actors/ground",`${e}${a}`,W(t),W(a))),Ks=[0,1,2,3,4,5,6,7,8,9],da=[0,1,2,3,4,5,6,7,8],Kn=[de("actors/player","Player",W(2),W(4)),...ia("Floor",9,Ks),...la("WallLeft",0,da),...la("WallRight",9,da),...ia("Platform",6,[5,6,7]),de("actors/coin","Coin1",W(4),W(8)),de("actors/coin","Coin2",W(8),W(8)),de("actors/coin","Coin3",W(6),W(3)),de("actors/ball","Ball",W(3),W(2)),de("actors/crawler","Crawler",W(6),W(8)),{...de("actors/healthBar","HealthBar",W(7),W(0)),properties:{positional:{position:{x:W(7),y:W(0)}},Health_Bar:{subject:"Player"}}},de("actors/scoreboard","Scoreboard",W(2),W(0))],Qs=JSON.stringify({type:"map",size:{width:aa,height:aa},tile:{width:L,height:L},actors:Kn},null,2),Js=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Platform World"},next:{block:y([{type:"world_load_map",fields:{MAP:"maps/level1"}},{type:"world_set_Scoring_TargetScoreProperty",inputs:{VALUE:{block:{type:"math_number",fields:{NUM:30}}}}}])}}]}},null,2),qs=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Player"},next:{block:y([c("Gravity#AffectedByGravityTrait"),c("Health#HasHealthTrait"),c("Jumping#JumpsTrait"),c("Arrow Keys#MovesAcrossTrait"),c("Input#TakesKeyboardInputTrait"),c("Collection#CollectsTrait"),{type:"world_play_animation",fields:{ANIMATION:"playerBob"}}])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"space"},x:20,y:440,next:{block:{type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:{block:{type:"world_this_actor"}}}}}},sa("Gravity_StartsFallingEvent",20,200,"Player started falling"),{type:"world_on_Health_RunsOutOfHealthEvent",x:20,y:560,next:{block:{type:"world_set_Writing_TextProperty",inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/scoreboard"}}},VALUE:{block:{type:"text",fields:{TEXT:"GAME OVER"}}}}}}},sa("Gravity_StopsFallingEvent",20,320,"Player landed!"),{type:"world_on_Collection_CollectsEvent",x:20,y:620,next:{block:{type:"world_do_Scoring_AddToTheScoreAction",inputs:{VALUE:{block:{type:"math_number",fields:{NUM:10}}}},next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:"actors/coin"},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}}}}}}}}}}]}},null,2),Xs=Ln,zs=Dn,xt=96,Nt=24,Zs=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Scoreboard"},next:{block:y([c("Writing#ShowsTextTrait"),c("Scoring#WatchesTheScoreTrait"),ue("text"),Xt({type:"text",fields:{TEXT:"SCORE 0"}})])}},{type:"world_define_drawing",x:20,y:140,fields:{WIDTH:xt,HEIGHT:Nt},inputs:{DO:{block:y([F(ce("TextColorProperty")),He(xt/2,Nt/2)])}}},{type:"world_on_Scoring_SeesTheScoreChangeEvent",x:20,y:200,next:{block:Xt({type:"text_join",extraState:{itemCount:2},inputs:{ADD0:{block:{type:"text",fields:{TEXT:"SCORE "}}},ADD1:{block:{type:"world_get_Scoring_ScoreProperty"}}}})}},{type:"world_on_Scoring_SeesTheGameWonEvent",x:20,y:320,next:{block:Xt({type:"text",fields:{TEXT:"YOU WIN"}})}}]}},null,2),ei=$n("Crawler",[c("Patrol#PatrolsAcrossTrait"),c("Health#DealsDamageTrait"),{type:"world_set_sprite",fields:{SPRITE:"crawler.png"}}]),ti=$n("Ball",[{type:"world_play_animation",fields:{ANIMATION:"pulse"}}]),oi=JSON.stringify({type:"animation",animations:{pulse:{frameRate:6,frames:[{sprite:"ball.png",scale:.7},{sprite:"ball.png",scale:1},{sprite:"ball.png",scale:1.3},{sprite:"ball.png",scale:1}]},playerBob:{frameRate:7,frames:[{sprite:"player.png",scale:1},{sprite:"player.png",scale:1.25},{sprite:"player.png",scale:1},{sprite:"player.png",scale:.8}]}}},null,2);function X(e){const t=new Map(e.folders.map((h,p)=>[h,String(p+1)])),o=new Map(Object.keys(e.files).map((h,p)=>[h,String(p+1)])),a={};for(const[h,p]of t)a[p]={id:p,name:h,parentId:Yt};const r={};for(const[h,p]of Object.entries(e.files)){const f=t.get(p.folderId);if(!f)throw new Error(`starter file “${h}” is in “${p.folderId}”, which is not a starter folder`);r[o.get(h)]={...p,id:o.get(h),folderId:f}}return{source:{files:r,folders:a,openFiles:e.open.map(h=>{const p=o.get(h);if(!p)throw new Error(`starter opens “${h}”, which is not a starter file`);return p})},ids:o}}function be(e){const t={};for(const o of e){const a=Fo.find(r=>r.id===o);if(a&&(t[`sprite-${o}`]={name:ht(o),language:"png",contents:"",folderId:"sprites",url:a.dataUrl,mimeType:"image/png"},a.sheet)){const r=Uo(ht(o));t[`sheet-${o}`]={name:r,language:"json",contents:Go(a.sheet),folderId:"sprites"}}}return t}function ai(e){const t=e.flatMap(o=>jt.find(a=>a.id===o)?.sprites??[]);return Object.assign({},be(t),...e.map(o=>Qn(o)))}function Qn(e){const t=jt.find(o=>o.id===e);return t?{[`anim-${e}`]:{name:`${e}.anim`,language:"anim",contents:`${JSON.stringify({name:t.name,...t.document},null,2)}
`,folderId:"animations"}}:{}}const Yo={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:Js,folderId:"worlds",active:!0,open:!0},player:{name:"player.actor",language:"actor",contents:qs,folderId:"actors"},ground:{name:"ground.actor",language:"actor",contents:Xs,folderId:"actors"},coin:{name:"coin.actor",language:"actor",contents:zs,folderId:"actors"},healthBar:{name:"healthBar.actor",language:"actor",contents:Fn,folderId:"actors"},crawler:{name:"crawler.actor",language:"actor",contents:ei,folderId:"actors"},scoreboard:{name:"scoreboard.actor",language:"actor",contents:Zs,folderId:"actors"},ball:{name:"ball.actor",language:"actor",contents:ti,folderId:"actors"},gameAnimations:{name:"game.anim",language:"anim",contents:oi,folderId:"animations"},level1:{name:"level1.map",language:"map",contents:Qs,folderId:"maps"},jumpRule:{name:"jump.rule",language:"rule",contents:sn,folderId:"rules"},gravityRule:{name:"gravity.rule",language:"rule",contents:Do,folderId:"rules"},arrowsRule:{name:"arrows.rule",language:"rule",contents:Mo,folderId:"rules"},inputRule:{name:"input.rule",language:"rule",contents:Ge,folderId:"rules"},motionRule:{name:"motion.rule",language:"rule",contents:wt,folderId:"rules"},collisionsRule:{name:"collisions.rule",language:"rule",contents:ut,folderId:"rules"},solidRule:{name:"solid.rule",language:"rule",contents:Vt,folderId:"rules"},healthRule:{name:"health.rule",language:"rule",contents:rn,folderId:"rules"},patrolRule:{name:"patrol.rule",language:"rule",contents:Ur,folderId:"rules"},scoreRule:{name:"score.rule",language:"rule",contents:nn,folderId:"rules"},writingRule:{name:"writing.rule",language:"rule",contents:Ht,folderId:"rules"},collectRule:{name:"collect.rule",language:"rule",contents:Ft,folderId:"rules"},rippleEffect:{name:"ripple.effect",language:"effect",contents:Ys(js),folderId:"effects"},...be(["player","ground","coin","ball","crawler","coinSpin"]),...Qn("coinSpin")},open:["main"]},ni=X(Yo),ri={source:ni.source},mp={SPLIT:"split",CODE:"code",PREVIEW:"preview"},fe="rules";function si(e){const t=Object.values(e.folders).find(r=>r.name===fe&&r.parentId==="0");if(t)return{source:e,folderId:t.id};const o=Lo(e,fe),a=Object.values(o.folders).find(r=>r.name===fe&&r.parentId==="0");return{source:o,folderId:a?.id??"0"}}function fp(e){const t=[],o=new Set([e.id]),a=r=>{for(const h of Jn(r))o.has(h.id)||(o.add(h.id),a(h),t.push(h))};return a(e),t}function ca(e,t){const o=t.slice(`${fe}/`.length),a=Object.values(e.folders).find(r=>r.name===fe&&r.parentId==="0");return!!a&&Object.values(e.files).some(r=>r.folderId===a.id&&r.name.replace(/\.[^.]+$/,"")===o)}function Jn(e){return(Pn(`${fe}/${e.id}`,e.contents)?.requires??[]).map(o=>ln(o)).filter(o=>o!==void 0)}function ii(e,t){const o=t.slice(`${fe}/`.length),a=Object.values(e.files).find(r=>r.name===`${o}.rule`);return a?Pn(t,a.contents)?.name:void 0}function ha(e,t,o,a){const r=Je(Object.values(e.files));return{...e,files:{...e.files,[r]:{id:r,name:`${o}.rule`,language:"rule",contents:a.contents,folderId:t}}}}function qn(e,t){const o=si(e);let a=o.source;const r=o.folderId,h=(w,k)=>{for(const B of Jn(w)){const D=`${fe}/${B.id}`;k.has(B.id)||ca(a,D)||(k.add(B.id),h(B,k),a=ha(a,r,B.id,B))}};h(t,new Set([t.id]));const p=`${fe}/${t.id}`,f=ca(a,p)?a:ha(a,r,t.id,t);return{source:f,path:p,name:ii(f,p)??t.name}}const dt="actors";function li(e){const t=Object.values(e.folders).find(r=>r.name===dt&&r.parentId==="0");if(t)return{source:e,folderId:t.id};const o=Lo(e,dt),a=Object.values(o.folders).find(r=>r.name===dt&&r.parentId==="0");return{source:o,folderId:a?.id??"0"}}function di(e){return e.requires.map(t=>ln(t)).filter(t=>t!==void 0)}function ci(e){return(e.animations??[]).map(t=>jt.find(o=>o.id===t)).filter(t=>t!==void 0)}function hi(e){return(e.sprites??[]).map(t=>Fo.find(o=>o.id===t)).filter(t=>t!==void 0)}function pi(e,t){const o=Object.values(e.folders).find(a=>a.name===dt&&a.parentId==="0");return!!o&&Object.values(e.files).some(a=>a.folderId===o.id&&a.name.replace(/\.[^.]+$/,"")===t)}function ui(e,t){let o=e;for(const p of di(t))o=qn(o,p).source;for(const p of hi(t))o=Vo(o,p).source;for(const p of ci(t))o=vn(o,p).source;const a=li(o);o=a.source;const r=`${dt}/${t.id}`;if(pi(o,t.id))return{source:o,path:r};const h=Je(Object.values(o.files));return{source:{...o,files:{...o.files,[h]:{id:h,name:`${t.id}.actor`,language:"actor",contents:t.contents,folderId:a.folderId}}},path:r}}const zt=96,Zt=32,wi=re("Button",[n("Writing#ShowsTextTrait"),n("Mouse#CanBeClickedTrait"),ue("button"),U("TextProperty",Y("Button"))],{drawing:{width:zt,height:Zt,commands:[F(K("#3050a0")),xn(K("#ffffff"),2),Fe(0,0,zt,Zt),Nn(),F(ce("TextColorProperty")),He(zt/2,Zt/2)]}}),pa=96,ua=24,Xn=re("Label",[n("Writing#ShowsTextTrait"),ue("text"),U("TextProperty",Y("Label"))],{drawing:{width:pa,height:ua,commands:[F(ce("TextColorProperty")),He(pa/2,ua/2)]}}),zn="playerWalk",yi={type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:{block:{type:"world_this_actor"}}}},gi=re("Platformer Player",[n("Jumping#JumpsTrait"),n("Arrow Keys#MovesAcrossTrait"),n("Input#TakesKeyboardInputTrait"),Bn(zn)],{handlers:[xs("space",[yi])]}),Zn="player",mi=e=>({type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:b(e)}}),er=re("Portrait",[d(`${Zn}.png`),mi(0)]),eo=64,to=8,oo=e=>({block:{type:`world_get_Progress_${e}`,inputs:{ACTOR:E()}}}),Ot=()=>({width:eo,height:to,commands:[F(oo("TrackColorProperty")),Fe(0,0,eo,to),F(oo("BarColorProperty")),{type:"world_draw_rectangle",inputs:{X:b(0),Y:b(0),WIDTH:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:b(eo),B:oo("FractionProperty")}}},HEIGHT:b(to)}}]}),fi=re("Progress Bar",[n("Progress#ShowsProgressTrait"),ue("bar")],{drawing:Ot()}),ao=280,wa=96,no=12,tr=re("Speech Box",[n("Writing#ShowsTextTrait"),ue("speech"),U("TextAnchorProperty",Y("top left")),U("TextProperty",Y("Once upon a time…"))],{drawing:{width:ao,height:wa,commands:[F(K("#101828")),xn(K("#ffffff"),2),Fe(0,0,ao,wa),Nn(),F(ce("TextColorProperty")),Ns(no,no,ao-no*2)]}}),Ai=[{id:"label",name:"Label",description:"A word on the screen. Give it text, a size, a color and an anchor, and it draws them — the smallest way for a game to say anything to the player.",requires:["Writing"],contents:Xn},{id:"progressBar",name:"Progress Bar",description:"A bar that fills up. Set its fraction between 0 and 1 and it draws that much of itself — health, a loading bar, how close a boss is to waking. Attach it to an actor to have it ride above one.",requires:["Progress"],contents:fi},{id:"healthBar",name:"Health Bar",description:"A bar that fills itself in. Point it at an actor with “subject” and it shows how much health that actor has left. Put it in the corner for a HUD, or add “Attached” to have it ride above the actor it is about.",requires:["Health"],contents:Fn},{id:"button",name:"Button",description:"A label you can press. It raises “is clicked with” on itself, so a handler needs no hit test of its own.",requires:["Writing","Mouse"],contents:wi},{id:"speechBox",name:"Speech Box",description:"A panel with room for a sentence — what a line of dialogue is read from. Give it the “Reveals Text” ability and it types itself out.",requires:["Writing"],contents:tr},{id:"portrait",name:"Portrait",description:"The face of whoever is speaking. It starts invisible, so a scene fades it in when its turn comes and out again when it passes.",requires:[],sprites:[Zn],contents:er},{id:"coin",name:"Coin",description:"A spinning coin that can be picked up. It knows nothing about points — who may collect it, and what that is worth, are the game’s to say.",requires:["Collection"],animations:[Mn],contents:Dn},{id:"player",name:"Platformer Player",description:"Somebody to be in a side-view game. Walks left and right with the arrow keys, jumps with the space bar, and falls when there is nothing under it — which is why it comes with a Ground.",requires:["Jumping","Arrow Keys","Input"],animations:[zn],contents:gi},{id:"ground",name:"Ground",description:"A tile that holds things up and cannot be walked through. The other half of the Platformer Player — gravity with nothing to land on is a long fall.",requires:["Gravity","Solid Bodies"],sprites:[Wn],contents:Ln}],bi=e=>Ai.find(t=>t.id===e),$t=e=>`lesson-${e.replace(/\//g,"-")}`,Ap=(e,t)=>{for(const o of t)if($t(o)===e)return o},ki=e=>`/app/projects/world/${$t(e.id)}/edit`;let or=ki;const bp=e=>{or=e},kp=e=>or(e),Ti=["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],g=e=>{const t={main:{name:"main.world",language:"world",contents:e.world,folderId:"worlds",active:!0,open:!0}};for(const[a,r]of Object.entries(e.actors??{}))t[a]={name:`${a}.actor`,language:"actor",contents:r,folderId:"actors"};for(const[a,r]of Object.entries(e.maps??{}))t[a]={name:`${a}.map`,language:"map",contents:r,folderId:"maps"};for(const[a,r]of Object.entries(e.ruleFiles??{}))t[a]={name:`${a}.rule`,language:"rule",contents:r,folderId:"rules"};let o=X({folders:[...Ti],files:t,open:["main"]}).source;for(const a of e.rules??[])o=qn(o,mt(Gr(a),"rule",a)).source;for(const a of e.stockActors??[])o=ui(o,mt(bi(a),"actor",a)).source;for(const a of e.sprites??[])o=Vo(o,mt(kn(a),"sprite",a)).source;for(const a of e.animations??[])o=vn(o,mt(ks(a),"animation",a)).source;return o},mt=(e,t,o)=>{if(!e)throw new Error(`no stock ${t} called “${o}”`);return e},l=(e,t)=>({type:"world_set_position",inputs:{ACTOR:E(),X:b(e),Y:b(t)}}),i=(e,t)=>({type:"world_add_actor",fields:{ACTOR:e},...t.length?{inputs:{DO:{block:ee(t)}}}:{}}),s=e=>`local:${e}`,pe=e=>({block:{type:"world_actor_kind",fields:{ACTOR:s(e)}}}),_i=e=>({type:"world_define_drawing",fields:{WIDTH:e.width,HEIGHT:e.height},inputs:{DO:{block:ee(e.commands)}}}),ct=e=>{if(Array.isArray(e))return e.reduce((a,r)=>a+ct(r),0);if(typeof e!="object"||e===null)return 0;const t=e,o=Object.entries(t.inputs??{}).filter(([a])=>a==="DO").reduce((a,[,r])=>a+ct(r.block),0);return 1+(o?o+.7:0)+ct(t.next?.block)},vi=40,Ci=60,ya=(e,t)=>e+t*vi+Ci,Ei=({id:e,name:t,rows:o,drawing:a})=>({type:"world_actor",id:e,fields:{NAME:t},next:{block:ee([...o,...a?[_i(a)]:[]])}}),qe=(e,t,o)=>({type:"world_rule_property",fields:{TYPE:e,ACCESS:"writable",NAME:t,DEFAULT:o}}),m=({name:e,tiles:t,rows:o,actors:a,handlers:r})=>{const h=[...t?[{type:"world_set_map_size",inputs:{X:b(t[0]),Y:b(t[1])}}]:[],...o],p=h.length?ee(h):void 0,f={type:"world_world",x:20,y:20,fields:{NAME:e},...p?{next:{block:p}}:{}};let w=ya(20,ct(f));const k=[...(a??[]).map(Ei),...r??[]].map(B=>{const D={...B,x:20,y:w};return w=ya(w,ct(B)),D});return JSON.stringify({blocks:{blocks:[f,...k]}},null,2)},Ri={name:"First light",description:"A world with one actor in it, and a Run button.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(160,160)])],actors:[{id:"hero",name:"Hero",rows:[d("player.png")]}]}),sprites:["player"]}),instructions:`
## A world with something in it

Press **Run**. There is a world, and there is one thing in it.

Two blocks say all of it. **define world** is the world, and what is listed
under it is what gets put in it. **define actor ⟨Hero⟩** says what a Hero *is* —
here, one picture and nothing else.

Read them in that order and you have read the whole project.

### What you do

1. Add a **second** \`define actor\`, and give it a name of its own.
2. Give it a picture with **set sprite**.
3. **add actor** it to the world, somewhere the Hero is not.
`.trim()},Oi={name:"Make it go",description:"A player that ignores you, and the trait that changes that.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(160,160)])],actors:[{id:"hero",name:"Hero",rows:[d("player.png")]}]}),sprites:["player"],rules:["arrows"]}),instructions:`
## Make it go

Press the arrow keys. Nothing happens — the Hero does not know about them.

This project holds the **Arrow Keys** rule. A rule a project holds does nothing
by itself: an actor has to *elect* what it offers. (The count on \`define world\`
says how many rules are in play; click it to see them.)

### What you do

1. Add **use trait ⟨Moves Across⟩** under \`define actor ⟨Hero⟩\`.
2. Run it. Left and right work; up and down do not.
3. Add **Moves Down** as well, and now it walks in every direction — which is
   what a top-down game wants and a platformer does not.
4. Find the speed the trait gave the Hero, and change it.
`.trim()},Si={name:"Speed is not a place",description:"Moving by hand every frame, and the rule that replaces it.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(40,160)])],actors:[{id:"hero",name:"Hero",rows:[d("player.png"),{type:"world_trait_step",fields:{PHASE:"move",NAME:"shuffle right"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:{block:{type:"world_this_actor"}}}}},B:b(2)}}},Y:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"y"},inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}}}}}}]}]}),sprites:["player"],rules:["motion"]}),instructions:`
## Speed is not a place

The Hero crosses the screen, and it does it the way everybody writes first:
**every frame, put it two pixels further right**. Read the \`each frame\` under
\`define actor ⟨Hero⟩\`, which is the whole of how it does it.

That works, and it is not how things move. It ties the speed to the frame rate,
it cannot be pushed, and nothing else can affect it.

### What you do

1. Add **use trait ⟨Can Move⟩** to the Hero — that is the Physics rule.
2. Set its **speed** once, when the world starts.
3. **Delete the whole \`each frame\` handler.** It should still cross the screen.

Nothing is moving it now. It has a speed, and having a speed is what moving is.
`.trim()},Ii={name:"Down",description:"A thing in the air, some ground, and nothing pulling.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(160,40)]),i(s("ground"),[l(160,272)])],actors:[{id:"hero",name:"Hero",rows:[d("player.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]}]}),sprites:["player","ground"],rules:["gravity"]}),instructions:`
## Down

The Hero is in the air and stays there. The **Gravity** rule is in this project
— the count on \`define world\` says so — and nothing has elected it.

### What you do

1. Give the Hero **use trait ⟨Affected by Gravity⟩**. Run it: it falls, and it
   keeps falling, straight through the floor.
2. Give the Ground **use trait ⟨Acts as Ground⟩**. Now it lands.
3. Add a **when ⟨Hero⟩ stops falling** handler and print something, so you can
   see the moment happen.
4. Click the **eye** on \`use trait ⟨Affected by Gravity⟩\` to open the rule
   itself, and find the number that says how hard it pulls. Change it and run
   again — it is your copy.
`.trim()},Pi={levelData:{showFileBrowser:!0},name:"A picture is a file",description:"An actor drawing a grey box, and the picture it could have.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(160,160)])],actors:[{id:"hero",name:"Hero",rows:[],drawing:{width:24,height:24,commands:[F(K("#8d8d99")),Fe(0,0,24,24)]}}]})}),instructions:`
## A picture is a file

The Hero is a grey box because that is what \`define actor ⟨Hero⟩\` says to
draw. Nothing in this lab is built in: a picture is a **file** the project
holds, and until it holds one there is nothing to draw but shapes.

This is the first lesson with a file browser down the left, and that is the
lesson: the pictures are files like everything else, so they are in the list
like everything else.

### What you do

1. Add **set sprite** to the Hero, and use the \`(import…)\` row on its dropdown
   to bring a picture in. Look at \`sprites/\` on the left afterwards — it is
   really there, and it is yours, not a link to the library's.
2. Run it. The sprite wins; the drawing underneath is what an actor does when it
   has no picture.
3. Open the picture you imported and **paint on it**. It is yours now — the copy
   in the library is untouched.
`.trim()},ga=e=>({type:"world_set_Progress_FractionProperty",inputs:{ACTOR:E(),VALUE:b(e)}}),ma=e=>({type:"world_draw_rectangle",inputs:{X:b(0),Y:b(0),WIDTH:e,HEIGHT:b(12)}}),Bi={name:"Draw it yourself",description:"Two progress bars that are both full, and one of them should not be.",source:g({world:m({name:"My World",rows:[i(s("bar"),[l(160,110),ga(1)]),i(s("bar"),[l(160,210),ga(.35)])],actors:[{id:"bar",name:"Bar",rows:[n("Progress#ShowsProgressTrait")],drawing:{width:96,height:12,commands:[F(K("#3d3d47")),ma(b(96)),F(K("#4caf50")),ma(b(96))]}}]}),rules:["progress"]}),instructions:`
## Draw it yourself

Two Bars. One is set to **1** and one to **0.35**, and both are drawn full,
because the green rectangle is 96 wide — a number somebody typed.

An actor with no picture paints itself. \`define drawing\` is a pen and a few
shapes, and it is what every meter, bar and box in this lab is made of. It runs
**for each actor of that kind**, so anything it reads off the actor is that
actor's own.

### What you do

1. Find the second **draw rectangle** — the green one — under
   \`define actor ⟨Bar⟩\`.
2. Put **96 × ⟨fraction of ⟨this actor⟩⟩** in its **size** where the 96 is.
3. Run it. One Bar is full and one is a third full, from one drawing.
4. Change the track colour, or add an outline. It is your picture.
`.trim()},xi={name:"Behind everything",description:"A world on a flat colour, and the picture that belongs behind it.",source:g({world:m({name:"My World",rows:[{type:"world_set_background_color",inputs:{COLOR:K("#7ec8e3")}},i(s("hero"),[l(160,200)])],actors:[{id:"hero",name:"Hero",rows:[d("player.png")]}]}),sprites:["player"]}),instructions:`
## Behind everything

A flat blue sky, and a Hero standing on nothing. The blue is the world's
**background colour** — one colour behind everything, which is what a world
draws when nobody has given it a picture.

A **backdrop** is that picture. It is not an actor: it has no position, nothing
can touch it, and no rule can reach it. It is what is behind the game.

### What you do

1. Add **set background to ⟨…⟩**, and use the \`(import…)\` row on its dropdown
   to bring a backdrop in from the library.
2. Run it. It is stretched to fill the view — one copy, whatever shape it is.
3. Add **draw background ⟨tiled⟩**. Now it repeats instead of stretching, which
   is what a picture of grass or bricks wants.
4. Add **slide background to ⟨x 40 y 0⟩** and run it again. The backdrop moved
   and the Hero did not: they are not in the same world at all.
`.trim()},Ni={name:"Pictures in a row",description:"A Hero that slides along without ever moving its legs.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(160,160)])],actors:[{id:"hero",name:"Hero",rows:[n("Arrow Keys#MovesAcrossTrait"),d("player.png")]}]}),sprites:["player"],rules:["arrows"]}),instructions:`
## Pictures in a row

Walk the Hero left and right. It slides: the picture never changes, because a
sprite is one picture and that is all it can be.

An **animation** is a file too, and what is in it is not pictures — it is a
list of RECTANGLES cut out of one image, and how long to hold each one. The
image is a strip of frames; the animation says which part is which frame.

### What you do

1. Add **play animation ⟨…⟩ on ⟨this actor⟩** under \`define actor ⟨Hero⟩\`, and
   use the \`(import…)\` row on its dropdown to bring a walk cycle in.
2. Run it. The legs move.
3. Open the animation and look at the frames — the image is one picture with
   the walk laid out across it, and the file is where each frame's rectangle
   is written down.
4. Change how long a frame is held, and run it again.
`.trim()},Mi={name:"An effect is a recipe",description:"A world drawn plainly, and the filters that change how it is painted.",source:g({world:m({name:"My World",rows:[{type:"world_set_background_color",inputs:{COLOR:K("#1b2530")}},i(s("hero"),[l(120,160)]),i(s("coin"),[l(220,160)])],actors:[{id:"hero",name:"Hero",rows:[d("player.png")]},{id:"coin",name:"Coin",rows:[d("coin.png")]}]}),sprites:["player","coin"]}),instructions:`
## An effect is a recipe

A Hero and a Coin, drawn exactly as their pictures are.

An **effect** is not a picture and not an actor: it is a description of how to
paint one — the same picture, put through a recipe. It is a file like everything
else, and the same file can be played on one actor, on a whole layer, or over
the entire view.

### What you do

1. Add **add effect ⟨…⟩ to ⟨this actor⟩** in \`define actor ⟨Coin⟩\`, and use the
   \`(import…)\` row to bring one in from the library.
2. Run it. The Coin is painted through the recipe and the Hero is not — one
   effect, on one actor.
3. Now add **add effect ⟨…⟩ to the world**. Everything goes through it, the
   backdrop included, because that one is over the whole view rather than on
   anything in it.
4. The effect's numbers are knobs on the block. Turn one and run it again.
`.trim()},Di={name:"x and y",description:"Three markers in a heap, and three places to put them.",source:g({world:m({name:"My World",rows:[i(s("marker"),[l(160,160)]),i(s("marker"),[l(160,160)]),i(s("marker"),[l(160,160)])],actors:[{id:"marker",name:"Marker",rows:[d("post.png")]}]}),sprites:["post"]}),instructions:`
## x and y

Three Markers, all in the same place, so it looks like one. A position is two
numbers: **x** across, and **y** DOWN — which is the one that catches everybody,
because a bigger \`y\` is further down the screen, not further up.

The world is 10 tiles each way, and a tile is 32 pixels: 320 across and 320
down.

### What you do

1. Put one Marker in the **top left** corner, one in the **bottom right**, and
   leave one in the middle.
2. Put a fourth somewhere **random** — there is a block for a whole place at
   once, and it is the one a game actually wants.
`.trim()},Wi={name:"A key is an event",description:"Walking is a key HELD. A jump is a key PRESSED. They are not the same reading.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(160,160)])],actors:[{id:"hero",name:"Hero",rows:[n("Arrow Keys#MovesAcrossTrait"),d("player.png")]}]}),sprites:["player"],rules:["arrows","input"]}),instructions:`
## A key is an event

Hold the left and right arrows. The Hero walks for as long as you hold them —
the trait reads the keys sixty times a second and moves a little each time.

Some things should not work that way. A jump should happen ONCE however long
you lean on the button.

### What you do

1. Give the Hero **use trait ⟨Takes Keyboard Input⟩**. On its own it does
   nothing: it is the Hero electing to be told about keys at all.
2. Add a **when ⟨Hero⟩ hears ⟨space⟩ pressed** handler, and put a **print**
   inside it.
3. Run it and hold space down for a few seconds. One line, not two hundred.
4. Let go and press again. Now there are two.
5. Take the **⟨space⟩** off the hat so it hears every key, and print
   **⟨event value⟩** instead of your word. Each key now says its own name: the
   handler is told WHICH key, and that is what an event carries.
`.trim()},Li={name:"Point and click",description:"A button that does not know it has been pressed, and the trait that tells it.",source:g({world:m({name:"My World",rows:[i(s("target"),[l(160,160)])],actors:[{id:"target",name:"Target",rows:[d("coin.png")]}]}),sprites:["coin"],rules:["mouse"]}),instructions:`
## Point and click

Click the Target. Nothing happens — it does not know the click landed on it,
and it has no way to find out until it says so.

A click is an **event**, like a key going down. What is different is that a
click happens somewhere: the world can say WHICH actor was under the pointer,
so an actor can be told about its own clicks and nobody else's.

### What you do

1. Give the Target **use trait ⟨Can Be Clicked⟩**.
2. Add a **when ⟨Target⟩ is clicked** handler and **print** something in it.
3. Click the Target, then click the empty space beside it. Only one of those
   says anything.

### Where the click was

A click that lands on you is one question. Where the pointer IS is the other,
and it is not an event — it is a block you can ask at any moment.

4. Give the Target **use trait ⟨Takes Mouse Input⟩** as well. Now it hears
   every press, wherever it landed.
5. Add a **when ⟨Target⟩ presses mouse button** handler, and inside it **set
   position of ⟨this actor⟩** — with **x of ⟨mouse position⟩** in the x socket
   and **y of ⟨mouse position⟩** in the y. **mouse position** is in the
   **Mouse** drawer; **x of** is in **Math**.
6. Click the empty space. The Target goes there, and says nothing — the two
   handlers are about two different things: one is being clicked, the other is
   the click.
`.trim()},Ui={name:"Two readings of four keys",description:"The same four keys as a walk, and as a ship. Elect one or the other, never both.",source:g({world:m({name:"My World",rows:[i(s("ship"),[l(160,160)])],actors:[{id:"ship",name:"Ship",rows:[n("Arrow Keys#MovesAcrossTrait"),d("ship.png")]}]}),sprites:["ship"],rules:["arrows","drive","drag"]}),instructions:`
## Two readings of four keys

Left and right walk the Ship sideways. That is one reading of the arrow keys,
and it is the one a platformer wants.

A ship is not a platformer. Left and right should TURN it, and up should push it
the way it is pointing.

### What you do

1. Take **⟨Moves Across⟩** off the Ship and give it **⟨Driven by Arrow Keys⟩**
   instead. Both at once is two rules fighting over the same four keys.
2. Run it. Left and right turn; up thrusts; letting go leaves it coasting,
   because nothing in space slows down.
3. Add **⟨Slows Down⟩** and watch it become a car instead.
`.trim()},Kt=[n("Physics#CanMoveTrait"),d("ball.png")],te=(e,t)=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:e,y:t}}}}}}),gt=(e,t,o)=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:t},inputs:{ACTOR:pe(e)},next:{block:o}}),Gi={name:"A shove",description:'A ball that says "bang" and does not move, and the block that changes that.',source:g({world:m({name:"My World",rows:[i(s("ball"),[l(64,160)])],actors:[{id:"ball",name:"Ball",rows:[n("Physics#CanMoveTrait"),n("Input#TakesKeyboardInputTrait"),d("ball.png")]}],handlers:[gt("ball","space",{type:"world_log",fields:{TEXT:"bang"}})]}),sprites:["ball"],rules:["motion","input"]}),instructions:`
## A shove

Press space. The Ball says **bang** in the console and does not move an inch.

A force does not put a thing somewhere. It changes the thing's SPEED, and the
speed is what puts it somewhere — two steps, and the second one keeps happening
after you have let go.

### What you do

1. In the **when ⟨any Ball⟩ hears space** handler, swap the **print** for
   **apply force**, and give it
   a shove to the right.
2. Press space once. It moves, and it goes on moving: nothing is stopping it.
3. Press space again while it is still going, and watch the shove ADD to the
   speed it already had rather than replacing it.
`.trim()},Fi={name:"Units per second",description:"A ball travelling far too fast, and the arithmetic that fixes it.",source:g({world:m({name:"My World",rows:[i(s("ball"),[l(16,160),te(60,0)])],actors:[{id:"ball",name:"Ball",rows:Kt}]}),sprites:["ball"],rules:["motion"]}),instructions:`
## Units per second

The Ball is gone before you can see it. Its speed says **60**, and 60 is an
enormous number here.

A speed is in **units per second**, and one unit is **100 pixels**. So 60 means
six thousand pixels every second, and this world is only 384 across.

The world is 10 tiles each way, and a tile is 32 pixels: **320 across**.

### What you do

1. Work out the speed that crosses 384 pixels in **two seconds**, in units.
2. Put it in the \`set speed\` block, in the world's \`add actor\`.
3. Run it and count. If it arrives early, the number is too big.
`.trim()},Hi={name:"Coasting to a stop",description:"A ball that drifts forever, and the one trait that makes it a car.",source:g({world:m({name:"My World",rows:[i(s("ball"),[l(24,160),te(2.5,0)])],actors:[{id:"ball",name:"Ball",rows:[n("Physics#CanMoveTrait"),n("Screen Wrap#WrapsAcrossTrait"),d("ball.png")]}]}),sprites:["ball"],rules:["motion","drag","wrap"]}),instructions:`
## Coasting to a stop

The Ball is pushed once at the start and never slows down. It wraps round the
edges and keeps going, at exactly the speed it began with, forever.

That is what having a speed MEANS — nothing takes it away unless something is
written to. In space that is correct. On a road it is not.

### What you do

1. Give the Ball **use trait ⟨Slows Down⟩**.
2. Run it. It coasts to a halt instead of going round for ever.
3. Find the trait's own numbers and make it slippery, then make it sticky.
`.trim()},Vi={name:"A described movement",description:"A door that does not open, and the difference between a place and a journey.",source:g({world:m({name:"My World",rows:[i(s("door"),[l(64,160)]),i(s("post"),[l(256,160)])],actors:[{id:"door",name:"Door",rows:[d("door.png")]},{id:"post",name:"Post",rows:[d("post.png")]}]}),sprites:["door","post"]}),instructions:`
## A described movement

The Door sits where it was put. Setting its position again would put it
somewhere else — instantly, in one frame, which is not what opening looks like.

A **tween** is a movement described: where it should end up, how long it should
take, and how it should ease in or out along the way. Nothing about it happens
until something plays it.

### What you do

1. Under \`define world\`, add **play a tween on ⟨any Door⟩ over 1 second**.
2. Inside its **move** slot, put **set position of ⟨this actor⟩** and give it
   the Post's place. Run it: the Door travels there.
3. Change the curve from **steadily** to **slow at both ends** and watch the
   difference.
4. Now do it the other way. **define tween** at the top of the file describes
   the same journey once, under a name; **play tween** plays it on anything.
   A movement several things share belongs in a definition; a movement one
   thing does belongs where it happens.
`.trim()},Yi=e=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:e},inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}),ji={name:"Asking a question",description:"A ball that leaves the world, and the block that lets it decide not to.",source:g({world:m({name:"My World",rows:[i(s("ball"),[l(24,160),te(1.6,0)])],actors:[{id:"ball",name:"Ball",rows:Kt}]}),sprites:["ball"],rules:["motion"]}),instructions:`
## Asking a question

The Ball rolls right and keeps going, out of the world and away. It has no way
to notice where it is, because nothing has asked.

An **if** is a question with two answers, and a program that does one thing or
the other. The question here is "am I past the middle?" — the middle of a world
10 tiles across is 160.

### What you do

1. Give the Ball an **each frame** handler.
2. Inside it, put an **if**, and ask whether **⟨get position x of this actor⟩**
   is greater than **160**.
3. When it is, **set its speed to 0**. The Ball rolls to the middle and waits
   there.
`.trim()},$i={name:"Touching is a question",description:"A ball that rolls straight through a wall, and the trait that stops it.",source:g({world:m({name:"My World",rows:[i(s("ball"),[l(24,160),te(1.6,0)]),i(s("wall"),[l(272,160)])],actors:[{id:"ball",name:"Ball",rows:[n("Physics#CanMoveTrait"),n("Collisions#CanCollideTrait"),d("ball.png")]},{id:"wall",name:"Wall",rows:[d("ground.png")]}]}),sprites:["ball","ground"],rules:["motion","collisions","solid"]}),instructions:`
## Touching is a question

The Ball rolls through the Wall as though it were not there. It is not there, as
far as the Ball is concerned: the Ball knows it can collide, and the Wall has
not said it is anything to collide WITH.

Touching is a question the world works out for you, once a tick, for everything
that said it wanted to be asked. What to DO about it is a separate matter, and
"stop" is one of the answers a rule already has.

### What you do

1. Give the Wall **use trait ⟨Solid⟩**. Run it: the Ball stops dead against it.
2. Add a **when ⟨Ball⟩ starts touching** handler and print something, so you can
   see the moment rather than only its consequence.
3. Take the Ball's **⟨Can Collide⟩** off and watch it sail through again. Both
   sides have to agree before there is a collision at all.
`.trim()},Ki={name:"Two questions at once",description:"Two balls, one condition, and the difference between AND and OR.",source:g({world:m({name:"My World",rows:[i(s("ball"),[l(24,64),te(1.6,0)]),i(s("ball"),[l(24,240),te(1.6,0)])],actors:[{id:"ball",name:"Ball",rows:[...Kt,{type:"world_trait_step",fields:{PHASE:"decide",NAME:"stop in the middle"},inputs:{DO:{block:{type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"GT"},inputs:{A:Yi("x"),B:{shadow:{type:"math_number",fields:{NUM:192}}}}}},DO0:{block:{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:0}}}}}}}}}}}}]}]}),sprites:["ball"],rules:["motion"]}),instructions:`
## Two questions at once

Two Balls, one high and one low, and one rule between them: stop past the
middle. Both stop, because the only thing being asked is how far across they
are.

Say you want only the LOW one to stop — past the middle **and** below the
halfway line. That is two questions, and the answer is yes only when both are.

The world is 320 pixels down, so halfway down is 160.

### What you do

1. Find the **if**, in the \`each frame\` under \`define actor ⟨Ball⟩\`.
2. Wrap its question in an **and**, and add a second question: is
   **⟨get position y of this actor⟩** greater than **160**?
3. Run it. The low Ball stops in the middle; the high one carries on and leaves.
4. Change the **and** to an **or** and watch both stop again — which is the
   thing to be able to tell apart.
`.trim()},Qi=(e,t)=>({type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:""},inputs:{ACTOR:pe(e)},next:{block:t}}),Ji={name:"What a thing is",description:"One handler, two kinds of thing, and no way yet to tell them apart.",source:g({world:m({name:"My World",rows:[i(s("ball"),[l(24,160),te(1.6,0)]),i(s("coin"),[l(120,160)]),i(s("spike"),[l(230,160)])],actors:[{id:"ball",name:"Ball",rows:[n("Physics#CanMoveTrait"),n("Collisions#CanCollideTrait"),d("ball.png")]},{id:"coin",name:"Coin",rows:[n("Collisions#CanCollideTrait"),d("coin.png")]},{id:"spike",name:"Spike",rows:[n("Collisions#CanCollideTrait"),d("spike.png")]}],handlers:[Qi("ball",{type:"world_log",fields:{TEXT:"I touched something"}})]}),sprites:["ball","coin","spike"],rules:["motion","collisions"]}),instructions:`
## What a thing is

The Ball rolls past a Coin and a Spike and says the same thing about both:
**I touched something**. Which is true, and useless — a coin is worth having and
a spike is not.

The handler is told WHICH actor it touched. What it has no way to say yet is
what sort of thing that actor is, and that is a question you can ask at any
moment: **⟨event actor⟩ is a ⟨Coin⟩**.

### What you do

1. Find the **when ⟨any Ball⟩ starts touching**
   handler. The **event actor** block inside it is the thing that was touched.
2. Wrap the print in an **if**, and ask whether the event actor **is a Coin**.
   Say something about coins there.
3. Add a second **if** for the Spike, and say something else.
4. Note what you did NOT do: two handlers. One handler that asks is a handler
   that works for a third kind you add later; two handlers is a third handler
   waiting to be written.
`.trim()},G=(e,t,o)=>({id:e,properties:{positional:{position:{x:t,y:o}}}}),x=(e,t)=>({type:"world_create_in_map",fields:{ACTOR:e,PLACEMENTS:t}}),qi={name:"A room drawn, not typed",description:"A floor made of twenty blocks, and the grid that replaces them.",source:g({world:m({name:"My World",rows:[i(s("hero"),[l(48,240)]),x(s("ground"),[G("floor0",16,304),G("floor1",48,304),G("floor2",80,304)])],actors:[{id:"hero",name:"Hero",rows:[d("player.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]}]}),sprites:["player","ground"]}),instructions:`
## A room drawn, not typed

Three floor tiles, and then nothing. You could add the rest with \`add actor\`,
one block each, all the same — and the day you want the floor a tile lower you
would edit twenty of them.

**create ⟨Ground⟩ in map** is one block that places as many as you like. What
it holds is not code: it is an ARRANGEMENT — a list of places, painted on a
grid, kept with the block. The kind says what a Ground *is*, once; the
arrangement says where they are.

### What you do

1. Click the grid on the **create ⟨Ground⟩ in map** block. The map editor opens.
2. Paint a floor along the bottom of the room, and walls up both sides.
3. Run it. Every tile you painted is a Ground, and there is still one block.
4. Paint some more, and run it again. You never touched \`define actor ⟨Ground⟩\`
   — what a Ground is and where the Grounds are are two different questions.
`.trim()},oe=e=>Array.from({length:e},(t,o)=>G(`floor${o}`,o*32+16,304)),Xi={name:"A window on a bigger world",description:"A room three screens wide, and a view that only ever shows the first.",source:g({world:m({name:"My World",tiles:[30,10],rows:[x(s("ground"),oe(30)),i(s("hero"),[l(48,272),te(6,0)])],actors:[{id:"hero",name:"Hero",rows:[n("Physics#CanMoveTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]}]}),sprites:["player","ground"],rules:["motion","camera","cameraFollow","cameraConfined"]}),instructions:`
## A window on a bigger world

The Hero walks off the right of the screen and is gone. It has not stopped
existing: the room is **three screens wide**, and the view is showing the first
of them and nothing else.

Where things ARE and what is DRAWN are two different questions. A **camera** is
the answer to the second one, and until now every world has had the default
one, sitting still.

### What you do

1. Add **define camera ⟨Chase⟩** at the end of the world, with
   **use trait ⟨Follows⟩** in it, and
   **set actor to follow of ⟨this camera⟩ to ⟨any Hero⟩**.
2. Add **look through camera ⟨Chase⟩** under it, and run. The view goes with
   the Hero — off the end of the room, showing nothing.
3. Add **use trait ⟨Confined to the Map⟩** to the camera. The view stops where
   the room stops, and the Hero walks on out of shot.
4. The camera is defined AFTER the actors, and it has to be: it is told to
   follow \`any ⟨Hero⟩\`, and reading that before there is a Hero is a view
   that never moves and never says why.
`.trim()},jo=(e,t=[])=>({type:"world_define_camera",id:"chase",fields:{NAME:"Chase"},inputs:{DO:{block:ee([n("Camera Follow#FollowsTrait"),n("Camera Confined#ConfinedToTheMapTrait"),...t,{type:"world_set_CameraFollow_ActorToFollowProperty",inputs:{ACTOR:{block:{type:"world_this_camera"}},VALUE:pe(e)}}])}}}),zi={name:"Correct, and pleasant",description:"A camera that is right, welded to the player, and slightly horrible.",source:g({world:m({name:"My World",tiles:[30,10],rows:[x(s("ground"),oe(30)),i(s("hero"),[l(160,272)]),jo("hero"),{type:"world_use_camera",fields:{CAMERA:"camera:chase"}}],actors:[{id:"hero",name:"Hero",rows:[n("Arrow Keys#MovesAcrossTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]}]}),sprites:["player","ground"],rules:["arrows","camera","cameraFollow","cameraConfined","cameraEase","cameraDeadzone"]}),instructions:`
## Correct, and pleasant

Walk left and right. The camera follows, it stops at the walls, and it is
**correct** — every frame the view is exactly where the Hero is.

Which is why it feels the way it does. The world lurches with every step, and
a small nudge shakes the whole screen. Nothing here is a bug; the camera is
doing precisely what it was told.

Two traits change how it FEELS, and neither changes where it ends up.

### What you do

1. Add **use trait ⟨Eases⟩** to the camera and
   **set smoothness of ⟨this camera⟩ to ⟨0.25⟩**. The view now catches up over
   a few frames instead of arriving with you.
2. Add **use trait ⟨Has a Deadzone⟩** and
   **set slack of ⟨this camera⟩ to x ⟨64⟩ y ⟨32⟩**. Small movements no longer
   move the view at all — you walk about inside the box, and only leaving it
   pulls the camera along.
3. Turn the smoothness up until it feels like treacle, then back. There is no
   right number, which is the point: this is the part you tune by playing.
`.trim()},Zi={name:"What is in front",description:"A score that scrolls away with the scenery, and the hills that do not lag.",source:g({world:m({name:"My World",tiles:[30,10],rows:[x(s("ground"),oe(30)),i(s("hill"),[l(80,272)]),i(s("hill"),[l(400,272)]),i(s("hill"),[l(720,272)]),i(s("score"),[l(60,30),U("TextProperty",Y("SCORE 0"))]),i(s("hero"),[l(160,272)]),jo("hero"),{type:"world_use_camera",fields:{CAMERA:"camera:chase"}}],actors:[{id:"hero",name:"Hero",rows:[n("Arrow Keys#MovesAcrossTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]},{id:"hill",name:"Hill",rows:[d("hill.png")]},{id:"score",name:"Score",rows:[n("Writing#ShowsTextTrait"),ue("text")],drawing:{width:96,height:24,commands:[F(K("#f2f2f7")),He(48,12)]}}]}),sprites:["player","ground","hill"],rules:["arrows","writing","camera","cameraFollow","cameraConfined"]}),instructions:`
## What is in front

Walk right. The score goes with the scenery and off the side of the screen,
because it is a thing in the world like the hills and the floor — and nothing
has ever said otherwise.

A **layer** is a declared group with a drawing order and its own relationship
to the camera. Everything so far has been in one layer, which is why everything
so far has moved together.

### What you do

1. Add **define layer ⟨Interface⟩** at the end of the world, put
   **this layer ⟨is fixed to the screen⟩** in it, and move the Score's
   \`add actor\` inside it. Now it stays where it is drawn, whatever the camera
   does.
2. Add **define layer ⟨Hills⟩** BEFORE the others — declaration order is
   drawing order, so it is behind them — and move the three Hills into it.
3. Put **this layer moves ⟨0.4, 1⟩ with the camera** in it. The hills now drift
   slower than the floor, which is what makes them look far away.
`.trim()},el={name:"Up, properly",description:"A jump written by hand, which works in mid-air and works forever.",source:g({world:m({name:"My World",rows:[x(s("ground"),oe(10)),i(s("hero"),[l(160,272)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Input#TakesKeyboardInputTrait"),n("Arrow Keys#MovesAcrossTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),d("ground.png")]}],handlers:[gt("hero","space",{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-5}}}}}})]}),sprites:["player","ground"],rules:["gravity","input","arrows","motion","jump"]}),instructions:`
## Up

Press space. The Hero jumps, and it is a jump in the sense that it goes up:
**when ⟨any Hero⟩ presses ⟨space⟩ → set velocity to ⟨0, -5⟩**. Hold space and
you fly. Press it falling down a hole and you climb back out.

Nothing there knows what a jump IS — that it starts from the ground, that you
get one, that walking off a ledge and pressing a frame later should still
count. That is what the **Jumping** rule holds.

### What you do

1. Give the Hero **use trait ⟨Jumps⟩**, and swap the \`set velocity\` in the
   handler for **make ⟨this actor⟩ jump**.
2. Run it. It jumps once, from the ground, and pressing again in the air does
   nothing — asking is separate from jumping, and the answer is sometimes no.
3. Walk off the edge of the floor and press space a moment later. It still
   jumps: that grace is **coyote time**, and it is the difference between a
   platformer that feels fair and one that does not.
4. Set **jumps allowed** to 2. Now there is a second jump, in the air, and
   still not a third.
5. Add a ledge above the Hero with **use trait ⟨Acts as Ground⟩** and nothing
   else, and jump into it from underneath. You go straight through, and then
   you land on top of it coming down — because landing is about the direction
   you are going, and rising is not landing. That is a **one-way platform**,
   and it is what the Ground under your feet would be if it were not **Solid**
   as well.
`.trim()},tl={name:"A ledge out of reach",description:"A jump that clears three tiles, and a ledge six tiles up.",source:g({world:m({name:"My World",rows:[x(s("ground"),[...oe(10),...[6,7,8,9].map(e=>G(`ledge${e}`,e*32+16,112))]),i(s("hero"),[l(48,272)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Input#TakesKeyboardInputTrait"),n("Arrow Keys#MovesAcrossTrait"),n("Jumping#JumpsTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("ground.png")]}],handlers:[gt("hero","space",{type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:E()}})]}),sprites:["player","ground"],rules:["gravity","solid","input","arrows","motion","jump","jetpack"]}),instructions:`
## Held, not pressed

Press space and the Hero jumps. Hold space and it jumps once, because a press
is a moment: the handler runs when the key goes DOWN and never again while it
is held. The ledge is six tiles up and no jump in the lab reaches it.

A jetpack is the other shape. It is a **force**, applied for as long as the
jetpack is on, and it fights gravity rather than beating it once — so the Hero
sinks for a moment, then hangs, then climbs, and keeps climbing after you
switch it off.

Which is why it is a **switch** rather than something you ask for. The thrust
has to happen every frame, and the keyboard only offers you two moments —
**presses** and **releases**. Those two moments are the two blocks; the frames
in between are the rule's business.

### What you do

1. Give the Hero **use trait ⟨Flies with a Jetpack⟩**.
2. Leave the jump where it is and add **start ⟨this actor⟩ flying** under it,
   on the same press. Then handle
   **when ⟨any Hero⟩ releases ⟨space⟩ → stop ⟨this actor⟩ flying**.
3. Run it and hold space. Watch the first half-second: nothing much happens,
   because 18 of thrust against 9 of gravity is a net 9, and it takes a moment
   to turn a fall around. Then it climbs, and the ledge is reachable.
4. Let go halfway up. It keeps rising for a moment and then falls — which is
   what an acceleration does and a set speed does not.
5. Hold it down and watch **fuel**. Four seconds and the tank is empty, the
   jetpack switches itself off and says so twice: **runs out of fuel**, and
   then **stops flying**, the same thing letting go would have said.
6. Now hold space again with the tank empty. The jump still answers, because
   **start ⟨…⟩ flying** does nothing at all when there is no fuel — it does not
   queue up and fire on the next pickup. One key, two answers, and you did not
   have to write the question: the rule refusing is what leaves the press free.
`.trim()},ol={name:"A ladder that is not one yet",description:"A ledge, a ladder up to it, and a Hero that walks straight through both.",source:g({world:m({name:"My World",rows:[x(s("ground"),oe(10)),x(s("ledge"),[4,5,6,7,8,9].map(e=>G(`ledge${e}`,e*32+16,144))),x(s("ladder"),[272,240,208,176,144,112].map((e,t)=>G(`rung${t}`,144,e))),i(s("hero"),[l(144,272)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Input#TakesKeyboardInputTrait"),n("Arrow Keys#MovesAcrossTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("ground.png")]},{id:"ledge",name:"Ledge",rows:[n("Gravity#ActsAsGroundTrait"),d("ground.png")]},{id:"ladder",name:"Ladder",rows:[d("ladder.png")]}]}),sprites:["player","ground","ladder"],rules:["gravity","solid","input","arrows","motion","climb"]}),instructions:`
## Climbing down

The Hero is standing at the foot of a ladder, and the ladder is a picture.
Nothing in the world knows what a ladder looks like.

Getting UP is the easy half, and you have most of it already: the ledge above
is a bare **Acts as Ground** tile, which is a one-way platform — you rise
through it and land on top of it, because landing asks which way you were
going and rising is not landing.

Getting back DOWN through it is the half with no answer. An actor resting on a
surface is re-landed on it *every frame*, so whatever moves it downwards, the
next frame puts it back. That is what **Climbs Ladders** is for.

### What you do

1. Give the Ladder **use trait ⟨Can Be Climbed⟩**. That is the whole of a
   ladder — it has no speed and no opinion about who climbs it.
2. Give the Hero **use trait ⟨Climbs with Arrow Keys⟩**. Up and down now
   climb, and only while it is touching a ladder: walk off the ladder and
   press up, and nothing happens.
3. Hold up. Past the top rung the climb ends by itself and the Hero drops on
   to the ledge — stepping off the top is not a separate block.
4. Now hold **down**. You go back through the ledge, which is the thing that
   could not be written before. Try the same on the floor and you stop, because
   the floor is **Solid** as well and solid is a different question.
5. The switch doing the work is **ignores ground**, and it belongs to *Gravity*
   rather than to this rule. On its own it is what "hold down to drop through
   the platform" would be built from.
6. Take **Climbs with Arrow Keys** off the Hero and give it plain **Climbs**
   instead. Nothing happens on any key — which is the point of the split: a
   robot that takes ladders has no keyboard, and the control scheme is a trait
   you elect rather than something the mechanic assumes.
`.trim()},al={name:"A floor is a floor is a floor",description:"A belt, some ice and some sludge, drawn as three things and behaving as one.",source:g({world:m({name:"My World",rows:[x(s("ground"),[...[0,1].map(e=>G(`floor${e}`,e*32+16,304)),...[9].map(e=>G(`floor${e}`,e*32+16,304))]),x(s("belt"),[2,3,4].map(e=>G(`belt${e}`,e*32+16,304))),x(s("sludge"),[5,6].map(e=>G(`sludge${e}`,e*32+16,304))),x(s("ice"),[7,8].map(e=>G(`ice${e}`,e*32+16,304))),i(s("hero"),[l(16,272)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Input#TakesKeyboardInputTrait"),n("Arrow Keys#MovesAcrossTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("ground.png")]},{id:"belt",name:"Belt",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("conveyor.png")]},{id:"sludge",name:"Sludge",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("sludge.png")]},{id:"ice",name:"Ice",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("ice.png")]}]}),sprites:["player","ground","conveyor","ice","sludge"],rules:["gravity","solid","input","arrows","motion","surfaces"]}),instructions:`
## Floors with opinions

Walk right. You cross a belt, some sludge and some ice, and all three feel
exactly like the brown floor either side of them — because they *are* it. Three
pictures, three actors, one behaviour.

**Surfaces** is what makes a floor do something to whoever stands on it. Three
things a tile can be, and one thing a walker is.

### What you do

1. Give the Hero **use trait ⟨Stands on Surfaces⟩**. Nothing changes yet: it
   is the thing that listens, and no floor is saying anything.
2. Give the Belt **use trait ⟨Conveys⟩**. Now walk on to it and stop. You are
   carried. Walk *into* it and you still make headway, slowly, because a belt
   ADDS to what you asked for rather than deciding for you.
3. Give the Sludge **use trait ⟨Slows⟩**. Two fifths of the speed you asked
   for — a multiplier, so it drags what you were doing instead of replacing it.
4. Give the Ice **use trait ⟨Slippery⟩**. Step on it moving and try to turn
   round. You cannot: ice keeps the speed you arrived with, because "you
   cannot stop or change direction" is a statement about a speed you are no
   longer choosing.
5. Jump while you are on the ice. That still works, and it is the only control
   you have left up there — none of the three touches the vertical speed.
6. Set the Belt's **belt speed** to a negative number and walk on to it again.
   One number, and the belt runs the other way.
`.trim()},nl={name:"A ball that does not roll",description:"A corridor with walls at both ends, and a steel ball sitting in it.",source:g({world:m({name:"My World",tiles:[14,10],rows:[x(s("ground"),[...oe(14),...[208,240,272].flatMap(e=>[G(`left${e}`,16,e),G(`right${e}`,432,e)])]),i(s("ball"),[l(160,272)]),i(s("hero"),[l(64,272)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Input#TakesKeyboardInputTrait"),n("Arrow Keys#MovesAcrossTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("ground.png")]},{id:"ball",name:"Ball",rows:[n("Gravity#AffectedByGravityTrait"),d("pinball.png")]}]}),sprites:["player","ground","pinball","rocket"],rules:["gravity","solid","input","arrows","motion","patrol","turning"]}),instructions:`
## Something that turns

The Ball falls to the floor and sits there. It is a hazard that has never gone
anywhere.

You have met one way to make something move on its own — **Walks Back and
Forth**, which turns on a *clock*: a speed and a period. That is right for a
guard on a fixed beat and wrong for anything that should respect the shape of
the room it is in. Put a patrolling actor in a corridor half as long as its
beat and it spends half its life pressed against the end.

**Turns When It Hits Something** turns on the *world* instead.

### What you do

1. Give the Ball **use trait ⟨Turns When It Hits Something⟩**. It rolls to
   the wall and comes back, and it comes back at the same place every time,
   because the wall is what turned it.
2. Watch where it turns. Now change **travel speed** and watch again: it
   turns in the same two places, because neither of them is a time.
3. Now take **⟨Affected by Gravity⟩** off it and set **turn by** to 90. It
   flies instead of rolling, and at the wall it takes the corner rather than
   coming back. The same trait; one number.
4. That is a rocket. Give it the Rocket picture and aim it with **heading** —
   0 is right and 90 is down, the compass every other block here uses.
5. The rule never asks what is in front of it. It asks whether it *got* where
   it asked to go, which is one subtraction and is true of every way of being
   stopped — a wall, a body pushed apart, another actor.
`.trim()},rl={name:"A robot that cannot get up",description:"Two floors, a ladder at one end, and a robot at the other.",source:g({world:m({name:"My World",rows:[x(s("ground"),[...oe(10),...[2,3,4,5,6,7,8,9].map(e=>G(`upper${e}`,e*32+16,144)),...[176,208,240,272].flatMap(e=>[G(`west${e}`,16,e),G(`east${e}`,304,e)])]),x(s("ladder"),[144,176,208,240,272].map((e,t)=>G(`rung${t}`,48,e))),i(s("robot"),[l(256,240)]),i(s("hero"),[l(256,112)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Input#TakesKeyboardInputTrait"),n("Arrow Keys#MovesAcrossTrait"),n("Climbing#ClimbsWithArrowKeysTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),d("ground.png")]},{id:"ladder",name:"Ladder",rows:[n("Climbing#CanBeClimbedTrait"),n("Gravity#ActsAsGroundTrait"),d("ladder.png")]},{id:"robot",name:"Robot",rows:[n("Gravity#AffectedByGravityTrait"),n("Solid Bodies#SolidTrait"),n("Climbing#ClimbsTrait"),n("Boundaries#StaysAcrossTrait"),n("Steering#ChasesTrait"),d("robot.png"),{type:"world_trait_step",fields:{PHASE:"sense",NAME:"know who to chase"},inputs:{DO:{block:{type:"world_set_Steering_ActorToChaseProperty",inputs:{ACTOR:E(),VALUE:{block:{type:"world_first_actor",inputs:{SOURCE:pe("hero")}}}}}}}}]}]}),sprites:["player","ground","ladder","robot"],rules:["gravity","solid","input","arrows","motion","bounds","climb","steering","prowling"]}),instructions:`
## An enemy that thinks

The Robot is on the lower floor and you are on the upper one, and it is
already after you: it elects **⟨Chases⟩**, which reads where you are every
frame and points itself at you.

Run it. It comes straight at you — and stops dead against the underside of the
floor you are standing on, and stays there, for ever. A chaser points itself
at where you are and nothing else; in an open field that is the whole of
pursuit, and in a room it is a machine pressed against a ceiling.

### What you do

1. Take **⟨Chases⟩** off the Robot and give it **use trait ⟨Prowls⟩**
   instead, then swap **set actor to chase** for **set actor to hunt** in the
   step below it — the same answer to a different question.
   That step is where it is for a reason worth knowing: **any ⟨Hero⟩** has to
   be read once there IS a Hero, and the rows beside the traits run before
   anything has been put in the world.
2. Watch it. It goes the way it is going and reconsiders only where
   reconsidering is possible — when it lands, when it reaches the ladder, when
   a climb ends, and when it stops getting anywhere.
3. It takes the ladder. Not because it knows about ladders: it elects
   **⟨Climbs⟩**, the same trait you do, so what a robot can climb is exactly
   what you can.
4. Stand still on the upper floor and watch it arrive. Then move to the other
   side while it is climbing — it will not turn round until it gets somewhere,
   which is what makes it something you can plan around.
5. Set **close enough** to 0 and stand almost exactly above it. It shakes:
   "the same x as me" is a thing that is almost never true and almost always
   nearly true, and that number is what stops it mattering.
6. It also has **⟨Stays Across⟩**, and that is worth looking at. Nothing in
   **Prowls** has ever heard of a map — but the edge stops the Robot, and a
   Robot that got nowhere is one of its four moments to think. So it turns
   round at the edge, out of two rules that know nothing about each other.
`.trim()},sl={name:"Things worth having",description:"Three coins a Hero walks straight through.",source:g({world:m({name:"My World",rows:[x(s("ground"),oe(10)),i(s("coin"),[l(100,272)]),i(s("coin"),[l(180,272)]),i(s("coin"),[l(260,272)]),i(s("hero"),[l(30,272),te(3,0)])],actors:[{id:"hero",name:"Hero",rows:[n("Physics#CanMoveTrait"),n("Collisions#CanCollideTrait"),d("player.png")]},{id:"coin",name:"Coin",rows:[n("Collisions#CanCollideTrait"),d("coin.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]}]}),sprites:["player","coin","ground"],rules:["motion","collisions","collect"]}),instructions:`
## Things worth having

The Hero walks along the floor and straight through three Coins. They touch —
the Collisions rule says so — and touching is all that happens.

Taking a thing is TWO abilities, not one, and that is what makes it work for
any pair of actors: something that **Collects**, and something that **Can Be
Collected**. Neither knows about the other.

### What you do

1. Give the Hero **use trait ⟨Collects⟩** and each Coin
   **use trait ⟨Can Be Collected⟩**.
2. Run it. Each Coin vanishes as the Hero reaches it — taken out of the world,
   and into the Hero's \`collected\`.
3. Add **when ⟨any Hero⟩ collects** and **print ⟨count of ⟨Coin⟩ in ⟨collected
   of ⟨this actor⟩⟩⟩**, so you can watch it go up.
4. Nothing you wrote says what a Coin is worth, or what a Hero does with one.
   Both of those are the project's, and this is the moment they hang from.
`.trim()},il={name:"Something that can hurt you",description:"A Hero walking into a spike, and a spike that does not mind.",source:g({world:m({name:"My World",rows:[x(s("ground"),oe(10)),i(s("spike"),[l(200,272)]),i(s("hero"),[l(60,272)])],actors:[{id:"hero",name:"Hero",rows:[n("Arrow Keys#MovesAcrossTrait"),n("Collisions#CanCollideTrait"),n("Solid Bodies#SolidTrait"),d("player.png")]},{id:"spike",name:"Spike",rows:[n("Collisions#CanCollideTrait"),n("Solid Bodies#SolidTrait"),d("spike.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]}]}),sprites:["player","spike","ground"],rules:["arrows","motion","collisions","solid","health"]}),instructions:`
## Something that can hurt you

Walk the Hero into the Spike. It stops, and that is all: nothing here has said
that a Spike is dangerous, or that a Hero is the sort of thing that can be
damaged.

Those are the two halves, and they are separate on purpose. **Has Health** says
what can be damaged. **Deals Damage** says what damages. Neither names the
other, which is why the same Spike damages anything and the same Hero is
damaged by anything.

### What you do

1. Give the Hero **use trait ⟨Has Health⟩** and the Spike
   **use trait ⟨Deals Damage⟩**.
2. Add **when ⟨any Hero⟩ is damaged → print ⟨health of ⟨this actor⟩⟩**, and
   walk into the Spike. One line. Lean on it as long as you like: still one
   line, because being damaged happens when the touch STARTS.
3. Back off and walk in again. A second one — unless you were quick, and then
   nothing, because of **mercy time**: half a second in which the Hero cannot
   be damaged again. Set it to 2 and try to take two.
4. Give the Spike **use trait ⟨Patrols Across⟩**. Now it walks about damaging
   whatever it meets, and nothing about it mentions the Hero.
`.trim()},ll={name:"A level",description:"Everything from the last four lessons in one world, and nothing to reach.",source:g({world:m({name:"My World",tiles:[20,10],rows:[qe("boolean","won","false"),x(s("ground"),oe(20)),i(s("coin"),[l(150,272)]),i(s("coin"),[l(250,272)]),i(s("spike"),[l(360,272)]),i(s("flag"),[l(560,272)]),i(s("hero"),[l(40,272),{type:"world_set_ArrowKeys_AcrossSpeedProperty",inputs:{ACTOR:E(),VALUE:b(6)}}]),jo("hero"),{type:"world_use_camera",fields:{CAMERA:"camera:chase"}}],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Arrow Keys#MovesAcrossTrait"),n("Collisions#CanCollideTrait"),n("Collection#CollectsTrait"),n("Health#HasHealthTrait"),n("Boundaries#StaysAcrossTrait"),d("player.png")]},{id:"coin",name:"Coin",rows:[n("Collisions#CanCollideTrait"),n("Collection#CanBeCollectedTrait"),d("coin.png")]},{id:"spike",name:"Spike",rows:[n("Collisions#CanCollideTrait"),n("Health#DealsDamageTrait"),d("spike.png")]},{id:"flag",name:"Flag",rows:[n("Collisions#CanCollideTrait"),d("flag.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),d("ground.png")]}]}),sprites:["player","coin","spike","flag","ground"],rules:["gravity","arrows","collisions","solid","collect","health","bounds","camera","cameraFollow","cameraConfined"]}),instructions:`
## A level

A room two screens wide with a floor, a camera that follows, two coins to take,
a Spike that damages, and a Flag at the far end. Every piece of it is a lesson you
have already done.

Walk to the Flag. Nothing happens — and nothing should, because a Flag is an
actor like the Coins and the Spike, and nothing has said what reaching it
MEANS.

That is the last thing a level needs: a **state** that says which part of the
game you are in. It belongs to the world rather than to the Hero or the Flag,
because it is not a fact about either of them.

### What you do

1. At the top of \`main.world\` there is **define boolean won with default
   false**, and nothing sets it.
2. Add **when ⟨any Hero⟩ starts touching**, and inside it ask
   **if ⟨event actor⟩ is a ⟨Flag⟩** — the same question the Ball asked about
   Coins and Spikes.
3. Set **won** to true in there, and print something.
4. Run it and walk the whole level. Take the coins: nothing. Walk into the
   Spike: nothing but damage. Reach the Flag: won.
5. Add **when ⟨any Hero⟩ runs out of health → print ⟨"game over"⟩**. A level
   has two ends
   now, and the world knows which one it reached.
`.trim()},Xe=()=>{const e=(o,a)=>G(`wall${o}_${a}`,o*32+16,a*32+16),t=[];for(let o=0;o<10;o++)t.push(e(o,0),e(o,9));for(let o=1;o<9;o++)t.push(e(0,o),e(9,o));return t},dl={name:"Off the wall",description:"A ball in a box that stops the moment it arrives at one.",source:g({world:m({name:"My World",rows:[x(s("wall"),Xe()),i(s("ball"),[l(160,160),te(4,3)])],actors:[{id:"ball",name:"Ball",rows:[n("Physics#CanMoveTrait"),n("Collisions#CanCollideTrait"),n("Solid Bodies#SolidTrait"),d("ball.png")]},{id:"wall",name:"Wall",rows:[n("Collisions#CanCollideTrait"),n("Solid Bodies#SolidTrait"),d("ground.png")]}]}),sprites:["ball","ground"],rules:["motion","collisions","solid"]}),instructions:`
## Off the wall

The Ball crosses the room, reaches a Wall, and stops. Solid Bodies did its job
— a moving body cannot end up inside a solid one — and stopping is what
"pushed apart" comes to when nothing has said otherwise.

What a collision does to a SPEED is a property of the surface, not a thing the
Ball decides. **Bounciness** is how much of the speed into a wall comes back
out of it: 0 keeps none, 1 keeps all of it.

### What you do

1. Add **set bounciness of ⟨any Wall⟩ to ⟨0.5⟩** at the top of the world. Run
   it: the Ball comes off the wall at half the speed, and each bounce is
   smaller than the last.
2. Turn it up until the Ball never slows down. There is exactly one value that
   does that, and it is the one that gives all the speed back.
3. Try 1.2 and watch it get faster every time it touches anything. Nothing
   stops you; a wall that returns more than it was given is a perfectly good
   thing to build a game out of.
`.trim()},cl=()=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:E()}}}),hl={name:"A thing you steer",description:"A paddle kept on screen by hand, with half of it hanging off.",source:g({world:m({name:"My World",rows:[i(s("paddle"),[l(160,280)])],actors:[{id:"paddle",name:"Paddle",rows:[n("Arrow Keys#MovesAcrossTrait"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"keep it on screen"},inputs:{DO:{block:{type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"LT"},inputs:{A:cl(),B:b(0)}}},DO0:{block:{type:"world_set_position",inputs:{ACTOR:E(),X:b(0),Y:b(280)}}}}}}}}],drawing:{width:96,height:16,commands:[F(K("#5b8def")),Fe(0,0,96,16)]}}]}),rules:["arrows","bounds"]}),instructions:`
## A thing you steer

Hold the left arrow. The Paddle stops — and it stops with half of itself off
the side of the screen, because what was kept on screen is its POSITION, and a
position is a point in the middle of a thing that is ninety-six wide.

You could fix that by hand: subtract half the width, and remember to change the
number if the Paddle ever changes size. Or you could say what you actually mean.

### What you do

1. Delete the whole \`each frame\` handler. The Paddle now walks off the screen
   entirely, which is honest.
2. Give it **use trait ⟨Stays Across⟩**. Hold left again: it stops with its
   EDGE against the side, and nothing anywhere says 48.
3. Make the drawing wider and run it again. It still stops at the edge — the
   rule reads the size the Paddle actually is.
`.trim()},pl=()=>i(s("ball"),[l(160,240),{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:E(),VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-8}}}}}}]),ul={name:"An energy ball is spawned",description:"A ship that zaps sixty times a second and never tidies up.",source:g({world:m({name:"My World",rows:[i(s("ship"),[l(160,280)])],actors:[{id:"ship",name:"Ship",rows:[n("Input#TakesKeyboardInputTrait"),d("ship.png")]},{id:"ball",name:"Energy Ball",rows:[n("Physics#CanMoveTrait"),d("energyBall.png")]}],handlers:[gt("ship","space",pl())]}),sprites:["ship","energyBall"],rules:["input","motion","zaps","expires"]}),instructions:`
## An energy ball is spawned

Hit space a few times. Each press adds an Energy Ball to the world, and each
one flies up out of the view and keeps going — forever, because nothing ever
takes one away. Hit the key fast and you get a ball per press, as fast as you
can manage.

Two halves are missing, and the second is the one everybody forgets.
**Zapping** holds a recharge time, so asking to zap is sometimes answered no.
**Expires** gives an actor a lifetime, so a thing that is made can also stop.

### What you do

1. Give the Ship **use trait ⟨Zaps⟩**, and change the press handler to
   **make ⟨this actor⟩ zap**.
2. Add **when ⟨any Ship⟩ zaps**, and move the \`add actor ⟨Energy Ball⟩\` into
   it. Hit the key fast now: one ball every quarter second however quickly you
   press, because that is the recharge time and the answer to the rest was no.
3. Give the Energy Ball **use trait ⟨Expires⟩** and **set lifetime of ⟨this
   actor⟩ to ⟨1⟩**. Zap for a while and then stop: the world empties itself.
4. Set the recharge time to a tenth and zap again. More balls, and still a
   count rather than a stream.
`.trim()},wl={name:"Many, and then none",description:"Three bricks that go one at a time, and a game that never ends.",source:g({world:m({name:"My World",rows:[qe("boolean","cleared","false"),i(s("brick"),[l(120,160)]),i(s("brick"),[l(200,160)]),i(s("brick"),[l(280,160)]),i(s("ball"),[l(30,160),te(4,0)])],actors:[{id:"ball",name:"Ball",rows:[n("Physics#CanMoveTrait"),n("Collisions#CanCollideTrait"),d("ball.png")]},{id:"brick",name:"Brick",rows:[n("Collisions#CanCollideTrait"),d("box.png")]}],handlers:[{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:""},inputs:{ACTOR:pe("ball")},next:{block:{type:"world_remove_actor",inputs:{ACTOR:{block:{type:"world_event_actor"}}}}}}]}),sprites:["ball","box"],rules:["motion","collisions"]}),instructions:`
## Many, and then none

The Ball rolls through the Bricks and each one goes as it is touched. Three
bricks, three hits, and then a world with nothing in it and a game still
running.

A game ends when there is nothing left to do, and "nothing left" is a question
about the world rather than about the player: **how many Bricks are in all
actors**. Ask it after each one goes, and the answer is eventually zero.

### What you do

1. Give the Ball an **each frame during ⟨decide⟩**, and ask in it
   **if ⟨how many ⟨Brick⟩ in ⟨all actors⟩⟩ = ⟨0⟩**.
2. Inside that, set **cleared** to true and print something.
3. Run it. Nothing is said for the first two Bricks, and one thing is said
   after the third.
4. Now try asking the same question in the touch handler instead, right under
   \`remove actor\`. It never fires — **removing an actor takes effect at the
   end of the frame**, so the Brick you have just removed is still in
   \`all actors\` when you count. Ask where the answer has settled.
5. Add a fourth Brick and run it again. You changed nothing else and the game
   still ends in the right place, which is what asking the world buys over
   counting the hits.
`.trim()},yl=e=>({type:"world_set_Time_TimerPeriodProperty",inputs:{ACTOR:E(),VALUE:e}}),gl={name:"It gets harder",description:"A spawner on a timer that sends the same thing at the same rate forever.",source:g({world:m({name:"My World",rows:[i(s("spawner"),[l(160,20),yl(b(1))])],actors:[{id:"spawner",name:"Spawner",rows:[n("Time#HasATimerTrait"),ue("text")],drawing:{width:32,height:16,commands:[F(K("#8d8d99")),Fe(0,0,32,16)]}},{id:"rock",name:"Rock",rows:[n("Physics#CanMoveTrait"),d("asteroid.png")]}],handlers:[{type:"world_on_Time_TimerFiresEvent",inputs:{ACTOR:pe("spawner")},next:{block:i(s("rock"),[l(160,40),{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:E(),VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:4}}}}}}])}}]}),sprites:["asteroid"],rules:["time","motion"]}),instructions:`
## It gets harder

A Rock every second, forever. The Spawner has a **timer**, the timer has a
**period**, and \`when ⟨any Spawner⟩ timer fires\` is where the Rock comes from.

A game that sends the same thing at the same rate is one you get bored of
rather than lose. What makes an arcade game get harder is usually one number,
changed a little each time it is used — and a period is a value like any other.

### What you do

1. In the timer handler, under the \`add actor\`, add
   **set timer period of ⟨this actor⟩ to ⟨⟨timer period of ⟨this actor⟩⟩ ×
   ⟨0.8⟩⟩**.
2. Run it and watch. The first few Rocks are a second apart and the later ones
   are not, and nothing anywhere holds a list of waves.
3. Try 0.95, and 0.5. One of them is a game and one is a wall.
4. Note what you did NOT do: send more Rocks each time. That gets harder too,
   and it gets harder in a way the player can see coming.
5. What you have just written is what the **Spawner** rule holds:
   **seconds apart**, **closer each time**, and **how many to send** for a wave
   that ends rather than going on for ever. Import it and the timer, the
   arithmetic and the handler become three numbers — and what a wave is made of
   stays yours, because a rule has no way to know what a Rock is.
`.trim()},ar="The rain had not stopped for three days, and the road out of town was gone.",ml={name:"Words on a screen",description:"A sentence drawn as one line, running off both edges of the world.",source:g({world:m({name:"My World",rows:[i("actors/label",[l(160,160),U("TextProperty",Y(ar))])]}),stockActors:["label"]}),instructions:`
## Words on a screen

A Label says the line, and the line is longer than the world. Drawn text is
**one line of canvas**: it does not wrap, it does not know how wide the screen
is, and it ignores every newline you put in it.

A sentence needs a **paragraph** — words laid out in a column of a given width
— and the stock **Speech Box** is an actor that draws one, with a panel behind
it so the words can be read against anything.

### What you do

1. Add an actor, and use the \`(import…)\` row on its dropdown to bring in the
   **Speech Box**.
2. Put it near the bottom of the screen and **set its text** to the line.
3. Run it. The same sentence, wrapped into the panel — and the box grows
   DOWNWARD as it fills, because it is anchored at its top left.
4. Delete the Label. Open the Speech Box and read its drawing: a rectangle, an
   outline, and \`draw paragraph\` in a column the width of the panel.
`.trim()},fl={name:"At reading pace",description:"A line that is simply there, all at once, before anybody has read a word.",source:g({world:m({name:"My World",rows:[i("actors/speechBox",[l(160,200),U("TextProperty",Y(ar))])]}),stockActors:["speechBox"],rules:["reveals","mouse"]}),instructions:`
## At reading pace

The whole line is on screen before the player has looked at it. That is what
setting **text** does: it is the words the box is showing, and it shows them
the moment they are set.

**Reveals Text** writes that property for you, a few letters a second. The box
draws whatever \`text\` says right now — it knows nothing about revealing — and
the rule knows nothing about boxes. Between them you get a typewriter.

### What you do

1. Give the Speech Box **use trait ⟨Reveals Text⟩**.
2. Set **the whole line** to the sentence instead of setting \`text\`, and run
   it. The words arrive at reading pace.
3. Change **letters a second** and run it again.
4. A reader who has read it faster than you are typing it wants to skip. Give
   the Box **use trait ⟨Can Be Clicked⟩**, and in a
   **when ⟨any Speech Box⟩ is clicked** handler put
   **show all of it on ⟨this actor⟩**.
`.trim()},nr=e=>U("TextProperty",Y(e)),Al={name:"A place in a list",description:"One line of dialogue and a click that does nothing.",source:g({world:m({name:"My World",rows:[i("actors/speechBox",[l(160,200),{type:"world_add_trait",fields:{TRAIT:"Mouse#CanBeClickedTrait"},inputs:{ACTOR:E()}},nr("The rain had not stopped for three days.")])],handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:{type:"world_log",fields:{TEXT:"click"}}}}]}),stockActors:["speechBox"],rules:["conversation","mouse"]}),instructions:`
## A place in a list

One line, and a click that prints "click". To say a second line you would set
the text again — and to say five you would need somewhere to keep the place you
are up to, because **nothing in this engine waits**. A handler runs to the end
of its frame; "say this, pause, say that" is not something you can write in a
row of blocks.

A **conversation** is that place: a cursor, a number saying which line you are
on, and an event when it moves. What a line MEANS is yours — text, a picture, a
sound, a question — because it is blocks rather than a string in a table.

### What you do

1. Give the Speech Box **use trait ⟨Has a Conversation⟩** and
   **set how many lines of ⟨this actor⟩ to ⟨3⟩**.
2. Swap the \`print\` in the click handler for
   **make ⟨this actor⟩ say the next thing**.
3. Add **when ⟨any Speech Box⟩ moves to a line**, and in it ask
   **if ⟨line of ⟨this actor⟩⟩ = ⟨1⟩** and set the text to the first line;
   then the same for 2 and 3.
4. Click through it. The cursor starts at zero — nobody talking — and the
   first click moves it to line one.
`.trim()},We=(e,t)=>({type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:{block:{type:"world_get_Conversation_LineProperty",inputs:{ACTOR:E()}}},B:b(e)}}},DO0:{block:nr(t)}}}),bl={name:"A question that matters",description:"A story that asks you something and carries on regardless.",source:g({world:m({name:"My World",rows:[qe("boolean","opened the door","false"),i("actors/speechBox",[l(160,200),{type:"world_add_trait",fields:{TRAIT:"Mouse#CanBeClickedTrait"},inputs:{ACTOR:E()}},{type:"world_add_trait",fields:{TRAIT:"Conversation#HasAConversationTrait"},inputs:{ACTOR:E()}},{type:"world_set_Conversation_HowManyLinesProperty",inputs:{ACTOR:E(),VALUE:b(4)}},U("TextProperty",Y("Somebody at the door. Click to begin."))]),i("actors/button",[l(80,120),U("TextProperty",Y("Open it"))]),i("actors/button",[l(240,120),U("TextProperty",Y("Walk away"))])],handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:{type:"world_do_Conversation_MakeSayTheNextThingAction",inputs:{VALUE:E()}}}},{type:"world_on_Conversation_MovesToALineEvent",inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:ee([We(1,"Somebody was knocking."),We(2,"Do you open the door?"),We(3,"You opened it. The rain came in with them."),We(4,"You went back to bed, and slept badly.")])}}]}),stockActors:["speechBox","button"],rules:["conversation","mouse"]}),instructions:`
## A question that matters

The story asks whether you open the door, and then tells you what you did
anyway: clicking the box moves to the next line, and the next line is line
three whatever you think about it. The two Buttons do nothing at all.

A choice is the cursor moving somewhere it would not have gone. **send ⟨the
box⟩ to line ⟨n⟩** puts it wherever you like, and that is the whole of
branching — no new machinery, just a jump.

### What you do

1. Add **when ⟨any Button⟩ is clicked**. In it ask which Button was clicked —
   \`text of ⟨event actor⟩\` says which — and **send ⟨the Speech Box⟩ to line**
   3 for "Open it" and 4 for "Walk away".
2. Run it, click through to the question, and answer. The two answers go to
   two different lines.
3. A choice the story forgets is not a choice. In the same handler, set the
   world's **opened the door** to true or false.
4. Use it later: in a fifth line, say something different depending on what is
   remembered. That is what makes the question matter.
`.trim()},kl={name:"Staged",description:"Two people talking in an empty grey room, with nobody to look at.",source:g({world:m({name:"My World",rows:[{type:"world_set_background_color",inputs:{COLOR:K("#2b2b33")}},i("actors/portrait",[l(80,120)]),i("actors/speechBox",[l(160,200),{type:"world_add_trait",fields:{TRAIT:"Mouse#CanBeClickedTrait"},inputs:{ACTOR:E()}},{type:"world_add_trait",fields:{TRAIT:"Conversation#HasAConversationTrait"},inputs:{ACTOR:E()}},{type:"world_set_Conversation_HowManyLinesProperty",inputs:{ACTOR:E(),VALUE:b(3)}},U("TextProperty",Y("An empty room. Click to begin."))])],handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:{type:"world_do_Conversation_MakeSayTheNextThingAction",inputs:{VALUE:E()}}}},{type:"world_on_Conversation_MovesToALineEvent",inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:ee([We(1,"You are late."),We(2,"The road was gone. I walked."),We(3,"Then you had better come in.")])}}]}),stockActors:["speechBox","portrait"],rules:["conversation","mouse"]}),instructions:`
## Staged

Three lines, two speakers, and no way to tell which of them is talking. There
is a Portrait on the stage and it is invisible — that is what a Portrait starts
as, so that its entrance is something you can see happen — and behind
everything there is a flat grey.

A scene is those three things moving with the script: **who is speaking**,
**where it is happening**, and **what it sounds like**. All of them hang off
the same event as the words.

### What you do

1. In the \`moves to a line\` handler, **set sprite** and **set opacity** on the
   Portrait so that a face appears with line one, and a different one with
   line two.
2. Add **set background to ⟨…⟩** with the \`(import…)\` row, and change it at
   line three so the story moves indoors.
3. Add **set music** at the top of the world, and **play sound** on the line
   where somebody knocks.
4. Read what you have written. Every one of those is the same shape — a line
   moved, so something changed — and none of them is about dialogue.
`.trim()},fa=()=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:E(),VALUE:{block:{type:"world_vector_of",inputs:{X:{block:{type:"math_random_int",inputs:{FROM:b(-3),TO:b(3)}}},Y:{block:{type:"math_random_int",inputs:{FROM:b(-3),TO:b(3)}}}}}}}}),Tl={name:"A hundred of something",description:"One wanderer per click, and no idea what a hundred would cost.",source:g({world:m({name:"My World",rows:[i(s("wanderer"),[l(160,160),fa()])],actors:[{id:"wanderer",name:"Wanderer",rows:[n("Physics#CanMoveTrait"),n("Screen Wrap#WrapsAcrossTrait"),n("Screen Wrap#WrapsDownTrait"),d("coin.png")]}],handlers:[{type:"world_on_Mouse_IsPressedEvent",fields:{FILTER0:"left"},next:{block:i(s("wanderer"),[{type:"world_set_position",inputs:{ACTOR:E(),X:{block:{type:"math_random_int",inputs:{FROM:b(0),TO:b(320)}}},Y:{block:{type:"math_random_int",inputs:{FROM:b(0),TO:b(320)}}}}},fa()])}}]}),sprites:["coin"],rules:["motion","mouse","wrap"]}),instructions:`
## A hundred of something

One Wanderer, going somewhere, wrapping round the edges when it gets there.
Click and there are two. Click again for three.

A simulation is not one of something — it is a crowd, and a crowd is where the
questions start. How many can this hold? What does the frame time do at fifty,
at five hundred? Nobody can tell you: it depends on this machine, this browser,
this actor. **You find out by running it.**

### What you do

1. Wrap the \`add actor\` in **repeat ⟨100⟩ times**. One click, a hundred
   Wanderers.
2. Run it and watch. Click again for two hundred, again for three.
3. Print **how many actors in ⟨all actors⟩** on each click, so you know what
   you are looking at.
4. Find where it stops being smooth on YOUR machine, and write the number
   down. That number is a fact about the machine and the drawing, not about
   the lab.
`.trim()},_l={name:"Toward, and away",description:"Two actors that ought to care where the player is, and do not.",source:g({world:m({name:"My World",rows:[i(s("player"),[l(160,160)]),i(s("chaser"),[l(40,40)]),i(s("fleer"),[l(280,280)])],actors:[{id:"player",name:"Player",rows:[n("Arrow Keys#MovesAcrossTrait"),n("Arrow Keys#MovesDownTrait"),d("player.png")]},{id:"chaser",name:"Chaser",rows:[n("Physics#CanMoveTrait"),d("box.png")]},{id:"fleer",name:"Fleer",rows:[n("Physics#CanMoveTrait"),d("coin.png")]}]}),sprites:["player","box","coin"],rules:["arrows","motion","steering"]}),instructions:`
## Toward, and away

Walk about. The Chaser sits in its corner and the Fleer sits in its own, and
neither has any opinion about where you are.

"Toward" is a direction worked out from two positions — where I am, where you
are, the difference between them — and "away" is the same sum with the sign
turned round. **Steering** is those two, with a speed each and a distance each
is happy at.

### What you do

1. Give the Chaser **use trait ⟨Chases⟩** and
   **set actor to chase of ⟨any Chaser⟩ to ⟨any Player⟩**.
2. Give the Fleer **use trait ⟨Flees⟩** and
   **set actor to avoid of ⟨any Fleer⟩ to ⟨any Player⟩**.
3. Run it and walk. One closes in, one keeps away — and neither of them was
   told which way that is, because which way depends on where you are standing.
4. Set **keep distance** on the Chaser to 60. It now follows without ever
   arriving, which is most of what a companion in a game does.
5. Now put something in the way — a Wall with **use trait ⟨Solid⟩**, between
   you and the Chaser. It walks into it and stays there, and nothing is wrong:
   toward is all it was ever told. Going AROUND is a different question and a
   different rule, which is **Path** — the same two blocks, and it works out
   where to step instead of which way to face.
`.trim()},Oe=e=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:e},inputs:{ACTOR:E()}}}),vl=JSON.stringify({blocks:{blocks:[{type:"world_rule",x:20,y:20,fields:{NAME:"Wind",ABILITY:"Has Wind"},next:{block:{type:"world_use_rule",fields:{RULE:"Space"}}}},{type:"world_rule_trait",x:20,y:160,fields:{NAME:"Blown"},next:{block:{type:"world_use_trait",fields:{TRAIT:"Space#PositionalTrait"},next:{block:{type:"world_trait_step",fields:{PHASE:"move",NAME:"drift"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:E(),X:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:Oe("x"),B:b(2)}}},Y:Oe("y")}}}}}}}}}]}},null,2),Cl={levelData:{showFileBrowser:!0},name:"A property is a block",description:"A wind that blows everything at exactly the same speed.",source:g({world:m({name:"My World",rows:[i(s("leaf"),[l(40,100)]),i(s("leaf"),[l(40,220)])],actors:[{id:"leaf",name:"Leaf",rows:[n("Wind#BlownTrait"),n("Screen Wrap#WrapsAcrossTrait"),d("coin.png")]}]}),sprites:["coin"],rules:["wrap"],ruleFiles:{wind:vl}}),instructions:`
## A property is a block

Two Leaves in the wind, drifting right at exactly the same speed — and they
always will, because the speed is the number **2**, typed into
\`rules/wind.rule\` where nothing else can reach it.

Open that file. It is nine blocks: a rule, a trait, and a step that moves
whatever elected the trait. Nothing in it is hidden from you, and nothing in it
is different in kind from what you write in a world.

### What you do

1. Inside \`define trait ⟨Blown⟩\`, add
   **define number strength with default 1**. Declared in a trait, it belongs
   to each ACTOR that elects it.
2. Look in the Wind category in \`main.world\`. Two blocks are there that were
   not before: **get strength of ⟨…⟩** and **set strength of ⟨…⟩**. What you
   declared became vocabulary.
3. In the step, multiply the 2 by **strength of ⟨this actor⟩**.
4. In the world, **set strength** of one Leaf to 3 and leave the other. One
   wind, two speeds, and the rule did not have to know there would be two.
`.trim()},El={name:"A step, not a speed",description:"A player that slides about a grid world like a bar of soap.",source:g({world:m({name:"My World",rows:[x(s("wall"),Xe()),i(s("player"),[l(144,144)])],actors:[{id:"player",name:"Player",rows:[n("Arrow Keys#MovesAcrossTrait"),n("Arrow Keys#MovesDownTrait"),n("Input#TakesKeyboardInputTrait"),d("player.png")]},{id:"wall",name:"Wall",rows:[d("ground.png")]}]}),sprites:["player","ground"],rules:["arrows","input","grid"]}),instructions:`
## A step, not a speed

Walk about. The Player slides — it is somewhere between two tiles most of the
time, it stops wherever you let go, and it walks straight through the Walls.

A puzzle is not made of speeds. It is made of **tiles and steps**: you are on
one square or another, a move takes you to the next one, and a move into a wall
does not happen at all. The **Grid** rule is that idea, and it is a different
idea from moving.

### What you do

1. Take **Moves Across** and **Moves Down** off the Player — that is the
   sliding — and give it **use trait ⟨Steps on the Grid⟩**.
2. Add a handler per arrow key: **when ⟨any Player⟩ presses ⟨left⟩ → step left
   ⟨this actor⟩**, and the same for the other three.
3. Run it. One tile per press, and it lands on the square rather than between
   two.
4. Give the Walls **use trait ⟨Fills a Tile⟩** and walk into one. Nothing
   happens — a step into an occupied tile is not a step that fails halfway, it
   is a step that never starts.
`.trim()},Z=(e,t)=>gt("player",e,{type:`world_do_Grid_${t}Action`,inputs:{ACTOR:E()}}),Rl={name:"Nobody wrote pushing",description:"A crate that stops you dead, and a rule that already knows what to do.",source:g({world:m({name:"My World",rows:[x(s("wall"),Xe()),i(s("crate"),[l(144,144)]),i(s("player"),[l(240,144)])],actors:[{id:"player",name:"Player",rows:[n("Grid#StepsOnTheGridTrait"),n("Input#TakesKeyboardInputTrait"),d("player.png")]},{id:"crate",name:"Crate",rows:[n("Grid#FillsATileTrait"),d("box.png")]},{id:"wall",name:"Wall",rows:[n("Grid#FillsATileTrait"),d("ground.png")]}],handlers:[Z("left arrow","StepLeft"),Z("right arrow","StepRight"),Z("up arrow","StepUp"),Z("down arrow","StepDown")]}),sprites:["player","box","ground"],rules:["input","grid"]}),instructions:`
## Nobody wrote pushing

Walk left into the Crate. Nothing happens, and nothing should: the Crate
**fills a tile**, and a step into a filled tile does not happen. That is the
same sentence that makes the walls work, and the Crate is a wall you can walk
round.

A sokoban is that with one word changed.

### What you do

1. Give the Crate **use trait ⟨Can Be Pushed⟩** as well.
2. Walk into it. It moves one tile, you take the tile it left, and neither of
   those is something you wrote.
3. Push it into a Wall and try again. It stops, and so do you — a push that
   cannot happen is a step that does not.
4. Click the **eye** on \`use trait ⟨Can Be Pushed⟩\` and find out why one word
   was enough. The stepping trait asks what is in the tile it is going to; if
   that thing can be pushed, the step becomes two steps, and both of them have
   to be possible.
`.trim()},Ol={name:"Somebody who is there",description:"A villager who walks off and leaves their own name behind.",source:g({world:m({name:"My World",rows:[i(s("villager"),[l(80,160)]),i("actors/label",[l(80,136),U("TextProperty",Y("Mara"))])],actors:[{id:"villager",name:"Villager",rows:[n("Patrol#PatrolsAcrossTrait"),d("player.png")]}]}),stockActors:["label"],sprites:["player"],rules:["patrol","attachment"]}),instructions:`
## Somebody who is there

Mara walks her beat, and her name stays where it was put. It was put there
once, at the start, by a \`set position\` that has long since finished running.

A name over somebody's head is not a place — it is a RELATIONSHIP: this thing,
that thing, and how far apart they are. **Attachment** is that relationship,
and it is the same sentence as a camera following a player, one level down.

### What you do

1. Give the Label **use trait ⟨Attached⟩**.
2. **set attached to of ⟨the Label⟩ to ⟨any Villager⟩**, and **set offset** to
   x 0, y -24 — over her head rather than on it.
3. Run it. The name goes with her, and nothing copies a position every frame
   in anything you wrote.
4. Give the Villager a second beat with **patrols down** as well. The name
   still follows, because the relationship never said anything about walking.
`.trim()},Sl={name:"Something to be doing",description:"Four things to find, and a bar that has no idea how it is going.",source:g({world:m({name:"My World",rows:[i("actors/progressBar",[l(160,30),{type:"world_set_Progress_FractionProperty",inputs:{ACTOR:E(),VALUE:b(0)}}]),i(s("token"),[l(80,200)]),i(s("token"),[l(140,200)]),i(s("token"),[l(200,200)]),i(s("token"),[l(260,200)]),i(s("hero"),[l(30,200)])],actors:[{id:"hero",name:"Hero",rows:[n("Arrow Keys#MovesAcrossTrait"),n("Collisions#CanCollideTrait"),n("Collection#CollectsTrait"),d("player.png")]},{id:"token",name:"Token",rows:[n("Collisions#CanCollideTrait"),n("Collection#CanBeCollectedTrait"),d("coin.png")]}]}),stockActors:["progressBar"],sprites:["player","coin"],rules:["motion","arrows","collisions","collect"]}),instructions:`
## Something to be doing

Four Tokens, a Hero who walks right into them, and a bar along the top that
stays empty however many are gone. The bar is not broken: nothing has told it anything.

An errand is a **fraction** — how much of it is done — and that is a number the
game can work out at any moment rather than a tally to keep in step. The
Progress Bar draws whatever fraction it is given and knows nothing about
tokens.

### What you do

1. Add **when ⟨any Hero⟩ collects**.
2. In it, set the Progress Bar's **fraction** to
   **⟨how many ⟨Token⟩ in ⟨collected of ⟨this actor⟩⟩⟩ ÷ ⟨4⟩**.
3. Run it and walk the row. Halfway along it the bar is half full, and it is
   exactly full at the last one.
4. Add a fifth Token and run it again. The bar is wrong now — 4 was typed in —
   which is the moment to ask the world how many Tokens there ARE rather than
   how many you meant to put in.
`.trim()},Il={levelData:{showFileBrowser:!0},name:"Change it",description:"A guard on a long, slow beat, and the number that says how long.",source:g({world:m({name:"My World",rows:[i(s("guard"),[l(160,160)])],actors:[{id:"guard",name:"Guard",rows:[n("Patrol#PatrolsAcrossTrait"),d("player.png")]}]}),sprites:["player"],rules:["patrol"]}),instructions:`
## Change it

The Guard walks a beat: a second and a half one way, a second and a half back.
That number is not in your world — it is in \`rules/patrol.rule\`, which arrived
when you took the rule.

**That file is yours.** Not a link to a library, not a copy the lab keeps in
step: your project's own, sitting in \`rules/\` with everything else, and
nothing anywhere else changes when you change it.

### What you do

1. Open \`rules/patrol.rule\` — from the file browser, or the eye on
   \`use trait ⟨Patrols Across⟩\`.
2. Find **define number across time with default 1.5** and make it 0.5. The
   Guard turns three times as often.
3. Start a new project, take the Patrol rule again, and look: 1.5. You changed
   your copy and nothing else.
4. Now think about what you could NOT have done from outside. \`across time\` is
   a property, so a project can set it — but the SHAPE of the beat, the fact
   that it turns at all, is a step in this file, and only opening it lets you
   argue with that.
`.trim()},Pl=JSON.stringify({blocks:{blocks:[{type:"world_rule",x:20,y:20,fields:{NAME:"Weather",ABILITY:"Has Weather"},next:{block:{type:"world_use_rule",fields:{RULE:"Space"}}}},{type:"world_rule_trait",x:20,y:160,fields:{NAME:"Blown"},next:{block:{type:"world_use_trait",fields:{TRAIT:"Space#PositionalTrait"},next:{block:{type:"world_trait_step",fields:{PHASE:"move",NAME:"drift"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:E(),X:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:Oe("x"),B:b(2)}}},Y:Oe("y")}}}}}}}}}]}},null,2),Bl={levelData:{showFileBrowser:!0},name:"A trait of your own",description:"One weather, two kinds of thing, and the same wind on both.",source:g({world:m({name:"My World",rows:[i(s("leaf"),[l(60,100)]),i(s("stone"),[l(60,220)])],actors:[{id:"leaf",name:"Leaf",rows:[n("Weather#BlownTrait"),n("Screen Wrap#WrapsAcrossTrait"),n("Screen Wrap#WrapsDownTrait"),d("coin.png")]},{id:"stone",name:"Stone",rows:[n("Weather#BlownTrait"),n("Screen Wrap#WrapsAcrossTrait"),n("Screen Wrap#WrapsDownTrait"),d("box.png")]}]}),sprites:["coin","box"],rules:["wrap"],ruleFiles:{weather:Pl}}),instructions:`
## A trait of your own

A Leaf and a Stone, and the same weather on both: they drift right together,
because \`rules/weather.rule\` offers one thing — **Blown** — and both of them
elected it.

A rule is not one ability. It is a place where several live, and an actor takes
the ones it wants: that is what election means, and it is why Gravity can offer
"Affected by Gravity" and "Acts as Ground" without either being about the
other.

### What you do

1. In \`rules/weather.rule\`, add a second **define trait**, called **Sinks**.
2. Give it \`use trait ⟨Positional⟩\` and an **each frame** that adds to the
   position's **y** rather than its **x**.
3. In \`main.world\`, give the Stone **Sinks** instead of **Blown**.
4. Run it. One rule, two abilities, two kinds of thing — and neither trait
   mentions the other or the actors that took it.
`.trim()},Aa=()=>({type:"world_trait_step",fields:{PHASE:"move",NAME:"bob"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:E(),X:Oe("x"),Y:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:Oe("y"),B:{block:{type:"math_trig",fields:{OP:"SIN"},inputs:{NUM:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"world_time"}},B:b(180)}}}}}}}}}}}}}}),xl={levelData:{showFileBrowser:!0},name:"Shared, without the ceremony",description:"Two actors doing the same thing, written out twice.",source:g({world:m({name:"My World",rows:[i(s("fish"),[l(100,160)]),i(s("bird"),[l(220,160)])],actors:[{id:"fish",name:"Fish",rows:[d("coin.png"),Aa()]},{id:"bird",name:"Bird",rows:[d("ball.png"),Aa()]}]}),sprites:["coin","ball"]}),instructions:`
## Shared, without the ceremony

A Fish and a Bird, both bobbing, and the bob is written twice — once in each
\`define actor\`. Change your mind about how it should feel and you have two
places to change, and a third the day something else bobs.

You could make it a rule: a file, a \`define rule\`, a \`define trait\` inside it,
and then elect the trait. For gravity that ceremony is worth it — several kinds
share it, other rules depend on it, a world can be asked about it. For "bob up
and down" it is a lot.

A **behavior** is the middle: shared, without being a rule about it. It is one
file, one hat, and what follows the hat is what runs.

### What you do

1. Make a new file, \`rules/bob.behavior\`, with **define behavior named ⟨Bob⟩**
   at the top.
2. Move the bobbing under it — the hat IS the step, so there is no
   \`each frame\` inside it.
3. Take the \`each frame\` out of both actors and give each
   **use trait ⟨Bob⟩** instead. They take it exactly the way they would take a
   rule's, because underneath it IS one, with a single trait of the same name.
4. Change the bob once. Both change.
`.trim()},Nl={name:"Bigger than the screen",description:"A room three screens wide, seen through a window that never moves.",source:g({world:m({name:"My World",tiles:[30,10],rows:[{type:"world_set_background_color",inputs:{COLOR:K("#101822")}},x(s("ground"),oe(30)),i(s("walker"),[l(60,272)])],actors:[{id:"walker",name:"Walker",rows:[n("Arrow Keys#MovesAcrossTrait"),n("Boundaries#StaysAcrossTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[d("ground.png")]}]}),sprites:["player","ground"],rules:["arrows","bounds","camera","cameraFollow","cameraConfined"]}),instructions:`
## Bigger than the screen

Walk right. The Walker keeps going — the room is thirty tiles across, three
screens of it — and the view stays where it was, so most of the walk happens
somewhere you cannot see.

Everything needed to fix that is a lesson you have already done. This one is
putting them together, which is what a genre is.

### What you do

1. Add **define camera ⟨Follow⟩** at the end of the world, with
   **use trait ⟨Follows⟩**, **use trait ⟨Confined to the Map⟩**, and
   **set actor to follow of ⟨this camera⟩ to ⟨any Walker⟩** — then
   **look through camera ⟨Follow⟩**.
2. Add a **backdrop**, and **draw background ⟨tiled⟩** so it covers a room
   three screens wide rather than being stretched across one.
3. Walk to the far end. The view goes with you and stops at the wall, and there
   is something behind the floor the whole way.
4. Look at what you did NOT have to change: the map, the Walker, the floor. A
   world bigger than the screen is a camera and a backdrop, not a different
   kind of world.
`.trim()},Ml={levelData:{showFileBrowser:!0},name:"Open it up",description:"A rule you have used twenty times and never looked inside.",source:g({world:m({name:"My World",rows:[qe("number","how hard it pulls","0"),x(s("ground"),oe(10)),i(s("hero"),[l(160,40)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),d("player.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),d("ground.png")]}]}),sprites:["player","ground"],rules:["gravity"]}),instructions:`
## Open it up

The Hero falls, lands, and stays there. You have used gravity in half a dozen
lessons and never once looked at it — and it is not a black box, it is not
built into the lab, and it is not written in a language you have not been
taught. **It is blocks**, in a file in your project, and you can read all of
them.

### What you do

1. Click the **eye** on \`use trait ⟨Affected by Gravity⟩\`. The rule opens.
2. Read the top of it. There are two numbers there that belong to the WORLD
   rather than to any actor, and one of them says how hard gravity pulls.
3. Put that number in **how hard it pulls** at the top of \`main.world\`, so
   the world says what you found.
4. Now change it in the rule and run again. You are editing gravity, which
   half an hour ago was a thing that happened to you.
`.trim()},Dl=e=>({type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"math_trig",fields:{OP:"SIN"},inputs:{NUM:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"world_time"}},B:b(180)}}}}}},B:b(e)}}),ba=(e,t,o,a)=>({type:"world_rule_trait",x:20,y:a,fields:{NAME:e},next:{block:{type:"world_use_trait",fields:{TRAIT:"Space#PositionalTrait"},next:{block:{type:"world_trait_step",fields:{PHASE:"move",NAME:t},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:E(),X:Oe("x"),Y:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:Oe("y"),B:{block:Dl(o)}}}}}}}}}}}}}),Wl=JSON.stringify({blocks:{blocks:[{type:"world_rule",x:20,y:20,fields:{NAME:"Bobbing",ABILITY:"Bobs"},next:{block:{type:"world_use_rule",fields:{RULE:"Space"}}}},ba("Bobs Gently","bob gently",1,160),ba("Bobs Wildly","bob wildly",4,420)]}},null,2),Ll={levelData:{showFileBrowser:!0},name:"Your own vocabulary",description:"The same sum written out twice, with one number different.",source:g({world:m({name:"My World",rows:[i(s("cork"),[l(100,160)]),i(s("buoy"),[l(220,160)])],actors:[{id:"cork",name:"Cork",rows:[n("Bobbing#BobsGentlyTrait"),d("coin.png")]},{id:"buoy",name:"Buoy",rows:[n("Bobbing#BobsWildlyTrait"),d("ball.png")]}]}),sprites:["coin","ball"],ruleFiles:{bobbing:Wl}}),instructions:`
## Your own vocabulary

Open \`rules/bobbing.rule\`. Two traits, two steps, and inside them the same sum
written out twice: **sin of ⟨time × 180⟩ × ⟨a number⟩**. One says 1 and the other
says 4, and everything else about them is identical.

Reading it, you have to work out twice that it is a wave. Changing how the
bobbing feels means changing it in both places and hoping you did the same
thing to each.

A **define block** is a name for a sum, with the parts that vary as
**parameters** — which is what makes it different from copying.

### What you do

1. Add **define block** to the rule, phrased **bob by ⟨amount⟩**, returning a
   number.
2. Put **return ⟨sin of ⟨time × 180⟩ × ⟨amount⟩⟩** in it — the sum, with the
   number replaced by the parameter.
3. In both steps, use **bob by ⟨1⟩** and **bob by ⟨4⟩**. The sum is written
   once and said twice.
4. Now change the 180 to a 60. One edit, and both of them slow down — which is
   the difference between a name and a copy.
`.trim()},Ul={name:"Floors that move",description:"A platform that goes somewhere, and a player left standing where it was.",source:g({world:m({name:"My World",rows:[x(s("ground"),oe(10)),i(s("platform"),[l(120,200)]),i(s("hero"),[l(120,168)])],actors:[{id:"hero",name:"Hero",rows:[n("Gravity#AffectedByGravityTrait"),n("Collisions#CanCollideTrait"),n("Arrow Keys#MovesAcrossTrait"),d("player.png")]},{id:"platform",name:"Platform",rows:[n("Patrol#PatrolsAcrossTrait"),n("Gravity#ActsAsGroundTrait"),n("Solid Bodies#SolidTrait"),n("Collisions#CanCollideTrait"),d("ground.png")]},{id:"ground",name:"Ground",rows:[n("Gravity#ActsAsGroundTrait"),d("ground.png")]}]}),sprites:["player","ground"],rules:["gravity","arrows","collisions","solid","motion","patrol","carry"]}),instructions:`
## Floors that move

The Hero is standing on a Platform, and the Platform is walking its beat. It
holds the Hero up the whole way and slides out from under them, because
"solid" and "going somewhere" are two different facts and only one of them has
been said.

Nothing so far can say the other. Solid Bodies stops a body ending up inside a
solid one; Gravity rests a faller on whatever it landed on. Neither has any
opinion about a floor that MOVES.

**Carrying** is the pair that does: one ability for the thing that carries, and
one for the thing that rides. Neither names the other, so a Hero that rides one
lift rides every lift.

### What you do

1. Give the Platform **use trait ⟨Carries⟩**.
2. Give the Hero **use trait ⟨Rides⟩**.
3. Run it, and do not touch the keys. The Hero goes with the Platform.
4. Now walk while it moves. You are steering on a moving floor, which is two
   things happening to one actor and neither of them written by you.
`.trim()},Gl={name:"Counted, not declared",description:"Two crates, two marks, and a puzzle that cannot be finished.",source:g({world:m({name:"My World",rows:[x(s("wall"),Xe()),i(s("mark"),[l(240,144)]),i(s("mark"),[l(240,208)]),i(s("crate"),[l(144,144)]),i(s("crate"),[l(144,208)]),i(s("player"),[l(80,144)]),{type:"world_set_Scoring_TargetScoreProperty",inputs:{VALUE:b(2)}}],actors:[{id:"player",name:"Player",rows:[n("Grid#StepsOnTheGridTrait"),n("Input#TakesKeyboardInputTrait"),d("player.png")]},{id:"crate",name:"Crate",rows:[n("Grid#FillsATileTrait"),n("Grid#CanBePushedTrait"),n("Collisions#CanCollideTrait"),d("box.png")]},{id:"mark",name:"Mark",rows:[n("Collisions#CanCollideTrait"),{type:"world_set_Collisions_SizeProperty",inputs:{ACTOR:E(),X:b(8),Y:b(8)}},d("coin.png")]},{id:"wall",name:"Wall",rows:[n("Grid#FillsATileTrait"),d("ground.png")]}],handlers:[Z("left arrow","StepLeft"),Z("right arrow","StepRight"),Z("up arrow","StepUp"),Z("down arrow","StepDown")]}),sprites:["player","box","coin","ground"],rules:["input","grid","collisions","score","goals"]}),instructions:`
## Counted, not declared

Push both Crates onto the Marks. It works, and then nothing happens, because
nothing in this world has an opinion about being finished.

You could count the moves — a solution is twelve steps, so win on the twelfth —
and
it would pass the first time and fail every other way of solving it. **A win
condition is a question about the world**: how many Crates are where they
should be, asked at the moment that could have changed.

Arriving and leaving are both such moments. A Crate pushed off a Mark is a
puzzle that is no longer solved, and a count that only ever went up would have
won anyway.

### What you do

1. Add **when ⟨any Crate⟩ starts touching ⟨Mark⟩**, and in it
   **add ⟨1⟩ to the score**. The **⟨Mark⟩** is the hat's own dropdown: a
   handler that hears one kind of touch and not the others.
2. Add **when ⟨any Crate⟩ stops touching ⟨Mark⟩** and **add ⟨-1⟩**. The count
   now says how many are on marks right now, rather than how many ever have
   been.
3. The world already sets **target score** to 2 — one per Mark. Add
   **when the target is reached → win the game**.
4. Solve it. Nothing is said until the second Crate lands, and pushing one off
   and back on does not win it twice: an ending happens once.
`.trim()},ft=(e,t,o,a)=>({type:e,id:t,properties:{positional:{position:{x:o,y:a}}}}),ka=e=>JSON.stringify({type:"map",size:{width:10,height:10},tile:{width:32,height:32},actors:e},null,2),Fl={levelData:{showFileBrowser:!0},name:"A door to somewhere else",description:"Two rooms in two files, and a door that does nothing.",source:g({world:m({name:"My World",rows:[{type:"world_load_map",fields:{MAP:"maps/room1"}}]}),actors:{player:re("Player",[n("Arrow Keys#MovesAcrossTrait"),n("Collisions#CanCollideTrait"),d("player.png")]),door:re("Door",[n("Collisions#CanCollideTrait"),d("door.png")]),chest:re("Chest",[d("coin.png")])},maps:{room1:ka([ft("actors/player","Player",48,176),ft("actors/door","Door",272,176)]),room2:ka([ft("actors/player","Player",48,176),ft("actors/chest","Chest",272,176)])},rules:["motion","arrows","collisions"],sprites:["player","door","coin"]}),instructions:`
## A door to somewhere else

Two rooms, in two files. **maps/room1.map** is the one you are in — a Player
and a Door — and **maps/room2.map** is the other one, which nothing has ever
loaded. Walk into the Door and nothing happens.

A room is a map, and going somewhere else is **taking this one away and loading
that one**. Both blocks are ones you have: the world already loads a map, and
**clear world** is how a world sheds everything.

### What you do

1. Add **when ⟨any Door⟩ starts touching**.
2. In it, **clear world**, and then **load map ⟨maps/room2⟩**.
3. Walk into the Door. The Chest is a room-two thing, so if you can see one you
   are somewhere else.

Open **room2.map** and look at where the Player is. That is why you arrive at
the doorway rather than wherever you happened to be standing: **a map says
where everything starts**, and the Player is one of the things in it.
`.trim()},Hl={name:"A door that wants something",description:"Two locked doors, one key, and no way through either of them.",source:g({world:m({name:"My World",rows:[i(s("key"),[l(40,160)]),i(s("player"),[l(120,160)]),i(s("door"),[l(216,160)]),i(s("door"),[l(288,160)])],actors:[{id:"player",name:"Player",rows:[n("Arrow Keys#MovesAcrossTrait"),n("Collisions#CanCollideTrait"),n("Collection#CollectsTrait"),n("Inventory#CarriesTrait"),d("player.png")]},{id:"key",name:"Key",rows:[n("Collection#CanBeCollectedTrait"),n("Inventory#CanBeCarriedTrait"),d("coin.png")]},{id:"door",name:"Door",rows:[n("Solid Bodies#SolidTrait"),d("door.png")]}]}),sprites:["player","coin","door"],rules:["motion","arrows","collisions","solid","collect","inventory"]}),instructions:`
## A door that wants something

Two doors, both shut, and a Key lying on the floor behind you. Walk over the
Key and it disappears — the Collection rule takes it off the floor and writes
it down. Then walk into a door, and nothing happens, because a record of what
you have picked up is not the same as a **bag**.

**Counting is not carrying.** A score only ever goes up; a key is gone once the
door is open. That is the whole of what the Inventory rule adds, and the second
door is how you will know you got it right.

### What you do

1. Add **when ⟨any Player⟩ collects ⟨item⟩ → ⟨this actor⟩ takes ⟨event
   actor⟩**. Collecting is picking it up off the floor; taking is having it,
   and **event actor** is the thing that was picked up.
2. Add **when ⟨any Door⟩ starts touching ⟨Player⟩** — the second dropdown is
   what the door listens for, so a Crate rolling into it is not somebody
   arriving with a key.
3. In it: **if ⟨event actor⟩ has a ⟨Key⟩ → ⟨event actor⟩ spends a ⟨Key⟩**, then
   **remove ⟨this actor⟩**. Both **⟨Key⟩**s are dropdowns of the actors in your
   project, like the one on the hat.
4. Fetch the Key, open the first door, and walk into the second one. It stays
   shut, and it should: you had one key and you spent it.
`.trim()},pt=e=>({type:"world_get_Physics_VelocityProperty",inputs:{ACTOR:{block:e}}}),$o=e=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:E(),VALUE:{block:e}}}),So=(e,t,o)=>({type:"world_vector_math",fields:{OP:e},inputs:{A:{block:t},B:{block:o}}}),Ko=(e,t)=>({type:"world_query_Steering_FromTowardOverQuery",inputs:{HERE:{block:e},THERE:{block:t},GAPBETWEEN:{block:{type:"world_query_Steering_DistanceFromToQuery",inputs:{A:{block:e},B:{block:t}}}}}}),Qt=(e,t)=>$o(So("ADD",pt({type:"world_this_actor"}),So("MULTIPLY",e,{type:"math_number",fields:{NUM:t}}))),Mt=(e,t,o)=>({type:"world_for_each",fields:{VAR:{id:e,name:e,type:"Actor"}},inputs:{SOURCE:{block:{type:"world_actors_within",inputs:{SOURCE:pe("boid"),DISTANCE:{shadow:{type:"math_number",fields:{NUM:t}}},OF:{block:{type:"world_this_actor"}}}}},...o.length?{DO:{block:ee(o)}}:{}}}),Jt=e=>({type:"variables_get_Actor",fields:{VAR:{id:e,name:e,type:"Actor"}}}),rr=()=>Array.from({length:12},(e,t)=>{const o=t*30*Math.PI/180;return i(s("boid"),[l(60+t%4*70,60+Math.floor(t/4)*90),te(Number((.6*Math.cos(o)).toFixed(3)),Number((.6*Math.sin(o)).toFixed(3)))])}),Vl={name:"Three rules, and behaviour nobody wrote",description:"Twelve Boids going twelve ways, and two of the three rules that make a flock.",source:g({world:m({name:"My World",rows:rr(),actors:[{id:"boid",name:"Boid",rows:[n("Physics#CanMoveTrait"),n("Screen Wrap#WrapsAcrossTrait"),n("Screen Wrap#WrapsDownTrait"),d("ball.png"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"flock"},inputs:{DO:{block:ee([Mt("crowding",30,[Qt(Ko(Jt("crowding"),{type:"world_this_actor"}),.05)]),Mt("other",80,[])])}}},{type:"world_trait_step",fields:{PHASE:"push",NAME:"keep flying"},inputs:{DO:{block:$o({type:"world_vector_from_angle",inputs:{LENGTH:{shadow:{type:"math_number",fields:{NUM:.6}}},DEGREES:{block:{type:"world_vector_direction",inputs:{VECTOR:{block:pt({type:"world_this_actor"})}}}}}})}}}]}]}),sprites:["ball"],rules:["motion","wrap","steering"]}),instructions:`
## Three rules, and behaviour nobody wrote

Twelve Boids, each flying off in its own direction and nothing anywhere saying
"flock". The first of the three rules is written: **keep apart** — for every
Boid crowding you, steer a little away from it.

The other two go in the second loop, which asks for the Boids within 80 rather
than the ones on top of you:

- **go the same way**: steer toward the difference between its velocity and
  yours, a little.
- **stay together**: steer toward it, a very little.

Each of them is one **set velocity** block, the same shape as the one already
there.

### What you do

1. In the second loop, add **set velocity of ⟨this actor⟩ to ⟨velocity⟩ +
   ⟨(⟨velocity of ⟨other⟩⟩ − ⟨velocity of ⟨this actor⟩⟩) × ⟨0.05⟩⟩**.
2. Under it, add **set velocity of ⟨this actor⟩ to ⟨velocity⟩ + ⟨⟨from ⟨this
   actor⟩ to ⟨other⟩⟩ × ⟨0.002⟩⟩** — the same block as "keep apart", with the
   two actors the other way round and a much smaller number.
3. Run it. Nothing in what you wrote mentions a flock, a leader or a direction
   for everybody to go in, and one turns up anyway.
4. Take the first one out and run it again. **Local rules make global
   behaviour, and neither one explains the other** — which is why nobody can
   look at three lines like these and say what they will do.
`.trim()},Yl=()=>Qt(So("SUBTRACT",pt(Jt("other")),pt({type:"world_this_actor"})),.05),jl=()=>Qt(Ko({type:"world_this_actor"},Jt("other")),.01),$l={name:"The properties are the experiment",description:"A flock that works, and five numbers typed where nobody can turn them.",source:g({world:m({name:"My World",rows:rr(),actors:[{id:"boid",name:"Boid",rows:[n("Physics#CanMoveTrait"),n("Screen Wrap#WrapsAcrossTrait"),n("Screen Wrap#WrapsDownTrait"),d("ball.png"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"flock"},inputs:{DO:{block:ee([Mt("crowding",30,[Qt(Ko(Jt("crowding"),{type:"world_this_actor"}),.05)]),Mt("other",80,[Yl(),jl()])])}}},{type:"world_trait_step",fields:{PHASE:"push",NAME:"keep flying"},inputs:{DO:{block:$o({type:"world_vector_from_angle",inputs:{LENGTH:{shadow:{type:"math_number",fields:{NUM:.6}}},DEGREES:{block:{type:"world_vector_direction",inputs:{VECTOR:{block:pt({type:"world_this_actor"})}}}}}})}}}]}]}),sprites:["ball"],rules:["motion","wrap","steering"]}),instructions:`
## The properties are the experiment

The flock works. Now try to answer a question about it: **how close is too
close?** Thirty is typed into the first loop, and the only way to try forty is
to stop, edit, and start again — by which time the flock you were watching is
gone and you are comparing two things you never saw together.

A number in a **property** is a number you can turn while it runs. Nothing
restarts, the Boids stay where they are, and what changes is what happens next.

### What you do

1. In the world, add **define number property ⟨too close⟩ with default ⟨30⟩**.
2. Put **get too close** into the first loop's **within** socket, where the 30
   is now.
3. Run it, wait for the flock to form, and then change the default to 200 while
   it is running. It comes apart at once, and nothing started again.
4. Put it back. Try 5, and 60. **A number you can turn is a question you can
   answer** — and the answer to this one is not a number you would have
   guessed.
`.trim()},Kl=()=>{const e=[];for(let t=0;t<5;t++)for(let o=0;o<5;o++)e.push(G(`dot${t}_${o}`,40+t*60,40+o*60));return e},Ta=(e,t,o)=>{const a={id:e,name:e,type:"Actor"};return{type:"world_for_each",fields:{VAR:a},inputs:{SOURCE:{block:t},DO:{block:{type:"world_set_sprite",fields:{SPRITE:o},inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:a}}}}}}}}},Ql={name:"Everything near me",description:"Twenty-five Dots, all of them lit, and a question that lights a few.",source:g({world:m({name:"My World",rows:[x(s("dot"),Kl()),i(s("walker"),[l(10,160),te(1,0)])],actors:[{id:"dot",name:"Dot",rows:[d("box.png")]},{id:"walker",name:"Walker",rows:[n("Physics#CanMoveTrait"),n("Screen Wrap#WrapsAcrossTrait"),d("player.png"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"look around"},inputs:{DO:{block:ee([Ta("dot",pe("dot").block,"box.png"),Ta("near",pe("dot").block,"coin.png")])}}}]}]}),sprites:["player","box","coin"],rules:["motion","wrap"]}),instructions:`
## Everything near me

The Walker drifts across twenty-five Dots and every one of them is lit, because
the second loop asks for **every Dot**. What it should ask for is the ones near
it — and "near" is a question about distance, which nothing you have met can
ask.

**A neighbourhood is a filter over a list.** Every flock, swarm and crowd in
every simulation ever written is that shape: not "what is everything doing" but
"what are the ones near me doing".

### What you do

1. Drop **the actors in ⟨any Dot⟩ within ⟨80⟩ of ⟨this actor⟩** into the second
   loop's list socket, in place of **any Dot**.
2. Watch the lit patch travel with the Walker. Change the 80 and watch it grow.

The first loop is not spare. It dims every Dot before the second lights a few,
so what you see is where the Walker IS rather than everywhere it has been.
`.trim()},Jl={name:"Everybody moves, then the world moves",description:"An enemy on a timer, in a game where nothing else has a clock.",source:g({world:m({name:"My World",rows:[x(s("wall"),Xe()),i(s("enemy"),[l(48,240)]),i(s("player"),[l(80,144)])],actors:[{id:"player",name:"Player",rows:[n("Grid#StepsOnTheGridTrait"),n("Input#TakesKeyboardInputTrait"),d("player.png")]},{id:"enemy",name:"Enemy",rows:[n("Grid#StepsOnTheGridTrait"),n("Time#HasATimerTrait"),{type:"world_set_Time_TimerPeriodProperty",inputs:{ACTOR:E(),VALUE:b(.4)}},d("asteroid.png")]},{id:"wall",name:"Wall",rows:[n("Grid#FillsATileTrait"),d("ground.png")]}],handlers:[Z("left arrow","StepLeft"),Z("right arrow","StepRight"),Z("up arrow","StepUp"),Z("down arrow","StepDown"),{type:"world_on_Time_TimerFiresEvent",inputs:{ACTOR:pe("enemy")},next:{block:{type:"world_do_Grid_StepRightAction",inputs:{ACTOR:E()}}}}]}),sprites:["player","asteroid","ground"],rules:["input","grid","time","turns"]}),instructions:`
## Everybody moves, then the world moves

The Enemy walks every four tenths of a second. Press the arrow keys at about
that speed and it looks like a game where you each take a step; press slower
and it walks away without you, press faster and you leave it behind. It is not
taking turns — it is racing you.

**A turn is a sequence, not a rate.** Nothing should happen until you move, and
then everything should happen at once. The Turns rule keeps that clock, and it
cannot wind itself: only your game knows what counts as a move.

### What you do

1. Give the **Enemy** the ability **takes a turn**, and take away **has a
   timer**.
2. Change its handler's hat from **timer fires** to **takes its turn**. The
   Enemy still steps right; it no longer decides when.
3. Add **when ⟨any Player⟩ finishes a step → end the turn**.

Finishes a step, not hears a key pressed: walk into a wall and the step is
refused, no move happened, and nothing should have moved but you — which is
nothing.
`.trim()},ql={name:"Taking it back",description:"A crate that can be pushed one square too far, and never pulled.",source:g({world:m({name:"My World",rows:[x(s("wall"),Xe()),i(s("mark"),[l(240,176)]),i(s("crate"),[l(144,176)]),i(s("player"),[l(80,176)])],actors:[{id:"player",name:"Player",rows:[n("Grid#StepsOnTheGridTrait"),n("Input#TakesKeyboardInputTrait"),d("player.png")]},{id:"crate",name:"Crate",rows:[n("Grid#FillsATileTrait"),n("Grid#CanBePushedTrait"),d("box.png")]},{id:"mark",name:"Mark",rows:[d("coin.png")]},{id:"wall",name:"Wall",rows:[n("Grid#FillsATileTrait"),d("ground.png")]}],handlers:[Z("left arrow","StepLeft"),Z("right arrow","StepRight")]}),sprites:["player","box","coin","ground"],rules:["input","grid","history"]}),instructions:`
## Taking it back

Push the Crate onto the Mark. You can push it and you can never pull it, so
one press too many puts it somewhere no amount of playing will fix — and the
only thing left is to build the level again.

**A history is a stack**: the places everything was, most recent last. Undo is
taking one off and putting everything back. The History rule keeps every move
you tell it about, and the two things it needs from you are which actors count
and when a move happens — it cannot guess either. A move is not a frame.

### What you do

1. Give the **Player** and the **Crate** the ability **remembers where it was**.
   Undo puts back what remembers; a Crate that forgets stays where it was
   pushed while the Player walks back without it.
2. In BOTH key handlers, put **remember this move** above the step. The tape is
   a record of where things WERE, and it is written before the move it is
   about.
3. Add **when ⟨any Player⟩ hears ⟨Z⟩ pressed → take back a move**.
4. Push the Crate one square past the Mark, then press Z until it is back.
`.trim()},Xl={name:"The end of the world",description:"A ball that leaves and never comes back, and the two ways to keep it.",source:g({world:m({name:"My World",rows:[i(s("ball"),[l(160,160),te(3,3)])],actors:[{id:"ball",name:"Ball",rows:Kt}]}),sprites:["ball"],rules:["motion","bounds","wrap"]}),instructions:`
## The end of the world

The Ball goes down and to the right, off the edge, and keeps going forever.
Nothing is wrong: the world has an edge, and nothing said what should happen
there.

There are two answers, and a game usually wants both — one per axis. **Stays
in the Map** stops an actor at the edge. **Wraps at the Edges** brings it back
on the opposite side. Each comes as two traits, across and down, because which
axis you want them on is the whole question.

### What you do

1. Give the Ball **use trait ⟨Stays Across⟩**. It stops at the right-hand wall
   and slides down it.
2. Give it **use trait ⟨Wraps Down⟩**. When it leaves the bottom it comes back
   at the top.
3. Try **Stays Down** as well, and watch what happens: the two answers on one
   axis are not both — the first one to act is the only one you see.
`.trim()},zl={name:"A box for a number",description:"Three posts in a row, and the same two numbers written six times.",source:g({world:m({name:"My World",rows:[i(s("post"),[l(60,160)]),i(s("post"),[l(160,160)]),i(s("post"),[l(260,160)])],actors:[{id:"post",name:"Post",rows:[d("post.png")]}]}),sprites:["post"]}),instructions:`
## A box for a number

Three Posts in a row. Look at what the world says: **60**, **160**, **260** —
and **160** again, three times, for the height.

Change your mind about where the row sits and you have six numbers to find and
edit, and any one of them can be missed. The row is really two facts — where it
starts and how far apart they are — written out six times over.

### What you do

1. At the top of \`main.world\`, **set ⟨gap⟩ to 100**.
2. Put the second Post at **⟨gap⟩ + 60** and the third at **⟨gap⟩ + ⟨gap⟩ + 60**.
   Run it: nothing has changed, and that is the point.
3. Now change **gap** to 40 and run it again. One number, one edit.
4. Do the same for the height, which is the same number three times.
`.trim()},Zl={name:"All of them at once",description:"Six coins and six blocks that do the same thing to them.",source:g({world:m({name:"My World",rows:[i(s("coin"),[l(60,80)]),i(s("coin"),[l(160,80)]),i(s("coin"),[l(260,80)]),i(s("coin"),[l(60,240)]),i(s("coin"),[l(160,240)]),i(s("coin"),[l(260,240)])],actors:[{id:"coin",name:"Coin",rows:[d("box.png")]}]}),sprites:["box","coin"]}),instructions:`
## All of them at once

Six Coins, and every one of them is drawn as a plain box. To give them their
real picture you could add six \`set sprite\` blocks — one each, all identical,
and a seventh the day you add a seventh Coin.

A **loop** is one instruction that reaches all of them. It walks a LIST, and
"every actor in the world" is a list you already have.

### What you do

1. Add **for each actor ⟨coin⟩ in ⟨all actors⟩** to the end of \`main.world\`.
2. Inside it, **set sprite of ⟨coin⟩** to the coin picture.
3. Run it. All six change, from one block.
4. Add a seventh Coin to the world, above the loop, and run it again. You did
   not have to touch the loop — which is the difference between six blocks and
   one.
`.trim()},ed={name:"State the world shares",description:"Two Labels that disagree about how many lives are left.",source:g({world:m({name:"My World",rows:[i("actors/label",[l(90,110),U("TextProperty",Y("Lives: 3"))]),i("actors/label",[l(230,210),U("TextProperty",Y("Lives: 2"))])]}),stockActors:["label"]}),instructions:`
## State the world shares

Two Labels, and they disagree. One says **Lives: 3** and the other says
**Lives: 2**, and neither is wrong, because the number of lives is not written
down anywhere — it is typed out twice, and the two copies have drifted apart.

The last lesson gave a name to a value inside one stack of blocks. This is the
other kind of name: one the **world** holds, that anything in the world can
read. There is then one number, and a Label showing the wrong one is not a
thing that can happen.

### What you do

1. At the top of \`main.world\`, under \`define world\`, add
   **define number lives with default 3**.
2. Set each Label's text to **join ⟨"Lives: "⟩ ⟨lives⟩** — the *lives* block
   is in the Actor drawer, and it appeared the moment you declared it.
3. Run it. Both say the same thing.
4. Change the default to **5**. Both change, because there is one number now.
`.trim()},_a=e=>({block:{type:"text_join",inputs:{ADD0:Y("lamp "),ADD1:e}}}),va=()=>({block:{type:"world_get_WorldsMain_IdProperty"}}),td={levelData:{showFileBrowser:!0},name:"State an actor carries",description:"Two Lamps that cannot tell each other apart.",source:g({world:m({name:"My World",rows:[qe("number","id","1"),i("actors/lamp",[l(110,160),U("TextProperty",_a(va()))]),i("actors/lamp",[l(230,160),U("TextProperty",_a(va()))])]}),actors:{lamp:re("Lamp",[n("Writing#ShowsTextTrait"),ue("text")],{drawing:{width:96,height:24,commands:[F(K("#ffcc66")),He(48,12)]}})},rules:["writing"]}),instructions:`
## State an actor carries

Two Lamps, and both say **lamp 1**. The number they read is the world's, and
the world has exactly one of it — so however you set it, you set it for both.
There is nowhere for one Lamp to remember something the other does not.

A world's state is shared on purpose, and that is what the last lesson was for.
An actor's is the opposite on purpose: declared in the **actor's own file**,
every Lamp gets its own copy, and that is what makes two of a kind two things
rather than one thing drawn twice.

So this is also the first lesson with a second file. Every one before it said
everything it had to say in \`main.world\`. A world can describe an actor that
remembers something — the same \`define property\` works there — but what it
remembers belongs to the KIND rather than to this world's copy of it, and a
kind written in a file of its own is one another world can use.

### What you do

1. Open \`actors/lamp.actor\` — the file browser is on the left, and this is the
   first lesson that has needed it. Under \`define actor\`, add
   **define number id with default 1**.
2. In \`main.world\`, in each \`add actor\` body, **set id of ⟨this actor⟩** —
   1 for the first, 2 for the second — before the text is set.
3. Change both Labels to read **join ⟨"lamp "⟩ ⟨id of this actor⟩**, the Lamp's
   own \`id\` rather than the world's.
4. Delete the world's \`define number id\`. Nothing breaks: nothing needed it.
`.trim()},od=["BREAD","MILK","JAM"],Ca=e=>({block:{type:"world_vector_component",fields:{COMPONENT:e},inputs:{VEC:{block:{type:"world_random_place"}}}}}),ad=e=>i("actors/label",[U("TextProperty",e),{type:"world_set_position",inputs:{ACTOR:E(),X:Ca("x"),Y:Ca("y")}}]),nd={name:"More than one of something",description:"Three things to remember, remembered three separate times.",source:g({world:m({name:"My World",rows:od.map(e=>ad(Y(e)))}),stockActors:["label"]}),instructions:`
## More than one of something

Three things to remember, and three stacks of blocks that each remember one. It
works, and it is the shape of every list nobody has written yet: a fourth thing
means a fourth stack, and moving them somewhere else means moving all three.

A **list** is one name for several things. What you can do with it that you
cannot do with three stacks is **walk it** — the same few blocks handle three
things, or four, or twenty, without changing.

### What you do

1. From the **Lists** drawer take **make a list of**, put the three words in it,
   and keep it in a variable: **set ⟨things⟩ to ⟨make a list of …⟩**.
2. Take away two of the three stacks, and wrap the one that is left in
   **for each word ⟨thing⟩ in ⟨things⟩**. Where the word used to be typed, put
   **⟨thing⟩** — the loop's own word.
3. Add a fourth thing to the list. A fourth note turns up, and you did not touch
   the loop.
`.trim()},Ea=()=>({block:{type:"world_get_WorldsMain_CountedProperty"}}),rd={name:"Somebody already counted",description:"A hand-rolled tally, and a rule that has one with an ending in it.",source:g({world:m({name:"My World",rows:[qe("number","counted","0"),i(s("target"),[l(160,160)])],actors:[{id:"target",name:"Target",rows:[d("coin.png")]}],handlers:[{type:"world_on_Mouse_IsPressedEvent",fields:{FILTER0:"left"},next:{block:{type:"world_set_WorldsMain_CountedProperty",inputs:{VALUE:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:Ea(),B:b(1)}}}},next:{block:{type:"world_print",inputs:{VALUE:Ea()}}}}}}]}),sprites:["coin"],rules:["mouse"]}),instructions:`
## Somebody already counted

Click the Target. A number called \`counted\` goes up by one and prints itself,
and it is correct: it counts.

What it cannot do is say when the count is **enough**. A tally is a number; a
game wants the moment — the click that wins — and that moment is not in the
number. You would have to test for it everywhere you counted.

The **Scoring** rule is this counter, written by somebody else, with the moment
already in it.

### What you do

1. Add a rule, and pick **Scoring**. Read the row before you take it.
2. In the handler, use **add ⟨1⟩ to the score** instead of setting
   \`counted\`, and delete the \`print\` under it.
3. Delete \`define number counted\` — nothing needs it now.
4. In the world, **set target score to 5**, and add the handler
   **when the target is reached**, with **print ⟨get score⟩** in it.
5. Click six times. One line, saying 5: the click that was enough, and nothing
   about the sixth.
`.trim()},sd={showFileBrowser:!1},id={"origin/first-world":Ri,"input/arrows":Oi,"input/press":Wi,"input/mouse":Li,"input/two-hands":Ui,"motion/speed":Si,"motion/gravity":Ii,"motion/force":Gi,"motion/units":Fi,"motion/drag":Hi,"motion/tween":Vi,"logic/if":ji,"logic/collision":$i,"logic/and-or":Ki,"logic/kinds":Ji,"memory/variable":zl,"memory/many":Zl,"memory/world-state":ed,"memory/actor-state":td,"memory/lists":nd,"memory/score":rd,"look/sprite":Pi,"look/drawing":Bi,"look/background":xi,"look/animation":Ni,"look/effect":Mi,"place/position":Di,"place/edges":Xl,"place/map":qi,"place/camera":Xi,"place/camera-feel":zi,"place/layers":Zi,"platformer/jump":el,"platformer/jetpack":tl,"platformer/ladders":ol,"platformer/surfaces":al,"platformer/enemies":nl,"platformer/hunter":rl,"platformer/pickups":sl,"platformer/hazards":il,"platformer/level":ll,"arcade/bounce":dl,"arcade/paddle":hl,"arcade/zap":ul,"arcade/bricks":wl,"arcade/waves":gl,"story/text":ml,"story/reveal":fl,"story/script":Al,"story/choice":bl,"story/scene":kl,"simulation/many":Tl,"simulation/steering":_l,"making/property":Cl,"puzzle/grid":El,"puzzle/push":Rl,"simulation/neighbours":Ql,"adventure/rooms":Fl,"adventure/keys":Hl,"simulation/emergent":Vl,"simulation/dials":$l,"puzzle/turns":Jl,"puzzle/goal":Gl,"puzzle/undo":ql,"adventure/people":Ol,"adventure/errand":Sl,"making/change":Il,"making/trait":Bl,"making/behavior":xl,"adventure/world":Nl,"making/read":Ml,"making/block":Ll,"platformer/ground":Ul},Qo=Object.fromEntries(Object.entries(id).map(([e,t])=>[e,{...t,levelData:{...sd,...t.levelData}}])),Tp=e=>{const t=Qo[e];return t&&{longInstructions:t.instructions,source:t.source,...t.levelData?{levelData:t.levelData}:{}}},Qe=e=>e*L+L/2,Ye=(e,t,o,a)=>({type:e,id:t,properties:{positional:{position:{x:Qe(o),y:Qe(a)}}}}),sr=[1,2,3,4,5,6,7,8],ir=[1,2],Dt=[1,2,3,4,5,6,7,8],lr=[0,1,2,3,4,5,6,7,8,9],ld=JSON.stringify({type:"map",size:{width:10,height:10},tile:{width:L,height:L},actors:[...lr.map(e=>Ye("actors/wall",`Roof${e}`,e,0)),...Dt.map(e=>Ye("actors/wall",`Left${e}`,0,e)),...Dt.map(e=>Ye("actors/wall",`Right${e}`,9,e)),...ir.flatMap(e=>sr.map(t=>Ye("actors/brick",`Brick${e}_${t}`,t,e))),Ye("actors/paddle","Paddle",4,8),Ye("actors/ball","Ball",5,5)]},null,2),Le=(e,t)=>({type:e,inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"math_number",fields:{NUM:t}}}}}),dr=(e,t={x:20,y:240})=>({type:"world_on_Input_IsPressedEvent",fields:{FILTER0:"space"},...t,next:{block:{type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:{block:{type:"world_vector_component",fields:{COMPONENT:"y"},inputs:{VEC:{block:{type:"world_get_Physics_VelocityProperty",inputs:{ACTOR:Ra(e)}}}}}},B:{block:{type:"math_number",fields:{NUM:0}}}}}},DO0:{block:cr(Ra(e),2.5,-2.5)}}}}}),Ra=e=>({block:{type:"world_actor_kind",fields:{ACTOR:e}}}),cr=(e,t,o)=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:e,VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:t,y:o}}}}}}),hr=()=>y([{type:"world_log",fields:{TEXT:"Ball lost!"}},{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:{block:{type:"math_number",fields:{NUM:Qe(5)}}},Y:{block:{type:"math_number",fields:{NUM:Qe(5)}}}}},cr({block:{type:"world_this_actor"}},0,0)]),dd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Wall"},next:{block:y([c("Solid Bodies#SolidTrait"),Le("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_sprite",fields:{SPRITE:"wall.png"}}])}}]}}),cd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Brick"},next:{block:y([c("Solid Bodies#SolidTrait"),c("Collection#CanBeCollectedTrait"),Le("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_sprite",fields:{SPRITE:"box.png"}}])}}]}}),hd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Paddle"},next:{block:y([{type:"world_use_trait",fields:{TRAIT:"Arrow Keys#MovesAcrossTrait"}},{type:"world_use_trait",fields:{TRAIT:"Input#TakesKeyboardInputTrait"}},{type:"world_use_trait",fields:{TRAIT:"Solid Bodies#SolidTrait"}},{type:"world_set_sprite",fields:{SPRITE:"ground.png"}},Le("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_Space_ScaleProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:{block:{type:"math_number",fields:{NUM:2}}},Y:{block:{type:"math_number",fields:{NUM:.5}}}}}])}}]}}),pd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Ball"},next:{block:y([{type:"world_use_trait",fields:{TRAIT:"Physics#CanMoveTrait"}},{type:"world_use_trait",fields:{TRAIT:"Collection#CollectsTrait"}},{type:"world_set_sprite",fields:{SPRITE:"ball.png"}}])}},{type:"world_on_Collection_CollectsEvent",x:20,y:320,next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:"actors/brick"},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}}}}}}}},{type:"world_on_Space_LeftMapEvent",x:20,y:460,next:{block:hr()}}]}}),ud=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Breakout"},next:{block:y([{type:"world_load_map",fields:{MAP:"maps/breakout"}}])}},dr("actors/ball")]}}),pr={inputRuleFile:{name:"input.rule",language:"rule",contents:Ge,folderId:"rules"},arrowsRuleFile:{name:"arrows.rule",language:"rule",contents:Mo,folderId:"rules"},motionRuleFile:{name:"motion.rule",language:"rule",contents:wt,folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:ut,folderId:"rules"},solidRuleFile:{name:"solid.rule",language:"rule",contents:Vt,folderId:"rules"},collectRuleFile:{name:"collect.rule",language:"rule",contents:Ft,folderId:"rules"},...be(["ground","wall","ball","box"])},wd={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:ud,folderId:"worlds",active:!0,open:!0},paddle:{name:"paddle.actor",language:"actor",contents:hd,folderId:"actors"},ball:{name:"ball.actor",language:"actor",contents:pd,folderId:"actors"},brick:{name:"brick.actor",language:"actor",contents:cd,folderId:"actors"},wall:{name:"wall.actor",language:"actor",contents:dd,folderId:"actors"},breakoutMap:{name:"breakout.map",language:"map",contents:ld,folderId:"maps"},...pr},open:["main"]},ro="breakoutBrickDef",Oa="breakoutWallDef",Sa="breakoutPaddleDef",tt="breakoutBallDef",st=e=>`local:${e}`,je=(e,t,o)=>({id:e,properties:{positional:{position:{x:Qe(t),y:Qe(o)}}}}),At=(e,t,o)=>({type:"world_create_in_map",id:e,fields:{ACTOR:st(t),PLACEMENTS:o}}),bt=(e,t,o,a)=>({type:"world_actor",id:e,x:o,y:420,fields:{NAME:t},next:{block:y(a)}}),yd=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Breakout"},next:{block:y([At("placeWalls",Oa,[...lr.map(e=>je(`roof${e}`,e,0)),...Dt.map(e=>je(`left${e}`,0,e)),...Dt.map(e=>je(`right${e}`,9,e))]),At("placeBricks",ro,ir.flatMap(e=>sr.map(t=>je(`b${e}_${t}`,t,e)))),At("placePaddle",Sa,[je("paddle",4,8)]),At("placeBall",tt,[je("ball",5,5)])])}},bt(Oa,"Wall",20,[c("Solid Bodies#SolidTrait"),Le("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_sprite",fields:{SPRITE:"wall.png"}}]),bt(ro,"Brick",370,[c("Solid Bodies#SolidTrait"),c("Collection#CanBeCollectedTrait"),Le("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_sprite",fields:{SPRITE:"box.png"}}]),bt(Sa,"Paddle",720,[c("Arrow Keys#MovesAcrossTrait"),c("Input#TakesKeyboardInputTrait"),c("Solid Bodies#SolidTrait"),Le("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_sprite",fields:{SPRITE:"ground.png"}},{type:"world_set_Space_ScaleProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:{block:{type:"math_number",fields:{NUM:2}}},Y:{block:{type:"math_number",fields:{NUM:.5}}}}}]),bt(tt,"Ball",1110,[c("Physics#CanMoveTrait"),c("Collection#CollectsTrait"),{type:"world_set_sprite",fields:{SPRITE:"ball.png"}}]),{type:"world_on_Collection_CollectsEvent",x:20,y:780,inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:st(tt)}}}},next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:st(ro)},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}}}}}}}},{type:"world_on_Space_LeftMapEvent",x:520,y:780,inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:st(tt)}}}},next:{block:hr()}},dr(st(tt),{x:1020,y:780})]}}),gd={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:yd,folderId:"worlds",active:!0,open:!0},...pr},open:["main"]},Ia=e=>e*L+L/2,ur=48,Jo=10,Io=(e,t,o,a)=>({type:e,id:t,properties:{positional:{position:{x:Ia(o),y:Ia(a)}}}}),md=3,fd=7,Ad=[4,3,5,4,6,5],Pa=Ad.map((e,t)=>[8+t*fd,e]),bd=(e,t)=>{const o=[];for(let a=0;a<Jo;a++)(a<t||a>=t+md)&&o.push(a);return o.map(a=>Io("actors/pipe",`Pipe${e}_${a}`,e,a))},wr=[Io("actors/bird","Bird",2,5),...Pa.flatMap(([e,t])=>bd(e,t)),...Pa.map(([e,t],o)=>Io("actors/coin",`Coin${o}`,e,t+1))],kd=JSON.stringify({type:"map",size:{width:ur,height:Jo},tile:{width:L,height:L},actors:wr},null,2),ne=()=>({block:{type:"world_this_actor"}}),he=e=>({block:{type:"math_number",fields:{NUM:e}}}),yr=(e,t)=>({block:{type:"world_vector",fields:{VECTOR:{x:e,y:t}}}}),gr=9,mr=1,fr=-2.8,Td=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Bird"},next:{block:y([c("Gravity#AffectedByGravityTrait"),c("Input#TakesKeyboardInputTrait"),c("Collection#CollectsTrait"),{type:"world_set_sprite",fields:{SPRITE:"ship.png"}},{type:"world_set_Space_RotationProperty",inputs:{ACTOR:ne(),VALUE:he(90)}},{type:"world_set_Gravity_GravityScaleProperty",inputs:{ACTOR:ne(),VALUE:he(0)}}])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"up arrow"},x:20,y:320,next:{block:y([{type:"world_set_Gravity_GravityScaleProperty",inputs:{ACTOR:ne(),VALUE:he(1)}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:ne(),VALUE:yr(mr,fr)}}])}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:"actors/pipe"},x:20,y:460,next:{block:y([{type:"world_log",fields:{TEXT:"Crashed!"}},{type:"world_remove_actor",inputs:{ACTOR:ne()}}])}},{type:"world_on_Space_LeftMapEvent",x:20,y:580,next:{block:y([{type:"world_log",fields:{TEXT:"Out of the world!"}},{type:"world_remove_actor",inputs:{ACTOR:ne()}}])}},{type:"world_on_Collection_CollectsEvent",x:20,y:700,next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:"actors/coin"},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:ne()}}}}}}}}}}]}}),_d=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Pipe"},next:{block:y([c("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"pipe.png"}}])}}]}}),vd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Coin"},next:{block:y([c("Collection#CanBeCollectedTrait"),{type:"world_set_sprite",fields:{SPRITE:"coin.png"}}])}}]}}),Ba="flappyChaseCamera",Cd=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Flappy"},next:{block:y([{type:"world_set_Gravity_AmountOfGravityProperty",inputs:{VALUE:he(gr)}},{type:"world_load_map",fields:{MAP:"maps/flappy"}},{type:"world_define_camera",id:Ba,fields:{NAME:"Chase"},inputs:{DO:{block:y([c("Camera Follow#FollowsTrait"),c("Camera Confined#ConfinedToTheMapTrait"),{type:"world_set_CameraFollow_ActorToFollowProperty",inputs:{ACTOR:{block:{type:"world_this_camera"}},VALUE:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/bird"}}}}}])}}},{type:"world_use_camera",fields:{CAMERA:`camera:${Ba}`}}])}}]}}),Ar={motionRuleFile:{name:"motion.rule",language:"rule",contents:wt,folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:ut,folderId:"rules"},solidRuleFile:{name:"solid.rule",language:"rule",contents:Vt,folderId:"rules"},gravityRuleFile:{name:"gravity.rule",language:"rule",contents:Do,folderId:"rules"},inputRuleFile:{name:"input.rule",language:"rule",contents:Ge,folderId:"rules"},collectRuleFile:{name:"collect.rule",language:"rule",contents:Ft,folderId:"rules"},cameraRuleFile:{name:"camera.rule",language:"rule",contents:Vr,folderId:"rules"},cameraFollowRuleFile:{name:"cameraFollow.rule",language:"rule",contents:Hr,folderId:"rules"},cameraConfinedRuleFile:{name:"cameraConfined.rule",language:"rule",contents:Fr,folderId:"rules"},...be(["ship","ground","pipe","coin"])},Ed={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:Cd,folderId:"worlds",active:!0,open:!0},bird:{name:"bird.actor",language:"actor",contents:Td,folderId:"actors"},pipe:{name:"pipe.actor",language:"actor",contents:_d,folderId:"actors"},coin:{name:"coin.actor",language:"actor",contents:vd,folderId:"actors"},flappyMap:{name:"flappy.map",language:"map",contents:kd,folderId:"maps"},...Ar},open:["main"]},St="flappyBirdDef",so="flappyPipeDef",io="flappyCoinDef",xa="flappyChaseCameraSingle",Wt=e=>`local:${e}`,br=e=>({block:{type:"world_actor_kind",fields:{ACTOR:Wt(e)}}}),lo=(e,t,o)=>({type:"world_create_in_map",id:e,fields:{ACTOR:Wt(t),PLACEMENTS:wr.filter(a=>a.type===o).map(({id:a,properties:r})=>({id:a,properties:r}))}}),co=(e,t,o,a)=>({type:"world_actor",id:e,x:o,y:460,fields:{NAME:t},next:{block:y(a)}}),kt=(e,t,o,a)=>({type:e,x:20,y:t,...Object.keys(o).length?{fields:o}:{},inputs:{ACTOR:br(St)},next:{block:y(a)}}),Na=e=>({type:"world_log",fields:{TEXT:e}}),Ma=()=>({type:"world_remove_actor",inputs:{ACTOR:ne()}}),Rd=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Flappy"},next:{block:y([{type:"world_set_Gravity_AmountOfGravityProperty",inputs:{VALUE:he(gr)}},{type:"world_set_map_size",inputs:{X:he(ur),Y:he(Jo)}},lo("placePipes",so,"actors/pipe"),lo("placeCoins",io,"actors/coin"),lo("placeBird",St,"actors/bird"),{type:"world_define_camera",id:xa,fields:{NAME:"Chase"},inputs:{DO:{block:y([c("Camera Follow#FollowsTrait"),c("Camera Confined#ConfinedToTheMapTrait"),{type:"world_set_CameraFollow_ActorToFollowProperty",inputs:{ACTOR:{block:{type:"world_this_camera"}},VALUE:br(St)}}])}}},{type:"world_use_camera",fields:{CAMERA:`camera:${xa}`}}])}},co(St,"Bird",20,[c("Gravity#AffectedByGravityTrait"),c("Input#TakesKeyboardInputTrait"),c("Collection#CollectsTrait"),{type:"world_set_sprite",fields:{SPRITE:"ship.png"}},{type:"world_set_Space_RotationProperty",inputs:{ACTOR:ne(),VALUE:he(90)}},{type:"world_set_Gravity_GravityScaleProperty",inputs:{ACTOR:ne(),VALUE:he(0)}}]),co(so,"Pipe",420,[c("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"pipe.png"}}]),co(io,"Coin",800,[c("Collection#CanBeCollectedTrait"),{type:"world_set_sprite",fields:{SPRITE:"coin.png"}}]),kt("world_on_Input_PressesEvent",700,{FILTER0:"up arrow"},[{type:"world_set_Gravity_GravityScaleProperty",inputs:{ACTOR:ne(),VALUE:he(1)}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:ne(),VALUE:yr(mr,fr)}}]),kt("world_on_Collisions_StartsTouchingEvent",900,{FILTER0:Wt(so)},[Na("Crashed!"),Ma()]),kt("world_on_Space_LeftMapEvent",1060,{},[Na("Out of the world!"),Ma()]),kt("world_on_Collection_CollectsEvent",1220,{},[{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:Wt(io)},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:ne()}}}}}}}}])]}}),Od={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:Rd,folderId:"worlds",active:!0,open:!0},...Ar},open:["main"]},Da=e=>e*L+L/2,Lt=26,Ut=16,z=(e,t,o,a)=>({type:e,id:t,properties:{positional:{position:{x:Da(o),y:Da(a)}}}}),Sd=[[11,3,7],[4,2,6]],Id=[["actors/belt",8,11,16],["actors/sludge",12,18,22],["actors/ice",5,19,23]],Wa=(e,t,o,a,r)=>{const h=[];for(let p=a;p<=r;p++)h.push(z(e,`${t}_${p}`,p,o));return h},Pd=()=>{const e=[];for(let t=0;t<Lt;t++)e.push(z("actors/wall",`Ceiling${t}`,t,0)),e.push(z("actors/wall",`Floor${t}`,t,Ut-1));for(let t=1;t<Ut-1;t++)e.push(z("actors/wall",`Left${t}`,0,t)),e.push(z("actors/wall",`Right${t}`,Lt-1,t));return e},Bd=[["actors/fuelSmall",5,10],["actors/fuelCan",13,7],["actors/fuelSmall",20,11],["actors/fuelCan",21,4],["actors/fuelCan",4,3]],xd=[[6,14],[9,14],[17,14],[4,10],[6,10],[12,7],[22,11],[5,3]],Nd=[[3,3],[22,4],[20,11]],La=[24,14],Md=[["actors/ball",12,14],["actors/rocket",10,3],["actors/robot",20,14]],Dd=0,Wd=0,Ld=2,Ud=[10,11,12,13,14],Gd=[...Pd(),...Ud.map(e=>z("actors/ladder",`Rung${e}`,Ld,e)),...Sd.flatMap(([e,t,o])=>Wa("actors/ledge",`Ledge${e}`,e,t,o)),...Id.flatMap(([e,t,o,a])=>Wa(e,`${e.split("/")[1]}${t}`,t,o,a)),...Bd.map(([e,t,o],a)=>z(e,`Can${a}`,t,o)),...xd.map(([e,t],o)=>z("actors/coin",`Coin${o}`,e,t)),...Nd.map(([e,t],o)=>z("actors/gem",`Gem${o}`,e,t)),...Md.map(([e,t,o],a)=>z(e,`Enemy${a}`,t,o)),z("actors/door","Door",La[0],La[1]),z("actors/scoreboard","Scoreboard",20,1),z("actors/fuelBar","Gauge",4,1),z("actors/pilot","Pilot",2,14)],Fd=JSON.stringify({type:"map",size:{width:Lt,height:Ut},tile:{width:L,height:L},actors:Gd},null,2),N=()=>({block:{type:"world_this_actor"}}),j=e=>({block:{type:"math_number",fields:{NUM:e}}}),kr=e=>({block:{type:"world_actor_kind",fields:{ACTOR:e}}}),Hd=100,Vd=50,Ua=(e,t,o)=>({type:"world_on_Collection_CollectsEvent",x:20,y:o,fields:{FILTER0:e},inputs:{ACTOR:N()},next:{block:{type:"world_do_Jetpack_GiveFuelAction",inputs:{WHO:N(),AMOUNT:j(t)}}}}),Po=e=>({type:"world_play_animation",fields:{ANIMATION:e}}),Ga=()=>({type:"world_set_sprite",fields:{SPRITE:"pilot.png"}}),Tt=(e,t,o)=>({type:`world_on_${e}`,x:20,y:o,inputs:{ACTOR:N()},next:{block:t}}),Yd=e=>({block:{type:"world_count_of_kind",fields:{TYPE:e},inputs:{LIST:{block:{type:"world_all_actors"}}}}}),Tr=e=>({block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:Yd(e),B:j(0)}}}),_r=(e,t)=>({type:"controls_if",inputs:{IF0:e,DO0:{block:t}}}),jd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Pilot"},next:{block:y([c("Gravity#AffectedByGravityTrait"),c("Input#TakesKeyboardInputTrait"),c("Arrow Keys#MovesAcrossTrait"),c("Jumping#JumpsTrait"),c("Jetpack#FliesWithAJetpackTrait"),c("Climbing#ClimbsWithArrowKeysTrait"),c("Surfaces#StandsOnSurfacesTrait"),c("Health#HasHealthTrait"),c("Collection#CollectsTrait"),{type:"world_set_sprite",fields:{SPRITE:"pilot.png"}},{type:"world_set_Jumping_JumpStrengthProperty",inputs:{ACTOR:N(),VALUE:j(2.6)}},{type:"world_set_Health_MostHealthProperty",inputs:{ACTOR:N(),VALUE:j(6)}},{type:"world_set_Health_HealthProperty",inputs:{ACTOR:N(),VALUE:j(6)}},{type:"world_set_Health_MercyTimeProperty",inputs:{ACTOR:N(),VALUE:j(1)}},{type:"world_set_Jetpack_FuelProperty",inputs:{ACTOR:N(),VALUE:j(50)}}])}},{type:"world_on_Input_PressesEvent",x:20,y:260,fields:{FILTER0:"space"},next:{block:y([{type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:N()}},{type:"world_do_Jetpack_StartFlyingAction",inputs:{VALUE:N()}}])}},{type:"world_on_Input_ReleasesEvent",x:20,y:400,fields:{FILTER0:"space"},next:{block:{type:"world_do_Jetpack_StopFlyingAction",inputs:{VALUE:N()}}}},{type:"world_on_Jetpack_RunsOutOfFuelEvent",x:20,y:520,inputs:{ACTOR:N()},next:{block:{type:"world_log",fields:{TEXT:"Out of fuel!"}}}},Ua("actors/fuelCan",Hd,640),Ua("actors/fuelSmall",Vd,760),Tt("Jetpack_StartsFlyingEvent",Po("pilotFly"),880),Tt("Jetpack_StopsFlyingEvent",Ga(),1e3),Tt("Climbing_StartsClimbingEvent",Po("pilotClimb"),1120),Tt("Climbing_StopsClimbingEvent",Ga(),1240),{type:"world_on_Collection_CollectsEvent",x:20,y:1360,fields:{FILTER0:"actors/coin"},inputs:{ACTOR:N()},next:{block:{type:"world_do_Scoring_AddToTheScoreAction",inputs:{VALUE:j(1)}}}},{type:"world_on_Health_RunsOutOfHealthEvent",x:20,y:1600,inputs:{ACTOR:N()},next:{block:{type:"world_do_Goals_LoseTheGameAction"}}},{type:"world_on_Collisions_StartsTouchingEvent",x:20,y:1480,fields:{FILTER0:"actors/door"},inputs:{ACTOR:N()},next:{block:_r(Tr("actors/gem"),{type:"world_do_Goals_WinTheGameAction"})}}]}}),Fa=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:y([c("Gravity#ActsAsGroundTrait"),c("Solid Bodies#SolidTrait"),{type:"world_set_sprite",fields:{SPRITE:t}}])}}]}}),ho=(e,t,o)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:y([c("Gravity#ActsAsGroundTrait"),c("Solid Bodies#SolidTrait"),c(o),{type:"world_set_sprite",fields:{SPRITE:t}}])}}]}}),$d=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Rung"},next:{block:y([c("Climbing#CanBeClimbedTrait"),c("Gravity#ActsAsGroundTrait"),{type:"world_set_sprite",fields:{SPRITE:"ladder.png"}}])}}]}}),Ha=(e,t,o,a,r)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:y([c("Turning#TurnsWhenItHitsSomethingTrait"),c("Boundaries#StaysAcrossTrait"),c("Boundaries#StaysDownTrait"),...a?[c("Gravity#AffectedByGravityTrait")]:[],c("Health#DealsDamageTrait"),{type:"world_set_sprite",fields:{SPRITE:t}},{type:"world_set_Turning_TurnByProperty",inputs:{ACTOR:N(),VALUE:j(o)}},{type:"world_set_Turning_HeadingProperty",inputs:{ACTOR:N(),VALUE:j(r)}},{type:"world_set_Turning_TravelSpeedProperty",inputs:{ACTOR:N(),VALUE:j(1.8)}}])}}]}}),Kd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Robot"},next:{block:y([c("Gravity#AffectedByGravityTrait"),c("Climbing#ClimbsTrait"),c("Prowling#ProwlsTrait"),c("Boundaries#StaysAcrossTrait"),c("Health#DealsDamageTrait"),{type:"world_set_sprite",fields:{SPRITE:"robot.png"}},{type:"world_set_Prowling_GoingProperty",inputs:{ACTOR:N(),VALUE:j(-1)}}])}},{type:"world_on_Space_CreatedEvent",x:20,y:200,inputs:{ACTOR:N()},next:{block:{type:"world_set_Prowling_ActorToHuntProperty",inputs:{ACTOR:N(),VALUE:{block:{type:"world_first_actor",inputs:{SOURCE:kr("actors/pilot")}}}}}}}]}}),Qd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Door"},next:{block:y([c("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"door.png"}}])}},{type:"world_trait_step",x:20,y:180,fields:{PHASE:"react",NAME:"open when the gems are gone"},inputs:{DO:{block:_r(Tr("actors/gem"),{type:"world_set_sprite",fields:{SPRITE:"doorOpen.png"},inputs:{ACTOR:N()}})}}}]}}),Jd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Scoreboard"},next:{block:y([c("Writing#ShowsTextTrait"),c("Scoring#WatchesTheScoreTrait"),c("Goals#WatchesTheEndingTrait"),{type:"world_show_as",fields:{ICON:"text"}},U("TextProperty",{block:{type:"text",fields:{TEXT:"COINS 0"}}})])}},{type:"world_define_drawing",x:20,y:180,fields:{WIDTH:96,HEIGHT:24},inputs:{DO:{block:y([F({block:{type:"world_get_Writing_TextColorProperty",inputs:{ACTOR:N()}}}),He(48,12)])}}},{type:"world_on_Scoring_SeesTheScoreChangeEvent",x:20,y:340,inputs:{ACTOR:N()},next:{block:U("TextProperty",{block:{type:"text_join",extraState:{itemCount:2},inputs:{ADD0:{block:{type:"text",fields:{TEXT:"COINS "}}},ADD1:{block:{type:"world_get_Scoring_ScoreProperty"}}}}})}},{type:"world_on_Goals_SeesTheGameWonEvent",x:20,y:460,inputs:{ACTOR:N()},next:{block:U("TextProperty",{block:{type:"text",fields:{TEXT:"YOU MADE IT OUT"}}})}},{type:"world_on_Goals_SeesTheGameLostEvent",x:20,y:580,inputs:{ACTOR:N()},next:{block:U("TextProperty",{block:{type:"text",fields:{TEXT:"CAUGHT"}}})}}]}}),po=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:y([c("Collection#CanBeCollectedTrait"),{type:"world_set_sprite",fields:{SPRITE:t}}])}}]}}),qd=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Fuel Bar"},next:{block:y([c("Progress#ShowsProgressTrait"),{type:"world_show_as",fields:{ICON:"bar"}},{type:"world_set_Space_ScaleProperty",inputs:{ACTOR:N(),X:j(1.5),Y:j(2)}}])}},{type:"world_trait_step",x:20,y:200,fields:{PHASE:"react",NAME:"follow the tank"},inputs:{DO:{block:{type:"world_set_Progress_FractionProperty",inputs:{ACTOR:N(),VALUE:{block:{type:"world_query_Jetpack_FuelFractionQuery",inputs:{ACTOR:{block:{type:"world_first_actor",inputs:{SOURCE:kr("actors/pilot")}}}}}}}}}}},{type:"world_define_drawing",x:20,y:360,fields:{WIDTH:Ot().width,HEIGHT:Ot().height},inputs:{DO:{block:y(Ot().commands)}}}]}}),Xd=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Jetpack"},next:{block:y([{type:"world_set_view_size",inputs:{X:j(Lt),Y:j(Ut)}},{type:"world_load_map",fields:{MAP:"maps/jetpack"}}])}}]}}),zd={folders:["worlds","actors","rules","maps","sprites","animations"],files:{main:{name:"main.world",language:"world",contents:Xd,folderId:"worlds",active:!0,open:!0},pilotActor:{name:"pilot.actor",language:"actor",contents:jd,folderId:"actors"},wallActor:{name:"wall.actor",language:"actor",contents:Fa("Wall","wall.png"),folderId:"actors"},ledgeActor:{name:"ledge.actor",language:"actor",contents:Fa("Ledge","ground.png"),folderId:"actors"},beltActor:{name:"belt.actor",language:"actor",contents:ho("Belt","conveyor.png","Surfaces#ConveysTrait"),folderId:"actors"},iceActor:{name:"ice.actor",language:"actor",contents:ho("Ice","ice.png","Surfaces#SlipperyTrait"),folderId:"actors"},sludgeActor:{name:"sludge.actor",language:"actor",contents:ho("Sludge","sludge.png","Surfaces#SlowsTrait"),folderId:"actors"},robotActor:{name:"robot.actor",language:"actor",contents:Kd,folderId:"actors"},ballActor:{name:"ball.actor",language:"actor",contents:Ha("Steel Ball","pinball.png",180,!0,Dd),folderId:"actors"},rocketActor:{name:"rocket.actor",language:"actor",contents:Ha("Rocket","rocket.png",90,!1,Wd),folderId:"actors"},coinActor:{name:"coin.actor",language:"actor",contents:JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Coin"},next:{block:y([c("Collection#CanBeCollectedTrait"),Po("coinSpin")])}}]}}),folderId:"actors"},gemActor:{name:"gem.actor",language:"actor",contents:po("Gem","gem.png"),folderId:"actors"},doorActor:{name:"door.actor",language:"actor",contents:Qd,folderId:"actors"},scoreboardActor:{name:"scoreboard.actor",language:"actor",contents:Jd,folderId:"actors"},ladderActor:{name:"ladder.actor",language:"actor",contents:$d,folderId:"actors"},fuelCanActor:{name:"fuelCan.actor",language:"actor",contents:po("Fuel Can","fuelCan.png"),folderId:"actors"},fuelSmallActor:{name:"fuelSmall.actor",language:"actor",contents:po("Small Can","fuelCanSmall.png"),folderId:"actors"},fuelBarActor:{name:"fuelBar.actor",language:"actor",contents:qd,folderId:"actors"},jetpackMap:{name:"jetpack.map",language:"map",contents:Fd,folderId:"maps"},motionRuleFile:{name:"motion.rule",language:"rule",contents:wt,folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:ut,folderId:"rules"},solidRuleFile:{name:"solid.rule",language:"rule",contents:Vt,folderId:"rules"},gravityRuleFile:{name:"gravity.rule",language:"rule",contents:Do,folderId:"rules"},jumpRuleFile:{name:"jump.rule",language:"rule",contents:sn,folderId:"rules"},jetpackRuleFile:{name:"jetpack.rule",language:"rule",contents:Xr,folderId:"rules"},inputRuleFile:{name:"input.rule",language:"rule",contents:Ge,folderId:"rules"},arrowsRuleFile:{name:"arrows.rule",language:"rule",contents:Mo,folderId:"rules"},boundsRuleFile:{name:"bounds.rule",language:"rule",contents:qr,folderId:"rules"},prowlingRuleFile:{name:"prowling.rule",language:"rule",contents:Jr,folderId:"rules"},turningRuleFile:{name:"turning.rule",language:"rule",contents:Qr,folderId:"rules"},healthRuleFile:{name:"health.rule",language:"rule",contents:rn,folderId:"rules"},scoreRuleFile:{name:"score.rule",language:"rule",contents:nn,folderId:"rules"},goalsRuleFile:{name:"goals.rule",language:"rule",contents:Kr,folderId:"rules"},writingRuleFile:{name:"writing.rule",language:"rule",contents:Ht,folderId:"rules"},surfacesRuleFile:{name:"surfaces.rule",language:"rule",contents:$r,folderId:"rules"},climbRuleFile:{name:"climb.rule",language:"rule",contents:jr,folderId:"rules"},collectRuleFile:{name:"collect.rule",language:"rule",contents:Ft,folderId:"rules"},progressRuleFile:{name:"progress.rule",language:"rule",contents:Yr,folderId:"rules"},...be(["pilot","ground","wall","ladder","conveyor","ice","sludge","coin","gem","door","doorOpen","pinball","rocket","robot","fuelCan","fuelCanSmall"]),...ai(["pilotFly","pilotClimb","coinSpin"])},open:["main"]},Se=e=>e*L+L/2,P=()=>({block:{type:"world_this_actor"}}),v=e=>({block:{type:"math_number",fields:{NUM:e}}}),Ee={id:"meteorsBallVar",name:"ball",type:"Actor"},Zd=JSON.stringify({variables:[Ee],blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Ship"},next:{block:y([c("Arrow Drive#DrivenByArrowKeysTrait"),c("Input#TakesKeyboardInputTrait"),c("Screen Wrap#WrapsAcrossTrait"),c("Screen Wrap#WrapsDownTrait"),c("Zapping#ZapsTrait"),c("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"ship.png"}}])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"space"},x:20,y:300,next:{block:{type:"world_do_Zapping_MakeZapAction",inputs:{VALUE:P()}}}},{type:"world_on_Zapping_ZapsEvent",x:20,y:440,next:{block:{type:"world_add_actor",fields:{ACTOR:"actors/energyBall",NAMED:"named",VAR:Ee},extraState:{named:!0},inputs:{DO:{block:y([{type:"world_set_position",inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:Ee}}},X:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:P()}}},Y:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"y"},inputs:{ACTOR:P()}}}}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:Ee}}},VALUE:{block:{type:"world_vector_rotate",inputs:{VECTOR:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-6}}}},DEGREES:{block:{type:"world_get_Space_RotationProperty",inputs:{ACTOR:P()}}}}}}}}])}}}}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:"actors/meteor"},x:520,y:300,inputs:{ACTOR:P()},next:{block:{type:"world_log",fields:{TEXT:"Ship lost!"}}}}]}}),ec=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Energy Ball"},next:{block:y([c("Physics#CanMoveTrait"),c("Collisions#CanCollideTrait"),c("Expiry#ExpiresTrait"),Le("world_set_Expiry_LifetimeProperty",1.2),{type:"world_set_sprite",fields:{SPRITE:"energyBall.png"}}])}}]}}),tc=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Meteor"},next:{block:y([c("Physics#CanMoveTrait"),c("Screen Wrap#WrapsAcrossTrait"),c("Screen Wrap#WrapsDownTrait"),c("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"asteroid.png"}}])}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:"actors/energyBall"},x:20,y:300,inputs:{ACTOR:P()},next:{block:y([{type:"world_log",fields:{TEXT:"Rock broken up!"}},{type:"world_remove_actor",inputs:{ACTOR:{block:{type:"world_event_actor"}}}},{type:"world_remove_actor",inputs:{ACTOR:P()}}])}}]}}),oc=(e,t)=>({type:"world_add_actor",fields:{ACTOR:"actors/meteor"},inputs:{DO:{block:y([{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:v(Se(e)),Y:v(Se(t))}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector_rotate",inputs:{VECTOR:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-1.2}}}},DEGREES:{block:{type:"math_random_int",inputs:{FROM:v(0),TO:v(359)}}}}}}}}])}}}),qo=[[1,1],[5,0],[8,2],[8,7],[4,9],[1,6]],ac=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Asteroids"},next:{block:y([{type:"world_add_actor",fields:{ACTOR:"actors/ship"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:v(Se(4)),Y:v(Se(4))}}}}},...qo.map(([e,t])=>oc(e,t))])}}]}}),vr={inputRuleFile:{name:"input.rule",language:"rule",contents:Ge,folderId:"rules"},driveRuleFile:{name:"drive.rule",language:"rule",contents:ts,folderId:"rules"},motionRuleFile:{name:"motion.rule",language:"rule",contents:wt,folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:ut,folderId:"rules"},wrapRuleFile:{name:"wrap.rule",language:"rule",contents:es,folderId:"rules"},zapsRuleFile:{name:"zaps.rule",language:"rule",contents:Zr,folderId:"rules"},expiresRuleFile:{name:"expires.rule",language:"rule",contents:zr,folderId:"rules"},...be(["ship","asteroid","energyBall"])},nc={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:ac,folderId:"worlds",active:!0,open:!0},ship:{name:"ship.actor",language:"actor",contents:Zd,folderId:"actors"},energyBall:{name:"energyBall.actor",language:"actor",contents:ec,folderId:"actors"},meteor:{name:"meteor.actor",language:"actor",contents:tc,folderId:"actors"},...vr},open:["main"]},ot="meteorsShipDef",uo="meteorsEnergy BallDef",_t="meteorsMeteorDef",$e=e=>`local:${e}`,vt=e=>({block:{type:"world_actor_kind",fields:{ACTOR:$e(e)}}}),rc=(e,t,o,a)=>{const r=(a*360/qo.length+25)*(Math.PI/180),h=1.2;return{id:e,properties:{positional:{position:{x:Se(t),y:Se(o)}},Can_Move:{velocity:{x:Number((Math.sin(r)*h).toFixed(3)),y:Number((-Math.cos(r)*h).toFixed(3))}}}}},wo=(e,t,o,a)=>({type:"world_actor",id:e,x:o,y:460,fields:{NAME:t},next:{block:y(a)}}),sc=JSON.stringify({variables:[Ee],blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Meteors"},next:{block:y([{type:"world_create_in_map",id:"placeShip",fields:{ACTOR:$e(ot),PLACEMENTS:[{id:"ship",properties:{positional:{position:{x:Se(4),y:Se(4)}}}}]}},{type:"world_create_in_map",id:"placeMeteors",fields:{ACTOR:$e(_t),PLACEMENTS:qo.map(([e,t],o)=>rc(`m${o}`,e,t,o))}}])}},wo(ot,"Ship",20,[c("Arrow Drive#DrivenByArrowKeysTrait"),c("Input#TakesKeyboardInputTrait"),c("Screen Wrap#WrapsAcrossTrait"),c("Screen Wrap#WrapsDownTrait"),c("Zapping#ZapsTrait"),c("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"ship.png"}}]),wo(uo,"Energy Ball",340,[c("Physics#CanMoveTrait"),c("Collisions#CanCollideTrait"),c("Expiry#ExpiresTrait"),{type:"world_set_Expiry_LifetimeProperty",inputs:{ACTOR:P(),VALUE:v(1.2)}},{type:"world_set_sprite",fields:{SPRITE:"energyBall.png"}}]),wo(_t,"Meteor",660,[c("Physics#CanMoveTrait"),c("Screen Wrap#WrapsAcrossTrait"),c("Screen Wrap#WrapsDownTrait"),c("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"asteroid.png"}}]),{type:"world_on_Input_PressesEvent",fields:{FILTER0:"space"},x:20,y:820,inputs:{ACTOR:vt(ot)},next:{block:{type:"world_do_Zapping_MakeZapAction",inputs:{VALUE:P()}}}},{type:"world_on_Zapping_ZapsEvent",x:20,y:960,inputs:{ACTOR:vt(ot)},next:{block:{type:"world_add_actor",fields:{ACTOR:$e(uo),NAMED:"named",VAR:Ee},extraState:{named:!0},inputs:{DO:{block:y([{type:"world_set_position",inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:Ee}}},X:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:P()}}},Y:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"y"},inputs:{ACTOR:P()}}}}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:Ee}}},VALUE:{block:{type:"world_vector_rotate",inputs:{VECTOR:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-6}}}},DEGREES:{block:{type:"world_get_Space_RotationProperty",inputs:{ACTOR:P()}}}}}}}}])}}}}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:$e(uo)},x:900,y:820,inputs:{ACTOR:vt(_t)},next:{block:y([{type:"world_log",fields:{TEXT:"Rock broken up!"}},{type:"world_remove_actor",inputs:{ACTOR:{block:{type:"world_event_actor"}}}},{type:"world_remove_actor",inputs:{ACTOR:P()}}])}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:$e(_t)},x:900,y:1060,inputs:{ACTOR:vt(ot)},next:{block:{type:"world_log",fields:{TEXT:"Ship lost!"}}}}]}}),ic={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:sc,folderId:"worlds",active:!0,open:!0},...vr},open:["main"]},Bo=["The door creaks open. Someone is standing in the hall.","“You came,” she says. “I wasn’t sure that you would.”","Answer her? Press the LEFT arrow for yes, the RIGHT arrow for no.","“I said I would.” She looks at the floor, and then at you.","You say nothing at all. The hall is very quiet.","The door closes behind you, and that is that."],lc=6,Ue=()=>({block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}),Va=()=>({block:{type:"world_actor_kind",fields:{ACTOR:"actors/portrait"}}}),dc=e=>({block:{type:"world_get_Conversation_LineProperty",inputs:{ACTOR:e}}}),it=e=>({block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:dc(Ue()),B:v(e)}}}),Cr=(e,t=Ue())=>({type:"world_do_RevealsText_SayAction",inputs:{ACTOR:t,VALUE:{block:{type:"text",fields:{TEXT:e}}}}}),cc="The Hall. Press SPACE to begin.",Ya=(e,t,o)=>({type:"world_play_tween_here",fields:{CURVE:"ending slowly"},inputs:{ACTOR:e,SECONDS:v(o),DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:P(),VALUE:v(t)}}}}}),hc=()=>{const e=Bo.map((t,o)=>{const a=[Cr(t)];return o===0&&a.push(Ya(Va(),1,.4)),o===Bo.length-1&&a.push(Ya(Va(),0,.3)),{test:it(o+1),body:a}});return{type:"controls_if",extraState:{elseIfCount:e.length-1},inputs:Object.fromEntries(e.flatMap((t,o)=>[[`IF${o}`,t.test],[`DO${o}`,{block:y(t.body)}]]))}},yo=(e,t,o)=>({type:"world_on_Input_IsPressedEvent",fields:{FILTER0:e},x:420,y:t,next:{block:y(o)}}),pc=()=>({type:"world_do_Conversation_MakeSayTheNextThingAction",inputs:{VALUE:Ue()}}),go=e=>({type:"world_do_Conversation_SendToLineAction",inputs:{WHO:Ue(),WHICH:v(e)}}),uc=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"The Hall"},next:{block:y([{type:"world_set_map_size",inputs:{X:v(10),Y:v(10)}},{type:"world_add_actor",fields:{ACTOR:"actors/portrait"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:P(),X:v(160),Y:v(110)}}}}},{type:"world_add_actor",fields:{ACTOR:"actors/speechBox"},inputs:{DO:{block:y([{type:"world_set_position",inputs:{ACTOR:P(),X:v(160),Y:v(250)}},{type:"world_add_trait",fields:{TRAIT:"Conversation#HasAConversationTrait"},inputs:{ACTOR:P()}},{type:"world_add_trait",fields:{TRAIT:"Reveals Text#RevealsTextTrait"},inputs:{ACTOR:P()}},{type:"world_set_Conversation_HowManyLinesProperty",inputs:{ACTOR:P(),VALUE:v(Bo.length)}},Cr(cc,P())])}}}])}},{type:"world_on_Conversation_MovesToALineEvent",x:20,y:320,inputs:{ACTOR:Ue()},next:{block:hc()}},yo("space",60,[{type:"controls_if",extraState:{hasElse:!0},inputs:{IF0:{block:{type:"world_query_Conversation_IsTalkingQuery",inputs:{ACTOR:Ue()}}},DO0:{block:{type:"controls_if",extraState:{hasElse:!0},inputs:{IF0:{block:{type:"logic_operation",fields:{OP:"OR"},inputs:{A:it(4),B:it(5)}}},DO0:{block:go(lc)},ELSE:{block:pc()}}}},ELSE:{block:{type:"world_do_Conversation_MakeStartTalkingAction",inputs:{VALUE:Ue()}}}}}]),yo("left arrow",260,[{type:"controls_if",inputs:{IF0:it(3),DO0:{block:go(4)}}}]),yo("right arrow",420,[{type:"controls_if",inputs:{IF0:it(3),DO0:{block:go(5)}}}])]}}),wc={folders:["worlds","actors","rules","sprites"],files:{main:{name:"main.world",language:"world",contents:uc,folderId:"worlds",active:!0,open:!0},speechBox:{name:"speechBox.actor",language:"actor",contents:tr,folderId:"actors"},portrait:{name:"portrait.actor",language:"actor",contents:er,folderId:"actors"},"rule-writing":{name:"writing.rule",language:"rule",contents:Ht,folderId:"rules"},"rule-reveals":{name:"reveals.rule",language:"rule",contents:as,folderId:"rules"},"rule-conversation":{name:"conversation.rule",language:"rule",contents:os,folderId:"rules"},"rule-input":{name:"input.rule",language:"rule",contents:Ge,folderId:"rules"},...be(["player"])},open:["main"]},yc=X(wc),De="platformerPlayerDef",ja="platformerGroundDef",mo="platformerCoinDef",$a="platformerBallDef",at="platformerScoreboardDef",Ka="platformerCrawlerDef",nt="platformerHealthBarDef",we=e=>`local:${e}`,gc=e=>({type:"world_define_drawing",fields:{WIDTH:e.width,HEIGHT:e.height},inputs:{DO:{block:y(e.commands)}}}),Qa=e=>e.charAt(0).toUpperCase()+e.slice(1),rt=()=>({block:{type:"world_this_actor"}}),Ct=(e,t)=>({type:"world_set_Writing_TextProperty",inputs:{ACTOR:e,VALUE:{block:t}}}),ye=e=>({block:{type:"world_actor_kind",fields:{ACTOR:we(e)}}}),mc=e=>Kn.filter(t=>t.type===e).map(({id:t,properties:o})=>({id:t,properties:o})),Ne=(e,t,o)=>({type:"world_create_in_map",id:e,fields:{ACTOR:t,PLACEMENTS:mc(o)}}),Me=(e,t,o,a)=>({type:"world_actor",id:e,x:o,y:420,fields:{NAME:t},next:{block:y(a)}}),Ja=(e,t,o)=>({type:`world_on_${e}`,x:20,y:t,inputs:{ACTOR:ye(De)},next:{block:{type:"world_log",fields:{TEXT:o}}}}),fc=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Platform World"},next:{block:y([Ne("placeGround",we(ja),"actors/ground"),Ne("placePlayer",we(De),"actors/player"),Ne("placeCoins",we(mo),"actors/coin"),Ne("placeBall",we($a),"actors/ball"),Ne("placeCrawler",we(Ka),"actors/crawler"),Ne("placeHealthBar",we(nt),"actors/healthBar"),Ne("placeScoreboard",we(at),"actors/scoreboard"),{type:`world_set_WorldsMain${Qa(nt)}_SubjectProperty`,inputs:{ACTOR:ye(nt),VALUE:ye(De)}},{type:"world_set_Scoring_TargetScoreProperty",inputs:{VALUE:{block:{type:"math_number",fields:{NUM:30}}}}}])}},Me(ja,"Ground",20,[c("Gravity#ActsAsGroundTrait"),c("Solid Bodies#SolidTrait"),{type:"world_set_sprite",fields:{SPRITE:"ground.png"}}]),Me(De,"Player",360,[c("Gravity#AffectedByGravityTrait"),c("Health#HasHealthTrait"),c("Jumping#JumpsTrait"),c("Arrow Keys#MovesAcrossTrait"),c("Input#TakesKeyboardInputTrait"),c("Collection#CollectsTrait"),{type:"world_play_animation",fields:{ANIMATION:"playerBob"}}]),Me(mo,"Coin",760,[{type:"world_play_animation",fields:{ANIMATION:"coinSpin"}},c("Collection#CanBeCollectedTrait")]),Me($a,"Ball",1140,[{type:"world_play_animation",fields:{ANIMATION:"pulse"}}]),Me(Ka,"Crawler",1520,[c("Patrol#PatrolsAcrossTrait"),c("Health#DealsDamageTrait"),{type:"world_set_sprite",fields:{SPRITE:"crawler.png"}}]),Me(nt,"Health Bar",1900,[Un,gc(Gn(`world_get_WorldsMain${Qa(nt)}_SubjectProperty`))]),Me(at,"Scoreboard",2280,[c("Writing#ShowsTextTrait"),c("Scoring#WatchesTheScoreTrait"),ue("text"),Ct(rt(),{type:"text",fields:{TEXT:"SCORE 0"}}),{type:"world_define_drawing",fields:{WIDTH:xt,HEIGHT:Nt},inputs:{DO:{block:y([F(ce("TextColorProperty")),He(xt/2,Nt/2)])}}}]),{type:"world_on_Input_PressesEvent",fields:{FILTER0:"space"},x:20,y:700,inputs:{ACTOR:ye(De)},next:{block:{type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:rt()}}}},Ja("Gravity_StartsFallingEvent",900,"Player started falling"),{type:"world_on_Health_RunsOutOfHealthEvent",x:520,y:900,inputs:{ACTOR:ye(De)},next:{block:Ct(ye(at),{type:"text",fields:{TEXT:"GAME OVER"}})}},Ja("Gravity_StopsFallingEvent",1020,"Player landed!"),{type:"world_on_Collection_CollectsEvent",x:520,y:700,inputs:{ACTOR:ye(De)},next:{block:{type:"world_do_Scoring_AddToTheScoreAction",inputs:{VALUE:{block:{type:"math_number",fields:{NUM:10}}}},next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:we(mo)},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:rt()}}}}}}}}}}}},{type:"world_on_Scoring_SeesTheScoreChangeEvent",x:1020,y:700,inputs:{ACTOR:ye(at)},next:{block:Ct(rt(),{type:"text_join",extraState:{itemCount:2},inputs:{ADD0:{block:{type:"text",fields:{TEXT:"SCORE "}}},ADD1:{block:{type:"world_get_Scoring_ScoreProperty"}}}})}},{type:"world_on_Scoring_SeesTheGameWonEvent",x:1020,y:840,inputs:{ACTOR:ye(at)},next:{block:Ct(rt(),{type:"text",fields:{TEXT:"YOU WIN"}})}}]}}),Ac=["main","player","ground","coin","ball","crawler","healthBar","scoreboard","level1"],bc=Object.fromEntries(Object.entries(Yo.files).filter(([e])=>!Ac.includes(e))),kc={folders:Yo.folders,files:{main:{name:"main.world",language:"world",contents:fc,folderId:"worlds",active:!0,open:!0},...bc},open:["main"]},xo=["##########","#........#","#..$..*..#","#........#","#...@....#","#........#","#..$..*..#","#........#","#........#","##########"],Tc=xo.flatMap((e,t)=>[...e].flatMap((o,a)=>{const r=(h,p)=>[de(h,`${p}${a}_${t}`,W(a),W(t))];return o==="#"?r("actors/wall","Wall"):o==="$"?r("actors/crate","Crate"):o==="*"?r("actors/target","Target"):o==="@"?r("actors/player","Player"):[]})),Er=(e,t)=>({block:{type:"world_is_a",fields:{TYPE:t},inputs:{ACTOR:e}}}),Rr=(e,t)=>({id:e,name:t,type:"Actor"}),It=Rr("sokobanCrateVar","crate"),Pt=Rr("sokobanTargetVar","target"),Or=e=>({id:e.id,name:e.name}),Sr=(e,t,o)=>({block:{type:"world_filter_actors",fields:{VAR:Or(e)},inputs:{SOURCE:t,WHERE:o}}}),Ir=()=>({block:{type:"world_all_actors"}}),Gt=e=>({block:{type:"variables_get_Actor",fields:{VAR:Or(e)}}}),_c=(e,t)=>({block:{type:"world_vector_length",inputs:{VECTOR:{block:{type:"world_vector_math",fields:{OP:"SUBTRACT"},inputs:{A:e,B:t}}}}}}),qa=e=>({block:{type:"world_vector_of",inputs:{X:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:e}}},Y:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"y"},inputs:{ACTOR:e}}}}}}),vc=e=>({block:{type:"world_any_actors",inputs:{LIST:e}}}),Cc=e=>({block:{type:"logic_negate",inputs:{BOOL:e}}}),Pr=(e,t)=>({block:{type:"logic_operation",fields:{OP:"AND"},inputs:{A:e,B:t}}}),Ec=(e,t)=>({block:{type:"logic_compare",fields:{OP:"LT"},inputs:{A:e,B:t}}}),Rc=e=>vc(Sr(Pt,Ir(),Pr(Er(Gt(Pt),"actors/target"),Ec(_c(qa(e),qa(Gt(Pt))),v(L/2))))),Oc=()=>Sr(It,Ir(),Pr(Er(Gt(It),"actors/crate"),Cc(Rc(Gt(It))))),Sc=()=>({block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:{block:{type:"world_count_actors",inputs:{ACTOR:Oc()}}},B:v(0)}}}),Ic=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Player"},next:{block:y([c("Grid#StepsOnTheGridTrait"),c("Input#TakesKeyboardInputTrait"),{type:"world_set_sprite",fields:{SPRITE:"player.png"}}])}},...[["up arrow","StepUpAction",320],["down arrow","StepDownAction",420],["left arrow","StepLeftAction",520],["right arrow","StepRightAction",620]].map(([e,t,o])=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:e},x:20,y:o,inputs:{ACTOR:P()},next:{block:{type:`world_do_Grid_${t}`,inputs:{ACTOR:P()}}}}))]}}),Pc=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Wall"},next:{block:y([c("Grid#FillsATileTrait"),{type:"world_set_sprite",fields:{SPRITE:"wall.png"}}])}}]}}),Bc=JSON.stringify({variables:[It,Pt],blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Crate"},next:{block:y([c("Grid#StepsOnTheGridTrait"),c("Grid#FillsATileTrait"),c("Grid#CanBePushedTrait"),{type:"world_set_sprite",fields:{SPRITE:"box.png"}}])}},{type:"world_on_Grid_FinishesAStepEvent",x:20,y:320,inputs:{ACTOR:P()},next:{block:{type:"controls_if",inputs:{IF0:Sc(),DO0:{block:{type:"world_log",fields:{TEXT:"Solved!"}}}}}}}]}}),xc=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Target"}},{type:"world_define_drawing",x:20,y:140,fields:{WIDTH:L,HEIGHT:L},inputs:{DO:{block:y([{type:"world_pen_fill",inputs:{COLOUR:{block:{type:"colour_picker",fields:{COLOUR:"#d8a032"}}}}},{type:"world_draw_rectangle",inputs:{X:v(L/2-6),Y:v(L/2-6),WIDTH:v(12),HEIGHT:v(12)}}])}}}]}}),Nc=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Sokoban"},next:{block:{type:"world_load_map",fields:{MAP:"maps/level1"}}}}]}}),Mc=JSON.stringify({type:"map",size:{width:xo[0].length,height:xo.length},tile:{width:32,height:32},actors:Tc},null,2),Dc={folders:["worlds","actors","maps","rules","sprites"],files:{main:{name:"main.world",language:"world",contents:Nc,folderId:"worlds"},player:{name:"player.actor",language:"actor",contents:Ic,folderId:"actors"},wall:{name:"wall.actor",language:"actor",contents:Pc,folderId:"actors"},crate:{name:"crate.actor",language:"actor",contents:Bc,folderId:"actors"},target:{name:"target.actor",language:"actor",contents:xc,folderId:"actors"},level1:{name:"level1.map",language:"map",contents:Mc,folderId:"maps"},"rule-grid":{name:"grid.rule",language:"rule",contents:ns,folderId:"rules"},"rule-input":{name:"input.rule",language:"rule",contents:Ge,folderId:"rules"},...be(["player","wall","box"])},open:["main"]},Wc=X(Dc),No="tapperCoinDef",fo="tapperScoreDef",Xo=e=>`local:${e}`,Lc={block:{type:"world_actor_kind",fields:{ACTOR:"actors/label"}}},Br={id:"tapperScoreVar",name:"score label",type:"Actor"},Ao=()=>({block:{type:"variables_get_Actor",fields:{VAR:Br}}}),xr=()=>({block:{type:"world_get_WorldsMain_ScoreProperty"}}),Xa=e=>({type:"world_set_Writing_TextProperty",inputs:{ACTOR:e,VALUE:{block:{type:"text_join",inputs:{ADD0:{shadow:{type:"text",fields:{TEXT:"Score: "}}},ADD1:xr()}}}}}),za=e=>({block:{type:"world_actor_kind",fields:{ACTOR:Xo(e)}}}),Za=e=>({block:{type:"world_vector_component",fields:{COMPONENT:e},inputs:{VEC:{block:{type:"world_mouse_position"}}}}}),en=(e,t,o,a)=>({type:"world_actor",id:e,x:o,y:420,fields:{NAME:t},next:{block:y(a)}}),Uc=[["TAPPER",16,"#ffffff",14],["click a coin",282,"#8890b0",9],["the right button too",306,"#8890b0",9]],bo=(e,t)=>({type:`world_set_Writing_${e}`,inputs:{ACTOR:P(),VALUE:t}}),Gc=([e,t,o,a])=>({type:"world_add_actor",fields:{ACTOR:"actors/label"},inputs:{DO:{block:y([{type:"world_set_position",inputs:{ACTOR:P(),X:v(160),Y:v(t)}},bo("TextProperty",{shadow:{type:"text",fields:{TEXT:e}}}),bo("TextColorProperty",{shadow:{type:"colour_picker",fields:{COLOUR:o}}}),bo("TextSizeProperty",v(a))])}}}),ko={id:"tapperRowVar",name:"row",type:"Number"},To={id:"tapperColumnVar",name:"column",type:"Number"},Et=e=>({block:{type:"variables_get_Number",fields:{VAR:e}}}),ve=(e,t,o)=>({block:{type:"math_arithmetic",fields:{OP:e},inputs:{A:t,B:o}}}),tn=(e,t)=>({type:"world_count_with",fields:{VAR:e},inputs:{FROM:v(0),TO:v(2),BY:v(1),DO:{block:t}}}),Fc=tn(ko,tn(To,{type:"world_add_actor",fields:{ACTOR:Xo(No)},inputs:{DO:{block:y([{type:"world_set_position",inputs:{ACTOR:P(),X:ve("ADD",v(48),ve("MULTIPLY",Et(To),v(96))),Y:ve("ADD",v(48),ve("MULTIPLY",Et(ko),v(96)))}},{type:"world_set_Spin_SpinSpeedProperty",inputs:{ACTOR:P(),VALUE:ve("ADD",v(40),ve("MULTIPLY",ve("ADD",ve("MULTIPLY",Et(ko),v(3)),Et(To)),v(35)))}}])}}})),Hc=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Crosshair"},next:{block:y([{type:"world_set_sprite",fields:{SPRITE:"switch.png#1"}},c("Spin#SpinTrait")])}},{type:"world_trait_step",x:20,y:200,fields:{PHASE:"sense",NAME:"follow the pointer"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:P(),X:Za("x"),Y:Za("y")}}}}}]}}),Vc=JSON.stringify({blocks:{blocks:[{type:"world_behavior",x:20,y:20,fields:{NAME:"Spin"},next:{block:y([{type:"world_rule_property",fields:{TYPE:"number",ACCESS:"writable",NAME:"spin speed",DEFAULT:"120"}},{type:"world_set_Space_RotationProperty",inputs:{ACTOR:P(),VALUE:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:{block:{type:"world_get_Space_RotationProperty",inputs:{ACTOR:P()}}},B:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"world_get_Spin_SpinSpeedProperty",inputs:{ACTOR:P()}}},B:{block:{type:"world_step_delta"}}}}}}}}}}])}}]}}),Yc=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Tapper"},next:{block:y([{type:"world_rule_property",fields:{TYPE:"number",ACCESS:"writable",NAME:"score",DEFAULT:"0"}},{type:"world_define_layer",fields:{NAME:"Game"},inputs:{DO:{block:y([Fc,{type:"world_add_actor",fields:{ACTOR:Xo(fo)}},{type:"world_add_actor",fields:{ACTOR:"actors/crosshair"}}])}}},{type:"world_define_layer",fields:{NAME:"Interface"},inputs:{DO:{block:y([{type:"world_layer_fixed",fields:{FIXED:"fixed"}},{type:"world_add_actor",fields:{ACTOR:"actors/label",NAMED:"named",VAR:Br},extraState:{named:!0},inputs:{DO:{block:y([{type:"world_set_position",inputs:{ACTOR:Ao(),X:v(48),Y:v(16)}},{type:"world_set_Writing_TextColorProperty",inputs:{ACTOR:Ao(),VALUE:{shadow:{type:"colour_picker",fields:{COLOUR:"#ffcc00"}}}}},Xa(Ao())])}}},...Uc.map(Gc)])}}}])}},en(No,"Coin",20,[c("Mouse#CanBeClickedTrait"),c("Spin#SpinTrait"),{type:"world_set_sprite",fields:{SPRITE:"coin.png"}}]),en(fo,"Scoreboard",660,[c("Mouse#TakesMouseInputTrait"),{type:"world_set_sprite",fields:{SPRITE:"switch.png#0"}}]),{type:"world_on_Mouse_IsPressedEvent",fields:{FILTER0:"left"},x:20,y:700,next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_mouse_position"}}}}}},{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},x:520,y:700,inputs:{ACTOR:za(No)},next:{block:y([{type:"world_set_WorldsMain_ScoreProperty",inputs:{VALUE:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:xr(),B:v(1)}}}}},Xa(Lc),{type:"world_remove_actor",inputs:{ACTOR:P()}}])}},{type:"world_on_Mouse_PressesMouseButtonEvent",fields:{FILTER0:""},x:520,y:880,inputs:{ACTOR:za(fo)},next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_event_value"}}}}}}]}}),jc={folders:["actors","rules","worlds","sprites"],files:{main:{name:"main.world",language:"world",contents:Yc,folderId:"worlds",active:!0,open:!0},spinBehavior:{name:"spin.behavior",language:"behavior",contents:Vc,folderId:"rules"},crosshair:{name:"crosshair.actor",language:"actor",contents:Hc,folderId:"actors"},writingRuleFile:{name:"writing.rule",language:"rule",contents:Ht,folderId:"rules"},labelActorFile:{name:"label.actor",language:"actor",contents:Xn,folderId:"actors"},mouseRuleFile:{name:"mouse.rule",language:"rule",contents:rs,folderId:"rules"},...be(["coin","switch"])},open:["main"]},$c=X(jc),zo=["simple","platformer-single","breakout","breakout-single","meteors","meteors-single","flappy","flappy-single","jetpack","tapper","sokoban","novel","empty"],Kc="simple",Rt={showFileBrowser:!1},Qc=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"My World"}}]}}),Jc={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:Qc,folderId:"worlds",active:!0,open:!0}},open:["main"]},Zo={simple:{name:"Platformer",description:"The starter project: gravity, arrow keys, and a room with coins to collect — two on the floor and one that has to be jumped for — a score to reach, and something walking about that will damage you.",source:ri.source,instructions:"## World Lab\n\nBuild a game world in code. Edit the world and actors under `worlds/` and `actors/`.\n\n- The preview runs your game as you edit\n- Click the preview, then use the arrow keys to move the player, and space to jump\n- Walk into a coin to take it: the coin is `Can Be Collected` and the player `Collects`, the Scoreboard adds ten, and the Console counts what it has\n- Take all three and you win; the Scoreboard says so\n- Avoid the Crawler, which walks its beat and takes a heart off you each time it touches — watch the bar at the top right, and three and it is over\n- Animations are files under `animations/`: open one to edit its frames\n- `console.log` output appears in the Console\n- Try changing the player’s start position, gravity, or move speed — or make the ball collectible too, which is one row in `ball.actor`"},"platformer-single":{name:"Platformer (single world)",description:"The starter with nothing outside main.world: the four actors are defined in it, the board is `create in map`, and the player’s five handlers are hats.",source:X(kc).source,levelData:Rt,instructions:"## The starter, in one file\n\nThe same game as **Platformer**, said entirely in `main.world`.\n\n- The four actors are `define actor` blocks in the world — no files, no imports, and nothing else can reach them\n- The board is `create ⟨kind⟩ in map`, one block per kind: click the arrangement to edit it\n- The player’s handlers are hats on `any ⟨Player⟩`, so they belong to every player there will be — add a second one to the arrangement and it jumps too\n- The rules, the animations and the pictures are still files — they were never actors, so there was nothing to move. There is no file list here, so open a rule from the ⟨eye⟩ on the block that names it"},breakout:{name:"Breakout",description:"A paddle, a bouncing ball, and two rows of bricks to clear. Every mechanic in it is a stock rule.",source:X(wd).source,instructions:`## Breakout

Clear the bricks without losing the ball.

- Click the preview, then use the left and right arrow keys
- The bricks are \`Can Be Collected\` and the ball \`Collects\` them — the Console counts what it has taken
- The room is open at the bottom: \`when ⟨Ball⟩ leaves the map\` is how it notices
- Try a bouncier ball, a wider paddle, or a third row of bricks`},"breakout-single":{name:"Breakout (single world)",description:"The same game with nothing outside main.world: the actors are defined in it and the board is `create in map`. What a file buys, as a diff.",source:X(gd).source,levelData:Rt,instructions:"## Breakout, in one file\n\nThe same game as **Breakout**, said entirely in `main.world`.\n\n- The four actors are `define actor` blocks in the world — no files, no imports, and nothing else can reach them\n- The board is `create ⟨kind⟩ in map`: click the arrangement to edit it\n- The ball’s handlers are hats here, on `any ⟨Ball⟩`\n- Compare it with **Breakout** to see what moving a thing into a file buys"},meteors:{name:"Meteors",description:"A ship that turns and thrusts, rocks that drift and wrap, and a zapper with a recharge. Arrow Drive, Screen Wrap, Zapping and Expiry.",source:X(nc).source,instructions:`## Meteors

Turn, thrust, and zap the rocks.

- Click the preview, then left and right to TURN and up to thrust — there is no friction, so you drift
- Space zaps. \`make ⟨this actor⟩ zap\` asks; the recharge time answers
- A zap sends whatever the \`zaps\` handler makes — look in \`ship.actor\`
- Everything wraps at the edges, which is what makes a small map a whole world`},"meteors-single":{name:"Meteors (single world)",description:"The same game with nothing outside main.world — including the handler that spawns an energy ball, which is what breakout has no equivalent of.",source:X(ic).source,levelData:Rt,instructions:"## Meteors, in one file\n\nThe same game as **Meteors**, said entirely in `main.world`.\n\n- The three actors are `define actor` blocks in the world\n- The rocks are `create ⟨Meteor⟩ in map`, and each one’s heading is written into the arrangement rather than rolled\n- The ship’s handlers are hats on `any ⟨Ship⟩` — including the one that spawns an energy ball\n- Compare it with **Meteors** to see what moving a thing into a file buys"},flappy:{name:"Flappy",description:"A bird that only falls, a key that un-falls it, and a level 48 tiles wide — the first scenario whose map is bigger than the screen, so the camera has something to do.",source:X(Ed).source,instructions:`## Flappy

Fly through the gaps. The up arrow is the only control.

- Click the preview, then press up to flap — the bird is always falling and always moving right
- The level is **48 tiles wide** and the screen is ten, so most of it is off to the right. \`Camera Follow\` brings it to you and \`Camera Confined\` stops the view at the ends
- The flap **sets** the speed rather than pushing: a push would add up, and every flap should be the same height
- A coin in each gap is the score. Touching a pipe says so and lets you fly on — there is no restart yet
- Try a wider gap, a heavier bird (\`amount of gravity\`), or a look offset on the camera so it shows more of what is coming`},"flappy-single":{name:"Flappy (single world)",description:"The same game with nothing outside main.world — including the camera, which here is handed a bird no other file could name.",source:X(Od).source,levelData:Rt,instructions:"## Flappy, in one file\n\nThe same game as **Flappy**, said entirely in `main.world`.\n\n- The three actors are `define actor` blocks in the world, and the board is `create ⟨kind⟩ in map`, one block per kind\n- The camera is the interesting one: `set actor to follow` is handed a WORLD-LOCAL bird, which nothing outside this file can name\n- It is wired **after** the bird is placed. Before it, `any ⟨Bird⟩` is an empty list and the view never moves — and nothing says so\n- Compare it with **Flappy** to see what moving a thing into a file buys"},jetpack:{name:"Jetpack",description:"A room 26 by 16 with all of it on screen at once, and a tank that empties while you fly around it — the first level that is a place rather than a corridor, and the first with something that runs out.",source:X(zd).source,instructions:'## Jetpack\n\nHold space to fly. Arrows to walk. Land on the cans.\n\n- Click the preview, then HOLD space — the jetpack is a **force**, so you sink for a moment before you rise, and you keep rising after you let go\n- The bar over the ceiling is the tank. Four seconds of holding empties it, and then the same key is only a weak hop\n- A big can fills it; a small one is half. Nothing here knows a can is fuel except the Pilot — the can only knows it can be collected\n- The press does BOTH `make jump` and `start flying`, with no question round either: `start flying` does nothing on an empty tank, so the hop is what is left\n- The whole room is on screen because the world says `set size of view to 26 x 16`. There is no camera in this project\n- **Three gems** are what the level is about. Take all three and the door at the far right opens; walk into it and you are out\n- Coins are points and gems are the way out, and they are the SAME rule: both elect `Can Be Collected` and neither knows what it is worth. One handler makes a coin a point\n- The door keeps no state. "Unlocked" is "there are no gems left", which the world can be asked at any moment — so the door watches the count and the Pilot asks again when it walks in\n- The belt carries you if you stand still, the ice will not let you turn round, and the sludge is the slow way across\n- Try `thrust`, `top flying speed` and `fuel per second` on the Pilot — those three numbers are the whole feel of it'},tapper:{name:"Tapper",description:"Click the coins. The mouse is the only input that can say WHERE as well as when, and this is the smallest game that needs the difference.",source:$c.source,instructions:"## Tapper\n\nClick the coins to take them.\n\n- Click the preview first, then click a coin — the coin elects `Can Be Clicked`, and that one row is the whole of what makes it clickable\n- The count is the WORLD’s: `define property ⟨score⟩` sits in `define world`, so it outlives the coin that raised the event, and the Label is told what to say\n- One press is told three times. `when ⟨left⟩ is pressed` is the WORLD’s: it happened to nobody, so the handler has to ask where — watch it print a point for the clicks that hit nothing too\n- `is clicked with` is the COIN’s: it landed on that coin, so the handler already knows who, and `this actor` is it\n- `presses mouse button` is the scoreboard’s: it elected `Takes Mouse Input`, so it hears every press wherever it landed and prints which button — try the right one\n- `mouse position` is not an event at all: it is where the pointer is IN THE WORLD, a different number from where it is on the screen as soon as the camera moves, and it answers whenever you ask\n- `crosshair.actor` follows the pointer with `each frame`, which is work a KIND of actor does without a rule to do it in — open it and change which moment of the frame it runs in"},novel:{name:"Visual Novel",description:"A conversation with a portrait and a choice. The only scenario here with no game in it — what happens is what somebody says next.",source:yc.source,instructions:"## A conversation\n\nRead it, and answer her.\n\n- Space moves on. At the question, the LEFT and RIGHT arrows answer it — that is `send to line`, and it is the whole of branching\n- Open `main.world` and look at `moves to a line`: one branch per line, and each line is BLOCKS, so line one brings the portrait on and the last one takes her away\n- The box types itself out because it has two abilities that know nothing about each other: `Has a Conversation` keeps the place and `Reveals Text` writes the letters. The box just draws its `text`\n- Notice what the branches cost: the space bar needs a guard, because the line after the yes-answer is the no-answer"},sokoban:{name:"Sokoban",description:"Push the crates onto the marks. The only game here with no speeds in it — a thing is on a square or crossing to the next one, and never anywhere else.",source:Wc.source,instructions:`## Sokoban

Push both crates onto the two marks.

- Arrow keys. You move one square at a time, and cannot stop between squares — that is \`Moves on a Grid\`, and it is what makes this a puzzle rather than a driving game
- A crate moves when you walk into it, IF the square past it is free. Nothing in this project says so: pushing belongs to the rule, because deciding whether a step is legal is the same question as deciding whether a crate can go
- Open \`crate.actor\` to see the three traits that make a crate, and the one thing this project does write — the win, counted as the crates that are NOT on a mark
- Watch the console for \`Solved!\``},empty:{name:"Empty",description:"One world that does nothing, and the folders to put things in. What a learner starting from scratch sees.",source:X(Jc).source,instructions:"## An empty world\n\nNothing is in it yet.\n\n- `use rule` to give the world an ability, then `use trait` to give an actor a share of it\n- Actors are files under `actors/`; add one and place it with `add actor`\n- Upload a picture into `sprites/` to draw with, or `backgrounds/` for a backdrop"}};function qc(e){return zo.includes(e??"")}const Xc="world";function on(e){return{sources:{source:e.source},levelProperties:{1:Mr({id:1,name:"World Lab",type:"World",appName:"world",usesProjects:!0,isProjectLevel:!0,offerBrowserTts:!1,showExemplarLink:!1,exemplarSources:null,longInstructions:e.instructions,aiTutorAvailable:!0,...e.levelData?{levelData:e.levelData}:{}})},theme:{}}}const Nr=Object.fromEntries([...zo.map(e=>[e,on(Zo[e])]),...Object.entries(Qo).map(([e,t])=>[$t(e),on({...t,levelData:{...t.levelData??{},gateShelf:!0}})])]),zc=e=>e!==null&&e in Nr,Zc=e=>{const t=Zo[e];if(t)return{name:t.name,description:t.description};const o=Object.entries(Qo).find(([a])=>$t(a)===e)?.[1];return o&&{name:`Lesson: ${o.name}`,description:o.description}},_p=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SCENARIO_TAG:Kc,WORLD_LAB_KEY:Xc,WORLD_SCENARIOS:Zo,WORLD_SCENARIO_TAGS:zo,WorldFixtures:Nr,fixtureLabel:Zc,isFixtureTag:zc,isScenarioTag:qc},Symbol.toStringTag,{value:"Module"}));export{_h as $,jh as A,Dh as B,Uh as C,Yt as D,q as E,ge as F,Ps as G,Eo as H,Pn as I,Nh as J,yt as K,Lh as L,Wh as M,Rs as N,Gh as O,Ss as P,Vh as Q,On as R,Fo as S,Os as T,Yh as U,Fh as V,Hh as W,$h as X,Kh as Y,H as Z,js as _,ih as a,Ih as a$,Ch as a0,gp as a1,Eh as a2,Jh as a3,Qh as a4,lp as a5,up as a6,Xh as a7,dp as a8,cp as a9,hi as aA,ci as aB,Ai as aC,di as aD,xh as aE,Jn as aF,fp as aG,Sh as aH,Bt as aI,Mh as aJ,vn as aK,mp as aL,Tp as aM,kp as aN,$t as aO,Ap as aP,ri as aQ,vh as aR,Kc as aS,Xc as aT,qc as aU,Zc as aV,zo as aW,Zo as aX,zc as aY,Rh as aZ,Oh as a_,hp as aa,pp as ab,ap as ac,Gs as ad,rp as ae,ep as af,op as ag,Ls as ah,tp as ai,zh as aj,qh as ak,ip as al,wp as am,sp as an,np as ao,Zh as ap,Ys as aq,yp as ar,ys as as,Th as at,qn as au,Ho as av,ui as aw,bi as ax,Je as ay,Ph as az,yh as b,Bh as b0,bp as b1,_p as b2,Lo as c,gh as d,uh as e,wh as f,lh as g,ph as h,hh as i,ch as j,gn as k,ps as l,Ah as m,Wo as n,vo as o,ws as p,jt as q,fh as r,dh as s,mh as t,kn as u,ht as v,Uo as w,bh as x,kh as y,Vo as z};
