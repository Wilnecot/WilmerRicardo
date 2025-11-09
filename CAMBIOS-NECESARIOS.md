# ⚠️ CAMBIOS NECESARIOS ANTES DE DEPLOY

Este documento lista EXACTAMENTE qué debes cambiar antes de hacer deploy a GitHub Pages.

---

## 🔴 CRÍTICO: Estos cambios son OBLIGATORIOS

### 1️⃣ `vite.config.js` - Línea 7

**ANTES** (actual):
```javascript
base: './', // Para GitHub Pages - cambia a '/nombre-repo/' si es necesario
```

**DESPUÉS** (tienes 2 opciones):

**Opción A** - Si tu repo se llama `tu-usuario.github.io`:
```javascript
base: '/',
```

**Opción B** - Si tu repo tiene otro nombre (ej: `portafolio`):
```javascript
base: '/portafolio/', // Cambia "portafolio" por el nombre de TU repositorio
```

📌 **Nota**: El nombre debe coincidir EXACTAMENTE con el nombre de tu repositorio en GitHub.

---

### 2️⃣ `public/robots.txt` - Línea 6

**ANTES**:
```txt
Sitemap: https://wilmerurda.com/sitemap.xml
```

**DESPUÉS**:
```txt
Sitemap: https://TU-USUARIO.github.io/TU-REPO/sitemap.xml
```

**Ejemplo real**:
```txt
Sitemap: https://wilnecot.github.io/portafolio/sitemap.xml
```

---

### 3️⃣ `public/sitemap.xml` - TODAS las URLs

Necesitas reemplazar `https://wilmerurda.com` con tu URL real en **todas** estas líneas:

**Líneas a cambiar**: 4, 10, 16, 22, 28, 34, 40

**ANTES**:
```xml
<loc>https://wilmerurda.com/</loc>
<loc>https://wilmerurda.com/#about</loc>
<loc>https://wilmerurda.com/#skills</loc>
<!-- etc... -->
```

**DESPUÉS**:
```xml
<loc>https://TU-USUARIO.github.io/TU-REPO/</loc>
<loc>https://TU-USUARIO.github.io/TU-REPO/#about</loc>
<loc>https://TU-USUARIO.github.io/TU-REPO/#skills</loc>
<!-- etc... -->
```

💡 **Tip**: Usa Find & Replace (Ctrl+H) en tu editor para cambiar todas a la vez.

---

### 4️⃣ `index.html` - Meta Tags Open Graph

**Línea 24**:
```html
<!-- ANTES -->
<meta property="og:url" content="https://wilmerurda.com/" />

<!-- DESPUÉS -->
<meta property="og:url" content="https://TU-USUARIO.github.io/TU-REPO/" />
```

**Línea 27**:
```html
<!-- ANTES -->
<meta property="og:image" content="https://wilmerurda.com/og-image.png" />

<!-- DESPUÉS -->
<meta property="og:image" content="https://TU-USUARIO.github.io/TU-REPO/og-image.png" />
```

**Línea 36**:
```html
<!-- ANTES -->
<meta name="twitter:image" content="https://wilmerurda.com/og-image.png" />

<!-- DESPUÉS -->
<meta name="twitter:image" content="https://TU-USUARIO.github.io/TU-REPO/og-image.png" />
```

---

## ⚠️ RECOMENDADO: No obligatorio pero mejorará tu portafolio

### 5️⃣ Crear `public/og-image.png`

**¿Qué es?**: Imagen que aparece cuando compartes tu portafolio en redes sociales.

