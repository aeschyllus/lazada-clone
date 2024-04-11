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
    expect(getByRole("link", { name: "profile-link-icon" })).toBeDefined();
  });

  it("should render other links (customer care, track my order, and feedback)", () => {
    const { container, getByRole } = render(<DesktopHeader />);
    expect(
      container.querySelector('[aria-label="desktop-header"]')
    ).toBeDefined();
    expect(getByRole("link", { name: "customer-care-link" })).toBeDefined();
    expect(getByRole("link", { name: "track-order-link" })).toBeDefined();
    expect(getByRole("link", { name: "feedback-link" })).toBeDefined();
  });

  it.todo("should render sign in/sign up links when not authenticated");
});
