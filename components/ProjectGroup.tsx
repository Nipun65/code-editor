"use client";
import { useState } from "react";
import Image from "next/image";
import Divider from "./Divider";
import Button from "./Button";
import FileTree from "./FileTree";
import CodeEditor from "./CodeEditor";
import Issues from "./Issues";
import projecticon from "@/public/projecticon.svg";

interface ProjectGroupProps {}
const ProjectGroup: React.FC<ProjectGroupProps> = () => {
  const [selctedFile, setSelectedFile] = useState({ name: "", content: "" });
  const [openFiles, setOpenFiles] = useState([]);

  return (
    <div className="bg-[#191D23] h-full rounded-md p-3">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <Image src={projecticon} alt="project icon" />
          <p className="text-[#EEEEEE] text-xl">Sample Project</p>
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
        />
        <CodeEditor
          language="javascript"
          value={selctedFile?.content || ""}
          openFiles={openFiles}
          selectedFile={selctedFile}
          setSelectedFile={setSelectedFile}
          setOpenFiles={setOpenFiles}
        />
        <Issues />
      </div>
    </div>
  );
};

export default ProjectGroup;
