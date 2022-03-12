""" Faça um programa que leia um número entre 30 e 70. Repetir a entrada de dados até o usuário digitar um valor válido."""

ct = 0
num = int(input('Digite um número entre 30 e 70:'))
while num < 30 or num > 70:
    ct += 1
    num = int(input('Número inválido, digite novamente:'))
print('Número válido! Quantidade de tentativas:', ct)