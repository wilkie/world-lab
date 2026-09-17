import{g as Ui}from"./users.handlers-Bkv890hx.js";import{a as Xo,s as us,S as Wi}from"./index-BmOgOExi.js";import{k as Hi,e as ws,i as ys,c as Fi,l as Gi,m as Vi,p as gs,G as Ie,a as ms,I as Fn,O as As,E as Na,b as $i,T as F,V as Dt}from"./constants-CM1LIkFZ.js";import{n as Ma}from"./ApiClientContext-q4qpfbJf.js";import{o as Ve,s as se,c as Fe,n as Ne,u as Yi,a as ji,r as Ki,_ as fs}from"./projects.schemata-DEfCgJlb.js";import"./jsx-runtime-CDGnIe6L.js";import"./index-Dx280R46.js";const qo="0",my=()=>({files:{},folders:{}}),Ay=e=>e.split(".").pop()?.toLowerCase()||"",bs=e=>String(Math.max(0,...e.map(Number).filter(Number.isInteger))+1),st=e=>bs(e.map(t=>t.id)),Qi=e=>bs(e.map(t=>t.id)),sa=(e,t)=>t.reduce((o,n)=>(n.parentId===e&&o.push(n.id,...sa(n.id,t)),o),[]),Ji=(e,t,o)=>{const n=new Set(o?[e,...sa(e,o)]:[e]);return t.reduce((r,l)=>(n.has(l.folderId)&&r.push(l.id),r),[])},Gn=e=>e?!e.type||e.type===Ma.STARTER||e.type===Ma.LOCKED_STARTER:!1,zi=e=>e.openFiles?e.openFiles.filter(t=>Gn(e.files[t])).map(t=>e.files[t]):Object.values(e.files).filter(t=>Gn(t)).sort((t,o)=>t.name.localeCompare(o.name)),Xi=e=>zi(e).map(t=>t.id),qi=e=>{const t=Object.values(e.files).filter(Gn);return t.find(o=>o.active)||t.find(o=>e.openFiles?.includes(o.id))},Ts=(e,t)=>{if(!t.active)return;const o=e.openFiles;if(!o||o.length===0)return;const n=o.findIndex(r=>r===t.id);if(n>0)return o[n-1];if(n<o.length-1)return o[n+1]},fy=(e,t,o)=>{const n=e.files[t];return!n||n.contents===o?e:{...e,files:{...e.files,[t]:{...n,contents:o}}}},_s=(e,t)=>{const o=qi(e);if(o?.id===t&&o.active)return e;const n=Xi(e);n.includes(t)||n.push(t);const r={...e,files:{...e.files,[t]:{...e.files[t],active:!0}},openFiles:n};return o&&(r.files[o.id]={...r.files[o.id],active:!1}),r},by=(e,t)=>{const o=e.files[t],n={...e,files:{...e.files,[t]:{...e.files[t],active:!1}},openFiles:e.openFiles?.filter(l=>l!==t)},r=Ts(e,o);return r&&(n.files[r]={...n.files[r],active:!0}),n},Ty=({source:e,fileName:t,language:o,folderId:n=qo,contents:r=""})=>{const l=st(Object.values(e.files)),u={...e,files:{...e.files}};return u.files[l]={id:l,name:t,language:o,contents:r||`Add your changes to ${t}`,folderId:n},_s(u,l)},_y=({source:e,fileName:t,language:o,url:n,mimeType:r,folderId:l=qo})=>{const u=st(Object.values(e.files)),T={...e,files:{...e.files}};return T.files[u]={id:u,name:t,language:o,contents:"",folderId:l,url:n,mimeType:r},_s(T,u)},ky=(e,t)=>{const o=e.files[t],n={...e,files:{...e.files},openFiles:e.openFiles?.filter(l=>l!==t)};delete n.files[t];const r=Ts(e,o);return r&&(n.files[r]={...n.files[r],active:!0}),n},Ey=(e,t,o)=>({...e,files:{...e.files,[t]:{...e.files[t],name:o}}}),Cy=(e,t,o)=>({...e,files:{...e.files,[t]:{...e.files[t],folderId:o}}}),Zo=(e,t,o=qo)=>{const n=Qi(Object.values(e.folders));return{...e,folders:{...e.folders,[n]:{id:n,name:t,parentId:o}}}},vy=(e,t)=>{const o=new Set([t,...sa(t,Object.values(e.folders))]),n=new Set(Ji(t,Object.values(e.files),Object.values(e.folders))),r=Object.fromEntries(Object.entries(e.folders).filter(([g])=>!o.has(g))),l=Object.fromEntries(Object.entries(e.files).filter(([g])=>!n.has(g))),u=e.openFiles?.filter(g=>!n.has(g)),T={...e,folders:r,files:l,openFiles:u};if(!Object.values(l).some(g=>g.active)&&u?.length){const g=u[0];T.files={...l,[g]:{...l[g],active:!0}}}return T},Oy=(e,t)=>({...e,folders:{...e.folders,[t]:{...e.folders[t],open:!e.folders[t].open}}}),Ry=(e,t,o)=>({...e,folders:{...e.folders,[t]:{...e.folders[t],name:o}}}),Sy=(e,t,o)=>({...e,folders:{...e.folders,[t]:{...e.folders[t],parentId:o}}}),Zi="world-sandbox",Iy="sandbox/";let Vn=null,ks="/vendor/",Es="/backgrounds/",Cs="/sounds/",vs="/demos/";function Py(e){Vn=e}function el(e){const t=new URLSearchParams(e).get(Zi);return t||null}function xy(){return Vn||(typeof window>"u"?null:el(window.location.search))}function By(){return ks}function Ny(e){ks=e.endsWith("/")?e:`${e}/`}function tl(){return Es}function My(e){Es=e.endsWith("/")?e:`${e}/`}function Dy(){return Cs}function Ly(e){Cs=e.endsWith("/")?e:`${e}/`}function Uy(){return vs}function Wy(e){vs=e.endsWith("/")?e:`${e}/`}const ol=["cave","city","continuousGrass","court","desert","desertRoad","farmLand","floatingGrass","frontOfHouse","space","grid","kitchen","livingRoom","meadow","parkView","pineTrees","rainbow","scifi","soccerField","stage","santa","subway","sunAndRainbow","sunshineShowers","tennisCourt","treeIsland","underground","underwater","winter"],nl={player:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAe0lEQVR4nGNgGAVDBVhVX/1PCh4QS6nqGGpZTpYjqG05SY6gleVEO2JkO4CQZhggV56gI4ixHJclhOQpcgAMiMgZgTG6JYTkh74DBjwKBkUipCYedcDgdQA9HIHX8lEH0NoRRFlOK0eQZDm1HUGW5ZQ6hiqWjoJRQA8AAE7OnlitRCcgAAAAAElFTkSuQmCC",ground:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVR4nO3OMQEAIAwDsPkBJUjAAqZwusnokyN/6v7dSSUgEA+8szpJQEBAQEBAQEBAQEAgHhiLebDqGOG0KAAAAABJRU5ErkJggg==",coin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAlklEQVR4nO2VyxHAIAhELSnlpcAUkiJy1wYi2WWBjDMyw019D/y1tmO1eK6jW/kbOE2EBYeKqHBJwlqw3+drhkmwYFREEkDhlkQZXJLw7jc6Tq7+68RLXUCqYgWoLqjVo/O2wLoC5Yew/BqiXUh7iNAuLPEfuOEzAUZiNh8WsCSY/XbDEQkmXfAoCQmuiISBWZE08I6sGOd8a++KNbTaAAAAAElFTkSuQmCC",box:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoElEQVR4nO3Wyw2AIBAEUKqxC1uwHmuwQ6vBiyaEKMx+YDBKws0dHgGBEP52tnWZYs8+NmDf5iYdAlwfthg8RRQB3og8FwJ4Ie4yYYAV8ZQnAmgRpSwxQIqo5agAKALJUAOQ2SH1JkBpc6G1ZkA+oLTOBZCGaWreD6AuAXUTUn9D6kFEPYqplxH1OqY+SKhPMuqjtMXg+eyrgB59PMBn2wFYWVNaEbwxMQAAAABJRU5ErkJggg==",ball:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAgElEQVR4nO3TQQrAIAxEUU/WdS/qpqfqTXRdEGsyMzWFBLL1P1BLyfnb3OfRZrstLINYw1QIGocQrLgLMTqgXfWxUsRb3IugxmWIrYCVu5e+hZAA5iN0A1jfEAIwNwFxAV8gpvEQACViKR4CoECY4myEK85CQHEEQgtbIbJwjmo6Ub08eLrts0sAAAAASUVORK5CYII=",ship:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAmUlEQVR4nGNgGAWjgALg4JXwH4RHpgNglg+YI0a2A9Atp7sjYBZeu/cajOnqAJhlbk0nUDDdHDGgDkCOb1wOoKkjkOMe3QF0SQvoiQ8d09QByEFMyAE0cQQhy2kaCsT4nqahQKzlNAkFXL5HtgCbHNUcga3YJVYd1R1AjIHIail2ACVBSZVooNQHFDmAmtloQBuuo2AUDHoAAGDwq1h0QSDCAAAAAElFTkSuQmCC",asteroid:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAtUlEQVR4nO2W0QmAMAxEO6g4gB/iAO4gOICrKn4Ipai5pNdUoYH82d7LNbUJocWfouuH/SmriLrAWABoIPFmy7pBSQXRir+BuFQvgRSpfpxmGIJe/Sl+ZREApHoNAAShPXvkCFQuMBrv0wAiRAqAWkxzIQZAm8wFAIGQvhUB0htgFb9bA/VATgOiAJD9FggKANuFLADmv0D9IrIhTE8yexYwzwO54xh9Kqo6mLoIagDoYi1qxAF/xDfM59XIqQAAAABJRU5ErkJggg==",energyBall:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWklEQVR4nGNgGAWjYBSMgqEIEi78/48ND6jldHEEIctp6ghkC/Z9wI5p5ghiLKepI3A5AAYGxAHoYOQ5YMCjYFDmBLqWBYO2NKSp5YQcQRfLR8EoGAWjgNoAAClEEW8FRl0pAAAAAElFTkSuQmCC",door:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAW0lEQVR4nGNggIIYG7n/9MQM6GDUAciSG0osaIJHHUCWA3qitCjCow4YdcCoA0YdMCAl4ZcjBmA8IEUxzHJsjhgZDqB6FAx4Ihx1wKgDRh0w6gBq4lEHDEoHAACKekiuf/UPwgAAAABJRU5ErkJggg==",post:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAX0lEQVR4nGNgGAVDFcTYyP1HxnS3eEOJBQqmm0PQLe+J0kLBdLUcmwNoGgqjDhh1wKgDBtQBN3yc/pOCRx1AdQcwDHQaGHXAqANGHTDqgFEHDKgDPAyk/pODRx1AjNkATCNlm8shjd0AAAAASUVORK5CYII=",flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAXUlEQVR4nGNgGAUEQEJKwf9ps5aB8agDBtwBHz59Q8EaOiYomJD8qAOGvgNItRBdftQBQ98BA54IRx0w4A4gywBKwagDRh0w6oBRB4w6YMAc4GEg9R8XHnUANe0BACtN+JNOYZRQAAAAAElFTkSuQmCC",spike:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAZklEQVR4nGNgGAWjYDCCDVsO/C8oafpPb3WjDhh1AFwxTAM+TdRWN+qAUQegKEbWgE0TtdWNOmDUARiK0TUga6K2ulEHjDoAq2JsGkCY2urAlrt5hVDdYGLVgewGO2Ag8agDRh0AACpuFZJpZxjDAAAAAElFTkSuQmCC",hill:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcklEQVR4nO3QsQ2AMAxEUU/ECIiaginYf4VQI0VCPv/g5k5KGf2XRHie53nCtmsfs9MS/QWTjWMINYxAqLiEoONpxOzycZ+vswzwFa5C0DiKUOMYohVQjZcRRFxBoK+Xf4GMS79gAB3PIgyIFfEMoh3wADWCBX1xO3HaAAAAAElFTkSuQmCC",pipe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAARklEQVR4nGOQC9H5D8IJu3JwYqs+L7KxWoYZVgyzl2HUAaMOGHXAqANGHTDqgFEHjDpg1AGjDhh1wKgDRh0w6oBRBwy0AwDeKzV5iw7+EgAAAABJRU5ErkJggg==",crawler:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4nO2WwQmAMAxFO4RHcQhxBg/O4iSO4tFRXEipECgB0/w0UoQG/iWh+Y+mtobQ4k8x9fMVVZr/JwA14w3RvAtA2hTNuwFIcgPgTbblUEkCg82p6b6ekDgMbG4xlWDUEN7mEES67V8BiBAlM0fOhArA+wyYADgMxZtRWpc+Udg8igdaL4Kg6IbxETfJ1YtHUB3AcwRZAA2Eta66lpFHBxV8HVcztzzBuW1Xv4rSj4bV1AyAwGnXuQF41RpAA6geN0ku/JlZ1HDTAAAAAElFTkSuQmCC",wall:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAdElEQVR4nO3VoQ0AIAxEUWZDMADjoJgAhWICtoQg0E0gza+oKO7IE700xJQXOeE8fcynuZ/85G0ASm1PcwE/eQfYAOA1RAHaNZPyPEB7yaS8A3gAXkMTAPwc4wDNJZPyDrABwGuIAvBzjAO0l0zKO4AH0DXc2HxxiAz2qSYAAAAASUVORK5CYII=",pilot:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoklEQVR4nGNgGAVDBVhVX/1PCh4QS6nqGGpZTpYjqG05SY6gleVEO2LAHBCTkPMfhGntAJg9KJZf87D7D8KENMMAufIwDLOPJAegA1LlKXIADIjIGYExuiWE5Ak6gFD8U9sBGOmAmARIzSggywHUTIRkO4BaeNQBg9cB9CyKMYrjAa0LBkVtSA9HEGU5rRxBkuXUdgRZllPqGKpYOgpGAT0AAA45FREOHHAKAAAAAElFTkSuQmCC",robot:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA2klEQVR4nGNgoAC8iPH4D8KUmEGx5QPmiAF3AMNARwEI+IUk/Afh4e8AKzuv/9gwzAG45Klm8ZQ5a8jCFDmEEouxOYRsB+w5coUiTJYDkH1PDQeQ7IhB7wANHTOsmCYOQMcwy9CLYpg4VRIiIQeALPx/YgsYozti5DgAGx45DqB5IiTWEeiYJkXxgNUFDPSuDfUMrP7jwrjqe0IYn5kEHQBrbMAwPsOwYUL68ToAXTOyIRV1PXCMbihMHJd+ZH2jDhjcDsBmCLol+ByATT+6PpKyIS3w4HPAQAEAWAFbLOmVILQAAAAASUVORK5CYII=",pinball:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxUlEQVR4nO3XyxFAMBAGYBU6KUAZjmpQhaMS1OCoAhU4uDBuyU7sI9mNx9iZvRn/N8gmiuKvt1VZ1TvWWYL7YQy2CYQKpTBq4dO8BNsMwQk3Q8Dwddu9Nkdg4SkIcbgUoIK4FRD68LQBKMJd7+5NueEUgHwKVwBJfwcQg+COaDZAgjivbdrOaxUAdxTD8CsECZAisHCIYI3kmK1XAkDDHwGIQXAA4t1QC8F+9xaI6PAUBFxyqufC7OEhSPZjOQbJ+mPyl1Udc2dbDyEuDQEAAAAASUVORK5CYII=",rocket:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAiElEQVR4nGNgGAWjYLCBmISc/wPugAF1BMwBA+YIZAcMiCPQHUB3R2BzALl4wB1AliNgGs/ZGVCEyXYEtRyA7giiHQJT/G1BD1EYl+UVJ/6jYKIdQWsHEHTEoHEApfFPcRQMeCIc8Gw44AXRoCqKyTKIXDCglqM7gO6WMwyWJtmAWT4KRsFAAAB3Qq91P3dPmwAAAABJRU5ErkJggg==",doorOpen:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAS0lEQVR4nGNggIKeKK3/9MQM6GDUAciSUhJqNMED4oANJRZwPOqAUQeMOmDUAaMOGHXAqANGHTDqgFEHjDpg1AGjDhgQByBjbA4AAMPovIDkMf3nAAAAAElFTkSuQmCC",gem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAmUlEQVR4nGNgGAWjYDCDLb+e/acGHroOiHiw4T818NB1AAhINCT8pwRTZDmyIyxOTMOK5RaUYcVUs5wBKRSIdQBVfY/sCFIcQFXLSXEATXzPgCca6OYABhyhQJfgR3YAuiPo5ntkR+BzAE0tZ8ASCnT1PbIjsDmALpZjcwBdfY/uCLr7flA5gOq1HrmOGBDLB4UDRsEoGBYAAFNpKF0LSp3iAAAAAElFTkSuQmCC",conveyor:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjElEQVR4nGMwMLL6P5CYYcAdEBaV9n8gMdwB1zY4oEhY2XmgYEIGkaufAd0QdI2kOIQc/RgOIGQIIQeQqh+rA2CGVNT1gDGxjiBHP4oDQJLIhsAMQDcElwPI0T+4HDDgUTAoEuGAZcNBURANBGZQUtH6P5B41AED3x4YdcCoA0YdMOqAUQeMOmDEOwAASIkROpw/wGkAAAAASUVORK5CYII=",ice:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAZ0lEQVR4nGM49+bX/4HEDKMOGHXAqAOWXXrzfyDxwDugYsO1/wOJRx0w6gCsDthw4wNeTJcQoIflg9sB2BxBtzRAiQNIDTmCuYAc35Pi8MHvAHLwgDuAlJAbdcDgrAtGHTDqgBHlAACbP8glj7y3IAAAAABJRU5ErkJggg==",sludge:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhklEQVR4nGPoKtH5P5CYYdQBg9oBG2a5oeABcUCCnwwYE+sAUh1NVQegW06MI6gaBTB1yI6myAGk4kHjAKpFATUcQVEipAcedcCoAxis9OQIKgKpIUYdqepBagaHA3BpQJYjxVBCepDlGLBpIAYTYzExmGwHUAuPOmDUAaMOGHXAqAMG3AEAsy+XeixVe3EAAAAASUVORK5CYII=",fuelCan:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAgElEQVR4nGNgGAWjgIqgrKLlPzIePg6Iisn4Twwefg5oUJL5Tw089B3wriKBLDx8HHDOzgCMp2gogDGMj47R5anuAHyOwCY+PB2AzTJcjhq+DkC2FF/CHN4OICZbDu8QGFAHDHguGFAHDHhJOKAOGBS1ISl4+DhgwNuEA+YAegAAeDmdbH2VShcAAAAASUVORK5CYII=",fuelCanSmall:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAeklEQVR4nGNgGAWjYBSMglEwCkYBFUFZRct/EKaZBVExGf/xYZo6oEFJ5j8pmCYOeFeRQBSmmQPO2Rn8n6KhAKaxYZgcTR2AyxHIYjR3ALqF6A4aGQ6AWYwtOujqAGyJcWSEwICngQF1wICWA4OiJCSEaeaAAa0NaQUA6HGRILU7C7EAAAAASUVORK5CYII=",ladder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAU0lEQVR4nGNgwAGOzfD7D8M9KXr/camjlf5RBwwuB1ADjzqAZAeA4o2amKIQGPBEOOqAUQeMOmDUAaMOGHAHjMzqeMAdMNoeGHXAqANGHUAvBwAAn796ftRjQB4AAAAASUVORK5CYII=",bat:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAu0lEQVR4nO2SQQrDMAwE9Zicc+oTfMgrQo59Sz7tooLBGEtZyXVaihb2kMjSThQThUIhIkrrnlvfmtEreqHQWd15z+3MbK3psSQRhGtSX5nNVr+gPlj7CqDU2rDWyBZVCA7RPBx+BeEFMIVrEBySj+PtElo/Tw33ApggtH84AgBBSAe9d0CaAW+jtxHrJTSFIQAaxMcuoBZeam040jMEUL+XNoD0msKlGgKAznLJCjBFXw3/CYBQKPQ3egH0fRrJM+NYUQAAAABJRU5ErkJggg==",spring:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAZElEQVR4nGNgGAVoYNqcVf9piUcdMPgdMAqQwYt3v/6Ti4+cugHHZDsA2RBK8NB1ACVgeDgA2RBKEiRVHDAyE+HwSEiUgNGScMAdQAkYHg6gJBGOloRkO2DAG6WjDhhwB4w4AABRZlj0/aKTWAAAAABJRU5ErkJggg==",shuriken:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABCUlEQVR4nM2VwQ3DMAhFM04OPXe2HDtD5+mxI2SfVK5kCbl8Psa4SSRfEuA/cPy9LFd4tsfzOF2zvJgNUjVUnfLy9d4PMyhBuGrAoBKQBdIKQ3GZUAOjIDIe1aPJbVILohVhwrIG7UBL1iC0hXJp954pMBBPjmcbzSlEQbp+Zk9HFshQ9xEAKTQs7oXw7v8wAPMGb1w3AJqCLLre7t+FIIYtHVmpFG8hMq38WgCbcluiLWC2HRJH3Xm/hwHaguwYommExWWRiCOmAETuhGErPu0y8nTfI9w9BY+vW4tBhLtnx8q7DSaElth7lhkIrDPDSpFPmN2neDgBUWtnizKQnw8zhRHMvzXV5wMzmMXscyfQLwAAAABJRU5ErkJggg==",eyeball:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAk0lEQVR4nGNgGAWjYBSQAR69+PIfG6abxd9+/ceKaeYQQhbT1CGkWk51R2CzPGbKHRSMzxFUtRzdYmIcQpEjsDkABmjuAFy+hwEJGQ04pokj8AU/suWD2gGPenrgeOiHALm5gHwHIAXfgDgAVyiQUhBRvRwgB1O9NKSr5QyDoTIixxED1i6ge8uI7k2yUTAKhiUAAO8VXXFRjqGkAAAAAElFTkSuQmCC",blob:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAmElEQVR4nGNgGAWjYBQMRVB3oes/NkxTSxM25GC1FBsGqaWq5SBDV7zYgIKJcQjNLKebI0BBictyYh1BdnTA4pxSB5DtiAF3AEwzNRxAclpAz3KUWk5yKGDL85RYThUHUIpHHUCyA6jpCJh5RDuA2qFAdkFEDUeQ5ftB4QBqOIIiy9EdQWqDhCLL/abE/KcFHnXA0HHAiAIAUu2y3azqJJcAAAAASUVORK5CYII=",coinSpin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAAB7UlEQVR4nO2c0W0DMQxDPUln6HidpBNlkA7R/yvykZ/gbMkWRbkwCdxnw2dRTHtIrq1JkiRJkiRJln4fn9foqmRgePcYmN47aKfZUxisxWfAVHp7OLJ93/X4/rieF9t3t7mncswufgZMpfcsS4ZnTxUF2HHmaSzR5UeA7FDAGR6030gnFKAs/9GLXj9ftxcaBOW/PASDp+eL8rPELgD7/GX5zxpngawwsAow8kX5WXp5s/zY5y/LP7L8KBB0AaeHMODx+Eb9PGIWgH3+svwRy48AQRdwNYh3Hq9v1M+jigKwzl+WP2r5IyBZBUQEogLkn78sf+S7f+S3gApg63nz+/Jk3AgfWYDo8q+CqAC2VIBDCoD0RoSiAnALQM1fBbCZVAAVQAVQAVQAFUAFUAEIBaDeBDmYVABuAaj5v/8AuoEqAE4qQFL+2QXYfgAG0y4FaPogjFMAJMDMYKIMyOVvKsA5X4W4M0cAzEJEGKLeFo/HN+rnUUUBWOcvzf/uBaIAK0NZYchY/jue6uVv+jp0bv69Jfa+AyAgUP5LA3DwZP255ZUeiEnOf7TQM1fGEBjeKzxov5H0SCQh/3IAPRTf1QkF8HhSWP7D8rGWcIflb/q3KDX5Vy/fiIHh3WNgeu+gnWZ/agaSJEmSJEmL+gOoxtq93WZETQAAAABJRU5ErkJggg==",pilotFly:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAABQElEQVR4nO3auw3CMBSFYQ9BzQwRJQU1Q1AwABuwCRVLwRisYJQIFzEBP6+vBf+RXFnwHV8iJSCMIYQQQr5ne77ZlIX/A34qWrsMvqJfC88tga/o18ZTS+Ar+lJ4bAl8XV+9AL6Sfzie7LikCzgHvyP/vt/ZcYVe7JK775bz8Pvwowr4Sd0vHQC+nB8s4LJab6blI6H90gHgy/rB+0/tAv59CF/Xj3oA8ZO6XzIAfFk/+gk09OYxeO4A8OX8Zl9BSgeAL+OrF8DnAsDnAsBXvwBa/hS5NAB8Hd/Yy9C8wGji9+FPBezjOi3pAs6ZFXAdLoO8/3Le7MbnN140zz8rYIT/kPCpAL6u/7YhgccOAL+9v7hRG/9aYCES/qdon1/bD34wtYaecgFI+Lm9fv382cV6dVLTqlOPZyeEEELI/+UJM/1G2MY4m/wAAAAASUVORK5CYII=",pilotClimb:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAABZUlEQVR4nO3ZvY3CQBAFYIogvpiYkOBiIiogoAA6uD7oDNoxMtIi2PPPzs7PW/AbaRMs+XszHmEkVisWi8VisaZr93ftJGdzuLydaF/r5fmj/bwgvhS1XgCNrx2GdgEsHgayfzWuXQDtA0D72ocA7X/oBtoAkiHQB/pTN9AGKAlBH+vDA9AH+cfTueuPd4Dk0G/Iv+1/u/7M3SDVGDp3PZ3kefpTAyzxa/qz9CP7LwqQ1xhesgQ1A5D61gsQ7Uf2Xxxg/bN9nDxEqrHrNQsw1Nwn+ZYL6N3/v/ePd4D8PUQf688GGPqKkV7XDIC+r18UYCf8EWI9APp+fnEAq1M7APo+PjwAfS4AfS4AffgCRIR4tei34Ydu4SBOH+4/yzvAKEy/Cd81RBFOH+67hBDh9OG+aYgqnD7cV4UxQek34z8q/4tz7nP63+XDA9BvdAGiCj4AYa4oZzEL0GotZi6LaVRYnzyXO85k0O0vEHCnAAAAAElFTkSuQmCC",playerWalk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAA/klEQVR4nO3WQQrCMBCF4R7CtWvXLj2EF/Ie3szzVCgUJGCSSSZ5Y/0fZNMg32MYapeFEEIIyef2eK2Wg38A34p6l8EX+l54awl8oe+NW0vgC/1ReG0JfK0vL4DPAuCr/NKP97Tel0rga/1sgTTW+94B4I/3vxbYczpft5MipfveAeDP8eUF8IMuQM0rpnTfMwB88V9AirTe9wwAX/wR6HnwY/ryAvgsAD4LgC9bgBklsji+3JcXwGcB8JULMLJEFY4v94eUMOH4ct+1RBOOL/e7yrig+GH8LZf7c/08pef4x/LlBfCDLsCsyAdg7DXLYQGC9prl/M0CRM0vz+UNICZusmaEXGsAAAAASUVORK5CYII=",switch:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAABjUlEQVR4nO2XMU7DQBBF9zgUlNRUFNCQJlUKCs5AEYkmB0DpcgcqREVJQcUhuMuijbTSarMbYtbxH9vvSdPZ/s/2/MhxDgAAAAAAAAAAAAAAAPa8Pt/5fFQu293C56NygTPy9Xjj01F5lJbfWgGUJXh6W/p0VB6TIl9+ZQlqBVCUoLb8qgLkyz/6EvzcXvt0VB4UoAwFOM7qe+XT6XRyvvzKElCAMhSgTr78nUtQK4CiBJYK4PgTXMVKAWrLTwF6JC7++8en/Bs3OKiX382lAGc1/4O4+OGFW1k8PA491N/+ro9PIFcpgaUHrXax4GHBwZJHdGle/kj6y2/lJvGw5WDZo2n5TwlQYcEDBzsOg3pYuGEccJA6pIEXl1f7GST4iMPc8kOmcvks5A/msN68+HzyBSgdM+X89OHPPT/MJPNLF+3yAlpFyCdfme/ulw8+TE0gndIx8XzyyR9dfjy5ryGf/DHlywXIJ58CkE++qgB9SvwrnHzyxflyAfLJlxagVaQ5mHzyDeQDAMAU+QVcGkr+3HB7iQAAAABJRU5ErkJggg==",shipThrust:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAABP0lEQVR4nO3YQQ6CMBSEYc7jKVy58BQew7XxcJ6ApRdw614DSUmp1BbS14HwT9KFCn5DfRFj0xBCCCGEzMzxfPl0C3+fvrwAvtB3uKoEvtaXF8BnAPBVfojXLoGv9YcC7fPVL9UG4At8h51uj9GqVQJf68sL4At9/34TK2BZAl/rj+49YYEa9yJ8rf/z4yNcNTcAv7Lvf8WkCliUwNf6yemznkJ8oZ8zfZZTiK/1s6fPagrxhX5s+rrHn/bar6nXSpXA1/qTfzu+74cB90uEx5XcAHyNPyrg8KkC7nn/2NIb4N4v7OAeu+MtffX1V/VjXyX/PoDUufjb8ZvYyTkF/BKlfb9DzLb01dc/5cfOX+znbH6qQM57LT0nZwDwl/vJzClglTXYa+igsFexAeqor13t6wuIs/frZwMIIWTT+QINh1F9fyKLJQAAAABJRU5ErkJggg==",asteroidSpin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAD9klEQVR4nO1b220cMQx0oUYKyEeQAtKDAReQVmPk4+yDrAeHnCG1dyKwf4bnQXKkXcMvL6dOnTp16tSpU5et1x8///1/qnko66axfap5Zdez6y+r0QBWNSGbS6XemffV/cjksbPmh8RHB09tRAWHHbTffv/b+9/Pp4JL1Sy0v3fmAQtzxWHXOWRiukRnir9fiHYgFLiWxVNqb/Vm6189bB6Wnvd6wtC+0p8Vxl58qvjV4CmJWAaAvQQoZoZ2Tw8Y2j1eKHh4euDBnfng3QMWh9QZREWzDfCaHx2+Fe6v338+H2UTvNrV+j08FBxG/rPDp0J/lEN4/tgGoCQYQ4hiWzHvA8A6hKgHHu0tp6jvkb6z+m/x3xLECPYKP3v+K/DNBswWoCWBCs9ugBXXsvzRJkSWvw0AdfCw9VtOfk8IKz2Y8ansgSsA2IvgWcAbNrpsDHxrwxUcUB6rAfQun3W4K/QjAdB6wJ4DCx9m+KWEAHL6ow1AxSONHv0Mis8ynuUBOojs5UMXTq3fw8caAozT3xsAyM3H6795ANgnoXcBrY22vg8ytSsXoALb2gPlLUB5C7NwYNy+RgEQDZ6MAJadgpHmI6f/lQMgA9+j3xMAnu8RSv1WH6K3L+/8WbUjB6EniOQBoDD/SguI6mecvJYBXPnvXf42ALz47D6g/a/23/qs5gUOgIholvkZ+KwmeL9DWE/fqPasAN4xACp7kDl7oe8R9yQYg2cFf4QAiFy/rFdv5SnE9v+e65UD4C35BsAMAUT/tyZE3/sQE6qvfywe0RsA0lC2/oxXIPUC7K4/+xYA9aA1IPLexzgBd2sA4yssOnzoX0GiHlQGAMt/7/vvIwRACJ95/UXTx4ttXUZ0AC3XcfYCRAbQwosdAKj3GQHAmMEdAoDNweQ/awCj5lvwkYVEBnA0hJEAYC2A1Y+MAUR88Hjfw0dO//ZnkfCregVZzUD09mnqAfMWgIpHQsATAEvxEw8YAYBgM4eQEYDeAECxrfgIt3au2NgZt1D17XMKXjWAMw7WhWQNYMbpr+iBcgHZp79av3f5Vh4ogrDlkXH4SBqgWgI0AKr0V+J7fN8Bn8EBXfweLnoIqbggQcPyn/I10iu814xZE5TYOyyAh0eo+aR/y47gtxwy566n33IQVcy/qv8u8J5pFYNYhTvywIPf42DhwcL24tMGsMMhU3vUA8UMZHvfBV8tuaIJLZeRGerlG+Gr9XvxGdgj/Mz+z/qu1t7jMJuJbP2y5e+BZy68lYsy/UeYVR5cBb+yDyy8KI9M7b0AYGFPwWkgF+NU7UU1/ohDVQCp8JBS89nlENqqnlL0k9fp9Vc99fKfOnXq1KlTpwL1AZvns9iMhzONAAAAAElFTkSuQmCC"},Bt=32,P=e=>{const t=nl[e];if(!t)throw new Error(`no stock image named "${e}"`);return t},Ke={type:"sheet",cell:{width:Bt,height:Bt}},Lt=e=>`${e}.png`;function Qe(e,t,o,n=!0){return{loop:n,frameRate:o,frames:Array.from({length:t},(r,l)=>({sprite:Lt(e),position:{x:l*Bt,y:0,width:Bt,height:Bt}}))}}function Da(e,t,o){return{frameRate:o,frames:t.map(n=>({sprite:Lt(e),scale:n}))}}const Hy=()=>{const e=new Set(Vt.flatMap(t=>t.sprites));return en.filter(t=>!e.has(t.id))},en=[{id:"player",name:"Player",description:"A small character, facing the camera.",dataUrl:P("player")},{id:"ground",name:"Ground",description:"A grass-topped tile of earth, for floors and platforms.",dataUrl:P("ground")},{id:"coin",name:"Coin",description:"A gold coin, for something to collect.",dataUrl:P("coin")},{id:"box",name:"Box",description:"A wooden crate, for something to push or stack.",dataUrl:P("box")},{id:"ball",name:"Ball",description:"A red ball, for something to bounce.",dataUrl:P("ball")},{id:"ship",name:"Ship",description:"A dart-shaped ship, pointing up — for something you steer.",dataUrl:P("ship")},{id:"asteroid",name:"Asteroid",description:"A chunky gray rock, for something to dodge or break apart.",dataUrl:P("asteroid")},{id:"energyBall",name:"Energy Ball",description:"A glowing blue orb — for something an actor sends across the screen.",dataUrl:P("energyBall")},{id:"door",name:"Door",description:"A panelled wooden door, for a way out of the room.",dataUrl:P("door")},{id:"post",name:"Post",description:"A banded wooden post, for a landmark or a place to reach.",dataUrl:P("post")},{id:"flag",name:"Flag",description:"A chequered flag on a pole, for the end of the level.",dataUrl:P("flag")},{id:"spike",name:"Spike",description:"A row of metal teeth on a plate, for something that damages.",dataUrl:P("spike")},{id:"fuelCan",name:"Fuel Can",description:"A red jerry can, for something that fills a tank — a jetpack’s, or anything else that runs out.",dataUrl:P("fuelCan")},{id:"fuelCanSmall",name:"Small Fuel Can",description:"The same can, smaller. Worth less than the big one, and readable as less from across the room.",dataUrl:P("fuelCanSmall")},{id:"robot",name:"Tracked Robot",description:"A boxy robot on a tank track with one red eye, for something that goes along the floor and takes ladders.",dataUrl:P("robot")},{id:"pinball",name:"Steel Ball",description:"A heavy lit steel ball, for something that rolls along the floor and comes back.",dataUrl:P("pinball")},{id:"bat",name:"Bat",description:"Wings spread and seen head-on, for something that flies at you in flaps — head-on rather than in profile because it turns round every time it flaps.",dataUrl:P("bat")},{id:"spring",name:"Spring",description:"A side-on coil, symmetric top to bottom, for something that bounces between a floor and a ceiling and reads the same at either end.",dataUrl:P("spring")},{id:"shuriken",name:"Shuriken",description:"Four blades on the diagonals, for something that spins and comes off a wall at the angle it arrived — the diagonals so that a spin reads as one at any frame.",dataUrl:P("shuriken")},{id:"eyeball",name:"Eyeball",description:"Small and pale and looking at you, for the one thing in a room that a wall does not stop.",dataUrl:P("eyeball")},{id:"blob",name:"Blob",description:"A shape with no front, for something that wanders: everything else tells you where it is going and this one cannot.",dataUrl:P("blob")},{id:"rocket",name:"Rocket",description:"A finned rocket pointing RIGHT, which is where a heading of zero points — for something that takes the next turning every time it stops.",dataUrl:P("rocket")},{id:"doorOpen",name:"Open Door",description:"The same frame with the slab swung back and the room’s dark showing through — what a Door looks like once something has unlocked it.",dataUrl:P("doorOpen")},{id:"gem",name:"Gem",description:"A green cut stone with a bright table, for the thing a level is about having all of. Told from a Coin by shape and color both.",dataUrl:P("gem")},{id:"conveyor",name:"Conveyor Belt",description:"A belt on rollers with chevrons pointing the way it runs, for a floor that carries you along.",dataUrl:P("conveyor")},{id:"ice",name:"Ice",description:"A pale blue floor with a lit top edge, for ground you cannot stop or turn on.",dataUrl:P("ice")},{id:"sludge",name:"Sludge",description:"A thick ochre ooze with a lumpy edge and bubbles in it, for ground that drags. Deliberately unlike grass, which is what ordinary Ground already looks like.",dataUrl:P("sludge")},{id:"pilot",name:"Pilot",description:"The player with a jetpack on: a tank either side, so the pack is visible from the front.",dataUrl:P("pilot")},{id:"ladder",name:"Ladder",description:"A rung of ladder, drawn to stack: a column of these is one ladder, with the rungs evenly spaced across the joints.",dataUrl:P("ladder")},{id:"hill",name:"Hill",description:"A dim green mound, for scenery a long way behind the floor.",dataUrl:P("hill")},{id:"pipe",name:"Pipe",description:"One segment of a green pipe, for stacking into a column.",dataUrl:P("pipe")},{id:"crawler",name:"Crawler",description:"A purple bug on six legs, for something that patrols and damages.",dataUrl:P("crawler")},{id:"wall",name:"Wall",description:"A block of stone that tiles both ways, for rooms and columns.",dataUrl:P("wall")},{id:"playerWalk",name:"Player Walking",description:"Four frames of the player mid-stride, side by side.",dataUrl:P("playerWalk"),sheet:Ke},{id:"coinSpin",name:"Coin Spinning",description:"Six frames of a coin turning, side by side.",dataUrl:P("coinSpin"),sheet:Ke},{id:"switch",name:"Switch",description:"Six frames of a switch flipping over, side by side.",dataUrl:P("switch"),sheet:Ke},{id:"pilotFly",name:"Pilot Flying",description:"Four frames of the pilot with both jets lit, side by side.",dataUrl:P("pilotFly"),sheet:Ke},{id:"pilotClimb",name:"Pilot Climbing",description:"Four frames of the pilot reaching up a ladder, side by side.",dataUrl:P("pilotClimb"),sheet:Ke},{id:"shipThrust",name:"Ship Thrusting",description:"Four frames of the ship with its engine lit, side by side.",dataUrl:P("shipThrust"),sheet:Ke},{id:"asteroidSpin",name:"Asteroid Tumbling",description:"Eight frames of a rock turning end over end, side by side.",dataUrl:P("asteroidSpin"),sheet:Ke}],Vt=[{id:"coinSpin",name:"Coin Spin",description:"A coin turning on the spot, over and over.",sprites:["coinSpin"],document:{type:"animation",animations:{coinSpin:Qe("coinSpin",6,12)}}},{id:"playerWalk",name:"Player Walk",description:"A walking stride, for a character on the move.",sprites:["playerWalk"],document:{type:"animation",animations:{playerWalk:Qe("playerWalk",4,8)}}},{id:"switch",name:"Switch",description:"A switch flipping from one side to the other — plays once and holds.",sprites:["switch"],document:{type:"animation",animations:{switchFlip:Qe("switch",6,12,!1)}}},{id:"pilotFly",name:"Pilot Flying",description:"A jetpack burning, for while it is switched on.",sprites:["pilotFly"],document:{type:"animation",animations:{pilotFly:Qe("pilotFly",4,16)}}},{id:"pilotClimb",name:"Pilot Climbing",description:"Hand over hand up a ladder, for while a climb lasts.",sprites:["pilotClimb"],document:{type:"animation",animations:{pilotClimb:Qe("pilotClimb",4,8)}}},{id:"shipThrust",name:"Ship Thrust",description:"A ship with its engine burning, for while the throttle is on.",sprites:["shipThrust"],document:{type:"animation",animations:{shipThrust:Qe("shipThrust",4,12)}}},{id:"asteroidSpin",name:"Asteroid Tumble",description:"A rock turning end over end, over and over.",sprites:["asteroidSpin"],document:{type:"animation",animations:{asteroidSpin:Qe("asteroidSpin",8,10)}}},{id:"pulse",name:"Pulse",description:"A gentle grow and shrink, made by scaling one image.",sprites:["ball"],document:{type:"animation",animations:{pulse:Da("ball",[.7,1,1.3,1],6)}}},{id:"playerBob",name:"Player Bob",description:"A character bobbing on the spot, made by scaling one image.",sprites:["player"],document:{type:"animation",animations:{playerBob:Da("player",[1,1.25,1,.8],7)}}}];function Os(e){return en.find(t=>t.id===e)}function al(e){return Vt.find(t=>t.id===e)}const Rs=e=>`${e}.png`;function rl(e){const t=e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}function Fy(){const e=tl();return ol.map(t=>({id:t,name:rl(t),url:`${e}${Rs(t)}`}))}function Gy(e){return{padding:Math.max(0,e.padding??0),gap:Math.max(0,e.gap??0)}}function ia(e){return`${e.replace(/\.[^.]+$/,"")}.sheet`}function la(e){return`${JSON.stringify(e,null,2)}
`}function sl(e){try{const t=JSON.parse(e);if(typeof t!="object"||t===null||t.type!=="sheet")return;const o=t.cell;if(typeof o!="object"||o===null)return;const{width:n,height:r}=o;if(typeof n!="number"||typeof r!="number"||!(n>0)||!(r>0))return;const l=g=>{if(g!==void 0)return typeof g=="number"&&Number.isFinite(g)&&g>=0?g:!1},u=l(t.padding),T=l(t.gap);return u===!1||T===!1?void 0:{type:"sheet",cell:{width:n,height:r},...u?{padding:u}:{},...T?{gap:T}:{}}}catch{return}}function Vy(e){const t={};for(const[o,n]of Object.entries(e)){if(!o.endsWith(".sheet"))continue;const r=sl(n);if(r){const l=o.split("/").pop().replace(/\.sheet$/,"");t[`${l}.png`]=r}}return t}function $y(e,t,o){const n=e.files[t];if(!n)return e;const r=ia(n.name),l=Object.values(e.files).find(E=>E.name===r&&E.folderId===n.folderId),u=o?la(o):void 0;if(l?.contents===u||!l&&!o)return e;const T={...e.files};if(!o)return delete T[l.id],{...e,files:T};if(l)return T[l.id]={...l,contents:u},{...e,files:T};const g=st(Object.values(e.files));return T[g]={id:g,name:r,language:"json",contents:u,folderId:n.folderId},{...e,files:T}}function da(e,t){const o=Object.values(e.folders).find(l=>l.name===t&&l.parentId==="0");if(o)return{source:e,folderId:o.id};const n=Zo(e,t),r=Object.values(n.folders).find(l=>l.name===t&&l.parentId==="0");return{source:n,folderId:r?.id??"0"}}function il(e,t,o){return Object.values(e.files).some(n=>n.folderId===t&&n.name===o)}function xo(e,t,o){if(il(e,t,o.name))return e;const n=st(Object.values(e.files));return{...e,files:{...e.files,[n]:{id:n,name:o.name,language:o.language,contents:o.contents??"",folderId:t,...o.url?{url:o.url,mimeType:o.mimeType}:{}}}}}const Ss="backgrounds",ll=`${Ss}/`,Yy=e=>e!==void 0&&e.startsWith(ll),dl="sprites",cl="animations";function ca(e,t){const o=da(e,dl),n=Lt(t.id);let r=xo(o.source,o.folderId,{name:n,language:"png",url:t.dataUrl,mimeType:"image/png"});return t.sheet&&(r=xo(r,o.folderId,{name:ia(n),language:"json",contents:la(t.sheet)})),{source:r,value:n}}function jy(e,t,o){const n=da(e,Ss),r=Rs(t.id);return{source:xo(n.source,n.folderId,{name:r,language:"png",url:o,mimeType:"image/png"}),value:r}}function Is(e,t){let o=e;for(const l of t.sprites){const u=Os(l);u&&(o=ca(o,u).source)}const n=da(o,cl),r={name:t.name,...t.document};return{source:xo(n.source,n.folderId,{name:`${t.id}.anim`,language:"anim",contents:`${JSON.stringify(r,null,2)}
`}),value:Object.keys(t.document.animations)[0]??t.id}}const hl='{"stock":';function pl(e){let t=2166136261;for(let o=0;o<e.length;o++)t^=e.charCodeAt(o),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24);return(t>>>0).toString(16).padStart(8,"0")}const La=new Map;function ul(e){const t=La.get(e.id);if(t!==void 0)return t;const o=pl(e.contents);return La.set(e.id,o),o}function Ps(e){return JSON.stringify({stock:e.id,version:ul(e)})}function wl(e){return Xo(e.id)?Ps(e):e.contents}function yl(e){return e.startsWith(hl)}function gl(e){if(yl(e))try{const t=JSON.parse(e);return typeof t.stock=="string"?{stock:t.stock,version:String(t.version??"")}:void 0}catch{return}}function xs(e){const t=gl(e);return t?Xo(t.stock)?.contents??"":e}function _(e){const t=Xo(e);if(!t)throw new Error(`No stock rule "${e}" to reference.`);return Ps(t)}function ha(e,t){const o=[];let n=e.folders[t];const r=new Set;for(;n&&!r.has(n.id);)r.add(n.id),o.unshift(n.name),n=e.folders[n.parentId];return o.length?`${o.join("/")}/`:""}function ml(e,t){const o=e.files[t];return o&&`${ha(e,o.folderId)}${o.name}`}function Ua(e,t){if(e)return Object.keys(e.files).find(o=>ml(e,o)===t)}function Ky(e){if(!e)return{};const t={};for(const o of Object.values(e.files))o.url||(t[`${ha(e,o.folderId)}${o.name}`]=xs(o.contents));return t}const Al=/\.(png|jpg|jpeg|gif|webp)$/i;function Qy(e){return Bs(e).filter(t=>Al.test(t))}function Jy(e){return Bs(e).filter(t=>Hi(t))}function Bs(e){return e?Object.values(e.files).filter(t=>t.url).map(t=>`${ha(e,t.folderId)}${t.name}`):[]}let Ns=[],Ms=[];function zy(e){Ns=e}function Xy(e){Ms=e}function Ds(){return[...Ns,...Ms]}function $t(e){return Ds().find(t=>t.name===e)}function qy(){const e=new Set,t=new Set;for(const o of Ds())e.has(o.name)&&t.add(o.name),e.add(o.name);return[...t]}function Ls(e){const t=$t(e);if(t)return t.source==="project"&&t.modulePath?{source:"project",modulePath:t.modulePath}:{source:"builtin",exportName:t.ref.exportName}}function Zy(e){return e.ruleName?`${e.ruleName}#${e.exportName}`:e.exportName}function fl(e){const t=e.indexOf("#");if(t<0)return{source:"builtin",exportName:e};const o=e.slice(0,t),n=e.slice(t+1),r=$t(o);return{source:r?.source??"project",exportName:n,ruleName:o,modulePath:r?.modulePath}}function bl(e){if(e.ruleName){const t=Ls(e.ruleName);if(t)return t.source==="project"?t.modulePath:void 0}return e.source==="project"?e.modulePath:void 0}function eg(e){return e.own?!0:!e.ruleName||$t(e.ruleName)!==void 0}const Us=new Map;function tg(e,t){!t.own&&t.ruleName&&Us.set(e,t.ruleName)}const Ws=new Map;function og(e,t){t&&Ws.set(e,t)}function ng(e){const t=Us.get(e)??Ws.get(e);return t&&!$t(t)?t:void 0}function Tl(e){return e.replace(/[^A-Za-z0-9]/g,"")}const Hs=e=>e.split(/[^A-Za-z0-9]+/).filter(Boolean).map(t=>t[0].toUpperCase()+t.slice(1)).join(""),_l=e=>e.own&&e.modulePath?`${Hs(e.modulePath)}_${e.exportName}`:e.ruleName?`${Tl(e.ruleName)}_${e.exportName}`:e.exportName;function ag(e,t){const o=new Map;for(const[g,E]of Object.entries(t))E!=null&&!o.has(E)&&o.set(E,g);let n="";const r=g=>({source:"builtin",exportName:o.get(g)??"",ruleName:n}),l=(g,E)=>({id:g.id,name:g.name??g.id,type:g.type,default:g.default,readonly:g.readonly,scope:g.scope,ownerTraitId:E,ref:r(g)}),u=(g,E,N)=>({id:g.id,name:g.name??g.id,params:g.params??[],scope:E,ownerTraitId:N,ref:r(g)}),T=(g,E,N)=>({id:g.id,name:g.name??g.id,returns:g.returns,params:g.params??[],scope:E,ownerTraitId:N,ref:r(g)});return e.map(g=>{n=g.name;const E=Object.values(g.properties).map(B=>l(B)),N=Object.values(g.actions).map(B=>u(B,"world")),ee=Object.values(g.queries).map(B=>T(B,"world")),Ee=[];for(const B of Object.values(g.traits)){Ee.push({id:B.id,name:B.name,ref:r(B),requires:[],subject:"actor"});for(const me of Object.values(B.properties))E.push(l(me,B.id));for(const me of Object.values(B.actions))N.push(u(me,"actor",B.id));for(const me of Object.values(B.queries))ee.push(T(me,"actor",B.id))}const je=Object.values(g.events).map(B=>({id:B.id,name:B.name??B.id,ref:r(B),scope:"actor"})),Le=r(g),pe=Object.values(g.steps).map(B=>({id:B.id,name:B.id,ownerRef:Le,scope:"world",order:{kind:"free"}}));return{id:g.id,name:g.name,ability:g.ability,source:"builtin",ref:Le,requires:g.requires.map(B=>B.name).filter(B=>B),traits:Ee,properties:E,actions:N,queries:ee,events:je,steps:pe,enums:[]}})}const $n=e=>(e??[]).filter(t=>t.kind!=="param"&&t.text).map(t=>(t.text??"").trim()).filter(Boolean).join(" "),be=e=>e.replaceAll(/[^A-Za-z0-9_]/g,"_"),He=e=>e.split(/[^A-Za-z0-9]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),kl=new Set(["number","angle","boolean","string","color","vector","point","numbers","words","vectors","actors","actor"]),El=new Set(["number","boolean","string","vector"]),Ct=e=>{const t=Number(e);return Number.isFinite(t)?t:0},Cl=(e,t,o)=>{switch(e){case"actors":return[];case"numbers":case"words":case"vectors":return[];case"actor":return[];case"boolean":return String(t??"").trim().toLowerCase()==="true";case"string":case"color":return String(t??"");case"vector":{const n=t??{};return{x:Ct(n.x),y:Ct(n.y)}}case"point":return{x:Ct(t),y:Ct(o)};default:return Ct(t)}};function Fs(e,t){let o,n=[],r=[];const l=new Map;try{const k=JSON.parse(t);for(const I of k.variables??[])I.id&&l.set(I.id,I.name??I.id);const S=k.blocks?.blocks??[];o=S.find(I=>I?.type==="world_rule"),n=S.filter(I=>I?.type==="world_rule_trait"),r=S.filter(I=>I?.type==="world_rule_enum")}catch{return}if(!o)return;const u=(k,S)=>typeof k.fields?.[S]=="string"?k.fields[S]:"",T=u(o,"NAME")||"Rule",g=u(o,"ABILITY")||T,E=k=>({source:"project",exportName:k,ruleName:T,modulePath:e}),N=E(`${He(T)}Rule`),ee=[],Ee=[],je=[],Le=[],pe=[],B=[],me=[],Xt=(k,S,I="actor")=>{const M=u(k,"NAME");if(!M)return;const G=u(k,"TYPE"),U=kl.has(G)?G:"number";Ee.push({id:be(M),name:M,type:U,default:Cl(U,k.fields?.DEFAULT,k.fields?.DEFAULT_Y),readonly:u(k,"ACCESS")==="readonly",scope:S?I:"world",ownerTraitId:S,ref:E(`${He(M)}Property`)})},kt=(k,S,I="actor")=>{const M=k.extraState?.parts??[],G=M.flatMap(fe=>fe.kind==="param"?[{kind:"param",name:fe.var&&l.get(fe.var)||"choice",type:fe.type??"string"}]:fe.text?[{kind:"label",text:fe.text}]:[]),U=$n(M);U&&pe.push({id:be(U),name:U,ref:E(`${He(U)}Event`),scope:S?I:"world",...S?{ownerTraitId:S}:{},...G.length>0?{parts:G}:{}})},Et=(k,S,I="actor")=>{const M=k.extraState?.parts??[],G=M.flatMap(te=>te.kind==="param"?[{kind:"param",name:te.var&&l.get(te.var)||"value",type:te.type??"number",...te.default===void 0?{}:{default:te.default},...te.shadow===void 0?{}:{shadow:te.shadow}}]:te.text?[{kind:"label",text:te.text}]:[]),U=$n(M);if(!U)return;const fe=G.filter(te=>te.kind==="param").map(te=>({name:te.name,type:te.type,...te.default===void 0?{}:{default:te.default},...te.shadow===void 0?{}:{shadow:te.shadow}})),qt=u(k,"RETURNS"),Ba={id:be(U),name:U,params:fe,parts:G,description:u(k,"DESCRIPTION")||void 0,scope:S?I:"world",ownerTraitId:S};qt&&qt!=="none"&&El.has(qt)?Le.push({...Ba,returns:qt,ref:E(`${He(U)}Query`)}):je.push({...Ba,ref:E(`${He(U)}Action`)})},y=k=>{const S=k.lastIndexOf("#");if(S<0)return;const I=k.slice(0,S),M=k.slice(S+1);if(!I||!M)return;const G=$t(I);return{ownerRef:{source:G?.source??"project",exportName:G?.ref.exportName??"",ruleName:I,modulePath:G?.modulePath},stepId:M}},L={world_rule_step_tick:"free",world_rule_step_before:"before",world_rule_step_after:"after",world_rule_step_in:"phase"},he=k=>{const S=u(k,"NAME"),I=L[k.type??""];if(!S||!I)return;if(I==="phase"){const U=u(k,"PHASE");B.push({id:be(S),name:S,ownerRef:N,scope:"world",order:U?{kind:I,phase:U}:{kind:"free"}});return}const M=I==="free"?void 0:y(u(k,"STEP")),G=M?{kind:I,anchor:M}:{kind:"free"};B.push({id:be(S),name:S,ownerRef:N,scope:"world",order:G})},Ae=(k,S,I)=>{const M=u(k,"NAME");if(!M)return;const G=u(k,"PHASE");B.push({id:be(M),name:M,ownerRef:N,scope:I,ownerTraitId:S,order:G?{kind:"phase",phase:G}:{kind:"free"}})};for(let k=o.next?.block;k;k=k.next?.block)if(k.type==="world_use_rule"){const S=u(k,"RULE");S&&me.push(S)}else k.type==="world_rule_property"?Xt(k):k.type==="world_rule_block"?Et(k):k.type?.startsWith("world_rule_step")?he(k):k.type==="world_rule_event"&&kt(k);const Ue=[];for(const k of r){const S=u(k,"NAME");if(!S)continue;const I=[];for(let M=k.next?.block;M;M=M.next?.block){if(M.type!=="world_rule_enum_option")continue;const G=u(M,"NAME");G&&!I.some(([,U])=>U===G)&&I.push([G,G])}Ue.push({owner:T,name:S,options:I})}for(const k of n){const S=u(k,"NAME");if(!S)continue;const I=be(S),M=u(k,"SUBJECT")==="camera"?"camera":"actor",G=[];for(let U=k.next?.block;U;U=U.next?.block)if(U.type==="world_use_trait"){const fe=u(U,"TRAIT");fe&&G.push(fe)}else U.type==="world_rule_property"?Xt(U,I,M):U.type==="world_rule_block"?Et(U,I,M):U.type==="world_trait_step"?Ae(U,I,M):U.type==="world_rule_event"&&kt(U,I,M);ee.push({id:I,name:S,ref:E(`${He(S)}Trait`),requires:G,subject:M})}return{id:be(T),name:T,ability:g,source:"project",modulePath:e,ref:N,requires:me.filter(k=>k!==T),traits:ee,properties:Ee,actions:je,queries:Le,events:pe,steps:B,enums:Ue}}const Eo=(e,t,o,n)=>`${e}:${t}:${o??""}:${n}`;function rg(e,t){const o=new Map,n=(l,u,T,g,E)=>{const N=E??be(g.getFieldValue("NAME")??"");N&&o.set(Eo(l,u,T,N),{params:l==="step"?[]:[...t.signature(g)],body:t.body(g)})},r=(l,u,T)=>{for(let g=l;g;g=g.getNextBlock())if(g.type==="world_rule_block"){const E=g.getFieldValue("RETURNS");n(E&&E!=="none"?"query":"action",u,T,g,be($n(g.saveExtraState?.()?.parts)))}else g.type?.startsWith("world_rule_step")?n("step","world",void 0,g):g.type==="world_trait_step"&&n("step",u,T,g)};for(const l of e)l.type==="world_rule"?r(l.getNextBlock(),"world",void 0):l.type==="world_rule_trait"&&r(l.getNextBlock(),l.getFieldValue("SUBJECT")==="camera"?"camera":"actor",be(l.getFieldValue("NAME")??""));return o}const vl=e=>{const t=e.default;switch(e.type){case"actors":return"[]";case"actor":return"[]";case"boolean":return t?"true":"false";case"string":case"color":return JSON.stringify(String(t??""));case"vector":case"point":{const o=t??{x:0,y:0};return`new Vector(${Number(o.x)}, ${Number(o.y)})`}default:return String(Number(t??0))}};function sg(e,t=new Map,o=new Set){const n=y=>JSON.stringify(y),r=e.actions.length>0||e.queries.length>0||e.steps.length>0,l=["RuleBuilder"],u=y=>{l.includes(y)||l.push(y)};e.properties.some(y=>y.type==="vector"||y.type==="point")&&u("Vector");const T=new Map,g=(y,L)=>{o.has(y)||T.set(y,L)},E=y=>He(y.split("/").pop()??y)||"Rule",N=y=>{const L=Ls(y),he=L?.source==="project"?L.modulePath:L?"":y;if(he){const Ue=E(he);return g(`default:${he}`,`import ${Ue} from ${n(he)};`),Ue}const Ae=L?.source==="builtin"?L.exportName:y;return u(Ae),Ae},ee=y=>{const L=fl(y);if(L.ruleName===e.name)return L.exportName;const he=bl(L);if(he){const Ae=_l(L);return g(`named:${he}:${L.exportName}`,`import {${L.exportName} as ${Ae}} from ${n(he)};`),Ae}else L.source==="builtin"&&u(L.exportName);return L.exportName},Ee=y=>`${He(y)}Step`,je=e.requires.map(N),Le=e.traits.map(y=>y.requires.map(ee)),pe=[`const rule = new RuleBuilder({id: ${n(e.id)}, name: ${n(e.name)}});`];je.length>0&&pe.push(`rule.requires([${je.join(", ")}]);`);const B=new Map;e.traits.forEach((y,L)=>{B.set(y.id,y.ref.exportName),pe.push(`export const ${y.ref.exportName} = rule.addTrait({id: ${n(y.id)}, name: ${n(y.name)}});`),Le[L].length>0&&pe.push(`${y.ref.exportName}.requires([${Le[L].join(", ")}]);`)});for(const y of e.properties){const he=(y.scope!=="world"&&y.ownerTraitId?B.get(y.ownerTraitId):void 0)??"rule",Ae=y.readonly?`{name: ${n(y.name)}, readonly: true}`:`{name: ${n(y.name)}}`;pe.push(`export const ${y.ref.exportName} = ${he}.addProperty(${n(y.id)}, ${n(y.type)}, ${vl(y)}, ${Ae});`)}const me=y=>(y.scope!=="world"&&y.ownerTraitId?B.get(y.ownerTraitId):void 0)??"rule",Xt=y=>y.scope==="world"?"world":y.scope,kt=y=>y.scope==="world"?"":`  const world = ${y.scope}.world;
`,Et=(y,L)=>[Xt(y),...L?.params??[]].join(", ");for(const y of e.actions){const L=t.get(Eo("action",y.scope,y.ownerTraitId,y.id));pe.push(`export const ${y.ref.exportName} = ${me(y)}.addAction(${n(y.id)}, (${Et(y,L)}) => {
${kt(y)}${L?.body??""}}, {name: ${n(y.name)}});`)}for(const y of e.queries){const L=t.get(Eo("query",y.scope,y.ownerTraitId,y.id));pe.push(`export const ${y.ref.exportName} = ${me(y)}.addQuery(${n(y.id)}, (${Et(y,L)}) => {
${kt(y)}${L?.body??""}}, {name: ${n(y.name)}, returns: ${n(y.returns??"boolean")}});`)}for(const y of e.events)pe.push(`export const ${y.ref.exportName} = rule.addEvent(${n(y.id)}, {name: ${n(y.name)}});`);for(const y of e.steps){const L=t.get(Eo("step",y.scope,y.ownerTraitId,y.id)),he=y.ownerTraitId?B.get(y.ownerTraitId):void 0,Ae=y.scope!=="world"&&he,Ue=L?.body??"",S=`(world, delta) => {
${Ae?`for (const ${y.scope} of world.${y.scope==="camera"?"cameras":"actors"}.with(${he})) {
${Ue}}
`:Ue}}`,{kind:I,phase:M}=y.order,G=I==="phase"&&M?`rule.addStepIn(${n(y.id)}, ${n(M)}, ${S})`:`rule.addStep(${n(y.id)}, ${S})`;pe.push(`export const ${Ee(y.name)} = ${G};`)}return[`import {${l.join(", ")}} from 'world-lab';`,...r?["import * as WorldLab from 'world-lab';"]:[],...T.values(),"",...pe,"","export default rule.build();",""].join(`
`)}const W=e=>e.reduceRight((t,o)=>({...o,next:{block:t}})),a=e=>({type:"world_use_trait",fields:{TRAIT:e}}),ye=e=>({type:"world_acts_like",fields:{ACTOR:e}}),ce=e=>({type:"world_show_as",fields:{ICON:e}}),p=()=>({block:{type:"world_this_actor"}}),i=e=>({shadow:{type:"math_number",fields:{NUM:e}}}),v=e=>({shadow:{type:"colour_picker",fields:{COLOUR:e}}}),V=e=>({shadow:{type:"text",fields:{TEXT:e}}}),tn="ActorsLabel",$=(e,t=tn)=>({block:{type:`world_get_${t}_${e}`,inputs:{ACTOR:p()}}}),O=(e,t,o=tn)=>({type:`world_set_${o}_${e}`,inputs:{ACTOR:p(),VALUE:t}}),h=e=>({type:"world_set_sprite",fields:{SPRITE:e}}),Ol=(e,t)=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:e},...t.length?{next:{block:W(t)}}:{}}),Gs=e=>({type:"world_play_animation",fields:{ANIMATION:e}}),X=(e,t,o,n={})=>({type:"world_rule_property",fields:{TYPE:e,ACCESS:n.readonly?"readonly":"writable",NAME:t,DEFAULT:o}}),Me=(...e)=>({type:"world_rule_event",extraState:{parts:e.map(t=>({kind:"label",text:t}))}}),Rl=e=>({block:{type:`variables_get_${e.binds}`,fields:{VAR:{id:e.id,name:e.name}}}}),Wa=e=>({type:"world_rule_block",fields:{RETURNS:"none",DESCRIPTION:e.description},extraState:{parts:e.say.map(t=>typeof t=="string"?{kind:"label",text:t}:{kind:"param",type:t.type,var:t.id,name:t.name})},inputs:{DO:{block:W(e.body)}}}),Sl=e=>({type:"world_define_drawing",inputs:{WIDTH:typeof e.width=="number"?i(e.width):e.width,HEIGHT:typeof e.height=="number"?i(e.height):e.height,DO:{block:W(e.commands)}}}),Z=(e,t,o={})=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},...t.length||o.drawing?{next:{block:W([...t,...o.drawing?[Sl(o.drawing)]:[]])}}:{}},...(o.handlers??[]).map((n,r)=>({...n,x:20,y:180+r*120}))]},...o.variables?.length?{variables:o.variables}:{}},null,2),Il=(e,t)=>({type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:{block:{type:"world_actor_named",fields:{NAME:e}}}},next:{block:t}}),Pl=(e,t)=>({type:`world_emit_${e}`,inputs:{ACTOR:t}}),R=e=>({type:"world_pen_fill",inputs:{COLOR:e}}),ge=(e,t)=>({type:"world_pen_outline",inputs:{COLOR:e,WIDTH:i(t)}}),ve=()=>({type:"world_pen_no_outline"}),Yt=()=>({type:"world_pen_no_fill"}),H=(e,t,o,n)=>({type:"world_draw_rectangle",inputs:{X:typeof e=="number"?i(e):e,Y:typeof t=="number"?i(t):t,WIDTH:typeof o=="number"?i(o):o,HEIGHT:typeof n=="number"?i(n):n}}),on=(e,t,o=tn)=>({type:"world_draw_text",inputs:{TEXT:$("TextProperty",o),X:i(e),Y:i(t),SIZE:$("TextSizeProperty",o),ANCHOR:$("TextAnchorProperty",o)}}),Ye=(e,t,o,n=tn)=>({type:"world_draw_paragraph",inputs:{TEXT:$("TextProperty",n),WIDTH:typeof o=="number"?i(o):o,X:typeof e=="number"?i(e):e,Y:typeof t=="number"?i(t):t,SIZE:$("TextSizeProperty",n),ANCHOR:$("TextAnchorProperty",n)}}),Vs="coinSpin",$s=Z("Coin",[Gs(Vs),a("Collection#CanBeCollectedTrait")]),Ys="ground",js=Z("Ground",[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h(`${Ys}.png`)]),xl={type:"world_rule_property",fields:{TYPE:"actor",ACCESS:"writable",NAME:"subject"}},Bl=(e,t="world_set_ActorsProgressBar_FractionProperty")=>{const o=()=>({block:{type:e,inputs:{ACTOR:p()}}}),n=r=>({block:{type:`world_get_Health_${r}`,inputs:{ACTOR:o()}}});return{type:"world_trait_step",fields:{PHASE:"react",NAME:"show the subject’s health"},inputs:{DO:{block:{type:t,inputs:{ACTOR:p(),VALUE:{block:{type:"logic_ternary",inputs:{IF:{block:{type:"world_any_actors",inputs:{LIST:o()}}},THEN:{block:{type:"math_arithmetic",fields:{OP:"DIVIDE"},inputs:{A:n("HealthProperty"),B:n("MostHealthProperty")}}},ELSE:{block:{type:"math_number",fields:{NUM:0}}}}}}}}}}}},Ks=Z("Health Bar",[ye("actors/progressBar"),xl,ce("health"),Bl("world_get_ActorsHealthBar_SubjectProperty")]),Nl=96,Ml=24,q=e=>({block:{type:`world_get_ActorsLabel_${e}Property`,inputs:{ACTOR:p()}}}),de=e=>({block:{type:"math_arithmetic",fields:{OP:"DIVIDE"},inputs:{A:e,B:{shadow:{type:"math_number",fields:{NUM:2}}}}}}),Qs=[X("string","text",""),X("number","text size","12"),X("color","text color","#ffffff"),X("string","text anchor","center"),X("number","width",String(Nl)),X("number","height",String(Ml))],jt=Z("Label",[...Qs,ce("text"),O("TextProperty",V("Label"))],{drawing:{width:q("Width"),height:q("Height"),commands:[R($("TextColorProperty")),Ye(de(q("Width")),de(q("Height")),q("Width"))]}}),un=64,wn=8,Dl=[X("number","fraction","1"),X("color","bar color","#e04040"),X("color","track color","#301820")],yn=(e,t)=>({block:{type:`world_get_${e}_${t}`,inputs:{ACTOR:p()}}}),Ll=(e="ActorsProgressBar")=>({width:un,height:wn,commands:[R(yn(e,"TrackColorProperty")),H(0,0,un,wn),R(yn(e,"BarColorProperty")),{type:"world_draw_rectangle",inputs:{X:i(0),Y:i(0),WIDTH:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:i(un),B:yn(e,"FractionProperty")}}},HEIGHT:i(wn)}}]}),pa=Z("Progress Bar",[...Dl,ce("bar")],{drawing:Ll()});function ig(e){const t=ws(e),o={id:"sample-1",type:"sample",position:{x:0,y:0}};return{...t,nodes:[o],edges:[ae({node:ms,port:Ie},{node:o.id,port:"texture"}),ae({node:Fn,port:Ie},{node:o.id,port:"uv"}),ae({node:o.id,port:"color"},{node:As,port:Ie})]}}function ae(e,t){return{id:`${e.node}.${e.port}->${t.node}.${t.port}`,source:e,target:t}}function lg(e,t){return e.edges.find(o=>o.target.node===t.node&&o.target.port===t.port)}function dg(e,t){const o=new Set(e.nodes.map(r=>r.id));let n=1;for(;o.has(`${t}-${n}`);)n+=1;return`${t}-${n}`}function cg(e){const t=new Set(e.parameters.map(n=>n.id));let o=1;for(;t.has(`param${o}`);)o+=1;return`param${o}`}function hg(e,t){return{...e,nodes:[...e.nodes,t]}}function pg(e,t){return ys(t)?e:{...e,nodes:e.nodes.filter(o=>o.id!==t),edges:e.edges.filter(o=>o.source.node!==t&&o.target.node!==t)}}function ug(e,t,o){return{...e,nodes:e.nodes.map(n=>n.id===t?{...n,...o}:n)}}function wg(e,t,o,n){return Ul(e,t,{[o]:n})}function yg(e,t,o){const n=o?.trim();return{...e,nodes:e.nodes.map(r=>{if(r.id!==t)return r;if(!n){const{note:l,...u}=r;return u}return{...r,note:o}})}}function Ul(e,t,o){return{...e,nodes:e.nodes.map(n=>n.id===t?{...n,params:{...n.params,...o}}:n)}}function Wl(e,t,o){const n=Fi(t);return n!==null?e.parameters.some(r=>r.id===n):ys(t)?o&&Gi.includes(t):e.nodes.some(r=>r.id===t)}function Hl(e,t,o,n,r={}){if(t.length===0)return e;const l=new Set(e.nodes.map(E=>E.id)),u=new Map,T=t.map(E=>{let N=1;for(;l.has(`${E.type}-${N}`);)N+=1;const ee=`${E.type}-${N}`;return l.add(ee),u.set(E.id,ee),{...E,id:ee,position:{x:E.position.x+n.x,y:E.position.y+n.y},params:E.params?{...E.params}:void 0}}),g=o.flatMap(E=>{const N=u.get(E.target.node);if(!N)return[];const ee=u.get(E.source.node),Ee=ee?{node:ee,port:E.source.port}:E.source;return!ee&&!Wl(e,Ee.node,r.stockInputsAvailable??!0)?[]:[ae(Ee,{node:N,port:E.target.port})]});return{...e,nodes:[...e.nodes,...T],edges:[...e.edges,...g]}}function gg(e,t,o,n={}){const r=new Set(t),l=e.nodes.filter(T=>r.has(T.id)),u=e.edges.filter(T=>r.has(T.target.node));return Hl(e,l,u,o,n)}function mg(e,t,o){const n=e.edges.filter(r=>r.target.node!==o.node||r.target.port!==o.port);return{...e,edges:[...n,ae(t,o)]}}function Ag(e,t){return{...e,edges:e.edges.filter(o=>o.id!==t)}}function fg(e,t){return{...e,parameters:[...e.parameters,t]}}function bg(e,t){const o=gs(t);return{...e,parameters:e.parameters.filter(n=>n.id!==t),edges:e.edges.filter(n=>n.source.node!==o)}}function Tg(e,t){return e.functions.find(o=>o.id===t)}function _g(e){const t=new Set(e.functions.map(n=>n.id));let o=1;for(;t.has(`fn${o}`);)o+=1;return`fn${o}`}function kg(e,t,o){return{...e,functions:[...e.functions,{id:t,name:o,outputType:"float",parameters:[],nodes:[],edges:[]}]}}function Eg(e,t,o){return{...e,functions:e.functions.map(n=>n.id===t?{...n,...o}:n)}}function Cg(e,t){const o=Vi(t),n=r=>{const l=new Set(r.nodes.filter(u=>u.type===o).map(u=>u.id));return l.size===0?r:{...r,nodes:r.nodes.filter(u=>!l.has(u.id)),edges:r.edges.filter(u=>!l.has(u.source.node)&&!l.has(u.target.node))}};return n({...e,functions:e.functions.filter(r=>r.id!==t).map(n)})}function vg(e,t,o){return t===null?{...e,...o(e)}:{...e,functions:e.functions.map(n=>n.id===t?{...n,...o(n)}:n)}}function Og(e,t,o){return{...e,parameters:e.parameters.map(n=>n.id===t?{...n,...o}:n)}}const Js=Yi([Ne(),Fe(Ne())]),Fl=Ve({x:Ne(),y:Ne()}),Ha=Ve({node:se().min(1),port:se().min(1),swizzle:se().regex(/^[xyzw]{1,4}$/).optional()}),zs=Ve({id:se().min(1),type:se().min(1),position:Fl,params:Ki(se(),Js).optional(),note:se().optional(),size:Ve({width:Ne().positive(),height:Ne().positive()}).optional(),inspected:ji().optional()}),Xs=Ve({id:se().min(1),source:Ha,target:Ha}),qs=Ve({id:se().min(1),name:se().min(1),type:fs(["float","int","bool","vec2","vec3","vec4"]),defaultValue:Js,min:Ne().optional(),max:Ne().optional(),description:se().optional()}),Gl=Ve({id:se().min(1),name:se().min(1),description:se().optional(),outputType:fs(["float","vec2","vec3","vec4"]),parameters:Fe(qs),nodes:Fe(zs),edges:Fe(Xs)}),Vl=Ve({version:Ne().int().positive(),name:se(),description:se().optional(),parameters:Fe(qs),functions:Fe(Gl),nodes:Fe(zs),edges:Fe(Xs),testTexture:se().optional()});class gn extends Error{issues;constructor(t,o=[]){super(t),this.name="EffectParseError",this.issues=o}}function Rg(e){let t;try{t=JSON.parse(e)}catch(n){throw new gn(`Effect file is not valid JSON: ${n.message}`)}const o=Vl.safeParse(t);if(!o.success){const n=o.error.issues.map(r=>`${r.path.join(".")||"(root)"}: ${r.message}`);throw new gn("Effect file is not a valid document",n)}if(o.data.version>Na)throw new gn(`Effect file version ${o.data.version} is newer than this editor supports (${Na})`);return o.data}function $l(e){return`${JSON.stringify(e,null,2)}
`}const Yl={...ws("Ripple"),description:"Waves the picture sideways, like a flag in the wind.",testTexture:"checker",parameters:[{id:"strength",name:"strength",type:"float",defaultValue:.02,min:0,max:.1,description:"How far the ripple pushes each pixel sideways."}],nodes:[{id:"comment-1",type:"comment",position:{x:300,y:-40},size:{width:265,height:210},note:["This effect makes a picture ripple, like a flag in the wind.","The trick: we never change any colors. We change WHERE we look for them. Each row of the picture gets nudged a little bit sideways, and rows near each other get nudged by different amounts.","Follow the wires downward and read the note on each step."].join(`

`)},{id:"split-1",type:"split",position:{x:-160,y:0},note:"Every spot on the picture has two numbers: how far across (X) and how far down (Y). We only want Y."},{id:"multiply-1",type:"multiply",position:{x:-160,y:120},params:{b:14},note:"Multiplying by 14 fits 14 waves down the picture instead of one. Try a smaller number for bigger, lazier waves."},{id:"add-1",type:"add",position:{x:-160,y:240},note:"Adding the clock makes the whole pattern slide as time passes. This is what turns a still wave into a moving one."},{id:"sine-1",type:"sine",position:{x:-160,y:360},note:"Sine takes a number that keeps counting up and turns it into a smooth back-and-forth, between -1 and 1. That wobble is the wave."},{id:"multiply-2",type:"multiply",position:{x:-160,y:470},note:"Shrinks the wave down to a tiny nudge. The strength knob at the top decides how tiny — a big nudge would smear the picture."},{id:"combine2-1",type:"combine2",position:{x:40,y:470},params:{y:0},note:"Turns the nudge into a direction. Y is 0, so the picture only ever moves sideways, never up or down."},{id:"add-2",type:"add",position:{x:40,y:600},note:"Adds the nudge to where we started, so we end up pointing at a spot just beside the original one."},{id:"sample-1",type:"sample",position:{x:40,y:720},note:"Reads the color at that shifted spot. Because every row shifts by a different amount, the picture comes out wavy."}],edges:[ae({node:Fn,port:Ie},{node:"split-1",port:"in"}),ae({node:"split-1",port:"y"},{node:"multiply-1",port:"a"}),ae({node:"multiply-1",port:"out"},{node:"add-1",port:"a"}),ae({node:$i,port:Ie},{node:"add-1",port:"b"}),ae({node:"add-1",port:"out"},{node:"sine-1",port:"x"}),ae({node:"sine-1",port:"out"},{node:"multiply-2",port:"a"}),ae({node:gs("strength"),port:Ie},{node:"multiply-2",port:"b"}),ae({node:"multiply-2",port:"out"},{node:"combine2-1",port:"x"}),ae({node:Fn,port:Ie},{node:"add-2",port:"a"}),ae({node:"combine2-1",port:"out"},{node:"add-2",port:"b"}),ae({node:ms,port:Ie},{node:"sample-1",port:"texture"}),ae({node:"add-2",port:"out"},{node:"sample-1",port:"uv"}),ae({node:"sample-1",port:"color"},{node:As,port:Ie})]},Sg="worlds/main.world",jl=(e,t)=>t?{...e,next:{block:t}}:e,b=e=>e.reduceRight((t,o)=>jl(o,t)),w=e=>({type:"world_use_trait",fields:{TRAIT:e}}),mn=e=>({type:"world_set_ActorsLabel_TextProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:e}}}),Zs=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b(t)}}]}},null,2),Fa=(e,t,o,n)=>({type:`world_on_${e}`,x:t,y:o,next:{block:{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:n}}}}}}}),Te=(e,t,o,n)=>({type:e,id:t,properties:{positional:{position:{x:o,y:n}}}}),K=e=>e*F+F/2,Ga=(e,t,o)=>o.map(n=>Te("actors/ground",`${e}${n}`,K(n),K(t))),Va=(e,t,o)=>o.map(n=>Te("actors/ground",`${e}${n}`,K(t),K(n))),Kl=[0,1,2,3,4,5,6,7,8,9],$a=[0,1,2,3,4,5,6,7,8],Ql=[Te("actors/player","Player",K(2),K(4)),...Ga("Floor",9,Kl),...Va("WallLeft",0,$a),...Va("WallRight",9,$a),...Ga("Platform",6,[5,6,7]),Te("actors/coin","Coin1",K(4),K(8)),Te("actors/coin","Coin2",K(8),K(8)),Te("actors/coin","Coin3",K(6),K(3)),Te("actors/ball","Ball",K(3),K(2)),Te("actors/crawler","Crawler",K(6),K(8)),{...Te("actors/healthBar","HealthBar",K(7),K(0)),properties:{positional:{position:{x:K(7),y:K(0)}},Health_Bar:{subject:"Player"}}},Te("actors/scoreboard","Scoreboard",K(2),K(0))],Jl=JSON.stringify({type:"map",size:{width:Dt,height:Dt},tile:{width:F,height:F},actors:Ql},null,2),zl=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Platform World"},next:{block:b([{type:"world_load_map",fields:{MAP:"maps/level1"}},{type:"world_set_Scoring_TargetScoreProperty",inputs:{VALUE:{block:{type:"math_number",fields:{NUM:30}}}}}])}}]}},null,2),Xl=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Player"},next:{block:b([w("Gravity#AffectedByGravityTrait"),w("Health#HasHealthTrait"),w("Jumping#JumpsTrait"),w("Arrow Keys#MovesAcrossTrait"),w("Input#TakesKeyboardInputTrait"),w("Collection#CollectsTrait"),{type:"world_play_animation",fields:{ANIMATION:"playerBob"}}])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"space"},x:20,y:440,next:{block:{type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:{block:{type:"world_this_actor"}}}}}},Fa("Gravity_StartsFallingEvent",20,200,"Player started falling"),{type:"world_on_Health_RunsOutOfHealthEvent",x:20,y:560,next:{block:{type:"world_set_ActorsLabel_TextProperty",inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/scoreboard"}}},VALUE:{block:{type:"text",fields:{TEXT:"GAME OVER"}}}}}}},Fa("Gravity_StopsFallingEvent",20,320,"Player landed!"),{type:"world_on_Collection_CollectsEvent",x:20,y:620,next:{block:{type:"world_do_Scoring_AddToTheScoreAction",inputs:{VALUE:{block:{type:"math_number",fields:{NUM:10}}}},next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:"actors/coin"},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}}}}}}}}}}]}},null,2),ql=js,Zl=$s,Ya=96,ja=24,ed=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Scoreboard"},next:{block:b([ye("actors/label"),w("Scoring#WatchesTheScoreTrait"),ce("text"),mn({type:"text",fields:{TEXT:"SCORE 0"}}),{type:"world_define_drawing",inputs:{WIDTH:{shadow:{type:"math_number",fields:{NUM:Ya}}},HEIGHT:{shadow:{type:"math_number",fields:{NUM:ja}}},DO:{block:b([R($("TextColorProperty")),on(Ya/2,ja/2)])}}}])}},{type:"world_on_Scoring_SeesTheScoreChangeEvent",x:20,y:200,next:{block:mn({type:"text",fields:{TEXT:"SCORE "},inputs:{ADD:{block:{type:"world_as_text",inputs:{VALUE:{block:{type:"world_get_Scoring_ScoreProperty"}}}}}}})}},{type:"world_on_Scoring_SeesTheGameWonEvent",x:20,y:320,next:{block:mn({type:"text",fields:{TEXT:"YOU WIN"}})}}]}},null,2),td=Zs("Crawler",[w("Patrol#PatrolsAcrossTrait"),w("Health#DealsDamageTrait"),{type:"world_set_sprite",fields:{SPRITE:"crawler.png"}}]),od=Zs("Ball",[{type:"world_play_animation",fields:{ANIMATION:"pulse"}}]),nd=JSON.stringify({type:"animation",animations:{pulse:{frameRate:6,frames:[{sprite:"ball.png",scale:.7},{sprite:"ball.png",scale:1},{sprite:"ball.png",scale:1.3},{sprite:"ball.png",scale:1}]},playerBob:{frameRate:7,frames:[{sprite:"player.png",scale:1},{sprite:"player.png",scale:1.25},{sprite:"player.png",scale:1},{sprite:"player.png",scale:.8}]}}},null,2);function _e(e){const t=new Map(e.folders.map((l,u)=>[l,String(u+1)])),o=new Map(Object.keys(e.files).map((l,u)=>[l,String(u+1)])),n={};for(const[l,u]of t)n[u]={id:u,name:l,parentId:qo};const r={};for(const[l,u]of Object.entries(e.files)){const T=t.get(u.folderId);if(!T)throw new Error(`starter file “${l}” is in “${u.folderId}”, which is not a starter folder`);r[o.get(l)]={...u,id:o.get(l),folderId:T}}return{source:{files:r,folders:n,openFiles:e.open.map(l=>{const u=o.get(l);if(!u)throw new Error(`starter opens “${l}”, which is not a starter file`);return u})},ids:o}}function De(e){const t={};for(const o of e){const n=en.find(r=>r.id===o);if(n&&(t[`sprite-${o}`]={name:Lt(o),language:"png",contents:"",folderId:"sprites",url:n.dataUrl,mimeType:"image/png"},n.sheet)){const r=ia(Lt(o));t[`sheet-${o}`]={name:r,language:"json",contents:la(n.sheet),folderId:"sprites"}}}return t}function ad(e){const t=e.flatMap(o=>Vt.find(n=>n.id===o)?.sprites??[]);return Object.assign({},De(t),...e.map(o=>ei(o)))}function ei(e){const t=Vt.find(o=>o.id===e);return t?{[`anim-${e}`]:{name:`${e}.anim`,language:"anim",contents:`${JSON.stringify({name:t.name,...t.document},null,2)}
`,folderId:"animations"}}:{}}const rd={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:zl,folderId:"worlds",active:!0,open:!0},player:{name:"player.actor",language:"actor",contents:Xl,folderId:"actors"},ground:{name:"ground.actor",language:"actor",contents:ql,folderId:"actors"},coin:{name:"coin.actor",language:"actor",contents:Zl,folderId:"actors"},progressBar:{name:"progressBar.actor",language:"actor",contents:pa,folderId:"actors"},healthBar:{name:"healthBar.actor",language:"actor",contents:Ks,folderId:"actors"},crawler:{name:"crawler.actor",language:"actor",contents:td,folderId:"actors"},label:{name:"label.actor",language:"actor",contents:jt,folderId:"actors"},scoreboard:{name:"scoreboard.actor",language:"actor",contents:ed,folderId:"actors"},ball:{name:"ball.actor",language:"actor",contents:od,folderId:"actors"},gameAnimations:{name:"game.anim",language:"anim",contents:nd,folderId:"animations"},level1:{name:"level1.map",language:"map",contents:Jl,folderId:"maps"},jumpRule:{name:"jump.rule",language:"rule",contents:_("jump"),folderId:"rules"},gravityRule:{name:"gravity.rule",language:"rule",contents:_("gravity"),folderId:"rules"},arrowsRule:{name:"arrows.rule",language:"rule",contents:_("arrows"),folderId:"rules"},inputRule:{name:"input.rule",language:"rule",contents:_("input"),folderId:"rules"},motionRule:{name:"motion.rule",language:"rule",contents:_("motion"),folderId:"rules"},collisionsRule:{name:"collisions.rule",language:"rule",contents:_("collisions"),folderId:"rules"},solidRule:{name:"solid.rule",language:"rule",contents:_("solid"),folderId:"rules"},healthRule:{name:"health.rule",language:"rule",contents:_("health"),folderId:"rules"},patrolRule:{name:"patrol.rule",language:"rule",contents:_("patrol"),folderId:"rules"},scoreRule:{name:"score.rule",language:"rule",contents:_("score"),folderId:"rules"},collectRule:{name:"collect.rule",language:"rule",contents:_("collect"),folderId:"rules"},rippleEffect:{name:"ripple.effect",language:"effect",contents:$l(Yl),folderId:"effects"},...De(["player","ground","coin","ball","crawler","coinSpin"]),...ei("coinSpin")},open:["main"]},sd=_e(rd),id={source:sd.source},Ig={SPLIT:"split",CODE:"code",PREVIEW:"preview"},Be="rules";function ld(e){const t=Object.values(e.folders).find(r=>r.name===Be&&r.parentId==="0");if(t)return{source:e,folderId:t.id};const o=Zo(e,Be),n=Object.values(o.folders).find(r=>r.name===Be&&r.parentId==="0");return{source:o,folderId:n?.id??"0"}}function Pg(e){const t=[],o=new Set([e.id]),n=r=>{for(const l of ti(r))o.has(l.id)||(o.add(l.id),n(l),t.push(l))};return n(e),t}function Ka(e,t){const o=t.slice(`${Be}/`.length),n=Object.values(e.folders).find(r=>r.name===Be&&r.parentId==="0");return!!n&&Object.values(e.files).some(r=>r.folderId===n.id&&r.name.replace(/\.[^.]+$/,"")===o)}function ti(e){return(Fs(`${Be}/${e.id}`,e.contents)?.requires??[]).map(o=>us(o)).filter(o=>o!==void 0)}function dd(e,t){const o=t.slice(`${Be}/`.length),n=Object.values(e.files).find(r=>r.name===`${o}.rule`);return n?Fs(t,xs(n.contents))?.name:void 0}function Qa(e,t,o,n){const r=st(Object.values(e.files));return{...e,files:{...e.files,[r]:{id:r,name:`${o}.rule`,language:"rule",contents:wl(n),folderId:t}}}}function ua(e,t){const o=ld(e);let n=o.source;const r=o.folderId,l=(g,E)=>{for(const N of ti(g)){const ee=`${Be}/${N.id}`;E.has(N.id)||Ka(n,ee)||(E.add(N.id),l(N,E),n=Qa(n,r,N.id,N))}};l(t,new Set([t.id]));const u=`${Be}/${t.id}`,T=Ka(n,u)?n:Qa(n,r,t.id,t);return{source:T,path:u,name:dd(T,u)??t.name}}const it=e=>JSON.parse(e||"{}")??{},Ut=e=>e.blocks?.blocks??[];function*nn(e){for(let t=e;t;t=t.next?.block)yield t}const wa=(e,t)=>Ut(e).find(o=>o.type===t.type&&(t.id===void 0||o.id===t.id));function cd(e,t){return Ut(it(e)).some(o=>[...nn(o)].some(t))}function hd(e,t){const o=it(e),n=Ut(o).reduce((r,l)=>Math.max(r,Number(l.y??0)),0);return JSON.stringify({...o,blocks:{...o.blocks,blocks:[...Ut(o),{...t,x:20,y:n+220}]}},null,2)}function xg(e,t){const o=it(e),n=t.id;return(o.variables??[]).some(l=>l.id===n)?e:JSON.stringify({...o,variables:[...o.variables??[],t]},null,2)}function Bg(e){return Ut(it(e))}function Ng(e,t){return[...nn(wa(it(e),t))]}function pd(e,t,o){const n=wa(it(e),t);return[...nn(n)].some(o)}function ud(e,t,o,n=[]){if(o.length===0)return e;const r=it(e),l=wa(r,t);if(!l)return e;let u=l;for(const T of nn(l))u=T;return u.next={block:o.slice(0,-1).reduceRight((T,g)=>({...g,next:{block:T}}),o[o.length-1])},JSON.stringify({...r,...n.length?{variables:[...r.variables??[],...n]}:{}},null,2)}const wd=()=>({block:{type:"world_this_actor"}}),Mg=e=>({block:{type:"world_actor_kind",fields:{ACTOR:e}}}),Ja=e=>({path:`${e.path}.actor`,root:{type:"world_actor"}}),Dg=()=>wd(),Yn=(e,t,o)=>pd(e,o,n=>n.type==="world_use_trait"&&n.fields?.TRAIT===t),yd=(e,t,o)=>{let n=e;for(const r of o)Yn(n,r,t)||(n=ud(n,t,[{type:"world_use_trait",fields:{TRAIT:r}}]));return n},gd=(e,t)=>{let o=e;for(const n of t){const r=Wi.find(l=>l.name===n);r&&(o=ua(o,r).source)}return o},md=(e,t,o)=>({...e,files:{...e.files,[t]:{...e.files[t],contents:o(e.files[t].contents)}}}),za="Climbing#ClimbsTrait",Xa="Input#TakesKeyboardInputTrait",Ad=e=>({type:`world_do_Climbing_${e}Action`,inputs:{VALUE:{block:{type:"world_this_actor"}}}}),Zt=(e,t,o,n)=>({type:`world_on_Input_${t}Event`,fields:{FILTER0:o},next:{block:Ad(n)}}),ya=(e={kind:"actor",path:"",name:""})=>[Zt(e,"Presses","up arrow","StartClimbingUp"),Zt(e,"Releases","up arrow","StopClimbingUp"),Zt(e,"Presses","down arrow","StartClimbingDown"),Zt(e,"Releases","down arrow","StopClimbingDown")],fd=()=>e=>e.type!=="world_on_Input_PressesEvent"||e.fields?.FILTER0!=="up arrow"?!1:e.inputs?.ACTOR?.block?.fields?.ACTOR===void 0,qa=e=>cd(e,fd()),Lg={id:"climbs-with-arrows",subject:"actor",name:"Climbs ladders with the arrow keys",description:"Lets this actor climb anything that can be climbed, steered with up and down. The keys are blocks in its file, so change them to whatever your game uses — and an actor that should climb without a keyboard takes the trait and leaves these out.",brings:["Climbs Ladders","Reads the Keyboard"],applied(e,t){const{path:o,root:n}=Ja(t),r=Ua(e,o),l=r?e.files[r].contents:"";return Yn(l,za,n)&&Yn(l,Xa,n)&&qa(l)},apply(e,t){const o=gd(e,["Climbing","Input"]),{path:n,root:r}=Ja(t),l=Ua(o,n);return l?md(o,l,u=>{let T=yd(u,r,[za,Xa]);if(!qa(T))for(const g of ya(t))T=hd(T,g);return T}):o}},bd=32,eo=4,Td=2,vt=()=>q("Width"),to=()=>q("Height"),Za=(e,t)=>({block:{type:"math_arithmetic",fields:{OP:"MINUS"},inputs:{A:e,B:i(t)}}}),er=()=>({block:{type:"world_get_TabNavigation_FocusedProperty",inputs:{ACTOR:p()}}}),tr=(e,t)=>({type:"controls_if",inputs:{IF0:e,DO0:{block:W(t)}}}),_d=Z("Button",[ye("actors/label"),a("Mouse#CanBeClickedTrait"),a("Tab Navigation#CanBeFocusedTrait"),a("Input#TakesKeyboardInputTrait"),ce("button"),{type:"world_set_ActorsLabel_HeightProperty",inputs:{ACTOR:p(),VALUE:{shadow:{type:"math_number",fields:{NUM:bd}}}}},O("TextProperty",V("Button"))],{handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:p()},next:{block:{type:"world_do_TabNavigation_TakeTheFocusAction",inputs:{ACTOR:p()}}}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"enter"},inputs:{ACTOR:p()},next:{block:tr(er(),[{type:"world_emit_Mouse_IsClickedWithEvent",inputs:{VALUE:{block:{type:"world_choice_Engine_MouseButton",fields:{VALUE:"left"}}},ACTOR:p()}}])}}],drawing:{width:vt(),height:to(),commands:[R(v("#3050a0")),ge(v("#ffffff"),2),H(0,0,vt(),to()),ve(),R($("TextColorProperty")),Ye(de(vt()),de(to()),vt()),tr(er(),[Yt(),ge(v("#ffd45e"),Td),H(i(eo),i(eo),Za(vt(),eo*2),Za(to(),eo*2))])]}}),Kt="ActorsDropdown",ne=24,kd=120,Ed=6,oo=2,Cd=2,jn={id:"dropdownRow",name:"row",type:"Number"},ga=(e,t)=>({block:{type:`world_get_${e}_${t}`,inputs:{ACTOR:p()}}}),Ce=()=>q("Width"),Nt=()=>q("Height"),oi=()=>ga(Kt,"ChoicesProperty"),Ot=()=>ga(Kt,"OpenProperty"),An=()=>ga(Kt,"HighlightedProperty"),fn=()=>({block:{type:"world_get_TabNavigation_FocusedProperty",inputs:{ACTOR:p()}}}),no=()=>({block:{type:"variables_get_Number",fields:{VAR:jn}}}),Y=(e,t,o)=>({block:{type:"math_arithmetic",fields:{OP:e},inputs:{A:t,B:o}}}),Wt=(e,t,o)=>({block:{type:"logic_compare",fields:{OP:e},inputs:{A:t,B:o}}}),Bo=(e,t)=>({block:{type:"logic_operation",fields:{OP:"AND"},inputs:{A:e,B:t}}}),vd=e=>({block:{type:"logic_negate",inputs:{BOOL:e}}}),Od=e=>({block:{type:"math_round",fields:{OP:"ROUNDDOWN"},inputs:{NUM:e}}}),Rd=(e,t,o)=>({block:{type:"math_constrain",inputs:{VALUE:e,LOW:t,HIGH:o}}}),No=()=>({block:{type:"lists_length",inputs:{VALUE:oi()}}}),ni=e=>({block:{type:"world_list_item",inputs:{N:e,LIST:oi()}}}),Kn=e=>({block:{type:"world_vector_component",fields:{COMPONENT:e},inputs:{VEC:{block:{type:"world_mouse_position"}}}}}),rt=e=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:e},inputs:{ACTOR:p()}}}),gt=(e,t,o=Kt)=>({type:`world_set_${o}_${e}`,inputs:{ACTOR:p(),VALUE:t}}),ai=(e,t)=>gt(e,{block:{type:"logic_boolean",fields:{BOOL:t?"TRUE":"FALSE"}}}),ma=e=>gt("HeightProperty",e,"ActorsLabel"),ri=(e,t)=>({type:"world_set_position",inputs:{ACTOR:p(),X:e,Y:t}}),Re=(e,t,o)=>({type:"controls_if",...o?{extraState:{hasElse:!0}}:{},inputs:{IF0:e,DO0:{block:W(t)},...o?{ELSE:{block:W(o)}}:{}}}),Qn=()=>Y("MULTIPLY",No(),i(ne)),or=()=>[ai("OpenProperty",!0),ma(Y("ADD",i(ne),Qn())),ri(rt("x"),Y("ADD",rt("y"),Y("DIVIDE",Qn(),i(2))))],bn=()=>[ai("OpenProperty",!1),ri(rt("x"),Y("MINUS",rt("y"),Y("DIVIDE",Qn(),i(2)))),ma(i(ne))],Sd=()=>Y("MINUS",rt("y"),de(Nt())),Id=()=>Y("ADD",Od(Y("DIVIDE",Y("MINUS",Kn("y"),Y("ADD",Sd(),i(ne))),i(ne))),i(1)),nr=e=>Re(Bo(Wt("GTE",e(),i(1)),Wt("LTE",e(),No())),[gt("HighlightedProperty",e()),O("TextProperty",ni(e())),{type:`world_emit_${Kt}_ChosenEvent`,inputs:{ACTOR:p()}}]),Pd=()=>Bo(Wt("LTE",{block:{type:"math_single",fields:{OP:"ABS"},inputs:{NUM:Y("MINUS",Kn("x"),rt("x"))}}},de(Ce())),Wt("LTE",{block:{type:"math_single",fields:{OP:"ABS"},inputs:{NUM:Y("MINUS",Kn("y"),rt("y"))}}},de(Nt()))),xd=()=>[Yt(),ge(v("#8890b0"),2),{type:"world_draw_line",inputs:{X1:Y("MINUS",Ce(),i(16)),Y1:i(ne/2-3),X2:Y("MINUS",Ce(),i(10)),Y2:i(ne/2+3)}},{type:"world_draw_line",inputs:{X1:Y("MINUS",Ce(),i(10)),Y1:i(ne/2+3),X2:Y("MINUS",Ce(),i(4)),Y2:i(ne/2-3)}},ve()],ar=(e,t)=>({type:"world_draw_text",inputs:{TEXT:e,X:i(Ed),Y:t,SIZE:$("TextSizeProperty"),ANCHOR:{block:{type:"text",fields:{TEXT:"left"}}}}}),rr=e=>Y("ADD",i(ne+ne/2),Y("MULTIPLY",Y("MINUS",e,i(1)),i(ne))),Bd=Z("Dropdown",[ye("actors/label"),X("words","choices",""),X("boolean","open","false"),X("number","highlighted","1"),Me("chosen"),a("Mouse#CanBeClickedTrait"),a("Mouse#TakesMouseInputTrait"),a("Tab Navigation#CanBeFocusedTrait"),a("Input#TakesKeyboardInputTrait"),ce("dropdown"),gt("WidthProperty",i(kd),"ActorsLabel"),ma(i(ne)),O("TextAnchorProperty",V("left")),gt("ChoicesProperty",{block:{type:"lists_create_with",extraState:{itemCount:3},inputs:{ADD0:{block:{type:"text",fields:{TEXT:"ONE"}}},ADD1:{block:{type:"text",fields:{TEXT:"TWO"}}},ADD2:{block:{type:"text",fields:{TEXT:"THREE"}}}}}}),O("TextProperty",V("ONE"))],{variables:[jn],handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:p()},next:{block:W([{type:"world_do_TabNavigation_TakeTheFocusAction",inputs:{ACTOR:p()}},Re(Ot(),[nr(Id),...bn()],or())])}},{type:"world_on_Mouse_PressesMouseButtonEvent",fields:{FILTER0:""},inputs:{ACTOR:p()},next:{block:Re(Bo(Ot(),vd(Pd())),bn())}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"enter"},inputs:{ACTOR:p()},next:{block:Re(fn(),[Re(Ot(),[nr(An),...bn()],or())])}},...["up arrow","down arrow"].map(e=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:e},inputs:{ACTOR:p()},next:{block:Re(Bo(fn(),Ot()),[gt("HighlightedProperty",Rd(Y("ADD",An(),i(e==="up arrow"?-1:1)),i(1),No()))])}}))],drawing:{width:Ce(),height:Nt(),commands:[R(v("#202840")),ge(v("#8890b0"),2),H(0,0,Ce(),ne),ve(),R($("TextColorProperty")),ar($("TextProperty"),i(ne/2)),...xd(),Re(Ot(),[R(v("#303a58")),H(0,ne,Ce(),Y("MINUS",Nt(),i(ne))),{type:"world_count_with",fields:{VAR:jn},inputs:{FROM:i(1),TO:No(),BY:i(1),DO:{block:W([Re(Wt("EQ",no(),An()),[R(v("#4050a0")),H(i(0),Y("MINUS",rr(no()),i(ne/2)),Ce(),ne)]),R($("TextColorProperty")),ar(ni(no()),rr(no()))])}}}]),Re(fn(),[Yt(),ge(v("#ffd45e"),Cd),H(i(oo),i(oo),Y("MINUS",Ce(),i(oo*2)),Y("MINUS",Nt(),i(oo*2)))])]}}),Nd=240,Md=160,ao=()=>q("Width"),Tn=()=>q("Height"),sr=(e,t)=>({type:`world_set_ActorsLabel_${e}Property`,inputs:{ACTOR:p(),VALUE:{shadow:{type:"math_number",fields:{NUM:t}}}}}),Dd=Z("Panel",[ye("actors/label"),ce("panel"),sr("Width",Nd),sr("Height",Md),O("TextProperty",V(""))],{drawing:{width:ao(),height:Tn(),commands:[R(v("#202840")),ge(v("#8890b0"),2),H(0,0,ao(),Tn()),ve(),R($("TextColorProperty")),Ye(de(ao()),de(Tn()),ao())]}}),Ld=200,Ud=120,Wd=20,Hd=()=>({block:{type:"world_get_Space_ParentProperty",inputs:{ACTOR:p()}}}),ir=(e,t)=>Il(e,Pl(`ActorsPauseMenu_${t}Event`,Hd())),ro=()=>q("Width"),lr=()=>q("Height"),dr=(e,t)=>({type:`world_set_ActorsLabel_${e}Property`,inputs:{ACTOR:p(),VALUE:{shadow:{type:"math_number",fields:{NUM:t}}}}}),Fd=Z("Pause Menu",[ye("actors/panel"),Me("resumed"),Me("quit"),ce("pause"),dr("Width",Ld),dr("Height",Ud),O("TextProperty",V("PAUSED"))],{handlers:[ir("Resume","Resumed"),ir("Quit","Quit")],drawing:{width:ro(),height:lr(),commands:[R(v("#202840")),ge(v("#8890b0"),2),H(0,0,ro(),lr()),ve(),R($("TextColorProperty")),Ye(de(ro()),Wd,ro())]}}),si="playerWalk",Gd={type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:{block:{type:"world_this_actor"}}}},Vd=Z("Platformer Player",[a("Jumping#JumpsTrait"),a("Arrow Keys#MovesAcrossTrait"),a("Input#TakesKeyboardInputTrait"),Gs(si)],{handlers:[Ol("space",[Gd])]}),ii="player",$d=e=>({type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:i(e)}}),li=Z("Portrait",[h(`${ii}.png`),$d(0)]),Yd=3,jd=Z("Shot",[a("Physics#CanMoveTrait"),a("Collisions#CanCollideTrait"),a("Expiry#ExpiresTrait"),a("Health#DealsDamageTrait"),{type:"world_set_Expiry_LifetimeProperty",inputs:{ACTOR:p(),VALUE:i(Yd)}}],{drawing:{width:8,height:8,commands:[R(v("#ffd23f")),H(0,0,8,8)]}}),Qt="ActorsSlider",Mo="ActorsProgressBar",Kd=96,Qd=20,Ze=7,so=6,io=1,Jd=2,cr=.1,ft=(e,t)=>({block:{type:`world_get_${e}_${t}`,inputs:{ACTOR:p()}}}),mt=()=>ft(Qt,"WidthProperty"),Rt=()=>ft(Qt,"HeightProperty"),Aa=()=>ft(Mo,"FractionProperty"),zd=()=>ft(Qt,"HeldProperty"),di=()=>({block:{type:"world_get_TabNavigation_FocusedProperty",inputs:{ACTOR:p()}}}),Ge=(e,t,o)=>({block:{type:"math_arithmetic",fields:{OP:e},inputs:{A:t,B:o}}}),Co=e=>Ge("DIVIDE",e,i(2)),Xd=()=>({block:{type:"world_vector_component",fields:{COMPONENT:"x"},inputs:{VEC:{block:{type:"world_mouse_position"}}}}}),qd=()=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:p()}}}),ci=()=>({block:{type:"math_constrain",inputs:{VALUE:Ge("DIVIDE",Ge("MINUS",Xd(),Ge("MINUS",qd(),Co(mt()))),mt()),LOW:i(0),HIGH:i(1)}}}),hi=e=>({type:`world_set_${Mo}_FractionProperty`,inputs:{ACTOR:p(),VALUE:e}}),pi=e=>({type:`world_set_${Qt}_HeldProperty`,inputs:{ACTOR:p(),VALUE:{block:{type:"logic_boolean",fields:{BOOL:e?"TRUE":"FALSE"}}}}}),Zd=()=>({type:`world_emit_${Qt}_ChangedEvent`,inputs:{ACTOR:p()}}),ec=()=>({type:"world_do_TabNavigation_TakeTheFocusAction",inputs:{ACTOR:p()}}),Ht=(e,t,o)=>({type:"controls_if",...o?{extraState:{hasElse:!0}}:{},inputs:{IF0:e,DO0:{block:W(t)},...o?{ELSE:{block:W(o)}}:{}}}),tc=(e,t)=>({block:{type:"logic_compare",fields:{OP:"NEQ"},inputs:{A:e,B:t}}}),fa=e=>Ht(tc(e(),Aa()),[hi(e()),Zd()]),hr=(e,t)=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:e},inputs:{ACTOR:p()},next:{block:Ht(di(),[fa(()=>({block:{type:"math_constrain",inputs:{VALUE:Ge("ADD",Aa(),i(t)),LOW:i(0),HIGH:i(1)}}}))])}}),oc=(e,t,o)=>({type:"world_draw_circle",inputs:{X:e,Y:t,RADIUS:i(o)}}),qe=(e,t)=>Ge("MINUS",e,i(t)),pr=()=>Ge("ADD",i(Ze),Ge("MULTIPLY",qe(mt(),Ze*2),Aa())),nc=()=>({type:"world_trait_step",fields:{PHASE:"decide",NAME:"follow the pointer"},inputs:{DO:{block:Ht(zd(),[Ht({block:{type:"world_is_button_down",fields:{BUTTON:"left"}}},[fa(ci)],[pi(!1)])])}}}),ac=Z("Slider",[ye("actors/progressBar"),X("number","width",String(Kd)),X("number","height",String(Qd)),X("boolean","held","false"),Me("changed"),a("Mouse#CanBeClickedTrait"),a("Tab Navigation#CanBeFocusedTrait"),a("Input#TakesKeyboardInputTrait"),ce("slider"),hi(i(.5)),nc()],{handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:p()},next:{block:W([ec(),pi(!0),fa(ci)])}},hr("left arrow",-cr),hr("right arrow",cr)],drawing:{width:mt(),height:Rt(),commands:[ve(),R(ft(Mo,"TrackColorProperty")),H(i(Ze),qe(Co(Rt()),so/2),qe(mt(),Ze*2),so),R(ft(Mo,"BarColorProperty")),H(i(Ze),qe(Co(Rt()),so/2),qe(pr(),Ze),so),R(v("#ffffff")),oc(pr(),Co(Rt()),Ze),Ht(di(),[Yt(),ge(v("#ffd45e"),Jd),H(i(io),i(io),qe(mt(),io*2),qe(Rt(),io*2))])]}}),St={id:"typewriter_words",name:"words",type:"string",binds:"String"},rc=20,Ug=["Time#HasATimerTrait"],lo=e=>({type:"world_set_Time_TimerRunsProperty",inputs:{ACTOR:p(),VALUE:{block:{type:"logic_boolean",fields:{BOOL:e?"TRUE":"FALSE"}}}}}),sc=()=>({block:{type:"world_get_Time_TimerRunsProperty",inputs:{ACTOR:p()}}}),_n=e=>({block:{type:"text_length",inputs:{VALUE:e}}}),ic=(e,t)=>({block:{type:"text_getSubstring",fields:{WHERE1:"FROM_START",WHERE2:"FROM_START"},inputs:{STRING:e,AT1:{block:{type:"math_number",fields:{NUM:1}}},AT2:t}}}),ur=e=>({block:{type:"math_number",fields:{NUM:e}}}),wr=(e,t,o)=>({block:{type:"math_arithmetic",fields:{OP:e},inputs:{A:t,B:o}}}),lc=(e,t,o)=>({block:{type:"logic_compare",fields:{OP:e},inputs:{A:t,B:o}}}),yr=(e,t)=>({type:"controls_if",inputs:{IF0:e,DO0:{block:W(t)}}});function dc(e){const t=Hs(e),o=()=>({block:{type:`world_get_${t}_TheWholeLineProperty`,inputs:{ACTOR:p()}}}),n=l=>({type:`world_set_${t}_TheWholeLineProperty`,inputs:{ACTOR:p(),VALUE:l}}),r=()=>({type:`world_emit_${t}_FinishesRevealingEvent`,inputs:{ACTOR:p()}});return{sayBlock:`world_do_${t}_SayAction`,firesBlock:"world_on_Time_TimerFiresEvent",variables:[{id:St.id,name:St.name,type:St.binds}],rows:[X("string","the whole line","",{readonly:!0}),X("number","letters a second",String(rc)),Me("finishes revealing"),Wa({say:["say",St],description:"Say a new line, from the beginning. The words arrive at reading pace.",body:[n(Rl(St)),O("TextProperty",{block:{type:"text",fields:{TEXT:""}}}),{type:"world_set_Time_TimerPeriodProperty",inputs:{ACTOR:p(),VALUE:wr("DIVIDE",ur(1),{block:{type:`world_get_${t}_LettersASecondProperty`,inputs:{ACTOR:p()}}})}},lo(!0)]}),Wa({say:["show all of it"],description:"Skip to the end of the line — for a reader who has read it faster than it is arriving.",body:[yr(sc(),[O("TextProperty",o()),lo(!1),r()])]}),lo(!1)],handler:{type:"world_on_Time_TimerFiresEvent",inputs:{ACTOR:p()},next:{block:W([O("TextProperty",ic(o(),wr("ADD",_n($("TextProperty")),ur(1)))),yr(lc("GTE",_n($("TextProperty")),_n(o())),[lo(!1),r()])])}}}}const cc=280,hc=96,kn=()=>q("Width"),gr=()=>q("Height"),mr=(e,t)=>({type:`world_set_ActorsLabel_${e}Property`,inputs:{ACTOR:p(),VALUE:{shadow:{type:"math_number",fields:{NUM:t}}}}}),Jn=12,pc=e=>({block:{type:"math_arithmetic",fields:{OP:"MINUS"},inputs:{A:e,B:{shadow:{type:"math_number",fields:{NUM:Jn*2}}}}}}),En=dc("actors/speechBox"),ui=Z("Speech Box",[ye("actors/label"),a("Time#HasATimerTrait"),ce("speech"),mr("Width",cc),mr("Height",hc),...En.rows,O("TextAnchorProperty",V("top left")),O("TextProperty",V("Once upon a time…"))],{variables:En.variables,handlers:[En.handler],drawing:{width:kn(),height:gr(),commands:[R(v("#101828")),ge(v("#ffffff"),2),H(0,0,kn(),gr()),ve(),R($("TextColorProperty")),Ye(Jn,Jn,pc(kn()))]}}),ba="ActorsTextArea",uc=160,wc=96,yc=1.25,co=8,gc=2,Ar=1,fr=()=>q("Width"),br=()=>q("Height"),Pe=()=>({block:{type:"world_get_TabNavigation_FocusedProperty",inputs:{ACTOR:p()}}}),zn=()=>({type:`world_emit_${ba}_ChangedEvent`,inputs:{ACTOR:p()}}),Se=(e,t)=>({type:"controls_if",inputs:{IF0:e,DO0:{block:W(t)}}}),wt=(e,t)=>({block:{type:"logic_operation",fields:{OP:"AND"},inputs:{A:e,B:t}}}),z=(e,t,o)=>({block:{type:"math_arithmetic",fields:{OP:e},inputs:{A:t,B:o}}}),et=(e,t,o)=>({block:{type:"logic_compare",fields:{OP:e},inputs:{A:t,B:o}}}),wi=(e,t,o)=>({block:{type:"math_constrain",inputs:{VALUE:e,LOW:t,HIGH:o}}}),Xn=e=>{let t;for(let o=e.length-1;o>=0;o-=1)t={block:{type:"world_as_text",inputs:{VALUE:e[o],...t?{ADD:t}:{}}}};return t},mc=e=>({block:{type:"text",fields:{TEXT:e}}}),Ta=()=>mc(`
`),_a=()=>$("TextProperty"),qn=()=>$("TextSizeProperty"),vo=()=>({block:{type:"text_length",inputs:{VALUE:_a()}}}),le=()=>({block:{type:`world_get_${ba}_CaretProperty`,inputs:{ACTOR:p()}}}),tt=e=>({type:`world_set_${ba}_CaretProperty`,inputs:{ACTOR:p(),VALUE:e}}),ka=(e,t=_a())=>({block:{type:"text_getSubstring",fields:{WHERE1:"FROM_START",WHERE2:"FROM_START"},inputs:{STRING:t,AT1:i(1),AT2:e}}}),bt=(e,t=_a())=>({block:{type:"text_getSubstring",fields:{WHERE1:"FROM_START",WHERE2:"LAST"},inputs:{STRING:t,AT1:e}}}),Do=(e,t)=>({block:{type:"text_indexOf",fields:{END:t},inputs:{VALUE:e,FIND:Ta()}}}),Ac=e=>({block:{type:"text_count",inputs:{SUB:Ta(),TEXT:e}}}),Jt=()=>ka(le()),Lo=()=>Do(Jt(),"LAST"),yi=()=>z("MINUS",le(),Lo()),fc=()=>Ac(Jt()),bc=()=>bt(z("ADD",Lo(),i(1)),Jt()),Tc=e=>({block:{type:"world_text_width",inputs:{TEXT:e,SIZE:qn()}}}),_c=()=>({type:"world_do_TabNavigation_TakeTheFocusAction",inputs:{ACTOR:p()}}),Tr=e=>[O("TextProperty",Xn([Jt(),e,bt(z("ADD",le(),i(1)))])),tt(z("ADD",le(),i(1))),zn()],kc=()=>{const e=()=>z("MINUS",Lo(),i(1)),t=()=>Do(ka(e()),"LAST");return Se(wt(Pe(),et("GT",Lo(),i(0))),[tt(z("ADD",t(),wi(yi(),i(0),z("MINUS",e(),t()))))])},Ec=()=>{const e=()=>bt(z("ADD",le(),i(1))),t=()=>Do(e(),"FIRST"),o=()=>z("ADD",le(),t()),n=()=>bt(z("ADD",o(),i(1))),r=()=>Do(n(),"FIRST"),l=()=>({block:{type:"logic_ternary",inputs:{IF:et("GT",r(),i(0)),THEN:z("MINUS",r(),i(1)),ELSE:z("MINUS",vo(),o())}}});return Se(wt(Pe(),et("GT",t(),i(0))),[tt(z("ADD",o(),wi(yi(),i(0),l())))])},Cc=()=>({block:{type:"logic_operation",fields:{OP:"AND"},inputs:{A:Pe(),B:{block:{type:"logic_compare",fields:{OP:"LT"},inputs:{A:{block:{type:"math_modulo",inputs:{DIVIDEND:{block:{type:"world_time"}},DIVISOR:i(Ar)}}},B:i(Ar/2)}}}}}}),Je=(e,t)=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:e},inputs:{ACTOR:p()},next:{block:t}}),vc=Z("Text Area",[ye("actors/label"),a("Input#TakesKeyboardInputTrait"),a("Mouse#CanBeClickedTrait"),a("Tab Navigation#CanBeFocusedTrait"),ce("paragraph"),X("number","caret","0"),Me("changed"),{type:"world_set_ActorsLabel_WidthProperty",inputs:{ACTOR:p(),VALUE:{shadow:{type:"math_number",fields:{NUM:uc}}}}},{type:"world_set_ActorsLabel_HeightProperty",inputs:{ACTOR:p(),VALUE:{shadow:{type:"math_number",fields:{NUM:wc}}}}},O("TextAnchorProperty",V("top left")),O("TextProperty",V(""))],{handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:p()},next:{block:W([_c(),tt(vo())])}},{type:"world_on_Input_TypesEvent",inputs:{ACTOR:p()},next:{block:Se(Pe(),Tr({block:{type:"world_event_value"}}))}},Je("enter",Se(Pe(),Tr(Ta()))),Je("backspace",Se(wt(Pe(),et("GT",le(),i(0))),[O("TextProperty",Xn([ka(z("MINUS",le(),i(1))),bt(z("ADD",le(),i(1)))])),tt(z("MINUS",le(),i(1))),zn()])),Je("delete",Se(wt(Pe(),et("LT",le(),vo())),[O("TextProperty",Xn([Jt(),bt(z("ADD",le(),i(2)))])),zn()])),Je("left arrow",Se(wt(Pe(),et("GT",le(),i(0))),[tt(z("MINUS",le(),i(1)))])),Je("right arrow",Se(wt(Pe(),et("LT",le(),vo())),[tt(z("ADD",le(),i(1)))])),Je("up arrow",kc()),Je("down arrow",Ec())],drawing:{width:fr(),height:br(),commands:[R(v("#1a1a22")),ge(v("#8890b0"),2),H(0,0,fr(),br()),ve(),R($("TextColorProperty")),Ye(i(co),i(co),0),Se(Cc(),[H(z("ADD",i(co),Tc(bc())),z("ADD",i(co),z("MULTIPLY",fc(),z("MULTIPLY",qn(),i(yc)))),i(gc),qn())])]}}),Oc=28,Uo=()=>q("Width"),ho=()=>q("Height"),ut=()=>({block:{type:"world_get_TabNavigation_FocusedProperty",inputs:{ACTOR:p()}}}),Cn=()=>({type:"world_emit_ActorsTextInput_ChangedEvent",inputs:{ACTOR:p()}}),dt=(e,t)=>({type:"controls_if",inputs:{IF0:e,DO0:{block:W(t)}}}),po=(e,t)=>({block:{type:"logic_operation",fields:{OP:"AND"},inputs:{A:e,B:t}}}),vn=e=>{let t;for(let o=e.length-1;o>=0;o-=1)t={block:{type:"world_as_text",inputs:{VALUE:e[o],...t?{ADD:t}:{}}}};return t},an=()=>$("TextProperty"),gi=()=>$("TextSizeProperty"),Zn=()=>({block:{type:"text_length",inputs:{VALUE:an()}}}),Ea=8,Rc=2,_r=5,kr=1,Q=(e,t,o)=>({block:{type:"math_arithmetic",fields:{OP:e},inputs:{A:t,B:o}}}),xe=(e,t,o)=>({block:{type:"logic_compare",fields:{OP:e},inputs:{A:t,B:o}}}),It=()=>Q("MINUS",Uo(),i(2*Ea)),On=()=>({block:{type:"world_text_width",inputs:{TEXT:an(),SIZE:gi()}}}),oe=()=>({block:{type:"world_get_ActorsTextInput_CaretProperty",inputs:{ACTOR:p()}}}),yt=e=>({type:"world_set_ActorsTextInput_CaretProperty",inputs:{ACTOR:p(),VALUE:e}}),Oo=e=>({block:{type:"text_getSubstring",fields:{WHERE1:"FROM_START",WHERE2:"FROM_START"},inputs:{STRING:an(),AT1:i(1),AT2:e}}}),Rn=e=>({block:{type:"text_getSubstring",fields:{WHERE1:"FROM_START",WHERE2:"LAST"},inputs:{STRING:an(),AT1:e}}}),Wo=e=>({block:{type:"world_text_width",inputs:{TEXT:Oo(e),SIZE:gi()}}}),Sc=()=>({type:"world_do_TabNavigation_TakeTheFocusAction",inputs:{ACTOR:p()}}),Ic=()=>({block:{type:"world_vector_component",fields:{COMPONENT:"x"},inputs:{VEC:{block:{type:"world_mouse_position"}}}}}),Pc=()=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:p()}}}),xc=()=>Q("ADD",Q("MINUS",Q("ADD",Q("MINUS",Ic(),Pc()),de(Uo())),i(Ea)),Mt()),Bc=()=>[yt(i(0)),{type:"controls_repeat_ext",inputs:{TIMES:Zn(),DO:{block:{type:"controls_if",extraState:{hasElse:!0},inputs:{IF0:xe("LTE",Q("ADD",Wo(oe()),Wo(Q("ADD",oe(),i(1)))),Q("MULTIPLY",i(2),xc())),DO0:{block:yt(Q("ADD",oe(),i(1)))},ELSE:{block:{type:"controls_flow_statements",fields:{FLOW:"BREAK"}}}}}}}}],Sn=e=>({type:"world_set_ActorsTextInput_ScrollProperty",inputs:{ACTOR:p(),VALUE:e}}),Mt=()=>({block:{type:"world_get_ActorsTextInput_ScrollProperty",inputs:{ACTOR:p()}}}),mi=()=>Q("MINUS",i(Ea),Mt()),Nc=()=>Q("ADD",mi(),Wo(oe())),Mc=()=>({block:{type:"logic_operation",fields:{OP:"AND"},inputs:{A:ut(),B:{block:{type:"logic_compare",fields:{OP:"LT"},inputs:{A:{block:{type:"math_modulo",inputs:{DIVIDEND:{block:{type:"world_time"}},DIVISOR:i(kr)}}},B:i(kr/2)}}}}}}),uo=()=>Wo(oe()),Dc=()=>({type:"world_trait_step",fields:{PHASE:"react",NAME:"keep the caret in the box"},inputs:{DO:{block:{type:"controls_if",extraState:{elseIfCount:2},inputs:{IF0:xe("LT",uo(),Mt()),DO0:{block:Sn(uo())},IF1:xe("GT",Q("MINUS",uo(),Mt()),It()),DO1:{block:Sn(Q("MINUS",uo(),It()))},IF2:xe("LT",Q("MINUS",On(),Mt()),It()),DO2:{block:Sn({block:{type:"logic_ternary",inputs:{IF:xe("GT",On(),It()),THEN:Q("MINUS",On(),It()),ELSE:{block:{type:"math_number",fields:{NUM:0}}}}}})}}}}}}),Lc=Z("Text Input",[ye("actors/label"),a("Input#TakesKeyboardInputTrait"),a("Mouse#CanBeClickedTrait"),a("Tab Navigation#CanBeFocusedTrait"),ce("input"),X("number","caret","0"),X("number","scroll","0"),Me("changed"),{type:"world_set_ActorsLabel_HeightProperty",inputs:{ACTOR:p(),VALUE:{shadow:{type:"math_number",fields:{NUM:Oc}}}}},O("TextAnchorProperty",V("left")),O("TextProperty",V("")),Dc()],{handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:p()},next:{block:W([Sc(),...Bc()])}},{type:"world_on_Input_TypesEvent",inputs:{ACTOR:p()},next:{block:dt(ut(),[O("TextProperty",vn([Oo(oe()),{block:{type:"world_event_value"}},Rn(Q("ADD",oe(),i(1)))])),yt(Q("ADD",oe(),i(1))),Cn()])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"backspace"},inputs:{ACTOR:p()},next:{block:dt(po(ut(),xe("GT",oe(),i(0))),[O("TextProperty",vn([Oo(Q("MINUS",oe(),i(1))),Rn(Q("ADD",oe(),i(1)))])),yt(Q("MINUS",oe(),i(1))),Cn()])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"delete"},inputs:{ACTOR:p()},next:{block:dt(po(ut(),xe("LT",oe(),Zn())),[O("TextProperty",vn([Oo(oe()),Rn(Q("ADD",oe(),i(2)))])),Cn()])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"left arrow"},inputs:{ACTOR:p()},next:{block:dt(po(ut(),xe("GT",oe(),i(0))),[yt(Q("MINUS",oe(),i(1)))])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"right arrow"},inputs:{ACTOR:p()},next:{block:dt(po(ut(),xe("LT",oe(),Zn())),[yt(Q("ADD",oe(),i(1)))])}}],drawing:{width:Uo(),height:ho(),commands:[R(v("#1a1a22")),ge(v("#8890b0"),2),H(0,0,Uo(),ho()),ve(),R($("TextColorProperty")),Ye(mi(),de(ho()),0),dt(Mc(),[H(Nc(),i(_r),i(Rc),Q("MINUS",ho(),i(2*_r)))])]}}),Ca="ActorsToggle",wo=36,Er=16,yo=6,go=2,Uc=2,ct=()=>q("Width"),ht=()=>q("Height"),ze=(e,t)=>({block:{type:"math_arithmetic",fields:{OP:"MINUS"},inputs:{A:e,B:i(t)}}}),mo=()=>$("OnProperty",Ca),Wc=()=>({block:{type:"world_get_TabNavigation_FocusedProperty",inputs:{ACTOR:p()}}}),Ao=(e,t,o)=>({type:"controls_if",...o?{extraState:{hasElse:!0}}:{},inputs:{IF0:e,DO0:{block:W(t)},...o?{ELSE:{block:W(o)}}:{}}}),Cr=e=>({type:`world_emit_${Ca}_${e}Event`,inputs:{ACTOR:p()}}),vr=(e,t,o)=>({type:"world_draw_circle",inputs:{X:e,Y:t,RADIUS:i(o)}}),Hc=Z("Toggle",[ye("actors/button"),X("boolean","on","false"),Me("turned on"),Me("turned off"),ce("toggle"),O("TextAnchorProperty",V("left")),O("TextProperty",V("Toggle"))],{handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:p()},next:{block:W([{type:`world_set_${Ca}_OnProperty`,inputs:{ACTOR:p(),VALUE:{block:{type:"logic_negate",inputs:{BOOL:mo()}}}}},Ao(mo(),[Cr("TurnedOn")],[Cr("TurnedOff")])])}}],drawing:{width:ct(),height:ht(),commands:[ve(),R($("TextColorProperty")),Ye(i(4),de(ht()),ze(ct(),wo+8)),Ao(mo(),[R(v("#40c060"))],[R(v("#505870"))]),H(ze(ct(),wo+2),ze(de(ht()),Er/2),wo,Er),R(v("#ffffff")),Ao(mo(),[vr(ze(ct(),yo+4),de(ht()),yo)],[vr(ze(ct(),wo-yo),de(ht()),yo)]),Ao(Wc(),[Yt(),ge(v("#ffd45e"),Uc),H(i(go),i(go),ze(ct(),go*2),ze(ht(),go*2))])]}}),Fc=[{id:"label",name:"Label",description:"A word on the screen. Give it text, a size, a color and an anchor, and it draws them — the smallest way for a game to say anything to the player.",requires:[],contents:jt},{id:"progressBar",name:"Progress Bar",description:"A bar that fills up. Set its fraction between 0 and 1 and it draws that much of itself — health, a loading bar, how close a boss is to waking. Attach it to an actor to have it ride above one.",requires:[],contents:pa},{id:"healthBar",name:"Health Bar",description:"A bar that fills itself in. Point it at an actor with “subject” and it shows how much health that actor has left. Put it in the corner for a HUD, or set its parent to have it ride above the actor it is about.",requires:["Health"],actors:["progressBar"],contents:Ks},{id:"button",name:"Button",description:"A label you can press — with the mouse, or with Enter once the keyboard is on it. It raises “is clicked with” on itself either way, so one handler answers both and needs no hit test of its own.",requires:["Mouse","Input","Tab Navigation"],actors:["label"],contents:_d},{id:"toggle",name:"Toggle",description:"A button that is on or off. Click it, or press Enter on it, and it flips — and says “turned on” or “turned off”, so one handler does whatever the switch is for.",requires:["Tab Navigation"],actors:["button","label"],contents:Hc},{id:"slider",name:"Slider",description:"A bar the player drags. Press it and the knob follows the pointer; the arrow keys nudge it once the keyboard is on it. Read its fraction, or hear “changed” when it moves.",requires:["Mouse","Tab Navigation","Input"],actors:["progressBar"],contents:ac},{id:"textInput",name:"Text Input",description:"A line the player types into. Click it or tab to it, and what is typed goes in — with a caret after the last letter, and the words sliding left once they no longer fit.",requires:["Input","Mouse","Tab Navigation"],actors:["label"],contents:Lc},{id:"dropdown",name:"Dropdown",description:"A list of words with one of them chosen. Click it to open, click a row to choose; the arrows and Enter do the same from the keyboard. The choice is its text, and “chosen” says when it changed.",requires:["Mouse","Tab Navigation","Input"],actors:["label"],contents:Bd},{id:"textArea",name:"Text Area",description:"Several lines the player types into. Enter starts a new one, the arrows walk the caret up and down them, and the words break where Enter was pressed and nowhere else.",requires:["Input","Mouse","Tab Navigation"],actors:["label"],contents:vc},{id:"speechBox",name:"Speech Box",description:"A panel with room for a sentence — what a line of dialogue is read from. It types itself out: say a line and the letters arrive at reading pace.",requires:["Time"],actors:["label"],contents:ui},{id:"panel",name:"Panel",description:"A box behind a group. Make a title, a field and a button its children and they move, turn and fade with it — a dialog is a Panel and what it carries.",requires:[],actors:["label"],contents:Dd},{id:"pauseMenu",name:"Pause Menu",description:"A panel that says PAUSED, with a Resume and a Quit button beside it in its map. It says “resumed” or “quit” when one is pressed; what those mean is the world’s to decide.",requires:[],actors:["panel","label"],contents:Fd},{id:"portrait",name:"Portrait",description:"The face of whoever is speaking. It starts invisible, so a scene fades it in when its turn comes and out again when it passes.",requires:[],sprites:[ii],contents:li},{id:"coin",name:"Coin",description:"A spinning coin that can be picked up. It knows nothing about points — who may collect it, and what that is worth, are the game’s to say.",requires:["Collection"],animations:[Vs],contents:$s},{id:"shot",name:"Shot",description:"A small bright square that flies, hits, hurts, and disappears a few seconds later. Something for a shooter to send — repaint it, or give it a picture of your own.",requires:["Physics","Collisions","Expiry","Health"],contents:jd},{id:"player",name:"Platformer Player",description:"Somebody to be in a side-view game. Walks left and right with the arrow keys, jumps with the space bar, and falls when there is nothing under it — which is why it comes with a Ground.",requires:["Jumping","Arrow Keys","Input"],animations:[si],contents:Vd},{id:"ground",name:"Ground",description:"A tile that holds things up and cannot be walked through. The other half of the Platformer Player — gravity with nothing to land on is a long fall.",requires:["Gravity","Solid Bodies"],sprites:[Ys],contents:js}],Ft=e=>Fc.find(t=>t.id===e),At="actors";function Gc(e){const t=Object.values(e.folders).find(r=>r.name===At&&r.parentId==="0");if(t)return{source:e,folderId:t.id};const o=Zo(e,At),n=Object.values(o.folders).find(r=>r.name===At&&r.parentId==="0");return{source:o,folderId:n?.id??"0"}}function Vc(e){return e.requires.map(t=>us(t)).filter(t=>t!==void 0)}function $c(e){return(e.actors??[]).map(t=>Ft(t)).filter(t=>t!==void 0)}function Yc(e){return(e.animations??[]).map(t=>Vt.find(o=>o.id===t)).filter(t=>t!==void 0)}function jc(e){return(e.sprites??[]).map(t=>en.find(o=>o.id===t)).filter(t=>t!==void 0)}function Kc(e,t){const o=Object.values(e.folders).find(n=>n.name===At&&n.parentId==="0");return!!o&&Object.values(e.files).some(n=>n.folderId===o.id&&n.name.replace(/\.[^.]+$/,"")===t)}function Ho(e,t){return Ai(e,t,new Set)}function Ai(e,t,o){let n=e;if(o.has(t.id))return{source:n,path:`${At}/${t.id}`};o.add(t.id);for(const T of $c(t))n=Ai(n,T,o).source;for(const T of Vc(t))n=ua(n,T).source;for(const T of jc(t))n=ca(n,T).source;for(const T of Yc(t))n=Is(n,T).source;const r=Gc(n);n=r.source;const l=`${At}/${t.id}`;if(Kc(n,t.id))return{source:n,path:l};const u=st(Object.values(n.files));return{source:{...n,files:{...n.files,[u]:{id:u,name:`${t.id}.actor`,language:"actor",contents:t.contents,folderId:r.folderId}}},path:l}}const Or=Dt*F/2,Qc=JSON.stringify({type:"map",size:{width:Dt,height:Dt},tile:{width:F,height:F},actors:[{type:"actors/pauseMenu",id:"Pause",properties:{positional:{position:{x:Or,y:Or}}}},{type:"actors/button",id:"Resume",properties:{positional:{parent:"Pause",position:{x:0,y:4}},Label:{text:"RESUME"}}},{type:"actors/button",id:"Quit",properties:{positional:{parent:"Pause",position:{x:0,y:40}},Label:{text:"QUIT"}}}]},null,2),Jc=[{id:"pauseMenu",name:"Pause Menu",description:"A panel that says PAUSED with a Resume and a Quit button. Load it when a key is pressed and “pause the game”; it says “resumed” or “quit” when a button is pressed, and the world decides what each means.",actors:["pauseMenu","button"],contents:Qc}],zc=e=>Jc.find(t=>t.id===e),Ro="maps";function Xc(e){const t=Object.values(e.folders).find(r=>r.name===Ro&&r.parentId==="0");if(t)return{source:e,folderId:t.id};const o=Zo(e,Ro),n=Object.values(o.folders).find(r=>r.name===Ro&&r.parentId==="0");return{source:o,folderId:n?.id??"0"}}const qc=(e,t)=>Object.values(e.files).some(o=>o.name===`${t}.map`);function Zc(e,t){let o=e;for(const u of t.actors){const T=Ft(u);T&&(o=Ho(o,T).source)}const n=Xc(o);o=n.source;const r=`${Ro}/${t.id}`;if(qc(o,t.id))return{source:o,path:r};const l=st(Object.values(o.files));return{source:{...o,files:{...o.files,[l]:{id:l,name:`${t.id}.map`,language:"map",contents:t.contents,folderId:n.folderId}}},path:r}}const rn=e=>`lesson-${e.replace(/\//g,"-")}`,Wg=(e,t)=>{for(const o of t)if(rn(o)===e)return o},eh=e=>`/app/projects/world/${rn(e.id)}/edit`;let fi=eh;const Hg=e=>{fi=e},Fg=e=>fi(e),th=["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],A=e=>{const t=typeof e.world=="string"?e.world:e.world.world,o=typeof e.world=="string"?{}:e.world.actors,n={main:{name:"main.world",language:"world",contents:t,folderId:"worlds",active:!0,open:!0}};for(const[l,u]of Object.entries(o))n[l]={name:`${l}.actor`,language:"actor",contents:u,folderId:"actors",open:!0};for(const[l,u]of Object.entries(e.actors??{}))n[l]={name:`${l}.actor`,language:"actor",contents:u,folderId:"actors",open:!0};for(const[l,u]of Object.entries(e.maps??{}))n[l]={name:`${l}.map`,language:"map",contents:u,folderId:"maps"};for(const[l,u]of Object.entries(e.ruleFiles??{}))n[l]={name:`${l}.rule`,language:"rule",contents:u,folderId:"rules"};let r=_e({folders:[...th],files:n,open:["main",...Object.keys(o),...Object.keys(e.actors??{})]}).source;for(const l of e.rules??[])r=ua(r,fo(Xo(l),"rule",l)).source;for(const l of e.stockActors??[])r=Ho(r,fo(Ft(l),"actor",l)).source;for(const l of e.sprites??[])r=ca(r,fo(Os(l),"sprite",l)).source;for(const l of e.animations??[])r=Is(r,fo(al(l),"animation",l)).source;return r},fo=(e,t,o)=>{if(!e)throw new Error(`no stock ${t} called “${o}”`);return e},c=(e,t)=>({type:"world_set_position",inputs:{ACTOR:p(),X:i(e),Y:i(t)}}),d=(e,t)=>({type:"world_add_actor",fields:{ACTOR:e},...t.length?{inputs:{DO:{block:W(t)}}}:{}}),s=e=>`actors/${e}`,ke=e=>({block:{type:"world_actor_kind",fields:{ACTOR:s(e)}}}),oh=e=>({type:"world_define_drawing",inputs:{WIDTH:{shadow:{type:"math_number",fields:{NUM:e.width}}},HEIGHT:{shadow:{type:"math_number",fields:{NUM:e.height}}},DO:{block:W(e.commands)}}}),nt=e=>{if(Array.isArray(e))return e.reduce((n,r)=>n+nt(r),0);if(typeof e!="object"||e===null)return 0;const t=e,o=Object.entries(t.inputs??{}).filter(([n])=>n==="DO").reduce((n,[,r])=>n+nt(r.block),0);return 1+(o?o+.7:0)+nt(t.next?.block)},nh=40,ah=60,Fo=(e,t)=>e+t*nh+ah,rh=({name:e,rows:t,drawing:o})=>({type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:W([...t,...o?[oh(o)]:[]])}}),sh=e=>{const t=rh(e);let o=Fo(20,nt(t));const n=(e.handlers??[]).map(r=>{const l={...r,x:20,y:o};return o=Fo(o,nt(r)),l});return JSON.stringify({blocks:{blocks:[t,...n]}},null,2)},lt=(e,t,o)=>({type:"world_rule_property",fields:{TYPE:e,ACCESS:"writable",NAME:t,DEFAULT:o}}),f=({name:e,tiles:t,rows:o,actors:n,handlers:r})=>{const l=[...t?[{type:"world_set_map_size",inputs:{X:i(t[0]),Y:i(t[1])}}]:[],...o],u=l.length?W(l):void 0,T={type:"world_world",x:20,y:20,fields:{NAME:e},...u?{next:{block:u}}:{}};let g=Fo(20,nt(T));const E=(r??[]).map(N=>{const ee={...N,x:20,y:g};return g=Fo(g,nt(N)),ee});return{world:JSON.stringify({blocks:{blocks:[T,...E]}},null,2),actors:Object.fromEntries((n??[]).map(N=>[N.id,sh(N)]))}},ih={name:"First light",description:"A world with one actor in it, and a Run button.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(160,160)])],actors:[{id:"hero",name:"Hero",rows:[h("player.png")]}]}),sprites:["player"]}),instructions:`
## A world with something in it

Press **Run**. There is a world, and there is one thing in it.

Two files say all of it, and they are the two tabs above the blocks.
**define world**, in \`main.world\`, is the world, and what is listed under it
is what gets put in it. **define actor ⟨Hero⟩**, in \`hero.actor\`, says what a
Hero *is* — here, one picture and nothing else.

Read them in that order and you have read the whole project.

### What you do

1. **add actor** a second Hero to the world, somewhere the first is not.
2. Run it. Two Heroes, from one \`define actor\`: the file says what a Hero is,
   and the world says how many there are and where.
3. Open the \`hero.actor\` tab and change its picture with **set sprite**. Run
   it again — both change, because both are Heroes.
`.trim()},lh={name:"Make it go",description:"A player that ignores you, and the trait that changes that.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(160,160)])],actors:[{id:"hero",name:"Hero",rows:[h("player.png")]}]}),sprites:["player"],rules:["arrows"]}),instructions:`
## Make it go

Press the arrow keys. Nothing happens — the Hero does not know about them.

This project holds the **Arrow Keys** rule. A rule a project holds does nothing
by itself: an actor has to *elect* what it offers. (The count on \`define world\`
says how many rules are in play; click it to see them.)

### What you do

1. In the \`hero.actor\` tab, add **use trait ⟨Moves Across⟩** under
   \`define actor ⟨Hero⟩\`.
2. Run it. Left and right work; up and down do not.
3. Add **Moves Down** as well, and now it walks in every direction — which is
   what a top-down game wants and a platformer does not.
4. Find the speed the trait gave the Hero, and change it.
`.trim()},dh={name:"Speed is not a place",description:"Moving by hand every frame, and the rule that replaces it.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(40,160)])],actors:[{id:"hero",name:"Hero",rows:[h("player.png"),{type:"world_trait_step",fields:{PHASE:"move",NAME:"shuffle right"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:{block:{type:"world_this_actor"}}}}},B:i(2)}}},Y:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"y"},inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}}}}}}]}]}),sprites:["player"],rules:["motion"]}),instructions:`
## Speed is not a place

The Hero crosses the screen, and it does it the way everybody writes first:
**every frame, put it two pixels further right**. Read the \`each frame\` under
\`define actor ⟨Hero⟩\`, in the \`hero.actor\` tab, which is the whole of how
it does it.

That works, and it is not how things move. It ties the speed to the frame rate,
it cannot be pushed, and nothing else can affect it.

### What you do

1. Add **use trait ⟨Can Move⟩** to the Hero — that is the Physics rule.
2. Set its **speed** once, when the world starts.
3. **Delete the whole \`each frame\` handler.** It should still cross the screen.

Nothing is moving it now. It has a speed, and having a speed is what moving is.
`.trim()},ch={name:"Down",description:"A thing in the air, some ground, and nothing pulling.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(160,40)]),d(s("ground"),[c(160,272)])],actors:[{id:"hero",name:"Hero",rows:[h("player.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]}]}),sprites:["player","ground"],rules:["gravity"]}),instructions:`
## Down

The Hero is in the air and stays there. The **Gravity** rule is in this project
— the count on \`define world\` says so — and nothing has elected it.

### What you do

1. Give the Hero **use trait ⟨Affected by Gravity⟩**. Run it: it falls, and it
   keeps falling, straight through the floor.
2. Give the Ground **use trait ⟨Acts as Ground⟩**. Now it lands.
3. Add a **when ⟨Hero⟩ stops falling** handler and print something, so you can
   see the moment happen.
4. Click the **open** button on \`use trait ⟨Affected by Gravity⟩\` to open the
   rule itself, and find the number that says how hard it pulls. Change it and
   run again — it is your copy.
`.trim()},hh={levelData:{showFileBrowser:!0},name:"A picture is a file",description:"An actor drawing a gray box, and the picture it could have.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(160,160)])],actors:[{id:"hero",name:"Hero",rows:[],drawing:{width:24,height:24,commands:[R(v("#8d8d99")),H(0,0,24,24)]}}]})}),instructions:`
## A picture is a file

The Hero is a gray box because that is what \`hero.actor\` says to draw.
Nothing in this lab is built in: a picture is a **file** the project holds,
and until it holds one there is nothing to draw but shapes.

This is the first lesson with a file browser down the left, and that is the
lesson: the pictures are files like everything else — like the Hero, whose
tab you have been opening — so they are in the list like everything else.

### What you do

1. Add **set sprite** to the Hero, and use the \`(import…)\` row on its dropdown
   to bring a picture in. Look at \`sprites/\` on the left afterwards — it is
   really there, and it is yours, not a link to the library's.
2. Run it. The sprite wins; the drawing underneath is what an actor does when it
   has no picture.
3. Open the picture you imported and **paint on it**. It is yours now — the copy
   in the library is untouched.
`.trim()},Rr=e=>({type:"world_set_ActorsBar_FractionProperty",inputs:{ACTOR:p(),VALUE:i(e)}}),Sr=e=>({type:"world_draw_rectangle",inputs:{X:i(0),Y:i(0),WIDTH:e,HEIGHT:i(12)}}),ph={name:"Draw it yourself",description:"Two progress bars that are both full, and one of them should not be.",source:A({world:f({name:"My World",rows:[d(s("bar"),[c(160,110),Rr(1)]),d(s("bar"),[c(160,210),Rr(.35)])],actors:[{id:"bar",name:"Bar",rows:[lt("number","fraction","1")],drawing:{width:96,height:12,commands:[R(v("#3d3d47")),Sr(i(96)),R(v("#4caf50")),Sr(i(96))]}}]})}),instructions:`
## Draw it yourself

Two Bars. One is set to **1** and one to **0.35**, and both are drawn full,
because the green rectangle is 96 wide — a number somebody typed.

An actor with no picture paints itself. \`define drawing\` is a pen and a few
shapes, and it is what every meter, bar and box in this lab is made of. It runs
**for each actor of that kind**, so anything it reads off the actor is that
actor's own.

### What you do

1. Find the second **draw rectangle** — the green one — under
   \`define actor ⟨Bar⟩\`, in the \`bar.actor\` tab.
2. Put **96 × ⟨fraction of ⟨this actor⟩⟩** in its **size** where the 96 is.
3. Run it. One Bar is full and one is a third full, from one drawing.
4. Change the track color, or add an outline. It is your picture.
`.trim()},uh={name:"Behind everything",description:"A world on a flat color, and the picture that belongs behind it.",source:A({world:f({name:"My World",rows:[{type:"world_set_background_color",inputs:{COLOR:v("#7ec8e3")}},d(s("hero"),[c(160,200)])],actors:[{id:"hero",name:"Hero",rows:[h("player.png")]}]}),sprites:["player"]}),instructions:`
## Behind everything

A flat blue sky, and a Hero standing on nothing. The blue is the world's
**background color** — one color behind everything, which is what a world
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
`.trim()},wh={name:"Pictures in a row",description:"A Hero that slides along without ever moving its legs.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(160,160)])],actors:[{id:"hero",name:"Hero",rows:[a("Arrow Keys#MovesAcrossTrait"),h("player.png")]}]}),sprites:["player"],rules:["arrows"]}),instructions:`
## Pictures in a row

Walk the Hero left and right. It slides: the picture never changes, because a
sprite is one picture and that is all it can be.

An **animation** is a file too, and what is in it is not pictures — it is a
list of RECTANGLES cut out of one image, and how long to hold each one. The
image is a strip of frames; the animation says which part is which frame.

### What you do

1. In \`hero.actor\`, add **play animation ⟨…⟩ on ⟨this actor⟩** under
   \`define actor ⟨Hero⟩\`, and use the \`(import…)\` row on its dropdown to
   bring a walk cycle in.
2. Run it. The legs move.
3. Open the animation and look at the frames — the image is one picture with
   the walk laid out across it, and the file is where each frame's rectangle
   is written down.
4. Change how long a frame is held, and run it again.
`.trim()},yh={name:"An effect is a recipe",description:"A world drawn plainly, and the filters that change how it is painted.",source:A({world:f({name:"My World",rows:[{type:"world_set_background_color",inputs:{COLOR:v("#1b2530")}},d(s("hero"),[c(120,160)]),d(s("coin"),[c(220,160)])],actors:[{id:"hero",name:"Hero",rows:[h("player.png")]},{id:"coin",name:"Coin",rows:[h("coin.png")]}]}),sprites:["player","coin"]}),instructions:`
## An effect is a recipe

A Hero and a Coin, drawn exactly as their pictures are.

An **effect** is not a picture and not an actor: it is a description of how to
paint one — the same picture, put through a recipe. It is a file like everything
else, and the same file can be played on one actor, on a whole layer, or over
the entire view.

### What you do

1. In \`coin.actor\`, add **add effect ⟨…⟩ to ⟨this actor⟩** under
   \`define actor ⟨Coin⟩\`, and use the \`(import…)\` row to bring one in from
   the library.
2. Run it. The Coin is painted through the recipe and the Hero is not — one
   effect, on one actor.
3. Now add **add effect ⟨…⟩ to the world**. Everything goes through it, the
   backdrop included, because that one is over the whole view rather than on
   anything in it.
4. The effect's numbers are knobs on the block. Turn one and run it again.
`.trim()},gh={name:"x and y",description:"Three markers in a heap, and three places to put them.",source:A({world:f({name:"My World",rows:[d(s("marker"),[c(160,160)]),d(s("marker"),[c(160,160)]),d(s("marker"),[c(160,160)])],actors:[{id:"marker",name:"Marker",rows:[h("post.png")]}]}),sprites:["post"]}),instructions:`
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
`.trim()},mh={name:"A key is an event",description:"Walking is a key HELD. A jump is a key PRESSED. They are not the same reading.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(160,160)])],actors:[{id:"hero",name:"Hero",rows:[a("Arrow Keys#MovesAcrossTrait"),h("player.png")]}]}),sprites:["player"],rules:["arrows","input"]}),instructions:`
## A key is an event

Hold the left and right arrows. The Hero walks for as long as you hold them —
the trait reads the keys sixty times a second and moves a little each time.

Some things should not work that way. A jump should happen ONCE however long
you lean on the button.

### What you do

1. Give the Hero **use trait ⟨Takes Keyboard Input⟩**. On its own it does
   nothing: it is the Hero electing to be told about keys at all.
2. Add a **when ⟨Hero⟩ hears ⟨space⟩ pressed** handler, and put a **write to console**
   inside it.
3. Run it and hold space down for a few seconds. One line, not two hundred.
4. Let go and press again. Now there are two.
5. Take the **⟨space⟩** off the hat so it hears every key, and print
   **⟨event value⟩** instead of your word. Each key now says its own name: the
   handler is told WHICH key, and that is what an event carries.
`.trim()},Ah={name:"Point and click",description:"A button that does not know it has been pressed, and the trait that tells it.",source:A({world:f({name:"My World",rows:[d(s("target"),[c(160,160)])],actors:[{id:"target",name:"Target",rows:[h("coin.png")]}]}),sprites:["coin"],rules:["mouse"]}),instructions:`
## Point and click

Click the Target. Nothing happens — it does not know the click landed on it,
and it has no way to find out until it says so.

A click is an **event**, like a key going down. What is different is that a
click happens somewhere: the world can say WHICH actor was under the pointer,
so an actor can be told about its own clicks and nobody else's.

### What you do

1. Give the Target **use trait ⟨Can Be Clicked⟩**.
2. Add a **when ⟨Target⟩ is clicked** handler and **write to console** something in it.
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
`.trim()},fh={name:"Two readings of four keys",description:"The same four keys as a walk, and as a ship. Elect one or the other, never both.",source:A({world:f({name:"My World",rows:[d(s("ship"),[c(160,160)])],actors:[{id:"ship",name:"Ship",rows:[a("Arrow Keys#MovesAcrossTrait"),h("ship.png")]}]}),sprites:["ship"],rules:["arrows","drive","drag"]}),instructions:`
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
`.trim()},sn=[a("Physics#CanMoveTrait"),h("ball.png")],we=(e,t)=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:e,y:t}}}}}}),va=e=>({type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:e}}}}}),zt=(e,t,o)=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:t},inputs:{ACTOR:ke(e)},next:{block:o}}),bh={name:"A shove",description:'A ball that says "bang" and does not move, and the block that changes that.',source:A({world:f({name:"My World",rows:[d(s("ball"),[c(64,160)])],actors:[{id:"ball",name:"Ball",rows:[a("Physics#CanMoveTrait"),a("Input#TakesKeyboardInputTrait"),h("ball.png")]}],handlers:[zt("ball","space",va("bang"))]}),sprites:["ball"],rules:["motion","input"]}),instructions:`
## A shove

Press space. The Ball says **bang** in the console and does not move an inch.

A force does not put a thing somewhere. It changes the thing's SPEED, and the
speed is what puts it somewhere — two steps, and the second one keeps happening
after you have let go.

### What you do

1. In the **when ⟨any Ball⟩ hears space** handler, swap the **write to console** for
   **apply force**, and give it
   a shove to the right.
2. Press space once. It moves, and it goes on moving: nothing is stopping it.
3. Press space again while it is still going, and watch the shove ADD to the
   speed it already had rather than replacing it.
`.trim()},Th={name:"Units per second",description:"A ball traveling far too fast, and the arithmetic that fixes it.",source:A({world:f({name:"My World",rows:[d(s("ball"),[c(16,160),we(60,0)])],actors:[{id:"ball",name:"Ball",rows:sn}]}),sprites:["ball"],rules:["motion"]}),instructions:`
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
`.trim()},_h={name:"Coasting to a stop",description:"A ball that drifts forever, and the one trait that makes it a car.",source:A({world:f({name:"My World",rows:[d(s("ball"),[c(24,160),we(2.5,0)])],actors:[{id:"ball",name:"Ball",rows:[a("Physics#CanMoveTrait"),a("Screen Wrap#WrapsAcrossTrait"),h("ball.png")]}]}),sprites:["ball"],rules:["motion","drag","wrap"]}),instructions:`
## Coasting to a stop

The Ball is pushed once at the start and never slows down. It wraps round the
edges and keeps going, at exactly the speed it began with, forever.

That is what having a speed MEANS — nothing takes it away unless something is
written to. In space that is correct. On a road it is not.

### What you do

1. Give the Ball **use trait ⟨Slows Down⟩**.
2. Run it. It coasts to a halt instead of going round for ever.
3. Find the trait's own numbers and make it slippery, then make it sticky.
`.trim()},kh={name:"A described movement",description:"A door that does not open, and the difference between a place and a journey.",source:A({world:f({name:"My World",rows:[d(s("door"),[c(64,160)]),d(s("post"),[c(256,160)])],actors:[{id:"door",name:"Door",rows:[h("door.png")]},{id:"post",name:"Post",rows:[h("post.png")]}]}),sprites:["door","post"]}),instructions:`
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
`.trim()},Eh=e=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:e},inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}),Ch={name:"Asking a question",description:"A ball that leaves the world, and the block that lets it decide not to.",source:A({world:f({name:"My World",rows:[d(s("ball"),[c(24,160),we(1.6,0)])],actors:[{id:"ball",name:"Ball",rows:sn}]}),sprites:["ball"],rules:["motion"]}),instructions:`
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
`.trim()},vh={name:"Touching is a question",description:"A ball that rolls straight through a wall, and the trait that stops it.",source:A({world:f({name:"My World",rows:[d(s("ball"),[c(24,160),we(1.6,0)]),d(s("wall"),[c(272,160)])],actors:[{id:"ball",name:"Ball",rows:[a("Physics#CanMoveTrait"),a("Collisions#CanCollideTrait"),h("ball.png")]},{id:"wall",name:"Wall",rows:[h("ground.png")]}]}),sprites:["ball","ground"],rules:["motion","collisions","solid"]}),instructions:`
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
`.trim()},Oh={name:"Two questions at once",description:"Two balls, one condition, and the difference between AND and OR.",source:A({world:f({name:"My World",rows:[d(s("ball"),[c(24,64),we(1.6,0)]),d(s("ball"),[c(24,240),we(1.6,0)])],actors:[{id:"ball",name:"Ball",rows:[...sn,{type:"world_trait_step",fields:{PHASE:"decide",NAME:"stop in the middle"},inputs:{DO:{block:{type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"GT"},inputs:{A:Eh("x"),B:{shadow:{type:"math_number",fields:{NUM:192}}}}}},DO0:{block:{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:0}}}}}}}}}}}}]}]}),sprites:["ball"],rules:["motion"]}),instructions:`
## Two questions at once

Two Balls, one high and one low, and one rule between them: stop past the
middle. Both stop, because the only thing being asked is how far across they
are.

Say you want only the LOW one to stop — past the middle **and** below the
halfway line. That is two questions, and the answer is yes only when both are.

The world is 320 pixels down, so halfway down is 160.

### What you do

1. Find the **if**, in the \`each frame\` under \`define actor ⟨Ball⟩\` in the
   \`ball.actor\` tab.
2. Wrap its question in an **and**, and add a second question: is
   **⟨get position y of this actor⟩** greater than **160**?
3. Run it. The low Ball stops in the middle; the high one carries on and leaves.
4. Change the **and** to an **or** and watch both stop again — which is the
   thing to be able to tell apart.
`.trim()},Rh=(e,t)=>({type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:""},inputs:{ACTOR:ke(e)},next:{block:t}}),Sh={name:"What a thing is",description:"One handler, two kinds of thing, and no way yet to tell them apart.",source:A({world:f({name:"My World",rows:[d(s("ball"),[c(24,160),we(1.6,0)]),d(s("coin"),[c(120,160)]),d(s("spike"),[c(230,160)])],actors:[{id:"ball",name:"Ball",rows:[a("Physics#CanMoveTrait"),a("Collisions#CanCollideTrait"),h("ball.png")]},{id:"coin",name:"Coin",rows:[a("Collisions#CanCollideTrait"),h("coin.png")]},{id:"spike",name:"Spike",rows:[a("Collisions#CanCollideTrait"),h("spike.png")]}],handlers:[Rh("ball",va("I touched something"))]}),sprites:["ball","coin","spike"],rules:["motion","collisions"]}),instructions:`
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
`.trim()},J=(e,t,o)=>({id:e,properties:{positional:{position:{x:t,y:o}}}}),D=(e,t)=>({type:"world_create_in_map",fields:{ACTOR:e,PLACEMENTS:t}}),Ih={name:"A room drawn, not typed",description:"A floor made of twenty blocks, and the grid that replaces them.",source:A({world:f({name:"My World",rows:[d(s("hero"),[c(48,240)]),D(s("ground"),[J("floor0",16,304),J("floor1",48,304),J("floor2",80,304)])],actors:[{id:"hero",name:"Hero",rows:[h("player.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]}]}),sprites:["player","ground"]}),instructions:`
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
4. Paint some more, and run it again. You never opened \`ground.actor\` —
   what a Ground is and where the Grounds are are two different questions.
`.trim()},re=e=>Array.from({length:e},(t,o)=>J(`floor${o}`,o*32+16,304)),Ph={name:"A window on a bigger world",description:"A room three screens wide, and a view that only ever shows the first.",source:A({world:f({name:"My World",tiles:[30,10],rows:[D(s("ground"),re(30)),d(s("hero"),[c(48,272),we(6,0)])],actors:[{id:"hero",name:"Hero",rows:[a("Physics#CanMoveTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]}]}),sprites:["player","ground"],rules:["motion","camera","cameraFollow","cameraConfined"]}),instructions:`
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
`.trim()},Oa=(e,t=[])=>({type:"world_define_camera",id:"chase",fields:{NAME:"Chase"},inputs:{DO:{block:W([a("Camera Follow#FollowsTrait"),a("Camera Confined#ConfinedToTheMapTrait"),...t,{type:"world_set_CameraFollow_ActorToFollowProperty",inputs:{ACTOR:{block:{type:"world_this_camera"}},VALUE:ke(e)}}])}}}),xh={name:"Correct, and pleasant",description:"A camera that is right, welded to the player, and slightly horrible.",source:A({world:f({name:"My World",tiles:[30,10],rows:[D(s("ground"),re(30)),d(s("hero"),[c(160,272)]),Oa("hero"),{type:"world_use_camera",fields:{CAMERA:"camera:chase"}}],actors:[{id:"hero",name:"Hero",rows:[a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]}]}),sprites:["player","ground"],rules:["arrows","camera","cameraFollow","cameraConfined","cameraEase","cameraDeadzone"]}),instructions:`
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
`.trim()},Ir="ActorsScore",Bh={name:"What is in front",description:"A score that scrolls away with the scenery, and the hills that do not lag.",source:A({world:f({name:"My World",tiles:[30,10],rows:[D(s("ground"),re(30)),d(s("hill"),[c(80,272)]),d(s("hill"),[c(400,272)]),d(s("hill"),[c(720,272)]),d(s("score"),[c(60,30),O("TextProperty",V("SCORE 0"),Ir)]),d(s("hero"),[c(160,272)]),Oa("hero"),{type:"world_use_camera",fields:{CAMERA:"camera:chase"}}],actors:[{id:"hero",name:"Hero",rows:[a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]},{id:"hill",name:"Hill",rows:[h("hill.png")]},{id:"score",name:"Score",rows:[...Qs,ce("text")],drawing:{width:96,height:24,commands:[R(v("#f2f2f7")),on(48,12,Ir)]}}]}),sprites:["player","ground","hill"],rules:["arrows","camera","cameraFollow","cameraConfined"]}),instructions:`
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
`.trim()},Nh={name:"Up, properly",description:"A jump written by hand, which works in mid-air and works forever.",source:A({world:f({name:"My World",rows:[D(s("ground"),re(10)),d(s("hero"),[c(160,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),h("ground.png")]}],handlers:[zt("hero","space",{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-5}}}}}})]}),sprites:["player","ground"],rules:["gravity","input","arrows","motion","jump"]}),instructions:`
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
`.trim()},Mh={name:"A ledge out of reach",description:"A jump that clears three tiles, and a ledge six tiles up.",source:A({world:f({name:"My World",rows:[D(s("ground"),[...re(10),...[6,7,8,9].map(e=>J(`ledge${e}`,e*32+16,112))]),d(s("hero"),[c(48,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),a("Jumping#JumpsTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]}],handlers:[zt("hero","space",{type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:p()}})]}),sprites:["player","ground"],rules:["gravity","solid","input","arrows","motion","jump","jetpack"]}),instructions:`
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
`.trim()},Dh={name:"A ladder that is not one yet",description:"A ledge, a ladder up to it, and a Hero that walks straight through both.",source:A({world:f({name:"My World",rows:[D(s("ground"),re(10)),D(s("ledge"),[4,5,6,7,8,9].map(e=>J(`ledge${e}`,e*32+16,144))),D(s("ladder"),[272,240,208,176,144,112].map((e,t)=>J(`rung${t}`,144,e))),d(s("hero"),[c(144,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"ledge",name:"Ledge",rows:[a("Gravity#ActsAsGroundTrait"),h("ground.png")]},{id:"ladder",name:"Ladder",rows:[h("ladder.png")]}]}),sprites:["player","ground","ladder"],rules:["gravity","solid","input","arrows","motion","climb"]}),instructions:`
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
2. Give the Hero **use trait ⟨Climbs⟩**, then click the sparkles on it and
   choose **Climbs ladders with the arrow keys**. Up and down now climb, and
   only while it is touching a ladder: walk off the ladder and press up, and
   nothing happens.
3. Hold up. Past the top rung the climb ends by itself and the Hero drops on
   to the ledge — stepping off the top is not a separate block.
4. Now hold **down**. You go back through the ledge, which is the thing that
   could not be written before. Try the same on the floor and you stop, because
   the floor is **Solid** as well and solid is a different question.
5. The switch doing the work is **ignores ground**, and it belongs to *Gravity*
   rather than to this rule. On its own it is what "hold down to drop through
   the platform" would be built from.
6. Now read what the sparkles wrote: four handlers, not a loop. **presses up
   arrow** starts a climb and **releases up arrow** ends it, and the same
   pair for down. Nothing asks a question sixty times a second — the frames
   between the press and the release belong to the rule.
7. Change **up arrow** to **w** on both of its handlers and climb with that
   instead. The keys are yours; they were never part of the rule.
8. Then delete all four and leave **Climbs** in place. Nothing happens on any
   key, and the Hero can still climb — it just has nothing telling it to.
   That is the split: a robot that takes ladders has no keyboard, so the
   mechanic is the rule's and the controls are the actor's.
`.trim()},Lh={name:"A floor is a floor is a floor",description:"A belt, some ice and some sludge, drawn as three things and behaving as one.",source:A({world:f({name:"My World",tiles:[12,10],rows:[D(s("ground"),[...[0,1].map(e=>J(`floor${e}`,e*32+16,304)),...[11].map(e=>J(`floor${e}`,e*32+16,304))]),D(s("belt"),[2,3,4].map(e=>J(`belt${e}`,e*32+16,304))),D(s("sludge"),[5,6].map(e=>J(`sludge${e}`,e*32+16,304))),D(s("ice"),[7,8,9,10].map(e=>J(`ice${e}`,e*32+16,304))),d(s("hero"),[c(16,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"belt",name:"Belt",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("conveyor.png")]},{id:"sludge",name:"Sludge",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("sludge.png")]},{id:"ice",name:"Ice",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ice.png")]}]}),sprites:["player","ground","conveyor","ice","sludge"],rules:["gravity","solid","input","arrows","motion","surfaces"]}),instructions:`
## Floors with opinions

Walk right. You cross a belt, some sludge and some ice, and all three feel
exactly like the brown floor either side of them — because they *are* it. Three
pictures, three actors, one behavior.

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
`.trim()},Pr=()=>R({block:{type:"world_get_Teleport_PadColorProperty",inputs:{ACTOR:p()}}}),Uh={name:"Two plates and a wall between them",description:"A room cut in half, with a pad on each side and no way round.",source:A({world:f({name:"My World",rows:[D(s("ground"),[...re(10),...[0,32,64,96,128,160,192,224,256].map(e=>J(`wall${e}`,160,e))]),d(s("here"),[c(64,288)]),d(s("there"),[c(272,288)]),d(s("hero"),[c(48,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),a("Teleport#UsesTeleportPadsTrait"),h("player.png"),{type:"world_trait_step",fields:{PHASE:"touch",NAME:"use a pad when asked"},inputs:{DO:{block:{type:"controls_if",inputs:{IF0:{block:{type:"world_is_key_down",fields:{KEY:"down arrow"}}},DO0:{block:{type:"world_do_Teleport_UseThePadAction",inputs:{ACTOR:p()}}}}}}}}]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"here",name:"Near Pad",rows:[a("Teleport#IsATeleportPadTrait"),{type:"world_set_Teleport_PadColorProperty",inputs:{ACTOR:p(),VALUE:v("#e0484a")}}],drawing:{width:32,height:32,commands:[Pr(),H(0,22,32,10)]}},{id:"there",name:"Far Pad",rows:[a("Teleport#IsATeleportPadTrait"),{type:"world_set_Teleport_PadColorProperty",inputs:{ACTOR:p(),VALUE:v("#3f7fe0")}}],drawing:{width:32,height:32,commands:[Pr(),H(0,22,32,10)]}}]}),sprites:["player","ground"],rules:["gravity","solid","input","arrows","motion","collisions","health","teleport"]}),instructions:`
## Two plates and a wall between them

The wall goes floor to ceiling and there is no way round it. There are two
pads, one on each side, and the Hero already knows what to do with one: stand
on it and press **down**.

Try it. Nothing happens — and nothing is wrong. A pad sends you to another pad
**of the same color**, and these two are not.

### What you do

1. Set the Far Pad's **pad color** to the same red as the Near Pad. That is
   the whole link: two pads of a color are one place, however far apart they
   are drawn, and a room can be folded.
2. Stand on the near one and press down. There is a moment before you arrive,
   and it is not lost time — it is where an animation goes, and you cannot be
   hurt during it.
3. Add a third red pad somewhere and use them for a while. It picks one of the
   others **afresh every time**, so three pads is three places rather than two
   and a decoration.
4. Set that third one back to blue. Now it is a pad with nowhere to go: press
   down on it all you like. One pad of a color is not half a mechanic, it is
   a decoration, and the rule says so by doing nothing.
`.trim()},Wh=e=>({id:"wall",name:"Wall",rows:[a("Switches#IsASwitchedWallTrait"),a("Solid Bodies#SolidTrait"),{type:"world_set_Switches_WallColorProperty",inputs:{ACTOR:p(),VALUE:v(e)}},{type:"world_trait_step",fields:{PHASE:"react",NAME:"look like what it is"},inputs:{DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:p(),VALUE:{block:{type:"logic_ternary",inputs:{IF:{block:{type:"world_get_Collisions_PassesThroughThingsProperty",inputs:{ACTOR:p()}}},THEN:{block:{type:"math_number",fields:{NUM:.25}}},ELSE:{block:{type:"math_number",fields:{NUM:1}}}}}}}}}}}],drawing:{width:32,height:32,commands:[R({block:{type:"world_get_Switches_WallColorProperty",inputs:{ACTOR:p()}}}),H(0,0,32,32)]}}),Hh={name:"A wall you can talk out of the way",description:"A corridor with a block across it, and a plate on the floor.",source:A({world:f({name:"My World",rows:[D(s("ground"),re(10)),D(s("wall"),[176,208,240,272].map(e=>J(`bar${e}`,208,e))),d(s("plate"),[c(80,288)]),d(s("hero"),[c(32,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"plate",name:"Plate",rows:[a("Switches#IsASwitchTrait"),{type:"world_set_Switches_SwitchColorProperty",inputs:{ACTOR:p(),VALUE:v("#3fbf6a")}}],drawing:{width:32,height:32,commands:[R({block:{type:"world_get_Switches_SwitchColorProperty",inputs:{ACTOR:p()}}}),H(0,22,32,10)]}},Wh("#e0484a")]}),sprites:["player","ground"],rules:["gravity","solid","input","arrows","motion","collisions","switches"]}),instructions:`
## A wall you can talk out of the way

There is a block across the corridor and a green plate on the floor before it.
Walk over the plate. It is a real switch and it fires every time — and the wall
does not move, because a switch flips every wall painted **its own color**,
and the wall is red.

### What you do

1. Set the Wall's **wall color** to the same green as the Plate. Walk over it
   again: the wall goes faint and you walk through where it was.
2. Walk back over the plate. It comes back. A switch does not open walls, it
   SWAPS them — each one from wherever it was.
3. That is worth having on purpose. Put a second wall further along, set its
   **passes through things** to yes so that it starts open, and paint it green
   too. Now one plate closes the way behind you as it opens the way on.
4. Look at what "not there" means. The wall never stopped being a wall and
   never stopped being solid — **passes through things** is one lever that
   takes it out of every rule that reads a touch at once, which is why it stops
   holding you up as well as stopping blocking you.
`.trim()},Fh={name:"A floor with no way through it",description:"Two floors, a Hero on the upper one, and nothing joining them.",source:A({world:f({name:"My World",rows:[D(s("soil"),[2,3,4,5,6,7].map(e=>J(`soil${e}`,e*32+16,272))),D(s("ground"),re(10)),d(s("hero"),[c(112,240)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),a("Digging#DigsTrait"),h("player.png"),{type:"world_trait_step",fields:{PHASE:"touch",NAME:"dig when asked"},inputs:{DO:{block:{type:"controls_if",inputs:{IF0:{block:{type:"world_is_key_down",fields:{KEY:"down arrow"}}},DO0:{block:{type:"world_do_Digging_DigTowardsAction",inputs:{ACTOR:p(),VALUE:{block:{type:"world_vector_of",inputs:{X:{block:{type:"math_number",fields:{NUM:0}}},Y:{block:{type:"math_number",fields:{NUM:1}}}}}}}}}}}}}}]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"soil",name:"Soil",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]}]}),sprites:["player","ground"],rules:["gravity","solid","input","arrows","motion","collisions","digging"]}),instructions:`
## A floor with no way through it

You are standing on a floor and there is another one below it. Hold **down**.
Nothing happens — you can already dig, and the key is already wired, but the
floor has never heard of a shovel.

### What you do

1. Give the Soil **use trait ⟨Can Be Dug⟩**. Hold down again: the block under
   you stops being there and you fall through it.
2. Wait where you land. It comes back — that is the fuse, and it is the
   difference between a shovel and a hole in the drawing.
3. Stand under it while it closes. It fills in **on** you, and says so; what
   that costs is your game's to decide, which is why the rule only raises the
   moment.
4. Set the Soil's **closes after** to 1, and then to 8. The clock is the
   BLOCK's rather than the digger's, so a level can have soil that closes
   slowly and packed earth that closes fast without handing the player two
   shovels.
5. Look at what a hole IS. Nothing was removed and nothing was drawn: the
   block set **passes through things**, the one lever that takes an actor out
   of every rule that reads a touch — so it stopped blocking you and stopped
   holding you up in the same breath.
`.trim()},Gh={name:"A ball that does not roll",description:"A corridor with walls at both ends, and a steel ball sitting in it.",source:A({world:f({name:"My World",tiles:[14,10],rows:[D(s("ground"),[...re(14),...[208,240,272].flatMap(e=>[J(`left${e}`,16,e),J(`right${e}`,432,e)])]),d(s("ball"),[c(160,272)]),d(s("hero"),[c(64,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"ball",name:"Ball",rows:[a("Gravity#AffectedByGravityTrait"),h("pinball.png")]}]}),sprites:["player","ground","pinball","rocket"],rules:["gravity","solid","input","arrows","motion","patrol","turning"]}),instructions:`
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
`.trim()},Vh={name:"A robot that cannot get up",description:"Two floors, a ladder at one end, and a robot at the other.",source:A({world:f({name:"My World",rows:[D(s("ground"),[...re(10),...[2,3,4,5,6,7,8,9].map(e=>J(`upper${e}`,e*32+16,144)),...[176,208,240,272].flatMap(e=>[J(`west${e}`,16,e),J(`east${e}`,304,e)])]),D(s("ladder"),[144,176,208,240,272].map((e,t)=>J(`rung${t}`,48,e))),d(s("robot"),[c(256,240)]),d(s("hero"),[c(256,112)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),a("Climbing#ClimbsTrait"),h("player.png")],handlers:ya({})},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"ladder",name:"Ladder",rows:[a("Climbing#CanBeClimbedTrait"),a("Gravity#ActsAsGroundTrait"),h("ladder.png")]},{id:"robot",name:"Robot",rows:[a("Gravity#AffectedByGravityTrait"),a("Solid Bodies#SolidTrait"),a("Climbing#ClimbsTrait"),a("Boundaries#StaysAcrossTrait"),a("Steering#ChasesTrait"),h("robot.png"),{type:"world_trait_step",fields:{PHASE:"sense",NAME:"know who to chase"},inputs:{DO:{block:{type:"world_set_Steering_ActorToChaseProperty",inputs:{ACTOR:p(),VALUE:{block:{type:"world_first_actor",inputs:{SOURCE:ke("hero")}}}}}}}}]}]}),sprites:["player","ground","ladder","robot"],rules:["gravity","solid","input","arrows","motion","bounds","climb","steering","prowling"]}),instructions:`
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
`.trim()},$h={name:"A bat you cannot get away from",description:"A ledge with you on it, open air below, and something coming.",source:A({world:f({name:"My World",rows:[D(s("ground"),[...re(10),...[5,6,7,8,9].map(e=>J(`ledge${e}`,e*32+16,144))]),d(s("bat"),[c(80,240)]),d(s("hero"),[c(240,112)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Input#TakesKeyboardInputTrait"),a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]},{id:"bat",name:"Bat",rows:[a("Steering#ChasesTrait"),h("bat.png"),{type:"world_trait_step",fields:{PHASE:"sense",NAME:"know who to hunt"},inputs:{DO:{block:{type:"world_set_Steering_ActorToChaseProperty",inputs:{ACTOR:p(),VALUE:{block:{type:"world_first_actor",inputs:{SOURCE:ke("hero")}}}}}}}}]}]}),sprites:["player","ground","bat"],rules:["gravity","solid","input","arrows","motion","collisions","steering","flapping"]}),instructions:`
## Something in the air

The Bat is below you and it elects **⟨Chases⟩**, which reads where you are
every frame and points itself at you.

Run it. It comes, and it keeps coming, and there is no moment at which moving
is the right answer — wherever you go it is already turning to follow. That is
not a hard enemy, it is an enemy with nothing to play against.

### What you do

1. Take **⟨Chases⟩** off the Bat and give it **use trait ⟨Flaps and Glides⟩**
   instead, then swap **set actor to chase** for **set actor to hunt** in the
   step below it — the same answer to a different question.
2. Watch it fly. It has two phases and they take turns: a few short flutters,
   each one upward and a little towards you, and then a long straight glide.
3. The glide is the whole rule. It takes its aim ONCE, at where you were when
   it began, and then does not look again for two seconds — so walk under it
   while it is gliding and it goes past you. That is the thing a chaser can
   never give you.
4. Set **glide seconds** to 0.2 and try again. It is a chaser now: it re-aims
   so often that there is no moment long enough to move in. The commitment is
   what makes it an enemy rather than a pursuer.
5. Stand on the ledge and watch how it gets up to you. Height is bought a
   flutter at a time and nothing else lifts it, which is why the flapping
   phase is slow — that is the time you have.
6. Set **least dive** to -1 and watch the two phases stop being different from
   each other. A glide is allowed to aim almost flat and never above flat, so
   climbing is the flaps' job and only theirs; let a glide aim upward and it
   climbs too, and what is left is a chaser that pauses to think.
`.trim()},Yh={name:"Things worth having",description:"Three coins a Hero walks straight through.",source:A({world:f({name:"My World",rows:[D(s("ground"),re(10)),d(s("coin"),[c(100,272)]),d(s("coin"),[c(180,272)]),d(s("coin"),[c(260,272)]),d(s("hero"),[c(30,272),we(3,0)])],actors:[{id:"hero",name:"Hero",rows:[a("Physics#CanMoveTrait"),a("Collisions#CanCollideTrait"),h("player.png")]},{id:"coin",name:"Coin",rows:[a("Collisions#CanCollideTrait"),h("coin.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]}]}),sprites:["player","coin","ground"],rules:["motion","collisions","collect"]}),instructions:`
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
`.trim()},jh={name:"Something that can hurt you",description:"A Hero walking into a spike, and a spike that does not mind.",source:A({world:f({name:"My World",rows:[D(s("ground"),re(10)),d(s("spike"),[c(200,272)]),d(s("hero"),[c(60,272)])],actors:[{id:"hero",name:"Hero",rows:[a("Arrow Keys#MovesAcrossTrait"),a("Collisions#CanCollideTrait"),a("Solid Bodies#SolidTrait"),h("player.png")]},{id:"spike",name:"Spike",rows:[a("Collisions#CanCollideTrait"),a("Solid Bodies#SolidTrait"),h("spike.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]}]}),sprites:["player","spike","ground"],rules:["arrows","motion","collisions","solid","health"]}),instructions:`
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
`.trim()},Kh={name:"A level",description:"Everything from the last four lessons in one world, and nothing to reach.",source:A({world:f({name:"My World",tiles:[20,10],rows:[lt("boolean","won","false"),D(s("ground"),re(20)),d(s("coin"),[c(150,272)]),d(s("coin"),[c(250,272)]),d(s("spike"),[c(360,272)]),d(s("flag"),[c(560,272)]),d(s("hero"),[c(40,272),{type:"world_set_ArrowKeys_AcrossSpeedProperty",inputs:{ACTOR:p(),VALUE:i(6)}}]),Oa("hero"),{type:"world_use_camera",fields:{CAMERA:"camera:chase"}}],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Arrow Keys#MovesAcrossTrait"),a("Collisions#CanCollideTrait"),a("Collection#CollectsTrait"),a("Health#HasHealthTrait"),a("Boundaries#StaysAcrossTrait"),h("player.png")]},{id:"coin",name:"Coin",rows:[a("Collisions#CanCollideTrait"),a("Collection#CanBeCollectedTrait"),h("coin.png")]},{id:"spike",name:"Spike",rows:[a("Collisions#CanCollideTrait"),a("Health#DealsDamageTrait"),h("spike.png")]},{id:"flag",name:"Flag",rows:[a("Collisions#CanCollideTrait"),h("flag.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),h("ground.png")]}]}),sprites:["player","coin","spike","flag","ground"],rules:["gravity","arrows","collisions","solid","collect","health","bounds","camera","cameraFollow","cameraConfined"]}),instructions:`
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
`.trim()},_t=()=>{const e=(o,n)=>J(`wall${o}_${n}`,o*32+16,n*32+16),t=[];for(let o=0;o<10;o++)t.push(e(o,0),e(o,9));for(let o=1;o<9;o++)t.push(e(0,o),e(9,o));return t},Qh={name:"Off the wall",description:"A ball in a box that stops the moment it arrives at one.",source:A({world:f({name:"My World",rows:[D(s("wall"),_t()),d(s("ball"),[c(160,160),we(4,3)])],actors:[{id:"ball",name:"Ball",rows:[a("Physics#CanMoveTrait"),a("Collisions#CanCollideTrait"),a("Solid Bodies#SolidTrait"),h("ball.png")]},{id:"wall",name:"Wall",rows:[a("Collisions#CanCollideTrait"),a("Solid Bodies#SolidTrait"),h("ground.png")]}]}),sprites:["ball","ground"],rules:["motion","collisions","solid"]}),instructions:`
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
`.trim()},Jh=()=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:p()}}}),zh={name:"A thing you steer",description:"A paddle kept on screen by hand, with half of it hanging off.",source:A({world:f({name:"My World",rows:[d(s("paddle"),[c(160,280)])],actors:[{id:"paddle",name:"Paddle",rows:[a("Arrow Keys#MovesAcrossTrait"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"keep it on screen"},inputs:{DO:{block:{type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"LT"},inputs:{A:Jh(),B:i(0)}}},DO0:{block:{type:"world_set_position",inputs:{ACTOR:p(),X:i(0),Y:i(280)}}}}}}}}],drawing:{width:96,height:16,commands:[R(v("#5b8def")),H(0,0,96,16)]}}]}),rules:["arrows","bounds"]}),instructions:`
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
`.trim()},Xh=()=>d(s("ball"),[c(160,240),{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:p(),VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-8}}}}}}]),qh={name:"An energy ball is spawned",description:"A ship that zaps sixty times a second and never tidies up.",source:A({world:f({name:"My World",rows:[d(s("ship"),[c(160,280)])],actors:[{id:"ship",name:"Ship",rows:[a("Input#TakesKeyboardInputTrait"),h("ship.png")]},{id:"ball",name:"Energy Ball",rows:[a("Physics#CanMoveTrait"),h("energyBall.png")]}],handlers:[zt("ship","space",Xh())]}),sprites:["ship","energyBall"],rules:["input","motion","zaps","expires"]}),instructions:`
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
`.trim()},Zh={name:"Many, and then none",description:"Three bricks that go one at a time, and a game that never ends.",source:A({world:f({name:"My World",rows:[lt("boolean","cleared","false"),d(s("brick"),[c(120,160)]),d(s("brick"),[c(200,160)]),d(s("brick"),[c(280,160)]),d(s("ball"),[c(30,160),we(4,0)])],actors:[{id:"ball",name:"Ball",rows:[a("Physics#CanMoveTrait"),a("Collisions#CanCollideTrait"),h("ball.png")]},{id:"brick",name:"Brick",rows:[a("Collisions#CanCollideTrait"),h("box.png")]}],handlers:[{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:""},inputs:{ACTOR:ke("ball")},next:{block:{type:"world_remove_actor",inputs:{ACTOR:{block:{type:"world_event_actor"}}}}}}]}),sprites:["ball","box"],rules:["motion","collisions"]}),instructions:`
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
`.trim()},ep=e=>({type:"world_set_Time_TimerPeriodProperty",inputs:{ACTOR:p(),VALUE:e}}),tp={name:"It gets harder",description:"A spawner on a timer that sends the same thing at the same rate forever.",source:A({world:f({name:"My World",rows:[d(s("spawner"),[c(160,20),ep(i(1))])],actors:[{id:"spawner",name:"Spawner",rows:[a("Time#HasATimerTrait"),ce("text")],drawing:{width:32,height:16,commands:[R(v("#8d8d99")),H(0,0,32,16)]}},{id:"rock",name:"Rock",rows:[a("Physics#CanMoveTrait"),h("asteroid.png")]}],handlers:[{type:"world_on_Time_TimerFiresEvent",inputs:{ACTOR:ke("spawner")},next:{block:d(s("rock"),[c(160,40),{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:p(),VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:4}}}}}}])}}]}),sprites:["asteroid"],rules:["time","motion"]}),instructions:`
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
`.trim()},bi="The rain had not stopped for three days, and the road out of town was gone.",op={name:"Words on a screen",description:"A sentence drawn as one line, running off both edges of the world.",source:A({world:f({name:"My World",rows:[d("actors/label",[c(160,160),O("TextProperty",V(bi))])]}),stockActors:["label"]}),instructions:`
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
`.trim()},np={name:"At reading pace",description:"A line that is simply there, all at once, before anybody has read a word.",source:A({world:f({name:"My World",rows:[d("actors/speechBox",[c(160,200),O("TextProperty",V(bi))])]}),stockActors:["speechBox"],rules:["mouse"]}),instructions:`
## At reading pace

The whole line is on screen before the player has looked at it. That is what
setting **text** does: it is the words the box is showing, and it shows them
the moment they are set.

**Saying** a line is the other thing. The Speech Box puts the sentence away
whole and lets it out a few letters at a time — open \`speechBox.actor\` and
the typewriter is all there: **the whole line** is what is being said, a timer
brings one letter per firing, and \`text\` is however much has arrived.

### What you do

1. Say the sentence instead of setting \`text\`: **say ⟨…⟩ on ⟨this actor⟩**,
   from the Speech Box's own drawer. Run it, and the words arrive at reading
   pace.
2. Change **letters a second** and run it again.
3. A reader who has read it faster than you are typing it wants to skip. Give
   the Box **use trait ⟨Can Be Clicked⟩**, and in a
   **when ⟨any Speech Box⟩ is clicked** handler put
   **show all of it on ⟨this actor⟩**.
`.trim()},Ti=e=>O("TextProperty",V(e)),ap={name:"A place in a list",description:"One line of dialogue and a click that does nothing.",source:A({world:f({name:"My World",rows:[d("actors/speechBox",[c(160,200),{type:"world_add_trait",fields:{TRAIT:"Mouse#CanBeClickedTrait"},inputs:{ACTOR:p()}},Ti("The rain had not stopped for three days.")])],handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:va("click")}}]}),stockActors:["speechBox"],rules:["conversation","mouse"]}),instructions:`
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
`.trim()},ot=(e,t)=>({type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:{block:{type:"world_get_Conversation_LineProperty",inputs:{ACTOR:p()}}},B:i(e)}}},DO0:{block:Ti(t)}}}),rp={name:"A question that matters",description:"A story that asks you something and carries on regardless.",source:A({world:f({name:"My World",rows:[lt("boolean","opened the door","false"),d("actors/speechBox",[c(160,200),{type:"world_add_trait",fields:{TRAIT:"Mouse#CanBeClickedTrait"},inputs:{ACTOR:p()}},{type:"world_add_trait",fields:{TRAIT:"Conversation#HasAConversationTrait"},inputs:{ACTOR:p()}},{type:"world_set_Conversation_HowManyLinesProperty",inputs:{ACTOR:p(),VALUE:i(4)}},O("TextProperty",V("Somebody at the door. Click to begin."))]),d("actors/button",[c(80,120),O("TextProperty",V("Open it"))]),d("actors/button",[c(240,120),O("TextProperty",V("Walk away"))])],handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:{type:"world_do_Conversation_MakeSayTheNextThingAction",inputs:{VALUE:p()}}}},{type:"world_on_Conversation_MovesToALineEvent",inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:W([ot(1,"Somebody was knocking."),ot(2,"Do you open the door?"),ot(3,"You opened it. The rain came in with them."),ot(4,"You went back to bed, and slept badly.")])}}]}),stockActors:["speechBox","button"],rules:["conversation","mouse"]}),instructions:`
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
`.trim()},In=e=>d("actors/textInput",[c(160,e)]),Pn=(e,t)=>d("actors/label",[c(70,e),O("TextProperty",V(t))]),sp={name:"Tell it your name",description:"Three fields that tab through themselves in the order somebody happened to add them.",source:A({world:f({name:"My World",rows:[Pn(100,"name"),Pn(150,"town"),Pn(200,"colour"),In(100),In(200),In(150)]}),stockActors:["textInput"]}),instructions:`
## Tell it your name

Three fields. Click the top one and type — the letters go there and nowhere
else, and the other two ignore you.

That is not something a field can work out for itself. **Which control is
listening** is a fact about the whole screen: two fields that each decided on
their own would both take the same keystroke. So it is a rule — **Tab
Navigation** — and every control that can hold the keyboard elects
**⟨Can Be Focused⟩**.

Press **Tab**. The focus moves to the next field, and it goes to the wrong one:
from the name it jumps to the *bottom* of the form. The order is the order the
fields were ADDED in, and somebody added them as they thought of them.

### What you do

1. Open the world and read the three **add actor** rows. That is the tab order.
2. In each one, add **set ⟨tab order⟩ of ⟨this actor⟩** and give them **1**, **2**
   and **3** — reading down the screen, not down the file.
3. Run it again. Type in the top field, press Tab, and the middle one takes
   over.

### Getting out again

4. Press **Escape**. Nothing in the game is listening now — and press **Tab**:
   it leaves the game entirely, because while no control here holds the
   keyboard, Tab belongs to the page.

That is the bargain the rule makes. The game keeps Tab only while it is using
it, so a player who reached your game with the keyboard can always leave the
same way.
`.trim()},ip={name:"Staged",description:"Two people talking in an empty gray room, with nobody to look at.",source:A({world:f({name:"My World",rows:[{type:"world_set_background_color",inputs:{COLOR:v("#2b2b33")}},d("actors/portrait",[c(80,120)]),d("actors/speechBox",[c(160,200),{type:"world_add_trait",fields:{TRAIT:"Mouse#CanBeClickedTrait"},inputs:{ACTOR:p()}},{type:"world_add_trait",fields:{TRAIT:"Conversation#HasAConversationTrait"},inputs:{ACTOR:p()}},{type:"world_set_Conversation_HowManyLinesProperty",inputs:{ACTOR:p(),VALUE:i(3)}},O("TextProperty",V("An empty room. Click to begin."))])],handlers:[{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:{type:"world_do_Conversation_MakeSayTheNextThingAction",inputs:{VALUE:p()}}}},{type:"world_on_Conversation_MovesToALineEvent",inputs:{ACTOR:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}},next:{block:W([ot(1,"You are late."),ot(2,"The road was gone. I walked."),ot(3,"Then you had better come in.")])}}]}),stockActors:["speechBox","portrait"],rules:["conversation","mouse"]}),instructions:`
## Staged

Three lines, two speakers, and no way to tell which of them is talking. There
is a Portrait on the stage and it is invisible — that is what a Portrait starts
as, so that its entrance is something you can see happen — and behind
everything there is a flat gray.

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
`.trim()},xr=()=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:p(),VALUE:{block:{type:"world_vector_of",inputs:{X:{block:{type:"math_random_int",inputs:{FROM:i(-3),TO:i(3)}}},Y:{block:{type:"math_random_int",inputs:{FROM:i(-3),TO:i(3)}}}}}}}}),lp={name:"A hundred of something",description:"One wanderer per click, and no idea what a hundred would cost.",source:A({world:f({name:"My World",rows:[d(s("wanderer"),[c(160,160),xr()])],actors:[{id:"wanderer",name:"Wanderer",rows:[a("Physics#CanMoveTrait"),a("Screen Wrap#WrapsAcrossTrait"),a("Screen Wrap#WrapsDownTrait"),h("coin.png")]}],handlers:[{type:"world_on_Mouse_IsPressedEvent",fields:{FILTER0:"left"},next:{block:d(s("wanderer"),[{type:"world_set_position",inputs:{ACTOR:p(),X:{block:{type:"math_random_int",inputs:{FROM:i(0),TO:i(320)}}},Y:{block:{type:"math_random_int",inputs:{FROM:i(0),TO:i(320)}}}}},xr()])}}]}),sprites:["coin"],rules:["motion","mouse","wrap"]}),instructions:`
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
`.trim()},dp={name:"Toward, and away",description:"Two actors that ought to care where the player is, and do not.",source:A({world:f({name:"My World",rows:[d(s("player"),[c(160,160)]),d(s("chaser"),[c(40,40)]),d(s("fleer"),[c(280,280)])],actors:[{id:"player",name:"Player",rows:[a("Arrow Keys#MovesAcrossTrait"),a("Arrow Keys#MovesDownTrait"),h("player.png")]},{id:"chaser",name:"Chaser",rows:[a("Physics#CanMoveTrait"),h("box.png")]},{id:"fleer",name:"Fleer",rows:[a("Physics#CanMoveTrait"),h("coin.png")]}]}),sprites:["player","box","coin"],rules:["arrows","motion","steering"]}),instructions:`
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
`.trim()},$e=e=>({block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:e},inputs:{ACTOR:p()}}}),cp=JSON.stringify({blocks:{blocks:[{type:"world_rule",x:20,y:20,fields:{NAME:"Wind",ABILITY:"Has Wind"},next:{block:{type:"world_use_rule",fields:{RULE:"Space"}}}},{type:"world_rule_trait",x:20,y:160,fields:{NAME:"Blown"},next:{block:{type:"world_use_trait",fields:{TRAIT:"Space#PositionalTrait"},next:{block:{type:"world_trait_step",fields:{PHASE:"move",NAME:"drift"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:p(),X:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:$e("x"),B:i(2)}}},Y:$e("y")}}}}}}}}}]}},null,2),hp={levelData:{showFileBrowser:!0},name:"A property is a block",description:"A wind that blows everything at exactly the same speed.",source:A({world:f({name:"My World",rows:[d(s("leaf"),[c(40,100)]),d(s("leaf"),[c(40,220)])],actors:[{id:"leaf",name:"Leaf",rows:[a("Wind#BlownTrait"),a("Screen Wrap#WrapsAcrossTrait"),h("coin.png")]}]}),sprites:["coin"],rules:["wrap"],ruleFiles:{wind:cp}}),instructions:`
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
`.trim()},pp={name:"A step, not a speed",description:"A player that slides about a grid world like a bar of soap.",source:A({world:f({name:"My World",rows:[D(s("wall"),_t()),d(s("player"),[c(144,144)])],actors:[{id:"player",name:"Player",rows:[a("Arrow Keys#MovesAcrossTrait"),a("Arrow Keys#MovesDownTrait"),a("Input#TakesKeyboardInputTrait"),h("player.png")]},{id:"wall",name:"Wall",rows:[h("ground.png")]}]}),sprites:["player","ground"],rules:["arrows","input","grid"]}),instructions:`
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
`.trim()},ue=(e,t)=>zt("player",e,{type:`world_do_Grid_${t}Action`,inputs:{ACTOR:p()}}),up={name:"Nobody wrote pushing",description:"A crate that stops you dead, and a rule that already knows what to do.",source:A({world:f({name:"My World",rows:[D(s("wall"),_t()),d(s("crate"),[c(144,144)]),d(s("player"),[c(240,144)])],actors:[{id:"player",name:"Player",rows:[a("Grid#StepsOnTheGridTrait"),a("Input#TakesKeyboardInputTrait"),h("player.png")]},{id:"crate",name:"Crate",rows:[a("Grid#FillsATileTrait"),h("box.png")]},{id:"wall",name:"Wall",rows:[a("Grid#FillsATileTrait"),h("ground.png")]}],handlers:[ue("left arrow","StepLeft"),ue("right arrow","StepRight"),ue("up arrow","StepUp"),ue("down arrow","StepDown")]}),sprites:["player","box","ground"],rules:["input","grid"]}),instructions:`
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
4. Click the **open** button on \`use trait ⟨Can Be Pushed⟩\` and find out why
   one word was enough. The stepping trait asks what is in the tile it is going
   to; if that thing can be pushed, the step becomes two steps, and both of them
   have to be possible.
`.trim()},wp={name:"Somebody who is there",description:"A villager who walks off and leaves their own name behind.",source:A({world:f({name:"My World",rows:[d(s("villager"),[c(80,160)]),d("actors/label",[c(80,136),O("TextProperty",V("Mara"))])],actors:[{id:"villager",name:"Villager",rows:[a("Patrol#PatrolsAcrossTrait"),h("player.png")]}]}),stockActors:["label"],sprites:["player"],rules:["patrol"]}),instructions:`
## Somebody who is there

Mara walks her beat, and her name stays where it was put. It was put there
once, at the start, by a \`set position\` that has long since finished running.

A name over somebody's head is not a place — it is a RELATIONSHIP: this thing,
that thing, and how far apart they are. A **parent** is that relationship:
where a child sits is measured from its parent, so wherever the parent goes,
the child is still the same distance away.

### What you do

1. **set parent of ⟨the Label⟩ to ⟨any Villager⟩**. The name stays exactly
   where it was — over her head — and is measured from her now.
2. Run it. The name goes with her, and nothing copies a position every frame
   in anything you wrote.
3. Give the Villager a second beat with **patrols down** as well. The name
   still follows, because the relationship never said anything about walking.
`.trim()},yp={name:"Something to be doing",description:"Four things to find, and a bar that has no idea how it is going.",source:A({world:f({name:"My World",rows:[d("actors/progressBar",[c(160,30),{type:"world_set_ActorsProgressBar_FractionProperty",inputs:{ACTOR:p(),VALUE:i(0)}}]),d(s("token"),[c(80,200)]),d(s("token"),[c(140,200)]),d(s("token"),[c(200,200)]),d(s("token"),[c(260,200)]),d(s("hero"),[c(30,200)])],actors:[{id:"hero",name:"Hero",rows:[a("Arrow Keys#MovesAcrossTrait"),a("Collisions#CanCollideTrait"),a("Collection#CollectsTrait"),h("player.png")]},{id:"token",name:"Token",rows:[a("Collisions#CanCollideTrait"),a("Collection#CanBeCollectedTrait"),h("coin.png")]}]}),stockActors:["progressBar"],sprites:["player","coin"],rules:["motion","arrows","collisions","collect"]}),instructions:`
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
`.trim()},gp={levelData:{showFileBrowser:!0},name:"Change it",description:"A guard on a long, slow beat, and the number that says how long.",source:A({world:f({name:"My World",rows:[d(s("guard"),[c(160,160)])],actors:[{id:"guard",name:"Guard",rows:[a("Patrol#PatrolsAcrossTrait"),h("player.png")]}]}),sprites:["player"],rules:["patrol"]}),instructions:`
## Change it

The Guard walks a beat: a second and a half one way, a second and a half back.
That number is not in your world — it is in \`rules/patrol.rule\`, which arrived
when you took the rule.

**That file is yours.** Not a link to a library, not a copy the lab keeps in
step: your project's own, sitting in \`rules/\` with everything else, and
nothing anywhere else changes when you change it.

### What you do

1. Open \`rules/patrol.rule\` — from the file browser, or the open button on
   \`use trait ⟨Patrols Across⟩\`.
2. Find **define number across time with default 1.5** and make it 0.5. The
   Guard turns three times as often.
3. Start a new project, take the Patrol rule again, and look: 1.5. You changed
   your copy and nothing else.
4. Now think about what you could NOT have done from outside. \`across time\` is
   a property, so a project can set it — but the SHAPE of the beat, the fact
   that it turns at all, is a step in this file, and only opening it lets you
   argue with that.
`.trim()},mp=JSON.stringify({blocks:{blocks:[{type:"world_rule",x:20,y:20,fields:{NAME:"Weather",ABILITY:"Has Weather"},next:{block:{type:"world_use_rule",fields:{RULE:"Space"}}}},{type:"world_rule_trait",x:20,y:160,fields:{NAME:"Blown"},next:{block:{type:"world_use_trait",fields:{TRAIT:"Space#PositionalTrait"},next:{block:{type:"world_trait_step",fields:{PHASE:"move",NAME:"drift"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:p(),X:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:$e("x"),B:i(2)}}},Y:$e("y")}}}}}}}}}]}},null,2),Ap={levelData:{showFileBrowser:!0},name:"A trait of your own",description:"One weather, two kinds of thing, and the same wind on both.",source:A({world:f({name:"My World",rows:[d(s("leaf"),[c(60,100)]),d(s("stone"),[c(60,220)])],actors:[{id:"leaf",name:"Leaf",rows:[a("Weather#BlownTrait"),a("Screen Wrap#WrapsAcrossTrait"),a("Screen Wrap#WrapsDownTrait"),h("coin.png")]},{id:"stone",name:"Stone",rows:[a("Weather#BlownTrait"),a("Screen Wrap#WrapsAcrossTrait"),a("Screen Wrap#WrapsDownTrait"),h("box.png")]}]}),sprites:["coin","box"],rules:["wrap"],ruleFiles:{weather:mp}}),instructions:`
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
3. In \`stone.actor\`, give the Stone **Sinks** instead of **Blown**.
4. Run it. One rule, two abilities, two kinds of thing — and neither trait
   mentions the other or the actors that took it.
`.trim()},Br=()=>({type:"world_trait_step",fields:{PHASE:"move",NAME:"bob"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:p(),X:$e("x"),Y:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:$e("y"),B:{block:{type:"math_trig",fields:{OP:"SIN"},inputs:{NUM:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"world_time"}},B:i(180)}}}}}}}}}}}}}}),fp={levelData:{showFileBrowser:!0},name:"Shared, without a copy",description:"Two actors doing the same thing, written out twice.",source:A({world:f({name:"My World",rows:[d(s("fish"),[c(100,160)]),d(s("bird"),[c(220,160)])],actors:[{id:"fish",name:"Fish",rows:[h("coin.png"),Br()]},{id:"bird",name:"Bird",rows:[h("ball.png"),Br()]}]}),sprites:["coin","ball"]}),instructions:`
## Shared, without a copy

A Fish and a Bird, both bobbing, and the bob is written twice — once in
\`fish.actor\` and once in \`bird.actor\`. Change your mind about how it should
feel and you have two files to change, and a third the day something else
bobs.

What both of them want is one copy, somewhere either can reach. That is what a
**rule** is for: it offers a **trait**, and any actor that elects the trait does
what the trait does. Gravity is one — several kinds share it, and none of them
holds a copy.

A rule is three sentences before it does anything: what it is called, what
carrying it is called, and when it runs. A new rule file opens with all three
written — **define rule**, a **define trait** beside it, and an **each frame**
under the trait — so what is left to you is what goes in the mouth.

### What you do

1. Make a new file, \`rules/bob.rule\`, named **Bob**. It opens on the three
   blocks above.
2. Move the bobbing into the **each frame** under the trait.
3. Take the \`each frame\` out of both actors and give each
   **use trait ⟨Bob⟩** instead.
4. Change the bob once. Both change.
`.trim()},bp={name:"Bigger than the screen",description:"A room three screens wide, seen through a window that never moves.",source:A({world:f({name:"My World",tiles:[30,10],rows:[{type:"world_set_background_color",inputs:{COLOR:v("#101822")}},D(s("ground"),re(30)),d(s("walker"),[c(60,272)])],actors:[{id:"walker",name:"Walker",rows:[a("Arrow Keys#MovesAcrossTrait"),a("Boundaries#StaysAcrossTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[h("ground.png")]}]}),sprites:["player","ground"],rules:["arrows","bounds","camera","cameraFollow","cameraConfined"]}),instructions:`
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
`.trim()},Tp={levelData:{showFileBrowser:!0},name:"Open it up",description:"A rule you have used twenty times and never looked inside.",source:A({world:f({name:"My World",rows:[lt("number","how hard it pulls","0"),D(s("ground"),re(10)),d(s("hero"),[c(160,40)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),h("player.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),h("ground.png")]}]}),sprites:["player","ground"],rules:["gravity"]}),instructions:`
## Open it up

The Hero falls, lands, and stays there. You have used gravity in half a dozen
lessons and never once looked at it — and it is not a black box, it is not
built into the lab, and it is not written in a language you have not been
taught. **It is blocks**, in a file in your project, and you can read all of
them.

### What you do

1. Click the **open** button on \`use trait ⟨Affected by Gravity⟩\`. It opens.
2. Read the top of it. There are two numbers there that belong to the WORLD
   rather than to any actor, and one of them says how hard gravity pulls.
3. Put that number in **how hard it pulls** at the top of \`main.world\`, so
   the world says what you found.
4. Now change it in the rule and run again. You are editing gravity, which
   half an hour ago was a thing that happened to you.
`.trim()},_p=e=>({type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"math_trig",fields:{OP:"SIN"},inputs:{NUM:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"world_time"}},B:i(180)}}}}}},B:i(e)}}),Nr=(e,t,o,n)=>({type:"world_rule_trait",x:20,y:n,fields:{NAME:e},next:{block:{type:"world_use_trait",fields:{TRAIT:"Space#PositionalTrait"},next:{block:{type:"world_trait_step",fields:{PHASE:"move",NAME:t},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:p(),X:$e("x"),Y:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:$e("y"),B:{block:_p(o)}}}}}}}}}}}}}),kp=JSON.stringify({blocks:{blocks:[{type:"world_rule",x:20,y:20,fields:{NAME:"Bobbing",ABILITY:"Bobs"},next:{block:{type:"world_use_rule",fields:{RULE:"Space"}}}},Nr("Bobs Gently","bob gently",1,160),Nr("Bobs Wildly","bob wildly",4,420)]}},null,2),Ep={levelData:{showFileBrowser:!0},name:"Your own vocabulary",description:"The same sum written out twice, with one number different.",source:A({world:f({name:"My World",rows:[d(s("cork"),[c(100,160)]),d(s("buoy"),[c(220,160)])],actors:[{id:"cork",name:"Cork",rows:[a("Bobbing#BobsGentlyTrait"),h("coin.png")]},{id:"buoy",name:"Buoy",rows:[a("Bobbing#BobsWildlyTrait"),h("ball.png")]}]}),sprites:["coin","ball"],ruleFiles:{bobbing:kp}}),instructions:`
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
`.trim()},Cp={name:"Floors that move",description:"A platform that goes somewhere, and a player left standing where it was.",source:A({world:f({name:"My World",rows:[D(s("ground"),re(10)),d(s("platform"),[c(120,200)]),d(s("hero"),[c(120,168)])],actors:[{id:"hero",name:"Hero",rows:[a("Gravity#AffectedByGravityTrait"),a("Collisions#CanCollideTrait"),a("Arrow Keys#MovesAcrossTrait"),h("player.png")]},{id:"platform",name:"Platform",rows:[a("Patrol#PatrolsAcrossTrait"),a("Gravity#ActsAsGroundTrait"),a("Solid Bodies#SolidTrait"),a("Collisions#CanCollideTrait"),h("ground.png")]},{id:"ground",name:"Ground",rows:[a("Gravity#ActsAsGroundTrait"),h("ground.png")]}]}),sprites:["player","ground"],rules:["gravity","arrows","collisions","solid","motion","patrol","carry"]}),instructions:`
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
`.trim()},vp={name:"Counted, not declared",description:"Two crates, two marks, and a puzzle that cannot be finished.",source:A({world:f({name:"My World",rows:[D(s("wall"),_t()),d(s("mark"),[c(240,144)]),d(s("mark"),[c(240,208)]),d(s("crate"),[c(144,144)]),d(s("crate"),[c(144,208)]),d(s("player"),[c(80,144)]),{type:"world_set_Scoring_TargetScoreProperty",inputs:{VALUE:i(2)}}],actors:[{id:"player",name:"Player",rows:[a("Grid#StepsOnTheGridTrait"),a("Input#TakesKeyboardInputTrait"),h("player.png")]},{id:"crate",name:"Crate",rows:[a("Grid#FillsATileTrait"),a("Grid#CanBePushedTrait"),a("Collisions#CanCollideTrait"),h("box.png")]},{id:"mark",name:"Mark",rows:[a("Collisions#CanCollideTrait"),{type:"world_set_Collisions_SizeProperty",inputs:{ACTOR:p(),X:i(8),Y:i(8)}},h("coin.png")]},{id:"wall",name:"Wall",rows:[a("Grid#FillsATileTrait"),h("ground.png")]}],handlers:[ue("left arrow","StepLeft"),ue("right arrow","StepRight"),ue("up arrow","StepUp"),ue("down arrow","StepDown")]}),sprites:["player","box","coin","ground"],rules:["input","grid","collisions","score","goals"]}),instructions:`
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
`.trim()},bo=(e,t,o,n)=>({type:e,id:t,properties:{positional:{position:{x:o,y:n}}}}),Mr=e=>JSON.stringify({type:"map",size:{width:10,height:10},tile:{width:32,height:32},actors:e},null,2),Op={levelData:{showFileBrowser:!0},name:"A door to somewhere else",description:"Two rooms in two files, and a door that does nothing.",source:A({world:f({name:"My World",rows:[{type:"world_load_map",fields:{MAP:"maps/room1"}}]}),actors:{player:Z("Player",[a("Arrow Keys#MovesAcrossTrait"),a("Collisions#CanCollideTrait"),h("player.png")]),door:Z("Door",[a("Collisions#CanCollideTrait"),h("door.png")]),chest:Z("Chest",[h("coin.png")])},maps:{room1:Mr([bo("actors/player","Player",48,176),bo("actors/door","Door",272,176)]),room2:Mr([bo("actors/player","Player",48,176),bo("actors/chest","Chest",272,176)])},rules:["motion","arrows","collisions"],sprites:["player","door","coin"]}),instructions:`
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
`.trim()},Rp={name:"A door that wants something",description:"Two locked doors, one key, and no way through either of them.",source:A({world:f({name:"My World",rows:[d(s("key"),[c(40,160)]),d(s("player"),[c(120,160)]),d(s("door"),[c(216,160)]),d(s("door"),[c(288,160)])],actors:[{id:"player",name:"Player",rows:[a("Arrow Keys#MovesAcrossTrait"),a("Collisions#CanCollideTrait"),a("Collection#CollectsTrait"),a("Inventory#CarriesTrait"),h("player.png")]},{id:"key",name:"Key",rows:[a("Collection#CanBeCollectedTrait"),a("Inventory#CanBeCarriedTrait"),h("coin.png")]},{id:"door",name:"Door",rows:[a("Solid Bodies#SolidTrait"),h("door.png")]}]}),sprites:["player","coin","door"],rules:["motion","arrows","collisions","solid","collect","inventory"]}),instructions:`
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
`.trim()},Gt=e=>({type:"world_get_Physics_VelocityProperty",inputs:{ACTOR:{block:e}}}),Ra=e=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:p(),VALUE:{block:e}}}),ea=(e,t,o)=>({type:"world_vector_math",fields:{OP:e},inputs:{A:{block:t},B:{block:o}}}),Sa=(e,t)=>({type:"world_query_Steering_FromTowardOverQuery",inputs:{HERE:{block:e},THERE:{block:t},GAPBETWEEN:{block:{type:"world_query_Steering_DistanceFromToQuery",inputs:{A:{block:e},B:{block:t}}}}}}),ln=(e,t)=>Ra(ea("ADD",Gt({type:"world_this_actor"}),ea("MULTIPLY",e,{type:"math_number",fields:{NUM:t}}))),Go=(e,t,o)=>({type:"world_for_each",fields:{VAR:{id:e,name:e,type:"Actor"}},inputs:{SOURCE:{block:{type:"world_actors_within",inputs:{SOURCE:ke("boid"),DISTANCE:{shadow:{type:"math_number",fields:{NUM:t}}},OF:{block:{type:"world_this_actor"}}}}},...o.length?{DO:{block:W(o)}}:{}}}),dn=e=>({type:"variables_get_Actor",fields:{VAR:{id:e,name:e,type:"Actor"}}}),_i=()=>Array.from({length:12},(e,t)=>{const o=t*30*Math.PI/180;return d(s("boid"),[c(60+t%4*70,60+Math.floor(t/4)*90),we(Number((.6*Math.cos(o)).toFixed(3)),Number((.6*Math.sin(o)).toFixed(3)))])}),Sp={name:"Three rules, and behavior nobody wrote",description:"Twelve Boids going twelve ways, and two of the three rules that make a flock.",source:A({world:f({name:"My World",rows:_i(),actors:[{id:"boid",name:"Boid",rows:[a("Physics#CanMoveTrait"),a("Screen Wrap#WrapsAcrossTrait"),a("Screen Wrap#WrapsDownTrait"),h("ball.png"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"flock"},inputs:{DO:{block:W([Go("crowding",30,[ln(Sa(dn("crowding"),{type:"world_this_actor"}),.05)]),Go("other",80,[])])}}},{type:"world_trait_step",fields:{PHASE:"push",NAME:"keep flying"},inputs:{DO:{block:Ra({type:"world_vector_from_angle",inputs:{LENGTH:{shadow:{type:"math_number",fields:{NUM:.6}}},DEGREES:{block:{type:"world_vector_direction",inputs:{VECTOR:{block:Gt({type:"world_this_actor"})}}}}}})}}}]}]}),sprites:["ball"],rules:["motion","wrap","steering"]}),instructions:`
## Three rules, and behavior nobody wrote

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
   behavior, and neither one explains the other** — which is why nobody can
   look at three lines like these and say what they will do.
`.trim()},Ip=()=>ln(ea("SUBTRACT",Gt(dn("other")),Gt({type:"world_this_actor"})),.05),Pp=()=>ln(Sa({type:"world_this_actor"},dn("other")),.01),xp={name:"The properties are the experiment",description:"A flock that works, and five numbers typed where nobody can turn them.",source:A({world:f({name:"My World",rows:_i(),actors:[{id:"boid",name:"Boid",rows:[a("Physics#CanMoveTrait"),a("Screen Wrap#WrapsAcrossTrait"),a("Screen Wrap#WrapsDownTrait"),h("ball.png"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"flock"},inputs:{DO:{block:W([Go("crowding",30,[ln(Sa(dn("crowding"),{type:"world_this_actor"}),.05)]),Go("other",80,[Ip(),Pp()])])}}},{type:"world_trait_step",fields:{PHASE:"push",NAME:"keep flying"},inputs:{DO:{block:Ra({type:"world_vector_from_angle",inputs:{LENGTH:{shadow:{type:"math_number",fields:{NUM:.6}}},DEGREES:{block:{type:"world_vector_direction",inputs:{VECTOR:{block:Gt({type:"world_this_actor"})}}}}}})}}}]}]}),sprites:["ball"],rules:["motion","wrap","steering"]}),instructions:`
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
`.trim()},Bp=()=>{const e=[];for(let t=0;t<5;t++)for(let o=0;o<5;o++)e.push(J(`dot${t}_${o}`,40+t*60,40+o*60));return e},Dr=(e,t,o)=>{const n={id:e,name:e,type:"Actor"};return{type:"world_for_each",fields:{VAR:n},inputs:{SOURCE:{block:t},DO:{block:{type:"world_set_sprite",fields:{SPRITE:o},inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:n}}}}}}}}},Np={name:"Everything near me",description:"Twenty-five Dots, all of them lit, and a question that lights a few.",source:A({world:f({name:"My World",rows:[D(s("dot"),Bp()),d(s("walker"),[c(10,160),we(1,0)])],actors:[{id:"dot",name:"Dot",rows:[h("box.png")]},{id:"walker",name:"Walker",rows:[a("Physics#CanMoveTrait"),a("Screen Wrap#WrapsAcrossTrait"),h("player.png"),{type:"world_trait_step",fields:{PHASE:"decide",NAME:"look around"},inputs:{DO:{block:W([Dr("dot",ke("dot").block,"box.png"),Dr("near",ke("dot").block,"coin.png")])}}}]}]}),sprites:["player","box","coin"],rules:["motion","wrap"]}),instructions:`
## Everything near me

The Walker drifts across twenty-five Dots and every one of them is lit, because
the second loop asks for **every Dot**. What it should ask for is the ones near
it — and "near" is a question about distance, which nothing you have met can
ask.

**A neighborhood is a filter over a list.** Every flock, swarm and crowd in
every simulation ever written is that shape: not "what is everything doing" but
"what are the ones near me doing".

### What you do

1. Drop **the actors in ⟨any Dot⟩ within ⟨80⟩ of ⟨this actor⟩** into the second
   loop's list socket, in place of **any Dot**.
2. Watch the lit patch travel with the Walker. Change the 80 and watch it grow.

The first loop is not spare. It dims every Dot before the second lights a few,
so what you see is where the Walker IS rather than everywhere it has been.
`.trim()},Mp={name:"Everybody moves, then the world moves",description:"An enemy on a timer, in a game where nothing else has a clock.",source:A({world:f({name:"My World",rows:[D(s("wall"),_t()),d(s("enemy"),[c(48,240)]),d(s("player"),[c(80,144)])],actors:[{id:"player",name:"Player",rows:[a("Grid#StepsOnTheGridTrait"),a("Input#TakesKeyboardInputTrait"),h("player.png")]},{id:"enemy",name:"Enemy",rows:[a("Grid#StepsOnTheGridTrait"),a("Time#HasATimerTrait"),{type:"world_set_Time_TimerPeriodProperty",inputs:{ACTOR:p(),VALUE:i(.4)}},h("asteroid.png")]},{id:"wall",name:"Wall",rows:[a("Grid#FillsATileTrait"),h("ground.png")]}],handlers:[ue("left arrow","StepLeft"),ue("right arrow","StepRight"),ue("up arrow","StepUp"),ue("down arrow","StepDown"),{type:"world_on_Time_TimerFiresEvent",inputs:{ACTOR:ke("enemy")},next:{block:{type:"world_do_Grid_StepRightAction",inputs:{ACTOR:p()}}}}]}),sprites:["player","asteroid","ground"],rules:["input","grid","time","turns"]}),instructions:`
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
`.trim()},Dp={name:"Taking it back",description:"A crate that can be pushed one square too far, and never pulled.",source:A({world:f({name:"My World",rows:[D(s("wall"),_t()),d(s("mark"),[c(240,176)]),d(s("crate"),[c(144,176)]),d(s("player"),[c(80,176)])],actors:[{id:"player",name:"Player",rows:[a("Grid#StepsOnTheGridTrait"),a("Input#TakesKeyboardInputTrait"),h("player.png")]},{id:"crate",name:"Crate",rows:[a("Grid#FillsATileTrait"),a("Grid#CanBePushedTrait"),h("box.png")]},{id:"mark",name:"Mark",rows:[h("coin.png")]},{id:"wall",name:"Wall",rows:[a("Grid#FillsATileTrait"),h("ground.png")]}],handlers:[ue("left arrow","StepLeft"),ue("right arrow","StepRight")]}),sprites:["player","box","coin","ground"],rules:["input","grid","history"]}),instructions:`
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
`.trim()},Lp={name:"The end of the world",description:"A ball that leaves and never comes back, and the two ways to keep it.",source:A({world:f({name:"My World",rows:[d(s("ball"),[c(160,160),we(3,3)])],actors:[{id:"ball",name:"Ball",rows:sn}]}),sprites:["ball"],rules:["motion","bounds","wrap"]}),instructions:`
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
`.trim()},Up={name:"A box for a number",description:"Three posts in a row, and the same two numbers written six times.",source:A({world:f({name:"My World",rows:[d(s("post"),[c(60,160)]),d(s("post"),[c(160,160)]),d(s("post"),[c(260,160)])],actors:[{id:"post",name:"Post",rows:[h("post.png")]}]}),sprites:["post"]}),instructions:`
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
`.trim()},Wp={name:"All of them at once",description:"Six coins and six blocks that do the same thing to them.",source:A({world:f({name:"My World",rows:[d(s("coin"),[c(60,80)]),d(s("coin"),[c(160,80)]),d(s("coin"),[c(260,80)]),d(s("coin"),[c(60,240)]),d(s("coin"),[c(160,240)]),d(s("coin"),[c(260,240)])],actors:[{id:"coin",name:"Coin",rows:[h("box.png")]}]}),sprites:["box","coin"]}),instructions:`
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
`.trim()},Hp={name:"State the world shares",description:"Two Labels that disagree about how many lives are left.",source:A({world:f({name:"My World",rows:[d("actors/label",[c(90,110),O("TextProperty",V("Lives: 3"))]),d("actors/label",[c(230,210),O("TextProperty",V("Lives: 2"))])]}),stockActors:["label"]}),instructions:`
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
`.trim()},Lr=e=>({block:{type:"text",fields:{TEXT:"lamp "},inputs:{ADD:{block:{type:"world_as_text",inputs:{VALUE:e}}}}}}),Ur=()=>({block:{type:"world_get_WorldsMain_IdProperty"}}),Fp={name:"State an actor carries",description:"Two Lamps that cannot tell each other apart.",source:A({world:f({name:"My World",rows:[lt("number","id","1"),d("actors/lamp",[c(110,160),O("TextProperty",Lr(Ur()))]),d("actors/lamp",[c(230,160),O("TextProperty",Lr(Ur()))])]}),actors:{lamp:Z("Lamp",[ye("actors/label"),ce("text")],{drawing:{width:96,height:24,commands:[R(v("#ffcc66")),on(48,12)]}})},stockActors:["label"]}),instructions:`
## State an actor carries

Two Lamps, and both say **lamp 1**. The number they read is the world's, and
the world has exactly one of it — so however you set it, you set it for both.
There is nowhere for one Lamp to remember something the other does not.

A world's state is shared on purpose, and that is what the last lesson was for.
An actor's is the opposite on purpose: declared in the **actor's own file**,
every Lamp gets its own copy, and that is what makes two of a kind two things
rather than one thing drawn twice.

The same \`define property\` block works in both places. Declared under
\`define world\`, what it remembers is this world's; declared under
\`define actor\`, it belongs to the KIND, and every copy the world places
carries one of its own.

### What you do

1. Open the \`lamp.actor\` tab. Under \`define actor\`, add
   **define number id with default 1**.
2. In \`main.world\`, in each \`add actor\` body, **set id of ⟨this actor⟩** —
   1 for the first, 2 for the second — before the text is set.
3. Change both Labels to read **join ⟨"lamp "⟩ ⟨id of this actor⟩**, the Lamp's
   own \`id\` rather than the world's.
4. Delete the world's \`define number id\`. Nothing breaks: nothing needed it.
`.trim()},Gp=["BREAD","MILK","JAM"],Wr=e=>({block:{type:"world_vector_component",fields:{COMPONENT:e},inputs:{VEC:{block:{type:"world_random_place"}}}}}),Vp=e=>d("actors/label",[O("TextProperty",e),{type:"world_set_position",inputs:{ACTOR:p(),X:Wr("x"),Y:Wr("y")}}]),$p={name:"More than one of something",description:"Three things to remember, remembered three separate times.",source:A({world:f({name:"My World",rows:Gp.map(e=>Vp(V(e)))}),stockActors:["label"]}),instructions:`
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
`.trim()},Hr=()=>({block:{type:"world_get_WorldsMain_CountedProperty"}}),Yp={name:"Somebody already counted",description:"A hand-rolled tally, and a rule that has one with an ending in it.",source:A({world:f({name:"My World",rows:[lt("number","counted","0"),d(s("target"),[c(160,160)])],actors:[{id:"target",name:"Target",rows:[h("coin.png")]}],handlers:[{type:"world_on_Mouse_IsPressedEvent",fields:{FILTER0:"left"},next:{block:{type:"world_set_WorldsMain_CountedProperty",inputs:{VALUE:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:Hr(),B:i(1)}}}},next:{block:{type:"world_print",inputs:{VALUE:Hr()}}}}}}]}),sprites:["coin"],rules:["mouse"]}),instructions:`
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
`.trim()},jp={showFileBrowser:!1},Kp={"origin/first-world":ih,"input/arrows":lh,"input/press":mh,"input/mouse":Ah,"input/two-hands":fh,"motion/speed":dh,"motion/gravity":ch,"motion/force":bh,"motion/units":Th,"motion/drag":_h,"motion/tween":kh,"logic/if":Ch,"logic/collision":vh,"logic/and-or":Oh,"logic/kinds":Sh,"memory/variable":Up,"memory/many":Wp,"memory/world-state":Hp,"memory/actor-state":Fp,"memory/lists":$p,"memory/score":Yp,"look/sprite":hh,"look/drawing":ph,"look/background":uh,"look/animation":wh,"look/effect":yh,"place/position":gh,"place/edges":Lp,"place/map":Ih,"place/camera":Ph,"place/camera-feel":xh,"place/layers":Bh,"platformer/jump":Nh,"platformer/jetpack":Mh,"platformer/ladders":Dh,"platformer/surfaces":Lh,"platformer/enemies":Gh,"platformer/hunter":Vh,"platformer/flier":$h,"platformer/pads":Uh,"platformer/walls":Hh,"platformer/digging":Fh,"platformer/pickups":Yh,"platformer/hazards":jh,"platformer/level":Kh,"arcade/bounce":Qh,"arcade/paddle":zh,"arcade/zap":qh,"arcade/bricks":Zh,"arcade/waves":tp,"story/text":op,"story/reveal":np,"story/script":ap,"story/choice":rp,"story/form":sp,"story/scene":ip,"simulation/many":lp,"simulation/steering":dp,"making/property":hp,"puzzle/grid":pp,"puzzle/push":up,"simulation/neighbors":Np,"adventure/rooms":Op,"adventure/keys":Rp,"simulation/emergent":Sp,"simulation/dials":xp,"puzzle/turns":Mp,"puzzle/goal":vp,"puzzle/undo":Dp,"adventure/people":wp,"adventure/errand":yp,"making/change":gp,"making/trait":Ap,"making/rule":fp,"adventure/world":bp,"making/read":Tp,"making/block":Ep,"platformer/ground":Cp},Ia=Object.fromEntries(Object.entries(Kp).map(([e,t])=>[e,{...t,levelData:{...jp,...t.levelData}}])),Gg=e=>{const t=Ia[e];return t&&{longInstructions:t.instructions,source:t.source,...t.levelData?{levelData:t.levelData}:{}}},Vo=e=>e*F+F/2,pt=(e,t,o,n)=>({type:e,id:t,properties:{positional:{position:{x:Vo(o),y:Vo(n)}}}}),Qp=[1,2,3,4,5,6,7,8],Jp=[1,2],Fr=[1,2,3,4,5,6,7,8],zp=[0,1,2,3,4,5,6,7,8,9],Xp=JSON.stringify({type:"map",size:{width:10,height:10},tile:{width:F,height:F},actors:[...zp.map(e=>pt("actors/wall",`Roof${e}`,e,0)),...Fr.map(e=>pt("actors/wall",`Left${e}`,0,e)),...Fr.map(e=>pt("actors/wall",`Right${e}`,9,e)),...Jp.flatMap(e=>Qp.map(t=>pt("actors/brick",`Brick${e}_${t}`,t,e))),pt("actors/paddle","Paddle",4,8),pt("actors/ball","Ball",5,5)]},null,2),cn=(e,t)=>({type:e,inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"math_number",fields:{NUM:t}}}}}),qp=e=>{const t=()=>({block:{type:"world_this_actor"}}),o=()=>({block:{type:"world_actor_kind",fields:{ACTOR:"actors/pauseMenu"}}});return[{type:"world_on_Input_IsPressedEvent",fields:{FILTER0:"p"},x:20,y:420,next:{block:{type:"controls_if",inputs:{IF0:{block:{type:"logic_negate",inputs:{BOOL:{block:{type:"world_game_is_paused"}}}}},DO0:{block:b([{type:"world_pause_game"},{type:"world_load_map",fields:{MAP:"maps/pauseMenu"}}])}}}}},{type:"world_on_ActorsPauseMenu_ResumedEvent",x:20,y:560,inputs:{ACTOR:o()},next:{block:b([{type:"world_resume_game"},{type:"world_remove_actor",inputs:{ACTOR:t()}}])}},{type:"world_on_ActorsPauseMenu_QuitEvent",x:20,y:660,inputs:{ACTOR:o()},next:{block:b([{type:"world_resume_game"},{type:"world_clear_world"},{type:"world_load_map",fields:{MAP:e}}])}}]},Zp=(e,t={x:20,y:240})=>({type:"world_on_Input_IsPressedEvent",fields:{FILTER0:"space"},...t,next:{block:{type:"controls_if",inputs:{IF0:{block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:{block:{type:"world_vector_component",fields:{COMPONENT:"y"},inputs:{VEC:{block:{type:"world_get_Physics_VelocityProperty",inputs:{ACTOR:Gr(e)}}}}}},B:{block:{type:"math_number",fields:{NUM:0}}}}}},DO0:{block:ki(Gr(e),2.5,-2.5)}}}}}),Gr=e=>({block:{type:"world_actor_kind",fields:{ACTOR:e}}}),ki=(e,t,o)=>({type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:e,VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:t,y:o}}}}}}),eu=()=>b([{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:"Ball lost!"}}}}},{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:{block:{type:"math_number",fields:{NUM:Vo(5)}}},Y:{block:{type:"math_number",fields:{NUM:Vo(5)}}}}},ki({block:{type:"world_this_actor"}},0,0)]),tu=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Wall"},next:{block:b([w("Solid Bodies#SolidTrait"),cn("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_sprite",fields:{SPRITE:"wall.png"}}])}}]}}),ou=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Brick"},next:{block:b([w("Solid Bodies#SolidTrait"),w("Collection#CanBeCollectedTrait"),cn("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_sprite",fields:{SPRITE:"box.png"}}])}}]}}),nu=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Paddle"},next:{block:b([{type:"world_use_trait",fields:{TRAIT:"Arrow Keys#MovesAcrossTrait"}},{type:"world_use_trait",fields:{TRAIT:"Input#TakesKeyboardInputTrait"}},{type:"world_use_trait",fields:{TRAIT:"Solid Bodies#SolidTrait"}},{type:"world_set_sprite",fields:{SPRITE:"ground.png"}},cn("world_set_SolidBodies_BouncinessProperty",1),{type:"world_set_Space_ScaleProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:{block:{type:"math_number",fields:{NUM:2}}},Y:{block:{type:"math_number",fields:{NUM:.5}}}}}])}}]}}),au=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Ball"},next:{block:b([{type:"world_use_trait",fields:{TRAIT:"Physics#CanMoveTrait"}},{type:"world_use_trait",fields:{TRAIT:"Collection#CollectsTrait"}},{type:"world_set_sprite",fields:{SPRITE:"ball.png"}}])}},{type:"world_on_Collection_CollectsEvent",x:20,y:320,next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:"actors/brick"},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}}}}}}}}}}}},{type:"world_on_Space_LeftMapEvent",x:20,y:460,next:{block:eu()}}]}}),ru=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Breakout"},next:{block:b([{type:"world_load_map",fields:{MAP:"maps/breakout"}}])}},Zp("actors/ball"),...qp("maps/breakout")]}}),su={inputRuleFile:{name:"input.rule",language:"rule",contents:_("input"),folderId:"rules"},arrowsRuleFile:{name:"arrows.rule",language:"rule",contents:_("arrows"),folderId:"rules"},motionRuleFile:{name:"motion.rule",language:"rule",contents:_("motion"),folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:_("collisions"),folderId:"rules"},solidRuleFile:{name:"solid.rule",language:"rule",contents:_("solid"),folderId:"rules"},collectRuleFile:{name:"collect.rule",language:"rule",contents:_("collect"),folderId:"rules"},...De(["ground","wall","ball","box"])},iu={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:ru,folderId:"worlds",active:!0,open:!0},paddle:{name:"paddle.actor",language:"actor",contents:nu,folderId:"actors"},ball:{name:"ball.actor",language:"actor",contents:au,folderId:"actors"},brick:{name:"brick.actor",language:"actor",contents:ou,folderId:"actors"},wall:{name:"wall.actor",language:"actor",contents:tu,folderId:"actors"},breakoutMap:{name:"breakout.map",language:"map",contents:Xp,folderId:"maps"},...su},open:["main"]},Vr=e=>e*F+F/2,lu=48,Ei=10,ta=(e,t,o,n)=>({type:e,id:t,properties:{positional:{position:{x:Vr(o),y:Vr(n)}}}}),du=3,cu=7,hu=[4,3,5,4,6,5],$r=hu.map((e,t)=>[8+t*cu,e]),pu=(e,t)=>{const o=[];for(let n=0;n<Ei;n++)(n<t||n>=t+du)&&o.push(n);return o.map(n=>ta("actors/pipe",`Pipe${e}_${n}`,e,n))},uu=[ta("actors/bird","Bird",2,5),...$r.flatMap(([e,t])=>pu(e,t)),...$r.map(([e,t],o)=>ta("actors/coin",`Coin${o}`,e,t+1))],wu=JSON.stringify({type:"map",size:{width:lu,height:Ei},tile:{width:F,height:F},actors:uu},null,2),Xe=()=>({block:{type:"world_this_actor"}}),So=e=>({block:{type:"math_number",fields:{NUM:e}}}),yu=(e,t)=>({block:{type:"world_vector",fields:{VECTOR:{x:e,y:t}}}}),gu=9,mu=1,Au=-2.8,fu=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Bird"},next:{block:b([w("Gravity#AffectedByGravityTrait"),w("Input#TakesKeyboardInputTrait"),w("Collection#CollectsTrait"),{type:"world_set_sprite",fields:{SPRITE:"ship.png"}},{type:"world_set_Space_RotationProperty",inputs:{ACTOR:Xe(),VALUE:So(90)}},{type:"world_set_Gravity_GravityScaleProperty",inputs:{ACTOR:Xe(),VALUE:So(0)}}])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"up arrow"},x:20,y:320,next:{block:b([{type:"world_set_Gravity_GravityScaleProperty",inputs:{ACTOR:Xe(),VALUE:So(1)}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:Xe(),VALUE:yu(mu,Au)}}])}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:"actors/pipe"},x:20,y:460,next:{block:b([{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:"Crashed!"}}}}},{type:"world_remove_actor",inputs:{ACTOR:Xe()}}])}},{type:"world_on_Space_LeftMapEvent",x:20,y:580,next:{block:b([{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:"Out of the world!"}}}}},{type:"world_remove_actor",inputs:{ACTOR:Xe()}}])}},{type:"world_on_Collection_CollectsEvent",x:20,y:700,next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_count_of_kind",fields:{TYPE:"actors/coin"},inputs:{LIST:{block:{type:"world_get_Collection_CollectedProperty",inputs:{ACTOR:Xe()}}}}}}}}}}]}}),bu=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Pipe"},next:{block:b([w("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"pipe.png"}}])}}]}}),Tu=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Coin"},next:{block:b([w("Collection#CanBeCollectedTrait"),{type:"world_set_sprite",fields:{SPRITE:"coin.png"}}])}}]}}),Yr="flappyChaseCamera",_u=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Flappy"},next:{block:b([{type:"world_set_Gravity_AmountOfGravityProperty",inputs:{VALUE:So(gu)}},{type:"world_load_map",fields:{MAP:"maps/flappy"}},{type:"world_define_camera",id:Yr,fields:{NAME:"Chase"},inputs:{DO:{block:b([w("Camera Follow#FollowsTrait"),w("Camera Confined#ConfinedToTheMapTrait"),{type:"world_set_CameraFollow_ActorToFollowProperty",inputs:{ACTOR:{block:{type:"world_this_camera"}},VALUE:{block:{type:"world_actor_kind",fields:{ACTOR:"actors/bird"}}}}}])}}},{type:"world_use_camera",fields:{CAMERA:`camera:${Yr}`}}])}}]}}),ku={motionRuleFile:{name:"motion.rule",language:"rule",contents:_("motion"),folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:_("collisions"),folderId:"rules"},solidRuleFile:{name:"solid.rule",language:"rule",contents:_("solid"),folderId:"rules"},gravityRuleFile:{name:"gravity.rule",language:"rule",contents:_("gravity"),folderId:"rules"},inputRuleFile:{name:"input.rule",language:"rule",contents:_("input"),folderId:"rules"},collectRuleFile:{name:"collect.rule",language:"rule",contents:_("collect"),folderId:"rules"},cameraRuleFile:{name:"camera.rule",language:"rule",contents:_("camera"),folderId:"rules"},cameraFollowRuleFile:{name:"cameraFollow.rule",language:"rule",contents:_("cameraFollow"),folderId:"rules"},cameraConfinedRuleFile:{name:"cameraConfined.rule",language:"rule",contents:_("cameraConfined"),folderId:"rules"},...De(["ship","ground","pipe","coin"])},Eu={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:_u,folderId:"worlds",active:!0,open:!0},bird:{name:"bird.actor",language:"actor",contents:fu,folderId:"actors"},pipe:{name:"pipe.actor",language:"actor",contents:bu,folderId:"actors"},coin:{name:"coin.actor",language:"actor",contents:Tu,folderId:"actors"},flappyMap:{name:"flappy.map",language:"map",contents:wu,folderId:"maps"},...ku},open:["main"]},Pt=e=>({block:{type:"world_actor_kind",fields:{ACTOR:e}}}),oa=e=>({block:{type:"math_number",fields:{NUM:e}}}),Oe=(e,t,o,n,r={})=>({type:e,id:t,properties:{...r,positional:{position:{x:o,y:n},...r.positional}}}),jr=()=>({block:{type:"world_get_ActorsLabel_TextProperty",inputs:{ACTOR:Pt("actors/textInput")}}}),$o={columns:10,rows:18},Cu=JSON.stringify({type:"map",size:{width:$o.columns,height:$o.rows},tile:{width:F,height:F},actors:[Oe("actors/panel","Dialog",160,100,{Label:{width:300,height:296}}),Oe("actors/label","Title",0,-70,{positional:{parent:"Dialog"},Label:{text:"WHAT IS YOUR NAME?"}}),Oe("actors/textInput","Name",0,-20,{positional:{parent:"Dialog"}}),Oe("actors/button","Hello",0,30,{positional:{parent:"Dialog"},Label:{text:"SAY HELLO"}}),Oe("actors/progressBar","Bar",0,68,{positional:{parent:"Dialog"},Progress_Bar:{fraction:0}}),Oe("actors/toggle","Sound",0,96,{positional:{parent:"Dialog"},Label:{text:"SOUND",width:120}}),Oe("actors/slider","Volume",0,124,{positional:{parent:"Dialog"}}),Oe("actors/dropdown","Size",0,152,{positional:{parent:"Dialog"},Dropdown:{choices:["SMALL","MEDIUM","LARGE"]},Label:{text:"SMALL"}}),Oe("actors/speechBox","Reply",160,500)]},null,2),Kr=e=>({type:`world_set_${e}_size`,inputs:{X:oa($o.columns),Y:oa($o.rows)}}),vu=e=>e.reduceRight((t,o)=>({...o,next:{block:t}})),Ou=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Interface"},next:{block:vu([Kr("view"),Kr("map"),{type:"world_load_map",fields:{MAP:"maps/interface"}}])}},{type:"world_on_ActorsTextInput_ChangedEvent",x:20,y:260,inputs:{ACTOR:Pt("actors/textInput")},next:{block:{type:"world_set_ActorsProgressBar_FractionProperty",inputs:{ACTOR:Pt("actors/progressBar"),VALUE:{block:{type:"math_arithmetic",fields:{OP:"DIVIDE"},inputs:{A:{block:{type:"text_length",inputs:{VALUE:jr()}}},B:oa(12)}}}}}}},{type:"world_on_Mouse_IsClickedWithEvent",x:20,y:400,fields:{FILTER0:""},inputs:{ACTOR:Pt("actors/button")},next:{block:{type:"world_do_ActorsSpeechBox_SayAction",inputs:{ACTOR:Pt("actors/speechBox"),VALUE:{block:{type:"text",fields:{TEXT:"HELLO "},inputs:{ADD:jr()}}}}}}}]}},null,2),Ru=e=>{let t=e;for(const r of["label","button","progressBar","speechBox","panel","toggle","slider","dropdown"])t=Ho(t,Ft(r)).source;t=Ho(t,Ft("textInput")).source;const o=Object.values(t.files).find(r=>r.name==="main.world"),n=Object.values(t.folders).find(r=>r.name==="maps"&&r.parentId==="0");return o?{...t,files:{...t.files,[o.id]:{...o,contents:Ou},interfaceMap:{id:"interfaceMap",name:"interface.map",language:"map",contents:Cu,folderId:n?.id??"0"}}}:t},Yo=e=>e*F+F/2,jo=26,Ko=16,ie=(e,t,o,n)=>({type:e,id:t,properties:{positional:{position:{x:Yo(o),y:Yo(n)}}}}),Su=(e,t,o,n)=>({type:"actors/pad",id:e,properties:{positional:{position:{x:Yo(t),y:Yo(o)}},Is_a_Teleport_Pad:{pad_color:n}}}),Iu=[[11,3,7],[4,2,6]],Pu=[["actors/belt",8,11,16],["actors/sludge",12,18,22],["actors/ice",5,19,23]],Qr=(e,t,o,n,r)=>{const l=[];for(let u=n;u<=r;u++)l.push(ie(e,`${t}_${u}`,u,o));return l},xu=()=>{const e=[];for(let t=0;t<jo;t++)e.push(ie("actors/wall",`Ceiling${t}`,t,0)),e.push(ie("actors/wall",`Floor${t}`,t,Ko-1));for(let t=1;t<Ko-1;t++)e.push(ie("actors/wall",`Left${t}`,0,t)),e.push(ie("actors/wall",`Right${t}`,jo-1,t));return e},Bu=[["actors/fuelSmall",5,10],["actors/fuelCan",13,7],["actors/fuelSmall",20,11],["actors/fuelCan",21,4],["actors/fuelCan",4,3]],Nu=[[6,14],[9,14],[17,14],[4,10],[6,10],[12,7],[22,11],[5,3]],Mu=[[3,3],[22,4],[20,11]],Jr="#3f7fe0",zr="#3fbf6a",Xr="#e0484a",Du=[[Jr,22,14],[Jr,14,7],[zr,7,10],[zr,19,11],[Xr,2,3],[Xr,23,4]],Lu=[[23,11],[23,12],[23,13],[23,14]],qr=[16,14],Zr=[24,14],Uu=[["actors/ball",12,14],["actors/rocket",10,3],["actors/robot",20,14],["actors/bat",22,5],["actors/spring",8,13],["actors/shuriken",14,3],["actors/eyeball",17,6],["actors/blob",11,14]],Wu=0,Hu=0,Fu=2,Gu=[10,11,12,13,14],Vu=[...xu(),...Gu.map(e=>ie("actors/ladder",`Rung${e}`,Fu,e)),...Iu.flatMap(([e,t,o])=>Qr("actors/ledge",`Ledge${e}`,e,t,o)),...Pu.flatMap(([e,t,o,n])=>Qr(e,`${e.split("/")[1]}${t}`,t,o,n)),...Bu.map(([e,t,o],n)=>ie(e,`Can${n}`,t,o)),...Nu.map(([e,t],o)=>ie("actors/coin",`Coin${o}`,e,t)),...Mu.map(([e,t],o)=>ie("actors/gem",`Gem${o}`,e,t)),...Du.map(([e,t,o],n)=>Su(`Pad${n}`,t,o,e)),...Lu.map(([e,t],o)=>ie("actors/bar",`Bar${o}`,e,t)),ie("actors/plate","Plate",qr[0],qr[1]),...Uu.map(([e,t,o],n)=>ie(e,`Enemy${n}`,t,o)),ie("actors/door","Door",Zr[0],Zr[1]),ie("actors/scoreboard","Scoreboard",20,1),ie("actors/fuelBar","Gauge",4,1),ie("actors/pilot","Pilot",2,14)],$u=JSON.stringify({type:"map",size:{width:jo,height:Ko},tile:{width:F,height:F},actors:Vu},null,2),m=()=>({block:{type:"world_this_actor"}}),C=e=>({block:{type:"math_number",fields:{NUM:e}}}),hn=e=>({block:{type:"world_actor_kind",fields:{ACTOR:e}}}),Tt=e=>({block:{type:"logic_boolean",fields:{BOOL:e?"TRUE":"FALSE"}}}),Yu=100,ju=50,es=(e,t,o)=>({type:"world_on_Collection_CollectsEvent",x:20,y:o,fields:{FILTER0:e},inputs:{ACTOR:m()},next:{block:{type:"world_do_Jetpack_GiveFuelAction",inputs:{WHO:m(),AMOUNT:C(t)}}}}),na=e=>({type:"world_play_animation",fields:{ANIMATION:e}}),ts=()=>({type:"world_set_sprite",fields:{SPRITE:"pilot.png"}}),To=(e,t,o)=>({type:`world_on_${e}`,x:20,y:o,inputs:{ACTOR:m()},next:{block:t}}),Ku=e=>({block:{type:"world_count_of_kind",fields:{TYPE:e},inputs:{LIST:{block:{type:"world_all_actors"}}}}}),Ci=e=>({block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:Ku(e),B:C(0)}}}),xn=e=>({block:{type:"logic_ternary",inputs:{IF:{block:{type:"world_is_key_down",fields:{KEY:e}}},THEN:C(1),ELSE:C(0)}}}),Qo=(e,t)=>({type:"controls_if",inputs:{IF0:e,DO0:{block:t}}}),pn=.2,Qu=.4,Ju=()=>[{type:"world_on_Teleport_StartsTravelingEvent",x:320,y:380,inputs:{ACTOR:m()},next:{block:{type:"world_do_Health_BeSafeForSecondsAction",inputs:{ACTOR:m(),VALUE:{block:{type:"world_get_Teleport_TravelSecondsProperty",inputs:{ACTOR:m()}}}}}}}],zu=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Pilot"},next:{block:b([w("Gravity#AffectedByGravityTrait"),w("Input#TakesKeyboardInputTrait"),w("Arrow Keys#MovesAcrossTrait"),w("Jumping#JumpsTrait"),w("Jetpack#FliesWithAJetpackTrait"),w("Climbing#ClimbsTrait"),w("Teleport#UsesTeleportPadsTrait"),w("Digging#DigsTrait"),{type:"world_set_Physics_CornerReachProperty",inputs:{ACTOR:m(),VALUE:C(5)}},{type:"world_set_Teleport_TravelSecondsProperty",inputs:{ACTOR:m(),VALUE:C(Qu)}},w("Surfaces#StandsOnSurfacesTrait"),w("Health#HasHealthTrait"),w("Collection#CollectsTrait"),{type:"world_set_sprite",fields:{SPRITE:"pilot.png"}},{type:"world_set_Jumping_JumpStrengthProperty",inputs:{ACTOR:m(),VALUE:C(2.6)}},{type:"world_set_Health_MostHealthProperty",inputs:{ACTOR:m(),VALUE:C(8)}},{type:"world_set_Health_HealthProperty",inputs:{ACTOR:m(),VALUE:C(8)}},{type:"world_set_Health_MercyTimeProperty",inputs:{ACTOR:m(),VALUE:C(1.5)}},{type:"world_set_Jetpack_FuelProperty",inputs:{ACTOR:m(),VALUE:C(50)}},{type:"world_trait_step",fields:{PHASE:"touch",NAME:"dig where it is pointing"},inputs:{DO:{block:Qo({block:{type:"world_is_key_down",fields:{KEY:"z"}}},{type:"world_do_Digging_DigTowardsAction",inputs:{ACTOR:m(),VALUE:{block:{type:"world_vector_of",inputs:{X:{block:{type:"math_arithmetic",fields:{OP:"MINUS"},inputs:{A:xn("right arrow"),B:xn("left arrow")}}},Y:xn("down arrow")}}}}})}}}])}},...ya().map((e,t)=>({...e,x:20,y:900+t*120})),{type:"world_on_Input_PressesEvent",x:20,y:260,fields:{FILTER0:"space"},next:{block:b([{type:"world_do_Jumping_MakeJumpAction",inputs:{VALUE:m()}},{type:"world_do_Jetpack_StartFlyingAction",inputs:{VALUE:m()}}])}},{type:"world_on_Input_PressesEvent",x:20,y:540,fields:{FILTER0:"down arrow"},next:{block:{type:"world_do_Teleport_UseThePadAction",inputs:{ACTOR:m()}}}},{type:"world_on_Input_ReleasesEvent",x:20,y:400,fields:{FILTER0:"space"},next:{block:{type:"world_do_Jetpack_StopFlyingAction",inputs:{VALUE:m()}}}},{type:"world_on_Jetpack_RunsOutOfFuelEvent",x:20,y:520,inputs:{ACTOR:m()},next:{block:{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:"Out of fuel!"}}}}}}},es("actors/fuelCan",Yu,640),es("actors/fuelSmall",ju,760),To("Jetpack_StartsFlyingEvent",na("pilotFly"),880),To("Jetpack_StopsFlyingEvent",ts(),1e3),To("Climbing_StartsClimbingEvent",na("pilotClimb"),1120),To("Climbing_StopsClimbingEvent",ts(),1240),{type:"world_on_Collection_CollectsEvent",x:20,y:1360,fields:{FILTER0:"actors/coin"},inputs:{ACTOR:m()},next:{block:{type:"world_do_Scoring_AddToTheScoreAction",inputs:{VALUE:C(1)}}}},{type:"world_on_Health_RunsOutOfHealthEvent",x:20,y:1600,inputs:{ACTOR:m()},next:{block:{type:"world_do_Goals_LoseTheGameAction"}}},{type:"world_on_Collisions_StartsTouchingEvent",x:20,y:1480,fields:{FILTER0:"actors/door"},inputs:{ACTOR:m()},next:{block:Qo(Ci("actors/gem"),{type:"world_do_Goals_WinTheGameAction"})}},...Ju()]}}),Xu=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b([w("Gravity#ActsAsGroundTrait"),w("Solid Bodies#SolidTrait"),w("Digging#CanBeDugTrait"),{type:"world_set_Digging_ClosesAfterProperty",inputs:{ACTOR:m(),VALUE:C(3)}},{type:"world_set_sprite",fields:{SPRITE:t}}])}},{type:"world_define_tween",id:"ledgeGiveWay",x:320,y:20,fields:{NAME:"give way",CURVE:"linear"},inputs:{SECONDS:C(.25),DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:m(),VALUE:C(.25)}}}}},{type:"world_define_tween",id:"ledgeComeBack",x:320,y:200,fields:{NAME:"come back",CURVE:"linear"},inputs:{SECONDS:C(.25),DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:m(),VALUE:C(1)}}}}},{type:"world_on_Digging_IsDugEvent",x:320,y:380,inputs:{ACTOR:m()},next:{block:{type:"world_play_tween",fields:{TWEEN:"ledgeGiveWay"},inputs:{ACTOR:m()}}}},{type:"world_on_Digging_FillsInEvent",x:20,y:220,inputs:{ACTOR:m()},next:{block:b([{type:"world_play_tween",fields:{TWEEN:"ledgeComeBack"},inputs:{ACTOR:m()}},Qo({block:{type:"logic_compare",fields:{OP:"GT"},inputs:{A:{block:{type:"world_count_of_kind",fields:{TYPE:"actors/pilot"},inputs:{LIST:{block:{type:"world_get_Collisions_ContactsProperty",inputs:{ACTOR:m()}}}}}},B:C(0)}}},{type:"world_do_Health_TakeDamageAction",inputs:{ACTOR:{block:{type:"world_first_actor",inputs:{SOURCE:{block:{type:"world_get_Collisions_ContactsProperty",inputs:{ACTOR:m()}}}}}},VALUE:C(1)}})])}}]}}),qu=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b([w("Gravity#ActsAsGroundTrait"),w("Solid Bodies#SolidTrait"),{type:"world_set_sprite",fields:{SPRITE:t}}])}}]}}),Bn=(e,t,o)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b([w("Gravity#ActsAsGroundTrait"),w("Solid Bodies#SolidTrait"),w(o),{type:"world_set_sprite",fields:{SPRITE:t}}])}}]}}),Zu=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Rung"},next:{block:b([w("Climbing#CanBeClimbedTrait"),w("Gravity#ActsAsGroundTrait"),{type:"world_set_sprite",fields:{SPRITE:"ladder.png"}}])}}]}}),os=(e,t,o,n,r,l)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b([w("Turning#TurnsWhenItHitsSomethingTrait"),w("Boundaries#StaysAcrossTrait"),w("Boundaries#StaysDownTrait"),...n?[w("Gravity#AffectedByGravityTrait")]:[],w("Health#DealsDamageTrait"),w("Teleport#UsesTeleportPadsTrait"),{type:"world_set_Teleport_TakesAnyPadItTouchesProperty",inputs:{ACTOR:m(),VALUE:Tt(!0)}},{type:"world_set_Teleport_TravelSecondsProperty",inputs:{ACTOR:m(),VALUE:C(pn)}},{type:"world_set_sprite",fields:{SPRITE:t}},{type:"world_set_Turning_TurnByProperty",inputs:{ACTOR:m(),VALUE:C(o)}},{type:"world_set_Turning_HeadingProperty",inputs:{ACTOR:m(),VALUE:C(r)}},{type:"world_set_Turning_TravelSpeedProperty",inputs:{ACTOR:m(),VALUE:C(1.8)}},{type:"world_set_Turning_PointsWhereItGoesProperty",inputs:{ACTOR:m(),VALUE:Tt(l)}}])}}]}}),ew=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b([w("Switches#IsASwitchedWallTrait"),w("Gravity#ActsAsGroundTrait"),w("Solid Bodies#SolidTrait"),{type:"world_set_Switches_WallColorProperty",inputs:{ACTOR:m(),VALUE:v(t)}},{type:"world_trait_step",fields:{PHASE:"react",NAME:"look like what it is"},inputs:{DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:m(),VALUE:{block:{type:"logic_ternary",inputs:{IF:{block:{type:"world_get_Collisions_PassesThroughThingsProperty",inputs:{ACTOR:m()}}},THEN:C(.25),ELSE:C(1)}}}}}}}},{type:"world_define_drawing",inputs:{WIDTH:{shadow:{type:"math_number",fields:{NUM:32}}},HEIGHT:{shadow:{type:"math_number",fields:{NUM:32}}},DO:{block:b([R({block:{type:"world_get_Switches_WallColorProperty",inputs:{ACTOR:m()}}}),H(0,0,32,32)])}}}])}}]}}),tw=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b([w("Switches#IsASwitchTrait"),{type:"world_set_Switches_SwitchColorProperty",inputs:{ACTOR:m(),VALUE:v(t)}},{type:"world_define_drawing",inputs:{WIDTH:{shadow:{type:"math_number",fields:{NUM:32}}},HEIGHT:{shadow:{type:"math_number",fields:{NUM:32}}},DO:{block:b([R({block:{type:"world_get_Switches_SwitchColorProperty",inputs:{ACTOR:m()}}}),H(4,20,24,12)])}}}])}}]}}),ow=e=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Pad"},next:{block:b([w("Teleport#IsATeleportPadTrait"),{type:"world_define_drawing",inputs:{WIDTH:{shadow:{type:"math_number",fields:{NUM:32}}},HEIGHT:{shadow:{type:"math_number",fields:{NUM:32}}},DO:{block:b([R({block:{type:"world_get_Teleport_PadColorProperty",inputs:{ACTOR:m()}}}),H(0,22,32,10)])}}}])}},{type:"world_define_tween",id:"padFadeOut",x:320,y:20,fields:{NAME:"fade out",CURVE:"linear"},inputs:{SECONDS:C(e),DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:m(),VALUE:C(0)}}}}},{type:"world_define_tween",id:"padFadeIn",x:320,y:200,fields:{NAME:"fade in",CURVE:"linear"},inputs:{SECONDS:C(e),DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:m(),VALUE:C(1)}}}}},{type:"world_on_Teleport_SendsEvent",x:320,y:380,inputs:{ACTOR:m()},next:{block:{type:"world_play_tween",fields:{TWEEN:"padFadeOut"},inputs:{ACTOR:{block:{type:"world_event_actor"}}}}}},{type:"world_on_Teleport_ReceivesEvent",x:320,y:500,inputs:{ACTOR:m()},next:{block:{type:"world_play_tween",fields:{TWEEN:"padFadeIn"},inputs:{ACTOR:{block:{type:"world_event_actor"}}}}}}]}}),nw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Bat"},next:{block:b([w("Flapping#FlapsAndGlidesTrait"),w("Health#DealsDamageTrait"),w("Teleport#UsesTeleportPadsTrait"),{type:"world_set_Teleport_TakesAnyPadItTouchesProperty",inputs:{ACTOR:m(),VALUE:Tt(!0)}},{type:"world_set_Teleport_TravelSecondsProperty",inputs:{ACTOR:m(),VALUE:C(pn)}},w("Boundaries#StaysAcrossTrait"),w("Boundaries#StaysDownTrait"),{type:"world_set_sprite",fields:{SPRITE:"bat.png"}},{type:"world_set_Flapping_GlideSpeedProperty",inputs:{ACTOR:m(),VALUE:C(1)}},{type:"world_set_Flapping_FlapSpeedProperty",inputs:{ACTOR:m(),VALUE:C(.6)}},{type:"world_set_Flapping_FlapLiftProperty",inputs:{ACTOR:m(),VALUE:C(1.1)}}])}},{type:"world_on_Space_CreatedEvent",x:20,y:220,inputs:{ACTOR:m()},next:{block:{type:"world_set_Flapping_ActorToHuntProperty",inputs:{ACTOR:m(),VALUE:{block:{type:"world_first_actor",inputs:{SOURCE:hn("actors/pilot")}}}}}}}]}}),aw=()=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Spring"},next:{block:b([w("Turning#TurnsWhenItHitsSomethingTrait"),w("Health#DealsDamageTrait"),w("Boundaries#StaysDownTrait"),{type:"world_set_sprite",fields:{SPRITE:"spring.png"}},{type:"world_set_Turning_HeadingProperty",inputs:{ACTOR:m(),VALUE:C(-90)}},{type:"world_set_Turning_TurnByProperty",inputs:{ACTOR:m(),VALUE:C(180)}},{type:"world_set_Turning_TravelSpeedProperty",inputs:{ACTOR:m(),VALUE:C(2.4)}}])}}]}}),rw=()=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Shuriken"},next:{block:b([w("Turning#TurnsWhenItHitsSomethingTrait"),w("Health#DealsDamageTrait"),w("Boundaries#StaysAcrossTrait"),w("Boundaries#StaysDownTrait"),{type:"world_set_sprite",fields:{SPRITE:"shuriken.png"}},{type:"world_set_Turning_HeadingProperty",inputs:{ACTOR:m(),VALUE:C(35)}},{type:"world_set_Turning_BouncesOffWhatStopsItProperty",inputs:{ACTOR:m(),VALUE:Tt(!0)}},{type:"world_set_Turning_TravelSpeedProperty",inputs:{ACTOR:m(),VALUE:C(2)}},{type:"world_trait_step",fields:{PHASE:"react",NAME:"spin"},inputs:{DO:{block:{type:"world_set_Space_RotationProperty",inputs:{ACTOR:m(),VALUE:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:{block:{type:"world_get_Space_RotationProperty",inputs:{ACTOR:m()}}},B:C(9)}}}}}}}}])}}]}}),sw=()=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Eyeball"},next:{block:b([w("Steering#ChasesTrait"),w("Health#DealsDamageTrait"),{type:"world_set_Physics_IgnoresWallsProperty",inputs:{ACTOR:m(),VALUE:Tt(!0)}},{type:"world_set_Steering_ChaseSpeedProperty",inputs:{ACTOR:m(),VALUE:C(.55)}},{type:"world_set_sprite",fields:{SPRITE:"eyeball.png"}}])}},{type:"world_on_Space_CreatedEvent",x:20,y:220,inputs:{ACTOR:m()},next:{block:{type:"world_set_Steering_ActorToChaseProperty",inputs:{ACTOR:m(),VALUE:{block:{type:"world_first_actor",inputs:{SOURCE:hn("actors/pilot")}}}}}}}]}}),iw=(e,t)=>({block:{type:"math_random_int",inputs:{FROM:C(e),TO:C(t)}}}),lw=()=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Blob"},next:{block:b([w("Time#HasATimerTrait"),w("Health#DealsDamageTrait"),w("Gravity#AffectedByGravityTrait"),w("Boundaries#StaysAcrossTrait"),{type:"world_set_sprite",fields:{SPRITE:"blob.png"}},{type:"world_set_Time_TimerPeriodProperty",inputs:{ACTOR:m(),VALUE:C(.7)}}])}},{type:"world_on_Time_TimerFiresEvent",x:20,y:220,inputs:{ACTOR:m()},next:{block:{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:m(),VALUE:{block:{type:"world_vector_of",inputs:{X:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:iw(-1,1),B:C(.9)}}},Y:{block:{type:"world_vector_component",fields:{COMPONENT:"y"},inputs:{VEC:{block:{type:"world_get_Physics_VelocityProperty",inputs:{ACTOR:m()}}}}}}}}}}}}}]}}),dw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Robot"},next:{block:b([w("Gravity#AffectedByGravityTrait"),w("Climbing#ClimbsTrait"),w("Prowling#ProwlsTrait"),w("Boundaries#StaysAcrossTrait"),w("Health#DealsDamageTrait"),w("Teleport#UsesTeleportPadsTrait"),{type:"world_set_Teleport_TakesAnyPadItTouchesProperty",inputs:{ACTOR:m(),VALUE:Tt(!0)}},{type:"world_set_Teleport_TravelSecondsProperty",inputs:{ACTOR:m(),VALUE:C(pn)}},{type:"world_set_sprite",fields:{SPRITE:"robot.png"}},{type:"world_set_Prowling_GoingProperty",inputs:{ACTOR:m(),VALUE:C(-1)}}])}},{type:"world_on_Space_CreatedEvent",x:20,y:200,inputs:{ACTOR:m()},next:{block:{type:"world_set_Prowling_ActorToHuntProperty",inputs:{ACTOR:m(),VALUE:{block:{type:"world_first_actor",inputs:{SOURCE:hn("actors/pilot")}}}}}}}]}}),cw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Door"},next:{block:b([w("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"door.png"}},{type:"world_trait_step",fields:{PHASE:"react",NAME:"open when the gems are gone"},inputs:{DO:{block:Qo(Ci("actors/gem"),{type:"world_set_sprite",fields:{SPRITE:"doorOpen.png"},inputs:{ACTOR:m()}})}}}])}}]}}),hw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Scoreboard"},next:{block:b([ye("actors/label"),w("Scoring#WatchesTheScoreTrait"),w("Goals#WatchesTheEndingTrait"),{type:"world_show_as",fields:{ICON:"text"}},O("TextProperty",{block:{type:"text",fields:{TEXT:"COINS 0"}}}),{type:"world_define_drawing",inputs:{WIDTH:{shadow:{type:"math_number",fields:{NUM:96}}},HEIGHT:{shadow:{type:"math_number",fields:{NUM:24}}},DO:{block:b([R({block:{type:"world_get_ActorsLabel_TextColorProperty",inputs:{ACTOR:m()}}}),on(48,12)])}}}])}},{type:"world_on_Scoring_SeesTheScoreChangeEvent",x:20,y:340,inputs:{ACTOR:m()},next:{block:O("TextProperty",{block:{type:"text",fields:{TEXT:"COINS "},inputs:{ADD:{block:{type:"world_as_text",inputs:{VALUE:{block:{type:"world_get_Scoring_ScoreProperty"}}}}}}}})}},{type:"world_on_Goals_SeesTheGameWonEvent",x:20,y:460,inputs:{ACTOR:m()},next:{block:O("TextProperty",{block:{type:"text",fields:{TEXT:"YOU MADE IT OUT"}}})}},{type:"world_on_Goals_SeesTheGameLostEvent",x:20,y:580,inputs:{ACTOR:m()},next:{block:O("TextProperty",{block:{type:"text",fields:{TEXT:"CAUGHT"}}})}}]}}),Nn=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b([w("Collection#CanBeCollectedTrait"),{type:"world_set_sprite",fields:{SPRITE:t}}])}}]}}),pw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Fuel Bar"},next:{block:b([ye("actors/progressBar"),{type:"world_show_as",fields:{ICON:"bar"}},{type:"world_set_Space_ScaleProperty",inputs:{ACTOR:m(),X:C(1.5),Y:C(2)}},{type:"world_trait_step",fields:{PHASE:"react",NAME:"follow the tank"},inputs:{DO:{block:{type:"world_set_ActorsProgressBar_FractionProperty",inputs:{ACTOR:m(),VALUE:{block:{type:"world_query_Jetpack_FuelFractionQuery",inputs:{ACTOR:{block:{type:"world_first_actor",inputs:{SOURCE:hn("actors/pilot")}}}}}}}}}}}])}}]}}),uw=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Jetpack"},next:{block:b([{type:"world_set_view_size",inputs:{X:C(jo),Y:C(Ko)}},{type:"world_load_map",fields:{MAP:"maps/jetpack"}}])}}]}}),ww={folders:["worlds","actors","rules","maps","sprites","animations"],files:{main:{name:"main.world",language:"world",contents:uw,folderId:"worlds",active:!0,open:!0},pilotActor:{name:"pilot.actor",language:"actor",contents:zu,folderId:"actors"},wallActor:{name:"wall.actor",language:"actor",contents:qu("Wall","wall.png"),folderId:"actors"},ledgeActor:{name:"ledge.actor",language:"actor",contents:Xu("Ledge","ground.png"),folderId:"actors"},beltActor:{name:"belt.actor",language:"actor",contents:Bn("Belt","conveyor.png","Surfaces#ConveysTrait"),folderId:"actors"},iceActor:{name:"ice.actor",language:"actor",contents:Bn("Ice","ice.png","Surfaces#SlipperyTrait"),folderId:"actors"},sludgeActor:{name:"sludge.actor",language:"actor",contents:Bn("Sludge","sludge.png","Surfaces#SlowsTrait"),folderId:"actors"},robotActor:{name:"robot.actor",language:"actor",contents:dw,folderId:"actors"},ballActor:{name:"ball.actor",language:"actor",contents:os("Steel Ball","pinball.png",180,!0,Wu,!1),folderId:"actors"},rocketActor:{name:"rocket.actor",language:"actor",contents:os("Rocket","rocket.png",90,!1,Hu,!0),folderId:"actors"},batActor:{name:"bat.actor",language:"actor",contents:nw,folderId:"actors"},springActor:{name:"spring.actor",language:"actor",contents:aw(),folderId:"actors"},shurikenActor:{name:"shuriken.actor",language:"actor",contents:rw(),folderId:"actors"},eyeballActor:{name:"eyeball.actor",language:"actor",contents:sw(),folderId:"actors"},blobActor:{name:"blob.actor",language:"actor",contents:lw(),folderId:"actors"},padActor:{name:"pad.actor",language:"actor",contents:ow(pn/2),folderId:"actors"},barActor:{name:"bar.actor",language:"actor",contents:ew("Bar","#c8a02c"),folderId:"actors"},plateActor:{name:"plate.actor",language:"actor",contents:tw("Plate","#c8a02c"),folderId:"actors"},coinActor:{name:"coin.actor",language:"actor",contents:JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Coin"},next:{block:b([w("Collection#CanBeCollectedTrait"),na("coinSpin")])}}]}}),folderId:"actors"},gemActor:{name:"gem.actor",language:"actor",contents:Nn("Gem","gem.png"),folderId:"actors"},doorActor:{name:"door.actor",language:"actor",contents:cw,folderId:"actors"},scoreboardActor:{name:"scoreboard.actor",language:"actor",contents:hw,folderId:"actors"},ladderActor:{name:"ladder.actor",language:"actor",contents:Zu,folderId:"actors"},fuelCanActor:{name:"fuelCan.actor",language:"actor",contents:Nn("Fuel Can","fuelCan.png"),folderId:"actors"},fuelSmallActor:{name:"fuelSmall.actor",language:"actor",contents:Nn("Small Can","fuelCanSmall.png"),folderId:"actors"},labelActorFile:{name:"label.actor",language:"actor",contents:jt,folderId:"actors"},progressBarActor:{name:"progressBar.actor",language:"actor",contents:pa,folderId:"actors"},fuelBarActor:{name:"fuelBar.actor",language:"actor",contents:pw,folderId:"actors"},jetpackMap:{name:"jetpack.map",language:"map",contents:$u,folderId:"maps"},motionRuleFile:{name:"motion.rule",language:"rule",contents:_("motion"),folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:_("collisions"),folderId:"rules"},solidRuleFile:{name:"solid.rule",language:"rule",contents:_("solid"),folderId:"rules"},gravityRuleFile:{name:"gravity.rule",language:"rule",contents:_("gravity"),folderId:"rules"},jumpRuleFile:{name:"jump.rule",language:"rule",contents:_("jump"),folderId:"rules"},jetpackRuleFile:{name:"jetpack.rule",language:"rule",contents:_("jetpack"),folderId:"rules"},inputRuleFile:{name:"input.rule",language:"rule",contents:_("input"),folderId:"rules"},arrowsRuleFile:{name:"arrows.rule",language:"rule",contents:_("arrows"),folderId:"rules"},boundsRuleFile:{name:"bounds.rule",language:"rule",contents:_("bounds"),folderId:"rules"},prowlingRuleFile:{name:"prowling.rule",language:"rule",contents:_("prowling"),folderId:"rules"},turningRuleFile:{name:"turning.rule",language:"rule",contents:_("turning"),folderId:"rules"},timeRuleFile:{name:"time.rule",language:"rule",contents:_("time"),folderId:"rules"},steeringRuleFile:{name:"steering.rule",language:"rule",contents:_("steering"),folderId:"rules"},flappingRuleFile:{name:"flapping.rule",language:"rule",contents:_("flapping"),folderId:"rules"},teleportRuleFile:{name:"teleport.rule",language:"rule",contents:_("teleport"),folderId:"rules"},switchesRuleFile:{name:"switches.rule",language:"rule",contents:_("switches"),folderId:"rules"},diggingRuleFile:{name:"digging.rule",language:"rule",contents:_("digging"),folderId:"rules"},healthRuleFile:{name:"health.rule",language:"rule",contents:_("health"),folderId:"rules"},scoreRuleFile:{name:"score.rule",language:"rule",contents:_("score"),folderId:"rules"},goalsRuleFile:{name:"goals.rule",language:"rule",contents:_("goals"),folderId:"rules"},surfacesRuleFile:{name:"surfaces.rule",language:"rule",contents:_("surfaces"),folderId:"rules"},climbRuleFile:{name:"climb.rule",language:"rule",contents:_("climb"),folderId:"rules"},collectRuleFile:{name:"collect.rule",language:"rule",contents:_("collect"),folderId:"rules"},...De(["pilot","ground","wall","ladder","conveyor","ice","sludge","coin","gem","door","doorOpen","pinball","rocket","robot","bat","spring","shuriken","eyeball","blob","fuelCan","fuelCanSmall"]),...ad(["pilotFly","pilotClimb","coinSpin"])},open:["main"]},Jo=e=>e*F+F/2,j=()=>({block:{type:"world_this_actor"}}),x=e=>({block:{type:"math_number",fields:{NUM:e}}}),_o={id:"meteorsBallVar",name:"ball",type:"Actor"},yw=JSON.stringify({variables:[_o],blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Ship"},next:{block:b([w("Arrow Drive#DrivenByArrowKeysTrait"),w("Input#TakesKeyboardInputTrait"),w("Screen Wrap#WrapsAcrossTrait"),w("Screen Wrap#WrapsDownTrait"),w("Zapping#ZapsTrait"),w("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"ship.png"}}])}},{type:"world_on_Input_PressesEvent",fields:{FILTER0:"space"},x:20,y:300,next:{block:{type:"world_do_Zapping_MakeZapAction",inputs:{VALUE:j()}}}},{type:"world_on_Zapping_ZapsEvent",x:20,y:440,next:{block:{type:"world_add_actor",fields:{ACTOR:"actors/energyBall",NAMED:"named",VAR:_o},extraState:{named:!0},inputs:{DO:{block:b([{type:"world_set_position",inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:_o}}},X:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:j()}}},Y:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"y"},inputs:{ACTOR:j()}}}}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"variables_get_Actor",fields:{VAR:_o}}},VALUE:{block:{type:"world_vector_rotate",inputs:{VECTOR:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-6}}}},DEGREES:{block:{type:"world_get_Space_RotationProperty",inputs:{ACTOR:j()}}}}}}}}])}}}}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:"actors/meteor"},x:520,y:300,inputs:{ACTOR:j()},next:{block:{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:"Ship lost!"}}}}}}}]}}),gw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Energy Ball"},next:{block:b([w("Physics#CanMoveTrait"),w("Collisions#CanCollideTrait"),w("Expiry#ExpiresTrait"),cn("world_set_Expiry_LifetimeProperty",1.2),{type:"world_set_sprite",fields:{SPRITE:"energyBall.png"}}])}}]}}),mw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Meteor"},next:{block:b([w("Physics#CanMoveTrait"),w("Screen Wrap#WrapsAcrossTrait"),w("Screen Wrap#WrapsDownTrait"),w("Collisions#CanCollideTrait"),{type:"world_set_sprite",fields:{SPRITE:"asteroid.png"}}])}},{type:"world_on_Collisions_StartsTouchingEvent",fields:{FILTER0:"actors/energyBall"},x:20,y:300,inputs:{ACTOR:j()},next:{block:b([{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:"Rock broken up!"}}}}},{type:"world_remove_actor",inputs:{ACTOR:{block:{type:"world_event_actor"}}}},{type:"world_remove_actor",inputs:{ACTOR:j()}}])}}]}}),Aw=(e,t)=>({type:"world_add_actor",fields:{ACTOR:"actors/meteor"},inputs:{DO:{block:b([{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:x(Jo(e)),Y:x(Jo(t))}},{type:"world_set_Physics_VelocityProperty",inputs:{ACTOR:{block:{type:"world_this_actor"}},VALUE:{block:{type:"world_vector_rotate",inputs:{VECTOR:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-1.2}}}},DEGREES:{block:{type:"math_random_int",inputs:{FROM:x(0),TO:x(359)}}}}}}}}])}}}),fw=[[1,1],[5,0],[8,2],[8,7],[4,9],[1,6]],bw=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Asteroids"},next:{block:b([{type:"world_add_actor",fields:{ACTOR:"actors/ship"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:{block:{type:"world_this_actor"}},X:x(Jo(4)),Y:x(Jo(4))}}}}},...fw.map(([e,t])=>Aw(e,t))])}}]}}),Tw={inputRuleFile:{name:"input.rule",language:"rule",contents:_("input"),folderId:"rules"},driveRuleFile:{name:"drive.rule",language:"rule",contents:_("drive"),folderId:"rules"},motionRuleFile:{name:"motion.rule",language:"rule",contents:_("motion"),folderId:"rules"},collisionsRuleFile:{name:"collisions.rule",language:"rule",contents:_("collisions"),folderId:"rules"},wrapRuleFile:{name:"wrap.rule",language:"rule",contents:_("wrap"),folderId:"rules"},zapsRuleFile:{name:"zaps.rule",language:"rule",contents:_("zaps"),folderId:"rules"},expiresRuleFile:{name:"expires.rule",language:"rule",contents:_("expires"),folderId:"rules"},...De(["ship","asteroid","energyBall"])},_w={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:bw,folderId:"worlds",active:!0,open:!0},ship:{name:"ship.actor",language:"actor",contents:yw,folderId:"actors"},energyBall:{name:"energyBall.actor",language:"actor",contents:gw,folderId:"actors"},meteor:{name:"meteor.actor",language:"actor",contents:mw,folderId:"actors"},...Tw},open:["main"]},aa=["The door creaks open. Someone is standing in the hall.","“You came,” she says. “I wasn’t sure that you would.”","Answer her? Press the LEFT arrow for yes, the RIGHT arrow for no.","“I said I would.” She looks at the floor, and then at you.","You say nothing at all. The hall is very quiet.","The door closes behind you, and that is that."],kw=6,at=()=>({block:{type:"world_actor_kind",fields:{ACTOR:"actors/speechBox"}}}),ns=()=>({block:{type:"world_actor_kind",fields:{ACTOR:"actors/portrait"}}}),Ew=e=>({block:{type:"world_get_Conversation_LineProperty",inputs:{ACTOR:e}}}),xt=e=>({block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:Ew(at()),B:x(e)}}}),vi=(e,t=at())=>({type:"world_do_ActorsSpeechBox_SayAction",inputs:{ACTOR:t,VALUE:{block:{type:"text",fields:{TEXT:e}}}}}),Cw="The Hall. Press SPACE to begin.",as=(e,t,o)=>({type:"world_play_tween_here",fields:{CURVE:"ending slowly"},inputs:{ACTOR:e,SECONDS:x(o),DO:{block:{type:"world_set_Appearance_OpacityProperty",inputs:{ACTOR:j(),VALUE:x(t)}}}}}),vw=()=>{const e=aa.map((t,o)=>{const n=[vi(t)];return o===0&&n.push(as(ns(),1,.4)),o===aa.length-1&&n.push(as(ns(),0,.3)),{test:xt(o+1),body:n}});return{type:"controls_if",extraState:{elseIfCount:e.length-1},inputs:Object.fromEntries(e.flatMap((t,o)=>[[`IF${o}`,t.test],[`DO${o}`,{block:b(t.body)}]]))}},Mn=(e,t,o)=>({type:"world_on_Input_IsPressedEvent",fields:{FILTER0:e},x:420,y:t,next:{block:b(o)}}),Ow=()=>({type:"world_do_Conversation_MakeSayTheNextThingAction",inputs:{VALUE:at()}}),Dn=e=>({type:"world_do_Conversation_SendToLineAction",inputs:{WHO:at(),WHICH:x(e)}}),Rw=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"The Hall"},next:{block:b([{type:"world_set_map_size",inputs:{X:x(10),Y:x(10)}},{type:"world_add_actor",fields:{ACTOR:"actors/portrait"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:j(),X:x(160),Y:x(110)}}}}},{type:"world_add_actor",fields:{ACTOR:"actors/speechBox"},inputs:{DO:{block:b([{type:"world_set_position",inputs:{ACTOR:j(),X:x(160),Y:x(250)}},{type:"world_add_trait",fields:{TRAIT:"Conversation#HasAConversationTrait"},inputs:{ACTOR:j()}},{type:"world_set_Conversation_HowManyLinesProperty",inputs:{ACTOR:j(),VALUE:x(aa.length)}},vi(Cw,j())])}}}])}},{type:"world_on_Conversation_MovesToALineEvent",x:20,y:320,inputs:{ACTOR:at()},next:{block:vw()}},Mn("space",60,[{type:"controls_if",extraState:{hasElse:!0},inputs:{IF0:{block:{type:"world_query_Conversation_IsTalkingQuery",inputs:{ACTOR:at()}}},DO0:{block:{type:"controls_if",extraState:{hasElse:!0},inputs:{IF0:{block:{type:"logic_operation",fields:{OP:"OR"},inputs:{A:xt(4),B:xt(5)}}},DO0:{block:Dn(kw)},ELSE:{block:Ow()}}}},ELSE:{block:{type:"world_do_Conversation_MakeStartTalkingAction",inputs:{VALUE:at()}}}}}]),Mn("left arrow",260,[{type:"controls_if",inputs:{IF0:xt(3),DO0:{block:Dn(4)}}}]),Mn("right arrow",420,[{type:"controls_if",inputs:{IF0:xt(3),DO0:{block:Dn(5)}}}])]}}),Sw={folders:["worlds","actors","rules","sprites"],files:{main:{name:"main.world",language:"world",contents:Rw,folderId:"worlds",active:!0,open:!0},label:{name:"label.actor",language:"actor",contents:jt,folderId:"actors"},speechBox:{name:"speechBox.actor",language:"actor",contents:ui,folderId:"actors"},portrait:{name:"portrait.actor",language:"actor",contents:li,folderId:"actors"},"rule-time":{name:"time.rule",language:"rule",contents:_("time"),folderId:"rules"},"rule-conversation":{name:"conversation.rule",language:"rule",contents:_("conversation"),folderId:"rules"},"rule-input":{name:"input.rule",language:"rule",contents:_("input"),folderId:"rules"},...De(["player"])},open:["main"]},Iw=_e(Sw),ra=["##########","#........#","#..$..*..#","#........#","#...@....#","#........#","#..$..*..#","#........#","#........#","##########"],Pw=ra.flatMap((e,t)=>[...e].flatMap((o,n)=>{const r=(l,u)=>[Te(l,`${u}${n}_${t}`,K(n),K(t))];return o==="#"?r("actors/wall","Wall"):o==="$"?r("actors/crate","Crate"):o==="*"?r("actors/target","Target"):o==="@"?r("actors/player","Player"):[]})),Oi=(e,t)=>({block:{type:"world_is_a",fields:{TYPE:t},inputs:{ACTOR:e}}}),Ri=(e,t)=>({id:e,name:t,type:"Actor"}),Io=Ri("sokobanCrateVar","crate"),Po=Ri("sokobanTargetVar","target"),Si=e=>({id:e.id,name:e.name}),Ii=(e,t,o)=>({block:{type:"world_filter_actors",fields:{VAR:Si(e)},inputs:{SOURCE:t,WHERE:o}}}),Pi=()=>({block:{type:"world_all_actors"}}),zo=e=>({block:{type:"variables_get_Actor",fields:{VAR:Si(e)}}}),xw=(e,t)=>({block:{type:"world_vector_length",inputs:{VECTOR:{block:{type:"world_vector_math",fields:{OP:"SUBTRACT"},inputs:{A:e,B:t}}}}}}),rs=e=>({block:{type:"world_vector_of",inputs:{X:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"x"},inputs:{ACTOR:e}}},Y:{block:{type:"world_get_Space_PositionProperty",fields:{COMPONENT:"y"},inputs:{ACTOR:e}}}}}}),Bw=e=>({block:{type:"world_any_actors",inputs:{LIST:e}}}),Nw=e=>({block:{type:"logic_negate",inputs:{BOOL:e}}}),xi=(e,t)=>({block:{type:"logic_operation",fields:{OP:"AND"},inputs:{A:e,B:t}}}),Mw=(e,t)=>({block:{type:"logic_compare",fields:{OP:"LT"},inputs:{A:e,B:t}}}),Dw=e=>Bw(Ii(Po,Pi(),xi(Oi(zo(Po),"actors/target"),Mw(xw(rs(e),rs(zo(Po))),x(F/2))))),Lw=()=>Ii(Io,Pi(),xi(Oi(zo(Io),"actors/crate"),Nw(Dw(zo(Io))))),Uw=()=>({block:{type:"logic_compare",fields:{OP:"EQ"},inputs:{A:{block:{type:"world_count_actors",inputs:{ACTOR:Lw()}}},B:x(0)}}}),Ww=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Player"},next:{block:b([w("Grid#StepsOnTheGridTrait"),w("Input#TakesKeyboardInputTrait"),{type:"world_set_sprite",fields:{SPRITE:"player.png"}}])}},...[["up arrow","StepUpAction",320],["down arrow","StepDownAction",420],["left arrow","StepLeftAction",520],["right arrow","StepRightAction",620]].map(([e,t,o])=>({type:"world_on_Input_PressesEvent",fields:{FILTER0:e},x:20,y:o,inputs:{ACTOR:j()},next:{block:{type:`world_do_Grid_${t}`,inputs:{ACTOR:j()}}}}))]}}),Hw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Wall"},next:{block:b([w("Grid#FillsATileTrait"),{type:"world_set_sprite",fields:{SPRITE:"wall.png"}}])}}]}}),Fw=JSON.stringify({variables:[Io,Po],blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Crate"},next:{block:b([w("Grid#StepsOnTheGridTrait"),w("Grid#FillsATileTrait"),w("Grid#CanBePushedTrait"),{type:"world_set_sprite",fields:{SPRITE:"box.png"}},{type:"world_define_drawing",inputs:{WIDTH:{shadow:{type:"math_number",fields:{NUM:F}}},HEIGHT:{shadow:{type:"math_number",fields:{NUM:F}}},DO:{block:b([{type:"world_pen_fill",inputs:{COLOR:{block:{type:"colour_picker",fields:{COLOUR:"#d8a032"}}}}},{type:"world_draw_rectangle",inputs:{X:x(F/2-6),Y:x(F/2-6),WIDTH:x(12),HEIGHT:x(12)}}])}}}])}},{type:"world_on_Grid_FinishesAStepEvent",x:20,y:320,inputs:{ACTOR:j()},next:{block:{type:"controls_if",inputs:{IF0:Uw(),DO0:{block:{type:"world_print",inputs:{VALUE:{shadow:{type:"text",fields:{TEXT:"Solved!"}}}}}}}}}}]}}),Gw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Target"}}]}}),Vw=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Sokoban"},next:{block:{type:"world_load_map",fields:{MAP:"maps/level1"}}}}]}}),$w=JSON.stringify({type:"map",size:{width:ra[0].length,height:ra.length},tile:{width:32,height:32},actors:Pw},null,2),Yw={folders:["worlds","actors","maps","rules","sprites"],files:{main:{name:"main.world",language:"world",contents:Vw,folderId:"worlds"},player:{name:"player.actor",language:"actor",contents:Ww,folderId:"actors"},wall:{name:"wall.actor",language:"actor",contents:Hw,folderId:"actors"},crate:{name:"crate.actor",language:"actor",contents:Fw,folderId:"actors"},target:{name:"target.actor",language:"actor",contents:Gw,folderId:"actors"},level1:{name:"level1.map",language:"map",contents:$w,folderId:"maps"},"rule-grid":{name:"grid.rule",language:"rule",contents:_("grid"),folderId:"rules"},"rule-input":{name:"input.rule",language:"rule",contents:_("input"),folderId:"rules"},...De(["player","wall","box"])},open:["main"]},jw=_e(Yw),Bi="actors/coin",ss="actors/scoreboard",Kw={block:{type:"world_actor_kind",fields:{ACTOR:"actors/label"}}},Ni={id:"tapperScoreVar",name:"score label",type:"Actor"},Ln=()=>({block:{type:"variables_get_Actor",fields:{VAR:Ni}}}),Mi=()=>({block:{type:"world_get_WorldsMain_ScoreProperty"}}),is=e=>({type:"world_set_ActorsLabel_TextProperty",inputs:{ACTOR:e,VALUE:{block:{type:"text",fields:{TEXT:"Score: "},inputs:{ADD:{block:{type:"world_as_text",inputs:{VALUE:Mi()}}}}}}}}),ls=e=>({block:{type:"world_actor_kind",fields:{ACTOR:e}}}),ds=e=>({block:{type:"world_vector_component",fields:{COMPONENT:e},inputs:{VEC:{block:{type:"world_mouse_position"}}}}}),Di=(e,t)=>JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:e},next:{block:b(t)}}]}}),Qw=[["TAPPER",16,"#ffffff",14],["click a coin",282,"#8890b0",9],["the right button too",306,"#8890b0",9]],Un=(e,t)=>({type:`world_set_ActorsLabel_${e}`,inputs:{ACTOR:j(),VALUE:t}}),Jw=([e,t,o,n])=>({type:"world_add_actor",fields:{ACTOR:"actors/label"},inputs:{DO:{block:b([{type:"world_set_position",inputs:{ACTOR:j(),X:x(160),Y:x(t)}},Un("TextProperty",{shadow:{type:"text",fields:{TEXT:e}}}),Un("TextColorProperty",{shadow:{type:"colour_picker",fields:{COLOUR:o}}}),Un("TextSizeProperty",x(n))])}}}),Wn={id:"tapperRowVar",name:"row",type:"Number"},Hn={id:"tapperColumnVar",name:"column",type:"Number"},ko=e=>({block:{type:"variables_get_Number",fields:{VAR:e}}}),We=(e,t,o)=>({block:{type:"math_arithmetic",fields:{OP:e},inputs:{A:t,B:o}}}),cs=(e,t)=>({type:"world_count_with",fields:{VAR:e},inputs:{FROM:x(0),TO:x(2),BY:x(1),DO:{block:t}}}),zw=cs(Wn,cs(Hn,{type:"world_add_actor",fields:{ACTOR:Bi},inputs:{DO:{block:b([{type:"world_set_position",inputs:{ACTOR:j(),X:We("ADD",x(48),We("MULTIPLY",ko(Hn),x(96))),Y:We("ADD",x(48),We("MULTIPLY",ko(Wn),x(96)))}},{type:"world_set_Spin_SpinSpeedProperty",inputs:{ACTOR:j(),VALUE:We("ADD",x(40),We("MULTIPLY",We("ADD",We("MULTIPLY",ko(Wn),x(3)),ko(Hn)),x(35)))}}])}}})),Xw=Di("Coin",[w("Mouse#CanBeClickedTrait"),w("Spin#SpinTrait"),{type:"world_set_sprite",fields:{SPRITE:"coin.png"}}]),qw=Di("Scoreboard",[w("Mouse#TakesMouseInputTrait"),{type:"world_set_sprite",fields:{SPRITE:"switch.png#0"}}]),Zw=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Crosshair"},next:{block:b([{type:"world_set_sprite",fields:{SPRITE:"switch.png#1"}},w("Spin#SpinTrait"),{type:"world_trait_step",fields:{PHASE:"sense",NAME:"follow the pointer"},inputs:{DO:{block:{type:"world_set_position",inputs:{ACTOR:j(),X:ds("x"),Y:ds("y")}}}}}])}}]}}),ey=JSON.stringify({blocks:{blocks:[{type:"world_rule",x:20,y:20,fields:{NAME:"Spin",ABILITY:"Spins"}},{type:"world_rule_trait",x:20,y:120,fields:{NAME:"Spin",SUBJECT:"actor"},next:{block:b([{type:"world_rule_property",fields:{TYPE:"number",ACCESS:"writable",NAME:"spin speed",DEFAULT:"120"}},{type:"world_trait_step",fields:{PHASE:"decide",NAME:"spin"},inputs:{DO:{block:{type:"world_set_Space_RotationProperty",inputs:{ACTOR:j(),VALUE:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:{block:{type:"world_get_Space_RotationProperty",inputs:{ACTOR:j()}}},B:{block:{type:"math_arithmetic",fields:{OP:"MULTIPLY"},inputs:{A:{block:{type:"world_get_Spin_SpinSpeedProperty",inputs:{ACTOR:j()}}},B:{block:{type:"world_step_delta"}}}}}}}}}}}}}])}}]}}),ty=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Tapper"},next:{block:b([{type:"world_rule_property",fields:{TYPE:"number",ACCESS:"writable",NAME:"score",DEFAULT:"0"}},{type:"world_define_layer",fields:{NAME:"Game"},inputs:{DO:{block:b([zw,{type:"world_add_actor",fields:{ACTOR:ss}},{type:"world_add_actor",fields:{ACTOR:"actors/crosshair"}}])}}},{type:"world_define_layer",fields:{NAME:"Interface"},inputs:{DO:{block:b([{type:"world_layer_fixed",fields:{FIXED:"fixed"}},{type:"world_add_actor",fields:{ACTOR:"actors/label",NAMED:"named",VAR:Ni},extraState:{named:!0},inputs:{DO:{block:b([{type:"world_set_position",inputs:{ACTOR:Ln(),X:x(48),Y:x(16)}},{type:"world_set_ActorsLabel_TextColorProperty",inputs:{ACTOR:Ln(),VALUE:{shadow:{type:"colour_picker",fields:{COLOUR:"#ffcc00"}}}}},is(Ln())])}}},...Qw.map(Jw)])}}}])}},{type:"world_on_Mouse_IsPressedEvent",fields:{FILTER0:"left"},x:20,y:700,next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_mouse_position"}}}}}},{type:"world_on_Mouse_IsClickedWithEvent",fields:{FILTER0:""},x:520,y:700,inputs:{ACTOR:ls(Bi)},next:{block:b([{type:"world_set_WorldsMain_ScoreProperty",inputs:{VALUE:{block:{type:"math_arithmetic",fields:{OP:"ADD"},inputs:{A:Mi(),B:x(1)}}}}},is(Kw),{type:"world_remove_actor",inputs:{ACTOR:j()}}])}},{type:"world_on_Mouse_PressesMouseButtonEvent",fields:{FILTER0:""},x:520,y:880,inputs:{ACTOR:ls(ss)},next:{block:{type:"world_print",inputs:{VALUE:{block:{type:"world_event_value"}}}}}}]}}),oy={folders:["actors","rules","worlds","sprites"],files:{main:{name:"main.world",language:"world",contents:ty,folderId:"worlds",active:!0,open:!0},spinRule:{name:"spin.rule",language:"rule",contents:ey,folderId:"rules"},coin:{name:"coin.actor",language:"actor",contents:Xw,folderId:"actors"},scoreboard:{name:"scoreboard.actor",language:"actor",contents:qw,folderId:"actors"},crosshair:{name:"crosshair.actor",language:"actor",contents:Zw,folderId:"actors"},labelActorFile:{name:"label.actor",language:"actor",contents:jt,folderId:"actors"},mouseRuleFile:{name:"mouse.rule",language:"rule",contents:_("mouse"),folderId:"rules"},...De(["coin","switch"])},open:["main"]},ny=_e(oy),Pa=["simple","breakout","meteors","flappy","jetpack","tapper","sokoban","novel","interface","empty"],ay="simple",ry=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"My World"}}]}}),hs={folders:["rules","worlds","actors","animations","sprites","backgrounds","maps","effects"],files:{main:{name:"main.world",language:"world",contents:ry,folderId:"worlds",active:!0,open:!0}},open:["main"]},xa={simple:{name:"Platformer",description:"The starter project: gravity, arrow keys, and a room with coins to collect — two on the floor and one that has to be jumped for — a score to reach, and something walking about that will damage you.",source:id.source,instructions:"## World Lab\n\nBuild a game world in code. Edit the world and actors under `worlds/` and `actors/`.\n\n- The preview runs your game as you edit\n- Click the preview, then use the arrow keys to move the player, and space to jump\n- Walk into a coin to take it: the coin is `Can Be Collected` and the player `Collects`, the Scoreboard adds ten, and the Console counts what it has\n- Take all three and you win; the Scoreboard says so\n- Avoid the Crawler, which walks its beat and takes a heart off you each time it touches — watch the bar at the top right, and three and it is over\n- Animations are files under `animations/`: open one to edit its frames\n- `console.log` output appears in the Console\n- Try changing the player’s start position, gravity, or move speed — or make the ball collectible too, which is one row in `ball.actor`"},breakout:{name:"Breakout",description:"A paddle, a bouncing ball, and two rows of bricks to clear. Every mechanic in it is a stock rule.",source:Zc(_e(iu).source,zc("pauseMenu")).source,instructions:"## Breakout\n\nClear the bricks without losing the ball.\n\n- Click the preview, then use the left and right arrow keys\n- The bricks are `Can Be Collected` and the ball `Collects` them — the Console counts what it has taken\n- The room is open at the bottom: `when ⟨Ball⟩ leaves the map` is how it notices\n- Press P to pause: the stock Pause Menu map loads over the game, which stops moving and keeps listening. Resume takes it away; Quit starts the level over. Open `maps/pauseMenu.map` to move it\n- Try a bouncier ball, a wider paddle, or a third row of bricks"},meteors:{name:"Meteors",description:"A ship that turns and thrusts, rocks that drift and wrap, and a zapper with a recharge. Arrow Drive, Screen Wrap, Zapping and Expiry.",source:_e(_w).source,instructions:`## Meteors

