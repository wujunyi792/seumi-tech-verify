import { defineConfig } from 'umi';
import { AppRouter } from '../src/routers/router';

export default defineConfig({
  npmClient: 'pnpm',
  deadCode: {},
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss', '@umijs/plugins/dist/locale'],
  locale: {
    default: 'en-US',
    baseSeparator: '-',
    antd: false,
    useLocalStorage: false,
  },
  routes: AppRouter,
});
