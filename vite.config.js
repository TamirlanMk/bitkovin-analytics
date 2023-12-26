import {defineConfig} from 'vite'
import {copy} from 'vite-plugin-copy'

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    },
    plugins: [
        copy([
            {src: 'src/libs', dest: 'dist/libs'}, // копируем из src/libs в libs
        ]),
    ],
})