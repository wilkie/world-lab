import{P as Vt,A as zt,E as Gt,T as at,B as Jt,F as ze,c as ct}from"./messages-zkrIxVlO.js";import{r as qt}from"./registerBuildSw-J0SLnMGE.js";var Ge={exports:{}},ut;function Yt(){return ut||(ut=1,function(U){(M=>{var D=Object.defineProperty,z=Object.getOwnPropertyDescriptor,G=Object.getOwnPropertyNames,J=Object.prototype.hasOwnProperty,ie=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},ke=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of G(t))!J.call(e,m)&&m!==r&&D(e,m,{get:()=>t[m],enumerable:!(o=z(t,m))||o.enumerable});return e},Ve=e=>ke(D({},"__esModule",{value:!0}),e),ce=(e,t,r)=>new Promise((o,m)=>{var p=l=>{try{v(r.next(l))}catch(y){m(y)}},f=l=>{try{v(r.throw(l))}catch(y){m(y)}},v=l=>l.done?o(l.value):Promise.resolve(l.value).then(p,f);v((r=r.apply(e,t)).next())}),be={};ie(be,{analyzeMetafile:()=>Rt,analyzeMetafileSync:()=>It,build:()=>Pt,buildSync:()=>At,context:()=>jt,default:()=>Lt,formatMessages:()=>Ct,formatMessagesSync:()=>Dt,initialize:()=>Nt,stop:()=>Mt,transform:()=>Ot,transformSync:()=>Ut,version:()=>Tt}),M.exports=Ve(be);function Ue(e){let t=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(ee(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let m of o)t(m)}else{let m=Object.keys(o);r.write8(6),r.write32(m.length);for(let p of m)r.write(ee(p)),t(o[p])}},r=new he;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),t(e.value),$e(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function de(e){let t=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return Z(r.read());case 4:return r.read();case 5:{let f=r.read32(),v=[];for(let l=0;l<f;l++)v.push(t());return v}case 6:{let f=r.read32(),v={};for(let l=0;l<f;l++)v[Z(r.read())]=t();return v}default:throw new Error("Invalid packet")}},r=new he(e),o=r.read32(),m=(o&1)===0;o>>>=1;let p=t();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:m,value:p}}var he=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);$e(this.buf,e,t)}write(e){let t=this._write(4+e.length);$e(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return xe(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),r=this._read(t.length);return t.set(this.buf.subarray(r,r+e)),t}},ee,Z,ue;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,t=new TextDecoder;ee=r=>e.encode(r),Z=r=>t.decode(r),ue='new TextEncoder().encode("")'}else if(typeof Buffer<"u")ee=e=>Buffer.from(e),Z=e=>{let{buffer:t,byteOffset:r,byteLength:o}=e;return Buffer.from(t,r,o).toString()},ue='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(ee("")instanceof Uint8Array))throw new Error(`Invariant violation: "${ue} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function xe(e,t){return(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0}function $e(e,t,r){e[r++]=t,e[r++]=t>>8,e[r++]=t>>16,e[r++]=t>>24}var me=String.fromCharCode;function le(e,t,r){const o=e[t];let m=1,p=0;for(let f=0;f<t;f++)e[f]===10?(m++,p=0):p++;throw new SyntaxError(r||(t===e.length?"Unexpected end of input while parsing JSON":o>=32&&o<=126?`Unexpected character ${me(o)} in JSON at position ${t} (line ${m}, column ${p})`:`Unexpected byte 0x${o.toString(16)} in JSON at position ${t} (line ${m}, column ${p})`))}function dt(e){if(!(e instanceof Uint8Array))throw new Error("JSON input must be a Uint8Array");const t=[],r=[],o=[],m=e.length;let p=null,f=0,v,l=0;for(;l<m;){let y=e[l++];if(y<=32)continue;let k;switch(f===2&&p===null&&y!==34&&y!==125&&le(e,--l),y){case 116:{(e[l++]!==114||e[l++]!==117||e[l++]!==101)&&le(e,--l),k=!0;break}case 102:{(e[l++]!==97||e[l++]!==108||e[l++]!==115||e[l++]!==101)&&le(e,--l),k=!1;break}case 110:{(e[l++]!==117||e[l++]!==108||e[l++]!==108)&&le(e,--l),k=null;break}case 45:case 46:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:{let T=l;for(k=me(y),y=e[l];;){switch(y){case 43:case 45:case 46:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 101:case 69:{k+=me(y),y=e[++l];continue}}break}k=+k,isNaN(k)&&le(e,--T,"Invalid number");break}case 34:{for(k="";l>=m&&le(e,m),y=e[l++],y!==34;)if(y===92)switch(e[l++]){case 34:k+='"';break;case 47:k+="/";break;case 92:k+="\\";break;case 98:k+="\b";break;case 102:k+="\f";break;case 110:k+=`
`;break;case 114:k+="\r";break;case 116:k+="	";break;case 117:{let T=0;for(let F=0;F<4;F++)y=e[l++],T<<=4,y>=48&&y<=57?T|=y-48:y>=97&&y<=102?T|=y+-87:y>=65&&y<=70?T|=y+-55:le(e,--l);k+=me(T);break}default:le(e,--l);break}else if(y<=127)k+=me(y);else if((y&224)===192)k+=me((y&31)<<6|e[l++]&63);else if((y&240)===224)k+=me((y&15)<<12|(e[l++]&63)<<6|e[l++]&63);else if((y&248)==240){let T=(y&7)<<18|(e[l++]&63)<<12|(e[l++]&63)<<6|e[l++]&63;T>65535&&(T-=65536,k+=me(T>>10&1023|55296),T=56320|T&1023),k+=me(T)}k[0];break}case 91:{k=[],t.push(p),r.push(v),o.push(f),p=null,v=k,f=1;continue}case 123:{k={},t.push(p),r.push(v),o.push(f),p=null,v=k,f=2;continue}case 93:{f!==1&&le(e,--l),k=v,p=t.pop(),v=r.pop(),f=o.pop();break}case 125:{f!==2&&le(e,--l),k=v,p=t.pop(),v=r.pop(),f=o.pop();break}default:le(e,--l)}for(y=e[l];y<=32;)y=e[++l];switch(f){case 0:{if(l===m)return k;break}case 1:{if(v.push(k),y===44){l++;continue}if(y===93)continue;break}case 2:{if(p===null){if(p=k,y===58){l++;continue}}else{if(v[p]=k,p=null,y===44){l++;continue}if(y===125)continue}break}}break}le(e,l)}var Q=JSON.stringify,Xe="warning",Ke="silent";function Te(e,t){const r=[];for(const o of e){if(ne(o,t),o.indexOf(",")>=0)throw new Error(`Invalid ${t}: ${o}`);r.push(o)}return r.join(",")}var De=()=>null,Y=e=>typeof e=="boolean"?null:"a boolean",C=e=>typeof e=="string"?null:"a string",Ie=e=>e instanceof RegExp?null:"a RegExp object",Ee=e=>typeof e=="number"&&e===(e|0)?null:"an integer",ht=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",Qe=e=>typeof e=="function"?null:"a function",pe=e=>Array.isArray(e)?null:"an array",te=e=>Array.isArray(e)&&e.every(t=>typeof t=="string")?null:"an array of strings",se=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",mt=e=>typeof e=="object"&&e!==null?null:"an array or an object",pt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",Ze=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",et=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",gt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",tt=e=>typeof e=="string"||Array.isArray(e)&&e.every(t=>typeof t=="string")?null:"a string or an array of strings",nt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",wt=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function i(e,t,r,o){let m=e[r];if(t[r+""]=!0,m===void 0)return;let p=o(m);if(p!==null)throw new Error(`${Q(r)} must be ${p}`);return m}function X(e,t,r){for(let o in e)if(!(o in t))throw new Error(`Invalid option ${r}: ${Q(o)}`)}function yt(e){let t=Object.create(null),r=i(e,t,"wasmURL",wt),o=i(e,t,"wasmModule",pt),m=i(e,t,"worker",Y);return X(e,t,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:m}}function rt(e){let t;if(e!==void 0){t=Object.create(null);for(let r in e){let o=e[r];if(typeof o=="string"||o===!1)t[r]=o;else throw new Error(`Expected ${Q(r)} in mangle cache to map to either a string or false`)}}return t}function Me(e,t,r,o,m){let p=i(t,r,"color",Y),f=i(t,r,"logLevel",C),v=i(t,r,"logLimit",Ee);p!==void 0?e.push(`--color=${p}`):o&&e.push("--color=true"),e.push(`--log-level=${f||m}`),e.push(`--log-limit=${v||0}`)}function ne(e,t,r){if(typeof e!="string")throw new Error(`Expected value for ${t}${r!==void 0?" "+Q(r):""} to be a string, got ${typeof e} instead`);return e}function st(e,t,r){let o=i(t,r,"legalComments",C),m=i(t,r,"sourceRoot",C),p=i(t,r,"sourcesContent",Y),f=i(t,r,"target",tt),v=i(t,r,"format",C),l=i(t,r,"globalName",C),y=i(t,r,"mangleProps",Ie),k=i(t,r,"reserveProps",Ie),T=i(t,r,"mangleQuoted",Y),F=i(t,r,"minify",Y),I=i(t,r,"minifySyntax",Y),B=i(t,r,"minifyWhitespace",Y),W=i(t,r,"minifyIdentifiers",Y),O=i(t,r,"lineLimit",Ee),H=i(t,r,"drop",te),j=i(t,r,"dropLabels",te),P=i(t,r,"charset",C),w=i(t,r,"treeShaking",Y),d=i(t,r,"ignoreAnnotations",Y),s=i(t,r,"jsx",C),c=i(t,r,"jsxFactory",C),h=i(t,r,"jsxFragment",C),E=i(t,r,"jsxImportSource",C),S=i(t,r,"jsxDev",Y),u=i(t,r,"jsxSideEffects",Y),g=i(t,r,"define",se),_=i(t,r,"logOverride",se),n=i(t,r,"supported",se),a=i(t,r,"pure",te),x=i(t,r,"keepNames",Y),b=i(t,r,"platform",C),A=i(t,r,"tsconfigRaw",gt),q=i(t,r,"absPaths",te);if(o&&e.push(`--legal-comments=${o}`),m!==void 0&&e.push(`--source-root=${m}`),p!==void 0&&e.push(`--sources-content=${p}`),f&&e.push(`--target=${Te(Array.isArray(f)?f:[f],"target")}`),v&&e.push(`--format=${v}`),l&&e.push(`--global-name=${l}`),b&&e.push(`--platform=${b}`),A&&e.push(`--tsconfig-raw=${typeof A=="string"?A:JSON.stringify(A)}`),F&&e.push("--minify"),I&&e.push("--minify-syntax"),B&&e.push("--minify-whitespace"),W&&e.push("--minify-identifiers"),O&&e.push(`--line-limit=${O}`),P&&e.push(`--charset=${P}`),w!==void 0&&e.push(`--tree-shaking=${w}`),d&&e.push("--ignore-annotations"),H)for(let $ of H)e.push(`--drop:${ne($,"drop")}`);if(j&&e.push(`--drop-labels=${Te(j,"drop label")}`),q&&e.push(`--abs-paths=${Te(q,"abs paths")}`),y&&e.push(`--mangle-props=${Le(y)}`),k&&e.push(`--reserve-props=${Le(k)}`),T!==void 0&&e.push(`--mangle-quoted=${T}`),s&&e.push(`--jsx=${s}`),c&&e.push(`--jsx-factory=${c}`),h&&e.push(`--jsx-fragment=${h}`),E&&e.push(`--jsx-import-source=${E}`),S&&e.push("--jsx-dev"),u&&e.push("--jsx-side-effects"),g)for(let $ in g){if($.indexOf("=")>=0)throw new Error(`Invalid define: ${$}`);e.push(`--define:${$}=${ne(g[$],"define",$)}`)}if(_)for(let $ in _){if($.indexOf("=")>=0)throw new Error(`Invalid log override: ${$}`);e.push(`--log-override:${$}=${ne(_[$],"log override",$)}`)}if(n)for(let $ in n){if($.indexOf("=")>=0)throw new Error(`Invalid supported: ${$}`);const V=n[$];if(typeof V!="boolean")throw new Error(`Expected value for supported ${Q($)} to be a boolean, got ${typeof V} instead`);e.push(`--supported:${$}=${V}`)}if(a)for(let $ of a)e.push(`--pure:${ne($,"pure")}`);x&&e.push("--keep-names")}function vt(e,t,r,o,m){var p;let f=[],v=[],l=Object.create(null),y=null,k=null;Me(f,t,l,r,o),st(f,t,l);let T=i(t,l,"sourcemap",et),F=i(t,l,"bundle",Y),I=i(t,l,"splitting",Y),B=i(t,l,"preserveSymlinks",Y),W=i(t,l,"metafile",Y),O=i(t,l,"outfile",C),H=i(t,l,"outdir",C),j=i(t,l,"outbase",C),P=i(t,l,"tsconfig",C),w=i(t,l,"resolveExtensions",te),d=i(t,l,"nodePaths",te),s=i(t,l,"mainFields",te),c=i(t,l,"conditions",te),h=i(t,l,"external",te),E=i(t,l,"packages",C),S=i(t,l,"alias",se),u=i(t,l,"loader",se),g=i(t,l,"outExtension",se),_=i(t,l,"publicPath",C),n=i(t,l,"entryNames",C),a=i(t,l,"chunkNames",C),x=i(t,l,"assetNames",C),b=i(t,l,"inject",te),A=i(t,l,"banner",se),q=i(t,l,"footer",se),$=i(t,l,"entryPoints",mt),V=i(t,l,"absWorkingDir",C),L=i(t,l,"stdin",se),N=(p=i(t,l,"write",Y))!=null?p:m,re=i(t,l,"allowOverwrite",Y),K=i(t,l,"mangleCache",se);if(l.plugins=!0,X(t,l,`in ${e}() call`),T&&f.push(`--sourcemap${T===!0?"":`=${T}`}`),F&&f.push("--bundle"),re&&f.push("--allow-overwrite"),I&&f.push("--splitting"),B&&f.push("--preserve-symlinks"),W&&f.push("--metafile"),O&&f.push(`--outfile=${O}`),H&&f.push(`--outdir=${H}`),j&&f.push(`--outbase=${j}`),P&&f.push(`--tsconfig=${P}`),E&&f.push(`--packages=${E}`),w&&f.push(`--resolve-extensions=${Te(w,"resolve extension")}`),_&&f.push(`--public-path=${_}`),n&&f.push(`--entry-names=${n}`),a&&f.push(`--chunk-names=${a}`),x&&f.push(`--asset-names=${x}`),s&&f.push(`--main-fields=${Te(s,"main field")}`),c&&f.push(`--conditions=${Te(c,"condition")}`),h)for(let R of h)f.push(`--external:${ne(R,"external")}`);if(S)for(let R in S){if(R.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${R}`);f.push(`--alias:${R}=${ne(S[R],"alias",R)}`)}if(A)for(let R in A){if(R.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${R}`);f.push(`--banner:${R}=${ne(A[R],"banner",R)}`)}if(q)for(let R in q){if(R.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${R}`);f.push(`--footer:${R}=${ne(q[R],"footer",R)}`)}if(b)for(let R of b)f.push(`--inject:${ne(R,"inject")}`);if(u)for(let R in u){if(R.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${R}`);f.push(`--loader:${R}=${ne(u[R],"loader",R)}`)}if(g)for(let R in g){if(R.indexOf("=")>=0)throw new Error(`Invalid out extension: ${R}`);f.push(`--out-extension:${R}=${ne(g[R],"out extension",R)}`)}if($)if(Array.isArray($))for(let R=0,ye=$.length;R<ye;R++){let oe=$[R];if(typeof oe=="object"&&oe!==null){let fe=Object.create(null),ve=i(oe,fe,"in",C),ae=i(oe,fe,"out",C);if(X(oe,fe,"in entry point at index "+R),ve===void 0)throw new Error('Missing property "in" for entry point at index '+R);if(ae===void 0)throw new Error('Missing property "out" for entry point at index '+R);v.push([ae,ve])}else v.push(["",ne(oe,"entry point at index "+R)])}else for(let R in $)v.push([R,ne($[R],"entry point",R)]);if(L){let R=Object.create(null),ye=i(L,R,"contents",nt),oe=i(L,R,"resolveDir",C),fe=i(L,R,"sourcefile",C),ve=i(L,R,"loader",C);X(L,R,'in "stdin" object'),fe&&f.push(`--sourcefile=${fe}`),ve&&f.push(`--loader=${ve}`),oe&&(k=oe),typeof ye=="string"?y=ee(ye):ye instanceof Uint8Array&&(y=ye)}let we=[];if(d)for(let R of d)R+="",we.push(R);return{entries:v,flags:f,write:N,stdinContents:y,stdinResolveDir:k,absWorkingDir:V,nodePaths:we,mangleCache:rt(K)}}function bt(e,t,r,o){let m=[],p=Object.create(null);Me(m,t,p,r,o),st(m,t,p);let f=i(t,p,"sourcemap",et),v=i(t,p,"sourcefile",C),l=i(t,p,"loader",C),y=i(t,p,"banner",C),k=i(t,p,"footer",C),T=i(t,p,"mangleCache",se);return X(t,p,`in ${e}() call`),f&&m.push(`--sourcemap=${f===!0?"external":f}`),v&&m.push(`--sourcefile=${v}`),l&&m.push(`--loader=${l}`),y&&m.push(`--banner=${y}`),k&&m.push(`--footer=${k}`),{flags:m,mangleCache:rt(T)}}function xt(e){const t={},r={didClose:!1,reason:""};let o={},m=0,p=0,f=new Uint8Array(16*1024),v=0,l=P=>{let w=v+P.length;if(w>f.length){let s=new Uint8Array(w*2);s.set(f),f=s}f.set(P,v),v+=P.length;let d=0;for(;d+4<=v;){let s=xe(f,d);if(d+4+s>v)break;d+=4,B(f.subarray(d,d+s)),d+=s}d>0&&(f.copyWithin(0,d,v),v-=d)},y=P=>{r.didClose=!0,P&&(r.reason=": "+(P.message||P));const w="The service was stopped"+r.reason;for(let d in o)o[d](w,null);o={}},k=(P,w,d)=>{if(r.didClose)return d("The service is no longer running"+r.reason,null);let s=m++;o[s]=(c,h)=>{try{d(c,h)}finally{P&&P.unref()}},P&&P.ref(),e.writeToStdin(Ue({id:s,isRequest:!0,value:w}))},T=(P,w)=>{if(r.didClose)throw new Error("The service is no longer running"+r.reason);e.writeToStdin(Ue({id:P,isRequest:!1,value:w}))},F=(P,w)=>ce(null,null,function*(){try{if(w.command==="ping"){T(P,{});return}if(typeof w.key=="number"){const d=t[w.key];if(!d)return;const s=d[w.command];if(s){yield s(P,w);return}}throw new Error("Invalid command: "+w.command)}catch(d){const s=[_e(d,e,null,void 0,"")];try{T(P,{errors:s})}catch{}}}),I=!0,B=P=>{if(I){I=!1;let d=String.fromCharCode(...P);if(d!=="0.28.1")throw new Error(`Cannot start service: Host version "0.28.1" does not match binary version ${Q(d)}`);return}let w=de(P);if(w.isRequest)F(w.id,w.value);else{let d=o[w.id];delete o[w.id],w.value.error?d(w.value.error,{}):d(null,w.value)}};return{readFromStdout:l,afterClose:y,service:{buildOrContext:({callName:P,refs:w,options:d,isTTY:s,defaultWD:c,callback:h})=>{let E=0;const S=p++,u={},g={ref(){++E===1&&w&&w.ref()},unref(){--E===0&&(delete t[S],w&&w.unref())}};t[S]=u,g.ref(),kt(P,S,k,T,g,e,u,d,s,c,(_,n)=>{try{h(_,n)}finally{g.unref()}})},transform:({callName:P,refs:w,input:d,options:s,isTTY:c,fs:h,callback:E})=>{const S=it();let u=g=>{try{if(typeof d!="string"&&!(d instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:_,mangleCache:n}=bt(P,s,c,Ke),a={command:"transform",flags:_,inputFS:g!==null,input:g!==null?ee(g):typeof d=="string"?ee(d):d};n&&(a.mangleCache=n),k(w,a,(x,b)=>{if(x)return E(new Error(x),null);let A=Pe(b.errors,S),q=Pe(b.warnings,S),$=1,V=()=>{if(--$===0){let L={warnings:q,code:b.code,map:b.map,mangleCache:void 0,legalComments:void 0};"legalComments"in b&&(L.legalComments=b?.legalComments),b.mangleCache&&(L.mangleCache=b?.mangleCache),E(null,L)}};if(A.length>0)return E(Oe("Transform failed",A,q),null);b.codeFS&&($++,h.readFile(b.code,(L,N)=>{L!==null?E(L,null):(b.code=N,V())})),b.mapFS&&($++,h.readFile(b.map,(L,N)=>{L!==null?E(L,null):(b.map=N,V())})),V()})}catch(_){let n=[];try{Me(n,s,{},c,Ke)}catch{}const a=_e(_,e,S,void 0,"");k(w,{command:"error",flags:n,error:a},()=>{a.detail=S.load(a.detail),E(Oe("Transform failed",[a],[]),null)})}};if((typeof d=="string"||d instanceof Uint8Array)&&d.length>1024*1024){let g=u;u=()=>h.writeFile(d,g)}u(null)},formatMessages:({callName:P,refs:w,messages:d,options:s,callback:c})=>{if(!s)throw new Error(`Missing second argument in ${P}() call`);let h={},E=i(s,h,"kind",C),S=i(s,h,"color",Y),u=i(s,h,"terminalWidth",Ee);if(X(s,h,`in ${P}() call`),E===void 0)throw new Error(`Missing "kind" in ${P}() call`);if(E!=="error"&&E!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${P}() call`);let g={command:"format-msgs",messages:ge(d,"messages",null,"",u),isWarning:E==="warning"};S!==void 0&&(g.color=S),u!==void 0&&(g.terminalWidth=u),k(w,g,(_,n)=>{if(_)return c(new Error(_),null);c(null,n.messages)})},analyzeMetafile:({callName:P,refs:w,metafile:d,options:s,callback:c})=>{s===void 0&&(s={});let h={},E=i(s,h,"color",Y),S=i(s,h,"verbose",Y);X(s,h,`in ${P}() call`);let u={command:"analyze-metafile",metafile:d};E!==void 0&&(u.color=E),S!==void 0&&(u.verbose=S),k(w,u,(g,_)=>{if(g)return c(new Error(g),null);c(null,_.result)})}}}}function kt(e,t,r,o,m,p,f,v,l,y,k){const T=it(),F=e==="context",I=(O,H)=>{const j=[];try{Me(j,v,{},l,Xe)}catch{}const P=_e(O,p,T,void 0,H);r(m,{command:"error",flags:j,error:P},()=>{P.detail=T.load(P.detail),k(Oe(F?"Context failed":"Build failed",[P],[]),null)})};let B;if(typeof v=="object"){const O=v.plugins;if(O!==void 0){if(!Array.isArray(O))return I(new Error('"plugins" must be an array'),"");B=O}}if(B&&B.length>0){if(p.isSync)return I(new Error("Cannot use plugins in synchronous API calls"),"");Et(t,r,o,m,p,f,v,B,T).then(O=>{if(!O.ok)return I(O.error,O.pluginName);try{W(O.requestPlugins,O.runOnEndCallbacks,O.scheduleOnDisposeCallbacks)}catch(H){I(H,"")}},O=>I(O,""));return}try{W(null,(O,H)=>H([],[]),()=>{})}catch(O){I(O,"")}function W(O,H,j){const P=p.hasFS,{entries:w,flags:d,write:s,stdinContents:c,stdinResolveDir:h,absWorkingDir:E,nodePaths:S,mangleCache:u}=vt(e,v,l,Xe,P);if(s&&!p.hasFS)throw new Error('The "write" option is unavailable in this environment');const g={command:"build",key:t,entries:w,flags:d,write:s,stdinContents:c,stdinResolveDir:h,absWorkingDir:E||y,nodePaths:S,context:F};O&&(g.plugins=O),u&&(g.mangleCache=u);const _=(x,b)=>{const A={errors:Pe(x.errors,T),warnings:Pe(x.warnings,T),outputFiles:void 0,metafile:void 0,mangleCache:void 0},q=A.errors.slice(),$=A.warnings.slice();x.outputFiles&&(A.outputFiles=x.outputFiles.map(St)),x.metafile&&x.metafile.length&&(A.metafile=$t(x.metafile)),x.mangleCache&&(A.mangleCache=x.mangleCache),x.writeToStdout!==void 0&&console.log(Z(x.writeToStdout).replace(/\n$/,"")),H(A,(V,L)=>{if(q.length>0||V.length>0){const N=Oe("Build failed",q.concat(V),$.concat(L));return b(N,null,V,L)}b(null,A,V,L)})};let n,a;F&&(f["on-end"]=(x,b)=>new Promise(A=>{_(b,(q,$,V,L)=>{const N={errors:V,warnings:L};a&&a(q,$),n=void 0,a=void 0,o(x,N),A()})})),r(m,g,(x,b)=>{if(x)return k(new Error(x),null);if(!F)return _(b,($,V)=>(j(),k($,V)));if(b.errors.length>0)return k(Oe("Context failed",b.errors,b.warnings),null);let A=!1;const q={rebuild:()=>(n||(n=new Promise(($,V)=>{let L;a=(re,K)=>{L||(L=()=>re?V(re):$(K))};const N=()=>{r(m,{command:"rebuild",key:t},(K,we)=>{K?V(new Error(K)):L?L():N()})};N()})),n),watch:($={})=>new Promise((V,L)=>{if(!p.hasFS)throw new Error('Cannot use the "watch" API in this environment');const N={},re=i($,N,"delay",Ee);X($,N,"in watch() call");const K={command:"watch",key:t};re&&(K.delay=re),r(m,K,we=>{we?L(new Error(we)):V(void 0)})}),serve:($={})=>new Promise((V,L)=>{if(!p.hasFS)throw new Error('Cannot use the "serve" API in this environment');const N={},re=i($,N,"port",ht),K=i($,N,"host",C),we=i($,N,"servedir",C),R=i($,N,"keyfile",C),ye=i($,N,"certfile",C),oe=i($,N,"fallback",C),fe=i($,N,"cors",se),ve=i($,N,"onRequest",Qe);X($,N,"in serve() call");const ae={command:"serve",key:t,onRequest:!!ve};if(re!==void 0&&(ae.port=re),K!==void 0&&(ae.host=K),we!==void 0&&(ae.servedir=we),R!==void 0&&(ae.keyfile=R),ye!==void 0&&(ae.certfile=ye),oe!==void 0&&(ae.fallback=oe),fe){const Re={},je=i(fe,Re,"origin",tt);X(fe,Re,'on "cors" object'),Array.isArray(je)?ae.corsOrigin=je:je!==void 0&&(ae.corsOrigin=[je])}r(m,ae,(Re,je)=>{if(Re)return L(new Error(Re));ve&&(f["serve-request"]=(Bt,Wt)=>{ve(Wt.args),o(Bt,{})}),V(je)})}),cancel:()=>new Promise($=>{if(A)return $();r(m,{command:"cancel",key:t},()=>{$()})}),dispose:()=>new Promise($=>{if(A)return $();A=!0,r(m,{command:"dispose",key:t},()=>{$(),j(),m.unref()})})};m.ref(),k(null,q)})}}var Et=(e,t,r,o,m,p,f,v,l)=>ce(null,null,function*(){let y=[],k=[],T={},F={},I=[],B=0,W=0,O=[],H=!1;v=[...v];for(let w of v){let d={};if(typeof w!="object")throw new Error(`Plugin at index ${W} must be an object`);const s=i(w,d,"name",C);if(typeof s!="string"||s==="")throw new Error(`Plugin at index ${W} is missing a name`);try{let c=i(w,d,"setup",Qe);if(typeof c!="function")throw new Error("Plugin is missing a setup function");X(w,d,`on plugin ${Q(s)}`);let h={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};W++;let S=c({initialOptions:f,resolve:(u,g={})=>{if(!H)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof u!="string")throw new Error("The path to resolve must be a string");let _=Object.create(null),n=i(g,_,"pluginName",C),a=i(g,_,"importer",C),x=i(g,_,"namespace",C),b=i(g,_,"resolveDir",C),A=i(g,_,"kind",C),q=i(g,_,"pluginData",De),$=i(g,_,"with",se);return X(g,_,"in resolve() call"),new Promise((V,L)=>{const N={command:"resolve",path:u,key:e,pluginName:s};if(n!=null&&(N.pluginName=n),a!=null&&(N.importer=a),x!=null&&(N.namespace=x),b!=null&&(N.resolveDir=b),A!=null)N.kind=A;else throw new Error('Must specify "kind" when calling "resolve"');q!=null&&(N.pluginData=l.store(q)),$!=null&&(N.with=_t($,"with")),t(o,N,(re,K)=>{re!==null?L(new Error(re)):V({errors:Pe(K.errors,l),warnings:Pe(K.warnings,l),path:K.path,external:K.external,sideEffects:K.sideEffects,namespace:K.namespace,suffix:K.suffix,pluginData:l.load(K.pluginData)})})})},onStart(u){let g='This error came from the "onStart" callback registered here:',_=Ne(new Error(g),m,"onStart");y.push({name:s,callback:u,note:_}),h.onStart=!0},onEnd(u){let g='This error came from the "onEnd" callback registered here:',_=Ne(new Error(g),m,"onEnd");k.push({name:s,callback:u,note:_}),h.onEnd=!0},onResolve(u,g){let _='This error came from the "onResolve" callback registered here:',n=Ne(new Error(_),m,"onResolve"),a={},x=i(u,a,"filter",Ie),b=i(u,a,"namespace",C);if(X(u,a,`in onResolve() call for plugin ${Q(s)}`),x==null)throw new Error("onResolve() call is missing a filter");let A=B++;T[A]={name:s,callback:g,note:n},h.onResolve.push({id:A,filter:Le(x),namespace:b||""})},onLoad(u,g){let _='This error came from the "onLoad" callback registered here:',n=Ne(new Error(_),m,"onLoad"),a={},x=i(u,a,"filter",Ie),b=i(u,a,"namespace",C);if(X(u,a,`in onLoad() call for plugin ${Q(s)}`),x==null)throw new Error("onLoad() call is missing a filter");let A=B++;F[A]={name:s,callback:g,note:n},h.onLoad.push({id:A,filter:Le(x),namespace:b||""})},onDispose(u){I.push(u)},esbuild:m.esbuild});S&&(yield S),O.push(h)}catch(c){return{ok:!1,error:c,pluginName:s}}}p["on-start"]=(w,d)=>ce(null,null,function*(){l.clear();let s={errors:[],warnings:[]};yield Promise.all(y.map(c=>ce(null,[c],function*({name:h,callback:E,note:S}){try{let u=yield E();if(u!=null){if(typeof u!="object")throw new Error(`Expected onStart() callback in plugin ${Q(h)} to return an object`);let g={},_=i(u,g,"errors",pe),n=i(u,g,"warnings",pe);X(u,g,`from onStart() callback in plugin ${Q(h)}`),_!=null&&s.errors.push(...ge(_,"errors",l,h,void 0)),n!=null&&s.warnings.push(...ge(n,"warnings",l,h,void 0))}}catch(u){s.errors.push(_e(u,m,l,S&&S(),h))}}))),r(w,s)}),p["on-resolve"]=(w,d)=>ce(null,null,function*(){let s={},c="",h,E;for(let S of d.ids)try{({name:c,callback:h,note:E}=T[S]);let u=yield h({path:d.path,importer:d.importer,namespace:d.namespace,resolveDir:d.resolveDir,kind:d.kind,pluginData:l.load(d.pluginData),with:d.with});if(u!=null){if(typeof u!="object")throw new Error(`Expected onResolve() callback in plugin ${Q(c)} to return an object`);let g={},_=i(u,g,"pluginName",C),n=i(u,g,"path",C),a=i(u,g,"namespace",C),x=i(u,g,"suffix",C),b=i(u,g,"external",Y),A=i(u,g,"sideEffects",Y),q=i(u,g,"pluginData",De),$=i(u,g,"errors",pe),V=i(u,g,"warnings",pe),L=i(u,g,"watchFiles",te),N=i(u,g,"watchDirs",te);X(u,g,`from onResolve() callback in plugin ${Q(c)}`),s.id=S,_!=null&&(s.pluginName=_),n!=null&&(s.path=n),a!=null&&(s.namespace=a),x!=null&&(s.suffix=x),b!=null&&(s.external=b),A!=null&&(s.sideEffects=A),q!=null&&(s.pluginData=l.store(q)),$!=null&&(s.errors=ge($,"errors",l,c,void 0)),V!=null&&(s.warnings=ge(V,"warnings",l,c,void 0)),L!=null&&(s.watchFiles=Fe(L,"watchFiles")),N!=null&&(s.watchDirs=Fe(N,"watchDirs"));break}}catch(u){s={id:S,errors:[_e(u,m,l,E&&E(),c)]};break}r(w,s)}),p["on-load"]=(w,d)=>ce(null,null,function*(){let s={},c="",h,E;for(let S of d.ids)try{({name:c,callback:h,note:E}=F[S]);let u=yield h({path:d.path,namespace:d.namespace,suffix:d.suffix,pluginData:l.load(d.pluginData),with:d.with});if(u!=null){if(typeof u!="object")throw new Error(`Expected onLoad() callback in plugin ${Q(c)} to return an object`);let g={},_=i(u,g,"pluginName",C),n=i(u,g,"contents",nt),a=i(u,g,"resolveDir",C),x=i(u,g,"pluginData",De),b=i(u,g,"loader",C),A=i(u,g,"errors",pe),q=i(u,g,"warnings",pe),$=i(u,g,"watchFiles",te),V=i(u,g,"watchDirs",te);X(u,g,`from onLoad() callback in plugin ${Q(c)}`),s.id=S,_!=null&&(s.pluginName=_),n instanceof Uint8Array?s.contents=n:n!=null&&(s.contents=ee(n)),a!=null&&(s.resolveDir=a),x!=null&&(s.pluginData=l.store(x)),b!=null&&(s.loader=b),A!=null&&(s.errors=ge(A,"errors",l,c,void 0)),q!=null&&(s.warnings=ge(q,"warnings",l,c,void 0)),$!=null&&(s.watchFiles=Fe($,"watchFiles")),V!=null&&(s.watchDirs=Fe(V,"watchDirs"));break}}catch(u){s={id:S,errors:[_e(u,m,l,E&&E(),c)]};break}r(w,s)});let j=(w,d)=>d([],[]);k.length>0&&(j=(w,d)=>{ce(null,null,function*(){const s=[],c=[];for(const{name:h,callback:E,note:S}of k){let u,g;try{const _=yield E(w);if(_!=null){if(typeof _!="object")throw new Error(`Expected onEnd() callback in plugin ${Q(h)} to return an object`);let n={},a=i(_,n,"errors",pe),x=i(_,n,"warnings",pe);X(_,n,`from onEnd() callback in plugin ${Q(h)}`),a!=null&&(u=ge(a,"errors",l,h,void 0)),x!=null&&(g=ge(x,"warnings",l,h,void 0))}}catch(_){u=[_e(_,m,l,S&&S(),h)]}if(u){s.push(...u);try{w.errors.push(...u)}catch{}}if(g){c.push(...g);try{w.warnings.push(...g)}catch{}}}d(s,c)})});let P=()=>{for(const w of I)setTimeout(()=>w(),0)};return H=!0,{ok:!0,requestPlugins:O,runOnEndCallbacks:j,scheduleOnDisposeCallbacks:P}});function it(){const e=new Map;let t=0;return{clear(){e.clear()},load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=t++;return e.set(o,r),o}}}function Ne(e,t,r){let o,m=!1;return()=>{if(m)return o;m=!0;try{let p=(e.stack+"").split(`
`);p.splice(1,1);let f=lt(t,p,r);if(f)return o={text:e.message,location:f},o}catch{}}}function _e(e,t,r,o,m){let p="Internal error",f=null;try{p=(e&&e.message||e)+""}catch{}try{f=lt(t,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:m,text:p,location:f,notes:o?[o]:[],detail:r?r.store(e):-1}}function lt(e,t,r){let o="    at ";if(e.readFileSync&&!t[0].startsWith(o)&&t[1].startsWith(o))for(let m=1;m<t.length;m++){let p=t[m];if(p.startsWith(o))for(p=p.slice(o.length);;){let f=/^(?:new |async )?\S+ \((.*)\)$/.exec(p);if(f){p=f[1];continue}if(f=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(p),f){p=f[1];continue}if(f=/^(\S+):(\d+):(\d+)$/.exec(p),f){let v;try{v=e.readFileSync(f[1],"utf8")}catch{break}let l=v.split(/\r\n|\r|\n|\u2028|\u2029/)[+f[2]-1]||"",y=+f[3]-1,k=l.slice(y,y+r.length)===r?r.length:0;return{file:f[1],namespace:"file",line:+f[2],column:ee(l.slice(0,y)).length,length:ee(l.slice(y,y+k)).length,lineText:l+`
`+t.slice(1).join(`
`),suggestion:""}}break}}return null}function Oe(e,t,r){let o=5;e+=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,o+1).map((p,f)=>{if(f===o)return`
...`;if(!p.location)return`
error: ${p.text}`;let{file:v,line:l,column:y}=p.location,k=p.pluginName?`[plugin: ${p.pluginName}] `:"";return`
${v}:${l}:${y}: ERROR: ${k}${p.text}`}).join("");let m=new Error(e);for(const[p,f]of[["errors",t],["warnings",r]])Object.defineProperty(m,p,{configurable:!0,enumerable:!0,get:()=>f,set:v=>Object.defineProperty(m,p,{configurable:!0,enumerable:!0,value:v})});return m}function Pe(e,t){for(const r of e)r.detail=t.load(r.detail);return e}function ot(e,t,r){if(e==null)return null;let o={},m=i(e,o,"file",C),p=i(e,o,"namespace",C),f=i(e,o,"line",Ee),v=i(e,o,"column",Ee),l=i(e,o,"length",Ee),y=i(e,o,"lineText",C),k=i(e,o,"suggestion",C);if(X(e,o,t),y){const T=y.slice(0,(v&&v>0?v:0)+(l&&l>0?l:0)+(r&&r>0?r:80));!/[\x7F-\uFFFF]/.test(T)&&!/\n/.test(y)&&(y=T)}return{file:m||"",namespace:p||"",line:f||0,column:v||0,length:l||0,lineText:y||"",suggestion:k||""}}function ge(e,t,r,o,m){let p=[],f=0;for(const v of e){let l={},y=i(v,l,"id",C),k=i(v,l,"pluginName",C),T=i(v,l,"text",C),F=i(v,l,"location",Ze),I=i(v,l,"notes",pe),B=i(v,l,"detail",De),W=`in element ${f} of "${t}"`;X(v,l,W);let O=[];if(I)for(const H of I){let j={},P=i(H,j,"text",C),w=i(H,j,"location",Ze);X(H,j,W),O.push({text:P||"",location:ot(w,W,m)})}p.push({id:y||"",pluginName:k||o,text:T||"",location:ot(F,W,m),notes:O,detail:r?r.store(B):-1}),f++}return p}function Fe(e,t){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${Q(t)} must be an array of strings`);r.push(o)}return r}function _t(e,t){const r=Object.create(null);for(const o in e){const m=e[o];if(typeof m!="string")throw new Error(`key ${Q(o)} in object ${Q(t)} must be a string`);r[o]=m}return r}function St({path:e,contents:t,hash:r}){let o=null;return{path:e,contents:t,hash:r,get text(){const m=this.contents;return(o===null||m!==t)&&(t=m,o=Z(m)),o}}}function Le(e){let t=e.source;return e.flags&&(t=`(?${e.flags})${t}`),t}function $t(e){let t;try{t=Z(e)}catch{return dt(e)}return JSON.parse(t)}var Tt="0.28.1",Pt=e=>Ce().build(e),jt=e=>Ce().context(e),Ot=(e,t)=>Ce().transform(e,t),Ct=(e,t)=>Ce().formatMessages(e,t),Rt=(e,t)=>Ce().analyzeMetafile(e,t),At=()=>{throw new Error('The "buildSync" API only works in node')},Ut=()=>{throw new Error('The "transformSync" API only works in node')},Dt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},It=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Mt=()=>(Be&&Be(),Promise.resolve()),Se,Be,We,Ce=()=>{if(We)return We;throw Se?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Nt=e=>{e=yt(e||{});let t=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!t&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Se)throw new Error('Cannot call "initialize" more than once');return Se=Ft(t||"",r,o),Se.catch(()=>{Se=void 0}),Se},Ft=(e,t,r)=>ce(null,null,function*(){let o,m;const p=new Promise(T=>m=T);if(r){let T=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1, O_DIRECTORY: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.path) {
          globalThis.path = {
            resolve(...pathSegments) {
              return pathSegments.join("/");
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const testCallExport = (a, b) => {
              this._inst.exports.testExport0();
              return this._inst.exports.testExport(a, b);
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b,
                callExport: testCallExport
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.28.1"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(T))}else{let T=(I=>{var B=(j,P,w)=>new Promise((d,s)=>{var c=S=>{try{E(w.next(S))}catch(u){s(u)}},h=S=>{try{E(w.throw(S))}catch(u){s(u)}},E=S=>S.done?d(S.value):Promise.resolve(S.value).then(c,h);E((w=w.apply(j,P)).next())});let W,O={};for(let j=self;j;j=Object.getPrototypeOf(j))for(let P of Object.getOwnPropertyNames(j))P in O||Object.defineProperty(O,P,{get:()=>self[P]});(()=>{const j=()=>{const d=new Error("not implemented");return d.code="ENOSYS",d};if(!O.fs){let d="";O.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1,O_DIRECTORY:-1},writeSync(s,c){d+=w.decode(c);const h=d.lastIndexOf(`
`);return h!=-1&&(console.log(d.substring(0,h)),d=d.substring(h+1)),c.length},write(s,c,h,E,S,u){if(h!==0||E!==c.length||S!==null){u(j());return}const g=this.writeSync(s,c);u(null,g)},chmod(s,c,h){h(j())},chown(s,c,h,E){E(j())},close(s,c){c(j())},fchmod(s,c,h){h(j())},fchown(s,c,h,E){E(j())},fstat(s,c){c(j())},fsync(s,c){c(null)},ftruncate(s,c,h){h(j())},lchown(s,c,h,E){E(j())},link(s,c,h){h(j())},lstat(s,c){c(j())},mkdir(s,c,h){h(j())},open(s,c,h,E){E(j())},read(s,c,h,E,S,u){u(j())},readdir(s,c){c(j())},readlink(s,c){c(j())},rename(s,c,h){h(j())},rmdir(s,c){c(j())},stat(s,c){c(j())},symlink(s,c,h){h(j())},truncate(s,c,h){h(j())},unlink(s,c){c(j())},utimes(s,c,h,E){E(j())}}}if(O.process||(O.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw j()},pid:-1,ppid:-1,umask(){throw j()},cwd(){throw j()},chdir(){throw j()}}),O.path||(O.path={resolve(...d){return d.join("/")}}),!O.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!O.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!O.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!O.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const P=new TextEncoder("utf-8"),w=new TextDecoder("utf-8");O.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const d=(n,a)=>{this.mem.setUint32(n+0,a,!0),this.mem.setUint32(n+4,Math.floor(a/4294967296),!0)},s=n=>{const a=this.mem.getUint32(n+0,!0),x=this.mem.getInt32(n+4,!0);return a+x*4294967296},c=n=>{const a=this.mem.getFloat64(n,!0);if(a===0)return;if(!isNaN(a))return a;const x=this.mem.getUint32(n,!0);return this._values[x]},h=(n,a)=>{if(typeof a=="number"&&a!==0){if(isNaN(a)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,a,!0);return}if(a===void 0){this.mem.setFloat64(n,0,!0);return}let b=this._ids.get(a);b===void 0&&(b=this._idPool.pop(),b===void 0&&(b=this._values.length),this._values[b]=a,this._goRefCounts[b]=0,this._ids.set(a,b)),this._goRefCounts[b]++;let A=0;switch(typeof a){case"object":a!==null&&(A=1);break;case"string":A=2;break;case"symbol":A=3;break;case"function":A=4;break}this.mem.setUint32(n+4,2146959360|A,!0),this.mem.setUint32(n,b,!0)},E=n=>{const a=s(n+0),x=s(n+8);return new Uint8Array(this._inst.exports.mem.buffer,a,x)},S=n=>{const a=s(n+0),x=s(n+8),b=new Array(x);for(let A=0;A<x;A++)b[A]=c(a+A*8);return b},u=n=>{const a=s(n+0),x=s(n+8);return w.decode(new DataView(this._inst.exports.mem.buffer,a,x))},g=(n,a)=>(this._inst.exports.testExport0(),this._inst.exports.testExport(n,a)),_=Date.now()-performance.now();this.importObject={_gotest:{add:(n,a)=>n+a,callExport:g},gojs:{"runtime.wasmExit":n=>{n>>>=0;const a=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(a)},"runtime.wasmWrite":n=>{n>>>=0;const a=s(n+8),x=s(n+16),b=this.mem.getInt32(n+24,!0);O.fs.writeSync(a,new Uint8Array(this._inst.exports.mem.buffer,x,b))},"runtime.resetMemoryDataView":n=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,d(n+8,(_+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;const a=new Date().getTime();d(n+8,a/1e3),this.mem.setInt32(n+16,a%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;const a=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(a,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(a);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(n+8))),this.mem.setInt32(n+16,a,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;const a=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(a)),this._scheduledTimeouts.delete(a)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues(E(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;const a=this.mem.getUint32(n+8,!0);if(this._goRefCounts[a]--,this._goRefCounts[a]===0){const x=this._values[a];this._values[a]=null,this._ids.delete(x),this._idPool.push(a)}},"syscall/js.stringVal":n=>{n>>>=0,h(n+24,u(n+8))},"syscall/js.valueGet":n=>{n>>>=0;const a=Reflect.get(c(n+8),u(n+16));n=this._inst.exports.getsp()>>>0,h(n+32,a)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(c(n+8),u(n+16),c(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(c(n+8),u(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,h(n+24,Reflect.get(c(n+8),s(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(c(n+8),s(n+16),c(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{const a=c(n+8),x=Reflect.get(a,u(n+16)),b=S(n+32),A=Reflect.apply(x,a,b);n=this._inst.exports.getsp()>>>0,h(n+56,A),this.mem.setUint8(n+64,1)}catch(a){n=this._inst.exports.getsp()>>>0,h(n+56,a),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{const a=c(n+8),x=S(n+16),b=Reflect.apply(a,void 0,x);n=this._inst.exports.getsp()>>>0,h(n+40,b),this.mem.setUint8(n+48,1)}catch(a){n=this._inst.exports.getsp()>>>0,h(n+40,a),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{const a=c(n+8),x=S(n+16),b=Reflect.construct(a,x);n=this._inst.exports.getsp()>>>0,h(n+40,b),this.mem.setUint8(n+48,1)}catch(a){n=this._inst.exports.getsp()>>>0,h(n+40,a),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,d(n+16,parseInt(c(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const a=P.encode(String(c(n+8)));h(n+16,a),d(n+24,a.length)},"syscall/js.valueLoadString":n=>{n>>>=0;const a=c(n+8);E(n+16).set(a)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,c(n+8)instanceof c(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;const a=E(n+8),x=c(n+32);if(!(x instanceof Uint8Array||x instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const b=x.subarray(0,a.length);a.set(b),d(n+40,b.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;const a=c(n+8),x=E(n+16);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const b=x.subarray(0,a.length);a.set(b),d(n+40,b.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}run(d){return B(this,null,function*(){if(!(d instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=d,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,O,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[O,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const c=_=>{const n=s,a=P.encode(_+"\0");return new Uint8Array(this.mem.buffer,s,a.length).set(a),s+=a.length,s%8!==0&&(s+=8-s%8),n},h=this.argv.length,E=[];this.argv.forEach(_=>{E.push(c(_))}),E.push(0),Object.keys(this.env).sort().forEach(_=>{E.push(c(`${_}=${this.env[_]}`))}),E.push(0);const u=s;if(E.forEach(_=>{this.mem.setUint32(s,_,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(h,u),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(d){const s=this;return function(){const c={id:d,this:this,args:arguments};return s._pendingEvent=c,s._resume(),c.result}}}})(),W=({data:j})=>{let P=new TextDecoder,w=O.fs,d="";w.writeSync=(S,u)=>{if(S===1)I(u);else if(S===2){d+=P.decode(u);let g=d.split(`
`);g.length>1&&console.log(g.slice(0,-1).join(`
`)),d=g[g.length-1]}else throw new Error("Bad write");return u.length};let s=[],c,h=0;W=({data:S})=>(S.length>0&&(s.push(S),c&&c()),E),w.read=(S,u,g,_,n,a)=>{if(S!==0||g!==0||_!==u.length||n!==null)throw new Error("Bad read");if(s.length===0){c=()=>w.read(S,u,g,_,n,a);return}let x=s[0],b=Math.max(0,Math.min(_,x.length-h));u.set(x.subarray(h,h+b),g),h+=b,h===x.length&&(s.shift(),h=0),a(null,b)};let E=new O.Go;return E.argv=["","--service=0.28.1"],H(j,E).then(S=>{I(null),E.run(S)},S=>{I(S)}),E};function H(j,P){return B(this,null,function*(){if(j instanceof WebAssembly.Module)return WebAssembly.instantiate(j,P.importObject);const w=yield fetch(j);if(!w.ok)throw new Error(`Failed to download ${JSON.stringify(j)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(w.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(w,P.importObject)).instance;const d=yield w.arrayBuffer();return(yield WebAssembly.instantiate(d,P.importObject)).instance})}return j=>W(j)})(I=>o.onmessage({data:I})),F;o={onmessage:null,postMessage:I=>setTimeout(()=>{try{F=T({data:I})}catch(B){m(B)}}),terminate(){if(F)for(let I of F._scheduledTimeouts.values())clearTimeout(I)}}}let f,v;const l=new Promise((T,F)=>{f=T,v=F});o.onmessage=({data:T})=>{o.onmessage=({data:F})=>y(F),T?v(T):f()},o.postMessage(t||new URL(e,location.href).toString());let{readFromStdout:y,service:k}=xt({writeToStdin(T){o.postMessage(T)},isSync:!1,hasFS:!1,esbuild:be});yield l,Be=()=>{o.terminate(),Se=void 0,Be=void 0,We=void 0},We={build:T=>new Promise((F,I)=>{p.then(I),k.buildOrContext({callName:"build",refs:null,options:T,isTTY:!1,defaultWD:"/",callback:(B,W)=>B?I(B):F(W)})}),context:T=>new Promise((F,I)=>{p.then(I),k.buildOrContext({callName:"context",refs:null,options:T,isTTY:!1,defaultWD:"/",callback:(B,W)=>B?I(B):F(W)})}),transform:(T,F)=>new Promise((I,B)=>{p.then(B),k.transform({callName:"transform",refs:null,input:T,options:F||{},isTTY:!1,fs:{readFile(W,O){O(new Error("Internal error"),null)},writeFile(W,O){O(null)}},callback:(W,O)=>W?B(W):I(O)})}),formatMessages:(T,F)=>new Promise((I,B)=>{p.then(B),k.formatMessages({callName:"formatMessages",refs:null,messages:T,options:F,callback:(W,O)=>W?B(W):I(O)})}),analyzeMetafile:(T,F)=>new Promise((I,B)=>{p.then(B),k.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof T=="string"?T:JSON.stringify(T),options:F,callback:(W,O)=>W?B(W):I(O)})})}}),Lt=be})(U)}(Ge)),Ge.exports}var He=Yt();const Ht="world-build-v1",Xt=50,Kt="k1";async function Qt(U,M,D){const z=Object.keys(U).sort().map(ie=>[ie,U[ie]]),G=JSON.stringify([Kt,D,M,z]),J=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(G));return Array.from(new Uint8Array(J)).map(ie=>ie.toString(16).padStart(2,"0")).join("")}async function Zt(U=globalThis.caches){if(!U)return{has:async()=>!1,put:async()=>{}};const M=await U.open(Ht);return{async has(D){return await M.match(D)!==void 0},async put(D,z){await M.put(D,new Response(z,{headers:{"Content-Type":"text/javascript"}}));const G=await M.keys(),J=G.length-Xt;J>0&&await Promise.all(G.slice(0,J).map(ie=>M.delete(ie)))}}}const en=["",".ts",".js",".json",".map",".anim",".effect",".rule",".actor",".world","/index.ts","/index.js"],Je="world-project";function Ye(U){const M=[];for(const D of U.split("/"))D===""||D==="."||(D===".."?M.pop():M.push(D));return M.join("/")}function tn(U,M,D){let z;if(U.startsWith("./")||U.startsWith("../")){const G=M.includes("/")?M.replace(/\/[^/]+$/,""):"";z=Ye(`${G}/${U}`)}else z=Ye(U);for(const G of en){const J=`${z}${G}`;if(D.has(J))return J}return null}function nn(U){return U.endsWith(".ts")?"ts":U.endsWith(".json")||U.endsWith(".map")||U.endsWith(".anim")||U.endsWith(".effect")?"json":U.endsWith(".png")?"dataurl":"js"}function rn(U,M){return{name:"world-virtual-fs",setup(D){D.onResolve({filter:/.*/},z=>{const G=M[z.path];if(G!==void 0)return{path:G,external:!0};if(z.kind==="entry-point")return{path:Ye(z.path),namespace:Je};const J=tn(z.path,z.importer,U());return J?{path:J,namespace:Je}:{errors:[{text:`cannot resolve '${z.path}' from '${z.importer}'`}]}}),D.onLoad({filter:/.*/,namespace:Je},z=>{const G=U().get(z.path);return G===void 0?{errors:[{text:`no such project file: ${z.path}`}]}:{contents:G,loader:nn(z.path),resolveDir:"/"}})}}}class Ae extends Error{location;constructor(M,D){super(M),this.name="CompileError",this.location=D}}let qe=null;function sn(U,M=!0){return qe||(qe=He.initialize(U?{wasmURL:U,worker:M}:{})),qe}class ln{wasmURL;esbuildWorker;externals;files=new Map;contexts=new Map;constructor(M={}){this.wasmURL=M.wasmURL,this.esbuildWorker=M.esbuildWorker??!0;const D=M.assetBase??"/vendor/";this.externals={"world-lab":`${D}world-lab.mjs`,phaser:`${D}phaser.esm.js`}}async init(){await sn(this.wasmURL,this.esbuildWorker)}async compile(M,D){await this.init(),this.files.clear();for(const[G,J]of Object.entries(M))this.files.set(G,J);let z=this.contexts.get(D);z||(z=await He.context({entryPoints:[D],bundle:!0,format:"esm",write:!1,sourcemap:"inline",logLevel:"silent",plugins:[rn(()=>this.files,this.externals)]}),this.contexts.set(D,z));try{const J=(await z.rebuild()).outputFiles?.[0];if(!J)throw new Ae("esbuild produced no output");return J.text}catch(G){throw on(G)}}async dispose(){await Promise.all([...this.contexts.values()].map(M=>M.dispose())),this.contexts.clear()}}function on(U){if(U instanceof Ae)return U;const D=U.errors?.[0];if(D){const z=D.location?`${D.location.file}:${D.location.line}:${D.location.column}`:void 0;return new Ae(D.text,z)}return new Ae(U instanceof Error?U.message:String(U))}async function fn(){const U=new URLSearchParams(window.location.search),M=U.get(Vt),D=U.get(zt)??"/vendor/",z=de=>{M&&window.parent.postMessage(de,M)},G=await qt({awaitControl:!1}),J=U.get(Gt),ie=J!=="0"&&J!=="false",ke=new ln({wasmURL:`${D}esbuild.wasm`,assetBase:D,esbuildWorker:ie});ke.init();const Ve=`${He.version}|${D}`,ce=await Zt(),be=new Map;z({type:ze.READY}),window.addEventListener("message",de=>{if(!M||de.origin!==M)return;const he=de.data;he?.type===at.COMPILE?Ue(he):he?.type===at.DISPOSE&&ke.dispose()});async function Ue({id:de,files:he,entry:ee}){try{const Z=await Qt(he,ee,Ve),ue=`${Jt}${Z}.mjs`;if(!await ce.has(ue)){let xe=be.get(ue);xe||(xe=(async()=>{const $e=await ke.compile(he,ee);await ce.put(ue,$e),await an(G,ue,$e)})(),be.set(ue,xe),xe.finally(()=>be.delete(ue))),await xe}z({type:ze.COMPILED,id:de,moduleUrl:`${window.location.origin}${ue}`})}catch(Z){z({type:ze.ERROR,id:de,message:Z instanceof Error?Z.message:String(Z),location:Z instanceof Ae?Z.location:void 0})}}}const ft=1e4;function an(U,M,D){return new Promise((z,G)=>{if(!U){G(new Error("build service worker unavailable"));return}const J=new MessageChannel,ie=setTimeout(()=>{J.port1.close(),G(new Error(`the build service worker did not confirm ${M} within ${ft/1e3}s`))},ft);J.port1.onmessage=ke=>{ke.data?.type===ct.MODULE_STORED&&(clearTimeout(ie),J.port1.close(),z())},U.postMessage({type:ct.PUT_MODULE,path:M,code:D},[J.port2])})}export{fn as start};
