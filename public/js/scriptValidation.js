//query selectors 
const form = document.querySelector('.register__form-user');
const errorContainer = document.querySelector('.errors-container');

//form items 
//const { name: username, password, password-confirm, email } = form.elements;

const formItems =  [username, password, password-confirm, email];


//Empty inputs validator
function checkEmpty(input, errors) {
    if (!input.value.trim().lenght){
        errors.push(`Preencha o campo ${input.name}.`);
    }
};


// Username validator
function usernameInputValidator() {
    const usernameLimits = username.value.trim().length >= 2 && username.value.trim().length <= 50;
  
    const span = username.nextElementSibling;
    span.innerText = "";
  
    if(!usernameLimits){
      username.style.borderColor = "red";
      span.innerText = 'O username deve ter de 2 a 50 caracteres!';
      username.insertAdjacentElement('afterend', span);
      return false;
    }
  
    username.style.borderColor = "green";
  
    return true;
  }
  
  username.onblur = usernameInputValidator;


//Password Validators
function passwordInputValidator() {
    const passwordLimits = password.value.trim().length = 8;
  
    const span = password.nextElementSibling;
    span.innerText = "";
  
    if(!passwordLimits){
      password.style.borderColor = "red";
      span.innerText = 'A senha deve conter 8 caracteres!';
      password.insertAdjacentElement('afterend', span);
      return false;
    }
  
    password.style.borderColor = "green";
  
    return true;
  }
  
  username.onblur = passwordInputValidator;


//Password confirm validator (o nome "password-confirm" esta dando problemas na validação)
//function passConfInputValidator() {
//    const passIsValid = password-confirm.value = password;
//    const passwordLimits = password-confirm.value.trim().length = 8;
//  
//    const span = password.nextElementSibling;
//    span.innerText = "";
//
//    if(!passIsValid) {
//        password-content.style.borderColor = "red";
//        span.innerText = "A senha é diferente!";
//        password-confirm.insertAdjacentElement('afterend', span);
//        return false;
//    }
//  
//    if(!passwordLimits){
//      password.style.borderColor = "red";
//      span.innerText = 'A senha deve conter 8 caracteres!';
//      password.insertAdjacentElement('afterend', span);
//      return false;
//    }
//  
//    password.style.borderColor = "green";
//  
//    return true;
//  }
//  
//  username.onblur = passConfInputValidator;


//Email validator
function emailInputValidator() {
    const emailIsValid = email.value.includes('@') && email.value.includes('.');
    const emailLimits = email.value.trim().lenght >= 10 && email.value.trim().lenght <= 100;

    const span = email.nextElementSibling;
    span.innerText = "";

    if(!emailIsValid) {
        email.style.borderColor = "red";
        span.innerText = "Email inválido!";
        email.insertAdjacentElement('afterend', span);
        return false;
    }

    if(!emailLimits){
        email.style.borderColor = "red";
        span.innerText = 'O email deve ter de 10 a 100 caracteres!';
        email.insertAdjacentElement('afterend', span);
        return false;
    }

    email.style.borderColor = "green";
    return true;
}

email.onblur = emailInputValidator;


//Submit after validation
form.addEventListener('submit', function (event) {
    if(!usernameInputValidator() || !passwordInputValidator() || !passConfInputValidator() || !emailInputValidator()) {
      return event.preventDefault();
    }
    event.preventDefault();
});
