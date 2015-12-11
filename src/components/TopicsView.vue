<template>
  <p>a</p>
</template>

<script>
  module.exports = {
    ready: function() {
      this.$http.get('https://cnodejs.org/api/v1/topics?tab=all&page=1', function (data, status, request) {
        console.log(data)
      })
    }
  }
</script>
