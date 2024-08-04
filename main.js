import './style.css'

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

const confirmButton = document.getElementById('confirmButton')
const form = document.getElementById('form')

const helloBanner = document.getElementById('helloBanner');
const helloNameBanner = document.getElementById('helloNameBanner');
const helloEmailBanner = document.getElementById('helloEmailBanner');
const logoutButton = document.getElementById('logoutButton');

let result = null;

confirmButton.addEventListener('click', function() {
  const body = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  if(password.value !== confirmPassword.value) {
    alert('Your passwords do not match!');
    return;
  }

  if(password.value.length < 6 || confirmPassword.value.length < 6) {
    alert('Password must have 6 symbols!');
    return;
  }

  const bodyKeys = Object.keys(body); 
  const bodyErrors = []; 

  bodyKeys.forEach((key) => {
    if(body[key].length === 0){
      bodyErrors.push(key)
    }
  })

  if(bodyErrors.length > 0) {
    alert('All fields are required!');
    return
  } 

  result = body;

  username.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';

  hideElements();
})

function hideElements() {
  if(result.username.length > 0 && result.email.length > 0){
    form.style.display = 'none';
    helloBanner.style.display = 'block';

    helloNameBanner.insertAdjacentHTML('beforeend', `<div>${result.username}</div>`)
    helloEmailBanner.insertAdjacentHTML('beforeend', `<div>${result.email}</div>`)
  }
}

logoutButton.addEventListener('click', function(){
  form.style.display = 'block';
  helloBanner.style.display = 'none';
})