# 🚀 Guía Rápida de Deploy a GitHub Pages

## ⚡ INICIO RÁPIDO (5 minutos)

```bash
# 1. Configurar proyecto para GitHub Pages
npm run setup

# 2. Verificar que todo está correcto
npm run verify

# 3. Crear repositorio en GitHub y subir código
git init
git add .
git commit -m "Initial commit: Portfolio ready for GitHub Pages"
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M main
git push -u origin main
```

**Listo!** Tu portafolio se desplegará automáticamente en GitHub Pages.

---

## 📋 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo local |
| `npm run build` | Construir para producción |
| `npm run preview` | Preview del build local |
| `npm run setup` | 🆕 Configurar para GitHub Pages |
| `npm run verify` | 🆕 Verificar configuración |
| `npm run check` | 🆕 Alias de verify |
| `npm run deploy` | Deploy manual con gh-pages |

---

## 🎯 Proceso Completo Paso a Paso

### Paso 1: Configuración Automática

```bash
npm run setup
```

Este comando te preguntará:
1. Tu usuario de GitHub
2. Nombre del repositorio

Y actualizará automáticamente:
- ✅ `vite.config.js`
- ✅ `public/robots.txt`
- ✅ `public/sitemap.xml`
- ✅ `index.html`
- ✅ `public/manifest.json`

### Paso 2: Verificación

```bash
npm run verify
```

Verifica más de 40 aspectos del proyecto:
- 📂 Archivos esenciales
- ⚙️ Configuración de Vite
- ⚛️ Componentes React
- 🔗 URLs y SEO
- 🎨 Assets
- Y más...

### Paso 3: GitHub Repository Setup

1. **Crear repositorio en GitHub**
   - Ve a: https://github.com/new
   - Nombre: El que elegiste en el setup
   - Público
   - NO inicialices con README

2. **Subir tu código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio configured for GitHub Pages"
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git branch -M main
   git push -u origin main
   ```

### Paso 4: Configurar GitHub Pages

1. Ve a tu repositorio → **Settings** → **Pages**
2. En "Source", selecciona: **GitHub Actions**
3. Ve a **Settings** → **Actions** → **General**
4. En "Workflow permissions":
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### Paso 5: ¡Deploy Automático! 🎉

El workflow de GitHub Actions se ejecutará automáticamente.

- Ve a la pestaña **Actions** para ver el progreso
- Cuando veas un ✅ verde, tu sitio estará en línea
- URL: `https://tu-usuario.github.io/tu-repo/`

---

## 🔍 Verificación Post-Deploy

Después del deploy, verifica:

- [ ] La página carga sin errores
- [ ] Los estilos se aplican correctamente
- [ ] Las animaciones funcionan
- [ ] El botón "Descargar CV" funciona
- [ ] Los enlaces externos se abren en nueva pestaña
- [ ] La navegación smooth scroll funciona
- [ ] Responsive en móvil funciona bien

---

## 🐛 Solución de Problemas

### "Página en blanco" después del deploy

**Causa**: Base URL incorrecto en `vite.config.js`

**Solución**:
```bash
# Ejecuta el setup nuevamente
npm run setup

# Verifica
npm run verify

# Rebuilds y redeploy
git add .
git commit -m "Fix: Update base URL configuration"
git push
```

### "Assets no cargan (404)"

**Causa**: Same as above

**Diagnóstico**:
1. Abre DevTools (F12) → Console
2. Busca errores 404
3. Verifica que las rutas coincidan con tu configuración

### "Workflow falla con error de permisos"

**Causa**: Permisos de GitHub Actions no configurados

**Solución**:
1. Settings → Actions → General
2. Workflow permissions → **Read and write permissions**
3. Guardar y volver a ejecutar el workflow

### "El CV no descarga"

**Causa**: Archivo no está en la ubicación correcta

**Verificación**:
```bash
# Verifica que el archivo existe
ls public/CV_WILMER.pdf

# Si no existe, muévelo ahí
```

---

## 📁 Archivos de Ayuda Incluidos

Este proyecto incluye documentación completa:

1. **`REPORTE-FINAL.md`**
   - Análisis profesional completo del proyecto
   - Calificación de cada aspecto
   - Lista de problemas y soluciones

2. **`REVISION-GITHUB-PAGES.md`**
   - Revisión técnica detallada
   - Checklist pre-deploy
   - Troubleshooting avanzado

3. **`CONFIGURAR-GITHUB-PAGES.md`**
   - Guía paso a paso con ejemplos
   - Explicación de cada configuración
   - Tips y mejores prácticas

4. **`CAMBIOS-NECESARIOS.md`**
   - Lista específica de cambios requeridos
   - Ejemplos de código
   - Verificación con checkboxes

5. **`DEPLOYMENT.md`**
   - Guía original de despliegue
   - Múltiples opciones (GitHub Pages, Netlify)
   - Comandos útiles

---

## 🎨 Personalización Post-Deploy

### Agregar Google Analytics

