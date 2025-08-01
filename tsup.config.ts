import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  entry: ['src/lib/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  tsconfig: 'tsconfig.build.json',
  onSuccess: async () => {
    try {
      mkdirSync('dist', { recursive: true });
      copyFileSync('src/lib/Modal.css', 'dist/Modal.css');
      console.log('✅ CSS copié dans dist/Modal.css');
    } catch (error) {
      console.error('❌ Erreur lors de la copie du CSS:', error);
    }
  },
});
