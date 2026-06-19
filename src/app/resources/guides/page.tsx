import { getGuides } from "@/sanity/fetch";
import { GuidesPageClient } from "./GuidesPageClient";

export const revalidate = 60;

export default async function GuidesPage() {
  const guides = await getGuides();
  return <GuidesPageClient guides={guides} />;
}
