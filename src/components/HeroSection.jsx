import { Calendar, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
        Excellence in
        <span className="text-amber-500"> Logistic Services</span>
      </h2>
      <p className="text-xl text-slate-300 mb-8">
        Trusted Government Carriage Contractor Since 1986
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <div className="bg-slate-800/50 backdrop-blur px-6 py-3 rounded-lg border border-slate-700">
          <Calendar className="w-5 h-5 text-amber-500 inline mr-2" />
          <span className="text-white font-semibold">Est. 1986</span>
        </div>
        <div className="bg-slate-800/50 backdrop-blur px-6 py-3 rounded-lg border border-slate-700">
          <Users className="w-5 h-5 text-amber-500 inline mr-2" />
          <span className="text-white font-semibold">Trusted Partner</span>
        </div>
      </div>
    </div>
  );
};
export { HeroSection };
