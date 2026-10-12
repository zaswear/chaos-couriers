# Mensajería del Caos · Chaos Couriers — web

Página de presentación del juego **Mensajería del Caos / Chaos Couriers**, que se
juega gratis en el navegador en **https://zaswear.itch.io/chaos-couriers**.

Publicada con GitHub Pages en https://zaswear.github.io/chaos-couriers/.

## Qué es

HTML, CSS y JS sin build: `index.html`, `estilo.css` y `app.js`. Las animaciones usan
GSAP 3.13 (con ScrollTrigger) y el confeti canvas-confetti 1.9.3, **copiados en
`js/vendor/`** en vez de cargados de un CDN, para no llamar a terceros. Si no cargan,
o con `prefers-reduced-motion`, la página funciona igual sin animaciones: todo se
anima con `gsap.from`, así que el estado de reposo es el final.

- Español e inglés (`?lang=en`, o el idioma del navegador). Los textos están en `TEXTOS` de `app.js`.
- La cinta usa la misma banda que el juego y avanza al paso de las cajas. Las cajas
  son como en el juego: cartón, cinta teñida de su color y, algunas, el sello de goma
  de su contenido (`sello-*.webp`); lo especial va suelto con etiqueta (`objeto-*.webp`).
- La gallina de la cinta salta al tocarla y a
  la tercera pone un huevo que acaba en pollito. Sección del paquete urgente con
  los seis minijuegos. En Halloween y Navidad (mismas fechas que el juego) la
  portada usa el fondo de temporada; `?temporada=halloween` para probarlo.
- Sección del álbum: pegatinas, cajas selladas, sobre del día, edición limitada y
  objetos perdidos. Si el juego cambia, revisar estos textos y el arte copiado de
  `apps/sites/chaos-couriers/assets/img/` del monorepo.
- El sello se estampa al tocar la hoja (con el sonido del juego).
- La entrada del logo, las notas, los polaroids y el final se animan al hacer scroll.
- `og.png` (1200×630) es la imagen al compartir el enlace.

Para probarla en local: `python3 -m http.server` en esta carpeta.

**Al cambiar `estilo.css` o `app.js`, sube su `?v=` en `index.html`**
(los 8 primeros caracteres de `cat estilo.css app.js | sha256sum`). GitHub Pages deja
cachearlos 10 minutos y, sin versión, el navegador mezcla HTML nuevo con CSS viejo: la
página de privacidad salió sin estilos por eso (ahora lleva los suyos en línea).

## Derechos

El juego, sus ilustraciones, sonidos, logos y capturas (`assets/`, `og.png` y
los iconos) son © 2026 zaswear, todos los derechos reservados; no se pueden
reutilizar sin permiso. Las ilustraciones y los sonidos se crearon con ayuda de
herramientas de IA. Las fuentes (Lilita One, Special Elite, Nunito) se cargan de
Google Fonts con su propia licencia (SIL Open Font License). GSAP va con su
licencia estándar sin coste (https://gsap.com/standard-license) y canvas-confetti
con licencia ISC.
