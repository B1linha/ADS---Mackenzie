"""Faça um programa em Python que leia dois números inteiros e exiba o quadrado da diferença do primeiro valor pelo segundo"""

print('Digite dois números inteiros')
n1=float(input())
n2=float(input())
quadrado=n1**2-2*n1*n2+n2**2
print('O quadrado da diferença do primeiro valor pelo segundo é:',quadrado)