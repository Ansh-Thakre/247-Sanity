import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/brand";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Brand Strategy", href: "/services/branding" },
      { label: "Website Design", href: "/services/web-development" },
      { label: "SEO Optimization", href: "/services/seo" },
      { label: "Meta Ads", href: "/services/social-media" },
      { label: "Google Ads", href: "/services/digital-marketing" },
      { label: "Content Marketing", href: "/services/content-marketing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Tools", href: "/tools" },
      { label: "FAQ", href: "/support/faq" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Industries",
    nonClickable: true,
    links: [
      { label: "Contractors" },
      { label: "Ecommerce" },
      { label: "Enterprise" },
      { label: "Startups" },
      { label: "SMEs" },
      { label: "Professional Services" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/247digital",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X",
    href: "https://x.com/247digital",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/247digital",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/247digital",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@247digital",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-on-dark">
      <div className="border-b border-on-dark/10">
        <Container>
          <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-5">
                <Logo
                  variant="dark"
                  layout="icon"
                  size="lg"
                  href={null}
                  className="!p-0"
                />
                <span className="font-heading font-bold text-xl text-on-dark">
                  Digital <span className="text-mid-mint">Pro</span>
                </span>
              </Link>

              <p className="text-sm text-on-dark/50 leading-relaxed max-w-xs mb-6">
                {siteConfig.tagline} {siteConfig.description}
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-on-dark/60 hover:text-on-dark transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-sm text-on-dark/60 hover:text-on-dark transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {siteConfig.phone}
                </a>
                <div className="flex items-start gap-2.5 text-sm text-on-dark/60">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>123 Business Ave, Suite 100, New York, NY 10001</span>
                </div>
              </div>
            </div>

            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="font-heading font-semibold text-sm text-on-dark mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {"href" in link ? (
                        <Link
                          href={link.href}
                          className="text-sm text-on-dark/50 hover:text-on-dark transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span className="text-sm text-on-dark/50">
                          {link.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-dark/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/legal/privacy-policy"
              className="text-xs text-on-dark/40 hover:text-on-dark/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-xs text-on-dark/40 hover:text-on-dark/70 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/cookie-policy"
              className="text-xs text-on-dark/40 hover:text-on-dark/70 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg bg-on-dark/5 flex items-center justify-center text-on-dark/40 hover:bg-on-dark/10 hover:text-on-dark transition-all"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="pb-5 text-center">
          <a
            href="https://www.swarajyadigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-medium text-on-dark/40 hover:text-on-dark/70 transition-colors"
          >
            @Developed by Swarajya Digital
          </a>
        </div>
      </Container>
    </footer>
  );
}
