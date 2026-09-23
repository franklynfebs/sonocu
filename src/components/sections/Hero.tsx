import { ArrowRight, Fuel } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-blue-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545459720-aac8509ebf94?auto=format&fit=crop&w=2000&q=85"
          alt="Fuel station"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-950/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              Fuel Supply & Distribution
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Reliable Fuel.
            <span className="block text-red-500">
              Delivered When
            </span>
            Your Business Needs It.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Dependable petrol and diesel supply for businesses,
            organisations and operations that cannot afford interruptions.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/order"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-red-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Order Fuel
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-blue-950"
            >
              <Fuel className="h-5 w-5" />
              View Products
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
            <div>
              <p className="text-sm font-bold text-white">
                Petrol & Diesel
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Quality fuel products
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Business Supply
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Built for organisations
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Reliable Service
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Focused on your operations
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600" />
    </section>
  );
};

export default Hero;