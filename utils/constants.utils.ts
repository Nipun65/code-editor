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
    id: 1,
    parentId: 0,
    type: "dir",
    extension: "",
    isOpen: false,
    children: [
      {
        name: "layout",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        content: `const hello=()=> {\n alert('Hello world!');\n}`,
        isSelectedFile: false,
        parentId: 1,
        id: 2,
      },
      {
        name: "page",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        content: "console.log('page.tsx')",
        isSelectedFile: false,
        parentId: 1,
        id: 3,
      },
    ],
  },
  {
    name: "next.config",
    type: "file",
    extension: ".mjs",
    isOpen: false,
    content: "console.log('next.config.mjs')",
    isSelectedFile: false,
    id: 4,
    parentId: 0,
  },
  {
    name: "components",
    type: "dir",
    extension: "",
    isOpen: false,
    id: 5,
    parentId: 0,
    children: [
      {
        name: "svgs",
        type: "dir",
        extension: "",
        isOpen: false,
        id: 6,
        parentId: 5,
        children: [
          {
            name: "Arrow",
            type: "file",
            extension: ".tsx",
            isOpen: false,
            content: "console.log('Arrow.tsx')",
            isSelectedFile: false,
            id: 7,
            parentId: 6,
          },
          {
            name: "Cross",
            type: "file",
            extension: ".tsx",
            isOpen: false,
            content: "console.log('Cross.tsx')",
            isSelectedFile: false,
            id: 8,
            parentId: 6,
          },
        ],
      },
      {
        name: "Divider",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        isSelectedFile: false,
        id: 9,
        parentId: 5,
        content: "console.log('Divider.tsx')",
      },
      {
        name: "Button",
        type: "file",
        extension: ".tsx",
        isOpen: false,
        isSelectedFile: false,
        id: 10,
        parentId: 5,
        content: "console.log('Button.tsx')",
      },
    ],
  },
];

const ISSUETABS = ["Current File", "Full Project"];

const ISSUES = [
  {
    name: "Total Issues Found",
    count: 446,
    type: "total",
  },
  {
    name: "High Severity Issues",
    count: 108,
    type: "high",
  },
  {
    name: "Medium Severity Issues",
    count: 143,
    type: "medium",
  },
  {
    name: "Low Severity Issues",
    count: 0,
    type: "low",
  },
  {
    name: "Informational Issues",
    count: 68,
    type: "informational",
  },
  {
    name: "Optimisation Issues",
    count: 127,
    type: "optimisation",
  },
];

export { TABS, FILES, ISSUETABS, ISSUES };
