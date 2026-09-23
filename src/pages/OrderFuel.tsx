import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  CalendarDays,
  Clock3,
  Fuel,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

const OrderFuel = () => {
  const [submitted, setSubmitted] = useState(false);
 
const [petrolPrice, setPetrolPrice] = useState(0);
const [dieselPrice, setDieselPrice] = useState(0);

const priceSectionRef = useRef<HTMLElement | null>(null);
const animationFrameRef = useRef<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    fuelType: "",
    litres: "",
    location: "",
    time: "",
    scheduleDate: "",
  });

  useEffect(() => {
  const section = priceSectionRef.current;

  if (!section) return;

  const animatePrices = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setPetrolPrice(0);
    setDieselPrice(0);

    const duration = 3000;
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

    animationFrameRef.current =
      requestAnimationFrame(animate);
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

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-[calc(100vh-80px)] bg-slate-50 py-20">
        <div className="mx-auto flex max-w-3xl items-center justify-center px-6 lg:px-8">
          <div className="w-full rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Order Request Received
            </p>

            <h1 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Thank you, {formData.companyName || formData.fullName}.
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
              Your fuel order request has been received. Our team will review
              the details and contact you to confirm availability, pricing and
              delivery arrangements.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl bg-slate-50 p-6 text-left">
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                <span className="text-sm text-slate-500">Fuel</span>
                <span className="text-sm font-bold text-blue-950">
                  {formData.fuelType}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b border-slate-200 py-4">
                <span className="text-sm text-slate-500">Quantity</span>
                <span className="text-sm font-bold text-blue-950">
                  {formData.litres} litres
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b border-slate-200 py-4">
                <span className="text-sm text-slate-500">Location</span>
                <span className="text-right text-sm font-bold text-blue-950">
                  {formData.location}
                </span>
              </div>

              <div className="flex justify-between gap-4 pt-4">
                <span className="text-sm text-slate-500">Schedule</span>
                <span className="text-right text-sm font-bold text-blue-950">
                  {formData.scheduleDate} at {formData.time}
                </span>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              Order reference will be generated when the backend is connected.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-7 rounded-lg border border-slate-300 px-6 py-3 text-sm font-bold text-blue-950 transition hover:bg-slate-50"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 sm:py-24">
        <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-yellow-400" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Fuel Orders
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tell us what your business needs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Submit your fuel requirements below. Our team will review your
              request and contact you to confirm availability, pricing and
              arrangements.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600" />
      </section>

      {/* Current Prices */}
     <section className="bg-white py-8" ref={priceSectionRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-red-100 bg-red-50 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-red-600">
                  Petrol
                </span>

                <Fuel className="h-5 w-5 text-red-600" />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-blue-950">
              Le {petrolPrice.toFixed(2)}
                <span className="ml-1 text-sm font-semibold text-slate-500">
                  / litre
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Diesel
                </span>

                <Fuel className="h-5 w-5 text-blue-700" />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-blue-950">
                Le {dieselPrice.toFixed(2)}
                <span className="ml-1 text-sm font-semibold text-slate-500">
                  / litre
                </span>
              </p>
            </div>

          </div>

          <p className="mt-3 text-right text-xs text-slate-400">
            Last updated: September 11, 2026
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="rounded-3xl bg-white p-7 shadow-xl sm:p-10">

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Order Details
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-blue-950 sm:text-3xl">
                Submit your fuel requirements
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                All fields are required unless otherwise indicated.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-bold text-blue-950">
                  Contact Information
                </h3>

                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Company Name
                    </label>

                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+232 XX XXX XXX"
                        required
                        className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Fuel Requirements */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-bold text-blue-950">
                  Fuel Requirements
                </h3>

                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="fuelType"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Fuel Type
                    </label>

                    <select
                      id="fuelType"
                      name="fuelType"
                      value={formData.fuelType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    >
                      <option value="">Select fuel type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="litres"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Number of Litres
                    </label>

                    <input
                      id="litres"
                      name="litres"
                      type="number"
                      min="1"
                      value={formData.litres}
                      onChange={handleChange}
                      placeholder="Min: 200 Litres"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                </div>
              </div>

              {/* Schedule */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-bold text-blue-950">
                  Delivery / Schedule Information
                </h3>

                <div className="mt-5 space-y-5">

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Location
                    </label>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter delivery / collection location"
                        required
                        className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="scheduleDate"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Schedule Date
                      </label>

                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                        <input
                          id="scheduleDate"
                          name="scheduleDate"
                          type="date"
                          value={formData.scheduleDate}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Preferred Time
                      </label>

                      <div className="relative">
                        <Clock3 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                        <input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="border-t border-slate-200 pt-8">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-red-700"
                >
                  Submit Fuel Order Request
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  Submitting this form does not constitute a confirmed order.
                  Our team will contact you to confirm availability, pricing
                  and arrangements.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderFuel;