"use client";
import { Path } from "@/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  data: Path[];
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const path = usePathname();

  return (
    <nav className="flex gap-4 text-darkelectricblue-500">
      {data.map((value: Path) => {
        return (
          <Link
            href={value.path}
            className={`${
              path === value.path ? "text-azure-500 nav-border" : ""
            } font-medium hover:text-azure-600 xs:text-xs lg:text-base`}
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
