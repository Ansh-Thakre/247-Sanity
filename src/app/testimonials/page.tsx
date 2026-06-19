import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { BrandedPageHero } from "@/components/layout/BrandedPageHero";
import { BrandCTA } from "@/components/ui/BrandCTA";
import { getTestimonials } from "@/sanity/fetch";

export const revalidate = 60;

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <main>
      <BrandedPageHero
        overline="Testimonials"
        title={
          <>
            Trusted by <span className="text-primary">business owners</span>
          </>
        }
        description="Partners who value reliability, transparency, and ROI-focused marketing systems."
      />
      <TestimonialsSection testimonials={testimonials} />
      <BrandCTA />
    </main>
  );
}
