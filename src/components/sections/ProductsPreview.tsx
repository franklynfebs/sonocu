import { ArrowRight, Droplets, Fuel, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Petrol",
    description:
      "Quality petrol for vehicles, generators and business operations that depend on reliable fuel supply.",
    icon: Fuel,
    accent: "bg-red-600",
  },
  {
    name: "Diesel",
    description:
      "Dependable diesel supply for commercial vehicles, machinery, generators and heavy-duty operations.",
    icon: Droplets,
    accent: "bg-blue-700",
  },
  {
    name: "Lubricants",
    description:
      "Lubrication products designed to support vehicle, equipment and machinery performance.",
    icon: Settings2,
    accent: "bg-yellow-400",
  },
];

const ProductsPreview = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-red-600" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              What We Supply
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Fuel products for everyday operations.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From everyday vehicle use to commercial and industrial operations,
            we supply essential fuel products to keep businesses moving.
          </p>
        </div>

        {/* Products */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.name}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${product.accent}`}
                >
                  <Icon
                    className={`h-7 w-7 ${
                      product.name === "Lubricants"
                        ? "text-blue-950"
                        : "text-white"
                    }`}
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold text-blue-950">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>

                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition hover:text-red-700"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Need fuel for your business, organisation or project?
            Tell us what you need and our team will help with your order.
          </p>

          <Link
            to="/products"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-blue-950 px-5 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-950 hover:text-white"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductsPreview;