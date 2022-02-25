"""Faça um programa em Python que receba o custo (valor em reais) de um espetáculo teatral e o preço do convite (valor em reais) desse espetáculo. Esse programa deve calcular e mostrar:
a) A quantidade de convites que devem ser vendidos para que, pelo menos, o custo do espetáculo seja alcançado.  
25000.00 / 32.00 = 782 / 961
b) A quantidade de convites que devem ser vendidos para que se tenha um lucro de 23% """ 
import math
Custo = float(input(''))
PreçoConvite = float(input(''))
X=Custo/PreçoConvite
XS = math.ceil(X)
Y = X + X*0.23
YS = math.ceil(Y)
print(XS)
print(YS)