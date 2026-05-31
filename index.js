import{a as p,S as d,i as a}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="51148638-4215382d54794cb096cce3e5a",h="https://pixabay.com/api/";function y(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(h,{params:o}).then(i=>i.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:n,comments:m,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${i}" alt="${e}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${t}</p>
        <p class="info-item"><b>Views:</b> ${n}</p>
        <p class="info-item"><b>Comments:</b> ${m}</p>
        <p class="info-item"><b>Downloads:</b> ${f}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}function S(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function P(){l.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",q);function q(s){s.preventDefault();const i=s.currentTarget.elements["search-text"].value.trim();if(i===""){a.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}S(),v(),y(i).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}).catch(r=>{console.error(r),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),u.reset()})}
//# sourceMappingURL=index.js.map
