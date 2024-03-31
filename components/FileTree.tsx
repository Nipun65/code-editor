import { useEffect, useReducer, useState } from "react";
import { constants } from "@/utils";
import Divider from "./Divider";
import Folder from "./svgs/Folder";
import Arrow from "./svgs/Arrow";
import File from "./svgs/File";
import { stat } from "fs";

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
    if (state.name === obj.name) {
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
      setSelectedFile({ name: action.data.name, content: action.data.content });
      console.log(ans, "update file selcted file");
      return updateJSX(ans);
      // setOpenFiles((preveState: any) => {
      //   console.log(preveState);

      //   preveState?.forEach((element: any) => {
      //     if (
      //       action.data.name === element.name &&
      //       action.data.parent === element.parent
      //     ) {
      //       boolean = true;
      //     }
      //   });
      // });
      // if (!boolean) {
      //   setOpenFiles((preveState: any) =>
      //     preveState?.push({
      //       name: action?.data?.name,
      //       content: action?.data?.content,
      //       parent: action?.data?.parent,
      //     })
      //   );
      // }

      // return state;
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

  function checkFileType(obj: any) {
    if (obj.type === "file") {
      return (
        <div
          key={obj.name}
          className="flex gap-2 my-2 items-center cursor-pointer ml-5"
          onClick={() => {
            dispatch({ type: "append", data: obj });
          }}
        >
          <File fill={obj.isSelectedFile ? "#0270e8" : "#AAAAAA"} />
          <span className="text-[#CCCCCC]">
            {obj.name}
            {obj.extension}
          </span>
        </div>
      );
    } else if (obj.type === "dir") {
      const childrenElements = obj.children?.map((child: any) => {
        return (
          <div
            key={child.name}
            className={child.type === "dir" ? "ml-4" : "ml-4"}
          >
            {checkFileType(child)}
          </div>
        );
      });

      return (
        <div key={obj.name} className="text-[#CCCCCC] mt-2 cursor-pointer">
          <div
            className="items-center flex gap-2"
            onClick={() => {
              if (dispatch) dispatch({ type: "open or close", data: obj });
            }}
          >
            <Arrow
              fill={obj.isOpen ? "#0270e8" : "#AAAAAA"}
              className={!obj.isOpen ? "-rotate-90" : ""}
            />
            <Folder fill={!obj.isOpen} />
            <span
              className={`text-[#CCCCCC] ${obj.isOpen ? "text-[#0270e8]" : ""}`}
            >
              {obj.name}
            </span>
          </div>
          {obj.isOpen && <div>{childrenElements}</div>}
        </div>
      );
    }
  }

  return (
    <div className="bg-[#13161a] p-3 rounded-md w-[25%] overflow-auto">
      <p className="text-[#CCCCCC] py-2">Folder & Files</p>
      <Divider />
      {data}
    </div>
  );
};
export default FileTree;
