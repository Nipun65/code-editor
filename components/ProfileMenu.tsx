import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import arrow from "@/public/arrow.svg";
import Divider from "./Divider";
import profile from "@/public/profile.svg";
import logout from "@/public/logout.svg";
interface ProfileMenuProps {
  data: {
    name: string;
    email: string;
  };
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ProfileMenu: React.FC<ProfileMenuProps> = ({
  data,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <div
        className="flex gap-4 items-center text-brightgray-500"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Image className="" src={profile} alt="user icon" />
        <p>{data?.name}</p>
        <Image
          className={`${isOpen ? "-rotate-90" : "rotate-90"} transition-all duration-150`}
          src={arrow}
          alt="down icon"
        />
      </div>
      {isOpen && (
        <div className="rounded absolute top-11 -right-2 z-10 shadow bg-darkgreen-400 text-chinesesilver-500">
          <div className="p-4 px-6">
            <p className="font-bold m-0">{data?.name}</p>
            <p className="font-medium opacity-70 -mt-1">{data?.email}</p>
          </div>
          <Divider className="mt-3 border-opacity-50 border-brightgray-500" />
          <div className="flex items-center gap-3 px-6 py-2 rounded-b hover:bg-brightgray-500 hover:bg-opacity-20">
            <Image src={logout} alt="logout icon" className="size-4" />
            <p>LogOut</p>
          </div>
        </div>
      )}
    </>
  );
};
export default ProfileMenu;
