<template>
  <div>
    <composition-name-age></composition-name-age>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CompositionNameAge from '@/components/s19/CompositionNameAge.vue';

export default {
  name: 'Home',
  components: {
    CompositionNameAge
  },
}
</script>
