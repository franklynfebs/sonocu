import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* Decorative Elements */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-blue-950">
          <div className="relative px-7 py-14 sm:px-12 sm:py-16 lg:px-16">

            {/* Accent */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-red-600/10" />

            <div className="relative max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-yellow-400" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Get Started
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Need fuel for your business?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Tell us what you need, where you need it and when you need it.
                Our team will review your request and get back to you.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/order"
                  className="group inline-flex items-center justify-center gap-3 rounded-lg bg-red-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Order Fuel Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+232000000000"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-blue-950"
                >
                  <Phone className="h-5 w-5" />
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* Bottom Brand Strip */}
            <div className="relative mt-12 border-t border-white/10 pt-6">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <span>Petrol</span>
                <span className="h-1 w-1 rounded-full bg-red-500" />
                <span>Diesel</span>
                <span className="h-1 w-1 rounded-full bg-yellow-400" />
                <span>Lubricants</span>
                <span className="h-1 w-1 rounded-full bg-blue-400" />
                <span>Business Supply</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;