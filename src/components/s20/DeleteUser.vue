<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>{{ alertTitle }}</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../../mixins/modules/alert';

export default {
  name: 'DeleteUser',
  components: {
    UserAlert,
  },
  data() {
    return {
      alertTitle: 'hahaha Delete User???',
      /* if local has data, the browser will show local data value */
      // alertIsVisible: true,
    }
  },
  mixins: [alertMixin]
};
</script>