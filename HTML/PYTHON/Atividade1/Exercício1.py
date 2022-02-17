"""Escreva um programa em Python que permite ao usuário digitar dois números inteiros e exibir o resultado para cada uma das seguintes operações, nesta ordem: soma, subtração, multiplicação, divisão, divisão truncada, resto e exponenciação. 

Confira, no material do curso, os operadores matemáticos."""
print('Digite dois números')
n1=int(input())
n2=int(input())
soma = n1+n2
subtração = n1-n2
multipliação = n1*n2
divisão = (n1/n2)
divisãot = (n1//n2)
resto = n1%n2
exponenciação = n1**n2
print('O valor da soma é:', soma)
print('O valor da subtração é:', subtração)
print('O valor da multiplicação é:', multipliação)
print('O valo da divisão é:', divisão)
print('O valor da divisão trunada é:', divisãot)
print('O valor do resto é:', resto)
print('O valor da exponenciação é:', exponenciação)