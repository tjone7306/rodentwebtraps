// ===== Product catalog: add new trap models here; cards render automatically. =====
// status: "available" | "coming-soon". image: path in assets/ or "" for a placeholder.
window.RODENTWEB_PRODUCTS = [
  { name: "RodentWeb RW-100", status: "available", image: "assets/products/rw-100/rw-100-closed-1.jpg",
    gallery: ["assets/products/rw-100/rw-100-closed-2.jpg", "assets/products/rw-100/rw-100-closed-3.jpg", "assets/products/rw-100/rw-100-1.jpg", "assets/products/rw-100/rw-100-2.jpg"],
    blurb: "Reusable plastic snap trap with a removable bait cup and serrated jaws.",
    specs: ["Size: 11 × 5 × 4 cm", "Weight: 40 g per trap", "Material: Premium ABS plastic", "Trigger sensitivity: 8–13 g", "Pack: 6 traps per set", "Pricing: contact us for wholesale pricing"] },
  { name: "RodentWeb RW-200 Pro", status: "available", image: "assets/products/rw-200-pro/rw-200-pro-closed-1.jpg",
    gallery: ["assets/products/rw-200-pro/rw-200-pro-closed-2.jpg", "assets/products/rw-200-pro/rw-200-pro-closed-3.jpg", "assets/products/rw-200-pro/rw-200-pro-closed-4.jpg", "assets/products/rw-200-pro/rw-200-pro-1.jpg", "assets/products/rw-200-pro/rw-200-pro-2.jpg"],
    blurb: "Reusable plastic snap trap with a wide bait pedal and serrated jaws.",
    specs: ["Size: 14 × 7.5 × 7 cm", "Weight: 130 g per trap", "Material: Premium ABS + PS plastic", "Trigger sensitivity: 15–25 g", "Pack: 4 traps per set", "Pricing: contact us for wholesale pricing"] },
  { name: "RodentWeb RW-300 Max", status: "available", image: "assets/products/rw-300-max/rw-300-max-closed-1.jpg",
    gallery: ["assets/products/rw-300-max/rw-300-max-closed-2.jpg", "assets/products/rw-300-max/rw-300-max-1.jpg", "assets/products/rw-300-max/rw-300-max-2.jpg", "assets/products/rw-300-max/rw-300-max-3.jpg", "assets/products/rw-300-max/rw-300-max-4.jpg"],
    blurb: "Reusable plastic snap trap with a perforated bait pedal and removable bait cup.",
    specs: ["Size: 21 × 11 × 14 cm", "Weight: 323 g per trap", "Material: Premium ABS + PS plastic", "Trigger sensitivity: 20–30 g", "Pack: 2 traps per set", "Pricing: contact us for wholesale pricing"] }
];
(function(){
  var g=document.getElementById("product-grid"); if(!g) return;
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
  g.innerHTML=window.RODENTWEB_PRODUCTS.map(function(p){
    var soon=p.status==="coming-soon";
    var media=p.image?'<img src="'+esc(p.image)+'" alt="'+esc(p.name)+'" loading="lazy" width="640" height="360">':'<div class="ph">Image coming soon</div>';
    return '<article class="card product">'+media+'<div class="body"><span class="tag'+(soon?' soon':'')+'">'+(soon?'Coming soon':'Available')+'</span><h3>'+esc(p.name)+'</h3><p>'+esc(p.blurb)+'</p>'+
      (p.specs.length?'<ul>'+p.specs.map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul>':'')+
      (p.gallery&&p.gallery.length?'<div class="gallery">'+p.gallery.map(function(s){return '<img src="'+esc(s)+'" alt="'+esc(p.name)+' view" loading="lazy">'}).join('')+'</div>':'')+'<a href="#contact">'+(soon?'Get notified':'Ask about this model')+' &rarr;</a></div></article>';
  }).join("");
})();
