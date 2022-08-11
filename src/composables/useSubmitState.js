import { computed } from "vue";

export function useSubmitState(user, errors) {
  const isSubmitDisabled = computed(() => {
    let disabled = true;
    for (let prop in user) {
      if (!user[prop] || errors[prop]) {
        disabled = true;
        break;
      }
      disabled = false;
    }
    return disabled;
  });

  return { isSubmitDisabled };
}
