//Password Validators
function passwordInputValidator(senha) {
  const passLimits = senha.value.trim().length >=6;

  const span = senha.nextElementSibling;
  span.innerText = "";

  if(!passLimits){
    senha.style.color = "red";
    span.innerHTML = "A senha deve ter pelo menos 6 caracteres!";
    span.style.color = "red";
    senha.insertAdjacentElement('afterend', span);
    return false;
  }

  senha.style.color = "green";
  return true;
}
  
function password2InputValidator(confirmaNovaSenha) {
  const novaSenha = document.getElementById("novaSenha");
  
  const passIsValid = confirmaNovaSenha.value === novaSenha.value && confirmaNovaSenha.value.trim().length >=6;

  const span = confirmaNovaSenha.nextElementSibling;
  span.innerText = "";

  if(!passIsValid) {
      confirmaNovaSenha.style.color = "red";
      span.innerHTML = "A senha é diferente!";
      span.style.color = "red";
      confirmaNovaSenha.insertAdjacentElement('afterend', span);
      return false;
  }

  confirmaNovaSenha.style.color = "green";
  return true;
}
