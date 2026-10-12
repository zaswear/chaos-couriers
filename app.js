// Mensajería del Caos — landing. Idioma (es/en), la cinta del escaparate y el sello.
const TEXTOS = {
  es: {
    "cta.corto": "Jugar gratis", "cta.largo": "Jugar gratis en itch.io",
    lema: "Si cabe, se entrega. Si no cabe, también.",
    entradilla: "Eres el repartidor nuevo. Los paquetes llegan por la cinta y tú los metes en la mochila antes de que se caigan. Ninguno es normal.",
    detalle: "En el navegador · móvil y escritorio · sin descargas",
    "cinta.titulo": "Hoy en la cinta",
    "cinta.pie": "Patos, trompetas, yunques, gnomos… y gallinas que ponen huevos dentro de tu mochila.",
    "demo.titulo": "Haz tu primera entrega",
    "demo.instruccion": "Arrastra las cajas a la mochila. Llena una fila o una columna y se entrega.",
    "demo.entregado": "¡Entregado!",
    "demo.entregas": (n) => (n >= 3 ? `${n} entregas. Doña Prisas casi sonríe.` : `${n} ${n === 1 ? "entrega" : "entregas"}`),
    "demo.atasco": "¡No cabe nada! Se cae todo y vuelta a empezar.",
    "demo.cta": "Ahora, el turno de verdad",
    "demo.caja": (w, h) => `Caja de ${w}×${h}`,
    "demo.celda": (f, c) => `Fila ${f}, columna ${c}`,
    "como.titulo": "Cómo se juega",
    "como.1t": "Arrastra", "como.1": "Coge cada caja de la cinta y suéltala en la mochila. Gírala si no entra.",
    "como.2t": "Entrega", "como.2": "Una fila o columna llena se entrega y cobras. Varias a la vez: combo.",
    "como.3t": "Sobrevive", "como.3": "Helados que se derriten, jarrones frágiles, imanes, apagones… y una gallina con prisa.",
    "como.4t": "No la enfades", "como.4": "Cada caja que se cae es una taza de café menos. Sin café, Doña Prisas te despide.",
    "sello.titulo": "Prueba el sello", "sello.instruccion": "Toca la hoja para estampar URGENTE.", "sello.boton": "Estampar",
    "sello.cuenta": (n) => (n >= 5 ? `${n} sellos. Doña Prisas aprueba: ya puedes empezar el turno.` : `${n} ${n === 1 ? "sello" : "sellos"}`),
    "capturas.titulo": "Así se ve", "capturas.escritorioPie": "En escritorio", "capturas.movilPie": "En el móvil",
    "capturas.escritorio": "Partida en escritorio: la cinta arriba, la mochila con cajas, una gallina y un huevo.",
    "capturas.movil": "Partida en el móvil: la mochila vertical con cajas, la gallina y la cinta arriba.",
    "chapa.reto": "Reto diario: las mismas cajas para todos", "chapa.semanas": "Tres semanas de mercancía nueva",
    "chapa.minijuegos": "Minijuegos de paquetes urgentes", "chapa.idiomas": "Español, inglés, portugués y chino",
    final: "Doña Prisas te espera en la oficina. Llega puntual.",
    "pie.ia": "Ilustraciones y sonidos creados con ayuda de herramientas de IA.",
    "pie.privacidad": "Esta página no usa cookies ni analítica; solo carga fuentes de Google Fonts.",
  },
  en: {
    "cta.corto": "Play free", "cta.largo": "Play free on itch.io",
    lema: "If it fits, it ships. If it doesn't fit, it ships too.",
    entradilla: "You're the new courier. Parcels arrive on the conveyor belt and you pack them into your backpack before they fall off. None of them is normal.",
    detalle: "In your browser · mobile and desktop · no download",
    "cinta.titulo": "On the belt today",
    "cinta.pie": "Ducks, trumpets, anvils, gnomes… and hens that lay eggs inside your backpack.",
    "demo.titulo": "Make your first delivery",
    "demo.instruccion": "Drag the boxes into the backpack. Fill a row or a column and it ships.",
    "demo.entregado": "Delivered!",
    "demo.entregas": (n) => (n >= 3 ? `${n} deliveries. Mrs. Rush almost smiles.` : `${n} ${n === 1 ? "delivery" : "deliveries"}`),
    "demo.atasco": "Nothing fits! Everything falls out, start over.",
    "demo.cta": "Now, the real shift",
    "demo.caja": (w, h) => `${w}×${h} box`,
    "demo.celda": (r, c) => `Row ${r}, column ${c}`,
    "como.titulo": "How to play",
    "como.1t": "Drag", "como.1": "Grab each box from the belt and drop it into the backpack. Rotate it if it doesn't fit.",
    "como.2t": "Deliver", "como.2": "A full row or column ships and you get paid. Several at once: combo.",
    "como.3t": "Survive", "como.3": "Melting ice creams, fragile vases, magnets, blackouts… and a hen in a hurry.",
    "como.4t": "Don't upset her", "como.4": "Every box that falls costs you a cup of coffee. Out of coffee, Mrs. Rush fires you.",
    "sello.titulo": "Try the stamp", "sello.instruccion": "Tap the sheet to stamp it URGENT.", "sello.boton": "Stamp",
    "sello.cuenta": (n) => (n >= 5 ? `${n} stamps. Mrs. Rush approves: your shift can start.` : `${n} ${n === 1 ? "stamp" : "stamps"}`),
    "capturas.titulo": "What it looks like", "capturas.escritorioPie": "On desktop", "capturas.movilPie": "On mobile",
    "capturas.escritorio": "Desktop game: the belt on top, the backpack with boxes, a hen and an egg.",
    "capturas.movil": "Mobile game: the tall backpack with boxes, the hen and the belt on top.",
    "chapa.reto": "Daily challenge: the same boxes for everyone", "chapa.semanas": "Three weeks of new cargo",
    "chapa.minijuegos": "Urgent-parcel minigames", "chapa.idiomas": "English, Spanish, Portuguese and Chinese",
    final: "Mrs. Rush is waiting at the office. Don't be late.",
    "pie.ia": "Artwork and sounds made with the help of AI tools.",
    "pie.privacidad": "This page uses no cookies or analytics; it only loads fonts from Google Fonts.",
  },
};

