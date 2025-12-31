import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    if (location.pathname === "/") return 0;
    if (location.pathname === "/services") return 1;
    if (location.pathname === "/contact") return 2;
    return 0;
  };

  const currentPage = getCurrentPage();

  const handleNavClick = (idx) => {
    const routes = ["/", "/services", "/contact"];
    navigate(routes[idx]);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:mb-0 md:mb-0 mb-2">
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Company Logo"
              className="lg:w-18 lg:h-18 md:w-18 md:h-18 w-12 h-12 object-contain mt-2"
            />
            <div>
              <h1 className="lg:text-lg sm:text-xl text-[13px] font-bold text-white">
                Syed Fazal Muhammad & Co.
              </h1>
              <p className="lg:text-xs md:text-xs text-[13px] text-amber-500">Govt Carriage Contractor</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-2 sm:space-x-4">
            {["Home", "Services", "Contact"].map((item, idx) => (
              <button
                key={item}
                onClick={() => handleNavClick(idx)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === idx
                    ? "bg-amber-500 text-slate-900"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-2">
              {["Home", "Services", "Contact"].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(idx)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                    currentPage === idx
                      ? "bg-amber-500 text-slate-900"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
