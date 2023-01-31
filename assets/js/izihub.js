jQuery("#carousel_02").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: false,
    margin: 10,
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
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
});


const pegaaltura = document.querySelectorAll('.card-body')
const pegabotoes = document.querySelectorAll('.create-btn-expand')

let btn = `<button class="btn btn-primary read-more"></button>`


for (let i = 0; i < pegaaltura.length; i++) {
    const alturas = pegaaltura[i].offsetHeight

    if (alturas > 200) {
        
        pegaaltura[i].classList.add('crop');
        pegabotoes[i].innerHTML = btn
        
        pegabotoes[i].addEventListener("click", addButton);

        function addButton() {
            pegaaltura[i].classList.toggle('crop');
            pegabotoes[i].classList.toggle('less');
            
        }


    }


}

