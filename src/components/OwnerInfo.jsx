const OwnerInfo = () => {
  return (
    <div className="bg-gradient-to-br mb-10 from-amber-500/10 to-amber-600/10 backdrop-blur rounded-xl p-6 border border-amber-500/30 md:col-span-2 lg:col-span-3">
      <h3 className="text-lg font-semibold text-white mb-3">Company Details</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <p className="text-slate-400 text-sm">Owner</p>
          <p className="text-white font-medium">Syed Fazal Muhammad Agha</p>
        </div>
        <div>
          <p className="text-slate-400 text-sm">NTN Number</p>
          <p className="text-white font-medium">06585177-7</p>
        </div>
        <div>
          <p className="text-slate-400 text-sm">Business Nature</p>
          <p className="text-white font-medium">Logistic Services</p>
        </div>
      </div>
    </div>
  );
};
export { OwnerInfo };
