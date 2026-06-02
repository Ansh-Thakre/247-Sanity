"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { brandServiceOptions, brandVoice } from "@/config/brand";
import { BrandCTA } from "@/components/ui/BrandCTA";
import { Button } from "@/components/ui/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@247digital.com",
    href: "mailto:hello@247digital.com",
    color: "var(--primary)",
    bg: "var(--pale-blue)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    color: "var(--deep-mint)",
    bg: "var(--brand-mint)",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "New York, NY, USA",
    href: "#",
    color: "var(--wordmark)",
    bg: "var(--brand-mint)",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 9AM – 6PM EST",
    href: "#",
    color: "var(--primary-light)",
    bg: "var(--pale-blue)",
  },
];

const budgetRanges = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K+",
  "Not sure yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative pt-20 pb-14 md:pt-28 md:pb-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,90,152,0.06),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-overline mb-4">Get in Touch</p>
            <h1
              className="font-heading font-bold text-wordmark leading-[1.12] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}
            >
              Let&apos;s replace guesswork with{" "}
              <span className="text-primary">measurable growth</span>
            </h1>
            <p className="mt-5 text-lead text-slate max-w-xl mx-auto">
              {brandVoice.ctaConsultation}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="relative -mt-2 pb-12 md:pb-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-ink leading-snug">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form — takes 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 md:p-10 shadow-[0_2px_20px_rgba(30,90,152,0.06)]">
                <h2 className="font-heading font-bold text-ink text-xl sm:text-2xl mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate mb-8">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-mint/40 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-deep-mint" />
                    </div>
                    <h3 className="font-heading font-bold text-ink text-xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-slate max-w-sm">
                      Thank you for reaching out. Our team will review your
                      message and get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
                      }}
                      className="mt-6 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-ink mb-1.5">
                          Full Name <span className="text-deep-mint">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-disabled outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/10 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-ink mb-1.5">
                          Email Address <span className="text-deep-mint">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-disabled outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-ink mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-disabled outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/10 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-ink mb-1.5">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-disabled outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-ink mb-1.5">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/10 transition-all appearance-none"
                        >
                          <option value="">Select a service</option>
                          {brandServiceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-xs font-semibold text-ink mb-1.5">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/10 transition-all appearance-none"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-ink mb-1.5">
                        Your Message <span className="text-deep-mint">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-disabled outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/10 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar — takes 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Actions */}
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-[0_2px_20px_rgba(30,90,152,0.06)]">
                <h3 className="font-heading font-bold text-ink text-lg mb-5">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/contact#consultation"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-mint/40 hover:bg-brand-mint border border-transparent hover:border-deep-mint/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-deep-mint flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{brandVoice.ctaPrimary}</p>
                      <p className="text-xs text-slate">30-min strategy session</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-deep-mint ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <Link
                    href="https://wa.me/1234567890"
                    target="_blank"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-pale-blue hover:bg-pale-blue border border-transparent hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">WhatsApp Chat</p>
                      <p className="text-xs text-slate">Quick response guaranteed</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <a
                    href="mailto:hello@247digital.com"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-mint hover:bg-brand-mint/80 border border-transparent hover:border-mid-mint/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-mid-mint flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Email Directly</p>
                      <p className="text-xs text-slate">hello@247digital.com</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-mid-mint ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Why Work With Us */}
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-[0_2px_20px_rgba(30,90,152,0.06)]">
                <h3 className="font-heading font-bold text-ink text-lg mb-5">
                  Why Work With Us
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free initial consultation & strategy call",
                    "Dedicated project manager assigned",
                    "Transparent pricing, no hidden fees",
                    "24/7 support during active projects",
                    "100+ successful projects delivered",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-deep-mint mt-0.5 shrink-0" />
                      <span className="text-sm text-slate leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-[0_2px_20px_rgba(30,90,152,0.06)]">
                <h3 className="font-heading font-bold text-ink text-lg mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/company/247digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-xl bg-pale-blue flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://twitter.com/247digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-11 h-11 rounded-xl bg-pale-blue flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a
                    href="https://instagram.com/247digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-xl bg-pale-blue flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandCTA />
    </main>
  );
}
