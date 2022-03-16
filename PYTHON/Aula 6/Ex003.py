''' Faça um programa que receba 5 números inteiros digitados pelo usuário e, no final, apresente a soma destes números. '''

soma = 0

for ct in range(0,5,1):
    num = int(input())
    soma += num
print('Soma =', soma)