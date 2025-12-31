import { Award } from "lucide-react";
import { banks } from "../data/banks";

const BanksInfo = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
      <h3 className="text-2xl font-bold text-amber-500 mb-6 flex items-center">
        <Award className="w-7 h-7 mr-3" />
        Banking Partners
      </h3>
      <div className="space-y-4">
        {banks.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all"
          >
            <p className="text-white font-semibold">{item.bank}</p>
            <p className="text-slate-400 text-sm mt-1">{item.branch}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export { BanksInfo };
