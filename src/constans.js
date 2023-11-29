const ruleText = {
  required: 'Field is required.',
  minLength: (minLength) => (`Field should have more than ${minLength} symbols.`),
  maxLength: (maxLength) => (`Field should have less than ${maxLength} symbols.`),
};

export const testRules = {
  quizName: {
    required: { value: true, message: ruleText.required },
    minLength: { value: 2, message: ruleText.minLength(2) },
    maxLength: { value: 15, message: ruleText.maxLength(15) },
  },
  id: {
    required: { value: true, message: ruleText.required },
  },
  description: {
    required: { value: true, message: ruleText.required },
    minLength: { value: 20, message: ruleText.minLength(20) },
    maxLength: { value: 300, message: ruleText.maxLength(300) },
  },
  imageUrl: {
    required: { value: true, message: ruleText.required },
    pattern: {
      value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|svg|gif))$/i,
      message: 'Please enter a valid URL for an image',
    },
  },
  login: {
    required: { value: true, message: ruleText.required },
    minLength: { value: 3, message: ruleText.minLength(3) },
    maxLength: { value: 10, message: ruleText.maxLength(10) },
  },
  email: {
    required: { value: true, message: ruleText.required },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      message: 'Please enter a valid email address',
    },
  },
  password: {
    required: { value: true, message: ruleText.required },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/,
      message: 'Password must be at least 6 characters long, include a number and an uppercase letter',
    },
  },
};