const $ = (id) => document.getElementById(id);
let idioma = "es", sellos = 0;
const refrescos = []; // lo que hay que repintar al cambiar de idioma (la demo)

function elegirIdioma() {
  const pedido = new URLSearchParams(location.search).get("lang");
  let guardado = null;
  try { guardado = localStorage.getItem("chaos-landing-idioma"); } catch { /* sin almacenamiento */ }
  const navegador = (navigator.languages || [navigator.language]).map((l) => (l || "").slice(0, 2));
  return [pedido, guardado, ...navegador].find((l) => l in TEXTOS) || "es";
}
function aplicarIdioma(l) {
  idioma = l;
  const t = TEXTOS[l];
  document.documentElement.lang = l;
  document.querySelectorAll("[data-t]").forEach((el) => { const v = t[el.dataset.t]; if (typeof v === "string") el.textContent = v; });
  document.querySelectorAll("[data-t-alt]").forEach((el) => { el.alt = t[el.dataset.tAlt]; });
  $("logo").src = $("logoBarra").src = `assets/img/logo-${l}.webp`;
  $("logo").alt = l === "es" ? "Mensajería del Caos" : "Chaos Couriers";
  $("capEscritorio").src = `assets/img/captura-escritorio-${l}.webp`;
  $("capMovil").src = `assets/img/captura-movil-${l}.webp`;
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === l));
  if (sellos) $("cuenta").textContent = t["sello.cuenta"](sellos);
  refrescos.forEach((f) => f());
}
document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
  aplicarIdioma(b.dataset.lang);
  try { localStorage.setItem("chaos-landing-idioma", b.dataset.lang); } catch { /* sin almacenamiento */ }
}));
aplicarIdioma(elegirIdioma());

