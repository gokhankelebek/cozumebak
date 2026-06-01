import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { trackMetadata } from "@/lib/seo";

export const metadata: Metadata = trackMetadata("ayt");

export default function Page() {
  return <TrackPage track="ayt" />;
}
