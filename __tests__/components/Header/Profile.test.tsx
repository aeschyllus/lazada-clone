import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Profile } from "@/components/Header";

it("should render", () => {
  const { getByRole } = render(<Profile />);
  expect(getByRole("link", { name: "profile-link-icon" })).toBeDefined();
});
