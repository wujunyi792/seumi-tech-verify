import { defineApp } from 'umi';
import { useSystemStore } from './store/system';

export default defineApp({
  locale: {
    getLocale() {
      return useSystemStore.getState().lang;
    },
  },
});
