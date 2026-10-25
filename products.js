// ===== Product catalog: add new trap models here; cards render automatically. =====
// status: "available" | "coming-soon". image: path in assets/ or "" for a placeholder.
window.RODENTWEB_PRODUCTS = [
  { name: "RodentWeb MS02", status: "available", image: "assets/products/ms02/ms02-logo.jpg",
    gallery: ["assets/products/ms02/ms02-1.jpg", "assets/products/ms02/ms02-2.jpg"],
    blurb: "Reusable plastic snap trap with a removable bait cup and serrated jaws.",
    specs: ["Size: [TBD]", "Material: [TBD plastic]", "Pack sizes: [TBD]", "Price: [TBD]"] },
  { name: "RodentWeb MS02 Pro", status: "available", image: "assets/products/ms02-pro/ms02-pro-logo.jpg",
    gallery: ["assets/products/ms02-pro/ms02-pro-1.jpg", "assets/products/ms02-pro/ms02-pro-2.jpg"],
    blurb: "Reusable plastic snap trap with a wide bait pedal and serrated jaws.",
    specs: ["Size: [TBD]", "Material: [TBD plastic]", "Pack sizes: [TBD]", "Price: [TBD]"] },
  { name: "RodentWeb MS02 Max", status: "available", image: "assets/products/ms02-max/ms02-max-logo.jpg",
    gallery: ["assets/products/ms02-max/ms02-max-1.jpg", "assets/products/ms02-max/ms02-max-2.jpg", "assets/products/ms02-max/ms02-max-3.jpg", "assets/products/ms02-max/ms02-max-4.jpg"],
    blurb: "Reusable plastic snap trap with a perforated bait pedal and removable bait cup.",
    specs: ["Size: [TBD]", "Material: [TBD plastic]", "Pack sizes: [TBD]", "Price: [TBD]"] }
];
(function(){
  var g=document.getElementById("product-grid"); if(!g) return;
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
  g.innerHTML=window.RODENTWEB_PRODUCTS.map(function(p){
    var soon=p.status==="coming-soon";
    var media=p.image?'<img src="'+esc(RW_SRC(p.image))+'" alt="'+esc(p.name)+'" loading="lazy" width="640" height="360">':'<div class="ph">Image coming soon</div>';
    return '<article class="card product">'+media+'<div class="body"><span class="tag'+(soon?' soon':'')+'">'+(soon?'Coming soon':'Available')+'</span><h3>'+esc(p.name)+'</h3><p>'+esc(p.blurb)+'</p>'+
      (p.specs.length?'<ul>'+p.specs.map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul>':'')+
      (p.gallery&&p.gallery.length?'<div class="gallery">'+p.gallery.map(function(s){return '<img src="'+esc(RW_SRC(s))+'" alt="'+esc(p.name)+' view" loading="lazy">'}).join('')+'</div>':'')+'<a href="#contact">'+(soon?'Get notified':'Ask about this model')+' &rarr;</a></div></article>';
  }).join("");
})();
