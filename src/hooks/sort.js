import { ref, computed } from "vue";

export default (availableItems, sortingKey) => {
  const sorting = ref(null);
  // computed will return ref object
  const displayedUsers = computed(() => {
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((u1, u2) => {
      if (sorting.value === "asc" && u1[sortingKey] > u2[sortingKey]) {
        return 1;
      } else if (sorting.value === "asc") {
        return -1;
      } else if (sorting.value === "desc" && u1[sortingKey] > u2[sortingKey]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  const sort = (mode) => {
    sorting.value = mode;
  };

  return {
    sorting,
    displayedUsers,
    sort,
  };
};
