import Image from "next/image";
import Divider from "./Divider";
import projecticon from "@/public/projecticon.svg";
import Button from "./Button";
import FileTree from "./FileTree";
import CodeEditor from "./CodeEditor";

interface ProjectGroupProps {}
const ProjectGroup: React.FC<ProjectGroupProps> = () => {
  return (
    <div className="bg-[#191D23] h-full rounded-md p-3">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <Image src={projecticon} alt="project icon" />
          <p className="text-[#EEEEEE] text-xl">Sample Project</p>
        </div>
        <div className="flex gap-2">
          <Button>Audit Now</Button>
          <Button variant="secondary">Options</Button>
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex gap-3">
        <FileTree />
        <CodeEditor
          language="javascript"
          value="function test(name,by,cy){
            const age = cy-by;
            const r = name+'is'+age;
            return r;
          }
        console.log(test('alice',1871,1964));"
        />
        <div className="w-[25%] bg-[#13161a] text-[#CCCCCC] p-3">
          Count of Issues
        </div>
      </div>
    </div>
  );
};

export default ProjectGroup;
