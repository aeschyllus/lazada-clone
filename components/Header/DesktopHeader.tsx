import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart, LuUserCircle } from "react-icons/lu";
import { IMAGES } from "@/config/images";
import { ROUTES } from "@/config/routes";
import { Searchbox } from "../Searchbox";

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
          <Link
            href={ROUTES.HOME}
            aria-label="cart-link-icon"
            className="flex items-center gap-3"
          >
            <LuShoppingCart size={24} />
            Cart
          </Link>
          {/* TODO: create profile component */}
          <Link
            href={ROUTES.HOME}
            aria-label="profile-link-icon"
            className="flex items-center gap-3"
          >
            <LuUserCircle size={24} />
            Profile
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex gap-x-3.5 mt-4">
        <p>customer care</p>
        <p>track my order</p>
        <p>feedback</p>
      </div>
    </header>
  );
}
