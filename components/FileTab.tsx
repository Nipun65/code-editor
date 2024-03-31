import Cross from "./svgs/Cross";

interface Data {
  file: any;
  onClick: (value: string, file: any) => void;
  selectedFile: any;
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
      className={`px-5 py-2 flex gap-3 rounded-b-none items-center cursor-pointer focus-visible:outline-none focus-visible:border-white focus-visible:border border border-transparent focus:rounded-t-md ${bgColor} ${fileMatch && "rounded-md"}`}
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
      <Cross
        fill={`${fileMatch ? "white" : "#5D677D"}`}
        onClick={() => data.onClick("cross", data.file)}
        onKeyDown={(e: any) => {
          if (e.key === "Enter") {
            data.onClick("cross", data.file);
          }
        }}
      />
    </li>
  );
};
export default FileTab;
