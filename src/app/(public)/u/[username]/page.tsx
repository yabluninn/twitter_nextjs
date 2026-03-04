import type { Metadata } from "next";

type Params = { username: string };

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { username } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile @{username}</h1>
    </div>
  );
}