1. Obtén tu ID de Google Analytics
2. Agrega en `index.html` antes de `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Dominio Personalizado

1. Compra un dominio (ej: wilmerurda.com)
2. En GitHub: Settings → Pages → Custom domain
3. Ingresa tu dominio
4. Configura DNS según las instrucciones de GitHub

### Crear Imagen Open Graph

Crea `public/og-image.png`:
- **Tamaño**: 1200 x 630 píxeles
- **Contenido**: Tu nombre, título profesional, diseño visual
- **Herramientas**: Canva, Figma, Photopea

---

## 📊 Mantenimiento

### Actualizar el Portafolio

Cada vez que hagas cambios:

```bash
# Desarrollo local
npm run dev

# Cuando estés satisfecho
git add .
git commit -m "Update: Descripción de cambios"
git push

# GitHub Actions hará el deploy automáticamente
```

### Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar todo
npm update

# Actualizar package-lock.json
npm install
```

### Verificar Estado del Build

1. Ve a tu repositorio en GitHub
2. Pestaña **Actions**
3. Verás el historial de deploys
4. Click en cualquiera para ver logs detallados

---

## 🌟 Mejores Prácticas

### Git Commits

✅ **Buenos commits**:
```bash
git commit -m "Add: Nueva sección de testimonios"
git commit -m "Fix: Corrección de enlaces rotos"
git commit -m "Update: Actualización de CV y experiencia"
git commit -m "Style: Mejoras en responsive mobile"
```

❌ **Malos commits**:
```bash
git commit -m "cambios"
git commit -m "asdf"
git commit -m "fix"
```

### Actualizaciones de Contenido

- 📅 **Semanal**: Revisar y corregir typos
- 📅 **Mensual**: Actualizar proyectos y experiencia
- 📅 **Trimestral**: Revisar y actualizar CV
- 📅 **Anual**: Rediseño si es necesario

### Performance

- ✅ Optimiza imágenes antes de subir
- ✅ Mantén el CV bajo 500KB
- ✅ Minimiza el uso de librerías pesadas
- ✅ Usa lazy loading para imágenes grandes

---

## 🎯 Roadmap Sugerido

### Fase 1: Deploy Inicial (HOY)
- [x] Configuración con `npm run setup`
- [x] Verificación con `npm run verify`
- [ ] Crear repositorio en GitHub
- [ ] Primer deploy
- [ ] Verificación post-deploy

### Fase 2: Optimización (Semana 1)
- [ ] Crear og-image.png
- [ ] Configurar Google Analytics
- [ ] Registrar en Search Console
- [ ] Probar en múltiples dispositivos

### Fase 3: Mejoras (Mes 1)
- [ ] Agregar más proyectos
- [ ] Sección de testimonios
- [ ] Blog (opcional)
- [ ] Formulario de contacto funcional

### Fase 4: Avanzado (Mes 2+)
- [ ] Dominio personalizado
- [ ] Modo oscuro
- [ ] Versión en inglés (i18n)
- [ ] Dashboard de métricas

---

## 💡 Tips Profesionales

1. **SEO**: Después del deploy, registra tu sitio en Google Search Console
2. **Backups**: GitHub ya es tu backup, pero considera exportar el sitio mensualmente
3. **Testing**: Prueba en diferentes navegadores (Chrome, Firefox, Safari, Edge)
4. **Mobile**: El 60%+ de visitas será desde móvil, prioriza responsive
5. **LinkedIn**: Pon tu URL de GitHub Pages en tu perfil de LinkedIn
6. **CV**: Mantén el CV actualizado, es el archivo más descargado

---

## 📞 Soporte

### Documentación Oficial
- [Vite - Static Deploy](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [React Docs](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/docs)

### Logs y Debug
```bash
# Logs locales durante build
npm run build

# Ver preview local del build
npm run preview

# Logs de GitHub Actions
# Ve a: github.com/TU-USUARIO/TU-REPO/actions
```

---

## ✅ Checklist Final

Antes de compartir tu portafolio:

**Contenido**
- [ ] Información personal actualizada
- [ ] CV descargable y actualizado
- [ ] Enlaces a GitHub/LinkedIn funcionan
- [ ] Proyectos destacados incluidos
- [ ] Sin errores ortográficos

**Técnico**
- [ ] `npm run verify` pasa sin errores
- [ ] Build local exitoso
- [ ] Preview local funciona
- [ ] Deploy en GitHub Pages exitoso
- [ ] Todas las páginas cargan

**SEO**
- [ ] URLs correctas en sitemap
- [ ] Meta tags actualizados
- [ ] og-image creado (opcional)
- [ ] robots.txt configurado

**Testing**
- [ ] Probado en Chrome
- [ ] Probado en Firefox
- [ ] Probado en Safari/Edge
- [ ] Probado en móvil
- [ ] Responsive funciona bien

---

## 🎉 ¡Felicidades!

Si llegaste hasta aquí y completaste todos los pasos, tu portafolio profesional ya está en línea y listo para compartir con el mundo.

**Próximo paso**: Comparte tu portafolio en LinkedIn, Twitter, y con potenciales empleadores.

---

**¿Necesitas ayuda?** Revisa los archivos de documentación incluidos o abre un issue en GitHub.

**¡Mucho éxito con tu portafolio!** 🚀✨
