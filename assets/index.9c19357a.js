(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector(".temperature-value p"),s=document.querySelector(".location p"),d=document.querySelector(".description p"),g=document.querySelector(".icon"),i=document.querySelector(".error p"),m=document.querySelector(".wind p"),p=document.querySelector(".feels-like p"),f=document.querySelector(".local-time p"),h=document.querySelector(".date p"),y="url(background-imgs/winter-night-time.webp)",w="url(background-imgs/winter-day-time.webp)",b="url(background-imgs/day-time.webp)",k="url(background-imgs/night-time.webp)",L="bf8a6a9e6c78c59cdb9e6c5aa6b2eccc",n=new Date;async function M(l){const{latitude:o,longitude:c}=l.coords,r=`https://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&lang=sv&lat=${o}&lon=${c}&appid=${L}`;await fetch(r).then(e=>e.json()).then(e=>{s!==null&&u!==null&&d!==null&&g!==null&&p!==null&&m!==null&&(s.innerHTML=`${e.city.name}, ${e.city.country}`,u.innerHTML=`${Math.round(e.list[0].main.temp)}&#176;<span> C</span>`,p.innerHTML=`k\xE4nns som ${Math.round(e.list[0].main.feels_like)}<span>&#176; C</span>`,d.innerHTML=e.list[0].weather[0].description,g.innerHTML=`<img src="https://openweathermap.org/img/wn/${e.list[0].weather[0].icon}.png" alt="" width="50" height="50" />`,m.innerHTML=`vind ${Math.round(e.list[0].wind.speed)} m/s`)}).catch(()=>{i!==null&&(i.innerHTML="kunde inte h\xE4mta data")})}function T(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(M):i!==null&&(i.innerHTML="kunde inte h\xE4mta  data")}function H(){f!=null&&h!=null&&(h.innerHTML=n.toLocaleDateString(),f.innerHTML=n.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})),n.getHours()<7||n.getHours()>18?n.getMonth()>9||n.getMonth()<3?document.body.style.backgroundImage=y:document.body.style.backgroundImage=k:n.getMonth()<9||n.getMonth()>3?document.body.style.backgroundImage=w:document.body.style.backgroundImage=b}H();T();