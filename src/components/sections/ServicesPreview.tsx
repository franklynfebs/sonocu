import {
  Building2,
  Factory,
  GraduationCap,
  HardHat,
  Hospital,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    name: "Hotels & Restaurants",
    description:
      "Reliable fuel supply to support hospitality operations, kitchens and backup power.",
    icon: UtensilsCrossed,
  },
  {
    name: "Hospitals",
    description:
      "Dependable fuel for generators and critical operations where interruptions are not an option.",
    icon: Hospital,
  },
  {
    name: "Construction",
    description:
      "Fuel supply for machinery, equipment, generators and construction projects.",
    icon: HardHat,
  },
  {
    name: "Schools",
    description:
      "Fuel support for school transport, generators and day-to-day institutional operations.",
    icon: GraduationCap,
  },
  {
    name: "Factories",
    description:
      "Fuel solutions for industrial equipment, generators and continuous production operations.",
    icon: Factory,
  },
  {
    name: "Businesses & Organisations",
    description:
      "Flexible fuel supply for organisations that rely on consistent access to petrol and diesel.",
    icon: Building2,
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Who We Serve
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Fuel supply built around your industry.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Different businesses have different fuel requirements. We serve
              organisations that depend on reliable fuel to keep their
              operations running.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-red-600 transition hover:text-red-700"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Sectors */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <div
                key={sector.name}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950">
                  <Icon className="h-6 w-6 text-yellow-400" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-blue-950">
                  {sector.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {sector.description}
                </p>

                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition group-hover:text-red-600"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;