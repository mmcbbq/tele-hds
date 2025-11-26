import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    publicDir: false,
    build: {
    lib:{
        entry: 'src/resources/main.js',
        name: 'MainJS',
        fileName: 'main',
    },
        outDir: './public/assets/js/',
        emptyOutDir: false
    }
});