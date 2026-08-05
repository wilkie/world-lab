import{o as c,c as r,s as i,_ as E,a as g,r as P,u as V,l as Ne,n as p,d as _,e as ya,f as ba,p as ha,i as ga,g as Z,h as je}from"./projects.schemata-BRIacrzO.js";import{a as fa,h as ka,r as Ce,f as ze,n as Ve,l as _a,t as wa,u as va,p as Be,G as z,I as Ie,i as Rn,O as Le,E as de,j as Aa,k as un}from"./viewport-CcVM2z0S.js";var An={exports:{}},X={};var ue;function xa(){if(ue)return X;ue=1;var n=fa(),e=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(u,d,m){var b,w={},y=null,f=null;m!==void 0&&(y=""+m),d.key!==void 0&&(y=""+d.key),d.ref!==void 0&&(f=d.ref);for(b in d)o.call(d,b)&&!s.hasOwnProperty(b)&&(w[b]=d[b]);if(u&&u.defaultProps)for(b in d=u.defaultProps,d)w[b]===void 0&&(w[b]=d[b]);return{$$typeof:e,type:u,key:y,ref:f,props:w,_owner:t.current}}return X.Fragment=a,X.jsx=l,X.jsxs=l,X}var pe;function Ta(){return pe||(pe=1,An.exports=xa()),An.exports}var ts=Ta();function Oa(n,e){return n.endsWith(e)?n.length===e.length||n[n.length-e.length-1]===".":!1}function Ea(n,e){const a=n.length-e.length-2,o=n.lastIndexOf(".",a);return o===-1?n:n.slice(o+1)}function Pa(n,e,a){if(a.validHosts!==null){const t=a.validHosts;for(const s of t)if(Oa(e,s))return s}let o=0;if(e.startsWith("."))for(;o<e.length&&e[o]===".";)o+=1;return n.length===e.length-o?null:Ea(e,n)}function Ra(n,e){return n.slice(0,-e.length-1)}function me(n,e){let a=0,o=n.length,t=!1;if(!e){if(n.startsWith("data:"))return null;for(;a<n.length&&n.charCodeAt(a)<=32;)a+=1;for(;o>a+1&&n.charCodeAt(o-1)<=32;)o-=1;if(n.charCodeAt(a)===47&&n.charCodeAt(a+1)===47)a+=2;else{const m=n.indexOf(":/",a);if(m!==-1){const b=m-a,w=n.charCodeAt(a),y=n.charCodeAt(a+1),f=n.charCodeAt(a+2),v=n.charCodeAt(a+3),N=n.charCodeAt(a+4);if(!(b===5&&w===104&&y===116&&f===116&&v===112&&N===115)){if(!(b===4&&w===104&&y===116&&f===116&&v===112)){if(!(b===3&&w===119&&y===115&&f===115)){if(!(b===2&&w===119&&y===115))for(let R=a;R<m;R+=1){const S=n.charCodeAt(R)|32;if(!(S>=97&&S<=122||S>=48&&S<=57||S===46||S===45||S===43))return null}}}}for(a=m+2;n.charCodeAt(a)===47;)a+=1}}let l=-1,u=-1,d=-1;for(let m=a;m<o;m+=1){const b=n.charCodeAt(m);if(b===35||b===47||b===63){o=m;break}else b===64?l=m:b===93?u=m:b===58?d=m:b>=65&&b<=90&&(t=!0)}if(l!==-1&&l>a&&l<o&&(a=l+1),n.charCodeAt(a)===91)return u!==-1?n.slice(a+1,u).toLowerCase():null;d!==-1&&d>a&&d<o&&(o=d)}for(;o>a+1&&n.charCodeAt(o-1)===46;)o-=1;const s=a!==0||o!==n.length?n.slice(a,o):n;return t?s.toLowerCase():s}function Sa(n){if(n.length<7||n.length>15)return!1;let e=0;for(let a=0;a<n.length;a+=1){const o=n.charCodeAt(a);if(o===46)e+=1;else if(o<48||o>57)return!1}return e===3&&n.charCodeAt(0)!==46&&n.charCodeAt(n.length-1)!==46}function Na(n){if(n.length<3)return!1;let e=n.startsWith("[")?1:0,a=n.length;if(n[a-1]==="]"&&(a-=1),a-e>39)return!1;let o=!1;for(;e<a;e+=1){const t=n.charCodeAt(e);if(t===58)o=!0;else if(!(t>=48&&t<=57||t>=97&&t<=102||t>=65&&t<=90))return!1}return o}function ja(n){return Na(n)||Sa(n)}function ye(n){return n>=97&&n<=122||n>=48&&n<=57||n>127}function be(n){if(n.length>255||n.length===0||!ye(n.charCodeAt(0))&&n.charCodeAt(0)!==46&&n.charCodeAt(0)!==95)return!1;let e=-1,a=-1;const o=n.length;for(let t=0;t<o;t+=1){const s=n.charCodeAt(t);if(s===46){if(t-e>64||a===46||a===45||a===95)return!1;e=t}else if(!(ye(s)||s===45||s===95))return!1;a=s}return o-e-1<=63&&a!==45}function Ue({allowIcannDomains:n=!0,allowPrivateDomains:e=!1,detectIp:a=!0,extractHostname:o=!0,mixedInputs:t=!0,validHosts:s=null,validateHostname:l=!0}){return{allowIcannDomains:n,allowPrivateDomains:e,detectIp:a,extractHostname:o,mixedInputs:t,validHosts:s,validateHostname:l}}const Ca=Ue({});function za(n){return n===void 0?Ca:Ue(n)}function Va(n,e){return e.length===n.length?"":n.slice(0,-e.length-1)}function Ba(){return{domain:null,domainWithoutSuffix:null,hostname:null,isIcann:null,isIp:null,isPrivate:null,publicSuffix:null,subdomain:null}}function Ia(n,e,a,o,t){const s=za(o);return typeof n!="string"||(s.extractHostname?s.mixedInputs?t.hostname=me(n,be(n)):t.hostname=me(n,!1):t.hostname=n,s.detectIp&&t.hostname!==null&&(t.isIp=ja(t.hostname),t.isIp))?t:s.validateHostname&&s.extractHostname&&t.hostname!==null&&!be(t.hostname)?(t.hostname=null,t):(t.hostname===null||(a(t.hostname,s,t),t.publicSuffix===null)||(t.domain=Pa(t.publicSuffix,t.hostname,s),t.domain===null)||(t.subdomain=Va(t.hostname,t.domain),t.domainWithoutSuffix=Ra(t.domain,t.publicSuffix)),t)}function La(n,e,a){if(!e.allowPrivateDomains&&n.length>3){const o=n.length-1,t=n.charCodeAt(o),s=n.charCodeAt(o-1),l=n.charCodeAt(o-2),u=n.charCodeAt(o-3);if(t===109&&s===111&&l===99&&u===46)return a.isIcann=!0,a.isPrivate=!1,a.publicSuffix="com",!0;if(t===103&&s===114&&l===111&&u===46)return a.isIcann=!0,a.isPrivate=!1,a.publicSuffix="org",!0;if(t===117&&s===100&&l===101&&u===46)return a.isIcann=!0,a.isPrivate=!1,a.publicSuffix="edu",!0;if(t===118&&s===111&&l===103&&u===46)return a.isIcann=!0,a.isPrivate=!1,a.publicSuffix="gov",!0;if(t===116&&s===101&&l===110&&u===46)return a.isIcann=!0,a.isPrivate=!1,a.publicSuffix="net",!0;if(t===101&&s===100&&l===46)return a.isIcann=!0,a.isPrivate=!1,a.publicSuffix="de",!0}return!1}const Ua=function(){const n=[1,{}],e=[0,{city:n}];return[0,{ck:[0,{www:n}],jp:[0,{kawasaki:e,kitakyushu:e,kobe:e,nagoya:e,sapporo:e,sendai:e,yokohama:e}]}]}(),qa=function(){const n=[1,{}],e=[2,{}],a=[1,{com:n,edu:n,gov:n,net:n,org:n}],o=[1,{com:n,edu:n,gov:n,mil:n,net:n,org:n}],t=[0,{"*":e}],s=[2,{s:t}],l=[0,{relay:e}],u=[2,{id:e}],d=[1,{gov:n}],m=[0,{airflow:t,"lambda-url":e,"transfer-webapp":e}],b=[0,{airflow:t,"transfer-webapp":e}],w=[0,{"transfer-webapp":e}],y=[0,{"transfer-webapp":e,"transfer-webapp-fips":e}],f=[0,{notebook:e,studio:e}],v=[0,{labeling:e,notebook:e,studio:e}],N=[0,{notebook:e}],R=[0,{labeling:e,notebook:e,"notebook-fips":e,studio:e}],S=[0,{notebook:e,"notebook-fips":e,studio:e,"studio-fips":e}],$=[0,{shop:e}],T=[0,{"*":n}],B=[1,{co:e}],A=[0,{objects:e}],Y=[2,{nodes:e}],U=[0,{my:e}],q=[0,{s3:e,"s3-accesspoint":e,"s3-website":e}],Fn=[0,{s3:e,"s3-accesspoint":e}],Gn=[0,{direct:e}],I=[0,{"webview-assets":e}],M=[0,{vfs:e,"webview-assets":e}],W=[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:q,s3:e,"s3-accesspoint":e,"s3-object-lambda":e,"s3-website":e,"aws-cloud9":I,cloud9:M}],nn=[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:Fn,s3:e,"s3-accesspoint":e,"s3-object-lambda":e,"s3-website":e,"aws-cloud9":I,cloud9:M}],F=[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:q,s3:e,"s3-accesspoint":e,"s3-object-lambda":e,"s3-website":e,"analytics-gateway":e,"aws-cloud9":I,cloud9:M}],G=[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:q,s3:e,"s3-accesspoint":e,"s3-object-lambda":e,"s3-website":e}],en=[0,{s3:e,"s3-accesspoint":e,"s3-accesspoint-fips":e,"s3-fips":e,"s3-website":e}],Yn=[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:en,s3:e,"s3-accesspoint":e,"s3-accesspoint-fips":e,"s3-fips":e,"s3-object-lambda":e,"s3-website":e,"aws-cloud9":I,cloud9:M}],bn=[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:en,s3:e,"s3-accesspoint":e,"s3-accesspoint-fips":e,"s3-fips":e,"s3-object-lambda":e,"s3-website":e}],Wn=[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:en,s3:e,"s3-accesspoint":e,"s3-accesspoint-fips":e,"s3-deprecated":e,"s3-fips":e,"s3-object-lambda":e,"s3-website":e,"analytics-gateway":e,"aws-cloud9":I,cloud9:M}],k=[0,{auth:e}],an=[0,{auth:e,"auth-fips":e}],Hn=[0,{"auth-fips":e}],Xn=[0,{apps:e}],hn=[0,{paas:e}],Qn=[2,{eu:e}],gn=[0,{app:e}],fn=[0,{site:e}],tn=[1,{com:n,edu:n,net:n,org:n}],kn=[0,{j:e}],Kn=[0,{dyn:e}],Jn=[2,{web:e}],Zn=[1,{discourse:e}],ne=[1,{co:n,com:n,edu:n,gov:n,net:n,org:n}],ee=[0,{p:e}],ae=[0,{user:e}],H=[0,{cdn:e}],te=[2,{raw:t}],_n=[0,{cust:e,reservd:e}],oe=[0,{cust:e}],wn=[0,{s3:e}],ie=[1,{biz:n,com:n,edu:n,gov:n,info:n,net:n,org:n}],vn=[0,{ipfs:e}],on=[1,{framer:e}],se=[0,{forgot:e}],ma=[0,{blob:e,file:e,web:e}],re=[0,{core:ma,servicebus:e}],x=[1,{gs:n}],le=[0,{nes:n}],h=[1,{k12:n,cc:n,lib:n}],ce=[1,{cc:n}],sn=[1,{cc:n,lib:n}];return[0,{ac:[1,{com:n,edu:n,gov:n,mil:n,net:n,org:n,drr:e,feedback:e,forms:e}],ad:n,ae:[1,{ac:n,co:n,gov:n,mil:n,net:n,org:n,sch:n}],aero:[1,{airline:n,airport:n,"accident-investigation":n,"accident-prevention":n,aerobatic:n,aeroclub:n,aerodrome:n,agents:n,"air-surveillance":n,"air-traffic-control":n,aircraft:n,airtraffic:n,ambulance:n,association:n,author:n,ballooning:n,broker:n,caa:n,cargo:n,catering:n,certification:n,championship:n,charter:n,civilaviation:n,club:n,conference:n,consultant:n,consulting:n,control:n,council:n,crew:n,design:n,dgca:n,educator:n,emergency:n,engine:n,engineer:n,entertainment:n,equipment:n,exchange:n,express:n,federation:n,flight:n,freight:n,fuel:n,gliding:n,government:n,groundhandling:n,group:n,hanggliding:n,homebuilt:n,insurance:n,journal:n,journalist:n,leasing:n,logistics:n,magazine:n,maintenance:n,marketplace:n,media:n,microlight:n,modelling:n,navigation:n,parachuting:n,paragliding:n,"passenger-association":n,pilot:n,press:n,production:n,recreation:n,repbody:n,res:n,research:n,rotorcraft:n,safety:n,scientist:n,services:n,show:n,skydiving:n,software:n,student:n,taxi:n,trader:n,trading:n,trainer:n,union:n,workinggroup:n,works:n}],af:a,ag:[1,{co:n,com:n,net:n,nom:n,org:n,obj:e}],ai:[1,{com:n,net:n,off:n,org:n,uwu:e,framer:e,kiloapps:e}],al:o,am:[1,{co:n,com:n,commune:n,net:n,org:n,radio:e}],ao:[1,{co:n,ed:n,edu:n,gov:n,gv:n,it:n,og:n,org:n,pb:n}],aq:n,ar:[1,{bet:n,com:n,coop:n,edu:n,gob:n,gov:n,int:n,mil:n,musica:n,mutual:n,net:n,org:n,seg:n,senasa:n,tur:n}],arpa:[1,{e164:n,home:n,"in-addr":n,ip6:n,iris:n,uri:n,urn:n}],as:d,asia:[1,{cloudns:e,daemon:e,dix:e}],at:[1,{4:e,ac:[1,{sth:n}],co:n,gv:n,or:n,funkfeuer:[0,{wien:e}],futurecms:[0,{"*":e,ex:t,in:t}],futurehosting:e,futuremailing:e,ortsinfo:[0,{ex:t,kunden:t}],biz:e,info:e,"123webseite":e,priv:e,my:e,myspreadshop:e,"12hp":e,"2ix":e,"4lima":e,"lima-city":e}],au:[1,{asn:n,com:[1,{cloudlets:[0,{mel:e}],myspreadshop:e}],edu:[1,{act:n,catholic:n,nsw:n,nt:n,qld:n,sa:n,tas:n,vic:n,wa:n}],gov:[1,{qld:n,sa:n,tas:n,vic:n,wa:n}],id:n,net:n,org:n,conf:n,oz:n,act:n,nsw:n,nt:n,qld:n,sa:n,tas:n,vic:n,wa:n,hrsn:[0,{vps:e}]}],aw:[1,{com:n}],ax:n,az:[1,{biz:n,co:n,com:n,edu:n,gov:n,info:n,int:n,mil:n,name:n,net:n,org:n,pp:n,pro:n}],ba:[1,{com:n,edu:n,gov:n,mil:n,net:n,org:n,brendly:$,rs:e}],bb:[1,{biz:n,co:n,com:n,edu:n,gov:n,info:n,net:n,org:n,store:n,tv:n}],bd:[1,{ac:n,ai:n,co:n,com:n,edu:n,gov:n,id:n,info:n,it:n,mil:n,net:n,org:n,sch:n,tv:n}],be:[1,{ac:n,cloudns:e,webhosting:e,interhostsolutions:[0,{cloud:e}],kuleuven:[0,{ezproxy:e}],"123website":e,myspreadshop:e,transurl:t}],bf:d,bg:[1,{0:n,1:n,2:n,3:n,4:n,5:n,6:n,7:n,8:n,9:n,a:n,b:n,c:n,d:n,e:n,f:n,g:n,h:n,i:n,j:n,k:n,l:n,m:n,n,o:n,p:n,q:n,r:n,s:n,t:n,u:n,v:n,w:n,x:n,y:n,z:n,barsy:e}],bh:a,bi:[1,{co:n,com:n,edu:n,or:n,org:n}],biz:[1,{activetrail:e,"cloud-ip":e,cloudns:e,jozi:e,dyndns:e,"for-better":e,"for-more":e,"for-some":e,"for-the":e,selfip:e,webhop:e,orx:e,mmafan:e,myftp:e,"no-ip":e,dscloud:e}],bj:[1,{africa:n,agro:n,architectes:n,assur:n,avocats:n,co:n,com:n,eco:n,econo:n,edu:n,info:n,loisirs:n,money:n,net:n,org:n,ote:n,restaurant:n,resto:n,tourism:n,univ:n}],bm:a,bn:[1,{com:n,edu:n,gov:n,net:n,org:n,co:e}],bo:[1,{com:n,edu:n,gob:n,int:n,mil:n,net:n,org:n,tv:n,web:n,academia:n,agro:n,arte:n,blog:n,bolivia:n,ciencia:n,cooperativa:n,democracia:n,deporte:n,ecologia:n,economia:n,empresa:n,indigena:n,industria:n,info:n,medicina:n,movimiento:n,musica:n,natural:n,nombre:n,noticias:n,patria:n,plurinacional:n,politica:n,profesional:n,pueblo:n,revista:n,salud:n,tecnologia:n,tksat:n,transporte:n,wiki:n}],br:[1,{"9guacu":n,abc:n,adm:n,adv:n,agr:n,aju:n,am:n,anani:n,aparecida:n,api:n,app:n,arq:n,art:n,ato:n,b:n,barueri:n,belem:n,bet:n,bhz:n,bib:n,bio:n,blog:n,bmd:n,boavista:n,bsb:n,campinagrande:n,campinas:n,caxias:n,cim:n,cng:n,cnt:n,com:[1,{simplesite:e}],contagem:n,coop:n,coz:n,cri:n,cuiaba:n,curitiba:n,def:n,des:n,det:n,dev:n,ecn:n,eco:n,edu:n,emp:n,enf:n,eng:n,esp:n,etc:n,eti:n,far:n,feira:n,flog:n,floripa:n,fm:n,fnd:n,fortal:n,fot:n,foz:n,fst:n,g12:n,geo:n,ggf:n,goiania:n,gov:[1,{ac:n,al:n,am:n,ap:n,ba:n,ce:n,df:n,es:n,go:n,ma:n,mg:n,ms:n,mt:n,pa:n,pb:n,pe:n,pi:n,pr:n,rj:n,rn:n,ro:n,rr:n,rs:n,sc:n,se:n,sp:n,to:n}],gru:n,ia:n,imb:n,ind:n,inf:n,jab:n,jampa:n,jdf:n,joinville:n,jor:n,jus:n,leg:[1,{ac:e,al:e,am:e,ap:e,ba:e,ce:e,df:e,es:e,go:e,ma:e,mg:e,ms:e,mt:e,pa:e,pb:e,pe:e,pi:e,pr:e,rj:e,rn:e,ro:e,rr:e,rs:e,sc:e,se:e,sp:e,to:e}],leilao:n,lel:n,log:n,londrina:n,macapa:n,maceio:n,manaus:n,maringa:n,mat:n,med:n,mil:n,morena:n,mp:n,mus:n,natal:n,net:n,niteroi:n,nom:T,not:n,ntr:n,odo:n,ong:n,org:n,osasco:n,palmas:n,poa:n,ppg:n,pro:n,psc:n,psi:n,pvh:n,qsl:n,radio:n,rec:n,recife:n,rep:n,ribeirao:n,rio:n,riobranco:n,riopreto:n,salvador:n,sampa:n,santamaria:n,santoandre:n,saobernardo:n,saogonca:n,seg:n,sjc:n,slg:n,slz:n,social:n,sorocaba:n,srv:n,taxi:n,tc:n,tec:n,teo:n,the:n,tmp:n,trd:n,tur:n,tv:n,udi:n,vet:n,vix:n,vlog:n,wiki:n,xyz:n,zlg:n,tche:e}],bs:[1,{com:n,edu:n,gov:n,net:n,org:n,we:e}],bt:a,bv:n,bw:[1,{ac:n,co:n,gov:n,net:n,org:n}],by:[1,{gov:n,mil:n,com:n,of:n,mediatech:e}],bz:[1,{co:n,com:n,edu:n,gov:n,net:n,org:n,za:e,mydns:e,gsj:e}],ca:[1,{ab:n,bc:n,mb:n,nb:n,nf:n,nl:n,ns:n,nt:n,nu:n,on:n,pe:n,qc:n,sk:n,yk:n,gc:n,barsy:e,awdev:t,co:e,"no-ip":e,onid:e,myspreadshop:e,box:e}],cat:n,cc:[1,{cleverapps:e,"cloud-ip":e,cloudns:e,ccwu:e,ftpaccess:e,"game-server":e,myphotos:e,scrapping:e,twmail:e,csx:e,fantasyleague:e,spawn:[0,{instances:e}],ec:e,eu:e,gu:e,uk:e,us:e}],cd:[1,{gov:n,cc:e}],cf:n,cg:n,ch:[1,{square7:e,cloudns:e,cloudscale:[0,{cust:e,lpg:A,rma:A}],objectstorage:[0,{lpg:e,rma:e}],flow:[0,{ae:[0,{alp1:e}],appengine:e}],"linkyard-cloud":e,gotdns:e,dnsking:e,"123website":e,myspreadshop:e,firenet:[0,{"*":e,svc:t}],"12hp":e,"2ix":e,"4lima":e,"lima-city":e}],ci:[1,{ac:n,"xn--aroport-bya":n,aéroport:n,asso:n,co:n,com:n,ed:n,edu:n,go:n,gouv:n,int:n,net:n,or:n,org:n,us:e}],ck:T,cl:[1,{co:n,gob:n,gov:n,mil:n,cloudns:e}],cm:[1,{co:n,com:n,gov:n,net:n}],cn:[1,{ac:n,com:[1,{amazonaws:[0,{"cn-north-1":[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,rds:t,dualstack:q,s3:e,"s3-accesspoint":e,"s3-deprecated":e,"s3-object-lambda":e,"s3-website":e}],"cn-northwest-1":[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,rds:t,dualstack:Fn,s3:e,"s3-accesspoint":e,"s3-object-lambda":e,"s3-website":e}],compute:t,airflow:[0,{"cn-north-1":t,"cn-northwest-1":t}],eb:[0,{"cn-north-1":e,"cn-northwest-1":e}],elb:t}],amazonwebservices:[0,{on:[0,{"cn-north-1":b,"cn-northwest-1":b}]}],sagemaker:[0,{"cn-north-1":f,"cn-northwest-1":f}]}],edu:n,gov:n,mil:n,net:n,org:n,"xn--55qx5d":n,公司:n,"xn--od0alg":n,網絡:n,"xn--io0a7i":n,网络:n,ah:n,bj:n,cq:n,fj:n,gd:n,gs:n,gx:n,gz:n,ha:n,hb:n,he:n,hi:n,hk:n,hl:n,hn:n,jl:n,js:n,jx:n,ln:n,mo:n,nm:n,nx:n,qh:n,sc:n,sd:n,sh:[1,{as:e}],sn:n,sx:n,tj:n,tw:n,xj:n,xz:n,yn:n,zj:n,"canva-apps":e,canvasite:U,myqnapcloud:e,quickconnect:Gn}],co:[1,{com:n,edu:n,gov:n,mil:n,net:n,nom:n,org:n,carrd:e,crd:e,otap:t,hidns:e,leadpages:e,lpages:e,mypi:e,xmit:t,rdpa:[0,{clusters:t,srvrless:t}],firewalledreplit:u,repl:u,supabase:[2,{realtime:e,storage:e}],umso:e}],com:[1,{a2hosted:e,cpserver:e,adobeaemcloud:[2,{dev:t}],africa:e,auiusercontent:t,aivencloud:e,alibabacloudcs:e,kasserver:e,amazonaws:[0,{"af-south-1":W,"ap-east-1":nn,"ap-northeast-1":F,"ap-northeast-2":F,"ap-northeast-3":W,"ap-south-1":F,"ap-south-2":G,"ap-southeast-1":F,"ap-southeast-2":F,"ap-southeast-3":G,"ap-southeast-4":G,"ap-southeast-5":[0,{"execute-api":e,dualstack:q,s3:e,"s3-accesspoint":e,"s3-deprecated":e,"s3-object-lambda":e,"s3-website":e}],"ca-central-1":Yn,"ca-west-1":bn,"eu-central-1":F,"eu-central-2":G,"eu-north-1":nn,"eu-south-1":W,"eu-south-2":G,"eu-west-1":[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:q,s3:e,"s3-accesspoint":e,"s3-deprecated":e,"s3-object-lambda":e,"s3-website":e,"analytics-gateway":e,"aws-cloud9":I,cloud9:M}],"eu-west-2":nn,"eu-west-3":W,"il-central-1":[0,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:q,s3:e,"s3-accesspoint":e,"s3-object-lambda":e,"s3-website":e,"aws-cloud9":I,cloud9:[0,{vfs:e}]}],"me-central-1":G,"me-south-1":nn,"sa-east-1":W,"us-east-1":[2,{"execute-api":e,"emrappui-prod":e,"emrnotebooks-prod":e,"emrstudio-prod":e,dualstack:en,s3:e,"s3-accesspoint":e,"s3-accesspoint-fips":e,"s3-deprecated":e,"s3-fips":e,"s3-object-lambda":e,"s3-website":e,"analytics-gateway":e,"aws-cloud9":I,cloud9:M}],"us-east-2":Wn,"us-gov-east-1":bn,"us-gov-west-1":bn,"us-west-1":Yn,"us-west-2":Wn,compute:t,"compute-1":t,airflow:[0,{"af-south-1":t,"ap-east-1":t,"ap-northeast-1":t,"ap-northeast-2":t,"ap-northeast-3":t,"ap-south-1":t,"ap-south-2":t,"ap-southeast-1":t,"ap-southeast-2":t,"ap-southeast-3":t,"ap-southeast-4":t,"ap-southeast-5":t,"ap-southeast-7":t,"ca-central-1":t,"ca-west-1":t,"eu-central-1":t,"eu-central-2":t,"eu-north-1":t,"eu-south-1":t,"eu-south-2":t,"eu-west-1":t,"eu-west-2":t,"eu-west-3":t,"il-central-1":t,"me-central-1":t,"me-south-1":t,"sa-east-1":t,"us-east-1":t,"us-east-2":t,"us-west-1":t,"us-west-2":t}],rds:[0,{"af-south-1":t,"ap-east-1":t,"ap-east-2":t,"ap-northeast-1":t,"ap-northeast-2":t,"ap-northeast-3":t,"ap-south-1":t,"ap-south-2":t,"ap-southeast-1":t,"ap-southeast-2":t,"ap-southeast-3":t,"ap-southeast-4":t,"ap-southeast-5":t,"ap-southeast-6":t,"ap-southeast-7":t,"ca-central-1":t,"ca-west-1":t,"eu-central-1":t,"eu-central-2":t,"eu-west-1":t,"eu-west-2":t,"eu-west-3":t,"il-central-1":t,"me-central-1":t,"me-south-1":t,"mx-central-1":t,"sa-east-1":t,"us-east-1":t,"us-east-2":t,"us-gov-east-1":t,"us-gov-west-1":t,"us-northeast-1":t,"us-west-1":t,"us-west-2":t}],s3:e,"s3-1":e,"s3-ap-east-1":e,"s3-ap-northeast-1":e,"s3-ap-northeast-2":e,"s3-ap-northeast-3":e,"s3-ap-south-1":e,"s3-ap-southeast-1":e,"s3-ap-southeast-2":e,"s3-ca-central-1":e,"s3-eu-central-1":e,"s3-eu-north-1":e,"s3-eu-west-1":e,"s3-eu-west-2":e,"s3-eu-west-3":e,"s3-external-1":e,"s3-fips-us-gov-east-1":e,"s3-fips-us-gov-west-1":e,"s3-global":[0,{accesspoint:[0,{mrap:e}]}],"s3-me-south-1":e,"s3-sa-east-1":e,"s3-us-east-2":e,"s3-us-gov-east-1":e,"s3-us-gov-west-1":e,"s3-us-west-1":e,"s3-us-west-2":e,"s3-website-ap-northeast-1":e,"s3-website-ap-southeast-1":e,"s3-website-ap-southeast-2":e,"s3-website-eu-west-1":e,"s3-website-sa-east-1":e,"s3-website-us-east-1":e,"s3-website-us-gov-west-1":e,"s3-website-us-west-1":e,"s3-website-us-west-2":e,elb:t}],amazoncognito:[0,{"af-south-1":k,"ap-east-1":k,"ap-northeast-1":k,"ap-northeast-2":k,"ap-northeast-3":k,"ap-south-1":k,"ap-south-2":k,"ap-southeast-1":k,"ap-southeast-2":k,"ap-southeast-3":k,"ap-southeast-4":k,"ap-southeast-5":k,"ap-southeast-7":k,"ca-central-1":k,"ca-west-1":k,"eu-central-1":k,"eu-central-2":k,"eu-north-1":k,"eu-south-1":k,"eu-south-2":k,"eu-west-1":k,"eu-west-2":k,"eu-west-3":k,"il-central-1":k,"me-central-1":k,"me-south-1":k,"mx-central-1":k,"sa-east-1":k,"us-east-1":an,"us-east-2":an,"us-gov-east-1":Hn,"us-gov-west-1":Hn,"us-west-1":an,"us-west-2":an}],amplifyapp:e,awsapprunner:t,awsapps:e,elasticbeanstalk:[2,{"af-south-1":e,"ap-east-1":e,"ap-northeast-1":e,"ap-northeast-2":e,"ap-northeast-3":e,"ap-south-1":e,"ap-southeast-1":e,"ap-southeast-2":e,"ap-southeast-3":e,"ap-southeast-5":e,"ap-southeast-7":e,"ca-central-1":e,"eu-central-1":e,"eu-north-1":e,"eu-south-1":e,"eu-south-2":e,"eu-west-1":e,"eu-west-2":e,"eu-west-3":e,"il-central-1":e,"me-central-1":e,"me-south-1":e,"sa-east-1":e,"us-east-1":e,"us-east-2":e,"us-gov-east-1":e,"us-gov-west-1":e,"us-west-1":e,"us-west-2":e}],awsglobalaccelerator:e,siiites:e,appspacehosted:e,appspaceusercontent:e,"on-aptible":e,myasustor:e,"balena-devices":e,boutir:e,bplaced:e,cafjs:e,"canva-apps":e,"canva-hosted-embed":e,canvacode:e,"rice-labs":e,"cdn77-storage":e,br:e,cn:e,de:e,eu:e,jpn:e,mex:e,ru:e,sa:e,uk:e,us:e,za:e,"clever-cloud":[0,{services:t}],abrdns:e,dnsabr:e,"ip-ddns":e,jdevcloud:e,wpdevcloud:e,"cf-ipfs":e,"cloudflare-ipfs":e,trycloudflare:e,co:e,devinapps:t,builtwithdark:e,datadetect:[0,{demo:e,instance:e}],dattolocal:e,dattorelay:e,dattoweb:e,mydatto:e,digitaloceanspaces:t,discordsays:e,discordsez:e,drayddns:e,dreamhosters:e,durumis:e,blogdns:e,cechire:e,dnsalias:e,dnsdojo:e,doesntexist:e,dontexist:e,doomdns:e,"dyn-o-saur":e,dynalias:e,"dyndns-at-home":e,"dyndns-at-work":e,"dyndns-blog":e,"dyndns-free":e,"dyndns-home":e,"dyndns-ip":e,"dyndns-mail":e,"dyndns-office":e,"dyndns-pics":e,"dyndns-remote":e,"dyndns-server":e,"dyndns-web":e,"dyndns-wiki":e,"dyndns-work":e,"est-a-la-maison":e,"est-a-la-masion":e,"est-le-patron":e,"est-mon-blogueur":e,"from-ak":e,"from-al":e,"from-ar":e,"from-ca":e,"from-ct":e,"from-dc":e,"from-de":e,"from-fl":e,"from-ga":e,"from-hi":e,"from-ia":e,"from-id":e,"from-il":e,"from-in":e,"from-ks":e,"from-ky":e,"from-ma":e,"from-md":e,"from-mi":e,"from-mn":e,"from-mo":e,"from-ms":e,"from-mt":e,"from-nc":e,"from-nd":e,"from-ne":e,"from-nh":e,"from-nj":e,"from-nm":e,"from-nv":e,"from-oh":e,"from-ok":e,"from-or":e,"from-pa":e,"from-pr":e,"from-ri":e,"from-sc":e,"from-sd":e,"from-tn":e,"from-tx":e,"from-ut":e,"from-va":e,"from-vt":e,"from-wa":e,"from-wi":e,"from-wv":e,"from-wy":e,getmyip:e,gotdns:e,"hobby-site":e,homelinux:e,homeunix:e,iamallama:e,"is-a-anarchist":e,"is-a-blogger":e,"is-a-bookkeeper":e,"is-a-bulls-fan":e,"is-a-caterer":e,"is-a-chef":e,"is-a-conservative":e,"is-a-cpa":e,"is-a-cubicle-slave":e,"is-a-democrat":e,"is-a-designer":e,"is-a-doctor":e,"is-a-financialadvisor":e,"is-a-geek":e,"is-a-green":e,"is-a-guru":e,"is-a-hard-worker":e,"is-a-hunter":e,"is-a-landscaper":e,"is-a-lawyer":e,"is-a-liberal":e,"is-a-libertarian":e,"is-a-llama":e,"is-a-musician":e,"is-a-nascarfan":e,"is-a-nurse":e,"is-a-painter":e,"is-a-personaltrainer":e,"is-a-photographer":e,"is-a-player":e,"is-a-republican":e,"is-a-rockstar":e,"is-a-socialist":e,"is-a-student":e,"is-a-teacher":e,"is-a-techie":e,"is-a-therapist":e,"is-an-accountant":e,"is-an-actor":e,"is-an-actress":e,"is-an-anarchist":e,"is-an-artist":e,"is-an-engineer":e,"is-an-entertainer":e,"is-certified":e,"is-gone":e,"is-into-anime":e,"is-into-cars":e,"is-into-cartoons":e,"is-into-games":e,"is-leet":e,"is-not-certified":e,"is-slick":e,"is-uberleet":e,"is-with-theband":e,"isa-geek":e,"isa-hockeynut":e,issmarterthanyou:e,"likes-pie":e,likescandy:e,"neat-url":e,"saves-the-whales":e,selfip:e,"sells-for-less":e,"sells-for-u":e,servebbs:e,"simple-url":e,"space-to-rent":e,"teaches-yoga":e,writesthisblog:e,"1cooldns":e,bumbleshrimp:e,ddnsfree:e,ddnsgeek:e,ddnsguru:e,dynuddns:e,dynuhosting:e,giize:e,gleeze:e,kozow:e,loseyourip:e,ooguy:e,pivohosting:e,theworkpc:e,wiredbladehosting:e,emergentagent:[0,{preview:e}],mytuleap:e,"tuleap-partners":e,encoreapi:e,evennode:[0,{"eu-1":e,"eu-2":e,"eu-3":e,"eu-4":e,"us-1":e,"us-2":e,"us-3":e,"us-4":e}],onfabrica:e,"fastly-edge":e,"fastly-terrarium":e,"fastvps-server":e,mydobiss:e,firebaseapp:e,fldrv:e,framercanvas:e,"freebox-os":e,freeboxos:e,freemyip:e,aliases121:e,gentapps:e,gentlentapis:e,githubusercontent:e,"0emm":t,appspot:[2,{r:t}],blogspot:e,codespot:e,googleapis:e,googlecode:e,pagespeedmobilizer:e,withgoogle:e,withyoutube:e,grayjayleagues:e,hatenablog:e,hatenadiary:e,"hercules-app":e,"hercules-dev":e,herokuapp:e,gr:e,smushcdn:e,wphostedmail:e,wpmucdn:e,pixolino:e,"apps-1and1":e,"live-website":e,"webspace-host":e,dopaas:e,"hosted-by-previder":hn,hosteur:[0,{"rag-cloud":e,"rag-cloud-ch":e}],"ik-server":[0,{jcloud:e,"jcloud-ver-jpc":e}],jelastic:[0,{demo:e}],massivegrid:hn,wafaicloud:[0,{jed:e,ryd:e}],"eu1-plenit":e,"la1-plenit":e,"us1-plenit":e,webadorsite:e,"on-forge":e,"on-vapor":e,lpusercontent:e,linode:[0,{members:e,nodebalancer:t}],linodeobjects:t,linodeusercontent:[0,{ip:e}],localtonet:e,lovableproject:e,barsycenter:e,barsyonline:e,lutrausercontent:t,magicpatternsapp:e,modelscape:e,mwcloudnonprod:e,polyspace:e,mazeplay:e,miniserver:e,atmeta:e,fbsbx:Xn,meteorapp:Qn,routingthecloud:e,"same-app":e,"same-preview":e,mydbserver:e,mochausercontent:e,hostedpi:e,"mythic-beasts":[0,{caracal:e,customer:e,fentiger:e,lynx:e,ocelot:e,oncilla:e,onza:e,sphinx:e,vs:e,x:e,yali:e}],nospamproxy:[0,{cloud:[2,{o365:e}]}],"4u":e,nfshost:e,"3utilities":e,blogsyte:e,ciscofreak:e,damnserver:e,ddnsking:e,ditchyourip:e,dnsiskinky:e,dynns:e,geekgalaxy:e,"health-carereform":e,homesecuritymac:e,homesecuritypc:e,myactivedirectory:e,mysecuritycamera:e,myvnc:e,"net-freaks":e,onthewifi:e,point2this:e,quicksytes:e,securitytactics:e,servebeer:e,servecounterstrike:e,serveexchange:e,serveftp:e,servegame:e,servehalflife:e,servehttp:e,servehumour:e,serveirc:e,servemp3:e,servep2p:e,servepics:e,servequake:e,servesarcasm:e,stufftoread:e,unusualperson:e,workisboring:e,myiphost:e,observableusercontent:[0,{static:e}],simplesite:e,oaiusercontent:t,orsites:e,operaunite:e,"customer-oci":[0,{"*":e,oci:t,ocp:t,ocs:t}],oraclecloudapps:t,oraclegovcloudapps:t,"authgear-staging":e,authgearapps:e,outsystemscloud:e,ownprovider:e,pgfog:e,pagexl:e,gotpantheon:e,paywhirl:t,forgeblocks:e,upsunapp:e,"postman-echo":e,prgmr:[0,{xen:e}],"project-study":[0,{dev:e}],pythonanywhere:Qn,qa2:e,"alpha-myqnapcloud":e,"dev-myqnapcloud":e,mycloudnas:e,mynascloud:e,myqnapcloud:e,qualifioapp:e,ladesk:e,qualyhqpartner:t,qualyhqportal:t,qbuser:e,quipelements:t,rackmaze:e,"readthedocs-hosted":e,rhcloud:e,onrender:e,render:gn,"subsc-pay":e,"180r":e,dojin:e,sakuratan:e,sakuraweb:e,x0:e,code:[0,{builder:t,"dev-builder":t,"stg-builder":t}],salesforce:[0,{platform:[0,{"code-builder-stg":[0,{test:[0,{"001":t}]}]}]}],logoip:e,scrysec:e,"firewall-gateway":e,myshopblocks:e,myshopify:e,shopitsite:e,"1kapp":e,appchizi:e,applinzi:e,sinaapp:e,vipsinaapp:e,streamlitapp:e,"try-snowplow":e,"playstation-cloud":e,myspreadshop:e,"w-corp-staticblitz":e,"w-credentialless-staticblitz":e,"w-staticblitz":e,"stackhero-network":e,stdlib:[0,{api:e}],strapiapp:[2,{media:e}],"streak-link":e,streaklinks:e,streakusercontent:e,"temp-dns":e,dsmynas:e,familyds:e,mytabit:e,taveusercontent:e,"tb-hosting":fn,reservd:e,thingdustdata:e,"townnews-staging":e,typeform:[0,{pro:e}],hk:e,it:e,"deus-canvas":e,vultrobjects:t,wafflecell:e,hotelwithflight:e,"reserve-online":e,cprapid:e,pleskns:e,remotewd:e,wiardweb:[0,{pages:e}],"base44-sandbox":e,wixsite:e,wixstudio:e,messwithdns:e,"woltlab-demo":e,wpenginepowered:[2,{js:e}],xnbay:[2,{u2:e,"u2-local":e}],xtooldevice:e,yolasite:e}],coop:n,cr:[1,{ac:n,co:n,ed:n,fi:n,go:n,or:n,sa:n}],cu:[1,{com:n,edu:n,gob:n,inf:n,nat:n,net:n,org:n}],cv:[1,{com:n,edu:n,id:n,int:n,net:n,nome:n,org:n,publ:n}],cw:tn,cx:[1,{gov:n,cloudns:e,ath:e,info:e,assessments:e,calculators:e,funnels:e,paynow:e,quizzes:e,researched:e,tests:e}],cy:[1,{ac:n,biz:n,com:[1,{scaleforce:kn}],ekloges:n,gov:n,ltd:n,mil:n,net:n,org:n,press:n,pro:n,tm:n}],cz:[1,{gov:n,contentproxy9:[0,{rsc:e}],realm:e,e4:e,co:e,metacentrum:[0,{cloud:t,custom:e}],muni:[0,{cloud:[0,{flt:e,usr:e}]}]}],de:[1,{bplaced:e,square7:e,"bwcloud-os-instance":t,com:e,cosidns:Kn,dnsupdater:e,"dynamisches-dns":e,"internet-dns":e,"l-o-g-i-n":e,ddnss:[2,{dyn:e,dyndns:e}],"dyn-ip24":e,dyndns1:e,"home-webserver":[2,{dyn:e}],"myhome-server":e,dnshome:e,fuettertdasnetz:e,isteingeek:e,istmein:e,lebtimnetz:e,leitungsen:e,traeumtgerade:e,frusky:t,goip:e,"xn--gnstigbestellen-zvb":e,günstigbestellen:e,"xn--gnstigliefern-wob":e,günstigliefern:e,"hs-heilbronn":[0,{it:[0,{pages:e,"pages-research":e}]}],"dyn-berlin":e,"in-berlin":e,"in-brb":e,"in-butter":e,"in-dsl":e,"in-vpn":e,iservschule:e,"mein-iserv":e,schuldock:e,schulplattform:e,schulserver:e,"test-iserv":e,keymachine:e,co:e,"git-repos":e,"lcube-server":e,"svn-repos":e,barsy:e,webspaceconfig:e,"123webseite":e,rub:e,"ruhr-uni-bochum":[2,{noc:[0,{io:e}]}],logoip:e,"firewall-gateway":e,"my-gateway":e,"my-router":e,spdns:e,my:e,speedpartner:[0,{customer:e}],myspreadshop:e,"taifun-dns":e,"12hp":e,"2ix":e,"4lima":e,"lima-city":e,"virtual-user":e,virtualuser:e,"community-pro":e,diskussionsbereich:e,xenonconnect:t}],dj:n,dk:[1,{biz:e,co:e,firm:e,reg:e,store:e,"123hjemmeside":e,myspreadshop:e}],dm:ne,do:[1,{art:n,com:n,edu:n,gob:n,gov:n,mil:n,net:n,org:n,sld:n,web:n}],dz:[1,{art:n,asso:n,com:n,edu:n,gov:n,net:n,org:n,pol:n,soc:n,tm:n}],ec:[1,{abg:n,adm:n,agron:n,arqt:n,art:n,bar:n,chef:n,com:n,cont:n,cpa:n,cue:n,dent:n,dgn:n,disco:n,doc:n,edu:n,eng:n,esm:n,fin:n,fot:n,gal:n,gob:n,gov:n,gye:n,ibr:n,info:n,k12:n,lat:n,loj:n,med:n,mil:n,mktg:n,mon:n,net:n,ntr:n,odont:n,org:n,pro:n,prof:n,psic:n,psiq:n,pub:n,rio:n,rrpp:n,sal:n,tech:n,tul:n,tur:n,uio:n,vet:n,xxx:n,base:e,official:e}],edu:[1,{rit:[0,{"git-pages":e}]}],ee:[1,{aip:n,com:n,edu:n,fie:n,gov:n,lib:n,med:n,org:n,pri:n,riik:n}],eg:[1,{ac:n,com:n,edu:n,eun:n,gov:n,info:n,me:n,mil:n,name:n,net:n,org:n,sci:n,sport:n,tv:n}],er:T,es:[1,{com:n,edu:n,gob:n,nom:n,org:n,"123miweb":e,myspreadshop:e}],et:[1,{biz:n,com:n,edu:n,gov:n,info:n,name:n,net:n,org:n}],eu:[1,{amazonwebservices:[0,{on:[0,{"eusc-de-east-1":[0,{"cognito-idp":k}]}]}],cloudns:e,prvw:e,deuxfleurs:e,dogado:[0,{jelastic:e}],barsy:e,spdns:e,nxa:t,directwp:e,transurl:t}],fi:[1,{aland:n,dy:e,"xn--hkkinen-5wa":e,häkkinen:e,iki:e,cloudplatform:[0,{fi:e}],datacenter:[0,{demo:e,paas:e}],kapsi:e,"123kotisivu":e,myspreadshop:e}],fj:[1,{ac:n,biz:n,com:n,edu:n,gov:n,id:n,info:n,mil:n,name:n,net:n,org:n,pro:n}],fk:T,fm:[1,{com:n,edu:n,net:n,org:n,radio:e,user:t}],fo:n,fr:[1,{asso:n,com:n,gouv:n,nom:n,prd:n,tm:n,avoues:n,cci:n,greta:n,"huissier-justice":n,"fbx-os":e,fbxos:e,"freebox-os":e,freeboxos:e,goupile:e,"123siteweb":e,"on-web":e,"chirurgiens-dentistes-en-france":e,dedibox:e,aeroport:e,avocat:e,chambagri:e,"chirurgiens-dentistes":e,"experts-comptables":e,medecin:e,notaires:e,pharmacien:e,port:e,veterinaire:e,myspreadshop:e,ynh:e}],ga:n,gb:n,gd:[1,{edu:n,gov:n}],ge:[1,{com:n,edu:n,gov:n,net:n,org:n,pvt:n,school:n}],gf:n,gg:[1,{co:n,net:n,org:n,ply:[0,{at:t,d6:e}],botdash:e,kaas:e,stackit:e,panel:[2,{daemon:e}]}],gh:[1,{biz:n,com:n,edu:n,gov:n,mil:n,net:n,org:n}],gi:[1,{com:n,edu:n,gov:n,ltd:n,mod:n,org:n}],gl:[1,{co:n,com:n,edu:n,net:n,org:n}],gm:n,gn:[1,{ac:n,com:n,edu:n,gov:n,net:n,org:n}],gov:n,gp:[1,{asso:n,com:n,edu:n,mobi:n,net:n,org:n}],gq:n,gr:[1,{com:n,edu:n,gov:n,net:n,org:n,barsy:e,simplesite:e}],gs:n,gt:[1,{com:n,edu:n,gob:n,ind:n,mil:n,net:n,org:n}],gu:[1,{com:n,edu:n,gov:n,guam:n,info:n,net:n,org:n,web:n}],gw:[1,{nx:e}],gy:ne,hk:[1,{com:n,edu:n,gov:n,idv:n,net:n,org:n,"xn--ciqpn":n,个人:n,"xn--gmqw5a":n,個人:n,"xn--55qx5d":n,公司:n,"xn--mxtq1m":n,政府:n,"xn--lcvr32d":n,敎育:n,"xn--wcvs22d":n,教育:n,"xn--gmq050i":n,箇人:n,"xn--uc0atv":n,組織:n,"xn--uc0ay4a":n,組织:n,"xn--od0alg":n,網絡:n,"xn--zf0avx":n,網络:n,"xn--mk0axi":n,组織:n,"xn--tn0ag":n,组织:n,"xn--od0aq3b":n,网絡:n,"xn--io0a7i":n,网络:n,inc:e,ltd:e}],hm:n,hn:[1,{com:n,edu:n,gob:n,mil:n,net:n,org:n}],hr:[1,{com:n,from:n,iz:n,name:n,brendly:$}],ht:[1,{adult:n,art:n,asso:n,com:n,coop:n,edu:n,firm:n,gouv:n,info:n,med:n,net:n,org:n,perso:n,pol:n,pro:n,rel:n,shop:n,rt:e}],hu:[1,{2e3:n,agrar:n,bolt:n,casino:n,city:n,co:n,erotica:n,erotika:n,film:n,forum:n,games:n,hotel:n,info:n,ingatlan:n,jogasz:n,konyvelo:n,lakas:n,media:n,news:n,org:n,priv:n,reklam:n,sex:n,shop:n,sport:n,suli:n,szex:n,tm:n,tozsde:n,utazas:n,video:n}],id:[1,{ac:n,biz:n,co:n,desa:n,go:n,kop:n,mil:n,my:n,net:n,or:n,ponpes:n,sch:n,web:n,"xn--9tfky":n,"ᬩᬮᬶ":n,e,zone:e}],ie:[1,{gov:n,myspreadshop:e}],il:[1,{ac:n,co:[1,{ravpage:e,mytabit:e,tabitorder:e}],gov:n,idf:n,k12:n,muni:n,net:n,org:n}],"xn--4dbrk0ce":[1,{"xn--4dbgdty6c":n,"xn--5dbhl8d":n,"xn--8dbq2a":n,"xn--hebda8b":n}],ישראל:[1,{אקדמיה:n,ישוב:n,צהל:n,ממשל:n}],im:[1,{ac:n,co:[1,{ltd:n,plc:n}],com:n,net:n,org:n,tt:n,tv:n}],in:[1,{"5g":n,"6g":n,ac:n,ai:n,am:n,bank:n,bihar:n,biz:n,business:n,ca:n,cn:n,co:n,com:n,coop:n,cs:n,delhi:n,dr:n,edu:n,er:n,fin:n,firm:n,gen:n,gov:n,gujarat:n,ind:n,info:n,int:n,internet:n,io:n,me:n,mil:n,net:n,nic:n,org:n,pg:n,post:n,pro:n,res:n,travel:n,tv:n,uk:n,up:n,us:n,cloudns:e,barsy:e,web:e,indevs:e,supabase:e}],info:[1,{cloudns:e,"dynamic-dns":e,"barrel-of-knowledge":e,"barrell-of-knowledge":e,dyndns:e,"for-our":e,"groks-the":e,"groks-this":e,"here-for-more":e,knowsitall:e,selfip:e,webhop:e,barsy:e,mayfirst:e,mittwald:e,mittwaldserver:e,typo3server:e,dvrcam:e,ilovecollege:e,"no-ip":e,forumz:e,nsupdate:e,dnsupdate:e,"v-info":e}],int:[1,{eu:n}],io:[1,{2038:e,co:n,com:n,edu:n,gov:n,mil:n,net:n,nom:n,org:n,"on-acorn":t,myaddr:e,apigee:e,"b-data":e,beagleboard:e,bitbucket:e,bluebite:e,boxfuse:e,brave:s,browsersafetymark:e,bubble:H,bubbleapps:e,bigv:[0,{uk0:e}],cleverapps:e,cloudbeesusercontent:e,dappnode:[0,{dyndns:e}],darklang:e,definima:e,dedyn:e,icp0:te,icp1:te,qzz:e,"fh-muenster":e,gitbook:e,github:e,gitlab:e,lolipop:e,"hasura-app":e,hostyhosting:e,hypernode:e,moonscale:t,beebyte:hn,beebyteapp:[0,{sekd1:e}],jele:e,keenetic:e,kiloapps:e,webthings:e,loginline:e,barsy:e,azurecontainer:t,ngrok:[2,{ap:e,au:e,eu:e,in:e,jp:e,sa:e,us:e}],nodeart:[0,{stage:e}],pantheonsite:e,forgerock:[0,{id:e}],pstmn:[2,{mock:e}],protonet:e,qcx:[2,{sys:t}],qoto:e,vaporcloud:e,myrdbx:e,"rb-hosting":fn,"on-k3s":t,"on-rio":t,readthedocs:e,resindevice:e,resinstaging:[0,{devices:e}],hzc:e,sandcats:e,scrypted:[0,{client:e}],"mo-siemens":e,lair:Xn,stolos:t,musician:e,utwente:e,edugit:e,telebit:e,thingdust:[0,{dev:_n,disrec:_n,prod:oe,testing:_n}],tickets:e,webflow:e,webflowtest:e,editorx:e,wixstudio:e,basicserver:e,virtualserver:e}],iq:o,ir:[1,{ac:n,co:n,gov:n,id:n,net:n,org:n,sch:n,"xn--mgba3a4f16a":n,ایران:n,"xn--mgba3a4fra":n,ايران:n,arvanedge:e,vistablog:e}],is:n,it:[1,{edu:n,gov:n,abr:n,abruzzo:n,"aosta-valley":n,aostavalley:n,bas:n,basilicata:n,cal:n,calabria:n,cam:n,campania:n,"emilia-romagna":n,emiliaromagna:n,emr:n,"friuli-v-giulia":n,"friuli-ve-giulia":n,"friuli-vegiulia":n,"friuli-venezia-giulia":n,"friuli-veneziagiulia":n,"friuli-vgiulia":n,"friuliv-giulia":n,"friulive-giulia":n,friulivegiulia:n,"friulivenezia-giulia":n,friuliveneziagiulia:n,friulivgiulia:n,fvg:n,laz:n,lazio:n,lig:n,liguria:n,lom:n,lombardia:n,lombardy:n,lucania:n,mar:n,marche:n,mol:n,molise:n,piedmont:n,piemonte:n,pmn:n,pug:n,puglia:n,sar:n,sardegna:n,sardinia:n,sic:n,sicilia:n,sicily:n,taa:n,tos:n,toscana:n,"trentin-sud-tirol":n,"xn--trentin-sd-tirol-rzb":n,"trentin-süd-tirol":n,"trentin-sudtirol":n,"xn--trentin-sdtirol-7vb":n,"trentin-südtirol":n,"trentin-sued-tirol":n,"trentin-suedtirol":n,trentino:n,"trentino-a-adige":n,"trentino-aadige":n,"trentino-alto-adige":n,"trentino-altoadige":n,"trentino-s-tirol":n,"trentino-stirol":n,"trentino-sud-tirol":n,"xn--trentino-sd-tirol-c3b":n,"trentino-süd-tirol":n,"trentino-sudtirol":n,"xn--trentino-sdtirol-szb":n,"trentino-südtirol":n,"trentino-sued-tirol":n,"trentino-suedtirol":n,"trentinoa-adige":n,trentinoaadige:n,"trentinoalto-adige":n,trentinoaltoadige:n,"trentinos-tirol":n,trentinostirol:n,"trentinosud-tirol":n,"xn--trentinosd-tirol-rzb":n,"trentinosüd-tirol":n,trentinosudtirol:n,"xn--trentinosdtirol-7vb":n,trentinosüdtirol:n,"trentinosued-tirol":n,trentinosuedtirol:n,"trentinsud-tirol":n,"xn--trentinsd-tirol-6vb":n,"trentinsüd-tirol":n,trentinsudtirol:n,"xn--trentinsdtirol-nsb":n,trentinsüdtirol:n,"trentinsued-tirol":n,trentinsuedtirol:n,tuscany:n,umb:n,umbria:n,"val-d-aosta":n,"val-daosta":n,"vald-aosta":n,valdaosta:n,"valle-aosta":n,"valle-d-aosta":n,"valle-daosta":n,valleaosta:n,"valled-aosta":n,valledaosta:n,"vallee-aoste":n,"xn--valle-aoste-ebb":n,"vallée-aoste":n,"vallee-d-aoste":n,"xn--valle-d-aoste-ehb":n,"vallée-d-aoste":n,valleeaoste:n,"xn--valleaoste-e7a":n,valléeaoste:n,valleedaoste:n,"xn--valledaoste-ebb":n,valléedaoste:n,vao:n,vda:n,ven:n,veneto:n,ag:n,agrigento:n,al:n,alessandria:n,"alto-adige":n,altoadige:n,an:n,ancona:n,"andria-barletta-trani":n,"andria-trani-barletta":n,andriabarlettatrani:n,andriatranibarletta:n,ao:n,aosta:n,aoste:n,ap:n,aq:n,aquila:n,ar:n,arezzo:n,"ascoli-piceno":n,ascolipiceno:n,asti:n,at:n,av:n,avellino:n,ba:n,balsan:n,"balsan-sudtirol":n,"xn--balsan-sdtirol-nsb":n,"balsan-südtirol":n,"balsan-suedtirol":n,bari:n,"barletta-trani-andria":n,barlettatraniandria:n,belluno:n,benevento:n,bergamo:n,bg:n,bi:n,biella:n,bl:n,bn:n,bo:n,bologna:n,bolzano:n,"bolzano-altoadige":n,bozen:n,"bozen-sudtirol":n,"xn--bozen-sdtirol-2ob":n,"bozen-südtirol":n,"bozen-suedtirol":n,br:n,brescia:n,brindisi:n,bs:n,bt:n,bulsan:n,"bulsan-sudtirol":n,"xn--bulsan-sdtirol-nsb":n,"bulsan-südtirol":n,"bulsan-suedtirol":n,bz:n,ca:n,cagliari:n,caltanissetta:n,"campidano-medio":n,campidanomedio:n,campobasso:n,"carbonia-iglesias":n,carboniaiglesias:n,"carrara-massa":n,carraramassa:n,caserta:n,catania:n,catanzaro:n,cb:n,ce:n,"cesena-forli":n,"xn--cesena-forl-mcb":n,"cesena-forlì":n,cesenaforli:n,"xn--cesenaforl-i8a":n,cesenaforlì:n,ch:n,chieti:n,ci:n,cl:n,cn:n,co:n,como:n,cosenza:n,cr:n,cremona:n,crotone:n,cs:n,ct:n,cuneo:n,cz:n,"dell-ogliastra":n,dellogliastra:n,en:n,enna:n,fc:n,fe:n,fermo:n,ferrara:n,fg:n,fi:n,firenze:n,florence:n,fm:n,foggia:n,"forli-cesena":n,"xn--forl-cesena-fcb":n,"forlì-cesena":n,forlicesena:n,"xn--forlcesena-c8a":n,forlìcesena:n,fr:n,frosinone:n,ge:n,genoa:n,genova:n,go:n,gorizia:n,gr:n,grosseto:n,"iglesias-carbonia":n,iglesiascarbonia:n,im:n,imperia:n,is:n,isernia:n,kr:n,"la-spezia":n,laquila:n,laspezia:n,latina:n,lc:n,le:n,lecce:n,lecco:n,li:n,livorno:n,lo:n,lodi:n,lt:n,lu:n,lucca:n,macerata:n,mantova:n,"massa-carrara":n,massacarrara:n,matera:n,mb:n,mc:n,me:n,"medio-campidano":n,mediocampidano:n,messina:n,mi:n,milan:n,milano:n,mn:n,mo:n,modena:n,monza:n,"monza-brianza":n,"monza-e-della-brianza":n,monzabrianza:n,monzaebrianza:n,monzaedellabrianza:n,ms:n,mt:n,na:n,naples:n,napoli:n,no:n,novara:n,nu:n,nuoro:n,og:n,ogliastra:n,"olbia-tempio":n,olbiatempio:n,or:n,oristano:n,ot:n,pa:n,padova:n,padua:n,palermo:n,parma:n,pavia:n,pc:n,pd:n,pe:n,perugia:n,"pesaro-urbino":n,pesarourbino:n,pescara:n,pg:n,pi:n,piacenza:n,pisa:n,pistoia:n,pn:n,po:n,pordenone:n,potenza:n,pr:n,prato:n,pt:n,pu:n,pv:n,pz:n,ra:n,ragusa:n,ravenna:n,rc:n,re:n,"reggio-calabria":n,"reggio-emilia":n,reggiocalabria:n,reggioemilia:n,rg:n,ri:n,rieti:n,rimini:n,rm:n,rn:n,ro:n,roma:n,rome:n,rovigo:n,sa:n,salerno:n,sassari:n,savona:n,si:n,siena:n,siracusa:n,so:n,sondrio:n,sp:n,sr:n,ss:n,"xn--sdtirol-n2a":n,südtirol:n,suedtirol:n,sv:n,ta:n,taranto:n,te:n,"tempio-olbia":n,tempioolbia:n,teramo:n,terni:n,tn:n,to:n,torino:n,tp:n,tr:n,"trani-andria-barletta":n,"trani-barletta-andria":n,traniandriabarletta:n,tranibarlettaandria:n,trapani:n,trento:n,treviso:n,trieste:n,ts:n,turin:n,tv:n,ud:n,udine:n,"urbino-pesaro":n,urbinopesaro:n,va:n,varese:n,vb:n,vc:n,ve:n,venezia:n,venice:n,verbania:n,vercelli:n,verona:n,vi:n,"vibo-valentia":n,vibovalentia:n,vicenza:n,viterbo:n,vr:n,vs:n,vt:n,vv:n,ibxos:e,iliadboxos:e,neen:[0,{jc:e}],"123homepage":e,"16-b":e,"32-b":e,"64-b":e,myspreadshop:e,syncloud:e}],je:[1,{co:n,net:n,org:n,of:e}],jm:T,jo:[1,{agri:n,ai:n,com:n,edu:n,eng:n,fm:n,gov:n,mil:n,net:n,org:n,per:n,phd:n,sch:n,tv:n}],jobs:n,jp:[1,{ac:n,ad:n,co:n,ed:n,go:n,gr:n,lg:n,ne:[1,{aseinet:ae,gehirn:e,ivory:e,"mail-box":e,mints:e,mokuren:e,opal:e,sakura:e,sumomo:e,topaz:e}],or:n,aichi:[1,{aisai:n,ama:n,anjo:n,asuke:n,chiryu:n,chita:n,fuso:n,gamagori:n,handa:n,hazu:n,hekinan:n,higashiura:n,ichinomiya:n,inazawa:n,inuyama:n,isshiki:n,iwakura:n,kanie:n,kariya:n,kasugai:n,kira:n,kiyosu:n,komaki:n,konan:n,kota:n,mihama:n,miyoshi:n,nishio:n,nisshin:n,obu:n,oguchi:n,oharu:n,okazaki:n,owariasahi:n,seto:n,shikatsu:n,shinshiro:n,shitara:n,tahara:n,takahama:n,tobishima:n,toei:n,togo:n,tokai:n,tokoname:n,toyoake:n,toyohashi:n,toyokawa:n,toyone:n,toyota:n,tsushima:n,yatomi:n}],akita:[1,{akita:n,daisen:n,fujisato:n,gojome:n,hachirogata:n,happou:n,higashinaruse:n,honjo:n,honjyo:n,ikawa:n,kamikoani:n,kamioka:n,katagami:n,kazuno:n,kitaakita:n,kosaka:n,kyowa:n,misato:n,mitane:n,moriyoshi:n,nikaho:n,noshiro:n,odate:n,oga:n,ogata:n,semboku:n,yokote:n,yurihonjo:n}],aomori:[1,{aomori:n,gonohe:n,hachinohe:n,hashikami:n,hiranai:n,hirosaki:n,itayanagi:n,kuroishi:n,misawa:n,mutsu:n,nakadomari:n,noheji:n,oirase:n,owani:n,rokunohe:n,sannohe:n,shichinohe:n,shingo:n,takko:n,towada:n,tsugaru:n,tsuruta:n}],chiba:[1,{abiko:n,asahi:n,chonan:n,chosei:n,choshi:n,chuo:n,funabashi:n,futtsu:n,hanamigawa:n,ichihara:n,ichikawa:n,ichinomiya:n,inzai:n,isumi:n,kamagaya:n,kamogawa:n,kashiwa:n,katori:n,katsuura:n,kimitsu:n,kisarazu:n,kozaki:n,kujukuri:n,kyonan:n,matsudo:n,midori:n,mihama:n,minamiboso:n,mobara:n,mutsuzawa:n,nagara:n,nagareyama:n,narashino:n,narita:n,noda:n,oamishirasato:n,omigawa:n,onjuku:n,otaki:n,sakae:n,sakura:n,shimofusa:n,shirako:n,shiroi:n,shisui:n,sodegaura:n,sosa:n,tako:n,tateyama:n,togane:n,tohnosho:n,tomisato:n,urayasu:n,yachimata:n,yachiyo:n,yokaichiba:n,yokoshibahikari:n,yotsukaido:n}],ehime:[1,{ainan:n,honai:n,ikata:n,imabari:n,iyo:n,kamijima:n,kihoku:n,kumakogen:n,masaki:n,matsuno:n,matsuyama:n,namikata:n,niihama:n,ozu:n,saijo:n,seiyo:n,shikokuchuo:n,tobe:n,toon:n,uchiko:n,uwajima:n,yawatahama:n}],fukui:[1,{echizen:n,eiheiji:n,fukui:n,ikeda:n,katsuyama:n,mihama:n,minamiechizen:n,obama:n,ohi:n,ono:n,sabae:n,sakai:n,takahama:n,tsuruga:n,wakasa:n}],fukuoka:[1,{ashiya:n,buzen:n,chikugo:n,chikuho:n,chikujo:n,chikushino:n,chikuzen:n,chuo:n,dazaifu:n,fukuchi:n,hakata:n,higashi:n,hirokawa:n,hisayama:n,iizuka:n,inatsuki:n,kaho:n,kasuga:n,kasuya:n,kawara:n,keisen:n,koga:n,kurate:n,kurogi:n,kurume:n,minami:n,miyako:n,miyama:n,miyawaka:n,mizumaki:n,munakata:n,nakagawa:n,nakama:n,nishi:n,nogata:n,ogori:n,okagaki:n,okawa:n,oki:n,omuta:n,onga:n,onojo:n,oto:n,saigawa:n,sasaguri:n,shingu:n,shinyoshitomi:n,shonai:n,soeda:n,sue:n,tachiarai:n,tagawa:n,takata:n,toho:n,toyotsu:n,tsuiki:n,ukiha:n,umi:n,usui:n,yamada:n,yame:n,yanagawa:n,yukuhashi:n}],fukushima:[1,{aizubange:n,aizumisato:n,aizuwakamatsu:n,asakawa:n,bandai:n,date:n,fukushima:n,furudono:n,futaba:n,hanawa:n,higashi:n,hirata:n,hirono:n,iitate:n,inawashiro:n,ishikawa:n,iwaki:n,izumizaki:n,kagamiishi:n,kaneyama:n,kawamata:n,kitakata:n,kitashiobara:n,koori:n,koriyama:n,kunimi:n,miharu:n,mishima:n,namie:n,nango:n,nishiaizu:n,nishigo:n,okuma:n,omotego:n,ono:n,otama:n,samegawa:n,shimogo:n,shirakawa:n,showa:n,soma:n,sukagawa:n,taishin:n,tamakawa:n,tanagura:n,tenei:n,yabuki:n,yamato:n,yamatsuri:n,yanaizu:n,yugawa:n}],gifu:[1,{anpachi:n,ena:n,gifu:n,ginan:n,godo:n,gujo:n,hashima:n,hichiso:n,hida:n,higashishirakawa:n,ibigawa:n,ikeda:n,kakamigahara:n,kani:n,kasahara:n,kasamatsu:n,kawaue:n,kitagata:n,mino:n,minokamo:n,mitake:n,mizunami:n,motosu:n,nakatsugawa:n,ogaki:n,sakahogi:n,seki:n,sekigahara:n,shirakawa:n,tajimi:n,takayama:n,tarui:n,toki:n,tomika:n,wanouchi:n,yamagata:n,yaotsu:n,yoro:n}],gunma:[1,{annaka:n,chiyoda:n,fujioka:n,higashiagatsuma:n,isesaki:n,itakura:n,kanna:n,kanra:n,katashina:n,kawaba:n,kiryu:n,kusatsu:n,maebashi:n,meiwa:n,midori:n,minakami:n,naganohara:n,nakanojo:n,nanmoku:n,numata:n,oizumi:n,ora:n,ota:n,shibukawa:n,shimonita:n,shinto:n,showa:n,takasaki:n,takayama:n,tamamura:n,tatebayashi:n,tomioka:n,tsukiyono:n,tsumagoi:n,ueno:n,yoshioka:n}],hiroshima:[1,{asaminami:n,daiwa:n,etajima:n,fuchu:n,fukuyama:n,hatsukaichi:n,higashihiroshima:n,hongo:n,jinsekikogen:n,kaita:n,kui:n,kumano:n,kure:n,mihara:n,miyoshi:n,naka:n,onomichi:n,osakikamijima:n,otake:n,saka:n,sera:n,seranishi:n,shinichi:n,shobara:n,takehara:n}],hokkaido:[1,{abashiri:n,abira:n,aibetsu:n,akabira:n,akkeshi:n,asahikawa:n,ashibetsu:n,ashoro:n,assabu:n,atsuma:n,bibai:n,biei:n,bifuka:n,bihoro:n,biratori:n,chippubetsu:n,chitose:n,date:n,ebetsu:n,embetsu:n,eniwa:n,erimo:n,esan:n,esashi:n,fukagawa:n,fukushima:n,furano:n,furubira:n,haboro:n,hakodate:n,hamatonbetsu:n,hidaka:n,higashikagura:n,higashikawa:n,hiroo:n,hokuryu:n,hokuto:n,honbetsu:n,horokanai:n,horonobe:n,ikeda:n,imakane:n,ishikari:n,iwamizawa:n,iwanai:n,kamifurano:n,kamikawa:n,kamishihoro:n,kamisunagawa:n,kamoenai:n,kayabe:n,kembuchi:n,kikonai:n,kimobetsu:n,kitahiroshima:n,kitami:n,kiyosato:n,koshimizu:n,kunneppu:n,kuriyama:n,kuromatsunai:n,kushiro:n,kutchan:n,kyowa:n,mashike:n,matsumae:n,mikasa:n,minamifurano:n,mombetsu:n,moseushi:n,mukawa:n,muroran:n,naie:n,nakagawa:n,nakasatsunai:n,nakatombetsu:n,nanae:n,nanporo:n,nayoro:n,nemuro:n,niikappu:n,niki:n,nishiokoppe:n,noboribetsu:n,numata:n,obihiro:n,obira:n,oketo:n,okoppe:n,otaru:n,otobe:n,otofuke:n,otoineppu:n,oumu:n,ozora:n,pippu:n,rankoshi:n,rebun:n,rikubetsu:n,rishiri:n,rishirifuji:n,saroma:n,sarufutsu:n,shakotan:n,shari:n,shibecha:n,shibetsu:n,shikabe:n,shikaoi:n,shimamaki:n,shimizu:n,shimokawa:n,shinshinotsu:n,shintoku:n,shiranuka:n,shiraoi:n,shiriuchi:n,sobetsu:n,sunagawa:n,taiki:n,takasu:n,takikawa:n,takinoue:n,teshikaga:n,tobetsu:n,tohma:n,tomakomai:n,tomari:n,toya:n,toyako:n,toyotomi:n,toyoura:n,tsubetsu:n,tsukigata:n,urakawa:n,urausu:n,uryu:n,utashinai:n,wakkanai:n,wassamu:n,yakumo:n,yoichi:n}],hyogo:[1,{aioi:n,akashi:n,ako:n,amagasaki:n,aogaki:n,asago:n,ashiya:n,awaji:n,fukusaki:n,goshiki:n,harima:n,himeji:n,ichikawa:n,inagawa:n,itami:n,kakogawa:n,kamigori:n,kamikawa:n,kasai:n,kasuga:n,kawanishi:n,miki:n,minamiawaji:n,nishinomiya:n,nishiwaki:n,ono:n,sanda:n,sannan:n,sasayama:n,sayo:n,shingu:n,shinonsen:n,shiso:n,sumoto:n,taishi:n,taka:n,takarazuka:n,takasago:n,takino:n,tamba:n,tatsuno:n,toyooka:n,yabu:n,yashiro:n,yoka:n,yokawa:n}],ibaraki:[1,{ami:n,asahi:n,bando:n,chikusei:n,daigo:n,fujishiro:n,hitachi:n,hitachinaka:n,hitachiomiya:n,hitachiota:n,ibaraki:n,ina:n,inashiki:n,itako:n,iwama:n,joso:n,kamisu:n,kasama:n,kashima:n,kasumigaura:n,koga:n,miho:n,mito:n,moriya:n,naka:n,namegata:n,oarai:n,ogawa:n,omitama:n,ryugasaki:n,sakai:n,sakuragawa:n,shimodate:n,shimotsuma:n,shirosato:n,sowa:n,suifu:n,takahagi:n,tamatsukuri:n,tokai:n,tomobe:n,tone:n,toride:n,tsuchiura:n,tsukuba:n,uchihara:n,ushiku:n,yachiyo:n,yamagata:n,yawara:n,yuki:n}],ishikawa:[1,{anamizu:n,hakui:n,hakusan:n,kaga:n,kahoku:n,kanazawa:n,kawakita:n,komatsu:n,nakanoto:n,nanao:n,nomi:n,nonoichi:n,noto:n,shika:n,suzu:n,tsubata:n,tsurugi:n,uchinada:n,wajima:n}],iwate:[1,{fudai:n,fujisawa:n,hanamaki:n,hiraizumi:n,hirono:n,ichinohe:n,ichinoseki:n,iwaizumi:n,iwate:n,joboji:n,kamaishi:n,kanegasaki:n,karumai:n,kawai:n,kitakami:n,kuji:n,kunohe:n,kuzumaki:n,miyako:n,mizusawa:n,morioka:n,ninohe:n,noda:n,ofunato:n,oshu:n,otsuchi:n,rikuzentakata:n,shiwa:n,shizukuishi:n,sumita:n,tanohata:n,tono:n,yahaba:n,yamada:n}],kagawa:[1,{ayagawa:n,higashikagawa:n,kanonji:n,kotohira:n,manno:n,marugame:n,mitoyo:n,naoshima:n,sanuki:n,tadotsu:n,takamatsu:n,tonosho:n,uchinomi:n,utazu:n,zentsuji:n}],kagoshima:[1,{akune:n,amami:n,hioki:n,isa:n,isen:n,izumi:n,kagoshima:n,kanoya:n,kawanabe:n,kinko:n,kouyama:n,makurazaki:n,matsumoto:n,minamitane:n,nakatane:n,nishinoomote:n,satsumasendai:n,soo:n,tarumizu:n,yusui:n}],kanagawa:[1,{aikawa:n,atsugi:n,ayase:n,chigasaki:n,ebina:n,fujisawa:n,hadano:n,hakone:n,hiratsuka:n,isehara:n,kaisei:n,kamakura:n,kiyokawa:n,matsuda:n,minamiashigara:n,miura:n,nakai:n,ninomiya:n,odawara:n,oi:n,oiso:n,sagamihara:n,samukawa:n,tsukui:n,yamakita:n,yamato:n,yokosuka:n,yugawara:n,zama:n,zushi:n}],kochi:[1,{aki:n,geisei:n,hidaka:n,higashitsuno:n,ino:n,kagami:n,kami:n,kitagawa:n,kochi:n,mihara:n,motoyama:n,muroto:n,nahari:n,nakamura:n,nankoku:n,nishitosa:n,niyodogawa:n,ochi:n,okawa:n,otoyo:n,otsuki:n,sakawa:n,sukumo:n,susaki:n,tosa:n,tosashimizu:n,toyo:n,tsuno:n,umaji:n,yasuda:n,yusuhara:n}],kumamoto:[1,{amakusa:n,arao:n,aso:n,choyo:n,gyokuto:n,kamiamakusa:n,kikuchi:n,kumamoto:n,mashiki:n,mifune:n,minamata:n,minamioguni:n,nagasu:n,nishihara:n,oguni:n,ozu:n,sumoto:n,takamori:n,uki:n,uto:n,yamaga:n,yamato:n,yatsushiro:n}],kyoto:[1,{ayabe:n,fukuchiyama:n,higashiyama:n,ide:n,ine:n,joyo:n,kameoka:n,kamo:n,kita:n,kizu:n,kumiyama:n,kyotamba:n,kyotanabe:n,kyotango:n,maizuru:n,minami:n,minamiyamashiro:n,miyazu:n,muko:n,nagaokakyo:n,nakagyo:n,nantan:n,oyamazaki:n,sakyo:n,seika:n,tanabe:n,uji:n,ujitawara:n,wazuka:n,yamashina:n,yawata:n}],mie:[1,{asahi:n,inabe:n,ise:n,kameyama:n,kawagoe:n,kiho:n,kisosaki:n,kiwa:n,komono:n,kumano:n,kuwana:n,matsusaka:n,meiwa:n,mihama:n,minamiise:n,misugi:n,miyama:n,nabari:n,shima:n,suzuka:n,tado:n,taiki:n,taki:n,tamaki:n,toba:n,tsu:n,udono:n,ureshino:n,watarai:n,yokkaichi:n}],miyagi:[1,{furukawa:n,higashimatsushima:n,ishinomaki:n,iwanuma:n,kakuda:n,kami:n,kawasaki:n,marumori:n,matsushima:n,minamisanriku:n,misato:n,murata:n,natori:n,ogawara:n,ohira:n,onagawa:n,osaki:n,rifu:n,semine:n,shibata:n,shichikashuku:n,shikama:n,shiogama:n,shiroishi:n,tagajo:n,taiwa:n,tome:n,tomiya:n,wakuya:n,watari:n,yamamoto:n,zao:n}],miyazaki:[1,{aya:n,ebino:n,gokase:n,hyuga:n,kadogawa:n,kawaminami:n,kijo:n,kitagawa:n,kitakata:n,kitaura:n,kobayashi:n,kunitomi:n,kushima:n,mimata:n,miyakonojo:n,miyazaki:n,morotsuka:n,nichinan:n,nishimera:n,nobeoka:n,saito:n,shiiba:n,shintomi:n,takaharu:n,takanabe:n,takazaki:n,tsuno:n}],nagano:[1,{achi:n,agematsu:n,anan:n,aoki:n,asahi:n,azumino:n,chikuhoku:n,chikuma:n,chino:n,fujimi:n,hakuba:n,hara:n,hiraya:n,iida:n,iijima:n,iiyama:n,iizuna:n,ikeda:n,ikusaka:n,ina:n,karuizawa:n,kawakami:n,kiso:n,kisofukushima:n,kitaaiki:n,komagane:n,komoro:n,matsukawa:n,matsumoto:n,miasa:n,minamiaiki:n,minamimaki:n,minamiminowa:n,minowa:n,miyada:n,miyota:n,mochizuki:n,nagano:n,nagawa:n,nagiso:n,nakagawa:n,nakano:n,nozawaonsen:n,obuse:n,ogawa:n,okaya:n,omachi:n,omi:n,ookuwa:n,ooshika:n,otaki:n,otari:n,sakae:n,sakaki:n,saku:n,sakuho:n,shimosuwa:n,shinanomachi:n,shiojiri:n,suwa:n,suzaka:n,takagi:n,takamori:n,takayama:n,tateshina:n,tatsuno:n,togakushi:n,togura:n,tomi:n,ueda:n,wada:n,yamagata:n,yamanouchi:n,yasaka:n,yasuoka:n}],nagasaki:[1,{chijiwa:n,futsu:n,goto:n,hasami:n,hirado:n,iki:n,isahaya:n,kawatana:n,kuchinotsu:n,matsuura:n,nagasaki:n,obama:n,omura:n,oseto:n,saikai:n,sasebo:n,seihi:n,shimabara:n,shinkamigoto:n,togitsu:n,tsushima:n,unzen:n}],nara:[1,{ando:n,gose:n,heguri:n,higashiyoshino:n,ikaruga:n,ikoma:n,kamikitayama:n,kanmaki:n,kashiba:n,kashihara:n,katsuragi:n,kawai:n,kawakami:n,kawanishi:n,koryo:n,kurotaki:n,mitsue:n,miyake:n,nara:n,nosegawa:n,oji:n,ouda:n,oyodo:n,sakurai:n,sango:n,shimoichi:n,shimokitayama:n,shinjo:n,soni:n,takatori:n,tawaramoto:n,tenkawa:n,tenri:n,uda:n,yamatokoriyama:n,yamatotakada:n,yamazoe:n,yoshino:n}],niigata:[1,{aga:n,agano:n,gosen:n,itoigawa:n,izumozaki:n,joetsu:n,kamo:n,kariwa:n,kashiwazaki:n,minamiuonuma:n,mitsuke:n,muika:n,murakami:n,myoko:n,nagaoka:n,niigata:n,ojiya:n,omi:n,sado:n,sanjo:n,seiro:n,seirou:n,sekikawa:n,shibata:n,tagami:n,tainai:n,tochio:n,tokamachi:n,tsubame:n,tsunan:n,uonuma:n,yahiko:n,yoita:n,yuzawa:n}],oita:[1,{beppu:n,bungoono:n,bungotakada:n,hasama:n,hiji:n,himeshima:n,hita:n,kamitsue:n,kokonoe:n,kuju:n,kunisaki:n,kusu:n,oita:n,saiki:n,taketa:n,tsukumi:n,usa:n,usuki:n,yufu:n}],okayama:[1,{akaiwa:n,asakuchi:n,bizen:n,hayashima:n,ibara:n,kagamino:n,kasaoka:n,kibichuo:n,kumenan:n,kurashiki:n,maniwa:n,misaki:n,nagi:n,niimi:n,nishiawakura:n,okayama:n,satosho:n,setouchi:n,shinjo:n,shoo:n,soja:n,takahashi:n,tamano:n,tsuyama:n,wake:n,yakage:n}],okinawa:[1,{aguni:n,ginowan:n,ginoza:n,gushikami:n,haebaru:n,higashi:n,hirara:n,iheya:n,ishigaki:n,ishikawa:n,itoman:n,izena:n,kadena:n,kin:n,kitadaito:n,kitanakagusuku:n,kumejima:n,kunigami:n,minamidaito:n,motobu:n,nago:n,naha:n,nakagusuku:n,nakijin:n,nanjo:n,nishihara:n,ogimi:n,okinawa:n,onna:n,shimoji:n,taketomi:n,tarama:n,tokashiki:n,tomigusuku:n,tonaki:n,urasoe:n,uruma:n,yaese:n,yomitan:n,yonabaru:n,yonaguni:n,zamami:n}],osaka:[1,{abeno:n,chihayaakasaka:n,chuo:n,daito:n,fujiidera:n,habikino:n,hannan:n,higashiosaka:n,higashisumiyoshi:n,higashiyodogawa:n,hirakata:n,ibaraki:n,ikeda:n,izumi:n,izumiotsu:n,izumisano:n,kadoma:n,kaizuka:n,kanan:n,kashiwara:n,katano:n,kawachinagano:n,kishiwada:n,kita:n,kumatori:n,matsubara:n,minato:n,minoh:n,misaki:n,moriguchi:n,neyagawa:n,nishi:n,nose:n,osakasayama:n,sakai:n,sayama:n,sennan:n,settsu:n,shijonawate:n,shimamoto:n,suita:n,tadaoka:n,taishi:n,tajiri:n,takaishi:n,takatsuki:n,tondabayashi:n,toyonaka:n,toyono:n,yao:n}],saga:[1,{ariake:n,arita:n,fukudomi:n,genkai:n,hamatama:n,hizen:n,imari:n,kamimine:n,kanzaki:n,karatsu:n,kashima:n,kitagata:n,kitahata:n,kiyama:n,kouhoku:n,kyuragi:n,nishiarita:n,ogi:n,omachi:n,ouchi:n,saga:n,shiroishi:n,taku:n,tara:n,tosu:n,yoshinogari:n}],saitama:[1,{arakawa:n,asaka:n,chichibu:n,fujimi:n,fujimino:n,fukaya:n,hanno:n,hanyu:n,hasuda:n,hatogaya:n,hatoyama:n,hidaka:n,higashichichibu:n,higashimatsuyama:n,honjo:n,ina:n,iruma:n,iwatsuki:n,kamiizumi:n,kamikawa:n,kamisato:n,kasukabe:n,kawagoe:n,kawaguchi:n,kawajima:n,kazo:n,kitamoto:n,koshigaya:n,kounosu:n,kuki:n,kumagaya:n,matsubushi:n,minano:n,misato:n,miyashiro:n,miyoshi:n,moroyama:n,nagatoro:n,namegawa:n,niiza:n,ogano:n,ogawa:n,ogose:n,okegawa:n,omiya:n,otaki:n,ranzan:n,ryokami:n,saitama:n,sakado:n,satte:n,sayama:n,shiki:n,shiraoka:n,soka:n,sugito:n,toda:n,tokigawa:n,tokorozawa:n,tsurugashima:n,urawa:n,warabi:n,yashio:n,yokoze:n,yono:n,yorii:n,yoshida:n,yoshikawa:n,yoshimi:n}],shiga:[1,{aisho:n,gamo:n,higashiomi:n,hikone:n,koka:n,konan:n,kosei:n,koto:n,kusatsu:n,maibara:n,moriyama:n,nagahama:n,nishiazai:n,notogawa:n,omihachiman:n,otsu:n,ritto:n,ryuoh:n,takashima:n,takatsuki:n,torahime:n,toyosato:n,yasu:n}],shimane:[1,{akagi:n,ama:n,gotsu:n,hamada:n,higashiizumo:n,hikawa:n,hikimi:n,izumo:n,kakinoki:n,masuda:n,matsue:n,misato:n,nishinoshima:n,ohda:n,okinoshima:n,okuizumo:n,shimane:n,tamayu:n,tsuwano:n,unnan:n,yakumo:n,yasugi:n,yatsuka:n}],shizuoka:[1,{arai:n,atami:n,fuji:n,fujieda:n,fujikawa:n,fujinomiya:n,fukuroi:n,gotemba:n,haibara:n,hamamatsu:n,higashiizu:n,ito:n,iwata:n,izu:n,izunokuni:n,kakegawa:n,kannami:n,kawanehon:n,kawazu:n,kikugawa:n,kosai:n,makinohara:n,matsuzaki:n,minamiizu:n,mishima:n,morimachi:n,nishiizu:n,numazu:n,omaezaki:n,shimada:n,shimizu:n,shimoda:n,shizuoka:n,susono:n,yaizu:n,yoshida:n}],tochigi:[1,{ashikaga:n,bato:n,haga:n,ichikai:n,iwafune:n,kaminokawa:n,kanuma:n,karasuyama:n,kuroiso:n,mashiko:n,mibu:n,moka:n,motegi:n,nasu:n,nasushiobara:n,nikko:n,nishikata:n,nogi:n,ohira:n,ohtawara:n,oyama:n,sakura:n,sano:n,shimotsuke:n,shioya:n,takanezawa:n,tochigi:n,tsuga:n,ujiie:n,utsunomiya:n,yaita:n}],tokushima:[1,{aizumi:n,anan:n,ichiba:n,itano:n,kainan:n,komatsushima:n,matsushige:n,mima:n,minami:n,miyoshi:n,mugi:n,nakagawa:n,naruto:n,sanagochi:n,shishikui:n,tokushima:n,wajiki:n}],tokyo:[1,{adachi:n,akiruno:n,akishima:n,aogashima:n,arakawa:n,bunkyo:n,chiyoda:n,chofu:n,chuo:n,edogawa:n,fuchu:n,fussa:n,hachijo:n,hachioji:n,hamura:n,higashikurume:n,higashimurayama:n,higashiyamato:n,hino:n,hinode:n,hinohara:n,inagi:n,itabashi:n,katsushika:n,kita:n,kiyose:n,kodaira:n,koganei:n,kokubunji:n,komae:n,koto:n,kouzushima:n,kunitachi:n,machida:n,meguro:n,minato:n,mitaka:n,mizuho:n,musashimurayama:n,musashino:n,nakano:n,nerima:n,ogasawara:n,okutama:n,ome:n,oshima:n,ota:n,setagaya:n,shibuya:n,shinagawa:n,shinjuku:n,suginami:n,sumida:n,tachikawa:n,taito:n,tama:n,toshima:n}],tottori:[1,{chizu:n,hino:n,kawahara:n,koge:n,kotoura:n,misasa:n,nanbu:n,nichinan:n,sakaiminato:n,tottori:n,wakasa:n,yazu:n,yonago:n}],toyama:[1,{asahi:n,fuchu:n,fukumitsu:n,funahashi:n,himi:n,imizu:n,inami:n,johana:n,kamiichi:n,kurobe:n,nakaniikawa:n,namerikawa:n,nanto:n,nyuzen:n,oyabe:n,taira:n,takaoka:n,tateyama:n,toga:n,tonami:n,toyama:n,unazuki:n,uozu:n,yamada:n}],wakayama:[1,{arida:n,aridagawa:n,gobo:n,hashimoto:n,hidaka:n,hirogawa:n,inami:n,iwade:n,kainan:n,kamitonda:n,katsuragi:n,kimino:n,kinokawa:n,kitayama:n,koya:n,koza:n,kozagawa:n,kudoyama:n,kushimoto:n,mihama:n,misato:n,nachikatsuura:n,shingu:n,shirahama:n,taiji:n,tanabe:n,wakayama:n,yuasa:n,yura:n}],yamagata:[1,{asahi:n,funagata:n,higashine:n,iide:n,kahoku:n,kaminoyama:n,kaneyama:n,kawanishi:n,mamurogawa:n,mikawa:n,murayama:n,nagai:n,nakayama:n,nanyo:n,nishikawa:n,obanazawa:n,oe:n,oguni:n,ohkura:n,oishida:n,sagae:n,sakata:n,sakegawa:n,shinjo:n,shirataka:n,shonai:n,takahata:n,tendo:n,tozawa:n,tsuruoka:n,yamagata:n,yamanobe:n,yonezawa:n,yuza:n}],yamaguchi:[1,{abu:n,hagi:n,hikari:n,hofu:n,iwakuni:n,kudamatsu:n,mitou:n,nagato:n,oshima:n,shimonoseki:n,shunan:n,tabuse:n,tokuyama:n,toyota:n,ube:n,yuu:n}],yamanashi:[1,{chuo:n,doshi:n,fuefuki:n,fujikawa:n,fujikawaguchiko:n,fujiyoshida:n,hayakawa:n,hokuto:n,ichikawamisato:n,kai:n,kofu:n,koshu:n,kosuge:n,"minami-alps":n,minobu:n,nakamichi:n,nanbu:n,narusawa:n,nirasaki:n,nishikatsura:n,oshino:n,otsuki:n,showa:n,tabayama:n,tsuru:n,uenohara:n,yamanakako:n,yamanashi:n}],"xn--ehqz56n":n,三重:n,"xn--1lqs03n":n,京都:n,"xn--qqqt11m":n,佐賀:n,"xn--f6qx53a":n,兵庫:n,"xn--djrs72d6uy":n,北海道:n,"xn--mkru45i":n,千葉:n,"xn--0trq7p7nn":n,和歌山:n,"xn--5js045d":n,埼玉:n,"xn--kbrq7o":n,大分:n,"xn--pssu33l":n,大阪:n,"xn--ntsq17g":n,奈良:n,"xn--uisz3g":n,宮城:n,"xn--6btw5a":n,宮崎:n,"xn--1ctwo":n,富山:n,"xn--6orx2r":n,山口:n,"xn--rht61e":n,山形:n,"xn--rht27z":n,山梨:n,"xn--nit225k":n,岐阜:n,"xn--rht3d":n,岡山:n,"xn--djty4k":n,岩手:n,"xn--klty5x":n,島根:n,"xn--kltx9a":n,広島:n,"xn--kltp7d":n,徳島:n,"xn--c3s14m":n,愛媛:n,"xn--vgu402c":n,愛知:n,"xn--efvn9s":n,新潟:n,"xn--1lqs71d":n,東京:n,"xn--4pvxs":n,栃木:n,"xn--uuwu58a":n,沖縄:n,"xn--zbx025d":n,滋賀:n,"xn--8pvr4u":n,熊本:n,"xn--5rtp49c":n,石川:n,"xn--ntso0iqx3a":n,神奈川:n,"xn--elqq16h":n,福井:n,"xn--4it168d":n,福岡:n,"xn--klt787d":n,福島:n,"xn--rny31h":n,秋田:n,"xn--7t0a264c":n,群馬:n,"xn--uist22h":n,茨城:n,"xn--8ltr62k":n,長崎:n,"xn--2m4a15e":n,長野:n,"xn--32vp30h":n,青森:n,"xn--4it797k":n,静岡:n,"xn--5rtq34k":n,香川:n,"xn--k7yn95e":n,高知:n,"xn--tor131o":n,鳥取:n,"xn--d5qv7z876c":n,鹿児島:n,kawasaki:T,kitakyushu:T,kobe:T,nagoya:T,sapporo:T,sendai:T,yokohama:T,buyshop:e,fashionstore:e,handcrafted:e,kawaiishop:e,supersale:e,theshop:e,"0am":e,"0g0":e,"0j0":e,"0t0":e,mydns:e,pgw:e,wjg:e,usercontent:e,angry:e,babyblue:e,babymilk:e,backdrop:e,bambina:e,bitter:e,blush:e,boo:e,boy:e,boyfriend:e,but:e,candypop:e,capoo:e,catfood:e,cheap:e,chicappa:e,chillout:e,chips:e,chowder:e,chu:e,ciao:e,cocotte:e,coolblog:e,cranky:e,cutegirl:e,daa:e,deca:e,deci:e,digick:e,egoism:e,fakefur:e,fem:e,flier:e,floppy:e,fool:e,frenchkiss:e,girlfriend:e,girly:e,gloomy:e,gonna:e,greater:e,hacca:e,heavy:e,her:e,hiho:e,hippy:e,holy:e,hungry:e,icurus:e,itigo:e,jellybean:e,kikirara:e,kill:e,kilo:e,kuron:e,littlestar:e,lolipopmc:e,lolitapunk:e,lomo:e,lovepop:e,lovesick:e,main:e,mods:e,mond:e,mongolian:e,moo:e,namaste:e,nikita:e,nobushi:e,noor:e,oops:e,parallel:e,parasite:e,pecori:e,peewee:e,penne:e,pepper:e,perma:e,pigboat:e,pinoko:e,punyu:e,pupu:e,pussycat:e,pya:e,raindrop:e,readymade:e,sadist:e,schoolbus:e,secret:e,staba:e,stripper:e,sub:e,sunnyday:e,thick:e,tonkotsu:e,under:e,upper:e,velvet:e,verse:e,versus:e,vivian:e,watson:e,weblike:e,whitesnow:e,zombie:e,hateblo:e,hatenablog:e,hatenadiary:e,"2-d":e,bona:e,crap:e,daynight:e,eek:e,flop:e,halfmoon:e,jeez:e,matrix:e,mimoza:e,netgamers:e,nyanta:e,o0o0:e,rdy:e,rgr:e,rulez:e,sakurastorage:[0,{isk01:wn,isk02:wn}],saloon:e,sblo:e,skr:e,tank:e,"uh-oh":e,undo:e,webaccel:[0,{rs:e,user:e}],websozai:e,xii:e}],ke:[1,{ac:n,co:n,go:n,info:n,me:n,mobi:n,ne:n,or:n,sc:n}],kg:[1,{com:n,edu:n,gov:n,mil:n,net:n,org:n,us:e,xx:e,ae:e}],kh:T,ki:ie,km:[1,{ass:n,com:n,edu:n,gov:n,mil:n,nom:n,org:n,prd:n,tm:n,asso:n,coop:n,gouv:n,medecin:n,notaires:n,pharmaciens:n,presse:n,veterinaire:n}],kn:[1,{edu:n,gov:n,net:n,org:n}],kp:[1,{com:n,edu:n,gov:n,org:n,rep:n,tra:n}],kr:[1,{ac:n,ai:n,co:n,es:n,go:n,hs:n,io:n,it:n,kg:n,me:n,mil:n,ms:n,ne:n,or:n,pe:n,re:n,sc:n,busan:n,chungbuk:n,chungnam:n,daegu:n,daejeon:n,gangwon:n,gwangju:n,gyeongbuk:n,gyeonggi:n,gyeongnam:n,incheon:n,jeju:n,jeonbuk:n,jeonnam:n,seoul:n,ulsan:n,c01:e,"eliv-api":e,"eliv-cdn":e,"eliv-dns":e,mmv:e,vki:e}],kw:[1,{com:n,edu:n,emb:n,gov:n,ind:n,net:n,org:n}],ky:tn,kz:[1,{com:n,edu:n,gov:n,mil:n,net:n,org:n,jcloud:e}],la:[1,{com:n,edu:n,gov:n,info:n,int:n,net:n,org:n,per:n,bnr:e}],lb:a,lc:[1,{co:n,com:n,edu:n,gov:n,net:n,org:n,oy:e}],li:n,lk:[1,{ac:n,assn:n,com:n,edu:n,gov:n,grp:n,hotel:n,int:n,ltd:n,net:n,ngo:n,org:n,sch:n,soc:n,web:n}],lr:a,ls:[1,{ac:n,biz:n,co:n,edu:n,gov:n,info:n,net:n,org:n,sc:n}],lt:d,lu:[1,{"123website":e}],lv:[1,{asn:n,com:n,conf:n,edu:n,gov:n,id:n,mil:n,net:n,org:n}],ly:[1,{com:n,edu:n,gov:n,id:n,med:n,net:n,org:n,plc:n,sch:n}],ma:[1,{ac:n,co:n,gov:n,net:n,org:n,press:n}],mc:[1,{asso:n,tm:n}],md:[1,{ir:e}],me:[1,{ac:n,co:n,edu:n,gov:n,its:n,net:n,org:n,priv:n,c66:e,craft:e,edgestack:e,filegear:e,"filegear-sg":e,lohmus:e,barsy:e,mcdir:e,brasilia:e,ddns:e,dnsfor:e,hopto:e,loginto:e,noip:e,webhop:e,soundcast:e,tcp4:e,vp4:e,diskstation:e,dscloud:e,i234:e,myds:e,synology:e,transip:fn,nohost:e}],mg:[1,{co:n,com:n,edu:n,gov:n,mil:n,nom:n,org:n,prd:n}],mh:n,mil:n,mk:[1,{com:n,edu:n,gov:n,inf:n,name:n,net:n,org:n}],ml:[1,{ac:n,art:n,asso:n,com:n,edu:n,gouv:n,gov:n,info:n,inst:n,net:n,org:n,pr:n,presse:n}],mm:T,mn:[1,{edu:n,gov:n,org:n,nyc:e}],mo:a,mobi:[1,{barsy:e,dscloud:e}],mp:[1,{ju:e}],mq:n,mr:d,ms:[1,{com:n,edu:n,gov:n,net:n,org:n,minisite:e}],mt:tn,mu:[1,{ac:n,co:n,com:n,gov:n,net:n,or:n,org:n}],museum:n,mv:[1,{aero:n,biz:n,com:n,coop:n,edu:n,gov:n,info:n,int:n,mil:n,museum:n,name:n,net:n,org:n,pro:n}],mw:[1,{ac:n,biz:n,co:n,com:n,coop:n,edu:n,gov:n,int:n,net:n,org:n}],mx:[1,{com:n,edu:n,gob:n,net:n,org:n}],my:[1,{biz:n,com:n,edu:n,gov:n,mil:n,name:n,net:n,org:n}],mz:[1,{ac:n,adv:n,co:n,edu:n,gov:n,mil:n,net:n,org:n}],na:[1,{alt:n,co:n,com:n,gov:n,net:n,org:n}],name:[1,{her:se,his:se,ispmanager:e,keenetic:e}],nc:[1,{asso:n,nom:n}],ne:n,net:[1,{adobeaemcloud:e,"adobeio-static":e,adobeioruntime:e,akadns:e,akamai:e,"akamai-staging":e,akamaiedge:e,"akamaiedge-staging":e,akamaihd:e,"akamaihd-staging":e,akamaiorigin:e,"akamaiorigin-staging":e,akamaized:e,"akamaized-staging":e,edgekey:e,"edgekey-staging":e,edgesuite:e,"edgesuite-staging":e,alwaysdata:e,myamaze:e,cloudfront:e,appudo:e,"atlassian-dev":[0,{prod:H}],myfritz:e,shopselect:e,blackbaudcdn:e,boomla:e,bplaced:e,square7:e,cdn77:[0,{r:e}],"cdn77-ssl":e,gb:e,hu:e,jp:e,se:e,uk:e,clickrising:e,"ddns-ip":e,"dns-cloud":e,"dns-dynamic":e,cloudaccess:e,cloudflare:[2,{cdn:e}],cloudflareanycast:H,cloudflarecn:H,cloudflareglobal:H,ctfcloud:e,"feste-ip":e,"knx-server":e,"static-access":e,cryptonomic:t,dattolocal:e,mydatto:e,debian:e,definima:e,deno:e,icp:t,de5:e,"at-band-camp":e,blogdns:e,"broke-it":e,buyshouses:e,dnsalias:e,dnsdojo:e,"does-it":e,dontexist:e,dynalias:e,dynathome:e,endofinternet:e,"from-az":e,"from-co":e,"from-la":e,"from-ny":e,"gets-it":e,"ham-radio-op":e,homeftp:e,homeip:e,homelinux:e,homeunix:e,"in-the-band":e,"is-a-chef":e,"is-a-geek":e,"isa-geek":e,"kicks-ass":e,"office-on-the":e,podzone:e,"scrapper-site":e,selfip:e,"sells-it":e,servebbs:e,serveftp:e,thruhere:e,webhop:e,casacam:e,dynu:e,dynuddns:e,mysynology:e,opik:e,spryt:e,dynv6:e,twmail:e,ru:e,channelsdvr:[2,{u:e}],fastly:[0,{freetls:e,map:e,prod:[0,{a:e,global:e}],ssl:[0,{a:e,b:e,global:e}]}],fastlylb:[2,{map:e}],"keyword-on":e,"live-on":e,"server-on":e,"cdn-edges":e,heteml:e,cloudfunctions:e,"grafana-dev":e,iobb:e,moonscale:e,"in-dsl":e,"in-vpn":e,oninferno:e,botdash:e,"apps-1and1":e,ipifony:e,cloudjiffy:[2,{"fra1-de":e,"west1-us":e}],elastx:[0,{"jls-sto1":e,"jls-sto2":e,"jls-sto3":e}],massivegrid:[0,{paas:[0,{"fr-1":e,"lon-1":e,"lon-2":e,"ny-1":e,"ny-2":e,"sg-1":e}]}],saveincloud:[0,{jelastic:e,"nordeste-idc":e}],scaleforce:kn,kinghost:e,uni5:e,krellian:e,ggff:e,localto:t,barsy:e,luyani:e,memset:e,"azure-api":e,"azure-mobile":e,azureedge:e,azurefd:e,azurestaticapps:[2,{1:e,2:e,3:e,4:e,5:e,6:e,7:e,centralus:e,eastasia:e,eastus2:e,westeurope:e,westus2:e}],azurewebsites:e,cloudapp:e,trafficmanager:e,usgovcloudapi:re,usgovcloudapp:e,usgovtrafficmanager:e,windows:re,mynetname:[0,{sn:e}],routingthecloud:e,bounceme:e,ddns:e,"eating-organic":e,mydissent:e,myeffect:e,mymediapc:e,mypsx:e,mysecuritycamera:e,nhlfan:e,"no-ip":e,pgafan:e,privatizehealthinsurance:e,redirectme:e,serveblog:e,serveminecraft:e,sytes:e,dnsup:e,hicam:e,"now-dns":e,ownip:e,vpndns:e,cloudycluster:e,ovh:[0,{hosting:t,webpaas:t}],rackmaze:e,myradweb:e,in:e,"subsc-pay":e,squares:e,schokokeks:e,"firewall-gateway":e,seidat:e,senseering:e,siteleaf:e,mafelo:e,myspreadshop:e,"vps-host":[2,{jelastic:[0,{atl:e,njs:e,ric:e}]}],srcf:[0,{soc:e,user:e}],supabase:e,dsmynas:e,familyds:e,ts:[2,{c:t}],torproject:[2,{pages:e}],tunnelmole:e,vusercontent:e,"reserve-online":e,localcert:e,"community-pro":e,meinforum:e,yandexcloud:[2,{storage:e,website:e}],za:e,zabc:e}],nf:[1,{arts:n,com:n,firm:n,info:n,net:n,other:n,per:n,rec:n,store:n,web:n}],ng:[1,{com:n,edu:n,gov:n,i:n,mil:n,mobi:n,name:n,net:n,org:n,sch:n,biz:[2,{co:e,dl:e,go:e,lg:e,on:e}],col:e,firm:e,gen:e,ltd:e,ngo:e,plc:e}],ni:[1,{ac:n,biz:n,co:n,com:n,edu:n,gob:n,in:n,info:n,int:n,mil:n,net:n,nom:n,org:n,web:n}],nl:[1,{co:e,"hosting-cluster":e,gov:e,khplay:e,"123website":e,myspreadshop:e,transurl:t,cistron:e,demon:e}],no:[1,{fhs:n,folkebibl:n,fylkesbibl:n,idrett:n,museum:n,priv:n,vgs:n,dep:n,herad:n,kommune:n,mil:n,stat:n,aa:x,ah:x,bu:x,fm:x,hl:x,hm:x,"jan-mayen":x,mr:x,nl:x,nt:x,of:x,ol:x,oslo:x,rl:x,sf:x,st:x,svalbard:x,tm:x,tr:x,va:x,vf:x,akrehamn:n,"xn--krehamn-dxa":n,åkrehamn:n,algard:n,"xn--lgrd-poac":n,ålgård:n,arna:n,bronnoysund:n,"xn--brnnysund-m8ac":n,brønnøysund:n,brumunddal:n,bryne:n,drobak:n,"xn--drbak-wua":n,drøbak:n,egersund:n,fetsund:n,floro:n,"xn--flor-jra":n,florø:n,fredrikstad:n,hokksund:n,honefoss:n,"xn--hnefoss-q1a":n,hønefoss:n,jessheim:n,jorpeland:n,"xn--jrpeland-54a":n,jørpeland:n,kirkenes:n,kopervik:n,krokstadelva:n,langevag:n,"xn--langevg-jxa":n,langevåg:n,leirvik:n,mjondalen:n,"xn--mjndalen-64a":n,mjøndalen:n,"mo-i-rana":n,mosjoen:n,"xn--mosjen-eya":n,mosjøen:n,nesoddtangen:n,orkanger:n,osoyro:n,"xn--osyro-wua":n,osøyro:n,raholt:n,"xn--rholt-mra":n,råholt:n,sandnessjoen:n,"xn--sandnessjen-ogb":n,sandnessjøen:n,skedsmokorset:n,slattum:n,spjelkavik:n,stathelle:n,stavern:n,stjordalshalsen:n,"xn--stjrdalshalsen-sqb":n,stjørdalshalsen:n,tananger:n,tranby:n,vossevangen:n,aarborte:n,aejrie:n,afjord:n,"xn--fjord-lra":n,åfjord:n,agdenes:n,akershus:le,aknoluokta:n,"xn--koluokta-7ya57h":n,ákŋoluokta:n,al:n,"xn--l-1fa":n,ål:n,alaheadju:n,"xn--laheadju-7ya":n,álaheadju:n,alesund:n,"xn--lesund-hua":n,ålesund:n,alstahaug:n,alta:n,"xn--lt-liac":n,áltá:n,alvdal:n,amli:n,"xn--mli-tla":n,åmli:n,amot:n,"xn--mot-tla":n,åmot:n,andasuolo:n,andebu:n,andoy:n,"xn--andy-ira":n,andøy:n,ardal:n,"xn--rdal-poa":n,årdal:n,aremark:n,arendal:n,"xn--s-1fa":n,ås:n,aseral:n,"xn--seral-lra":n,åseral:n,asker:n,askim:n,askoy:n,"xn--asky-ira":n,askøy:n,askvoll:n,asnes:n,"xn--snes-poa":n,åsnes:n,audnedaln:n,aukra:n,aure:n,aurland:n,"aurskog-holand":n,"xn--aurskog-hland-jnb":n,"aurskog-høland":n,austevoll:n,austrheim:n,averoy:n,"xn--avery-yua":n,averøy:n,badaddja:n,"xn--bdddj-mrabd":n,bådåddjå:n,"xn--brum-voa":n,bærum:n,bahcavuotna:n,"xn--bhcavuotna-s4a":n,báhcavuotna:n,bahccavuotna:n,"xn--bhccavuotna-k7a":n,báhccavuotna:n,baidar:n,"xn--bidr-5nac":n,báidár:n,bajddar:n,"xn--bjddar-pta":n,bájddar:n,balat:n,"xn--blt-elab":n,bálát:n,balestrand:n,ballangen:n,balsfjord:n,bamble:n,bardu:n,barum:n,batsfjord:n,"xn--btsfjord-9za":n,båtsfjord:n,bearalvahki:n,"xn--bearalvhki-y4a":n,bearalváhki:n,beardu:n,beiarn:n,berg:n,bergen:n,berlevag:n,"xn--berlevg-jxa":n,berlevåg:n,bievat:n,"xn--bievt-0qa":n,bievát:n,bindal:n,birkenes:n,bjerkreim:n,bjugn:n,bodo:n,"xn--bod-2na":n,bodø:n,bokn:n,bomlo:n,"xn--bmlo-gra":n,bømlo:n,bremanger:n,bronnoy:n,"xn--brnny-wuac":n,brønnøy:n,budejju:n,buskerud:le,bygland:n,bykle:n,cahcesuolo:n,"xn--hcesuolo-7ya35b":n,čáhcesuolo:n,davvenjarga:n,"xn--davvenjrga-y4a":n,davvenjárga:n,davvesiida:n,deatnu:n,dielddanuorri:n,divtasvuodna:n,divttasvuotna:n,donna:n,"xn--dnna-gra":n,dønna:n,dovre:n,drammen:n,drangedal:n,dyroy:n,"xn--dyry-ira":n,dyrøy:n,eid:n,eidfjord:n,eidsberg:n,eidskog:n,eidsvoll:n,eigersund:n,elverum:n,enebakk:n,engerdal:n,etne:n,etnedal:n,evenassi:n,"xn--eveni-0qa01ga":n,evenášši:n,evenes:n,"evje-og-hornnes":n,farsund:n,fauske:n,fedje:n,fet:n,finnoy:n,"xn--finny-yua":n,finnøy:n,fitjar:n,fjaler:n,fjell:n,fla:n,"xn--fl-zia":n,flå:n,flakstad:n,flatanger:n,flekkefjord:n,flesberg:n,flora:n,folldal:n,forde:n,"xn--frde-gra":n,førde:n,forsand:n,fosnes:n,"xn--frna-woa":n,fræna:n,frana:n,frei:n,frogn:n,froland:n,frosta:n,froya:n,"xn--frya-hra":n,frøya:n,fuoisku:n,fuossko:n,fusa:n,fyresdal:n,gaivuotna:n,"xn--givuotna-8ya":n,gáivuotna:n,galsa:n,"xn--gls-elac":n,gálsá:n,gamvik:n,gangaviika:n,"xn--ggaviika-8ya47h":n,gáŋgaviika:n,gaular:n,gausdal:n,giehtavuoatna:n,gildeskal:n,"xn--gildeskl-g0a":n,gildeskål:n,giske:n,gjemnes:n,gjerdrum:n,gjerstad:n,gjesdal:n,gjovik:n,"xn--gjvik-wua":n,gjøvik:n,gloppen:n,gol:n,gran:n,grane:n,granvin:n,gratangen:n,grimstad:n,grong:n,grue:n,gulen:n,guovdageaidnu:n,ha:n,"xn--h-2fa":n,hå:n,habmer:n,"xn--hbmer-xqa":n,hábmer:n,hadsel:n,"xn--hgebostad-g3a":n,hægebostad:n,hagebostad:n,halden:n,halsa:n,hamar:n,hamaroy:n,hammarfeasta:n,"xn--hmmrfeasta-s4ac":n,hámmárfeasta:n,hammerfest:n,hapmir:n,"xn--hpmir-xqa":n,hápmir:n,haram:n,hareid:n,harstad:n,hasvik:n,hattfjelldal:n,haugesund:n,hedmark:[0,{os:n,valer:n,"xn--vler-qoa":n,våler:n}],hemne:n,hemnes:n,hemsedal:n,hitra:n,hjartdal:n,hjelmeland:n,hobol:n,"xn--hobl-ira":n,hobøl:n,hof:n,hol:n,hole:n,holmestrand:n,holtalen:n,"xn--holtlen-hxa":n,holtålen:n,hordaland:[0,{os:n}],hornindal:n,horten:n,hoyanger:n,"xn--hyanger-q1a":n,høyanger:n,hoylandet:n,"xn--hylandet-54a":n,høylandet:n,hurdal:n,hurum:n,hvaler:n,hyllestad:n,ibestad:n,inderoy:n,"xn--indery-fya":n,inderøy:n,iveland:n,ivgu:n,jevnaker:n,jolster:n,"xn--jlster-bya":n,jølster:n,jondal:n,kafjord:n,"xn--kfjord-iua":n,kåfjord:n,karasjohka:n,"xn--krjohka-hwab49j":n,kárášjohka:n,karasjok:n,karlsoy:n,karmoy:n,"xn--karmy-yua":n,karmøy:n,kautokeino:n,klabu:n,"xn--klbu-woa":n,klæbu:n,klepp:n,kongsberg:n,kongsvinger:n,kraanghke:n,"xn--kranghke-b0a":n,kråanghke:n,kragero:n,"xn--krager-gya":n,kragerø:n,kristiansand:n,kristiansund:n,krodsherad:n,"xn--krdsherad-m8a":n,krødsherad:n,"xn--kvfjord-nxa":n,kvæfjord:n,"xn--kvnangen-k0a":n,kvænangen:n,kvafjord:n,kvalsund:n,kvam:n,kvanangen:n,kvinesdal:n,kvinnherad:n,kviteseid:n,kvitsoy:n,"xn--kvitsy-fya":n,kvitsøy:n,laakesvuemie:n,"xn--lrdal-sra":n,lærdal:n,lahppi:n,"xn--lhppi-xqa":n,láhppi:n,lardal:n,larvik:n,lavagis:n,lavangen:n,leangaviika:n,"xn--leagaviika-52b":n,leaŋgaviika:n,lebesby:n,leikanger:n,leirfjord:n,leka:n,leksvik:n,lenvik:n,lerdal:n,lesja:n,levanger:n,lier:n,lierne:n,lillehammer:n,lillesand:n,lindas:n,"xn--linds-pra":n,lindås:n,lindesnes:n,loabat:n,"xn--loabt-0qa":n,loabát:n,lodingen:n,"xn--ldingen-q1a":n,lødingen:n,lom:n,loppa:n,lorenskog:n,"xn--lrenskog-54a":n,lørenskog:n,loten:n,"xn--lten-gra":n,løten:n,lund:n,lunner:n,luroy:n,"xn--lury-ira":n,lurøy:n,luster:n,lyngdal:n,lyngen:n,malatvuopmi:n,"xn--mlatvuopmi-s4a":n,málatvuopmi:n,malselv:n,"xn--mlselv-iua":n,målselv:n,malvik:n,mandal:n,marker:n,marnardal:n,masfjorden:n,masoy:n,"xn--msy-ula0h":n,måsøy:n,"matta-varjjat":n,"xn--mtta-vrjjat-k7af":n,"mátta-várjjat":n,meland:n,meldal:n,melhus:n,meloy:n,"xn--mely-ira":n,meløy:n,meraker:n,"xn--merker-kua":n,meråker:n,midsund:n,"midtre-gauldal":n,moareke:n,"xn--moreke-jua":n,moåreke:n,modalen:n,modum:n,molde:n,"more-og-romsdal":[0,{heroy:n,sande:n}],"xn--mre-og-romsdal-qqb":[0,{"xn--hery-ira":n,sande:n}],"møre-og-romsdal":[0,{herøy:n,sande:n}],moskenes:n,moss:n,muosat:n,"xn--muost-0qa":n,muosát:n,naamesjevuemie:n,"xn--nmesjevuemie-tcba":n,nååmesjevuemie:n,"xn--nry-yla5g":n,nærøy:n,namdalseid:n,namsos:n,namsskogan:n,nannestad:n,naroy:n,narviika:n,narvik:n,naustdal:n,navuotna:n,"xn--nvuotna-hwa":n,návuotna:n,"nedre-eiker":n,nesna:n,nesodden:n,nesseby:n,nesset:n,nissedal:n,nittedal:n,"nord-aurdal":n,"nord-fron":n,"nord-odal":n,norddal:n,nordkapp:n,nordland:[0,{bo:n,"xn--b-5ga":n,bø:n,heroy:n,"xn--hery-ira":n,herøy:n}],"nordre-land":n,nordreisa:n,"nore-og-uvdal":n,notodden:n,notteroy:n,"xn--nttery-byae":n,nøtterøy:n,odda:n,oksnes:n,"xn--ksnes-uua":n,øksnes:n,omasvuotna:n,oppdal:n,oppegard:n,"xn--oppegrd-ixa":n,oppegård:n,orkdal:n,orland:n,"xn--rland-uua":n,ørland:n,orskog:n,"xn--rskog-uua":n,ørskog:n,orsta:n,"xn--rsta-fra":n,ørsta:n,osen:n,osteroy:n,"xn--ostery-fya":n,osterøy:n,ostfold:[0,{valer:n}],"xn--stfold-9xa":[0,{"xn--vler-qoa":n}],østfold:[0,{våler:n}],"ostre-toten":n,"xn--stre-toten-zcb":n,"østre-toten":n,overhalla:n,"ovre-eiker":n,"xn--vre-eiker-k8a":n,"øvre-eiker":n,oyer:n,"xn--yer-zna":n,øyer:n,oygarden:n,"xn--ygarden-p1a":n,øygarden:n,"oystre-slidre":n,"xn--ystre-slidre-ujb":n,"øystre-slidre":n,porsanger:n,porsangu:n,"xn--porsgu-sta26f":n,porsáŋgu:n,porsgrunn:n,rade:n,"xn--rde-ula":n,råde:n,radoy:n,"xn--rady-ira":n,radøy:n,"xn--rlingen-mxa":n,rælingen:n,rahkkeravju:n,"xn--rhkkervju-01af":n,ráhkkerávju:n,raisa:n,"xn--risa-5na":n,ráisa:n,rakkestad:n,ralingen:n,rana:n,randaberg:n,rauma:n,rendalen:n,rennebu:n,rennesoy:n,"xn--rennesy-v1a":n,rennesøy:n,rindal:n,ringebu:n,ringerike:n,ringsaker:n,risor:n,"xn--risr-ira":n,risør:n,rissa:n,roan:n,rodoy:n,"xn--rdy-0nab":n,rødøy:n,rollag:n,romsa:n,romskog:n,"xn--rmskog-bya":n,rømskog:n,roros:n,"xn--rros-gra":n,røros:n,rost:n,"xn--rst-0na":n,røst:n,royken:n,"xn--ryken-vua":n,røyken:n,royrvik:n,"xn--ryrvik-bya":n,røyrvik:n,ruovat:n,rygge:n,salangen:n,salat:n,"xn--slat-5na":n,sálat:n,"xn--slt-elab":n,sálát:n,saltdal:n,samnanger:n,sandefjord:n,sandnes:n,sandoy:n,"xn--sandy-yua":n,sandøy:n,sarpsborg:n,sauda:n,sauherad:n,sel:n,selbu:n,selje:n,seljord:n,siellak:n,sigdal:n,siljan:n,sirdal:n,skanit:n,"xn--sknit-yqa":n,skánit:n,skanland:n,"xn--sknland-fxa":n,skånland:n,skaun:n,skedsmo:n,ski:n,skien:n,skierva:n,"xn--skierv-uta":n,skiervá:n,skiptvet:n,skjak:n,"xn--skjk-soa":n,skjåk:n,skjervoy:n,"xn--skjervy-v1a":n,skjervøy:n,skodje:n,smola:n,"xn--smla-hra":n,smøla:n,snaase:n,"xn--snase-nra":n,snåase:n,snasa:n,"xn--snsa-roa":n,snåsa:n,snillfjord:n,snoasa:n,sogndal:n,sogne:n,"xn--sgne-gra":n,søgne:n,sokndal:n,sola:n,solund:n,somna:n,"xn--smna-gra":n,sømna:n,"sondre-land":n,"xn--sndre-land-0cb":n,"søndre-land":n,songdalen:n,"sor-aurdal":n,"xn--sr-aurdal-l8a":n,"sør-aurdal":n,"sor-fron":n,"xn--sr-fron-q1a":n,"sør-fron":n,"sor-odal":n,"xn--sr-odal-q1a":n,"sør-odal":n,"sor-varanger":n,"xn--sr-varanger-ggb":n,"sør-varanger":n,sorfold:n,"xn--srfold-bya":n,sørfold:n,sorreisa:n,"xn--srreisa-q1a":n,sørreisa:n,sortland:n,sorum:n,"xn--srum-gra":n,sørum:n,spydeberg:n,stange:n,stavanger:n,steigen:n,steinkjer:n,stjordal:n,"xn--stjrdal-s1a":n,stjørdal:n,stokke:n,"stor-elvdal":n,stord:n,stordal:n,storfjord:n,strand:n,stranda:n,stryn:n,sula:n,suldal:n,sund:n,sunndal:n,surnadal:n,sveio:n,svelvik:n,sykkylven:n,tana:n,telemark:[0,{bo:n,"xn--b-5ga":n,bø:n}],time:n,tingvoll:n,tinn:n,tjeldsund:n,tjome:n,"xn--tjme-hra":n,tjøme:n,tokke:n,tolga:n,tonsberg:n,"xn--tnsberg-q1a":n,tønsberg:n,torsken:n,"xn--trna-woa":n,træna:n,trana:n,tranoy:n,"xn--trany-yua":n,tranøy:n,troandin:n,trogstad:n,"xn--trgstad-r1a":n,trøgstad:n,tromsa:n,tromso:n,"xn--troms-zua":n,tromsø:n,trondheim:n,trysil:n,tvedestrand:n,tydal:n,tynset:n,tysfjord:n,tysnes:n,"xn--tysvr-vra":n,tysvær:n,tysvar:n,ullensaker:n,ullensvang:n,ulvik:n,unjarga:n,"xn--unjrga-rta":n,unjárga:n,utsira:n,vaapste:n,vadso:n,"xn--vads-jra":n,vadsø:n,"xn--vry-yla5g":n,værøy:n,vaga:n,"xn--vg-yiab":n,vågå:n,vagan:n,"xn--vgan-qoa":n,vågan:n,vagsoy:n,"xn--vgsy-qoa0j":n,vågsøy:n,vaksdal:n,valle:n,vang:n,vanylven:n,vardo:n,"xn--vard-jra":n,vardø:n,varggat:n,"xn--vrggt-xqad":n,várggát:n,varoy:n,vefsn:n,vega:n,vegarshei:n,"xn--vegrshei-c0a":n,vegårshei:n,vennesla:n,verdal:n,verran:n,vestby:n,vestfold:[0,{sande:n}],vestnes:n,"vestre-slidre":n,"vestre-toten":n,vestvagoy:n,"xn--vestvgy-ixa6o":n,vestvågøy:n,vevelstad:n,vik:n,vikna:n,vindafjord:n,voagat:n,volda:n,voss:n,co:e,"123hjemmeside":e,myspreadshop:e}],np:T,nr:ie,nu:[1,{merseine:e,mine:e,shacknet:e,enterprisecloud:e}],nz:[1,{ac:n,co:n,cri:n,geek:n,gen:n,govt:n,health:n,iwi:n,kiwi:n,maori:n,"xn--mori-qsa":n,māori:n,mil:n,net:n,org:n,parliament:n,school:n,cloudns:e}],om:[1,{co:n,com:n,edu:n,gov:n,med:n,museum:n,net:n,org:n,pro:n}],onion:n,org:[1,{altervista:e,pimienta:e,poivron:e,potager:e,sweetpepper:e,cdn77:[0,{c:e,rsc:e}],"cdn77-secure":[0,{origin:[0,{ssl:e}]}],ae:e,cloudns:e,"ip-dynamic":e,ddnss:e,dpdns:e,duckdns:e,tunk:e,blogdns:e,blogsite:e,boldlygoingnowhere:e,dnsalias:e,dnsdojo:e,doesntexist:e,dontexist:e,doomdns:e,dvrdns:e,dynalias:e,dyndns:[2,{go:e,home:e}],endofinternet:e,endoftheinternet:e,"from-me":e,"game-host":e,gotdns:e,"hobby-site":e,homedns:e,homeftp:e,homelinux:e,homeunix:e,"is-a-bruinsfan":e,"is-a-candidate":e,"is-a-celticsfan":e,"is-a-chef":e,"is-a-geek":e,"is-a-knight":e,"is-a-linux-user":e,"is-a-patsfan":e,"is-a-soxfan":e,"is-found":e,"is-lost":e,"is-saved":e,"is-very-bad":e,"is-very-evil":e,"is-very-good":e,"is-very-nice":e,"is-very-sweet":e,"isa-geek":e,"kicks-ass":e,misconfused:e,podzone:e,readmyblog:e,selfip:e,sellsyourhome:e,servebbs:e,serveftp:e,servegame:e,"stuff-4-sale":e,webhop:e,accesscam:e,camdvr:e,freeddns:e,mywire:e,roxa:e,webredirect:e,twmail:e,eu:[2,{al:e,asso:e,at:e,au:e,be:e,bg:e,ca:e,cd:e,ch:e,cn:e,cy:e,cz:e,de:e,dk:e,edu:e,ee:e,es:e,fi:e,fr:e,gr:e,hr:e,hu:e,ie:e,il:e,in:e,int:e,is:e,it:e,jp:e,kr:e,lt:e,lu:e,lv:e,me:e,mk:e,mt:e,my:e,net:e,ng:e,nl:e,no:e,nz:e,pl:e,pt:e,ro:e,ru:e,se:e,si:e,sk:e,tr:e,uk:e,us:e}],fedorainfracloud:e,fedorapeople:e,fedoraproject:[0,{cloud:e,os:gn,stg:[0,{os:gn}]}],freedesktop:e,hatenadiary:e,hepforge:e,"in-dsl":e,"in-vpn":e,js:e,barsy:e,mayfirst:e,routingthecloud:e,bmoattachments:e,"cable-modem":e,collegefan:e,couchpotatofries:e,hopto:e,mlbfan:e,myftp:e,mysecuritycamera:e,nflfan:e,"no-ip":e,"read-books":e,ufcfan:e,zapto:e,dynserv:e,"now-dns":e,"is-local":e,httpbin:e,pubtls:e,jpn:e,"my-firewall":e,myfirewall:e,spdns:e,"small-web":e,dsmynas:e,familyds:e,teckids:wn,tuxfamily:e,hk:e,us:e,toolforge:e,wmcloud:[2,{beta:e}],wmflabs:e,za:e}],pa:[1,{abo:n,ac:n,com:n,edu:n,gob:n,ing:n,med:n,net:n,nom:n,org:n,sld:n}],pe:[1,{com:n,edu:n,gob:n,mil:n,net:n,nom:n,org:n}],pf:[1,{com:n,edu:n,org:n}],pg:T,ph:[1,{com:n,edu:n,gov:n,i:n,mil:n,net:n,ngo:n,org:n,cloudns:e}],pk:[1,{ac:n,biz:n,com:n,edu:n,fam:n,gkp:n,gob:n,gog:n,gok:n,gop:n,gos:n,gov:n,net:n,org:n,web:n}],pl:[1,{com:n,net:n,org:n,agro:n,aid:n,atm:n,auto:n,biz:n,edu:n,gmina:n,gsm:n,info:n,mail:n,media:n,miasta:n,mil:n,nieruchomosci:n,nom:n,pc:n,powiat:n,priv:n,realestate:n,rel:n,sex:n,shop:n,sklep:n,sos:n,szkola:n,targi:n,tm:n,tourism:n,travel:n,turystyka:n,gov:[1,{ap:n,griw:n,ic:n,is:n,kmpsp:n,konsulat:n,kppsp:n,kwp:n,kwpsp:n,mup:n,mw:n,oia:n,oirm:n,oke:n,oow:n,oschr:n,oum:n,pa:n,pinb:n,piw:n,po:n,pr:n,psp:n,psse:n,pup:n,rzgw:n,sa:n,sdn:n,sko:n,so:n,sr:n,starostwo:n,ug:n,ugim:n,um:n,umig:n,upow:n,uppo:n,us:n,uw:n,uzs:n,wif:n,wiih:n,winb:n,wios:n,witd:n,wiw:n,wkz:n,wsa:n,wskr:n,wsse:n,wuoz:n,wzmiuw:n,zp:n,zpisdn:n}],augustow:n,"babia-gora":n,bedzin:n,beskidy:n,bialowieza:n,bialystok:n,bielawa:n,bieszczady:n,boleslawiec:n,bydgoszcz:n,bytom:n,cieszyn:n,czeladz:n,czest:n,dlugoleka:n,elblag:n,elk:n,glogow:n,gniezno:n,gorlice:n,grajewo:n,ilawa:n,jaworzno:n,"jelenia-gora":n,jgora:n,kalisz:n,karpacz:n,kartuzy:n,kaszuby:n,katowice:n,"kazimierz-dolny":n,kepno:n,ketrzyn:n,klodzko:n,kobierzyce:n,kolobrzeg:n,konin:n,konskowola:n,kutno:n,lapy:n,lebork:n,legnica:n,lezajsk:n,limanowa:n,lomza:n,lowicz:n,lubin:n,lukow:n,malbork:n,malopolska:n,mazowsze:n,mazury:n,mielec:n,mielno:n,mragowo:n,naklo:n,nowaruda:n,nysa:n,olawa:n,olecko:n,olkusz:n,olsztyn:n,opoczno:n,opole:n,ostroda:n,ostroleka:n,ostrowiec:n,ostrowwlkp:n,pila:n,pisz:n,podhale:n,podlasie:n,polkowice:n,pomorskie:n,pomorze:n,prochowice:n,pruszkow:n,przeworsk:n,pulawy:n,radom:n,"rawa-maz":n,rybnik:n,rzeszow:n,sanok:n,sejny:n,skoczow:n,slask:n,slupsk:n,sosnowiec:n,"stalowa-wola":n,starachowice:n,stargard:n,suwalki:n,swidnica:n,swiebodzin:n,swinoujscie:n,szczecin:n,szczytno:n,tarnobrzeg:n,tgory:n,turek:n,tychy:n,ustka:n,walbrzych:n,warmia:n,warszawa:n,waw:n,wegrow:n,wielun:n,wlocl:n,wloclawek:n,wodzislaw:n,wolomin:n,wroclaw:n,zachpomor:n,zagan:n,zarow:n,zgora:n,zgorzelec:n,art:e,gliwice:e,krakow:e,poznan:e,wroc:e,zakopane:e,beep:e,"ecommerce-shop":e,cfolks:e,dfirma:e,dkonto:e,you2:e,shoparena:e,homesklep:e,sdscloud:e,unicloud:e,lodz:e,pabianice:e,plock:e,sieradz:e,skierniewice:e,zgierz:e,krasnik:e,leczna:e,lubartow:e,lublin:e,poniatowa:e,swidnik:e,co:e,torun:e,simplesite:e,myspreadshop:e,gda:e,gdansk:e,gdynia:e,med:e,sopot:e,bielsko:e}],pm:[1,{own:e,name:e}],pn:[1,{co:n,edu:n,gov:n,net:n,org:n}],post:n,pr:[1,{biz:n,com:n,edu:n,gov:n,info:n,isla:n,name:n,net:n,org:n,pro:n,ac:n,est:n,prof:n}],pro:[1,{aaa:n,aca:n,acct:n,avocat:n,bar:n,cpa:n,eng:n,jur:n,law:n,med:n,recht:n,cloudns:e,keenetic:e,barsy:e,ngrok:e}],ps:[1,{com:n,edu:n,gov:n,net:n,org:n,plo:n,sec:n}],pt:[1,{com:n,edu:n,gov:n,int:n,net:n,nome:n,org:n,publ:n,"123paginaweb":e}],pw:[1,{gov:n,cloudns:e,x443:e}],py:[1,{com:n,coop:n,edu:n,gov:n,mil:n,net:n,org:n}],qa:[1,{com:n,edu:n,gov:n,mil:n,name:n,net:n,org:n,sch:n}],re:[1,{asso:n,com:n,netlib:e,can:e}],ro:[1,{arts:n,com:n,firm:n,info:n,nom:n,nt:n,org:n,rec:n,store:n,tm:n,www:n,co:e,shop:e,barsy:e}],rs:[1,{ac:n,co:n,edu:n,gov:n,in:n,org:n,brendly:$,barsy:e,ox:e}],ru:[1,{ac:e,edu:e,gov:e,int:e,mil:e,eurodir:e,adygeya:e,bashkiria:e,bir:e,cbg:e,com:e,dagestan:e,grozny:e,kalmykia:e,kustanai:e,marine:e,mordovia:e,msk:e,mytis:e,nalchik:e,nov:e,pyatigorsk:e,spb:e,vladikavkaz:e,vladimir:e,na4u:e,mircloud:e,myjino:[2,{hosting:t,landing:t,spectrum:t,vps:t}],cldmail:[0,{hb:e}],mcdir:[2,{vps:e}],mcpre:e,net:e,org:e,pp:e,ras:e}],rw:[1,{ac:n,co:n,coop:n,gov:n,mil:n,net:n,org:n}],sa:[1,{com:n,edu:n,gov:n,med:n,net:n,org:n,pub:n,sch:n}],sb:a,sc:a,sd:[1,{com:n,edu:n,gov:n,info:n,med:n,net:n,org:n,tv:n}],se:[1,{a:n,ac:n,b:n,bd:n,brand:n,c:n,d:n,e:n,f:n,fh:n,fhsk:n,fhv:n,g:n,h:n,i:n,k:n,komforb:n,kommunalforbund:n,komvux:n,l:n,lanbib:n,m:n,n,naturbruksgymn:n,o:n,org:n,p:n,parti:n,pp:n,press:n,r:n,s:n,t:n,tm:n,u:n,w:n,x:n,y:n,z:n,com:e,iopsys:e,"123minsida":e,itcouldbewor:e,myspreadshop:e}],sg:[1,{com:n,edu:n,gov:n,net:n,org:n,enscaled:e}],sh:[1,{com:n,gov:n,mil:n,net:n,org:n,hashbang:e,botda:e,lovable:e,platform:[0,{ent:e,eu:e,us:e}],teleport:e,now:e}],si:[1,{f5:e,gitapp:e,gitpage:e}],sj:n,sk:[1,{org:n}],sl:a,sm:n,sn:[1,{art:n,com:n,edu:n,gouv:n,org:n,univ:n}],so:[1,{com:n,edu:n,gov:n,me:n,net:n,org:n,surveys:e}],sr:n,ss:[1,{biz:n,co:n,com:n,edu:n,gov:n,me:n,net:n,org:n,sch:n}],st:[1,{co:n,com:n,consulado:n,edu:n,embaixada:n,mil:n,net:n,org:n,principe:n,saotome:n,store:n,helioho:e,cn:t,kirara:e,noho:e}],su:[1,{abkhazia:e,adygeya:e,aktyubinsk:e,arkhangelsk:e,armenia:e,ashgabad:e,azerbaijan:e,balashov:e,bashkiria:e,bryansk:e,bukhara:e,chimkent:e,dagestan:e,"east-kazakhstan":e,exnet:e,georgia:e,grozny:e,ivanovo:e,jambyl:e,kalmykia:e,kaluga:e,karacol:e,karaganda:e,karelia:e,khakassia:e,krasnodar:e,kurgan:e,kustanai:e,lenug:e,mangyshlak:e,mordovia:e,msk:e,murmansk:e,nalchik:e,navoi:e,"north-kazakhstan":e,nov:e,obninsk:e,penza:e,pokrovsk:e,sochi:e,spb:e,tashkent:e,termez:e,togliatti:e,troitsk:e,tselinograd:e,tula:e,tuva:e,vladikavkaz:e,vladimir:e,vologda:e}],sv:[1,{com:n,edu:n,gob:n,org:n,red:n}],sx:d,sy:o,sz:[1,{ac:n,co:n,org:n}],tc:n,td:n,tel:n,tf:[1,{sch:e}],tg:n,th:[1,{ac:n,co:n,go:n,in:n,mi:n,net:n,or:n,online:e,shop:e}],tj:[1,{ac:n,biz:n,co:n,com:n,edu:n,go:n,gov:n,int:n,mil:n,name:n,net:n,nic:n,org:n,test:n,web:n}],tk:n,tl:d,tm:[1,{co:n,com:n,edu:n,gov:n,mil:n,net:n,nom:n,org:n}],tn:[1,{com:n,ens:n,fin:n,gov:n,ind:n,info:n,intl:n,mincom:n,nat:n,net:n,org:n,perso:n,tourism:n,orangecloud:e}],to:[1,{611:e,com:n,edu:n,gov:n,mil:n,net:n,org:n,oya:e,x0:e,quickconnect:Gn,vpnplus:e,nett:e}],tr:[1,{av:n,bbs:n,bel:n,biz:n,com:n,dr:n,edu:n,gen:n,gov:n,info:n,k12:n,kep:n,mil:n,name:n,net:n,org:n,pol:n,tel:n,tsk:n,tv:n,web:n,nc:d}],tt:[1,{biz:n,co:n,com:n,edu:n,gov:n,info:n,mil:n,name:n,net:n,org:n,pro:n}],tv:[1,{"better-than":e,dyndns:e,"on-the-web":e,"worse-than":e,from:e,sakura:e}],tw:[1,{club:n,com:[1,{mymailer:e}],ebiz:n,edu:n,game:n,gov:n,idv:n,mil:n,net:n,org:n,url:e,mydns:e}],tz:[1,{ac:n,co:n,go:n,hotel:n,info:n,me:n,mil:n,mobi:n,ne:n,or:n,sc:n,tv:n}],ua:[1,{com:n,edu:n,gov:n,in:n,net:n,org:n,cherkassy:n,cherkasy:n,chernigov:n,chernihiv:n,chernivtsi:n,chernovtsy:n,ck:n,cn:n,cr:n,crimea:n,cv:n,dn:n,dnepropetrovsk:n,dnipropetrovsk:n,donetsk:n,dp:n,if:n,"ivano-frankivsk":n,kh:n,kharkiv:n,kharkov:n,kherson:n,khmelnitskiy:n,khmelnytskyi:n,kiev:n,kirovograd:n,km:n,kr:n,kropyvnytskyi:n,krym:n,ks:n,kv:n,kyiv:n,lg:n,lt:n,lugansk:n,luhansk:n,lutsk:n,lv:n,lviv:n,mk:n,mykolaiv:n,nikolaev:n,od:n,odesa:n,odessa:n,pl:n,poltava:n,rivne:n,rovno:n,rv:n,sb:n,sebastopol:n,sevastopol:n,sm:n,sumy:n,te:n,ternopil:n,uz:n,uzhgorod:n,uzhhorod:n,vinnica:n,vinnytsia:n,vn:n,volyn:n,yalta:n,zakarpattia:n,zaporizhzhe:n,zaporizhzhia:n,zhitomir:n,zhytomyr:n,zp:n,zt:n,cc:e,inf:e,ltd:e,cx:e,biz:e,co:e,pp:e,v:e}],ug:[1,{ac:n,co:n,com:n,edu:n,go:n,gov:n,mil:n,ne:n,or:n,org:n,sc:n,us:n}],uk:[1,{ac:n,co:[1,{bytemark:[0,{dh:e,vm:e}],layershift:kn,barsy:e,barsyonline:e,retrosnub:oe,"nh-serv":e,"no-ip":e,adimo:e,myspreadshop:e}],gov:[1,{api:e,campaign:e,service:e}],ltd:n,me:n,net:n,nhs:n,org:[1,{glug:e,lug:e,lugs:e,affinitylottery:e,raffleentry:e,weeklylottery:e}],plc:n,police:n,sch:T,conn:e,copro:e,hosp:e,"independent-commission":e,"independent-inquest":e,"independent-inquiry":e,"independent-panel":e,"independent-review":e,"public-inquiry":e,"royal-commission":e,pymnt:e,barsy:e,nimsite:e,oraclegovcloudapps:t}],us:[1,{dni:n,isa:n,nsn:n,ak:h,al:h,ar:h,as:h,az:h,ca:h,co:h,ct:h,dc:h,de:ce,fl:h,ga:h,gu:h,hi:sn,ia:h,id:h,il:h,in:h,ks:h,ky:h,la:h,ma:[1,{k12:[1,{chtr:n,paroch:n,pvt:n}],cc:n,lib:n}],md:h,me:h,mi:[1,{k12:n,cc:n,lib:n,"ann-arbor":n,cog:n,dst:n,eaton:n,gen:n,mus:n,tec:n,washtenaw:n}],mn:h,mo:h,ms:[1,{k12:n,cc:n}],mt:h,nc:h,nd:sn,ne:h,nh:h,nj:h,nm:h,nv:h,ny:h,oh:h,ok:h,or:h,pa:h,pr:h,ri:sn,sc:h,sd:sn,tn:h,tx:h,ut:h,va:h,vi:h,vt:h,wa:h,wi:h,wv:ce,wy:h,cloudns:e,"is-by":e,"land-4-sale":e,"stuff-4-sale":e,heliohost:e,enscaled:[0,{phx:e}],mircloud:e,"azure-api":e,azurewebsites:e,ngo:e,golffan:e,noip:e,pointto:e,freeddns:e,srv:[2,{gh:e,gl:e}],servername:e}],uy:[1,{com:n,edu:n,gub:n,mil:n,net:n,org:n,gv:e}],uz:[1,{co:n,com:n,net:n,org:n}],va:n,vc:[1,{com:n,edu:n,gov:n,mil:n,net:n,org:n,gv:[2,{d:e}],"0e":t,mydns:e}],ve:[1,{arts:n,bib:n,co:n,com:n,e12:n,edu:n,emprende:n,firm:n,gob:n,gov:n,ia:n,info:n,int:n,mil:n,net:n,nom:n,org:n,rar:n,rec:n,store:n,tec:n,web:n}],vg:[1,{edu:n}],vi:[1,{co:n,com:n,k12:n,net:n,org:n}],vn:[1,{ac:n,ai:n,biz:n,com:n,edu:n,gov:n,health:n,id:n,info:n,int:n,io:n,name:n,net:n,org:n,pro:n,angiang:n,bacgiang:n,backan:n,baclieu:n,bacninh:n,"baria-vungtau":n,bentre:n,binhdinh:n,binhduong:n,binhphuoc:n,binhthuan:n,camau:n,cantho:n,caobang:n,daklak:n,daknong:n,danang:n,dienbien:n,dongnai:n,dongthap:n,gialai:n,hagiang:n,haiduong:n,haiphong:n,hanam:n,hanoi:n,hatinh:n,haugiang:n,hoabinh:n,hungyen:n,khanhhoa:n,kiengiang:n,kontum:n,laichau:n,lamdong:n,langson:n,laocai:n,longan:n,namdinh:n,nghean:n,ninhbinh:n,ninhthuan:n,phutho:n,phuyen:n,quangbinh:n,quangnam:n,quangngai:n,quangninh:n,quangtri:n,soctrang:n,sonla:n,tayninh:n,thaibinh:n,thainguyen:n,thanhhoa:n,thanhphohochiminh:n,thuathienhue:n,tiengiang:n,travinh:n,tuyenquang:n,vinhlong:n,vinhphuc:n,yenbai:n}],vu:tn,wf:[1,{biz:e,sch:e}],ws:[1,{com:n,edu:n,gov:n,net:n,org:n,advisor:t,cloud66:e,dyndns:e,mypets:e}],yt:[1,{org:e}],"xn--mgbaam7a8h":n,امارات:n,"xn--y9a3aq":n,հայ:n,"xn--54b7fta0cc":n,বাংলা:n,"xn--90ae":n,бг:n,"xn--mgbcpq6gpa1a":n,البحرين:n,"xn--90ais":n,бел:n,"xn--fiqs8s":n,中国:n,"xn--fiqz9s":n,中國:n,"xn--lgbbat1ad8j":n,الجزائر:n,"xn--wgbh1c":n,مصر:n,"xn--e1a4c":n,ею:n,"xn--qxa6a":n,ευ:n,"xn--mgbah1a3hjkrd":n,موريتانيا:n,"xn--node":n,გე:n,"xn--qxam":n,ελ:n,"xn--j6w193g":[1,{"xn--gmqw5a":n,"xn--55qx5d":n,"xn--mxtq1m":n,"xn--wcvs22d":n,"xn--uc0atv":n,"xn--od0alg":n}],香港:[1,{個人:n,公司:n,政府:n,教育:n,組織:n,網絡:n}],"xn--2scrj9c":n,ಭಾರತ:n,"xn--3hcrj9c":n,ଭାରତ:n,"xn--45br5cyl":n,ভাৰত:n,"xn--h2breg3eve":n,भारतम्:n,"xn--h2brj9c8c":n,भारोत:n,"xn--mgbgu82a":n,ڀارت:n,"xn--rvc1e0am3e":n,ഭാരതം:n,"xn--h2brj9c":n,भारत:n,"xn--mgbbh1a":n,بارت:n,"xn--mgbbh1a71e":n,بھارت:n,"xn--fpcrj9c3d":n,భారత్:n,"xn--gecrj9c":n,ભારત:n,"xn--s9brj9c":n,ਭਾਰਤ:n,"xn--45brj9c":n,ভারত:n,"xn--xkc2dl3a5ee0h":n,இந்தியா:n,"xn--mgba3a4f16a":n,ایران:n,"xn--mgba3a4fra":n,ايران:n,"xn--mgbtx2b":n,عراق:n,"xn--mgbayh7gpa":n,الاردن:n,"xn--3e0b707e":n,한국:n,"xn--80ao21a":n,қаз:n,"xn--q7ce6a":n,ລາວ:n,"xn--fzc2c9e2c":n,ලංකා:n,"xn--xkc2al3hye2a":n,இலங்கை:n,"xn--mgbc0a9azcg":n,المغرب:n,"xn--d1alf":n,мкд:n,"xn--l1acc":n,мон:n,"xn--mix891f":n,澳門:n,"xn--mix082f":n,澳门:n,"xn--mgbx4cd0ab":n,مليسيا:n,"xn--mgb9awbf":n,عمان:n,"xn--mgbai9azgqp6j":n,پاکستان:n,"xn--mgbai9a5eva00b":n,پاكستان:n,"xn--ygbi2ammx":n,فلسطين:n,"xn--90a3ac":[1,{"xn--80au":n,"xn--90azh":n,"xn--d1at":n,"xn--c1avg":n,"xn--o1ac":n,"xn--o1ach":n}],срб:[1,{ак:n,обр:n,од:n,орг:n,пр:n,упр:n}],"xn--p1ai":n,рф:n,"xn--wgbl6a":n,قطر:n,"xn--mgberp4a5d4ar":n,السعودية:n,"xn--mgberp4a5d4a87g":n,السعودیة:n,"xn--mgbqly7c0a67fbc":n,السعودیۃ:n,"xn--mgbqly7cvafr":n,السعوديه:n,"xn--mgbpl2fh":n,سودان:n,"xn--yfro4i67o":n,新加坡:n,"xn--clchc0ea0b2g2a9gcd":n,சிங்கப்பூர்:n,"xn--ogbpf8fl":n,سورية:n,"xn--mgbtf8fl":n,سوريا:n,"xn--o3cw4h":[1,{"xn--o3cyx2a":n,"xn--12co0c3b4eva":n,"xn--m3ch0j3a":n,"xn--h3cuzk1di":n,"xn--12c1fe0br":n,"xn--12cfi8ixb8l":n}],ไทย:[1,{ทหาร:n,ธุรกิจ:n,เน็ต:n,รัฐบาล:n,ศึกษา:n,องค์กร:n}],"xn--pgbs0dh":n,تونس:n,"xn--kpry57d":n,台灣:n,"xn--kprw13d":n,台湾:n,"xn--nnx388a":n,臺灣:n,"xn--j1amh":n,укр:n,"xn--mgb2ddes":n,اليمن:n,xxx:n,ye:o,za:[0,{ac:n,agric:n,alt:n,co:n,edu:n,gov:n,grondar:n,law:n,mil:n,net:n,ngo:n,nic:n,nis:n,nom:n,org:n,school:n,tm:n,web:n}],zm:[1,{ac:n,biz:n,co:n,com:n,edu:n,gov:n,info:n,mil:n,net:n,org:n,sch:n}],zw:[1,{ac:n,co:n,gov:n,mil:n,org:n}],aaa:n,aarp:n,abb:n,abbott:n,abbvie:n,abc:n,able:n,abogado:n,abudhabi:n,academy:[1,{official:e}],accenture:n,accountant:n,accountants:n,aco:n,actor:n,ads:n,adult:n,aeg:n,aetna:n,afl:n,africa:n,agakhan:n,agency:n,aig:n,airbus:n,airforce:n,airtel:n,akdn:n,alibaba:n,alipay:n,allfinanz:n,allstate:n,ally:n,alsace:n,alstom:n,amazon:n,americanexpress:n,americanfamily:n,amex:n,amfam:n,amica:n,amsterdam:n,analytics:n,android:n,anquan:n,anz:n,aol:n,apartments:n,app:[1,{adaptable:e,aiven:e,beget:t,brave:s,clerk:e,clerkstage:e,cloudflare:e,wnext:e,csb:[2,{preview:e}],convex:e,corespeed:e,deta:e,ondigitalocean:e,easypanel:e,encr:[2,{frontend:e}],evervault:l,expo:[2,{staging:e}],edgecompute:e,"on-fleek":e,flutterflow:e,sprites:e,e2b:e,framer:e,gadget:e,github:e,hosted:t,run:[0,{"*":e,mtls:t}],web:e,hackclub:e,hasura:e,onhercules:e,botdash:e,shiptoday:e,leapcell:e,loginline:e,lovable:e,luyani:e,magicpatterns:e,medusajs:e,messerli:e,miren:e,mocha:e,netlify:e,ngrok:e,"ngrok-free":e,developer:t,noop:e,northflank:t,upsun:t,railway:[0,{up:e}],replit:u,nyat:e,snowflake:[0,{"*":e,privatelink:t}],streamlit:e,spawnbase:e,telebit:e,typedream:e,vercel:e,wal:e,wasmer:e,bookonline:e,windsurf:e,base44:e,zeabur:e,zerops:t}],apple:[1,{int:[2,{cloud:[0,{"*":e,r:[0,{"*":e,"ap-north-1":t,"ap-south-1":t,"ap-south-2":t,"eu-central-1":t,"eu-north-1":t,"us-central-1":t,"us-central-2":t,"us-east-1":t,"us-east-2":t,"us-west-1":t,"us-west-2":t,"us-west-3":t}]}]}]}],aquarelle:n,arab:n,aramco:n,archi:n,army:n,art:n,arte:n,asda:n,associates:n,athleta:n,attorney:n,auction:n,audi:n,audible:n,audio:n,auspost:n,author:n,auto:n,autos:n,aws:[1,{on:[0,{"af-south-1":m,"ap-east-1":m,"ap-northeast-1":m,"ap-northeast-2":m,"ap-northeast-3":m,"ap-south-1":m,"ap-south-2":b,"ap-southeast-1":m,"ap-southeast-2":m,"ap-southeast-3":m,"ap-southeast-4":b,"ap-southeast-5":b,"ca-central-1":m,"ca-west-1":b,"eu-central-1":m,"eu-central-2":b,"eu-north-1":m,"eu-south-1":m,"eu-south-2":b,"eu-west-1":m,"eu-west-2":m,"eu-west-3":m,"il-central-1":b,"me-central-1":b,"me-south-1":m,"sa-east-1":m,"us-east-1":m,"us-east-2":m,"us-west-1":m,"us-west-2":m,"ap-southeast-7":w,"mx-central-1":w,"us-gov-east-1":y,"us-gov-west-1":y}],sagemaker:[0,{"ap-northeast-1":v,"ap-northeast-2":v,"ap-south-1":v,"ap-southeast-1":v,"ap-southeast-2":v,"ca-central-1":R,"eu-central-1":v,"eu-west-1":v,"eu-west-2":v,"us-east-1":R,"us-east-2":R,"us-west-2":R,"af-south-1":f,"ap-east-1":f,"ap-northeast-3":f,"ap-south-2":N,"ap-southeast-3":f,"ap-southeast-4":N,"ca-west-1":[0,{notebook:e,"notebook-fips":e}],"eu-central-2":f,"eu-north-1":f,"eu-south-1":f,"eu-south-2":f,"eu-west-3":f,"il-central-1":f,"me-central-1":f,"me-south-1":f,"sa-east-1":f,"us-gov-east-1":S,"us-gov-west-1":S,"us-west-1":[0,{notebook:e,"notebook-fips":e,studio:e}],experiments:t}],repost:[0,{private:t}]}],axa:n,azure:n,baby:n,baidu:n,banamex:n,band:n,bank:n,bar:n,barcelona:n,barclaycard:n,barclays:n,barefoot:n,bargains:n,baseball:n,basketball:[1,{aus:e,nz:e}],bauhaus:n,bayern:n,bbc:n,bbt:n,bbva:n,bcg:n,bcn:n,beats:n,beauty:n,beer:n,berlin:n,best:n,bestbuy:n,bet:n,bharti:n,bible:n,bid:n,bike:n,bing:n,bingo:n,bio:n,black:n,blackfriday:n,blockbuster:n,blog:n,bloomberg:n,blue:n,bms:n,bmw:n,bnpparibas:n,boats:n,boehringer:n,bofa:n,bom:n,bond:n,boo:n,book:n,booking:n,bosch:n,bostik:n,boston:n,bot:n,boutique:n,box:n,bradesco:n,bridgestone:n,broadway:n,broker:n,brother:n,brussels:n,build:[1,{shiptoday:e,v0:e,windsurf:e}],builders:[1,{cloudsite:e}],business:B,buy:n,buzz:n,bzh:n,cab:n,cafe:n,cal:n,call:n,calvinklein:n,cam:n,camera:n,camp:[1,{emf:[0,{at:e}]}],canon:n,capetown:n,capital:n,capitalone:n,car:n,caravan:n,cards:n,care:n,career:n,careers:n,cars:n,casa:[1,{nabu:[0,{ui:e}]}],case:[1,{sav:e}],cash:n,casino:n,catering:n,catholic:n,cba:n,cbn:n,cbre:n,center:n,ceo:n,cern:n,cfa:n,cfd:n,chanel:n,channel:n,charity:n,chase:n,chat:n,cheap:n,chintai:n,christmas:n,chrome:n,church:n,cipriani:n,circle:n,cisco:n,citadel:n,citi:n,citic:n,city:n,claims:n,cleaning:n,click:n,clinic:n,clinique:n,clothing:n,cloud:[1,{antagonist:e,convex:e,elementor:e,emergent:e,encoway:[0,{eu:e}],statics:t,ravendb:e,axarnet:[0,{"es-1":e}],diadem:e,jelastic:[0,{vip:e}],jele:e,"jenv-aruba":[0,{aruba:[0,{eur:[0,{it1:e}]}],it1:e}],keliweb:[2,{cs:e}],oxa:[2,{tn:e,uk:e}],primetel:[2,{uk:e}],reclaim:[0,{ca:e,uk:e,us:e}],trendhosting:[0,{ch:e,de:e}],jote:e,jotelulu:e,kuleuven:e,laravel:e,linkyard:e,magentosite:t,matlab:e,observablehq:e,perspecta:e,vapor:e,"on-rancher":t,scw:[0,{baremetal:[0,{"fr-par-1":e,"fr-par-2":e,"nl-ams-1":e}],"fr-par":[0,{cockpit:e,ddl:e,dtwh:e,fnc:[2,{functions:e}],ifr:e,k8s:Y,kafk:e,mgdb:e,rdb:e,s3:e,"s3-website":e,scbl:e,whm:e}],instances:[0,{priv:e,pub:e}],k8s:e,"nl-ams":[0,{cockpit:e,ddl:e,dtwh:e,ifr:e,k8s:Y,kafk:e,mgdb:e,rdb:e,s3:e,"s3-website":e,scbl:e,whm:e}],"pl-waw":[0,{cockpit:e,ddl:e,dtwh:e,ifr:e,k8s:Y,kafk:e,mgdb:e,rdb:e,s3:e,"s3-website":e,scbl:e}],scalebook:e,smartlabeling:e}],servebolt:e,onstackit:[0,{runs:e}],trafficplex:e,"unison-services":e,urown:e,voorloper:e,zap:e}],club:[1,{cloudns:e,jele:e,barsy:e}],clubmed:n,coach:n,codes:[1,{owo:t}],coffee:n,college:n,cologne:n,commbank:n,community:[1,{nog:e,ravendb:e,myforum:e}],company:n,compare:n,computer:n,comsec:n,condos:n,construction:n,consulting:n,contact:n,contractors:n,cooking:n,cool:[1,{elementor:e,de:e}],corsica:n,country:n,coupon:n,coupons:n,courses:n,cpa:n,credit:n,creditcard:n,creditunion:n,cricket:n,crown:n,crs:n,cruise:n,cruises:n,cuisinella:n,cymru:n,cyou:n,dad:n,dance:n,data:n,date:n,dating:n,datsun:n,day:n,dclk:n,dds:n,deal:n,dealer:n,deals:n,degree:n,delivery:n,dell:n,deloitte:n,delta:n,democrat:n,dental:n,dentist:n,desi:n,design:[1,{graphic:e,bss:e}],dev:[1,{myaddr:e,panel:e,bearblog:e,brave:s,lcl:t,lclstage:t,stg:t,stgstage:t,pages:e,r2:e,workers:e,deno:e,"deno-staging":e,deta:e,lp:[2,{api:e,objects:e}],evervault:l,fly:e,githubpreview:e,gateway:t,grebedoc:e,botdash:e,inbrowser:t,"is-a-good":e,iserv:e,leapcell:e,runcontainers:e,localcert:[0,{user:t}],loginline:e,barsy:e,mediatech:e,"mocha-sandbox":e,modx:e,ngrok:e,"ngrok-free":e,"is-a-fullstack":e,"is-cool":e,"is-not-a":e,localplayer:e,xmit:e,"platter-app":e,replit:[2,{archer:e,bones:e,canary:e,global:e,hacker:e,id:e,janeway:e,kim:e,kira:e,kirk:e,odo:e,paris:e,picard:e,pike:e,prerelease:e,reed:e,riker:e,sisko:e,spock:e,staging:e,sulu:e,tarpit:e,teams:e,tucker:e,wesley:e,worf:e}],crm:[0,{aa:t,ab:t,ac:t,ad:t,ae:t,af:t,ci:t,d:t,pa:t,pb:t,pc:t,pd:t,pe:t,pf:t,w:t,wa:t,wb:t,wc:t,wd:t,we:t,wf:t}],erp:Jn,vercel:e,webhare:t,hrsn:e,"is-a":e}],dhl:n,diamonds:n,diet:n,digital:[1,{cloudapps:[2,{london:e}]}],direct:[1,{libp2p:e}],directory:n,discount:n,discover:n,dish:n,diy:Zn,dnp:n,docs:n,doctor:n,dog:n,domains:n,dot:n,download:n,drive:n,dtv:n,dubai:n,dupont:n,durban:n,dvag:n,dvr:n,earth:n,eat:n,eco:n,edeka:n,education:B,email:[1,{crisp:[0,{on:e}],tawk:ee,tawkto:ee}],emerck:n,energy:n,engineer:n,engineering:n,enterprises:n,epson:n,equipment:n,ericsson:n,erni:n,esq:n,estate:[1,{compute:t}],eurovision:n,eus:[1,{party:ae}],events:[1,{koobin:e,co:e}],exchange:n,expert:n,exposed:n,express:n,extraspace:n,fage:n,fail:n,fairwinds:n,faith:n,family:n,fan:n,fans:n,farm:[1,{storj:e}],farmers:n,fashion:n,fast:n,fedex:n,feedback:n,ferrari:n,ferrero:n,fidelity:n,fido:n,film:n,final:n,finance:n,financial:B,fire:n,firestone:n,firmdale:n,fish:n,fishing:n,fit:n,fitness:n,flickr:n,flights:n,flir:n,florist:n,flowers:n,fly:n,foo:n,food:n,football:n,ford:n,forex:n,forsale:n,forum:n,foundation:n,fox:n,free:n,fresenius:n,frl:n,frogans:n,frontier:n,ftr:n,fujitsu:n,fun:n,fund:n,furniture:n,futbol:n,fyi:n,gal:n,gallery:n,gallo:n,gallup:n,game:n,games:[1,{pley:e,sheezy:e}],gap:n,garden:n,gay:[1,{pages:e}],gbiz:n,gdn:[1,{cnpy:e}],gea:n,gent:n,genting:n,george:n,ggee:n,gift:n,gifts:n,gives:n,giving:n,glass:n,gle:n,global:[1,{appwrite:e}],globo:n,gmail:n,gmbh:n,gmo:n,gmx:n,godaddy:n,gold:n,goldpoint:n,golf:n,goodyear:n,goog:[1,{cloud:e,translate:e,usercontent:t}],google:n,gop:n,got:n,grainger:n,graphics:n,gratis:n,green:n,gripe:n,grocery:n,group:Zn,gucci:n,guge:n,guide:n,guitars:n,guru:n,hair:n,hamburg:n,hangout:n,haus:n,hbo:n,hdfc:n,hdfcbank:n,health:[1,{hra:e}],healthcare:n,help:n,helsinki:n,here:n,hermes:n,hiphop:n,hisamitsu:n,hitachi:n,hiv:n,hkt:n,hockey:n,holdings:n,holiday:n,homedepot:n,homegoods:n,homes:n,homesense:n,honda:n,horse:n,hospital:n,host:[1,{cloudaccess:e,freesite:e,easypanel:e,emergent:e,fastvps:e,myfast:e,gadget:e,tempurl:e,wpmudev:e,iserv:e,jele:e,mircloud:e,bolt:e,wp2:e,half:e}],hosting:[1,{opencraft:e}],hot:n,hotel:n,hotels:n,hotmail:n,house:n,how:n,hsbc:n,hughes:n,hyatt:n,hyundai:n,ibm:n,icbc:n,ice:n,icu:n,ieee:n,ifm:n,ikano:n,imamat:n,imdb:n,immo:n,immobilien:n,inc:n,industries:n,infiniti:n,ing:n,ink:n,institute:n,insurance:n,insure:n,international:n,intuit:n,investments:n,ipiranga:n,irish:n,ismaili:n,ist:n,istanbul:n,itau:n,itv:n,jaguar:n,java:n,jcb:n,jeep:n,jetzt:n,jewelry:n,jio:n,jll:n,jmp:n,jnj:n,joburg:n,jot:n,joy:n,jpmorgan:n,jprs:n,juegos:n,juniper:n,kaufen:n,kddi:n,kerryhotels:n,kerryproperties:n,kfh:n,kia:n,kids:n,kim:n,kindle:n,kitchen:n,kiwi:n,koeln:n,komatsu:n,kosher:n,kpmg:n,kpn:n,krd:[1,{co:e,edu:e}],kred:n,kuokgroup:n,kyoto:n,lacaixa:n,lamborghini:n,lamer:n,land:n,landrover:n,lanxess:n,lasalle:n,lat:n,latino:n,latrobe:n,law:n,lawyer:n,lds:n,lease:n,leclerc:n,lefrak:n,legal:n,lego:n,lexus:n,lgbt:n,lidl:n,life:n,lifeinsurance:n,lifestyle:n,lighting:n,like:n,lilly:n,limited:n,limo:n,lincoln:n,link:[1,{myfritz:e,cyon:e,joinmc:e,dweb:t,inbrowser:t,keenetic:e,nftstorage:vn,mypep:e,storacha:vn,w3s:vn}],live:[1,{aem:e,hlx:e,ewp:t}],living:n,llc:n,llp:n,loan:n,loans:n,locker:n,locus:n,lol:[1,{omg:e}],london:n,lotte:n,lotto:n,love:n,lpl:n,lplfinancial:n,ltd:n,ltda:n,lundbeck:n,luxe:n,luxury:n,madrid:n,maif:n,maison:n,makeup:n,man:n,management:n,mango:n,map:n,market:n,marketing:n,markets:n,marriott:n,marshalls:n,mattel:n,mba:n,mckinsey:n,med:n,media:on,meet:n,melbourne:n,meme:n,memorial:n,men:n,menu:[1,{barsy:e,barsyonline:e}],merck:n,merckmsd:n,miami:n,microsoft:n,mini:n,mint:n,mit:n,mitsubishi:n,mlb:n,mls:n,mma:n,mobile:n,moda:n,moe:n,moi:n,mom:n,monash:n,money:n,monster:n,mormon:n,mortgage:n,moscow:n,moto:n,motorcycles:n,mov:n,movie:n,msd:n,mtn:n,mtr:n,music:n,nab:n,nagoya:n,navy:n,nba:n,nec:n,netbank:n,netflix:n,network:[1,{aem:e,alces:t,appwrite:e,co:e,arvo:e,azimuth:e,tlon:e}],neustar:n,new:n,news:[1,{noticeable:e}],next:n,nextdirect:n,nexus:n,nfl:n,ngo:n,nhk:n,nico:n,nike:n,nikon:n,ninja:n,nissan:n,nissay:n,nokia:n,norton:n,now:n,nowruz:n,nowtv:n,nra:n,nrw:n,ntt:n,nyc:n,obi:n,observer:n,office:n,okinawa:n,olayan:n,olayangroup:n,ollo:n,omega:n,one:[1,{kin:t,service:e,website:e}],ong:n,onl:n,online:[1,{eero:e,"eero-stage":e,websitebuilder:e,leapcell:e,barsy:e}],ooo:n,open:n,oracle:n,orange:[1,{tech:e}],organic:n,origins:n,osaka:n,otsuka:n,ott:n,ovh:[1,{nerdpol:e}],page:[1,{aem:e,hlx:e,codeberg:e,deuxfleurs:e,heyflow:e,prvcy:e,rocky:e,statichost:e,pdns:e,plesk:e}],panasonic:n,paris:n,pars:n,partners:n,parts:n,party:n,pay:n,pccw:n,pet:n,pfizer:n,pharmacy:n,phd:n,philips:n,phone:n,photo:n,photography:n,photos:on,physio:n,pics:n,pictet:n,pictures:[1,{1337:e}],pid:n,pin:n,ping:n,pink:n,pioneer:n,pizza:[1,{ngrok:e}],place:B,play:n,playstation:n,plumbing:n,plus:[1,{playit:[2,{at:t,with:e}]}],pnc:n,pohl:n,poker:n,politie:n,porn:n,praxi:n,press:n,prime:n,prod:n,productions:n,prof:n,progressive:n,promo:n,properties:n,property:n,protection:n,pru:n,prudential:n,pub:[1,{id:t,kin:t,barsy:e}],pwc:n,qpon:n,quebec:n,quest:n,racing:n,radio:n,read:n,realestate:n,realtor:n,realty:n,recipes:n,red:n,redumbrella:n,rehab:n,reise:n,reisen:n,reit:n,reliance:n,ren:n,rent:n,rentals:n,repair:n,report:n,republican:n,rest:n,restaurant:n,review:n,reviews:[1,{aem:e}],rexroth:n,rich:n,richardli:n,ricoh:n,ril:n,rio:n,rip:[1,{clan:e}],rocks:[1,{myddns:e,stackit:e,"lima-city":e,webspace:e}],rodeo:n,rogers:n,room:n,rsvp:n,rugby:n,ruhr:n,run:[1,{appwrite:t,canva:e,development:e,ravendb:e,liara:[2,{iran:e}],lovable:e,needle:e,build:t,code:t,database:t,migration:t,onporter:e,repl:e,stackit:e,val:Jn,vercel:e,wix:e}],rwe:n,ryukyu:n,saarland:n,safe:n,safety:n,sakura:n,sale:n,salon:n,samsclub:n,samsung:n,sandvik:n,sandvikcoromant:n,sanofi:n,sap:n,sarl:n,sas:n,save:n,saxo:n,sbi:n,sbs:n,scb:n,schaeffler:n,schmidt:n,scholarships:n,school:n,schule:n,schwarz:n,science:n,scot:[1,{co:e,me:e,org:e,gov:[2,{service:e}]}],search:n,seat:n,secure:n,security:n,seek:n,select:n,sener:n,services:[1,{loginline:e}],seven:n,sew:n,sex:n,sexy:n,sfr:n,shangrila:n,sharp:n,shell:n,shia:n,shiksha:n,shoes:n,shop:[1,{base:e,hoplix:e,barsy:e,barsyonline:e,shopware:e}],shopping:n,shouji:n,show:n,silk:n,sina:n,singles:n,site:[1,{square:e,canva:U,cloudera:t,convex:e,cyon:e,caffeine:e,fastvps:e,figma:e,"figma-gov":e,preview:e,heyflow:e,jele:e,jouwweb:e,loginline:e,barsy:e,co:e,notion:e,omniwe:e,opensocial:e,madethis:e,support:e,platformsh:t,tst:t,byen:e,sol:e,srht:e,novecore:e,cpanel:e,wpsquared:e,sourcecraft:e}],ski:n,skin:n,sky:n,skype:n,sling:n,smart:n,smile:n,sncf:n,soccer:n,social:n,softbank:n,software:n,sohu:n,solar:n,solutions:n,song:n,sony:n,soy:n,spa:n,space:[1,{myfast:e,heiyu:e,hf:[2,{static:e}],"app-ionos":e,project:e,uber:e,xs4all:e}],sport:n,spot:n,srl:n,stada:n,staples:n,star:n,statebank:n,statefarm:n,stc:n,stcgroup:n,stockholm:n,storage:n,store:[1,{barsy:e,sellfy:e,shopware:e,storebase:e}],stream:n,studio:n,study:n,style:n,sucks:n,supplies:n,supply:n,support:[1,{barsy:e}],surf:n,surgery:n,suzuki:n,swatch:n,swiss:n,sydney:n,systems:[1,{knightpoint:e,miren:e}],tab:n,taipei:n,talk:n,taobao:n,target:n,tatamotors:n,tatar:n,tattoo:n,tax:n,taxi:n,tci:n,tdk:n,team:[1,{discourse:e,jelastic:e}],tech:[1,{cleverapps:e}],technology:B,temasek:n,tennis:n,teva:n,thd:n,theater:n,theatre:n,tiaa:n,tickets:n,tienda:n,tips:n,tires:n,tirol:n,tjmaxx:n,tjx:n,tkmaxx:n,tmall:n,today:[1,{prequalifyme:e}],tokyo:n,tools:[1,{addr:Kn,myaddr:e}],top:[1,{ntdll:e,wadl:t}],toray:n,toshiba:n,total:n,tours:n,town:n,toyota:n,toys:n,trade:n,trading:n,training:n,travel:n,travelers:n,travelersinsurance:n,trust:n,trv:n,tube:n,tui:n,tunes:n,tushu:n,tvs:n,ubank:n,ubs:n,unicom:n,university:n,uno:n,uol:n,ups:n,vacations:n,vana:n,vanguard:n,vegas:n,ventures:n,verisign:n,versicherung:n,vet:n,viajes:n,video:n,vig:n,viking:n,villas:n,vin:n,vip:[1,{hidns:e}],virgin:n,visa:n,vision:n,viva:n,vivo:n,vlaanderen:n,vodka:n,volvo:n,vote:n,voting:n,voto:n,voyage:n,wales:n,walmart:n,walter:n,wang:n,wanggou:n,watch:n,watches:n,weather:n,weatherchannel:n,webcam:n,weber:n,website:on,wed:n,wedding:n,weibo:n,weir:n,whoswho:n,wien:n,wiki:on,williamhill:n,win:n,windows:n,wine:n,winners:n,wme:n,wolterskluwer:n,woodside:n,work:[1,{"imagine-proxy":e}],works:n,world:n,wow:n,wtc:n,wtf:n,xbox:n,xerox:n,xihuan:n,xin:n,"xn--11b4c3d":n,कॉम:n,"xn--1ck2e1b":n,セール:n,"xn--1qqw23a":n,佛山:n,"xn--30rr7y":n,慈善:n,"xn--3bst00m":n,集团:n,"xn--3ds443g":n,在线:n,"xn--3pxu8k":n,点看:n,"xn--42c2d9a":n,คอม:n,"xn--45q11c":n,八卦:n,"xn--4gbrim":n,موقع:n,"xn--55qw42g":n,公益:n,"xn--55qx5d":n,公司:n,"xn--5su34j936bgsg":n,香格里拉:n,"xn--5tzm5g":n,网站:n,"xn--6frz82g":n,移动:n,"xn--6qq986b3xl":n,我爱你:n,"xn--80adxhks":n,москва:n,"xn--80aqecdr1a":n,католик:n,"xn--80asehdb":n,онлайн:n,"xn--80aswg":n,сайт:n,"xn--8y0a063a":n,联通:n,"xn--9dbq2a":n,קום:n,"xn--9et52u":n,时尚:n,"xn--9krt00a":n,微博:n,"xn--b4w605ferd":n,淡马锡:n,"xn--bck1b9a5dre4c":n,ファッション:n,"xn--c1avg":n,орг:n,"xn--c2br7g":n,नेट:n,"xn--cck2b3b":n,ストア:n,"xn--cckwcxetd":n,アマゾン:n,"xn--cg4bki":n,삼성:n,"xn--czr694b":n,商标:n,"xn--czrs0t":n,商店:n,"xn--czru2d":n,商城:n,"xn--d1acj3b":n,дети:n,"xn--eckvdtc9d":n,ポイント:n,"xn--efvy88h":n,新闻:n,"xn--fct429k":n,家電:n,"xn--fhbei":n,كوم:n,"xn--fiq228c5hs":n,中文网:n,"xn--fiq64b":n,中信:n,"xn--fjq720a":n,娱乐:n,"xn--flw351e":n,谷歌:n,"xn--fzys8d69uvgm":n,電訊盈科:n,"xn--g2xx48c":n,购物:n,"xn--gckr3f0f":n,クラウド:n,"xn--gk3at1e":n,通販:n,"xn--hxt814e":n,网店:n,"xn--i1b6b1a6a2e":n,संगठन:n,"xn--imr513n":n,餐厅:n,"xn--io0a7i":n,网络:n,"xn--j1aef":n,ком:n,"xn--jlq480n2rg":n,亚马逊:n,"xn--jvr189m":n,食品:n,"xn--kcrx77d1x4a":n,飞利浦:n,"xn--kput3i":n,手机:n,"xn--mgba3a3ejt":n,ارامكو:n,"xn--mgba7c0bbn0a":n,العليان:n,"xn--mgbab2bd":n,بازار:n,"xn--mgbca7dzdo":n,ابوظبي:n,"xn--mgbi4ecexp":n,كاثوليك:n,"xn--mgbt3dhd":n,همراه:n,"xn--mk1bu44c":n,닷컴:n,"xn--mxtq1m":n,政府:n,"xn--ngbc5azd":n,شبكة:n,"xn--ngbe9e0a":n,بيتك:n,"xn--ngbrx":n,عرب:n,"xn--nqv7f":n,机构:n,"xn--nqv7fs00ema":n,组织机构:n,"xn--nyqy26a":n,健康:n,"xn--otu796d":n,招聘:n,"xn--p1acf":[1,{"xn--90amc":e,"xn--j1aef":e,"xn--j1ael8b":e,"xn--h1ahn":e,"xn--j1adp":e,"xn--c1avg":e,"xn--80aaa0cvac":e,"xn--h1aliz":e,"xn--90a1af":e,"xn--41a":e}],рус:[1,{биз:e,ком:e,крым:e,мир:e,мск:e,орг:e,самара:e,сочи:e,спб:e,я:e}],"xn--pssy2u":n,大拿:n,"xn--q9jyb4c":n,みんな:n,"xn--qcka1pmc":n,グーグル:n,"xn--rhqv96g":n,世界:n,"xn--rovu88b":n,書籍:n,"xn--ses554g":n,网址:n,"xn--t60b56a":n,닷넷:n,"xn--tckwe":n,コム:n,"xn--tiq49xqyj":n,天主教:n,"xn--unup4y":n,游戏:n,"xn--vermgensberater-ctb":n,vermögensberater:n,"xn--vermgensberatung-pwb":n,vermögensberatung:n,"xn--vhquv":n,企业:n,"xn--vuq861b":n,信息:n,"xn--w4r85el8fhu5dnra":n,嘉里大酒店:n,"xn--w4rs40l":n,嘉里:n,"xn--xhq521b":n,广东:n,"xn--zfr164b":n,政务:n,xyz:[1,{caffeine:e,botdash:e,telebit:t}],yachts:n,yahoo:n,yamaxun:n,yandex:n,yodobashi:n,yoga:n,yokohama:n,you:n,youtube:n,yun:n,zappos:n,zara:n,zero:n,zip:n,zone:[1,{triton:t,stackit:e,lima:e}],zuerich:n}]}();function he(n,e,a,o){let t=null,s=e;for(;s!==void 0&&((s[0]&o)!==0&&(t={index:a+1,isIcann:(s[0]&1)!==0,isPrivate:(s[0]&2)!==0}),a!==-1);){const l=s[1];s=Object.prototype.hasOwnProperty.call(l,n[a])?l[n[a]]:l["*"],a-=1}return t}function Ma(n,e,a){var o;if(La(n,e,a))return;const t=n.split("."),s=(e.allowPrivateDomains?2:0)|(e.allowIcannDomains?1:0),l=he(t,Ua,t.length-1,s);if(l!==null){a.isIcann=l.isIcann,a.isPrivate=l.isPrivate,a.publicSuffix=t.slice(l.index+1).join(".");return}const u=he(t,qa,t.length-1,s);if(u!==null){a.isIcann=u.isIcann,a.isPrivate=u.isPrivate,a.publicSuffix=t.slice(u.index).join(".");return}a.isIcann=!1,a.isPrivate=!1,a.publicSuffix=(o=t[t.length-1])!==null&&o!==void 0?o:null}function qe(n,e={}){return Ia(n,5,Ma,e,Ba())}function Da(){const n=window.location.hostname,e=qe(n),a=e.subdomain||"",o=e.hostname||"";return a.includes("adhoc")?"adhoc":a.includes("test")?"test":a.includes("levelbuilder")?"levelbuilder":a.includes("staging")?"staging":o.includes("localhost")||o.includes("127.0.0.1")?"development":n==="studio.code.org"?"production":"development"}function $a(n){switch(n.domain){case"code.org":return"code.org";case"aiday.org":return"aiday";default:return"code.org"}}function Me(n){switch(n){case"adhoc":return window.location.origin;case"development":return"http://localhost-studio.code.org:3000";case"staging":return"https://staging-studio.code.org";case"levelbuilder":return"https://levelbuilder-studio.code.org";case"test":return"https://test-studio.code.org";case"production":return"https://studio.code.org";default:throw new Error(`Unknown environment: ${n}`)}}const ge={"code.org":{development:"http://localhost.code.org:3000",adhoc:"https://code.org",staging:"https://code.marketing-sites.test-code.org",test:"https://code.marketing-sites.test-code.org",levelbuilder:"https://code.org",production:"https://code.org"},aiday:{development:"http://localhost.aiday.org:3000",adhoc:"https://aiday.org",staging:"https://aiday.marketing-sites.test-code.org",test:"https://aiday.marketing-sites.test-code.org",levelbuilder:"https://aiday.org",production:"https://aiday.org"}};function Fa(n,e){return(ge[n]??ge["code.org"])[e]}function Ga(){try{const n=document.querySelector('meta[name="app-config"]');return n?.content?JSON.parse(n.content):{}}catch{return{}}}let Ya=class{host;brand;environment;dashboardApiUrl;marketingOrigin;observability;constructor(){this.host=qe(window.location.hostname),this.brand=$a(this.host),this.environment=Da(),this.dashboardApiUrl=Me(this.environment),this.marketingOrigin=Fa(this.brand,this.environment);const e=Ga();this.observability={provider:e.observability?.provider??"none",...e.observability}}marketingUrl(e=""){return e?new URL(e,this.marketingOrigin).toString():this.marketingOrigin}};const Wa=new Ya,Ha=n=>({async reportMilestone(e){const{userId:a,scriptLevelId:o,levelId:t,result:s,testResult:l}=e;await n.request({method:"POST",url:`/milestone/${a}/${o}/${t}`,body:{result:String(s),testResult:l??100}})}});function fe(n,e){return`/v3/assets/${n}/${e}`}function Xa(n){return{async upload(e){const{channelId:a,filename:o,data:t}=e,s=new FormData;s.append("file",t,o);const l=fe(a,o);return await n.request({method:"PUT",url:l,body:s}),{url:l}},async remove(e){const{channelId:a,filename:o}=e;await n.request({method:"DELETE",url:fe(a,o)})}}}function Qa(n){return{async getToken(){return n.request({method:"GET",url:"/get_token"})},async signCookies(e){return n.request({method:"GET",url:`/dashboardapi/sign_cookies${e?.buster?`?bust=${Date.now()}`:""}`})}}}const Sn={STARTER:"starter",SUPPORT:"support",VALIDATION:"validation",LOCKED_STARTER:"locked_starter",SYSTEM_SUPPORT:"system_support"},Ln=i(),Nn=i(),Ka=c({id:Ln,name:i(),parentId:i(),open:r().optional()}),Ja=c({id:Nn,name:i(),language:i(),contents:i(),open:r().optional(),active:r().optional(),folderId:Ln,type:E(Object.values(Sn)).optional(),url:i().optional(),mimeType:i().optional()}),cn=c({folders:P(Ln,Ka),files:P(Nn,Ja),openFiles:g(Nn).optional()}),Za=c({versionId:i(),lastModified:i(),isLatest:r(),comment:i().optional()}),nt=g(Za),pn=c({source:V([i(),cn]),labConfig:P(i(),P(i(),i())).optional()}),et=c({timestamp:i().nullable(),versionId:i()}),at=c({version_id:i().optional()}),dn=c({id:i(),name:i(),isOwner:r(),projectType:E(Ne),publishedAt:i().nullable(),createdAt:i(),updatedAt:i(),hidden:r().optional(),thumbnailUrl:i().optional(),frozen:r().nullable(),labConfig:P(i(),P(i(),i())).optional()});c({sources:pn.optional(),channel:dn,abuseScore:p().optional(),sharingDisabled:r().optional(),isTeacherOfProjectOwner:r().optional()});const tt=c({abuse_score:p()}),ot=c({sharing_disabled:r()}),it=c({is_teacher_of_project_owner:r()});function st(n){return{async get(e){const{channelId:a}=e,o=await n.request({method:"GET",url:`/v3/channels/${a}`});return dn.parse(o)},async update(e){const{channel:a}=e,o=dn.parse(a),t=await n.request({method:"POST",url:`/v3/channels/${a.id}`,body:o});return dn.parse(t)},async publish(e){const{channel:a}=e;return await n.request({method:"POST",url:`/v3/channels/${a.id}/publish/${a.projectType}`})},async unpublish(e){const{channel:a}=e;return await n.request({method:"POST",url:`/v3/channels/${a.id}/unpublish`})},async fetchAbuseScore(e){const{channelId:a}=e,o=await n.request({method:"GET",url:`/v3/channels/${a}/abuse`});return tt.parse(o).abuse_score},async deleteAbuseScore(e){const{channelId:a}=e;return n.request({method:"POST",url:`/v3/channels/${a}/abuse/delete`})},async fetchSharingDisabled(e){const{channelId:a}=e,o=await n.request({method:"GET",url:`/v3/channels/${a}/sharing_disabled`});return ot.parse(o).sharing_disabled},async fetchIsTeacherOfProjectOwner(e){const{channelId:a}=e,o=await n.request({method:"GET",url:`/v3/channels/${a}/is_teacher_of_project_owner`});return it.parse(o).is_teacher_of_project_owner}}}const rt={Facilitator:"facilitator",Teacher:"teacher",Student:"student"},lt=c({id:p(),lesson_id:p(),level_id:p(),created_at:i(),updated_at:i()}).transform(n=>_(n,{deep:!0})),ct=c({name:i(),displayName:i(),disablePostMilestone:r(),student_detail_progress_view:r(),age_13_required:r(),show_sign_in_callout:r(),hasUnnumberedLessons:r(),course_name:i().nullable(),course_id:i().nullable(),unit_position:p().nullable()}).transform(n=>_(n,{deep:!0})),dt=c({id:p(),key:i(),display_name:i(),description:i().nullable(),big_questions:i().nullable(),user_facing:r(),position:p()}).transform(n=>_(n,{deep:!0})),ut=g(dt),pt=c({unitData:ct,lessonGroupData:ut});c({src:i(),key:i(),name:i(),download:i(),thumbnail:i(),enable_fallback:r(),autoplay:r()}).transform(n=>_(n,{deep:!0}));const De=c({level_id:p(),type:i(),name:i().nullable(),display_name:i().nullable(),is_validated:r(),can_have_feedback:r(),title:i().nullable(),questions:g(i()).nullable(),answers:g(i()).nullable(),short_instructions:i().nullable(),long_instructions:i().nullable(),markdown:i().nullable(),teacher_markdown:i().nullable(),reference:i().nullable(),rubric_key_concept:i().nullable(),rubric_performance_level_1:i().nullable(),rubric_performance_level_2:i().nullable(),rubric_performance_level_3:i().nullable(),rubric_performance_level_4:i().nullable(),mini_rubric:r().nullable(),video_youtube:i().optional(),video_download:i().optional()}),mt=De.transform(n=>_(n,{deep:!0})),$e=De.extend({contained_levels:g(mt).optional()});$e.transform(n=>_(n,{deep:!0}));const yt=$e.extend({id:p(),description:i().nullable(),thumbnail_url:i().nullable(),position:p(),letter:i(),icon:i().nullable(),uses_lab2:r(),parent_level_id:p(),navigation_type:i(),url:i(),path:i(),perfect:r().optional(),status:i().optional(),teacher_feedback_review_state:i().optional(),exampleSolutions:g(i()).optional()}),bt=yt.transform(n=>_(n,{deep:!0})),ht=c({id:i(),ids:g(i()),activeId:i(),inactiveIds:g(i()),position:p(),kind:i(),icon:i(),is_concept_level:r(),title:p(),url:i(),path:i(),freePlay:r(),bonus:r(),display_as_unplugged:r(),app:i(),uses_lab2:r(),is_validated:r(),can_have_feedback:r(),progression_display_name:i().optional(),name:i().optional(),sublevels:g(bt).optional(),previous:V([r(),g(p())]).optional(),next:V([r(),g(p())]).optional(),page_number:p().optional()}),gt=ht.transform(n=>({..._(n,{deep:!0}),id:parseInt(n.id),activeId:parseInt(n.activeId),inactiveIds:n.inactiveIds.map(e=>parseInt(e)),ids:n.ids.map(e=>parseInt(e))})),ft=c({script_id:p(),script_name:i(),num_script_lessons:p(),id:p(),position:p(),relative_position:p(),name:i(),key:i(),assessment:r(),title:i(),lesson_group_display_name:i().nullable(),lockable:r(),hasLessonPlan:r(),numberedLesson:r(),levels:g(gt),description_student:i(),description_teacher:i(),unplugged:r().nullable(),lessonEditPath:i(),lessonStartUrl:i(),duration:p(),background:i().nullable(),rubric:lt.nullable(),lesson_feedback_url:i().optional(),lesson_plan_html_url:i().optional(),lesson_plan_pdf_url:i().optional(),student_lesson_plan_html_url:i().optional(),finishLink:i().optional(),finishText:i().optional(),lesson_extras_level_url:i().optional()}),kt=ft.transform(n=>_(n,{deep:!0})),is={Assessment:"assessment",Unplugged:"unplugged"},_t=c({id:i(),activeId:i(),position:p(),path:i(),app:i()}).passthrough(),wt=c({script_name:i(),position:p(),finishLink:i().optional(),levels:g(_t)}).passthrough(),vt=c({name:i(),lessons:g(wt)}).passthrough();function At(n){return{async getCourseUnitSummary(e){const{name:a,unitPosition:o}=e,t=await n.request({method:"GET",url:`/api/v1/courses/${a}/units/${o}/short_summary`});return pt.parse(t)},async getCourseUnitLesson(e){const{name:a,unitPosition:o,lessonPosition:t}=e,s=await n.request({method:"GET",url:`/api/v1/courses/${a}/units/${o}/lessons/${t}`});return kt.parse(s)},async getScriptStructure(e){const{course:a,unitPosition:o}=e,t=await n.request({method:"GET",url:`/api/script_structure/courses/${a}/units/${o}`});return vt.parse(t)}}}const jn=new Map;function ss(n,e){jn.has(n)&&console.warn(`Level kind schema already registered for kind="${n}"`),jn.set(n,e)}function xt(n){return jn.get(n)}const Tt={FreeResponse:"freeResponse",MultipleChoice:"multipleChoice"},Ot=c({isPredictLevel:r(),solution:i().optional(),questionType:E(Object.values(Tt)).optional(),allowMultipleAttempts:r().optional(),codeEditableAfterSubmit:r().optional(),freeResponseHeight:p().optional(),placeholderText:i().optional(),multipleChoiceOptions:g(i()).optional(),isMultiSelect:r().optional()}),Et=c({validationEnabled:r(),validationSuccessMessage:i(),validationFailureMessage:i()}),Pt=c({id:p(),appName:E(Ne),type:i(),name:i(),background:i().optional(),encrypted:r().optional(),isAssessment:r().nullable().default(!1).transform(n=>n??!1),parentLevelLink:i().nullable().optional().transform(n=>n??void 0),longInstructions:i().optional(),shortInstructions:i().optional(),instructionsImportant:r().optional(),isProjectLevel:r().optional(),hideShareAndRemix:r().optional(),usesProjects:r().optional(),startSources:cn.optional(),multipleChoice:r().optional(),templateSources:cn.optional(),exemplarSources:V([pn,cn]).nullable().optional().transform(n=>n??void 0),hideVersionHistory:r().optional(),aiTutorAvailable:r().optional(),showRubric:r().optional(),projectTemplateLevelName:i().optional(),teacherMarkdown:i().optional(),predictSettings:Ot.optional(),exemplarSettings:Et.optional(),submittable:r().optional(),disableEditRunForSubmission:r().optional(),skipUrl:i().optional(),finishUrl:i().optional(),finishDialog:i().optional(),offerBrowserTts:r().nullable(),useSecondaryFinishButton:r().optional(),helpVideos:g(V([i(),P(i(),ya())])).default([]),baseAssetUrl:i().default("/blockly/"),showExemplarLink:r().nullable().transform(n=>n??!1),widgetView:r().optional()});c({enableBlocklyKeyboardNavigation:r().nullable().transform(n=>n??!1),sharedBlocks:g(i()).default([])});const Rt=P(i(),Pt),St=c({data:i()}),Nt=c({response_count:p(),num_students:p()}).transform(n=>_(n,{deep:!0})),jt=c({script:i(),path:i()}),Ct=c({level_name:i(),path:i(),kind:i(),position:i()}).transform(n=>_(n,{deep:!0})),zt=c({links:P(i(),g(c({text:i(),url:i(),access_key:i().optional()}))),can_clone:r(),can_delete:r(),level_name:i(),script_level_path_links:g(jt),parent_level_path_links:g(Ct),is_standalone_project:r()}).transform(n=>_(n,{deep:!0})),Vt=c({levelId:p(),channel:i().nullable(),editBlocks:i().optional(),isEditingExemplar:r().optional(),isViewingExemplar:r().optional(),share:r().optional(),theme:i().optional(),publicCaching:r().nullable(),dialog:c({skipSound:r(),preTitle:i().nullable(),fallbackResponse:i().nullable(),callback:i().nullable(),sublevelCallback:i().nullable(),app:i(),level:i(),shouldShowDialog:r()}).optional(),experiments:g(i()).optional(),usingTextModePref:r().optional(),muteMusic:r().optional(),displayTheme:i().nullable(),userSharingDisabled:r().optional(),isSignedIn:r()}),Bt=c({signedIn:r(),isInstructor:r().optional(),isStarted:r().optional(),skipInstructionsPopup:r().optional(),callouts:g(i()).optional(),disableSocialShare:r().optional(),channel:i().optional(),reduceChannelUpdates:r().optional()}),It=c({redirect:i().optional()}),Lt=c({redirect:i().optional()});function Ut(n){return`/projects/${n.standaloneProjectType}/level_properties`}function qt(n){if(n.standaloneProjectType)return Ut(n);const{levelId:e,scriptName:a,lessonPosition:o}=n;return a&&o?`/s/${a}/lessons/${o}/level_properties`:`/levels/${e}/level_properties`}function Mt(n){return{async getLevelProperties(e){const a=await n.request({method:"GET",url:qt(e)});Object.values(a).forEach(t=>{const s=t;Object.entries(s).forEach(([l,u])=>{u==="true"?s[l]=!0:u==="false"&&(s[l]=!1)})});const o=Rt.parse(a);return Object.entries(a).forEach(([t,s])=>{const l=xt(s.appName);if(l){const u=l.parse(s);o[t]={...o[t],...u}}}),o},async getPredictResponse(e){const{levelId:a,scriptId:o}=e,t=await n.request({method:"GET",url:`/user_levels/level_source/${o}/${a}`});return St.parse(t).data},async resetPredictLevelProgress(e){const{currentLevelId:a,scriptId:o}=e;return await n.request({method:"POST",url:"/delete_predict_level_progress",body:{script_id:o||null,level_id:a!==void 0?a.toString():null}})},async getSectionSummary(e){const{sectionId:a,levelId:o}=e,t=await n.request({method:"GET",url:`/user_levels/section_summary/${a}/${o}`});return Nt.parse(t)},async getExtraLinksData(e){const{levelId:a,scriptLevelId:o}=e,t=await n.request({method:"GET",url:`/levels/${a}/extra_links${o?`?scriptLevelId=${o}`:""}`});return zt.parse(t)},async getAppOptions(e){const{levelId:a}=e,o=await n.request({method:"GET",url:`/levels/${a}/app_options`});return Vt.parse(o)},async getUserAppOptions(e){const{scriptName:a,lessonPosition:o,levelPosition:t,levelId:s}=e,l=await n.request({method:"GET",url:`/api/user_app_options/${a}/${o}/${t}/${s}`});return Bt.parse(l)},async cloneLevel(e){const{levelId:a,clonedLevelName:o}=e,t=await n.request({method:"POST",url:`/levels/${a}/clone?name=${o}`});return It.parse(t)},async deleteLevel(e){const{levelId:a}=e,o=await n.request({method:"DELETE",url:`/levels/${a}`});return Lt.parse(o)}}}const Dt=["Seconds","Microseconds","Milliseconds","Bytes","Kilobytes","Megabytes","Gigabytes","Terabytes","Bits","Kilobits","Megabits","Gigabits","Terabits","Percent","Count","Bytes/Second","Kilobytes/Second","Megabytes/Second","Gigabytes/Second","Terabytes/Second","Bits/Second","Kilobits/Second","Megabits/Second","Gigabits/Second","Terabits/Second","Count/Second","None"],$t=c({name:i(),value:i()}),Ft=c({name:i(),dimensions:g($t),value:p(),unit:E(Dt)}),Gt=g(Ft);function Yt(n){return{async sendLogs(e){const{logs:a}=e;return await n.request({method:"POST",url:"/browser_events/put_logs",body:a})},async sendMetricData(e){const{metricData:a}=e,o=Gt.parse(a);return await n.request({method:"POST",url:"/browser_events/put_metric_data",body:o})}}}let Cn=class extends Error{status;statusText;url;method;type;details;headers;body;name="ApiError";constructor(e,a){super(e),this.status=a.status,this.statusText=a.statusText,this.type=a.type,this.url=a.url,this.method=a.method,this.headers=a.headers,this.body=a.body}getDetails(){const e=Array.from(this.headers||new Headers).reduce((a,o)=>(a[o[0]]=o[1],a),{});return{status:this.status,statusText:this.statusText,url:this.url,type:this.type,method:this.method,headers:e}}};const Wt=c({using_text_mode:r()}),Ht=c({mute_music:r()}),Xt=c({display_theme:i()}),Fe={Tiny:10,Small:13,Medium:17,Large:22,Huge:27},Qt=c({console_font_size:P(i(),E(Object.keys(Fe)))}),Kt=c({editor_font_size:P(i(),E(Object.keys(Fe)))}),Jt=c({theme:P(i(),i())});function Zt(n){return{async setUsingTextMode(e){const{usingTextMode:a,context:o}=e;return n.request({method:"POST",url:"/api/v1/users/me/using_text_mode",body:{...o||{},using_text_mode:a}})},async getUsingTextMode(){const e=await n.request({method:"GET",url:"/api/v1/users/me/using_text_mode"});return Wt.parse(e)},async setDisplayTheme(e){const{displayTheme:a}=e;return n.request({method:"POST",url:"/api/v1/users/me/display_theme",body:{display_theme:a}})},async getDisplayTheme(){const e=await n.request({method:"GET",url:"/api/v1/users/me/display_theme"});return Xt.parse(e)},async setMuteMusic(e){const{muteMusic:a}=e;return n.request({method:"POST",url:"/api/v1/users/me/mute_music",body:{mute_music:a}})},async getMuteMusic(){const e=await n.request({method:"GET",url:"/api/v1/users/me/mute_music"});return Ht.parse(e)},async setSortByFamilyName(e){const{sortByFamilyName:a}=e;return n.request({method:"POST",url:"/api/v1/users/sort_by_family_name",body:{sort_by_family_name:a}})},async setShowProgressTableV2(e){const{showProgressTableV2:a}=e;return n.request({method:"POST",url:"/api/v1/users/show_progress_table_v2",body:{sort_by_family_name:a}})},async setAiRubricsDisabled(e){const{aiRubricsDisabled:a}=e;return n.request({method:"POST",url:"/api/v1/users/ai_rubrics_disabled",body:{ai_rubrics_disabled:a}})},async setAiDifferentiationEnabled(e){const{aiDifferentiationEnabled:a}=e;return n.request({method:"POST",url:"/api/v1/users/ai_differentiation_enabled",body:{ai_differentiation_enabled:a}})},async setFontSize(e){const{fontSize:a,appName:o,field:t}=e;return n.request({method:"PUT",url:"/user_preference",body:{[t]:{[o]:a}}})},async getConsoleFontSize(e){const{appName:a}=e,o=await n.request({method:"GET",url:"/user_preference/font_size/console"});return Qt.parse(o).console_font_size[a]||"Medium"},async getEditorFontSize(e){const{appName:a}=e,o=await n.request({method:"GET",url:"/user_preference/font_size/editor"});return Kt.parse(o).editor_font_size[a]||"Medium"},async setSectionOrder(e){const{orderedSectionIds:a}=e;return n.request({method:"PUT",url:"/user_preference",body:{sectionOrder:a}})},async getThemeSettings(e){const{errorCallback:a}=e;try{const o=await n.request({method:"GET",url:"/user_preference/theme"});return Jt.parse(o).theme}catch(o){if(o instanceof Cn&&o.status!==404)return a(o)??null;throw o}return null},async getGlobalTheme(e){return(await this.getThemeSettings(e))?.global},async getBlocklyTheme(e){return(await this.getThemeSettings({errorCallback:a=>({blockly:e.errorCallback(a)})}))?.blockly},async updateThemeSettings(e){const{themeUpdate:a,errorCallback:o}=e;try{await n.request({method:"PUT",url:"/user_preference",body:{theme:a}})}catch(t){t instanceof Cn&&o&&o(t)}},async setGlobalTheme(e){return this.updateThemeSettings({themeUpdate:{global:e.globalTheme}})},async setBlocklyTheme(e){const{blocklyTheme:a,errorCallback:o}=e;return this.updateThemeSettings({themeUpdate:{blockly:a},errorCallback:o})}}}function no(n){return{async getChannelForLevel(e){const{levelId:a,scriptId:o,userId:t}=e,s=await n.request({method:"GET",url:`/projects/${o?`script/${o}`:""}level/${a}${t?`/user/${t}`:""}`});return ha.parse(s)},async updateCommit(e){const{channelId:a,versionId:o,comment:t}=e;return n.request({method:"POST",url:"/project_commits",body:{storage_id:a,version_id:o,comment:t}})},async getExtraLinksData(e){const{channelId:a}=e,o=await n.request({method:"GET",url:`/projects/${a}/extra_links`});return ba.parse(o)},getProjectThumbnailUrl(e){const{channelId:a}=e;return`/v3/files/${a}/.metadata/thumbnail.png`},async updateProjectThumbnail(e){const{channelId:a,file:o}=e;return await n.request({method:"PUT",url:`/v3/files/${a}/.metadata/thumbnail.png`,body:o})},async featureProjectBookmark(e){const{channelId:a}=e;return await n.request({method:"PUT",url:`/featured_projects/${a}/bookmark`})}}}const eo={Word:"word",Picture:"picture",Email:"email",GoogleClassroom:"google_classroom",Clever:"clever",LtiV1:"lti_v1"},Un=rt,ao=c({id:p(),name:i(),path:i(),lessonExtrasAvailable:r(),position:p().optional()}),to=P(i(),ao),oo=c({id:p(),key:i(),versionYear:i(),contentRootId:p(),name:i(),path:i(),type:i(),isStable:r(),isRecommended:r(),localeCodes:g(i()),locales:g(i()),units:to}),io=P(i(),oo),so=c({courseVersions:io}),ro=g(so),lo=c({availableParticipantTypes:g(E(Object.values(Un)))}),co=c({id:p().nullable(),name:i().nullable(),project_sharing:r().nullable()}).transform(n=>_(n,{deep:!0})),uo=c({course_offering_id:p(),version_id:p().nullable(),unit_id:p().nullable(),lesson_extras_available:r(),text_to_speech_enabled:r()}).transform(n=>_(n,{deep:!0})),po=c({instructor_email:i(),instructor_name:i(),status:i(),id:p()}).transform(n=>_(n,{deep:!0}));c({instructor_email:i(),instructor_name:i(),invited_by_name:i().nullable(),invited_by_email:i().nullable(),section_id:i().nullable(),section_name:i().nullable(),participant_type:E(Object.values(Un)).nullable(),status:i(),id:p()}).transform(n=>_(n,{deep:!0}));const mo=c({email:i(),name:i(),ltiRosterSyncEnabled:r().nullable()}),yo=c({id:p(),name:i(),username:i(),given_name:i().nullable(),family_name:i().nullable(),email:i(),hashed_email:i(),user_type:i(),gender:i().nullable(),gender_teacher_input:i().nullable(),birthday:i(),secret_words:i(),secret_picture_name:i(),secret_picture_url:i(),location:i(),age:p(),sharing_disabled:r(),has_ever_signed_in:r(),ai_tutor_access_denied:r(),at_risk_age_gated_date:i().nullable(),child_account_compliance_state:i().nullable(),latest_permission_request_sent_at:i().nullable(),us_state:i().nullable()}).transform(n=>_(n,{deep:!0})),bo=c({id:p(),name:i(),students:g(yo),login_type_name:i(),script:co.nullable(),course:uo.nullable(),any_student_has_progress:r(),is_assigned_single_unit_course:r().nullable(),primaryInstructor:mo.nullable(),avatar_color:p(),avatar_emoji:p()}).transform(n=>_(n,{deep:!0})),ho=c({id:p(),name:i(),courseVersionName:i().nullable(),unitName:i().nullable(),unitPosition:p().nullable(),createdAt:i(),login_type:E(Object.values(eo)),grades:g(i()),providerManaged:r(),lesson_extras:r(),pairing_allowed:r(),tts_autoplay_enabled:r(),sharing_disabled:r(),studentCount:p(),code:i(),course_display_name:i().nullable(),course_offering_id:p().nullable(),course_version_id:p().nullable(),unit_id:p().nullable(),course_id:p().nullable(),hidden:r(),restrict_section:r(),post_milestone_disabled:r(),code_review_expires_at:p().nullable(),is_assigned_csa:r(),participant_type:E(Object.values(Un)),sectionInstructors:g(po),sync_enabled:r().nullable(),ai_tutor_enabled:r(),avatar_color:p(),avatar_emoji:p(),at_risk_age_gated_date:i().nullable(),at_risk_age_gated_us_state:i().nullable()}).transform(n=>_(n,{deep:!0})),go=ga(bo,ho);function fo(n){return{async getSection(e){const{sectionId:a}=e,o=await n.request({method:"GET",url:`/api/section?section_id=${a}`});return go.parse(o)},async getValidCourseOfferings(){const e=await n.request({method:"GET",url:"/dashboardapi/sections/valid_course_offerings"});return ro.parse(e)},async getAvailableParticipantTypes(){const e=await n.request({method:"GET",url:"/dashboardapi/sections/available_participant_types"});return lo.parse(e)}}}const ke="main.json";function ko(n){return{async get(e){const{channelId:a,versionId:o,sourceFile:t=ke}=e,s=await n.requestWithMeta({method:"GET",url:`/v3/sources/${a}/${t}${o?`?version=${o}`:""}`}),l=o||s.meta.headers["S3-Version-Id"]||"unknown";return{sources:pn.parse(s.data),versionId:l}},async getVersionList(e){const{channelId:a,sourceFile:o=ke,includeComments:t=!1}=e,s=await n.request({method:"GET",url:`/v3/sources/${a}/${o}/versions${t?"?with_comments=true":""}`});return nt.parse(s)},async update(e){const{channelId:a,sources:o,options:t}=e,s=pn.parse(o),l=await n.request({method:"PUT",url:`/v3/sources/${a}${t?`?${new URLSearchParams(t).toString()}`:""}`,body:s});return et.parse(l)},async restore(e){const{channelId:a,versionId:o}=e,t=await n.request({method:"PUT",url:`/v3/sources/${a}/restore?version=${o}`});return at.parse(t)}}}let Ge=null;function _o(n){Ge=n}function wo(){return document.querySelector('meta[name="csrf-token"]')?.content??null}function vo(){return Ge??wo()}async function Ao(n){try{const{meta:e}=await n.requestWithMeta({method:"GET",url:"/get_token"}),a=e.headers["csrf-token"];a&&_o(a)}catch(e){ka.debug("csrf token refresh failed",{error:e})}}const xo=c({is_signed_in:Z(!1)}),To=c({is_signed_in:Z(!0),id:p(),username:i(),display_name:i(),short_name:i(),user_type:E(["student","teacher","admin"]),is_verified_instructor:r(),is_levelbuilder:r(),educator_role:i().nullable(),grades_teaching:g(i()),under_13:r(),over_21:r(),age:V([i(),p()]).nullable(),country_code:i().nullable(),us_state_code:i().nullable(),child_account_compliance_state:i().nullable(),sharing_disabled:r().nullable(),mute_music:r(),sort_by_family_name:r(),has_seen_homepage_welcome:r(),has_dismissed_personalization_alert:r(),ai_chat_access_level:V([i(),p()]),ai_rubrics_disabled:r().nullable(),ai_differentiation_enabled:r(),has_seen_ai_assessments_announcement:r(),has_completed_ai_differentiation_welcome:r(),is_lti:r(),in_section:r().nullable(),created_at:i()}),Ye=je("is_signed_in",[xo,To]),Oo=Ye.transform(n=>_(n,{deep:!0})),Eo=c({is_signed_in:r()}),Po=c({id:p(),name:i(),is_admin:r(),is_signed_in:Z(!0),owned_sections:g(p())}).transform(n=>_(n,{deep:!0})),Ro=c({school_name:i().nullable()}).transform(n=>_(n,{deep:!0})),So=c({user_name:i().nullable(),email:i().nullable(),zip:i().nullable()}).transform(n=>_(n,{deep:!0})),No=c({user_type:Z("teacher"),teacher_first_name:i().nullable(),teacher_second_name:i().nullable(),teacher_email:i().nullable(),nces_school_id:i().nullable(),school_name:i().nullable(),school_address_1:i().nullable(),school_address_2:i().nullable(),school_address_3:i().nullable(),school_city:i().nullable(),school_state:i().nullable(),school_zip:i().nullable(),afe_high_needs:r().nullable()}),jo=c({user_type:Z("student")}),Co=je("user_type",[No,jo]).transform(n=>_(n,{deep:!0})),zo=c({permissions:g(i())}),_e=c({next_census_display:i()}).transform(n=>_(n,{deep:!0})),Vo=c({has_dismissed_personalization_alert:r()}).transform(n=>_(n,{deep:!0})),Bo=c({credential_type:i(),email:i().nullable()}),we=c({value:i(),text:i()}),Io=c({user_type:E(["student","teacher"]),given_name:i().nullable(),family_name:i().nullable(),display_name:i(),username:i().nullable(),email:i().nullable(),has_password:r(),can_edit_email:r(),can_edit_password:r(),should_see_add_password_form:r(),should_see_edit_email_link:r(),authentication_options:g(Bo),can_change_user_type:r(),can_delete_own_account:r(),age:V([p(),i()]).nullable(),us_state:i().nullable(),parent_email:i().nullable(),dependent_students_count:p(),age_options:g(we),us_state_options:g(we)}).transform(n=>({userType:n.user_type,givenName:n.given_name,familyName:n.family_name,displayName:n.display_name,username:n.username,email:n.email,hasPassword:n.has_password,canEditEmail:n.can_edit_email,canEditPassword:n.can_edit_password,shouldSeeAddPasswordForm:n.should_see_add_password_form,shouldSeeEditEmailLink:n.should_see_edit_email_link,authenticationOptions:n.authentication_options.map(e=>({credentialType:e.credential_type,email:e.email})),canChangeUserType:n.can_change_user_type,canDeleteOwnAccount:n.can_delete_own_account,age:n.age,usState:n.us_state,parentEmail:n.parent_email,dependentStudentsCount:n.dependent_students_count,ageOptions:n.age_options,usStateOptions:n.us_state_options})),j={Accept:"application/json"},Lo="PARENT_EMAIL_CHANGE";function Uo(n){return{async getCurrent(){const e=await n.request({method:"GET",url:"/api/v1/users/current"});return Ye.parse(e)},async getCurrentUser(){const e=await n.request({method:"GET",url:"/api/v1/users/current"});return Oo.parse(e)},async getUserSignedIn(){const e=await n.request({method:"GET",url:"/api/v1/users/signed_in"});return Eo.parse(e).is_signed_in},async getNetsimSignedIn(){const e=await n.request({method:"GET",url:"/api/v1/users/netsim_signed_in"});return Po.parse(e)},async getSchoolName(){const e=await n.request({method:"GET",url:"/api/v1/users/me/school_name"});return Ro.parse(e)},async getContactDetails(){const e=await n.request({method:"GET",url:"/api/v1/users/me/contact_details"});return So.parse(e)},async getDonorTeacherBannerDetails(){const e=await n.request({method:"GET",url:"/api/v1/users/me/get_donor_teacher_banner_details"});return Co.parse(e)},async getTosVersion(){const e=await n.request({method:"GET",url:"/api/v1/users/me/tos_version"});return typeof e=="number"?e:parseInt(e,10)},async getCurrentPermissions(){const e=await n.request({method:"GET",url:"/api/v1/users/current/permissions"});return zo.parse(e)},async acceptDataTransferAgreement(){return n.request({method:"POST",url:"/api/v1/users/me/accept_data_transfer_agreement"})},async postponeCensusBanner(){const e=await n.request({method:"POST",url:"/api/v1/users/me/postpone_census_banner"});return _e.parse(e)},async dismissCensusBanner(){const e=await n.request({method:"POST",url:"/api/v1/users/me/dismiss_census_banner"});return _e.parse(e)},async dismissDonorTeacherBanner(e){const{participate:a,source:o}=e;return n.request({method:"POST",url:"/api/v1/users/me/dismiss_donor_teacher_banner",body:{participate:a,source:o}})},async dismissParentEmailBanner(){return n.request({method:"POST",url:"/api/v1/users/me/dismiss_parent_email_banner"})},async setStandardsReportInfoToSeen(){return n.request({method:"POST",url:"/api/v1/users/me/set_standards_report_info_to_seen"})},async setHasSeenProgressTableV2Invitation(e){const{hasSeenProgressTableV2Invitation:a,showProgressTableV2:o}=e;return n.request({method:"POST",url:"/api/v1/users/has_seen_progress_table_v2_invitation",body:{has_seen_progress_table_v2_invitation:a,show_progress_table_v2:o}})},async setDateProgressTableInvitationLastDelayed(e){const{dateProgressTableInvitationLastDelayed:a}=e;return n.request({method:"POST",url:"/api/v1/users/date_progress_table_invitation_last_delayed",body:{date_progress_table_invitation_last_delayed:a}})},async setHasSeenAiAssessmentsAnnouncement(){return n.request({method:"POST",url:"/api/v1/users/has_seen_ai_assessments_announcement"})},async disableLtiRosterSync(){return n.request({method:"POST",url:"/api/v1/users/disable_lti_roster_sync"})},async updateAiTutorAccess(e){const{userId:a,aiTutorAccess:o}=e;return n.request({method:"POST",url:`/api/v1/users/${a}/ai_tutor_access`,body:{ai_tutor_access:o}})},async setHasCompletedAiDifferentiationWelcome(){return n.request({method:"POST",url:"/api/v1/users/has_completed_ai_differentiation_welcome"})},async setSeenTaScores(e){const{lessonId:a}=e;return n.request({method:"POST",url:"/api/v1/users/set_seen_ta_scores",body:{lesson_id:a}})},async verifyCaptcha(e){const{recaptchaResponse:a}=e;return n.request({method:"POST",url:"/dashboardapi/v1/users/me/verify_captcha",body:{"g-recaptcha-response":a}})},async getHasDismissedPersonalizationAlert(){const e=await n.request({method:"GET",url:"/api/v1/users/has_dismissed_personalization_alert"});return Vo.parse(e)},async setHasDismissedPersonalizationAlert(e){const{hasDismissedPersonalizationAlert:a}=e;return n.request({method:"POST",url:"/api/v1/users/has_dismissed_personalization_alert",body:{has_dismissed_personalization_alert:a}})},async setHasSeenHomepageWelcome(e){const{hasSeenHomepageWelcome:a}=e;return n.request({method:"POST",url:"/api/v1/users/has_seen_homepage_welcome",body:{has_seen_homepage_welcome:a}})},async getSettings(e){const a=await n.request({method:"GET",url:"/api/v1/users/me/settings",headers:j,signal:e});return Io.parse(a)},async updateProfile(e){await n.request({method:"PATCH",url:"/dashboardapi/users",headers:j,body:{user:{...e.givenName!==void 0&&{given_name:e.givenName},...e.familyName!==void 0&&{family_name:e.familyName},...e.displayName!==void 0&&{name:e.displayName},...e.username!==void 0&&{username:e.username},...e.age!==void 0&&{age:e.age},...e.usState!==void 0&&{us_state:e.usState}}}})},async updatePassword(e){await n.request({method:"PATCH",url:"/dashboardapi/users",headers:j,body:{user:{current_password:e.currentPassword,password:e.newPassword,password_confirmation:e.newPasswordConfirmation}}})},async createPassword(e){await n.request({method:"PATCH",url:"/dashboardapi/users",headers:j,body:{user:{password:e.newPassword,password_confirmation:e.newPasswordConfirmation}}})},async updateEmail(e){await n.request({method:"PATCH",url:"/users/email",headers:j,body:{user:{email:e.newEmail,hashed_email:e.hashedEmail,current_password:e.currentPassword}}})},async updateUserType(e){await n.request({method:"PATCH",url:"/users/user_type",headers:j,body:{user:{user_type:e.userType,...e.email!==void 0&&{email:e.email},...e.hashedEmail!==void 0&&{hashed_email:e.hashedEmail}}}})},async updateParentEmail(e){await n.request({method:"PATCH",url:"/users/parent_email",headers:j,body:{user:{parent_email:e.parentEmail,parent_email_preference_opt_in:e.optIn,parent_email_preference_source:Lo}}})},async removeParentEmail(){await n.request({method:"PATCH",url:"/users",headers:j,body:{user:{parent_email:""}}})},async signOutOtherSessions(){await n.requestWithMeta({method:"DELETE",url:"/expire_other",redirect:"manual",headers:j}),await Ao(n)},async deleteUser(e){await n.request({method:"DELETE",url:"/users",headers:j,body:e.password!==void 0?{password_confirmation:e.password}:void 0})}}}const qo=n=>({transport:n,activities:Ha(n),assets:Xa(n),auth:Qa(n),channels:st(n),courses:At(n),levels:Mt(n),metrics:Yt(n),preferences:Zt(n),projects:no(n),sections:fo(n),sources:ko(n),users:Uo(n)});class mn extends Error{response;request;options;constructor(e,a,o){const t=e.status||e.status===0?e.status:"",s=e.statusText??"",l=`${t} ${s}`.trim(),u=l?`status code ${l}`:"an unknown error";super(`Request failed with ${u}: ${a.method} ${a.url}`),this.name="HTTPError",this.response=e,this.request=a,this.options=o}}class We extends Error{name="NonError";value;constructor(e){let a="Non-error value was thrown";try{typeof e=="string"?a=e:e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"&&(a=e.message)}catch{}super(a),this.value=e}}class xn extends Error{name="ForceRetryError";customDelay;code;customRequest;constructor(e){const a=e?.cause?e.cause instanceof Error?e.cause:new We(e.cause):void 0;super(e?.code?`Forced retry: ${e.code}`:"Forced retry",a?{cause:a}:void 0),this.customDelay=e?.delay,this.code=e?.code,this.customRequest=e?.request}}const ve=(()=>{let n=!1,e=!1;const a=typeof globalThis.ReadableStream=="function",o=typeof globalThis.Request=="function";if(a&&o)try{e=new globalThis.Request("https://empty.invalid",{body:new globalThis.ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type")}catch(t){if(t instanceof Error&&t.message==="unsupported BodyInit type")return!1;throw t}return n&&!e})(),Mo=typeof globalThis.AbortController=="function",He=typeof globalThis.AbortSignal=="function"&&typeof globalThis.AbortSignal.any=="function",Do=typeof globalThis.ReadableStream=="function",$o=typeof globalThis.FormData=="function",Xe=["get","post","put","patch","head","delete"],Fo={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*",bytes:"*/*"},Tn=2147483647,Go=new TextEncoder().encode("------WebKitFormBoundaryaxpyiPgbbPti10Rw").length,Qe=Symbol("stop");class Ke{options;constructor(e){this.options=e}}const Yo=n=>new Ke(n),Wo={json:!0,parseJson:!0,stringifyJson:!0,searchParams:!0,prefixUrl:!0,retry:!0,timeout:!0,hooks:!0,throwHttpErrors:!0,onDownloadProgress:!0,onUploadProgress:!0,fetch:!0,context:!0},Ho={next:!0},Xo={method:!0,headers:!0,body:!0,mode:!0,credentials:!0,cache:!0,redirect:!0,referrer:!0,referrerPolicy:!0,integrity:!0,keepalive:!0,signal:!0,window:!0,duplex:!0},Qo=n=>{if(!n)return 0;if(n instanceof FormData){let e=0;for(const[a,o]of n)e+=Go,e+=new TextEncoder().encode(`Content-Disposition: form-data; name="${a}"`).length,e+=typeof o=="string"?new TextEncoder().encode(o).length:o.size;return e}if(n instanceof Blob)return n.size;if(n instanceof ArrayBuffer)return n.byteLength;if(typeof n=="string")return new TextEncoder().encode(n).length;if(n instanceof URLSearchParams)return new TextEncoder().encode(n.toString()).length;if("byteLength"in n)return n.byteLength;if(typeof n=="object"&&n!==null)try{const e=JSON.stringify(n);return new TextEncoder().encode(e).length}catch{return 0}return 0},Je=(n,e,a)=>{let o,t=0;return n.pipeThrough(new TransformStream({transform(s,l){if(l.enqueue(s),o){t+=o.byteLength;let u=e===0?0:t/e;u>=1&&(u=1-Number.EPSILON),a?.({percent:u,totalBytes:Math.max(e,t),transferredBytes:t},o)}o=s},flush(){o&&(t+=o.byteLength,a?.({percent:1,totalBytes:Math.max(e,t),transferredBytes:t},o))}}))},Ko=(n,e)=>{if(!n.body)return n;if(n.status===204)return new Response(null,{status:n.status,statusText:n.statusText,headers:n.headers});const a=Math.max(0,Number(n.headers.get("content-length"))||0);return new Response(Je(n.body,a,e),{status:n.status,statusText:n.statusText,headers:n.headers})},Jo=(n,e,a)=>{if(!n.body)return n;const o=Qo(a??n.body);return new Request(n,{duplex:"half",body:Je(n.body,o,e)})},D=n=>n!==null&&typeof n=="object",rn=(...n)=>{for(const e of n)if((!D(e)||Array.isArray(e))&&e!==void 0)throw new TypeError("The `options` argument must be an object");return qn({},...n)},Ze=(n={},e={})=>{const a=new globalThis.Headers(n),o=e instanceof globalThis.Headers,t=new globalThis.Headers(e);for(const[s,l]of t.entries())o&&l==="undefined"||l===void 0?a.delete(s):a.set(s,l);return a};function ln(n,e,a){return Object.hasOwn(e,a)&&e[a]===void 0?[]:qn(n[a]??[],e[a]??[])}const na=(n={},e={})=>({beforeRequest:ln(n,e,"beforeRequest"),beforeRetry:ln(n,e,"beforeRetry"),afterResponse:ln(n,e,"afterResponse"),beforeError:ln(n,e,"beforeError")}),Zo=(n,e)=>{const a=new URLSearchParams;for(const o of[n,e])if(o!==void 0)if(o instanceof URLSearchParams)for(const[t,s]of o.entries())a.append(t,s);else if(Array.isArray(o))for(const t of o){if(!Array.isArray(t)||t.length!==2)throw new TypeError("Array search parameters must be provided in [[key, value], ...] format");a.append(String(t[0]),String(t[1]))}else if(D(o))for(const[t,s]of Object.entries(o))s!==void 0&&a.append(t,String(s));else{const t=new URLSearchParams(o);for(const[s,l]of t.entries())a.append(s,l)}return a},qn=(...n)=>{let e={},a={},o={},t;const s=[];for(const l of n)if(Array.isArray(l))Array.isArray(e)||(e=[]),e=[...e,...l];else if(D(l)){for(let[u,d]of Object.entries(l)){if(u==="signal"&&d instanceof globalThis.AbortSignal){s.push(d);continue}if(u==="context"){if(d!=null&&(!D(d)||Array.isArray(d)))throw new TypeError("The `context` option must be an object");e={...e,context:d==null?{}:{...e.context,...d}};continue}if(u==="searchParams"){d==null?t=void 0:t=t===void 0?d:Zo(t,d);continue}D(d)&&u in e&&(d=qn(e[u],d)),e={...e,[u]:d}}D(l.hooks)&&(o=na(o,l.hooks),e.hooks=o),D(l.headers)&&(a=Ze(a,l.headers),e.headers=a)}return t!==void 0&&(e.searchParams=t),s.length>0&&(s.length===1?e.signal=s[0]:He?e.signal=AbortSignal.any(s):e.signal=s.at(-1)),e},ni=n=>Xe.includes(n)?n.toUpperCase():n,ei=["get","put","head","delete","options","trace"],ai=[408,413,429,500,502,503,504],ti=[413,429,503],Ae={limit:2,methods:ei,statusCodes:ai,afterStatusCodes:ti,maxRetryAfter:Number.POSITIVE_INFINITY,backoffLimit:Number.POSITIVE_INFINITY,delay:n=>.3*2**(n-1)*1e3,jitter:void 0,retryOnTimeout:!1},oi=(n={})=>{if(typeof n=="number")return{...Ae,limit:n};if(n.methods&&!Array.isArray(n.methods))throw new Error("retry.methods must be an array");if(n.methods&&=n.methods.map(a=>a.toLowerCase()),n.statusCodes&&!Array.isArray(n.statusCodes))throw new Error("retry.statusCodes must be an array");const e=Object.fromEntries(Object.entries(n).filter(([,a])=>a!==void 0));return{...Ae,...e}};class zn extends Error{request;constructor(e){super(`Request timed out: ${e.method} ${e.url}`),this.name="TimeoutError",this.request=e}}async function ii(n,e,a,o){return new Promise((t,s)=>{const l=setTimeout(()=>{a&&a.abort(),s(new zn(n))},o.timeout);o.fetch(n,e).then(t).catch(s).then(()=>{clearTimeout(l)})})}async function si(n,{signal:e}){return new Promise((a,o)=>{e&&(e.throwIfAborted(),e.addEventListener("abort",t,{once:!0}));function t(){clearTimeout(s),o(e.reason)}const s=setTimeout(()=>{e?.removeEventListener("abort",t),a()},n)})}const ri=(n,e)=>{const a={};for(const o in e)Object.hasOwn(e,o)&&!(o in Xo)&&!(o in Wo)&&(!(o in n)||o in Ho)&&(a[o]=e[o]);return a},li=n=>n===void 0?!1:Array.isArray(n)?n.length>0:n instanceof URLSearchParams?n.size>0:typeof n=="object"?Object.keys(n).length>0:typeof n=="string"?n.trim().length>0:!!n;function ci(n){return n instanceof mn||n?.name===mn.name}function di(n){return n instanceof zn||n?.name===zn.name}class J{static create(e,a){const o=new J(e,a),t=async()=>{if(typeof o.#n.timeout=="number"&&o.#n.timeout>Tn)throw new RangeError(`The \`timeout\` option cannot be greater than ${Tn}`);await Promise.resolve();let l=await o.#g();for(const u of o.#n.hooks.afterResponse){const d=o.#p(l.clone());let m;try{m=await u(o.request,o.#l(),d,{retryCount:o.#a})}catch(w){throw o.#i(d),o.#i(l),w}if(m instanceof Ke)throw o.#i(d),o.#i(l),new xn(m.options);const b=m instanceof globalThis.Response?m:l;d!==b&&o.#i(d),l!==b&&o.#i(l),l=b}if(o.#p(l),!l.ok&&(typeof o.#n.throwHttpErrors=="function"?o.#n.throwHttpErrors(l.status):o.#n.throwHttpErrors)){let u=new mn(l,o.request,o.#l());for(const d of o.#n.hooks.beforeError)u=await d(u,{retryCount:o.#a});throw u}if(o.#n.onDownloadProgress){if(typeof o.#n.onDownloadProgress!="function")throw new TypeError("The `onDownloadProgress` option must be a function");if(!Do)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");const u=l.clone();return o.#i(l),Ko(u,o.#n.onDownloadProgress)}return l},s=o.#m(t).finally(()=>{const l=o.#s;o.#d(l?.body??void 0),o.#d(o.request.body??void 0)});for(const[l,u]of Object.entries(Fo))l==="bytes"&&typeof globalThis.Response?.prototype?.bytes!="function"||(s[l]=async()=>{o.request.headers.set("accept",o.request.headers.get("accept")||u);const d=await s;if(l==="json"){if(d.status===204)return"";const m=await d.text();return m===""?"":a.parseJson?a.parseJson(m):JSON.parse(m)}return d[l]()});return s}static#b(e){return e&&typeof e=="object"&&!Array.isArray(e)&&!(e instanceof URLSearchParams)?Object.fromEntries(Object.entries(e).filter(([,a])=>a!==void 0)):e}request;#t;#a=0;#e;#n;#s;#o;#r;constructor(e,a={}){if(this.#e=e,this.#n={...a,headers:Ze(this.#e.headers,a.headers),hooks:na({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},a.hooks),method:ni(a.method??this.#e.method??"GET"),prefixUrl:String(a.prefixUrl||""),retry:oi(a.retry),throwHttpErrors:a.throwHttpErrors??!0,timeout:a.timeout??1e4,fetch:a.fetch??globalThis.fetch.bind(globalThis),context:a.context??{}},typeof this.#e!="string"&&!(this.#e instanceof URL||this.#e instanceof globalThis.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this.#n.prefixUrl&&typeof this.#e=="string"){if(this.#e.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this.#n.prefixUrl.endsWith("/")||(this.#n.prefixUrl+="/"),this.#e=this.#n.prefixUrl+this.#e}Mo&&He&&(this.#o=this.#n.signal??this.#e.signal,this.#t=new globalThis.AbortController,this.#n.signal=this.#o?AbortSignal.any([this.#o,this.#t.signal]):this.#t.signal),ve&&(this.#n.duplex="half"),this.#n.json!==void 0&&(this.#n.body=this.#n.stringifyJson?.(this.#n.json)??JSON.stringify(this.#n.json),this.#n.headers.set("content-type",this.#n.headers.get("content-type")??"application/json"));const o=a.headers&&new globalThis.Headers(a.headers).has("content-type");if(this.#e instanceof globalThis.Request&&($o&&this.#n.body instanceof globalThis.FormData||this.#n.body instanceof URLSearchParams)&&!o&&this.#n.headers.delete("content-type"),this.request=new globalThis.Request(this.#e,this.#n),li(this.#n.searchParams)){const s="?"+(typeof this.#n.searchParams=="string"?this.#n.searchParams.replace(/^\?/,""):new URLSearchParams(J.#b(this.#n.searchParams)).toString()),l=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,s);this.request=new globalThis.Request(l,this.#n)}if(this.#n.onUploadProgress){if(typeof this.#n.onUploadProgress!="function")throw new TypeError("The `onUploadProgress` option must be a function");if(!ve)throw new Error("Request streams are not supported in your environment. The `duplex` option for `Request` is not available.");this.request=this.#y(this.request,this.#n.body??void 0)}}#c(){const e=this.#n.retry.delay(this.#a);let a=e;this.#n.retry.jitter===!0?a=Math.random()*e:typeof this.#n.retry.jitter=="function"&&(a=this.#n.retry.jitter(e),(!Number.isFinite(a)||a<0)&&(a=e));const o=this.#n.retry.backoffLimit??Number.POSITIVE_INFINITY;return Math.min(o,a)}async#h(e){if(this.#a++,this.#a>this.#n.retry.limit)throw e;const a=e instanceof Error?e:new We(e);if(a instanceof xn)return a.customDelay??this.#c();if(!this.#n.retry.methods.includes(this.request.method.toLowerCase()))throw e;if(this.#n.retry.shouldRetry!==void 0){const o=await this.#n.retry.shouldRetry({error:a,retryCount:this.#a});if(o===!1)throw e;if(o===!0)return this.#c()}if(di(e)&&!this.#n.retry.retryOnTimeout)throw e;if(ci(e)){if(!this.#n.retry.statusCodes.includes(e.response.status))throw e;const o=e.response.headers.get("Retry-After")??e.response.headers.get("RateLimit-Reset")??e.response.headers.get("X-RateLimit-Retry-After")??e.response.headers.get("X-RateLimit-Reset")??e.response.headers.get("X-Rate-Limit-Reset");if(o&&this.#n.retry.afterStatusCodes.includes(e.response.status)){let t=Number(o)*1e3;Number.isNaN(t)?t=Date.parse(o)-Date.now():t>=Date.parse("2024-01-01")&&(t-=Date.now());const s=this.#n.retry.maxRetryAfter??t;return t<s?t:s}if(e.response.status===413)throw e}return this.#c()}#p(e){return this.#n.parseJson&&(e.json=async()=>this.#n.parseJson(await e.text())),e}#d(e){e&&e.cancel().catch(()=>{})}#i(e){this.#d(e.body??void 0)}async#m(e){try{return await e()}catch(a){const o=Math.min(await this.#h(a),Tn);if(this.#a<1)throw a;if(await si(o,this.#o?{signal:this.#o}:{}),a instanceof xn&&a.customRequest){const t=this.#n.signal?new globalThis.Request(a.customRequest,{signal:this.#n.signal}):new globalThis.Request(a.customRequest);this.#u(t)}for(const t of this.#n.hooks.beforeRetry){const s=await t({request:this.request,options:this.#l(),error:a,retryCount:this.#a});if(s instanceof globalThis.Request){this.#u(s);break}if(s instanceof globalThis.Response)return s;if(s===Qe)return}return this.#m(e)}}async#g(){this.#t?.signal.aborted&&(this.#t=new globalThis.AbortController,this.#n.signal=this.#o?AbortSignal.any([this.#o,this.#t.signal]):this.#t.signal,this.request=new globalThis.Request(this.request,{signal:this.#n.signal}));for(const a of this.#n.hooks.beforeRequest){const o=await a(this.request,this.#l(),{retryCount:this.#a});if(o instanceof Response)return o;if(o instanceof globalThis.Request){this.#u(o);break}}const e=ri(this.request,this.#n);return this.#s=this.request,this.request=this.#s.clone(),this.#n.timeout===!1?this.#n.fetch(this.#s,e):ii(this.#s,e,this.#t,this.#n)}#l(){if(!this.#r){const{hooks:e,...a}=this.#n;this.#r=Object.freeze(a)}return this.#r}#u(e){this.#r=void 0,this.request=this.#y(e)}#y(e,a){return!this.#n.onUploadProgress||!e.body?e:Jo(e,this.#n.onUploadProgress,a??this.#n.body??void 0)}}const Vn=n=>{const e=(a,o)=>J.create(a,rn(n,o));for(const a of Xe)e[a]=(o,t)=>J.create(o,rn(n,t,{method:a}));return e.create=a=>Vn(rn(a)),e.extend=a=>(typeof a=="function"&&(a=a(n??{})),Vn(rn(n,a))),e.stop=Qe,e.retry=Yo,e},xe=Vn();function ui(n){const{baseUrl:e,credentials:a="same-origin",defaultHeaders:o,getCsrfToken:t,kyOptions:s}=n,l=xe.create({prefixUrl:e||void 0,credentials:a,headers:o,retry:0,...s});function u(y){if(!y)return;const f=new URLSearchParams;for(const[v,N]of Object.entries(y))N!=null&&f.set(v,String(N));return f}function d(y,f){const v={};return y.headers.forEach((N,R)=>{v[R.toLowerCase()]=N}),{status:y.status,headers:v,url:f}}async function m(y,f){let v;try{v=(y.headers.get("content-type")??"").includes("application/json")?await y.clone().json():await y.clone().text()}catch{v=void 0}return new Cn(`Request failed: ${f.method} ${y.url} -> ${y.status}`,{status:y.status,statusText:y.statusText,type:y.type,url:y.url,method:f.method,headers:y.headers,body:v})}function b(y,f){return m(y.response,f)}async function w(y,f){const v={...y.headers},N=typeof FormData<"u"&&y.body instanceof FormData,R=y.body!==void 0&&y.body!==null;if(R&&!N&&(v["Content-Type"]||="application/json"),y.method!=="GET"){const A=t?.();A&&(v["X-CSRF-Token"]=A)}const S=y.url.startsWith("http"),$=S?y.url:y.url.startsWith("/")?y.url.slice(1):y.url,T=y.redirect==="manual",B={method:y.method,headers:v,searchParams:u(y.query),signal:y.signal,...y.redirect&&{redirect:y.redirect},...T&&{throwHttpErrors:!1},...R&&(N?{body:y.body}:{json:y.body})};try{const A=S?await xe($,B):await l($,B);if(A.type==="opaqueredirect")return{data:void 0,meta:d(A,A.url)};if(T&&!A.ok)throw await m(A,y);const Y=d(A,A.url);let U;return A.status===204?U=void 0:f?U=await A.blob():U=(A.headers.get("content-type")??"").includes("application/json")?await A.json():await A.text(),{data:U,meta:Y}}catch(A){throw A instanceof mn?await b(A,y):A}}return{async requestWithMeta(y,f){return await w(y,f)},async request(y){const{data:f}=await this.requestWithMeta(y);return f},async requestBlob(y){const{data:f}=await this.requestWithMeta(y,!0);return f}}}function pi(){const n=ui({baseUrl:Me(Wa.environment),credentials:"same-origin",getCsrfToken:vo});return qo(n)}const ls=pi(),mi=Ce.createContext(null);function cs(){const n=Ce.useContext(mi);if(!n)throw new Error("useApiClient must be used within <ApiClientProvider>");return n}const Mn="0",ds=()=>({files:{},folders:{}}),us=n=>n.split(".").pop()?.toLowerCase()||"",Dn=n=>String(Math.max(0,...n.map(e=>Number(e.id)))+1),yi=n=>String(Math.max(0,...n.map(e=>Number(e.id)))+1),$n=(n,e)=>e.reduce((a,o)=>(o.parentId===n&&a.push(o.id,...$n(o.id,e)),a),[]),bi=(n,e,a)=>{const o=new Set(a?[n,...$n(n,a)]:[n]);return e.reduce((t,s)=>(o.has(s.folderId)&&t.push(s.id),t),[])},Bn=n=>n?!n.type||n.type===Sn.STARTER||n.type===Sn.LOCKED_STARTER:!1,hi=n=>n.openFiles?n.openFiles.filter(e=>Bn(n.files[e])).map(e=>n.files[e]):Object.values(n.files).filter(e=>Bn(e)).sort((e,a)=>e.name.localeCompare(a.name)),gi=n=>hi(n).map(e=>e.id),fi=n=>{const e=Object.values(n.files).filter(Bn);return e.find(a=>a.active)||e.find(a=>n.openFiles?.includes(a.id))},ea=(n,e)=>{if(!e.active)return;const a=n.openFiles;if(!a||a.length===0)return;const o=a.findIndex(t=>t===e.id);if(o>0)return a[o-1];if(o<a.length-1)return a[o+1]},ps=(n,e,a)=>{const o=n.files[e];return!o||o.contents===a?n:{...n,files:{...n.files,[e]:{...o,contents:a}}}},aa=(n,e)=>{const a=fi(n);if(a?.id===e&&a.active)return n;const o=gi(n);o.includes(e)||o.push(e);const t={...n,files:{...n.files,[e]:{...n.files[e],active:!0}},openFiles:o};return a&&(t.files[a.id]={...t.files[a.id],active:!1}),t},ms=(n,e)=>{const a=n.files[e],o={...n,files:{...n.files,[e]:{...n.files[e],active:!1}},openFiles:n.openFiles?.filter(s=>s!==e)},t=ea(n,a);return t&&(o.files[t]={...o.files[t],active:!0}),o},ys=({source:n,fileName:e,language:a,folderId:o=Mn,contents:t=""})=>{const s=Dn(Object.values(n.files)),l={...n,files:{...n.files}};return l.files[s]={id:s,name:e,language:a,contents:t||`Add your changes to ${e}`,folderId:o},aa(l,s)},bs=({source:n,fileName:e,language:a,url:o,mimeType:t,folderId:s=Mn})=>{const l=Dn(Object.values(n.files)),u={...n,files:{...n.files}};return u.files[l]={id:l,name:e,language:a,contents:"",folderId:s,url:o,mimeType:t},aa(u,l)},hs=(n,e)=>{const a=n.files[e],o={...n,files:{...n.files},openFiles:n.openFiles?.filter(s=>s!==e)};delete o.files[e];const t=ea(n,a);return t&&(o.files[t]={...o.files[t],active:!0}),o},gs=(n,e,a)=>({...n,files:{...n.files,[e]:{...n.files[e],name:a}}}),fs=(n,e,a)=>({...n,files:{...n.files,[e]:{...n.files[e],folderId:a}}}),ks=(n,e,a=Mn)=>{const o=yi(Object.values(n.folders));return{...n,folders:{...n.folders,[o]:{id:o,name:e,parentId:a}}}},_s=(n,e)=>{const a=new Set([e,...$n(e,Object.values(n.folders))]),o=new Set(bi(e,Object.values(n.files),Object.values(n.folders))),t=Object.fromEntries(Object.entries(n.folders).filter(([d])=>!a.has(d))),s=Object.fromEntries(Object.entries(n.files).filter(([d])=>!o.has(d))),l=n.openFiles?.filter(d=>!o.has(d)),u={...n,folders:t,files:s,openFiles:l};if(!Object.values(s).some(d=>d.active)&&l?.length){const d=l[0];u.files={...s,[d]:{...s[d],active:!0}}}return u},ws=(n,e)=>({...n,folders:{...n.folders,[e]:{...n.folders[e],open:!n.folders[e].open}}}),vs=(n,e,a)=>({...n,folders:{...n.folders,[e]:{...n.folders[e],name:a}}}),As=(n,e,a)=>({...n,folders:{...n.folders,[e]:{...n.folders[e],parentId:a}}});function xs(n){return{padding:Math.max(0,n.padding??0),gap:Math.max(0,n.gap??0)}}function ta(n){return`${n.replace(/\.[^.]+$/,"")}.sheet`}function oa(n){return`${JSON.stringify(n,null,2)}
`}function ki(n){try{const e=JSON.parse(n);if(typeof e!="object"||e===null||e.type!=="sheet")return;const a=e.cell;if(typeof a!="object"||a===null)return;const{width:o,height:t}=a;if(typeof o!="number"||typeof t!="number"||!(o>0)||!(t>0))return;const s=d=>{if(d!==void 0)return typeof d=="number"&&Number.isFinite(d)&&d>=0?d:!1},l=s(e.padding),u=s(e.gap);return l===!1||u===!1?void 0:{type:"sheet",cell:{width:o,height:t},...l?{padding:l}:{},...u?{gap:u}:{}}}catch{return}}function Ts(n){const e={};for(const[a,o]of Object.entries(n)){if(!a.endsWith(".sheet"))continue;const t=ki(o);if(t){const s=a.split("/").pop().replace(/\.sheet$/,"");e[`${s}.png`]=t}}return e}function Os(n,e,a){const o=n.files[e];if(!o)return n;const t=ta(o.name),s=Object.values(n.files).find(b=>b.name===t&&b.folderId===o.folderId),l=a?oa(a):void 0;if(s?.contents===l||!s&&!a)return n;const u={...n.files};if(!a)return delete u[s.id],{...n,files:u};if(s)return u[s.id]={...s,contents:l},{...n,files:u};const d=Dn(Object.values(n.files)),m=Number.isNaN(Number(d))?String(Object.keys(n.files).length+1):d;return u[m]={id:m,name:t,language:"json",contents:l,folderId:o.folderId},{...n,files:u}}const _i="world-sandbox",Es="sandbox/";let In=null,ia="/vendor/",sa="/backgrounds/";function Ps(n){In=n}function wi(n){const e=new URLSearchParams(n).get(_i);return e||null}function Rs(){return In||(typeof window>"u"?null:wi(window.location.search))}function Ss(){return ia}function Ns(n){ia=n.endsWith("/")?n:`${n}/`}function vi(){return sa}function js(n){sa=n.endsWith("/")?n:`${n}/`}const Ai=["cave","city","continuousGrass","court","desert","desertRoad","farmLand","floatingGrass","frontOfHouse","space","grid","kitchen","livingRoom","meadow","parkView","pineTrees","rainbow","scifi","soccerField","stage","santa","subway","sunAndRainbow","sunshineShowers","tennisCourt","treeIsland","underground","underwater","winter"],xi={player:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAe0lEQVR4nGNgGAVDBVhVX/1PCh4QS6nqGGpZTpYjqG05SY6gleVEO2JkO4CQZhggV56gI4ixHJclhOQpcgAMiMgZgTG6JYTkh74DBjwKBkUipCYedcDgdQA9HIHX8lEH0NoRRFlOK0eQZDm1HUGW5ZQ6hiqWjoJRQA8AAE7OnlitRCcgAAAAAElFTkSuQmCC",ground:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVR4nO3OMQEAIAwDsPkBJUjAAqZwusnokyN/6v7dSSUgEA+8szpJQEBAQEBAQEBAQEAgHhiLebDqGOG0KAAAAABJRU5ErkJggg==",coin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAlklEQVR4nO2VyxHAIAhELSnlpcAUkiJy1wYi2WWBjDMyw019D/y1tmO1eK6jW/kbOE2EBYeKqHBJwlqw3+drhkmwYFREEkDhlkQZXJLw7jc6Tq7+68RLXUCqYgWoLqjVo/O2wLoC5Yew/BqiXUh7iNAuLPEfuOEzAUZiNh8WsCSY/XbDEQkmXfAoCQmuiISBWZE08I6sGOd8a++KNbTaAAAAAElFTkSuQmCC",box:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoElEQVR4nO3Wyw2AIBAEUKqxC1uwHmuwQ6vBiyaEKMx+YDBKws0dHgGBEP52tnWZYs8+NmDf5iYdAlwfthg8RRQB3og8FwJ4Ie4yYYAV8ZQnAmgRpSwxQIqo5agAKALJUAOQ2SH1JkBpc6G1ZkA+oLTOBZCGaWreD6AuAXUTUn9D6kFEPYqplxH1OqY+SKhPMuqjtMXg+eyrgB59PMBn2wFYWVNaEbwxMQAAAABJRU5ErkJggg==",ball:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAgElEQVR4nO3TQQrAIAxEUU/WdS/qpqfqTXRdEGsyMzWFBLL1P1BLyfnb3OfRZrstLINYw1QIGocQrLgLMTqgXfWxUsRb3IugxmWIrYCVu5e+hZAA5iN0A1jfEAIwNwFxAV8gpvEQACViKR4CoECY4myEK85CQHEEQgtbIbJwjmo6Ub08eLrts0sAAAAASUVORK5CYII=",coinSpin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAAB7UlEQVR4nO2c0W0DMQxDPUln6HidpBNlkA7R/yvykZ/gbMkWRbkwCdxnw2dRTHtIrq1JkiRJkiRJln4fn9foqmRgePcYmN47aKfZUxisxWfAVHp7OLJ93/X4/rieF9t3t7mncswufgZMpfcsS4ZnTxUF2HHmaSzR5UeA7FDAGR6030gnFKAs/9GLXj9ftxcaBOW/PASDp+eL8rPELgD7/GX5zxpngawwsAow8kX5WXp5s/zY5y/LP7L8KBB0AaeHMODx+Eb9PGIWgH3+svwRy48AQRdwNYh3Hq9v1M+jigKwzl+WP2r5IyBZBUQEogLkn78sf+S7f+S3gApg63nz+/Jk3AgfWYDo8q+CqAC2VIBDCoD0RoSiAnALQM1fBbCZVAAVQAVQAVQAFUAFUAEIBaDeBDmYVABuAaj5v/8AuoEqAE4qQFL+2QXYfgAG0y4FaPogjFMAJMDMYKIMyOVvKsA5X4W4M0cAzEJEGKLeFo/HN+rnUUUBWOcvzf/uBaIAK0NZYchY/jue6uVv+jp0bv69Jfa+AyAgUP5LA3DwZP255ZUeiEnOf7TQM1fGEBjeKzxov5H0SCQh/3IAPRTf1QkF8HhSWP7D8rGWcIflb/q3KDX5Vy/fiIHh3WNgeu+gnWZ/agaSJEmSJEmL+gOoxtq93WZETQAAAABJRU5ErkJggg==",playerWalk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAA/klEQVR4nO3WQQrCMBCF4R7CtWvXLj2EF/Ie3szzVCgUJGCSSSZ5Y/0fZNMg32MYapeFEEIIyef2eK2Wg38A34p6l8EX+l54awl8oe+NW0vgC/1ReG0JfK0vL4DPAuCr/NKP97Tel0rga/1sgTTW+94B4I/3vxbYczpft5MipfveAeDP8eUF8IMuQM0rpnTfMwB88V9AirTe9wwAX/wR6HnwY/ryAvgsAD4LgC9bgBklsji+3JcXwGcB8JULMLJEFY4v94eUMOH4ct+1RBOOL/e7yrig+GH8LZf7c/08pef4x/LlBfCDLsCsyAdg7DXLYQGC9prl/M0CRM0vz+UNICZusmaEXGsAAAAASUVORK5CYII=",switch:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAABjUlEQVR4nO2XMU7DQBBF9zgUlNRUFNCQJlUKCs5AEYkmB0DpcgcqREVJQcUhuMuijbTSarMbYtbxH9vvSdPZ/s/2/MhxDgAAAAAAAAAAAAAAAPa8Pt/5fFQu293C56NygTPy9Xjj01F5lJbfWgGUJXh6W/p0VB6TIl9+ZQlqBVCUoLb8qgLkyz/6EvzcXvt0VB4UoAwFOM7qe+XT6XRyvvzKElCAMhSgTr78nUtQK4CiBJYK4PgTXMVKAWrLTwF6JC7++8en/Bs3OKiX382lAGc1/4O4+OGFW1k8PA491N/+ro9PIFcpgaUHrXax4GHBwZJHdGle/kj6y2/lJvGw5WDZo2n5TwlQYcEDBzsOg3pYuGEccJA6pIEXl1f7GST4iMPc8kOmcvks5A/msN68+HzyBSgdM+X89OHPPT/MJPNLF+3yAlpFyCdfme/ulw8+TE0gndIx8XzyyR9dfjy5ryGf/DHlywXIJ58CkE++qgB9SvwrnHzyxflyAfLJlxagVaQ5mHzyDeQDAMAU+QVcGkr+3HB7iQAAAABJRU5ErkJggg=="},Q=32,L=n=>{const e=xi[n];if(!e)throw new Error(`no stock image named "${n}"`);return e},On={type:"sheet",cell:{width:Q,height:Q}},yn=n=>`${n}.png`;function En(n,e,a,o=!0){return{loop:o,frameRate:a,frames:Array.from({length:e},(t,s)=>({sprite:yn(n),position:{x:s*Q,y:0,width:Q,height:Q}}))}}function Te(n,e,a){return{frameRate:a,frames:e.map(o=>({sprite:yn(n),scale:o}))}}const ra=[{id:"player",name:"Player",description:"A small character, facing the camera.",dataUrl:L("player")},{id:"ground",name:"Ground",description:"A grass-topped tile of earth, for floors and platforms.",dataUrl:L("ground")},{id:"coin",name:"Coin",description:"A gold coin, for something to collect.",dataUrl:L("coin")},{id:"box",name:"Box",description:"A wooden crate, for something to push or stack.",dataUrl:L("box")},{id:"ball",name:"Ball",description:"A red ball, for something to bounce.",dataUrl:L("ball")},{id:"playerWalk",name:"Player Walking",description:"Four frames of the player mid-stride, side by side.",dataUrl:L("playerWalk"),sheet:On},{id:"coinSpin",name:"Coin Spinning",description:"Six frames of a coin turning, side by side.",dataUrl:L("coinSpin"),sheet:On},{id:"switch",name:"Switch",description:"Six frames of a switch flipping over, side by side.",dataUrl:L("switch"),sheet:On}],Ti=[{id:"coinSpin",name:"Coin Spin",description:"A coin turning on the spot, over and over.",sprites:["coinSpin"],document:{type:"animation",animations:{coinSpin:En("coinSpin",6,12)}}},{id:"playerWalk",name:"Player Walk",description:"A walking stride, for a character on the move.",sprites:["playerWalk"],document:{type:"animation",animations:{playerWalk:En("playerWalk",4,8)}}},{id:"switch",name:"Switch",description:"A switch flipping from one side to the other — plays once and holds.",sprites:["switch"],document:{type:"animation",animations:{switchFlip:En("switch",6,12,!1)}}},{id:"pulse",name:"Pulse",description:"A gentle grow and shrink, made by scaling one image.",sprites:["ball"],document:{type:"animation",animations:{pulse:Te("ball",[.7,1,1.3,1],6)}}},{id:"playerBob",name:"Player Bob",description:"A character bobbing on the spot, made by scaling one image.",sprites:["player"],document:{type:"animation",animations:{playerBob:Te("player",[1,1.25,1,.8],7)}}}];function Cs(n){return ra.find(e=>e.id===n)}const Oi=n=>`${n}.png`;function Ei(n){const e=n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase();return e.charAt(0).toUpperCase()+e.slice(1)}function zs(){const n=vi();return Ai.map(e=>({id:e,name:Ei(e),url:`${n}${Oi(e)}`}))}function Vs(n){const e=ze(n),a={id:"sample-1",type:"sample",position:{x:0,y:0}};return{...e,nodes:[a],edges:[O({node:Ie,port:z},{node:a.id,port:"texture"}),O({node:Rn,port:z},{node:a.id,port:"uv"}),O({node:a.id,port:"color"},{node:Le,port:z})]}}function O(n,e){return{id:`${n.node}.${n.port}->${e.node}.${e.port}`,source:n,target:e}}function Bs(n,e){return n.edges.find(a=>a.target.node===e.node&&a.target.port===e.port)}function Is(n,e){const a=new Set(n.nodes.map(t=>t.id));let o=1;for(;a.has(`${e}-${o}`);)o+=1;return`${e}-${o}`}function Ls(n){const e=new Set(n.parameters.map(o=>o.id));let a=1;for(;e.has(`param${a}`);)a+=1;return`param${a}`}function Us(n,e){return{...n,nodes:[...n.nodes,e]}}function qs(n,e){return Ve(e)?n:{...n,nodes:n.nodes.filter(a=>a.id!==e),edges:n.edges.filter(a=>a.source.node!==e&&a.target.node!==e)}}function Ms(n,e,a){return{...n,nodes:n.nodes.map(o=>o.id===e?{...o,...a}:o)}}function Ds(n,e,a,o){return Pi(n,e,{[a]:o})}function $s(n,e,a){const o=a?.trim();return{...n,nodes:n.nodes.map(t=>{if(t.id!==e)return t;if(!o){const{note:s,...l}=t;return l}return{...t,note:a}})}}function Pi(n,e,a){return{...n,nodes:n.nodes.map(o=>o.id===e?{...o,params:{...o.params,...a}}:o)}}function Ri(n,e,a){const o=_a(e);return o!==null?n.parameters.some(t=>t.id===o):Ve(e)?a&&wa.includes(e):n.nodes.some(t=>t.id===e)}function Si(n,e,a,o,t={}){if(e.length===0)return n;const s=new Set(n.nodes.map(m=>m.id)),l=new Map,u=e.map(m=>{let b=1;for(;s.has(`${m.type}-${b}`);)b+=1;const w=`${m.type}-${b}`;return s.add(w),l.set(m.id,w),{...m,id:w,position:{x:m.position.x+o.x,y:m.position.y+o.y},params:m.params?{...m.params}:void 0}}),d=a.flatMap(m=>{const b=l.get(m.target.node);if(!b)return[];const w=l.get(m.source.node),y=w?{node:w,port:m.source.port}:m.source;return!w&&!Ri(n,y.node,t.stockInputsAvailable??!0)?[]:[O(y,{node:b,port:m.target.port})]});return{...n,nodes:[...n.nodes,...u],edges:[...n.edges,...d]}}function Fs(n,e,a,o={}){const t=new Set(e),s=n.nodes.filter(u=>t.has(u.id)),l=n.edges.filter(u=>t.has(u.target.node));return Si(n,s,l,a,o)}function Gs(n,e,a){const o=n.edges.filter(t=>t.target.node!==a.node||t.target.port!==a.port);return{...n,edges:[...o,O(e,a)]}}function Ys(n,e){return{...n,edges:n.edges.filter(a=>a.id!==e)}}function Ws(n,e){return{...n,parameters:[...n.parameters,e]}}function Hs(n,e){const a=Be(e);return{...n,parameters:n.parameters.filter(o=>o.id!==e),edges:n.edges.filter(o=>o.source.node!==a)}}function Xs(n,e){return n.functions.find(a=>a.id===e)}function Qs(n){const e=new Set(n.functions.map(o=>o.id));let a=1;for(;e.has(`fn${a}`);)a+=1;return`fn${a}`}function Ks(n,e,a){return{...n,functions:[...n.functions,{id:e,name:a,outputType:"float",parameters:[],nodes:[],edges:[]}]}}function Js(n,e,a){return{...n,functions:n.functions.map(o=>o.id===e?{...o,...a}:o)}}function Zs(n,e){const a=va(e),o=t=>{const s=new Set(t.nodes.filter(l=>l.type===a).map(l=>l.id));return s.size===0?t:{...t,nodes:t.nodes.filter(l=>!s.has(l.id)),edges:t.edges.filter(l=>!s.has(l.source.node)&&!s.has(l.target.node))}};return o({...n,functions:n.functions.filter(t=>t.id!==e).map(o)})}function nr(n,e,a){return e===null?{...n,...a(n)}:{...n,functions:n.functions.map(o=>o.id===e?{...o,...a(o)}:o)}}function er(n,e,a){return{...n,parameters:n.parameters.map(o=>o.id===e?{...o,...a}:o)}}const la=V([p(),g(p())]),Ni=c({x:p(),y:p()}),Oe=c({node:i().min(1),port:i().min(1),swizzle:i().regex(/^[xyzw]{1,4}$/).optional()}),ca=c({id:i().min(1),type:i().min(1),position:Ni,params:P(i(),la).optional(),note:i().optional(),size:c({width:p().positive(),height:p().positive()}).optional(),inspected:r().optional()}),da=c({id:i().min(1),source:Oe,target:Oe}),ua=c({id:i().min(1),name:i().min(1),type:E(["float","int","bool","vec2","vec3","vec4"]),defaultValue:la,min:p().optional(),max:p().optional(),description:i().optional()}),ji=c({id:i().min(1),name:i().min(1),description:i().optional(),outputType:E(["float","vec2","vec3","vec4"]),parameters:g(ua),nodes:g(ca),edges:g(da)}),Ci=c({version:p().int().positive(),name:i(),description:i().optional(),parameters:g(ua),functions:g(ji),nodes:g(ca),edges:g(da),testTexture:i().optional()});class Pn extends Error{issues;constructor(e,a=[]){super(e),this.name="EffectParseError",this.issues=a}}function ar(n){let e;try{e=JSON.parse(n)}catch(o){throw new Pn(`Effect file is not valid JSON: ${o.message}`)}const a=Ci.safeParse(e);if(!a.success){const o=a.error.issues.map(t=>`${t.path.join(".")||"(root)"}: ${t.message}`);throw new Pn("Effect file is not a valid document",o)}if(a.data.version>de)throw new Pn(`Effect file version ${a.data.version} is newer than this editor supports (${de})`);return a.data}function zi(n){return`${JSON.stringify(n,null,2)}
`}const Vi={...ze("Ripple"),description:"Waves the picture sideways, like a flag in the wind.",testTexture:"checker",parameters:[{id:"strength",name:"strength",type:"float",defaultValue:.02,min:0,max:.1,description:"How far the ripple pushes each pixel sideways."}],nodes:[{id:"comment-1",type:"comment",position:{x:300,y:-40},size:{width:265,height:210},note:["This effect makes a picture ripple, like a flag in the wind.","The trick: we never change any colors. We change WHERE we look for them. Each row of the picture gets nudged a little bit sideways, and rows near each other get nudged by different amounts.","Follow the wires downward and read the note on each step."].join(`

`)},{id:"split-1",type:"split",position:{x:-160,y:0},note:"Every spot on the picture has two numbers: how far across (X) and how far down (Y). We only want Y."},{id:"multiply-1",type:"multiply",position:{x:-160,y:120},params:{b:14},note:"Multiplying by 14 fits 14 waves down the picture instead of one. Try a smaller number for bigger, lazier waves."},{id:"add-1",type:"add",position:{x:-160,y:240},note:"Adding the clock makes the whole pattern slide as time passes. This is what turns a still wave into a moving one."},{id:"sine-1",type:"sine",position:{x:-160,y:360},note:"Sine takes a number that keeps counting up and turns it into a smooth back-and-forth, between -1 and 1. That wobble is the wave."},{id:"multiply-2",type:"multiply",position:{x:-160,y:470},note:"Shrinks the wave down to a tiny nudge. The strength knob at the top decides how tiny — a big nudge would smear the picture."},{id:"combine2-1",type:"combine2",position:{x:40,y:470},params:{y:0},note:"Turns the nudge into a direction. Y is 0, so the picture only ever moves sideways, never up or down."},{id:"add-2",type:"add",position:{x:40,y:600},note:"Adds the nudge to where we started, so we end up pointing at a spot just beside the original one."},{id:"sample-1",type:"sample",position:{x:40,y:720},note:"Reads the color at that shifted spot. Because every row shifts by a different amount, the picture comes out wavy."}],edges:[O({node:Rn,port:z},{node:"split-1",port:"in"}),O({node:"split-1",port:"y"},{node:"multiply-1",port:"a"}),O({node:"multiply-1",port:"out"},{node:"add-1",port:"a"}),O({node:Aa,port:z},{node:"add-1",port:"b"}),O({node:"add-1",port:"out"},{node:"sine-1",port:"x"}),O({node:"sine-1",port:"out"},{node:"multiply-2",port:"a"}),O({node:Be("strength"),port:z},{node:"multiply-2",port:"b"}),O({node:"multiply-2",port:"out"},{node:"combine2-1",port:"x"}),O({node:Rn,port:z},{node:"add-2",port:"a"}),O({node:"combine2-1",port:"out"},{node:"add-2",port:"b"}),O({node:Ie,port:z},{node:"sample-1",port:"texture"}),O({node:"add-2",port:"out"},{node:"sample-1",port:"uv"}),O({node:"sample-1",port:"color"},{node:Le,port:z})]},Bi=`{
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "world_rule",
        "fields": {
          "NAME": "Arrow Keys",
          "ABILITY": "Moves with Arrow Keys"
        },
        "x": 20,
        "y": 20,
        "next": {
          "block": {
            "type": "world_use_rule",
            "fields": {
              "RULE": "Physics"
            }
          }
        }
      },
      {
        "type": "world_rule_trait",
        "fields": {
          "NAME": "Controlled by Arrow Keys"
        },
        "x": 20,
        "y": 200,
        "next": {
          "block": {
            "type": "world_use_trait",
            "fields": {
              "TRAIT": "Physics#CanMoveTrait"
            },
            "next": {
              "block": {
                "type": "world_rule_property",
                "fields": {
                  "TYPE": "number",
                  "ACCESS": "writable",
                  "NAME": "move speed",
                  "DEFAULT": "1.5"
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_step_before",
        "fields": {
          "NAME": "control",
          "STEP": "Physics#reposition"
        },
        "x": 20,
        "y": 380,
        "next": {
          "block": {
            "type": "world_for_each",
            "fields": {
              "VAR": {
                "id": "arrowsLoopActor",
                "name": "each"
              }
            },
            "inputs": {
              "WHERE": {
                "block": {
                  "type": "world_has_trait",
                  "fields": {
                    "TRAIT": "Arrow Keys#ControlledByArrowKeysTrait"
                  },
                  "inputs": {
                    "ACTOR": {
                      "block": {
                        "type": "variables_get_Actor",
                        "fields": {
                          "VAR": {
                            "id": "arrowsLoopActor",
                            "name": "each"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "DO": {
                "block": {
                  "type": "world_comment",
                  "fields": {
                    "TEXT": "While an arrow is held, walk that way; while it is not, stand still."
                  },
                  "next": {
                    "block": {
                      "type": "world_comment",
                      "fields": {
                        "TEXT": "Holding both at once cancels out, because we add the two amounts."
                      },
                      "next": {
                        "block": {
                          "type": "world_comment",
                          "fields": {
                            "TEXT": "We only set sideways speed \\u2014 up and down belongs to gravity."
                          },
                          "next": {
                            "block": {
                              "type": "world_set_Physics_VelocityProperty",
                              "inputs": {
                                "ACTOR": {
                                  "block": {
                                    "type": "variables_get_Actor",
                                    "fields": {
                                      "VAR": {
                                        "id": "arrowsLoopActor",
                                        "name": "each"
                                      }
                                    }
                                  }
                                },
                                "VALUE": {
                                  "block": {
                                    "type": "world_vector_of",
                                    "inputs": {
                                      "X": {
                                        "block": {
                                          "type": "math_arithmetic",
                                          "fields": {
                                            "OP": "ADD"
                                          },
                                          "inputs": {
                                            "A": {
                                              "block": {
                                                "type": "logic_ternary",
                                                "inputs": {
                                                  "IF": {
                                                    "block": {
                                                      "type": "world_is_key_down",
                                                      "fields": {
                                                        "KEY": "right arrow"
                                                      }
                                                    }
                                                  },
                                                  "THEN": {
                                                    "block": {
                                                      "type": "world_get_ArrowKeys_MoveSpeedProperty",
                                                      "inputs": {
                                                        "ACTOR": {
                                                          "block": {
                                                            "type": "variables_get_Actor",
                                                            "fields": {
                                                              "VAR": {
                                                                "id": "arrowsLoopActor",
                                                                "name": "each"
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "ELSE": {
                                                    "block": {
                                                      "type": "math_number",
                                                      "fields": {
                                                        "NUM": 0
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "B": {
                                              "block": {
                                                "type": "logic_ternary",
                                                "inputs": {
                                                  "IF": {
                                                    "block": {
                                                      "type": "world_is_key_down",
                                                      "fields": {
                                                        "KEY": "left arrow"
                                                      }
                                                    }
                                                  },
                                                  "THEN": {
                                                    "block": {
                                                      "type": "math_arithmetic",
                                                      "fields": {
                                                        "OP": "MULTIPLY"
                                                      },
                                                      "inputs": {
                                                        "A": {
                                                          "block": {
                                                            "type": "world_get_ArrowKeys_MoveSpeedProperty",
                                                            "inputs": {
                                                              "ACTOR": {
                                                                "block": {
                                                                  "type": "variables_get_Actor",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "arrowsLoopActor",
                                                                      "name": "each"
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "B": {
                                                          "block": {
                                                            "type": "math_number",
                                                            "fields": {
                                                              "NUM": -1
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "ELSE": {
                                                    "block": {
                                                      "type": "math_number",
                                                      "fields": {
                                                        "NUM": 0
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "Y": {
                                        "block": {
                                          "type": "world_vector_component",
                                          "fields": {
                                            "COMPONENT": "y"
                                          },
                                          "inputs": {
                                            "VEC": {
                                              "block": {
                                                "type": "world_get_Physics_VelocityProperty",
                                                "inputs": {
                                                  "ACTOR": {
                                                    "block": {
                                                      "type": "variables_get_Actor",
                                                      "fields": {
                                                        "VAR": {
                                                          "id": "arrowsLoopActor",
                                                          "name": "each"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  "variables": [
    {
      "id": "arrowsLoopActor",
      "name": "each",
      "type": "Actor"
    }
  ]
}
`,Ii=`{
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "world_rule",
        "fields": {
          "NAME": "Collisions",
          "ABILITY": "Notices Collisions"
        },
        "next": {
          "block": {
            "type": "world_use_rule",
            "fields": {
              "RULE": "Physics"
            },
            "next": {
              "block": {
                "type": "world_rule_block",
                "fields": {
                  "RETURNS": "vector",
                  "DESCRIPTION": "How big this actor is for bumping: its size, its picture, or 32 by 32."
                },
                "extraState": {
                  "parts": [
                    {
                      "kind": "label",
                      "text": "collision size of"
                    },
                    {
                      "kind": "param",
                      "type": "actor",
                      "var": "colSizeActor",
                      "name": "sizeActor"
                    }
                  ]
                },
                "inputs": {
                  "DO": {
                    "block": {
                      "type": "world_comment",
                      "fields": {
                        "TEXT": "How big is this actor for bumping into things?"
                      },
                      "next": {
                        "block": {
                          "type": "world_comment",
                          "fields": {
                            "TEXT": "First choice: the size you set on the actor yourself."
                          },
                          "next": {
                            "block": {
                              "type": "variables_set_Vector",
                              "fields": {
                                "VAR": {
                                  "id": "colBox",
                                  "name": "box",
                                  "type": "Vector"
                                }
                              },
                              "inputs": {
                                "VALUE": {
                                  "block": {
                                    "type": "world_vector_of",
                                    "inputs": {
                                      "X": {
                                        "block": {
                                          "type": "world_get_Collisions_SizeProperty",
                                          "fields": {
                                            "COMPONENT": "x"
                                          },
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "colSizeActor",
                                                    "name": "sizeActor",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "Y": {
                                        "block": {
                                          "type": "world_get_Collisions_SizeProperty",
                                          "fields": {
                                            "COMPONENT": "y"
                                          },
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "colSizeActor",
                                                    "name": "sizeActor",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "next": {
                                "block": {
                                  "type": "world_comment",
                                  "fields": {
                                    "TEXT": "If you left it at 0, use the size of the picture instead."
                                  },
                                  "next": {
                                    "block": {
                                      "type": "controls_if",
                                      "inputs": {
                                        "IF0": {
                                          "block": {
                                            "type": "logic_negate",
                                            "inputs": {
                                              "BOOL": {
                                                "block": {
                                                  "type": "logic_operation",
                                                  "fields": {
                                                    "OP": "AND"
                                                  },
                                                  "inputs": {
                                                    "A": {
                                                      "block": {
                                                        "type": "logic_compare",
                                                        "fields": {
                                                          "OP": "GT"
                                                        },
                                                        "inputs": {
                                                          "A": {
                                                            "block": {
                                                              "type": "world_vector_component",
                                                              "fields": {
                                                                "COMPONENT": "x"
                                                              },
                                                              "inputs": {
                                                                "VEC": {
                                                                  "block": {
                                                                    "type": "variables_get_Vector",
                                                                    "fields": {
                                                                      "VAR": {
                                                                        "id": "colBox",
                                                                        "name": "box",
                                                                        "type": "Vector"
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "B": {
                                                            "block": {
                                                              "type": "math_number",
                                                              "fields": {
                                                                "NUM": 0
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "B": {
                                                      "block": {
                                                        "type": "logic_compare",
                                                        "fields": {
                                                          "OP": "GT"
                                                        },
                                                        "inputs": {
                                                          "A": {
                                                            "block": {
                                                              "type": "world_vector_component",
                                                              "fields": {
                                                                "COMPONENT": "y"
                                                              },
                                                              "inputs": {
                                                                "VEC": {
                                                                  "block": {
                                                                    "type": "variables_get_Vector",
                                                                    "fields": {
                                                                      "VAR": {
                                                                        "id": "colBox",
                                                                        "name": "box",
                                                                        "type": "Vector"
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "B": {
                                                            "block": {
                                                              "type": "math_number",
                                                              "fields": {
                                                                "NUM": 0
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "DO0": {
                                          "block": {
                                            "type": "variables_set_Vector",
                                            "fields": {
                                              "VAR": {
                                                "id": "colBox",
                                                "name": "box",
                                                "type": "Vector"
                                              }
                                            },
                                            "inputs": {
                                              "VALUE": {
                                                "block": {
                                                  "type": "world_vector_of",
                                                  "inputs": {
                                                    "X": {
                                                      "block": {
                                                        "type": "world_get_Space_IntrinsicSizeProperty",
                                                        "fields": {
                                                          "COMPONENT": "x"
                                                        },
                                                        "inputs": {
                                                          "ACTOR": {
                                                            "block": {
                                                              "type": "variables_get_Actor",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "colSizeActor",
                                                                  "name": "sizeActor",
                                                                  "type": "Actor"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "Y": {
                                                      "block": {
                                                        "type": "world_get_Space_IntrinsicSizeProperty",
                                                        "fields": {
                                                          "COMPONENT": "y"
                                                        },
                                                        "inputs": {
                                                          "ACTOR": {
                                                            "block": {
                                                              "type": "variables_get_Actor",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "colSizeActor",
                                                                  "name": "sizeActor",
                                                                  "type": "Actor"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "next": {
                                        "block": {
                                          "type": "world_comment",
                                          "fields": {
                                            "TEXT": "And if there is no picture either, use a 32 by 32 square."
                                          },
                                          "next": {
                                            "block": {
                                              "type": "controls_if",
                                              "inputs": {
                                                "IF0": {
                                                  "block": {
                                                    "type": "logic_negate",
                                                    "inputs": {
                                                      "BOOL": {
                                                        "block": {
                                                          "type": "logic_operation",
                                                          "fields": {
                                                            "OP": "AND"
                                                          },
                                                          "inputs": {
                                                            "A": {
                                                              "block": {
                                                                "type": "logic_compare",
                                                                "fields": {
                                                                  "OP": "GT"
                                                                },
                                                                "inputs": {
                                                                  "A": {
                                                                    "block": {
                                                                      "type": "world_vector_component",
                                                                      "fields": {
                                                                        "COMPONENT": "x"
                                                                      },
                                                                      "inputs": {
                                                                        "VEC": {
                                                                          "block": {
                                                                            "type": "variables_get_Vector",
                                                                            "fields": {
                                                                              "VAR": {
                                                                                "id": "colBox",
                                                                                "name": "box",
                                                                                "type": "Vector"
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "B": {
                                                                    "block": {
                                                                      "type": "math_number",
                                                                      "fields": {
                                                                        "NUM": 0
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "B": {
                                                              "block": {
                                                                "type": "logic_compare",
                                                                "fields": {
                                                                  "OP": "GT"
                                                                },
                                                                "inputs": {
                                                                  "A": {
                                                                    "block": {
                                                                      "type": "world_vector_component",
                                                                      "fields": {
                                                                        "COMPONENT": "y"
                                                                      },
                                                                      "inputs": {
                                                                        "VEC": {
                                                                          "block": {
                                                                            "type": "variables_get_Vector",
                                                                            "fields": {
                                                                              "VAR": {
                                                                                "id": "colBox",
                                                                                "name": "box",
                                                                                "type": "Vector"
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "B": {
                                                                    "block": {
                                                                      "type": "math_number",
                                                                      "fields": {
                                                                        "NUM": 0
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "DO0": {
                                                  "block": {
                                                    "type": "variables_set_Vector",
                                                    "fields": {
                                                      "VAR": {
                                                        "id": "colBox",
                                                        "name": "box",
                                                        "type": "Vector"
                                                      }
                                                    },
                                                    "inputs": {
                                                      "VALUE": {
                                                        "block": {
                                                          "type": "world_vector_of",
                                                          "inputs": {
                                                            "X": {
                                                              "block": {
                                                                "type": "math_number",
                                                                "fields": {
                                                                  "NUM": 32
                                                                }
                                                              }
                                                            },
                                                            "Y": {
                                                              "block": {
                                                                "type": "math_number",
                                                                "fields": {
                                                                  "NUM": 32
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "next": {
                                                "block": {
                                                  "type": "world_comment",
                                                  "fields": {
                                                    "TEXT": "Bigger or smaller actors get bigger or smaller boxes: multiply by scale."
                                                  },
                                                  "next": {
                                                    "block": {
                                                      "type": "world_return",
                                                      "inputs": {
                                                        "VALUE": {
                                                          "block": {
                                                            "type": "world_vector_math",
                                                            "fields": {
                                                              "OP": "MULTIPLY"
                                                            },
                                                            "inputs": {
                                                              "A": {
                                                                "block": {
                                                                  "type": "variables_get_Vector",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "colBox",
                                                                      "name": "box",
                                                                      "type": "Vector"
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "B": {
                                                                "block": {
                                                                  "type": "world_vector_of",
                                                                  "inputs": {
                                                                    "X": {
                                                                      "block": {
                                                                        "type": "math_single",
                                                                        "fields": {
                                                                          "OP": "ABS"
                                                                        },
                                                                        "inputs": {
                                                                          "NUM": {
                                                                            "block": {
                                                                              "type": "world_get_Space_ScaleProperty",
                                                                              "fields": {
                                                                                "COMPONENT": "x"
                                                                              },
                                                                              "inputs": {
                                                                                "ACTOR": {
                                                                                  "block": {
                                                                                    "type": "variables_get_Actor",
                                                                                    "fields": {
                                                                                      "VAR": {
                                                                                        "id": "colSizeActor",
                                                                                        "name": "sizeActor",
                                                                                        "type": "Actor"
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "Y": {
                                                                      "block": {
                                                                        "type": "math_single",
                                                                        "fields": {
                                                                          "OP": "ABS"
                                                                        },
                                                                        "inputs": {
                                                                          "NUM": {
                                                                            "block": {
                                                                              "type": "world_get_Space_ScaleProperty",
                                                                              "fields": {
                                                                                "COMPONENT": "y"
                                                                              },
                                                                              "inputs": {
                                                                                "ACTOR": {
                                                                                  "block": {
                                                                                    "type": "variables_get_Actor",
                                                                                    "fields": {
                                                                                      "VAR": {
                                                                                        "id": "colSizeActor",
                                                                                        "name": "sizeActor",
                                                                                        "type": "Actor"
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "next": {
                  "block": {
                    "type": "world_rule_block",
                    "fields": {
                      "RETURNS": "boolean",
                      "DESCRIPTION": "Whether these two actors’ boxes are overlapping right now."
                    },
                    "extraState": {
                      "parts": [
                        {
                          "kind": "param",
                          "type": "actor",
                          "var": "colA",
                          "name": "a"
                        },
                        {
                          "kind": "label",
                          "text": "is touching"
                        },
                        {
                          "kind": "param",
                          "type": "actor",
                          "var": "colB",
                          "name": "b"
                        }
                      ]
                    },
                    "inputs": {
                      "DO": {
                        "block": {
                          "type": "world_comment",
                          "fields": {
                            "TEXT": "Two boxes overlap when their middles are close on BOTH directions."
                          },
                          "next": {
                            "block": {
                              "type": "world_comment",
                              "fields": {
                                "TEXT": "Close enough means: less than half of one box plus half of the other."
                              },
                              "next": {
                                "block": {
                                  "type": "variables_set_Vector",
                                  "fields": {
                                    "VAR": {
                                      "id": "colBoxA",
                                      "name": "boxA",
                                      "type": "Vector"
                                    }
                                  },
                                  "inputs": {
                                    "VALUE": {
                                      "block": {
                                        "type": "world_query_Collisions_CollisionSizeOfQuery",
                                        "inputs": {
                                          "SIZEACTOR": {
                                            "block": {
                                              "type": "variables_get_Actor",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colA",
                                                  "name": "a",
                                                  "type": "Actor"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "next": {
                                    "block": {
                                      "type": "variables_set_Vector",
                                      "fields": {
                                        "VAR": {
                                          "id": "colBoxB",
                                          "name": "boxB",
                                          "type": "Vector"
                                        }
                                      },
                                      "inputs": {
                                        "VALUE": {
                                          "block": {
                                            "type": "world_query_Collisions_CollisionSizeOfQuery",
                                            "inputs": {
                                              "SIZEACTOR": {
                                                "block": {
                                                  "type": "variables_get_Actor",
                                                  "fields": {
                                                    "VAR": {
                                                      "id": "colB",
                                                      "name": "b",
                                                      "type": "Actor"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "next": {
                                        "block": {
                                          "type": "world_return",
                                          "inputs": {
                                            "VALUE": {
                                              "block": {
                                                "type": "logic_operation",
                                                "fields": {
                                                  "OP": "AND"
                                                },
                                                "inputs": {
                                                  "A": {
                                                    "block": {
                                                      "type": "logic_compare",
                                                      "fields": {
                                                        "OP": "LT"
                                                      },
                                                      "inputs": {
                                                        "A": {
                                                          "block": {
                                                            "type": "math_single",
                                                            "fields": {
                                                              "OP": "ABS"
                                                            },
                                                            "inputs": {
                                                              "NUM": {
                                                                "block": {
                                                                  "type": "math_arithmetic",
                                                                  "fields": {
                                                                    "OP": "MINUS"
                                                                  },
                                                                  "inputs": {
                                                                    "A": {
                                                                      "block": {
                                                                        "type": "world_get_Space_PositionProperty",
                                                                        "fields": {
                                                                          "COMPONENT": "x"
                                                                        },
                                                                        "inputs": {
                                                                          "ACTOR": {
                                                                            "block": {
                                                                              "type": "variables_get_Actor",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colA",
                                                                                  "name": "a",
                                                                                  "type": "Actor"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "B": {
                                                                      "block": {
                                                                        "type": "world_get_Space_PositionProperty",
                                                                        "fields": {
                                                                          "COMPONENT": "x"
                                                                        },
                                                                        "inputs": {
                                                                          "ACTOR": {
                                                                            "block": {
                                                                              "type": "variables_get_Actor",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colB",
                                                                                  "name": "b",
                                                                                  "type": "Actor"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "B": {
                                                          "block": {
                                                            "type": "math_arithmetic",
                                                            "fields": {
                                                              "OP": "DIVIDE"
                                                            },
                                                            "inputs": {
                                                              "A": {
                                                                "block": {
                                                                  "type": "math_arithmetic",
                                                                  "fields": {
                                                                    "OP": "ADD"
                                                                  },
                                                                  "inputs": {
                                                                    "A": {
                                                                      "block": {
                                                                        "type": "world_vector_component",
                                                                        "fields": {
                                                                          "COMPONENT": "x"
                                                                        },
                                                                        "inputs": {
                                                                          "VEC": {
                                                                            "block": {
                                                                              "type": "variables_get_Vector",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colBoxA",
                                                                                  "name": "boxA",
                                                                                  "type": "Vector"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "B": {
                                                                      "block": {
                                                                        "type": "world_vector_component",
                                                                        "fields": {
                                                                          "COMPONENT": "x"
                                                                        },
                                                                        "inputs": {
                                                                          "VEC": {
                                                                            "block": {
                                                                              "type": "variables_get_Vector",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colBoxB",
                                                                                  "name": "boxB",
                                                                                  "type": "Vector"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "B": {
                                                                "block": {
                                                                  "type": "math_number",
                                                                  "fields": {
                                                                    "NUM": 2
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "B": {
                                                    "block": {
                                                      "type": "logic_compare",
                                                      "fields": {
                                                        "OP": "LT"
                                                      },
                                                      "inputs": {
                                                        "A": {
                                                          "block": {
                                                            "type": "math_single",
                                                            "fields": {
                                                              "OP": "ABS"
                                                            },
                                                            "inputs": {
                                                              "NUM": {
                                                                "block": {
                                                                  "type": "math_arithmetic",
                                                                  "fields": {
                                                                    "OP": "MINUS"
                                                                  },
                                                                  "inputs": {
                                                                    "A": {
                                                                      "block": {
                                                                        "type": "world_get_Space_PositionProperty",
                                                                        "fields": {
                                                                          "COMPONENT": "y"
                                                                        },
                                                                        "inputs": {
                                                                          "ACTOR": {
                                                                            "block": {
                                                                              "type": "variables_get_Actor",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colA",
                                                                                  "name": "a",
                                                                                  "type": "Actor"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "B": {
                                                                      "block": {
                                                                        "type": "world_get_Space_PositionProperty",
                                                                        "fields": {
                                                                          "COMPONENT": "y"
                                                                        },
                                                                        "inputs": {
                                                                          "ACTOR": {
                                                                            "block": {
                                                                              "type": "variables_get_Actor",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colB",
                                                                                  "name": "b",
                                                                                  "type": "Actor"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "B": {
                                                          "block": {
                                                            "type": "math_arithmetic",
                                                            "fields": {
                                                              "OP": "DIVIDE"
                                                            },
                                                            "inputs": {
                                                              "A": {
                                                                "block": {
                                                                  "type": "math_arithmetic",
                                                                  "fields": {
                                                                    "OP": "ADD"
                                                                  },
                                                                  "inputs": {
                                                                    "A": {
                                                                      "block": {
                                                                        "type": "world_vector_component",
                                                                        "fields": {
                                                                          "COMPONENT": "y"
                                                                        },
                                                                        "inputs": {
                                                                          "VEC": {
                                                                            "block": {
                                                                              "type": "variables_get_Vector",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colBoxA",
                                                                                  "name": "boxA",
                                                                                  "type": "Vector"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "B": {
                                                                      "block": {
                                                                        "type": "world_vector_component",
                                                                        "fields": {
                                                                          "COMPONENT": "y"
                                                                        },
                                                                        "inputs": {
                                                                          "VEC": {
                                                                            "block": {
                                                                              "type": "variables_get_Vector",
                                                                              "fields": {
                                                                                "VAR": {
                                                                                  "id": "colBoxB",
                                                                                  "name": "boxB",
                                                                                  "type": "Vector"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "B": {
                                                                "block": {
                                                                  "type": "math_number",
                                                                  "fields": {
                                                                    "NUM": 2
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "x": 20,
        "y": 20
      },
      {
        "type": "world_rule_trait",
        "fields": {
          "NAME": "Can Collide"
        },
        "x": 20,
        "y": 200,
        "next": {
          "block": {
            "type": "world_use_trait",
            "fields": {
              "TRAIT": "Space#PositionalTrait"
            },
            "next": {
              "block": {
                "type": "world_rule_property",
                "fields": {
                  "TYPE": "point",
                  "ACCESS": "writable",
                  "NAME": "size",
                  "DEFAULT": "0,0"
                },
                "next": {
                  "block": {
                    "type": "world_rule_property",
                    "fields": {
                      "TYPE": "actors",
                      "ACCESS": "readonly",
                      "NAME": "contacts",
                      "DEFAULT": ""
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_step_after",
        "fields": {
          "NAME": "find",
          "STEP": "Physics#reposition"
        },
        "x": 20,
        "y": 1040,
        "next": {
          "block": {
            "type": "world_comment",
            "fields": {
              "TEXT": "Who is touching whom, worked out once and written down."
            },
            "next": {
              "block": {
                "type": "world_comment",
                "fields": {
                  "TEXT": "What to DO about it belongs to whoever reads this."
                },
                "next": {
                  "block": {
                    "type": "world_for_each",
                    "fields": {
                      "VAR": {
                        "id": "conBody",
                        "name": "body",
                        "type": "Actor"
                      }
                    },
                    "inputs": {
                      "WHERE": {
                        "block": {
                          "type": "world_has_trait",
                          "fields": {
                            "TRAIT": "Collisions#CanCollideTrait"
                          },
                          "inputs": {
                            "ACTOR": {
                              "block": {
                                "type": "variables_get_Actor",
                                "fields": {
                                  "VAR": {
                                    "id": "conBody",
                                    "name": "body",
                                    "type": "Actor"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "DO": {
                        "block": {
                          "type": "world_clear_actors",
                          "fields": {
                            "LIST": {
                              "id": "conFound",
                              "name": "found",
                              "type": "Actor"
                            }
                          },
                          "next": {
                            "block": {
                              "type": "world_for_each",
                              "fields": {
                                "VAR": {
                                  "id": "conOther",
                                  "name": "other",
                                  "type": "Actor"
                                }
                              },
                              "inputs": {
                                "WHERE": {
                                  "block": {
                                    "type": "logic_operation",
                                    "fields": {
                                      "OP": "AND"
                                    },
                                    "inputs": {
                                      "A": {
                                        "block": {
                                          "type": "world_has_trait",
                                          "fields": {
                                            "TRAIT": "Collisions#CanCollideTrait"
                                          },
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "conOther",
                                                    "name": "other",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "B": {
                                        "block": {
                                          "type": "logic_negate",
                                          "inputs": {
                                            "BOOL": {
                                              "block": {
                                                "type": "logic_compare",
                                                "fields": {
                                                  "OP": "EQ"
                                                },
                                                "inputs": {
                                                  "A": {
                                                    "block": {
                                                      "type": "variables_get_Actor",
                                                      "fields": {
                                                        "VAR": {
                                                          "id": "conOther",
                                                          "name": "other",
                                                          "type": "Actor"
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "B": {
                                                    "block": {
                                                      "type": "variables_get_Actor",
                                                      "fields": {
                                                        "VAR": {
                                                          "id": "conBody",
                                                          "name": "body",
                                                          "type": "Actor"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "DO": {
                                  "block": {
                                    "type": "controls_if",
                                    "inputs": {
                                      "IF0": {
                                        "block": {
                                          "type": "world_query_Collisions_IsTouchingQuery",
                                          "inputs": {
                                            "A": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "conBody",
                                                    "name": "body",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            },
                                            "B": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "conOther",
                                                    "name": "other",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "DO0": {
                                        "block": {
                                          "type": "world_push_actor",
                                          "fields": {
                                            "LIST": {
                                              "id": "conFound",
                                              "name": "found",
                                              "type": "Actor"
                                            }
                                          },
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "conOther",
                                                    "name": "other",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "next": {
                                "block": {
                                  "type": "world_set_Collisions_ContactsProperty",
                                  "inputs": {
                                    "ACTOR": {
                                      "block": {
                                        "type": "variables_get_Actor",
                                        "fields": {
                                          "VAR": {
                                            "id": "conBody",
                                            "name": "body",
                                            "type": "Actor"
                                          }
                                        }
                                      }
                                    },
                                    "VALUE": {
                                      "block": {
                                        "type": "variables_get_Actor",
                                        "fields": {
                                          "VAR": {
                                            "id": "conFound",
                                            "name": "found",
                                            "type": "Actor"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  "variables": [
    {
      "id": "colA",
      "name": "a",
      "type": "Actor"
    },
    {
      "id": "colB",
      "name": "b",
      "type": "Actor"
    },
    {
      "id": "colSizeActor",
      "name": "sizeActor",
      "type": "Actor"
    },
    {
      "id": "colBox",
      "name": "box",
      "type": "Vector"
    },
    {
      "id": "colBoxA",
      "name": "boxA",
      "type": "Vector"
    },
    {
      "id": "colBoxB",
      "name": "boxB",
      "type": "Vector"
    },
    {
      "id": "conBody",
      "name": "body",
      "type": "Actor"
    },
    {
      "id": "conOther",
      "name": "other",
      "type": "Actor"
    },
    {
      "id": "conFound",
      "name": "found",
      "type": "Actor"
    }
  ]
}
`,Li=`{
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "world_rule",
        "fields": {
          "NAME": "Gravity",
          "ABILITY": "Has Gravity"
        },
        "x": 20,
        "y": 20,
        "next": {
          "block": {
            "type": "world_use_rule",
            "fields": {
              "RULE": "Physics"
            },
            "next": {
              "block": {
                "type": "world_use_rule",
                "fields": {
                  "RULE": "Solid Bodies"
                },
                "next": {
                  "block": {
                    "type": "world_rule_property",
                    "fields": {
                      "TYPE": "vector",
                      "ACCESS": "writable",
                      "NAME": "direction",
                      "DEFAULT": "0,1"
                    },
                    "next": {
                      "block": {
                        "type": "world_rule_property",
                        "fields": {
                          "TYPE": "number",
                          "ACCESS": "writable",
                          "NAME": "strength",
                          "DEFAULT": "9"
                        },
                        "next": {
                          "block": {
                            "type": "world_rule_block",
                            "fields": {
                              "RETURNS": "number",
                              "DESCRIPTION": "The height this actor rests at when it lands on that ground."
                            },
                            "extraState": {
                              "parts": [
                                {
                                  "kind": "param",
                                  "type": "actor",
                                  "var": "gravitySubject",
                                  "name": "faller"
                                },
                                {
                                  "kind": "label",
                                  "text": "rest height of"
                                },
                                {
                                  "kind": "param",
                                  "type": "actor",
                                  "var": "gravityGround",
                                  "name": "ground"
                                }
                              ]
                            },
                            "inputs": {
                              "DO": {
                                "block": {
                                  "type": "world_comment",
                                  "fields": {
                                    "TEXT": "Where does this faller stop when it lands on this ground?"
                                  },
                                  "next": {
                                    "block": {
                                      "type": "world_comment",
                                      "fields": {
                                        "TEXT": "Boxes are measured from the middle, so the top of the ground is"
                                      },
                                      "next": {
                                        "block": {
                                          "type": "world_comment",
                                          "fields": {
                                            "TEXT": "its middle minus half its height — and the faller sits half its own"
                                          },
                                          "next": {
                                            "block": {
                                              "type": "world_comment",
                                              "fields": {
                                                "TEXT": "height above that. Upside-down gravity flips which side that is,"
                                              },
                                              "next": {
                                                "block": {
                                                  "type": "world_comment",
                                                  "fields": {
                                                    "TEXT": "so we multiply by sign: 1 for normal gravity, -1 for upside-down."
                                                  },
                                                  "next": {
                                                    "block": {
                                                      "type": "variables_set_Number",
                                                      "fields": {
                                                        "VAR": {
                                                          "id": "gravitySign",
                                                          "name": "sign"
                                                        }
                                                      },
                                                      "inputs": {
                                                        "VALUE": {
                                                          "block": {
                                                            "type": "math_number",
                                                            "fields": {
                                                              "NUM": 1
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "next": {
                                                        "block": {
                                                          "type": "controls_if",
                                                          "inputs": {
                                                            "IF0": {
                                                              "block": {
                                                                "type": "logic_compare",
                                                                "fields": {
                                                                  "OP": "LT"
                                                                },
                                                                "inputs": {
                                                                  "A": {
                                                                    "block": {
                                                                      "type": "world_vector_component",
                                                                      "fields": {
                                                                        "COMPONENT": "y"
                                                                      },
                                                                      "inputs": {
                                                                        "VEC": {
                                                                          "block": {
                                                                            "type": "world_get_Gravity_DirectionProperty"
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "B": {
                                                                    "block": {
                                                                      "type": "math_number",
                                                                      "fields": {
                                                                        "NUM": 0
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "DO0": {
                                                              "block": {
                                                                "type": "variables_set_Number",
                                                                "fields": {
                                                                  "VAR": {
                                                                    "id": "gravitySign",
                                                                    "name": "sign"
                                                                  }
                                                                },
                                                                "inputs": {
                                                                  "VALUE": {
                                                                    "block": {
                                                                      "type": "math_number",
                                                                      "fields": {
                                                                        "NUM": -1
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "next": {
                                                            "block": {
                                                              "type": "world_return",
                                                              "inputs": {
                                                                "VALUE": {
                                                                  "block": {
                                                                    "type": "math_arithmetic",
                                                                    "fields": {
                                                                      "OP": "MINUS"
                                                                    },
                                                                    "inputs": {
                                                                      "A": {
                                                                        "block": {
                                                                          "type": "world_get_Space_PositionProperty",
                                                                          "fields": {
                                                                            "COMPONENT": "y"
                                                                          },
                                                                          "inputs": {
                                                                            "ACTOR": {
                                                                              "block": {
                                                                                "type": "variables_get_Actor",
                                                                                "fields": {
                                                                                  "VAR": {
                                                                                    "id": "gravityGround",
                                                                                    "name": "ground"
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "B": {
                                                                        "block": {
                                                                          "type": "math_arithmetic",
                                                                          "fields": {
                                                                            "OP": "MULTIPLY"
                                                                          },
                                                                          "inputs": {
                                                                            "A": {
                                                                              "block": {
                                                                                "type": "math_arithmetic",
                                                                                "fields": {
                                                                                  "OP": "DIVIDE"
                                                                                },
                                                                                "inputs": {
                                                                                  "A": {
                                                                                    "block": {
                                                                                      "type": "math_arithmetic",
                                                                                      "fields": {
                                                                                        "OP": "ADD"
                                                                                      },
                                                                                      "inputs": {
                                                                                        "A": {
                                                                                          "block": {
                                                                                            "type": "world_vector_component",
                                                                                            "fields": {
                                                                                              "COMPONENT": "y"
                                                                                            },
                                                                                            "inputs": {
                                                                                              "VEC": {
                                                                                                "block": {
                                                                                                  "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                                                                  "inputs": {
                                                                                                    "SIZEACTOR": {
                                                                                                      "block": {
                                                                                                        "type": "variables_get_Actor",
                                                                                                        "fields": {
                                                                                                          "VAR": {
                                                                                                            "id": "gravitySubject",
                                                                                                            "name": "faller"
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        "B": {
                                                                                          "block": {
                                                                                            "type": "world_vector_component",
                                                                                            "fields": {
                                                                                              "COMPONENT": "y"
                                                                                            },
                                                                                            "inputs": {
                                                                                              "VEC": {
                                                                                                "block": {
                                                                                                  "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                                                                  "inputs": {
                                                                                                    "SIZEACTOR": {
                                                                                                      "block": {
                                                                                                        "type": "variables_get_Actor",
                                                                                                        "fields": {
                                                                                                          "VAR": {
                                                                                                            "id": "gravityGround",
                                                                                                            "name": "ground"
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "B": {
                                                                                    "block": {
                                                                                      "type": "math_number",
                                                                                      "fields": {
                                                                                        "NUM": 2
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "B": {
                                                                              "block": {
                                                                                "type": "variables_get_Number",
                                                                                "fields": {
                                                                                  "VAR": {
                                                                                    "id": "gravitySign",
                                                                                    "name": "sign"
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "next": {
                              "block": {
                                "type": "world_rule_block",
                                "fields": {
                                  "RETURNS": "boolean",
                                  "DESCRIPTION": "Whether this actor is standing on that ground right now, this frame."
                                },
                                "extraState": {
                                  "parts": [
                                    {
                                      "kind": "param",
                                      "type": "actor",
                                      "var": "gravitySubject",
                                      "name": "faller"
                                    },
                                    {
                                      "kind": "label",
                                      "text": "is resting on"
                                    },
                                    {
                                      "kind": "param",
                                      "type": "actor",
                                      "var": "gravityGround",
                                      "name": "ground"
                                    },
                                    {
                                      "kind": "param",
                                      "type": "number",
                                      "var": "gravityDelta",
                                      "name": "frame"
                                    }
                                  ]
                                },
                                "inputs": {
                                  "DO": {
                                    "block": {
                                      "type": "world_comment",
                                      "fields": {
                                        "TEXT": "Standing on this ground means three things are all true:"
                                      },
                                      "next": {
                                        "block": {
                                          "type": "world_comment",
                                          "fields": {
                                            "TEXT": "1. we are over it, not off to one side,"
                                          },
                                          "next": {
                                            "block": {
                                              "type": "world_comment",
                                              "fields": {
                                                "TEXT": "2. we are moving toward it (falling, not rising away),"
                                              },
                                              "next": {
                                                "block": {
                                                  "type": "world_comment",
                                                  "fields": {
                                                    "TEXT": "3. we were above its surface last frame and are at or past it now."
                                                  },
                                                  "next": {
                                                    "block": {
                                                      "type": "variables_set_Number",
                                                      "fields": {
                                                        "VAR": {
                                                          "id": "gravityRestY",
                                                          "name": "restY"
                                                        }
                                                      },
                                                      "inputs": {
                                                        "VALUE": {
                                                          "block": {
                                                            "type": "world_query_Gravity_RestHeightOfQuery",
                                                            "inputs": {
                                                              "FALLER": {
                                                                "block": {
                                                                  "type": "variables_get_Actor",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "gravitySubject",
                                                                      "name": "faller"
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "GROUND": {
                                                                "block": {
                                                                  "type": "variables_get_Actor",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "gravityGround",
                                                                      "name": "ground"
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "next": {
                                                        "block": {
                                                          "type": "variables_set_Number",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "gravitySign",
                                                              "name": "sign"
                                                            }
                                                          },
                                                          "inputs": {
                                                            "VALUE": {
                                                              "block": {
                                                                "type": "math_number",
                                                                "fields": {
                                                                  "NUM": 1
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "next": {
                                                            "block": {
                                                              "type": "controls_if",
                                                              "inputs": {
                                                                "IF0": {
                                                                  "block": {
                                                                    "type": "logic_compare",
                                                                    "fields": {
                                                                      "OP": "LT"
                                                                    },
                                                                    "inputs": {
                                                                      "A": {
                                                                        "block": {
                                                                          "type": "world_vector_component",
                                                                          "fields": {
                                                                            "COMPONENT": "y"
                                                                          },
                                                                          "inputs": {
                                                                            "VEC": {
                                                                              "block": {
                                                                                "type": "world_get_Gravity_DirectionProperty"
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "B": {
                                                                        "block": {
                                                                          "type": "math_number",
                                                                          "fields": {
                                                                            "NUM": 0
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                "DO0": {
                                                                  "block": {
                                                                    "type": "variables_set_Number",
                                                                    "fields": {
                                                                      "VAR": {
                                                                        "id": "gravitySign",
                                                                        "name": "sign"
                                                                      }
                                                                    },
                                                                    "inputs": {
                                                                      "VALUE": {
                                                                        "block": {
                                                                          "type": "math_number",
                                                                          "fields": {
                                                                            "NUM": -1
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "next": {
                                                                "block": {
                                                                  "type": "world_return",
                                                                  "inputs": {
                                                                    "VALUE": {
                                                                      "block": {
                                                                        "type": "logic_operation",
                                                                        "fields": {
                                                                          "OP": "AND"
                                                                        },
                                                                        "inputs": {
                                                                          "A": {
                                                                            "block": {
                                                                              "type": "logic_operation",
                                                                              "fields": {
                                                                                "OP": "AND"
                                                                              },
                                                                              "inputs": {
                                                                                "A": {
                                                                                  "block": {
                                                                                    "type": "logic_compare",
                                                                                    "fields": {
                                                                                      "OP": "LT"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "math_single",
                                                                                          "fields": {
                                                                                            "OP": "ABS"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "NUM": {
                                                                                              "block": {
                                                                                                "type": "math_arithmetic",
                                                                                                "fields": {
                                                                                                  "OP": "MINUS"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Space_PositionProperty",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "x"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "gravitySubject",
                                                                                                                "name": "faller"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Space_PositionProperty",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "x"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "gravityGround",
                                                                                                                "name": "ground"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "math_arithmetic",
                                                                                          "fields": {
                                                                                            "OP": "DIVIDE"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "A": {
                                                                                              "block": {
                                                                                                "type": "math_arithmetic",
                                                                                                "fields": {
                                                                                                  "OP": "ADD"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "world_vector_component",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "x"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "VEC": {
                                                                                                          "block": {
                                                                                                            "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                                                                            "inputs": {
                                                                                                              "SIZEACTOR": {
                                                                                                                "block": {
                                                                                                                  "type": "variables_get_Actor",
                                                                                                                  "fields": {
                                                                                                                    "VAR": {
                                                                                                                      "id": "gravitySubject",
                                                                                                                      "name": "faller"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "world_vector_component",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "x"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "VEC": {
                                                                                                          "block": {
                                                                                                            "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                                                                            "inputs": {
                                                                                                              "SIZEACTOR": {
                                                                                                                "block": {
                                                                                                                  "type": "variables_get_Actor",
                                                                                                                  "fields": {
                                                                                                                    "VAR": {
                                                                                                                      "id": "gravityGround",
                                                                                                                      "name": "ground"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "B": {
                                                                                              "block": {
                                                                                                "type": "math_number",
                                                                                                "fields": {
                                                                                                  "NUM": 2
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "B": {
                                                                                  "block": {
                                                                                    "type": "logic_compare",
                                                                                    "fields": {
                                                                                      "OP": "GTE"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "math_arithmetic",
                                                                                          "fields": {
                                                                                            "OP": "MULTIPLY"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "A": {
                                                                                              "block": {
                                                                                                "type": "world_vector_component",
                                                                                                "fields": {
                                                                                                  "COMPONENT": "y"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "VEC": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Physics_VelocityProperty",
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "gravitySubject",
                                                                                                                "name": "faller"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "B": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Number",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "gravitySign",
                                                                                                    "name": "sign"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "math_number",
                                                                                          "fields": {
                                                                                            "NUM": 0
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "B": {
                                                                            "block": {
                                                                              "type": "logic_operation",
                                                                              "fields": {
                                                                                "OP": "AND"
                                                                              },
                                                                              "inputs": {
                                                                                "A": {
                                                                                  "block": {
                                                                                    "type": "logic_compare",
                                                                                    "fields": {
                                                                                      "OP": "LTE"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "math_arithmetic",
                                                                                          "fields": {
                                                                                            "OP": "MULTIPLY"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "A": {
                                                                                              "block": {
                                                                                                "type": "math_arithmetic",
                                                                                                "fields": {
                                                                                                  "OP": "MINUS"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "world_vector_component",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "y"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "VEC": {
                                                                                                          "block": {
                                                                                                            "type": "world_query_Physics_PositionBeforeQuery",
                                                                                                            "inputs": {
                                                                                                              "SUBJECT": {
                                                                                                                "block": {
                                                                                                                  "type": "variables_get_Actor",
                                                                                                                  "fields": {
                                                                                                                    "VAR": {
                                                                                                                      "id": "gravitySubject",
                                                                                                                      "name": "faller"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              "SECONDS": {
                                                                                                                "block": {
                                                                                                                  "type": "variables_get_Number",
                                                                                                                  "fields": {
                                                                                                                    "VAR": {
                                                                                                                      "id": "gravityDelta",
                                                                                                                      "name": "frame"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "variables_get_Number",
                                                                                                      "fields": {
                                                                                                        "VAR": {
                                                                                                          "id": "gravityRestY",
                                                                                                          "name": "restY"
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "B": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Number",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "gravitySign",
                                                                                                    "name": "sign"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "math_number",
                                                                                          "fields": {
                                                                                            "NUM": 0
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "B": {
                                                                                  "block": {
                                                                                    "type": "logic_compare",
                                                                                    "fields": {
                                                                                      "OP": "GTE"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "math_arithmetic",
                                                                                          "fields": {
                                                                                            "OP": "MULTIPLY"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "A": {
                                                                                              "block": {
                                                                                                "type": "math_arithmetic",
                                                                                                "fields": {
                                                                                                  "OP": "MINUS"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Space_PositionProperty",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "y"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "gravitySubject",
                                                                                                                "name": "faller"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "variables_get_Number",
                                                                                                      "fields": {
                                                                                                        "VAR": {
                                                                                                          "id": "gravityRestY",
                                                                                                          "name": "restY"
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "B": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Number",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "gravitySign",
                                                                                                    "name": "sign"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "math_number",
                                                                                          "fields": {
                                                                                            "NUM": 0
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "next": {
                                  "block": {
                                    "type": "world_rule_block",
                                    "fields": {
                                      "RETURNS": "boolean",
                                      "DESCRIPTION": "Lands this actor on any ground it has reached, and says whether it did."
                                    },
                                    "extraState": {
                                      "parts": [
                                        {
                                          "kind": "param",
                                          "type": "actor",
                                          "var": "gravitySubject",
                                          "name": "faller"
                                        },
                                        {
                                          "kind": "label",
                                          "text": "land on ground?"
                                        },
                                        {
                                          "kind": "param",
                                          "type": "number",
                                          "var": "gravityDelta",
                                          "name": "frame"
                                        }
                                      ]
                                    },
                                    "inputs": {
                                      "DO": {
                                        "block": {
                                          "type": "world_comment",
                                          "fields": {
                                            "TEXT": "Collisions already worked out what this actor is touching,"
                                          },
                                          "next": {
                                            "block": {
                                              "type": "world_comment",
                                              "fields": {
                                                "TEXT": "so this only looks at those — not at every actor in the world."
                                              },
                                              "next": {
                                                "block": {
                                                  "type": "world_comment",
                                                  "fields": {
                                                    "TEXT": "Look at every ground in the world and ask: am I resting on it?"
                                                  },
                                                  "next": {
                                                    "block": {
                                                      "type": "world_comment",
                                                      "fields": {
                                                        "TEXT": "If I am, put me exactly on its surface and stop falling."
                                                      },
                                                      "next": {
                                                        "block": {
                                                          "type": "variables_set_Boolean",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "gravityLanded",
                                                              "name": "landed"
                                                            }
                                                          },
                                                          "inputs": {
                                                            "VALUE": {
                                                              "block": {
                                                                "type": "logic_boolean",
                                                                "fields": {
                                                                  "BOOL": "FALSE"
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "next": {
                                                            "block": {
                                                              "type": "world_for_each",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "gravityGround",
                                                                  "name": "ground"
                                                                }
                                                              },
                                                              "inputs": {
                                                                "SOURCE": {
                                                                  "block": {
                                                                    "type": "world_get_Collisions_ContactsProperty",
                                                                    "inputs": {
                                                                      "ACTOR": {
                                                                        "block": {
                                                                          "type": "variables_get_Actor",
                                                                          "fields": {
                                                                            "VAR": {
                                                                              "id": "gravitySubject",
                                                                              "name": "faller",
                                                                              "type": "Actor"
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                "WHERE": {
                                                                  "block": {
                                                                    "type": "world_has_trait",
                                                                    "fields": {
                                                                      "TRAIT": "Gravity#ActsAsGroundTrait"
                                                                    },
                                                                    "inputs": {
                                                                      "ACTOR": {
                                                                        "block": {
                                                                          "type": "variables_get_Actor",
                                                                          "fields": {
                                                                            "VAR": {
                                                                              "id": "gravityGround",
                                                                              "name": "ground"
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                "DO": {
                                                                  "block": {
                                                                    "type": "controls_if",
                                                                    "inputs": {
                                                                      "IF0": {
                                                                        "block": {
                                                                          "type": "world_query_Gravity_IsRestingOnQuery",
                                                                          "inputs": {
                                                                            "FALLER": {
                                                                              "block": {
                                                                                "type": "variables_get_Actor",
                                                                                "fields": {
                                                                                  "VAR": {
                                                                                    "id": "gravitySubject",
                                                                                    "name": "faller"
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "GROUND": {
                                                                              "block": {
                                                                                "type": "variables_get_Actor",
                                                                                "fields": {
                                                                                  "VAR": {
                                                                                    "id": "gravityGround",
                                                                                    "name": "ground"
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "FRAME": {
                                                                              "block": {
                                                                                "type": "variables_get_Number",
                                                                                "fields": {
                                                                                  "VAR": {
                                                                                    "id": "gravityDelta",
                                                                                    "name": "frame"
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "DO0": {
                                                                        "block": {
                                                                          "type": "variables_set_Number",
                                                                          "fields": {
                                                                            "VAR": {
                                                                              "id": "gravityRestY",
                                                                              "name": "restY"
                                                                            }
                                                                          },
                                                                          "inputs": {
                                                                            "VALUE": {
                                                                              "block": {
                                                                                "type": "world_query_Gravity_RestHeightOfQuery",
                                                                                "inputs": {
                                                                                  "FALLER": {
                                                                                    "block": {
                                                                                      "type": "variables_get_Actor",
                                                                                      "fields": {
                                                                                        "VAR": {
                                                                                          "id": "gravitySubject",
                                                                                          "name": "faller"
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "GROUND": {
                                                                                    "block": {
                                                                                      "type": "variables_get_Actor",
                                                                                      "fields": {
                                                                                        "VAR": {
                                                                                          "id": "gravityGround",
                                                                                          "name": "ground"
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "next": {
                                                                            "block": {
                                                                              "type": "world_set_position",
                                                                              "inputs": {
                                                                                "ACTOR": {
                                                                                  "block": {
                                                                                    "type": "variables_get_Actor",
                                                                                    "fields": {
                                                                                      "VAR": {
                                                                                        "id": "gravitySubject",
                                                                                        "name": "faller"
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "X": {
                                                                                  "block": {
                                                                                    "type": "world_get_Space_PositionProperty",
                                                                                    "fields": {
                                                                                      "COMPONENT": "x"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "ACTOR": {
                                                                                        "block": {
                                                                                          "type": "variables_get_Actor",
                                                                                          "fields": {
                                                                                            "VAR": {
                                                                                              "id": "gravitySubject",
                                                                                              "name": "faller"
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "Y": {
                                                                                  "block": {
                                                                                    "type": "variables_get_Number",
                                                                                    "fields": {
                                                                                      "VAR": {
                                                                                        "id": "gravityRestY",
                                                                                        "name": "restY"
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              },
                                                                              "next": {
                                                                                "block": {
                                                                                  "type": "world_set_Physics_VelocityProperty",
                                                                                  "inputs": {
                                                                                    "ACTOR": {
                                                                                      "block": {
                                                                                        "type": "variables_get_Actor",
                                                                                        "fields": {
                                                                                          "VAR": {
                                                                                            "id": "gravitySubject",
                                                                                            "name": "faller"
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "VALUE": {
                                                                                      "block": {
                                                                                        "type": "world_vector_of",
                                                                                        "inputs": {
                                                                                          "X": {
                                                                                            "block": {
                                                                                              "type": "world_vector_component",
                                                                                              "fields": {
                                                                                                "COMPONENT": "x"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "VEC": {
                                                                                                  "block": {
                                                                                                    "type": "world_get_Physics_VelocityProperty",
                                                                                                    "inputs": {
                                                                                                      "ACTOR": {
                                                                                                        "block": {
                                                                                                          "type": "variables_get_Actor",
                                                                                                          "fields": {
                                                                                                            "VAR": {
                                                                                                              "id": "gravitySubject",
                                                                                                              "name": "faller"
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "Y": {
                                                                                            "block": {
                                                                                              "type": "math_number",
                                                                                              "fields": {
                                                                                                "NUM": 0
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "next": {
                                                                                    "block": {
                                                                                      "type": "variables_set_Boolean",
                                                                                      "fields": {
                                                                                        "VAR": {
                                                                                          "id": "gravityLanded",
                                                                                          "name": "landed"
                                                                                        }
                                                                                      },
                                                                                      "inputs": {
                                                                                        "VALUE": {
                                                                                          "block": {
                                                                                            "type": "logic_boolean",
                                                                                            "fields": {
                                                                                              "BOOL": "TRUE"
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "next": {
                                                                "block": {
                                                                  "type": "world_return",
                                                                  "inputs": {
                                                                    "VALUE": {
                                                                      "block": {
                                                                        "type": "variables_get_Boolean",
                                                                        "fields": {
                                                                          "VAR": {
                                                                            "id": "gravityLanded",
                                                                            "name": "landed"
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "next": {
                                      "block": {
                                        "type": "world_rule_block",
                                        "fields": {
                                          "RETURNS": "none",
                                          "DESCRIPTION": "Turns gravity upside down: things fall the other way from now on."
                                        },
                                        "extraState": {
                                          "parts": [
                                            {
                                              "kind": "label",
                                              "text": "Invert Gravity"
                                            }
                                          ]
                                        },
                                        "inputs": {
                                          "DO": {
                                            "block": {
                                              "type": "world_set_Gravity_DirectionProperty",
                                              "inputs": {
                                                "VALUE": {
                                                  "block": {
                                                    "type": "world_vector_rotate",
                                                    "inputs": {
                                                      "VECTOR": {
                                                        "block": {
                                                          "type": "world_get_Gravity_DirectionProperty"
                                                        }
                                                      },
                                                      "DEGREES": {
                                                        "shadow": {
                                                          "type": "math_number",
                                                          "fields": {
                                                            "NUM": 180
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_trait",
        "fields": {
          "NAME": "Affected by Gravity"
        },
        "x": 20,
        "y": 2120,
        "next": {
          "block": {
            "type": "world_use_trait",
            "fields": {
              "TRAIT": "Physics#CanMoveTrait"
            },
            "next": {
              "block": {
                "type": "world_use_trait",
                "fields": {
                  "TRAIT": "Collisions#CanCollideTrait"
                },
                "next": {
                  "block": {
                    "type": "world_rule_property",
                    "fields": {
                      "TYPE": "number",
                      "ACCESS": "writable",
                      "NAME": "gravity scale",
                      "DEFAULT": "1"
                    },
                    "next": {
                      "block": {
                        "type": "world_rule_property",
                        "fields": {
                          "TYPE": "boolean",
                          "ACCESS": "readonly",
                          "NAME": "falling",
                          "DEFAULT": "false"
                        },
                        "next": {
                          "block": {
                            "type": "world_rule_block",
                            "fields": {
                              "RETURNS": "boolean",
                              "DESCRIPTION": "Whether this actor is standing on something, rather than falling."
                            },
                            "extraState": {
                              "parts": [
                                {
                                  "kind": "label",
                                  "text": "is on the ground?"
                                }
                              ]
                            },
                            "inputs": {
                              "DO": {
                                "block": {
                                  "type": "world_comment",
                                  "fields": {
                                    "TEXT": "The landing step keeps \\"falling\\" up to date, so this just reads it."
                                  },
                                  "next": {
                                    "block": {
                                      "type": "world_return",
                                      "inputs": {
                                        "VALUE": {
                                          "block": {
                                            "type": "logic_negate",
                                            "inputs": {
                                              "BOOL": {
                                                "block": {
                                                  "type": "world_get_Gravity_FallingProperty",
                                                  "inputs": {
                                                    "ACTOR": {
                                                      "block": {
                                                        "type": "world_this_actor"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "next": {
                              "block": {
                                "type": "world_rule_event",
                                "next": {
                                  "block": {
                                    "type": "world_rule_event",
                                    "extraState": {
                                      "parts": [
                                        {
                                          "kind": "label",
                                          "text": "stops falling"
                                        }
                                      ]
                                    }
                                  }
                                },
                                "extraState": {
                                  "parts": [
                                    {
                                      "kind": "label",
                                      "text": "starts falling"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_trait",
        "fields": {
          "NAME": "Acts as Ground"
        },
        "x": 20,
        "y": 2680,
        "next": {
          "block": {
            "type": "world_use_trait",
            "fields": {
              "TRAIT": "Collisions#CanCollideTrait"
            }
          }
        }
      },
      {
        "type": "world_rule_step_before",
        "fields": {
          "NAME": "applyVelocity",
          "STEP": "Physics#reposition"
        },
        "x": 20,
        "y": 2900,
        "next": {
          "block": {
            "type": "world_for_each",
            "fields": {
              "VAR": {
                "id": "gravityLoopActor",
                "name": "each"
              }
            },
            "inputs": {
              "WHERE": {
                "block": {
                  "type": "world_has_trait",
                  "fields": {
                    "TRAIT": "Gravity#AffectedByGravityTrait"
                  },
                  "inputs": {
                    "ACTOR": {
                      "block": {
                        "type": "variables_get_Actor",
                        "fields": {
                          "VAR": {
                            "id": "gravityLoopActor",
                            "name": "each"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "DO": {
                "block": {
                  "type": "world_comment",
                  "fields": {
                    "TEXT": "Falling is not one speed: every frame you fall a little faster."
                  },
                  "next": {
                    "block": {
                      "type": "world_comment",
                      "fields": {
                        "TEXT": "So add a bit of speed, in the direction gravity pulls."
                      },
                      "next": {
                        "block": {
                          "type": "world_set_Physics_VelocityProperty",
                          "inputs": {
                            "ACTOR": {
                              "block": {
                                "type": "variables_get_Actor",
                                "fields": {
                                  "VAR": {
                                    "id": "gravityLoopActor",
                                    "name": "each"
                                  }
                                }
                              }
                            },
                            "VALUE": {
                              "block": {
                                "type": "world_vector_math",
                                "fields": {
                                  "OP": "ADD"
                                },
                                "inputs": {
                                  "A": {
                                    "block": {
                                      "type": "world_get_Physics_VelocityProperty",
                                      "inputs": {
                                        "ACTOR": {
                                          "block": {
                                            "type": "variables_get_Actor",
                                            "fields": {
                                              "VAR": {
                                                "id": "gravityLoopActor",
                                                "name": "each"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "B": {
                                    "block": {
                                      "type": "world_vector_math",
                                      "fields": {
                                        "OP": "MULTIPLY"
                                      },
                                      "inputs": {
                                        "A": {
                                          "block": {
                                            "type": "world_get_Gravity_DirectionProperty"
                                          }
                                        },
                                        "B": {
                                          "block": {
                                            "type": "math_arithmetic",
                                            "fields": {
                                              "OP": "MULTIPLY"
                                            },
                                            "inputs": {
                                              "A": {
                                                "block": {
                                                  "type": "math_arithmetic",
                                                  "fields": {
                                                    "OP": "MULTIPLY"
                                                  },
                                                  "inputs": {
                                                    "A": {
                                                      "block": {
                                                        "type": "world_get_Gravity_StrengthProperty"
                                                      }
                                                    },
                                                    "B": {
                                                      "block": {
                                                        "type": "world_get_Gravity_GravityScaleProperty",
                                                        "inputs": {
                                                          "ACTOR": {
                                                            "block": {
                                                              "type": "variables_get_Actor",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "gravityLoopActor",
                                                                  "name": "each"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "B": {
                                                "block": {
                                                  "type": "world_step_delta"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_step_after",
        "fields": {
          "NAME": "handleCollisions",
          "STEP": "Solid Bodies#resolve"
        },
        "x": 20,
        "y": 3300,
        "next": {
          "block": {
            "type": "world_for_each",
            "fields": {
              "VAR": {
                "id": "gravityLoopActor",
                "name": "each"
              }
            },
            "inputs": {
              "WHERE": {
                "block": {
                  "type": "world_has_trait",
                  "fields": {
                    "TRAIT": "Gravity#AffectedByGravityTrait"
                  },
                  "inputs": {
                    "ACTOR": {
                      "block": {
                        "type": "variables_get_Actor",
                        "fields": {
                          "VAR": {
                            "id": "gravityLoopActor",
                            "name": "each"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "DO": {
                "block": {
                  "type": "world_comment",
                  "fields": {
                    "TEXT": "Everything has moved by now, so this is where we decide who is standing."
                  },
                  "next": {
                    "block": {
                      "type": "world_comment",
                      "fields": {
                        "TEXT": "Landing (or not) is also when we announce it: started falling, landed."
                      },
                      "next": {
                        "block": {
                          "type": "variables_set_Boolean",
                          "fields": {
                            "VAR": {
                              "id": "gravityResting",
                              "name": "resting"
                            }
                          },
                          "inputs": {
                            "VALUE": {
                              "block": {
                                "type": "world_query_Gravity_LandOnGroundQuery",
                                "inputs": {
                                  "FALLER": {
                                    "block": {
                                      "type": "variables_get_Actor",
                                      "fields": {
                                        "VAR": {
                                          "id": "gravityLoopActor",
                                          "name": "each"
                                        }
                                      }
                                    }
                                  },
                                  "FRAME": {
                                    "block": {
                                      "type": "world_step_delta"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "next": {
                            "block": {
                              "type": "controls_if",
                              "extraState": {
                                "elseIfCount": 0,
                                "hasElse": true
                              },
                              "inputs": {
                                "IF0": {
                                  "block": {
                                    "type": "variables_get_Boolean",
                                    "fields": {
                                      "VAR": {
                                        "id": "gravityResting",
                                        "name": "resting"
                                      }
                                    }
                                  }
                                },
                                "DO0": {
                                  "block": {
                                    "type": "controls_if",
                                    "inputs": {
                                      "IF0": {
                                        "block": {
                                          "type": "world_get_Gravity_FallingProperty",
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "gravityLoopActor",
                                                    "name": "each"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "DO0": {
                                        "block": {
                                          "type": "world_set_Gravity_FallingProperty",
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "gravityLoopActor",
                                                    "name": "each"
                                                  }
                                                }
                                              }
                                            },
                                            "VALUE": {
                                              "block": {
                                                "type": "logic_boolean",
                                                "fields": {
                                                  "BOOL": "FALSE"
                                                }
                                              }
                                            }
                                          },
                                          "next": {
                                            "block": {
                                              "type": "world_emit_Gravity_StopsFallingEvent",
                                              "inputs": {
                                                "ACTOR": {
                                                  "block": {
                                                    "type": "variables_get_Actor",
                                                    "fields": {
                                                      "VAR": {
                                                        "id": "gravityLoopActor",
                                                        "name": "each"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "ELSE": {
                                  "block": {
                                    "type": "controls_if",
                                    "inputs": {
                                      "IF0": {
                                        "block": {
                                          "type": "logic_negate",
                                          "inputs": {
                                            "BOOL": {
                                              "block": {
                                                "type": "world_get_Gravity_FallingProperty",
                                                "inputs": {
                                                  "ACTOR": {
                                                    "block": {
                                                      "type": "variables_get_Actor",
                                                      "fields": {
                                                        "VAR": {
                                                          "id": "gravityLoopActor",
                                                          "name": "each"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "DO0": {
                                        "block": {
                                          "type": "world_set_Gravity_FallingProperty",
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "gravityLoopActor",
                                                    "name": "each"
                                                  }
                                                }
                                              }
                                            },
                                            "VALUE": {
                                              "block": {
                                                "type": "logic_boolean",
                                                "fields": {
                                                  "BOOL": "TRUE"
                                                }
                                              }
                                            }
                                          },
                                          "next": {
                                            "block": {
                                              "type": "world_emit_Gravity_StartsFallingEvent",
                                              "inputs": {
                                                "ACTOR": {
                                                  "block": {
                                                    "type": "variables_get_Actor",
                                                    "fields": {
                                                      "VAR": {
                                                        "id": "gravityLoopActor",
                                                        "name": "each"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  "variables": [
    {
      "id": "gravityLoopActor",
      "name": "each",
      "type": "Actor"
    },
    {
      "id": "gravitySubject",
      "name": "faller",
      "type": "Actor"
    },
    {
      "id": "gravityGround",
      "name": "ground",
      "type": "Actor"
    },
    {
      "id": "gravityDelta",
      "name": "frame",
      "type": "Number"
    },
    {
      "id": "gravityResting",
      "name": "resting",
      "type": "Boolean"
    },
    {
      "id": "gravitySign",
      "name": "sign",
      "type": "Number"
    },
    {
      "id": "gravityRestY",
      "name": "restY",
      "type": "Number"
    },
    {
      "id": "gravityLanded",
      "name": "landed",
      "type": "Boolean"
    }
  ]
}
`,Ui=`{
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "world_rule",
        "fields": {
          "NAME": "Input",
          "ABILITY": "Responds to Input"
        },
        "x": 20,
        "y": 20,
        "next": {
          "block": {
            "type": "world_rule_event",
            "next": {
              "block": {
                "type": "world_rule_event",
                "extraState": {
                  "parts": [
                    {
                      "kind": "param",
                      "type": "enum:Engine#Key",
                      "var": "inputReleasedKey"
                    },
                    {
                      "kind": "label",
                      "text": "is released"
                    }
                  ]
                }
              }
            },
            "extraState": {
              "parts": [
                {
                  "kind": "param",
                  "type": "enum:Engine#Key",
                  "var": "inputPressedKey"
                },
                {
                  "kind": "label",
                  "text": "is pressed"
                }
              ]
            }
          }
        }
      },
      {
        "type": "world_rule_step_tick",
        "fields": {
          "NAME": "keyEvents"
        },
        "x": 20,
        "y": 220,
        "next": {
          "block": {
            "type": "world_comment",
            "fields": {
              "TEXT": "The world knows which keys are held. What it also knows, and"
            },
            "next": {
              "block": {
                "type": "world_comment",
                "fields": {
                  "TEXT": "nothing else can work out, is which ones CHANGED this frame."
                },
                "next": {
                  "block": {
                    "type": "world_for_each_key",
                    "fields": {
                      "EDGE": "PRESSED",
                      "VAR": {
                        "id": "inputLoopKey",
                        "name": "key"
                      }
                    },
                    "inputs": {
                      "DO": {
                        "block": {
                          "type": "world_for_each",
                          "fields": {
                            "VAR": {
                              "id": "inputLoopActor",
                              "name": "each"
                            }
                          },
                          "inputs": {
                            "WHERE": {
                              "shadow": {
                                "type": "logic_boolean",
                                "fields": {
                                  "BOOL": "TRUE"
                                }
                              }
                            },
                            "DO": {
                              "block": {
                                "type": "world_comment",
                                "fields": {
                                  "TEXT": "Tell this actor which key it was; its handlers can check."
                                },
                                "next": {
                                  "block": {
                                    "type": "world_emit_Input_IsPressedEvent",
                                    "inputs": {
                                      "ACTOR": {
                                        "block": {
                                          "type": "variables_get_Actor",
                                          "fields": {
                                            "VAR": {
                                              "id": "inputLoopActor",
                                              "name": "each"
                                            }
                                          }
                                        }
                                      },
                                      "VALUE": {
                                        "block": {
                                          "type": "variables_get_String",
                                          "fields": {
                                            "VAR": {
                                              "id": "inputLoopKey",
                                              "name": "key"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "next": {
                      "block": {
                        "type": "world_for_each_key",
                        "fields": {
                          "EDGE": "RELEASED",
                          "VAR": {
                            "id": "inputLoopKey",
                            "name": "key"
                          }
                        },
                        "inputs": {
                          "DO": {
                            "block": {
                              "type": "world_for_each",
                              "fields": {
                                "VAR": {
                                  "id": "inputLoopActor",
                                  "name": "each"
                                }
                              },
                              "inputs": {
                                "WHERE": {
                                  "shadow": {
                                    "type": "logic_boolean",
                                    "fields": {
                                      "BOOL": "TRUE"
                                    }
                                  }
                                },
                                "DO": {
                                  "block": {
                                    "type": "world_comment",
                                    "fields": {
                                      "TEXT": "Tell this actor which key it was; its handlers can check."
                                    },
                                    "next": {
                                      "block": {
                                        "type": "world_emit_Input_IsReleasedEvent",
                                        "inputs": {
                                          "ACTOR": {
                                            "block": {
                                              "type": "variables_get_Actor",
                                              "fields": {
                                                "VAR": {
                                                  "id": "inputLoopActor",
                                                  "name": "each"
                                                }
                                              }
                                            }
                                          },
                                          "VALUE": {
                                            "block": {
                                              "type": "variables_get_String",
                                              "fields": {
                                                "VAR": {
                                                  "id": "inputLoopKey",
                                                  "name": "key"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  "variables": [
    {
      "id": "inputLoopActor",
      "name": "each",
      "type": "Actor"
    },
    {
      "id": "inputLoopKey",
      "name": "key",
      "type": "String"
    },
    {
      "id": "inputPressedKey",
      "name": "pressed key",
      "type": "String"
    },
    {
      "id": "inputReleasedKey",
      "name": "released key",
      "type": "String"
    }
  ]
}
`,qi=`{
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "world_rule",
        "fields": {
          "NAME": "Physics",
          "ABILITY": "Has Physics"
        },
        "x": 20,
        "y": 20,
        "next": {
          "block": {
            "type": "world_use_rule",
            "fields": {
              "RULE": "Space"
            },
            "next": {
              "block": {
                "type": "world_rule_block",
                "fields": {
                  "RETURNS": "vector",
                  "DESCRIPTION": "Where this actor was that many seconds ago, at the speed it is going now."
                },
                "extraState": {
                  "parts": [
                    {
                      "kind": "param",
                      "type": "actor",
                      "var": "motionSubject",
                      "name": "subject"
                    },
                    {
                      "kind": "label",
                      "text": "position before"
                    },
                    {
                      "kind": "param",
                      "type": "number",
                      "var": "motionSeconds",
                      "name": "seconds"
                    }
                  ]
                },
                "inputs": {
                  "DO": {
                    "block": {
                      "type": "world_comment",
                      "fields": {
                        "TEXT": "Rewind: where was this actor a moment ago, going the speed it is going?"
                      },
                      "next": {
                        "block": {
                          "type": "world_comment",
                          "fields": {
                            "TEXT": "Speed is in units per second, position is in pixels \\u2014 so we multiply"
                          },
                          "next": {
                            "block": {
                              "type": "world_comment",
                              "fields": {
                                "TEXT": "by \\"pixels per unit\\" to turn one into the other."
                              },
                              "next": {
                                "block": {
                                  "type": "world_return",
                                  "inputs": {
                                    "VALUE": {
                                      "block": {
                                        "type": "world_vector_math",
                                        "fields": {
                                          "OP": "SUBTRACT"
                                        },
                                        "inputs": {
                                          "A": {
                                            "block": {
                                              "type": "world_vector_of",
                                              "inputs": {
                                                "X": {
                                                  "block": {
                                                    "type": "world_get_Space_PositionProperty",
                                                    "fields": {
                                                      "COMPONENT": "x"
                                                    },
                                                    "inputs": {
                                                      "ACTOR": {
                                                        "block": {
                                                          "type": "variables_get_Actor",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "motionSubject",
                                                              "name": "subject",
                                                              "type": "Actor"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "Y": {
                                                  "block": {
                                                    "type": "world_get_Space_PositionProperty",
                                                    "fields": {
                                                      "COMPONENT": "y"
                                                    },
                                                    "inputs": {
                                                      "ACTOR": {
                                                        "block": {
                                                          "type": "variables_get_Actor",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "motionSubject",
                                                              "name": "subject",
                                                              "type": "Actor"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "B": {
                                            "block": {
                                              "type": "world_vector_math",
                                              "fields": {
                                                "OP": "MULTIPLY"
                                              },
                                              "inputs": {
                                                "A": {
                                                  "block": {
                                                    "type": "world_get_Physics_VelocityProperty",
                                                    "inputs": {
                                                      "ACTOR": {
                                                        "block": {
                                                          "type": "variables_get_Actor",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "motionSubject",
                                                              "name": "subject",
                                                              "type": "Actor"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "B": {
                                                  "block": {
                                                    "type": "math_arithmetic",
                                                    "fields": {
                                                      "OP": "MULTIPLY"
                                                    },
                                                    "inputs": {
                                                      "A": {
                                                        "block": {
                                                          "type": "variables_get_Number",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "motionSeconds",
                                                              "name": "seconds",
                                                              "type": "Number"
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "B": {
                                                        "block": {
                                                          "type": "world_pixels_per_unit"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_trait",
        "fields": {
          "NAME": "Can Move"
        },
        "x": 20,
        "y": 600,
        "next": {
          "block": {
            "type": "world_use_trait",
            "fields": {
              "TRAIT": "Space#PositionalTrait"
            },
            "next": {
              "block": {
                "type": "world_rule_property",
                "fields": {
                  "TYPE": "vector",
                  "ACCESS": "writable",
                  "NAME": "velocity",
                  "DEFAULT": "0,0"
                },
                "next": {
                  "block": {
                    "type": "world_rule_block",
                    "fields": {
                      "RETURNS": "none",
                      "DESCRIPTION": "Gives this actor a shove: adds to the speed it already has."
                    },
                    "extraState": {
                      "parts": [
                        {
                          "kind": "label",
                          "text": "apply force"
                        },
                        {
                          "kind": "param",
                          "type": "vector",
                          "var": "motionForce",
                          "name": "force"
                        }
                      ]
                    },
                    "inputs": {
                      "DO": {
                        "block": {
                          "type": "world_comment",
                          "fields": {
                            "TEXT": "A push does not set the speed, it CHANGES it: add it on."
                          },
                          "next": {
                            "block": {
                              "type": "world_comment",
                              "fields": {
                                "TEXT": "That is why a jump still works while you are already moving sideways."
                              },
                              "next": {
                                "block": {
                                  "type": "world_set_Physics_VelocityProperty",
                                  "inputs": {
                                    "ACTOR": {
                                      "block": {
                                        "type": "world_this_actor"
                                      }
                                    },
                                    "VALUE": {
                                      "block": {
                                        "type": "world_vector_math",
                                        "fields": {
                                          "OP": "ADD"
                                        },
                                        "inputs": {
                                          "A": {
                                            "block": {
                                              "type": "world_get_Physics_VelocityProperty",
                                              "inputs": {
                                                "ACTOR": {
                                                  "block": {
                                                    "type": "world_this_actor"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "B": {
                                            "block": {
                                              "type": "variables_get_Vector",
                                              "fields": {
                                                "VAR": {
                                                  "id": "motionForce",
                                                  "name": "force",
                                                  "type": "Vector"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_step_tick",
        "fields": {
          "NAME": "reposition"
        },
        "x": 20,
        "y": 1150,
        "next": {
          "block": {
            "type": "world_for_each",
            "fields": {
              "VAR": {
                "id": "motionEach",
                "name": "each",
                "type": "Actor"
              }
            },
            "inputs": {
              "WHERE": {
                "block": {
                  "type": "world_has_trait",
                  "fields": {
                    "TRAIT": "Physics#CanMoveTrait"
                  },
                  "inputs": {
                    "ACTOR": {
                      "block": {
                        "type": "variables_get_Actor",
                        "fields": {
                          "VAR": {
                            "id": "motionEach",
                            "name": "each",
                            "type": "Actor"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "DO": {
                "block": {
                  "type": "world_comment",
                  "fields": {
                    "TEXT": "Moving is speed times time: how far do we get this frame?"
                  },
                  "next": {
                    "block": {
                      "type": "variables_set_Vector",
                      "fields": {
                        "VAR": {
                          "id": "motionTravel",
                          "name": "travel",
                          "type": "Vector"
                        }
                      },
                      "inputs": {
                        "VALUE": {
                          "block": {
                            "type": "world_vector_math",
                            "fields": {
                              "OP": "MULTIPLY"
                            },
                            "inputs": {
                              "A": {
                                "block": {
                                  "type": "world_get_Physics_VelocityProperty",
                                  "inputs": {
                                    "ACTOR": {
                                      "block": {
                                        "type": "variables_get_Actor",
                                        "fields": {
                                          "VAR": {
                                            "id": "motionEach",
                                            "name": "each",
                                            "type": "Actor"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "B": {
                                "block": {
                                  "type": "math_arithmetic",
                                  "fields": {
                                    "OP": "MULTIPLY"
                                  },
                                  "inputs": {
                                    "A": {
                                      "block": {
                                        "type": "world_step_delta"
                                      }
                                    },
                                    "B": {
                                      "block": {
                                        "type": "world_pixels_per_unit"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "next": {
                        "block": {
                          "type": "world_comment",
                          "fields": {
                            "TEXT": "Then add that to where the actor already is."
                          },
                          "next": {
                            "block": {
                              "type": "world_set_position",
                              "inputs": {
                                "ACTOR": {
                                  "block": {
                                    "type": "variables_get_Actor",
                                    "fields": {
                                      "VAR": {
                                        "id": "motionEach",
                                        "name": "each",
                                        "type": "Actor"
                                      }
                                    }
                                  }
                                },
                                "X": {
                                  "block": {
                                    "type": "math_arithmetic",
                                    "fields": {
                                      "OP": "ADD"
                                    },
                                    "inputs": {
                                      "A": {
                                        "block": {
                                          "type": "world_get_Space_PositionProperty",
                                          "fields": {
                                            "COMPONENT": "x"
                                          },
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "motionEach",
                                                    "name": "each",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "B": {
                                        "block": {
                                          "type": "world_vector_component",
                                          "fields": {
                                            "COMPONENT": "x"
                                          },
                                          "inputs": {
                                            "VEC": {
                                              "block": {
                                                "type": "variables_get_Vector",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "motionTravel",
                                                    "name": "travel",
                                                    "type": "Vector"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "Y": {
                                  "block": {
                                    "type": "math_arithmetic",
                                    "fields": {
                                      "OP": "ADD"
                                    },
                                    "inputs": {
                                      "A": {
                                        "block": {
                                          "type": "world_get_Space_PositionProperty",
                                          "fields": {
                                            "COMPONENT": "y"
                                          },
                                          "inputs": {
                                            "ACTOR": {
                                              "block": {
                                                "type": "variables_get_Actor",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "motionEach",
                                                    "name": "each",
                                                    "type": "Actor"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "B": {
                                        "block": {
                                          "type": "world_vector_component",
                                          "fields": {
                                            "COMPONENT": "y"
                                          },
                                          "inputs": {
                                            "VEC": {
                                              "block": {
                                                "type": "variables_get_Vector",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "motionTravel",
                                                    "name": "travel",
                                                    "type": "Vector"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  "variables": [
    {
      "id": "motionForce",
      "name": "force",
      "type": "Vector"
    },
    {
      "id": "motionSubject",
      "name": "subject",
      "type": "Actor"
    },
    {
      "id": "motionSeconds",
      "name": "seconds",
      "type": "Number"
    },
    {
      "id": "motionEach",
      "name": "each",
      "type": "Actor"
    },
    {
      "id": "motionTravel",
      "name": "travel",
      "type": "Vector"
    }
  ]
}
`,Mi=`{
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "world_rule",
        "fields": {
          "NAME": "Solid Bodies",
          "ABILITY": "Has Solid Bodies"
        },
        "x": 20,
        "y": 20,
        "next": {
          "block": {
            "type": "world_use_rule",
            "fields": {
              "RULE": "Physics"
            },
            "next": {
              "block": {
                "type": "world_use_rule",
                "fields": {
                  "RULE": "Collisions"
                },
                "next": {
                  "block": {
                    "type": "world_rule_block",
                    "fields": {
                      "RETURNS": "number",
                      "DESCRIPTION": "A number the way these properties are meant: never below 0, never above 1."
                    },
                    "extraState": {
                      "parts": [
                        {
                          "kind": "param",
                          "type": "number",
                          "var": "colKeepN"
                        },
                        {
                          "kind": "label",
                          "text": "kept between 0 and 1"
                        }
                      ]
                    },
                    "inputs": {
                      "DO": {
                        "block": {
                          "type": "world_comment",
                          "fields": {
                            "TEXT": "Below zero would push the body the wrong way; above one would"
                          },
                          "next": {
                            "block": {
                              "type": "world_comment",
                              "fields": {
                                "TEXT": "give it more speed than it arrived with, every single bounce."
                              },
                              "next": {
                                "block": {
                                  "type": "controls_if",
                                  "inputs": {
                                    "IF0": {
                                      "block": {
                                        "type": "logic_compare",
                                        "fields": {
                                          "OP": "LT"
                                        },
                                        "inputs": {
                                          "A": {
                                            "block": {
                                              "type": "variables_get_Number",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colKeepN",
                                                  "name": "n",
                                                  "type": "Number"
                                                }
                                              }
                                            }
                                          },
                                          "B": {
                                            "block": {
                                              "type": "math_number",
                                              "fields": {
                                                "NUM": 0
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "DO0": {
                                      "block": {
                                        "type": "world_return",
                                        "inputs": {
                                          "VALUE": {
                                            "block": {
                                              "type": "math_number",
                                              "fields": {
                                                "NUM": 0
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "next": {
                                    "block": {
                                      "type": "controls_if",
                                      "inputs": {
                                        "IF0": {
                                          "block": {
                                            "type": "logic_compare",
                                            "fields": {
                                              "OP": "GT"
                                            },
                                            "inputs": {
                                              "A": {
                                                "block": {
                                                  "type": "variables_get_Number",
                                                  "fields": {
                                                    "VAR": {
                                                      "id": "colKeepN",
                                                      "name": "n",
                                                      "type": "Number"
                                                    }
                                                  }
                                                }
                                              },
                                              "B": {
                                                "block": {
                                                  "type": "math_number",
                                                  "fields": {
                                                    "NUM": 1
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "DO0": {
                                          "block": {
                                            "type": "world_return",
                                            "inputs": {
                                              "VALUE": {
                                                "block": {
                                                  "type": "math_number",
                                                  "fields": {
                                                    "NUM": 1
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "next": {
                                        "block": {
                                          "type": "world_return",
                                          "inputs": {
                                            "VALUE": {
                                              "block": {
                                                "type": "variables_get_Number",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "colKeepN",
                                                    "name": "n",
                                                    "type": "Number"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "next": {
                      "block": {
                        "type": "world_rule_block",
                        "fields": {
                          "RETURNS": "number",
                          "DESCRIPTION": "A speed with some taken off it — never turned around, and never past a stop."
                        },
                        "extraState": {
                          "parts": [
                            {
                              "kind": "param",
                              "type": "number",
                              "var": "colSlowV"
                            },
                            {
                              "kind": "label",
                              "text": "slowed by"
                            },
                            {
                              "kind": "param",
                              "type": "number",
                              "var": "colSlowDrop"
                            }
                          ]
                        },
                        "inputs": {
                          "DO": {
                            "block": {
                              "type": "world_comment",
                              "fields": {
                                "TEXT": "A surface with no grip takes nothing away."
                              },
                              "next": {
                                "block": {
                                  "type": "controls_if",
                                  "inputs": {
                                    "IF0": {
                                      "block": {
                                        "type": "logic_compare",
                                        "fields": {
                                          "OP": "LTE"
                                        },
                                        "inputs": {
                                          "A": {
                                            "block": {
                                              "type": "variables_get_Number",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colSlowDrop",
                                                  "name": "drop",
                                                  "type": "Number"
                                                }
                                              }
                                            }
                                          },
                                          "B": {
                                            "block": {
                                              "type": "math_number",
                                              "fields": {
                                                "NUM": 0
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "DO0": {
                                      "block": {
                                        "type": "world_return",
                                        "inputs": {
                                          "VALUE": {
                                            "block": {
                                              "type": "variables_get_Number",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colSlowV",
                                                  "name": "v",
                                                  "type": "Number"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "next": {
                                    "block": {
                                      "type": "world_comment",
                                      "fields": {
                                        "TEXT": "If the grip is stronger than the speed, the speed is gone —"
                                      },
                                      "next": {
                                        "block": {
                                          "type": "world_comment",
                                          "fields": {
                                            "TEXT": "not reversed, which is what makes a grippy wall HOLD a body."
                                          },
                                          "next": {
                                            "block": {
                                              "type": "controls_if",
                                              "inputs": {
                                                "IF0": {
                                                  "block": {
                                                    "type": "logic_compare",
                                                    "fields": {
                                                      "OP": "LTE"
                                                    },
                                                    "inputs": {
                                                      "A": {
                                                        "block": {
                                                          "type": "math_single",
                                                          "fields": {
                                                            "OP": "ABS"
                                                          },
                                                          "inputs": {
                                                            "NUM": {
                                                              "block": {
                                                                "type": "variables_get_Number",
                                                                "fields": {
                                                                  "VAR": {
                                                                    "id": "colSlowV",
                                                                    "name": "v",
                                                                    "type": "Number"
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "B": {
                                                        "block": {
                                                          "type": "variables_get_Number",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "colSlowDrop",
                                                              "name": "drop",
                                                              "type": "Number"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "DO0": {
                                                  "block": {
                                                    "type": "world_return",
                                                    "inputs": {
                                                      "VALUE": {
                                                        "block": {
                                                          "type": "math_number",
                                                          "fields": {
                                                            "NUM": 0
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "next": {
                                                "block": {
                                                  "type": "controls_if",
                                                  "inputs": {
                                                    "IF0": {
                                                      "block": {
                                                        "type": "logic_compare",
                                                        "fields": {
                                                          "OP": "GT"
                                                        },
                                                        "inputs": {
                                                          "A": {
                                                            "block": {
                                                              "type": "variables_get_Number",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "colSlowV",
                                                                  "name": "v",
                                                                  "type": "Number"
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "B": {
                                                            "block": {
                                                              "type": "math_number",
                                                              "fields": {
                                                                "NUM": 0
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "DO0": {
                                                      "block": {
                                                        "type": "world_return",
                                                        "inputs": {
                                                          "VALUE": {
                                                            "block": {
                                                              "type": "math_arithmetic",
                                                              "fields": {
                                                                "OP": "MINUS"
                                                              },
                                                              "inputs": {
                                                                "A": {
                                                                  "block": {
                                                                    "type": "variables_get_Number",
                                                                    "fields": {
                                                                      "VAR": {
                                                                        "id": "colSlowV",
                                                                        "name": "v",
                                                                        "type": "Number"
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                "B": {
                                                                  "block": {
                                                                    "type": "variables_get_Number",
                                                                    "fields": {
                                                                      "VAR": {
                                                                        "id": "colSlowDrop",
                                                                        "name": "drop",
                                                                        "type": "Number"
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "next": {
                                                    "block": {
                                                      "type": "world_return",
                                                      "inputs": {
                                                        "VALUE": {
                                                          "block": {
                                                            "type": "math_arithmetic",
                                                            "fields": {
                                                              "OP": "ADD"
                                                            },
                                                            "inputs": {
                                                              "A": {
                                                                "block": {
                                                                  "type": "variables_get_Number",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "colSlowV",
                                                                      "name": "v",
                                                                      "type": "Number"
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "B": {
                                                                "block": {
                                                                  "type": "variables_get_Number",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "colSlowDrop",
                                                                      "name": "drop",
                                                                      "type": "Number"
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "next": {
                          "block": {
                            "type": "world_rule_block",
                            "fields": {
                              "RETURNS": "none",
                              "DESCRIPTION": "Pushes an actor out of a solid one sideways, if it came in from the side."
                            },
                            "extraState": {
                              "parts": [
                                {
                                  "kind": "label",
                                  "text": "push"
                                },
                                {
                                  "kind": "param",
                                  "type": "actor",
                                  "var": "colBody2"
                                },
                                {
                                  "kind": "label",
                                  "text": "out of"
                                },
                                {
                                  "kind": "param",
                                  "type": "actor",
                                  "var": "colSolid2"
                                },
                                {
                                  "kind": "label",
                                  "text": "sideways, over"
                                },
                                {
                                  "kind": "param",
                                  "type": "number",
                                  "var": "colFrame2"
                                }
                              ]
                            },
                            "inputs": {
                              "DO": {
                                "block": {
                                  "type": "world_comment",
                                  "fields": {
                                    "TEXT": "How far apart the two middles must be for the boxes to just touch."
                                  },
                                  "next": {
                                    "block": {
                                      "type": "variables_set_Vector",
                                      "fields": {
                                        "VAR": {
                                          "id": "colReach2",
                                          "name": "reach",
                                          "type": "Vector"
                                        }
                                      },
                                      "inputs": {
                                        "VALUE": {
                                          "block": {
                                            "type": "world_vector_math",
                                            "fields": {
                                              "OP": "DIVIDE"
                                            },
                                            "inputs": {
                                              "A": {
                                                "block": {
                                                  "type": "world_vector_math",
                                                  "fields": {
                                                    "OP": "ADD"
                                                  },
                                                  "inputs": {
                                                    "A": {
                                                      "block": {
                                                        "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                        "inputs": {
                                                          "SIZEACTOR": {
                                                            "block": {
                                                              "type": "variables_get_Actor",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "colBody2",
                                                                  "name": "body",
                                                                  "type": "Actor"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "B": {
                                                      "block": {
                                                        "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                        "inputs": {
                                                          "SIZEACTOR": {
                                                            "block": {
                                                              "type": "variables_get_Actor",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "colSolid2",
                                                                  "name": "solid",
                                                                  "type": "Actor"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "B": {
                                                "block": {
                                                  "type": "math_number",
                                                  "fields": {
                                                    "NUM": 2
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "next": {
                                        "block": {
                                          "type": "world_comment",
                                          "fields": {
                                            "TEXT": "Where this actor was before it moved this frame."
                                          },
                                          "next": {
                                            "block": {
                                              "type": "variables_set_Vector",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colWas2",
                                                  "name": "was",
                                                  "type": "Vector"
                                                }
                                              },
                                              "inputs": {
                                                "VALUE": {
                                                  "block": {
                                                    "type": "world_query_Physics_PositionBeforeQuery",
                                                    "inputs": {
                                                      "SUBJECT": {
                                                        "block": {
                                                          "type": "variables_get_Actor",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "colBody2",
                                                              "name": "body",
                                                              "type": "Actor"
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "SECONDS": {
                                                        "block": {
                                                          "type": "variables_get_Number",
                                                          "fields": {
                                                            "VAR": {
                                                              "id": "colFrame2",
                                                              "name": "frame",
                                                              "type": "Number"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "next": {
                                                "block": {
                                                  "type": "world_comment",
                                                  "fields": {
                                                    "TEXT": "Only push sideways if it was ALREADY overlapping vertically before it"
                                                  },
                                                  "next": {
                                                    "block": {
                                                      "type": "world_comment",
                                                      "fields": {
                                                        "TEXT": "moved: otherwise it arrived from above or below, and that is the"
                                                      },
                                                      "next": {
                                                        "block": {
                                                          "type": "world_comment",
                                                          "fields": {
                                                            "TEXT": "other pass to make."
                                                          },
                                                          "next": {
                                                            "block": {
                                                              "type": "controls_if",
                                                              "inputs": {
                                                                "IF0": {
                                                                  "block": {
                                                                    "type": "logic_operation",
                                                                    "fields": {
                                                                      "OP": "AND"
                                                                    },
                                                                    "inputs": {
                                                                      "A": {
                                                                        "block": {
                                                                          "type": "logic_compare",
                                                                          "fields": {
                                                                            "OP": "GT"
                                                                          },
                                                                          "inputs": {
                                                                            "A": {
                                                                              "block": {
                                                                                "type": "math_arithmetic",
                                                                                "fields": {
                                                                                  "OP": "MINUS"
                                                                                },
                                                                                "inputs": {
                                                                                  "A": {
                                                                                    "block": {
                                                                                      "type": "world_vector_component",
                                                                                      "fields": {
                                                                                        "COMPONENT": "x"
                                                                                      },
                                                                                      "inputs": {
                                                                                        "VEC": {
                                                                                          "block": {
                                                                                            "type": "variables_get_Vector",
                                                                                            "fields": {
                                                                                              "VAR": {
                                                                                                "id": "colReach2",
                                                                                                "name": "reach",
                                                                                                "type": "Vector"
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "B": {
                                                                                    "block": {
                                                                                      "type": "math_single",
                                                                                      "fields": {
                                                                                        "OP": "ABS"
                                                                                      },
                                                                                      "inputs": {
                                                                                        "NUM": {
                                                                                          "block": {
                                                                                            "type": "math_arithmetic",
                                                                                            "fields": {
                                                                                              "OP": "MINUS"
                                                                                            },
                                                                                            "inputs": {
                                                                                              "A": {
                                                                                                "block": {
                                                                                                  "type": "world_get_Space_PositionProperty",
                                                                                                  "fields": {
                                                                                                    "COMPONENT": "x"
                                                                                                  },
                                                                                                  "inputs": {
                                                                                                    "ACTOR": {
                                                                                                      "block": {
                                                                                                        "type": "variables_get_Actor",
                                                                                                        "fields": {
                                                                                                          "VAR": {
                                                                                                            "id": "colBody2",
                                                                                                            "name": "body",
                                                                                                            "type": "Actor"
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              },
                                                                                              "B": {
                                                                                                "block": {
                                                                                                  "type": "world_get_Space_PositionProperty",
                                                                                                  "fields": {
                                                                                                    "COMPONENT": "x"
                                                                                                  },
                                                                                                  "inputs": {
                                                                                                    "ACTOR": {
                                                                                                      "block": {
                                                                                                        "type": "variables_get_Actor",
                                                                                                        "fields": {
                                                                                                          "VAR": {
                                                                                                            "id": "colSolid2",
                                                                                                            "name": "solid",
                                                                                                            "type": "Actor"
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "B": {
                                                                              "block": {
                                                                                "type": "math_number",
                                                                                "fields": {
                                                                                  "NUM": 0
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "B": {
                                                                        "block": {
                                                                          "type": "logic_compare",
                                                                          "fields": {
                                                                            "OP": "GT"
                                                                          },
                                                                          "inputs": {
                                                                            "A": {
                                                                              "block": {
                                                                                "type": "math_arithmetic",
                                                                                "fields": {
                                                                                  "OP": "MINUS"
                                                                                },
                                                                                "inputs": {
                                                                                  "A": {
                                                                                    "block": {
                                                                                      "type": "world_vector_component",
                                                                                      "fields": {
                                                                                        "COMPONENT": "y"
                                                                                      },
                                                                                      "inputs": {
                                                                                        "VEC": {
                                                                                          "block": {
                                                                                            "type": "variables_get_Vector",
                                                                                            "fields": {
                                                                                              "VAR": {
                                                                                                "id": "colReach2",
                                                                                                "name": "reach",
                                                                                                "type": "Vector"
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "B": {
                                                                                    "block": {
                                                                                      "type": "math_single",
                                                                                      "fields": {
                                                                                        "OP": "ABS"
                                                                                      },
                                                                                      "inputs": {
                                                                                        "NUM": {
                                                                                          "block": {
                                                                                            "type": "math_arithmetic",
                                                                                            "fields": {
                                                                                              "OP": "MINUS"
                                                                                            },
                                                                                            "inputs": {
                                                                                              "A": {
                                                                                                "block": {
                                                                                                  "type": "world_vector_component",
                                                                                                  "fields": {
                                                                                                    "COMPONENT": "y"
                                                                                                  },
                                                                                                  "inputs": {
                                                                                                    "VEC": {
                                                                                                      "block": {
                                                                                                        "type": "variables_get_Vector",
                                                                                                        "fields": {
                                                                                                          "VAR": {
                                                                                                            "id": "colWas2",
                                                                                                            "name": "was",
                                                                                                            "type": "Vector"
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              },
                                                                                              "B": {
                                                                                                "block": {
                                                                                                  "type": "world_get_Space_PositionProperty",
                                                                                                  "fields": {
                                                                                                    "COMPONENT": "y"
                                                                                                  },
                                                                                                  "inputs": {
                                                                                                    "ACTOR": {
                                                                                                      "block": {
                                                                                                        "type": "variables_get_Actor",
                                                                                                        "fields": {
                                                                                                          "VAR": {
                                                                                                            "id": "colSolid2",
                                                                                                            "name": "solid",
                                                                                                            "type": "Actor"
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "B": {
                                                                              "block": {
                                                                                "type": "math_number",
                                                                                "fields": {
                                                                                  "NUM": 0
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                "DO0": {
                                                                  "block": {
                                                                    "type": "world_comment",
                                                                    "fields": {
                                                                      "TEXT": "Put it back against the face it came in through, and stop it."
                                                                    },
                                                                    "next": {
                                                                      "block": {
                                                                        "type": "controls_if",
                                                                        "extraState": {
                                                                          "elseIfCount": 0,
                                                                          "hasElse": true
                                                                        },
                                                                        "inputs": {
                                                                          "IF0": {
                                                                            "block": {
                                                                              "type": "logic_compare",
                                                                              "fields": {
                                                                                "OP": "LTE"
                                                                              },
                                                                              "inputs": {
                                                                                "A": {
                                                                                  "block": {
                                                                                    "type": "world_vector_component",
                                                                                    "fields": {
                                                                                      "COMPONENT": "x"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "VEC": {
                                                                                        "block": {
                                                                                          "type": "variables_get_Vector",
                                                                                          "fields": {
                                                                                            "VAR": {
                                                                                              "id": "colWas2",
                                                                                              "name": "was",
                                                                                              "type": "Vector"
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "B": {
                                                                                  "block": {
                                                                                    "type": "world_get_Space_PositionProperty",
                                                                                    "fields": {
                                                                                      "COMPONENT": "x"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "ACTOR": {
                                                                                        "block": {
                                                                                          "type": "variables_get_Actor",
                                                                                          "fields": {
                                                                                            "VAR": {
                                                                                              "id": "colSolid2",
                                                                                              "name": "solid",
                                                                                              "type": "Actor"
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "DO0": {
                                                                            "block": {
                                                                              "type": "world_set_position",
                                                                              "inputs": {
                                                                                "ACTOR": {
                                                                                  "block": {
                                                                                    "type": "variables_get_Actor",
                                                                                    "fields": {
                                                                                      "VAR": {
                                                                                        "id": "colBody2",
                                                                                        "name": "body",
                                                                                        "type": "Actor"
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "X": {
                                                                                  "block": {
                                                                                    "type": "math_arithmetic",
                                                                                    "fields": {
                                                                                      "OP": "MINUS"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "world_get_Space_PositionProperty",
                                                                                          "fields": {
                                                                                            "COMPONENT": "x"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "ACTOR": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Actor",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colSolid2",
                                                                                                    "name": "solid",
                                                                                                    "type": "Actor"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "world_vector_component",
                                                                                          "fields": {
                                                                                            "COMPONENT": "x"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "VEC": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Vector",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colReach2",
                                                                                                    "name": "reach",
                                                                                                    "type": "Vector"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "Y": {
                                                                                  "block": {
                                                                                    "type": "logic_ternary",
                                                                                    "inputs": {
                                                                                      "IF": {
                                                                                        "block": {
                                                                                          "type": "logic_operation",
                                                                                          "fields": {
                                                                                            "OP": "AND"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "A": {
                                                                                              "block": {
                                                                                                "type": "logic_compare",
                                                                                                "fields": {
                                                                                                  "OP": "GT"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "math_arithmetic",
                                                                                                      "fields": {
                                                                                                        "OP": "MULTIPLY"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "A": {
                                                                                                          "block": {
                                                                                                            "type": "math_arithmetic",
                                                                                                            "fields": {
                                                                                                              "OP": "MULTIPLY"
                                                                                                            },
                                                                                                            "inputs": {
                                                                                                              "A": {
                                                                                                                "block": {
                                                                                                                  "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                  "inputs": {
                                                                                                                    "N": {
                                                                                                                      "block": {
                                                                                                                        "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                        "inputs": {
                                                                                                                          "ACTOR": {
                                                                                                                            "block": {
                                                                                                                              "type": "variables_get_Actor",
                                                                                                                              "fields": {
                                                                                                                                "VAR": {
                                                                                                                                  "id": "colSolid2",
                                                                                                                                  "name": "solid",
                                                                                                                                  "type": "Actor"
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              "B": {
                                                                                                                "block": {
                                                                                                                  "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        },
                                                                                                        "B": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Number",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colFrame2",
                                                                                                                "name": "frame",
                                                                                                                "type": "Number"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "math_number",
                                                                                                      "fields": {
                                                                                                        "NUM": 0
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "B": {
                                                                                              "block": {
                                                                                                "type": "logic_compare",
                                                                                                "fields": {
                                                                                                  "OP": "LTE"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "math_single",
                                                                                                      "fields": {
                                                                                                        "OP": "ABS"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "NUM": {
                                                                                                          "block": {
                                                                                                            "type": "math_arithmetic",
                                                                                                            "fields": {
                                                                                                              "OP": "MULTIPLY"
                                                                                                            },
                                                                                                            "inputs": {
                                                                                                              "A": {
                                                                                                                "block": {
                                                                                                                  "type": "world_vector_component",
                                                                                                                  "fields": {
                                                                                                                    "COMPONENT": "y"
                                                                                                                  },
                                                                                                                  "inputs": {
                                                                                                                    "VEC": {
                                                                                                                      "block": {
                                                                                                                        "type": "world_get_Physics_VelocityProperty",
                                                                                                                        "inputs": {
                                                                                                                          "ACTOR": {
                                                                                                                            "block": {
                                                                                                                              "type": "variables_get_Actor",
                                                                                                                              "fields": {
                                                                                                                                "VAR": {
                                                                                                                                  "id": "colBody2",
                                                                                                                                  "name": "body",
                                                                                                                                  "type": "Actor"
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              "B": {
                                                                                                                "block": {
                                                                                                                  "type": "math_arithmetic",
                                                                                                                  "fields": {
                                                                                                                    "OP": "POWER"
                                                                                                                  },
                                                                                                                  "inputs": {
                                                                                                                    "A": {
                                                                                                                      "block": {
                                                                                                                        "type": "math_arithmetic",
                                                                                                                        "fields": {
                                                                                                                          "OP": "MINUS"
                                                                                                                        },
                                                                                                                        "inputs": {
                                                                                                                          "A": {
                                                                                                                            "block": {
                                                                                                                              "type": "math_number",
                                                                                                                              "fields": {
                                                                                                                                "NUM": 1
                                                                                                                              }
                                                                                                                            }
                                                                                                                          },
                                                                                                                          "B": {
                                                                                                                            "block": {
                                                                                                                              "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                              "inputs": {
                                                                                                                                "N": {
                                                                                                                                  "block": {
                                                                                                                                    "type": "world_get_SolidBodies_DragProperty",
                                                                                                                                    "inputs": {
                                                                                                                                      "ACTOR": {
                                                                                                                                        "block": {
                                                                                                                                          "type": "variables_get_Actor",
                                                                                                                                          "fields": {
                                                                                                                                            "VAR": {
                                                                                                                                              "id": "colSolid2",
                                                                                                                                              "name": "solid",
                                                                                                                                              "type": "Actor"
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    },
                                                                                                                    "B": {
                                                                                                                      "block": {
                                                                                                                        "type": "variables_get_Number",
                                                                                                                        "fields": {
                                                                                                                          "VAR": {
                                                                                                                            "id": "colFrame2",
                                                                                                                            "name": "frame",
                                                                                                                            "type": "Number"
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "math_arithmetic",
                                                                                                      "fields": {
                                                                                                        "OP": "MULTIPLY"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "A": {
                                                                                                          "block": {
                                                                                                            "type": "math_arithmetic",
                                                                                                            "fields": {
                                                                                                              "OP": "MULTIPLY"
                                                                                                            },
                                                                                                            "inputs": {
                                                                                                              "A": {
                                                                                                                "block": {
                                                                                                                  "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                  "inputs": {
                                                                                                                    "N": {
                                                                                                                      "block": {
                                                                                                                        "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                        "inputs": {
                                                                                                                          "ACTOR": {
                                                                                                                            "block": {
                                                                                                                              "type": "variables_get_Actor",
                                                                                                                              "fields": {
                                                                                                                                "VAR": {
                                                                                                                                  "id": "colSolid2",
                                                                                                                                  "name": "solid",
                                                                                                                                  "type": "Actor"
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              "B": {
                                                                                                                "block": {
                                                                                                                  "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        },
                                                                                                        "B": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Number",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colFrame2",
                                                                                                                "name": "frame",
                                                                                                                "type": "Number"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "THEN": {
                                                                                        "block": {
                                                                                          "type": "world_vector_component",
                                                                                          "fields": {
                                                                                            "COMPONENT": "y"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "VEC": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Vector",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colWas2",
                                                                                                    "name": "was",
                                                                                                    "type": "Vector"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "ELSE": {
                                                                                        "block": {
                                                                                          "type": "world_get_Space_PositionProperty",
                                                                                          "fields": {
                                                                                            "COMPONENT": "y"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "ACTOR": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Actor",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colBody2",
                                                                                                    "name": "body",
                                                                                                    "type": "Actor"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "ELSE": {
                                                                            "block": {
                                                                              "type": "world_set_position",
                                                                              "inputs": {
                                                                                "ACTOR": {
                                                                                  "block": {
                                                                                    "type": "variables_get_Actor",
                                                                                    "fields": {
                                                                                      "VAR": {
                                                                                        "id": "colBody2",
                                                                                        "name": "body",
                                                                                        "type": "Actor"
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "X": {
                                                                                  "block": {
                                                                                    "type": "math_arithmetic",
                                                                                    "fields": {
                                                                                      "OP": "ADD"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "world_get_Space_PositionProperty",
                                                                                          "fields": {
                                                                                            "COMPONENT": "x"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "ACTOR": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Actor",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colSolid2",
                                                                                                    "name": "solid",
                                                                                                    "type": "Actor"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "world_vector_component",
                                                                                          "fields": {
                                                                                            "COMPONENT": "x"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "VEC": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Vector",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colReach2",
                                                                                                    "name": "reach",
                                                                                                    "type": "Vector"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "Y": {
                                                                                  "block": {
                                                                                    "type": "logic_ternary",
                                                                                    "inputs": {
                                                                                      "IF": {
                                                                                        "block": {
                                                                                          "type": "logic_operation",
                                                                                          "fields": {
                                                                                            "OP": "AND"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "A": {
                                                                                              "block": {
                                                                                                "type": "logic_compare",
                                                                                                "fields": {
                                                                                                  "OP": "GT"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "math_arithmetic",
                                                                                                      "fields": {
                                                                                                        "OP": "MULTIPLY"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "A": {
                                                                                                          "block": {
                                                                                                            "type": "math_arithmetic",
                                                                                                            "fields": {
                                                                                                              "OP": "MULTIPLY"
                                                                                                            },
                                                                                                            "inputs": {
                                                                                                              "A": {
                                                                                                                "block": {
                                                                                                                  "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                  "inputs": {
                                                                                                                    "N": {
                                                                                                                      "block": {
                                                                                                                        "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                        "inputs": {
                                                                                                                          "ACTOR": {
                                                                                                                            "block": {
                                                                                                                              "type": "variables_get_Actor",
                                                                                                                              "fields": {
                                                                                                                                "VAR": {
                                                                                                                                  "id": "colSolid2",
                                                                                                                                  "name": "solid",
                                                                                                                                  "type": "Actor"
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              "B": {
                                                                                                                "block": {
                                                                                                                  "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        },
                                                                                                        "B": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Number",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colFrame2",
                                                                                                                "name": "frame",
                                                                                                                "type": "Number"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "math_number",
                                                                                                      "fields": {
                                                                                                        "NUM": 0
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "B": {
                                                                                              "block": {
                                                                                                "type": "logic_compare",
                                                                                                "fields": {
                                                                                                  "OP": "LTE"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "math_single",
                                                                                                      "fields": {
                                                                                                        "OP": "ABS"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "NUM": {
                                                                                                          "block": {
                                                                                                            "type": "math_arithmetic",
                                                                                                            "fields": {
                                                                                                              "OP": "MULTIPLY"
                                                                                                            },
                                                                                                            "inputs": {
                                                                                                              "A": {
                                                                                                                "block": {
                                                                                                                  "type": "world_vector_component",
                                                                                                                  "fields": {
                                                                                                                    "COMPONENT": "y"
                                                                                                                  },
                                                                                                                  "inputs": {
                                                                                                                    "VEC": {
                                                                                                                      "block": {
                                                                                                                        "type": "world_get_Physics_VelocityProperty",
                                                                                                                        "inputs": {
                                                                                                                          "ACTOR": {
                                                                                                                            "block": {
                                                                                                                              "type": "variables_get_Actor",
                                                                                                                              "fields": {
                                                                                                                                "VAR": {
                                                                                                                                  "id": "colBody2",
                                                                                                                                  "name": "body",
                                                                                                                                  "type": "Actor"
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              "B": {
                                                                                                                "block": {
                                                                                                                  "type": "math_arithmetic",
                                                                                                                  "fields": {
                                                                                                                    "OP": "POWER"
                                                                                                                  },
                                                                                                                  "inputs": {
                                                                                                                    "A": {
                                                                                                                      "block": {
                                                                                                                        "type": "math_arithmetic",
                                                                                                                        "fields": {
                                                                                                                          "OP": "MINUS"
                                                                                                                        },
                                                                                                                        "inputs": {
                                                                                                                          "A": {
                                                                                                                            "block": {
                                                                                                                              "type": "math_number",
                                                                                                                              "fields": {
                                                                                                                                "NUM": 1
                                                                                                                              }
                                                                                                                            }
                                                                                                                          },
                                                                                                                          "B": {
                                                                                                                            "block": {
                                                                                                                              "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                              "inputs": {
                                                                                                                                "N": {
                                                                                                                                  "block": {
                                                                                                                                    "type": "world_get_SolidBodies_DragProperty",
                                                                                                                                    "inputs": {
                                                                                                                                      "ACTOR": {
                                                                                                                                        "block": {
                                                                                                                                          "type": "variables_get_Actor",
                                                                                                                                          "fields": {
                                                                                                                                            "VAR": {
                                                                                                                                              "id": "colSolid2",
                                                                                                                                              "name": "solid",
                                                                                                                                              "type": "Actor"
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    },
                                                                                                                    "B": {
                                                                                                                      "block": {
                                                                                                                        "type": "variables_get_Number",
                                                                                                                        "fields": {
                                                                                                                          "VAR": {
                                                                                                                            "id": "colFrame2",
                                                                                                                            "name": "frame",
                                                                                                                            "type": "Number"
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "math_arithmetic",
                                                                                                      "fields": {
                                                                                                        "OP": "MULTIPLY"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "A": {
                                                                                                          "block": {
                                                                                                            "type": "math_arithmetic",
                                                                                                            "fields": {
                                                                                                              "OP": "MULTIPLY"
                                                                                                            },
                                                                                                            "inputs": {
                                                                                                              "A": {
                                                                                                                "block": {
                                                                                                                  "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                  "inputs": {
                                                                                                                    "N": {
                                                                                                                      "block": {
                                                                                                                        "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                        "inputs": {
                                                                                                                          "ACTOR": {
                                                                                                                            "block": {
                                                                                                                              "type": "variables_get_Actor",
                                                                                                                              "fields": {
                                                                                                                                "VAR": {
                                                                                                                                  "id": "colSolid2",
                                                                                                                                  "name": "solid",
                                                                                                                                  "type": "Actor"
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              "B": {
                                                                                                                "block": {
                                                                                                                  "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        },
                                                                                                        "B": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Number",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colFrame2",
                                                                                                                "name": "frame",
                                                                                                                "type": "Number"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "THEN": {
                                                                                        "block": {
                                                                                          "type": "world_vector_component",
                                                                                          "fields": {
                                                                                            "COMPONENT": "y"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "VEC": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Vector",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colWas2",
                                                                                                    "name": "was",
                                                                                                    "type": "Vector"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "ELSE": {
                                                                                        "block": {
                                                                                          "type": "world_get_Space_PositionProperty",
                                                                                          "fields": {
                                                                                            "COMPONENT": "y"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "ACTOR": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Actor",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colBody2",
                                                                                                    "name": "body",
                                                                                                    "type": "Actor"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        },
                                                                        "next": {
                                                                          "block": {
                                                                            "type": "world_set_Physics_VelocityProperty",
                                                                            "inputs": {
                                                                              "ACTOR": {
                                                                                "block": {
                                                                                  "type": "variables_get_Actor",
                                                                                  "fields": {
                                                                                    "VAR": {
                                                                                      "id": "colBody2",
                                                                                      "name": "body",
                                                                                      "type": "Actor"
                                                                                    }
                                                                                  }
                                                                                }
                                                                              },
                                                                              "VALUE": {
                                                                                "block": {
                                                                                  "type": "world_vector_of",
                                                                                  "inputs": {
                                                                                    "X": {
                                                                                      "block": {
                                                                                        "type": "math_single",
                                                                                        "fields": {
                                                                                          "OP": "NEG"
                                                                                        },
                                                                                        "inputs": {
                                                                                          "NUM": {
                                                                                            "block": {
                                                                                              "type": "math_arithmetic",
                                                                                              "fields": {
                                                                                                "OP": "MULTIPLY"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "A": {
                                                                                                  "block": {
                                                                                                    "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                    "inputs": {
                                                                                                      "N": {
                                                                                                        "block": {
                                                                                                          "type": "world_get_SolidBodies_BouncinessProperty",
                                                                                                          "inputs": {
                                                                                                            "ACTOR": {
                                                                                                              "block": {
                                                                                                                "type": "variables_get_Actor",
                                                                                                                "fields": {
                                                                                                                  "VAR": {
                                                                                                                    "id": "colSolid2",
                                                                                                                    "name": "solid",
                                                                                                                    "type": "Actor"
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                },
                                                                                                "B": {
                                                                                                  "block": {
                                                                                                    "type": "world_vector_component",
                                                                                                    "fields": {
                                                                                                      "COMPONENT": "x"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "VEC": {
                                                                                                        "block": {
                                                                                                          "type": "world_get_Physics_VelocityProperty",
                                                                                                          "inputs": {
                                                                                                            "ACTOR": {
                                                                                                              "block": {
                                                                                                                "type": "variables_get_Actor",
                                                                                                                "fields": {
                                                                                                                  "VAR": {
                                                                                                                    "id": "colBody2",
                                                                                                                    "name": "body",
                                                                                                                    "type": "Actor"
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "Y": {
                                                                                      "block": {
                                                                                        "type": "world_query_SolidBodies_SlowedByQuery",
                                                                                        "inputs": {
                                                                                          "V": {
                                                                                            "block": {
                                                                                              "type": "math_arithmetic",
                                                                                              "fields": {
                                                                                                "OP": "MULTIPLY"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "A": {
                                                                                                  "block": {
                                                                                                    "type": "world_vector_component",
                                                                                                    "fields": {
                                                                                                      "COMPONENT": "y"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "VEC": {
                                                                                                        "block": {
                                                                                                          "type": "world_get_Physics_VelocityProperty",
                                                                                                          "inputs": {
                                                                                                            "ACTOR": {
                                                                                                              "block": {
                                                                                                                "type": "variables_get_Actor",
                                                                                                                "fields": {
                                                                                                                  "VAR": {
                                                                                                                    "id": "colBody2",
                                                                                                                    "name": "body",
                                                                                                                    "type": "Actor"
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                },
                                                                                                "B": {
                                                                                                  "block": {
                                                                                                    "type": "math_arithmetic",
                                                                                                    "fields": {
                                                                                                      "OP": "POWER"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "A": {
                                                                                                        "block": {
                                                                                                          "type": "math_arithmetic",
                                                                                                          "fields": {
                                                                                                            "OP": "MINUS"
                                                                                                          },
                                                                                                          "inputs": {
                                                                                                            "A": {
                                                                                                              "block": {
                                                                                                                "type": "math_number",
                                                                                                                "fields": {
                                                                                                                  "NUM": 1
                                                                                                                }
                                                                                                              }
                                                                                                            },
                                                                                                            "B": {
                                                                                                              "block": {
                                                                                                                "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                "inputs": {
                                                                                                                  "N": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_get_SolidBodies_DragProperty",
                                                                                                                      "inputs": {
                                                                                                                        "ACTOR": {
                                                                                                                          "block": {
                                                                                                                            "type": "variables_get_Actor",
                                                                                                                            "fields": {
                                                                                                                              "VAR": {
                                                                                                                                "id": "colSolid2",
                                                                                                                                "name": "solid",
                                                                                                                                "type": "Actor"
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      },
                                                                                                      "B": {
                                                                                                        "block": {
                                                                                                          "type": "variables_get_Number",
                                                                                                          "fields": {
                                                                                                            "VAR": {
                                                                                                              "id": "colFrame2",
                                                                                                              "name": "frame",
                                                                                                              "type": "Number"
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "DROP": {
                                                                                            "block": {
                                                                                              "type": "math_arithmetic",
                                                                                              "fields": {
                                                                                                "OP": "MULTIPLY"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "A": {
                                                                                                  "block": {
                                                                                                    "type": "math_arithmetic",
                                                                                                    "fields": {
                                                                                                      "OP": "MULTIPLY"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "A": {
                                                                                                        "block": {
                                                                                                          "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                          "inputs": {
                                                                                                            "N": {
                                                                                                              "block": {
                                                                                                                "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                "inputs": {
                                                                                                                  "ACTOR": {
                                                                                                                    "block": {
                                                                                                                      "type": "variables_get_Actor",
                                                                                                                      "fields": {
                                                                                                                        "VAR": {
                                                                                                                          "id": "colSolid2",
                                                                                                                          "name": "solid",
                                                                                                                          "type": "Actor"
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      },
                                                                                                      "B": {
                                                                                                        "block": {
                                                                                                          "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                },
                                                                                                "B": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Number",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colFrame2",
                                                                                                        "name": "frame",
                                                                                                        "type": "Number"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "next": {
                              "block": {
                                "type": "world_rule_block",
                                "fields": {
                                  "RETURNS": "none",
                                  "DESCRIPTION": "Pushes an actor out of a solid one up or down, if it came in from above or below."
                                },
                                "extraState": {
                                  "parts": [
                                    {
                                      "kind": "label",
                                      "text": "push"
                                    },
                                    {
                                      "kind": "param",
                                      "type": "actor",
                                      "var": "colBody2"
                                    },
                                    {
                                      "kind": "label",
                                      "text": "out of"
                                    },
                                    {
                                      "kind": "param",
                                      "type": "actor",
                                      "var": "colSolid2"
                                    },
                                    {
                                      "kind": "label",
                                      "text": "up or down, over"
                                    },
                                    {
                                      "kind": "param",
                                      "type": "number",
                                      "var": "colFrame2"
                                    }
                                  ]
                                },
                                "inputs": {
                                  "DO": {
                                    "block": {
                                      "type": "world_comment",
                                      "fields": {
                                        "TEXT": "How far apart the two middles must be for the boxes to just touch."
                                      },
                                      "next": {
                                        "block": {
                                          "type": "variables_set_Vector",
                                          "fields": {
                                            "VAR": {
                                              "id": "colReach2",
                                              "name": "reach",
                                              "type": "Vector"
                                            }
                                          },
                                          "inputs": {
                                            "VALUE": {
                                              "block": {
                                                "type": "world_vector_math",
                                                "fields": {
                                                  "OP": "DIVIDE"
                                                },
                                                "inputs": {
                                                  "A": {
                                                    "block": {
                                                      "type": "world_vector_math",
                                                      "fields": {
                                                        "OP": "ADD"
                                                      },
                                                      "inputs": {
                                                        "A": {
                                                          "block": {
                                                            "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                            "inputs": {
                                                              "SIZEACTOR": {
                                                                "block": {
                                                                  "type": "variables_get_Actor",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "colBody2",
                                                                      "name": "body",
                                                                      "type": "Actor"
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "B": {
                                                          "block": {
                                                            "type": "world_query_Collisions_CollisionSizeOfQuery",
                                                            "inputs": {
                                                              "SIZEACTOR": {
                                                                "block": {
                                                                  "type": "variables_get_Actor",
                                                                  "fields": {
                                                                    "VAR": {
                                                                      "id": "colSolid2",
                                                                      "name": "solid",
                                                                      "type": "Actor"
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "B": {
                                                    "block": {
                                                      "type": "math_number",
                                                      "fields": {
                                                        "NUM": 2
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "next": {
                                            "block": {
                                              "type": "world_comment",
                                              "fields": {
                                                "TEXT": "Where this actor was before it moved this frame."
                                              },
                                              "next": {
                                                "block": {
                                                  "type": "variables_set_Vector",
                                                  "fields": {
                                                    "VAR": {
                                                      "id": "colWas2",
                                                      "name": "was",
                                                      "type": "Vector"
                                                    }
                                                  },
                                                  "inputs": {
                                                    "VALUE": {
                                                      "block": {
                                                        "type": "world_query_Physics_PositionBeforeQuery",
                                                        "inputs": {
                                                          "SUBJECT": {
                                                            "block": {
                                                              "type": "variables_get_Actor",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "colBody2",
                                                                  "name": "body",
                                                                  "type": "Actor"
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "SECONDS": {
                                                            "block": {
                                                              "type": "variables_get_Number",
                                                              "fields": {
                                                                "VAR": {
                                                                  "id": "colFrame2",
                                                                  "name": "frame",
                                                                  "type": "Number"
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "next": {
                                                    "block": {
                                                      "type": "world_comment",
                                                      "fields": {
                                                        "TEXT": "Only push up or down if it overlaps sideways NOW — the sideways pass"
                                                      },
                                                      "next": {
                                                        "block": {
                                                          "type": "world_comment",
                                                          "fields": {
                                                            "TEXT": "has already run, so a body it pushed clear of a wall is clear here"
                                                          },
                                                          "next": {
                                                            "block": {
                                                              "type": "world_comment",
                                                              "fields": {
                                                                "TEXT": "and keeps the speed it was climbing with."
                                                              },
                                                              "next": {
                                                                "block": {
                                                                  "type": "controls_if",
                                                                  "inputs": {
                                                                    "IF0": {
                                                                      "block": {
                                                                        "type": "logic_operation",
                                                                        "fields": {
                                                                          "OP": "AND"
                                                                        },
                                                                        "inputs": {
                                                                          "A": {
                                                                            "block": {
                                                                              "type": "logic_compare",
                                                                              "fields": {
                                                                                "OP": "GT"
                                                                              },
                                                                              "inputs": {
                                                                                "A": {
                                                                                  "block": {
                                                                                    "type": "math_arithmetic",
                                                                                    "fields": {
                                                                                      "OP": "MINUS"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "world_vector_component",
                                                                                          "fields": {
                                                                                            "COMPONENT": "y"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "VEC": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Vector",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colReach2",
                                                                                                    "name": "reach",
                                                                                                    "type": "Vector"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "math_single",
                                                                                          "fields": {
                                                                                            "OP": "ABS"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "NUM": {
                                                                                              "block": {
                                                                                                "type": "math_arithmetic",
                                                                                                "fields": {
                                                                                                  "OP": "MINUS"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Space_PositionProperty",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "y"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colBody2",
                                                                                                                "name": "body",
                                                                                                                "type": "Actor"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Space_PositionProperty",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "y"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colSolid2",
                                                                                                                "name": "solid",
                                                                                                                "type": "Actor"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "B": {
                                                                                  "block": {
                                                                                    "type": "math_number",
                                                                                    "fields": {
                                                                                      "NUM": 0
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "B": {
                                                                            "block": {
                                                                              "type": "logic_compare",
                                                                              "fields": {
                                                                                "OP": "GT"
                                                                              },
                                                                              "inputs": {
                                                                                "A": {
                                                                                  "block": {
                                                                                    "type": "math_arithmetic",
                                                                                    "fields": {
                                                                                      "OP": "MINUS"
                                                                                    },
                                                                                    "inputs": {
                                                                                      "A": {
                                                                                        "block": {
                                                                                          "type": "world_vector_component",
                                                                                          "fields": {
                                                                                            "COMPONENT": "x"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "VEC": {
                                                                                              "block": {
                                                                                                "type": "variables_get_Vector",
                                                                                                "fields": {
                                                                                                  "VAR": {
                                                                                                    "id": "colReach2",
                                                                                                    "name": "reach",
                                                                                                    "type": "Vector"
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "B": {
                                                                                        "block": {
                                                                                          "type": "math_single",
                                                                                          "fields": {
                                                                                            "OP": "ABS"
                                                                                          },
                                                                                          "inputs": {
                                                                                            "NUM": {
                                                                                              "block": {
                                                                                                "type": "math_arithmetic",
                                                                                                "fields": {
                                                                                                  "OP": "MINUS"
                                                                                                },
                                                                                                "inputs": {
                                                                                                  "A": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Space_PositionProperty",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "x"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colBody2",
                                                                                                                "name": "body",
                                                                                                                "type": "Actor"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "B": {
                                                                                                    "block": {
                                                                                                      "type": "world_get_Space_PositionProperty",
                                                                                                      "fields": {
                                                                                                        "COMPONENT": "x"
                                                                                                      },
                                                                                                      "inputs": {
                                                                                                        "ACTOR": {
                                                                                                          "block": {
                                                                                                            "type": "variables_get_Actor",
                                                                                                            "fields": {
                                                                                                              "VAR": {
                                                                                                                "id": "colSolid2",
                                                                                                                "name": "solid",
                                                                                                                "type": "Actor"
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "B": {
                                                                                  "block": {
                                                                                    "type": "math_number",
                                                                                    "fields": {
                                                                                      "NUM": 0
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "DO0": {
                                                                      "block": {
                                                                        "type": "world_comment",
                                                                        "fields": {
                                                                          "TEXT": "Put it back against the face it came in through, and stop it."
                                                                        },
                                                                        "next": {
                                                                          "block": {
                                                                            "type": "controls_if",
                                                                            "extraState": {
                                                                              "elseIfCount": 0,
                                                                              "hasElse": true
                                                                            },
                                                                            "inputs": {
                                                                              "IF0": {
                                                                                "block": {
                                                                                  "type": "logic_compare",
                                                                                  "fields": {
                                                                                    "OP": "LTE"
                                                                                  },
                                                                                  "inputs": {
                                                                                    "A": {
                                                                                      "block": {
                                                                                        "type": "world_vector_component",
                                                                                        "fields": {
                                                                                          "COMPONENT": "y"
                                                                                        },
                                                                                        "inputs": {
                                                                                          "VEC": {
                                                                                            "block": {
                                                                                              "type": "variables_get_Vector",
                                                                                              "fields": {
                                                                                                "VAR": {
                                                                                                  "id": "colWas2",
                                                                                                  "name": "was",
                                                                                                  "type": "Vector"
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "B": {
                                                                                      "block": {
                                                                                        "type": "world_get_Space_PositionProperty",
                                                                                        "fields": {
                                                                                          "COMPONENT": "y"
                                                                                        },
                                                                                        "inputs": {
                                                                                          "ACTOR": {
                                                                                            "block": {
                                                                                              "type": "variables_get_Actor",
                                                                                              "fields": {
                                                                                                "VAR": {
                                                                                                  "id": "colSolid2",
                                                                                                  "name": "solid",
                                                                                                  "type": "Actor"
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              },
                                                                              "DO0": {
                                                                                "block": {
                                                                                  "type": "world_set_position",
                                                                                  "inputs": {
                                                                                    "ACTOR": {
                                                                                      "block": {
                                                                                        "type": "variables_get_Actor",
                                                                                        "fields": {
                                                                                          "VAR": {
                                                                                            "id": "colBody2",
                                                                                            "name": "body",
                                                                                            "type": "Actor"
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "X": {
                                                                                      "block": {
                                                                                        "type": "logic_ternary",
                                                                                        "inputs": {
                                                                                          "IF": {
                                                                                            "block": {
                                                                                              "type": "logic_operation",
                                                                                              "fields": {
                                                                                                "OP": "AND"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "A": {
                                                                                                  "block": {
                                                                                                    "type": "logic_compare",
                                                                                                    "fields": {
                                                                                                      "OP": "GT"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "A": {
                                                                                                        "block": {
                                                                                                          "type": "math_arithmetic",
                                                                                                          "fields": {
                                                                                                            "OP": "MULTIPLY"
                                                                                                          },
                                                                                                          "inputs": {
                                                                                                            "A": {
                                                                                                              "block": {
                                                                                                                "type": "math_arithmetic",
                                                                                                                "fields": {
                                                                                                                  "OP": "MULTIPLY"
                                                                                                                },
                                                                                                                "inputs": {
                                                                                                                  "A": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                      "inputs": {
                                                                                                                        "N": {
                                                                                                                          "block": {
                                                                                                                            "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                            "inputs": {
                                                                                                                              "ACTOR": {
                                                                                                                                "block": {
                                                                                                                                  "type": "variables_get_Actor",
                                                                                                                                  "fields": {
                                                                                                                                    "VAR": {
                                                                                                                                      "id": "colSolid2",
                                                                                                                                      "name": "solid",
                                                                                                                                      "type": "Actor"
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  },
                                                                                                                  "B": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            },
                                                                                                            "B": {
                                                                                                              "block": {
                                                                                                                "type": "variables_get_Number",
                                                                                                                "fields": {
                                                                                                                  "VAR": {
                                                                                                                    "id": "colFrame2",
                                                                                                                    "name": "frame",
                                                                                                                    "type": "Number"
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      },
                                                                                                      "B": {
                                                                                                        "block": {
                                                                                                          "type": "math_number",
                                                                                                          "fields": {
                                                                                                            "NUM": 0
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                },
                                                                                                "B": {
                                                                                                  "block": {
                                                                                                    "type": "logic_compare",
                                                                                                    "fields": {
                                                                                                      "OP": "LTE"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "A": {
                                                                                                        "block": {
                                                                                                          "type": "math_single",
                                                                                                          "fields": {
                                                                                                            "OP": "ABS"
                                                                                                          },
                                                                                                          "inputs": {
                                                                                                            "NUM": {
                                                                                                              "block": {
                                                                                                                "type": "math_arithmetic",
                                                                                                                "fields": {
                                                                                                                  "OP": "MULTIPLY"
                                                                                                                },
                                                                                                                "inputs": {
                                                                                                                  "A": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_vector_component",
                                                                                                                      "fields": {
                                                                                                                        "COMPONENT": "x"
                                                                                                                      },
                                                                                                                      "inputs": {
                                                                                                                        "VEC": {
                                                                                                                          "block": {
                                                                                                                            "type": "world_get_Physics_VelocityProperty",
                                                                                                                            "inputs": {
                                                                                                                              "ACTOR": {
                                                                                                                                "block": {
                                                                                                                                  "type": "variables_get_Actor",
                                                                                                                                  "fields": {
                                                                                                                                    "VAR": {
                                                                                                                                      "id": "colBody2",
                                                                                                                                      "name": "body",
                                                                                                                                      "type": "Actor"
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  },
                                                                                                                  "B": {
                                                                                                                    "block": {
                                                                                                                      "type": "math_arithmetic",
                                                                                                                      "fields": {
                                                                                                                        "OP": "POWER"
                                                                                                                      },
                                                                                                                      "inputs": {
                                                                                                                        "A": {
                                                                                                                          "block": {
                                                                                                                            "type": "math_arithmetic",
                                                                                                                            "fields": {
                                                                                                                              "OP": "MINUS"
                                                                                                                            },
                                                                                                                            "inputs": {
                                                                                                                              "A": {
                                                                                                                                "block": {
                                                                                                                                  "type": "math_number",
                                                                                                                                  "fields": {
                                                                                                                                    "NUM": 1
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              },
                                                                                                                              "B": {
                                                                                                                                "block": {
                                                                                                                                  "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                                  "inputs": {
                                                                                                                                    "N": {
                                                                                                                                      "block": {
                                                                                                                                        "type": "world_get_SolidBodies_DragProperty",
                                                                                                                                        "inputs": {
                                                                                                                                          "ACTOR": {
                                                                                                                                            "block": {
                                                                                                                                              "type": "variables_get_Actor",
                                                                                                                                              "fields": {
                                                                                                                                                "VAR": {
                                                                                                                                                  "id": "colSolid2",
                                                                                                                                                  "name": "solid",
                                                                                                                                                  "type": "Actor"
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        },
                                                                                                                        "B": {
                                                                                                                          "block": {
                                                                                                                            "type": "variables_get_Number",
                                                                                                                            "fields": {
                                                                                                                              "VAR": {
                                                                                                                                "id": "colFrame2",
                                                                                                                                "name": "frame",
                                                                                                                                "type": "Number"
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      },
                                                                                                      "B": {
                                                                                                        "block": {
                                                                                                          "type": "math_arithmetic",
                                                                                                          "fields": {
                                                                                                            "OP": "MULTIPLY"
                                                                                                          },
                                                                                                          "inputs": {
                                                                                                            "A": {
                                                                                                              "block": {
                                                                                                                "type": "math_arithmetic",
                                                                                                                "fields": {
                                                                                                                  "OP": "MULTIPLY"
                                                                                                                },
                                                                                                                "inputs": {
                                                                                                                  "A": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                      "inputs": {
                                                                                                                        "N": {
                                                                                                                          "block": {
                                                                                                                            "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                            "inputs": {
                                                                                                                              "ACTOR": {
                                                                                                                                "block": {
                                                                                                                                  "type": "variables_get_Actor",
                                                                                                                                  "fields": {
                                                                                                                                    "VAR": {
                                                                                                                                      "id": "colSolid2",
                                                                                                                                      "name": "solid",
                                                                                                                                      "type": "Actor"
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  },
                                                                                                                  "B": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            },
                                                                                                            "B": {
                                                                                                              "block": {
                                                                                                                "type": "variables_get_Number",
                                                                                                                "fields": {
                                                                                                                  "VAR": {
                                                                                                                    "id": "colFrame2",
                                                                                                                    "name": "frame",
                                                                                                                    "type": "Number"
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "THEN": {
                                                                                            "block": {
                                                                                              "type": "world_vector_component",
                                                                                              "fields": {
                                                                                                "COMPONENT": "x"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "VEC": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Vector",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colWas2",
                                                                                                        "name": "was",
                                                                                                        "type": "Vector"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "ELSE": {
                                                                                            "block": {
                                                                                              "type": "world_get_Space_PositionProperty",
                                                                                              "fields": {
                                                                                                "COMPONENT": "x"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "ACTOR": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Actor",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colBody2",
                                                                                                        "name": "body",
                                                                                                        "type": "Actor"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "Y": {
                                                                                      "block": {
                                                                                        "type": "math_arithmetic",
                                                                                        "fields": {
                                                                                          "OP": "MINUS"
                                                                                        },
                                                                                        "inputs": {
                                                                                          "A": {
                                                                                            "block": {
                                                                                              "type": "world_get_Space_PositionProperty",
                                                                                              "fields": {
                                                                                                "COMPONENT": "y"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "ACTOR": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Actor",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colSolid2",
                                                                                                        "name": "solid",
                                                                                                        "type": "Actor"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "B": {
                                                                                            "block": {
                                                                                              "type": "world_vector_component",
                                                                                              "fields": {
                                                                                                "COMPONENT": "y"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "VEC": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Vector",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colReach2",
                                                                                                        "name": "reach",
                                                                                                        "type": "Vector"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              },
                                                                              "ELSE": {
                                                                                "block": {
                                                                                  "type": "world_set_position",
                                                                                  "inputs": {
                                                                                    "ACTOR": {
                                                                                      "block": {
                                                                                        "type": "variables_get_Actor",
                                                                                        "fields": {
                                                                                          "VAR": {
                                                                                            "id": "colBody2",
                                                                                            "name": "body",
                                                                                            "type": "Actor"
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "X": {
                                                                                      "block": {
                                                                                        "type": "logic_ternary",
                                                                                        "inputs": {
                                                                                          "IF": {
                                                                                            "block": {
                                                                                              "type": "logic_operation",
                                                                                              "fields": {
                                                                                                "OP": "AND"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "A": {
                                                                                                  "block": {
                                                                                                    "type": "logic_compare",
                                                                                                    "fields": {
                                                                                                      "OP": "GT"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "A": {
                                                                                                        "block": {
                                                                                                          "type": "math_arithmetic",
                                                                                                          "fields": {
                                                                                                            "OP": "MULTIPLY"
                                                                                                          },
                                                                                                          "inputs": {
                                                                                                            "A": {
                                                                                                              "block": {
                                                                                                                "type": "math_arithmetic",
                                                                                                                "fields": {
                                                                                                                  "OP": "MULTIPLY"
                                                                                                                },
                                                                                                                "inputs": {
                                                                                                                  "A": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                      "inputs": {
                                                                                                                        "N": {
                                                                                                                          "block": {
                                                                                                                            "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                            "inputs": {
                                                                                                                              "ACTOR": {
                                                                                                                                "block": {
                                                                                                                                  "type": "variables_get_Actor",
                                                                                                                                  "fields": {
                                                                                                                                    "VAR": {
                                                                                                                                      "id": "colSolid2",
                                                                                                                                      "name": "solid",
                                                                                                                                      "type": "Actor"
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  },
                                                                                                                  "B": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            },
                                                                                                            "B": {
                                                                                                              "block": {
                                                                                                                "type": "variables_get_Number",
                                                                                                                "fields": {
                                                                                                                  "VAR": {
                                                                                                                    "id": "colFrame2",
                                                                                                                    "name": "frame",
                                                                                                                    "type": "Number"
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      },
                                                                                                      "B": {
                                                                                                        "block": {
                                                                                                          "type": "math_number",
                                                                                                          "fields": {
                                                                                                            "NUM": 0
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                },
                                                                                                "B": {
                                                                                                  "block": {
                                                                                                    "type": "logic_compare",
                                                                                                    "fields": {
                                                                                                      "OP": "LTE"
                                                                                                    },
                                                                                                    "inputs": {
                                                                                                      "A": {
                                                                                                        "block": {
                                                                                                          "type": "math_single",
                                                                                                          "fields": {
                                                                                                            "OP": "ABS"
                                                                                                          },
                                                                                                          "inputs": {
                                                                                                            "NUM": {
                                                                                                              "block": {
                                                                                                                "type": "math_arithmetic",
                                                                                                                "fields": {
                                                                                                                  "OP": "MULTIPLY"
                                                                                                                },
                                                                                                                "inputs": {
                                                                                                                  "A": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_vector_component",
                                                                                                                      "fields": {
                                                                                                                        "COMPONENT": "x"
                                                                                                                      },
                                                                                                                      "inputs": {
                                                                                                                        "VEC": {
                                                                                                                          "block": {
                                                                                                                            "type": "world_get_Physics_VelocityProperty",
                                                                                                                            "inputs": {
                                                                                                                              "ACTOR": {
                                                                                                                                "block": {
                                                                                                                                  "type": "variables_get_Actor",
                                                                                                                                  "fields": {
                                                                                                                                    "VAR": {
                                                                                                                                      "id": "colBody2",
                                                                                                                                      "name": "body",
                                                                                                                                      "type": "Actor"
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  },
                                                                                                                  "B": {
                                                                                                                    "block": {
                                                                                                                      "type": "math_arithmetic",
                                                                                                                      "fields": {
                                                                                                                        "OP": "POWER"
                                                                                                                      },
                                                                                                                      "inputs": {
                                                                                                                        "A": {
                                                                                                                          "block": {
                                                                                                                            "type": "math_arithmetic",
                                                                                                                            "fields": {
                                                                                                                              "OP": "MINUS"
                                                                                                                            },
                                                                                                                            "inputs": {
                                                                                                                              "A": {
                                                                                                                                "block": {
                                                                                                                                  "type": "math_number",
                                                                                                                                  "fields": {
                                                                                                                                    "NUM": 1
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              },
                                                                                                                              "B": {
                                                                                                                                "block": {
                                                                                                                                  "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                                  "inputs": {
                                                                                                                                    "N": {
                                                                                                                                      "block": {
                                                                                                                                        "type": "world_get_SolidBodies_DragProperty",
                                                                                                                                        "inputs": {
                                                                                                                                          "ACTOR": {
                                                                                                                                            "block": {
                                                                                                                                              "type": "variables_get_Actor",
                                                                                                                                              "fields": {
                                                                                                                                                "VAR": {
                                                                                                                                                  "id": "colSolid2",
                                                                                                                                                  "name": "solid",
                                                                                                                                                  "type": "Actor"
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        },
                                                                                                                        "B": {
                                                                                                                          "block": {
                                                                                                                            "type": "variables_get_Number",
                                                                                                                            "fields": {
                                                                                                                              "VAR": {
                                                                                                                                "id": "colFrame2",
                                                                                                                                "name": "frame",
                                                                                                                                "type": "Number"
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      },
                                                                                                      "B": {
                                                                                                        "block": {
                                                                                                          "type": "math_arithmetic",
                                                                                                          "fields": {
                                                                                                            "OP": "MULTIPLY"
                                                                                                          },
                                                                                                          "inputs": {
                                                                                                            "A": {
                                                                                                              "block": {
                                                                                                                "type": "math_arithmetic",
                                                                                                                "fields": {
                                                                                                                  "OP": "MULTIPLY"
                                                                                                                },
                                                                                                                "inputs": {
                                                                                                                  "A": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                      "inputs": {
                                                                                                                        "N": {
                                                                                                                          "block": {
                                                                                                                            "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                            "inputs": {
                                                                                                                              "ACTOR": {
                                                                                                                                "block": {
                                                                                                                                  "type": "variables_get_Actor",
                                                                                                                                  "fields": {
                                                                                                                                    "VAR": {
                                                                                                                                      "id": "colSolid2",
                                                                                                                                      "name": "solid",
                                                                                                                                      "type": "Actor"
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  },
                                                                                                                  "B": {
                                                                                                                    "block": {
                                                                                                                      "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            },
                                                                                                            "B": {
                                                                                                              "block": {
                                                                                                                "type": "variables_get_Number",
                                                                                                                "fields": {
                                                                                                                  "VAR": {
                                                                                                                    "id": "colFrame2",
                                                                                                                    "name": "frame",
                                                                                                                    "type": "Number"
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "THEN": {
                                                                                            "block": {
                                                                                              "type": "world_vector_component",
                                                                                              "fields": {
                                                                                                "COMPONENT": "x"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "VEC": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Vector",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colWas2",
                                                                                                        "name": "was",
                                                                                                        "type": "Vector"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "ELSE": {
                                                                                            "block": {
                                                                                              "type": "world_get_Space_PositionProperty",
                                                                                              "fields": {
                                                                                                "COMPONENT": "x"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "ACTOR": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Actor",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colBody2",
                                                                                                        "name": "body",
                                                                                                        "type": "Actor"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "Y": {
                                                                                      "block": {
                                                                                        "type": "math_arithmetic",
                                                                                        "fields": {
                                                                                          "OP": "ADD"
                                                                                        },
                                                                                        "inputs": {
                                                                                          "A": {
                                                                                            "block": {
                                                                                              "type": "world_get_Space_PositionProperty",
                                                                                              "fields": {
                                                                                                "COMPONENT": "y"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "ACTOR": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Actor",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colSolid2",
                                                                                                        "name": "solid",
                                                                                                        "type": "Actor"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "B": {
                                                                                            "block": {
                                                                                              "type": "world_vector_component",
                                                                                              "fields": {
                                                                                                "COMPONENT": "y"
                                                                                              },
                                                                                              "inputs": {
                                                                                                "VEC": {
                                                                                                  "block": {
                                                                                                    "type": "variables_get_Vector",
                                                                                                    "fields": {
                                                                                                      "VAR": {
                                                                                                        "id": "colReach2",
                                                                                                        "name": "reach",
                                                                                                        "type": "Vector"
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "next": {
                                                                              "block": {
                                                                                "type": "world_set_Physics_VelocityProperty",
                                                                                "inputs": {
                                                                                  "ACTOR": {
                                                                                    "block": {
                                                                                      "type": "variables_get_Actor",
                                                                                      "fields": {
                                                                                        "VAR": {
                                                                                          "id": "colBody2",
                                                                                          "name": "body",
                                                                                          "type": "Actor"
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "VALUE": {
                                                                                    "block": {
                                                                                      "type": "world_vector_of",
                                                                                      "inputs": {
                                                                                        "X": {
                                                                                          "block": {
                                                                                            "type": "world_query_SolidBodies_SlowedByQuery",
                                                                                            "inputs": {
                                                                                              "V": {
                                                                                                "block": {
                                                                                                  "type": "math_arithmetic",
                                                                                                  "fields": {
                                                                                                    "OP": "MULTIPLY"
                                                                                                  },
                                                                                                  "inputs": {
                                                                                                    "A": {
                                                                                                      "block": {
                                                                                                        "type": "world_vector_component",
                                                                                                        "fields": {
                                                                                                          "COMPONENT": "x"
                                                                                                        },
                                                                                                        "inputs": {
                                                                                                          "VEC": {
                                                                                                            "block": {
                                                                                                              "type": "world_get_Physics_VelocityProperty",
                                                                                                              "inputs": {
                                                                                                                "ACTOR": {
                                                                                                                  "block": {
                                                                                                                    "type": "variables_get_Actor",
                                                                                                                    "fields": {
                                                                                                                      "VAR": {
                                                                                                                        "id": "colBody2",
                                                                                                                        "name": "body",
                                                                                                                        "type": "Actor"
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    },
                                                                                                    "B": {
                                                                                                      "block": {
                                                                                                        "type": "math_arithmetic",
                                                                                                        "fields": {
                                                                                                          "OP": "POWER"
                                                                                                        },
                                                                                                        "inputs": {
                                                                                                          "A": {
                                                                                                            "block": {
                                                                                                              "type": "math_arithmetic",
                                                                                                              "fields": {
                                                                                                                "OP": "MINUS"
                                                                                                              },
                                                                                                              "inputs": {
                                                                                                                "A": {
                                                                                                                  "block": {
                                                                                                                    "type": "math_number",
                                                                                                                    "fields": {
                                                                                                                      "NUM": 1
                                                                                                                    }
                                                                                                                  }
                                                                                                                },
                                                                                                                "B": {
                                                                                                                  "block": {
                                                                                                                    "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                                    "inputs": {
                                                                                                                      "N": {
                                                                                                                        "block": {
                                                                                                                          "type": "world_get_SolidBodies_DragProperty",
                                                                                                                          "inputs": {
                                                                                                                            "ACTOR": {
                                                                                                                              "block": {
                                                                                                                                "type": "variables_get_Actor",
                                                                                                                                "fields": {
                                                                                                                                  "VAR": {
                                                                                                                                    "id": "colSolid2",
                                                                                                                                    "name": "solid",
                                                                                                                                    "type": "Actor"
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          },
                                                                                                          "B": {
                                                                                                            "block": {
                                                                                                              "type": "variables_get_Number",
                                                                                                              "fields": {
                                                                                                                "VAR": {
                                                                                                                  "id": "colFrame2",
                                                                                                                  "name": "frame",
                                                                                                                  "type": "Number"
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              },
                                                                                              "DROP": {
                                                                                                "block": {
                                                                                                  "type": "math_arithmetic",
                                                                                                  "fields": {
                                                                                                    "OP": "MULTIPLY"
                                                                                                  },
                                                                                                  "inputs": {
                                                                                                    "A": {
                                                                                                      "block": {
                                                                                                        "type": "math_arithmetic",
                                                                                                        "fields": {
                                                                                                          "OP": "MULTIPLY"
                                                                                                        },
                                                                                                        "inputs": {
                                                                                                          "A": {
                                                                                                            "block": {
                                                                                                              "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                              "inputs": {
                                                                                                                "N": {
                                                                                                                  "block": {
                                                                                                                    "type": "world_get_SolidBodies_FrictionProperty",
                                                                                                                    "inputs": {
                                                                                                                      "ACTOR": {
                                                                                                                        "block": {
                                                                                                                          "type": "variables_get_Actor",
                                                                                                                          "fields": {
                                                                                                                            "VAR": {
                                                                                                                              "id": "colSolid2",
                                                                                                                              "name": "solid",
                                                                                                                              "type": "Actor"
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          },
                                                                                                          "B": {
                                                                                                            "block": {
                                                                                                              "type": "world_get_SolidBodies_GripStrengthProperty"
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    },
                                                                                                    "B": {
                                                                                                      "block": {
                                                                                                        "type": "variables_get_Number",
                                                                                                        "fields": {
                                                                                                          "VAR": {
                                                                                                            "id": "colFrame2",
                                                                                                            "name": "frame",
                                                                                                            "type": "Number"
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        "Y": {
                                                                                          "block": {
                                                                                            "type": "math_single",
                                                                                            "fields": {
                                                                                              "OP": "NEG"
                                                                                            },
                                                                                            "inputs": {
                                                                                              "NUM": {
                                                                                                "block": {
                                                                                                  "type": "math_arithmetic",
                                                                                                  "fields": {
                                                                                                    "OP": "MULTIPLY"
                                                                                                  },
                                                                                                  "inputs": {
                                                                                                    "A": {
                                                                                                      "block": {
                                                                                                        "type": "world_query_SolidBodies_KeptBetween0And1Query",
                                                                                                        "inputs": {
                                                                                                          "N": {
                                                                                                            "block": {
                                                                                                              "type": "world_get_SolidBodies_BouncinessProperty",
                                                                                                              "inputs": {
                                                                                                                "ACTOR": {
                                                                                                                  "block": {
                                                                                                                    "type": "variables_get_Actor",
                                                                                                                    "fields": {
                                                                                                                      "VAR": {
                                                                                                                        "id": "colSolid2",
                                                                                                                        "name": "solid",
                                                                                                                        "type": "Actor"
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    },
                                                                                                    "B": {
                                                                                                      "block": {
                                                                                                        "type": "world_vector_component",
                                                                                                        "fields": {
                                                                                                          "COMPONENT": "y"
                                                                                                        },
                                                                                                        "inputs": {
                                                                                                          "VEC": {
                                                                                                            "block": {
                                                                                                              "type": "world_get_Physics_VelocityProperty",
                                                                                                              "inputs": {
                                                                                                                "ACTOR": {
                                                                                                                  "block": {
                                                                                                                    "type": "variables_get_Actor",
                                                                                                                    "fields": {
                                                                                                                      "VAR": {
                                                                                                                        "id": "colBody2",
                                                                                                                        "name": "body",
                                                                                                                        "type": "Actor"
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "next": {
                                  "block": {
                                    "type": "world_rule_property",
                                    "fields": {
                                      "TYPE": "number",
                                      "ACCESS": "writable",
                                      "NAME": "grip strength",
                                      "DEFAULT": "9"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_trait",
        "fields": {
          "NAME": "Solid"
        },
        "x": 20,
        "y": 2680,
        "next": {
          "block": {
            "type": "world_use_trait",
            "fields": {
              "TRAIT": "Collisions#CanCollideTrait"
            },
            "next": {
              "block": {
                "type": "world_rule_property",
                "fields": {
                  "TYPE": "number",
                  "ACCESS": "writable",
                  "NAME": "bounciness",
                  "DEFAULT": "0"
                },
                "next": {
                  "block": {
                    "type": "world_rule_property",
                    "fields": {
                      "TYPE": "number",
                      "ACCESS": "writable",
                      "NAME": "friction",
                      "DEFAULT": "0"
                    },
                    "next": {
                      "block": {
                        "type": "world_rule_property",
                        "fields": {
                          "TYPE": "number",
                          "ACCESS": "writable",
                          "NAME": "drag",
                          "DEFAULT": "0"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "type": "world_rule_step_after",
        "fields": {
          "NAME": "resolve",
          "STEP": "Collisions#find"
        },
        "x": 20,
        "y": 2900,
        "next": {
          "block": {
            "type": "world_comment",
            "fields": {
              "TEXT": "Everything this actor is touching was worked out by Contacts."
            },
            "next": {
              "block": {
                "type": "world_comment",
                "fields": {
                  "TEXT": "Push out sideways FIRST, then up and down — one axis at a time."
                },
                "next": {
                  "block": {
                    "type": "world_comment",
                    "fields": {
                      "TEXT": "Doing both at once is what used to make a jump stick to a wall."
                    },
                    "next": {
                      "block": {
                        "type": "world_for_each",
                        "fields": {
                          "VAR": {
                            "id": "colMover",
                            "name": "mover",
                            "type": "Actor"
                          }
                        },
                        "inputs": {
                          "WHERE": {
                            "block": {
                              "type": "logic_operation",
                              "fields": {
                                "OP": "AND"
                              },
                              "inputs": {
                                "A": {
                                  "block": {
                                    "type": "world_has_trait",
                                    "fields": {
                                      "TRAIT": "Physics#CanMoveTrait"
                                    },
                                    "inputs": {
                                      "ACTOR": {
                                        "block": {
                                          "type": "variables_get_Actor",
                                          "fields": {
                                            "VAR": {
                                              "id": "colMover",
                                              "name": "mover",
                                              "type": "Actor"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "B": {
                                  "block": {
                                    "type": "world_has_trait",
                                    "fields": {
                                      "TRAIT": "Collisions#CanCollideTrait"
                                    },
                                    "inputs": {
                                      "ACTOR": {
                                        "block": {
                                          "type": "variables_get_Actor",
                                          "fields": {
                                            "VAR": {
                                              "id": "colMover",
                                              "name": "mover",
                                              "type": "Actor"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "DO": {
                            "block": {
                              "type": "world_for_each",
                              "fields": {
                                "VAR": {
                                  "id": "colPass",
                                  "name": "solid",
                                  "type": "Actor"
                                }
                              },
                              "inputs": {
                                "SOURCE": {
                                  "block": {
                                    "type": "world_get_Collisions_ContactsProperty",
                                    "inputs": {
                                      "ACTOR": {
                                        "block": {
                                          "type": "variables_get_Actor",
                                          "fields": {
                                            "VAR": {
                                              "id": "colMover",
                                              "name": "mover",
                                              "type": "Actor"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "WHERE": {
                                  "block": {
                                    "type": "world_has_trait",
                                    "fields": {
                                      "TRAIT": "Solid Bodies#SolidTrait"
                                    },
                                    "inputs": {
                                      "ACTOR": {
                                        "block": {
                                          "type": "variables_get_Actor",
                                          "fields": {
                                            "VAR": {
                                              "id": "colPass",
                                              "name": "solid",
                                              "type": "Actor"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "DO": {
                                  "block": {
                                    "type": "world_do_SolidBodies_PushOutOfSidewaysOverAction",
                                    "inputs": {
                                      "BODY": {
                                        "block": {
                                          "type": "variables_get_Actor",
                                          "fields": {
                                            "VAR": {
                                              "id": "colMover",
                                              "name": "mover",
                                              "type": "Actor"
                                            }
                                          }
                                        }
                                      },
                                      "SOLID": {
                                        "block": {
                                          "type": "variables_get_Actor",
                                          "fields": {
                                            "VAR": {
                                              "id": "colPass",
                                              "name": "solid",
                                              "type": "Actor"
                                            }
                                          }
                                        }
                                      },
                                      "FRAME": {
                                        "block": {
                                          "type": "world_step_delta"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "next": {
                                "block": {
                                  "type": "world_for_each",
                                  "fields": {
                                    "VAR": {
                                      "id": "colPass",
                                      "name": "solid",
                                      "type": "Actor"
                                    }
                                  },
                                  "inputs": {
                                    "SOURCE": {
                                      "block": {
                                        "type": "world_get_Collisions_ContactsProperty",
                                        "inputs": {
                                          "ACTOR": {
                                            "block": {
                                              "type": "variables_get_Actor",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colMover",
                                                  "name": "mover",
                                                  "type": "Actor"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "WHERE": {
                                      "block": {
                                        "type": "world_has_trait",
                                        "fields": {
                                          "TRAIT": "Solid Bodies#SolidTrait"
                                        },
                                        "inputs": {
                                          "ACTOR": {
                                            "block": {
                                              "type": "variables_get_Actor",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colPass",
                                                  "name": "solid",
                                                  "type": "Actor"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "DO": {
                                      "block": {
                                        "type": "world_do_SolidBodies_PushOutOfUpOrDownOverAction",
                                        "inputs": {
                                          "BODY": {
                                            "block": {
                                              "type": "variables_get_Actor",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colMover",
                                                  "name": "mover",
                                                  "type": "Actor"
                                                }
                                              }
                                            }
                                          },
                                          "SOLID": {
                                            "block": {
                                              "type": "variables_get_Actor",
                                              "fields": {
                                                "VAR": {
                                                  "id": "colPass",
                                                  "name": "solid",
                                                  "type": "Actor"
                                                }
                                              }
                                            }
                                          },
                                          "FRAME": {
                                            "block": {
                                              "type": "world_step_delta"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  },
  "variables": [
    {
      "id": "colBody2",
      "name": "body",
      "type": "Actor"
    },
    {
      "id": "colSolid2",
      "name": "solid",
      "type": "Actor"
    },
    {
      "id": "colFrame2",
      "name": "frame",
      "type": "Number"
    },
    {
      "id": "colReach2",
      "name": "reach",
      "type": "Vector"
    },
    {
      "id": "colWas2",
      "name": "was",
      "type": "Vector"
    },
    {
      "id": "colMover",
      "name": "mover",
      "type": "Actor"
    },
    {
      "id": "colPass",
      "name": "solid",
      "type": "Actor"
    },
    {
      "id": "colKeepN",
      "name": "n",
      "type": "Number"
    },
    {
      "id": "colSlowV",
      "name": "v",
      "type": "Number"
    },
    {
      "id": "colSlowDrop",
      "name": "drop",
      "type": "Number"
    }
  ]
}
`,tr="worlds/main.world",Di=`import {ActorBuilder, SpriteProperty} from 'world-lab';
import {SolidTrait} from 'rules/solid';
import {ActsAsGroundTrait} from 'rules/gravity';

// A ground tile: landable (ActsAsGroundTrait, from the project's own gravity
// rule) and a wall (SolidTrait, from the engine's collision rule), drawn with
// the project's own "ground.png". A normal tile is both. Being somewhere and
// having a picture are not among the traits it elects — every actor has those.
export default new ActorBuilder({id: 'ground', name: 'Ground'})
  .useTraits([ActsAsGroundTrait, SolidTrait])
  .set(SpriteProperty, 'ground.png');
`,$i=`import {ActorBuilder, AnimationProperty} from 'world-lab';

// A coin playing "coinSpin" — the animation in animations/coinSpin.anim. It
// elects no traits at all: an actor can be somewhere and be drawn without
// asking, so playing an animation is the whole of what makes this a coin.
export default new ActorBuilder({id: 'coin', name: 'Coin'})
  .set(AnimationProperty, 'coinSpin');
`,Fi=`import {ActorBuilder, AnimationProperty} from 'world-lab';

// A ball playing "pulse" — the animation in animations/game.anim.
export default new ActorBuilder({id: 'ball', name: 'Ball'})
  .set(AnimationProperty, 'pulse');
`,Gi=(n,e)=>e?{...n,next:{block:e}}:n,pa=n=>n.reduceRight((e,a)=>Gi(a,e)),Ee=(n,e,a,o)=>({type:`world_on_${n}`,x:e,y:a,next:{block:{type:"world_log",fields:{TEXT:o}}}}),K=(n,e,a,o)=>({type:n,id:e,properties:{positional:{position:{x:a,y:o}}}}),C=n=>n*un+un/2,Pe=(n,e,a)=>a.map(o=>K("actors/ground",`${n}${o}`,C(o),C(e))),Re=(n,e,a)=>a.map(o=>K("actors/ground",`${n}${o}`,C(e),C(o))),Yi=[0,1,2,3,4,5,6,7,8,9],Se=[0,1,2,3,4,5,6,7,8],Wi=JSON.stringify({type:"map",tile:{width:un,height:un},actors:[K("actors/player","Player",C(2),C(4)),...Pe("Floor",9,Yi),...Re("WallLeft",0,Se),...Re("WallRight",9,Se),...Pe("Platform",6,[5,6,7]),K("actors/coin","Coin",C(6),C(3)),K("actors/ball","Ball",C(3),C(2))]},null,2),Hi=n=>`export {${n} as default} from 'world-lab';
`,Xi=JSON.stringify({blocks:{blocks:[{type:"world_world",x:20,y:20,fields:{NAME:"Platform World"},next:{block:pa([{type:"world_use_rule",fields:{RULE:"Gravity"}},{type:"world_use_rule",fields:{RULE:"Arrow Keys"}},{type:"world_load_map",fields:{MAP:"maps/level1"}}])}}]}},null,2),Qi=JSON.stringify({blocks:{blocks:[{type:"world_actor",x:20,y:20,fields:{NAME:"Player"},next:{block:pa([{type:"world_use_trait",fields:{TRAIT:"Gravity#AffectedByGravityTrait"}},{type:"world_use_trait",fields:{TRAIT:"Arrow Keys#ControlledByArrowKeysTrait"}},{type:"world_play_animation",fields:{ANIMATION:"playerBob"}}])}},{type:"world_on_Input_IsPressedEvent",fields:{FILTER0:"space"},x:20,y:440,next:{block:{type:"controls_if",inputs:{IF0:{block:{type:"world_query_Gravity_IsOnTheGroundQuery",inputs:{ACTOR:{block:{type:"world_this_actor"}}}}},DO0:{block:{type:"world_do_Physics_ApplyForceAction",inputs:{VALUE:{block:{type:"world_vector",fields:{VECTOR:{x:0,y:-5}}}},ACTOR:{block:{type:"world_this_actor"}}}}}}}}},Ee("Gravity_StartsFallingEvent",20,200,"Player started falling"),Ee("Gravity_StopsFallingEvent",20,320,"Player landed!")]}},null,2),Ki=JSON.stringify({type:"animation",animations:{pulse:{frameRate:6,frames:[{sprite:"ball.png",scale:.7},{sprite:"ball.png",scale:1},{sprite:"ball.png",scale:1.3},{sprite:"ball.png",scale:1}]},playerBob:{frameRate:7,frames:[{sprite:"player.png",scale:1},{sprite:"player.png",scale:1.25},{sprite:"player.png",scale:1},{sprite:"player.png",scale:.8}]}}},null,2);function Ji(n){const e={};for(const a of n){const o=ra.find(t=>t.id===a);if(o&&(e[`sprite-${a}`]={id:`sprite-${a}`,name:yn(a),language:"png",contents:"",folderId:"sprites",url:o.dataUrl,mimeType:"image/png"},o.sheet)){const t=ta(yn(a));e[`sheet-${a}`]={id:`sheet-${a}`,name:t,language:"json",contents:oa(o.sheet),folderId:"sprites"}}}return e}function Zi(n){const e=Ti.find(a=>a.id===n);return e?{[`anim-${n}`]:{id:`anim-${n}`,name:`${n}.anim`,language:"anim",contents:`${JSON.stringify(e.document,null,2)}
`,folderId:"animations"}}:{}}const or={source:{files:{main:{id:"main",name:"main.world",language:"world",contents:Xi,folderId:"worlds",active:!0,open:!0},player:{id:"player",name:"player.actor",language:"actor",contents:Qi,folderId:"actors"},ground:{id:"ground",name:"ground.js",language:"javascript",contents:Di,folderId:"actors"},coin:{id:"coin",name:"coin.js",language:"javascript",contents:$i,folderId:"actors"},ball:{id:"ball",name:"ball.js",language:"javascript",contents:Fi,folderId:"actors"},gameAnimations:{id:"gameAnimations",name:"game.anim",language:"anim",contents:Ki,folderId:"animations"},level1:{id:"level1",name:"level1.map",language:"map",contents:Wi,folderId:"maps"},gravityRule:{id:"gravityRule",name:"gravity.rule",language:"rule",contents:Li,folderId:"rules"},arrowsRule:{id:"arrowsRule",name:"arrows.rule",language:"rule",contents:Bi,folderId:"rules"},inputRule:{id:"inputRule",name:"input.rule",language:"rule",contents:Ui,folderId:"rules"},motionRule:{id:"motionRule",name:"motion.rule",language:"rule",contents:qi,folderId:"rules"},collisionsRule:{id:"collisionsRule",name:"collisions.rule",language:"rule",contents:Ii,folderId:"rules"},solidRule:{id:"solidRule",name:"solid.rule",language:"rule",contents:Mi,folderId:"rules"},animationRule:{id:"animationRule",name:"animation.js",language:"javascript",contents:Hi("AnimationRule"),folderId:"rules"},rippleEffect:{id:"rippleEffect",name:"ripple.effect",language:"effect",contents:zi(Vi),folderId:"effects"},...Ji(["player","ground","coin","ball","coinSpin"]),...Zi("coinSpin")},folders:{rules:{id:"rules",name:"rules",parentId:"0"},worlds:{id:"worlds",name:"worlds",parentId:"0"},actors:{id:"actors",name:"actors",parentId:"0"},animations:{id:"animations",name:"animations",parentId:"0"},sprites:{id:"sprites",name:"sprites",parentId:"0"},backgrounds:{id:"backgrounds",name:"backgrounds",parentId:"0"},maps:{id:"maps",name:"maps",parentId:"0"},effects:{id:"effects",name:"effects",parentId:"0"}},openFiles:["main"]}},ir={SPLIT:"split",CODE:"code",PREVIEW:"preview"};export{Ss as $,ls as A,Bn as B,fi as C,Mn as D,Ti as E,Cs as F,yn as G,ta as H,oa as I,Oi as J,Dn as K,xs as L,Ts as M,zs as N,O,Vi as P,zi as Q,qi as R,ra as S,Ii as T,Mi as U,Ui as V,Bi as W,Li as X,Es as Y,Rs as Z,tr as _,cs as a,Bs as a0,Vs as a1,Xs as a2,nr as a3,Ls as a4,Qs as a5,Ks as a6,Js as a7,Zs as a8,Fs as a9,Si as aa,Ys as ab,Ms as ac,$s as ad,Pi as ae,Ds as af,Us as ag,Is as ah,Hs as ai,er as aj,Ws as ak,Gs as al,qs as am,ar as an,ki as ao,Os as ap,ir as aq,Pt as ar,or as as,ss as at,Ps as au,Ns as av,js as aw,Wa as b,ds as c,_s as d,vs as e,rt as f,us as g,Cn as h,mi as i,ts as j,ks as k,fs as l,As as m,hs as n,gs as o,bs as p,ys as q,Un as r,eo as s,ws as t,ps as u,ms as v,aa as w,is as x,hi as y,$n as z};
