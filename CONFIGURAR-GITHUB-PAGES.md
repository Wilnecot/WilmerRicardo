# ⚙️ Guía Rápida: Configurar para GitHub Pages

## 🎯 Pasos Simples para Deploy

### PASO 1: Decide el nombre de tu repositorio

Tienes dos opciones:

**Opción A**: Repositorio personal (recomendado para portafolio principal)
```
Nombre del repo: tu-usuario.github.io
URL final: https://tu-usuario.github.io/
```

**Opción B**: Repositorio de proyecto
```
Nombre del repo: portafolio (o cualquier nombre)
URL final: https://tu-usuario.github.io/portafolio/
```

---

### PASO 2: Actualizar `vite.config.js`

Abre el archivo `vite.config.js` y cambia la línea 7:

**Si elegiste Opción A** (`usuario.github.io`):
```javascript
base: '/',
```

**Si elegiste Opción B** (nombre personalizado):
```javascript
base: '/tu-nombre-repo/', // ⚠️ Reemplaza con tu nombre real
```

**Ejemplo**:
```javascript
base: '/portafolio/', // Si tu repo se llama "portafolio"
```

---

### PASO 3: Actualizar URLs en archivos SEO

Encuentra y reemplaza `https://wilmerurda.com` con tu URL de GitHub Pages en estos archivos:

#### 📄 `public/robots.txt` (línea 6)
```txt
Sitemap: https://TU-USUARIO.github.io/TU-REPO/sitemap.xml
```

#### 📄 `public/sitemap.xml` (todas las líneas con `<loc>`)
Reemplaza:
```xml
<loc>https://wilmerurda.com/</loc>
```
Con:
```xml
<loc>https://TU-USUARIO.github.io/TU-REPO/</loc>
```

#### 📄 `index.html` (líneas 24, 27, 36)
Reemplaza:
```html
<meta property="og:url" content="https://wilmerurda.com/" />
<meta property="og:image" content="https://wilmerurda.com/og-image.png" />
<meta name="twitter:image" content="https://wilmerurda.com/og-image.png" />
```
Con:
```html
<meta property="og:url" content="https://TU-USUARIO.github.io/TU-REPO/" />
<meta property="og:image" content="https://TU-USUARIO.github.io/TU-REPO/og-image.png" />
<meta name="twitter:image" content="https://TU-USUARIO.github.io/TU-REPO/og-image.png" />
```

---

### PASO 4: Crear imagen Open Graph (OPCIONAL pero recomendado)

Crea una imagen llamada `og-image.png` con:
- **Dimensiones**: 1200 x 630 píxeles
- **Contenido**: Tu nombre, título, logo personal
- **Ubicación**: Guárdala en la carpeta `public/`

**Herramientas gratuitas**:
- Canva: https://www.canva.com/ (usa template "Open Graph")
- Figma: https://www.figma.com/
- Photopea: https://www.photopea.com/ (alternativa a Photoshop)

**Si no puedes crear la imagen ahora**:
Comenta estas líneas en `index.html`:
```html
<!-- <meta property="og:image" content="..." /> -->
<!-- <meta name="twitter:image" content="..." /> -->
```

---

### PASO 5: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. **Repository name**: Ingresa el nombre que elegiste (Paso 1)
3. **Description**: "Mi portafolio profesional"
4. **Public** o **Private**: Selecciona Public (necesario para GitHub Pages gratis)
5. **NO marques**: "Add a README file"
6. Click en **"Create repository"**

---

### PASO 6: Subir tu código a GitHub

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar Git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Portafolio profesional"

# Conectar con GitHub (reemplaza con tu info)
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git

# Cambiar a rama main
git branch -M main

# Subir código
git push -u origin main
```

**Ejemplo real**:
```bash
git remote add origin https://github.com/wilnecot/portafolio.git
git branch -M main
git push -u origin main
```

---

### PASO 7: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral izquierdo, click en **Pages**
4. En **"Source"**, selecciona: **GitHub Actions**
5. En **"Workflow permissions"** (Settings → Actions → General):
   - Selecciona **"Read and write permissions"**
   - Marca **"Allow GitHub Actions to create and approve pull requests"**
   - Click **"Save"**

---

### PASO 8: ¡Deploy Automático! 🚀

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (aparecerá un ✅ check verde)
4. Tu sitio estará disponible en:
   ```
   https://TU-USUARIO.github.io/TU-REPO/
   ```

---

## 🔍 Verificación Post-Deploy

Una vez que el deploy termine, verifica:

- [ ] La página carga correctamente
- [ ] El CSS y estilos se ven bien
- [ ] Las imágenes cargan
- [ ] El botón "Descargar CV" funciona
- [ ] Los enlaces a GitHub y LinkedIn funcionan
- [ ] La página responde bien en móvil
- [ ] El scroll suave funciona
- [ ] Los enlaces de navegación funcionan

---

## 🐛 Solución de Problemas Comunes

### "Página en blanco"
**Causa**: `base` en `vite.config.js` mal configurado  
**Solución**: 
1. Verifica que coincida con el nombre de tu repo
2. Debe incluir las barras: `/nombre-repo/`

### "Error 404 en assets"
**Causa**: Same as above  
**Solución**: Rebuilds después de corregir `vite.config.js`
```bash
git add vite.config.js
git commit -m "Fix: Update base URL"
git push
```

### "El CV no descarga"
**Causa**: Ruta incorrecta  
**Solución**: Verifica que `CV_WILMER.pdf` esté en `public/`

### "Workflow falla con error de permisos"
**Causa**: Permisos de GitHub Actions no configurados  
**Solución**: Ve al Paso 7, punto 5

---

## 📱 Comandos Útiles

```bash
# Ver el build localmente antes de deploy
npm run build
npm run preview

# Hacer cambios y subir
git add .
git commit -m "Descripción de cambios"
git push

# Ver logs de Git
git log --oneline

# Ver status de archivos
git status
```

---

## 🎨 Personalizaciones Futuras

Después del primer deploy exitoso, puedes:

1. **Dominio personalizado**:
   - Compra un dominio (ej: wilmerurda.com)
   - Configuralo en Settings → Pages → Custom domain

2. **Google Analytics**:
   - Agrega el tracking code en `index.html`
   - Monitorea visitantes y comportamiento

3. **Mejoras de contenido**:
   - Actualiza proyectos regularmente
   - Agrega testimonios
   - Incluye blog posts

---

## ✅ Checklist Final

Antes de hacer push, verifica que hayas completado:

- [ ] Nombre del repositorio decidido
- [ ] `vite.config.js` actualizado con `base` correcto
- [ ] URLs en `robots.txt` actualizadas
- [ ] URLs en `sitemap.xml` actualizadas
- [ ] Meta tags en `index.html` actualizados
- [ ] Imagen `og-image.png` creada (o comentada)
- [ ] Repositorio creado en GitHub
- [ ] Código subido con `git push`
- [ ] GitHub Pages habilitado en Settings
- [ ] Permisos de Actions configurados

---

## 🎯 Resultado Final

Después de completar todos los pasos:

✅ Tu portafolio estará en línea 24/7  
✅ URL permanente para compartir  
✅ Deploy automático con cada `git push`  
✅ Gratis y sin límites de ancho de banda  
✅ HTTPS habilitado por defecto  
✅ Optimizado para búsqueda en Google  

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa la pestaña **Actions** en GitHub para ver logs de error
2. Abre **DevTools** (F12) en el navegador → Console → Busca errores
3. Verifica que **todos** los pasos se completaron correctamente

---

**¡Éxito con tu portafolio!** 🚀✨
