
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ceten/home.vue') }
    ]
  },
  {
    path: '/options',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ceten/options.vue') }
    ]
  },
  {
    path: '/operator',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ceten/operator.vue') }
    ]
  },
  {
    path: '/map',
    component: () => import('pages/ceten/map.vue')
  },
  {
    path: '/table',
    component: () => import('pages/ceten/table.vue')
  },
  {
    path: '/list',
    component: () => import('pages/ceten/list.vue')
  },
  {
    path: '/from',
    component: () => import('pages/ceten/from.vue')
  },
  {
    path: '/card',
    component: () => import('pages/ceten/card.vue')
  },
  {
    path: '/nactive',
    component: () => import('pages/ceten/nactive.vue')
  },
  {
    path: '/nact/battery',
    component: () => import('pages/ceten/NactiveComponents/battery.vue')
  },
  {
    path: '/nact/camera',
    component: () => import('pages/ceten/NactiveComponents/camera.vue')
  },
  {
    path: '/nact/device',
    component: () => import('pages/ceten/NactiveComponents/device.vue')
  },
  {
    path: '/nact/contacts',
    component: () => import('pages/ceten/NactiveComponents/contacts.vue')
  },
  {
    path: '/nact/motion',
    component: () => import('pages/ceten/NactiveComponents/motion.vue')
  },
  {
    path: '/nact/geolocation',
    component: () => import('pages/ceten/NactiveComponents/geolocation.vue')
  },
  {
    path: '/nact/sql',
    component: () => import('pages/ceten/NactiveComponents/sql.vue')
  },
  {
    path: '/nact/media',
    component: () => import('pages/ceten/NactiveComponents/media.vue')
  },
  {
    path: '/nact/file',
    component: () => import('pages/ceten/NactiveComponents/file.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
