import { useState } from "react";
import { constants } from "@/utils";
import Divider from "./Divider";
import Tabs from "./Tabs";
import IssueTab from "./IssueTab";
import Input from "./Input";

interface IssuesProps {}

const Issues: React.FC<IssuesProps> = ({}) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-[25%] bg-[#13161a] text-[#CCCCCC] p-3 overflow-auto rounded-md">
      <p className="mb-2">Count of Issues</p>
      <Divider />
      <Tabs
        data={constants?.ISSUETABS}
        className="my-4"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ul className="flex flex-col gap-2 overflow-auto max-h-[43vh]">
        {constants?.ISSUES?.map((value: any) => {
          return <IssueTab key={value.name} data={value} />;
        })}
      </ul>
      <Divider className="mt-3" />
      <div className="flex gap-2 items-center mt-4">
        <Input type="checkbox" className="size-4" />
        <p className="text-[#EEEEEE]">Exclude Dependencies</p>
      </div>
    </div>
  );
};
export default Issues;
