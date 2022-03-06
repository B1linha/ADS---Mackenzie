"""Elabore um programa que calcule e mostre o valor que deve ser pago por um produto, considerando que o usuário fornecerá o preço normal de etiqueta e o código da condição de pagamento.
Utilize os códigos da tabela seguinte para ler qual é a condição de pagamento escolhida e efetuar o cálculo adequado."""
produto = float(input('Valor do produto:'))
CPag = str(input('Método de pagamento:'))
parc = int(input('Quantidade de parcelamento'))
if CPag == 'dinheiro' or CPag == 'debito':
    print('Você recebeu 10% de desconto, o valor é: ', produto-produto*0.10 )
elif CPag == 'credito' and parc == 1:
    print('Você recebeu 5% de desconto, o valor do produto é:', produto-produto*0.05)
elif CPag == 'credito' and parc == 2:
    print ('Em 2 vezes, preço normal sem juros.{}'.format(produto))
elif CPag == 'credito' and parc == 3:
    print ('Em 3 vezes, preço normal mais 10% de juros. {}'.format(produto))
else :
    print('Código Inválido')