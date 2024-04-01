"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { File } from "@/interfaces";
import Divider from "./Divider";
import Button from "./Button";
import FileTree from "./FileTree";
import CodeEditor from "./CodeEditor";
import Issues from "./Issues";
import projecticon from "@/public/projecticon.svg";

interface ProjectGroupProps {}
const ProjectGroup: React.FC<ProjectGroupProps> = () => {
  const [selectedFile, setSelectedFile] = useState<File>({
    name: "",
    type: "file",
    content: "",
    isOpen: false,
    id: 0,
    parentId: 0,
    extension: "",
  });

  const [collapseSideBar, setCollapseSideBar] = useState({
    filetree: false,
    issues: false,
  });
  const [openFiles, setOpenFiles] = useState<File[]>([]);

  return (
    <div className="bg-darkgreen-500 h-fit rounded-md p-3">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <Image src={projecticon} alt="project icon" />
          <p className="text-brightgray-500 text-xl">Sample Project</p>
        </div>
        <div className="flex gap-2">
          <Button className="px-8">Audit Now</Button>
          <Button variant="secondary" className="px-8" updates={true}>
            Options
          </Button>
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex gap-3">
        <FileTree
          setSelectedFile={setSelectedFile}
          setOpenFiles={setOpenFiles}
          selectedFile={selectedFile}
          className={collapseSideBar.filetree ? "w-0 hidden" : "w-1/4"}
        />
        <CodeEditor
          language="typescript"
          value={selectedFile?.content || ""}
          openFiles={openFiles}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setOpenFiles={setOpenFiles}
          className={
            collapseSideBar.filetree && collapseSideBar.issues
              ? "w-full"
              : collapseSideBar.filetree || collapseSideBar.issues
                ? "w-3/4"
                : "w-1/2"
          }
          setCollapseSideBar={setCollapseSideBar}
          collapseSideBar={collapseSideBar}
        />
        <Issues className={collapseSideBar.issues ? "w-0 hidden" : "w-1/4"} />
      </div>
    </div>
  );
};

export default ProjectGroup;
