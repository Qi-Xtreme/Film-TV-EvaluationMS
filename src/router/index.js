import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'

const routes = [
  {
    path: '/',
    name: 'MovieView',
    component: MovieView
  },
  // {
  //   path: '/category',
  //   name: 'Category',
  //   component: Category
  // },
  // {
  //   path: '/review',
  //   name: 'Review',
  //   component: Review
  // },
  // {
  //   path: '/ranking-list',
  //   name: 'RankingList',
  //   component: RankingList
  // },
  // {
  //   path: '/chat-room',
  //   name: 'ChatRoom',
  //   component: ChatRoom
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
