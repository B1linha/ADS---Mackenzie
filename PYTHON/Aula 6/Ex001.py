''' Este programa em Python solicita ao usuário um número e mostra os próximos 5 números a partir do número digitado. '''

num = int(input())
for ct in range (0,5,1):
    num += 1
    print(num)