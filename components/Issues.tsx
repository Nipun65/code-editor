import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { constants } from "@/utils";
import { Issue, IssueDetail as IssueDetailsType } from "@/interfaces";
import Divider from "./Divider";
import Tabs from "./Tabs";
import IssueTab from "./IssueTab";
import Input from "./Input";
import Button from "./Button";
import arrow from "@/public/arrow.svg";
import flag from "@/public/flag.svg";
import info from "@/public/info.svg";

interface IssuesProps {
  className: string;
}

interface IssueDetailData extends IssueDetailsType {
  index: number;
}

interface ActiveIndexStep {
  index: number | undefined;
  step: number;
}

interface IssueDetailProps {
  data: IssueDetailData;
  setSelectedIssue: Dispatch<SetStateAction<Issue>>;
  setActiveIndexStep: Dispatch<SetStateAction<ActiveIndexStep>>;
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
        setSelectedIssue((preveState: Issue) => {
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
      <div className="flex w-11/12 items-center gap-3">
        <p className="text-[#EEEEEE]">
          #{data.index + 1}.&nbsp;{data.issueTitle}
        </p>
      </div>
      <Divider />
      <div className="w-1/12 flex items-center justify-end">
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
    type: "",
    name: "",
    count: 0,
  });

  const [activeIndexStep, setActiveIndexStep] = useState<ActiveIndexStep>({
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
      <div className="flex items-center gap-2 mb-2 text-sm">
        <p
          className={`${selectedIssue.name.length <= 0 ? "text-xl" : "text-sm"}`}
        >
          Count of Issues
        </p>
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
            {activeIndexStep.index && (
              <p className={activeIndexStep.step === 2 ? "text-[#EEEEEE]" : ""}>
                {activeIndexStep?.step === 2
                  ? `Issue #${activeIndexStep.index + 1}`
                  : ""}
              </p>
            )}
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
          <ul className="flex flex-col gap-2 overflow-auto scrollbar max-h-[43vh]">
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
        <>
          <IssueTab data={selectedIssue} step={1} className="my-3" />
          {selectedIssue?.issues?.length > 0 ? (
            <ul className="flex gap-2 flex-col h-[43vh] overflow-auto scrollbar">
              {selectedIssue?.issues?.map(
                (issueDetail: IssueDetailsType, index: number) => {
                  return (
                    <IssueDetail
                      data={{ ...issueDetail, index: index }}
                      setSelectedIssue={setSelectedIssue}
                      setActiveIndexStep={setActiveIndexStep}
                    />
                  );
                }
              )}
            </ul>
          ) : (
            <p className="text-center text-[#CCCCCC] text-xl">No Issues</p>
          )}
        </>
      )}

      {activeIndexStep?.step === 2 && (
        <div className="flex flex-col gap-3 my-3">
          <div className="flex gap-3 items-center justify-start rounded px-5 py-4 bg-[#191d23]">
            <p
              className={`rounded-full min-h-3 min-w-3 max-h-3 max-w-3 ${constants?.ISSUECOLORS[selectedIssue.type]}`}
            />
            {activeIndexStep.index && (
              <p>
                #{activeIndexStep.index + 1}.{" "}
                {
                  selectedIssue?.issues[activeIndexStep.index as number]
                    ?.issueTitle
                }
              </p>
            )}
          </div>
          <div className="bg-[#191d23]  p-3 rounded">
            <div className="overflow-auto scrollbar h-[35vh]">
              <p className="text-[#0371E9]">Description:</p>
              <p className="text-[#CCCCCC]">
                {
                  selectedIssue?.issues[activeIndexStep.index as number]
                    ?.description
                }
              </p>
              <p className="mt-4 text-[#0371E9]">Remediation:</p>
              <p className="text-[#CCCCCC]">
                {
                  selectedIssue?.issues[activeIndexStep.index as number]
                    ?.remediation
                }
              </p>
            </div>
            <Divider />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 justify-end mt-3">
                <Button className="px-8">Auto Fix Code</Button>
                <Button className="bg-transparent border rounded-md p-4 py-3 border-[#FF4D4D]">
                  <Image src={flag} alt="flag" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeIndexStep.step === 2 && (
        <div className="flex gap-1 items-center text-xs mt-1">
          <Image src={info} alt="info icon" />
          <p>Changes done in the code can be undone</p>
        </div>
      )}

      {activeIndexStep?.step !== 2 && (
        <>
          <Divider className="mt-3" />
          <div className="flex gap-2 items-center mt-4">
            <Input type="checkbox" className="size-4 cursor-pointer" />
            <p className="text-[#EEEEEE]">Exclude Dependencies</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Issues;