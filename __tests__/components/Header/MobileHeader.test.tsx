import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MobileHeader } from "@/components/Header";

describe("MobileHeader", () => {
  it("should render", () => {
    const { container, getByRole } = render(<MobileHeader />);
    expect(
      container.querySelector('[aria-label="mobile-header"]')
    ).toBeDefined();
    expect(getByRole("form", { name: "search-form" })).toBeDefined();
  });
});
