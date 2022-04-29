import pandas as pd

x = pd.read_excel(r'C:\Users\kdkq516\OneDrive - AZCollaboration\Desktop\Series.xlsx', engine='openpyxl')

dados_filtrados = x['Exportações'] > 200000

print(x[dados_filtrados])