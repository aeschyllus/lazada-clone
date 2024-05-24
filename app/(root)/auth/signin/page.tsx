import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/config/images";
import { ROUTES } from "@/config/routes";

export default function Signin() {
  return (
    <div className="bg-[#0f156d] flex flex-col md:flex-row items-center justify-center md:gap-44 p-7 pb-14 md:pb-7 md:h-[60vh]">
      <div className="block p-7">
        <Image src={IMAGES.LOGO_2} alt="logo" width={400} height={0} />
        <p className="mt-5 text-center text-2xl text-white">
          The Top Online Shopping Experience
          <br />
          with Lazada Philippines
        </p>
      </div>
      <form className="bg-white p-7 rounded md:min-w-96">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Please enter your username"
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Please enter your password"
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>
        <button className="bg-orange-500 w-full py-2 rounded-md text-white mb-3">
          Sign In
        </button>
        <p className="text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href={ROUTES.AUTH.SIGN_UP} className="text-blue-500">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
