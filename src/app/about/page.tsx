import { getAboutPageContent } from "@/sanity/fetch";
import AboutPageClient from "./AboutPageClient";

export const revalidate = 60;

export default async function AboutPage() {
  const content = await getAboutPageContent();
  return <AboutPageClient content={content} />;
}
