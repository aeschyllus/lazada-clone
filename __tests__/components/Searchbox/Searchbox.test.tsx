import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Searchbox } from "@/components/Searchbox";
import * as prods from "@/lib/products";

describe("Searchbox", () => {
  it("should submit", async () => {
    const spy = vi.spyOn(prods, "searchProducts");
    const { getByRole } = render(<Searchbox />);

    const q = getByRole("textbox", { name: "query" }) as HTMLInputElement;
    expect(q).toBeDefined();
    expect(q.value).toBe("");

    const btn = getByRole("button", { name: "btn-submit-query" });
    expect(btn).toBeDefined();

    fireEvent.change(q, { target: { value: "phone" } });
    expect((q as HTMLInputElement).value).toBe("phone");

    const form = getByRole("form", { name: "search-form" });
    fireEvent.submit(form);
    expect(btn).toHaveProperty("disabled", true);

    await waitFor(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
