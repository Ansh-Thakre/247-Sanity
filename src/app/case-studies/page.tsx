import { BrandedPageHero } from "@/components/layout/BrandedPageHero";
import { BrandCTA } from "@/components/ui/BrandCTA";
import { Button } from "@/components/ui/Button";
import { brandVoice } from "@/config/brand";

export default function CaseStudiesPage() {
  return (
    <main>
      <BrandedPageHero
        overline="Case Studies"
        title={
          <>
            Real results, <span className="text-primary">real data</span>
          </>
        }
        description="See how we help entrepreneurs and small businesses drive qualified leads, conversions, and revenue."
      />
      <section className="pb-12 text-center">
        <Button href="/portfolio" variant="primary" size="lg">
          {brandVoice.ctaCaseStudies}
        </Button>
      </section>
      <BrandCTA />
    </main>
  );
}
