import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { trackMetadata } from "@/lib/seo";

export const metadata: Metadata = trackMetadata("9");

export default function Page() {
  return <TrackPage track="9" />;
}
