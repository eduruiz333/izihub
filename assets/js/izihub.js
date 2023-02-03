jQuery("#carousel_01").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin:10,
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

jQuery("#carousel_02").owlCarousel({
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

jQuery("#carousel_03").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    margin:10,
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

$(document).ready(function () {
    $(".btn-inicio").click(function() {
        $("html, body").animate({scrollTop: 0}, 800)
    })          
})


const getContentHeight = document.querySelectorAll('.card-height')
const createButton = document.querySelectorAll('.create-btn-expand')
const btn = `<button class="btn-read-more"></button>`

for (let i = 0; i < getContentHeight.length; i++) {
    const alturas = getContentHeight[i].offsetHeight

    if (alturas > 165) {
        getContentHeight[i].classList.add('crop')
        createButton[i].innerHTML = btn
        createButton[i].addEventListener("click", addButton)

        function addButton() {
            getContentHeight[i].classList.toggle('crop')
            createButton[i].classList.toggle('less')
        }
    }
}

