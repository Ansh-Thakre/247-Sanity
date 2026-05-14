import {
  HeroSection,
  TrustMetricsSection,
  ServicesOverview,
  IndustrySolutions,
  WhyChooseUs,
  ProductEcosystem,
  WorkflowProcess,
  PortfolioShowcase,
  TestimonialsSection,
  BlogPreview,
  CTASection,
  IntroAnimation,
} from "@/components/sections/home";

export default function Home() {
  return (
    <IntroAnimation>
      <HeroSection />
      <TrustMetricsSection />
      <ServicesOverview />
      <IndustrySolutions />
      <WhyChooseUs />
      <ProductEcosystem />
      <WorkflowProcess />
      <PortfolioShowcase />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </IntroAnimation>
  );
}
