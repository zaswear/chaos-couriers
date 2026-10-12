// Mensajería del Caos — landing. Idioma (es/en), la cinta del escaparate y el sello.
const TEXTOS = {
  es: {
    "cta.corto": "Jugar gratis", "cta.largo": "Jugar gratis en itch.io",
    lema: "Si cabe, se entrega. Si no cabe, también.",
    entradilla: "Eres el repartidor nuevo. Los paquetes llegan por la cinta y tú los metes en la mochila antes de que se caigan. Ninguno es normal.",
    detalle: "Gratis en el navegador y en Android · sin anuncios",
    "pie.marca": "Google Play y el logotipo de Google Play son marcas de Google LLC.",
    "cinta.titulo": "Hoy en la cinta",
    "cinta.pie": "Cajas de cartón con su cinta de color y el sello de lo que llevan… y objetos extraviados sueltos: gallinas, helados, globos.",
    "gallina.etiqueta": "Gallina: tócala",
    "urgente.titulo": "¡Paquete urgente!",
    "urgente.entradilla": "Una vez al día puede llegar un paquete urgente. Entrégalo y se para todo: un minijuego con premio en puntos, sueldo o una taza más.",
    "mj.clasificart": "Clasificar el correo", "mj.clasificar": "Toca la saca del color de la cinta de cada paquete antes de que caiga.",
    "mj.gallinat": "¡Que se escapa la gallina!", "mj.gallina": "Toca las gallinas que asoman. Al pato, ni tocarlo.",
    "mj.rutat": "Ruta de reparto", "mj.ruta": "Cambia de carril para coger paquetes y esquivar charcos, gallinas y gatos.",
    "mj.sellot": "El sello perfecto", "mj.sello": "Estampa cuando el hueco del sello pase por el recuadro rojo.",
    "mj.basculat": "La báscula", "mj.bascula": "Para la aguja en la marca roja: el peso que pide el cliente.",
    "mj.perdidost": "¿Esto es suyo?", "mj.perdidos": "Cada cliente describe lo que perdió. Dale el objeto correcto de la estantería.",
    "como.titulo": "Cómo se juega",
    "como.1t": "Arrastra", "como.1": "Coge cada caja de la cinta y suéltala en la mochila. Tócala antes para girarla.",
    "como.2t": "Entrega", "como.2": "Una fila o columna llena se entrega y cobras. Varias a la vez: combo.",
    "como.3t": "Sobrevive", "como.3": "Objetos extraviados que se mueven, se derriten o explotan, café derramado en la cinta… y una gallina con prisa.",
    "como.4t": "No la enfades", "como.4": "Cada caja que se cae es una taza de café menos. Sin café, Doña Prisas te despide.",
    "sello.titulo": "Prueba los sellos", "sello.instruccion": "Toca la hoja: URGENTE y los sellos de goma de las cajas.", "sello.boton": "Estampar",
    "sello.cuenta": (n) => (n >= 5 ? `${n} sellos. Doña Prisas aprueba: ya puedes empezar el turno.` : `${n} ${n === 1 ? "sello" : "sellos"}`),
    "capturas.titulo": "Así se ve", "capturas.escritorioPie": "En escritorio", "capturas.movilPie": "En el móvil",
    "capturas.escritorio": "Partida en escritorio: la cinta arriba, la mochila con cajas, una gallina y un huevo.",
    "capturas.movil": "Partida en el móvil: la mochila vertical con cajas, la gallina y la cinta arriba.",
    "chapa.reto": "Reto diario: las mismas cajas para todos", "chapa.semanas": "Tres semanas de mercancía nueva",
    "chapa.minijuegos": "Minijuegos de paquetes urgentes", "chapa.idiomas": "Español, inglés, portugués y chino",
    "chapa.tienda": "Tienda con mejoras y mochilas para elegir", "chapa.relajado": "Modo relajado: sin perder tazas",
    "album.titulo": "Llena el álbum",
    "album.entradilla": "Algunas cajas llegan con el sello de lo que llevan dentro. Entrégalas y su pegatina va directa a tu álbum.",
    "album.rotulo": "Pegatinas del almacén", "album.hueco": "Por descubrir",
    "album.1t": "Cajas selladas", "album.1": "Tres sellos iguales en una línea dan premio.",
    "album.2t": "Un sobre al día", "album.2": "Al acabar el turno, Doña Prisas te deja una pegatina. Las repetidas se cobran.",
    "album.3t": "Edición limitada", "album.3": "En Halloween y Navidad hay sellos y pegatinas que solo salen esos días.",
    "album.4t": "Objetos perdidos", "album.4": "Lo extraviado que entregas va a la estantería. A veces su dueño vuelve a por ello.",
    final: "Doña Prisas te espera en la oficina. Llega puntual.",
    "pie.ia": "Ilustraciones y sonidos creados con ayuda de herramientas de IA.",
    "pie.privacidad": "Esta página no usa cookies ni analítica; solo carga fuentes de Google Fonts.",
    "pie.privacidadEnlace": "Privacidad",
  },
  en: {
    "cta.corto": "Play free", "cta.largo": "Play free on itch.io",
    lema: "If it fits, it ships. If it doesn't fit, it ships too.",
    entradilla: "You're the new courier. Parcels arrive on the conveyor belt and you pack them into your backpack before they fall off. None of them is normal.",
    detalle: "Free in your browser and on Android · no ads",
    "pie.marca": "Google Play and the Google Play logo are trademarks of Google LLC.",
    "cinta.titulo": "On the belt today",
    "cinta.pie": "Cardboard boxes with coloured tape and a stamp of what's inside… plus loose lost items: hens, ice creams, balloons.",
    "gallina.etiqueta": "Hen: tap her",
    "urgente.titulo": "Urgent parcel!",
    "urgente.entradilla": "Once a day an urgent parcel may turn up. Deliver it and everything stops: a minigame with a prize in points, wages or an extra cup.",
    "mj.clasificart": "Sort the mail", "mj.clasificar": "Tap the sack matching each parcel's tape colour before it lands.",
    "mj.gallinat": "The hen's escaping!", "mj.gallina": "Tap the hens popping up. Don't you dare touch the duck.",
    "mj.rutat": "Delivery run", "mj.ruta": "Switch lanes to grab parcels and dodge puddles, hens and cats.",
    "mj.sellot": "The perfect stamp", "mj.sello": "Stamp when the stamp box passes over the red frame.",
    "mj.basculat": "The scale", "mj.bascula": "Stop the needle on the red mark: the weight the customer says.",
    "mj.perdidost": "Is this yours?", "mj.perdidos": "Each customer describes what they lost. Hand them the right item from the shelf.",
    "como.titulo": "How to play",
    "como.1t": "Drag", "como.1": "Grab each box from the belt and drop it into the backpack. Tap it first to rotate it.",
    "como.2t": "Deliver", "como.2": "A full row or column ships and you get paid. Several at once: combo.",
    "como.3t": "Survive", "como.3": "Lost items that wander, melt or explode, coffee spilled on the belt… and a hen in a hurry.",
    "como.4t": "Don't upset her", "como.4": "Every box that falls costs you a cup of coffee. Out of coffee, Mrs. Rush fires you.",
    "sello.titulo": "Try the stamps", "sello.instruccion": "Tap the sheet: URGENT and the rubber stamps from the boxes.", "sello.boton": "Stamp",
    "sello.cuenta": (n) => (n >= 5 ? `${n} stamps. Mrs. Rush approves: your shift can start.` : `${n} ${n === 1 ? "stamp" : "stamps"}`),
    "capturas.titulo": "What it looks like", "capturas.escritorioPie": "On desktop", "capturas.movilPie": "On mobile",
    "capturas.escritorio": "Desktop game: the belt on top, the backpack with boxes, a hen and an egg.",
    "capturas.movil": "Mobile game: the tall backpack with boxes, the hen and the belt on top.",
    "chapa.reto": "Daily challenge: the same boxes for everyone", "chapa.semanas": "Three weeks of new cargo",
    "chapa.minijuegos": "Urgent-parcel minigames", "chapa.idiomas": "English, Spanish, Portuguese and Chinese",
    "chapa.tienda": "A shop with upgrades and backpacks to pick", "chapa.relajado": "Relaxed mode: no cups lost",
    "album.titulo": "Fill the album",
    "album.entradilla": "Some boxes arrive stamped with what's inside. Deliver them and their sticker goes straight into your album.",
    "album.rotulo": "Warehouse stickers", "album.hueco": "Still to find",
    "album.1t": "Stamped boxes", "album.1": "Three matching stamps in a line pay a bonus.",
    "album.2t": "An envelope a day", "album.2": "At the end of your shift, Mrs. Rush leaves you a sticker. Duplicates get paid out.",
    "album.3t": "Limited edition", "album.3": "At Halloween and Christmas there are stamps and stickers you only get those days.",
    "album.4t": "Lost property", "album.4": "Lost items you deliver go on the shelf. Sometimes their owner comes back for them.",
    final: "Mrs. Rush is waiting at the office. Don't be late.",
    "pie.ia": "Artwork and sounds made with the help of AI tools.",
    "pie.privacidad": "This page uses no cookies or analytics; it only loads fonts from Google Fonts.",
    "pie.privacidadEnlace": "Privacy",
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
  document.querySelectorAll("[data-t-label]").forEach((el) => el.setAttribute("aria-label", t[el.dataset.tLabel]));
  $("logo").src = $("logoBarra").src = `assets/img/logo-${l}.webp`;
  $("logo").alt = l === "es" ? "Mensajería del Caos" : "Chaos Couriers";
  $("capEscritorio").src = `assets/img/captura-escritorio-${l}.webp`;
  $("capMovil").src = `assets/img/captura-movil-${l}.webp`;
  document.querySelectorAll(".google-play-insignia").forEach((img) => {
    img.src = `assets/img/google-play-${l}.webp`;
    img.alt = l === "es" ? "Disponible en Google Play" : "Get it on Google Play";
  });
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
// Como en el juego: las cajas son de cartón, con su cinta de color y, la mitad, el
// sello de goma de lo que llevan. Lo especial va suelto: objetos extraviados con su
// etiqueta.
const PEGATINAS = ["pato", "trompeta", "yunque", "gnomo", "pecera", "vikingo", "tarta", "cactus", "dentadura", "telescopio"];
const EXTRAVIADOS = ["gallina", "helado", "gato", "globo", "jarron", "trasto", "iman", "purpurina", "confeti", "hielo-seco"];
const CINTAS = ["#C8443B", "#4C6E91", "#6E8B3D", "#E3B23C", "#D98A94", "#8E79A8"];
const VELOCIDAD = 60; // px por segundo
const interiorCaja = (sello) =>
  `<span class="cinta-adhesiva"></span>${sello ? `<img class="sello-caja" src="assets/img/sello-${sello}.webp" alt="" width="256" height="256" draggable="false">` : ""}`;
const cajaCarton = (color, sello) => `<span class="caja carton" style="--cinta-caja:${color}">${interiorCaja(sello)}</span>`;
const mezcla = PEGATINAS.flatMap((p, i) => {
  const caja = cajaCarton(CINTAS[i % CINTAS.length], i % 3 === 1 ? null : p);
  return i % 3 !== 2 ? [caja, `<span class="caja suelta"><img src="assets/img/objeto-${EXTRAVIADOS[i % EXTRAVIADOS.length]}.webp" alt="" width="256" height="256"><i class="etiqueta"></i></span>`] : [caja];
});
$("pista").innerHTML = [...mezcla, ...mezcla].join("");
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
const SELLOS_HOJA = ["pato", "trompeta", "yunque", "gnomo", "pecera", "vikingo", "tarta", "cactus", "dentadura", "telescopio", "calabaza", "regalo"];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
function estampar(x, y) {
  const hoja = $("hoja"), capa = $("hojaSellos");
  const img = document.createElement("img");
  // El primero siempre URGENTE; luego, mitad URGENTE y mitad sellos de goma de las cajas.
  const goma = sellos > 0 && Math.random() < .55;
  img.src = goma ? `assets/img/sello-${SELLOS_HOJA[Math.floor(Math.random() * SELLOS_HOJA.length)]}.webp` : "assets/img/sello-urgente.webp";
  img.alt = ""; img.width = img.height = 256;
  if (goma) img.classList.add("goma");
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
const SONIDOS = Object.fromEntries(["clac", "cacarea"].map((n) => [n, new Audio(`assets/audio/${n}.mp3`)]));
function suena(nombre, volumen = .6) {
  try { const s = SONIDOS[nombre].cloneNode(); s.volume = volumen; s.play().catch(() => {}); } catch { /* sin audio */ }
}
const gsap = window.gsap;
const animar = Boolean(gsap) && !reduceMotion;

// ── La gallina de la cinta: picotea, se duerme si nadie le hace caso, salta al
// tocarla y a la tercera pone un huevo que eclosiona y el pollito sale corriendo.
const gallina = $("gallina"), gallinaImg = $("gallinaImg");
let toques = 0, siesta = 0, ocupada = false;
const pose = (p) => { gallinaImg.src = `assets/img/gallina-${p}.webp`; };
const aDormir = () => { clearTimeout(siesta); siesta = setTimeout(() => pose("duerme"), 12000); };
aDormir();
gallina.addEventListener("click", () => {
  if (ocupada) return;
  toques++;
  suena("cacarea", .5);
  aDormir();
  if (toques % 3) {
    pose("salta");
    if (animar) gsap.timeline({ onComplete: () => pose("picotea") }).to(gallina, { y: -40, duration: .22, ease: "power2.out" }).to(gallina, { y: 0, duration: .45, ease: "bounce.out" });
    else setTimeout(() => pose("picotea"), 600);
    return;
  }
  ocupada = true;
  pose("pone");
  const huevo = document.createElement("img");
  huevo.className = "huevo"; huevo.alt = ""; huevo.src = "assets/img/huevo.webp";
  gallina.parentElement.append(huevo);
  huevo.style.left = `${gallina.offsetLeft + gallina.offsetWidth * .35}px`;
  huevo.style.top = `${gallina.offsetTop + gallina.offsetHeight * .55}px`;
  const fases = ["huevo-grieta", "huevo-eclosiona", "pollito"];
  const fin = () => { huevo.remove(); pose("picotea"); ocupada = false; };
  if (!animar) { setTimeout(fin, 800); return; }
  const tl = gsap.timeline({ onComplete: fin });
  tl.from(huevo, { y: -20, scale: .4, duration: .35, ease: "bounce.out" });
  fases.forEach((f) => tl.add(() => { huevo.src = `assets/img/${f}.webp`; }, "+=.55").to(huevo, { rotation: 10, duration: .06, yoyo: true, repeat: 3 }));
  tl.add(() => pose("picotea"))
    .to(huevo, { x: () => innerWidth, duration: 1.6, ease: "power1.in" }, "+=.2")
    .to(huevo, { y: -10, duration: .12, yoyo: true, repeat: 12, ease: "sine.inOut" }, "<");
});

// ── Temporada: en Halloween y Navidad la portada se viste como el juego (mismas
// fechas que TEMPORADAS en escena.js). ?temporada=halloween para probarla.
const TEMPORADAS = [{ id: "halloween", desde: [10, 20], hasta: [11, 2] }, { id: "christmas", desde: [12, 1], hasta: [1, 6] }];
function temporada(fecha = new Date()) {
  const forzada = new URLSearchParams(location.search).get("temporada");
  if (TEMPORADAS.some((x) => x.id === forzada)) return forzada;
  const hoy = (fecha.getMonth() + 1) * 100 + fecha.getDate();
  for (const { id, desde, hasta } of TEMPORADAS) {
    const a = desde[0] * 100 + desde[1], b = hasta[0] * 100 + hasta[1];
    if (a <= b ? hoy >= a && hoy <= b : hoy >= a || hoy <= b) return id;
  }
  return null;
}
const deTemporada = temporada();
if (deTemporada) document.body.dataset.temporada = deTemporada;

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
    .from(".portada .ctas > *", { scale: 0, rotation: -20, duration: .5, stagger: .1, ease: "back.out(2.4)" }, "-=.2")
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
  [".notas", ".album-notas"].forEach((lista) => gsap.from(`${lista} .nota`, {
    rotation: (i) => (i % 2 ? 24 : -24), y: -30, opacity: 0, transformOrigin: "50% 0%",
    duration: 1.1, stagger: .12, ease: "elastic.out(1, .4)",
    scrollTrigger: { trigger: lista, start: "top 80%" },
  }));
  // Álbum: la página entra girada y las pegatinas se pegan una a una.
  gsap.from(".album-hoja", { y: 60, rotation: -6, opacity: 0, duration: .6, ease: "back.out(1.4)", scrollTrigger: { trigger: ".album-mesa", start: "top 80%" } });
  gsap.from(".pegatina:not(.hueco)", {
    scale: 1.8, opacity: 0, duration: .3, stagger: .07, ease: "power3.in",
    scrollTrigger: { trigger: ".album-pegatinas", start: "top 75%" },
  });
  gsap.from(".hoja", { y: 60, rotation: 4, opacity: 0, duration: .6, ease: "back.out(1.4)", scrollTrigger: { trigger: ".hoja", start: "top 85%" } });
  // Polaroids: caen sobre el corcho.
  gsap.from(".polaroid", {
    y: -140, rotation: (i) => (i ? 14 : -10), opacity: 0, duration: .8, stagger: .15, ease: "bounce.out",
    scrollTrigger: { trigger: ".polaroids", start: "top 75%" },
  });
  // Paquete urgente: tiembla de vez en cuando; los minijuegos entran como fichas.
  gsap.to(".urgente-caja", { keyframes: { rotation: [0, -8, 7, -5, 3, 0], scale: [1, 1.06, 1, 1.04, 1, 1] }, duration: .7, repeat: -1, repeatDelay: 1.8, ease: "none" });
  gsap.from(".minijuego", { y: 40, rotation: (i) => (i % 2 ? 8 : -8), opacity: 0, duration: .55, stagger: .08, ease: "back.out(1.7)", scrollTrigger: { trigger: ".minijuegos", start: "top 80%" } });

  // Chapas: estampadas una a una.
  gsap.from(".chapas li", {
    scale: 1.8, opacity: 0, duration: .3, stagger: .1, ease: "power3.in",
    scrollTrigger: { trigger: ".chapas", start: "top 90%" },
  });
  // Final: la jefa espera dando golpecitos, la taza tiembla y el botón llama la atención.
  // La entrada usa yPercent y el golpecito de la jefa y: si los dos usaran y, el
  // golpecito arrancaría desde la posición de entrada y la dejaría tapada por el cartel.
  gsap.from(".final-escena img", { yPercent: 40, opacity: 0, duration: .6, stagger: .15, ease: "back.out(1.8)", scrollTrigger: { trigger: ".final", start: "top 80%" } });
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
