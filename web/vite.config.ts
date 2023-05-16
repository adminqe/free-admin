import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            dts: 'src/types/auto-import.d.ts',
            imports: [
                'vue',
                'vue-router',
                // '@vueuse/core',
                // 'pinia',
                {
                    'ant-design-vue': ['message'],
                },
            ],
            // 包含哪些需要自动导入的文件夹
            // dirs: ['./src/composables/**', './src/store/modules/*'],
        }),
        Components({
            dts: 'src/types/components.d.ts',
            resolvers: [AntDesignVueResolver({ importStyle: true, resolveIcons: true })],
        }),
    ],
    // 需要自定义 antd 主题则开启
    //   css: {
    //     preprocessorOptions: {
    //         less: {
    //             javascriptEnabled: true,
    //             modifyVars: {
    //                 'primary-color': '#dd3029',
    //             },
    //         },
    //     },
    // },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3200,
        open: true,
    },
})
