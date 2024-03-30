import { JSX, useEffect, useReducer, useState } from "react";
import file from "@/public/file.svg";
import folder from "@/public/folder.svg";
import { constants } from "@/utils";
import Image from "next/image";
import Divider from "./Divider";

const FileTree = () => {
  //   const checkTypeAndUpdateFlag = (obj: any, state: any) => {
  //     if (state.name === obj.name) {
  //       state.isOpen = !state.isOpen;
  //     } else {
  //       state?.children?.map((value: any) =>
  //         checkTypeAndUpdateFlag(value, state.children)
  //       );
  //     }
  //     return state;
  //   };
  const [folderData, setFolderData] = useState<any>(constants?.FILES);
  const [data, dispatch] = useReducer(reducer, []);
  function checkTypeAndUpdateFlag(obj: any, state: any) {
    if (state.name === obj.name) {
      // Update the isOpen flag of the current node
      return { ...state, isOpen: !state.isOpen };
    } else if (state.children) {
      // Recursively traverse the children
      return {
        ...state,
        children: state.children.map((child: any) =>
          checkTypeAndUpdateFlag(obj, child)
        ),
      };
    }
    setFolderData(state);
    console.log(state);
    let ans = updateJSX(state);
    return ans;
  }

  function reducer(state: any, action: any) {
    if (action.type === "updated data") {
      return action.data;
    } else if (action.type === "open or close") {
      let newState = state;
      if (action.data.type === "dir") {
        newState = checkTypeAndUpdateFlag(action.data, folderData);
      }
      return newState;
    } else if (action.type === "append" && action.data.type === "file") {
      console.log(action.data.type);
    }
    throw Error("Unknown action.");
  }

  function updateJSX(arr: any) {
    const answer = arr?.map((value: any) => {
      return checkFileType(value);
    });

    dispatch({ type: "updated data", data: answer });
    return answer;
  }

  useEffect(() => {
    updateJSX(constants?.FILES);
  }, []);

  function checkFileType(obj: any) {
    if (obj.type === "file") {
      return (
        <div
          key={obj.name}
          className="flex gap-2 my-2 items-center cursor-pointer"
          onClick={() => dispatch({ type: "append", data: obj })}
        >
          <Image src={file} alt="file icon" />
          <span className="text-[#CCCCCC]">{obj.name}</span>
        </div>
      );
    } else if (obj.type === "dir") {
      const childrenElements = obj.children?.map((child: any) => {
        return (
          <div key={child.name} className="mr-2">
            {checkFileType(child)}
          </div>
        );
      });

      return (
        <div key={obj.name} className="text-[#CCCCCC] mt-2 cursor-pointer">
          <div
            className="items-center flex gap-2"
            onClick={() => dispatch({ type: "open or close", data: obj })}
          >
            <Image src={folder} alt="folder icon" />
            <span className="text-[#CCCCCC]">{obj.name}</span>
          </div>
          {obj.isOpen && <div>{childrenElements}</div>}
        </div>
      );
    }
  }

  return (
    <div className="bg-[#13161a] p-3 rounded-md w-[25%]">
      <p className="text-[#CCCCCC] py-2">Folder & Files</p>
      <Divider />
      {data}
    </div>
  );
};
export default FileTree;
