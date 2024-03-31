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
      className={`px-5 py-2 flex gap-3 rounded-b-none items-center cursor-pointer focus-visible:outline-none focus-visible:border-white focus-visible:border border border-transparent focus:rounded-t-md ${!fileMatch && "hover:bg-[#007AFF1d]"} ${bgColor} ${fileMatch && "rounded-md"}`}
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
        className={`p-1 hover:bg-zinc-400 rounded focus-visible:bg-zinc-400 focus-visible:outline-none focus:border-white focus:border border border-transparent`}
        tabIndex={0}
      >
        <Cross fill={`${fileMatch ? "white" : "#5D677D"}`} />
      </div>
    </li>
  );
};
export default FileTab;
