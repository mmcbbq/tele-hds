import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    publicDir: false,
    build: {
    lib:{
        entry: 'src/Resources/main.js',
        name: 'MainJS',
        fileName: 'main',
    },
        outDir: './public/assets/js/',
        emptyOutDir: false
    }
});