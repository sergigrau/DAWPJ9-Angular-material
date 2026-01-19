import { defineConfig } from 'vite';

// Mark the Angular Material prebuilt theme import as external so it's
// either left unresolved in the bundle (if you prefer that) or
// excluded from Vite's pre-bundling. We include both variants
// (with and without the webpack `~`) to be robust.
export default defineConfig({
  optimizeDeps: {
    exclude: ['@angular/material/prebuilt-themes/indigo-pink.css']
  },
  build: {
    rollupOptions: {
      external: [
        '@angular/material/prebuilt-themes/indigo-pink.css',
        '~@angular/material/prebuilt-themes/indigo-pink.css'
      ]
    }
  }
});
