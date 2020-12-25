<template>
  <section class="sortpj-section">
    <user-list
      :users="activeUsers"
      @list-projects="selectUser"
    ></user-list>
    <projects-list :user="selectedUser"></projects-list>
  </section>
</template>

<script>
import { ref } from 'vue';

import USER_DATA from '../dummy-data';
import UserList from '../components/s19/users/UserListS19AndS20';
import ProjectsList from '../components/s19/projects/ProjectsListS19AndS20';

export default {
  components: {
    UserList,
    ProjectsList,
  },
  setup () {
    const selectedUser = ref(null);
    const activeUsers = USER_DATA;

    const selectUser = (uid) => {
      selectedUser.value = activeUsers.find((usr) => usr.id === uid);
    }

    return {
      selectedUser,
      activeUsers,
      selectUser
    }
  }
};
</script>

<style lang="scss">
/* scoped */
.sortpj-section {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
  &:hover, &:active {
    background-color: #efefff;
  }
  &.selected {
    background-color: #00006b;
    color: white;
  }
}
</style>
