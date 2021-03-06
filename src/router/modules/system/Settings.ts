export default {
  path: '/settings',
  name: 'Settings',
  component: () => import('@/layouts/System.vue'),
  children: [
    {
      path: '',
      name: 'Account',
      components: {
        default: () => import('@/views/System/Settings/Account.vue'),
      },
      meta: {
        icon: 'user',
        fontAwesome: true,
        group: 'general',
      },
    },
    {
      path: '',
      name: 'Preferences',
      components: {
        default: () => import('@/views/System/Settings/Preferences.vue'),
      },
      meta: {
        icon: 'cog',
        fontAwesome: true,
        group: 'general',
      },
    },
    {
      path: 'companies',
      name: 'Companies',
      components: {
        default: () => import('@/views/System/Settings/Companies.vue'),
      },
      meta: {
        icon: 'wallet',
        fontAwesome: true,
        group: 'general',
      },
    },
    {
      path: 'team',
      name: 'Team',
      components: {
        default: () => import('@/views/System/Settings/Team.vue'),
      },
      meta: {
        icon: 'wallet',
        fontAwesome: true,
        group: 'workspace settings',
      },
    },
    {
      path: 'worspace',
      name: 'Workspace',
      components: {
        default: () => import('@/views/System/Settings/Workspaces.vue'),
      },
      meta: {
        icon: 'buffer',
        prefix: 'fab',
        fontAwesome: true,
        group: 'workspace settings',
      },
    },
  ],
};
