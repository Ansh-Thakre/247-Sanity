import Link from "next/link";
import { BrandedPageHero } from "@/components/layout/BrandedPageHero";
import { BrandCTA } from "@/components/ui/BrandCTA";
import { Container } from "@/components/layout/Container";

const resources = [
  { label: "Blog", href: "/resources/blog", description: "Growth, SEO, AEO, and paid media insights." },
  { label: "Guides", href: "/resources/guides", description: "Step-by-step playbooks for entrepreneurs." },
  { label: "Whitepapers", href: "/resources/whitepapers", description: "In-depth strategy and industry research." },
];

export default function ResourcesPage() {
  return (
    <main>
      <BrandedPageHero
        overline="Resources"
        title={
          <>
            Insights for <span className="text-primary">measurable growth</span>
          </>
        }
        description="Practical guides and articles — outcome-focused, jargon-free, and built for business owners."
      />
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border bg-white p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h2 className="font-heading font-semibold text-wordmark text-lg mb-2">
                  {item.label}
                </h2>
                <p className="text-sm text-slate leading-relaxed">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <BrandCTA />
    </main>
  );
}
