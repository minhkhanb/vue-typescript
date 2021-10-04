import { defineRule } from 'vee-validate';

defineRule('required', (value: string) => {
  if (!value || !value.length) {
    return "You can't leave this empty.";
  }

  return true;
});

defineRule('email', (value: string) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }

  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  console.log('email value: ', value, regex.test(value));

  // Check if email
  if (!regex.test(value)) {
    return 'Please enter a valid email address.';
  }

  return true;
});
