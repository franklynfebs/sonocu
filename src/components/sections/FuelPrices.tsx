import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Fuel } from "lucide-react";
import { Link } from "react-router-dom";

const FuelPrices = () => {
  const [petrolPrice, setPetrolPrice] = useState(0);
  const [dieselPrice, setDieselPrice] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const animatePrices = () => {
      // Cancel any previous animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Start from zero
      setPetrolPrice(0);
      setDieselPrice(0);

      const duration = 1800;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setPetrolPrice(40 * easedProgress);
        setDieselPrice(45 * easedProgress);

        if (progress < 1) {
          animationFrameRef.current =
            requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animatePrices();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Current Fuel Prices
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Know the price before you order.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Current retail prices for our core fuel products. Prices may
              change based on market conditions and official pricing updates.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            Last updated:{" "}
            <span className="font-semibold text-slate-700">
              September 11, 2026
            </span>
          </div>
        </div>

        {/* Price Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {/* Petrol */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:border-red-200 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600">
                <Fuel className="h-6 w-6 text-white" />
              </div>

              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
                Petrol
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Price per litre
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-blue-950 tabular-nums">
                  Le {petrolPrice.toFixed(2)}
                </span>

                <span className="text-sm font-semibold text-slate-500">
                  / litre
                </span>
              </div>
            </div>
          </div>

          {/* Diesel */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:border-blue-200 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700">
                <Fuel className="h-6 w-6 text-white" />
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                Diesel
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Price per litre
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-blue-950 tabular-nums">
                  Le {dieselPrice.toFixed(2)}
                </span>

                <span className="text-sm font-semibold text-slate-500">
                  / litre
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-blue-950 px-7 py-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-white">
              Ready to place your fuel order?
            </h3>

            <p className="mt-1 text-sm text-slate-300">
              Submit your requirements and our team will confirm availability.
            </p>
          </div>

          <Link
            to="/order"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            Order Fuel
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FuelPrices;