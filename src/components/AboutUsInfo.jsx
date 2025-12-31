import { aboutUsInfo } from "../data/about_us";

const AboutUsInfo = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
      <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
      <div className="space-y-4 text-slate-300">
        {aboutUsInfo.map((info) => {
          return <p>{info}</p>;
        })}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-6">
          <h4 className="text-lg font-semibold text-amber-500 mb-2">
            Our Mission
          </h4>
          <p className="text-slate-300">
            To provide exceptional logistic services that exceed client
            expectations through reliability, professionalism, and commitment to
            excellence.
          </p>
        </div>
      </div>
    </div>
  );
};
export { AboutUsInfo };
