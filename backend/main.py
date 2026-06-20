from fastapi import FastAPI,HTTPException
from schema import FlightInput
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib





app = FastAPI(title="Flight Price Prediction API",version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("flight_price_model.pkl")


@app.get("/")
def home():
    return {
        "message": "Flight Price Prediction API Running"
    }
    
@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
    
    
@app.post("/predict")
def predict(data: FlightInput):
    input_df = pd.DataFrame([{
        "airline": data.airline,
        "source_city": data.source_city,
        "departure_time": data.departure_time,
        "stops": data.stops,
        "arrival_time": data.arrival_time,
        "destination_city": data.destination_city,
        "class": data.class_,
        "duration": data.duration,
        "days_left": data.days_left
    }])
    
    
    try:
        prediction = model.predict(input_df)

        return {
            "predicted_price": round(float(prediction[0]), 2)
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )