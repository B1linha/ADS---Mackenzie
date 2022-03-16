''' Em um campeonato de tênis de mesa, existem quatro times e cada um possui dois jogadores. Faça um programa que receba a idade de cada um dos jogadores, calcule e mostre a quantidade de jogadores menores de idade do campeonato, a média das idades de cada time e a média de idade do campeonato. 

Existem algumas formas de resolver este problema, veja uma possível solução: '''

soma_geral = 0
ct = 0
for time in range (4):
    print(f'Time {time+1}')
    soma = 0
    for jogador in range (2):
        print(f'Idade do jogador {jogador+1}')
        idade = int(input())
        if idade < 18:
            ct += 1
        soma += idade
    print(f'Média de idade do time {time+1} é igual a {soma/2}')
    soma_geral += soma
print(f'Média de idade dos atletas do campeonato é igual a {soma_geral/8}')
print(f'Quantidade de atletas menor de idade é igual a {ct}')