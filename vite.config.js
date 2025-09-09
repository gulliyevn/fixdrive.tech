import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        visualizer({ filename: 'dist/stats.html', template: 'treemap', gzipSize: true, brotliSize: true })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Vendor libraries
                    'vendor-react': ['react', 'react-dom'],
                    'vendor-router': ['react-router-dom'],
                    'vendor-motion': ['framer-motion'],
                    'vendor-ui': ['lucide-react'],
                    'vendor-helmet': ['react-helmet'],
                    
                    // Pages (lazy loaded)
                    'pages-about': ['./src/pages/AboutUs.tsx'],
                    'pages-mission': ['./src/pages/MissionVision.tsx'],
                    'pages-privacy': ['./src/pages/PrivacyPolicy.tsx'],
                    'pages-terms': ['./src/pages/TermsOfUse.tsx'],
                    
                    // Large components
                    'components-heavy': [
                        './src/components/Packages.tsx',
                        './src/components/Newsletter.tsx',
                        './src/components/Testimonials.tsx'
                    ]
                }
            }
        },
        // Optimize for production
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        // Increase chunk size warning limit
        chunkSizeWarningLimit: 1000,
    },
});
