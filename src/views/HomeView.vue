<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostsView />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
