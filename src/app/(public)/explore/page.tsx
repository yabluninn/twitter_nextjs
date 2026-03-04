import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Explore",
};

export default function Explore() {
  return (
    <Suspense>
      <Explore />
    </Suspense>
  );
}
