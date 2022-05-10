def atualiza_preco (valor):
    valor = valor + valor/10
    return valor

def taxa(valor):
    conta = valor * 0.025
    return conta

def main():
    preço = int(input('Digite um valor:'))
    res = atualiza_preco(preço)
    res2 = taxa(res)
    print(f'{res:.2f}')
    print(f'{res2:.2f}')

main()