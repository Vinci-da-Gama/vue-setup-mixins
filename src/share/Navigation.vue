<template>
    <div id="nav">
        <router-link to="/">CompositionApi_Setup</router-link> |
        <router-link to="/sort-projects">Sort_Projects</router-link> |
        <router-link to="/products">All Products</router-link> |
        <router-link to="/products/add">Add Product</router-link> |
        <router-link to="/setup-with-vuex">Setup with Vuex</router-link> |
        <router-link to="/use-mixins">Use Mixins Normal</router-link> |
        <router-link to="/use-mixins-with-setup">Use Mixins in Setup</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style lang="scss" scoped>
</style>