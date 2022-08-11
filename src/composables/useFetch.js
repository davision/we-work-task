import { toRefs, ref, reactive } from "vue";

export function useFetch(url = "", body = {}) {
  const data = ref(null);
  const state = reactive({
    error: null,
    loading: false,
  });

  const postData = async () => {
    state.loading = true;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      data.value = await res.json();
    } catch (e) {
      state.error = e;
      console.log("error", e);
    } finally {
      state.loading = false;
    }
  };

  return { postData, data, ...toRefs(state) };
}
