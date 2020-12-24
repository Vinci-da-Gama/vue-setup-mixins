<template>
    <div>
        <h2>{{ userFullName }}</h2>
        <h3>{{ age }}</h3>
        <button type="button" @click="emitDataToParent">
            Send out data
        </button>
        <h4>Number from inject: {{ anotherNum }}</h4>
    </div>
</template>

<script>
import {
    computed,
    inject,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue';

export default {
    name: 'UserData',
    props: ['firstName', 'lastName', 'age'],
    // emits: ['send-out-data'],
    setup (props, ctx) {
        const userFullName = computed(() => {
            return `${props.firstName} ${props.lastName}`;
        });

        console.log('33 -- context: ', ctx)
        const emitDataToParent = () => {
            ctx.emit('send-out-data', props.age)
        }

        const anotherNum = inject('anotherNumber');
        /* lifecycle */
        onBeforeMount(() => {
            console.log('onBeforeMount');
        })
        onMounted(() => {
            console.log('onMounted');
        })
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate');
        })
        onUpdated(() => {
            console.log('onUpdated');
        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount');
        })
        onUnmounted(() => {
            console.log('onUnmounted');
        })

        return {
            userFullName,
            emitDataToParent,
            anotherNum
        };
    }
}
</script>

<style lang="scss" scoped>
</style>