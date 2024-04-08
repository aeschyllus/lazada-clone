import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/config/images";
import { ROUTES } from "@/config/routes";
import { Searchbox } from "../Searchbox";

export default function MobileHeader() {
  return (
    <>
      <header
        className="md:hidden bg-white px-4 pt-4"
        aria-label="mobile-header"
      >
        <Link href={ROUTES.HOME}>
          <Image src={IMAGES.LOGO} alt="logo" width={127} height={0} />
        </Link>
      </header>
      <div className="md:hidden sticky top-0 bg-white p-4 max-w-7xl mx-auto flex justify-between items-center">
        <Searchbox />
      </div>
    </>
  );
}
