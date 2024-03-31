import React, { useEffect, useRef } from "react";
import { Editor, loader } from "@monaco-editor/react";
import FileTab from "./FileTab";

interface CodeEditorProps {
  language: string;
  value: string;
  setSelectedFile: any;
  setOpenFiles: any;
  openFiles: any;
  selectedFile: any;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  setSelectedFile,
  setOpenFiles,
  openFiles,
  selectedFile,
}) => {
  const editorRef = useRef<any>();

  const formatCode = () => {
    editorRef.current?.getAction("editor.action.formatDocument").run();
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
    });
  }, []);

  const handleFileClick = (value: string, file: any) => {
    if (value === "selectfile") {
      setSelectedFile({ ...file });
    } else if (value === "cross") {
      if (file.id === selectedFile.id) {
        const objIndex = openFiles.findIndex(
          (obj: any) => obj.id === file.id && obj.parentId === file.parentId
        );
        if (objIndex <= 0) {
          setSelectedFile(openFiles[1]);
        } else {
          setSelectedFile(openFiles[objIndex - 1]);
        }
      }

      setOpenFiles((preveState: any) => {
        const result = preveState.filter(
          (value: any) =>
            !(value.id === file.id && value.parentId === file.parentId)
        );
        return result;
      });
    }
  };

  return (
    <div className="w-[50%] rounded-md bg-[#13161a]">
      <ul className="flex overflow-auto mb-2 rounded-t-md">
        {openFiles.map((value: any) => {
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
        defaultLanguage="javascript"
        language={language}
        value={value}
        options={{
          automaticLayout: true,
          formatOnPaste: true,
          formatOnType: true,
        }}
        onMount={(editor, monaco) => {
          if (editorRef && editorRef.current) editorRef.current = editor;
          setTimeout(() => {
            formatCode();
          }, 1000);
        }}
        theme="custom-theme"
      />
    </div>
  );
};
export default CodeEditor;
