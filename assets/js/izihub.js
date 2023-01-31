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


const getContentHeight = document.querySelectorAll('.card-body')
const createButton = document.querySelectorAll('.create-btn-expand')

let btn = `<button class="btn btn-primary"></button>`


for (let i = 0; i < getContentHeight.length; i++) {
    const alturas = getContentHeight[i].offsetHeight

    if (alturas > 200) {
        
        getContentHeight[i].classList.add('crop');
        createButton[i].innerHTML = btn
        
        createButton[i].addEventListener("click", addButton);

        function addButton() {
            getContentHeight[i].classList.toggle('crop');
            createButton[i].classList.toggle('less');
        }
    }
}

