import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { IMAGES } from "@/config/images";
import { CUSTOMER_LINKS } from "@/config/nav";
import { ROUTES } from "@/config/routes";
import { Searchbox } from "../Searchbox";
import NavItem from "./NavItem";
import Profile from "./Profile";

const auth = true; // use server side action(?)

export default function DesktopHeader() {
  return (
    <header
      className="hidden md:block sticky top-0 bg-white py-4"
      aria-label="desktop-header"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
        <Link href={ROUTES.HOME}>
          <Image src={IMAGES.LOGO} alt="logo" width={127} height={0} />
        </Link>
        <Searchbox />
        <div className="flex items-center gap-8">
          {/* TODO: redirect to cart page */}
          {auth && (
            <>
              <Link
                href={ROUTES.HOME}
                aria-label="cart-link-icon"
                className="group"
              >
                <LuShoppingCart
                  size={24}
                  className="group-hover:stroke-orange-500 transition ease-in-out"
                />
              </Link>
              <Profile />
            </>
          )}
          {/* TODO: create signin and signup page */}
          {!auth && (
            <div className="flex items-center gap-3">
              <NavItem
                route={ROUTES.HOME}
                ariaLabel="signin-link"
                title="Sign in"
                type="link"
              />
              <NavItem
                route={ROUTES.HOME}
                ariaLabel="signup-link"
                title="Sign up"
                type="button"
              />
            </div>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex gap-x-3.5 mt-4 text-sm text-gray-500">
        {CUSTOMER_LINKS.map((link, idx) => (
          <NavItem
            key={idx}
            route={link.route}
            ariaLabel={link.ariaLabel}
            title={link.title}
            type="link"
          />
        ))}
      </div>
    </header>
  );
}
