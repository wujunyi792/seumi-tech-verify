import { useMutationObserver } from 'ahooks';
import { useEffect, useState } from 'react';

export type ThemeName = 'light' | 'dark';

// function useTheme() {
//   const [themeName, setThemeName] = useState<ThemeName>('light')
//   useEffect(() => {
//     // 设置初始皮肤
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setThemeName('dark')
//     } else {
//       setThemeName('light')
//     }
//     // 监听系统颜色切换
//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
//       if (event.matches) {
//         setThemeName('dark')
//       } else {
//         setThemeName('light')
//       }
//     })
//   }, [])
//   return {
//     themeName,
//     isDarkMode: themeName === 'dark',
//     isLightMode: themeName === 'light',
//   }
// }

function useTheme() {
  const [themeName, setThemeName] = useState<ThemeName>('light');

  useMutationObserver(
    (mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          const themeMode = document.body.getAttribute('theme-mode');
          if (themeMode === 'dark') {
            setThemeName('dark');
          } else {
            setThemeName('light');
          }
        }
      }
    },
    document.body,
    {
      attributes: true,
      attributeFilter: ['theme-mode'],
      childList: false,
      subtree: false,
    },
  );
  useEffect(() => {
    const themeMode = document.body.getAttribute('theme-mode');
    if (themeMode === 'dark') {
      setThemeName('dark');
    } else {
      setThemeName('light');
    }
  }, []);
  return {
    themeName,
  };
}

export default useTheme;
