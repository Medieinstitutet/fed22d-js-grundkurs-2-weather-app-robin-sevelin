(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector(".temperature-value p"),r=document.querySelector(".location p"),s=document.querySelector(".description p"),d=document.querySelector(".icon"),g=document.querySelector(".wind p"),m=document.querySelector(".feels-like p"),f=document.querySelector(".local-time p"),p=document.querySelector(".date p"),h=document.querySelector("#get-position"),w="url(background-imgs/winter-night-time.webp)",b="url(background-imgs/winter-day-time.webp)",k="url(background-imgs/day-time.webp)",L="url(background-imgs/night-time.webp)",M="bf8a6a9e6c78c59cdb9e6c5aa6b2eccc",n=new Date;function y(){r!==null&&(r.innerHTML="lyckades inte h\xE4mta data")}async function S(l){const{latitude:o,longitude:c}=l.coords,i=`https://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&lang=sv&lat=${o}&lon=${c}&appid=${M}`;await fetch(i).then(e=>e.json()).then(e=>{r!==null&&u!==null&&s!==null&&d!==null&&m!==null&&g!==null&&(r.innerHTML=`${e.city.name}, ${e.city.country}`,u.innerHTML=`${Math.round(e.list[0].main.temp)}&#176;<span> C</span>`,m.innerHTML=`k\xE4nns som ${Math.round(e.list[0].main.feels_like)}<span>&#176; C</span>`,s.innerHTML=e.list[0].weather[0].description,d.innerHTML=`<img src="https://openweathermap.org/img/wn/${e.list[0].weather[0].icon}.png" alt="${e.list[0].weather[0].description}" width="75" height="75" />`,g.innerHTML=`vind ${Math.round(e.list[0].wind.speed)} m/s`)}).catch(y)}function T(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(S,y)}h!==null&&h.addEventListener("click",T);function H(){n.getHours()<7||n.getHours()>18?n.getMonth()>9||n.getMonth()<3?document.body.style.backgroundImage=w:document.body.style.backgroundImage=L:n.getMonth()<9||n.getMonth()>3?document.body.style.backgroundImage=b:document.body.style.backgroundImage=k}function q(){f!=null&&p!=null&&(p.innerHTML=n.toLocaleDateString(),f.innerHTML=n.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})),H()}q();
