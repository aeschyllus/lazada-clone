import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("should render", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("[aria-labe='footer]")).toBeDefined();
  });
});
