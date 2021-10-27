//Query selectors 
const form = document.querySelector('.register__form-user');

const { username, password, password2, email } = form.elements;

const formElements = [username, password, password2, email];


//Empty inputs validator
function checkIfEmpty(input, errors) {
    if (!input.value.trim().lenght){
        errors.push(`Preencha o campo ${input.name}.`);
    }
};


// Username validator
function usernameInputValidator() {
    const usernameLimits = username.value.trim().length >= 2 && username.value.trim().length <= 45;
  
    const span = username.nextElementSibling;
    span.innerText = "";
  
    if(!usernameLimits){
      username.style.color = "red";
      span.innerHTML = "O username deve ter de 2 a 50 caracteres!";
      username.insertAdjacentElement('afterend', span);
      return false;
    }
  
    username.style.color = "green";
    return true;
  }
  
username.onblur = usernameInputValidator;


//Password Validators
function passwordInputValidator() {
    const passwordLimits = password.value.trim().length >=6;
  
    const span = password.nextElementSibling;
    span.innerText = "";
  
    if(!passwordLimits){
      password.style.color = "red";
      span.innerHTML = "A senha deve ter pelo menos 6 caracteres!";
      password.insertAdjacentElement('afterend', span);
      return false;
    }
  
    password.style.color = "green";
    return true;
  }
  
password.onblur = passwordInputValidator;


//Password confirm validator (o nome "password-confirm" esta dando problemas na validação)
function password2InputValidator() {
    const passIsValid = password2.value === password.value && password2.value.trim().length >=6;
  
    const span = password2.nextElementSibling;
    span.innerText = "";

    if(!passIsValid) {
        password2.style.color = "red";
        span.innerHTML = "A senha é diferente!";
        password2.insertAdjacentElement('afterend', span);
        return false;
    }
  
    password2.style.color = "green";
    return true;
  }
  
password2.onblur = password2InputValidator;


//Email validator
function emailInputValidator() {
    const emailIsValid = email.value.includes('@') && email.value.includes('.');
    const emailLimits = email.value.trim().lenght >= 10 && email.value.trim().lenght <= 50;

    const span = email.nextElementSibling;
    span.innerText = "";

    if(!emailIsValid && !emailLimits) {
        email.style.color = "red";
        span.innerHTML = "Email inválido!";
        email.insertAdjacentElement('afterend', span);
        return false;
    }

    email.style.color = "green";
    return true;
  }

email.onblur = emailInputValidator;


//Submit after validation
//form.addEventListener('submit', function (event) {
//    if(!usernameInputValidator() || !passwordInputValidator() 
//    || !password2InputValidator() || !emailInputValidator()) {
//      return event.preventDefault();
//    }
//    event.preventDefault();
//});
