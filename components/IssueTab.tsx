import Image from "next/image";
import Divider from "./Divider";
import arrow from "@/public/arrow.svg";

interface dataProps {
  count: number;
  name: string;
  type: string;
  issues: any;
}

interface IssueTabProps {
  data: dataProps;
  setSelectedIssue: any;
}

const ISSUECOLORS: { [key: string]: string } = {
  total: "bg-[#5481FE]",
  high: "bg-[#FF4D4D]",
  medium: "bg-[#FFD166]",
  low: "bg-[#06D6A0]",
  informational: "bg-[#E568FF]",
  optimisation: "bg-[#66E3F4]",
};

const IssueTab: React.FC<IssueTabProps> = ({ data, setSelectedIssue }) => {
  return (
    <div
      className="flex gap-3 px-5 py-4 bg-[#191d23] hover:bg-[#007AFFB3] cursor-pointer rounded"
      onClick={() => {
        setSelectedIssue({
          name: data.name,
          type: data.type,
          count: data.count,
          issues: data.issues,
        });
      }}
    >
      <div className="flex w-1/3 items-center gap-3">
        <p
          className={`rounded-full min-h-3 min-w-3 ${ISSUECOLORS[data.type]}`}
        />
        <p className="text-2xl font-semibold text-[#EEEEEE]">
          {data.count.toString().padStart(2, "0")}
        </p>
      </div>
      <Divider />
      <div className="flex justify-between w-full items-center">
        <p className="text-[#AAAAAA]">{data.name}</p>
        <Image src={arrow} alt="issue tab icon" />
      </div>
    </div>
  );
};
export default IssueTab;
