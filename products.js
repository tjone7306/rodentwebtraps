// ===== Product catalog: add new trap models here; cards render automatically. =====
// status: "available" | "coming-soon". image: key in assets/images.js (e.g. "trap-logo-1"), a path in assets/, or "" for a placeholder.
window.RODENTWEB_PRODUCTS = [
  { name: "RodentWeb Snap Trap", status: "available", image: "trap-logo-1",
    blurb: "Reusable plastic snap trap with an easy-set lever and hands-free release.",
    specs: ["Size: [TBD]", "Material: [TBD plastic]", "Pack sizes: [TBD]", "Price: [TBD]"] },
  { name: "Coming soon: [Model name TBD]", status: "coming-soon", image: "",
    blurb: "A new RodentWeb model is in development. Ask us to be notified.", specs: [] },
  { name: "Coming soon: [Model name TBD]", status: "coming-soon", image: "",
    blurb: "More of the RodentWeb line is on the way.", specs: [] }
];
(function(){
  var g=document.getElementById("product-grid"); if(!g) return;
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
  g.innerHTML=window.RODENTWEB_PRODUCTS.map(function(p){
    var soon=p.status==="coming-soon";
    var src=(window.RW_IMAGES&&window.RW_IMAGES[p.image])||p.image; var media=p.image?'<img src="'+src+'" alt="'+esc(p.name)+'" loading="lazy" width="640" height="480">':'<div class="ph">Image coming soon</div>';
    return '<article class="card product">'+media+'<div class="body"><span class="tag'+(soon?' soon':'')+'">'+(soon?'Coming soon':'Available')+'</span><h3>'+esc(p.name)+'</h3><p>'+esc(p.blurb)+'</p>'+
      (p.specs.length?'<ul>'+p.specs.map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul>':'')+
      '<a href="#contact">'+(soon?'Get notified':'Ask about this model')+' &rarr;</a></div></article>';
  }).join("");
})();
