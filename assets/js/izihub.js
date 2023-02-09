// CONFIGURAÇÕES DOS CARROSSÉIS
jQuery('#carousel_01').owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
    }
})

jQuery('#carousel_02').owlCarousel({
    autoplay: false,
    lazyLoad: false,
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 7000,
    smartSpeed: 400,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        },
        1366: {
            items: 3
        }
    }
})

jQuery('#carousel_03').owlCarousel({
    autoplay: false,
    lazyLoad: true,
    margin: 10,
    loop: true,
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        },
        1366: {
            items: 3
        }
    }
})


// CRIA BOTÃO VOLTAR PARA VERSÃO DESK
$(document).ready(function () {
    $('.btn-inicio').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    })
})


// CRIA OS BOTÕES LEIA MAIS
const getContentHeight = document.querySelectorAll('.card-height')
const createButton = document.querySelectorAll('.create-btn-expand')
const btn = `<button class="btn-read-more"></button>`
for (let i = 0; i < getContentHeight.length; i++) {
    const alturas = getContentHeight[i].offsetHeight
    if (alturas > 165) {
        getContentHeight[i].classList.add('crop')
        createButton[i].innerHTML = btn
        createButton[i].addEventListener('click', addButton)
        function addButton() {
            getContentHeight[i].classList.toggle('crop')
            createButton[i].classList.toggle('less')
        }
    }
}


// VALIDA O CAMPO E-MAIL E TRANSFERE PARA A PÁGINA DO FORMULÁRIO
const emailInput = document.querySelector('#email')
const submitButton = document.querySelector('.get-email')
emailInput.addEventListener('input', (event) => {
    const email = event.target.value
    if (email.includes('@') && email.includes('.')) {
        submitButton.classList.remove('disabled')
    } else {
        submitButton.classList.add('disabled')
    }
})
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        submitButton.click()
    }
})
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const email = emailInput.value
    localStorage.setItem('email', email)
    window.location = 'izihub-formulario.html'
})


// LER MAIS FAQ
const btnMoreFaq = document.querySelector('.btn-faq')
const showMore = document.querySelector('.more-content')
btnMoreFaq.addEventListener('click', function() {
    showMore.classList.toggle('content-hidden')
    btnMoreFaq.classList.toggle('collapsed')
  }, { passive: true })
