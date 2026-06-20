from pydantic import BaseModel

class FlightInput(BaseModel):
    airline: str
    source_city: str
    departure_time: str
    stops: int
    arrival_time: str
    destination_city: str
    class_: int
    duration: float
    days_left: int