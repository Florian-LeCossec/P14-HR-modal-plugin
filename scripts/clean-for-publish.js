#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Fichiers à supprimer avant la publication
const filesToRemove = [
  'src/App.tsx',
  'src/App.css',
  'src/main.tsx',
  'src/index.css',
  'src/assets/react.svg',
  'index.html',
  'public/vite.svg',
];

// Dossiers à supprimer s'ils sont vides
const dirsToCheck = ['src/assets', 'public'];

console.log('🧹 Nettoyage du projet pour la publication...');

// Supprimer les fichiers
filesToRemove.forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`✅ Supprimé: ${file}`);
  } else {
    console.log(`⚠️  Fichier non trouvé: ${file}`);
  }
});

// Supprimer les dossiers vides
dirsToCheck.forEach((dir) => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    if (files.length === 0) {
      fs.rmdirSync(dir);
      console.log(`✅ Dossier vide supprimé: ${dir}`);
    } else {
      console.log(`⚠️  Dossier non vide, conservé: ${dir}`);
    }
  }
});

console.log('✨ Nettoyage terminé !');
