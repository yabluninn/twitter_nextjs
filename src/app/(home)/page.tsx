import Tweet from "./Tweet";

export default function Home() {
  return (
    <div>
      <Tweet
        tweet={{
          text: "Random Tweet",
          author: "Yablunin",
        }}
      />
    </div>
  );
}
