import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    if (location.pathname === "/") return 0;
    if (location.pathname === "/services") return 1;
    if (location.pathname === "/contact") return 2;
    return 0;
  };

  const scrollToPage = (idx) => {
    const routes = ["/", "/services", "/contact"];
    navigate(routes[idx]);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-slate-400">
          <p className="mb-4">
            © 2025 Syed Fazal Muhammad & Co. All rights reserved.
          </p>
          <div className="flex space-x-2 mt-4 sm:mt-0 justify-center">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => scrollToPage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  getCurrentPage() === idx
                    ? "bg-amber-500 w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
