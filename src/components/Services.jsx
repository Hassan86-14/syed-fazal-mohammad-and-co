import { BanksInfo } from "./BanksInfo";
import { CertificationsInfo } from "./CertificationInfo";
import { ClientsInfo } from "./Clients";

const Services = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Our Services & Clients
        </h2>
        <p className="text-slate-300 text-center mb-12">
          Providing excellent logistic services to leading organizations
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Clients */}
          <ClientsInfo />

          {/* Banking Partners */}
          <BanksInfo />
        </div>

        {/* Certifications */}
        <CertificationsInfo />
      </div>
    </div>
  );
};
export { Services };
