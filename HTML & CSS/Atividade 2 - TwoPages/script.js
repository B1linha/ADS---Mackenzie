let rodape = document.querySelector('.rodape');

rodape.innerHTML = `Lucas Barreto <br> Ano - 2022 <br> Facebook: lucasbarreto@algumacoisa.com <br> instagram: @alguma coisa <br> Sexo: Masculino <br> Localização: Polo - Higienópolis`

const data = new Date();
const diaS = data.getDay();

function GetDayWeak (DayWeakParameter) {
    let DayWeakText;
    switch (DayWeakParameter) {
    case 0: DayWeakText = 'Domingo';
    return DayWeakText;
    case 1: DayWeakText = 'Segunda-Feira'
    return DayWeakText;
    case 2: DayWeakText = 'Terça-Feira';
    return DayWeakText;
    case 3: DayWeakText = 'Quarta-Feira';
    return DayWeakText;
    case 4: DayWeakText = 'Quinta-Feira';
    return DayWeakText;
    case 5: DayWeakText = 'Sexta-Feira';
    return DayWeakText;
    case 6: DayWeakText = 'Sabádo'
    return DayWeakText;
    }
}

alert(`Bom dia, hoje é ${GetDayWeak(diaS)}

Lucas Brito Barreto
Cotia
Estudante de Análise e Desenvolvimento de Sistemas`)