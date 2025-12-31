import { Building2, MapPin } from "lucide-react";

const OfficeInfo = ({ name, address, phone, isHeadOffice, cellPhones }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-amber-500 transition-all">
      <div className="flex items-start space-x-3">
        {isHeadOffice ? (
          <Building2 className="w-6 h-6 text-amber-500 mt-1" />
        ) : (
          <MapPin className="w-6 h-6 text-amber-500 mt-1" />
        )}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
          <p className="text-slate-300 text-sm">{address}</p>
          <p className="text-amber-500 text-sm mt-2">☎ {phone}</p>
          {cellPhones &&
            cellPhones.length > 0 &&
            cellPhones.map((cell, index) => (
              <p key={index} className="text-amber-500 text-sm mt-1">
                {index == 0 ? `📞 ${cell}` : cell}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
export { OfficeInfo };
