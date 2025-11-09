#!/usr/bin/env node

/**
 * Script de Configuración para GitHub Pages
 * 
 * Este script te ayuda a configurar automáticamente tu portafolio para GitHub Pages.
 * Actualiza todas las URLs y configuraciones necesarias de forma interactiva.
 * 
 * Uso: node setup-github-pages.js
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
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
  blue: '\x1b[34m',
};

// Configuración actual (valores por defecto que serán reemplazados)
const currentConfig = {
  oldUrl: 'https://wilmerurda.com',
  newUrl: '',
  repoName: '',
  username: '',
  basePath: '/',
};

// Interface para leer input del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para hacer preguntas
function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Banner de bienvenida
function showBanner() {
  console.log('\n');
  console.log(colors.cyan + '╔════════════════════════════════════════════════════════════╗' + colors.reset);
  console.log(colors.cyan + '║' + colors.bright + '     CONFIGURADOR DE GITHUB PAGES - PORTAFOLIO             ' + colors.cyan + '║' + colors.reset);
  console.log(colors.cyan + '╚════════════════════════════════════════════════════════════╝' + colors.reset);
  console.log('\n');
  console.log(colors.yellow + '⚠️  Este script actualizará los siguientes archivos:' + colors.reset);
  console.log('   • vite.config.js');
  console.log('   • public/robots.txt');
  console.log('   • public/sitemap.xml');
  console.log('   • index.html');
  console.log('   • public/manifest.json');
  console.log('\n');
}

// Validar nombre de usuario de GitHub
function validateUsername(username) {
  const regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
  return regex.test(username);
}

// Validar nombre de repositorio
function validateRepoName(repoName) {
  const regex = /^[a-zA-Z0-9._-]+$/;
  return regex.test(repoName) && repoName.length > 0;
}

// Obtener información del usuario
async function getUserInput() {
  console.log(colors.bright + '📝 Información necesaria:\n' + colors.reset);

  // Usuario de GitHub
  let username = '';
  while (!username) {
    username = await question(colors.cyan + '1️⃣  Tu usuario de GitHub (ej: wilnecot): ' + colors.reset);
    username = username.trim();
    
    if (!validateUsername(username)) {
      console.log(colors.red + '❌ Usuario inválido. Usa solo letras, números y guiones.' + colors.reset);
      username = '';
    }
  }
  currentConfig.username = username;

  // Nombre del repositorio
  console.log('\n' + colors.yellow + '💡 Opciones de repositorio:' + colors.reset);
  console.log('   A) ' + colors.bright + username + '.github.io' + colors.reset + ' → URL: https://' + username + '.github.io/');
  console.log('   B) Nombre personalizado → URL: https://' + username + '.github.io/nombre-repo/\n');

  let repoName = '';
  while (!repoName) {
    repoName = await question(colors.cyan + '2️⃣  Nombre del repositorio: ' + colors.reset);
    repoName = repoName.trim();

    if (!validateRepoName(repoName)) {
      console.log(colors.red + '❌ Nombre inválido. Usa letras, números, puntos, guiones y guiones bajos.' + colors.reset);
      repoName = '';
    }
  }
  currentConfig.repoName = repoName;

  // Calcular URLs
  const isUserRepo = repoName === `${username}.github.io`;
  currentConfig.basePath = isUserRepo ? '/' : `/${repoName}/`;
  currentConfig.newUrl = isUserRepo 
    ? `https://${username}.github.io`
    : `https://${username}.github.io/${repoName}`;

  // Confirmación
  console.log('\n' + colors.green + '✅ Configuración:' + colors.reset);
  console.log('   Usuario: ' + colors.bright + username + colors.reset);
  console.log('   Repositorio: ' + colors.bright + repoName + colors.reset);
  console.log('   URL final: ' + colors.bright + currentConfig.newUrl + '/' + colors.reset);
  console.log('   Base path (Vite): ' + colors.bright + currentConfig.basePath + colors.reset);
  console.log('\n');

  const confirm = await question(colors.yellow + '¿Es correcta esta configuración? (s/n): ' + colors.reset);
  
  if (confirm.toLowerCase() !== 's' && confirm.toLowerCase() !== 'si') {
    console.log(colors.red + '\n❌ Configuración cancelada.\n' + colors.reset);
    process.exit(0);
  }
}

// Actualizar vite.config.js
function updateViteConfig() {
  console.log('\n' + colors.cyan + '📝 Actualizando vite.config.js...' + colors.reset);
  
  const filePath = path.join(__dirname, 'vite.config.js');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Reemplazar la línea del base
  content = content.replace(
    /base:\s*['"][^'"]*['"]/,
    `base: '${currentConfig.basePath}'`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(colors.green + '   ✅ vite.config.js actualizado' + colors.reset);
}

// Actualizar robots.txt
function updateRobotsTxt() {
  console.log(colors.cyan + '📝 Actualizando robots.txt...' + colors.reset);
  
  const filePath = path.join(__dirname, 'public', 'robots.txt');
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(
    /Sitemap:\s*https?:\/\/[^\s]+/,
    `Sitemap: ${currentConfig.newUrl}/sitemap.xml`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(colors.green + '   ✅ robots.txt actualizado' + colors.reset);
}

// Actualizar sitemap.xml
function updateSitemap() {
  console.log(colors.cyan + '📝 Actualizando sitemap.xml...' + colors.reset);
  
  const filePath = path.join(__dirname, 'public', 'sitemap.xml');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Reemplazar todas las URLs
  content = content.replace(
    new RegExp(currentConfig.oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
    currentConfig.newUrl
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(colors.green + '   ✅ sitemap.xml actualizado' + colors.reset);
}

// Actualizar index.html
function updateIndexHtml() {
  console.log(colors.cyan + '📝 Actualizando index.html...' + colors.reset);
  
  const filePath = path.join(__dirname, 'index.html');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Reemplazar URLs en meta tags
  content = content.replace(
    new RegExp(currentConfig.oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
    currentConfig.newUrl
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(colors.green + '   ✅ index.html actualizado' + colors.reset);
}

// Actualizar manifest.json
function updateManifest() {
  console.log(colors.cyan + '📝 Actualizando manifest.json...' + colors.reset);
  
  const filePath = path.join(__dirname, 'public', 'manifest.json');
  let content = fs.readFileSync(filePath, 'utf8');
  const manifest = JSON.parse(content);
  
  manifest.start_url = currentConfig.basePath;
  
  fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(colors.green + '   ✅ manifest.json actualizado' + colors.reset);
}

// Crear archivo de recordatorio
function createReminder() {
  const reminderContent = `# ⚠️ RECORDATORIO: Configuración de GitHub Pages

Tu portafolio ha sido configurado para:

## 📍 Información del Repositorio
- **Usuario**: ${currentConfig.username}
- **Repositorio**: ${currentConfig.repoName}
- **URL**: ${currentConfig.newUrl}/

## 📝 Próximos Pasos

### 1. Crear el repositorio en GitHub
\`\`\`bash
# Ve a: https://github.com/new
# Nombre: ${currentConfig.repoName}
# Public: ✓
# NO inicialices con README
\`\`\`

### 2. Subir tu código
\`\`\`bash
git init
git add .
git commit -m "Initial commit: Portafolio configurado para GitHub Pages"
git remote add origin https://github.com/${currentConfig.username}/${currentConfig.repoName}.git
git branch -M main
git push -u origin main
\`\`\`

### 3. Configurar GitHub Pages
1. Ve a: https://github.com/${currentConfig.username}/${currentConfig.repoName}/settings/pages
2. Source: **GitHub Actions**
3. Ve a: https://github.com/${currentConfig.username}/${currentConfig.repoName}/settings/actions
4. Permissions: **Read and write permissions**
5. ✓ Allow GitHub Actions to create and approve pull requests

### 4. Esperar el deploy
- Ve a: https://github.com/${currentConfig.username}/${currentConfig.repoName}/actions
- Espera el ✅ check verde
- Tu sitio estará en: ${currentConfig.newUrl}/

## ✅ Archivos Modificados
- ✅ vite.config.js
- ✅ public/robots.txt
- ✅ public/sitemap.xml
- ✅ index.html
- ✅ public/manifest.json

## 🎨 Opcional (Recomendado)
- [ ] Crear imagen \`public/og-image.png\` (1200x630px)

---

**Fecha de configuración**: ${new Date().toLocaleDateString('es-ES')}
**Configurado con**: setup-github-pages.js
`;

  fs.writeFileSync(
    path.join(__dirname, 'PROXIMOS-PASOS.md'),
    reminderContent,
    'utf8'
  );
  
  console.log(colors.green + '\n📄 Archivo PROXIMOS-PASOS.md creado' + colors.reset);
}

// Función principal
async function main() {
  try {
    showBanner();
    await getUserInput();
    
    console.log('\n' + colors.bright + '🔧 Aplicando cambios...\n' + colors.reset);
    
    updateViteConfig();
    updateRobotsTxt();
    updateSitemap();
    updateIndexHtml();
    updateManifest();
    createReminder();
    
    console.log('\n' + colors.green + colors.bright + '✨ ¡Configuración completada exitosamente! ✨' + colors.reset);
    console.log('\n' + colors.yellow + '📋 Lee el archivo PROXIMOS-PASOS.md para continuar' + colors.reset);
    console.log(colors.cyan + '🚀 URL de tu portafolio: ' + colors.bright + currentConfig.newUrl + '/' + colors.reset);
    console.log('\n');
    
  } catch (error) {
    console.error(colors.red + '\n❌ Error: ' + error.message + colors.reset);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Ejecutar
main();
