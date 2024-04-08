import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <article>
      <p className="text-3xl">Posts</p>
      <Link href="/">go to home</Link>
      <ul className="list-disc pl-5 mt-4 space-y-2">
        {posts.map((post, key) => (
          <li key={key}>{post.title}</li>
        ))}
      </ul>
    </article>
  );
}
