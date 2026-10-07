# Pop It! — Billy Salmeron

Landing page de una tienda de juguetes antiestrés (*pop it*), creada como tarea práctica de **Diseño Web** para el rol de tutor. El sitio es adaptable a distintos tamaños de pantalla y está disponible en **español y ruso**. Visual Code

## Contenido

- [Vista general](#vista-general)
- [Tecnologías](#tecnologías)
- [Cumplimiento de los criterios de la tarea](#cumplimiento-de-los-criterios-de-la-tarea)
- [Decisiones técnicas y por qué](#decisiones-técnicas-y-por-qué)
- [Funcionalidades con JavaScript](#funcionalidades-con-javascript)
- [Diseño responsive](#diseño-responsive)
- [Cómo ejecutarlo](#cómo-ejecutarlo)

## Vista general

La página tiene cinco bloques:

1. **Hero**: logotipo, menú, título "POP IT!", subtítulo y botón de compra, sobre un fondo naranja con el pop it en forma de helado.
2. **Qué es un Pop it**: texto explicativo centrado.
3. **Catálogo**: tres productos con imagen, nombre y botón de compra.
4. **Reglas del juego**: texto y fotografía sobre una mancha decorativa naranja.
5. **Footer**: logotipo y enlaces (formas de pago, envíos, mayoreo, contacto).

## Tecnologías

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica: `header`, `nav`, `main`, `section`, `footer`, listas `ul/li`, encabezados jerárquicos (`h1` → `h2` → `h3`). |
| **CSS3** | Estilos, variables CSS, Flexbox, Grid-ready, media queries, transiciones y `mask-image`. |
| **JavaScript (vanilla)** | Menú hamburguesa y cambio de idioma. Sin librerías ni frameworks. |
| **Metodología BEM** | Nomenclatura de clases (Bloque, Elemento, Modificador). |
| **Google Fonts** | Tipografía **Montserrat** (pesos 400, 500, 600, 800 y 900), con soporte para cirílico. |


## Cumplimiento de los criterios de la tarea

### 1. Código válido y organizado con BEM

Cada bloque independiente de la página tiene su propio nombre, y sus partes se nombran con bloque__elemento. Las variantes se expresan con bloque_modificador_valor.

Ejemplo: el bloque card tiene los elementos card__image y card__name, y el bloque button tiene los modificadores button_type_primary y button_type_small.

### 2. Flexbox / Grid para la distribución

- **Flexbox** en el header, el hero, el menú, el footer, las tarjetas del catálogo y la sección de reglas.
- `justify-content: space-evenly` en el catálogo: en el diseño, el espacio entre las tres tarjetas y los bordes es igual.
- `justify-content: space-between` y `flex: 0 1 872px` en el footer, para que los enlaces tengan huecos iguales.
- `flex-direction: column` en tablet y móvil para apilar los elementos.

### 3. Padding y margin

- Los espacios verticales entre secciones se logran con `padding` en cada sección (`.about`, `.choose`, `.rules`, `.footer`).
- Los espacios entre elementos internos (título → párrafo → botón) se logran con `margin-bottom`.
- Los valores salen de **medir el diseño original en píxeles** (por ejemplo, 99px de padding superior en "Qué es un Pop it", 39px entre el título del catálogo y las imágenes).
- `box-sizing: border-box` y un reset de `margin`/`padding` evitan sumas inesperadas.

### 4. Coincidir con el diseño

- Colores tomados del diseño: naranja `#ffbd69`, menta `#c9f4ef`, gris oscuro `#303030`, definidos como **variables CSS** (`--color-orange`, etc.).
- Tipografía Montserrat con los pesos del original: 900 para títulos, 600 para el subtítulo y 500 para botones y menú.
- Tamaños y posiciones de títulos, botones (252×66px y 130×40px), imágenes (150×150px en el catálogo, 450×350px en la foto de reglas) y secciones (657px de alto en el hero).

### 5. Adaptable a diferentes pantallas

Ver [Diseño responsive](#diseño-responsive).

### Punto extra: JavaScript

Menú hamburguesa y cambio de idioma. Ver [Funcionalidades con JavaScript](#funcionalidades-con-javascript).

## Decisiones técnicas y por qué

**Variables CSS (`:root`).** Los colores y la fuente se definen una sola vez. Si hay que cambiar el naranja, se cambia en un solo lugar.

**Reset mínimo propio.** En lugar de una librería, se quitan los márgenes por defecto, los estilos de lista y de enlace. Así se controla cada espacio y se entiende todo el CSS.


## Funcionalidades con JavaScript

### Menú hamburguesa

- Aparece en pantallas de hasta 768px.
- Alterna la clase `menu_opened` (despliega el menú con una transición de `max-height`) y `header__burger_active` (convierte las tres líneas en una "X").
- Se cierra al tocar un enlace del menú o al agrandar la ventana.

### Cambio de idioma (español ↔ ruso)

- Los textos traducibles tienen un atributo `data-i18n="clave"` en el HTML. Las traducciones viven en un objeto `translations` en `script.js`, con una entrada por idioma.
- También se traducen los `alt` de las imágenes (`data-i18n-alt`) y los `aria-label` (`data-i18n-aria`).
- Al cambiar de idioma se actualizan el `lang` del `<html>`, el `<title>` de la pestaña y el botón resaltado.
- La preferencia se guarda en `localStorage` (dentro de un `try/catch` por si el navegador la bloquea).
- Por defecto, el sitio abre en español.

**Por qué este enfoque:** es simple, no necesita servidor ni librerías, y agregar un idioma nuevo solo requiere añadir otra entrada al objeto `translations`.

## Diseño responsive

El diseño se escribió primero para escritorio (1366px) y se adapta con `media queries` de escritorio hacia abajo:

| Ancho | Cambios |
|---|---|
| **≤ 1200px** | El helado del hero se ancla a la derecha para no chocar con el título. |
| **≤ 1100px** (tablet) | Menos padding lateral, título más pequeño, la sección de reglas pasa a columna. |
| **≤ 768px** (móvil) | Aparece el menú hamburguesa. El hero se apila con el helado debajo del texto. El catálogo y el footer pasan a una sola columna. |
| **≤ 480px** | Botón principal y títulos más pequeños. |

El `<meta name="viewport">` es necesario para que el responsive funcione en móviles.

## Cómo ejecutarlo

No requiere instalación ni compilación:

1. Descarga o clona el repositorio.
2. Abre `index.html` en el navegador (o usa la extensión **Live Server** de VS Code).
