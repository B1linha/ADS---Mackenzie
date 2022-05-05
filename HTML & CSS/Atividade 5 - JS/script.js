/* Escolha uma cor predominante (if) e mostre:
✔ a modalidade;
✔ o time;
✔ a quantidade de jogadores;
✔ a imagem do Brasão.. */

let res = document.querySelector('.res')
let arrays = [['Basquete', 'Futebol', 'Vôlei'], ['São Paulo', 'Corinthias', 'Vasco'], [6, 12, 7], ['Dourado', 'Marrom', 'Azul']]
res.innerHTML = `${arrays}`

res.innerHTML += `<br> ${arrays[0][1]} ${arrays[1][2]}, ${arrays[2][1]}, ${arrays[3][1]}`

res.innerHTML += `<br><img src="vasco-logo-1.png" alt="vasco" width="100" height="100">`

document.body.style.background = '#b9846f'