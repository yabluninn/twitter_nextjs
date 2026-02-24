import { TWEETS } from "@/src/shared/data/tweets.data";
import Tweet from "./Tweet";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <div className="space-y-6">
        {TWEETS.map((item) => (
          <Tweet key={item.author} tweet={item} />
        ))}
      </div>
    </div>
  );
}
