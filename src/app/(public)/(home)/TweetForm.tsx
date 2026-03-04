import { PostTweet } from "@/src/server-actions/post-tweet";

export default function TweetForm() {
  return (
    <form
      action={PostTweet}
      className="border border-white/10 rounded-xl p-4 bg-neutral-900 text-white space-y-3 mb-5"
    >
      <input
        type="text"
        name="content"
        placeholder="What's new today?"
        className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition"
        >
          Tweet
        </button>
      </div>
    </form>
  );
}
