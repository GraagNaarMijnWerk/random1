<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <StamboomLijst/>
    <Naschrift/>
  </div>
</template>

<script>
// @ is an alias to /src
import StamboomLijst from '@/components/StamboomLijst.vue'
import Naschrift from '@/components/Naschrift.vue'

export default {
  name: 'MijnStamboom',
  components: {
    StamboomLijst,
    Naschrift
  }
}
</script>
