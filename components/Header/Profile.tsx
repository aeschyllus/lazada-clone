import Link from "next/link";
import React from "react";
import { LuUserCircle } from "react-icons/lu";
import { ROUTES } from "@/config/routes";

// TODO: clicking avatar should trigger right drawer
//       - Hi, {user}
//       - username (small, gray)
//       - divider
//       - Profile
//       - divider
//       - Log out (red)
export default function Profile() {
  return (
    <Link href={ROUTES.HOME} aria-label="profile-link-icon" className="group">
      <LuUserCircle
        size={24}
        className="group-hover:stroke-orange-500 transition ease-in-out"
      />
    </Link>
  );
}
