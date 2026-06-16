"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  issue: string;
  location: string;
  honeypot: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    issue: "",
    location: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-()]{7,}$/.test(formData.phone.trim())) {
      e.phone = "Enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      e.email = "Enter a valid email address.";
    }
    if (!formData.issue.trim()) e.issue = "Please describe the issue.";
    if (!formData.location.trim()) e.location = "Location or zip code is required.";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        vehicle: {
          year: formData.vehicleYear.trim(),
          make: formData.vehicleMake.trim(),
          model: formData.vehicleModel.trim(),
        },
        issue: formData.issue.trim(),
        location: formData.location.trim(),
        source: "roadgun-mobile-repair-website",
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        vehicleYear: "",
        vehicleMake: "",
        vehicleModel: "",
        issue: "",
        location: "",
        honeypot: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="bg-dark-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-lg rounded-2xl border border-green-500/30 bg-dark-900 p-8 text-center sm:p-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white font-[family-name:var(--font-display)]">
              Request Received
            </h3>
            <p className="mt-3 text-steel-400">
              Thanks! We will review your request and get back to you shortly.
              For faster service, give us a call.
            </p>
            <a
              href="tel:+19103589027"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Call (910) 358-9027
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-dark-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Get in Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl lg:text-5xl">
            Request Service
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel-400">
            Tell us about your vehicle and the problem. We will get back to you
            with availability and a quote.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot */}
              <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => handleChange("honeypot", e.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-steel-300">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-steel-300">
                    Phone <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="(910) 555-1234"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-steel-300">
                  Email <span className="text-orange-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="vehicleYear" className="block text-sm font-medium text-steel-300">
                    Year
                  </label>
                  <input
                    id="vehicleYear"
                    type="text"
                    value={formData.vehicleYear}
                    onChange={(e) => handleChange("vehicleYear", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="2020"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-steel-300">
                    Make
                  </label>
                  <input
                    id="vehicleMake"
                    type="text"
                    value={formData.vehicleMake}
                    onChange={(e) => handleChange("vehicleMake", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="Ford"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-steel-300">
                    Model
                  </label>
                  <input
                    id="vehicleModel"
                    type="text"
                    value={formData.vehicleModel}
                    onChange={(e) => handleChange("vehicleModel", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="F-150"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-steel-300">
                  Describe the Issue <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="issue"
                  rows={4}
                  value={formData.issue}
                  onChange={(e) => handleChange("issue", e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="What is going on with your vehicle?"
                />
                {errors.issue && <p className="mt-1 text-xs text-red-400">{errors.issue}</p>}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-steel-300">
                  Your Location or Zip Code <span className="text-orange-500">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-dark-600 bg-dark-900 px-4 py-3 text-white placeholder-steel-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Address or zip code"
                />
                {errors.location && <p className="mt-1 text-xs text-red-400">{errors.location}</p>}
              </div>

              {status === "error" && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  Something went wrong. Please try again or call us directly at{" "}
                  <a href="tel:+19103589027" className="underline">(910) 358-9027</a>.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-orange-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Request Service"}
              </button>
            </form>
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="rounded-xl border border-dark-600 bg-dark-900 p-6">
              <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-display)]">
                Contact Info
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="tel:+19103589027"
                  className="flex items-center gap-3 text-steel-300 transition-colors hover:text-orange-400"
                >
                  <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (910) 358-9027
                </a>
                <div className="flex items-start gap-3 text-steel-300">
                  <svg className="mt-0.5 h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Hours</p>
                    <p className="text-sm">Monday - Saturday</p>
                    <p className="text-sm">6:00 AM - 6:00 PM</p>
                    {/* TODO: Confirm hours with client. Early start (6 AM) is a key selling point. */}
                  </div>
                </div>
                <div className="flex items-start gap-3 text-steel-300">
                  <svg className="mt-0.5 h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Service Area</p>
                    <p className="text-sm">Jacksonville, NC region</p>
                    <p className="text-sm">Onslow, Craven, Jones County &amp; more</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-6">
              <p className="text-sm font-medium text-orange-400">Need help now?</p>
              <p className="mt-1 text-sm text-steel-400">
                For breakdowns or urgent repairs, call directly for fastest
                response.
              </p>
              <a
                href="tel:+19103589027"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400 transition-all hover:bg-orange-500/20"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
