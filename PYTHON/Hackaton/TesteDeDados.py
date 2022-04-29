import pandas as pd
import matplotlib.pyplot as plt

only_trend = pd.read_csv('https://github.com/Rogerio-mack/Ciencia-de-Dados-e-Aprendizado-de-Maquina/raw/main/data/guinearice.csv', parse_dates=['date'], index_col='date')
only_season = pd.read_csv('https://github.com/Rogerio-mack/Ciencia-de-Dados-e-Aprendizado-de-Maquina/raw/main/data/sunspotarea.csv', parse_dates=['date'], index_col='date')
trend_and_season = pd.read_csv('https://github.com/Rogerio-mack/Ciencia-de-Dados-e-Aprendizado-de-Maquina/raw/main/data/AirPassengers.csv', parse_dates=['date'], index_col='date')

fig, ax = plt.subplots(1,3, figsize=(20,4))

only_trend.plot(title='Trend Only', legend=False, ax=ax[0])
only_season.plot(title='Season Only', legend=False, ax=ax[1])
trend_and_season.plot(title='Trend e Season Only', legend=False, ax=ax[2])

plt.show()

""" 
Plot == gráfico de linha / hist == gráfico em barras / pie == gráfico pizza
Bins é usado para aumentar a distância entre as barras no hist.
Labels é usado como rotulo no pie
"""