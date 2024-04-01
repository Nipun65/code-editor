import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/BreadCrumbs";
import ProjectGroup from "@/components/ProjectGroup";

const AIAudit = () => {
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
      <ProjectGroup />
    </Layout>
  );
};
export default AIAudit;
