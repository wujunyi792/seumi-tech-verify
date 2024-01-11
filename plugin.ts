import type { IApi } from 'umi';

export default (api: IApi) => {
  api.addEntryCodeAhead(
    () => `
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    function matchMode(e) {
        const body = document.body;
        if (e.matches) {
            if (!body.hasAttribute('theme-mode')) {
                body.setAttribute('theme-mode', 'dark');
            }
        } else {
            if (body.hasAttribute('theme-mode')) {
                body.removeAttribute('theme-mode');
            }
        }
    }
    
    mql.addListener(matchMode);
    matchMode(mql);
  `,
  );
};
