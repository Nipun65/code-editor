import { twMerge } from "tailwind-merge";

interface DividerProps {
  className?: string;
}
const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={twMerge("border border-[#2b2f35]", className)} />;
};

export default Divider;
