import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };
const refs = {
  email: document.querySelector("input[name='email']"),
  message: document.querySelector("textarea[name='message']"),
  submit: document.querySelector('.feedback-form'),
};
const onInputEmail = event => {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
const onInputTextArea = event => {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
const formSubmit = event => {
  event.preventDefault();
  console.log(formData);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
};
const populate = () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.email.value = savedData['email'];
    refs.message.value = savedData['message'];
    formData.email = savedData['email'];
    formData.message = savedData['message'];
  }
};
populate();
refs.email.addEventListener('input', throttle(onInputEmail, 500));
refs.message.addEventListener('input', throttle(onInputTextArea, 500));
refs.submit.addEventListener('submit', formSubmit);
