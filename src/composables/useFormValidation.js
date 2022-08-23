import useValidators from "@/composables/validators";

import { reactive, ref } from "vue";

const { isEmpty, minLength, isIn, isUsaTaxId, isCanadaTaxId, maxLength } =
  useValidators();

const errors = reactive({});
const selectedCountry = ref("");

export function useFormValidation() {
  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 3) ||
        maxLength(fieldName, fieldValue, 20);
  };

  const validateShoeField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : "";
  };

  // Validate valid country field
  const validateCountryField = (fieldName, fieldValue, options) => {
    selectedCountry.value = fieldValue;
    errors[fieldName] = isIn(fieldName, fieldValue, options);
  };

  // Validate valid tax ID field
  const validateTaxIdField = (fieldName, fieldValue) => {
    errors[fieldName] =
      selectedCountry.value === "USA"
        ? isUsaTaxId(fieldName, fieldValue)
        : isCanadaTaxId(fieldName, fieldValue);
  };

  return {
    errors,
    validateNameField,
    validateCountryField,
    validateTaxIdField,
    validateShoeField,
  };
}
