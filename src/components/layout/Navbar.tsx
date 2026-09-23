import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import ContactModal from "../ui/contactModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setIsOpen(false);
    setContactOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                <span className="text-xl font-black text-white">S</span>
              </div>

              <div className="leading-none">
                <span className="block text-xl font-extrabold tracking-tight text-blue-950">
                  SUNOCO
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Fuel & Energy
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-red-600"
                      : "text-slate-700 hover:text-red-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/order"
              className={({ isActive }: { isActive: boolean }) =>
                `rounded-lg px-5 py-3 text-sm font-bold text-white shadow-sm transition ${
                  isActive
                    ? "bg-red-700"
                    : "bg-red-600 hover:bg-red-700"
                }`
              }
            >
              Order Fuel
            </NavLink>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="text-sm font-semibold text-blue-950 transition hover:text-red-600"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-blue-950 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }: { isActive: boolean }) =>
                    `text-sm font-semibold ${
                      isActive
                        ? "text-red-600"
                        : "text-slate-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/order"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-red-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-red-700"
              >
                Order Fuel
              </NavLink>

              <button
                type="button"
                onClick={openContact}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-blue-950 transition hover:border-red-200 hover:text-red-600"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Navbar;