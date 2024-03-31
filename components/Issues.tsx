import { useState } from "react";
import Image from "next/image";
import { constants } from "@/utils";
import { Issue } from "@/interfaces";
import { twMerge } from "tailwind-merge";
import Divider from "./Divider";
import Tabs from "./Tabs";
import IssueTab from "./IssueTab";
import Input from "./Input";
import arrow from "@/public/arrow.svg";

interface IssuesProps {
  className: string;
}

interface IssueDetailProps {
  data: any;
  setSelectedIssue: any;
  setActiveIndexStep: any;
}

export const IssueDetail: React.FC<IssueDetailProps> = ({
  data,
  setSelectedIssue,
  setActiveIndexStep,
}) => {
  return (
    <li
      className="flex gap-3 px-5 py-4 bg-[#191d23] hover:bg-[#007AFFB3] cursor-pointer rounded"
      onClick={() => {
        setSelectedIssue((preveState: any) => {
          return {
            ...preveState,
          };
        });
        setActiveIndexStep({
          index: data.index,
          step: 2,
        });
      }}
    >
      <div className="flex w-5/6 items-center gap-3">
        <p className="text-[#EEEEEE]">
          #{data.index}.&nbsp;{data.issueTitle}
        </p>
      </div>
      <Divider />
      <div className="w-1/6 flex items-center justify-center">
        <Image src={arrow} alt="issue tab icon" />
      </div>
    </li>
  );
};

const Issues: React.FC<IssuesProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedIssue, setSelectedIssue] = useState({
    issues: [
      {
        description: "",
        remediation: "",
        issueTitle: "",
      },
    ],
    name: "",
  });

  const [activeIndexStep, setActiveIndexStep] = useState<{
    [key: string]: number | undefined;
  }>({
    index: undefined,
    step: 1,
  });

  return (
    <div
      className={twMerge(
        `bg-[#13161a] text-[#CCCCCC] p-3 h-[70vh] rounded-md`,
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <p className="">Count of Issues</p>
        {selectedIssue?.name ? (
          <>
            /&nbsp;
            <p className={activeIndexStep.step === 1 ? "text-[#EEEEEE]" : ""}>
              {selectedIssue?.name.substring(
                0,
                selectedIssue?.name.indexOf("Issues") + "Issues".length
              )}
            </p>
            {activeIndexStep?.step === 2 && <>/&nbsp;</>}
            <p className={activeIndexStep.step === 2 ? "text-[#EEEEEE]" : ""}>
              {activeIndexStep?.step === 2
                ? `Issue #${activeIndexStep.index}`
                : ""}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      <Divider />
      {selectedIssue?.name.length === 0 && (
        <>
          <Tabs
            data={constants?.ISSUETABS}
            className="my-4"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ul className="flex flex-col gap-2 overflow-auto max-h-[43vh]">
            {constants?.ISSUES?.map((value: Issue) => {
              return (
                <IssueTab
                  key={value.name}
                  data={value}
                  setSelectedIssue={setSelectedIssue}
                />
              );
            })}
          </ul>
        </>
      )}

      {selectedIssue?.name.length > 0 && activeIndexStep.step === 1 && (
        <ul className="flex gap-2 flex-col h-[50vh] overflow-auto">
          {selectedIssue?.issues?.map((issueDetail: any, index: number) => {
            return (
              <IssueDetail
                data={{ ...issueDetail, index: index + 1 }}
                setSelectedIssue={setSelectedIssue}
                setActiveIndexStep={setActiveIndexStep}
              />
            );
          })}
        </ul>
      )}

      {activeIndexStep?.step === 2 && (
        <div className="h-[50vh] overflow-auto">
          <p className="text-[#0371E9]">Description:</p>
          <p>
            {
              selectedIssue?.issues[activeIndexStep.index as number]
                ?.description
            }
          </p>
          <p className="mt-4 text-[#0371E9]">Remediation:</p>
          <p>
            {
              selectedIssue?.issues[activeIndexStep.index as number]
                ?.remediation
            }
          </p>
        </div>
      )}

      <Divider className="mt-3" />
      <div className="flex gap-2 items-center mt-4">
        <Input type="checkbox" className="size-4 cursor-pointer" />
        <p className="text-[#EEEEEE]">Exclude Dependencies</p>
      </div>
    </div>
  );
};
export default Issues;
