import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Fake",
};

export default function ProfileFake() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile Fake</h1>
    </div>
  );
}
