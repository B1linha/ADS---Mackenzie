""" Faça um programa em Python que solicite a quantidade de alunos de uma turma.

Após esta informação, o usuário deve digitar a média de cada aluno da turma, e o programa apresentará a mensagem PARABÉNS VOCÊ ESTÁ APROVADO aos alunos com média maior ou igual a 6.0.

O programa deve calcular e mostrar, no final da entrada de dados, a média geral da turma.

Obs.: Caso a quantidade informada de alunos da turma for igual a zero, o programa deve emitir a seguinte mensagem: NÃO HOUVE PROCESSAMENTO """
ct = 0
alunos = int(input('Digite a quantidade de alunos na turma'))
while ct < alunos:
    if alunos == 0:
        print('NÃO HOUVE PROCESSAMENTO')
        break
    media = float(input('Digite a média do aluno'))
    if media >= 6.0:
        print('PARABÉNS VOCÊ ESTÁ APROVADO!')
    else:
        print('Você foi reprovado!')
    media += media
    mediaL = media/alunos
    ct += 1
print('Sua média é {:.1f} você está Reprovado!'.format(mediaL))