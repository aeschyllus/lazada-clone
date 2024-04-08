import Link from "next/link";

export default async function Home() {
  return (
    <article>
      <p className="text-3xl">Home</p>
      <Link href="/posts">go to posts</Link>
    </article>
  );
}
