<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, watch, toRefs } from 'vue';

import ProjectItem from './ProjectItem.vue';
import pjSearchHook from '../../../hooks/search';

export default {
  name: 'ProjectsListS19AndS20',
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const { user } = toRefs(props);
    const projects = computed(() => user.value ? user.value.projects ? user.value.projects : [] : []);
    const {
      enteredSearchTerm,
      availableItems,
      updateSearch,
    } = pjSearchHook(projects, 'title');
    /* const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return props.user.projects;
    })

    const updateSearch = (val) => {
      enteredSearchTerm.value = val;
    }

    watch(() => enteredSearchTerm, (nv) => {
      setTimeout(() => {
        if (nv === enteredSearchTerm.value) {
          activeSearchTerm.value = nv;
        }
      }, 300);
    }); */

    const hasProjects = computed(() => {
      return user.value.projects && availableItems.value.length > 0;
    })

    watch(() => user, () => {
      // enteredSearchTerm.value = '';
      updateSearch('');
    })

    return {
      enteredSearchTerm,
      // activeSearchTerm,
      availableProjects: availableItems,
      updateSearch,
      hasProjects
    }

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>