// ── Cinta: dos tandas iguales de cajas para que el bucle no tenga costura, y
// la banda a la misma velocidad que las cajas (como en el juego).
const PEGATINAS = ["pato", "trompeta", "yunque", "gnomo", "pecera", "vikingo", "tarta", "cactus", "dentadura", "telescopio"];
const ESPECIALES = ["helado", "globo", "jarron", "iman", "purpurina", "pollito"];
const CINTAS = ["#C8443B", "#4C6E91", "#6E8B3D", "#E3B23C", "#D98A94", "#8E79A8"];
const VELOCIDAD = 60; // px por segundo
const mezcla = PEGATINAS.flatMap((p, i) => (i % 2 ? [`paquete-${p}`, ESPECIALES[(i >> 1) % ESPECIALES.length]] : [`paquete-${p}`]));
const caja = (id, i) => `<span class="caja" style="--cinta-caja:${CINTAS[i % CINTAS.length]}"><img src="assets/img/${id}.webp" alt="" width="256" height="256"></span>`;
$("pista").innerHTML = [...mezcla, ...mezcla].map(caja).join("");
function ritmoCinta() {
  const pista = $("pista"), cinta = pista.parentElement;
  const tanda = pista.scrollWidth / 2;
  const banda = cinta.clientHeight * 919 / 72; // proporción de cinta-banda.webp
  cinta.style.setProperty("--dur-pista", `${tanda / VELOCIDAD}s`);
  cinta.style.setProperty("--ancho-banda", `${banda}px`);
  cinta.style.setProperty("--dur-banda", `${banda / VELOCIDAD}s`);
}
addEventListener("load", ritmoCinta);
addEventListener("resize", ritmoCinta);

// ── Sello: cada toque estampa URGENTE donde tocas, con su golpe y su sonido.
const sonido = new Audio("assets/audio/sello.mp3");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
function estampar(x, y) {
  const hoja = $("hoja"), capa = $("hojaSellos");
  const img = document.createElement("img");
  img.src = "assets/img/sello-urgente.webp"; img.alt = ""; img.width = img.height = 256;
  const tam = hoja.clientWidth < 500 ? 120 : 150;
  img.style.left = `${x - tam / 2}px`; img.style.top = `${y - tam / 2}px`;
  img.style.rotate = `${(Math.random() - .5) * 34}deg`;
  capa.append(img);
  while (capa.children.length > 24) capa.firstElementChild.remove();
  try { const s = sonido.cloneNode(); s.volume = .7; s.play().catch(() => {}); } catch { /* sin audio */ }
  try { navigator.vibrate?.(25); } catch { /* sin vibración */ }
  if (!reduceMotion) { hoja.classList.remove("golpe"); void hoja.offsetWidth; hoja.classList.add("golpe"); }
  sellos++;
  $("cuenta").textContent = TEXTOS[idioma]["sello.cuenta"](sellos);
  // Salpicón de tinta en cada golpe; al quinto, lluvia de papelitos.
  const r = hoja.getBoundingClientRect();
  const origen = { x: (r.left + x) / innerWidth, y: (r.top + y) / innerHeight };
  confeti({ particleCount: 14, spread: 360, startVelocity: 12, gravity: 1.4, ticks: 50, scalar: .6, colors: ["#D7263D", "#8E1022"], shapes: ["circle"], origin: origen });
  if (sellos === 5) confeti({ particleCount: 120, spread: 100, startVelocity: 40, origin: origen });
}
$("hoja").addEventListener("pointerdown", (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  estampar(e.clientX - r.left, e.clientY - r.top);
});
$("estampar").addEventListener("click", () => {
  const hoja = $("hoja");
  estampar(hoja.clientWidth * (.2 + Math.random() * .6), hoja.clientHeight * (.25 + Math.random() * .45));
});

