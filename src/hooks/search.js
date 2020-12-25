import { ref, computed, watch } from "vue";

export default (items, searchKey) => {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((el) =>
        el[searchKey].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      // if del search term, then load all items
      filteredItems = items.value;
    }
    return filteredItems;
  });

  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  watch(enteredSearchTerm, (nv) => {
    // simulate searching
    setTimeout(() => {
      if (nv === enteredSearchTerm.value) {
        activeSearchTerm.value = nv;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
};
