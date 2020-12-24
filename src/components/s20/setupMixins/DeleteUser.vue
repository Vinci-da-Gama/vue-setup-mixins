<template>
  <user-alert-setup-mixins v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert-setup-mixins>
  <section class="block-section">
    <h2>Delete a User</h2>
    <button class="hi-button" @click="showAlert">
      Delete User
    </button>
  </section>
</template>

<script>
import { ref } from 'vue';
import UserAlertSetupMixins from './UserAlertSetupMixins.vue';
import userAlertMixins from '../../../hooks/userAlert.js';

export default {
  components: {
    UserAlertSetupMixins,
  },
  setup() {
    const alertTitle = ref('This is alert title for delete');
    const [alertIsVisible, showAlert, hideAlert] = userAlertMixins(true);

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      alertTitle
    }
  },
};
</script>

<style lang="scss" scoped>
.hi-button {
  font: inherit;
  background-color: #310131;
  border: 1px solid #310131;
  border-radius: 8px;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: #770e77;
    border-color: #770e77;
  }
}
</style>
