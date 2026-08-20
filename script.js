/* =========================================================
   FORWARD GUARD
   MAIN JAVASCRIPT
========================================================= */
const newsData=[
 {region:"Europe",category:"Security",time:"PUBLIC FEED",source:"Demo feed placeholder",headline:"European security developments",summary:"Connect a legitimate news API or RSS feed here. This card intentionally contains no fabricated live event."},
 {region:"Middle East",category:"Ceasefire / Negotiations",time:"PUBLIC FEED",source:"Demo feed placeholder",headline:"Regional diplomacy and negotiations",summary:"Production deployment should populate this panel from an attributed, verified public news source."},
 {region:"Africa",category:"Humanitarian Crisis",time:"PUBLIC FEED",source:"Demo feed placeholder",headline:"Humanitarian response reporting",summary:"Use verified humanitarian reporting and preserve the original publication time and source."},
 {region:"Asia-Pacific",category:"Security",time:"PUBLIC FEED",source:"Demo feed placeholder",headline:"Asia-Pacific security developments",summary:"This demonstration avoids presenting unverified events or invented operational information as fact."}
];

const newsCards=document.getElementById("newsCards");
function renderNews(filter="all"){
  const list=filter==="all"?newsData:newsData.filter(n=>n.region===filter||n.category===filter);
  newsCards.innerHTML=list.map(n=>`<article class="news-card reveal visible">
    <div class="news-meta"><span>${n.region} / ${n.category}</span><span>${n.time}</span></div>
    <h3>${n.headline}</h3><p>${n.summary}</p>
    <div class="source"><span>${n.source}</span><a class="read" href="#contact">READ SOURCE ↗</a></div>
  </article>`).join("");
}
renderNews();

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); renderNews(btn.dataset.filter);
}));

const navToggle=document.querySelector(".nav-toggle"),nav=document.querySelector(".nav");
navToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");navToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

function clock(){document.getElementById("utcClock").textContent=new Date().toUTCString().slice(17,25)+" UTC"} clock();setInterval(clock,1000);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll("[data-count]").forEach(el=>{
  const target=parseInt(el.dataset.count,10);let current=0;
  const step=Math.max(1,Math.ceil(target/35));
  const run=()=>{current=Math.min(target,current+step);el.textContent=String(current).padStart(2,"0");if(current<target)requestAnimationFrame(run)};observer.observe(el);
  el.addEventListener("animationstart",run,{once:true});
});
const countObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!e.target.dataset.done){e.target.dataset.done="1";let target=+e.target.dataset.count,c=0;const tick=()=>{c=Math.min(target,c+1);e.target.textContent=String(c).padStart(2,"0");if(c<target)setTimeout(tick,35)};tick()}}),{threshold:.7});
document.querySelectorAll("[data-count]").forEach(el=>countObserver.observe(el));

document.getElementById("applicationForm").addEventListener("submit",e=>{
 e.preventDefault();document.getElementById("applicationMessage").textContent="Demo submission captured locally. Connect this form to an authorized backend before production use.";
});
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();document.getElementById("contactMessage").textContent="Demo enquiry captured locally. No message was transmitted.";
});
