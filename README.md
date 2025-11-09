# Portafolio Profesional - Wilnecot

Portafolio web profesional moderno que integra experiencia en ingeniería ambiental, análisis de datos, SIG y desarrollo de software.

## Características

- **Diseño Moderno**: Interfaz minimalista y profesional con animaciones suaves
- **Responsive**: Totalmente adaptable a dispositivos móviles, tablets y desktop
- **Paleta de Colores Personalizada**: 
  - Verde Oliva (#4B6043) - Representa el compromiso ambiental
  - Gris Grafito (#2F2F2F) - Profesionalismo y tecnología
  - Dorado Miel (#C49A4A) - Innovación y excelencia
- **Tipografía Premium**: Montserrat para títulos y Open Sans para contenido
- **Iconografía Profesional**: Lucide React icons
- **Diseño Moderno**: Interfaz limpia y profesional con paleta de colores personalizada
- **100% Responsive**: Optimizado para móviles, tablets y desktop con breakpoints detallados
- **Alto Rendimiento**: Optimizado con Vite, lazy loading y code splitting
- **Animaciones Profesionales**: Transiciones suaves, efectos hover y animaciones CSS avanzadas
- **Temática Ambiental**: Diseño que refleja el compromiso con el medio ambiente
- **Profesional**: Estructura clara y organizada del contenido
- **Seguro**: Headers de seguridad, protección XSS y configuración CSP
- **Accesible**: ARIA labels, navegación por teclado y soporte para lectores de pantalla
- **SEO Optimizado**: Meta tags completos, Open Graph, Twitter Cards y robots.txt
- **Descarga de CV**: Botón para descargar CV en PDF
- **Scroll to Top**: Botón flotante para volver al inicio
- **Loading Screen**: Pantalla de carga profesional con animaciones

## Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool de última generación
- **TailwindCSS** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos y escalables

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📂 Estructura del Proyecto

```
portafolio-profesional/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navegación principal
│   │   ├── Hero.jsx        # Sección de presentación
│   │   ├── About.jsx       # Perfil profesional
│   │   ├── Skills.jsx      # Habilidades técnicas
│   │   ├── Experience.jsx  # Experiencia laboral
│   │   ├── Education.jsx   # Formación académica
│   │   ├── Projects.jsx    # Proyectos destacados
│   │   ├── Contact.jsx     # Información de contacto
│   │   └── Footer.jsx      # Pie de página
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos personalizados
│   └── index.css           # Configuración Tailwind
├── tailwind.config.js      # Configuración de Tailwind
└── package.json
```

## 🎯 Secciones

1. **Hero** - Presentación con llamados a la acción
2. **Sobre Mí** - Perfil profesional y competencias blandas
3. **Habilidades** - Categorías de habilidades técnicas
4. **Experiencia** - Timeline de experiencia profesional
5. **Formación** - Educación y certificaciones
6. **Proyectos** - Portfolio de proyectos en GitHub
7. **Contacto** - Información de contacto y redes sociales

## 🌐 Despliegue

### Opción 1: Netlify (Recomendado - Más Fácil)

**Método rápido:**
```bash
npm run build
```
Luego arrastra la carpeta `dist` a [netlify.com](https://netlify.com)

**Método automático desde GitHub:**
1. Sube tu código a GitHub
2. Conecta tu repositorio en Netlify
3. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Opción 2: GitHub Pages

**Despliegue manual:**
```bash
npm install -D gh-pages
npm run deploy
```

**Despliegue automático:**
- El workflow de GitHub Actions ya está configurado
- Solo haz push a la rama `main`
- Habilita GitHub Pages en Settings → Pages

📖 **Guía completa:** Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas

El proyecto está listo para ser desplegado en:
- ✅ Netlify (configurado con `netlify.toml`)
- ✅ GitHub Pages (configurado con GitHub Actions)
- ✅ Vercel
- ✅ Render

## 👨‍💻 Autor

**Wilnecot**
- Email: wilnecot-20@hotmail.com
- LinkedIn: [linkedin.com/in/wilnecot](https://linkedin.com/in/wilnecot)
- GitHub: [github.com/wilnecot](https://github.com/wilnecot)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

*"Integrando tecnología y medio ambiente para un futuro sostenible"* 🌍💻
