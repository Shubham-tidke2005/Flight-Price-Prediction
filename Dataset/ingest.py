from sqlalchemy import create_engine                
import pandas as pd       

engine=create_engine('sqlite:///flights.db')
df=pd.read_csv('clean_dataset.csv')

df.to_sql('flights',con=engine,if_exists='replace',index=False)

    