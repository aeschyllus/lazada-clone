import { API_BASE_URL, API_ENDPOINT } from "@/config/api";

type Post = {
  title: string;
  body: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINT.POSTS}?delay=3000`);
  const data = await res.json();

  return data.posts;
}
