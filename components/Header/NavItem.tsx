import Link from "next/link";
import classNames from "classnames";

type NavItemProps = {
  route: string;
  ariaLabel?: string;
  className?: string;
  title: string;
  type: "link" | "button";
};

export default function NavItem({
  route,
  ariaLabel,
  className,
  title,
  type,
}: NavItemProps) {
  const classes = classNames("transition ease-in-out outline-none", {
    "hover:text-orange-500 focus:text-orange-500": type === "link",
    "bg-orange-500 text-white rounded-md px-3 py-2 hover:bg-orange-600 focus:bg-orange-600":
      type === "button",
    className,
  });

  return (
    <Link href={route} aria-label={ariaLabel} className={classes}>
      {title}
    </Link>
  );
}
