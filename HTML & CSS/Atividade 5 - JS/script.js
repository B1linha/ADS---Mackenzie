let times = [['Futebol', 'São Paulo', 12], ['Futebol', 'Grêmio', 12], ['Futebol', 'Vasco', 12]] 
let res = document.querySelector('.res')
let preto = document.querySelector('.preto')
let vermelho = document.querySelector('.vermelho')
let branco = document.querySelector('.branco')
document.addEventListener('click', function(event) {
    el = event.target
    if (el.classList.contains('azul')) {
        res.innerHTML = `${times[1]}`
        document.body.style.background = 'blue'
        res.innerHTML += `<br><img src="Gremio.jpg" alt="vasco" width="100" height="100">`
    }
    if (el.classList.contains('vermelho')) {
        res.innerHTML = `${times[0]}`
        document.body.style.background = 'red'
        res.innerHTML += `<br><img src="SP.jpg" alt="vasco" width="100" height="100">`
    }
    if (el.classList.contains('branco')) {
        res.innerHTML = `${times[2]}`
        document.body.style.background = 'white'
        res.innerHTML += `<br><img src="vasco-logo-1.png" alt="vasco" width="100" height="100">`
    }
})