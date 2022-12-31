import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';


export default defineConfig({
  base: '/react-simple-switch',
  build: {
    target: 'es6',
    outDir: 'dist',
    sourcemap: true,
    minify: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [reactRefresh()],
})
