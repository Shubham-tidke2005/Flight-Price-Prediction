import FlightForm from "./components/FlightForm";

function App() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      
      {/* Simple Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37]">
          Flight Price Prediction
        </h1>

        <p className="mt-4 text-[#C5A880]">
          Predict flight fares using Machine Learning
        </p>
      </div>

      {/* Form + Result */}
      <FlightForm />

    </div>
  );
}

export default App;