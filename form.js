// form-validation//

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const submitButton = document.querySelector('.submit');

form.addEventListener('submit', (event) => {


  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    const errorText = document.createElement('p');
    errorText.textContent = 'Email should be in lowercase.';
    errorText.style.color = 'red';
    submitButton.parentNode.insertBefore(errorText, submitButton);

  } else {
    // Clear the saved form data from local storage when the form is submitted successfully
    localStorage.removeItem('formData');

  }
});
