// RECUPERA O EMAIL DIGITADO NA TELA ENTEIOR
const submitButton = document.querySelector('.get-email')
const retrievedEmail = localStorage.getItem('email')
const emailInput = document.querySelector('#input-email')
if (retrievedEmail) {
  emailInput.value = retrievedEmail
}


// VERIFICA SE ATENDE AOS REQUISITOS DE PREENCHIMENTO DE EMAIL
emailInput.addEventListener('input', function () {
  if (emailInput.value.trim() !== '' && emailInput.value.includes('@') && emailInput.value.includes('.')) {
    emailInput.classList.add('valid')
  } else {
    emailInput.classList.remove('valid')
  }
})


// VALIDA SE O CAMPO NOME ESTÁ PREENCHIDO E SE TEM AO MENOS 3 CARACTERES
const inputName = document.querySelector('#input-name')
document.onload = inputName.focus()
inputName.addEventListener('input', function () {
  if (inputName.value.trim() !== '' && inputName.value.length >= 3) {
    inputName.classList.add('valid')
  } else {
    inputName.classList.remove('valid')
  }
})


// APLICA MÁSCARA DO TELEFONE
function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout('execmascara()', 1)
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
  v = v.replace(/\D/g, '') //Remove tudo o que não é número
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2') //Coloca hífen entre o quarto e o quinto dígitos
  return v
}
function id(el) {
  return document.getElementById(el)
}
window.onload = function () {
  id('input-tel').onkeyup = function () {
    mascara(this, mtel)
  }
}


// VALIDA SE O CAMPO TELEFONE ESTÁ PREENCHIDO
const input = document.querySelector('#input-tel')
input.addEventListener('input', function () {
  if (input.value.trim() !== '' && input.value.length >= 14) {
    input.classList.add('valid')
  } else {
    input.classList.remove('valid')
  }
})


// VALIDA SE O CHECKBOX TERMOS ESTÁ MARCADO
document.getElementById('check-termos').addEventListener('click', function () {
  if (this.checked) {
    this.classList.add('valid')
  } else {
    this.classList.remove('valid')
  }
})


// VERIFICA SE TODOS OS CAMPOS ESTÃO PREENCHIDOS CORRETAMENTE E EXIBE AS MODAIS APROPRIADAS
document.querySelector('.send').addEventListener('click', function () {
  const inputs = document.querySelectorAll('.required')
  const areAllValid = [...inputs].every(input => input.classList.contains('valid'))
  if (areAllValid) {
    $('#modalSucesso').modal('show')
  } else {
    $('#modalErro').modal('show')
  }
})

// AO ENVIAR O FORMULÁRIO, LIMPAR O LOCALSTORAGE
// localStorage.removeItem('email')