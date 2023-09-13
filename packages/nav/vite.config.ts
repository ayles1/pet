/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr({ exportAsDefault: true }), react()],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './viteSetupTests.ts',
        reporters: ['html'],
        coverage: {
            provider: 'istanbul',
        },
    },
});