// ── Utilidades compartidas: confeti y sonidos cortos. Si una librería no cargó, la
// página funciona igual, solo que más quieta.
const PALETA = ["#D7263D", "#FFC93C", "#1F5FAE", "#6E8B3D", "#FFF6E5", "#D49A5E"];
function confeti(opciones) {
  if (reduceMotion || typeof window.confetti !== "function") return;
  window.confetti({ colors: PALETA, shapes: ["square"], disableForReducedMotion: true, zIndex: 50, ...opciones });
}
const SONIDOS = Object.fromEntries(["clac", "cobro", "cae"].map((n) => [n, new Audio(`assets/audio/${n}.mp3`)]));
function suena(nombre, volumen = .6) {
  try { const s = SONIDOS[nombre].cloneNode(); s.volume = volumen; s.play().catch(() => {}); } catch { /* sin audio */ }
}
const gsap = window.gsap;
const animar = Boolean(gsap) && !reduceMotion;

// ── Demo: mochila de 4×4. Tres cajas en la bandeja; se arrastran (o se tocan y luego
// se toca la casilla). Fila o columna llena → se entregan enteras las cajas que la
// tocan, como la jefa en el juego. Si ninguna cabe, se cae todo.
const LADO = 4;
const FORMAS = [[1, 1], [2, 1], [1, 2], [3, 1], [1, 3], [2, 2], [2, 1], [1, 2]];
const mochila = $("mochila"), bandeja = $("bandeja"), estado = $("demoEstado");
let rejilla = Array.from({ length: LADO }, () => Array(LADO).fill(null));
let entregas = 0, elegida = null, siguienteId = 0;
const enMochila = new Map(); // id → { el, f, c, w, h }

for (let f = 0; f < LADO; f++) for (let c = 0; c < LADO; c++) {
  const b = document.createElement("button");
  b.type = "button"; b.className = "celda"; b.dataset.f = f; b.dataset.c = c;
  b.style.gridArea = `${f + 1} / ${c + 1}`;
  b.addEventListener("click", () => { if (elegida) intentarColocar(elegida, f, c); });
  mochila.append(b);
}
const celdas = [...mochila.querySelectorAll(".celda")];
const celda = (f, c) => celdas[f * LADO + c];

function cabe(w, h, f, c) {
  if (f < 0 || c < 0 || f + h > LADO || c + w > LADO) return false;
  for (let i = f; i < f + h; i++) for (let j = c; j < c + w; j++) if (rejilla[i][j] !== null) return false;
  return true;
}
const cabeEnAlgunSitio = (w, h) => rejilla.some((fila, f) => fila.some((_, c) => cabe(w, h, f, c)));

function nuevaCaja() {
  // Elige una forma que quepa, si hay alguna: la demo tiene que poder ganarse.
  const posibles = FORMAS.filter(([w, h]) => cabeEnAlgunSitio(w, h));
  const [w, h] = (posibles.length ? posibles : FORMAS)[Math.floor(Math.random() * (posibles.length || FORMAS.length))];
  const el = document.createElement("button");
  el.type = "button"; el.className = "pieza";
  el.dataset.id = siguienteId++; el.dataset.w = w; el.dataset.h = h;
  el.style.setProperty("--w", w); el.style.setProperty("--h", h);
  el.style.setProperty("--cinta-caja", CINTAS[Math.floor(Math.random() * CINTAS.length)]);
  const id = mezcla[Math.floor(Math.random() * mezcla.length)];
  el.innerHTML = `<img src="assets/img/${id}.webp" alt="" width="256" height="256" draggable="false">`;
  el.setAttribute("aria-label", TEXTOS[idioma]["demo.caja"](w, h));
  el.addEventListener("pointerdown", empezarArrastre);
  el.addEventListener("click", () => elegir(el));
  return el;
}
function rellenarBandeja() {
  const nuevas = [];
  while (bandeja.children.length < 3) { const el = nuevaCaja(); bandeja.append(el); nuevas.push(el); }
  if (animar && nuevas.length) gsap.from(nuevas, { x: 160, rotation: 12, opacity: 0, duration: .5, stagger: .08, ease: "back.out(1.6)" });
  comprobarAtasco();
}

