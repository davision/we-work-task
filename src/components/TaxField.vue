<script setup>
import { ref } from "vue";
import { useFormValidation } from "@/composables/useFormValidation";

const { validateTaxIdField, errors } = useFormValidation();
const input = ref("");

const validateInput = () => {
  validateTaxIdField("taxIdentifier", input.value);
};
</script>

<template>
  <div class="mb-3">
    <label for="tax-identifier" class="form-label">Tax identifier</label>
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors.taxIdentifier }"
      id="tax-identifier"
      autocomplete="off"
      v-model="input"
      @keyup="validateInput"
      @blur="validateInput"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="errors.taxIdentifier" class="invalid-feedback">
      {{ errors.taxIdentifier }}
    </div>
  </div>
</template>
