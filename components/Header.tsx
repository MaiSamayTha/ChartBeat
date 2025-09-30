import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 header z-40">
      <div className="container header-wrapper">
        <Link href="/" aria-label="Go to dashboard" className="flex items-center">
          <Image
            src="/assets/icons/logo.svg"
            alt="signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop / tablet nav */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* Profile & mobile trigger */}
        <div className="flex items-center">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
