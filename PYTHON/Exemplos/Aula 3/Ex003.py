""" Escreve um programa em Python que leia dois números distintos e apresente o quadrado do maior número.
math.pow() é usado para exponenciação"""
import math
print('Digite dois números:')
n1 = float(input())
n2 = float(input())
if n1>n2:
    quadrado = math.pow(n1,2)  
else:
    quadrado = math.pow(n2,2)
print('O quadrado do maior é:', quadrado)