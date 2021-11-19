import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import Team from '@/views/Team.vue'
import Article from '@/views/Article.vue'
import PublishPage from '@/views/PublishPage.vue'
import NotFound from '@/views/NotFound.vue'
import PostList from '@/views/PostList.vue'
import Stories from '@/views/Stories.vue'
import EachStory from '@/views/EachStory.vue'


const routes: Array<RouteRecordRaw> = [
  {path: '/',component:Home},
  {path: '/home',component:Home},
  {path: '/stories',component:Stories},
  {path: '/signup', component:SignUp},
  {path: '/login',component:Login},
  {path: '/eachstory/:id',component:EachStory},
  {path: '/publish/add',component:PublishPage},
  {path: '/publish/list',component:PostList},
  {path: '/article', component:Article},
  {path: '/:catchAll(.*)',component:NotFound},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
