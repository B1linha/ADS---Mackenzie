"""Elabore um programa em Python que solicite um conjunto de números (encerrando a entrada de dados com 0) .  

Determine o menor e o  maior valor do conjunto e a soma dos valores  digitados. """

print('Digite os números encerrando com 0')
num = int(input())
maior = num
menor = num
soma = 0
while num != 0:
    soma += num
    if num > maior:
        maior = num
    if num < menor:
        menor = num
    num = int(input())
print('Soma =',  soma)
print('Maior =', maior)
print('Menor =', menor)