const TABS = [
  {
    name: "AI Audit",
    path: "/ai-audit",
  },
  {
    name: "Manual Audit",
    path: "/manual-audit",
  },

  {
    name: "RedTeam",
    path: "/red-team",
  },
  {
    name: "Monitor",
    path: "/monitor",
  },
  {
    name: "Incident Response",
    path: "/incident-response",
  },
];

const FILES = [
  {
    name: "app",
    type: "dir",
    extension: "",
    isOpen: false,
    children: [
      {
        name: "layout",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        content: "layout data",
        isSelectedFile: false,
      },
      {
        name: "page",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        content: "page",
        isSelectedFile: false,
      },
    ],
  },
  {
    name: "next.config",
    type: "file",
    extension: ".mjs",
    isOpen: false,
    content: "next config",
    isSelectedFile: false,
  },
  {
    name: "components",
    type: "dir",
    extension: "",
    isOpen: false,
    children: [
      {
        name: "svgs",
        type: "dir",
        extension: "",
        isOpen: false,
        children: [
          {
            name: "Folder",
            type: "file",
            extension: ".tsx",
            isOpen: false,
            content: "folder data",
            isSelectedFile: false,
          },
          {
            name: "File",
            type: "file",
            extension: ".tsx",
            isOpen: false,
            content: "file data",
            isSelectedFile: false,
          },
        ],
      },
      {
        name: "Divider",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        isSelectedFile: false,
      },
      {
        name: "Button",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        isSelectedFile: false,
      },
    ],
  },
];

export { TABS, FILES };
