# ✈️ Flight Price Prediction System

<div align="center">

### Predict Airline Ticket Prices Using Machine Learning

A Full-Stack Machine Learning Web Application built with **React**, **FastAPI**, **Scikit-Learn**, and **Tailwind CSS** that predicts flight ticket prices based on airline, route, travel class, duration, and booking date.

![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge\&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge\&logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge\&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?style=for-the-badge\&logo=tailwindcss)
![Scikit Learn](https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-orange?style=for-the-badge\&logo=scikitlearn)

</div>

---

## 📌 Overview

Flight ticket prices fluctuate based on several factors such as airline, travel class, route, duration, number of stops, and days remaining before departure.

This project uses Machine Learning algorithms to analyze historical flight data and accurately predict ticket prices. The application provides a clean and interactive user interface where users can enter flight details and instantly receive a predicted fare.

---

## ✨ Key Features

* 🔥 Machine Learning-Based Flight Fare Prediction
* ⚡ FastAPI REST API Backend
* 🎨 Modern React + Tailwind CSS Frontend
* 📊 Data Analysis & Visualization
* 🧹 Complete Data Preprocessing Pipeline
* 🤖 Multiple Machine Learning Model Evaluation
* 📈 High Accuracy Prediction System
* 📱 Fully Responsive User Interface
* 🚀 Real-Time Prediction Results
* 📚 Interactive API Documentation (Swagger UI)

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* Lucide React Icons

### Backend

* FastAPI
* Pydantic
* Uvicorn

### Machine Learning

* Scikit-Learn
* Random Forest Regressor
* Extra Trees Regressor
* XGBoost Regressor
* Gradient Boosting Regressor
* Linear Regression

### Data Analysis

* Pandas
* NumPy
* Matplotlib
* Seaborn

---

## 📊 Dataset Information

The dataset contains more than **300,000 flight records** collected from various airlines.

### Features Used

| Feature          | Description                     |
| ---------------- | ------------------------------- |
| Airline          | Airline Name                    |
| Source City      | Departure City                  |
| Destination City | Arrival City                    |
| Departure Time   | Flight Departure Time           |
| Arrival Time     | Flight Arrival Time             |
| Stops            | Number of Stops                 |
| Class            | Economy / Business              |
| Duration         | Flight Duration                 |
| Days Left        | Days Remaining Before Departure |

### Target Variable

```text
Price
```

---

## 🔄 Machine Learning Workflow

### 1️⃣ Data Collection

* Flight Price Dataset

### 2️⃣ Data Cleaning

* Removed unnecessary columns
* Verified data consistency
* Checked missing values
* Handled categorical variables

### 3️⃣ Feature Engineering

* Label Encoding
* One-Hot Encoding
* Feature Selection
* Data Transformation

### 4️⃣ Train-Test Split

```python
80% Training Data
20% Testing Data
```

### 5️⃣ Model Training

The following algorithms were evaluated:

* Linear Regression
* Random Forest Regressor
* Extra Trees Regressor
* Gradient Boosting Regressor
* XGBoost Regressor

### 6️⃣ Model Evaluation

Evaluation Metrics:

* MAE (Mean Absolute Error)
* RMSE (Root Mean Squared Error)
* R² Score

---

## 🏆 Model Performance

| Model                       | R² Score |
| --------------------------- | -------- |
| Random Forest Regressor     | 0.9849   |
| Extra Trees Regressor       | 0.9830   |
| XGBoost Regressor           | 0.9768   |
| Gradient Boosting Regressor | 0.9515   |
| Linear Regression           | 0.9099   |

### Selected Model

✅ Random Forest Regressor

Performance:

```text
MAE  : 1077.62
RMSE : 2786.78
R²   : 0.9849
```

---

## 📂 Project Structure

```text
Flight-Price-Prediction/
│
├── Dataset/
│   ├── flights.csv
│   └── flights.db
│
├── notebooks/
│   └── model_training.ipynb
│
├── backend/
│   ├── main.py
│   ├── schema.py
│   ├── utils.py
│   └── flight_price_model.pkl
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FlightForm.jsx
│   │   │   └── ResultCard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/flight-price-prediction.git
```

```bash
cd flight-price-prediction
```

---

### Create Virtual Environment

```bash
python -m venv myenv
```

### Activate Environment

#### Windows

```bash
myenv\Scripts\activate
```

#### Linux / Mac

```bash
source myenv/bin/activate
```

---

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

## 🚀 Run Backend

Navigate to backend folder:

```bash
cd backend
```

Start FastAPI server:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 🎨 Run Frontend

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run React App:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## 🔌 API Endpoint

### Predict Flight Price

```http
POST /predict
```

### Sample Request

```json
{
  "airline": "Vistara",
  "source_city": "Delhi",
  "departure_time": "Morning",
  "stops": 0,
  "arrival_time": "Afternoon",
  "destination_city": "Mumbai",
  "class_": 0,
  "duration": 2.25,
  "days_left": 10
}
```

### Sample Response

```json
{
  "predicted_price": 6543
}
```

---

## 📸 Project Screenshots

### Home Page

Add Screenshot Here

### Prediction Form

Add Screenshot Here

### Prediction Result

Add Screenshot Here

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Machine Learning Model Development
* Feature Engineering
* Data Preprocessing
* Model Evaluation & Comparison
* FastAPI Backend Development
* React Frontend Development
* REST API Integration
* Tailwind CSS Styling
* Full-Stack Application Development
* Deployment Preparation

---

## 🔮 Future Improvements

* Model Hyperparameter Optimization
* Enhanced User Interface
* Additional Dataset Integration
* Docker Containerization
* Cloud Deployment
* Performance Monitoring

---

## 👨‍💻 Author

### Shubham Tidke

Computer Engineering Student

#### Skills

* Python
* Machine Learning
* FastAPI
* React
* Django
* SQL
* MongoDB
* Data Science
* C++

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps support the project and motivates future improvements.
