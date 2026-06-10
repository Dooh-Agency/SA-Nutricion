# BRIEF TÉCNICO Y DE DISEÑO

## Sol Álvarez Nutrición — Sitio Web en Next.js

### Para Claude Code

---

## 1\. CONTEXTO DEL PROYECTO

Soledad Álvarez es **Licenciada en Nutrición y Puericultora**, radicada en Mijas, España (atiende presencialmente en Marbella y online globalmente). Su marca personal combina nutrición clínica, salud intestinal, lactancia materna y acompañamiento consciente en maternidad.

El sitio existente ([https://www.solealvarez.com](https://www.solealvarez.com)) está construido en Wix. El objetivo es **migrarlo a Next.js con una evolución UX**: misma identidad visual e igual branding, pero con mejor estructura narrativa, mejor jerarquía de contenido y experiencia de usuario más fluida.

**No es una réplica 1:1. Es una versión mejorada del mismo concepto.**

---

## 2\. STACK TECNOLÓGICO

```
Framework:     Next.js 14+ (App Router)
Estilos:       Tailwind CSS
Fuentes:       Google Fonts (ver sección tipografía)
Animaciones:   Framer Motion (scroll-triggered reveals, fade/slide)
Iconos:        Lucide React
Formulario:    React Hook Form + Zod (validación)
Deploy target: Vercel (optimizar para ello)
```

**Estructura de carpetas sugerida:**

```
/app
  /page.tsx              → Inicio
  /servicios/page.tsx    → Servicios detallados
  /sobre-mi/page.tsx     → Quién soy
  /contacto/page.tsx     → Contacto
/components
  /ui/                   → Componentes base (botones, tarjetas, etc.)
  /sections/             → Secciones de página
/lib
  /constants.ts          → Textos, datos de servicios, equipo
/public
  /images/               → Fotos y assets
```

---

## 3\. SISTEMA DE DISEÑO — BRANDING OFICIAL

### 3.1 Paleta Cromática (EXACTA, extraída del key visual de marca)

```css
/* Verdes */
--color-green-dark:    #23433f;   /* Verde Sofisticado Oscuro — uso: fondos premium, texto sobre claro */
--color-green-brand:   #5b6569;   /* Verde Branding Principal — uso: nav, botones primarios */
--color-green-lime:    #c0c481;   /* Verde Lima Claro — uso: acentos, badges */

/* Rosas y Salmones */
--color-salmon-dark:   #f16bad;   /* Rosa Salmón Oscuro — uso: acentos decorativos */
--color-salmon-mid:    #f6d3b5;   /* Rosa Salmón Claro — uso: fondos sección alternada */
--color-salmon-light:  #ffddb6;   /* Naranja Claro — uso: highlight suave */
--color-orange-mid:    #fcba63;   /* Naranja Medio — uso: CTA secundario, íconos */
--color-orange-dark:   #cc7ebb;   /* Naranja Oscuro — uso: hover states, énfasis */

/* Base */
--color-base-cream:    #f7fef8;   /* Rosa Base Neutro — uso: fondo general del sitio */
--color-text-dark:     #1a1a1a;   /* Texto principal */
--color-text-muted:    #5c5c5c;   /* Texto secundario */
```

**Regla de uso de color:**

- Fondo principal del sitio: `#f7fef8` (cream muy suave, casi blanco con tinte cálido)  
- Secciones alternadas: `#f6d3b5` diluido al 30% o `#ffddb6` al 20% para suavidad  
- Sección premium/oscura (CTA de cierre): `#23433f` con texto en `#f7fef8`  
- Botones primarios: fondo `#23433f`, texto blanco, hover `#5b6569`  
- Botones secundarios/outline: borde `#23433f`, texto `#23433f`, hover fondo `#f6d3b5`

### 3.2 Tipografía (EXACTA, extraída del key visual)

```css
/* ISOTIPO / MONOGRAMA (SA) */
Font: "Playfair Brown Serif Demo" (solo para el logo SVG — hardcodear como SVG)

/* LOGOTIPO — nombre "Soledad Alvarez" */
Font: "Inter" (Google Fonts) — peso Semibold Italic
Subtítulo bajo nombre: Inter Regular

/* TEXTOS GENERALES DEL SITIO */
Font principal: "Inter" (Google Fonts)
  - Headings grandes (H1/H2): Inter Semibold, tamaños 48-64px desktop
  - Body / párrafos: Inter Regular, 16-18px, line-height 1.7
  - Labels / captions: Inter Regular, 13-14px
  
/* DISPLAY / HEADLINES EDITORIALES */
Font secundaria: Serif elegante tipo "Playfair Display" (Google Fonts)
  - Uso: frases clave en italic, citas destacadas, taglines
  - Ejemplo: "Tu bienestar es único, como vos." → Playfair Display Italic
```

**Escala tipográfica desktop:**

```
Display (hero tagline):  56-64px / Playfair Display Italic / line-height 1.1
H1:                      48px / Inter Semibold
H2:                      36px / Inter Semibold  
H3:                      24px / Inter Semibold
Body large:              18px / Inter Regular / lh 1.7
Body:                    16px / Inter Regular / lh 1.6
Caption/label:           13px / Inter Regular / uppercase tracking-wide
```

**Escala tipográfica mobile:**

```
Display:  38px
H1:       32px
H2:       26px
H3:       20px
Body:     16px
```

### 3.3 Logo e Isotipo

El isotipo es una **"S" serif estilizada** que forma también una "A" entrelazada (monograma SA). Se usa en 5 variantes de color según el key visual:

- Sobre verde oscuro: `#f7fef8` (blanco cremoso)  
- Sobre salmón: `#23433f` (verde oscuro)  
- Sobre naranja: `#23433f`  
- Sobre fondo claro: `#5b6569` (verde brand)  
- Versión completa (isotipo \+ nombre): verde brand sobre fondo cream

**Implementación:** El logo debe estar como componente SVG inline o archivo SVG en `/public/images/logo.svg` y `/public/images/logo-white.svg`.

---

## 4\. ARQUITECTURA DE PÁGINAS Y CONTENIDO

### 4.1 PÁGINA: INICIO (`/`)

#### Sección 1 — HEADER / NAV

```
Layout: Sticky top, fondo transparente → blur/fondo cream al scrollear
Contenido:
  - Logo (isotipo + nombre) — alineado a la izquierda
  - Nav links centro o derecha: Inicio | Sobre Mí | Servicios | Contacto
  - CTA botón: "Reservar consulta" → WhatsApp link
  
Comportamiento:
  - Al scroll > 50px: fondo #f7fef8 con box-shadow suave + backdrop-blur
  - Mobile: hamburger menu con drawer lateral
  - Active state: underline sutil en el link de la sección actual
```

#### Sección 2 — HERO

```
Layout: Full-width, altura mínima 90vh, split en 2 columnas (60/40)
  Columna izquierda (texto):
    - Eyebrow label (pequeño, uppercase, verde brand): "Nutrición integrativa · Marbella & Online"
    - H1 display (Playfair Display Italic): "Nutrición enfocada en el bienestar integral"
    - Párrafo bajada (Inter Regular): "Te acompaño a transformar tu alimentación desde 
       un lugar consciente, humano y sostenible."
    - Botones CTA:
        Primario: "Reservar consulta" → wa.me link
        Secundario (outline): "Conocer servicios" → /servicios
    - Pequeño detalle decorativo: línea orgánica o punto de color (verde lime o salmón)
    
  Columna derecha (imagen):
    - Foto de Sol (retrato profesional) en contenedor con clip-path redondeado o forma orgánica
    - Fondo de imagen: sutil tono salmón claro #f6d3b5
    - Badge flotante pequeño: "Presencial · Marbella" y "Online · Global"

Fondo hero: #f7fef8 (cream base)
Animación entrada: fade + slide-up suave (Framer Motion, delay escalonado por elemento)
```

#### Sección 3 — PRESENTACIÓN BREVE (ABOUT SNIPPET)

```
Layout: 2 columnas, fondo salmón muy suave (#fdf0e8)
  Izquierda: foto secundaria o elemento decorativo (hoja, textura orgánica)
  Derecha:
    - Eyebrow: "Quién soy"
    - H2: "Lic. Soledad Álvarez"
    - Subtítulo italic (Playfair): "Licenciada en Nutrición · Puericultora · Health Coach"
    - Párrafo (2-3 líneas del Landing doc):
        "Me formé en Argentina y hoy, desde Mijas, acompaño a mujeres y familias 
         en procesos de transformación real: sin dietas, sin imposición, 
         con escucha activa y mirada integrativa."
    - Link texto: "Conocer mi historia completa →" → /sobre-mi
    
Animación: slide-in desde izquierda al entrar en viewport
```

#### Sección 4 — SERVICIOS (GRID)

```
Layout: Fondo #f7fef8, sección centrada, grid de 2×2 en desktop / 1 col en mobile
  Header de sección:
    - Eyebrow: "Lo que ofrezco"
    - H2: "Servicios"
    - Párrafo intro: "Acompañamiento individual y personalizado, con una mirada 
       integrativa que combina ciencia, experiencia clínica y escucha activa."

  Cards de servicio (4 cards):
    Card 1: Nutrición y Salud Intestinal
      - Ícono: Lucide `Leaf` o `Heart`
      - Título: "Nutrición y salud intestinal"
      - Descripción corta (2 líneas)
      - Accent color borde izquierdo: #5b6569 (verde brand)
      
    Card 2: Lactancia Materna
      - Ícono: Lucide `Baby` o `Milk`  
      - Título: "Lactancia materna"
      - Descripción corta
      - Accent: #fcba63 (naranja)

    Card 3: Maternidad
      - Ícono: Lucide `Heart` 
      - Título: "Acompañamiento en la maternidad"
      - Descripción corta
      - Accent: #f6d3b5 (salmón)
      
    Card 4: Educación Nutricional
      - Ícono: Lucide `BookOpen`
      - Título: "Educación nutricional"
      - Descripción corta
      - Accent: #c0c481 (verde lima)

  Cards styling:
    - Fondo blanco (#ffffff) con border-radius 16px
    - box-shadow: 0 2px 20px rgba(35,67,63,0.08)
    - hover: translateY(-4px) + shadow más pronunciada
    - Transición: 300ms ease
    
  CTA bajo grid: botón outline "Ver todos los servicios" → /servicios
  Animación: cards aparecen con stagger (0.1s entre cada una) al entrar en viewport
```

#### Sección 5 — CITA / MANIFIESTO

```
Layout: Full-width, fondo #23433f (verde oscuro), centrado, padding generoso
  Contenido:
    - Comillas decorativas grandes en #c0c481 (verde lima), opacity 0.3
    - Frase principal (Playfair Display Italic, 36-42px, color #f7fef8):
        "Cada pequeño cambio en tu bienestar es un gran paso hacia una vida más plena."
    - Tagline bajo (Inter Regular, color #c0c481):
        "Tu nutrición, única como vos."
        
Animación: fade-in al llegar al 40% de la sección visible
```

#### Sección 6 — MODALIDADES DE ATENCIÓN

```
Layout: 2 columnas simétricas, fondo cream
  Columna 1: "Presencial"
    - Ícono: Lucide `MapPin`
    - Título: "Presencial"
    - Texto: "Centro Kos · Centro Platino, local 7 · Rancho Park, Elviria, Marbella"
    - Pequeño dato: "Un espacio cuidado y acogedor"
    
  Columna 2: "Online"
    - Ícono: Lucide `Video`
    - Título: "Online"
    - Texto: "Desde la comodidad de tu casa, sin importar la distancia."
    - Pequeño dato: "Disponible para todo el mundo hispanohablante"

Styling: borde sutil entre columnas (divisor vertical en desktop), separación clara en mobile
```

#### Sección 7 — FOOTER

```
Layout: Fondo #23433f, 3 columnas en desktop / 1 columna en mobile
  Columna 1: Logo (versión blanca) + tagline
  Columna 2: Links de navegación
  Columna 3: Contacto
    - Email: hola@solealvarez.com
    - Teléfono: +34 665 98 50 26
    - Instagram: @solealvarez.nutricion
    - Link a WhatsApp
    
  Bottom bar: "© 2026 Sol Álvarez Nutrición · Diseñado con amor"
  Color textos footer: #f7fef8 y #c0c481 para links
```

---

### 4.2 PÁGINA: SERVICIOS (`/servicios`)

```
Hero compacto (50vh):
  - Fondo #f6d3b5 (salmón suave)
  - H1: "Servicios"
  - Párrafo intro: texto completo del Landing doc sobre servicios
  - Breadcrumb: Inicio > Servicios

4 bloques de servicios expandidos (alternando layout izquierda/derecha):
  Cada bloque tiene:
    - Número grande decorativo (01, 02, 03, 04) en verde lima, opacity 0.15
    - Título del servicio (H2)
    - Descripción completa (texto del Landing doc)
    - Lista de casos/aspectos que aborda (bullets → sin estilo nativo, 
      usar checkmark icon en verde brand)
    - CTA: "Consultar sobre este servicio" → WhatsApp con mensaje pre-cargado

Bloque final — Equipo Interdisciplinario:
  - Título: "Un equipo integrativo para acompañarte de forma completa"
  - Párrafo intro del Landing doc
  - Grid de 3 columnas: Pediatra | Nutricionista Digestiva | Nutricionista Infantil
    + Psicóloga Perinatal | Terapias Complementarias
  - Cards simples: título del profesional + descripción 1-2 líneas
  - Fondo cards: #f7fef8 con borde #c0c481
```

---

### 4.3 PÁGINA: SOBRE MÍ (`/sobre-mi`)

```
Hero split (60/40, min-height 70vh):
  Izquierda: Foto grande de Sol (vertical/retrato), 
    contenedor con border-radius asimétrico (más redondeado arriba-izquierda)
    Fondo detrás: tono salmón #f6d3b5
  Derecha:
    - Eyebrow: "Quién soy"
    - H1: "Soy Soledad Álvarez"
    - Bajada italic (Playfair): "Lic. en Nutrición · Puericultora · Health Coach"
    - Párrafo completo del Landing doc — "Quién soy" (texto íntegro, sin recortar)

Sección formación/valores:
  - Título: "Mi mirada"
  - 3 columnas con valores clave (Cercanía · Empatía · Escucha activa)
    Cada columna: ícono + título + 2 líneas de descripción
  
Sección lema:
  - Fondo #23433f
  - Frase en Playfair Italic, blanco: "Intentar ser una mejor persona que ayer, 
     y aportar al menos un granito de arena que ayude a alguien a sentirse mejor."
  - Firma: "— Sol Álvarez"

CTA final:
  - H3: "¿Empezamos juntas?"
  - Botón primario: "Reservar consulta" → WhatsApp
  - Link texto: "Ver mis servicios →"
```

---

### 4.4 PÁGINA: CONTACTO (`/contacto`)

```
Layout: 2 columnas en desktop / 1 columna mobile (50/50)
  Columna izquierda — Datos de contacto:
    - H1: "Hablemos"
    - Párrafo: "Podés escribirme por WhatsApp o completar el formulario 
       y te respondo a la brevedad."
    - Dato: Email → hola@solealvarez.com
    - Dato: Teléfono/WhatsApp → +34 665 98 50 26
    - Dato: Ubicación → Marbella, España
    - Dato: Atención Online → Global
    - Botón WhatsApp: fondo #25D366, ícono WhatsApp + "Escribirme por WhatsApp"
    - Link Instagram
    
  Columna derecha — Formulario:
    Campos:
      - Nombre completo (requerido)
      - Email (requerido, validación)
      - Teléfono (opcional)
      - Motivo de consulta (select dropdown):
          Opciones: Nutrición y salud intestinal | Lactancia materna | 
          Acompañamiento en maternidad | Educación nutricional | Otro
      - Mensaje / Cuéntame qué necesitás (textarea, requerido)
      - Checkbox: "Acepto la política de privacidad" (requerido)
    
    Submit: botón primario "Enviar mensaje"
    Estado éxito: mensaje inline en verde, sin reload de página
    Estado error: mensajes de validación por campo en rojo suave
    
    Nota importante: El formulario en esta primera versión puede ser 
    funcional con mailto: o con un servicio como Resend/Formspree. 
    Documentar esto con un TODO comment claro.

Sección inferior — mapa o info de ubicación presencial:
  - Texto: "Si preferís atención presencial, te recibo en:"
  - Dirección completa: Centro Kos, Centro Platino Local 7, Rancho Park, Elviria, Marbella
  - (Placeholder para embed de Google Maps)
```

---

## 5\. ANIMACIONES Y MOTION

### Librería: Framer Motion

```
// Variantes estándar a usar en todo el sitio:

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

// Trigger: usar Framer Motion whileInView + viewport={{ once: true, margin: "-80px" }}
// Para accesibilidad: respetar prefers-reduced-motion → no animar si está activo
```

**Qué anima y qué no:** | Elemento | Animación | |----------|-----------| | Hero headline | fadeInUp con delay 0ms | | Hero párrafo | fadeInUp con delay 150ms | | Hero botones | fadeInUp con delay 300ms | | Hero imagen | fadeIn con delay 200ms | | Section headers (H2 \+ eyebrow) | fadeInUp al entrar en viewport | | Service cards | stagger fadeInUp al entrar en viewport | | Quote section | fadeIn al 40% visible | | Nav | sin animación (siempre visible) | | Footer | sin animación | | Hover en cards | solo CSS transform (no Framer) | | Hover en botones | solo CSS transition |

---

## 6\. COMPONENTES REUTILIZABLES A CREAR

```
// components/ui/Button.tsx
// Props: variant ("primary" | "secondary" | "ghost"), size, href, onClick
// Primary: fondo #23433f, texto blanco, hover → #5b6569
// Secondary: outline #23433f, hover → fondo #f6d3b5
// Ghost: solo texto + underline

// components/ui/SectionHeader.tsx  
// Props: eyebrow, title, description, align ("left" | "center")
// Eyebrow: uppercase, letter-spacing 0.1em, color verde brand, font-size 12px
// Title: H2 Inter Semibold
// Description: Inter Regular muted

// components/ui/ServiceCard.tsx
// Props: icon, title, description, accentColor
// Borde izquierdo de 3px con accentColor
// Hover: lift + shadow

// components/ui/AnimatedSection.tsx
// Wrapper con Framer Motion whileInView
// Props: delay, className, children

// components/layout/Navbar.tsx
// Sticky, transparent → frosted al scroll
// Mobile: hamburger con AnimatePresence para el menú

// components/layout/Footer.tsx
// Fondo verde oscuro, 3 cols desktop
```

---

## 7\. RESPONSIVE BREAKPOINTS (Tailwind)

```
sm:  640px   → Mobile landscape
md:  768px   → Tablet
lg:  1024px  → Desktop pequeño / Tablet landscape  
xl:  1280px  → Desktop estándar
2xl: 1536px  → Desktop grande

Reglas clave:
- Grids 2-col en desktop → 1-col en mobile (md:grid-cols-2)
- Hero split → apilado en mobile (imagen primero, texto abajo)
- Nav desktop → hamburger drawer en mobile (< md)
- Padding de secciones: py-24 desktop → py-16 tablet → py-12 mobile
- Max-width contenedor: max-w-6xl mx-auto px-6 (consistente en todas las páginas)
- Tipografía: escalar con clamp() o clases responsive de Tailwind
```

---

## 8\. SEO Y METADATA

```
// Cada página debe tener su metadata en Next.js App Router:

// /app/page.tsx
export const metadata = {
  title: "Sol Álvarez | Nutrición & Salud · Marbella y Online",
  description: "Licenciada en Nutrición y Puericultora. Acompañamiento personalizado en nutrición integrativa, lactancia materna y salud intestinal. Presencial en Marbella y online.",
  openGraph: {
    title: "Sol Álvarez Nutrición",
    description: "...",
    url: "https://www.solealvarez.com",
    siteName: "Sol Álvarez Nutrición",
    locale: "es_ES",
    type: "website"
  }
}
```

---

## 9\. VARIABLES DE ENTORNO Y CONFIGURACIÓN

```
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=34665985026
NEXT_PUBLIC_EMAIL=hola@solealvarez.com
NEXT_PUBLIC_INSTAGRAM=solealvarez.nutricion
# Si se usa Resend para el formulario:
RESEND_API_KEY=tu_key_aqui
```

```ts
// lib/constants.ts — centralizar todos los textos y datos
export const CONTACT = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
  email: process.env.NEXT_PUBLIC_EMAIL,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
  instagramUrl: `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}/`,
  address: "Centro Kos · Centro Platino, local 7 · Rancho Park, Elviria, Marbella",
}

export const SERVICES = [ /* array con los 4 servicios completos */ ]
```

---

## 10\. DECISIONES DE DISEÑO UX — MEJORAS RESPECTO AL WIXSITE

| Punto del sitio actual (Wix) | Mejora en la nueva versión |
| :---- | :---- |
| Nav sin sticky, pierde contexto | Nav sticky con transición suave |
| Hero con imagen pequeña y texto sin jerarquía | Hero split con tipografía display dominante |
| Servicios como lista plana de texto | Grid de cards con ícono, color accent y hover |
| No hay sección de credenciales/confianza | Mini sección de valores y formación en Sobre Mí |
| CTA solo al inicio y al final | CTA WhatsApp flotante (mobile) \+ en cada sección clave |
| Footer minimalista sin info útil | Footer con 3 columnas, contacto completo y nav |
| Sin animaciones | Reveals suaves al scroll para dar profundidad |
| Formulario inexistente | Formulario de contacto completo con validación |
| Sin separación visual entre secciones | Backgrounds alternados cream/salmón para ritmo visual |

---

## 11\. ASSETS E IMÁGENES

**Imágenes reales (a proveer por el cliente):**

- Foto principal de Sol — retrato profesional (mínimo 800×1000px)  
- Foto secundaria — en contexto de trabajo o naturaleza  
- Foto hero alternativa — paisaje o ambiente cálido

**Mientras no haya imágenes reales:**

```
// Usar placeholders de Unsplash con temática coherente:
// https://images.unsplash.com/photo-[ID]?w=800&q=80
// Temática: mujer, naturaleza, wellness, comida saludable, maternidad
// Paleta: tonos cálidos, verdes, luz natural — NUNCA fondos blancos clínicos

// En el código: siempre usar next/image con:
import Image from 'next/image'
// Con width, height, alt descriptivo y placeholder="blur"
```

---

## 12\. CHECKLIST DE ENTREGA

```
[ ] npm run build sin errores TypeScript
[ ] Lighthouse score ≥ 90 en Performance, Accessibility, SEO, Best Practices
[ ] Todas las imágenes con alt text descriptivo
[ ] prefers-reduced-motion: las animaciones se desactivan
[ ] Focus visible en todos los elementos interactivos (teclado accesible)
[ ] WhatsApp link funcional con número correcto
[ ] Formulario de contacto funcional (al menos mailto: fallback)
[ ] Responsive verificado en 375px, 768px, 1024px, 1440px
[ ] Metadata SEO completa en todas las páginas
[ ] No hay console.errors en ninguna página
[ ] Variables de entorno documentadas en .env.example
```

---

## 13\. TONO VISUAL DE REFERENCIA

El sitio debe transmitir:

- **Calidez sin dulzura excesiva** — no infantil, no clínico  
- **Profesionalismo con humanidad** — no frío, no genérico  
- **Premium accesible** — calidad visual pero nunca distante o elitista  
- **Natural y orgánico** — texturas suaves, formas redondeadas, sin aristas duras

**Referentes de estilo visual:**

- Editorial de bienestar femenino (tipo Goop, pero más cálido y menos aspiracional)  
- Studio de yoga premium \+ clínica nutricional europea  
- Colores tierra \+ verde salvia \+ cream — nunca azules corporativos ni rojos

**Lo que NO debe parecer:**

- Una app de fitness / dieta (no neons, no gradientes vibrantes)  
- Una clínica médica estéril (no blancos fríos, no azules hospitalarios)  
- Un template genérico de Wix/WordPress (sin cajas con sombra drop-shadow pesada, sin botones rectangulares sin borde-radius)

---

*Brief generado para Claude Code — Proyecto SA Nutrición 2026* *Versión: 1.0 | Fecha: Junio 2026*  
