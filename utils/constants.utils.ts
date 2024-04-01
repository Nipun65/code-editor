import { File } from "@/interfaces";

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

const FILES: File[] = [
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
        content: `const hello=()=> {\n alert('Hello world!');\n}`,
        isSelectedFile: false,
        parentId: 1,
        id: 2,
      },
      {
        name: "page",
        type: "file",
        extension: ".tsx",
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
    content: "console.log('next.config.mjs')",
    isSelectedFile: false,
    id: 4,
    parentId: 0,
  },
  {
    name: "components",
    type: "dir",
    extension: "",
    id: 5,
    parentId: 0,
    children: [
      {
        name: "svgs",
        type: "dir",
        extension: "",
        id: 6,
        parentId: 5,
        children: [
          {
            name: "Arrow",
            type: "file",
            extension: ".tsx",
            content: `console.log('Arrow.tsx')`,
            isSelectedFile: false,
            id: 7,
            parentId: 6,
          },
          {
            name: "Cross",
            type: "file",
            extension: ".tsx",
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
        isSelectedFile: false,
        id: 9,
        parentId: 5,
        content: `console.log('Divider.tsx')`,
      },
      {
        name: "Button",
        type: "file",
        extension: ".tsx",
        isSelectedFile: false,
        id: 10,
        parentId: 5,
        content: "console.log('Button.tsx')",
      },
    ],
  },
];

const ISSUETABS = ["Current File", "Full Project"];

const ISSUESDETAILS = [
  {
    issueTitle: "Lorem ipsum dolor sit ame",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    issueTitle: "Lorem ipsum dolor sit ame",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    issueTitle: "Lorem ipsum dolor sit pole amet sit sit amet orem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    issueTitle: "Lorem ipsum dolor sit ame",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    issueTitle: "Lorem ipsum dolor sit pole amet sit sit amet orem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    issueTitle: "Lorem ipsum dolor sit pole amet sit sit amet orem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
];

const ISSUES = [
  {
    id: "a1b2c3d",
    name: "Total Issues Found",
    count: 446,
    type: "total",
    issues: ISSUESDETAILS,
  },
  {
    id: "e4f5g6h",
    name: "High Severity Issues",
    count: 108,
    type: "high",
    issues: ISSUESDETAILS,
  },
  {
    id: "i7j8k9l",
    name: "Medium Severity Issues",
    count: 143,
    type: "medium",
    issues: ISSUESDETAILS,
  },
  {
    id: "m1n2o3p",
    name: "Low Severity Issues",
    count: 0,
    type: "low",
    issues: [],
  },
  {
    id: "q4r5s6t",
    name: "Informational Issues",
    count: 68,
    type: "informational",
    issues: ISSUESDETAILS,
  },
  {
    id: "u7v8w9x",
    name: "Optimisation Issues",
    count: 127,
    type: "optimisation",
    issues: ISSUESDETAILS,
  },
];

const ISSUECOLORS: { [key: string]: string } = {
  total: "bg-[#5481FE]",
  high: "bg-[#FF4D4D]",
  medium: "bg-[#FFD166]",
  low: "bg-[#06D6A0]",
  informational: "bg-[#E568FF]",
  optimisation: "bg-[#66E3F4]",
};

export { TABS, FILES, ISSUETABS, ISSUES, ISSUESDETAILS, ISSUECOLORS };
