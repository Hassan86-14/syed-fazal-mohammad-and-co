import { Mail, Phone } from "lucide-react";
import { phoneNumbers } from "../data/phone_numbers";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-slate-300 mb-8">
        We're here to help with all your logistic needs. Reach out to us through
        any of our offices.
      </p>

      <div className="space-y-6">
        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
          <Phone className="w-6 h-6 text-amber-500 mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Phone Numbers
          </h3>
          <div className="space-y-1 text-slate-300">
            {phoneNumbers.map((number) => {
              return <p key={number}>{number}</p>;
            })}
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
          <Mail className="w-6 h-6 text-amber-500 mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <a
            href="mailto:syedfazalmuhammad@yahoo.com"
            className="text-amber-500 hover:text-amber-400 transition-colors"
          >
            syedfazalmuhammad@yahoo.com
          </a>
        </div>
      </div>
    </div>
  );
};
export { ContactInfo };
