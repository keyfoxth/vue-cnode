<template>
  <a v-link="{ path: '/topicsView' }">TopicsView</a>
  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>
</template>
