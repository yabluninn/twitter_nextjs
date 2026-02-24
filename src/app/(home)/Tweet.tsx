import type { ITweet } from "@/src/shared/types/tweet.interface";

interface Props {
  tweet: ITweet;
}

export default function Tweet({ tweet }: Props) {
  return (
    <div>
      <p>{tweet.text}</p>
      <span>@{tweet.author}</span>
    </div>
  );
}
