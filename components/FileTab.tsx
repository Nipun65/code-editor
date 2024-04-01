import { File } from "@/interfaces";
import Cross from "./svgs/Cross";

interface Data {
  file: File;
  onClick: (value: string, file: File) => void;
  selectedFile: File;
}

interface FileTabProps {
  data: Data;
}

const FileTab: React.FC<FileTabProps> = ({ data }) => {
  const fileMatch =
    data?.selectedFile?.id === data.file.id &&
    data?.selectedFile?.parentId === data.file.parentId;
  const textColor = fileMatch ? "text-white" : "text-[#5D677D]";

  const bgColor = fileMatch ? "bg-[#007AFF]" : "bg-[#1E232B]";

  return (
    <li
      className={`px-5 py-2 flex gap-3 rounded-b-none items-center cursor-pointer focus-visible:outline-none focus-visible:border-white focus-visible:border   focus:rounded-t-md border border-transparent ${!fileMatch && "hover:bg-[#007AFF1d] border-l-[#272c33]"} ${bgColor} ${fileMatch && "rounded-md"}`}
      onClick={() => data.onClick("selectfile", data.file)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          data.onClick("selectfile", data.file);
        }
      }}
      tabIndex={0}
    >
      <div>
        <p className={`${textColor}`}>
          {data?.file?.name}
          {data?.file?.extension}
        </p>
      </div>
      <div
        onMouseDown={() => data.onClick("cross", data.file)}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            data.onClick("cross", data.file);
          }
        }}
        className={`p-1 hover:bg-[#6B7C93] rounded focus-visible:bg-[#6B7C93] focus-visible:outline-none focus:border-white focus:border border border-transparent`}
        tabIndex={0}
      >
        <Cross fill={`${fileMatch ? "white" : "#5D677D"}`} />
      </div>
    </li>
  );
};
export default FileTab;
