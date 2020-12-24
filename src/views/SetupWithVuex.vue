<template>
    <the-counter></the-counter>
    <control-center></control-center>
</template>

<script>
import ControlCenter from '../components/s19/ControlCenter.vue';
import TheCounter from '../components/s19/TheCounter';

export default {
    name: 'SetupWithVuex',
    components: {
        ControlCenter,
        TheCounter,
    }
    /* setup () {
        return {}
    } */
}
</script>

<style lang="scss" scoped>
</style>