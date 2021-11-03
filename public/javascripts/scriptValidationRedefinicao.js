//Query selectors
const form = document.querySelector('.reset__form-pass');

const { pass, pass2 } = form.elements;
const formElements = [pass, pass2];

//Password Validators
function passwordInputValidator() {
    const passLimits = pass.value.trim().length >=6;
  
    const span = pass.nextElementSibling;
    span.innerText = "";
  
    if(!passLimits){
      pass.style.color = "red";
      span.innerHTML = "A senha deve ter pelo menos 6 caracteres!";
      span.style.color = "red";
      pass.insertAdjacentElement('afterend', span);
      return false;
    }
  
    pass.style.color = "green";
    return true;
  }
  
pass.onblur = passwordInputValidator;


//Password confirm validator (o nome "password-confirm" esta dando problemas na validação)
function password2InputValidator() {
    const passIsValid = pass2.value === pass.value && pass2.value.trim().length >=6;
  
    const span = pass2.nextElementSibling;
    span.innerText = "";

    if(!passIsValid) {
        pass2.style.color = "red";
        span.innerHTML = "A senha é diferente!";
        span.style.color = "red";
        pass2.insertAdjacentElement('afterend', span);
        return false;
    }
  
    pass2.style.color = "green";
    return true;
  }
  
pass2.onblur = password2InputValidator;
