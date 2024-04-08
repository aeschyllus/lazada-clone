import { API_BASE_URL, API_ENDPOINT } from "@/config/api";

export async function searchProducts({ query }: { query: string }) {
  if (!query) return;

  const res = await fetch(
    `${API_BASE_URL}${API_ENDPOINT.SEARCH_PRODUCTS}?q=${query}`
  );
  const data = await res.json();

  return data.products;
}
