function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function wait (msg, time) {
    return new Promise((resolve, reject) => {

        if ( typeof msg !== 'string') {
            reject('Bad Value')
            return
        }

        setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei!')
        }, time)
    })
}

wait('Fase 1', random(0, 3000))
.then(valor => {    
    console.log(valor)
})