"use client";

import Layout from "@/components/Layout";
import { usePathname } from "next/navigation";
import BreadCrumbs from "@/components/BreadCrumbs";
import ProjectGroup from "@/components/ProjectGroup";
import CodeEditor from "@/components/CodeEditor";
import FileTree from "@/components/FileTree";

const AIAudit = () => {
  const path = usePathname();

  const BreadCrumbsData = [
    {
      name: "AI Audit",
      path: "/ai-audit",
    },
    {
      name: "My Projects",
      path: "/ai-audit",
    },
    {
      name: "Code Editor",
      path: "/",
    },
  ];
  return (
    <Layout>
      <BreadCrumbs data={BreadCrumbsData} />
      <div>
        <ProjectGroup />
      </div>
    </Layout>
  );
};
export default AIAudit;
