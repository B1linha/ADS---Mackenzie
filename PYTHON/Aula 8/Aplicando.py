''' Elabore uma função em Python chamada valorPagamento para determinar o valor a ser pago por uma prestação de conta.  

A função valorPagamento, que você irá escrever, recebe por parâmetro o valor da prestação e o número de dias em atraso, calcula e retorna o valor a ser pago. 

O cálculo do valor a ser pago é feito da seguinte forma:

- Para pagamentos sem dias de atraso, cobrar o valor da prestação,

- Quando houver atraso, cobrar 3% de multa sobre o valor da prestação e juros de 0,1%, sobre o valor da prestação, por dia de atraso.

O programa possui a função principal (def main()), já escrita na questão, que solicita ao usuário o valor da prestação e o número de dias em atraso e mostra o valor retornado pela função que você escreverá.  '''

def valorPagamento(valor,dias):
    if dias==0:
        return valor
    else:
        return valor+(valor*0.03)+(valor*(dias*0.001))