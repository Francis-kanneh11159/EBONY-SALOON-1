  const SALON = {
  name: "Ebony Rose Salon",
  whatsapp: "231770000000",          // country code + number, no + or spaces
  displayPhone: "+231 770 000 000",
  openDays: [1, 2, 3, 4, 5, 6],      // 0 = Sunday ... 6 = Saturday
  openHour: 9,
  closeHour: 19,                     // 19 = 7:00 PM
  hoursText: "Mon to Sat, 9:00 AM to 7:00 PM",
  address: "Monrovia, Liberia",      // used for the Get directions link
  promo: "Now booking on WhatsApp. Walk-ins welcome.",   // top banner text, leave "" to hide
  socials: { instagram: "", facebook: "", tiktok: "" }   // paste full links, empty ones are hidden
};

const SERVICES = [
  { cat: "Braids", name: "Knotless braids", price: 60, note: "3 to 5 hours", popular: true, desc: "Lightweight, natural-looking braids that start flat at the root with no tight knot. Gentle on your edges and scalp." },
  { cat: "Braids", name: "Box braids", price: 45, note: "3 to 4 hours", desc: "Classic square-parted braids in small, medium or jumbo sizes. A long-lasting protective style." },
  { cat: "Braids", name: "Cornrows", price: 20, note: "1 to 2 hours", desc: "Straight-back or custom designs with clean parts and neat edges." },
  { cat: "Braids", name: "Kids braids", price: 15, note: "1 to 2 hours", desc: "Gentle, quick styles for children, with breaks whenever they need one." },
  { cat: "Braids", name: "Braid take-down", price: 15, note: "1 hour", desc: "Safe removal and detangling so your hair is not pulled or damaged." },
  { cat: "Weaves", name: "Weave install", price: 35, note: "2 hours, hair not included", desc: "Neat sew-in with a natural-looking part. Bring your own hair or ask what we recommend." },
  { cat: "Weaves", name: "Wig install and styling", price: 25, note: "1 hour", popular: true, desc: "Secure fit, natural hairline and a finished style so you leave ready to go." },
  { cat: "Weaves", name: "Wig wash and restyle", price: 15, note: "1 hour", desc: "Deep clean, condition and restyle to bring your wig back to life." },
  { cat: "Natural care", name: "Wash, treatment and blow-dry", price: 20, note: "1.5 hours", desc: "Shampoo, conditioning treatment and a smooth blow-dry for healthy natural hair." },
  { cat: "Natural care", name: "Silk press", price: 40, note: "2 to 3 hours", popular: true, desc: "Smooth, bouncy, straight hair with heat protection. Wrap your hair at night to make it last." },
  { cat: "Natural care", name: "Twist out / twist styles", price: 30, note: "2 hours", desc: "Defined twists or twist-outs that keep their shape and shine." },
  { cat: "Natural care", name: "Deep conditioning treatment", price: 25, note: "1 hour", desc: "Moisture-rich treatment for dry or damaged hair, with a scalp massage." },
  { cat: "Nails", name: "Gel manicure", price: 18, note: "1 hour", desc: "Shiny, chip-resistant colour with careful nail prep and shaping." },
  { cat: "Nails", name: "Acrylic full set", price: 30, note: "2 hours", desc: "Strong, shaped extensions in your choice of length, colour and design." },
  { cat: "Nails", name: "Pedicure", price: 20, note: "1 hour", desc: "Soak, scrub, nail care and polish for soft, tidy feet." },
  { cat: "Makeup", name: "Event makeup", price: 40, note: "1 hour", desc: "Soft glam or full glam for parties, photoshoots and special nights out." },
  { cat: "Makeup", name: "Bridal makeup", price: 120, note: "Book 2 weeks ahead", desc: "A long-wear bridal look, planned with you in advance, including a quick touch-up kit." },
  { cat: "Makeup", name: "Lash application", price: 20, note: "45 minutes", desc: "Light, natural or dramatic lashes, applied safely and comfortably." }
];
const GALLERY = [
  { label: "Knotless braids", img: "images/knotless-braids.jpg", cat: "Braids", svc: "Knotless braids", colors: ["#c2456b", "#46204f"] },
  { label: "Box braids", img: "images/box-braids.jpg", cat: "Braids", svc: "Box braids", colors: ["#2a1233", "#c2456b"] },
  { label: "Cornrow designs", img: "images/cornrow-designs.jpg", cat: "Braids", svc: "Cornrows", colors: ["#a9355a", "#e0b25a"] },
  { label: "Silk press", img: "images/silk-press.jpg", cat: "Natural care", svc: "Silk press", colors: ["#e0b25a", "#8a4b2a"] },
  { label: "Twist out", img: "images/twist-out.jpg", cat: "Natural care", svc: "Twist out / twist styles", colors: ["#7a3b69", "#c2456b"] },
  { label: "Wig install", img: "images/wig-install.jpg", cat: "Weaves", svc: "Wig install and styling", colors: ["#b8863b", "#46204f"] },
  { label: "Gel nails", img: "images/gel-nails.jpg", cat: "Nails", svc: "Gel manicure", colors: ["#d96a8c", "#f0a6b8"] },
  { label: "Bridal makeup", img: "images/bridal-makeup.jpg", cat: "Makeup", svc: "Bridal makeup", colors: ["#46204f", "#2a1233"] },
  { label: "Red box braids bun", img: "images/box-braids-2.jpg", cat: "Braids", svc: "Box braids", colors: ["#a9355a", "#2a1233"] },
  { label: "Red fulani braids", img: "images/knotless-braids-2.jpg", cat: "Braids", svc: "Knotless braids", colors: ["#a9355a", "#46204f"] },
  { label: "Burgundy knotless braids", img: "images/knotless-braids-3.jpg", cat: "Braids", svc: "Knotless braids", colors: ["#7a2b4a", "#2a1233"] },
  { label: "Stitch cornrows with curls", img: "images/cornrows-2.jpg", cat: "Braids", svc: "Cornrows", colors: ["#2a1233", "#e0b25a"] },
  { label: "Heart cornrows", img: "images/heart-cornrows.jpg", cat: "Braids", svc: "Cornrows", colors: ["#46204f", "#c2456b"] },
  { label: "Pink French tip nails", img: "images/gel-nails-2.jpg", cat: "Nails", svc: "Gel manicure", colors: ["#d96a8c", "#f0a6b8"] },
  { label: "Black glam nails", img: "images/gel-nails-3.jpg", cat: "Nails", svc: "Gel manicure", colors: ["#111111", "#46204f"] },
  { label: "Bridal glam with pearls", img: "images/bridal-makeup-2.jpg", cat: "Makeup", svc: "Bridal makeup", colors: ["#46204f", "#c2456b"] },
  { label: "Black knotless braids", img: "images/knotless-braids-4.jpg", cat: "Braids", svc: "Knotless braids", colors: ["#2a1233", "#46204f"] },
  { label: "Silk press with curled ends", img: "images/silk-press-2.jpg", cat: "Natural care", svc: "Silk press", colors: ["#e0b25a", "#46204f"] },
  { label: "Twist out with cornrow front", img: "images/twist-out-2.jpg", cat: "Natural care", svc: "Twist out / twist styles", colors: ["#7a3b69", "#2a1233"] },
  { label: "Sleek curled updo", img: "images/wig-install-2.jpg", cat: "Weaves", svc: "Wig install and styling", colors: ["#b8863b", "#2a1233"] }
  // To add a photo: put it in the images folder, then copy one line above and change the label, img, cat and svc.
];
/* ============================================================ */
 

 
// Pages share one script. If an element is missing on this page,
// $() returns a harmless stand-in so the other code keeps running.
const stub = new Proxy(function () {}, { get: () => stub, set: () => true, apply: () => stub });
const $ = (id) => document.getElementById(id) || stub;

