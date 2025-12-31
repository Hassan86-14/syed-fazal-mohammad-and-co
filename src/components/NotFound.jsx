import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-amber-500 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-slate-300 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate('/')}
            className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-all"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate('/services')}
            className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 border border-slate-700 transition-all"
          >
            View Services
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 border border-slate-700 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export { NotFound };