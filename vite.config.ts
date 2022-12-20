import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
console.log(process.cwd());
export default defineConfig({
    base: process.env.ELECTRON == "true" ? './' : ".",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), './src'),
            'components': path.resolve(process.cwd(), './src/components'),
            'views': path.resolve(process.cwd(), './src/views'),
        },
    }
})

