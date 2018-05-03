// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Row, Col, Button, Icon, Carousel, CarouselItem } from 'iview'
import 'iview/dist/styles/iview.css'
import './css/public.css'

Vue.config.productionTip = false
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Button', Button)
Vue.component('Icon', Icon)
Vue.component('Carousel', Carousel)
Vue.component('CarouselItem', CarouselItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
