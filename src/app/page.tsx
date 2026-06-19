import {
  HeroSection,
  TrustMetricsSection,
  ServicesOverview,
  WhyChooseUs,
  ProductEcosystem,
  WorkflowProcess,
  PortfolioShowcase,
  TestimonialsSection,
  BlogPreview,
  CTASection,
  IntroAnimation,
} from "@/components/sections/home";
import { Container } from "@/components/layout/Container";
import { getHomepageBlogPosts, getTestimonials } from "@/sanity/fetch";

export const revalidate = 60;

function SectionSeparator() {
  return (
    <Container>
      <div className="h-px bg-border/70" aria-hidden />
    </Container>
  );
}

export default async function Home() {
  const [testimonials, latestPosts] = await Promise.all([
    getTestimonials(),
    getHomepageBlogPosts(),
  ]);

  return (
    <IntroAnimation>
      <HeroSection />
      <SectionSeparator />
      <TrustMetricsSection />
      <SectionSeparator />
      <ServicesOverview />
      <SectionSeparator />
      <WhyChooseUs />
      <SectionSeparator />
      <ProductEcosystem />
      <SectionSeparator />
      <WorkflowProcess />
      <SectionSeparator />
      <PortfolioShowcase />
      <SectionSeparator />
      <TestimonialsSection testimonials={testimonials} />
      <SectionSeparator />
      <BlogPreview posts={latestPosts} />
      <SectionSeparator />
      <CTASection />
    </IntroAnimation>
  );
}
