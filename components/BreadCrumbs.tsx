import { Path } from "@/interfaces";
import Link from "next/link";

interface BreadCrumbsProps {
  data: Path[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data }) => {
  return (
    <div className="py-3 ml-1">
      {data.map((value: Path, index: number) => {
        return (
          <Link
            href={value.path}
            className={`${
              index === data.length - 1 ? "text-[#EEEEEE]" : "text-[#7b8191]"
            } text-sm`}
            key={value.name}
          >
            {value.name} {index !== data.length - 1 && "/"}&nbsp;
          </Link>
        );
      })}
    </div>
  );
};
export default BreadCrumbs;
