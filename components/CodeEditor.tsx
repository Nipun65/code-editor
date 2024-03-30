import React, { useEffect, useRef } from "react";
import { Editor, loader, useMonaco } from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  value: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, value }) => {
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
    <div className="w-[50%]">
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
