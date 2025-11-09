# 🚀 Guía Completa de Despliegue

Este portafolio puede desplegarse gratuitamente en **GitHub Pages** o **Netlify**. Aquí tienes instrucciones paso a paso.

---

## 📋 Requisitos Previos

- ✅ Node.js instalado (versión 18 o superior)
- ✅ Cuenta de GitHub
- ✅ Git instalado y configurado

---

## 🎯 Opción 1: GitHub Pages (Recomendado - Automático)

### Paso 1: Preparar el Repositorio

1. **Si aún no tienes un repositorio en GitHub:**
   ```bash
   # En la carpeta del proyecto (docs)
   git init
   git add .
   git commit -m "Initial commit - Portafolio profesional"
   ```

2. **Crea un repositorio en GitHub:**
   - Ve a https://github.com/new
   - Nombre sugerido: `portfolio` o `wilnecot-portfolio`
   - **NO** inicialices con README (ya lo tienes)
   - Click en "Create repository"

3. **Conecta tu repositorio local con GitHub:**
   ```bash
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Configurar GitHub Pages

1. **Ve a tu repositorio en GitHub**
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En "Source", selecciona: **GitHub Actions**
5. ✅ ¡Listo! El despliegue se activará automáticamente

### Paso 3: Verificar el Despliegue

- Ve a la pestaña **Actions** en tu repositorio
- Deberías ver un workflow ejecutándose
- Cuando termine (⚡ check verde), tu sitio estará en:
  ```
  https://TU-USUARIO.github.io/NOMBRE-REPO/
  ```

### ⚠️ Configuración Importante para GitHub Pages

Si tu repositorio NO se llama `TU-USUARIO.github.io`, actualiza `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/NOMBRE-REPO/', // ⚠️ Cambia esto por el nombre de tu repo
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
```

Luego:
```bash
git add vite.config.js
git commit -m "Fix: Update base URL for GitHub Pages"
git push
```

---

## 🌐 Opción 2: Netlify (Más Simple)

### Método A: Despliegue Manual (Drag & Drop)

1. **Construir el proyecto:**
   ```bash
   npm install
   npm run build
   ```

2. **Desplegar:**
   - Ve a https://app.netlify.com/drop
   - Arrastra la carpeta `dist` que se creó
   - ✅ ¡Tu sitio está en línea en segundos!

### Método B: Despliegue desde GitHub (Automático)

1. **Sube tu código a GitHub** (sigue Paso 1 de GitHub Pages)

2. **Conecta con Netlify:**
   - Ve a https://app.netlify.com
   - Click en "Add new site" → "Import an existing project"
   - Selecciona "GitHub"
   - Busca y selecciona tu repositorio

3. **Configuración de Build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click en "Deploy"

4. **✅ Listo!** Tu sitio estará en: `https://nombre-random.netlify.app`

### Personalizar el Dominio en Netlify

1. En el dashboard de tu sitio
2. Click en "Site settings" → "Domain management"
3. Click en "Options" → "Edit site name"
4. Cambia a: `wilnecot-portfolio` (o el nombre que prefieras)
5. Tu sitio será: `https://wilnecot-portfolio.netlify.app`

---

## 🛠️ Solución de Problemas

### Error: "gh-pages no encontrado"

```bash
npm install -D gh-pages
```

### Error al hacer push a GitHub

```bash
# Verifica que estés en la rama main
git branch

# Si estás en 'master', cámbiala a 'main'
git branch -M main
```

### La página muestra en blanco (GitHub Pages)

- Verifica que `base` en `vite.config.js` esté configurado correctamente
- Debe ser `'/nombre-repo/'` (con las barras)

### Error de permisos en GitHub Actions

1. Ve a Settings → Actions → General
2. En "Workflow permissions", selecciona "Read and write permissions"
3. Click en "Save"

---

## 📱 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Modo desarrollo (localhost)
npm run dev

# Construir para producción
npm run build

# Previsualizar build local
npm run preview

# Desplegar manualmente a GitHub Pages
npm run deploy
```

---

## 🎨 Actualizaciones Futuras

Cada vez que hagas cambios:

**GitHub Pages:**
```bash
git add .
git commit -m "Descripción de cambios"
git push
```
El despliegue será automático ⚡

**Netlify:**
Si conectaste con GitHub, solo haz `git push`. Si usaste drag & drop, construye y arrastra `dist` nuevamente.

---

## 📞 Soporte

Si tienes problemas:
- GitHub Pages: Revisa la pestaña "Actions" en tu repo
- Netlify: Revisa "Deploy log" en el dashboard

---

¡Éxito con tu portafolio! 🎉
