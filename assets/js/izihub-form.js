const submitButton = document.querySelector('.get-email')



const retrievedEmail = localStorage.getItem('email');
const emailInput = document.querySelector('#email');

if (retrievedEmail) {
  emailInput.value = retrievedEmail;
}


