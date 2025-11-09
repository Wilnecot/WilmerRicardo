#!/usr/bin/env node

/**
 * Script de Verificación Pre-Deploy
 * 
 * Verifica que todos los archivos necesarios estén presentes y correctamente configurados
 * antes de hacer deploy a GitHub Pages.
 * 
 * Uso: node verificar-proyecto.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colores para la terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

let errorsCount = 0;
let warningsCount = 0;
let checksCount = 0;

// Función para mostrar resultados
function check(message, isOk, isWarning = false) {
  checksCount++;
  if (isOk) {
    console.log(colors.green + '  ✅ ' + message + colors.reset);
  } else if (isWarning) {
    warningsCount++;
    console.log(colors.yellow + '  ⚠️  ' + message + colors.reset);
  } else {
    errorsCount++;
    console.log(colors.red + '  ❌ ' + message + colors.reset);
  }
}

// Banner
console.log('\n' + colors.cyan + '╔════════════════════════════════════════════════════════════╗' + colors.reset);
console.log(colors.cyan + '║' + colors.bright + '     VERIFICACIÓN DE PROYECTO - GITHUB PAGES                ' + colors.cyan + '║' + colors.reset);
console.log(colors.cyan + '╚════════════════════════════════════════════════════════════╝' + colors.reset);
console.log('\n');

// 1. Verificar archivos esenciales
console.log(colors.bright + '📂 1. Archivos Esenciales\n' + colors.reset);

const essentialFiles = [
  'package.json',
  'vite.config.js',
  'index.html',
  'src/main.jsx',
  'src/App.jsx',
  'public/favicon.svg',
  'public/CV_WILMER.pdf',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/manifest.json',
  'public/404.html',
  '.github/workflows/deploy.yml',
];

essentialFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  check(`${file}`, exists);
});

// 2. Verificar vite.config.js
console.log('\n' + colors.bright + '⚙️  2. Configuración de Vite\n' + colors.reset);

try {
  const viteConfig = fs.readFileSync(path.join(__dirname, 'vite.config.js'), 'utf8');
  
  // Verificar que tiene un base definido
  const hasBase = /base:\s*['"][^'"]+['"]/.test(viteConfig);
  check('Base URL configurada', hasBase);
  
  // Extraer el valor del base
  const baseMatch = viteConfig.match(/base:\s*['"]([^'"]+)['"]/);
  if (baseMatch) {
    const baseValue = baseMatch[1];
    console.log(colors.cyan + '     Base actual: ' + colors.bright + baseValue + colors.reset);
    
    // Advertir si aún está en './'
    if (baseValue === './') {
      check('Base URL necesita actualización (actualmente "./")', false, true);
      console.log(colors.yellow + '     💡 Ejecuta: node setup-github-pages.js' + colors.reset);
    }
  }
  
  // Verificar que tiene outDir
  const hasOutDir = /outDir:\s*['"]dist['"]/.test(viteConfig);
  check('Output directory configurado como "dist"', hasOutDir);
  
} catch (error) {
  check('Error leyendo vite.config.js', false);
}

// 3. Verificar package.json
console.log('\n' + colors.bright + '📦 3. Package.json\n' + colors.reset);

try {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  
  check('Script "build" definido', !!pkg.scripts?.build);
  check('Script "dev" definido', !!pkg.scripts?.dev);
  check('Script "preview" definido', !!pkg.scripts?.preview);
  check('Dependencia "react" presente', !!pkg.dependencies?.react);
  check('Dependencia "react-dom" presente', !!pkg.dependencies?.['react-dom']);
  check('DevDependency "vite" presente', !!pkg.devDependencies?.vite);
  check('DevDependency "gh-pages" presente', !!pkg.devDependencies?.['gh-pages'], true);
  
} catch (error) {
  check('Error leyendo package.json', false);
}

// 4. Verificar componentes React
console.log('\n' + colors.bright + '⚛️  4. Componentes React\n' + colors.reset);

const components = [
  'src/components/Header.jsx',
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/Skills.jsx',
  'src/components/Experience.jsx',
  'src/components/Education.jsx',
  'src/components/Projects.jsx',
  'src/components/Contact.jsx',
  'src/components/Footer.jsx',
  'src/components/ScrollToTop.jsx',
  'src/components/LoadingScreen.jsx',
];

components.forEach(component => {
  const exists = fs.existsSync(path.join(__dirname, component));
  check(path.basename(component), exists);
});

// 5. Verificar assets públicos
console.log('\n' + colors.bright + '🎨 5. Assets Públicos\n' + colors.reset);

check('Favicon presente', fs.existsSync(path.join(__dirname, 'public/favicon.svg')));
check('CV PDF presente', fs.existsSync(path.join(__dirname, 'public/CV_WILMER.pdf')));

const ogImageExists = fs.existsSync(path.join(__dirname, 'public/og-image.png'));
check('Imagen Open Graph (og-image.png)', ogImageExists, !ogImageExists);
if (!ogImageExists) {
  console.log(colors.yellow + '     💡 Crea una imagen 1200x630px o comenta las meta tags en index.html' + colors.reset);
}

// 6. Verificar URLs en archivos
console.log('\n' + colors.bright + '🔗 6. URLs y SEO\n' + colors.reset);

try {
  // robots.txt
  const robotsTxt = fs.readFileSync(path.join(__dirname, 'public/robots.txt'), 'utf8');
  const hasWilmerUrl = robotsTxt.includes('wilmerurda.com');
  check('robots.txt - URLs actualizadas', !hasWilmerUrl, hasWilmerUrl);
  
  // sitemap.xml
  const sitemap = fs.readFileSync(path.join(__dirname, 'public/sitemap.xml'), 'utf8');
  const sitemapHasWilmerUrl = sitemap.includes('wilmerurda.com');
  check('sitemap.xml - URLs actualizadas', !sitemapHasWilmerUrl, sitemapHasWilmerUrl);
  
  // index.html
  const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const indexHasWilmerUrl = indexHtml.includes('wilmerurda.com');
  check('index.html - URLs actualizadas', !indexHasWilmerUrl, indexHasWilmerUrl);
  
  if (hasWilmerUrl || sitemapHasWilmerUrl || indexHasWilmerUrl) {
    console.log(colors.yellow + '     💡 Ejecuta: node setup-github-pages.js para actualizar URLs' + colors.reset);
  }
  
} catch (error) {
  check('Error verificando URLs', false);
}

// 7. Verificar GitHub Actions
console.log('\n' + colors.bright + '🔄 7. GitHub Actions\n' + colors.reset);

try {
  const workflow = fs.readFileSync(path.join(__dirname, '.github/workflows/deploy.yml'), 'utf8');
  
  check('Workflow configurado', true);
  check('Build command presente', workflow.includes('npm run build'));
  check('Deploy step presente', workflow.includes('peaceiris/actions-gh-pages'));
  check('Publish directory: ./dist', workflow.includes('publish_dir: ./dist'));
  
} catch (error) {
  check('Error leyendo workflow de GitHub Actions', false);
}

// 8. Verificar TailwindCSS
console.log('\n' + colors.bright + '🎨 8. TailwindCSS\n' + colors.reset);

check('tailwind.config.js presente', fs.existsSync(path.join(__dirname, 'tailwind.config.js')));
check('postcss.config.js presente', fs.existsSync(path.join(__dirname, 'postcss.config.js')));

try {
  const tailwindConfig = fs.readFileSync(path.join(__dirname, 'tailwind.config.js'), 'utf8');
  check('Configuración de Tailwind válida', tailwindConfig.includes('content:'));
} catch (error) {
  check('Error leyendo tailwind.config.js', false);
}

// 9. Verificar .gitignore
console.log('\n' + colors.bright + '🚫 9. Git Ignore\n' + colors.reset);

try {
  const gitignore = fs.readFileSync(path.join(__dirname, '.gitignore'), 'utf8');
  check('node_modules ignorado', gitignore.includes('node_modules'));
  check('dist ignorado', gitignore.includes('dist'));
} catch (error) {
  check('.gitignore presente', false);
}

// 10. Verificar integridad de rutas en código
console.log('\n' + colors.bright + '🔍 10. Rutas en Componentes\n' + colors.reset);

try {
  // Verificar que el CV esté referenciado correctamente
  const heroContent = fs.readFileSync(path.join(__dirname, 'src/components/Hero.jsx'), 'utf8');
  const contactContent = fs.readFileSync(path.join(__dirname, 'src/components/Contact.jsx'), 'utf8');
  
  check('Hero.jsx - Ruta del CV correcta', heroContent.includes('/CV_WILMER.pdf'));
  check('Contact.jsx - Ruta del CV correcta', contactContent.includes('/CV_WILMER.pdf'));
  
} catch (error) {
  check('Error verificando rutas en componentes', false);
}

// Resumen final
console.log('\n' + colors.cyan + '═══════════════════════════════════════════════════════════' + colors.reset);
console.log(colors.bright + '\n📊 RESUMEN DE VERIFICACIÓN\n' + colors.reset);

console.log(`Total de verificaciones: ${colors.bright}${checksCount}${colors.reset}`);
console.log(colors.green + `✅ Correctos: ${checksCount - errorsCount - warningsCount}` + colors.reset);
console.log(colors.yellow + `⚠️  Advertencias: ${warningsCount}` + colors.reset);
console.log(colors.red + `❌ Errores: ${errorsCount}` + colors.reset);

console.log('\n');

if (errorsCount > 0) {
  console.log(colors.red + colors.bright + '❌ HAY ERRORES CRÍTICOS - NO DEPLOY TODAVÍA' + colors.reset);
  console.log(colors.yellow + 'Corrige los errores antes de hacer deploy.' + colors.reset);
  console.log('\n');
  process.exit(1);
} else if (warningsCount > 0) {
  console.log(colors.yellow + colors.bright + '⚠️  HAY ADVERTENCIAS - REVISAR ANTES DE DEPLOY' + colors.reset);
  console.log(colors.yellow + 'El proyecto funcionará, pero se recomienda atender las advertencias.' + colors.reset);
  console.log('\n');
  console.log(colors.cyan + '💡 Sugerencia: Ejecuta ' + colors.bright + 'node setup-github-pages.js' + colors.reset);
  console.log('\n');
  process.exit(0);
} else {
  console.log(colors.green + colors.bright + '✅ ¡TODO PERFECTO! LISTO PARA DEPLOY' + colors.reset);
  console.log(colors.green + 'Tu proyecto está correctamente configurado para GitHub Pages.' + colors.reset);
  console.log('\n');
  console.log(colors.cyan + '🚀 Próximos pasos:' + colors.reset);
  console.log('   1. git add .');
  console.log('   2. git commit -m "Ready for deployment"');
  console.log('   3. git push');
  console.log('\n');
  process.exit(0);
}
