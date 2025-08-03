import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/lib/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
  tsconfig: 'tsconfig.app.json',
  loader: {
    '.css': 'copy',
  },
  outDir: 'dist',
  onSuccess: 'node scripts/rename-css.js',
});
