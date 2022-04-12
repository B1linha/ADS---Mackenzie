""" Faça um programa em Python que calcule e apresente o fatorial de um número inteiro e natural fornecido pelo usuário. """

fat = 1
print('Digite um número inteiro e natural')
num = int(input())
while num < 0:
    num = int(input())
for i in range (1, num+1):
    fat = fat * i
print(f'{num}! = {fat}')