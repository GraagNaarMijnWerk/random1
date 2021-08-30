<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TestComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import TestComponent from '@/components/TestComponent.vue'

export default {
  name: 'Speedrunning',
  components: {
    TestComponent
  }
}
</script>
