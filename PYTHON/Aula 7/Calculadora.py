def menu():
    print('1 -> Soma/ 2 -> Subtracao/ 3 -> Multiplicacao/ 4 -> Divisao/ 5 -> Sair')
    op = int(input())
    while (op <1 or op >5):
        print('Opção Inválida!')
        op = int(input())
    return op

def escolha(op, n1, n2):
    if op == 1:
        result = soma(n1,n2)
    elif op == 2:
        result = subtracao(n1,n2)
    elif op == 3:
        result = multiplicacao(n1,n2)
    elif op == 4:
        if n2 != 0:
            result = divisao(n1,n2)
        else:
            result = None
    return result

def soma (n1, n2):
    return n1+n2
def subtracao (n1,n2):
    return n1-n2
def multiplicacao (n1,n2):
    return n1*n2
def divisao (n1,n2):
    return n1/n2

def main ():
    while True:
        op = menu()
        if op == 5:
            break
        print('Digite 2 números')
        n1 = int(input())
        n2 = int(input())
        if escolha (op, n1, n2) == None:
            print('Não há divisão por zero!')
        else: 
            print(escolha(op, n1, n2))
main()