import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'

export default [
  {
    path: '/',
    component: KbnBoardView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: KbnLoginView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/task/:id',
    component: KbnTaskDetailModal,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
