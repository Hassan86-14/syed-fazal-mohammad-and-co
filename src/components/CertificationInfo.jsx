import { certifications } from "../data/certifications";

const CertificationsInfo = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur rounded-xl p-8 border border-amber-500/30">
      <h3 className="text-2xl font-bold text-white mb-4">
        Certifications & Registrations
      </h3>
      <div className="flex flex-wrap gap-3">
        {certifications.map((cert) => (
          <span
            key={cert}
            className="bg-slate-800 px-4 py-2 rounded-full text-slate-200 text-sm border border-slate-700"
          >
            {cert}
          </span>
        ))}
      </div>
    </div>
  );
};
export { CertificationsInfo };
