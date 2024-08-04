import './style.css'

// Получаем элементы по айди
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

// Начальное значение переменной в которой должен храниться конечный результат
let result = null;

// Добавление события при нажатии на кнопку
confirmButton.addEventListener('click', function() {
  
  // Обьект с данными введенными пользователем
  const body = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  // Проверка на соответствие паролей
  if(password.value !== confirmPassword.value) {
    alert('Your passwords do not match!');

    // Прерывание функции
    return;
  }

  // Проверка паролей на длинну (должно быть больше 6 символов)
  if(password.value.length < 6 || confirmPassword.value.length < 6) {
    alert('Password must have 6 symbols!');

    // Прерывание функции
    return;
  }

  // Переменная с ключами обьекта body (key - ключ: value - значение)
  const bodyKeys = Object.keys(body);

  // Массив который хранит в себе поля , которые являются незаполненными
  const bodyErrors = []; 

  // Обращение к каждому ключу обьекта body и проверка его значения на пустоту
  bodyKeys.forEach((key) => {

    // (проверка на пустоту)
    if(body[key].length === 0){

      // Элемент который является пустым пушить в переменную bodyErrors
      bodyErrors.push(key)
    }
  })

  // Если массив с ошибками не пустой, значит отображать alert
  if(bodyErrors.length > 0) {
    alert('All fields are required!');

    // Прерывание функции
    return
  } 

  // Присвоение конечного результата заполненных полей в переменную для того, что бы вынести ее из-за функции и использовать в дальнейшем в коде
  result = body;

  // Очистка полей после успешной регистрации
  username.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';

  // Вызов функции для того, что бы спрятать елементы
  hideElements();
})

function hideElements() {
  if(result.username.length > 0 && result.email.length > 0){
    // Скрытие елемента формы
    form.style.display = 'none';

    // Показ елемента с данными о пользователе
    helloBanner.style.display = 'block';

    // Вставить HTML значение перед концом 
    helloNameBanner.insertAdjacentHTML('beforeend', `<div>${result.username}</div>`)
    helloEmailBanner.insertAdjacentHTML('beforeend', `<div>${result.email}</div>`)
  }
}

// Добавление события при нажатии на кнопку для показа формы и скрытия баннера
logoutButton.addEventListener('click', function(){
  form.style.display = 'block';
  helloBanner.style.display = 'none';
})
