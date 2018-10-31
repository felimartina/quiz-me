import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import vueMoment from 'vue-moment'
import VueMq from 'vue-mq'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

library.add(faCheckCircle)
library.add(faTimesCircle)
library.add(faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(vueMoment)
Vue.use(BootstrapVue)
Vue.use(axios)
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
