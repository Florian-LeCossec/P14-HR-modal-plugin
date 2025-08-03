#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const distDir = 'dist';
const packageJsonPath = 'package.json';

console.log('🔄 Updating package.json with correct CSS hash...');

// Chercher le fichier CSS avec hash dans dist/
const files = fs.readdirSync(distDir);
const cssFile = files.find((file) => file.startsWith('Modal-') && file.endsWith('.css'));

if (cssFile) {
  // Lire le package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // Mettre à jour la référence CSS
  packageJson.style = `./dist/${cssFile}`;

  // Écrire le package.json mis à jour
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

  console.log(`✅ Updated package.json: style → "./dist/${cssFile}"`);
} else {
  console.log('⚠️  No CSS file found in dist/');
}

console.log('✨ Package.json update completed!');
