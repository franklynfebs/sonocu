import {
  Building2,
  Factory,
  GraduationCap,
  HardHat,
  Hospital,
  UtensilsCrossed,
  ArrowRight,
  Fuel,
} from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    title: "Hotels & Restaurants",
    description:
      "Reliable fuel supply for hospitality operations, kitchens, generators and other essential business activities.",
    icon: UtensilsCrossed,
  },
  {
    title: "Hospitals",
    description:
      "Dependable fuel for generators and critical operations where uninterrupted power and service are essential.",
    icon: Hospital,
  },
  {
    title: "Construction",
    description:
      "Fuel for construction machinery, generators, vehicles and equipment supporting projects across different locations.",
    icon: HardHat,
  },
  {
    title: "Schools",
    description:
      "Fuel support for generators, school vehicles and other operational requirements within educational institutions.",
    icon: GraduationCap,
  },
  {
    title: "Factories",
    description:
      "Fuel supply for industrial equipment, generators, transportation and operations that require consistent energy.",
    icon: Factory,
  },
  {
    title: "Businesses & Organisations",
    description:
      "Flexible fuel supply for companies and organisations that depend on petrol and diesel for their daily operations.",
    icon: Building2,
  },
];

const Services = () => {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-24 sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-yellow-400" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Who We Serve
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fuel supply for businesses that keep things moving.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We supply petrol and diesel to businesses, organisations and
              operational environments that depend on reliable access to fuel.
            </p>

            <Link
              to="/order"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Order Fuel
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600" />
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Fuel Solutions
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
                Fuel is part of your operation.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                From powering generators and machinery to supporting
                transportation and daily business activities, fuel plays a
                critical role across many industries.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our focus is simple: provide businesses with access to the
                petrol, diesel and lubricants they need to keep their
                operations running.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Industries We Serve
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Built around real operational needs.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you operate a hotel, hospital, construction site,
              school or factory, we understand that reliable fuel access
              supports your ability to operate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950">
                    <Icon className="h-7 w-7 text-yellow-400" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-blue-950">
                    {sector.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {sector.description}
                  </p>

                  <Link
                    to="/order"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition hover:text-red-700"
                  >
                    Order Fuel
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Supply CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-blue-950 px-7 py-14 sm:px-12 lg:px-16">

            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative max-w-3xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600">
                <Fuel className="h-6 w-6 text-white" />
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Need fuel for your operation?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Submit your fuel requirements and our team will review your
                request and contact you to confirm the details.
              </p>

              <Link
                to="/order"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Order Fuel Now
                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Services;