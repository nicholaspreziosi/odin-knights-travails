!function(){"use strict";class e{constructor(e){this.value=e,this.edgesList=[],this.prev=null}}const t=(()=>{const t=[];for(let o=0;o<8;o+=1){t[o]=[];for(let n=0;n<8;n+=1){const r=new e([o,n]);t[o][n]=r}}return t})(),o=e=>{const o=[[e[0]+1,e[1]+2],[e[0]+2,e[1]+1],[e[0]+1,e[1]-2],[e[0]+2,e[1]-1],[e[0]-1,e[1]+2],[e[0]-2,e[1]+1],[e[0]-1,e[1]-2],[e[0]-2,e[1]-1]],n=[];for(const e of o)e[0]>=0&&e[1]>=0&&e[0]<=7&&e[1]<=7&&n.push(e);const r=[];for(const e of n)r.push(t[e[0]][e[1]]);return r},n=[],r=[],s=(e,t)=>{r.push(n.shift());for(const t of e.edgesList)r.includes(t)||(t.prev=e,t.edgesList=o(t.value),n.push(t));return e.value.toString()===t.value.toString()?e:s(n[0],t)};const l=document.querySelector("#path-text"),c=document.querySelector("#instructions"),u=()=>{const e=document.querySelectorAll("#outer-div div div");for(let t=0;t<e.length;t+=1){const o=Number(e[t].parentNode.id.slice(-1)),n=Number(e[t].classList.value.slice(-1));e[t].style.backgroundColor="white",n%2==0&&o%2!=0&&(e[t].style.backgroundColor="black"),o%2==0&&n%2!=0&&(e[t].style.backgroundColor="black")}},d=(e,t,o)=>{const n=o[t];0===e.length?n.style.backgroundColor="rgba(0, 255, 0, 0.75)":1===e.length&&(n.style.backgroundColor="rgba(225, 0, 0, 0.75)")},i=e=>{const t=document.querySelectorAll(".img").length,o=`#Row-${e[0].toString()}`,n=document.querySelector(`${o}`),r=`.Column-${e[1].toString()}`,s=n.querySelectorAll(`${r}`),l=document.createElement("img");l.src="src/images/knight.svg",l.classList.add("img");const c=document.createElement("p");c.textContent=t,s[0].appendChild(l),s[0].appendChild(c)},a=(e,r)=>{const u=(e=>{const t=document.querySelectorAll("#outer-div div div"),o=[],n=Number(t[e].parentNode.id.slice(-1)),r=Number(t[e].classList.value.slice(-1));return o.push(n),o.push(r),o})(r);if(e.push(u),2===e.length){const r=((e,r)=>{const l=t[e[0]][e[1]],c=t[r[0]][r[1]],u=o(e);l.edgesList=u,n.push(l);let d=s(l,c);const i=[];for(;null!=d;)i.push(d.value),d=d.prev;const a=[];for(const e of i.reverse())a.push(e);return a})(e[0],e[1]);d=r.length,c.textContent="",l.textContent=`You made it in ${d-1} moves!`;for(let e=0;e<r.length;e+=1)i(r[e])}var d},m=(()=>{const e=document.createElement("div");for(let t=0;t<8;t+=1){const o=document.createElement("div");o.setAttribute("id",`Row-${t}`);for(let t=0;t<8;t+=1){const n=document.createElement("div");n.classList.add(`Column-${t}`),n.style.backgroundColor="white",o.appendChild(n),e.appendChild(o)}}return e.setAttribute("id","outer-div"),e})();document.body.appendChild(m),u();const h=[],v=document.querySelectorAll("#outer-div div div");for(let e=0;e<v.length;e+=1)v[e].addEventListener("mouseover",(()=>{d(h,e,v),v[e].addEventListener("mouseout",(()=>{u()}))})),v[e].addEventListener("click",(()=>{a(h,e)}))}();