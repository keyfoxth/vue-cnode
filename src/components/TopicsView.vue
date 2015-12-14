<template>
  <p>test</p>
</template>

<script>
import store from '../store'

export default {
  ready: store.getTopics('all', '1')
}
</script>
