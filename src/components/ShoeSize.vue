<script setup>
import { ref } from "vue";
import { useFormValidation } from "@/composables/useFormValidation";

const { validateShoeField, errors } = useFormValidation();
const input = ref("");

const validateInput = () => {
  validateShoeField("shoeSize", input.value);
};
</script>

<template>
  <div class="mb-3">
    <label for="shoe-size" class="form-label">Shoe</label>
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors.shoeSize }"
      id="shoe-size"
      autocomplete="off"
      v-model="input"
      @keyup="validateInput"
      @blur="validateInput"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="errors.shoeSize" class="invalid-feedback">
      {{ errors.shoeSize }}
    </div>
  </div>
</template>
