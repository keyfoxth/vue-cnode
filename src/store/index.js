import Vue from 'vue'
import Resource from 'vue-resource'

const store = {}

Vue.use(Resource)

store.getTopics = function (tab, page) {
  return function () {
    this.$http.get('https://cnodejs.org/api/v1/topics?tab=' + tab + '&page=' + page, function (data, status, request) {
      console.log(data)
    })
  }
}

export default store
