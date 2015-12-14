import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import TopicsView from './components/TopicsView.vue'

Vue.use(Router)

var router = new Router()

router.map({
  '/topicsView': {
    component: TopicsView
  }
})

router.redirect({
  '*': '/topicsView'
})

router.start(App, '#app')
