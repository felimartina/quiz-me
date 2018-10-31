import AdminEditQuestion from '@/views/AdminEditQuestion.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin-edit-question',
      name: 'admin-edit-question',
      component: AdminEditQuestion
    }
  ]
})
