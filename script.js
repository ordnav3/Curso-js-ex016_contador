const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    contagem()
})

function contagem() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = `Impossivel contar`
        //alert('[ERRO]Faltando Dados [ERRO]')
    } else {
        res.innerHTML = 'Contando ...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` <img src="./imagens/1f449.png" alt="emoji"> ${c} `
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` <img src="./imagens/1f449.png" alt="emoji"> ${c} `
            }
        }

        res.innerHTML += `\u{1f3c1}`
    }
}