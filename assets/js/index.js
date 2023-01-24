

function contador () {


    const printContent = document.querySelector('.print-content')

    const inicio = 1
    const fim = 30

    for(let i = inicio; i <= fim; i++) {
        console.log(i)
        printContent.innerHTML += `<p>${i}</p>`
    }
}

contador()