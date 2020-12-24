<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    console.log('11 -- store: ', store);

    const inc = () => {
      store.dispatch('setupWithVuex/increment')
    }

    return { inc };
  },
};
</script>