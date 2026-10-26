(function(){
var V="lb1026",css=document.createElement("style");
css.textContent=".zoom{cursor:zoom-in}"+
"#rwlb{position:fixed;inset:0;background:rgba(10,14,22,.94);z-index:9999;display:none;align-items:center;justify-content:center;touch-action:pan-y}"+
"#rwlb.on{display:flex}#rwlb img{max-width:94vw;max-height:86vh;object-fit:contain;background:#fff;border-radius:8px;box-shadow:0 10px 40px #000a;user-select:none}"+
"#rwlb button{position:absolute;background:rgba(255,255,255,.14);color:#fff;border:0;font-size:34px;line-height:1;width:54px;height:54px;border-radius:50%;cursor:pointer}"+
"#rwlb button:hover{background:rgba(255,255,255,.28)}#rwlb .x{top:16px;right:16px;font-size:30px}"+
"#rwlb .p{left:14px;top:50%;transform:translateY(-50%)}#rwlb .n{right:14px;top:50%;transform:translateY(-50%)}"+
"#rwlb .c{position:absolute;bottom:16px;left:0;right:0;text-align:center;color:#cbd5e1;font:600 15px system-ui,sans-serif}"+
"@media(max-width:640px){#rwlb .p,#rwlb .n{width:44px;height:44px;font-size:28px}#rwlb img{max-width:100vw;border-radius:0}}";
document.head.appendChild(css);
var o=document.createElement("div");o.id="rwlb";o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");
o.innerHTML='<img alt=""><button class="x" aria-label="Close">&times;</button><button class="p" aria-label="Previous">&#8249;</button><button class="n" aria-label="Next">&#8250;</button><div class="c"></div>';
document.body.appendChild(o);
var im=o.querySelector("img"),cap=o.querySelector(".c"),list=[],i=0,name="",loaded={};
function slug(k){var m=/assets\/products\/([^\/]+)\//.exec(k);return m&&m[1]}
function load(s,cb){if(!s||loaded[s]===true)return cb();if(loaded[s]){loaded[s].push(cb);return}loaded[s]=[cb];
 var t=document.createElement("script");t.src="assets/full-"+s+".js?v="+V;t.onload=t.onerror=function(){var q=loaded[s];loaded[s]=true;q.forEach(function(f){f()})};document.head.appendChild(t)}
function show(){var k=list[i],F=window.RW_FULL||{},T=window.RW_IMG||{};im.src=F[k]||T[k]||k;im.alt=name;cap.textContent=name+"  \u2022  "+(i+1)+" / "+list.length;
 o.querySelector(".p").style.display=o.querySelector(".n").style.display=list.length>1?"":"none";
 if(!F[k])load(slug(k),function(){if(list[i]===k&&(window.RW_FULL||{})[k])im.src=window.RW_FULL[k]})}
function go(d){i=(i+d+list.length)%list.length;show()}
function close(){o.classList.remove("on");document.body.style.overflow=""}
document.addEventListener("click",function(e){var t=e.target;if(!(t.classList&&t.classList.contains("zoom")))return;e.preventDefault();
 var card=t.closest(".product");list=[].map.call(card.querySelectorAll("img.zoom"),function(x){return x.getAttribute("data-key")});
 i=Math.max(0,list.indexOf(t.getAttribute("data-key")));var h=card.querySelector("h3");name=h?h.textContent:"";
 o.classList.add("on");document.body.style.overflow="hidden";show()});
o.addEventListener("click",function(e){if(e.target===o)close()});
o.querySelector(".x").onclick=close;o.querySelector(".p").onclick=function(e){e.stopPropagation();go(-1)};o.querySelector(".n").onclick=function(e){e.stopPropagation();go(1)};
document.addEventListener("keydown",function(e){if(!o.classList.contains("on"))return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")go(-1);else if(e.key==="ArrowRight")go(1)});
var sx=null,sy=0;o.addEventListener("touchstart",function(e){sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
o.addEventListener("touchend",function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;sx=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy))go(dx<0?1:-1)});
})();
