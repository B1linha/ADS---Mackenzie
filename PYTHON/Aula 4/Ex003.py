"""Faça um programa em Python que, dada a idade de um atleta que será digitada pelo usuário, apresente a mensagem da coluna CATEGORIA de acordo com a tabela abaixo, onde a categoria depende da idade de entrada."""
idade = int(input())
if idade < 5:
    cat = 'NÃO TEM IDADE PARA SER ATLETA'
elif idade <= 7:
    cat = 'INFANTIL A'
elif idade <= 10:
    cat = 'INFANTIL B'
elif idade <=13:
    cat = 'JUVENIL A'
elif idade <=17:
    cat = 'JUVENIL B'
elif idade >= 18:
    cat = 'SÊNIOR'
else:
    print('')
print(cat)