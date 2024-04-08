import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DesktopHeader } from "@/components/Header";

describe("DesktopHeader", () => {
  it("should render", () => {
    const { container, getByRole } = render(<DesktopHeader />);
    expect(
      container.querySelector('[aria-label="desktop-header"]')
    ).toBeDefined();
    expect(getByRole("form", { name: "search-form" })).toBeDefined();
    expect(getByRole("link", { name: "cart-link-icon" })).toBeDefined();
  });

  it.todo("profile component");
  it.todo("other links (customer care, track my order, and feedback)");
});
