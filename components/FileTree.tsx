import {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { File as FileProps } from "@/interfaces";
import { constants } from "@/utils";
import Divider from "./Divider";
import Folder from "./svgs/Folder";
import Arrow from "./svgs/Arrow";
import File from "./svgs/File";
import { twMerge } from "tailwind-merge";

interface FileTreeProps {
  setSelectedFile: Dispatch<SetStateAction<FileProps>>;
  setOpenFiles: Dispatch<SetStateAction<FileProps[]>>;
  selectedFile: FileProps;
  className: string;
}

const FileTree: React.FC<FileTreeProps> = ({
  setSelectedFile,
  setOpenFiles,
  selectedFile,
  className,
}) => {
  const [folderData, setFolderData] = useState<FileProps[]>(constants?.FILES);
  const [data, dispatch] = useReducer(reducer, []);

  function checkTypeAndUpdateFlag(
    obj: FileProps,
    state: FileProps,
    type?: string
  ): FileProps | {} {
    if (
      state.name === obj.name &&
      state?.id === obj.id &&
      state?.parentId === obj.parentId
    ) {
      let isSelectedFile = state?.isSelectedFile;
      let isOpen = state?.isOpen;
      if (type === "openfile") {
        isSelectedFile = true;
      } else {
        isOpen = !isOpen;
      }

      return { ...state, isOpen, isSelectedFile };
    } else if (state?.children) {
      const children = state?.children.map((child: FileProps) =>
        checkTypeAndUpdateFlag(obj, child, type)
      ) as FileProps[];
      return {
        ...state,
        children,
        isOpen: state?.isOpen
          ? true
          : children.some((child) => child.isSelectedFile || child.isOpen),
      };
    } else if (state.type === "file") {
      let isSelectedFile = state?.isSelectedFile;
      if (type === "openfile") {
        isSelectedFile = false;
      }
      return { ...state, isSelectedFile };
    }
    return {};
  }

  function reducer(state: FileProps[], action: any) {
    if (action.type === "updated data") {
      return action.data;
    } else if (action.type === "open or close") {
      if (action.data.type === "dir") {
        const result = folderData?.map((value: FileProps) => {
          return checkTypeAndUpdateFlag(action.data, value);
        }) as FileProps[];

        setFolderData(result);
        return updateJSX(result);
      }
    } else if (action.type === "append" && action.data.type === "file") {
      const result = folderData?.map((value: FileProps) => {
        return checkTypeAndUpdateFlag(action.data, value, "openfile");
      }) as FileProps[];
      setFolderData(result);
      return updateJSX(result);
    }
  }

  function updateJSX(arr: FileProps[]) {
    return arr?.map((value: FileProps) => {
      return checkFileType(value);
    });
  }

  useEffect(() => {
    const result = folderData?.map((value: FileProps) => {
      return checkTypeAndUpdateFlag(selectedFile, value, "openfile");
    }) as FileProps[];
    setFolderData(result);
    const updateContent = updateJSX(result);
    dispatch({ type: "updated data", data: updateContent });
  }, [selectedFile.id]);

  useEffect(() => {
    const result = updateJSX(constants?.FILES);
    dispatch({ type: "updated data", data: result });
  }, []);

  const handleFileSelection = (obj: FileProps) => {
    dispatch({ type: "append", data: obj });
    setSelectedFile(obj);
    setOpenFiles((preveState: FileProps[]) => {
      const objIndex = preveState?.findIndex((value: FileProps) => {
        return value.id === obj.id && value.parentId === obj.parentId;
      });

      if (objIndex === -1) {
        preveState.push({
          ...obj,
        });
      }
      return preveState;
    });
  };

  function checkFileType(obj: FileProps) {
    if (obj.type === "file") {
      return (
        <li
          key={obj.id}
          tabIndex={0}
          className="flex gap-2 my-2 items-center cursor-pointer ml-5"
          onClick={() => {
            handleFileSelection(obj);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleFileSelection(obj);
            }
          }}
        >
          <File fill={obj.isSelectedFile ? "#0270e8" : "#AAAAAA"} />
          <span
            className={
              obj.isSelectedFile
                ? "text-brandeisblue-500"
                : "text-chinesesilver-500"
            }
          >
            {obj.name}
            {obj.extension}
          </span>
        </li>
      );
    } else if (obj.type === "dir") {
      const childrenElements = obj.children?.map((child: FileProps) => {
        return (
          <div
            key={child.id}
            className={child.type === "dir" ? "ml-4" : "ml-4"}
          >
            {checkFileType(child)}
          </div>
        );
      });

      const handleOpenClose = () => {
        dispatch({ type: "open or close", data: obj });
      };

      return (
        <ul key={obj.id} className="text-chinesesilver-500 mt-2 cursor-pointer">
          <li
            tabIndex={0}
            className="flex items-center gap-2"
            onClick={() => {
              handleOpenClose();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleOpenClose();
            }}
          >
            <Arrow
              fill={obj.isOpen ? "#0270e8" : "#AAAAAA"}
              className={!obj.isOpen ? "-rotate-90" : ""}
            />
            <Folder fill={!obj.isOpen} />
            <span
              className={`${obj.isOpen ? "text-brandeisblue-500" : "text-chinesesilver-500"}`}
            >
              {obj.name}
            </span>
          </li>
          {obj.isOpen && <ul key={obj?.id}>{childrenElements}</ul>}
        </ul>
      );
    }
  }

  return (
    <div
      className={twMerge(
        `bg-chineseblack-500 p-3 rounded-md max-h-[70vh]`,
        className
      )}
    >
      <p className="text-chinesesilver-500 mb-2">Folder & Files</p>
      <Divider />
      {data}
    </div>
  );
};
export default FileTree;
