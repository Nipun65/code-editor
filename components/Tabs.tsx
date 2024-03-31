import { twMerge } from "tailwind-merge";

interface TabsProps {
  data: any;
  className: string;
  activeTab: number;
  setActiveTab: any;
}

const Tabs: React.FC<TabsProps> = ({
  data,
  className,
  activeTab,
  setActiveTab,
}) => {
  return (
    <ul
      className={twMerge(
        "p-1 flex gap-2 w-full text-center bg-[#1E232B] rounded justify-center",
        className
      )}
    >
      {data.map((value: string, index: number) => (
        <li
          className={`${activeTab === index ? "text-white bg-[#007AFF] hover:opacity-80" : "text-[#5D677D] hover:bg-[#007AFF66] hover:text-white"} cursor-pointer px-6 py-2 rounded-md xs:text-xs lg:text-sm w-1/2 flex items-center justify-center`}
          onClick={() => setActiveTab(index)}
          key={value}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};
export default Tabs;
