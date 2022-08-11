<script setup>
import { reactive } from "vue";
import { useFetch } from "@/composables/useFetch";
import { useFormValidation } from "@/composables/useFormValidation";
import { useSubmitState } from "@/composables/useSubmitState";

import UsernameField from "@/components/UsernameField.vue";
import CountryField from "@/components/CountryField.vue";
import TaxField from "@/components/TaxField.vue";

const user = reactive({
  username: "",
  country: "",
  taxIdentifier: "",
});

const { errors } = useFormValidation();
const { isSubmitDisabled } = useSubmitState(user, errors);

const { data, error, loading, postData } = useFetch("https://google.com", user);
</script>

<template>
  <form @submit.prevent novalidate>
    <UsernameField v-model="user.username" />
    <CountryField v-model="user.country" />
    <TaxField v-model="user.taxIdentifier" />

    <button
      type="button"
      class="btn btn-primary"
      @click="postData()"
      :disabled="isSubmitDisabled || loading"
      v-if="!data"
    >
      Submit form
    </button>
    {{ data }}
    <div v-if="data" class="alert alert-success mt-3" role="alert">
      Form successfully sent
    </div>
    <div v-if="error" class="alert alert-danger mt-3" role="alert">
      {{ error }}
    </div>
  </form>
</template>
