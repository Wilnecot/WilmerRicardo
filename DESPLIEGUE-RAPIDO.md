# 🚀 Despliegue Rápido - Guía Simplificada

## ⚡ Opción Más Rápida: Netlify Drop

**Solo 3 pasos:**

1. Instala dependencias y construye:
   ```bash
   npm install
   npm run build
   ```

2. Ve a: https://app.netlify.com/drop

3. Arrastra la carpeta `dist` → ¡Listo! 🎉

---

## 🐙 GitHub Pages (Automático)

### Primera vez:

1. **Crea un repo en GitHub:**
   - Ve a: https://github.com/new
   - Nombre: `portfolio` o `mi-portafolio`
   - **NO** marques ninguna opción adicional
   - Click "Create repository"

2. **Sube tu código** (copia y pega en tu terminal):
   ```bash
   cd c:\Users\User\Downloads\CV\docs
   git init
   git add .
   git commit -m "Mi portafolio profesional"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portfolio.git
   git push -u origin main
   ```
   ⚠️ Reemplaza `TU-USUARIO` con tu usuario de GitHub

3. **Activa GitHub Pages:**
   - En tu repo, click **Settings**
   - Click **Pages** (menú izquierdo)
   - En "Source", selecciona: **GitHub Actions**
   - ✅ ¡Listo!

4. **IMPORTANTE:** Actualiza `vite.config.js`:
   
   Cambia la línea 7:
   ```javascript
   base: '/portfolio/', // ⚠️ Usa el nombre de tu repo
   ```
   
   Luego:
   ```bash
   git add vite.config.js
   git commit -m "Configurar base URL"
   git push
   ```

5. **Ver tu sitio:**
   - Ve a **Actions** en GitHub
   - Espera que termine (✓)
   - Tu sitio: `https://TU-USUARIO.github.io/portfolio/`

---

## 🔄 Actualizaciones Futuras

Cuando hagas cambios:

```bash
git add .
git commit -m "Actualización del portafolio"
git push
```

¡Se actualiza automáticamente! ⚡

---

## 🆘 Ayuda Rápida

**¿No tienes Git?** Descárgalo de: https://git-scm.com/

**¿No tienes Node.js?** Descárgalo de: https://nodejs.org/

**¿Problemas con Git?** 
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@example.com"
```

**¿La página sale en blanco?**
- Revisa que `base` en `vite.config.js` sea `'/nombre-repo/'`

---

## 📋 Lista de Verificación

Antes de desplegar, asegúrate de:
- [ ] Node.js instalado
- [ ] Dependencias instaladas (`npm install`)
- [ ] El proyecto compila sin errores (`npm run build`)
- [ ] Tienes cuenta de GitHub (para GitHub Pages)

---

**¿Prefieres video tutorial?** Ve el archivo `DEPLOYMENT.md` para instrucciones más detalladas.
