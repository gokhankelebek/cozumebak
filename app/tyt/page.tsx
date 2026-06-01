import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { trackMetadata } from "@/lib/seo";

export const metadata: Metadata = trackMetadata("tyt");

export default function Page() {
  return <TrackPage track="tyt" />;
}
