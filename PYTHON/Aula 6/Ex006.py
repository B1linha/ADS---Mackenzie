""" Escreva um programa em Python que leia um número inteiro, entre 0 e 10, e mostre a tabuada deste número multiplicado de 1 até 10. 

O valor de entrada dever ser validado, pois o programa somente aceitará números entre 0 e 10 (inclusive). Caso o valor de entrada esteja fora do intervalo, o programa emitirá a mensagem VALOR INVÁLIDO e solicitará a entrada desse dado até que ela seja válida. 

Com a entrada de dados válida, o programa mostrará a tabuada do número digitado no formato do caso de teste. """

n1 = int(input())
while n1 <= 0 or n1 > 10:
    print('VALOR INÁLIDO! Digite novamente:')
    n1 = int(input())
else:
    for calculo in range(10):
        mult = calculo+1
        print(n1 * mult)