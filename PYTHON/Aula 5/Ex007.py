""" Faça um programa em Python que solicite a quantidade de alunos de uma turma.

Após esta informação, o usuário deve digitar a média de cada aluno da turma, e o programa apresentará a mensagem PARABÉNS VOCÊ ESTÁ APROVADO aos alunos com média maior ou igual a 6.0.

O programa deve calcular e mostrar, no final da entrada de dados, a média geral da turma.

Obs.: Caso a quantidade informada de alunos da turma for igual a zero, o programa deve emitir a seguinte mensagem: NÃO HOUVE PROCESSAMENTO """

ct = 0
mediaL = 0
alunos = int(input())
if alunos == 0:
    print('NÃO HOUVE PROCESSAMENTO')
while ct < alunos:
    media = float(input())
    if media >= 6.0:
        print('PARABÉNS VOCÊ ESTÁ APROVADO')
    mediaL += media
    ct += 1
if alunos > 0:
    print(mediaL/alunos)