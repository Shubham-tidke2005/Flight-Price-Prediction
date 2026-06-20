import { IndianRupee, TrendingUp, Plane } from "lucide-react";

export default function ResultCard({ price }) {
  return (
    <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-3xl p-8 flex flex-col justify-center">
            <div className="text-center">
              <p className="text-[#C5A880] tracking-[0.3em] uppercase mb-4">
                Predicted Fare
              </p>

              {price ? (
                <>
                  <h2 className="text-6xl font-bold text-[#D4AF37] flex justify-center items-center gap-2">
                    <IndianRupee size={48} />
                    {price.toLocaleString()}
                  </h2>

                  <p className="text-white/70 mt-6">
                    Estimated fare based on airline,
                    route, timing, duration, and
                    booking window.
                  </p>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 mx-auto rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <Plane
                      className="text-[#D4AF37]"
                      size={42}
                    />
                  </div>

                  <p className="text-white/60">
                    Fill the form and generate your
                    flight fare prediction.
                  </p>
                </>
              )}
            </div>
          </div> 
  );
}