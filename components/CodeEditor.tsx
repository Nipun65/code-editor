import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Editor, loader } from "@monaco-editor/react";
import { File } from "@/interfaces";
import FileTab from "./FileTab";
import { twMerge } from "tailwind-merge";
import CollapseExpand from "./svgs/CollapseExpand";

interface CollapseSideBar {
  filetree: boolean;
  issues: boolean;
}

interface CodeEditorProps {
  language: string;
  value: string;
  openFiles: File[];
  selectedFile: File;
  setSelectedFile: Dispatch<SetStateAction<File>>;
  setOpenFiles: Dispatch<SetStateAction<File[]>>;
  className: string;
  setCollapseSideBar: Dispatch<SetStateAction<CollapseSideBar>>;
  collapseSideBar: CollapseSideBar;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  openFiles,
  setOpenFiles,
  setSelectedFile,
  selectedFile,
  className,
  setCollapseSideBar,
  collapseSideBar,
}) => {
  const editorRef = useRef<any>(null);

  const formatCode = () => {
    editorRef?.current?.getAction("editor.action.formatDocument")._run();
  };

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco?.editor?.defineTheme("custom-theme", {
        colors: {
          "editor.background": "#13161a",
          "editor.foreground": "#CCCCCC",
        },
        base: "vs-dark",
        inherit: false,
        rules: [],
      });

      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    });
  }, []);

  useEffect(() => {
    formatCode();
  }, [value]);

  const handleFileClick = (value: string, file: File) => {
    if (value === "selectfile") {
      setSelectedFile({ ...file });
    } else if (value === "cross") {
      if (file.id === selectedFile.id) {
        const objIndex = openFiles.findIndex(
          (obj: File) => obj.id === file.id && obj.parentId === file.parentId
        );

        if (objIndex <= 0) {
          setSelectedFile({ ...openFiles[1] });
        } else {
          setSelectedFile({ ...openFiles[objIndex - 1] });
        }
      }

      setOpenFiles((preveState: File[]) => {
        const result = preveState.filter(
          (value: File) =>
            !(value.id === file.id && value.parentId === file.parentId)
        );
        return result;
      });
    }
  };

  return (
    <div
      className={twMerge(
        "rounded-md bg-chineseblack-500 h-[70vh] relative",
        className
      )}
    >
      <ul className="flex overflow-auto scrollbar mb-2 rounded-t-md">
        {openFiles.map((value: File) => {
          return (
            <FileTab
              key={value.id}
              data={{
                file: value,
                onClick: handleFileClick,
                selectedFile: selectedFile,
              }}
            />
          );
        })}
      </ul>

      <Editor
        height="63vh"
        language={language}
        value={value}
        options={{
          automaticLayout: true,
          formatOnPaste: true,
          formatOnType: true,
        }}
        onMount={(editor, monaco) => {
          editorRef.current = editor;
          setTimeout(() => {
            formatCode();
          }, 1000);
        }}
        theme="custom-theme"
      />
      <div
        className="absolute bottom-3 -left-2 rounded-md bg-azure-500 p-1 cursor-pointer"
        onClick={() => {
          setCollapseSideBar((preveState) => {
            return { ...preveState, filetree: !preveState.filetree };
          });
        }}
      >
        <CollapseExpand
          className={`size-3 ${collapseSideBar.filetree ? "-rotate-90" : "rotate-90"}`}
        />
      </div>
      <div
        className="absolute bottom-3 -right-2 rounded-md bg-azure-500 p-1 cursor-pointer"
        onClick={() => {
          setCollapseSideBar((preveState) => {
            return { ...preveState, issues: !preveState.issues };
          });
        }}
      >
        <CollapseExpand
          className={`size-3 ${collapseSideBar.issues ? "rotate-90" : "-rotate-90"}`}
        />
      </div>
    </div>
  );
};
export default CodeEditor;
