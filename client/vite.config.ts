import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";


export default defineConfig({
    // 本地测试环境
    server: {
        host: '0.0.0.0',
        port: 3600,
        proxy: {
            "/api": {
                target: `https://44faee08-d51b-4257-a793-db627f975d62-00-r9ir3v1qf6fc.pike.replit.dev`,
                // target: `http://1.94.30.26:3601`,
                changeOrigin: true, // 允许跨域
                rewrite: path => path.replace(/^\/api/, '')
            }
        },
    },

    // nginx发布构建时使用此配置
    // server: {
    //     host: 'localhost',
    //     port: 3600,
    //     proxy: {
    //         "/api": {
    //             target: `http://localhost`,
    //             changeOrigin: true, // 允许跨域
    //             rewrite: path => path.replace(/^\/api/,'')
    //         }
    //     },
    // },

    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    css: {devSourcemap: true},
    build: {
        terserOptions: {
            compress: {
                drop_console:true,
                drop_debugger: true,
            }
        }
    }

})
