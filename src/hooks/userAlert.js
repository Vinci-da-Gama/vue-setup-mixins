import { ref } from "vue";

export default (startingVisibility = false) => {
  const alertIsVisible = ref(startingVisibility);

  const showAlert = () => {
    alertIsVisible.value = true;
  };
  const hideAlert = () => {
    alertIsVisible.value = false;
  };

  return [alertIsVisible, showAlert, hideAlert];
};
