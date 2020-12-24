<template>
    <section class="setupmixins-section">
        <add-user></add-user>
        <delete-user></delete-user>
    </section>
</template>

<script>
import AddUser from '../components/s20/setupMixins/AddUser';
import DeleteUser from '../components/s20/setupMixins/DeleteUser';

export default {
    name: 'MixinsInSetup',
    components: {
        AddUser,
        DeleteUser,
    }
    /* setup () {
        return {}
    } */
}
</script>

<style lang="scss" scoped>
.setupmixins-section {
  width: 40rem;
  margin: 3rem auto;
}
</style>
