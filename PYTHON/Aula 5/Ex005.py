""" Elabore um programa em Python que mostre um menu para o usuário escolher uma operação ou sair do programa.
O programa deve reconhecer a opção escolhida pelo usuário e solicitar a entrada de dois números caso a opção escolhida seja uma das operações. Depois de fazer a operação e mostrar o resultado , o programa deve continuar em execução para que o usuário selecione operação e outros números. O programa só terminará , caso o usuário digite 0. """

while True:
    print ('Soma .................... +'+
        'Subtração ............. - '+
        'Multiplicação......... *'+
        'Divisão................... /'+ 
        'Sair ....................... 0')
    op = input()
    if op == '0':
        break
    print('Digite dois números')
    n1 = float(input())
    n2 = float(input())
    if op == '+':
        print('Soma:', n1+n2)
    elif op == '-':
        print('Subtração:', n1-n2)
    elif op == '*':
        print('Multiiplicação:', n1*n2)
    elif op == '/':
        if n2 != 0:
            print('Divisão:', n1/n2)
        else:
            print('Não há divisão por zero')
    else:
        print('Opção inválida')