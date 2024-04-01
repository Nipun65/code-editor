type FileType = "dir" | "file";

interface File {
  name: string;
  id: number;
  parentId: number;
  type: FileType;
  extension: string;
  isOpen?: boolean;
  isSelectedFile?: boolean;
  content?: string;
  children?: File[];
}

interface Path {
  name: string;
  path: string;
}

interface IssueDetail {
  id: string;
  issueTitle: string;
  description: string;
  remediation: string;
}

interface Issue {
  name: string;
  count: number;
  type: string;
  issues: IssueDetail[];
}

export type { File, Path, Issue, IssueDetail };
