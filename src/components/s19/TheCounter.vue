<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const counter = computed(() => store.getters['setupWithVuex/counter'])

    return { counter };
  },
};
</script>