/* Mobile menu */
$("navToggle").addEventListener("click", () => {
  const menu = $("navMenu");
  const open = menu.classList.toggle("open");
  $("navToggle").setAttribute("aria-expanded", open);
});
$("navMenu").addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    $("navMenu").classList.remove("open");
    $("navToggle").setAttribute("aria-expanded", false);
  }
});

/* Open / closed status */
function updateOpenStatus() {
  const now = new Date();
  const isOpenDay = SALON.openDays.includes(now.getDay());
  const hour = now.getHours() + now.getMinutes() / 60;
  const el = $("openStatus");
  if (isOpenDay && hour >= SALON.openHour && hour < SALON.closeHour) {
    el.textContent = "Open now. Come on in.";
    el.className = "open-status open";
  } else {
    el.textContent = "Closed right now. Book for the next open day.";
    el.className = "open-status closed";
  }
}

/* Services with category tabs */
const categories = ["All", ...new Set(SERVICES.map((s) => s.cat))];
let activeCat = "All";

function renderTabs() {
  $("serviceTabs").innerHTML = categories
    .map((c) => `<button class="tab ${c === activeCat ? "active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");
}

function renderServices() {
  const list = SERVICES.filter((s) => activeCat === "All" || s.cat === activeCat);
  $("serviceList").innerHTML = list
    .map((s) => `<div class="service"><strong>${s.name}${s.popular ? ' <em class="badge">Popular</em>' : ""}</strong><span class="price">$${s.price}</span><small>${s.note}</small><p class="desc">${s.desc || ""}</p></div>`)
    .join("");
}

$("serviceTabs").addEventListener("click", (e) => {
  if (!e.target.dataset.cat) return;
  activeCat = e.target.dataset.cat;
  renderTabs();
  renderServices();
});

/* Gallery + lightbox */
// If a style has an img path (like "images/braids1.jpg") show the photo,
// otherwise fall back to the colour block.
const bg = (g) => g.img
  ? `linear-gradient(transparent 55%, rgba(0,0,0,.7)), url('${g.img}') center / cover`
  : `linear-gradient(160deg,${g.colors[0]},${g.colors[1]})`;

$("galleryGrid").innerHTML = GALLERY.map(
  (g, i) => `<button class="gallery-item" data-i="${i}" style="background:${bg(g)}">${g.label}</button>`
).join("");

$("galleryGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".gallery-item");
  if (!btn) return;
  const g = GALLERY[btn.dataset.i];
  $("lightboxBody").style.background = bg(g);
  $("lightboxBody").textContent = g.label;
  $("lightbox").hidden = false;
});
const closeLightbox = () => ($("lightbox").hidden = true);
$("lightboxClose").addEventListener("click", closeLightbox);
$("lightbox").addEventListener("click", (e) => { if (e.target === $("lightbox")) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

/* Booking form */
$("serviceSelect").innerHTML = SERVICES.map((s) => `<option value="${s.name}">${s.name} ($${s.price})</option>`).join("");

const slots = [];
for (let h = SALON.openHour; h < SALON.closeHour; h++) {
  const label = (hr) => `${((hr + 11) % 12) + 1}:00 ${hr < 12 ? "AM" : "PM"}`;
  slots.push(label(h));
}
$("time").innerHTML = slots.map((t) => `<option>${t}</option>`).join("");

const today = new Date().toISOString().split("T")[0];
$("date").min = today;

$("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  const setError = (id, msg) => { $(id).textContent = msg; if (msg) valid = false; };

  const name = $("name").value.trim();
  const phone = $("phone").value.trim();
  const date = $("date").value;

  setError("nameError", name.length < 2 ? "Enter your name." : "");
  setError("phoneError", phone.replace(/\D/g, "").length < 7 ? "Enter a valid phone number." : "");

  let dateMsg = "";
  if (!date) dateMsg = "Pick a date.";
  else if (!SALON.openDays.includes(new Date(date + "T12:00:00").getDay())) dateMsg = "We are closed that day. Pick Monday to Saturday.";
  setError("dateError", dateMsg);

  if (!valid) return;

  const msg =
    `Hello ${SALON.name}, I would like to book:\n` +
    `Name: ${name}\nPhone: ${phone}\nService: ${chosenServices().join(", ")}\n` +
    `Date: ${date}\nTime: ${$("time").value}\n` +
    ($("notes").value.trim() ? `Notes: ${$("notes").value.trim()}` : "");

  window.open(`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* Footer + contact */
$("year").textContent = new Date().getFullYear();
$("phoneLink").textContent = SALON.displayPhone;
$("phoneLink").href = `tel:+${SALON.whatsapp}`;

/* Start */
updateOpenStatus();
renderTabs();
renderServices();


/* ===== Beautify pack ===== */

/* Nav shadow + back-to-top button */
const toTop = document.createElement("button");
toTop.className = "to-top"; toTop.textContent = "Top"; toTop.setAttribute("aria-label", "Back to top");
toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
document.body.appendChild(toTop);
window.addEventListener("scroll", () => {
  document.querySelector(".nav").classList.toggle("scrolled", window.scrollY > 20);
  toTop.classList.toggle("show", window.scrollY > 500);
});

/* Floating WhatsApp button */
const wa = document.createElement("a");
wa.className = "float-wa"; wa.target = "_blank"; wa.rel = "noopener";
wa.href = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent("Hello " + SALON.name + ", I need some info.")}`;
wa.textContent = "WhatsApp us";
document.body.appendChild(wa);

/* Scroll reveal */
const revealEls = document.querySelectorAll(".section > *, .teasers a, .steps div, .preview a, .reviews figure, .gallery-item, .cta-band > *");
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
revealEls.forEach((el) => { el.classList.add("reveal"); io.observe(el); });

/* Lightbox next / previous */
if (document.getElementById("lightbox")) {
  let cur = 0;
  const lbBook = document.createElement("a");
  lbBook.className = "btn lb-book";
  lbBook.textContent = "Book this style";
  $("lightbox").appendChild(lbBook);
  const lbUpdate = () => { lbBook.href = "book.html?service=" + encodeURIComponent(GALLERY[cur].svc || ""); };
  const show = (i) => {
    cur = (i + GALLERY.length) % GALLERY.length;
    $("lightboxBody").style.background = bg(GALLERY[cur]);
    $("lightboxBody").textContent = GALLERY[cur].label;
    lbUpdate();
  };
  ["prev", "next"].forEach((d) => {
    const b = document.createElement("button");
    b.className = `lb-arrow lb-${d}`; b.textContent = d === "prev" ? "<" : ">";
    b.setAttribute("aria-label", d === "prev" ? "Previous" : "Next");
    b.onclick = (e) => { e.stopPropagation(); show(cur + (d === "prev" ? -1 : 1)); };
    $("lightbox").appendChild(b);
  });
  $("galleryGrid").addEventListener("click", (e) => { const t = e.target.closest(".gallery-item"); if (t) { cur = +t.dataset.i; lbUpdate(); } });
  document.addEventListener("keydown", (e) => {
    if ($("lightbox").hidden) return;
    if (e.key === "ArrowRight") show(cur + 1);
    if (e.key === "ArrowLeft") show(cur - 1);
  });
}

/* Booking: live price estimate */
if (document.getElementById("bookForm")) {
  const est = document.createElement("p");
  est.className = "estimate";
  $("serviceSelect").closest("label").after(est);
  const upd = () => {
    const s = SERVICES.find((x) => x.name === $("serviceSelect").value);
    est.textContent = s ? `Starting price: $${s.price}  |  ${s.note}` : "";
  };
  const wanted = new URLSearchParams(location.search).get("service");
  if (wanted) $("serviceSelect").value = wanted;
  $("serviceSelect").addEventListener("change", upd);
  upd();
}

/* ===== Water + bubbles ===== */
if (document.querySelector(".page-hero")) {
  document.body.classList.add("inner");

  // rising bubbles in the page banner
  const box = document.createElement("div");
  box.className = "bubbles";
  for (let i = 0; i < 16; i++) {
    const b = document.createElement("span");
    const size = 10 + Math.random() * 38;
    b.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;--d:${5 + Math.random() * 6}s;--delay:${-Math.random() * 8}s`;
    box.appendChild(b);
  }
  document.querySelector(".page-hero").appendChild(box);

  // soft drifting blobs behind the page
  const blobs = document.createElement("div");
  blobs.className = "blobs";
  blobs.innerHTML = "<i></i><i></i><i></i>";
  document.body.prepend(blobs);

  // pop a ring wherever you click
  document.addEventListener("click", (e) => {
    const p = document.createElement("span");
    p.className = "pop";
    p.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:60px;height:60px`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 700);
  });
}

// ripple on every button
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const r = btn.getBoundingClientRect();
  const d = Math.max(r.width, r.height);
  const rip = document.createElement("span");
  rip.className = "ripple";
  rip.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
  btn.appendChild(rip);
  setTimeout(() => rip.remove(), 600);
});

/* ===== Colour theme switcher ===== */
const THEMES = [
  { id: "rose", label: "Rose", color: "linear-gradient(135deg,#c2456b 50%,#2a1233 50%)" },
  { id: "ocean", label: "Ocean", color: "linear-gradient(135deg,#0b7f8a 50%,#06303f 50%)" },
  { id: "gold", label: "Black and Gold", color: "linear-gradient(135deg,#e8c25a 50%,#111 50%)" }
];

function applyTheme(id) {
  document.documentElement.dataset.theme = id;
  document.querySelectorAll(".theme-dot").forEach((d) => d.classList.toggle("on", d.dataset.id === id));
  try { localStorage.setItem("salonTheme", id); } catch (e) {}
}

const picker = document.createElement("div");
picker.className = "theme-picker";
picker.innerHTML = THEMES.map((t) => `<button class="theme-dot" data-id="${t.id}" title="${t.label}" aria-label="${t.label} theme" style="background:${t.color}"></button>`).join("");
picker.addEventListener("click", (e) => { if (e.target.dataset.id) applyTheme(e.target.dataset.id); });
document.body.appendChild(picker);

let savedTheme = "rose";
try { savedTheme = localStorage.getItem("salonTheme") || "rose"; } catch (e) {}
applyTheme(savedTheme);


/* ===== Gallery filter tabs ===== */
if (document.getElementById("galleryGrid")) {
  const gcats = ["All", ...new Set(GALLERY.map((g) => g.cat))];
  const gtabs = document.createElement("div");
  gtabs.className = "tabs";
  gtabs.innerHTML = gcats.map((c, i) => `<button class="tab ${i === 0 ? "active" : ""}" data-gc="${c}">${c}</button>`).join("");
  $("galleryGrid").before(gtabs);
  gtabs.addEventListener("click", (e) => {
    const c = e.target.dataset.gc;
    if (!c) return;
    gtabs.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t === e.target));
    document.querySelectorAll(".gallery-item").forEach((el) => { el.hidden = !(c === "All" || GALLERY[el.dataset.i].cat === c); });
  });
}


/* ===== Upgrades: promo bar, rich footer, directions, multi-service booking ===== */
if (SALON.promo) {
  const bar = document.createElement("div");
  bar.className = "promo";
  bar.innerHTML = `<span>${SALON.promo}</span><button aria-label="Close banner">&times;</button>`;
  bar.querySelector("button").onclick = () => bar.remove();
  document.body.prepend(bar);
}

const footerEl = document.querySelector("footer");
if (footerEl) {
  const social = Object.entries(SALON.socials).filter(([, url]) => url)
    .map(([n, url]) => `<a href="${url}" target="_blank" rel="noopener">${n[0].toUpperCase() + n.slice(1)}</a>`).join("");
  const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SALON.address);
  footerEl.className = "rich-footer";
  footerEl.innerHTML = `
    <div class="foot-grid">
      <div><h3>${SALON.name}</h3><p>Braids, weaves, natural hair care, nails and makeup.</p></div>
      <div><h3>Explore</h3><a href="index.html">Home</a><a href="about.html">About</a><a href="services.html">Services</a><a href="gallery.html">Gallery</a><a href="book.html">Book</a><a href="contact.html">Contact</a></div>
      <div><h3>Visit</h3><p>${SALON.hoursText}</p><p>${SALON.address}</p><a href="${maps}" target="_blank" rel="noopener">Get directions</a><a href="tel:+${SALON.whatsapp}">${SALON.displayPhone}</a></div>
      ${social ? `<div><h3>Follow</h3>${social}</div>` : ""}
    </div>
    <p class="foot-copy">&copy; ${new Date().getFullYear()} ${SALON.name}. All rights reserved.</p>`;
}

if (document.getElementById("phoneLink")) {
  const d = document.createElement("a");
  d.className = "btn btn-small dir-btn";
  d.target = "_blank"; d.rel = "noopener";
  d.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SALON.address);
  d.textContent = "Get directions";
  $("phoneLink").parentElement.after(d);
}

/* Multi-service booking */
let extraServices = [];
function chosenServices() {
  return [...new Set([...extraServices, $("serviceSelect").value])];
}
if (document.getElementById("bookForm") && document.querySelector(".estimate")) {
  const est = document.querySelector(".estimate");
  const chips = document.createElement("div");
  chips.className = "chips";
  const add = document.createElement("button");
  add.type = "button"; add.className = "add-svc"; add.textContent = "+ Add another service";
  est.after(add); add.after(chips);

  const refresh = () => {
    const names = chosenServices();
    const total = names.reduce((sum, n) => sum + (SERVICES.find((x) => x.name === n) || { price: 0 }).price, 0);
    est.textContent = `Selected: ${names.join(", ")}  |  Starting total: $${total}`;
    chips.innerHTML = extraServices.map((n) => `<button type="button" class="chip" data-n="${n}">${n} &times;</button>`).join("");
  };
  add.onclick = () => {
    const v = $("serviceSelect").value;
    if (!extraServices.includes(v)) extraServices.push(v);
    refresh();
  };
  chips.onclick = (e) => {
    const n = e.target.dataset.n;
    if (n) { extraServices = extraServices.filter((x) => x !== n); refresh(); }
  };
  $("serviceSelect").addEventListener("change", refresh);
  refresh();
}
