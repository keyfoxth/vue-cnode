<template>
  <a v-link="{ path: '/TopicsView' }">TopicsView</a>
  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>
</template>
