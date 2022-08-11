<script setup>
import { ref } from "vue";
import { useFormValidation } from "@/composables/useFormValidation";

const input = ref("");
const { validateCountryField, errors } = useFormValidation();

const validateInput = () => {
  validateCountryField("country", input.value, ["USA", "Canada"]);
};

// List of 20 countries

const countries = [
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Bulgaria",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Switzerland",
  "Slovenia",
  "USA",
];
</script>

<template>
  <div class="mb-3">
    <label for="country" class="form-label">Country</label>
    <input
      type="text"
      class="form-control"
      id="country"
      placeholder="Type to search..."
      :class="{ 'is-invalid': errors.country }"
      autocomplete
      list="countryOptions"
      v-model="input"
      @keyup="validateInput"
      @blur="validateInput"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <datalist id="countryOptions">
      <option v-for="country in countries" :value="country" :key="country" />
    </datalist>
    <div v-if="errors.country" class="invalid-feedback">
      {{ errors.country }}
    </div>
  </div>
</template>
