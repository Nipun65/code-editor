"use client";
import { useState } from "react";
import Image from "next/image";
import { constants } from "@/utils";
import Navbar from "./Navbar";
import Divider from "./Divider";
import logo from "@/public/logo.svg";
import ProfileMenu from "./ProfileMenu";

const USER = {
  name: "Johhny Doe",
  email: "johhnydoe@gmail.com",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-darkgreen-500 w-full px-6 py-3 flex justify-between rounded-md">
      <div className="flex gap-6">
        <Image src={logo} alt="logo" />
        <Divider className="-my-3" />
      </div>
      <div className="flex gap-3">
        <Navbar data={constants?.TABS} />
        <Divider className="-my-3" />
        <div
          onBlur={(e) => {
            setIsOpen(false);
            e.preventDefault();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsOpen(!isOpen);
            }
          }}
          tabIndex={0}
          className="relative px-2 cursor-pointer"
        >
          <ProfileMenu data={USER} setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};
export default Header;
