import{S as d,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m="43249978-ed8444d52eae2c923645cb9a6";function p(n){const r=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>(console.log(t),t)).catch(t=>{throw console.log(t),t})}function h(n){const r=document.getElementById("gallery");if(r.innerHTML="",n.length===0){g();return}const t=new d(".image-card a");n.forEach(o=>{const e=f(o);r.appendChild(e)}),t.refresh()}function f(n){const r=document.createElement("div");r.classList.add("image-card");const t=document.createElement("a");t.href=n.largeImageURL;const o=document.createElement("img");o.src=n.webformatURL,o.alt=n.tags;const e=document.createElement("div");e.classList.add("details");const s=i("Likes:",n.likes),a=i("Views:",n.views),c=i("Comments:",n.comments),l=i("Downloads:",n.downloads);return t.appendChild(o),r.appendChild(t),e.appendChild(s),e.appendChild(a),e.appendChild(c),e.appendChild(l),r.appendChild(e),r}function i(n,r){const t=document.createElement("div");t.classList.add("detail");const o=document.createElement("div");o.classList.add("detail-label"),o.textContent=n;const e=document.createElement("div");return e.classList.add("detail-value"),e.textContent=r,t.appendChild(o),t.appendChild(e),t}function g(){u.error({title:"Sorry!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const y=document.getElementById("search-form");y.addEventListener("submit",async function(n){n.preventDefault();const t=document.getElementById("search-input").value.trim();if(t===""){iziToast.warning({title:"Warning!",message:"Please enter a search query",position:"topCenter"});return}loader.style.display="block",p(t).then(o=>{const e=o.hits;h(e)}).catch(o=>{console.error(o)}).finally(()=>{loader.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
