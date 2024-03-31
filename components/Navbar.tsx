"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  data: any;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const path = usePathname();

  return (
    <nav className="flex gap-4 text-[#5d677d]">
      {data.map((value: any) => {
        return (
          <Link
            href={value.path}
            className={`${
              path === value.path ? "text-[#1283ff] nav-border" : ""
            } font-medium hover:text-[#3875b6] xs:text-xs lg:text-base`}
            key={value.name}
          >
            {value.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
