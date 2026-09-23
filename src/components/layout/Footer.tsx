import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600">
                <span className="text-xl font-black text-white">S</span>
              </div>

              <div className="leading-none">
                <span className="block text-xl font-extrabold tracking-tight">
                  SUNOCO
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-300">
                  Fuel & Energy
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-300">
              Reliable fuel supply for businesses, organisations and
              customers across Sierra Leone.
            </p>

            <Link
              to="/order"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold transition hover:bg-red-700"
            >
              Order Fuel
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/order"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Order Fuel
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Products
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-sm text-slate-300">Petrol</li>
              <li className="text-sm text-slate-300">Diesel</li>
              <li className="text-sm text-slate-300">Lubricants</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Contact
            </h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Freetown, Sierra Leone
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    +232 XX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    info@sunoco.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Sunoco Fuel & Energy. All rights
            reserved.
          </p>

          <p>
            Reliable Fuel. Dependable Supply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;