function elegir(el) {
  if (el.dataset.arrastrada) return; // el click que sigue a un arrastre
  if (elegida) elegida.classList.remove("elegida");
  elegida = elegida === el ? null : el;
  elegida?.classList.add("elegida");
  mochila.classList.toggle("eligiendo", Boolean(elegida));
}

// Arrastre propio con pointer events: la caja sigue al dedo un poco por encima,
// para que el dedo no la tape, y la mochila marca dónde caería.
let arrastre = null;
function empezarArrastre(e) {
  if (e.button !== 0) return;
  const el = e.currentTarget;
  arrastre = { el, x0: e.clientX, y0: e.clientY, movida: false, encima: e.pointerType === "touch" ? 50 : 0, destino: null };
  el.setPointerCapture(e.pointerId);
  el.addEventListener("pointermove", moverArrastre);
  el.addEventListener("pointerup", soltarArrastre);
  el.addEventListener("pointercancel", soltarArrastre);
}
function moverArrastre(e) {
  const a = arrastre;
  if (!a) return;
  if (!a.movida && Math.hypot(e.clientX - a.x0, e.clientY - a.y0) < 6) return;
  if (!a.movida) {
    a.movida = true; a.el.dataset.arrastrada = "1"; a.el.classList.add("en-vuelo");
    if (elegida) { elegida.classList.remove("elegida"); elegida = null; mochila.classList.remove("eligiendo"); }
  }
  const tam = celdas[0].getBoundingClientRect().width;
  const w = +a.el.dataset.w, h = +a.el.dataset.h;
  const izq = e.clientX - (w * tam) / 2, arr = e.clientY - (h * tam) / 2 - a.encima;
  a.el.style.left = `${izq}px`; a.el.style.top = `${arr}px`;
  // Casilla de la esquina superior izquierda de la caja.
  const m = celdas[0].getBoundingClientRect();
  const c = Math.round((izq - m.left) / tam), f = Math.round((arr - m.top) / tam);
  a.destino = f > -1 && c > -1 && f < LADO && c < LADO ? { f, c } : null;
  marcarPrevia(w, h, a.destino);
}
function soltarArrastre(e) {
  const a = arrastre; arrastre = null;
  if (!a) return;
  const el = a.el;
  el.removeEventListener("pointermove", moverArrastre);
  el.removeEventListener("pointerup", soltarArrastre);
  el.removeEventListener("pointercancel", soltarArrastre);
  marcarPrevia(0, 0, null);
  if (!a.movida) return;
  setTimeout(() => delete el.dataset.arrastrada, 0); // el click de este mismo gesto ya ha pasado
  const desde = el.getBoundingClientRect();
  el.classList.remove("en-vuelo"); el.style.left = el.style.top = "";
  if (e.type === "pointerup" && a.destino && intentarColocar(el, a.destino.f, a.destino.c, desde)) return;
  // Vuelve a la bandeja desde donde se soltó.
  if (animar) { const hasta = el.getBoundingClientRect(); gsap.from(el, { x: desde.left - hasta.left, y: desde.top - hasta.top, duration: .35, ease: "power3.out" }); }
}
function marcarPrevia(w, h, destino) {
  celdas.forEach((b) => b.classList.remove("previa", "mal"));
  if (!destino) return;
  const vale = cabe(w, h, destino.f, destino.c);
  for (let i = destino.f; i < Math.min(destino.f + h, LADO); i++)
    for (let j = destino.c; j < Math.min(destino.c + w, LADO); j++) celda(i, j).classList.add(vale ? "previa" : "mal");
}

