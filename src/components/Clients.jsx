import { Building2 } from "lucide-react";
import { clients } from "../data/clients";

const ClientsInfo = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
      <h3 className="text-2xl font-bold text-amber-500 mb-6 flex items-center">
        <Building2 className="w-7 h-7 mr-3" />
        Our Clients
      </h3>
      <div className="space-y-4">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all"
          >
            <div className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
              {idx + 1}
            </div>
            <p className="text-slate-200">{client}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export {ClientsInfo}
