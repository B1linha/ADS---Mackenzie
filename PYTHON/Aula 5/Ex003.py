""" Faça um programa que leia vários números, encerrando a entrada de dados quando o usuário digitar um número negativo. Calcule e mostre a quantidade de números digitados.
Obs.: O número que encerra não deve ser contado"""

ct = 0
print('Digite vários números')
num = int(input())
while num >= 0:
    ct += 1
    num = int(input())
print('Quantidade de números digitados', ct)