import pandas as pd
import matplotlib.pyplot as plt
x = pd.read_csv('https://github.com/Rogerio-mack/Hackathon-Itau-Mackenzie/blob/main/amostra_bdmack/amostras/Dados/bdmack_enr_ipdo_amostra.csv')

plt.plot(x['SECO']) 

plt.show()

""" 
Plot == gráfico de linha / hist == gráfico em barras / pie == gráfico pizza
Bins é usado para aumentar a distância entre as barras no hist.
Labels é usado como rotulo no pie
"""