import {
  Droplets,
  Fuel,
  Gauge,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Petrol",
    label: "Automotive Fuel",
    description:
      "Quality petrol for vehicles, generators and business operations that depend on reliable fuel performance.",
    icon: Fuel,
    iconStyle: "bg-red-600",
    points: [
      "Suitable for petrol-powered vehicles",
      "Available for business fuel requirements",
      "Ideal for transport and general operations",
    ],
  },
  {
    name: "Diesel",
    label: "Commercial & Heavy-Duty Fuel",
    description:
      "Dependable diesel supply for commercial vehicles, generators, machinery and heavy-duty operations.",
    icon: Gauge,
    iconStyle: "bg-blue-700",
    points: [
      "Suitable for diesel-powered vehicles",
      "Supports generators and machinery",
      "Designed for commercial operations",
    ],
  },
  {
    name: "Lubricants",
    label: "Vehicle & Equipment Care",
    description:
      "Lubrication products that help support the performance and maintenance of vehicles, machinery and equipment.",
    icon: Droplets,
    iconStyle: "bg-yellow-400",
    points: [
      "Supports engine and equipment maintenance",
      "Suitable for vehicles and machinery",
      "Helps maintain operational performance",
    ],
  },
];

const Products = () => {
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
                Our Products
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fuel products for the way you operate.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              From everyday transportation to generators, machinery and
              commercial operations, we supply essential fuel products to keep
              businesses moving.
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

      {/* Products */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Fuel & Energy Products
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Essential products for your operation.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Choose the products that match your vehicles, equipment and
              operational requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${product.iconStyle}`}
                  >
                    <Icon
                      className={`h-7 w-7 ${
                        product.name === "Lubricants"
                          ? "text-blue-950"
                          : "text-white"
                      }`}
                    />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-wider text-red-600">
                    {product.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-blue-950">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Suitable For
                    </p>

                    <ul className="mt-4 space-y-3">
                      {product.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/order"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    Order This Product
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Price / Availability Notice */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-red-600" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Before You Order
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
                Check current prices and submit your requirements.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Fuel prices and availability can change. Review the current
                prices on our order page and provide your required quantity,
                location and schedule.
              </p>

              <Link
                to="/order"
                className="mt-7 inline-flex items-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Check Prices & Order
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="rounded-2xl bg-blue-950 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Products Available
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="font-semibold text-white">Petrol</span>
                  <span className="text-sm text-slate-400">
                    Available
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="font-semibold text-white">Diesel</span>
                  <span className="text-sm text-slate-400">
                    Available
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">
                    Lubricants
                  </span>
                  <span className="text-sm text-slate-400">
                    Available
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Ready to order fuel?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Tell us what you need and when you need it. Our team will review
            your request and confirm the details.
          </p>

          <Link
            to="/order"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-red-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Order Lubricants
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;