function intentarColocar(el, f, c, desde) {
  const w = +el.dataset.w, h = +el.dataset.h, id = el.dataset.id;
  if (!cabe(w, h, f, c)) {
    if (animar) gsap.fromTo(mochila, { x: -6 }, { x: 0, duration: .4, ease: "elastic.out(1, .3)" });
    return false;
  }
  desde ??= el.getBoundingClientRect();
  for (let i = f; i < f + h; i++) for (let j = c; j < c + w; j++) rejilla[i][j] = id;
  el.classList.remove("elegida"); elegida = null; mochila.classList.remove("eligiendo");
  el.removeEventListener("pointerdown", empezarArrastre);
  el.classList.add("colocada"); el.disabled = true;
  el.style.gridArea = `${f + 1} / ${c + 1} / span ${h} / span ${w}`;
  mochila.append(el);
  enMochila.set(id, { el, f, c, w, h });
  suena("clac");
  if (animar) {
    const hasta = el.getBoundingClientRect();
    gsap.timeline()
      .from(el, { x: desde.left - hasta.left, y: desde.top - hasta.top, scale: desde.width / hasta.width, duration: .22, ease: "power2.in" })
      .to(el, { scaleY: .86, scaleX: 1.08, duration: .07, transformOrigin: "50% 100%" })
      .to(el, { scaleY: 1, scaleX: 1, duration: .35, ease: "elastic.out(1.2, .4)" });
  }
  setTimeout(() => { entregarLineas(); rellenarBandeja(); }, animar ? 300 : 0);
  return true;
}

function entregarLineas() {
  const llenas = [];
  for (let i = 0; i < LADO; i++) {
    if (rejilla[i].every((v) => v !== null)) llenas.push(...rejilla[i]);
    if (rejilla.every((fila) => fila[i] !== null)) llenas.push(...rejilla.map((fila) => fila[i]));
  }
  if (!llenas.length) return;
  const ids = new Set(llenas);
  const piezas = [...ids].map((id) => enMochila.get(id));
  for (const p of piezas) {
    for (let i = p.f; i < p.f + p.h; i++) for (let j = p.c; j < p.c + p.w; j++) rejilla[i][j] = null;
    enMochila.delete(p.el.dataset.id);
  }
  entregas++;
  estado.textContent = TEXTOS[idioma]["demo.entregas"](entregas);
  suena("cobro");
  const m = mochila.getBoundingClientRect();
  confeti({ particleCount: 90, spread: 80, startVelocity: 38, origin: { x: (m.left + m.width / 2) / innerWidth, y: (m.top + m.height / 3) / innerHeight } });
  sellarEntregado();
  const quitar = () => piezas.forEach((p) => p.el.remove());
  if (animar) gsap.to(piezas.map((p) => p.el), { y: -90, rotation: () => (Math.random() - .5) * 40, scale: .6, opacity: 0, duration: .5, stagger: .05, ease: "back.in(1.4)", onComplete: quitar });
  else quitar();
  if (entregas === 3) {
    const cta = $("demoCta");
    cta.hidden = false;
    if (animar) gsap.from(cta, { scale: 2, rotation: -14, opacity: 0, duration: .45, ease: "back.out(2)" });
  }
}
function sellarEntregado() {
  const s = document.createElement("span");
  s.className = "sello-entregado"; s.textContent = TEXTOS[idioma]["demo.entregado"];
  s.setAttribute("aria-hidden", "true");
  mochila.append(s);
  if (animar) gsap.timeline({ onComplete: () => s.remove() })
    .from(s, { scale: 2.4, opacity: 0, duration: .25, ease: "power3.in" })
    .to(s, { opacity: 0, duration: .4, delay: .7 });
  else setTimeout(() => s.remove(), 1200);
}

function comprobarAtasco() {
  const cajas = [...bandeja.children];
  if (!cajas.length || cajas.some((el) => cabeEnAlgunSitio(+el.dataset.w, +el.dataset.h))) return;
  estado.textContent = TEXTOS[idioma]["demo.atasco"];
  suena("cae");
  const piezas = [...enMochila.values()].map((p) => p.el);
  rejilla = Array.from({ length: LADO }, () => Array(LADO).fill(null));
  enMochila.clear();
  const quitar = () => { piezas.forEach((el) => el.remove()); bandeja.replaceChildren(); rellenarBandeja(); };
  if (animar) {
    gsap.fromTo(mochila, { rotation: -3 }, { rotation: 0, duration: .6, ease: "elastic.out(1, .3)" });
    gsap.to(piezas, { y: 400, rotation: () => (Math.random() - .5) * 90, opacity: 0, duration: .8, delay: .5, stagger: .04, ease: "power2.in", onComplete: quitar });
  } else quitar();
}

