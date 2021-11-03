//Query selectors
const form = document.querySelector('.form__conta');

const { nome, sobrenome, cpf, dataNascimento } = form.elements;

const formElements = [nome, sobrenome, cpf, dataNascimento];


//Name validator
function nameInputValidator() {
    const nameLimits = nome.value.trim().length >= 2 && nome.value.trim().length <= 45;
  
    const span = nome.nextElementSibling;
    span.innerText = "";
  
    if(!nameLimits){
      nome.style.color = "red";
      span.innerHTML = "O nome deve ter de 2 a 50 caracteres!";
      span.style.color = "red"
      nome.insertAdjacentElement('afterend', span);
      return false;
    }
  
    nome.style.color = "green";
    return true;
  }
nome.onblur = nameInputValidator;


//Surname validator
function surnameInputValidator() {
    const surnameLimits = sobrenome.value.trim().length >= 2 && sobrenome.value.trim().length <= 45;
  
    const span = sobrenome.nextElementSibling;
    span.innerText = "";
  
    if(!surnameLimits){
      sobrenome.style.color = "red";
      span.innerHTML = "O sobrenome deve ter de 2 a 50 caracteres!";
      span.style.color = "red"
      sobrenome.insertAdjacentElement('afterend', span);
      return false;
    }
  
    sobrenome.style.color = "green";
    return true;
  }
sobrenome.onblur = surnameInputValidator;

