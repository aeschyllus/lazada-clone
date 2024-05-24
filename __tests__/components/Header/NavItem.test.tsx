import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { NavItem } from "@/components/Header";
import { ROUTES } from "@/config/routes";

it("should render link type", () => {
  const { container, getByRole, getByText } = render(
    <NavItem
      route={ROUTES.HOME}
      title="link test"
      type="link"
      ariaLabel="test"
    />
  );

  expect(getByRole("link", { name: "test" })).toBeDefined;
  expect(container.firstElementChild?.className).toBe(
    "transition ease-in-out outline-none hover:text-orange-500 focus-visible:text-orange-500"
  );
  expect(getByText("link test")).toBeDefined();
});

it("should render button type", () => {
  const { container, getByRole, getByText } = render(
    <NavItem
      route={ROUTES.HOME}
      title="button test"
      type="button"
      ariaLabel="test"
    />
  );

  expect(getByRole("link", { name: "test" })).toBeDefined;
  expect(container.firstElementChild?.className).toBe(
    "transition ease-in-out outline-none bg-orange-500 text-white rounded-md px-3 py-2 hover:bg-orange-600 focus-visible:bg-orange-600"
  );
  expect(getByText("button test")).toBeDefined();
});
