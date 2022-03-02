""" Faça um programa que receba três notas de um aluno, calcule e mostre a
média aritmética e a mensagem constante na tabela a seguir. Aos alunos que
ficaram para exame, calcule e mostre a nota que deverão tirar para serem
aprovados, considerando que a média exigida é 6,0."""
n1 = float(input())
n2 = float(input())
n3 = float (input())
media = (n1+n2+n3)/3
if media >= 0 and media < 3:
    print('Sua média é {:.1f} você está Reprovado!'.format(media))
elif media < 7:
    print('Sua média é {:.1f} você tem que fazer um Exame!'.format(media))
else: 
    print('Sua média é {:.1f} você está Aprovado!'.format(media))