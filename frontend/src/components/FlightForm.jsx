import { useState } from "react";
import axios from "axios";
import {
  Plane,
  MapPin,
  Clock3,
  CalendarDays,
  Loader2,
  IndianRupee,
} from "lucide-react";
import ResultCard from "./ResultCard";

export default function FlightForm() {
  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState(null);

  const [formData, setFormData] = useState({
    airline: "",
    source_city: "",
    departure_time: "",
    stops: 0,
    arrival_time: "",
    destination_city: "",
    class_: 0,
    duration: "",
    days_left: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );

      setPrice(response.data.predicted_price);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  const airlines = [
    "AirAsia",
    "Air_India",
    "GO_FIRST",
    "Indigo",
    "SpiceJet",
    "Vistara",
  ];

  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Kolkata",
    "Hyderabad",
    "Chennai",
  ];

  const timings = [
    "Early_Morning",
    "Morning",
    "Afternoon",
    "Evening",
    "Night",
    "Late_Night",
  ];

  return (
    <section className="relative min-h-screen bg-[#1C1C1C] overflow-hidden py-20 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="tracking-[0.4em] uppercase text-[#C5A880] text-sm mb-4">
            Premium Flight Intelligence
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-serif leading-tight">
            Predict Your
            <span className="block text-[#D4AF37]">
              Flight Fare Instantly
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#C5A880] mt-6 text-lg">
            Powered by Machine Learning and trained on over
            300,000 real-world flight records.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form Card */}
          <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-white text-2xl mb-8 font-serif">
              Flight Details
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Airline */}
              <div>
                <label className="block text-[#C5A880] mb-2">
                  Airline
                </label>

                <select
                  name="airline"
                  value={formData.airline}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3 focus:border-[#D4AF37] outline-none"
                >
                  <option value="">
                    Select Airline
                  </option>

                  {airlines.map((airline) => (
                    <option
                      key={airline}
                      value={airline}
                    >
                      {airline}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cities */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C5A880] mb-2">
                    Source City
                  </label>

                  <select
                    name="source_city"
                    value={formData.source_city}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  >
                    <option value="">
                      Select
                    </option>

                    {cities.map((city) => (
                      <option
                        key={city}
                        value={city}
                      >
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#C5A880] mb-2">
                    Destination City
                  </label>

                  <select
                    name="destination_city"
                    value={formData.destination_city}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  >
                    <option value="">
                      Select
                    </option>

                    {cities.map((city) => (
                      <option
                        key={city}
                        value={city}
                      >
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timings */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C5A880] mb-2">
                    Departure Time
                  </label>

                  <select
                    name="departure_time"
                    value={formData.departure_time}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  >
                    <option value="">
                      Select
                    </option>

                    {timings.map((time) => (
                      <option
                        key={time}
                        value={time}
                      >
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#C5A880] mb-2">
                    Arrival Time
                  </label>

                  <select
                    name="arrival_time"
                    value={formData.arrival_time}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  >
                    <option value="">
                      Select
                    </option>

                    {timings.map((time) => (
                      <option
                        key={time}
                        value={time}
                      >
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stops & Class */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C5A880] mb-2">
                    Stops
                  </label>

                  <select
                    name="stops"
                    value={formData.stops}
                    onChange={handleChange}
                    className="w-full bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  >
                    <option value={0}>
                      Non Stop
                    </option>
                    <option value={1}>
                      One Stop
                    </option>
                    <option value={2}>
                      Two+ Stops
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#C5A880] mb-2">
                    Class
                  </label>

                  <select
                    name="class_"
                    value={formData.class_}
                    onChange={handleChange}
                    className="w-full bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  >
                    <option value={0}>
                      Economy
                    </option>
                    <option value={1}>
                      Business
                    </option>
                  </select>
                </div>
              </div>

              {/* Duration & Days Left */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="number"
                  step="0.01"
                  name="duration"
                  placeholder="Duration (Hours)"
                  value={formData.duration}
                  onChange={handleChange}
                  className="bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  required
                />

                <input
                  type="number"
                  name="days_left"
                  placeholder="Days Left"
                  value={formData.days_left}
                  onChange={handleChange}
                  className="bg-[#1C1C1C] border border-white/10 text-white rounded-xl p-3"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative overflow-hidden w-full py-4 bg-[#D4AF37] text-black font-semibold rounded-xl transition-all duration-500 hover:text-white"
              >
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Predicting...
                    </>
                  ) : (
                    <>
                      <Plane size={18} />
                      Predict Flight Price
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Result Card */}
          <ResultCard price={price} />
           
        </div>
      </div>
    </section>
  );
}