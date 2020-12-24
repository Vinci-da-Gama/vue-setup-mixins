<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">
      Just see product 2
    </router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup(/* props */) {
    const products = inject('products');
    // pass pid from route props
    // const targetPd = computed(() => products.value.find((el) => el.id === props.pid));
    // pass pid from route
    const route = useRoute();
    const targetPd = computed(() => products.value.find((el) => el.id === route.params.pid));
    const title = computed(() => targetPd.value.title)
    const price = computed(() => targetPd.value.price)
    const description = computed(() => targetPd.value.description)

    return {
      title,
      price,
      description
    };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>