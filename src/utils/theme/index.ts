export const switchThemeMode = (mode?: string) => {
  if (mode) {
    const body = document.body;
    if (mode === 'dark') {
      body.setAttribute('theme-mode', 'dark');
    } else {
      body.removeAttribute('theme-mode');
    }
    return;
  }
  const body = document.body;
  if (body.hasAttribute('theme-mode')) {
    body.removeAttribute('theme-mode');
  } else {
    body.setAttribute('theme-mode', 'dark');
  }
};
