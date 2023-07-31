import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsConfigPaths from 'vite-tsconfig-paths';
import solidSvg from 'vite-plugin-solid-svg';
import { resolve } from 'path';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    tsConfigPaths(),
    solidSvg()
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '$fonts': resolve('src/assets/fonts'),
      '$assets': resolve('src/assets'),
    }
  }
});
