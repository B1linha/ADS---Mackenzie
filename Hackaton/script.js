const data = [
    {
        "Id": 1,
        "Licitador": "ARTESP",
        "Modalidade": "Concorrência",
        "Numero": "01/2022-INTER",
        "DataAbertura": "12/01/2023 14:15"
    },
    {
        "Id": 2,
        "Licitador": "CEETPS",
        "Modalidade": "CONCURSO",
        "Numero": "233/27/2022 - pss",
        "DataAbertura": "20/12/2022 00:00"
    },
    {
        "Id": 3,
        "Licitador": "CEETPS",
        "Modalidade": "CONCURSO",
        "Numero": "024/30/2022 - pss",
        "DataAbertura": "20/12/2022 00:00"
    },
    {
        "Id": 4,
        "Licitador": "FDE",
        "Modalidade": "TOMADA DE PREÇOS",
        "Numero": "69/00084/22/02",
        "DataAbertura": "13/12/2022 10:30"
    },
    {
        "Id": 5,
        "Licitador": "CSBS",
        "Modalidade": "LICITAÇÃO 13.303",
        "Numero": "02.251/22",
        "DataAbertura": "25/11/2022 09:30"
    }
];

const table = document.querySelector('.tableBody');
const search = document.querySelector('.data')

const jsonData = JSON.stringify(data);
const objData = JSON.parse(jsonData);

objData.map((pessoa) => {
    let template = `
    <tr>
        <td>${pessoa.Id}</td>
        <td>${pessoa.Licitador}</td>
        <td>${pessoa.Modalidade}</td>
        <td>${pessoa.Numero}</td>
        <td>${pessoa.DataAbertura}</td>
    </tr>`;
    table.innerHTML += template;
});

search.addEventListener('keyup', () => {
    let expressao = inputBusca.value.toLowerCase();
    
    if (expressao.length === 1) {
        return
    }

    let linhas = tabela.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoLinha = linhas[posicao].innerHTML.toLowerCase();

        if (true === conteudoLinha.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = '';
        }
    }
});