import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import App from './components/App.vue'
import TopicsView from './components/TopicsView.vue'

Vue.use(Resource)

Vue.use(Router)

var router = new Router()

router.map({
  '/TopicsView': {
    component: TopicsView
  }
})

router.redirect({
  '*': '/TopicsView'
})

router.start(App, '#app')

Vue.use(Resource)
