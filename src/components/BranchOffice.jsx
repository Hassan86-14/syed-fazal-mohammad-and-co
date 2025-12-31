import { Award } from "lucide-react";
import { branches } from "../data/branches";

const BranchOffices = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl mb-10 p-6 border border-slate-700 hover:border-amber-500 transition-all md:col-span-2 lg:col-span-3">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Award className="w-6 h-6 text-amber-500 mr-2" />
        Branch Network
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {branches.map((branch) => (
          <div
            key={branch}
            className="bg-slate-700/50 rounded-lg px-4 py-2 text-slate-300 text-sm"
          >
            {branch}
          </div>
        ))}
      </div>
    </div>
  );
};

export { BranchOffices };
