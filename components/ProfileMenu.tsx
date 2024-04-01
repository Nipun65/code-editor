import Image from "next/image";
import arrow from "@/public/arrow.svg";
import profile from "@/public/profile.svg";
import { Dispatch, SetStateAction } from "react";

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
        <div className="rounded absolute top-11 -right-4 p-4 px-6 z-10 shadow bg-darkgreen-500 text-brightgray-500">
          <p className="font-bold">{data?.name}</p>
          <p className="font-medium">{data?.email}</p>
        </div>
      )}
    </>
  );
};
export default ProfileMenu;
