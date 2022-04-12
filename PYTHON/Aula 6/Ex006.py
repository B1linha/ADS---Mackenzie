""" Apresente os 8 primeiros números da série de Fibonacci """

n1 = 1
n2 = 1
for i in range (8):
    print(n1, end = ' ')
    valor = n1 + n2
    n1 = n2
    n2 = valor
