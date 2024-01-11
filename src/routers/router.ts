export const AppRouter = [
  {
    path: '/login',
    component: '@/pages/login/index',
  },
  {
    path: '/',
    component: '@/layouts/panel',
    routes: [
      {
        path: '',
        component: 'index',
        routes: [
          {
            path: '/index',
            component: 'docs',
          },
        ],
      },
      { path: '/docs', component: 'docs' },
    ],
  },
];
