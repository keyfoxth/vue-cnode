import Vue from 'vue'
import Resource from 'vue-resource'

const store = {}

Vue.use(Resource)

store.getTopics = function() {
  return function(){
    this.$http.get('https://cnodejs.org/api/v1/topics?tab=all&page=1', function (data, status, request) {
      console.log(data)
    })
  }
}

export default store
