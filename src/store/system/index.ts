import { setLocale } from 'umi';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SystemState {
  lang: string;
  menuOpenKeys: Array<string | number>;
  setLang: (lang: string) => void;
  setMenuOpenKeys: (menuOpenKeys: Array<string | number>) => void;
}

export const useSystemStore = create<SystemState>()(
  devtools(
    persist(
      (set) => ({
        lang: 'en-US',
        menuOpenKeys: [],
        setLang: (lang: string) => {
          setLocale(lang, false);
          set({ lang });
        },
        setMenuOpenKeys: (menuOpenKeys: Array<string | number>) => {
          set({ menuOpenKeys });
        },
      }),
      {
        name: 'system',
      },
    ),
  ),
);
