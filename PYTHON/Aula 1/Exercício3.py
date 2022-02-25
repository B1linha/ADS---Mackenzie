"""Faça um programa em Python que resolva o seguinte problema:

Um concurso possui um prêmio no montante de R$ 780.000,00 para dividir entre três ganhadores da seguinte forma:
- o primeiro ganhador receberá 46% do prêmio;

- o segundo ganhador receberá 32% do prêmio;

- o terceiro receberá o restante do prêmio.

Calcule e mostre o valor do prêmio de cada ganhador."""
P = 780000
G1 = float(P*46)
G2 = float(P*32)
G3 = float(P*22)
print('O ganhador 1 vai receber:', G1/100)  
print('O ganhador 2 vai rececber:',G2/100)
print('O ganhaor 3 vai receber:', G3/100)