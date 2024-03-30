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
    isOpen: true,
    children: [
      {
        name: "layout",
        type: "file",
        extension: ".tsx",
        isOpen: false,
      },
      {
        name: "page",
        type: "file",
        extension: ".tsx",
        isOpen: false,
      },
    ],
  },
  {
    name: "next.config",
    type: "file",
    extension: ".mjs",
    isOpen: false,
  },
  {
    name: "components",
    type: "dir",
    extension: "",
    isOpen: false,
    children: [
      {
        name: "Divider",
        type: "file",
        extension: ".tsx",
        isOpen: false,
      },
      {
        name: "Button",
        type: "file",
        extension: ".tsx",
        isOpen: false,
      },
    ],
  },
];

export { TABS, FILES };
