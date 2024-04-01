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
        extension: ".ts",
        content: `
        export interface LayoutOptions {
          title?: string;
          centered?: boolean;
          header?: string;
          footer?: string;
        }
    
        export function createLayout(content: string, options: LayoutOptions = {}): string {
          const { title, centered, header, footer } = options;
          let layout = \`<div class="\${centered ? 'layout layout--centered' : 'layout'}">\`;
    
          if (title) {
            layout += \`<h1 class="layout__title">\${title}</h1>\`;
          }
    
          if (header) {
            layout += \`<header class="layout__header">\${header}</header>\`;
          }
    
          layout += \`<main class="layout__main">\${content}</main>\`;
    
          if (footer) {
            layout += \`<footer class="layout__footer">\${footer}</footer>\`;
          }
    
          layout += \`</div>\`;
          return layout;
        }
    
        export function createContainer(content: string): string {
          return \`<div class="container">\${content}</div>\`;
        }
      `,
        isSelectedFile: false,
        parentId: 1,
        id: 2,
      },
      {
        name: "page",
        type: "file",
        extension: ".ts",
        content: `const promise = new Promise<string>((resolve, reject) => {
          setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
              resolve('Success!');
            } else {
              reject('Failure!');
            }
          }, 2000);
        });
        
        promise
          .then(result => console.log(result))
          .catch(error => console.error(error));`,
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
    content: `const nextConfig = {}; \n
    export default nextConfig;
    `,
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
        name: "utils",
        type: "dir",
        extension: "",
        id: 6,
        parentId: 5,
        children: [
          {
            name: "helpers",
            type: "file",
            extension: ".ts",
            content: `const add = (a: number, b: number): number => a + b;
            const square = (x: number): number => x * x;
            const greet = (name: string): string => \`\Hello, \${name}!\`;
            const isEven = (num: number): boolean => num % 2 === 0;
            const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);
            
            export { add, square, greet, isEven, capitalize };`,
            isSelectedFile: false,
            id: 7,
            parentId: 6,
          },
          {
            name: "constants",
            type: "file",
            extension: ".ts",
            content: `const PI = 3.14159;
            const GREETING = "Hello";
            const MAX_ATTEMPTS = 5;
            const COLORS = ["red", "green", "blue"];
            export { PI, GREETING, MAX_ATTEMPTS, COLORS };`,
            isSelectedFile: false,
            id: 8,
            parentId: 6,
          },
        ],
      },
      {
        name: "Person",
        type: "file",
        extension: ".ts",
        isSelectedFile: false,
        id: 9,
        parentId: 5,
        content: `interface Person {
          name: string;
          age: number;
          isStudent: boolean;
        }
        
        const person1: Person = {
          name: 'John Doe',
          age: 25,
          isStudent: false,
        };
        
        function greetPerson(person: Person): string {
          return \`Hello, \${person.name}!\`;
        }
        
        console.log(greetPerson(person1));`,
      },
      {
        name: "Book",
        type: "file",
        extension: ".ts",
        isSelectedFile: false,
        id: 10,
        parentId: 5,
        content: `
        interface Book {
          title: string;
          author: string;
          published: number;
          available: boolean;
        }
        
        const books: Book[] = [
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            published: 1925,
            available: true,
          },
          {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            published: 1960,
            available: false,
          },
          {
            title: '1984',
            author: 'George Orwell',
            published: 1949,
            available: true,
          },
        ];
        
        function findAvailableBooks(bookList: Book[]): Book[] {
          return bookList.filter((book) => book.available);
        }
        
        function createBook(title: string, author: string, published: number, available: boolean): Book
        {
          return { title, author, published, available };
        }
        
        books.push(createBook('The Story Book', 'Author', 1932, true));

        console.log('Available Books:');
        const availableBooks = findAvailableBooks(books);
        availableBooks.forEach((book) => {
          console.log(\`Title: \${book.title}, Author: \${book.author}\`);
        });`,
      },
    ],
  },
];

const ISSUETABS = ["Current File", "Full Project"];

const ISSUESDETAILS = [
  {
    id: "zjupz8uq",
    issueTitle: "Lorem ipsum dolor sit ame",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    id: "mh3l44yy",
    issueTitle: "Lorem ipsum dolor sit ame",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    id: "moie4ssf",
    issueTitle: "Lorem ipsum dolor sit pole amet sit sit amet orem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    id: "k6iatb4b",
    issueTitle: "Lorem ipsum dolor sit ame",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    id: "j08tbh8x",
    issueTitle: "Lorem ipsum dolor sit pole amet sit sit amet orem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
    remediation:
      "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
  },
  {
    id: "ynxsgwnw",
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
  total: "bg-blueberry-500",
  high: "bg-scarletred-500",
  medium: "bg-crayola-500",
  low: "bg-caribbeangreen-500",
  informational: "bg-heliotrope-500",
  optimisation: "bg-skyblue-500",
};

export { TABS, FILES, ISSUETABS, ISSUES, ISSUESDETAILS, ISSUECOLORS };
