
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dashboard', component: () => import('pages/dashboard.vue') },
      { path: 'crm_dashboard', component: () => import('pages/crm_dashboard.vue') },
      { path: 'user_profile', component: () => import('pages/user_profile.vue') }


    ]
  },
  {
    path: '/',
    component: () => import('layouts/GeneralLayout.vue'),
    children: [
      { path: 'Login_page', component: () => import('pages/Login_page.vue') },
      { path: 'lock_screen', component: () => import('pages/lock_screen.vue') },
      { path: 'lock_screen2', component: () => import('pages/lock_screen2.vue') },
      { path: 'pricing_page', component: () => import('pages/pricing_page.vue') },
      { path: 'Maintenance_page', component: () => import('pages/Maintenance_page.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
