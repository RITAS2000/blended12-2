import{n as f}from"./assets/vendor-OxPLOBIU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const n={form:document.querySelector(".header-form"),ul:document.querySelector(".tasks-list")};function d(t){return`<li class="task-list-item" data-id="${t.id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${t.taskName}</h3>
      <p>${t.taskDescription}</p>
  </li>`}function m(t){return t.map(d).join("")}function l(t){n.ul.innerHTML="",n.ul.insertAdjacentHTML("beforeend",m(t))}const u="taskList",i=JSON.parse(localStorage.getItem(u))??[];l(i);n.form.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.taskName.value.trim(),c=t.target.elements.taskDescription.value.trim(),o={taskName:s,taskDescription:c,id:f()};i.push(o),localStorage.setItem(u,JSON.stringify(i)),l(i),n.form.reset()});
//# sourceMappingURL=index.js.map
