var inicio = 1 //window.document.getElementById('txti')
var fim = 50 //window.document.getElementById('txtf')
var passo =  5//window.document.getElementById('txtp')
var res = inicio //window.document.getElementById('res')
while (res < fim){
    inicio = inicio + passo
    console.log(`${res}`)
    res = inicio    
}
