import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookInfoView from "@/views/BookInfoView";
import LogInView from "@/views/LogInView";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'loginRoute',
    component: LogInView
  },
  {
    path: '/book',
    name: 'bookRoute',
    component: BookInfoView
  },
  {
    path: '/about',
    name: 'aboutRote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
