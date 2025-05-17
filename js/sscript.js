document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  let valid = true;

  form.querySelectorAll('.error').forEach(el => el.textContent = '');

  ['firstName', 'lastName', 'email', 'password', 'supportReason'].forEach(name => {
    const input = form.elements[name];
    if (!input.value.trim()) {
      valid = false;
      input.nextElementSibling.textContent = 'required';
    }
  });

  const sexRadios = form.elements['sex'];
  if (![...sexRadios].some(r => r.checked)) {
    valid = false;
    form.querySelector('.sex-group .error').textContent = 'required';
  }

  if (!valid) return;

  localStorage.setItem('firstName', form.firstName.value.trim());
  localStorage.setItem('lastName', form.lastName.value.trim());
  localStorage.setItem('sex', [...sexRadios].find(r => r.checked).value);
  localStorage.setItem('email', form.email.value.trim());
  localStorage.setItem('supportReason', form.supportReason.value.trim());

  
  window.location.href = 'proj_profile_Golpe.html';
});
