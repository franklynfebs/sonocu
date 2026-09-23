import { Mail, MapPin, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top Accent */}
        <div className="h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-blue-700" />

        <div className="p-7 sm:p-9">
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-blue-950"
            aria-label="Close contact modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="pr-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Contact Us
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950">
              Let&apos;s talk fuel supply.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              For fuel orders, business enquiries and partnerships, contact
              our team directly.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-8 space-y-4">

            {/* Phone */}
            <a
              href="tel:+232000000000"
              className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-red-200 hover:bg-red-50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600">
                <Phone className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone
                </p>
                <p className="mt-1 font-semibold text-blue-950 group-hover:text-red-600">
                  +232 00 XXX XXX
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@sunoco.com"
              className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-700">
                <Mail className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </p>
                <p className="mt-1 font-semibold text-blue-950 group-hover:text-blue-700">
                  info@sunoco.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400">
                <MapPin className="h-5 w-5 text-blue-950" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location
                </p>
                <p className="mt-1 font-semibold text-blue-950">
                  Freetown, Sierra Leone
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 rounded-xl bg-blue-950 p-5">
            <p className="text-sm font-semibold text-white">
              Looking to place a fuel order?
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Submit your requirements online and our team will contact you
              to confirm the details.
            </p>

            <Link
              to="/order"
              onClick={onClose}
              className="mt-4 block rounded-lg bg-red-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-red-700"
            >
              Order Fuel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;