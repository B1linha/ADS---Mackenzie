function contar() {
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo =  window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    while (res <= fim){
        inicio = inicio + passo
        res.style.textAlign = 'center'
        res = inicio
        console.log(res)
    }
} 