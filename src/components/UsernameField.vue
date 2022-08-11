<script setup>
import { ref } from "vue";
import { useFormValidation } from "@/composables/useFormValidation";

const input = ref("");
const { validateNameField, errors } = useFormValidation();

const validateInput = () => {
  validateNameField("username", input.value);
};
</script>

<template>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors.username }"
      id="username"
      autocomplete="off"
      v-model="input"
      @keyup="validateInput"
      @blur="validateInput"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="errors.username" class="invalid-feedback">
      {{ errors.username }}
    </div>
  </div>
</template>
