import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  entry: ['src/lib/index.tsx'],
  format: ['esm', 'cjs'],
  dts: false, // Désactivé temporairement
  outDir: 'dist',
  clean: true,
  jsx: 'react-jsx',
  onSuccess: () => {
    // Copier le fichier CSS
    try {
      mkdirSync('dist', { recursive: true });
      copyFileSync('src/lib/Modal.css', 'dist/Modal.css');
      console.log('✅ CSS copié dans dist/Modal.css');
    } catch (error) {
      console.error('❌ Erreur lors de la copie du CSS:', error);
    }
  },
});
