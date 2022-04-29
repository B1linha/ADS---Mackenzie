import pandas as pd
import matplotlib.pyplot as plt

dados = pd.read_csv(r'C:\Users\kdkq516\OneDrive - AZCollaboration\Documents\GitHub\Hackathon-Itau-Mackenzie\amostra_bdmack\amostras\Dados\bdmack_enr_ipdo_amostra.csv')

plt.plot(dados['SECO'])

plt.show()