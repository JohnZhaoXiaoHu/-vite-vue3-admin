export default {
  'views/auth/system/access/index.vue': () => import('@/views/auth/system/access/index.vue'), // 资源管理
  'views/auth/system/account/index.vue': () => import('@/views/auth/system/account/index.vue'), // 账号管理
  'views/auth/system/dict/index.vue': () => import('@/views/auth/system/dict/index.vue'), // 字典管理
  'views/auth/system/role/index.vue': () => import('@/views/auth/system/role/index.vue') // 角色管理
}
