const ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};ge();function B(){}function ce(t){return t()}function ae(){return Object.create(null)}function G(t){t.forEach(ce)}function me(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function $(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function Ae(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function J(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function de(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function p(){return D(" ")}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function he(t){return Array.from(t.childNodes)}function K(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let ne;function j(t){ne=t}const C=[],oe=[],Y=[],le=[],pe=Promise.resolve();let ee=!1;function we(){ee||(ee=!0,pe.then(fe))}function te(t){Y.push(t)}const L=new Set;let F=0;function fe(){const t=ne;do{for(;F<C.length;){const e=C[F];F++,j(e),ve(e.$$)}for(j(null),C.length=0,F=0;oe.length;)oe.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];L.has(n)||(L.add(n),n())}Y.length=0}while(C.length);for(;le.length;)le.pop()();ee=!1,L.clear(),j(t)}function ve(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}const H=new Set;let be;function U(t,e){t&&t.i&&(H.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),be.c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function M(t){t&&t.c()}function S(t,e,n,o){const{fragment:r,on_mount:a,on_destroy:g,after_update:u}=t.$$;r&&r.m(e,n),o||te(()=>{const b=a.map(ce).filter(me);g?g.push(...b):G(b),t.$$.on_mount=[]}),u.forEach(te)}function q(t,e){const n=t.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(t,e){t.$$.dirty[0]===-1&&(C.push(t),we(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,o,r,a,g,u=[-1]){const b=ne;j(t);const s=t.$$={fragment:null,ctx:null,props:a,update:B,not_equal:r,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(b?b.$$.context:[])),callbacks:ae(),dirty:u,skip_bound:!1,root:e.target||b.$$.root};g&&g(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(w,y,...k)=>{const E=k.length?k[0]:y;return s.ctx&&r(s.ctx[w],s.ctx[w]=E)&&(!s.skip_bound&&s.bound[w]&&s.bound[w](E),h&&ye(t,w)),y}):[],s.update(),h=!0,G(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){const w=he(e.target);s.fragment&&s.fragment.l(w),w.forEach(x)}else s.fragment&&s.fragment.c();e.intro&&U(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),fe()}j(b)}class V{$destroy(){q(this,1),this.$destroy=B}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!Ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Ee="/about/assets/logo.f28c019d.png";function Be(t){let e,n,o;return{c(){e=d("a"),n=d("button"),o=D(t[0]),i(n,"class","svelte-y0mww"),i(e,"href",t[1]),i(e,"target","_blank")},m(r,a){J(r,e,a),l(e,n),l(n,o)},p(r,[a]){a&1&&K(o,r[0]),a&2&&i(e,"href",r[1])},i:B,o:B,d(r){r&&x(e)}}}function _e(t,e,n){let{name:o}=e,{link:r}=e;return t.$$set=a=>{"name"in a&&n(0,o=a.name),"link"in a&&n(1,r=a.link)},[o,r]}class Z extends V{constructor(e){super(),W(this,e,_e,Be,R,{name:0,link:1})}}function se(t,e,n){const o=t.slice();return o[4]=e[n],o}function ie(t){let e,n;return{c(){e=d("img"),i(e,"class","langImage svelte-1gvai3t"),$(e.src,n=t[4])||i(e,"src",n),i(e,"alt","Language used for project")},m(o,r){J(o,e,r)},p(o,r){r&8&&!$(e.src,n=o[4])&&i(e,"src",n)},d(o){o&&x(e)}}}function Te(t){let e,n,o,r,a,g,u,b,s,h,w,y,k,E,N,Q,_=t[3],f=[];for(let c=0;c<_.length;c+=1)f[c]=ie(se(t,_,c));return{c(){e=d("div"),n=d("h2"),o=D(t[0]),r=p(),a=d("p"),g=D(t[1]),u=p(),b=d("br"),s=D(`
        Repo: `),h=d("a"),w=D(t[2]),y=p(),k=d("br"),E=p();for(let c=0;c<f.length;c+=1)f[c].c();N=p(),Q=d("p"),i(n,"class","svelte-1gvai3t"),i(h,"href",t[2]),i(h,"target","_blank"),i(a,"class","svelte-1gvai3t"),i(Q,"class","svelte-1gvai3t"),i(e,"class","wrapper svelte-1gvai3t")},m(c,v){J(c,e,v),l(e,n),l(n,o),l(e,r),l(e,a),l(a,g),l(a,u),l(a,b),l(a,s),l(a,h),l(h,w),l(a,y),l(a,k),l(a,E);for(let m=0;m<f.length;m+=1)f[m].m(a,null);l(e,N),l(e,Q)},p(c,[v]){if(v&1&&K(o,c[0]),v&2&&K(g,c[1]),v&4&&K(w,c[2]),v&4&&i(h,"href",c[2]),v&8){_=c[3];let m;for(m=0;m<_.length;m+=1){const T=se(c,_,m);f[m]?f[m].p(T,v):(f[m]=ie(T),f[m].c(),f[m].m(a,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=_.length}},i:B,o:B,d(c){c&&x(e),de(f,c)}}}function ke(t,e,n){let{name:o}=e,{desc:r}=e,{link:a}=e,{langImage:g}=e;return t.$$set=u=>{"name"in u&&n(0,o=u.name),"desc"in u&&n(1,r=u.desc),"link"in u&&n(2,a=u.link),"langImage"in u&&n(3,g=u.langImage)},[o,r,a,g]}class X extends V{constructor(e){super(),W(this,e,ke,Te,R,{name:0,desc:1,link:2,langImage:3})}}function Qe(t){let e,n,o;return{c(){e=d("hr"),n=p(),o=d("p"),o.innerHTML='Repo for this webpage is <a href="https://www.github.com/vexe141/about" target="_blank">here</a>.',i(e,"class","svelte-1o4w4qz"),i(o,"class","svelte-1o4w4qz")},m(r,a){J(r,e,a),J(r,n,a),J(r,o,a)},p:B,i:B,o:B,d(r){r&&x(e),r&&x(n),r&&x(o)}}}class Ue extends V{constructor(e){super(),W(this,e,null,Qe,R,{})}}var Se="/about/assets/clang.e7295e49.png",qe="data:image/png;base64,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",xe="/about/assets/html.0256c156.png",Ie="/about/assets/css.a608e1e3.png",Me="/about/assets/js.76cc334b.png";function Je(t){let e,n,o,r,a,g,u,b,s,h,w,y,k,E,N,Q,_,f,c,v,m,T,re,O,P;return h=new X({props:{name:"notor",desc:"A note-taking tool for the terminal, created as a utility for writing down short notes. Only supported on Linux for the time being.",link:"https://www.github.com/vexe141/notor",langImage:t[0]}}),y=new X({props:{name:"libman",desc:"A little library management tool.",link:"https://www.github.com/vexe141/libman",langImage:t[1]}}),E=new X({props:{name:"tic_tac_toe",desc:"A terrible tictactoe game I made a long time ago.",link:"https://www.github.com/vexe141/tic_tac_toe",langImage:t[2]}}),f=new Z({props:{name:"YouTube",link:"https://www.youtube.com/channel/UCwl42eTL4moStZOmHbFb8uQ"}}),v=new Z({props:{name:"Spotify",link:"https://open.spotify.com/artist/6R6EQZ91W97H5b7YvTjYRW"}}),T=new Z({props:{name:"SoundCloud",link:"https://www.soundcloud.com/iamnotcorona"}}),O=new Ue({}),{c(){e=d("main"),n=d("img"),r=p(),a=d("h1"),a.textContent="vexe",g=p(),u=d("p"),u.textContent=`Hello, I'm a guy who writes random apps and stuff for fun, I guess.
        Here's a list of some stuff I've made so far.`,b=p(),s=d("div"),M(h.$$.fragment),w=p(),M(y.$$.fragment),k=p(),M(E.$$.fragment),N=p(),Q=d("p"),Q.textContent=`Oh, fun fact, I used to be an EDM producer. Here's a bunch of links if
        you wanna check out the music I used to make.`,_=p(),M(f.$$.fragment),c=p(),M(v.$$.fragment),m=p(),M(T.$$.fragment),re=p(),M(O.$$.fragment),$(n.src,o=Ee)||i(n,"src",o),i(n,"alt","vexe logo"),i(n,"class","svelte-1farzn"),i(a,"class","svelte-1farzn"),i(u,"class","svelte-1farzn"),i(s,"class","projects svelte-1farzn"),i(Q,"class","svelte-1farzn"),i(e,"class","svelte-1farzn")},m(A,ue){J(A,e,ue),l(e,n),l(e,r),l(e,a),l(e,g),l(e,u),l(e,b),l(e,s),S(h,s,null),l(s,w),S(y,s,null),l(s,k),S(E,s,null),l(e,N),l(e,Q),l(e,_),S(f,e,null),l(e,c),S(v,e,null),l(e,m),S(T,e,null),l(e,re),S(O,e,null),P=!0},p:B,i(A){P||(U(h.$$.fragment,A),U(y.$$.fragment,A),U(E.$$.fragment,A),U(f.$$.fragment,A),U(v.$$.fragment,A),U(T.$$.fragment,A),U(O.$$.fragment,A),P=!0)},o(A){I(h.$$.fragment,A),I(y.$$.fragment,A),I(E.$$.fragment,A),I(f.$$.fragment,A),I(v.$$.fragment,A),I(T.$$.fragment,A),I(O.$$.fragment,A),P=!1},d(A){A&&x(e),q(h),q(y),q(E),q(f),q(v),q(T),q(O)}}}function Oe(t){return[[qe],[Se],[xe,Ie,Me]]}class De extends V{constructor(e){super(),W(this,e,Oe,Je,R,{})}}new De({target:document.getElementById("app")});
