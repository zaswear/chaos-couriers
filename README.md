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
- La cinta usa la misma banda que el juego y avanza al paso de las cajas.
- El sello se estampa al tocar la hoja (con el sonido del juego).
- **Demo jugable**: mochila de 4×4 y tres cajas. Se arrastran o se tocan (caja y
  luego casilla, que vale también con teclado). Fila o columna llena → se entregan
  enteras las cajas que la tocan. A las 3 entregas sale el botón de jugar.
- La entrada del logo, las notas, los polaroids y el final se animan al hacer scroll.
- `og.png` (1200×630) es la imagen al compartir el enlace.

Para probarla en local: `python3 -m http.server` en esta carpeta.

## Derechos

El juego, sus ilustraciones, sonidos, logos y capturas (`assets/`, `og.png` y
los iconos) son © 2026 zaswear, todos los derechos reservados; no se pueden
reutilizar sin permiso. Las ilustraciones y los sonidos se crearon con ayuda de
herramientas de IA. Las fuentes (Lilita One, Special Elite, Nunito) se cargan de
Google Fonts con su propia licencia (SIL Open Font License). GSAP va con su
licencia estándar sin coste (https://gsap.com/standard-license) y canvas-confetti
con licencia ISC.