refrescos.push(() => {
  celdas.forEach((b) => b.setAttribute("aria-label", TEXTOS[idioma]["demo.celda"](+b.dataset.f + 1, +b.dataset.c + 1)));
  bandeja.querySelectorAll(".pieza").forEach((el) => el.setAttribute("aria-label", TEXTOS[idioma]["demo.caja"](+el.dataset.w, +el.dataset.h)));
  if (entregas) estado.textContent = TEXTOS[idioma]["demo.entregas"](entregas);
});
refrescos.at(-1)();
rellenarBandeja();

// ── Cinta del escaparate: tocar una caja la hace saltar.
$("pista").addEventListener("pointerdown", (e) => {
  const c = e.target.closest(".caja");
  if (!c || !animar || gsap.isTweening(c)) return;
  suena("clac", .4);
  gsap.timeline().to(c, { y: -46, rotation: (Math.random() - .5) * 30, duration: .25, ease: "power2.out" })
    .to(c, { y: 0, rotation: 0, duration: .5, ease: "bounce.out" });
});

// ── Coreografía de entrada y de scroll. Todo con gsap.from: sin JS o con
// movimiento reducido, la página ya está en su sitio.
if (animar) {
  gsap.registerPlugin(window.ScrollTrigger);

  // El logo cae como un sello: grande, golpe, temblor y polvo.
  const escena = $("escena");
  // Ojo: nada de animaciones CSS en estos elementos. gsap.from toma como destino el
  // estilo calculado, y si una animación CSS va por la mitad, se queda a medias.
  gsap.timeline({ delay: .15 })
    .from(".escena-personajes", { opacity: 0, scale: .9, duration: .6, ease: "power2.out" })
    .from("#logo", { scale: 2.6, rotation: -14, opacity: 0, duration: .32, ease: "power4.in" }, "-=.25")
    .add(() => { polvo(escena); suena("clac", .5); })
    .fromTo(escena, { y: 8 }, { y: 0, duration: .5, ease: "elastic.out(1.2, .25)" })
    .from(".lema", { y: 30, opacity: 0, duration: .4, ease: "back.out(2)" }, "-=.35")
    .from(".entradilla", { y: 30, opacity: 0, rotation: -3, duration: .45, ease: "back.out(1.6)" }, "-=.25")
    .from(".portada .boton-sello", { scale: 0, rotation: -20, duration: .5, ease: "back.out(2.4)" }, "-=.2")
    .from(".detalle", { opacity: 0, duration: .4 }, "-=.2");

  // Parallax con el ratón: personajes y logo a distinta profundidad.
  if (matchMedia("(hover: hover)").matches) {
    const px = gsap.quickTo(".escena-personajes", "x", { duration: .8, ease: "power3" });
    const py = gsap.quickTo(".escena-personajes", "y", { duration: .8, ease: "power3" });
    const lx = gsap.quickTo(".escena h1", "x", { duration: .6, ease: "power3" });
    const ly = gsap.quickTo(".escena h1", "y", { duration: .6, ease: "power3" });
    addEventListener("pointermove", (e) => {
      const dx = e.clientX / innerWidth - .5, dy = e.clientY / innerHeight - .5;
      px(dx * -18); py(dy * -10); lx(dx * 14); ly(dy * 8);
    });
  }

  // Los objetos del tablón se desplazan un poco más despacio que el contenido.
  gsap.utils.toArray(".deco").forEach((d) => gsap.fromTo(d, { yPercent: 25 }, {
    yPercent: -25, ease: "none", scrollTrigger: { trigger: d.parentElement, start: "top bottom", end: "bottom top", scrub: true },
  }));

  // Al bajar, los personajes se quedan un poco atrás.
  gsap.to(".escena-personajes", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".portada", start: "top top", end: "bottom top", scrub: true } });

  // Títulos: la nota se pega de un golpe.
  gsap.utils.toArray(".nota-titulo").forEach((t) => gsap.from(t, {
    scale: .4, rotation: -12, opacity: 0, duration: .5, ease: "back.out(2.2)",
    scrollTrigger: { trigger: t, start: "top 85%" },
  }));
  // Notas: cuelgan de la chincheta y se balancean hasta pararse.
  gsap.from(".nota", {
    rotation: (i) => (i % 2 ? 24 : -24), y: -30, opacity: 0, transformOrigin: "50% 0%",
    duration: 1.1, stagger: .12, ease: "elastic.out(1, .4)",
    scrollTrigger: { trigger: ".notas", start: "top 80%" },
  });
  gsap.from(".demo-mesa", { y: 50, opacity: 0, duration: .6, ease: "back.out(1.4)", clearProps: "transform", scrollTrigger: { trigger: ".demo", start: "top 75%" } });
  gsap.from(".hoja", { y: 60, rotation: 4, opacity: 0, duration: .6, ease: "back.out(1.4)", scrollTrigger: { trigger: ".hoja", start: "top 85%" } });
  // Polaroids: caen sobre el corcho.
  gsap.from(".polaroid", {
    y: -140, rotation: (i) => (i ? 14 : -10), opacity: 0, duration: .8, stagger: .15, ease: "bounce.out",
    scrollTrigger: { trigger: ".polaroids", start: "top 75%" },
  });
  // Chapas: estampadas una a una.
  gsap.from(".chapas li", {
    scale: 1.8, opacity: 0, duration: .3, stagger: .1, ease: "power3.in",
    scrollTrigger: { trigger: ".chapas", start: "top 90%" },
  });
  // Final: la jefa espera dando golpecitos, la taza tiembla y el botón llama la atención.
  gsap.from(".final-escena img", { y: 60, opacity: 0, duration: .6, stagger: .15, ease: "back.out(1.8)", scrollTrigger: { trigger: ".final", start: "top 80%" } });
  gsap.to(".final-jefa", { y: -6, duration: .18, repeat: -1, yoyo: true, repeatDelay: .5, ease: "power1.inOut" });
  gsap.to(".final-taza", { rotation: 4, x: 2, duration: .07, repeat: -1, yoyo: true, ease: "none" });
  gsap.to(".final .boton-sello", { keyframes: { rotation: [-1.5, -6, 3, -4, -1.5] }, duration: .6, repeat: -1, repeatDelay: 2.4, ease: "none" });

  // Lightweight tilt de los polaroids al pasar el ratón.
  if (matchMedia("(hover: hover)").matches) document.querySelectorAll(".polaroid").forEach((p) => {
    const rx = gsap.quickTo(p, "rotationX", { duration: .4 }), ry = gsap.quickTo(p, "rotationY", { duration: .4 });
    gsap.set(p, { transformPerspective: 900 });
    p.addEventListener("pointermove", (e) => { const r = p.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - .5) * 14); rx(((e.clientY - r.top) / r.height - .5) * -14); });
    p.addEventListener("pointerleave", () => { rx(0); ry(0); });
  });
}
function polvo(escena) {
  const h1 = escena.querySelector("h1").getBoundingClientRect(), e = escena.getBoundingClientRect();
  for (let i = 0; i < 6; i++) {
    const p = document.createElement("img");
    p.src = "assets/img/polvo.webp"; p.alt = ""; p.className = "polvo";
    const izquierda = i % 2 === 0;
    p.style.left = `${(izquierda ? h1.left : h1.right) - e.left - 40}px`;
    p.style.top = `${h1.bottom - e.top - 60 - (i >> 1) * 30}px`;
    escena.append(p);
    gsap.fromTo(p, { scale: .3, opacity: 1 }, { x: (izquierda ? -1 : 1) * (60 + Math.random() * 60), y: -20 - Math.random() * 30, scale: .9 + Math.random() * .5, opacity: 0, duration: .9, ease: "power2.out", onComplete: () => p.remove() });
  }
}
