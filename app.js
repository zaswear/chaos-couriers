// Mensajería del Caos — landing. Idioma (es/en), la cinta del escaparate y el sello.
const TEXTOS = {
  es: {
    "cta.corto": "Jugar gratis", "cta.largo": "Jugar gratis en itch.io",
    lema: "Si cabe, se entrega. Si no cabe, también.",
    entradilla: "Eres el repartidor nuevo. Los paquetes llegan por la cinta y tú los metes en la mochila antes de que se caigan. Ninguno es normal.",
    detalle: "En el navegador · móvil y escritorio · sin descargas",
    "cinta.titulo": "Hoy en la cinta",
    "cinta.pie": "Patos, trompetas, yunques, gnomos… y gallinas que ponen huevos dentro de tu mochila.",
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
}
$("hoja").addEventListener("pointerdown", (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  estampar(e.clientX - r.left, e.clientY - r.top);
});
$("estampar").addEventListener("click", () => {
  const hoja = $("hoja");
  estampar(hoja.clientWidth * (.2 + Math.random() * .6), hoja.clientHeight * (.25 + Math.random() * .45));
});