**Especificaciones**:
- Tamaño: 1200 x 630 píxeles
- Formato: PNG o JPG
- Contenido sugerido:
  - Tu nombre completo
  - Título profesional
  - Logo o iniciales
  - Colores de tu marca (#4B6043, #C49A4A)

**Ubicación**: Guárdala en `public/og-image.png`

**Si NO puedes crear la imagen ahora**:
Comenta las líneas 27-29 y 36 en `index.html`:
```html
<!-- <meta property="og:image" content="..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" /> -->
<!-- <meta name="twitter:image" content="..." /> -->
```

---

### 6️⃣ `public/manifest.json` - Línea 5 (Solo si NO usas usuario.github.io)

**ANTES**:
```json
"start_url": "/",
```

**DESPUÉS** (si tu repo tiene nombre personalizado):
```json
"start_url": "/tu-repo/",
```

---

## 📋 Checklist de Verificación

Marca cada ítem después de completarlo:

**Archivos Modificados**:
- [ ] ✅ `vite.config.js` - Base URL actualizada
- [ ] ✅ `public/robots.txt` - URL del sitemap corregida
- [ ] ✅ `public/sitemap.xml` - Todas las URLs actualizadas (7 lugares)
- [ ] ✅ `index.html` - Meta tags Open Graph actualizados (3 lugares)
- [ ] ⚠️ `public/og-image.png` - Imagen creada (o meta tags comentados)
- [ ] ⚠️ `public/manifest.json` - start_url actualizada (si aplica)

**GitHub Setup**:
- [ ] Repositorio creado en GitHub
- [ ] Nombre del repositorio coincide con el `base` en vite.config.js
- [ ] Código subido con `git push`
- [ ] GitHub Pages habilitado (Settings → Pages)
- [ ] Source configurado como "GitHub Actions"
- [ ] Permisos de Actions configurados (Read & Write)

**Pruebas**:
- [ ] Build local exitoso (`npm run build`)
- [ ] Preview local funciona (`npm run preview`)
- [ ] Workflow de GitHub Actions pasó con ✅
- [ ] Página carga correctamente en GitHub Pages
- [ ] CV descarga funciona
- [ ] Todos los enlaces funcionan

---

## 🎯 Ejemplo Completo

Asumamos que:
- Tu usuario de GitHub es: `wilnecot`
- Nombre del repositorio: `mi-portafolio`
- URL final: `https://wilnecot.github.io/mi-portafolio/`

### Cambios específicos:

**`vite.config.js`**:
```javascript
base: '/mi-portafolio/',
```

**`public/robots.txt`**:
```txt
Sitemap: https://wilnecot.github.io/mi-portafolio/sitemap.xml
```

**`public/sitemap.xml`**:
```xml
<loc>https://wilnecot.github.io/mi-portafolio/</loc>
<loc>https://wilnecot.github.io/mi-portafolio/#about</loc>
<!-- etc... -->
```

**`index.html`**:
```html
<meta property="og:url" content="https://wilnecot.github.io/mi-portafolio/" />
<meta property="og:image" content="https://wilnecot.github.io/mi-portafolio/og-image.png" />
<meta name="twitter:image" content="https://wilnecot.github.io/mi-portafolio/og-image.png" />
```

---

## 🚀 Después de Hacer los Cambios

```bash
# Guardar cambios
git add .
git commit -m "Config: Update URLs for GitHub Pages deployment"

# Subir a GitHub
git push

# El workflow de GitHub Actions se ejecutará automáticamente
# Ve a la pestaña "Actions" para ver el progreso
```

---

## ❓ ¿Dudas sobre qué URL usar?

Tu URL de GitHub Pages sigue esta regla simple:

```
https://[TU-USUARIO].github.io/[NOMBRE-REPO]/
```

**Ejemplos**:
- Usuario: `john` → Repo: `portfolio` → URL: `https://john.github.io/portfolio/`
- Usuario: `maria` → Repo: `site` → URL: `https://maria.github.io/site/`
- Usuario: `wilnecot` → Repo: `wilnecot.github.io` → URL: `https://wilnecot.github.io/`

**Excepción**: Si tu repositorio se llama EXACTAMENTE `tu-usuario.github.io`, entonces la URL es simplemente `https://tu-usuario.github.io/` (sin nombre de repo adicional).

---

## 💡 Tips Finales

1. **Copia EXACTAMENTE** - No inventes URLs, usa el formato exacto mostrado arriba
2. **Incluye las barras** - `/portafolio/` no es lo mismo que `portafolio`
3. **Sensible a mayúsculas** - GitHub Pages es sensible a mayúsculas/minúsculas
4. **Verifica dos veces** - Un error de tipeo puede romper todo el sitio
5. **Build local primero** - Prueba con `npm run build && npm run preview` antes de hacer push

---

**¿Listo para deploy?** ¡Adelante! 🚀
