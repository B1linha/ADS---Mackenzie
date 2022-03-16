""" Programa que solicita ao usuário um número e mostra os próximos 5 números a partir do número digitado. """

n = int(input('Digite um número'))
ct = 0
x = n
while ct<5:
    x += 1
    print(x, end = '')
    ct += 1