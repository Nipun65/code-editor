import logo from "@/public/logo.svg";
import Image from "next/image";
import { constants } from "@/utils";
import Navbar from "./Navbar";
import Divider from "./Divider";

const Header = () => {
  return (
    <div className="bg-[#191D23] w-full px-6 py-3 flex justify-between rounded-md">
      <div className="flex gap-6">
        <Image src={logo} alt="logo" />
        <Divider className="-my-3" />
      </div>
      <div className="flex gap-3">
        <Navbar data={constants?.TABS} />
        <Divider className="-my-3" />
        <p className="text-[#CCCCCC]">profile</p>
      </div>
    </div>
  );
};
export default Header;
