export default function useValidators() {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? "The " + fieldName + " field is required" : "";
  };

  const minLength = (fieldName, fieldValue, min) => {
    return fieldValue.length < min
      ? `The ${fieldName} field must be at least ${min} characters long`
      : "";
  };

  // Check if fieldValue exists in array of values
  const isIn = (fieldName, fieldValue, values) => {
    return !values.includes(fieldValue)
      ? `The ${fieldName} field must be one of the following: ${values.join(
          ", "
        )}`
      : "";
  };

  // Validate USA tax ID must be [4 digits]-[3 letters]-[5 or 7 digits] eg. 1234-ABC-12345 or 1234-ABC-1234567
  const isUsaTaxId = (fieldName, fieldValue) => {
    return !fieldValue.match(/^\d{4}-\w{3}-\d{5,7}$/)
      ? `The ${fieldName} field must be a valid USA tax ID`
      : "";
  };

  // Validate Canada tax ID that must be [10 digits or letters A, B or D]-[2 letters] eg: A123456789D#
  const isCanadaTaxId = (fieldName, fieldValue) => {
    return !fieldValue.match(/^[A-D]\d{9}[A-D]$/)
      ? `The ${fieldName} field must be a valid Canada tax ID`
      : "";
  };

  return { isEmpty, minLength, isIn, isUsaTaxId, isCanadaTaxId };
}
