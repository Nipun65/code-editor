import { useEffect, useReducer, useState } from "react";
import { constants } from "@/utils";
import Divider from "./Divider";
import Folder from "./svgs/Folder";
import Arrow from "./svgs/Arrow";
import File from "./svgs/File";

interface FileTreeProps {
  setSelectedFile: any;
  setOpenFiles: any;
}

const FileTree: React.FC<FileTreeProps> = ({
  setSelectedFile,
  setOpenFiles,
}) => {
  const [folderData, setFolderData] = useState<any>(constants?.FILES);
  const [data, dispatch] = useReducer(reducer, []);

  function checkTypeAndUpdateFlag(obj: any, state: any, type?: string) {
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
      return {
        ...state,
        children: state?.children.map((child: any) =>
          checkTypeAndUpdateFlag(obj, child, type)
        ),
      };
    } else if (state.type === "file") {
      let isSelectedFile = state?.isSelectedFile;
      if (type === "openfile") {
        isSelectedFile = false;
      }
      return { ...state, isSelectedFile };
    }
  }

  function reducer(state: any, action: any) {
    if (action.type === "updated data") {
      return action.data;
    } else if (action.type === "open or close") {
      if (action.data.type === "dir") {
        const ans = folderData?.map((value: any) => {
          return checkTypeAndUpdateFlag(action.data, value);
        });
        setFolderData(ans);
        return updateJSX(ans);
      }
    } else if (action.type === "append" && action.data.type === "file") {
      const ans = folderData?.map((value: any) => {
        return checkTypeAndUpdateFlag(action.data, value, "openfile");
      });
      setFolderData(ans);
      const obj = action.data;

      return updateJSX(ans);
    }
  }

  function updateJSX(arr: any) {
    return arr?.map((value: any) => {
      return checkFileType(value);
    });
  }

  useEffect(() => {
    const result = updateJSX(constants?.FILES);
    dispatch({ type: "updated data", data: result });
  }, []);

  const handleFileSelection = (obj: any) => {
    dispatch({ type: "append", data: obj });
    setSelectedFile(obj);
    setOpenFiles((preveState: any) => {
      const objIndex = preveState?.findIndex((value: any) => {
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

  function checkFileType(obj: any) {
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
            className={obj.isSelectedFile ? "text-[#0270e8]" : "text-[#CCCCCC]"}
          >
            {obj.name}
            {obj.extension}
          </span>
        </li>
      );
    } else if (obj.type === "dir") {
      const childrenElements = obj.children?.map((child: any) => {
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
        <ul key={obj.id} className="text-[#CCCCCC] mt-2 cursor-pointer">
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
              className={`${obj.isOpen ? "text-[#0270e8]" : "text-[#CCCCCC]"}`}
            >
              {obj.name}
            </span>
          </li>
          {obj.isOpen && <ul key={obj.children.id}>{childrenElements}</ul>}
        </ul>
      );
    }
  }

  return (
    <div className="bg-[#13161a] p-3 rounded-md w-[25%] overflow-auto">
      <p className="text-[#CCCCCC] mb-2">Folder & Files</p>
      <Divider />
      {data}
    </div>
  );
};
export default FileTree;
