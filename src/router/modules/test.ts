export default {
  'views/shared/demos/form/rule-form.vue': () => import('@/views/shared/demos/form/rule-form.vue'), // 验证表单
  'views/shared/demos/icons/Iconfont.vue': () => import('@/views/shared/demos/icons/Iconfont.vue'), // 自定义图标
  'views/shared/demos/tables/summary-table/index.vue': () =>
    import('@/views/shared/demos/tables/summary-table/index.vue'), // 合计表格
  'views/shared/demos/button.vue': () => import('@/views/shared/demos/button.vue'), // 自定义按钮
  'views/shared/demos/custom-modal.vue': () => import('@/views/shared/demos/custom-modal.vue') // 自定义模态框
}