Turn, thrust, and zap the rocks.

- Click the preview, then left and right to TURN and up to thrust — there is no friction, so you drift
- Space zaps. \`make ⟨this actor⟩ zap\` asks; the recharge time answers
- A zap sends whatever the \`zaps\` handler makes — look in \`ship.actor\`
- Everything wraps at the edges, which is what makes a small map a whole world`},flappy:{name:"Flappy",description:"A bird that only falls, a key that un-falls it, and a level 48 tiles wide — the first scenario whose map is bigger than the screen, so the camera has something to do.",source:_e(Eu).source,instructions:`## Flappy

Fly through the gaps. The up arrow is the only control.

- Click the preview, then press up to flap — the bird is always falling and always moving right
- The level is **48 tiles wide** and the screen is ten, so most of it is off to the right. \`Camera Follow\` brings it to you and \`Camera Confined\` stops the view at the ends
- The flap **sets** the speed rather than pushing: a push would add up, and every flap should be the same height
- A coin in each gap is the score. Touching a pipe says so and lets you fly on — there is no restart yet
- Try a wider gap, a heavier bird (\`amount of gravity\`), or a look offset on the camera so it shows more of what is coming`},jetpack:{name:"Jetpack",description:"A room 26 by 16 with all of it on screen at once, and a tank that empties while you fly around it — the first level that is a place rather than a corridor, and the first with something that runs out.",source:_e(ww).source,instructions:'## Jetpack\n\nHold space to fly. Arrows to walk. Land on the cans.\n\n- Click the preview, then HOLD space — the jetpack is a **force**, so you sink for a moment before you rise, and you keep rising after you let go\n- The bar over the ceiling is the tank. Four seconds of holding empties it, and then the same key is only a weak hop\n- A big can fills it; a small one is half. Nothing here knows a can is fuel except the Pilot — the can only knows it can be collected\n- The press does BOTH `make jump` and `start flying`, with no question round either: `start flying` does nothing on an empty tank, so the hop is what is left\n- The whole room is on screen because the world says `set size of view to 26 x 16`. There is no camera in this project\n- **Three gems** are what the level is about. Take all three and the door at the far right opens; walk into it and you are out\n- Coins are points and gems are the way out, and they are the SAME rule: both elect `Can Be Collected` and neither knows what it is worth. One handler makes a coin a point\n- The door keeps no state. "Unlocked" is "there are no gems left", which the world can be asked at any moment — so the door watches the count and the Pilot asks again when it walks in\n- The belt carries you if you stand still, the ice will not let you turn round, and the sludge is the slow way across\n- Try `thrust`, `top flying speed` and `fuel per second` on the Pilot — those three numbers are the whole feel of it'},tapper:{name:"Tapper",description:"Click the coins. The mouse is the only input that can say WHERE as well as when, and this is the smallest game that needs the difference.",source:ny.source,instructions:"## Tapper\n\nClick the coins to take them.\n\n- Click the preview first, then click a coin — the coin elects `Can Be Clicked`, and that one row is the whole of what makes it clickable\n- The count is the WORLD’s: `define property ⟨score⟩` sits in `define world`, so it outlives the coin that raised the event, and the Label is told what to say\n- One press is told three times. `when ⟨left⟩ is pressed` is the WORLD’s: it happened to nobody, so the handler has to ask where — watch it print a point for the clicks that hit nothing too\n- `is clicked with` is the COIN’s: it landed on that coin, so the handler already knows who, and `this actor` is it\n- `presses mouse button` is the scoreboard’s: it elected `Takes Mouse Input`, so it hears every press wherever it landed and prints which button — try the right one\n- `mouse position` is not an event at all: it is where the pointer is IN THE WORLD, a different number from where it is on the screen as soon as the camera moves, and it answers whenever you ask\n- `crosshair.actor` follows the pointer with `each frame`, which is work a KIND of actor does without a rule to do it in — open it and change which moment of the frame it runs in"},novel:{name:"Visual Novel",description:"A conversation with a portrait and a choice. The only scenario here with no game in it — what happens is what somebody says next.",source:Iw.source,instructions:"## A conversation\n\nRead it, and answer her.\n\n- Space moves on. At the question, the LEFT and RIGHT arrows answer it — that is `send to line`, and it is the whole of branching\n- Open `main.world` and look at `moves to a line`: one branch per line, and each line is BLOCKS, so line one brings the portrait on and the last one takes her away\n- The box types itself out on a timer of its own — open `speechBox.actor` and read it. `Has a Conversation` is the only ability it is given here, and all it does is keep the place\n- Notice what the branches cost: the space bar needs a guard, because the line after the yes-answer is the no-answer"},sokoban:{name:"Sokoban",description:"Push the crates onto the marks. The only game here with no speeds in it — a thing is on a square or crossing to the next one, and never anywhere else.",source:jw.source,instructions:`## Sokoban

Push both crates onto the two marks.

- Arrow keys. You move one square at a time, and cannot stop between squares — that is \`Moves on a Grid\`, and it is what makes this a puzzle rather than a driving game
- A crate moves when you walk into it, IF the square past it is free. Nothing in this project says so: pushing belongs to the rule, because deciding whether a step is legal is the same question as deciding whether a crate can go
- Open \`crate.actor\` to see the three traits that make a crate, and the one thing this project does write — the win, counted as the crates that are NOT on a mark
- Watch the console for \`Solved!\``},interface:{name:"Interface Kit",description:"Every interface actor on one screen, answering each other — a Label, a field you can type into, a Button, a bar and a Speech Box.",source:Ru(_e(hs).source),instructions:"## The interface kit\n\nType your name and press the button.\n\n- The screen is a MAP. Open `maps/interface.map` and the title, the field, the button, the bar and the box are placements on a phone-shaped canvas; the words on the title and the button are property overrides on their placements, in the inspector\n- Click the FIELD before you type. Any click lets every field go and the one clicked on takes over, which is how two of them on a screen stay apart — and it is the Mouse rule doing it, not the field\n- The bar follows what you type, because the field raises `changed` and the world answers it. That event is the FIELD’s own, declared in `textInput.actor` — an actor may say something happened without a rule in between\n- The box says its line a letter at a time, on a timer it holds. Open `speechBox.actor` and the whole typewriter is six rows\n- Every one of these ACTS LIKE the Label: open one and the first row says so. What each adds is one idea — an edge and a click, a panel and a clock, a focus and two handlers"},empty:{name:"Empty",description:"One world that does nothing, and the folders to put things in. What a learner starting from scratch sees.",source:_e(hs).source,instructions:"## An empty world\n\nNothing is in it yet.\n\n- `use rule` to give the world an ability, then `use trait` to give an actor a share of it\n- Actors are files under `actors/`; add one and place it with `add actor`\n- Upload a picture into `sprites/` to draw with, or `backgrounds/` for a backdrop"}};function sy(e){return Pa.includes(e??"")}const iy="world";function ps(e){return{sources:{source:e.source},levelProperties:{1:Ui({id:1,name:"World Lab",type:"World",appName:"world",usesProjects:!0,isProjectLevel:!0,offerBrowserTts:!1,showExemplarLink:!1,exemplarSources:null,longInstructions:e.instructions,aiTutorAvailable:!0,...e.levelData?{levelData:e.levelData}:{}})},theme:{}}}const Li=Object.fromEntries([...Pa.map(e=>[e,ps(xa[e])]),...Object.entries(Ia).map(([e,t])=>[rn(e),ps({...t,levelData:{...t.levelData??{},gateShelf:!0}})])]),ly=e=>e!==null&&e in Li,dy=e=>{const t=xa[e];if(t)return{name:t.name,description:t.description};const o=Object.entries(Ia).find(([n])=>rn(n)===e)?.[1];return o&&{name:`Lesson: ${o.name}`,description:o.description}},Vg=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SCENARIO_TAG:ay,WORLD_LAB_KEY:iy,WORLD_SCENARIOS:xa,WORLD_SCENARIO_TAGS:Pa,WorldFixtures:Li,fixtureLabel:dy,isFixtureTag:ly,isScenarioTag:sy},Symbol.toStringTag,{value:"Module"}));export{tg as $,Gy as A,Ky as B,Vy as C,qo as D,ml as E,ca as F,ag as G,zy as H,Zy as I,be as J,He as K,Cl as L,$n as M,Fs as N,Yy as O,kl as P,$t as Q,qy as R,Bt as S,Xy as T,Jy as U,Qy as V,fl as W,eg as X,ng as Y,Ls as Z,bl as _,my as a,Lg as a$,_l as a0,Hs as a1,og as a2,rg as a3,sg as a4,ae as a5,Yl as a6,Iy as a7,xy as a8,Sg as a9,Rg as aA,sl as aB,$y as aC,ua as aD,gd as aE,Ua as aF,md as aG,nn as aH,Ng as aI,ud as aJ,Mg as aK,Ja as aL,Yn as aM,yd as aN,hd as aO,Bg as aP,wd as aQ,Dg as aR,cd as aS,Ho as aT,Ft as aU,xg as aV,pd as aW,da as aX,st as aY,dc as aZ,Ug as a_,By as aa,Tl as ab,lg as ac,ig as ad,Tg as ae,vg as af,cg as ag,_g as ah,kg as ai,Eg as aj,Cg as ak,gg as al,Hl as am,Ag as an,ug as ao,yg as ap,Ul as aq,wg as ar,hg as as,dg as at,bg as au,Og as av,fg as aw,mg as ax,pg as ay,$l as az,Cy as b,Ss as b0,Fc as b1,Uy as b2,jc as b3,Yc as b4,$c as b5,Vc as b6,Fy as b7,Jc as b8,ti as b9,Pg as ba,Dy as bb,xo as bc,Zc as bd,jy as be,Is as bf,Ig as bg,Gg as bh,Fg as bi,rn as bj,Wg as bk,id as bl,Py as bm,ay as bn,iy as bo,sy as bp,dy as bq,Pa as br,xa as bs,ly as bt,Ny as bu,My as bv,Ly as bw,Wy as bx,Hg as by,Vg as bz,Zo as c,vy as d,ky as e,Ey as f,Ay as g,_y as h,Ty as i,by as j,_s as k,zi as l,Sy as m,sa as n,Gn as o,qi as p,Os as q,Ry as r,fy as s,Oy as t,Lt as u,en as v,Hy as w,Vt as x,ia as y,xs as z};
