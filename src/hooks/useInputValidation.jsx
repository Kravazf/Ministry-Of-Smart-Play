import { useState } from 'react';

function useInputValidation(initialValue) {
  const [value, setValue] = useState(initialValue);

  const isValueValid = (minLength, maxLength) => {
    if (!value.length) return 'Field is required';
    if (value.length < minLength) return `Field should have more then ${minLength} symbols`;
    if (value.length > maxLength) return `Field should have less then ${maxLength} symbols`;

    return '';
  };

  return [value, setValue, isValueValid];
}

export default useInputValidation;
