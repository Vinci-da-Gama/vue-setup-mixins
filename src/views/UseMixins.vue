<template>
    <section class="usemixins-section">
        <add-user></add-user>
        <delete-user></delete-user>
    </section>
</template>

<script>
import AddUser from '../components/s20/AddUser';
import DeleteUser from '../components/s20/DeleteUser';

export default {
    name: 'UseMixins',
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
.usemixins-section {
  width: 40rem;
  margin: 3rem auto;
}
</style>
