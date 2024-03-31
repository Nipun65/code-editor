import React, { useEffect, useRef } from "react";
import { Editor, loader } from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  value: string;
  setSelectedFile: any;
  setOpenFiles: any;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  setSelectedFile,
  setOpenFiles,
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

  return (
    <div className="w-[50%] rounded-md bg-[#13161a] p-0.5">
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        language={language}
        value={value}
        options={{
          formatOnPaste: true,
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
