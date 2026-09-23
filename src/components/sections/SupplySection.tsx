import {
  Clock3,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Dependable Supply",
    description:
      "Fuel supply structured around the needs of businesses and organisations.",
  },
  {
    icon: Clock3,
    title: "When You Need It",
    description:
      "Plan your fuel requirements around your operational schedule and demand.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "A professional supply process focused on consistency, accountability and service.",
  },
  {
    icon: Warehouse,
    title: "Built for Operations",
    description:
      "Solutions designed for organisations that depend on fuel to keep working.",
  },
];

const SupplySection = () => {
  return (
    <section className="bg-blue-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-yellow-400" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Business Fuel Supply
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your business needs fuel.
              <span className="block text-red-500">
                We help keep it moving.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Fuel interruptions can affect transport, production, power
              generation and daily operations. Our supply approach is built
              around helping businesses access the fuel they need with
              greater reliability.
            </p>

            <div className="mt-8 h-1 w-20 bg-yellow-400" />
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupplySection;